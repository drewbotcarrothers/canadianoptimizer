import type { PostVideoFields } from '../lib/post-video';
import { oct2026RetirementPosts } from './oct2026/retirement';

type RetirementPost = {
  title: string;
  slug: string;
  category: string;
  categorySlug: string;
  author: string;
  date: string;
  updated: string;
  excerpt: string;
  image: string;
  content: string;
} & PostVideoFields;

const meta = {
  category: 'Retirement',
  categorySlug: 'retirement',
  author: 'Andrew',
  date: '2026-10-03',
  updated: '2026-10-03',
} as const;

function retirementPost(
  slug: string,
  title: string,
  excerpt: string,
  content: string
): RetirementPost {
  return {
    ...meta,
    title,
    slug,
    excerpt,
    image: `/images/blog/${slug}.png`,
    content,
  };
}

const published = 'October 3, 2026';

const footer = `<div class="article-footer">
        <p><strong>Disclaimer:</strong> This is general education about Canadian retirement accounts, pensions, and estates as of October 2026. It is not tax, pension, annuity, or legal advice. RRIF factors, benefit amounts, unlocking rules, and probate fees change, and they depend on the contract and the province that governs it. Figures below are tied to CRA, Canada.ca, OSFI, FSRA, or a provincial page reviewed on October 3, 2026. Dollar examples are arithmetic on those figures, not a quote of your minimum, your pension, or your estate bill. Confirm the current page, your carrier’s calculation, and your plan statement before you convert, unlock, or file.</p>
        <div class="footer-note">Published: ${published} | Category: Retirement | Author: Andrew</div>
    </div>`;

function footerWithUpdate(updatedLabel: string): string {
  const extra = ` Provincial rules were taken from each regulator’s public page or 2026 form on ${updatedLabel}.`;
  return footer
    .replace(
      `Published: ${published} | Category: Retirement | Author: Andrew`,
      `Published: ${published} | Updated: ${updatedLabel} | Category: Retirement | Author: Andrew`,
    )
    .replace(
      'before you convert, unlock, or file.</p>',
      `before you convert, unlock, or file.${extra}</p>`,
    );
}

export const retirementClusterPosts: RetirementPost[] = [
  {
    ...retirementPost(
    'rrif-minimum-withdrawal',
    'RRIF Minimum Withdrawals 2026: Table and Strategy',
    'RRIF minimum withdrawal table for 2026: 5.28% at 71 to 20% at 95+, the 1 ÷ (90 − age) rule under 71, spouse-age election, and withholding above the minimum.',
    `<div class="container">

    <div class="hook">
        For a RRIF that is not an older special contract, CRA’s prescribed factor at age 71 is <span class="highlight">0.0528</span>. On a fair-market-value of $100,000 at the start of the year, that factor is a minimum of $5,280. If the annuitant is 70 or younger, the factor is not in that table. It is 1 divided by (90 minus the age). The carrier must pay at least that minimum in the year after the RRIF is opened, and may pay more.
    </div>

    <p>The registered retirement income fund (RRIF) minimum is the RRIF’s value on January 1 times CRA’s prescribed factor for your age at the start of the year. Under 71 the factor is 1 ÷ (90 − age), so 4% at 65. From 71 it follows CRA’s chart: 5.28% at 71, rising to 20% at 95 or older. The first minimum is due the year after you open the RRIF, and no tax is withheld on the minimum itself.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>CRA’s chart, checked October 17, 2026, uses 0.0528 at age 71 for “all other RRIFs,” then rises each year to 0.2000 at 95 or older.</li>
            <li>At 70 or younger the prescribed factor is 1 ÷ (90 − age). At 65 that is 1/25. At 70 it is 1/20.</li>
            <li>You can elect to use your spouse’s or common-law partner’s age. The carrier otherwise uses your age at the beginning of the year.</li>
            <li>The spouse-age election is made on the original RRIF application form, and CRA says it cannot be changed later.</li>
            <li>There is no minimum in the calendar year you open the RRIF. The first minimum is the following year.</li>
            <li>Carriers do not withhold tax on the minimum. Anything above it is withheld at 10%, 20% or 30% depending on size (5%, 10% or 15% federal in Quebec, plus Quebec tax).</li>
            <li>A qualifying RRIF and a pre-March 1986 RRIF can use different factors. A RRIF you open from an RRSP now is almost never one of those columns.</li>
        </ul>
    </div>

    <nav class="toc" aria-label="On this page">
        <strong>On this page</strong>
        <ul>
            <li><a href="#what-is-the-minimum">What is the RRIF minimum, and when does it start?</a></li>
            <li><a href="#factor-before-71">What factor applies before age 71?</a></li>
            <li><a href="#factors-from-71">What are the prescribed factors from 71 on?</a></li>
            <li><a href="#younger-spouse">Should you use a younger spouse’s age?</a></li>
            <li><a href="#on-the-return">Where does the minimum show up on the return?</a></li>
            <li><a href="#withholding">Is tax withheld on a RRIF withdrawal?</a></li>
            <li><a href="#turn-71-in-2026">What if you turn 71 in 2026?</a></li>
            <li><a href="#did-minimums-change">Did the RRIF minimums change for 2026?</a></li>
            <li><a href="#tax-rules">Which tax rules sit next to the minimum?</a></li>
        </ul>
    </nav>

    <p>This spoke sits under <a href="/blog/how-much-money-retire-canada/">how much you need to retire</a> and the <a href="/blog/build-retirement-plan-7-steps/">seven-step plan</a>. Type Canada Pension Plan (CPP) and Old Age Security (OAS) into the <a href="/blog/canadian-retirement-calculator/">retirement calculator</a>. The minimum here is a legal floor, not a spending target. <a href="/category/retirement/">More retirement guides</a> are on the hub.</p>

    <h2 id="what-is-the-minimum">What is the RRIF minimum, and when does it start?</h2>

    <p>It is the January 1 fair market value times CRA’s prescribed factor, and it starts the year after you open the RRIF. You can take more. You cannot take less and still have the account qualify.</p>

    <p>CRA describes a RRIF as an arrangement with a carrier you transfer property to, from a registered retirement savings plan (RRSP) or certain other plans. Earnings inside are tax-free, and payments out are taxable. The carrier’s fair-market-value figure is the one that has to match the slip. Open the RRIF in 2026 and the first forced payment is in 2027. A conversion late in the year you turn 71 does not create a minimum that year. See <a href="/blog/rrsp-to-rrif-conversion/">RRSP to RRIF conversion</a>.</p>

    <ol>
        <li>Read the January 1 fair market value from the carrier.</li>
        <li>Use your age at the start of the year, or the elected spouse or common-law partner age.</li>
        <li>At 70 or younger, use 1 ÷ (90 − age). From 71, use the chart.</li>
        <li>Multiply. In the year the RRIF is opened, there is no minimum.</li>
    </ol>

    <h2 id="factor-before-71">What factor applies before age 71?</h2>

    <p>If the age is 70 or younger, the prescribed factor is <strong>1 ÷ (90 − age)</strong>. At 65 that is 1/25, or <strong>4%</strong>. At 70 it is 1/20, or 5%. CRA’s <a href="https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/completing-slips-summaries/t4rsp-t4rif-information-returns/payments/chart-prescribed-factors.html">chart of prescribed factors</a> states that rule in one sentence. The carrier uses the fraction.</p>

    <div class="table-wrapper">
        <table>
            <caption>RRIF factor before age 71, from CRA’s formula 1 ÷ (90 − age), checked October 17, 2026</caption>
            <thead>
                <tr>
                    <th>Age at the start of the year</th>
                    <th>Formula</th>
                    <th>Factor</th>
                    <th>Shown as a percent</th>
                </tr>
            </thead>
            <tbody>
                <tr><td>55</td><td>1 ÷ 35</td><td>0.028571…</td><td>2.86%</td></tr>
                <tr><td>60</td><td>1 ÷ 30</td><td>0.033333…</td><td>3.33%</td></tr>
                <tr><td>65</td><td>1 ÷ 25</td><td>0.04</td><td>4.00%</td></tr>
                <tr><td>70</td><td>1 ÷ 20</td><td>0.05</td><td>5.00%</td></tr>
            </tbody>
        </table>
    </div>

    <p>Checked October 17, 2026. Age 71 is the first row of the prescribed chart, and it is higher than the formula would have been: 1 ÷ (90 − 71) is 1/19, about 5.26%, and the “all other RRIFs” factor at 71 is <strong>0.0528</strong>.</p>

    <div class="example-box">
        <strong>Example: $250,000 at the start of the year, age 65, your age elected</strong>
        <p>$250,000 × 0.04 = $10,000. That is the formula, not tax withheld and not a spending target. Elect a spouse aged 60 and the factor is 1/30, so the same $250,000 has a minimum of $8,333.33 before the carrier rounds. A lower floor does not stop you from taking more.</p>
    </div>

    <h2 id="factors-from-71">What are the prescribed factors from 71 on?</h2>

    <p>From 71, a RRIF opened from an RRSP now uses the “all other RRIFs” column: <strong>0.0528 at 71</strong> through <strong>0.2000 at 95 or older</strong>. A qualifying RRIF or a pre-March 1986 RRIF uses that column only when the chart footnote still allows it.</p>

    <div class="chart-container">
        <h3>RRIF minimum as a percent of the January 1 value, by age</h3>
        <div class="bar-chart">
            <div class="bar-item">
                <div class="bar-label">65</div>
                <div class="bar-wrapper"><div class="bar" style="width: 20%;"><span>4.00%</span></div></div>
            </div>
            <div class="bar-item">
                <div class="bar-label">71</div>
                <div class="bar-wrapper"><div class="bar" style="width: 26.4%;"><span>5.28%</span></div></div>
            </div>
            <div class="bar-item">
                <div class="bar-label">75</div>
                <div class="bar-wrapper"><div class="bar" style="width: 29.1%;"><span>5.82%</span></div></div>
            </div>
            <div class="bar-item">
                <div class="bar-label">80</div>
                <div class="bar-wrapper"><div class="bar" style="width: 34.1%;"><span>6.82%</span></div></div>
            </div>
            <div class="bar-item">
                <div class="bar-label">85</div>
                <div class="bar-wrapper"><div class="bar" style="width: 42.55%;"><span>8.51%</span></div></div>
            </div>
            <div class="bar-item">
                <div class="bar-label">90</div>
                <div class="bar-wrapper"><div class="bar" style="width: 59.6%;"><span>11.92%</span></div></div>
            </div>
            <div class="bar-item">
                <div class="bar-label">95+</div>
                <div class="bar-wrapper"><div class="bar" style="width: 100%;"><span>20.00%</span></div></div>
            </div>
        </div>
        <p>At 65 the minimum is 4.00% of the January 1 value. It is 5.28% at 71, 5.82% at 75, 6.82% at 80, 8.51% at 85, 11.92% at 90, and 20.00% at 95 or older. Source: CRA chart of prescribed factors (all other RRIFs) and 1 ÷ (90 − age) at 65, checked October 17, 2026.</p>
    </div>

    <div class="table-wrapper">
        <table>
            <caption>Prescribed factors, “all other RRIFs,” from CRA’s chart checked October 17, 2026</caption>
            <thead>
                <tr>
                    <th>Age</th>
                    <th>Factor</th>
                    <th>Percent</th>
                    <th>Minimum on $100,000</th>
                </tr>
            </thead>
            <tbody>
                <tr class="highlight-row"><td>71</td><td>0.0528</td><td>5.28%</td><td>$5,280</td></tr>
                <tr><td>72</td><td>0.0540</td><td>5.40%</td><td>$5,400</td></tr>
                <tr><td>73</td><td>0.0553</td><td>5.53%</td><td>$5,530</td></tr>
                <tr><td>74</td><td>0.0567</td><td>5.67%</td><td>$5,670</td></tr>
                <tr><td>75</td><td>0.0582</td><td>5.82%</td><td>$5,820</td></tr>
                <tr><td>76</td><td>0.0598</td><td>5.98%</td><td>$5,980</td></tr>
                <tr><td>77</td><td>0.0617</td><td>6.17%</td><td>$6,170</td></tr>
                <tr><td>78</td><td>0.0636</td><td>6.36%</td><td>$6,360</td></tr>
                <tr><td>79</td><td>0.0658</td><td>6.58%</td><td>$6,580</td></tr>
                <tr><td>80</td><td>0.0682</td><td>6.82%</td><td>$6,820</td></tr>
                <tr><td>81</td><td>0.0708</td><td>7.08%</td><td>$7,080</td></tr>
                <tr><td>82</td><td>0.0738</td><td>7.38%</td><td>$7,380</td></tr>
                <tr><td>83</td><td>0.0771</td><td>7.71%</td><td>$7,710</td></tr>
                <tr><td>84</td><td>0.0808</td><td>8.08%</td><td>$8,080</td></tr>
                <tr><td>85</td><td>0.0851</td><td>8.51%</td><td>$8,510</td></tr>
                <tr><td>86</td><td>0.0899</td><td>8.99%</td><td>$8,990</td></tr>
                <tr><td>87</td><td>0.0955</td><td>9.55%</td><td>$9,550</td></tr>
                <tr><td>88</td><td>0.1021</td><td>10.21%</td><td>$10,210</td></tr>
                <tr><td>89</td><td>0.1099</td><td>10.99%</td><td>$10,990</td></tr>
                <tr><td>90</td><td>0.1192</td><td>11.92%</td><td>$11,920</td></tr>
                <tr><td>91</td><td>0.1306</td><td>13.06%</td><td>$13,060</td></tr>
                <tr><td>92</td><td>0.1449</td><td>14.49%</td><td>$14,490</td></tr>
                <tr><td>93</td><td>0.1634</td><td>16.34%</td><td>$16,340</td></tr>
                <tr><td>94</td><td>0.1879</td><td>18.79%</td><td>$18,790</td></tr>
                <tr><td>95 or older</td><td>0.2000</td><td>20.00%</td><td>$20,000</td></tr>
            </tbody>
        </table>
    </div>

    <p>Checked October 17, 2026. The dollar column is $100,000 times the factor. A $400,000 RRIF at 71 is <strong>$21,120</strong>. At 95 or older the factor stays at 0.2000. At 71 only, a qualifying RRIF and a pre-March 1986 RRIF show 0.0526, while “all other” shows 0.0528. Using 5.26% on a modern RRIF is the wrong column. From 72, the qualifying column matches this one.</p>

    <h2 id="younger-spouse">Should you use a younger spouse’s age?</h2>

    <p>Elect a younger spouse or common-law partner when you will not withdraw the higher minimum anyway. A younger age produces a smaller factor, which matters when the extra income would count toward the <a href="/blog/oas-gis-clawback-canada/">OAS recovery tax</a>. <a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/rrsps-related-plans/receiving-income-rrsp.html">CRA’s “Receiving income from an RRSP” page</a> says you must select this option when filling out the original RRIF application form, and once you make the election you cannot change it. <a href="https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/completing-slips-summaries/t4rsp-t4rif-information-returns/payments/minimum-amount-a-rrif.html">CRA’s payer page</a> also says the spouse’s age is used if the annuitant elected it at the time the RRIF was being set up.</p>

    <div class="example-box">
        <strong>Example: $400,000 RRIF on January 1, annuitant 71</strong>
        <div class="table-wrapper">
            <table>
                <caption>Example: $400,000 RRIF on January 1, annuitant 71</caption>
                <thead>
                    <tr>
                        <th>Age elected</th>
                        <th>Factor</th>
                        <th>Minimum</th>
                        <th>Versus own age</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>Own age 71</td><td>5.28%</td><td>$21,120</td><td>The floor with no election</td></tr>
                    <tr class="highlight-row"><td>Spouse 65</td><td>1 ÷ 25 = 4.00%</td><td>$16,000</td><td>$5,120 less forced income</td></tr>
                    <tr><td>Spouse 60</td><td>1 ÷ 30 = 3.33%</td><td>$13,333.33</td><td>A lower floor again</td></tr>
                </tbody>
            </table>
        </div>
        <p>Illustrative arithmetic, not advice. A lower floor never stops you taking more.</p>
    </div>

    <div class="example-box">
        <strong>Example:</strong>
        <p>On the original application: “Please elect my spouse’s or common-law partner’s age. Their date of birth is [date of birth]. Confirm the factor, that this election cannot be changed later, and that you will not withhold tax on the minimum.”</p>
    </div>

    <div class="warning-box">
        <strong>Watch out:</strong>
        <p>The minimum is a floor, not a plan. Taking only the minimum can leave a large taxable balance at death. Taking more can be an <a href="/blog/rrsp-meltdown-strategy/">RRSP meltdown</a> or part of the <a href="/blog/retirement-withdrawal-strategy/">withdrawal order</a> between the RRIF and the Tax-Free Savings Account (TFSA). The <a href="/blog/federal-tax-brackets/">federal brackets</a> and the <a href="/blog/pension-income-splitting-canada/">splitting article</a> are the tax half. A RRIF payment can be eligible pension income at 65.</p>
    </div>

    <h2 id="on-the-return">Where does the minimum show up on the return?</h2>

    <p>If you were 65 or older on December 31, or you received the amounts because your spouse or common-law partner died, report the RRIF income on <strong>line 11500</strong>. Otherwise report it on <strong>line 13000</strong>.</p>

    <p>CRA’s <a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/registered-retirement-income-fund-rrif/receiving-income-a-rrif.html">receiving-income page</a> is the source of that split. Line 11500 opens the pension income amount and splitting. Line 13000 does not. A withdrawal at 60 is taxable, and it is not eligible pension income only because it came from a RRIF. A transfer onward to an RRSP, a RRIF, or an annuity is deducted on Schedule 7 and line 20800, or on line 23200. A minimum you spend is not a transfer.</p>

    <h2 id="withholding">Is tax withheld on a RRIF withdrawal?</h2>

    <p>No income tax is withheld on the minimum. CRA’s <a href="https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/completing-slips-summaries/t4rsp-t4rif-information-returns/t4rif-slip-summary/t4rif-statement-income-a-registered-retirement-income-fund.html">T4RIF guidance</a> tells carriers not to withhold income tax from the minimum amount and to withhold from the excess, which is box 24 of the T4RIF.</p>

    <p><a href="https://www.canada.ca/en/revenue-agency/services/forms-publications/publications/rc4157/deducting-income-tax-on-pension-other-income-filing-t4a-slip-summary.html">CRA’s RC4157</a> lists the lump-sum rates for payments above the RRIF minimum. All lump sums in the calendar year are combined to pick the rate. Withholding is a prepayment. The whole withdrawal is taxed at your rate when you file, so you can owe more.</p>

    <div class="table-wrapper">
        <table>
            <caption>Withholding on the excess above the RRIF minimum, from RC4157, checked October 17, 2026</caption>
            <thead>
                <tr>
                    <th>Excess in the calendar year</th>
                    <th>Outside Quebec</th>
                    <th>Federal rate in Quebec</th>
                </tr>
            </thead>
            <tbody>
                <tr><td>Up to and including $5,000</td><td>10%</td><td>5%</td></tr>
                <tr><td>Over $5,000 up to and including $15,000</td><td>20%</td><td>10%</td></tr>
                <tr><td>Over $15,000</td><td>30%</td><td>15%</td></tr>
            </tbody>
        </table>
    </div>

    <p>Quebec also withholds provincial tax. This page does not quote that Revenu Québec percentage, so the 5%, 10%, and 15% column is only the federal slice.</p>

    <div class="example-box">
        <strong>Example: age 75, $300,000 on January 1, outside Quebec</strong>
        <div class="example-calculation">
            <div class="line"><span>Minimum, $300,000 × 0.0582</span><span>$17,460</span></div>
            <div class="line"><span>Withheld on the minimum</span><span>$0</span></div>
            <div class="line"><span>Payment requested</span><span>$20,000</span></div>
            <div class="line"><span>Excess above the minimum</span><span>$2,540</span></div>
            <div class="line total"><span>Withheld at 10%</span><span>$254</span></div>
        </div>
        <p>Illustration. The $2,540 excess is within the band up to and including $5,000, so the rate outside Quebec is 10%. The whole $20,000 is still taxed when you file.</p>
    </div>

    <div class="did-you-know">
        <strong>Did you know:</strong>
        <p>In the year the RRIF is opened there is no minimum, so any payment that year is above the minimum and is withheld.</p>
    </div>

    <h2 id="turn-71-in-2026">What if you turn 71 in 2026?</h2>

    <p>If you were born in 1955, <strong>December 31, 2026</strong> is the last day to contribute to your own RRSP and to choose for it: withdraw, transfer to a RRIF, or buy an annuity. A withdrawal is taxed and withheld. A direct transfer to a RRIF, or an annuity purchase, is not withheld.</p>

    <p>Those three doors are CRA’s <a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/rrsps-related-plans/rrsp-options-when-you-turn-71/options-your-rrsps.html">options for your own RRSPs</a>. You can still contribute to a younger spouse’s RRSP until the end of the year they turn 71, which <a href="https://www.canada.ca/en/revenue-agency/services/forms-publications/publications/t4040/rrsps-other-registered-plans-retirement.html">Guide T4040</a> describes. If the RRIF is opened in 2026, the first minimum is in <strong>2027</strong>, using the January 1, 2027 value and your age at the start of 2027. The transfer steps are in <a href="/blog/rrsp-to-rrif-conversion/">RRSP to RRIF conversion</a>.</p>

    <h2 id="did-minimums-change">Did the RRIF minimums change for 2026?</h2>

    <p>No. CRA’s chart, checked October 17, 2026, still shows 0.0528 at 71 through 0.2000 at 95 or older, the same factors as the table above. Check the chart again before January 1 if you are reading this later.</p>

    <h2 id="tax-rules">Which tax rules sit next to the minimum?</h2>

    <p>The factor does not change. Four federal rules decide what the payment does to the return, and a fund fee is not part of the minimum.</p>

    <ul>
        <li><strong>Pension income amount.</strong> RRIF income at 65 or older, on line 11500, can qualify for the federal pension income amount on <a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-31400-pension-income-amount.html">line 31400</a>, up to <strong>$2,000</strong>.</li>
        <li><strong>Pension income splitting.</strong> At 65 or older, up to half of eligible pension income, including RRIF payments, can be allocated to a spouse with Form <span class="form-ref">T1032</span>. See <a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/pension-income-splitting.html">CRA’s pension income splitting page</a> and the <a href="/blog/pension-income-splitting-canada/">splitting guide</a>.</li>
        <li><strong>OAS recovery tax.</strong> For 2026 income it is <strong>15%</strong> of net income above <strong>$95,323</strong>, recovered from July 2027 to June 2028. See the <a href="https://www.canada.ca/en/services/benefits/publicpensions/old-age-security/recovery-tax.html">OAS recovery tax</a> page and the <a href="/blog/oas-gis-clawback-canada/">OAS and GIS clawback guide</a>.</li>
        <li><strong>TFSA.</strong> The 2026 TFSA dollar limit is <strong>$7,000</strong> on CRA’s <a href="https://www.canada.ca/en/revenue-agency/services/tax/registered-plans-administrators/pspa/mp-rrsp-dpsp-tfsa-limits-ympe.html">limits table</a>. An after-tax minimum you do not need can go into a TFSA if you have room.</li>
    </ul>

    <p>CRA says mutual-fund redemption fees are expenses of the RRIF and are not part of the minimum.</p>

    <ul class="checklist">
        <li>Read the January 1 value from the carrier’s statement.</li>
        <li>Confirm the age on the factor, and that any spouse-age election was on the original application.</li>
        <li>If the payment exceeds the minimum, ask what will be withheld on the excess.</li>
        <li>Born in 1955: choose withdraw, RRIF, or annuity by December 31, 2026.</li>
    </ul>

    <p>Confirm the form with the carrier, and with a CPA, a CFP, or a tax lawyer, before you sign the election or request a large excess.</p>

    <h2>Frequently asked questions</h2>

    <h3>Do I have to withdraw the minimum in the year I open the RRIF?</h3>
    <p>No. CRA says the minimum is paid in the year after the RRIF is entered into. A December opening does not create a December minimum. It creates one for the next calendar year, from the value and the age at the start of that year.</p>

    <h3>Is 5.28% the factor for every 71-year-old?</h3>
    <p>It is the “all other RRIFs” factor at 71 on the chart checked October 17, 2026. A qualifying RRIF and a pre-March 1986 RRIF show 0.0526 at that age. Elect a spouse under 71 and you leave the chart for 1 ÷ (90 − that age).</p>

    <h3>Can I take less than the minimum if I do not need the money?</h3>
    <p>Not from that RRIF. You can withdraw more, not less. Before the year starts, the levers are the age election, how much you convert, and any balance still in an RRSP, which has no minimum. After the year starts, the value is set.</p>

    <h3>Does the minimum count as pension income I can split?</h3>
    <p>Yes, if you are 65 or older at year-end, or you receive it because your spouse or common-law partner died. Under 65, your own RRIF payment is not eligible pension income. Splitting is capped at 50% and needs Form T1032.</p>

    <h3>What if the RRIF stops qualifying?</h3>
    <p>If it no longer satisfies the rules, it is no longer a RRIF, and you are considered to have received the fair market value of the property at that time. That is not the same event as taking the minimum. Do not break the registration to avoid the factor.</p>

    <h3>Should the calculator use the minimum as my spending?</h3>
    <p>No. The <a href="/blog/canadian-retirement-calculator/">retirement calculator</a> spends what you type, from the TFSA and then the RRSP, at a tax rate you type. It does not apply the RRIF factor. If the minimum is higher than that spending, put the extra taxable income in the plan yourself.</p>

    <h3>Is tax withheld on the RRIF minimum?</h3>
    <p>No. Withholding applies only to the excess: 10%, 20%, or 30% outside Quebec, and 5%, 10%, or 15% federal in Quebec, on the bands up to $5,000, up to $15,000, and above $15,000. Quebec tax is also withheld. The whole withdrawal is taxed when you file.</p>

    <h3>Can I change the spouse-age election later?</h3>
    <p>No. CRA says you make it on the original RRIF application and cannot change it later. The payer uses the spouse’s age only if you elected it when the RRIF was set up.</p>

    <h3>I turn 71 in 2026. When is my first RRIF minimum?</h3>
    <p>If you open the RRIF in 2026, the first minimum is in 2027, using the January 1, 2027 value and your age at the start of 2027.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/completing-slips-summaries/t4rsp-t4rif-information-returns/payments/chart-prescribed-factors.html">CRA: chart of prescribed factors</a>, checked October 17, 2026</li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/registered-retirement-income-fund-rrif/receiving-income-a-rrif.html">CRA: receiving income from a RRIF</a>, checked October 17, 2026</li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/registered-retirement-income-fund-rrif.html">CRA: RRIF overview</a>, checked October 17, 2026</li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/forms-publications/publications/rc4157/deducting-income-tax-on-pension-other-income-filing-t4a-slip-summary.html">CRA: RC4157, deducting income tax on pension and other income</a>, checked October 17, 2026</li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/completing-slips-summaries/t4rsp-t4rif-information-returns/t4rif-slip-summary/t4rif-statement-income-a-registered-retirement-income-fund.html">CRA: T4RIF slip guidance</a>, checked October 17, 2026</li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/completing-slips-summaries/t4rsp-t4rif-information-returns/payments/minimum-amount-a-rrif.html">CRA: minimum amount from a RRIF</a>, checked October 17, 2026</li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/rrsps-related-plans/receiving-income-rrsp.html">CRA: receiving income from an RRSP</a>, checked October 17, 2026</li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/rrsps-related-plans/rrsp-options-when-you-turn-71/options-your-rrsps.html">CRA: options for your own RRSPs</a>, checked October 17, 2026</li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/forms-publications/publications/t4040/rrsps-other-registered-plans-retirement.html">CRA: Guide T4040</a>, checked October 17, 2026</li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-31400-pension-income-amount.html">CRA: line 31400, pension income amount</a>, checked October 17, 2026</li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/pension-income-splitting.html">CRA: pension income splitting</a>, checked October 17, 2026</li>
        <li><a href="https://www.canada.ca/en/services/benefits/publicpensions/old-age-security/recovery-tax.html">Canada.ca: Old Age Security recovery tax</a>, checked October 17, 2026</li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/registered-plans-administrators/pspa/mp-rrsp-dpsp-tfsa-limits-ympe.html">CRA: TFSA and RRSP limits table</a>, checked October 17, 2026</li>
    </ul>

    <h2>Related reading</h2>
    <ul>
        <li><a href="/blog/rrsp-to-rrif-conversion/">Converting an RRSP to a RRIF</a></li>
        <li><a href="/blog/pension-income-splitting-canada/">Pension income splitting</a></li>
        <li><a href="/blog/oas-gis-clawback-canada/">OAS and GIS clawback</a></li>
        <li><a href="/blog/retirement-withdrawal-strategy/">Retirement withdrawal order</a></li>
        <li><a href="/blog/rrsp-meltdown-strategy/">RRSP meltdown</a></li>
        <li><a href="/blog/how-much-money-retire-canada/">How much money you need to retire</a></li>
        <li><a href="/category/retirement/">Retirement hub</a></li>
    </ul>

    <div class="cta-section">
        <p><strong>The factor is public. The tax on the payment is your return.</strong></p>
        <p>Line 11500 versus line 13000, and the brackets on the extra dollar, are the filing side of a minimum you cannot refuse.</p>
        <a href="/ebooks/tax-guide/" class="cta-button">Get the 2026 Tax Guide — $49 CAD</a>
    </div>

    <div class="article-footer">
        <p><strong>Disclaimer:</strong> This is general education about Canadian retirement accounts, pensions, and estates as of October 2026. It is not tax, pension, annuity, or legal advice. RRIF factors, benefit amounts, unlocking rules, and probate fees change, and they depend on the contract and the province that governs it. Figures below are tied to CRA, Canada.ca, OSFI, FSRA, or a provincial page reviewed on October 17, 2026. Dollar examples are arithmetic on those figures, not a quote of your minimum, your pension, or your estate bill. Confirm the current page, your carrier’s calculation, and your plan statement before you convert, unlock, or file.</p>
        <div class="footer-note">Published: October 3, 2026 | Updated: October 17, 2026 | Category: Retirement | Author: Andrew</div>
    </div>

</div>`
    ),
    updated: '2026-10-17',
    youtubeId: 'Sd5DytCG9mM',
    youtubeTitle: 'RRIF Minimum Withdrawal Table 2026: I Ran the Numbers to 95',
    youtubeUploadDate: '2026-10-19T02:23:16-04:00',
    youtubeDuration: 'PT6M50S',
  },
  retirementPost(
    'rrsp-to-rrif-conversion',
    'Converting Your RRSP to a RRIF: Timing, Age 71, and Using a Younger Spouse’s Age',
    'December 31 of the year you turn 71 is the last day you can contribute to an RRSP. By then you withdraw the plan, transfer it to a RRIF, or buy an annuity. A direct transfer is not withheld.',
    `<div class="container">

    <div class="hook">
        December 31 of the year you turn 71 is the last day you can contribute to your RRSPs. In that same year you have to choose one of three options for the plans: <span class="highlight">withdraw them, transfer them to a RRIF, or use them to buy an annuity</span>. A withdrawal is taxed, and the issuer withholds. A direct transfer to a RRIF, or a purchase of an annuity, is not withheld. You can do any of this earlier. You do not have to wait for 71.
    </div>

    <p>The retirement pillar is <a href="/blog/how-much-money-retire-canada/">how much you need to retire</a>. The sequence around the accounts is <a href="/blog/build-retirement-plan-7-steps/">the seven-step plan</a>. Project the balances, with CPP and OAS amounts you type yourself, in the <a href="/blog/canadian-retirement-calculator/">Canadian retirement calculator</a>. This page is the legal deadline and the three doors, not the spending target.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>CRA’s options page, page details 2025-01-03, lists withdraw, RRIF, or annuity in the year you turn 71. Contribution room for the RRSP ends on December 31 of that year.</li>
            <li>The issuer does not withhold on a direct transfer to a RRIF or on an annuity purchase. You are taxed later, when RRIF or annuity payments are paid to you.</li>
            <li>The RRIF minimum starts the year after the RRIF is opened, not in the opening year. The factor can use a spouse’s or common-law partner’s age if you elect it.</li>
            <li>Once a RRIF is established, CRA says no more contributions can be made to it. New savings stay in an RRSP, a TFSA, or a non-registered account.</li>
            <li>An advanced life deferred annuity is a separate contract that can start as late as the year you turn 85, inside a dollar limit and a 25% limit. It is not a way to skip the age-71 choice on the rest of the RRSP.</li>
        </ul>
    </div>

    <h2>What has to happen in the year you turn 71?</h2>

    <p>CRA’s “options for your own RRSPs” page is short on purpose. In the year you turn 71 you choose withdraw, transfer to a RRIF, or buy an annuity. Withdrawing means the issuer withholds tax. The page points at the withdrawals guidance for the rates. Those rates are not copied here, because that page was not the one reviewed for the percentages. Transferring the property directly to a RRIF, or using it to buy an annuity, does not trigger that withholding. The tax shows up when you are paid. RRIF payments go on the return for the year you receive them.</p>

    <p>You can convert part of an RRSP and leave the rest until later in that year, as long as every dollar has gone through one of the three doors by the end of the year you turn 71. The page does not describe a grace period into the next January. December 31 is the contribution deadline on the parent page, and the choice of what the plan becomes sits in that same year. If you have more than one RRSP, the choice is available on each plan. A spouse’s RRSP is a different annuitant. The age that matters for that plan is the annuitant’s age, which the spousal page of the same guide is for. Attribution on a spousal plan is <a href="/blog/spousal-rrsp-canada/">the spousal RRSP guide</a>, not a sentence to invent here.</p>

    <h2>Why convert before 71?</h2>

    <p>Nothing on the age-71 page requires you to keep the RRSP until then. People convert earlier because they want a payment stream, because a RRIF payment at 65 can be eligible pension income, or because they want the investments in a RRIF the carrier already knows how to pay from. People wait because an RRSP has no annual minimum and a RRIF does, starting the next year. The minimum table is <a href="/blog/rrif-minimum-withdrawal/">RRIF minimum withdrawals</a>. If you are 64 and you do not need the income, opening a RRIF in December creates a minimum the following year, at age 65, using 1 ÷ (90 − 65), which is 4%. That may be exactly the payment you wanted for the pension credit. It may also be income you did not need. Write the year down before you sign the transfer.</p>

    <div class="example-box">
        <strong>Illustration: turn 71 in 2026, convert in December, spouse is 64</strong>
        <p>Contributions to the RRSP stop December 31, 2026. A direct transfer to a RRIF that month is not withheld. There is no RRIF minimum in 2026, because the minimum starts the year after the plan is opened. In 2027 the carrier uses the age at the start of 2027. If you elect your own age, you are 72 at the start of that year if your birthday fell in 2026, and the “all other RRIFs” factor at 72 is 0.0540. If you elect your spouse, who is 65 at the start of 2027, the factor is 1/25, or 0.04, instead. On a $300,000 value, those two floors are $16,200 and $12,000. Both products are arithmetic on the factors in the minimum article. Neither is the amount you must spend. You can withdraw more.</p>
    </div>

    <h2>Can you use a younger spouse’s age?</h2>

    <p>Yes. CRA’s receiving-income page says the carrier calculates the minimum from your age at the beginning of each year, and that you can elect to have the payment based on your spouse’s or common-law partner’s age. The election does not move the income onto their return. It only changes the factor. To put income on their return you use pension income splitting, if the payment qualifies, which is a different form and generally wants you to be 65. The two are easy to confuse because both mention a spouse. One shrinks the forced withdrawal. The other allocates up to half of eligible pension income. Do both only if both are actually useful. Details of the allocation are <a href="/blog/pension-income-splitting-canada/">pension income splitting</a>.</p>

    <div class="tip-box">
        <strong>The RRIF is not a new RRSP:</strong>
        <p>CRA’s setup page says that once the RRIF is established, there can be no more contributions to the plan, and the plan is not terminated except through death. A transfer in from an RRSP is not a contribution of new money. If you are still working at 71, the deduction for a contribution in that year has a deadline of December 31, not the usual 60 days into the next year. The contribution-limit article is <a href="/blog/contribution-limits/">the limits table</a>. The account, before this deadline, is <a href="/blog/rrsp-playbook/">the RRSP playbook</a>.</p>
    </div>

    <h2>What about an annuity, or an ALDA, instead of a RRIF?</h2>

    <p>The annuity door at 71 is a purchase from the RRSP, not a withdrawal, so the issuer does not withhold on the purchase itself. You then have whatever payment the contract pays, for life or for the guarantee the contract actually has. This page does not quote a monthly income per $100,000, because no Canada.ca page reviewed on October 3, 2026 published a national annuity rate. The product comparison is <a href="/blog/annuities-canada-guide/">annuities in Canada</a>.</p>

    <p>An advanced life deferred annuity is a further contract, not a fourth box on the age-71 page that lets the whole RRSP sit untouched until 85. CRA says an ALDA is a life annuity, payments must start before the end of the year you turn 85, a licensed provider has to issue it, and transfers are limited. The lifetime ALDA dollar limit on the CRA limits table is $180,000 for 2026. A separate 25% limit applies to the plan the money comes from. Excess left in the contract is taxed at 1% a month. Moving some of a RRIF or RRSP into an ALDA does not erase the age-71 choice for the balance that stays behind.</p>

    <h2>What if a Home Buyers’ Plan or Lifelong Learning Plan is still open?</h2>

    <p>The age-71 hub links to HBP repayment when the participant reaches 71, and to the LLP if you participated. The repayment mechanics were not on the options page reviewed here, so this article does not state a dollar of income inclusion or a final-year repayment. If either plan is still outstanding in the year you turn 71, open those CRA pages before you convert, because an unpaid balance can become income in a year you are also closing the RRSP. That is a different problem from the RRIF minimum.</p>

    <h2>Frequently asked questions</h2>

    <h3>Can I convert the RRSP the year before I turn 71?</h3>
    <p>Yes. The age-71 rule is a deadline, not a start date. Convert earlier if you want RRIF payments, including payments that can qualify as pension income at 65. Wait if you want to avoid a minimum you do not need. The first minimum is the calendar year after the opening year, at the age you have at the start of that year.</p>

    <h3>Does a transfer to a RRIF use contribution room?</h3>
    <p>No. It is a transfer of property already inside a registered plan. CRA says the issuer does not withhold on that direct transfer. New contributions are a different event, and they have to land in the RRSP by December 31 of the year you turn 71. You cannot contribute new money to the RRIF after it exists.</p>

    <h3>If I elect my spouse’s age, is the income theirs?</h3>
    <p>No. The election changes the minimum factor. The annuitant is still the person who receives the payment and reports it, unless you also split eligible pension income on Form T1032. A younger spouse who is under 65 does not turn your RRIF payment into their pension income by being the age on the factor.</p>

    <h3>What happens if I do nothing?</h3>
    <p>The options page does not describe a comfortable default. It says you have to choose withdraw, RRIF, or annuity. A collapsed plan that is simply paid out is the withdrawal door, with withholding and with the whole amount in income. That is the outcome to avoid by signing the transfer, not a strategy.</p>

    <h3>Can I have a RRIF and an RRSP in the same year?</h3>
    <p>Yes, before the end of the year you turn 71. After that, the RRSP has to have been withdrawn, transferred, or annuitized. You can hold more than one RRIF. CRA also says you can hold a self-directed RRIF, with the same general investment rules as a self-directed RRSP. The carrier still calculates one minimum per account.</p>

    <h3>Does the retirement calculator assume I converted?</h3>
    <p>No. It grows an RRSP balance and withdraws what the spending gap requires. It does not apply the RRIF factor and it does not know your 71st birthday. If you will be past 71, check that the withdrawal the tool needs is at least the minimum on the value you expect. If it is not, the tool is understating taxable income.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/rrsps-related-plans/rrsp-options-when-you-turn-71.html">CRA: RRSP options when you turn 71</a>, page details 2026-01-29</li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/rrsps-related-plans/rrsp-options-when-you-turn-71/options-your-rrsps.html">CRA: options for your own RRSPs</a>, page details 2025-01-03</li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/registered-retirement-income-fund-rrif/receiving-income-a-rrif.html">CRA: receiving income from a RRIF</a></li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/registered-retirement-income-fund-rrif/setting-a-rrif.html">CRA: setting up a RRIF</a></li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/registered-plans-administrators/pspa/mp-rrsp-dpsp-tfsa-limits-ympe.html">CRA: MP, RRSP, ALDA, TFSA limits and the YMPE</a></li>
    </ul>

    <div class="cta-section">
        <p><strong>The deadline is a date. The tax is the door you pick.</strong></p>
        <p>A withdrawal, a RRIF, and an annuity are taxed on different calendars. The 2026 tax guide is the return side of that choice.</p>
        <a href="/ebooks/tax-guide/" class="cta-button">Get the 2026 Tax Guide — $49 CAD</a>
    </div>

    ${footer}

</div>`
  ),

  retirementPost(
    'pension-income-splitting-canada',
    'Pension Income Splitting in Canada: Who Qualifies and How Form T1032 Works',
    'You can allocate up to 50% of eligible pension income to a spouse or common-law partner on Form T1032. RRIF income qualifies at 65. OAS and CPP do not qualify. Both of you must be Canadian residents on December 31.',
    `<div class="container">

    <div class="hook">
        A couple can jointly elect to allocate <span class="highlight">up to 50%</span> of one spouse’s eligible pension income to the other, on Form T1032. Only one joint election is allowed for the year, even if both of you have eligible pension income. You both have to be residents of Canada on December 31, or on the date of death. You cannot have been living separate and apart because of a relationship breakdown for a continuous period of 90 days or more that includes December 31. OAS and CPP are not eligible pension income.
    </div>

    <p>The income this election moves sits inside <a href="/blog/how-much-money-retire-canada/">how much you need to retire</a> and the <a href="/blog/build-retirement-plan-7-steps/">seven-step plan</a>. The <a href="/blog/canadian-retirement-calculator/">retirement calculator</a> does not split income between two returns. It uses one tax rate you type. If you will elect on T1032, the calculator’s single rate is the wrong picture of the household tax unless you have already chosen a rate that reflects the split.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>The cap is 50% of eligible pension income. The percentage can change every year. A 2024 election does not lock the 2025 percentage. CRA’s page, details dated 2026-01-20, says this explicitly.</li>
            <li>Under 65, eligible pension income is generally a life annuity from a pension plan, not a RRIF or RRSP annuity. At 65, or if the amount is received because a spouse died, RRIF payments and RRSP annuity payments are included.</li>
            <li>CPP, QPP, OAS, a tax-free treaty pension, and US IRA income are not eligible. Neither is a RRIF amount you transferred on to another registered plan.</li>
            <li>The pension income amount is up to $2,000 for each spouse, on what remains eligible after the split, and the receiver’s eligibility can still depend on age.</li>
            <li>Tax withheld moves in the same proportion as the income. CRA will not reduce withholding during the year just because you plan to elect.</li>
        </ul>
    </div>

    <h2>Who can elect, and whose age matters?</h2>

    <p>The transferring spouse is the person who received the eligible pension income and elects to allocate part of it. The receiving spouse is the person who is allocated that part. CRA says you can split with your spouse or common-law partner regardless of their age, if the other conditions are met. The age that decides whether the income is eligible in the first place is the transferring spouse’s age, or whether the income was received because a spouse died. A 64-year-old cannot make a RRIF withdrawal eligible by allocating it to a 70-year-old partner. The receiver’s age still matters for the $2,000 pension income amount on their own return. CRA says the pension that qualifies for the pension income amount for the transferor does not necessarily qualify for the receiver, because eligibility can depend on age. Note 1 of Step 4 on Form T1032 is the instruction. This page does not paraphrase that note into a yes.</p>

    <p>Living apart at year-end for medical, educational, or business reasons does not, on CRA’s page, block the election. A breakdown that covers 90 days including December 31 does. You both still have to be residents of Canada on December 31, or on the date of death.</p>

    <h2>What income can move, and what cannot?</h2>

    <p>CRA’s eligible list, for the transferring spouse, starts with the taxable part of life annuity payments from a superannuation or pension plan. Those can be split without waiting for 65. If the transferor is 65 or older at the end of the year, or the amounts are received because a spouse or common-law partner died, the list adds annuity and RRIF payments, including life income fund payments, RRSP annuity payments, and certain qualifying amounts from a retirement compensation arrangement. Variable pension benefits from a money-purchase provision, and payments from a pooled registered pension plan, are not life annuity payments. They do not qualify unless the transferor is 65 or older at year-end, or they are received because a spouse died.</p>

    <table>
        <caption>Eligible pension income for splitting, from CRA’s pension-splitting page reviewed October 3, 2026</caption>
        <thead>
            <tr>
                <th>Amount</th>
                <th>Under 65</th>
                <th>65 or older at year-end, or received on a spouse’s death</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Life annuity from a registered pension plan</td>
                <td>Generally eligible</td>
                <td>Eligible</td>
            </tr>
            <tr>
                <td>RRIF or life income fund payments, RRSP annuity</td>
                <td>Not eligible, unless received because a spouse died</td>
                <td>Eligible</td>
            </tr>
            <tr>
                <td>CPP, QPP, OAS</td>
                <td>Not eligible</td>
                <td>Not eligible</td>
            </tr>
            <tr>
                <td>US IRA, or a foreign pension that is tax-free in Canada under a treaty</td>
                <td>Not eligible</td>
                <td>Not eligible</td>
            </tr>
        </tbody>
    </table>

    <p>Table as of October 2026. It is a reading of CRA’s eligible and non-eligible lists, not a second form. The detailed slip-by-slip charts are the line 31400 pages for under 65 and for 65 and older. A foreign pension that is taxable in Canada can still be eligible. CRA says the part that is not deductible on line 25600 can qualify for the pension income amount, and the splitting page points at those charts. Income from a United States IRA does not.</p>

    <div class="example-box">
        <strong>Illustration: $40,000 of eligible RRIF income, transferor age 67</strong>
        <p>Half of $40,000 is $20,000. That is the most Form T1032 can move. The transferor reports $20,000 of that RRIF income. The receiver reports $20,000 as elected split-pension income. This article does not turn those two lines into tax saved. The brackets are the <a href="/blog/federal-tax-brackets/">federal brackets</a> plus your province, and the OAS recovery tax reads one person’s net income. CRA says splitting can change the age amount, the spouse or common-law partner amount, and the repayment of OAS. It does not change a credit that uses both incomes together, and CRA names the GST/HST credit as that kind of credit. A $20,000 shift that looks large on one return can be small once those tests are run. The recovery-tax article is <a href="/blog/oas-gis-clawback-canada/">OAS, GIS, and the clawback</a>.</p>
    </div>

    <h2>How do you file Form T1032?</h2>

    <p>Both spouses complete, sign, and attach the same Form T1032 to both paper returns, by the filing due date. The information on the two forms has to match. If you file electronically, the software still needs the joint election. CRA may allow a late or amended election, or a revocation, if you apply on or before the day that is three calendar years after the filing-due date for that year. An amendment needs a new completed and jointly signed T1032. A revocation needs a letter signed by both of you. You do not send a different percentage in your head and hope the first form is ignored.</p>

    <p>Withholding follows the income. If you allocate 50% of the eligible pension, you allocate 50% of the tax withheld on that pension. CRA’s own example is that proportion. If one slip mixes eligible and non-eligible amounts, the page gives the fraction: eligible pension divided by total pension on the slip, times the tax withheld. CRA also says it cannot approve a reduction of tax withheld at source based on an election to split. You settle the difference on the return. You do not get a new TD1 out of T1032.</p>

    <h2>How does the $2,000 pension income amount work after the split?</h2>

    <p>Each spouse claims the pension income amount on line 31400 using Step 4 of the form. The transferor claims the lesser of $2,000 and the eligible pension income left after the allocation. The receiver claims the lesser of $2,000 and the pension income that is eligible for the amount on their return, including the allocated income that qualifies for them. Two $2,000 claims are possible. They are not automatic. A receiver under 65 may be allocated income that still does not qualify for their own pension credit. The line 31400 page reviewed alongside this one is labeled tax year 2025. The splitting page, dated 2026-01-20, still states the $2,000 figure. If a later indexation changes the dollar, the form for that year wins.</p>

    <div class="warning-box">
        <strong>CPP sharing is a different program:</strong>
        <p>Service Canada’s CPP amount page says you can share your CPP retirement pension with a spouse or common-law partner, and that sharing can lower tax by decreasing taxable income. That is not Form T1032, and CPP is on CRA’s list of income that is not eligible for pension income splitting. Do not put CPP on T1032 because a blog treated “pension” as one word. The estimate of the pension itself is <a href="/blog/how-much-cpp-will-i-get/">how much CPP you will get</a>. A spousal RRSP, which moves income before 65 by whose name is on the account, is <a href="/blog/spousal-rrsp-canada/">the spousal RRSP guide</a>. The wider couple strategies are <a href="/blog/income-splitting-strategies-couples/">income splitting for couples</a>.</p>
    </div>

    <h2>Frequently asked questions</h2>

    <h3>Can both spouses split to each other in the same year?</h3>
    <p>No. CRA says only one joint election can be made for a tax year. If both of you have eligible pension income, you decide who transfers and who receives. You do not file two T1032 elections in opposite directions.</p>

    <h3>Does my spouse have to be 65?</h3>
    <p>No. CRA says you can split eligible pension income regardless of the receiving spouse’s age, if the other conditions are met. The transferor still has to have income that qualifies, which for RRIF and RRSP annuity income generally means the transferor is 65 or the payment is because a spouse died. The receiver’s age can still block their own $2,000 pension credit.</p>

    <h3>Can I split OAS or CPP?</h3>
    <p>Not on T1032. Both are on the non-eligible list. CPP sharing, if you want it, is a Service Canada election with its own rules. This page does not restate the sharing fraction. OAS is not split and is not shared. It can be affected, because CRA says OAS repayment uses one taxpayer’s net income, and allocating pension income changes those two net incomes.</p>

    <h3>Will the election change my GST/HST credit?</h3>
    <p>CRA says benefits calculated on the combined net income of both spouses, and it names the GST/HST credit, do not change because of the split. Credits and benefits that use one person’s net income can change. The age amount and the OAS recovery tax are the ones CRA names. Run those before you treat 50% as the obvious percentage.</p>

    <h3>Can I use a different percentage next year?</h3>
    <p>Yes. CRA says that if you elected in 2024 you do not have to use the same percentage in 2025. The election is annual. A year you do not want to split, you do not elect. A year the income mix changes, you pick a new percentage up to 50%.</p>

    <h3>Does a RRIF minimum have to be split?</h3>
    <p>No. The minimum forces the withdrawal. The election is optional and capped at half of what is eligible. You can allocate nothing, or any percentage up to 50. The factor that set the minimum is <a href="/blog/rrif-minimum-withdrawal/">the RRIF table</a>. Splitting does not reduce the minimum the carrier has to pay.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/pension-income-splitting.html">CRA: pension income splitting</a>, page details 2026-01-20</li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-31400-pension-income-amount.html">CRA: line 31400 pension income amount</a>, tax year 2025 page</li>
        <li><a href="https://www.canada.ca/en/services/benefits/publicpensions/cpp/amount.html">Canada.ca: CPP payment amounts, including pension sharing</a></li>
    </ul>

    <div class="cta-section">
        <p><strong>The form moves income. The return prices it.</strong></p>
        <p>Two net incomes, the pension credit, and the OAS recovery tax are filing questions. The 2026 tax guide is that half of the election.</p>
        <a href="/ebooks/tax-guide/" class="cta-button">Get the 2026 Tax Guide — $49 CAD</a>
    </div>

    ${footer}

</div>`
  ),

  {
    ...retirementPost(
    'lira-unlocking-by-province',
    'LIRA Unlocking Rules by Province (2026): 50% Unlock, Small Balances and Hardship',
    'How to unlock a LIRA or LIF in Canada in 2026: 50% unlocking, small-balance limits ($14,920 to $37,300) and hardship rules, province by province.',
    `<div class="container">

    <div class="hook">
        A locked-in retirement account (LIRA) or life income fund (LIF) stays locked under the pension law that governed the plan, <span class="highlight">not where you live</span> now. In 2026 the small-balance limit ranges from <strong>$14,920 to $37,300</strong> depending on that law. A one-time 50% unlock exists federally and in Alberta, Manitoba, Ontario, and Nova Scotia, but not in British Columbia.
    </div>

    <p>A locked-in retirement account (LIRA) or life income fund (LIF) is locked-in money from a former employer pension. You unlock it in 2026 through the financial institution that holds the account, not the regulator, using the statute named on the contract, where the small-balance limit runs from $14,920 to $37,300.</p>

    <p>Where the unlocked dollars sit in a retirement plan is <a href="/blog/how-much-money-retire-canada/">how much you need to retire</a> and <a href="/blog/build-retirement-plan-7-steps/">the seven-step plan</a>. The <a href="/blog/canadian-retirement-calculator/">retirement calculator</a> has no LIRA field. If you unlock to cash, that cash is not a TFSA contribution unless you put it there, and the tax on the withdrawal is not in the tool. If the lump sum came from a defined-benefit plan in the first place, the decision to commute is <a href="/blog/commuted-value-pension-canada/">commuted value</a>. The rest of these guides are on the <a href="/category/retirement/">retirement hub</a>.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>The Office of the Superintendent of Financial Institutions (OSFI), date modified 2026-01-02, lists financial hardship, non-residency, shortened life expectancy, a one-time 50% unlock from a restricted life income fund (RLIF), and a small-balance unlock. The year’s maximum pensionable earnings (YMPE) it uses for 2026 is $74,600.</li>
            <li>Federal 50% unlocking is from an RLIF, within 60 days of the deposit, up to 50%, transferred to a registered retirement savings plan (RRSP) or registered retirement income fund (RRIF). It is not cash taken straight from the RLIF, and unused room does not carry forward.</li>
            <li>Ontario’s Financial Services Regulatory Authority (FSRA) user guide for Form 5, for applications signed in 2026, sets a small-balance test at less than $29,840 across every Ontario locked-in account you own, at age 55 or older. That is not $37,300.</li>
            <li>Ontario also allows up to 50% out of a Schedule 1.1 LIF within 60 days of a transfer from a pension plan or a LIRA, on Form 5.2, to the financial institution. Cash or a registered transfer, not a mix of both.</li>
            <li>British Columbia has no 50% unlock. Alberta allows up to 50% from age 50 when the LIRA moves to a LIF. Manitoba allows a one-time 50% at 55 and full unlocking at 65. Saskatchewan lets someone 55 or older move the money to a prescribed RRIF with no withdrawal maximum.</li>
            <li>Quebec removed the LIF maximum for owners 55 or older on January 1, 2025. A Quebec LIRA refund needs age 65 or older and total locked-in savings of $29,840 or less.</li>
        </ul>
    </div>


    <nav class="toc" aria-label="On this page">
        <strong>On this page</strong>
        <ul>
            <li><a href="#which-law">Which law locks the account?</a></li>
            <li><a href="#federal-unlock">What can you unlock from a federal locked-in account?</a></li>
            <li><a href="#ontario-unlock">What can you unlock from an Ontario locked-in account?</a></li>
            <li><a href="#fifty-percent">Which provinces allow 50% unlocking in 2026?</a></li>
            <li><a href="#how-to-unlock">How do you actually unlock a LIRA?</a></li>
            <li><a href="#faq">Frequently asked questions</a></li>
            <li><a href="#sources">Sources</a></li>
            <li><a href="#related-reading">Related reading</a></li>
        </ul>
    </nav>

    <h2 id="which-law">Which law locks the account?</h2>

    <p>The lock follows the pension plan. A federally regulated private-sector plan is the Pension Benefits Standards Act, 1985, and OSFI’s unlocking chart. A plan registered in Ontario is the Ontario Pension Benefits Act, and FSRA’s forms. Moving to another province does not, by itself, rewrite the contract. The financial institution can tell you which statute is printed on the LIRA or LIF. If you have two locked-in accounts from two employers, you can be under two statutes at once. OSFI says the federal public service pension itself is the Public Service Superannuation Act, not the PBSA, but money transferred out of that plan into a locked-in RRSP, LIF, or RLIF then follows the federal locked-in rules.</p>

    <h2 id="federal-unlock">What can you unlock from a federal locked-in account?</h2>

    <p>OSFI’s chart is the authority for the federal options. Not every option is available from every vehicle. Forms go to the financial institution, not to OSFI.</p>

    <div class="table-wrapper">
    <table>
        <caption>Federal unlocking, OSFI chart, YMPE for 2026 of $74,600, reviewed October 28, 2026</caption>
        <thead>
            <tr>
                <th>Option</th>
                <th>Where</th>
                <th>Amount OSFI states</th>
                <th>Consent</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Low income, financial hardship</td>
                <td>Locked-in RRSP, LIF, RLIF, RLSP</td>
                <td>From 50% of the YMPE ($37,300) at $0 expected income, down to $0 when expected income is 75% of the YMPE or more ($55,950)</td>
                <td>Form 2, spouse or common-law partner</td>
            </tr>
            <tr>
                <td>High medical or disability-related costs</td>
                <td>Same vehicles</td>
                <td>Up to 50% of the YMPE, $37,300 in 2026, depending on expected costs</td>
                <td>Form 2</td>
            </tr>
            <tr>
                <td>Non-residency for at least two calendar years</td>
                <td>Those vehicles, and a pension plan may release funds but does not have to</td>
                <td>The whole balance</td>
                <td>Spousal consent is not required by the PBSA. The institution may still ask.</td>
            </tr>
            <tr>
                <td>Shortened life expectancy, certified by a physician</td>
                <td>Those vehicles. A pension plan may pay instead of a pension, and may not, and the option is unavailable if the pension has already started.</td>
                <td>The whole balance</td>
                <td>Not required by the PBSA</td>
            </tr>
            <tr>
                <td>One-time 50%, age 55 or older in the calendar year, within 60 days of the deposit into the RLIF</td>
                <td>RLIF only</td>
                <td>Up to 50%, transferred to an RRSP or RRIF. Not taken as cash from the RLIF.</td>
                <td>Form 2</td>
            </tr>
            <tr>
                <td>Small balance, age 55 or older in the calendar year</td>
                <td>Locked-in RRSP, LIF, RLIF, RLSP</td>
                <td>All of those federal accounts together at or under 50% of the YMPE, $37,300 in 2026</td>
                <td>Form 2 and Form 3</td>
            </tr>
        </tbody>
    </table>
    </div>

    <p>Checked October 28, 2026, from OSFI’s unlocking page. A separate small-pension rule lets a plan administrator pay out a pension benefit that is under 20% of the YMPE in the year membership ended. That one is the plan’s choice, from the pension plan, not from the LIRA. OSFI says you can combine options in the same year if each option’s conditions are met. A LIF or RLIF annual maximum is separate from, and in addition to, unlocking. Withdrawals from the LIF still count as expected income in the hardship formula.</p>

    <p>The 50% option is easy to over-read. OSFI’s RLIF page says you may unlock up to 50%, not exactly 50%, and that there is no carry-forward. If you unlock less, you cannot come back later for the rest under that option. The 50% is measured on the date of the withdrawal, and the withdrawal has to fall within 60 days of when the RLIF was established, meaning the date funds were first deposited. The PBSR requires the unlocked amount to be transferred to an RRSP or a RRIF. OSFI says that direct transfer generally does not use RRSP contribution room. A later cash withdrawal from the RRSP or RRIF is taxable. A transfer to a spousal RRSP is permitted by the pension regulations and may still have tax consequences. OSFI tells you to ask CRA about those.</p>

    <h2 id="ontario-unlock">What can you unlock from an Ontario locked-in account?</h2>

    <p>FSRA’s Form 5 user guide, for applications signed in 2026, is a different list. It applies only to accounts governed by the Ontario Pension Benefits Act. Federal accounts cannot use the Ontario form.</p>

    <div class="table-wrapper">
    <table>
        <caption>Ontario non-hardship unlocking, FSRA Form 5 user guide and Form 5.2, reviewed October 28, 2026</caption>
        <thead>
            <tr>
                <th>Option</th>
                <th>Test stated on the guide or form</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Shortened life expectancy</td>
                <td>A physician says an illness or physical disability is likely to shorten life expectancy to less than two years. You can withdraw all or part.</td>
            </tr>
            <tr>
                <td>Small amount at 55 or older</td>
                <td>The total of every Ontario locked-in account you own is less than $29,840 for applications signed in 2026. The guide’s note ties that dollar to 40% of the YMPE. You must withdraw or transfer all of the account you apply on.</td>
            </tr>
            <tr>
                <td>Amount over the Income Tax Act transfer limit</td>
                <td>The excess that was transferred into the locked-in account can be withdrawn. You need a statement from the former plan administrator or from CRA.</td>
            </tr>
            <tr>
                <td>Non-resident</td>
                <td>At least 24 months since you left Canada, plus CRA’s written determination that you are a non-resident. You withdraw all of the account.</td>
            </tr>
            <tr>
                <td>50% from a Schedule 1.1 LIF</td>
                <td>Within 60 days of a transfer from a pension plan or a LIRA into that LIF, up to 50% of the market value transferred, not counting later gains or losses. Form 5.2 goes to the institution, not to FSRA. The money is all cash or all a transfer to an RRSP or RRIF, not a mix.</td>
            </tr>
        </tbody>
    </table>
    </div>

    <p>Checked October 28, 2026. Financial hardship is real in Ontario and it is not Form 5. The user guide says to contact the financial institution for hardship. Spouse consent is part of the non-hardship application when the guide says Part 4 applies. Unlocking can remove creditor protection the Pension Benefits Act gave the locked-in money. FSRA says to ask CRA about tax and to ask the benefit office about GIS, OAS, and similar programs before you take cash.</p>

    <div class="example-box">
        <strong>Illustration: why the two small-balance tests are not interchangeable</strong>
        <p>OSFI’s federal test for 2026 is all federal locked-in accounts together, at or under $37,300, and you will be 55 or older within the calendar year. Ontario’s test for a 2026-signed application is all Ontario locked-in accounts together, less than $29,840, and you are at least 55. A person with $32,000 in one federal LIRA and $32,000 in one Ontario LIRA is not “under both thresholds” and is not “over a national threshold.” Each statute looks only at its own accounts. Forty percent of the $74,600 YMPE is $29,840. Fifty percent is $37,300. Those two products are why the dollars differ. They are not a suggestion to average them.</p>
    </div>

    <p>Those two dollar tests are federal and Ontario only. The next table is the 2026 comparison for every law this page loaded.</p>

    <h2 id="fifty-percent">Which provinces allow 50% unlocking in 2026?</h2>

    <p>In 2026, a one-time unlock of up to 50% exists under the federal Pension Benefits Standards Act and in Alberta, Manitoba, Ontario, and Nova Scotia, and British Columbia has none. Saskatchewan, Quebec, New Brunswick, and Newfoundland and Labrador use other routes, shown in the table.</p>

    <div class="table-wrapper">
    <table>
        <caption>LIRA/LIF unlocking by governing law, 2026 (official regulator pages, checked October 28, 2026)</caption>
        <thead>
            <tr>
                <th>Law</th>
                <th>Bigger unlock</th>
                <th>Small-balance test (2026)</th>
                <th>Notes</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Federal (PBSA, OSFI)</td>
                <td>One-time up to 50% from an RLIF, 55+ in the calendar year, within 60 days of the first deposit; to RRSP/RRIF, not cash</td>
                <td>All federal accounts together ≤ $37,300 (50% of YMPE), 55+</td>
                <td>Hardship up to $37,300; non-residency 2 calendar years</td>
            </tr>
            <tr class="highlight-row">
                <td>British Columbia (BCFSA)</td>
                <td>None: BC law has no 50% unlock</td>
                <td>Each account: ≤ $14,920 under 65, ≤ $29,840 at 65+</td>
                <td>Per account; you cannot split an account to qualify</td>
            </tr>
            <tr>
                <td>Alberta</td>
                <td>Up to 50%, once, age 50+, when moving a LIRA (or plan money) to a LIF; unlocking less forfeits the rest</td>
                <td>Any single account &lt; $14,920 under 65, &lt; $29,840 at 65+</td>
                <td>Pension partner waiver (Form 14 for a LIRA)</td>
            </tr>
            <tr>
                <td>Saskatchewan (FCAA)</td>
                <td>At 55+ (or the plan’s earlier retirement age) move to a prescribed RRIF with no withdrawal maximum; spouse consent Form 1</td>
                <td>≤ $14,920 (20% of YMPE), only if you have no other locked-in money and the contract allows it</td>
                <td>—</td>
            </tr>
            <tr>
                <td>Manitoba</td>
                <td>One-time up to 50% to a prescribed RRIF at 55+; full unlocking at 65+</td>
                <td>All accounts &lt; $29,840 (under 65 the test adds 6% a year interest to age 65)</td>
                <td>—</td>
            </tr>
            <tr>
                <td>Ontario (FSRA)</td>
                <td>Up to 50% of money moved into a Schedule 1.1 LIF, within 60 days (Form 5.2)</td>
                <td>All Ontario accounts &lt; $29,840, 55+ (Form 5)</td>
                <td>Hardship uses separate FHU forms</td>
            </tr>
            <tr>
                <td>Quebec (Retraite Québec)</td>
                <td>No LIF withdrawal maximum at 55+ since January 1, 2025 (but no direct LIF transfer to an RRSP or RRIF)</td>
                <td>LIRA refund: 65+ and all locked-in savings ≤ $29,840</td>
                <td>Non-residency 2 years</td>
            </tr>
            <tr>
                <td>New Brunswick (FCNB)</td>
                <td>One-time LIF-to-RRIF transfer: the lesser of 25% of the balance or 3× the LIF annual maximum</td>
                <td>Age-based: $29,840 at 65–71, $16,663 at 55, $12,451 at 50</td>
                <td>Spouse consent Form 3.7</td>
            </tr>
            <tr>
                <td>Nova Scotia</td>
                <td>Up to 50% of money moved into a Schedule 4A LIF, 55+, within 60 days (Form 20)</td>
                <td>All LIRAs and LIFs &lt; $37,300, 55+ (Form 11)</td>
                <td>—</td>
            </tr>
            <tr>
                <td>Newfoundland and Labrador</td>
                <td>No 50% unlock listed</td>
                <td>&lt; $29,840 (40% of YMPE) if eligible for an immediate pension, or &lt; $7,460 (10%) any time (Form 7)</td>
                <td>Shortened life, non-residency 2 years, hardship</td>
            </tr>
        </tbody>
    </table>
    </div>

    <p>Prince Edward Island and the territories: we did not find a separate unlocking schedule; check the statute printed on your contract.</p>

    <p>All dollar limits move with the YMPE ($74,600 in 2026), so they change every January.</p>

    <div class="did-you-know">
        <strong>Did you know:</strong>
        <p>In 2026, British Columbia has no 50% one-time unlock. The BC Financial Services Authority (BCFSA) says the legislation does not provide that option. The small-balance test is per account: $14,920 under 65, and $29,840 at 65 or older.</p>
    </div>

    <h3>Example: the same $25,000 in three provinces</h3>
    <div class="example-box">
        <strong>Example: one $25,000 LIRA at age 58, illustration only</strong>
        <p>A 58-year-old has one LIRA worth $25,000. This is an illustration. It assumes a single account, ignores investment growth, and the financial institution decides whether the application qualifies.</p>
        <div class="example-calculation">
            <div class="line"><span>Balance</span><span>$25,000</span></div>
            <div class="line"><span>Ontario, only Ontario account, age 55+</span><span>under $29,840</span></div>
            <div class="line"><span>British Columbia, under 65, per account</span><span>over $14,920</span></div>
            <div class="line"><span>British Columbia at 65, per account</span><span>limit $29,840</span></div>
            <div class="line total"><span>Alberta, 50% when converting to a LIF</span><span>$12,500</span></div>
        </div>
        <p>Ontario: the balance is under $29,840 and the owner is 55 or older, so the whole account can come out if it is their only Ontario locked-in account. British Columbia: $25,000 is over $14,920 and the owner is under 65, so there is no small-balance unlock; at 65 the per-account limit is $29,840, so it would qualify then. Alberta matches British Columbia on the small-amount rule, so $25,000 does not qualify that way under 65, but from age 50 they could unlock up to $12,500 (50% of $25,000) when converting the LIRA to a LIF.</p>
    </div>

    <h2 id="how-to-unlock">How do you actually unlock a LIRA?</h2>

    <p>You apply to the financial institution that holds the account, using the statute named on the contract. The regulator does not process the form.</p>

    <ol>
        <li>Find the governing law on your contract or statement.</li>
        <li>Check which option you meet in the table above.</li>
        <li>Get the regulator’s current-year form. Most forms are updated each January.</li>
        <li>Get spouse or pension-partner consent, or a waiver, where that option requires it.</li>
        <li>Submit the package to your financial institution. BCFSA, Alberta, OSFI, and FSRA all say not to send the forms to them. Then decide whether the unlocked amount is cash, which is taxable and subject to withholding, or a transfer to an RRSP or a RRIF.</li>
    </ol>

    <ul class="checklist">
        <li>The statute on the contract, not the province you live in now.</li>
        <li>The 2026 option you meet, including the age and the dollar test.</li>
        <li>This year’s form, plus any spouse or partner consent.</li>
        <li>The form filed with the financial institution, not the regulator.</li>
        <li>Cash or a registered transfer chosen before you sign.</li>
    </ul>

    <p>For the tax on a cash unlock in your own file, confirm it with a CPA, a CFP, or a tax lawyer.</p>


    <div class="warning-box">
        <strong>Cash is income. A registered transfer is not new room.</strong>
        <p>OSFI says a direct transfer from the locked-in vehicle to an RRSP or RRIF generally does not use contribution room, and that a withdrawal can still be taxable. FSRA says any withdrawal or transfer may have tax consequences and tells you to call CRA. This page does not quote a withholding percentage. After the money is unlocked into a RRIF, the minimum factors are <a href="/blog/rrif-minimum-withdrawal/">the RRIF table</a>, and at 65 the payment may be splittable under <a href="/blog/pension-income-splitting-canada/">pension income splitting</a>. A defined-benefit plan you have not left yet is <a href="/blog/db-vs-dc-pensions-canada/">defined benefit versus defined contribution</a>.</p>
    </div>

    <h2 id="faq">Frequently asked questions</h2>

    <h3>I moved from Ontario to British Columbia. Do I now use BC rules?</h3>
    <p>Not because you moved. The contract names the law. An Ontario LIRA stays an Ontario LIRA until the money is transferred under a rule that actually changes the governing statute. British Columbia has no 50% option, so a move there does not add one to a BC-governed account and does not rewrite an Ontario account. Ask the institution what is printed on the account before you download a BC form.</p>

    <h3>Is the federal 50% unlock available from a regular LIF?</h3>
    <p>OSFI’s chart says the one-time 50% option is from an RLIF, within 60 days of the funds being deposited there, at age 55 or older in that calendar year. It is a transfer to an RRSP or RRIF, not cash from the RLIF. A regular LIF has the other options, including small balance and hardship, if you meet them. It is not the RLIF 50% option.</p>

    <h3>Can I unlock 50% in Ontario every time I transfer money in?</h3>
    <p>FSRA’s Form 5.2 describes up to 50% of money transferred into a Schedule 1.1 LIF from a pension plan or a LIRA, applied for within 60 days. The schedule material reviewed says each such transfer can open a new 60-day window, and that a transfer from another new LIF does not. The institution will not accept a late form. The unlocked piece is entirely cash or entirely a registered transfer.</p>

    <h3>Do I send the forms to OSFI or FSRA?</h3>
    <p>No. Both offices say the financial institution administers the application. OSFI’s forms page says not to send the forms to the government. FSRA’s user guide says not to send Form 5 to FSRA. The institution decides whether the application meets the rule.</p>

    <h3>Does a spouse have to sign?</h3>
    <p>For federal financial hardship, the one-time 50%, and the small balance, OSFI says the spouse or common-law partner signs Form 2, unless you attest that you do not have one, or a separation agreement or court order clearly ends their interest. Shortened life and non-residency do not require spousal consent under the federal act, though the institution may ask. Ontario’s guide requires the consent parts when the option you picked says so. A missing signature is not a technicality the regulator will waive from a blog.</p>

    <h3>Will unlocking affect GIS?</h3>
    <p>It can, if the cash is income in a year you would otherwise qualify. FSRA says to ask the department that pays the benefit. The GIS maximums and cut-offs that were current for October to December 2026 are in the <a href="/blog/early-retirement-fire-canada/">early retirement</a> article, from the OAS payment page. A transfer that stays inside an RRSP or RRIF is a different tax event from cash. Do not assume they are equal.</p>

    <h3>Can I unlock 50% of a BC LIRA?</h3>
    <p>No. The BC Financial Services Authority (BCFSA) says British Columbia legislation has no 50% one-time unlocking. The options it describes are financial hardship, a small balance, departure from Canada, and a shortened life expectancy.</p>

    <h3>Is there still a LIF maximum in Quebec?</h3>
    <p>Not for an owner who is 55 or older. Retraite Québec removed the life income fund (LIF) maximum on January 1, 2025. Under 55, life income and temporary income limits still apply.</p>

    <h2 id="sources">Sources</h2>
    <ul>
        <li><a href="https://www.osfi-bsif.gc.ca/en/supervision/pensions/administering-pension-plans/guidance-topic/unlocking-funds-pension-plan-or-locked-retirement-savings-plan">OSFI: unlocking from a pension plan or a locked-in plan</a>, date modified 2026-01-02, checked October 28, 2026</li>
        <li><a href="https://www.osfi-bsif.gc.ca/en/supervision/pensions/administering-pension-plans/guidance-topic/unlocking-restricted-life-income-funds">OSFI: unlocking from a restricted life income fund</a>, checked October 28, 2026</li>
        <li><a href="https://www.fsrao.ca/industry/pensions/pensions-all-forms/user-guide-form-5-application-withdraw-or-transfer-money-ontario-locked-account">FSRA: Form 5 user guide</a>, 2026 application amounts, checked October 28, 2026</li>
        <li><a href="https://www.fsrao.ca/form-52-application-withdraw-or-transfer-50-money-transferred-schedule-11-lif">FSRA: Form 5.2, up to 50% from a Schedule 1.1 LIF</a>, last update 2026-01-01, checked October 28, 2026</li>
        <li><a href="https://www.fsrao.ca/consumers/pensions/events-may-affect-your-pension/pension-unlocking-non-hardship">FSRA: non-hardship pension unlocking</a>, checked October 28, 2026</li>
        <li><a href="https://www.bcfsa.ca/public-resources/pensions/unlocking-pension-funds">BCFSA: unlocking pension funds</a>, checked October 28, 2026</li>
        <li><a href="https://open.alberta.ca/dataset/3e08374c-ba38-4b96-abf0-6fd15dae7109/resource/c2419a4b-4a85-4453-91e8-4bb3ef51831b/download/tbf-accessing-pension-funds-information-for-individuals-2026.pdf">Alberta: Accessing pension funds, information for individuals (2026)</a>, checked October 28, 2026</li>
        <li><a href="https://fcaa.gov.sk.ca/public/CKeditorUpload/Bulletin_-_Unlocking_Pension_Money_(Updated_December_2025).pdf">Financial and Consumer Affairs Authority (Saskatchewan): Unlocking pension money (updated December 2025)</a>, checked October 28, 2026</li>
        <li><a href="https://www.manitoba.ca/asset_library/en/pension/pdf/bulletin4.pdf">Manitoba: pension bulletin 4</a>, checked October 28, 2026</li>
        <li><a href="https://www.retraitequebec.gouv.qc.ca/en/professionals-employers/professionals-involved-pension-plans/liras-lifs/refunding-liras">Retraite Québec: refunding LIRAs</a>, checked October 28, 2026</li>
        <li><a href="https://www.retraitequebec.gouv.qc.ca/en/professionals-employers/professionals-involved-pension-plans/liras-lifs/amendments-lifs-2025">Retraite Québec: LIF amendments (2025)</a>, checked October 28, 2026</li>
        <li><a href="https://fcnb.ca/sites/default/files/2025-12/2026%20Maximum%20Asset%20Limits%20for%20Small%20Pensions%20and%20LIRAs%20.pdf">Financial and Consumer Services Commission (New Brunswick): 2026 maximum asset limits for small pensions and LIRAs</a>, checked October 28, 2026</li>
        <li><a href="https://fcnb.ca/sites/default/files/2025-12/2026%20Example%20of%20Calculation%20%E2%80%93%20Transfer%20from%20LIF%20to%20RRIF.pdf">Financial and Consumer Services Commission (New Brunswick): 2026 example, transfer from a LIF to a RRIF</a>, checked October 28, 2026</li>
        <li><a href="https://www.novascotia.ca/sites/default/files/documents/1-4151/form-11-withdrawal-lira-lif-2026-en.pdf">Nova Scotia: Form 11, withdrawal from a LIRA or LIF (2026)</a>, checked October 28, 2026</li>
        <li><a href="https://novascotia.ca/finance/pensions/docs/pensions-form-20.pdf">Nova Scotia: Form 20</a>, checked October 28, 2026</li>
        <li><a href="https://www.gov.nl.ca/gs/pension-regulation/unlocking-your-pension-benefit/">Newfoundland and Labrador: unlocking your pension benefit</a>, checked October 28, 2026</li>
        <li><a href="https://www.gov.nl.ca/gs/files/pensions-form-7-application-to-withdraw-a-small-balance.pdf">Newfoundland and Labrador: Form 7, application to withdraw a small balance</a>, checked October 28, 2026</li>
    </ul>

    <h2 id="related-reading">Related reading</h2>
    <ul>
        <li><a href="/category/retirement/">Retirement hub: pensions, RRIFs, and withdrawal order</a></li>
        <li><a href="/blog/rrsp-to-rrif-conversion/">Converting an RRSP to a RRIF, including the age-71 deadline</a></li>
        <li><a href="/blog/rrif-minimum-withdrawal/">RRIF minimum withdrawals for 2026, after a transfer lands</a></li>
        <li><a href="/blog/commuted-value-pension-canada/">Commuted value: the lump sum that may have created the LIRA</a></li>
        <li><a href="/blog/pension-income-splitting-canada/">Pension income splitting once a payment is eligible at 65</a></li>
        <li><a href="/blog/retirement-withdrawal-strategy/">Retirement withdrawal order after the money is unlocked</a></li>
    </ul>

    <div class="cta-section">
        <p><strong>The lock is the plan’s statute. The tax is still the Income Tax Act.</strong></p>
        <p>A cash unlock lands on a return. The 2026 tax guide is the filing side, not the unlocking form.</p>
        <a href="/ebooks/tax-guide/" class="cta-button">Get the 2026 Tax Guide — $49 CAD</a>
    </div>

    ${footerWithUpdate('October 28, 2026')}

</div>`
    ),
    updated: '2026-10-28',
    youtubeId: 'vid5mjWNVco',
    youtubeTitle: 'Unlock a LIRA in 2026: Your Province\'s 50% and Small-Balance Rules',
    youtubeUploadDate: '2026-10-29T04:57:08-04:00',
    youtubeDuration: 'PT7M34S',
  },

  retirementPost(
    'commuted-value-pension-canada',
    'Commuted Value: Take the Pension or the Lump Sum?',
    'A commuted value is the lump sum your plan calculates in place of a lifetime pension. It is not a CRA table. The termination statement separates what can transfer to a locked-in account from what is paid in cash and taxed. This page did not load a discount rate.',
    `<div class="container">

    <div class="hook">
        Taking a commuted value means giving up the monthly pension the plan promised and taking the lump sum the plan calculates instead. <span class="highlight">There is no CRA table of commuted values.</span> The number is produced by the plan administrator from the pension you have earned, the form of payment the plan offers, and the assumptions the governing pension law requires. On October 3, 2026 this page did not load a current actuarial discount rate, so it will not print one. The statement in your package is the figure. A blog’s interest rate is not.
    </div>

    <p>The pension is one of the income lines in <a href="/blog/how-much-money-retire-canada/">how much you need to retire</a>. How it fits the rest of the accounts is <a href="/blog/build-retirement-plan-7-steps/">the seven-step plan</a>. The <a href="/blog/canadian-retirement-calculator/">retirement calculator</a> has no pension field. If you keep the pension, lower the spending number by the after-tax pension you expect. If you take the lump sum, the transferable part belongs in the RRSP or LIRA balance you type, and the taxable excess belongs in the tax rate, not in a made-up transfer formula.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>Defined-benefit plans are the ones that commute a promise into a lump sum. A defined-contribution balance is already an account. The comparison of the two designs is the <a href="/blog/db-vs-dc-pensions-canada/">DB versus DC guide</a>.</li>
            <li>The Income Tax Act limits how much of a departing member’s lump sum can transfer into a locked-in account. This page did not load the formula. The termination statement prints the transferable amount and the excess. Use that split.</li>
            <li>The transferable amount goes to a LIRA or LIF under the plan’s pension law. Unlocking, if any, is <a href="/blog/lira-unlocking-by-province/">the province rules</a>, not a choice you unlock on the way out.</li>
            <li>The excess paid in cash is income in the year you receive it. Withholding is not the final tax. A large excess can change OAS recovery tax. The thresholds are the clawback article, not a sentence to invent here.</li>
            <li>A life annuity purchased with RRSP money is a different contract from a commuted value. Do not compare a pension quote to an annuity quote that nobody has given you yet.</li>
        </ul>
    </div>

    <h2>What are you actually giving up?</h2>

    <p>A defined-benefit pension is a promise to pay a formula for life, often with a survivor pension if you have a spouse and you do not waive it, and sometimes with a bridge to 65 or with indexation. Whether your plan has those features is on the statement. This article will not assume a cost-of-living increase, a 60% survivor benefit, or a bridge, because those are plan terms, not federal defaults that showed up on a page reviewed October 3, 2026. If the statement is silent, ask the administrator in writing before you sign a waiver.</p>

    <p>The commuted value is the lump sum the administrator will pay instead of that promise, calculated at the date the package specifies. It is sensitive to interest rates because a pension is a stream of future payments, and the lump sum is a present value. When the discount rate the standard requires is higher, the lump sum is smaller. When it is lower, the lump sum is larger. That direction is the concept. The rate itself was not on a page this review could quote, so there is no “current commuted-value interest rate” in this article. If someone offers you a rate from a 2024 PDF, ask whether the standard that applies to your termination date is still that rate.</p>

    <h2>What happens to the lump sum for tax?</h2>

    <p>Leaving a defined-benefit plan, you are usually offered a transfer of some or all of the value to a locked-in retirement account, and a cash payment of anything the tax rules will not let you shelter. The ceiling is an Income Tax Act maximum transfer value. The regulation that sets it was not loaded on October 3, 2026, so this page does not print the formula, the YMPE multiples, or a worksheet. Your statement already did the calculation for your service and your annual pension. Read the two numbers on it: the amount that can transfer, and the amount that will be paid to you.</p>

    <div class="example-box">
        <strong>Illustration of the split, not a real plan</strong>
        <p>Suppose the statement says the commuted value is $500,000, the maximum that can transfer is $380,000, and the excess is $120,000. Those three dollars are a teaching split, not a retrieved assessment. The $380,000 can move to a LIRA. It is locked under the pension law of the plan, which may be federal or a province. The $120,000 is paid in cash and included in income. Withholding on the cash portion is a prepayment, not the tax. The <a href="/blog/federal-tax-brackets/">brackets</a> on a $120,000 top-up, plus the provincial tax, are the bill. If that income lands in a year you are also starting OAS, read <a href="/blog/oas-gis-clawback-canada/">the recovery tax</a> before you treat the excess as spending money.</p>
    </div>

    <p>A direct transfer of the sheltered portion is not a new RRSP contribution and does not need contribution room. That is the same idea OSFI states for a transfer out of a federal locked-in vehicle, and it is the idea CRA states for a direct RRSP-to-RRIF transfer. The cash excess is not a transfer. You cannot “fix” it by contributing it back to an RRSP unless you have room, and the contribution does not erase the income inclusion. If you are near the year you turn 71, the transfer has to land in a vehicle you are still allowed to hold. The deadline is <a href="/blog/rrsp-to-rrif-conversion/">RRSP to RRIF conversion</a>.</p>

    <h2>When is the pension the better tool?</h2>

    <p>Keep the pension when the household needs a cheque that does not depend on markets, when a spouse would receive a survivor pension you would struggle to replace, or when you will not actually invest the lump sum. The plan bears longevity. You do not. A pension that is indexed, if the statement says it is, is a different promise from a flat pension. Do not pay for indexation the text does not include, and do not ignore indexation the text does include.</p>

    <p>Take the lump sum when the pension is small enough that the locked-in account is simpler, when your health makes a long payment stream unlikely and the plan’s death benefit before retirement is thin, or when you have other guaranteed income, CPP and OAS included, and you want the capital. “Small enough” is the plan’s own small-pension rule, not a guess. OSFI’s federal rule, for a plan under the Pension Benefits Standards Act, lets the administrator pay out a benefit worth less than 20% of the YMPE in the year membership ended. The 2026 YMPE on that page is $74,600, and 20% of it is $14,920. That product is arithmetic. It is a federal plan rule, not Ontario’s, and it is the administrator’s option. Other provinces set their own small-benefit tests. They were not loaded here. See the unlocking article before you assume you can take a LIRA in cash the week you commute.</p>

    <div class="warning-box">
        <strong>A waiver is permanent in a way a blog is not:</strong>
        <p>Spousal survivor rights are signed away on a form the pension law specifies, usually with independent advice. OSFI’s unlocking pages are about money already in a locked-in account, not about the waiver you sign on the way out of the plan. Do not commute, and do not waive, on a deadline the administrator set, without reading the survivor option in dollars per month. The estate side of a pension that dies with you, versus a LIRA that remains an asset, is <a href="/blog/estate-planning-wills-poa/">wills and powers of attorney</a> and <a href="/blog/tax-efficient-wealth-transfer/">tax-efficient transfers</a>.</p>
    </div>

    <h2>How should you compare the two on one page?</h2>

    <ul>
        <li><strong>Write the pension in today’s dollars, after tax, for two lifetimes if there is a survivor benefit.</strong> The statement’s gross monthly amount is not the household’s spending.</li>
        <li><strong>Write the lump sum as two piles.</strong> The locked-in pile stays invested under the LIRA rules. The cash pile is what remains after tax, not the excess before tax.</li>
        <li><strong>Do not use a single expected return to “beat” the pension unless you can say whose risk that return is.</strong> The pension is the plan’s promise. The LIRA is your portfolio. A higher expected return is not a higher promise.</li>
        <li><strong>Put CPP and OAS beside both choices.</strong> They do not change because you commuted, except that the taxable excess can change OAS recovery tax and GIS in that year. The start-age choice is <a href="/blog/cpp-when-to-take-canada/">when to take CPP</a>.</li>
        <li><strong>Price health and dental if the pension came with retiree benefits.</strong> Those benefits sometimes end when you take the lump sum. The cost of replacing them is <a href="/blog/healthcare-costs-retirement/">healthcare costs in retirement</a>. This page did not load a premium.</li>
    </ul>

    <h2>Frequently asked questions</h2>

    <h3>Can I commute after I have started the pension?</h3>
    <p>Usually the window is at termination or retirement, before payments start, and the plan text decides. OSFI’s shortened-life option from a federal pension plan is not available once the pension has commenced. Do not assume a pension in pay can be cashed because a LIRA can, in some cases, be unlocked. Ask the administrator whether a commute is still open. If the answer is no, the rest of this article is about the next job, not this cheque.</p>

    <h3>Is the commuted value the same as the transfer value on the statement?</h3>
    <p>People use the words loosely. The statement may show a commuted value, a maximum transfer amount, and a cash excess. Those are not three names for one number. The value is the lump sum. The transfer amount is the part the tax rules let you move into a registered locked-in account. The excess is the taxable remainder. If your statement uses different labels, match them to those jobs before you add them together.</p>

    <h3>Should I take the lump sum to invest it more aggressively?</h3>
    <p>Only if you will actually hold the portfolio through a bad decade, and only after the taxable excess is paid. A commuted value that is spent, or parked in a savings account, was not an investment decision. The pension was a bond-like promise. Replacing it with equities raises the return you might earn and the income you might not. The account location, once the LIRA exists, follows the same placement ideas as any RRSP, in <a href="/blog/retirement-withdrawal-strategy/">the withdrawal strategy</a>.</p>

    <h3>Does the lump sum include my own contributions with interest?</h3>
    <p>The statement will show a minimum the law requires, often tied to your contributions with interest, if that minimum is higher than the commuted value. This page did not load each province’s minimum-commuted-value rule. If the package shows a contributions-with-interest floor, that floor is the number. Do not add it on top of the commuted value unless the statement adds it.</p>

    <h3>What if I am offered an annuity from an insurer instead?</h3>
    <p>That is a third contract. The plan’s pension, the commuted value, and a life annuity you buy with the transferable amount are three different promises. Annuity prices move with markets and with your age, and no national quote was published on the pages reviewed October 3, 2026. The product, including the ALDA limits, is <a href="/blog/annuities-canada-guide/">annuities in Canada</a>. Get a written quote before you treat an annuity as the pension you declined.</p>

    <h3>Can I split the taxable excess with my spouse?</h3>
    <p>A cash excess from a commuted value is generally a lump sum, not a life annuity payment. CRA’s splitting page treats life annuity payments from a pension plan as eligible pension income, and it says a lump-sum payment is a different amount. Do not put the excess on Form T1032 because it came from a pension. Confirm the slip. Eligible pension income, and what is not, is <a href="/blog/pension-income-splitting-canada/">pension income splitting</a>.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="https://www.osfi-bsif.gc.ca/en/supervision/pensions/administering-pension-plans/guidance-topic/unlocking-funds-pension-plan-or-locked-retirement-savings-plan">OSFI: unlocking, including the small-pension rule and the 2026 YMPE of $74,600</a></li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/rrsps-related-plans/rrsp-options-when-you-turn-71/options-your-rrsps.html">CRA: RRSP options at 71, including a direct transfer versus a taxable withdrawal</a></li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/pension-income-splitting.html">CRA: pension income splitting, life annuity versus amounts that do not qualify</a></li>
    </ul>

    <div class="cta-section">
        <p><strong>The lump sum is a statement. The excess is a tax return.</strong></p>
        <p>Brackets on a one-year inclusion are the part a pension quote leaves out. The 2026 tax guide is that page.</p>
        <a href="/ebooks/tax-guide/" class="cta-button">Get the 2026 Tax Guide — $49 CAD</a>
    </div>

    ${footer}

</div>`
  ),

  retirementPost(
    'probate-fees-by-province-canada',
    'Probate Fees by Province (and Legal Ways to Reduce Them)',
    'Ontario’s own example: an estate of $240,000 pays $2,850 in Estate Administration Tax, $15 per $1,000 above $50,000. British Columbia and Alberta use different statutes. Several provincial schedules did not load on October 3, 2026.',
    `<div class="container">

    <div class="hook">
        Probate is not one Canadian fee. Ontario’s Estate Administration Tax, for a certificate applied for on or after January 1, 2020, is <span class="highlight">$0 if the estate is $50,000 or less</span>. Above that, Ontario’s worked example taxes $0 on the first $50,000 and $15 per $1,000 on the rest, after rounding the estate up to the next thousand. Their example is an estate of $240,000 and tax of $2,850. British Columbia’s Probate Fee Act and Alberta’s court-fee schedule are different numbers. Quebec, Nova Scotia, New Brunswick, Prince Edward Island, Newfoundland and Labrador, and the territories did not load a current schedule on October 3, 2026.
    </div>

    <p>The estate is the last step of <a href="/blog/how-much-money-retire-canada/">how much you need to retire</a> only in the sense that a plan which ignores it spends money twice. The working plan is <a href="/blog/build-retirement-plan-7-steps/">the seven-step retirement plan</a>. The <a href="/blog/canadian-retirement-calculator/">retirement calculator</a> does not subtract probate. It ends with an account balance. What happens to that balance, and which assets never enter the estate, is the point of this page and of <a href="/blog/estate-planning-wills-poa/">wills and powers of attorney</a>.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>Ontario, reviewed on ontario.ca October 3, 2026: no Estate Administration Tax at $50,000 or under. Above that, the published example is $15 per $1,000 on the value over $50,000, estate rounded up to the next $1,000.</li>
            <li>British Columbia’s Probate Fee Act: no fee at $25,000 or under. Then $6 per $1,000, or part, of the slice above $25,000 up to $50,000, plus $14 per $1,000, or part, above $50,000. The Supreme Court Civil Rules add a $200 fee to start the proceeding, waived at $25,000 or under.</li>
            <li>Alberta’s court-fee page, Surrogate Matters: $35, $135, $275, $400, and $525 as the net value of property in Alberta crosses $10,000, $25,000, $125,000, and $250,000. The top row is a cap, not a percentage.</li>
            <li>Saskatchewan’s Administration of Estates Regulations, 2020, Table 1, charges $200 for the grant application. Manitoba’s court-fee page lists a $250 notice of application and does not publish a percentage of the estate. Neither page is a rate you can scale to a million dollars.</li>
            <li>Ontario’s own page is also the reduction list: no certificate means no tax, and named beneficiaries and joint property with survivorship are excluded from the value. Other provinces define the estate in their own statutes.</li>
        </ul>
    </div>

    <h2>What did each loaded page actually charge?</h2>

    <table>
        <caption>Probate and estate fees loaded on October 3, 2026. Blank cells were not on a page this review could use.</caption>
        <thead>
            <tr>
                <th>Place</th>
                <th>What the official page charges</th>
                <th>Source reviewed</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Ontario</td>
                <td>$0 at $50,000 or less. Over that, $0 on the first $50,000 and $15 per $1,000 of the remainder, after rounding up to the next $1,000. Published example: $240,000 pays $2,850.</td>
                <td><a href="https://www.ontario.ca/page/estate-administration-tax">Estate Administration Tax</a></td>
            </tr>
            <tr>
                <td>British Columbia</td>
                <td>Probate Fee Act: $0 if the estate does not exceed $25,000. Above that, $6 per $1,000 or part from $25,000 to $50,000, plus $14 per $1,000 or part above $50,000. Civil Rules item 1: $200 to commence, and no fee under that item if the estate does not exceed $25,000.</td>
                <td><a href="https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/99004_01">Probate Fee Act</a> and <a href="https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/168_2009_06">Supreme Court Civil Rules</a></td>
            </tr>
            <tr>
                <td>Alberta</td>
                <td>Grant of probate or administration, net value in Alberta: $35 at $10,000 or less; $135 over $10,000 to $25,000; $275 over $25,000 to $125,000; $400 over $125,000 to $250,000; $525 over $250,000.</td>
                <td><a href="https://www.alberta.ca/court-fees">Alberta court fees, Surrogate Matters</a></td>
            </tr>
            <tr>
                <td>Saskatchewan</td>
                <td>Table 1 of the regulations: $200 to apply for letters probate or administration. $300 for an application under section 7 of the Act. This is a registrar tariff. A separate percentage tax was not in the PDF.</td>
                <td><a href="https://publications.saskatchewan.ca/api/v1/products/110054/formats/123571/download">Administration of Estates Regulations, 2020</a></td>
            </tr>
            <tr>
                <td>Manitoba</td>
                <td>Court fees page, probate section: notice of application $250, caveat $30, application to pass accounts $150, search $20 or $40. No percentage of estate value is printed there.</td>
                <td><a href="https://www.gov.mb.ca/justice/courts/fees.html">Manitoba Court Services fees</a></td>
            </tr>
            <tr>
                <td>Quebec, Nova Scotia, New Brunswick, Prince Edward Island, Newfoundland and Labrador, Yukon, Northwest Territories, Nunavut</td>
                <td>Not loaded. Do not borrow another province’s percentage.</td>
                <td>Check that province or territory’s court tariff before you estimate.</td>
            </tr>
        </tbody>
    </table>

    <p>Table as of October 2026. Fees can be owed in more than one province when property sits in more than one province. Ontario says real estate outside Ontario is not included in its tax. British Columbia’s Act charges the value of the estate that falls under that Act. Alberta’s schedule says “property in Alberta.” A cottage in a second province is not free just because the will was probated at home.</p>

    <div class="example-box">
        <strong>Illustration: $1,000,000, using only the schedules above</strong>
        <p>Ontario: $1,000,000 is already a round thousand. The slice above $50,000 is $950,000, which is 950 thousands. At $15 per thousand, that is $14,250. British Columbia’s Act: 25 thousands in the band above $25,000 and up to $50,000, times $6, is $150, plus 950 thousands above $50,000 times $14, which is $13,300. The Act fee is $13,450. The Civil Rules $200 is on top if that item applies, for $13,650. Alberta: the row “over $250,000” is $525, so $1,000,000 is $525 on that schedule, not a percentage. Saskatchewan’s $200 and Manitoba’s $250 are the application fees those pages state. They are not a claim that a $1,000,000 estate in those provinces costs $200 or $250 in total, because a charge outside those pages was not reviewed. Every dollar in this box is arithmetic on a loaded schedule, or a refusal to invent one.</p>
    </div>

    <h2>What does Ontario leave out of the estate?</h2>

    <p>Ontario’s page is specific, and it should not be copied onto another province as if the exclusions were national. For the Estate Administration Tax, Ontario says the value includes real estate in Ontario net of a mortgage or lien, bank accounts, investments including a TFSA, RRSP, and RRIF, vehicles, property held in another person’s name, and other property wherever situated, including insurance if the proceeds are left to the estate. It then lists what not to include. Insurance paid to a named beneficiary is out. Assets held jointly that pass automatically to the other owner are out. Real estate outside Ontario is out. The CPP death benefit is out. A registered pension plan, RRSP, RRIF, or TFSA with a beneficiary designation or beneficiary declaration is out. A TFSA or RRSP with no beneficiary is in the list of investments that are included. The designation is the difference, not the account type.</p>

    <p>Ontario also says that if no estate certificate is applied for, or none is issued, no tax is owed. A certificate is something a bank or the land registry may still demand. “No certificate” is not a plan if the asset cannot move without one. If the court issues a certificate limited to the assets referred to in a particular will, only those assets go into the value. That is the multiple-will point, and it is Ontario’s wording. It is a drafting job for a lawyer, not a second will you write to hide a house.</p>

    <div class="warning-box">
        <strong>Retitling a house is not a fee hack until the rest of the law agrees:</strong>
        <p>Joint ownership can keep an asset off Ontario’s tax, and it can also gift the asset, expose it to the other person’s creditors, and change the tax cost. A beneficiary designation on an RRSP keeps it off Ontario’s estate value and does not, by itself, stop the RRSP from being income of the deceased or of a beneficiary who is not a rollover spouse. The tax at death is <a href="/blog/tax-efficient-wealth-transfer/">tax-efficient wealth transfer</a> and <a href="/blog/retirement-income-planning/">retirement income planning</a>. Probate is the court fee. Income tax is the larger bill on a registered account with no rollover.</p>
    </div>

    <h2>Which reductions are legal because a statute already excludes the asset?</h2>

    <ul>
        <li><strong>Name a beneficiary on the RRSP, RRIF, TFSA, pension, and life insurance</strong> where the contract and the province allow a designation. Ontario’s page treats that designation as an exclusion. Confirm the other province before you rely on it. A designation in a will and a designation on the contract can conflict. The institution will follow the one its form recognizes.</li>
        <li><strong>Use joint ownership only when you mean the other person to own the asset.</strong> Ontario excludes property that passes automatically by survivorship. It does not exclude a house you merely hoped would skip probate. A resulting-trust fight is more expensive than the tax.</li>
        <li><strong>Do not probate assets nobody needs a certificate to transfer.</strong> Ontario charges the tax only if a certificate is applied for and issued. Small accounts, and some jointly held accounts, move without one. A lawyer in the province is who tells you which asset is which.</li>
        <li><strong>Keep property out of a second province if you do not want a second grant.</strong> The schedules above are territorial. A recreational property is the usual surprise. The cottage article on the real-estate side is the lifestyle version. The fee version is this table.</li>
        <li><strong>Do not use an insurance illustration as a probate number.</strong> A life insurance death benefit paid to a named beneficiary is outside Ontario’s estate. The premium and the coverage are a different decision, in <a href="/blog/canadian-insurance-planning-guide/">the insurance guide</a>.</li>
    </ul>

    <h2>Frequently asked questions</h2>

    <h3>Is Ontario 1.5% of the whole estate?</h3>
    <p>Not on the example Ontario publishes. $15 per $1,000 is 1.5%, and the example applies it to the value above $50,000, after rounding up, with $0 on the first $50,000. An estate of $50,000 or less pays no Estate Administration Tax, and still files an Estate Information Return within 180 days if a certificate was issued. Estates that applied before January 1, 2020 used $5 per $1,000 on the first $50,000 and $15 above that. That older schedule is not the one for a certificate you apply for now.</p>

    <h3>Does British Columbia charge $14 per $1,000 on the entire estate?</h3>
    <p>No. The Act charges nothing at $25,000 or under. The $6 rate applies only to the band between $25,000 and $50,000. The $14 rate applies only to the value above $50,000. Partial thousands count as a full thousand. The $200 commencement fee in the Civil Rules is a separate item, waived when the estate does not exceed $25,000.</p>

    <h3>Is Alberta really capped?</h3>
    <p>On the court-fee page reviewed October 3, 2026, a grant where the net value of property in Alberta is over $250,000 costs $525. A larger estate does not move into a higher row, because there isn’t one. Other filings on that page, such as $300 to open certain estate files, can still apply. The $525 is the grant line, not a promise that the estate’s legal bill is $525.</p>

    <h3>Why is Quebec missing?</h3>
    <p>The Quebec page requested on October 3, 2026 did not load. Quebec succession is not the common-law grant these other statutes describe, and this article will not state a fee, or state that a notarial will skips every fee, without that page. Read the current Quebec source before you plan as if probate were $0.</p>

    <h3>Do RRSPs always avoid probate?</h3>
    <p>Not as a category. Ontario includes RRSPs and RRIFs in the estate, and then excludes them when there is a beneficiary designation or declaration. No designation, and the account is in the value. A designation to the estate puts the proceeds back in. A designation to a spouse can also be an income-tax rollover. Those are two different statutes. One saves the Estate Administration Tax. The other defers income tax. You can have either without the other.</p>

    <h3>Should I put my adult child on the house title to save the fee?</h3>
    <p>Only if you intend them to own it now, with the creditor, marital, and tax consequences that follow. Ontario’s exclusion is for joint property that actually passes by survivorship, not for a name added as a shortcut. The tax on a disposition you did not mean to make can exceed the fee. Get advice in the province before you change title. The retirement housing decision, while you are alive, is <a href="/blog/housing-decisions-retirement/">housing in retirement</a>.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="https://www.ontario.ca/page/estate-administration-tax">Ontario: Estate Administration Tax</a>, reviewed October 3, 2026</li>
        <li><a href="https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/99004_01">British Columbia: Probate Fee Act</a></li>
        <li><a href="https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/168_2009_06">British Columbia: Supreme Court Civil Rules, Schedule 1, item 1</a></li>
        <li><a href="https://www.alberta.ca/court-fees">Alberta: court fees, Surrogate Matters</a></li>
        <li><a href="https://publications.saskatchewan.ca/api/v1/products/110054/formats/123571/download">Saskatchewan: The Administration of Estates Regulations, 2020, Table 1</a></li>
        <li><a href="https://www.gov.mb.ca/justice/courts/fees.html">Manitoba: Court Services fees, probate section</a></li>
    </ul>

    <div class="cta-section">
        <p><strong>The court fee is a tariff. The registered account is income.</strong></p>
        <p>A beneficiary designation can do both jobs, or only one. The 2026 tax guide is the income-tax half of an estate.</p>
        <a href="/ebooks/tax-guide/" class="cta-button">Get the 2026 Tax Guide — $49 CAD</a>
    </div>

    ${footer}

</div>`
  ),

  retirementPost(
    'early-retirement-fire-canada',
    'Early Retirement (FIRE) in Canada: Bridge Years, CPP Impact, and Withdrawal Order',
    'CPP can start at 60 and is permanently 0.6% lower per month before 65, which is 36% at 60. OAS cannot start before 65. For October to December 2026 the full OAS pension is $762.50 a month from 65 to 74. The years in between are the bridge.',
    `<div class="container">

    <div class="hook">
        You can start CPP as early as 60. Each month before 65 cuts that pension by <span class="highlight">0.6%</span>, which is 7.2% a year and 36% if you start at 60. OAS cannot start before 65. For October to December 2026, a full OAS pension is up to $762.50 a month from ages 65 to 74, and up to $838.75 from 75. The years you are retired and not yet receiving those cheques are a bridge you fund from the RRSP, the TFSA, a pension, or cash. The maximum CPP at 65, for a pension beginning in January 2026, is $1,507.65 a month. The average at 65, dated July 2026 on the same page, is $858.34. Neither is your bridge.
    </div>

    <p>The spending target those years have to cover is <a href="/blog/how-much-money-retire-canada/">how much you need to retire</a>. The order of the decisions is <a href="/blog/build-retirement-plan-7-steps/">the seven-step plan</a>. Type your own CPP and OAS, including zeros for the years before they start, in the <a href="/blog/canadian-retirement-calculator/">Canadian retirement calculator</a>. The tool will not invent a bridge pension, and it will not apply the 0.6% or 0.7% adjustment for you. If you will start CPP at 60, type the lower annual amount yourself after you have read the when-to-start page.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>CPP from 60 to 65 falls by 0.6% a month, up to 36% at 60. From 65 to 70 it rises by 0.7% a month, up to 42% at 70. There is no increase past 70. Page details on the when-to-start page: 2026-10-02.</li>
            <li>OAS starts at 65 at the earliest. Deferral adds 0.6% a month, up to 36% at 70. The October to December 2026 maximums, if you defer a full pension, run from $762.50 at 65 to $1,037.00 at 70.</li>
            <li>A single person’s GIS for that same quarter is up to $1,138.90 a month if annual net income is under $23,112. A large RRSP withdrawal in a bridge year can erase that supplement. GIS is not in the calculator.</li>
            <li>The January 2026 CPP maximum of $1,507.65 is not the early-retirement pension. Most people are closer to the average the page states, $858.34 at July 2026, or to whatever My Service Canada Account shows.</li>
            <li>Withdrawal order is a tax choice, not a FIRE formula. The RRIF minimum, once you convert, is a floor. OAS recovery tax and GIS are the tests that make “TFSA first” wrong for some households.</li>
        </ul>
    </div>

    <h2>What has to be true before the public pensions start?</h2>

    <p>Retiring at 55, or at 60, means a stretch of years with no OAS and, if you wait, no CPP. CPP is available at 60. OAS is not. Service Canada’s when-to-start page says the earliest OAS age is 65, and that deferral past 70 does not raise the pension further. It also says there is no advantage to waiting if you are eligible for the Guaranteed Income Supplement. During a deferral you cannot get GIS, and your spouse cannot get the Allowance. A household that will be on the supplement should not copy a deferral table built for a full pension and a long life.</p>

    <p>The bridge is the accounts. An RRSP has no annual minimum until it becomes a RRIF. A TFSA withdrawal is not income for the GIS test or for OAS recovery tax. A non-registered account can produce taxable capital gains, dividends, and interest. Which pile you spend first changes the benefits and the tax, which is why <a href="/blog/retirement-withdrawal-strategy/">the withdrawal strategy</a> and <a href="/blog/tfsa-retirement-strategy/">the TFSA in retirement</a> are separate articles. This page will not rank them as a universal order. It will name the tests.</p>

    <h2>How large is the CPP cut if you start early?</h2>

    <p>The when-to-start page, reviewed October 3, 2026, states the percentages and does not print a dollar maximum at age 60. The amount page states the age-65 maximum for a pension beginning in January 2026, $1,507.65 a month, and an average at age 65 of $858.34 as of July 2026. Your estimate is in My Service Canada Account. Starting at 60 multiplies your pension, not the national maximum, by the 36% reduction. This article does not publish “64% of $1,507.65” as an official early maximum. Service Canada applies the reduction to the pension you have earned, and the maximum itself is tied to when the pension begins. Use the estimator. The longer version of the start-age choice, once you are not simply bridging, is <a href="/blog/cpp-when-to-take-canada/">when to take CPP</a> and <a href="/blog/how-much-cpp-will-i-get/">how much CPP you will get</a>.</p>

    <table>
        <caption>CPP and OAS start-age rules reviewed October 3, 2026. OAS dollars are the October to December 2026 full-pension maximums.</caption>
        <thead>
            <tr>
                <th>Age</th>
                <th>CPP</th>
                <th>OAS, full pension, October to December 2026</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>60</td>
                <td>36% lower than the pension at 65. Sixty months times 0.6%.</td>
                <td>Not available.</td>
            </tr>
            <tr>
                <td>65</td>
                <td>No age adjustment. January 2026 maximum at this age: $1,507.65 a month. July 2026 average: $858.34.</td>
                <td>$762.50 a month, ages 65 to 74, if net world income is under the recovery threshold.</td>
            </tr>
            <tr>
                <td>70</td>
                <td>42% higher. Sixty months times 0.7%.</td>
                <td>$1,037.00 a month on the deferral table. Waiting past 70 adds nothing further.</td>
            </tr>
            <tr>
                <td>75</td>
                <td>The CPP adjustment stopped at 70.</td>
                <td>Up to $838.75 if you did not defer. The payments page says the pension was permanently increased by 10% for people 75 and over, starting July 2022.</td>
            </tr>
        </tbody>
    </table>

    <p>Table as of October 2026. The OAS deferral amounts between 65 and 70, from the same when-to-start page, are $817.40 at 66, $872.30 at 67, $927.20 at 68, and $982.10 at 69. Those are maximums for a full pension in this quarter. A partial pension, for fewer than 40 years in Canada after age 18, is a fraction of the full amount. The payments page says not to use the maximum table if you have between 10 and 40 years. Ten years is the floor to be paid while living in Canada. The residency rules are <a href="/blog/oas-eligibility-deferral-canada/">OAS eligibility and deferral</a>.</p>

    <h2>What does a low-income bridge year do to GIS?</h2>

    <p>For October to December 2026, a single, widowed, or divorced person can receive GIS of up to $1,138.90 a month if annual net income is under $23,112. A couple who both receive a full OAS pension can receive up to $685.56 each if combined income is under $30,528. The Allowance, for a 60-to-64-year-old spouse of a GIS recipient, is up to $1,448.06 if combined income is under $42,768. Those figures are maximums, not your payment. The estimator on Canada.ca is the payment.</p>

    <div class="example-box">
        <strong>Illustration: why a “small” RRSP withdrawal is not small next to GIS</strong>
        <p>The single GIS cut-off on that table is $23,112 of annual net income. An RRSP or RRIF withdrawal is income. This article will not compute the phase-out, because the payments page gives the maximum and the cut-off and points to the estimator for amounts in between. The planning point is narrower. A withdrawal that pushes net income through $23,112 is a different decision from the same withdrawal in a year you will not qualify for GIS. Spending TFSA savings, or cutting spending, can keep the supplement. Spending the RRSP because it feels like “using your own money” can turn the supplement off. The stacking version is <a href="/blog/oas-gis-income-stacking-canada/">OAS and GIS income stacking</a>.</p>
    </div>

    <h2>What order should the accounts come out in?</h2>

    <p>Before 65, OAS recovery tax is not the constraint, because OAS has not started. GIS might be, if you are 65 and your spouse is the one who is younger, or if you started OAS at 65 and retired from a low income. The usual tension is simpler: RRSP withdrawals are taxable and create no new room, TFSA withdrawals are not taxable and the room comes back the next year, and a non-registered sale can be a capital gain. A meltdown, drawing the RRSP down on purpose in low-bracket years, is <a href="/blog/rrsp-meltdown-strategy/">the meltdown strategy</a>. It is a fit for a bridge year when the alternative is a larger RRIF minimum later, at a higher bracket, next to OAS. It is a bad fit in a year the withdrawal cancels GIS you needed.</p>

    <p>Once you convert to a RRIF, the minimum is mandatory. At 65 that factor is 1 divided by 25, or 4%, unless you elect a younger spouse’s age. The table is <a href="/blog/rrif-minimum-withdrawal/">RRIF minimum withdrawals</a>. If the minimum is more than the bridge needs, the extra still lands in income. Pension income splitting can move up to half of eligible RRIF income at 65, which is <a href="/blog/pension-income-splitting-canada/">Form T1032</a>. It cannot move CPP, and it cannot move a 58-year-old’s RRSP withdrawal.</p>

    <div class="tip-box">
        <strong>Healthcare is part of the bridge, not a footnote:</strong>
        <p>Employer benefits often end when the paycheque ends. Drug coverage, dental, and travel medical are the gap. This page did not load a premium. The cost categories are <a href="/blog/healthcare-costs-retirement/">healthcare costs in retirement</a>. A private plan, if you buy one, is <a href="/blog/private-health-dental-insurance-canada/">private health and dental coverage</a>. Do not retire on a spending number that still assumes the group plan.</p>
    </div>

    <h2>What should you type into the calculator?</h2>

    <ul>
        <li><strong>Retirement age equal to the age you will stop work,</strong> not 65 by default. The years before CPP and OAS are the point.</li>
        <li><strong>CPP start age 60 only if you will actually start then,</strong> and type the reduced annual amount from your own estimate. Do not type $1,507.65 times 12 unless My Service Canada Account says you are at the maximum and you will start at 65 in a month that maximum describes.</li>
        <li><strong>OAS start age no earlier than 65.</strong> For a full pension in the October to December 2026 quarter, $762.50 a month is $9,150 a year. That product is arithmetic on the published monthly maximum. It is not a promise for a later quarter, and it is not a partial pension.</li>
        <li><strong>Spending that includes the benefits you will replace,</strong> and excludes a mortgage only if it will actually be gone. The housing choice is <a href="/blog/housing-decisions-retirement/">housing decisions</a>.</li>
        <li><strong>A tax rate you believe,</strong> knowing the tool uses one flat rate and spends the TFSA first. If that order would wreck GIS, do not treat the output as a plan. Change the order on paper.</li>
    </ul>

    <h2>Frequently asked questions</h2>

    <h3>Is there a Canadian safe-withdrawal percentage I should use?</h3>
    <p>Not on a CRA or Canada.ca page reviewed for this article. The calculator spends a dollar amount you type, for as long as the accounts last at the return you type. A percentage copied from a foreign study is not a Canadian rule, and this page will not supply one. If the accounts hit zero in the tool before the age you care about, the spending is too high for those assumptions, or the return is. Change one of them and run it again.</p>

    <h3>Should I start CPP at 60 so the bridge is shorter?</h3>
    <p>Only if you need the income or you have a reason to believe you will not collect the larger cheque long enough to matter. The reduction is permanent. Thirty-six percent at 60 is the when-to-start page, not a penalty you can undo at 65. OAS still will not start until 65. Starting CPP early fills part of the bridge and shrinks every later year, including years you might have GIS, because CPP is taxable income.</p>

    <h3>Can I collect GIS while I defer OAS?</h3>
    <p>No. The when-to-start page says you cannot get GIS if you do not receive OAS, and that a spouse cannot get the Allowance during that deferral. It also says there is no advantage to waiting if you are eligible for GIS. The October to December 2026 GIS maximums are for people receiving OAS. Deferral and GIS are different plans.</p>

    <h3>What is the OAS clawback threshold right now?</h3>
    <p>The payments page says OAS is subject to recovery tax if individual net annual income is higher than the net world income threshold, and it states $93,454 for 2025. The when-to-start page says you may have to pay back part of OAS if you earn more than $93,454 in 2025. Use the payments page’s “net world income” wording when you test a year, and read <a href="/blog/oas-gis-clawback-canada/">the clawback guide</a> for how the repayment is calculated. A bridge year with a large RRSP withdrawal can be the year that crosses it, once you are 65 and OAS has started.</p>

    <h3>Do I have to convert the RRSP just because I retired?</h3>
    <p>No. The conversion deadline is the year you turn 71, not the year you stop work. Leaving the RRSP alone avoids a RRIF minimum. It also leaves a taxable account growing toward a larger inclusion later. Convert a slice at 65 if you want eligible pension income you can split. Leave it if the minimum would create income you do not want. The mechanics are <a href="/blog/rrsp-to-rrif-conversion/">the conversion guide</a>.</p>

    <h3>What if my partner is still working?</h3>
    <p>Their salary can fund the bridge and can also push the household out of GIS and into a higher bracket. Pension income splitting does not move employment income. A spousal RRSP, funded in earlier years, is the tool that puts RRSP withdrawals in the retired spouse’s name before 65. That guide is <a href="/blog/spousal-rrsp-canada/">the spousal RRSP</a>. Run the bridge on the household, not on the retired person’s accounts alone.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="https://www.canada.ca/en/services/benefits/publicpensions/cpp/when-start.html">Canada.ca: when to start CPP</a>, page details 2026-10-02</li>
        <li><a href="https://www.canada.ca/en/services/benefits/publicpensions/cpp/amount.html">Canada.ca: CPP payment amounts</a>, page details 2026-09-29</li>
        <li><a href="https://www.canada.ca/en/services/benefits/publicpensions/old-age-security/when-start.html">Canada.ca: when to start OAS</a>, page details 2026-10-02, October to December 2026 deferral table</li>
        <li><a href="https://www.canada.ca/en/services/benefits/publicpensions/old-age-security/payments.html">Canada.ca: OAS payment amounts, October to December 2026</a></li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/completing-slips-summaries/t4rsp-t4rif-information-returns/payments/chart-prescribed-factors.html">CRA: RRIF prescribed factors</a></li>
    </ul>

    <div class="cta-section">
        <p><strong>The bridge is a cash-flow problem. The pensions are a start-date problem.</strong></p>
        <p>Brackets on the RRSP dollars you spend before 65 are the tax half of leaving work early. The 2026 tax guide is that half.</p>
        <a href="/ebooks/tax-guide/" class="cta-button">Get the 2026 Tax Guide — $49 CAD</a>
    </div>

    ${footer}

</div>`
  ),

  retirementPost(
    'annuities-canada-guide',
    'Annuities in Canada: When Buying Guaranteed Income Makes Sense',
    'At 71, CRA lets you buy an annuity with your RRSP instead of withdrawing it or opening a RRIF. An ALDA can start as late as the year you turn 85. The 2026 lifetime ALDA dollar limit is $180,000, and transfers are also capped at 25% of the plan. No national payout rate was published.',
    `<div class="container">

    <div class="hook">
        In the year you turn 71, one of CRA’s three options for an RRSP is to <span class="highlight">buy an annuity</span>. The issuer does not withhold tax on that purchase. You are taxed when the annuity pays you. A separate contract, the advanced life deferred annuity, must start payments before the end of the year you turn 85. CRA’s limits table puts the lifetime ALDA dollar limit at $180,000 for 2026. A second limit is 25% of the plan the money comes from. No page reviewed on October 3, 2026 published a monthly income per $100,000 of premium. A quote from a licensed provider is the rate. This article will not invent one.
    </div>

    <p>Guaranteed income sits beside CPP and OAS in <a href="/blog/how-much-money-retire-canada/">how much you need to retire</a>. The decision belongs in <a href="/blog/build-retirement-plan-7-steps/">the seven-step plan</a> after you know the spending floor you cannot invest your way out of. The <a href="/blog/canadian-retirement-calculator/">retirement calculator</a> does not price an annuity. If you buy one, lower the spending the accounts must cover by the after-tax annuity you will actually receive, and remove the premium from the RRSP balance you type.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>Withdraw, transfer to a RRIF, or buy an annuity. Those are the three doors in the year you turn 71. A direct annuity purchase is not withheld. Payments are income when received.</li>
            <li>An ALDA is a life annuity from a licensed provider. Payments must start by the end of the year you turn 85. It can be on your life or, for a joint-lives contract, on your life and your spouse’s or common-law partner’s.</li>
            <li>The 2026 ALDA dollar limit is $180,000. CRA’s ALDA page also describes a 25% limit on the registered plan funding the purchase. Excess left in the contract at month-end is taxed at 1% a month, on Form T1-OVP-ALDA.</li>
            <li>Annuity and RRIF payments can be eligible pension income at 65, or if received because a spouse died, and then up to 50% can be split on Form T1032. Under 65 they generally are not.</li>
            <li>There is no Canada.ca payout table to copy. Price, guarantee period, indexing, and the insurer’s credit are on the quote. If the quote is silent, the feature is not included.</li>
        </ul>
    </div>

    <h2>What are you buying?</h2>

    <p>A life annuity is a contract to pay you for as long as you live. CRA’s ALDA page uses that definition and adds the joint-lives version: payments continue as long as you or your spouse or common-law partner is alive. A guarantee period, a cash refund, or inflation protection is a feature of a particular contract. It was not a required term on the pages reviewed October 3, 2026, so this article does not describe those features as standard and does not price them. If you want one, it has to be on the illustration the insurer signs.</p>

    <p>Buying the annuity with RRSP or RRIF money is a transfer, not a withdrawal, when it is done as a direct purchase. CRA says the RRSP issuer will not withhold on an annuity purchase, and that you may have to pay tax when payments start. Using non-registered cash is a different tax life. The carrier reports the taxable portion. This page did not load the prescribed-annuity regulation, so it will not state what fraction of each payment is interest. Read the slip. Do not apply a percentage you remember from a textbook.</p>

    <h2>What is an ALDA, in the numbers CRA actually publishes?</h2>

    <p>Since January 1, 2020, an ALDA can be bought from certain registered plans. It is still a life annuity. The difference is the start date: payments have to begin before the end of the year you turn 85, which is later than the year you turn 71, when an ordinary RRSP must be converted or withdrawn. You do not park the entire RRSP until 85. You transfer an amount that survives two limits, and the rest of the RRSP still faces the age-71 choice. That choice is <a href="/blog/rrsp-to-rrif-conversion/">RRSP to RRIF conversion</a>.</p>

    <table>
        <caption>ALDA limits reviewed October 3, 2026. The dollar limit is the CRA limits table. The 25% test and the 1% tax are the ALDA page.</caption>
        <thead>
            <tr>
                <th>Rule</th>
                <th>Figure</th>
                <th>What it is not</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Lifetime dollar limit, 2026</td>
                <td>$180,000</td>
                <td>Not a limit per plan. CRA’s examples treat it as all ALDA purchases together. The 2025 limit on the same table is also $180,000.</td>
            </tr>
            <tr>
                <td>Plan limit</td>
                <td>25% of the plan</td>
                <td>Not 25% of your net worth. CRA’s 2025 example: an RRSP worth $200,000 at the prior year-end can transfer $50,000 without an excess ALDA transfer. $50,000 is 25% of $200,000. That example is labeled 2025 on the page.</td>
            </tr>
            <tr>
                <td>Start date</td>
                <td>Before the end of the year you turn 85</td>
                <td>Not a right to start at 85 if you already had to deal with the rest of the RRSP at 71.</td>
            </tr>
            <tr>
                <td>Tax on a cumulative excess</td>
                <td>1% per month the excess stays in the ALDA</td>
                <td>Not income tax on the annuity payment. File Form T1-OVP-ALDA if you have a cumulative excess at a month-end. A refund of the excess before month-end can avoid the filing, on the terms the page describes.</td>
            </tr>
        </tbody>
    </table>

    <p>Table as of October 2026. CRA’s worked examples on the ALDA page use 2024 and 2025 purchases and a 2025 dollar limit of $180,000. They are examples of the penalty arithmetic, not a quote of what an insurer will pay you at 85. One example transfers $50,000 from a $200,000 RRSP, which is the 25% line, and then shows a further transfer blocked by the lifetime dollar limit. Read Chart A and Chart B on that page before you move a second account. The form that instructs the transfer is T2157.</p>

    <div class="example-box">
        <strong>Illustration: the 25% line and the dollar cap, using CRA’s own shape</strong>
        <p>CRA’s first example ends 2024 with a $200,000 RRSP and a $600,000 RRIF. In 2025 the person transfers $50,000 from the RRSP, which the page calls the maximum from that RRSP without an excess transfer, and then cannot move a full $150,000 from the RRIF because the lifetime limit in the example is $180,000. $50,000 plus $130,000 is $180,000. The extra $20,000 the person hoped to move is the excess the page is teaching. The same arithmetic in 2026 still faces a $180,000 lifetime limit on the limits table. It does not face a new, higher cap this page can cite. Your fair market value at the prior year-end is the input. A market rally after that date does not, by itself, raise the 25% room the chart already computed.</p>
    </div>

    <h2>When does guaranteed income earn its place?</h2>

    <p>Buy a life annuity when the household needs a floor under spending that CPP, OAS, and any defined-benefit pension do not already cover, and when you will not manage a portfolio for that slice. The floor is the quote. CPP’s age-65 maximum for a January 2026 start is $1,507.65 a month, and the average the amount page states for July 2026 is $858.34. Full OAS for October to December 2026 is up to $762.50 from 65 to 74. Those are public pensions, not annuity quotes, and most people do not get the CPP maximum. Add them up only after you have substituted your own CPP estimate. If the public pensions and a workplace pension already cover the non-negotiable bills, an annuity duplicates a promise you have and gives up flexibility you might need.</p>

    <p>Skip it, or keep it small, when you may need the capital, when a spouse’s survivor option on a pension already does this job, or when the quote has no increase and you cannot live with a fixed payment against rising prices. Indexing, if the insurer offers it, will show up as a lower starting payment or a higher premium. The pages reviewed did not quantify that trade. Ask for two illustrations. Do not invent the gap.</p>

    <div class="warning-box">
        <strong>A pension you commute and an annuity you buy are not a round trip:</strong>
        <p>Giving up a defined-benefit pension for a lump sum, then buying an annuity with what is left after tax, can cost you the plan’s terms, the survivor pension, and any retiree benefits. The commute is <a href="/blog/commuted-value-pension-canada/">commuted value</a>. Compare the plan’s monthly pension, on the statement, with an annuity quote on the same date, for the same survivor option. A quote from a different month is a different price. Locked-in money may have to stay in a LIRA or LIF under the plan’s statute until an unlocking rule applies. That rule is <a href="/blog/lira-unlocking-by-province/">LIRA unlocking</a>, and it is not an annuity.</p>
    </div>

    <h2>How is the payment taxed, and can you split it?</h2>

    <p>RRIF and annuity payments go on the return for the year you receive them. If you are 65 or older at year-end, or you receive them because a spouse or common-law partner died, CRA’s receiving-income page puts RRIF amounts on line 11500, and the pension-splitting page includes annuity and RRIF payments in eligible pension income. Under 65, those payments are generally not eligible unless they are the death case. A life annuity from a registered pension plan can be eligible without waiting for 65. Up to 50% of what is eligible can move on Form T1032. The form, and the income that does not qualify, is <a href="/blog/pension-income-splitting-canada/">pension income splitting</a>.</p>

    <p>A payment that is not eligible pension income is still taxable. It just is not splittable and does not support the pension income amount. Taking an annuity at 60 to “create pension income” does not, on CRA’s list, create pension income. Waiting until 65 to start a registered annuity can be about that list. It can also be about a higher quote at an older age. The insurer’s illustration is the second half. CRA does not publish it.</p>

    <h2>Frequently asked questions</h2>

    <h3>How much monthly income does $100,000 buy?</h3>
    <p>This page does not know. No CRA, Canada.ca, or OSFI page reviewed on October 3, 2026 stated a current annuity rate. The income depends on your age, the type of contract, interest rates, and the insurer. Get two written quotes. Treat a figure in a news article as that article’s date, not as your price.</p>

    <h3>Can I ALDA my whole RRSP and skip the RRIF?</h3>
    <p>No. The lifetime cap is $180,000 for 2026, and each plan also faces the 25% limit. Anything above those limits that stays in the ALDA is a cumulative excess taxed at 1% a month. The rest of the RRSP still has to be withdrawn, transferred to a RRIF, or used to buy an ordinary annuity by the end of the year you turn 71.</p>

    <h3>Is an ALDA payment eligible to split?</h3>
    <p>An ALDA is a life annuity. CRA’s splitting page includes annuity payments when the transferor is 65 or older at year-end, or the amount is received because a spouse died. Payments that start at 80 can fall in that “65 or older” case. Payments that somehow started earlier would still need the age test or the death test. Confirm the slip before you elect. The $180,000 limit is small beside a large RRIF, so the election may not move much tax even when it is available.</p>

    <h3>What if I transfer too much?</h3>
    <p>CRA says a cumulative excess at the end of a month is taxed at 1% for that month, and you file Form T1-OVP-ALDA by the filing due date. If you catch the excess and the ALDA refunds it before the end of the month you made the transfer, the page describes a path that avoids the return. Do not discover it in April. The interactive return CRA mentions is the way to test the purchase first.</p>

    <h3>Does an annuity replace CPP and OAS?</h3>
    <p>No. Those pensions do not depend on an insurer’s quote. CPP at 65 for a January 2026 start maxes at $1,507.65 a month, the July 2026 average on that page is $858.34, and full OAS for October to December 2026 is up to $762.50 from 65 to 74. Your CPP is the Service Canada estimate. An annuity is the layer under or beside those cheques, for spending they do not cover. Deferring CPP or OAS is a separate lever, in <a href="/blog/early-retirement-fire-canada/">early retirement</a> and <a href="/blog/cpp-when-to-take-canada/">when to take CPP</a>.</p>

    <h3>Will the retirement calculator show the annuity?</h3>
    <p>Not as a product. Reduce the annual spending by the after-tax income the quote promises, and reduce the RRSP by the premium. If the quote is indexed, do not also inflate that spending reduction. If the quote is flat, the real value falls, and the calculator’s real-dollar spending will not warn you unless you lower the annuity’s contribution to spending in later years yourself. A RRIF minimum on the money you did not annuitize still applies. That floor is <a href="/blog/rrif-minimum-withdrawal/">the RRIF table</a>.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/rrsps-related-plans/rrsp-options-when-you-turn-71/options-your-rrsps.html">CRA: options for your own RRSPs at 71</a></li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/rrsps-related-plans/alda.html">CRA: advanced life deferred annuity</a>, page details 2026-01-22</li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/registered-plans-administrators/pspa/mp-rrsp-dpsp-tfsa-limits-ympe.html">CRA: 2026 ALDA dollar limit of $180,000</a></li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/pension-income-splitting.html">CRA: pension income splitting</a></li>
        <li><a href="https://www.canada.ca/en/services/benefits/publicpensions/cpp/amount.html">Canada.ca: CPP amounts</a> and <a href="https://www.canada.ca/en/services/benefits/publicpensions/old-age-security/payments.html">OAS payments, October to December 2026</a></li>
    </ul>

    <div class="cta-section">
        <p><strong>The quote is the product. The slip is the tax.</strong></p>
        <p>Eligible pension income, the ALDA penalty, and the brackets on a payment are filing questions. The 2026 tax guide is that side of the contract.</p>
        <a href="/ebooks/tax-guide/" class="cta-button">Get the 2026 Tax Guide — $49 CAD</a>
    </div>

    ${footer}

</div>`
  ),
  ...oct2026RetirementPosts,
];
