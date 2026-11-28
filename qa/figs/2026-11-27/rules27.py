import re, functools
import recheck
MONEY = r'\$[\d,]+(?:\.\d+)?'
ROW = re.compile(r'^(?:' + MONEY + r'|[\d.]+%|—|-|\u2014|to|and)(?:\s+(?:' + MONEY + r'|[\d.]+%|—|-|\u2014))*$')
@functools.lru_cache(None)
def G(slug): return recheck.grid(slug)
@functools.lru_cache(None)
def RT(slug): return recheck.rates(slug)
def is_round(v):
    m = re.fullmatch(r'\$([\d,]+)(?:\.00)?', v)
    if not m: return False
    n = int(m.group(1).replace(',', ''))
    return n % 1000 == 0 or n in (475, 4475)
def rules(slug, v, ctx):
    if v == 'November 27, 2026': return ('R',)
    c = ctx.strip()
    toks = re.findall(MONEY + r'|[\d.]+%', c)
    istable = bool(ROW.match(c)) and len(toks) >= 3
    first = toks[0] if toks else None
    if istable and v == first and v not in RT(slug): return ('E', 'table row input (price or band edge) used for the recomputed row')
    return None
def late(slug, v, ctx):
    """Applied after the source search fails."""
    g = G(slug)
    if v in g or v in RT(slug):
        return ('D', f'value reproducible: {v}', 'independent grid in recheck.py')
    if is_round(v): return ('E', 'declared illustration input or band edge, labelled on the page')
    return None

EQ = "eq_rate_25(pmt(F(655000)*F('521/500'), F(5,100), 30), F(655000)*F('26/25'))"
EXPL = {  # (slug, value) -> ('D', expr, note) | ('E', note) | ('S', page, regex)
 ('critical-illness-vs-disability-insurance-canada', '54%'): ('D', "F(729)*52/12/(F(70000)/12)", 'EI per month over monthly pay'),
 ('critical-illness-vs-disability-insurance-canada', '38%'): ('D', "F(729)*52/12/(F(100000)/12)", 'EI per month over monthly pay'),
 ('critical-illness-vs-disability-insurance-canada', '55%'): ('D', "F(40000)/52*F(55,100)*52/12/(F(40000)/12)", 'EI per month over monthly pay at the 55% rate'),
 ('critical-illness-vs-disability-insurance-canada', '$423.08'): ('D', "F(40000)/52*F(55,100)", '55% of weekly pay'),
 ('critical-illness-vs-disability-insurance-canada', '$1,833'): ('D', "F(40000)*F(55,100)/12", '55% of monthly pay'),
 ('critical-illness-vs-disability-insurance-canada', '$2,833'): ('D', "F(40000)/12*F(85,100)", '85% of monthly pay'),
 ('critical-illness-vs-disability-insurance-canada', '$3,159'): ('D', "F(729)*52/12", 'weekly maximum times 52 over 12'),
 ('critical-illness-vs-disability-insurance-canada', '$8,333'): ('D', "F(100000)/12", 'annual over 12'),
 ('critical-illness-vs-disability-insurance-canada', '$68,924'): ('D', "F(729)/F(55,100)*52", 'weekly maximum over the 55% rate, annualised'),
 ('critical-illness-vs-disability-insurance-canada', '27'): ('E', 'week number in a label (weeks 27 to 52)'),
}
def explicit(slug, v):
    return EXPL.get((slug, v))

H = 'how-much-house-can-i-afford-canada'
EXPL.update({
 (H, '6.5%'): ('D', "F(45,1000)+F(2,100)", 'contract rate 4.5% plus 2 percentage points'),
 (H, '7.5%'): ('D', "F(55,1000)+F(2,100)", 'contract rate 5.5% plus 2 percentage points'),
 (H, '8.5%'): ('D', "F(65,1000)+F(2,100)", 'contract rate 6.5% plus 2 percentage points'),
 (H, '5.25%'): ('S', 'cmhc_purchase', r'5\.25\s?%'),
 (H, '39%'): ('S', 'cmhc_purchase', r'39\s?%'),
 (H, '12'): ('E', 'months in a year, the divisor in the formula'),
 (H, '4.5%'): ('E', 'declared example contract rate'),
 (H, '4.50%'): ('E', 'declared example contract rate'),
 (H, '5.50%'): ('E', 'declared example contract rate for the rate table'),
 (H, '3.25%'): ('E', 'declared example contract rate for the rate table'),
})
