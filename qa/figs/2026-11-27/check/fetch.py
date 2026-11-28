import re,sys,json,os
from playwright.sync_api import sync_playwright
# usage: fetch.py key=url ...
jobs=[a.split('=',1) for a in sys.argv[1:]]
with sync_playwright() as p:
    b=p.chromium.launch(executable_path='/usr/bin/google-chrome',args=['--no-sandbox','--disable-blink-features=AutomationControlled'])
    ctx=b.new_context(locale='en-CA',viewport={'width':1400,'height':3000},user_agent='Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36')
    for k,u in jobs:
        pg=ctx.new_page()
        try:
            r=pg.goto(u,wait_until='domcontentloaded',timeout=60000); pg.wait_for_timeout(9000)
            # expand accordions / details
            try:
                pg.evaluate("""()=>{document.querySelectorAll('details').forEach(d=>d.open=true);
                document.querySelectorAll('main button[aria-expanded="false"], [role=main] button[aria-expanded="false"]').forEach(e=>{if(!e.closest('header,nav')){try{e.click()}catch(x){}}});}""")
                pg.wait_for_timeout(2500)
                if pg.url.split('#')[0]!=u.split('#')[0] and 'redirect' not in k: print('  nav-changed',pg.url)
            except Exception: pass
            t=pg.evaluate("()=>document.body.innerText").replace('\xa0',' ')
            # also hidden text (textContent) to catch collapsed footnotes
            tc=pg.evaluate("()=>document.body.textContent").replace('\xa0',' ')
            open(f'pages/{k}.txt','w').write(t)
            open(f'pages/{k}.full.txt','w').write(re.sub(r'\s+',' ',tc))
            open(f'pages/{k}.url','w').write(f'{u}\n{pg.url}\n{r.status if r else None}\n')
            print(k, r.status if r else None, pg.url, len(t))
        except Exception as e:
            print(k,'ERR',str(e)[:150])
        pg.close()
    b.close()
