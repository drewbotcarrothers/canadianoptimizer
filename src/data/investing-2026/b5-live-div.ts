import { invFooter, invPost } from './types';

const OAS = 'https://www.canada.ca/en/services/benefits/publicpensions/old-age-security/recovery-tax.html';
const DTC = 'https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-40425-federal-dividend-tax-credit.html';
const CRA_DIV = 'https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/personal-income/line-12000-taxable-amount-dividends-eligible-other-than-eligible-taxable-canadian-corporations.html';

export const liveOffDividendsCanada = invPost(
  'dividend-investing',
  'live-off-dividends-canada',
  'How Much Do You Need to Live Off Dividends in Canada?',
  'Worked after-tax dividend income examples, the dividend tax credit, and the 2025 OAS recovery threshold of $93,454. What a 3% or 4% yield actually funds.',
  `<div class="container">

    <div class="hook">
        "Live off dividends" sounds simple until tax and OAS show up. The real question is <span class="highlight">how large a portfolio you need after tax</span>, not what the ETF's yield line says.
    </div>

    <p>A portfolio yielding 4% before tax needs $1,000,000 to throw off $40,000 of dividends before tax. After the dividend gross-up and credit, and after any OAS recovery tax, the spendable amount is lower. For the July 2026 to June 2027 recovery period, CRA and Service Canada materials use a 2025 net world income threshold of $93,454, with repayment at 15% of income above that threshold.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>Portfolio needed ≈ annual spending ÷ portfolio yield, before tax. Tax and benefits change the answer.</li>
            <li>Eligible Canadian dividends use the gross-up and federal dividend tax credit (CRA line 40425). Provinces add their own credit.</li>
            <li>OAS recovery (clawback) for July 2026–June 2027 uses 2025 income with a $93,454 minimum threshold; full recovery thresholds differ for ages 65–74 and 75+.</li>
            <li>TFSA dividends are tax-free but do not create a dividend tax credit. RRSP withdrawals are ordinary income.</li>
            <li>Illustrative math below is labelled. It is not a personal projection.</li>
        </ul>
    </div>

    <p>This guide is part of <a href="/category/investing/dividend-investing/">Dividend investing</a>. Depth on the credit is in <a href="/blog/dividend-tax-credit-by-province-canada/">DTC by province</a>. OAS interaction is in <a href="/blog/dividends-oas-clawback-canada/">dividends and the OAS clawback</a>.</p>

    <nav aria-label="On this page">
        <ul>
            <li><a href="#math">How do you size the portfolio before tax?</a></li>
            <li><a href="#tax">How does the dividend tax credit change spendable income?</a></li>
            <li><a href="#oas">When does OAS recovery tax show up?</a></li>
            <li><a href="#accounts">Which account should pay the dividends?</a></li>
            <li><a href="#example">How would the Singhs estimate a number?</a></li>
            <li><a href="#faq">FAQ</a></li>
        </ul>
    </nav>

    <h2 id="math">How do you size the portfolio before tax?</h2>
    <div class="table-wrapper">
        <table>
            <caption>Illustrative portfolio size for $40,000 of pre-tax dividend income</caption>
            <thead><tr><th>Assumed portfolio yield</th><th>Portfolio needed</th></tr></thead>
            <tbody>
                <tr><td>3%</td><td>$1,333,333</td></tr>
                <tr class="highlight-row"><td>4%</td><td>$1,000,000</td></tr>
                <tr><td>5%</td><td>$800,000</td></tr>
            </tbody>
        </table>
    </div>
    <p>Yield is not guaranteed. A 5% yield can signal risk. Prefer total return planning with a sustainable withdrawal, then treat dividends as one way the cash arrives.</p>

    <div class="chart-container">
        <p class="chart-title">Illustrative portfolio needed for $40,000 pre-tax dividends</p>
        <div class="bar-chart">
            <div class="bar-group"><div class="bar" style="height:100%"></div><span class="bar-label">3%<br>$1.33M</span></div>
            <div class="bar-group"><div class="bar" style="height:75%"></div><span class="bar-label">4%<br>$1.00M</span></div>
            <div class="bar-group"><div class="bar" style="height:60%"></div><span class="bar-label">5%<br>$0.80M</span></div>
        </div>
        <p class="chart-source">Illustration only: $40,000 ÷ yield. Not a forecast of any fund's distribution.</p>
    </div>

    <h2 id="tax">How does the dividend tax credit change spendable income?</h2>
    <p>Eligible dividends from Canadian corporations are grossed up on your return and then receive a federal dividend tax credit on <a href="${DTC}">line 40425</a>. Provinces apply their own credits. The result is usually lower tax than on the same dollars of interest or RRSP income, but it is not zero tax in a non-registered account.</p>
    <p>Exact tax depends on province, other income and credits. Use the DTC by province guide for rates, or tax software, before you treat pre-tax yield as spending money.</p>

    <h2 id="oas">When does OAS recovery tax show up?</h2>
    <p>If your net world income exceeds the threshold, you repay OAS at 15% of the excess. For the July 2026 to June 2027 recovery period, the <a href="${OAS}">OAS recovery tax page</a> lists a minimum income recovery threshold of $93,454 based on 2025 income, with maximum thresholds of $152,062 (ages 65–74) and $157,923 (age 75+).</p>
    <div class="tip-box">
        <strong>Dividends count.</strong>
        <p>Eligible dividends increase net income through the gross-up. That can push you toward OAS recovery even when cash yield looks modest. Details are in our OAS clawback guide.</p>
    </div>

    <h2 id="accounts">Which account should pay the dividends?</h2>
    <div class="flowchart">
        <div class="flow-node decision">Are you under 65 with no OAS yet?</div>
        <div class="flow-arrow"></div>
        <div class="flow-branch-container">
            <div class="flow-node result">TFSA: tax-free cash, no DTC</div>
            <div class="flow-node decision">Over 65 and near OAS thresholds?</div>
        </div>
        <div class="flow-arrow"></div>
        <div class="flow-branch-container">
            <div class="flow-node result">Model gross-up impact before loading taxable dividend ETFs</div>
            <div class="flow-node result">Mix TFSA, RRSP/RRIF and taxable with a written order</div>
        </div>
    </div>
    <p>Many retirees blend accounts: TFSA for tax-free top-ups, RRIF for mandatory withdrawals, and a taxable dividend sleeve only when the DTC and OAS math still work.</p>

    <h2 id="example">How would the Singhs estimate a number?</h2>
    <div class="example-box">
        <strong>Illustrative example: the Singhs, both 67, Winnipeg</strong>
        <p>They want about $36,000 a year from portfolio dividends toward living costs, on top of CPP and a partial OAS.</p>
        <div class="example-calculation">
            <div class="line"><span>Target dividend cash</span><span>$36,000</span></div>
            <div class="line"><span>At an assumed 4% yield</span><span>$900,000 portfolio</span></div>
            <div class="line"><span>OAS recovery threshold (2025 income year)</span><span>$93,454</span></div>
            <div class="line total"><span>Next step</span><span>Run tax + OAS in software before buying more yield</span></div>
        </div>
        <p>They keep half the dividend sleeve in TFSAs. The taxable half is eligible Canadian dividends only after they model the gross-up. Amounts are illustrative.</p>
    </div>

    <h2>Does your province change anything?</h2>
    <p>Yes. Provincial tax on eligible dividends and provincial DTC rates differ. OAS recovery is federal. Do not use an Ontario example for a Quebec return without checking.</p>

    <h2>Checklist</h2>
    <ul class="checklist">
        <li>Annual spending target written</li>
        <li>Yield assumption labelled as assumption</li>
        <li>Tax software or DTC tables consulted</li>
        <li>OAS threshold checked for your age band</li>
        <li>Account mix decided before chasing yield</li>
    </ul>


    <h2 id="cuts">What if the dividend is cut?</h2>
    <p>Living off dividends fails when the distribution falls. Build a cash buffer for at least a year of planned dividend spending, or be willing to sell units. Yield traps are covered in a separate guide; the short version is that a stretched yield is not a plan.</p>
    <p>Inflation also matters. A fixed dollar dividend buys less each year. Dividend growth stocks and ETFs aim to raise the cash over time, but growth is not guaranteed. Revisit the portfolio size calculation when your spending rises.</p>
    <p>Couples should model income on a per-person basis for OAS recovery, because the threshold is individual. Pension income splitting and TFSA room change the household picture; run scenarios rather than using a single rule of thumb.</p>


    <h2 id="sequence">Sequence of returns still matters</h2>
    <p>Even dividend investors face sequence risk if they spend every dollar distributed and never sell units. A multi-year distribution cut or a sharp price decline that forces sales can shrink the base that produces future dividends. Keep flexibility: a cash reserve, a willingness to trim principal, or part-time work options.</p>
    <p>Drawing from a TFSA first can reduce taxable income that affects OAS. Drawing from a RRIF may be mandatory after conversion. Coordinate the order with a tax projection, not with a slogan.</p>
    <p>If you are married or common-law, run OAS recovery on each spouse's income. Income splitting tools have rules and deadlines. Guesswork is expensive.</p>


    <h2 id="total">Total return versus dividend-only thinking</h2>
    <p>A company can reward you with buybacks and price appreciation instead of a rising dividend. A low-yield index fund can still fund retirement if you sell a few units each year. Dividend-only thinking can push you into weaker businesses with high payouts.</p>
    <p>A practical hybrid is to target a total return, hold a diversified portfolio, and let dividends cover part of spending while sales cover the rest. That hybrid reduces pressure to chase yield.</p>
    <p>Worked spending math should include property tax, health costs and help for adult children—the categories that surprise retirees. Build the dividend target from a real budget, not from a round portfolio number you saw online.</p>
    <p>When markets fall, prices drop faster than many dividends. Yield spikes on the way down. That is not a bargain signal by itself. Check payout sustainability and your own cash buffer before you "buy the yield."</p>
    <p>Document assumptions: inflation rate you used, yield you assumed, tax rate you assumed and OAS threshold year. Revisit annually when Service Canada and CRA publish updated recovery tables.</p>


    <h2 id="mistakes2">Mistakes that blow up a dividend retirement</h2>
    <ul>
        <li>Planning with pre-tax yield as if it were spendable cash</li>
        <li>Ignoring the dividend gross-up near OAS thresholds</li>
        <li>Owning high-yield funds without a cut scenario</li>
        <li>Spending every distribution with zero cash reserve</li>
        <li>Forgetting provincial DTC differences when moving provinces</li>
    </ul>
    <p>Fix the first mistake with a tax estimate. Fix the second with the OAS recovery page numbers for your age band. Fix the third with diversification and total-return flexibility. Fix the fourth with a reserve account. Fix the fifth when you update your return after a move.</p>
    <p>Adult children sometimes pressure parents to "not touch principal." That slogan can force fragile high-yield portfolios. A written total-return policy protects parents from that pressure.</p>
    <p>If your dividend income varies seasonally, budget on a trailing twelve-month average rather than on the best quarter. Seasonal special distributions are not a raise.</p>

    <h2 id="faq">Frequently asked questions</h2>
    <h3>How much do I need to live off dividends in Canada?</h3>
    <p>Divide the annual dividend cash you need by a realistic yield, then subtract tax and any OAS recovery. There is no single national number. Check the linked primary sources in the Sources section for the figures and dates used in this article.</p>
    <h3>Is a 4% dividend yield safe?</h3>
    <p>It can be a planning assumption, not a promise. Higher yields often mean higher cut risk. See yield traps. Check the linked primary sources in the Sources section for the figures and dates used in this article.</p>
    <h3>Do TFSA dividends affect OAS?</h3>
    <p>TFSA income is not taxable and does not appear as taxable dividend income on your return the way non-registered dividends do. Check the linked primary sources in the Sources section for the figures and dates used in this article.</p>
    <h3>What is the OAS recovery threshold for 2025 income?</h3>
    <p>$93,454 minimum for the July 2026–June 2027 period, per the OAS recovery tax page. Check the linked primary sources in the Sources section for the figures and dates used in this article.</p>
    <h3>Should retirees prefer dividends over total return?</h3>
    <p>Not automatically. Selling units can be more tax-efficient than stretching for yield. Compare both. Check the linked primary sources in the Sources section for the figures and dates used in this article.</p>
    <h3>Does the dividend tax credit apply in an RRSP?</h3>
    <p>No. Growth inside is tax-deferred; withdrawals are taxed as ordinary income. Check the linked primary sources in the Sources section for the figures and dates used in this article.</p>
    <h3>Where do I see my dividend tax credit?</h3>
    <p>Federal credit on line 40425; provincial credit on your provincial form. Eligible amounts come from T5/T3 slips. Check the linked primary sources in the Sources section for the figures and dates used in this article.</p>


    <h2 id="together">Putting dividend income into a retirement paycheck</h2>
    <p>Build a retirement paycheck table: CPP, OAS, pension, RRIF minimums, TFSA withdrawals and taxable dividends. Solve for the taxable dividend line last, after you see how close you are to OAS recovery thresholds. Check the linked primary sources in the Sources section for the figures and dates used in this article.</p>
    <p>Stress-test a 20% dividend cut and a two-year inflation spike. If either breaks the plan, you need a larger portfolio, lower spending or more flexible withdrawals—not a higher-yield ETF. Check the linked primary sources in the Sources section for the figures and dates used in this article.</p>
    <p>Coordinate with your spouse's income year by year. OAS recovery is individual. A year with a large RRSP withdrawal or capital gain can create clawback even if "usual" dividend income looked safe. Check the linked primary sources in the Sources section for the figures and dates used in this article.</p>
    <p>Keep one year of planned dividend spending in cash-like reserves. That reserve is what lets you avoid selling equity ETFs after a price decline just to pay property tax. Check the linked primary sources in the Sources section for the figures and dates used in this article.</p>
    <p>Revisit the math when CRA and Service Canada publish new recovery thresholds each year. Paste the new minimum threshold into your worksheet and rerun the tax software. Check the linked primary sources in the Sources section for the figures and dates used in this article.</p>

    <p>Before you lock a dividend-only lifestyle, run one more scenario: a move to a higher-tax province, a surviving spouse with different OAS timing, and a year with a large capital gain from downsizing a home. Those events change the tax and clawback math even when the portfolio yield does not. Keep the worksheet flexible so you update assumptions instead of clinging to an outdated portfolio size target. If the numbers only work at an aggressive yield, the plan is fragile by design.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="${OAS}">Canada.ca: Old Age Security pension recovery tax</a>, reviewed October 24, 2026</li>
        <li><a href="${DTC}">CRA: Line 40425 Federal dividend tax credit</a>, reviewed October 24, 2026</li>
        <li><a href="${CRA_DIV}">CRA: Line 12000 Taxable amount of dividends</a>, reviewed October 24, 2026</li>
    </ul>

    <h2>Related reading</h2>
    <ul>
        <li><a href="/blog/dividend-tax-credit-by-province-canada/">Dividend tax credit by province</a></li>
        <li><a href="/blog/dividends-oas-clawback-canada/">Dividends and the OAS clawback</a></li>
        <li><a href="/blog/dividend-investing-canada/">Dividend investing in Canada</a></li>
        <li><a href="/blog/canadian-dividend-etfs-compared/">Canadian dividend ETFs compared</a></li>
    </ul>

    <div class="cta-section">
        <p><strong>Retirement income is a tax problem as much as a yield problem.</strong></p>
        <p>The 2026 tax guide covers DTC, OAS, RRIF withdrawals and account order.</p>
        <a href="/ebooks/tax-guide/" class="cta-button">Get the 2026 Tax Guide — $49 CAD</a>
    </div>

    ${invFooter("General education about dividend income and OAS as of October 24, 2026. Illustrations are not personal projections. This is not tax or investment advice.", "October 24, 2026")}

</div>`,
  '2026-10-24'
);
