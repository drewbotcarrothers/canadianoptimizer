import { invFooter, invPost } from './types';

const TD_DRIP = 'https://td.mediaroom.com/2026-05-28-TD-BANK-GROUP-DECLARES-DIVIDENDS';
const BMO_DRIP = 'https://newsroom.bmo.com/2026-05-27-BMO-Financial-Group-Increases-Common-Share-Dividend-by-4-cents-from-the-prior-quarter,-up-5-percent-from-the-prior-year';
const FTS_DRIP = 'https://www.fortisinc.com/docs/default-source/investor-centre/dividend-reinvestment-and-share-purchase-plan-offering-circular.pdf';
const QT_DRIP = 'https://www.questrade.com/learning/using-questrade/drip-dividend-reinvestment-plan';
const CRA_MF = 'https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/personal-income/line-12700-capital-gains/completing-schedule-3/tax-treatment-mutual-funds.html';
const CRA_RULING = 'https://taxinterpretations.com/cra/severed-letters/2001-0115373';

export const dripDividendReinvestmentCanada = invPost(
  'dividend-investing',
  'drip-dividend-reinvestment-canada',
  'DRIPs in Canada: Synthetic vs Company Plans, Discounts, ACB',
  'How DRIPs work in Canada: broker synthetic plans vs company plans, the up-to-5% treasury discount, the tax on reinvested dividends, and tracking your ACB.',
  `<div class="container">

    <div class="hook">
        For its July 31, 2026 dividend, TD said its reinvestment plan would buy shares on the open market, so <span class="highlight">no discount will apply</span>, even though the plan allows up to 5% off when shares come from treasury. That one line from TD's dividend notice explains most of what a DRIP can and cannot do for you.
    </div>

    <p>A DRIP reinvests your cash dividends in more shares of the same company or fund, usually without commission. Brokers offer synthetic DRIPs that buy at market price. Company plans can add a treasury discount of up to 5%. Either way, CRA treats reinvested dividends as taxable income, and each reinvestment raises your adjusted cost base.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>Reinvested dividends are taxed exactly like cash dividends in a non-registered account. You need cash from somewhere else to pay the tax.</li>
            <li>Every reinvestment is a purchase. Add it to your adjusted cost base (ACB), or you will pay tax twice on the same money when you sell.</li>
            <li>Broker (synthetic) DRIPs buy at market price. At Questrade, if you do not hold fractional shares, only whole shares are bought and the rest is paid as cash.</li>
            <li>Company plans can offer a discount on new treasury shares. TD's and BMO's mid-2026 dividend notices both said no discount would apply because shares were bought on the market.</li>
            <li>CRA's long-standing position, shown in its rulings, is that a public company's DRIP discount of up to 5% is not a taxable benefit, and your cost is the discounted price you paid.</li>
        </ul>
    </div>

    <p>This guide is part of <a href="/category/investing/dividend-investing/">Dividend Investing</a>, in the <a href="/category/investing/">Investing</a> category. The pillar, <a href="/blog/dividend-investing-canada/">dividend investing in Canada</a>, covers building the portfolio. This page covers the plumbing: how reinvestment works, and how to keep the records right. The general rules for cost base are in our <a href="/blog/adjusted-cost-base-canada-guide/">adjusted cost base guide</a>.</p>

    <nav aria-label="On this page">
        <ul>
            <li><a href="#what">What is a DRIP?</a></li>
            <li><a href="#types">What is the difference between a synthetic DRIP and a company plan?</a></li>
            <li><a href="#discount">How do DRIP discounts work?</a></li>
            <li><a href="#tax">How are reinvested dividends taxed?</a></li>
            <li><a href="#acb">How do you track ACB with a DRIP?</a></li>
            <li><a href="#accounts">Which accounts suit a DRIP?</a></li>
            <li><a href="#setup">How do you set one up?</a></li>
            <li><a href="#when">When should you turn a DRIP off?</a></li>
            <li><a href="#faq">FAQ</a></li>
        </ul>
    </nav>

    <h2 id="what">What is a DRIP?</h2>

    <p>A dividend reinvestment plan uses each dividend to buy more of the security that paid it. Instead of $300 landing in your account as cash, you get about $300 worth of extra shares. Next quarter you are paid on the larger number of shares, and so on. It automates compounding and removes the temptation to let small dividends sit in cash.</p>

    <p>Canada has two main kinds. Brokers run <strong>synthetic DRIPs</strong> for securities held in your brokerage account. Companies run <strong>plan DRIPs</strong> through their transfer agent, such as TSX Trust for TD or Computershare for BMO. Mutual funds and many ETFs offer reinvestment too. Many mutual funds reinvest by default: RBC's Fund Facts, for example, say distributions are automatically reinvested unless you ask for cash.</p>

    <h2 id="types">What is the difference between a synthetic DRIP and a company plan?</h2>

    <div class="table-wrapper">
        <table>
            <caption>Synthetic (broker) DRIP vs company plan DRIP</caption>
            <thead>
                <tr><th>Feature</th><th>Synthetic DRIP at a broker</th><th>Company plan DRIP</th></tr>
            </thead>
            <tbody>
                <tr><td>Who runs it</td><td>Your brokerage</td><td>The company, through its transfer agent</td></tr>
                <tr><td>How to join</td><td>Toggle in your broker account (Questrade: Management, then Dividend Reinvestments)</td><td>Registered holders send an enrolment form to the transfer agent; beneficial holders go through their broker</td></tr>
                <tr><td>Price paid</td><td>Market price</td><td>Average market price as defined in the plan, minus any discount</td></tr>
                <tr><td>Discount</td><td>None</td><td>Possible on treasury shares, if the company chooses</td></tr>
                <tr><td>Whole or fractional shares</td><td>Questrade: whole shares unless you already hold fractions; leftover cash paid out</td><td>Usually fractional shares credited</td></tr>
                <tr><td>Cost</td><td>Questrade lists no fee</td><td>Usually no fee; some intermediaries may charge to participate</td></tr>
                <tr class="highlight-row"><td>Best for</td><td>Simplicity, ETFs, small positions</td><td>Large single-stock holders who want a discount when offered</td></tr>
            </tbody>
        </table>
    </div>

    <p>Sources for the table: <a href="${QT_DRIP}">Questrade's DRIP page</a> (updated October 9, 2025), the <a href="${TD_DRIP}">TD May 28, 2026 dividend notice</a>, and the <a href="${FTS_DRIP}">Fortis plan circular</a>, which notes that some intermediaries may charge non-registered holders a fee to participate. Other brokers' rules differ, so check yours.</p>

    <h2 id="discount">How do DRIP discounts work?</h2>

    <p>When a company issues brand-new shares from treasury for its DRIP, it can sell them below market price. The discount is set by the board and can change with each dividend. When the company instead buys existing shares on the market, there is normally no discount.</p>

    <div class="table-wrapper">
        <table>
            <caption>DRIP discount terms from company documents (as stated in each source)</caption>
            <thead>
                <tr><th>Company</th><th>What the plan allows</th><th>What applied</th><th>Source date</th></tr>
            </thead>
            <tbody>
                <tr><td>TD Bank</td><td>Up to 5% off the average market price on treasury shares</td><td>July 31, 2026 dividend: open-market purchase, no discount</td><td>May 28, 2026</td></tr>
                <tr><td>BMO</td><td>Shareholder Dividend Reinvestment and Share Purchase Plan</td><td>Shares bought on the open market without a discount until further notice</td><td>May 27, 2026</td></tr>
                <tr><td>Fortis</td><td>Up to 5% on treasury shares; not on optional cash purchases</td><td>Discount set at 2% when the amended plan took effect January 1, 2009; check current notices</td><td>Plan circular</td></tr>
            </tbody>
        </table>
    </div>

    <p>Companies use discounted treasury DRIPs to raise equity cheaply. Fortis says in its <a href="https://fortis.gcs-web.com/news-releases/news-release-details/fortis-inc-reports-fourth-quarter-annual-2025-results">2025 results</a> that its plan is expected to provide common equity for its capital program. The flip side is dilution: new shares are issued to everyone who participates, and the share count rises. A discount is a real benefit to participants, but it should never be the reason to own a stock.</p>

    <div class="example-box">
        <strong>Illustrative example: the value of a 2% discount</strong>
        <div class="example-calculation">
            <div class="line"><span>Quarterly dividend on 500 shares at $0.60</span><span>$300</span></div>
            <div class="line"><span>Average market price</span><span>$52.00</span></div>
            <div class="line"><span>With a 2% discount, price paid</span><span>$50.96</span></div>
            <div class="line"><span>Shares received with discount ($300 ÷ $50.96)</span><span>5.887</span></div>
            <div class="line"><span>Shares received without discount ($300 ÷ $52.00)</span><span>5.769</span></div>
            <div class="line total"><span>Extra shares from the discount, this quarter</span><span>about 0.118 (≈ $6)</span></div>
        </div>
        <p>About $6 a quarter on $300 reinvested. Worthwhile over years, small in any one quarter. Numbers are illustrative.</p>
    </div>

    <h2 id="tax">How are reinvested dividends taxed?</h2>

    <p>In a non-registered account, exactly as if you had received the cash. A <a href="${CRA_RULING}">CRA advance ruling on a public company's DRIP</a> (reported by Tax Interpretations) confirms that reinvested cash dividends are taxable dividends, that a discount of up to 5% on treasury shares is not a taxable benefit, and that your cost is the price paid under the plan. Those rulings bind CRA only for the company that asked, but they reflect what CRA calls a long-standing administrative position for public company DRIPs. CRA has taken a different view for some income trusts and REITs, so check the plan's tax section if you hold units rather than shares.</p>

    <ul>
        <li>Eligible dividends from Canadian companies are grossed up by 38% and earn the dividend tax credit. A $300 reinvested dividend adds $414 to taxable income and a federal credit of about $62 (15.0198% of $414), plus a provincial credit. See <a href="/blog/dividend-tax-credit-by-province-canada/">dividend tax credit by province</a>.</li>
        <li>You get a T5 slip (for shares) or T3 slip (for ETFs and trusts) showing the dividends, even though no cash arrived.</li>
        <li>The tax is due with your return. A large DRIP position can create a tax bill with no cash to pay it.</li>
    </ul>

    <div class="warning-box">
        <strong>The DRIP cash-flow trap</strong>
        <p>Reinvesting everything in a taxable account means paying the tax on those dividends from your salary or savings each April. That is fine if planned. It is a shock if not. Inside a TFSA or RRSP there is no annual tax on dividends, so this problem disappears.</p>
    </div>

    <h2 id="acb">How do you track ACB with a DRIP?</h2>

    <p>Treat every reinvestment as a separate purchase. <a href="${CRA_MF}">CRA's guidance on identical properties</a> says that when you reinvest distributions you should recalculate the average cost per unit each time. Here is a year of a broker synthetic DRIP, buying whole shares only:</p>

    <div class="table-wrapper">
        <table>
            <caption>Illustrative ACB record for a synthetic DRIP: 500 shares bought at $50, $0.60 quarterly dividend</caption>
            <thead>
                <tr><th>Quarter</th><th>Price</th><th>Dividend</th><th>Shares bought</th><th>Cost added</th><th>Cash left</th><th>Shares held</th><th>Total ACB</th><th>ACB per share</th></tr>
            </thead>
            <tbody>
                <tr><td>Start</td><td>$50</td><td>—</td><td>—</td><td>—</td><td>—</td><td>500</td><td>$25,000</td><td>$50.00</td></tr>
                <tr><td>Q1</td><td>$52</td><td>$300.00</td><td>5</td><td>$260</td><td>$40.00</td><td>505</td><td>$25,260</td><td>$50.02</td></tr>
                <tr><td>Q2</td><td>$48</td><td>$303.00</td><td>6</td><td>$288</td><td>$15.00</td><td>511</td><td>$25,548</td><td>$50.00</td></tr>
                <tr><td>Q3</td><td>$50</td><td>$306.60</td><td>6</td><td>$300</td><td>$6.60</td><td>517</td><td>$25,848</td><td>$50.00</td></tr>
                <tr class="highlight-row"><td>Q4</td><td>$55</td><td>$310.20</td><td>5</td><td>$275</td><td>$35.20</td><td>522</td><td>$26,123</td><td>$50.04</td></tr>
            </tbody>
        </table>
    </div>

    <p>Over the year you reported $1,219.80 of dividends ($1,123 reinvested and $96.80 paid in cash). Now suppose you later sell all 522 shares at $60, for $31,320. Your gain is $31,320 minus $26,123, or $5,197. If you forgot the DRIP purchases and used the original $25,000, you would report a gain of $6,320, overstating it by $1,123: money you were already taxed on as dividends.</p>

    <div class="chart-container">
        <h3>Capital gain reported on the sale, with and without DRIP purchases in ACB (illustrative)</h3>
        <div class="bar-chart">
            <div class="bar-item"><div class="bar-label wide">ACB includes DRIP buys: $5,197</div><div class="bar-wrapper"><div class="bar" style="width: 82%;"><span></span></div></div></div>
            <div class="bar-item"><div class="bar-label wide">ACB ignores DRIP buys: $6,320</div><div class="bar-wrapper"><div class="bar" style="width: 100%;"><span></span></div></div></div>
            <div class="bar-item"><div class="bar-label wide">Gain overstated: $1,123</div><div class="bar-wrapper"><div class="bar" style="width: 18%;"><span></span></div></div></div>
        </div>
        <p>One year of reinvestment. Over 10 or 20 years of DRIP purchases, the overstatement can grow to thousands of dollars of gain.</p>
    </div>

    <p>Your broker's book value may already include DRIP purchases, but CRA says the T5008 cost figure may not reflect your ACB. Keep your own record; see <a href="/blog/t5008-slip-cost-base-canada/">the T5008 slip and cost base</a>. For ETFs, also adjust ACB for return of capital and reinvested capital gains distributions reported on the T3.</p>

    <h2 id="accounts">Which accounts suit a DRIP?</h2>

    <div class="table-wrapper">
        <table>
            <caption>DRIPs by account type</caption>
            <thead>
                <tr><th>Account</th><th>Tax on reinvested dividends</th><th>ACB tracking needed?</th><th>Notes</th></tr>
            </thead>
            <tbody>
                <tr><td>TFSA</td><td>None in Canada</td><td>No</td><td>Foreign dividends can face withholding</td></tr>
                <tr><td>RRSP / RRIF</td><td>None until withdrawal</td><td>No</td><td>Withdrawals taxed as income; dividend credit lost</td></tr>
                <tr><td>FHSA</td><td>None in Canada</td><td>No</td><td>Horizon may be short for a stock DRIP</td></tr>
                <tr class="highlight-row"><td>Non-registered</td><td>Taxable each year</td><td>Yes, every purchase</td><td>Dividend tax credit applies to eligible Canadian dividends</td></tr>
            </tbody>
        </table>
    </div>

    <h2 id="setup">How do you set one up?</h2>

    <div class="step-section">
        <div class="step"><div class="step-number">1</div><div><div class="step-title">Decide which holdings to reinvest</div><p>Reinvesting into a position that is already too large makes it larger. Some investors reinvest only in underweight holdings.</p></div></div>
        <div class="step"><div class="step-number">2</div><div><div class="step-title">Turn on the broker DRIP before the record date</div><p>Questrade says processing takes two business days and recommends enrolling before the ex-dividend date.</p></div></div>
        <div class="step"><div class="step-number">3</div><div><div class="step-title">For a company plan, read the plan document</div><p>Check the pricing formula, any discount, fractional shares, fees, and how beneficial holders enrol. Registered holders deal with the transfer agent directly.</p></div></div>
        <div class="step"><div class="step-number">4</div><div><div class="step-title">Start an ACB record the same day</div><p>A spreadsheet with date, shares, price and cost for every reinvestment, plus any return of capital.</p></div></div>
        <div class="step"><div class="step-number">5</div><div><div class="step-title">Set aside cash for the tax</div><p>In a non-registered account, estimate the tax on the year's dividends and keep it in savings.</p></div></div>
    </div>

    <div class="flowchart">
        <div class="flow-node decision">Is the holding in a TFSA, RRSP or FHSA?</div>
        <div class="flow-arrow"></div>
        <div class="flow-branch-container">
            <div class="flow-node result">Yes: a broker DRIP is simple; no ACB records needed</div>
            <div class="flow-node decision">No: will you keep ACB records and fund the tax from other cash?</div>
        </div>
        <div class="flow-arrow"></div>
        <div class="flow-branch-container">
            <div class="flow-node result">Yes: DRIP fits; use the company plan if it offers a discount</div>
            <div class="flow-node result">No: take cash, then reinvest manually where it fits the plan</div>
        </div>
    </div>

    <h2 id="when">When should you turn a DRIP off?</h2>

    <ul>
        <li><strong>When you need the income.</strong> In retirement, cash dividends replace selling.</li>
        <li><strong>When a position is too big.</strong> Automatic reinvestment keeps adding to your largest holdings.</li>
        <li><strong>When you want to rebalance.</strong> Taking dividends as cash and buying what is underweight is a low-cost way to rebalance.</li>
        <li><strong>Before a tax-loss sale.</strong> A DRIP purchase within 30 days before or after you sell at a loss can trigger the superficial loss rule for those shares. CRA's capital losses page explains the rule.</li>
    </ul>

    <h2>Provincial and Quebec notes</h2>
    <p>DRIP mechanics are the same across Canada. The tax value of the dividend differs by province because each sets its own dividend tax credit. Quebec residents report dividends on both the federal return and the Revenu Québec return, and may receive an RL-3 slip alongside the T5. The ACB rules for capital gains apply the same way in every province.</p>

    <h2>Checklist</h2>
    <ul class="checklist">
        <li>DRIP turned on only for holdings you want to grow</li>
        <li>Company plan document read for discount and fees</li>
        <li>ACB record updated after every reinvestment</li>
        <li>Cash set aside for tax on non-registered dividends</li>
        <li>DRIP paused before any tax-loss sale</li>
    </ul>

    <h2 id="faq">Frequently asked questions</h2>

    <h3>Do I pay tax on dividends I reinvest?</h3>
    <p>Yes, in a non-registered account. Reinvested dividends are taxed like cash dividends and appear on your T5 or T3. In a TFSA, RRSP or FHSA, there is no annual Canadian tax.</p>

    <h3>Is a DRIP discount taxable?</h3>
    <p>CRA's long-standing position for public company DRIPs, shown in its advance rulings, is that a discount of up to 5% on treasury shares is not a taxable benefit. Your cost is the discounted price you paid. Some trusts and REITs are treated differently.</p>

    <h3>Why did my DRIP buy fewer shares than expected?</h3>
    <p>Broker synthetic DRIPs often buy whole shares only. Questrade, for example, buys whole shares unless you hold fractional shares, and pays the leftover as cash.</p>

    <h3>Are DRIPs free?</h3>
    <p>Usually. Questrade lists no fee for its DRIP, and company plans normally charge no commission. Some intermediaries may charge a fee to participate in a company plan.</p>

    <h3>Do Canadian banks offer DRIP discounts?</h3>
    <p>Some plans allow it, but it depends on each dividend. TD's July 2026 dividend and BMO's August 2026 dividend were reinvested through open-market purchases with no discount, according to each bank's notice.</p>

    <h3>Does a DRIP change my adjusted cost base?</h3>
    <p>Yes. Every reinvestment is a purchase that adds to total ACB, and you recalculate the average cost per share. Forgetting it means paying tax twice.</p>

    <h3>Can I DRIP an ETF?</h3>
    <p>Yes, most brokers allow DRIPs on ETFs. ETFs may also have reinvested capital gains distributions and return of capital, which adjust ACB.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="${TD_DRIP}">TD Bank Group: Dividend declaration, May 28, 2026</a>, reviewed October 23, 2026</li>
        <li><a href="${BMO_DRIP}">BMO Financial Group: Dividend announcement, May 27, 2026</a>, reviewed October 23, 2026</li>
        <li><a href="${FTS_DRIP}">Fortis Inc.: Amended and restated dividend reinvestment and share purchase plan</a>, reviewed October 23, 2026</li>
        <li><a href="${QT_DRIP}">Questrade: DRIP dividend reinvestment plan</a> (updated October 9, 2025), reviewed October 23, 2026</li>
        <li><a href="${CRA_MF}">CRA: Tax treatment of mutual funds (recalculating average cost after reinvestment)</a>, reviewed October 23, 2026</li>
        <li><a href="${CRA_RULING}">Tax Interpretations: CRA ruling 2001-0115373, dividend reinvestment plan</a> (secondary source reporting a CRA ruling), reviewed October 23, 2026</li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/personal-income/line-12700-capital-gains/capital-losses-deductions.html">CRA: Capital losses (superficial loss)</a>, reviewed October 23, 2026</li>
    </ul>

    <h2>Related reading</h2>
    <ul>
        <li><a href="/blog/dividend-investing-canada/">Dividend investing in Canada</a></li>
        <li><a href="/blog/adjusted-cost-base-canada-guide/">Adjusted cost base guide</a></li>
        <li><a href="/blog/dividend-growth-vs-high-yield-canada/">Dividend growth vs high yield</a></li>
        <li><a href="/blog/t5008-slip-cost-base-canada/">The T5008 slip and your cost base</a></li>
    </ul>

    <div class="cta-section">
        <p><strong>Reinvested dividends still go on your return.</strong></p>
        <p>The 2026 tax guide covers dividend income, the gross-up and cost base from the filing side.</p>
        <a href="/ebooks/tax-guide/" class="cta-button">Get the 2026 Tax Guide — $49 CAD</a>
    </div>

    ${invFooter("General education about dividend reinvestment plans as of October 23, 2026. It is not a recommendation to buy or sell any security, and not investment or tax advice. Company plan terms and discounts change with each dividend; read the current plan and dividend notice. Dollar examples are illustrations.")}

</div>`
);
