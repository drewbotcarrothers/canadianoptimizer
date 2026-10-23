import { invFooter, invPost } from './types';

const CRA_12000 = 'https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/personal-income/line-12000-taxable-amount-dividends-eligible-other-than-eligible-taxable-canadian-corporations.html';
const CRA_FOLIO = 'https://www.canada.ca/en/revenue-agency/services/tax/technical-information/income-tax/income-tax-folios-index/series-3-property-investments-savings-plans/series-3-property-investments-savings-plan-folio-2-dividends/income-tax-folio-s3-f2-c2-taxable-dividends-corporations-resident-canada.html';
const CRA_BRACKETS = 'https://www.canada.ca/en/revenue-agency/services/tax/individuals/frequently-asked-questions-individuals/canadian-income-tax-rates-individuals-current-previous-years.html';

export const dividendInvestingCanada = invPost(
  'dividend-investing',
  'dividend-investing-canada',
  'Dividend Investing in Canada: Build Income That Lasts',
  'Dividend investing in Canada works best with eligible dividends in a taxable account, payouts covered by cash flow, and yield treated as a result, not a goal.',
  `<div class="container">

    <div class="hook">
        A $10,000 eligible Canadian dividend is taxed as if you received $13,800. Then the federal credit gives back <span class="highlight">15.0198% of that $13,800, or $2,072.73</span> (CRA). That is why dividends in a taxable account can cost less tax than interest, and why the credit does nothing inside a TFSA.
    </div>

    <p>Dividend investing in Canada means owning established companies, or ETFs of them, that pay cash from profits. It works best with eligible dividends in a non-registered account, where the CRA grosses them up by 38% and gives a 15.0198% federal credit in 2026. Choose companies whose dividends are covered by cash flow, and treat yield as a result.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>Eligible dividends are grossed up by 38% and other-than-eligible dividends by 15% (CRA). The federal credit is 15.0198% and 9.0301% of the grossed-up amount.</li>
            <li>In the 20.5% federal bracket, the illustration below gives federal tax of $756 on $10,000 of eligible dividends, compared with $2,050 on $10,000 of interest.</li>
            <li>The gross-up raises your net income, even though the credit later lowers your tax. Income-tested benefits are based on net income, so they see the higher number.</li>
            <li>A TFSA or RRSP gets no dividend tax credit. Canadian dividend stocks usually work best in a taxable account once registered room is used.</li>
            <li>A high yield is often a warning. Check the payout against cash flow before you buy.</li>
        </ul>
    </div>

    <p>This is the pillar for <a href="/category/investing/dividend-investing/">Dividend Investing</a>, part of the <a href="/category/investing/">Investing</a> category. It covers how the tax works, which account to use, how to tell whether a dividend is sustainable, and how to turn a portfolio into income. If you have not chosen an account or a brokerage yet, start with <a href="/blog/how-to-invest-canada-guide/">how to invest in Canada</a>.</p>

    <nav aria-label="On this page">
        <ul>
            <li><a href="#how-taxed">How are Canadian dividends taxed?</a></li>
            <li><a href="#compare">How does dividend tax compare with interest and capital gains?</a></li>
            <li><a href="#account">Which account should hold dividend stocks?</a></li>
            <li><a href="#sustainable">How do you tell if a dividend will last?</a></li>
            <li><a href="#build">How do you build the portfolio?</a></li>
            <li><a href="#income">How much do you need to live on dividends?</a></li>
            <li><a href="#provinces">How do provinces change the math?</a></li>
            <li><a href="#faq">FAQ</a></li>
        </ul>
    </nav>

    <h2 id="how-taxed">How are Canadian dividends taxed?</h2>

    <p>Through a gross-up and a credit. You report more than the cash you received, then claim a credit that reduces your tax. The gross-up roughly restores the corporation's pre-tax profit. The credit gives you back about the tax the corporation already paid, so the same profit is not fully taxed twice.</p>

    <div class="diagram">
        <div class="diagram-step">Cash dividend received: $10,000 (eligible)</div>
        <div class="diagram-arrow"></div>
        <div class="diagram-step light">Gross-up of 38%: report $13,800 on line 12000</div>
        <div class="diagram-arrow"></div>
        <div class="diagram-step">Tax at your marginal rate on $13,800</div>
        <div class="diagram-arrow"></div>
        <div class="diagram-step light">Minus federal credit: 15.0198% × $13,800 = $2,072.73</div>
        <div class="diagram-arrow"></div>
        <div class="diagram-step">Minus your provincial dividend credit (Form 428, line 61520)</div>
    </div>

    <p>Your T5 or T3 slip shows whether a dividend is eligible. Eligible dividends usually come from large public corporations that paid tax at the general corporate rate. Other-than-eligible dividends usually come from small private corporations taxed at the small business rate.</p>

    <div class="table-wrapper">
        <table>
            <caption>Federal dividend rules. Source: CRA line 12000 page and Folio S3-F2-C2, reviewed October 23, 2026</caption>
            <thead>
                <tr><th>Type</th><th>Gross-up</th><th>Taxable amount on $10,000</th><th>Federal credit (% of taxable amount)</th><th>Federal credit on $10,000</th></tr>
            </thead>
            <tbody>
                <tr class="highlight-row"><td>Eligible</td><td>38%</td><td>$13,800</td><td>15.0198%</td><td>$2,072.73</td></tr>
                <tr><td>Other than eligible</td><td>15%</td><td>$11,500</td><td>9.0301%</td><td>$1,038.46</td></tr>
            </tbody>
        </table>
    </div>

    <p>The CRA folio describes the eligible credit as 6/11 of the gross-up and the non-eligible credit as 9/13 of the gross-up. That works out to the percentages above. The credit is non-refundable. It can bring your tax down to zero, but it does not create a refund on its own.</p>

    <h2 id="compare">How does dividend tax compare with interest and capital gains?</h2>

    <p>Federally, eligible dividends are taxed less than interest in every bracket. Capital gains can be taxed less still, but only when you sell. The table uses the 2026 federal brackets and covers federal tax only. Your provincial tax is added on top.</p>

    <div class="table-wrapper">
        <table>
            <caption>Illustrative example: federal tax on $10,000 of each income type, by 2026 federal bracket</caption>
            <thead>
                <tr><th>Federal bracket</th><th>Interest</th><th>Eligible dividend</th><th>Non-eligible dividend</th><th>Capital gain (50% included)</th></tr>
            </thead>
            <tbody>
                <tr><td>14%</td><td>$1,400</td><td>-$140.73 (credit exceeds tax)</td><td>$571.54</td><td>$700</td></tr>
                <tr class="highlight-row"><td>20.5%</td><td>$2,050</td><td>$756.27</td><td>$1,319.04</td><td>$1,025</td></tr>
                <tr><td>26%</td><td>$2,600</td><td>$1,515.27</td><td>$1,951.54</td><td>$1,300</td></tr>
                <tr><td>29%</td><td>$2,900</td><td>$1,929.27</td><td>$2,296.54</td><td>$1,450</td></tr>
                <tr><td>33%</td><td>$3,300</td><td>$2,481.27</td><td>$2,756.54</td><td>$1,650</td></tr>
            </tbody>
        </table>
    </div>

    <p>How the table is calculated: eligible = $13,800 × bracket − $2,072.73. Non-eligible = $11,500 × bracket − $1,038.46. Capital gain = $5,000 × bracket. Brackets are from the CRA's 2026 rates. The 14% row shows the eligible credit exceeding the tax on the dividend itself. The extra $140.73 can reduce federal tax on your other income, but it is not refunded. This is an illustration, not your assessment.</p>

    <div class="chart-container">
        <h3>Federal tax on $10,000, 20.5% bracket (illustrative example)</h3>
        <div class="bar-chart">
            <div class="bar-item"><div class="bar-label">Int</div><div class="bar-wrapper"><div class="bar" style="width: 100%;"><span>$2,050 interest</span></div></div></div>
            <div class="bar-item"><div class="bar-label">NE</div><div class="bar-wrapper"><div class="bar" style="width: 64.3%;"><span>$1,319 non-eligible</span></div></div></div>
            <div class="bar-item"><div class="bar-label">CG</div><div class="bar-wrapper"><div class="bar" style="width: 50%;"><span>$1,025 capital gain</span></div></div></div>
            <div class="bar-item"><div class="bar-label">Elig</div><div class="bar-wrapper"><div class="bar" style="width: 36.9%;"><span>$756 eligible</span></div></div></div>
        </div>
        <p>For someone in the 20.5% federal bracket, $10,000 of eligible dividends costs $756 in federal tax, compared with $2,050 for the same amount of interest. Calculated from the CRA's 2026 federal brackets and the dividend gross-up and credit rates, reviewed October 23, 2026. Federal tax only.</p>
    </div>

    <p>The trade-off: dividends are taxed every year whether you need the cash or not. A capital gain is taxed only when you sell, and you choose when that happens. That is why the debate is not simply "dividends are tax-efficient." The full comparison is <a href="/blog/dividend-vs-growth-taxable-accounts-canada/">dividends versus growth in a taxable account</a>.</p>

    <div class="warning-box">
        <strong>The gross-up has a hidden cost.</strong> Your net income includes the grossed-up $13,800, not the $10,000 you received. Income-tested benefits, including the OAS recovery tax, are based on net income, so a large dividend income can reduce them even when the tax itself is low. Read <a href="/blog/oas-gis-clawback-canada/">OAS and GIS clawbacks</a> before building a retirement income mostly from taxable dividends.
    </div>

    <h2 id="account">Which account should hold dividend stocks?</h2>

    <p>Canadian dividend stocks usually belong in a taxable account once registered room is used, because only a taxable account gets the credit. Inside a TFSA, a dividend is tax-free, which is better than any credit. The question is which assets get your limited TFSA room.</p>

    <div class="table-wrapper">
        <table>
            <caption>How each account treats dividends, as of October 2026</caption>
            <thead>
                <tr><th>Account</th><th>Canadian dividends</th><th>US dividends</th><th>Best use for a dividend investor</th></tr>
            </thead>
            <tbody>
                <tr><td>TFSA</td><td>Tax-free. No credit, and none needed</td><td>US withholding tax is lost and cannot be recovered</td><td>Higher-growth holdings, or Canadian dividends while TFSA room is still open</td></tr>
                <tr><td>RRSP / RRIF</td><td>No credit. The whole withdrawal is taxed as ordinary income later</td><td>US-listed securities held directly can be exempt under the treaty</td><td>US dividend payers held directly, and bonds</td></tr>
                <tr class="highlight-row"><td>Non-registered</td><td>Gross-up and credit apply</td><td>Taxed as income. A foreign tax credit may be available</td><td>Canadian eligible dividend payers</td></tr>
            </tbody>
        </table>
    </div>

    <p>The US details, by account, are in the <a href="/blog/us-withholding-tax-by-account-canada/">US withholding tax guide</a>. Distributions from REITs and covered-call ETFs are often not eligible dividends. They can include other income, capital gains, or return of capital, as shown on the T3. Return of capital lowers your adjusted cost base, so track it with the <a href="/blog/adjusted-cost-base-canada-guide/">ACB guide</a>. For option-income funds, read <a href="/blog/covered-call-etfs-canada/">covered call ETFs</a>.</p>

    <h2 id="sustainable">How do you tell if a dividend will last?</h2>

    <p>Check whether the business generates more cash than it pays out, after the spending it needs to stay competitive. The yield alone tells you nothing about that. Here is a five-question test using the company's annual report and MD&amp;A on SEDAR+.</p>

    <div class="step-section">
        <div class="step">
            <div class="step-number">1</div>
            <div>
                <div class="step-title">Is the payout covered?</div>
                <p>Compare dividends paid with earnings and with free cash flow (operating cash flow minus capital spending), using the cash-flow statement. A payout above 100% of free cash flow for several years is being funded by debt or asset sales.</p>
            </div>
        </div>
        <div class="step">
            <div class="step-number">2</div>
            <div>
                <div class="step-title">Is debt rising faster than cash flow?</div>
                <p>A dividend paid for with new debt can last only as long as lenders keep lending.</p>
            </div>
        </div>
        <div class="step">
            <div class="step-number">3</div>
            <div>
                <div class="step-title">Does management state a payout policy?</div>
                <p>Many Canadian companies publish a target range. Compare the actual payout with it.</p>
            </div>
        </div>
        <div class="step">
            <div class="step-number">4</div>
            <div>
                <div class="step-title">How did the dividend hold up in a bad year?</div>
                <p>Look at 2020 or another downturn in the company's own filings: was it held, cut, or replaced with shares?</p>
            </div>
        </div>
        <div class="step">
            <div class="step-number">5</div>
            <div>
                <div class="step-title">Why is the yield high?</div>
                <p>If the yield is well above similar companies, the price has usually fallen for a reason. Find that reason before you buy.</p>
            </div>
        </div>
    </div>

    <div class="example-box">
        <strong>Illustration: how a yield trap works</strong>
        <div class="example-calculation">
            <div class="line"><span>Share price $50, dividend $2.50 a year</span><span>5.0% yield</span></div>
            <div class="line"><span>Price falls to $30 on bad news, dividend unchanged</span><span>8.3% yield</span></div>
            <div class="line total"><span>Dividend cut in half to $1.25 at $30</span><span>4.2% yield, 40% capital loss</span></div>
        </div>
        <p>A hypothetical company. The 8.3% yield that attracted buyers was a result of the price falling. Someone who bought at $50 lost 40% of their capital, and their income fell by half.</p>
    </div>

    <h2 id="build">How do you build the portfolio?</h2>

    <p>Diversify across sectors, not only across companies. The Canadian market has a lot of banks, energy, pipelines, utilities, and telecom companies. A portfolio of the 15 highest-yielding TSX stocks can easily be mostly two sectors that tend to fall together.</p>

    <div class="table-wrapper">
        <table>
            <caption>Dividend sectors in Canada: what to check (general characteristics, not a forecast)</caption>
            <thead>
                <tr><th>Sector</th><th>Why investors own it</th><th>What to check in the filings</th></tr>
            </thead>
            <tbody>
                <tr><td>Banks and insurers</td><td>Long dividend histories; usually eligible dividends</td><td>Credit losses, capital ratios, and payout ratio</td></tr>
                <tr><td>Utilities</td><td>Regulated, fairly steady earnings</td><td>Debt levels and how rate increases are approved</td></tr>
                <tr><td>Pipelines and energy</td><td>Large cash flows</td><td>Commodity exposure, debt, and payout versus distributable cash flow</td></tr>
                <tr><td>Telecom</td><td>Recurring subscriber revenue</td><td>Capital spending needs and debt</td></tr>
                <tr><td>REITs</td><td>Rental cash flow</td><td>Distributions are often not eligible dividends; return of capital lowers your ACB</td></tr>
            </tbody>
        </table>
    </div>

    <p>An ETF is a simpler alternative to picking 20 stocks. If you buy a dividend ETF, compare its MER, its sector weights, and its distribution history on the fund page. Keep a global equity fund alongside it so you are not limited to Canadian dividend sectors. Using a broad-market core with a dividend satellite is covered in the <a href="/blog/couch-potato-portfolio-canada/">passive ETF guide</a>. Picking individual payers uses the framework in <a href="/blog/how-to-pick-stocks-canada/">how to pick stocks</a>.</p>

    <p>DRIPs (dividend reinvestment plans) are convenient, but every reinvested dividend is still taxable in a non-registered account in the year it is paid. It also adds to your ACB. Keep the records, or you will pay tax twice when you sell.</p>

    <h2 id="income">How much do you need to live on dividends?</h2>

    <p>Divide the annual income you need by a yield you believe is sustainable. At an illustrative 4% yield, $12,000 a year (about $1,000 a month) needs $300,000. At 3%, it needs $400,000. Reaching for 6% to shrink the target means taking on more risk of the trap shown above.</p>

    <div class="example-box">
        <strong>Illustration: $1,000 a month from a taxable account</strong>
        <div class="example-calculation">
            <div class="line"><span>Target income</span><span>$12,000 a year</span></div>
            <div class="line"><span>Portfolio at a 4% yield ($12,000 ÷ 0.04)</span><span>$300,000</span></div>
            <div class="line"><span>Taxable amount if all eligible (× 1.38)</span><span>$16,560</span></div>
            <div class="line total"><span>Federal credit (15.0198% × $16,560)</span><span>$2,487.28</span></div>
        </div>
        <p>The 4% yield is an assumption, not a forecast or a recommendation. The person's federal tax depends on their other income and bracket. Provincial credit is extra and depends on the province. This is the arithmetic, not a retirement plan. For the plan, use <a href="/blog/how-much-money-retire-canada/">how much money you need to retire</a>.</p>
    </div>

    <h2 id="provinces">How do provinces change the math?</h2>

    <p>Every province and territory has its own dividend tax credit, claimed on Form 428 (line 61520). The federal credit above is the same everywhere. Quebec residents claim the provincial part on the Revenu Québec return instead. This guide does not list provincial rates, because they are set separately and change from year to year. Check your province's Form 428 for the current year, or your tax software's result. Do not apply another province's rate to your own.</p>

    <h2>Checklist</h2>
    <ul class="checklist">
        <li>Registered room used, or a deliberate reason why not</li>
        <li>Canadian eligible payers placed in the taxable account where possible</li>
        <li>Payout checked against free cash flow for each holding</li>
        <li>No sector over a limit you wrote down (for example, 30%)</li>
        <li>DRIP purchases and return of capital recorded in your ACB file</li>
        <li>Net income impact checked if you receive, or will soon receive, OAS or other income-tested benefits</li>
    </ul>

    <p>When to get help: if dividends will make up much of your retirement income, or you are deciding between dividends and salary from your own corporation, a CPA should model your own numbers.</p>

    <h2 id="faq">Frequently asked questions</h2>

    <h3>Are dividends tax-free in Canada?</h3>
    <p>Only inside a TFSA, or when your income is low enough that the credit covers all the tax. In a taxable account, eligible dividends are taxed at a lower effective rate than interest, but they are still taxed.</p>

    <h3>What is the dividend tax credit for 2026?</h3>
    <p>Federally, eligible dividends are grossed up by 38% and the credit is 15.0198% of the grossed-up amount. Other-than-eligible dividends are grossed up by 15% with a 9.0301% credit. Provincial credits are separate.</p>

    <h3>Should I hold Canadian dividend stocks in my TFSA?</h3>
    <p>It works, since the dividend is tax-free. The trade-off is that you give up the credit you would get in a taxable account, and you use limited TFSA room on a lower-growth holding. If all your investments fit in registered accounts, this question does not matter much.</p>

    <h3>Are REIT distributions eligible dividends?</h3>
    <p>Usually not. REIT distributions are reported on a T3 and can include other income, capital gains, and return of capital. Check the slip, and adjust your ACB for any return of capital.</p>

    <h3>Is a 7% dividend yield good?</h3>
    <p>It is a reason to look more closely, not a reason to buy. A yield that high usually means the market expects a cut or slow growth. Use the five-question test above.</p>

    <h3>Do reinvested dividends get taxed?</h3>
    <p>Yes, in a non-registered account, in the year they are paid, even though you never received the cash. The reinvested amount is added to your ACB.</p>

    <h3>Dividend stocks or an index fund?</h3>
    <p>An index fund is simpler and more diversified. A dividend portfolio can be more tax-efficient in a taxable account and gives you regular cash. Many investors use both: an index fund as the core and dividend payers as a smaller part.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="${CRA_12000}">CRA: Lines 12000 and 12010, taxable dividends</a> (gross-up 38% and 15%), reviewed October 23, 2026</li>
        <li><a href="${CRA_FOLIO}">CRA: Income Tax Folio S3-F2-C2, Taxable Dividends from Corporations Resident in Canada</a> (credit as a fraction of the gross-up), reviewed October 23, 2026</li>
        <li>Credit rates as a percentage of the taxable amount are calculated from the folio fractions: 6/11 × 38/138 = 15.0198% (eligible) and 9/13 × 15/115 = 9.0301% (other than eligible). They match the rates the CRA prints on the federal worksheet for line 40425.</li>
        <li><a href="${CRA_BRACKETS}">CRA: Canadian income tax rates for individuals, 2026</a>, reviewed October 23, 2026</li>
        <li><a href="https://www.sedarplus.ca/">SEDAR+</a>: Canadian public company filings</li>
    </ul>

    <h2>Related reading</h2>
    <ul>
        <li><a href="/blog/dividend-vs-growth-taxable-accounts-canada/">Dividends versus growth in a taxable account</a></li>
        <li><a href="/blog/covered-call-etfs-canada/">Covered call ETFs in Canada</a></li>
        <li><a href="/blog/us-withholding-tax-by-account-canada/">US withholding tax by account</a></li>
        <li><a href="/blog/adjusted-cost-base-canada-guide/">Adjusted cost base</a></li>
        <li><a href="/blog/couch-potato-portfolio-canada/">Couch potato investing in Canada</a></li>
    </ul>

    <div class="cta-section">
        <p><strong>The dividend tax credit happens on your return.</strong></p>
        <p>The 2026 tax guide covers investment income from the filing side, so you can plan where to hold each investment.</p>
        <a href="/ebooks/tax-guide/" class="cta-button">Get the 2026 Tax Guide — $49 CAD</a>
    </div>

    ${invFooter('General education about dividend investing in Canada as of October 23, 2026. It is not a recommendation to buy, sell, or hold any security, and not investment or tax advice. Tax figures are federal only, from CRA pages reviewed on the date shown in Sources; provincial credits are not included. Yields, prices, and companies in the examples are hypothetical. Confirm the current CRA pages and consult a tax professional about your own return.')}

</div>`
);
