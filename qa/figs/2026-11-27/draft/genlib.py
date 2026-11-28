from decimal import Decimal as Dc
import re
def m(v, cents=False):
    v = Dc(v)
    if cents or v != v.to_integral_value():
        return '${:,.2f}'.format(v)
    return '${:,.0f}'.format(v)
def pc(x):
    s = ('%.4f' % (float(x) * 100)).rstrip('0').rstrip('.')
    return s + '%'
def table(caption, heads, rows, hl=None):
    out = ['    <div class="table-wrapper">', '        <table>', f'            <caption>{caption}</caption>',
           '            <thead><tr>' + ''.join(f'<th>{h}</th>' for h in heads) + '</tr></thead>', '            <tbody>']
    for i, r in enumerate(rows):
        cls = ' class="highlight-row"' if hl is not None and i == hl else ''
        out.append(f'                <tr{cls}>' + ''.join(f'<td>{c}</td>' for c in r) + '</tr>')
    out += ['            </tbody>', '        </table>', '    </div>']
    return '\n'.join(out)
def ts(slug, varname, hubvar_line, consts, disclaimer, content, cat, catslug, sub, title, excerpt):
    esc = lambda s: s.replace('\\', '\\\\').replace('`', '\\`')
    return f"""import {{ batchFooter, batchPost }} from './types';

const D = '2026-11-27';
const HUB = '{hubvar_line}';
{consts}
const disclaimer = `{esc(disclaimer)}`;

const content = `{esc(content).replace('@HUB@','${HUB}').replace('@ON@','${ON}').replace('@TO@','${TO}').replace('@BC@','${BC}').replace('@QC@','${QC}').replace('@FIN@','${FIN}').replace('@CMHC@','${CMHC}').replace('@FC@','${FC}').replace('@CA@','${CA}')}`;

export const {varname} = batchPost({{
  date: D,
  category: '{cat}',
  categorySlug: '{catslug}',
  subcategory: '{sub}',
  slug: '{slug}',
  title: '{title}',
  excerpt:
    '{excerpt}',
  content,
}});
"""
