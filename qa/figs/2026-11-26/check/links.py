import sys,re
from playwright.sync_api import sync_playwright
with sync_playwright() as p:
    b=p.chromium.launch(executable_path='/usr/bin/google-chrome',args=['--no-sandbox'])
    ctx=b.new_context(locale='en-CA',user_agent='Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36')
    for u in sys.argv[1:]:
        pg=ctx.new_page(); pg.goto(u,wait_until='domcontentloaded',timeout=60000); pg.wait_for_timeout(4000)
        print('##',u,pg.url)
        for t,h in pg.evaluate("()=>[...document.querySelectorAll('main a, #wb-cont ~ * a')].map(a=>[a.innerText.trim().slice(0,70),a.href])"):
            if 'canada.ca' in h and t: print(t,'|',h)
        pg.close()
    b.close()
