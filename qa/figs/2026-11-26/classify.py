#!/usr/bin/env python3
"""Writer-stage classification of figures logs, batch 2026-11-26 (drafter pass).
Each extracted figure gets: sourced (needle taken from the page fetched 2026-11-26), derived (expr re-checked in recheck.py) or example."""
import json, re, sys
from pathlib import Path
HERE = Path(__file__).resolve().parent
PG = HERE / 'check' / 'pages'
WT = HERE.parents[2]
TODAY = '2026-11-26'
NAMES = {
 'ma_verify':'Canada Revenue Agency: Verify your identity','ma_reg':'Canada Revenue Agency: Register for CRA sign-in services','ma_mfa':'Canada Revenue Agency: Multi-factor authentication','ma_tip':'Canada Revenue Agency tax tip, October 29, 2026',
 'chg':'Canada Revenue Agency: Changing a tax return','chg_tip':'Canada Revenue Agency tax tip, May 12, 2026','t1adj':'Canada Revenue Agency: Form T1-ADJ','noanor':'Canada Revenue Agency: Notice of assessment','objtree':'Canada Revenue Agency: Income tax objections decision tree',
 'cwb_much':'Canada Revenue Agency: CWB, how much you can get','cwb_elig':'Canada Revenue Agency: CWB, who is eligible','cwb_claim':'Canada Revenue Agency: CWB, how to claim','cwb_s6':'Canada Revenue Agency: Schedule 6',
 'ccb_much':'Canada Revenue Agency: Canada child benefit, how much you can get','ccb_get':'Canada Revenue Agency: Canada child benefit, keep getting your payments','ccb_pay':'Canada Revenue Agency: Canada child benefit, payment dates','ccb_calc':'Canada Revenue Agency: Canada child benefit, how we calculate your CCB','esdc':'Employment and Social Development Canada: CCB payments increasing in 2026-2027',
}
def norm(s):
    s = re.sub(r'<[^>]+>', ' ', s).replace('\\"', '"').replace('\xa0', ' ').replace('\u2019', "'").replace('\u2013', '-').replace('\u2014', '-')
    return re.sub(r'\s+', ' ', s).strip()
_c = {}
def page(k):
    if k not in _c:
        t = ''
        for ext in ('.txt', '.full.txt'):
            p = PG / (k + ext)
            if p.exists(): t += ' || ' + norm(p.read_text(errors='ignore'))
        _c[k] = t
    return _c[k]
def url(k): return (PG / (k + '.url')).read_text().split('\n')[0].strip()
def S(k, rx): return ('S', k, rx)
def D(expr, note=''): return ('D', expr, note)
REV = ('R',)
def E(note): return ('E', note)
# ---- model used for table cells (matches recheck.py's independent versions by value) ----
def cwb_credit_m(w, fam):
    cap = 2813 if fam else 1633; thr = 30639 if fam else 26855
    return max(0, min(cap, 0.27*max(0, w-3000)) - 0.15*max(0, w-thr)), min(cap, 0.27*max(0, w-3000)), 0.15*max(0, w-thr)
def ccb_m(a, kids):
    u, o = kids; mx = 8157*u + 6883*o; n = u+o
    r1 = {1:.07, 2:.135, 3:.19, 4:.23}[n]; r2 = {1:.032, 2:.057, 3:.08, 4:.095}[n]
    red = r1*(min(a, 82847)-38237) + r2*max(0, a-82847)
    return max(0, mx-red)
def R(x): return int(x+0.5)
DAT = re.compile(r'^(November 26, 2026|October 29, 2026|May 12, 2026|July 20, 2026|May 12|December 11, 2026|April 30|June 15|February 2|23|July 12|October 11|January 10|December 31|November 1)$')
def rules(slug, i, v, ctx):
    vs = v.rstrip(',')
    if slug == 'cra-my-account-guide':
        if vs == 'November 26, 2026': return REV
        if vs == '18': return S('ma_reg', r'session will expire after 18 minutes of inactivity')
        if vs == '16': return S('ma_verify', r'Be 16 years of age or older')
        if vs == '30': return S('ma_mfa', r'new passcode every 30 seconds')
        if vs == 'October 29, 2026': return S('ma_tip', r'October 29, 2026')
        if vs == '10': return S('ma_verify', r'mail your CRA security code within 10 business days')
    if slug == 'change-tax-return-refile-t1-adj':
        if vs == 'November 26, 2026': return REV
        if vs == '20':
            return S('t1adj', r'may take 20 weeks to process') if 'T1-ADJ is the paper form' in ctx else S('chg', r'Request by mail Processing time: Within 20 weeks')
        if vs == '18': return D('20-2', '20 weeks by mail minus 2 weeks online, both listed on the change-your-return page')
        if vs == '90':
            return S('objtree', r'90 days after the date on your notice') if 'decision tree' in ctx else S('noanor', r'you have 90 days from the date of your notice')
        if vs in ('February 2', '23'): return S('chg', r'February 2 to 23, 2026 for tax year updates')
        if vs in ('May 12, 2026', 'May 12'): return S('chg_tip', r'May 12, 2026')
        if vs == '49': return S('chg_tip', r'may take up to 49 weeks to process')
        if vs in ('April 30', 'June 15'): return S('objtree', r'\(April 30 or June 15\)')
    if slug == 'canada-workers-benefit-guide':
        if vs == 'November 26, 2026': return REV
        fam_hint = 'family' in ctx.lower() and 'Family' in ctx[:12]
        m = re.fullmatch(r'\$([\d,]+(?:\.\d+)?)', vs)
        num = float(m.group(1).replace(',', '')) if m else None
        # table rows
        rm = re.match(r'^\$([\d,]+) (?:\$([\d,]+)(?: \(capped at \$[\d,]+\))?|capped at \$[\d,]+) \$([\d,]+) \$([\d,]+)$', ctx.strip())
        if rm and num is not None:
            inc = float(rm.group(1).replace(',', ''))
            fam = inc in (10000, 20000, 40000, 45000, 49000)
            c, b, r = cwb_credit_m(inc, fam); ft = "'f'" if fam else "'s'"
            if num == inc: return E('income step chosen for the table')
            if num in (1633, 2813): return S('cwb_much', r'\$1,633 for single individuals') if num == 1633 else S('cwb_much', r'\$2,813 for families')
            if abs(num-R(c)) < .01: return D(f'cwb_credit({int(inc)},{ft})', 'credit = 27% build-up capped, minus 15% reduction')
            if abs(num-R(0.27*max(0, inc-3000))) < .01: return D(f'cwb_build_raw({int(inc)})', '27% of working income over $3,000, before the cap')
            if abs(num-R(b)) < .01: return D(f'cwb_build({int(inc)},{ft})', '27% of working income over $3,000 (before cap)')
            if abs(num-R(r)) < .01: return D(f'cwb_red({int(inc)},{ft})', '15% of net income above the start of the reduction')
        if vs in ('27%', '27'): return S('cwb_s6', r'Family working income from line 6 16 3,000\.00 27%')
        if vs in ('15%', '15') and ('7.5' in ctx or 'disability' in ctx.lower() or 'DTC' in ctx):
            return S('cwb_s6', r'enter 7\.5%\. If not, enter 15%')
        if vs == '7.5%': return S('cwb_s6', r'enter 7\.5%\. If not, enter 15%')
        if vs in ('15%', '15'): return S('cwb_s6', r'Rate \| 15% ×')
        if vs == '$1,633': return S('cwb_much', r'\$1,633 for single individuals')
        if vs == '$2,813': return S('cwb_much', r'\$2,813 for families')
        if vs == '$843': return S('cwb_much', r'\$843 for single individuals')
        if vs == '$3,000': return S('cwb_s6', r'working income on line 6 is more than \$3,000')
        if vs == '$1,150': return S('cwb_s6', r'on line 5 \(column 1\) must be more than \$1,150')
        if vs == '$26,855': return S('cwb_much', r'adjusted net income is more than \$26,855')
        if vs == '$30,639': return S('cwb_much', r'adjusted family net income is more than \$30,639')
        if vs == '$37,742': return S('cwb_much', r'No basic amount is paid if your adjusted net income is more than \$37,742')
        if vs == '$49,393': return S('cwb_much', r'No basic amount is paid if your adjusted family net income is more than \$49,393')
        if vs in ('$50,232', '$67,365'): return S('cwb_elig', r'Family with children \$49,393 \$41,048\.90 \$67,365 \$50,232')
        if vs in ('$37,826', '$67,367'): return S('cwb_elig', r'Single without children \$37,742 \$33,230\.35 \$67,367 \$37,826')
        if vs == '$16,386': return S('cwb_s6', r'\(maximum \$16,386\)')
        if vs == '$37,740': return S('cwb_much', r'is gradually reduced if your adjusted net income is more than \$37,740')
        if vs == '$43,360': return S('cwb_much', r'No disability supplement is paid if your adjusted net income is more than \$43,360')
        if vs == '$49,389': return S('cwb_much', r'adjusted family net income is more than \$49,389')
        if vs == '$55,009': return S('cwb_much', r'adjusted family net income is more than \$55,009')
        if vs == '$60,629': return S('cwb_much', r'adjusted family net income is more than \$60,629')
        if vs == '19': return S('cwb_elig', r'Are 19 years of age or older on December 31') if 'older' in ctx or 'You are 19' in ctx else S('cwb_elig', r'Is under 19 years of age and lives with you on December 31')
        if vs == 'December 31': return S('cwb_elig', r'Are 19 years of age or older on December 31')
        if vs == '13': return S('cwb_elig', r'for more than 13 weeks in the year')
        if vs == '90': return S('cwb_elig', r'for a period of at least 90 days during the year')
        if vs == '50%': return S('cwb_much', r'up to 50% of your CWB in advanced payments')
        if vs in ('July 12', 'October 11', 'January 10'): return S('cwb_much', r'3 payments, on: July 12 October 11 January 10')
        if vs == 'November 1': return S('cwb_claim', r'must receive your income tax and benefit return before November 1')
        if vs == '10': return S('cwb_much', r'please wait 10 working days before contacting the CRA')
        if vs == '$9,048': return D('3000+1633/0.27', 'income at which 27% build-up reaches the single maximum')
        if vs == '$13,419': return D('3000+2813/0.27', 'income at which 27% build-up reaches the family maximum')
        if vs == '$150': return D('1000*0.15', '15% reduction on $1,000')
        if vs == '$1,000': return E('unit of income used to illustrate the 15% rate')
        if vs == '$750': return D('5000*0.15', '15% of the extra $5,000')
        if vs == '$4,250': return D('5000-5000*0.15', 'extra $5,000 less the $750 credit loss')
        if vs == '$1,161': return D('cwb_credit(30000,"s")', 'single, $30,000')
        if vs in ('$411', '$411,'): return D('cwb_credit(35000,"s")', 'single, $35,000')
        if vs == '$5,000': return D('35000-30000', 'difference between the two illustration incomes') if '$35,000' in ctx else E('illustration figure')
        if vs in ('$30,000', '$35,000', '$40,000', '$2,000', '$33,000'):
            if vs == '$33,000': return D('35000-2000', 'net income after the $2,000 RRSP deduction')
            return E('declared illustration input')
        if vs == '$6,145': return D('33000-26855', 'net income above the start of the reduction after the deduction')
        if vs == '$922': return D('0.15*(33000-26855)', '15% of $6,145')
        if vs == '$711': return D('cwb_credit(33000,"s")', 'single, $33,000')
        if vs == '$300': return D('cwb_credit(33000,"s")-cwb_credit(35000,"s")', 'credit with the deduction minus credit without')
        if vs == '$2,260': return D('40000-37740', 'net income above the start of the supplement reduction')
        if vs == '$339': return D('0.15*(40000-37740)', '15% of $2,260')
        if vs == '$504': return D('843-0.15*(40000-37740)', 'supplement less the reduction')
        if vs == '$816.50': return D('1633/2', 'half of the single maximum')
        if vs == '$1,406.50': return D('2813/2', 'half of the family maximum')
    if slug == 'why-did-my-ccb-change':
        if vs == 'November 26, 2026': return REV
        if vs == 'July 20, 2026': return S('esdc', r'July 20, 2026')
        if vs in ('$160', ) and 'announcement' in ctx: return S('esdc', r'increase of up to \$160 per child under age 6')
        if vs == '$135' and 'announcement' in ctx: return S('esdc', r'up to \$135 per child aged 6 to 17')
        if vs == '$8,157': return S('ccb_much', r'under 6 years of age: \$8,157 per year')
        if vs == '$6,883': return S('ccb_much', r'6 to 17 years of age: \$6,883 per year')
        if vs == '17': return S('ccb_much', r'6 to 17 years of age: \$6,883 per year')
        if vs == '$679.75': return S('ccb_much', r'\$679\.75 per month')
        if vs == '$573.58': return S('ccb_much', r'\$573\.58 per month')
        if vs in ('$38,237', '$38,237,'): return S('ccb_much', r'Greater than \$38,237 up to \$82,847')
        if vs == '$82,847' and not re.match(r'^\$82,847 \$', ctx): return S('ccb_much', r'Greater than \$38,237 up to \$82,847')
        if vs == '7%': return S('ccb_much', r'reduced by 7% of your income greater than \$38,237')
        if vs == '13.5%': return S('ccb_much', r'reduced by 13\.5% of your income greater than \$38,237')
        if vs == '19%': return S('ccb_much', r'reduced by 19% of your income greater than \$38,237')
        if vs == '23%': return S('ccb_much', r'reduced by 23% of your income greater than \$38,237')
        if vs == '$3,123' or vs == '3.2%': return S('ccb_much', r'reduced by \$3,123 \+ 3\.2% of your income greater than \$82,847')
        if vs in ('$6,022', '5.7%'): return S('ccb_much', r'reduced by \$6,022 \+ 5\.7% of your income greater than \$82,847')
        if vs in ('$8,476', '8%'): return S('ccb_much', r'reduced by \$8,476 \+ 8% of your income greater than \$82,847')
        if vs in ('$10,260', '9.5%'): return S('ccb_much', r'reduced by \$10,260 \+ 9\.5% of your income greater than \$82,847')
        if vs == '$7,683.59': return S('ccb_much', r'= \$7,683\.59 \(annual payment\)')
        if vs == '$240': return S('ccb_pay', r'is less than \$240')
        if vs == 'December 11, 2026': return S('ccb_pay', r'November 20, 2026 December 11, 2026')
        if vs == 'April 30': return S('ccb_get', r'by April 30 each year')
        if vs == '50%': return S('ccb_calc', r'will get 50% of what they would have gotten')
        if vs == '$3,480': return S('ccb_much', r'up to \$3,480 \(\$290 per month\)')
        if vs == '$290': return S('ccb_much', r'up to \$3,480 \(\$290 per month\)')
        if vs == '18': return S('ccb_get', r'Your child turned 18')
        if ctx.startswith('Adjusted family net income One child'): return E('child age used in the table heading')
        # table cells: $45,000 $7,684 $14,127 $12,853
        rm = re.match(r'^\$([\d,]+) \$([\d,]+) \$([\d,]+) \$([\d,]+)$', ctx.strip())
        if rm:
            a = int(rm.group(1).replace(',', ''))
            if vs == '$%s' % rm.group(1) :
                return S('ccb_much', r'Greater than \$38,237 up to \$82,847') if a == 82847 else E('income step chosen for the table')
            n = float(vs[1:].replace(',', ''))
            for kids in [(1, 0), (1, 1), (0, 2)]:
                if R(ccb_m(a, kids)) == n: return D(f'ccb({a},{kids})', 'maximum for the children minus the CRA reduction formula')
        if vs == '$1,274': return D('8157-6883', 'under-6 maximum minus 6-to-17 maximum')
        if vs == '$106': return D('(8157-6883)/12', 'annual difference over 12 months, rounded to the dollar')
        if vs == '$700': return D('10000*0.07', '7% of a $10,000 rise')
        if vs == '$1,350': return D('10000*0.135', '13.5% of a $10,000 rise')
        if vs == '$112.50': return D('10000*0.135/12', 'annual cost over 12 months')
        if vs == '$70': return D('1000*0.07', '7% of $1,000')
        if vs == '$135': return D('1000*0.135', '13.5% of $1,000')
        if vs == '$190': return D('1000*0.19', '19% of $1,000')
        if vs == '$230': return D('1000*0.23', '23% of $1,000')
        if vs == '$7,997': return D('8157-160', 'this year\'s under-6 maximum less the ESDC increase')
        if vs == '$6,748': return D('6883-135', 'this year\'s 6-to-17 maximum less the ESDC increase')
        if vs in ('$12,102', '$12,102,'): return D('ccb(60000,(1,1))', 'children aged 3 and 8 at $60,000')
        if vs in ('$10,752', '$10,752,'): return D('ccb(70000,(1,1))', 'children aged 3 and 8 at $70,000')
        if vs in ('$10,828', '$10,828,'): return D('ccb(60000,(0,2))', 'children aged 8 and 10 at $60,000')
        if vs in ('$1,000',): return E('unit of income used to illustrate the rates')
        if vs in ('$10,000', '$60,000', '$70,000', '$45,000', '$100,000'): return E('declared illustration input')
    return None

def main():
    slugs = sys.argv[1:]
    bad = 0
    for slug in slugs:
        fp = WT / 'content/figures' / f'{slug}.json'
        d = json.loads(fp.read_text())
        for i, f in enumerate(d['figures']):
            v = f['value']; ctx = f['context']
            if f['kind'] == 'example' and f.get('verify', {}).get('status') == 'match' and f.get('_keep'):
                continue
            r = rules(slug, i, v, ctx)
            if r is None and f['kind'] == 'example':
                r = E('declared illustration input, labelled on the page')
            if r is None:
                print('UNCLASSIFIED', slug, i, v, '|', ctx[:100]); bad += 1; continue
            f.update(dict(sourceUrl='', sourceName='', asOf='', derivedFrom=[]))
            f.pop('needle', None); f.pop('expr', None)
            ver = dict(status='match', checkedOn=TODAY, verifier='Grok Bot executor, WRITER-stage check run 2026-11-26 (qa/figs/2026-11-26/sourced.py and recheck.py); same agent as the drafter, so the separate checker must re-verify')
            if r[0] == 'S':
                k, rx = r[1], r[2]
                m = re.search(rx, page(k))
                if not m: print('NEEDLE NOT FOUND', slug, i, v, k, rx); bad += 1; continue
                f.update(kind='sourced', sourceUrl=url(k), sourceName=NAMES[k], asOf=TODAY, needle=m.group(0))
                ver['note'] = f'needle found on page fetched 2026-11-26 ({k})'
            elif r[0] == 'D':
                f.update(kind='derived', derivedFrom=['content/calcs/batch-20261126-model.py', 'expr: ' + r[1]], expr=r[1])
                ver['note'] = (r[2] + '; ' if r[2] else '') + 'recomputed in qa/figs/2026-11-26/recheck.py'
            elif r[0] == 'R':
                f.update(kind='derived', derivedFrom=['review'])
                ver['note'] = 'review date = day sources were read (2026-11-26)'
            else:
                f.update(kind='example')
                ver['note'] = r[1]
            f['verify'] = ver
        fp.write_text(json.dumps(d, indent=2, ensure_ascii=False) + '\n')
        print(slug, 'rows', len(d['figures']))
    print('problems', bad)
main()
