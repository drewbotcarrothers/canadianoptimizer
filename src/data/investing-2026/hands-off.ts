import { invFooter, invPost } from './types';

const CIRO_TCR = 'https://www.ciro.ca/office-investor/investing-basics/total-cost-reporting-what-investors-need-know-2027';
const GSAM_MF_FEES = 'https://www.getsmarteraboutmoney.ca/learning-path/mutual-funds-segregated-funds/mutual-fund-fees/';
const QW = 'https://www.questrade.com/questwealth-portfolios';
const WS_FEES = 'https://www.wealthsimple.com/en-ca/legal/fees/trade';
const WS_PRICING = 'https://www.wealthsimple.com/en-ca/pricing';
const JW = 'https://www.justwealth.com/pricing/';
const FSRA = 'https://www.fsrao.ca/announcements/final-reminder-financial-planner-title-users-must-act-march-28';
const AMF = 'https://lautorite.qc.ca/en/becoming-a-professional/financial-planning';

export const roboAdvisorVsFinancialAdvisorCanada = invPost(
  'hands-off',
  'robo-advisor-vs-financial-advisor-canada',
  'Robo-Advisor vs Financial Advisor in Canada: Who Fits You',
  'A robo-advisor costs about 0.2% to 0.5% a year plus fund fees, a fee-based advisor often 1% to 2%, and a fee-only planner bills for advice. Compare all three.',
  `<div class="container">

    <div class="hook">
        From January 1, 2027, your annual fee report must show <span class="highlight">the total dollars you paid, including what your funds cost</span> (CIRO). For many advised Canadians, it will be the first time the fund costs and the advisor's fee appear on one page. You can work out that number now, before you choose who manages your money.
    </div>

    <p>A robo-advisor costs about 0.20% to 0.50% a year plus ETF fees, according to Questrade, Wealthsimple, and Justwealth pricing in October 2026, and it manages only the portfolio. The OSC says fee-based advisors typically charge 1% to 2%. A fee-only planner bills you directly for a plan. Choose based on whether you need management, a plan, or both.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>Published robo fees as of October 23, 2026: Questwealth 0.25% (0.20% from $100,000), Wealthsimple managed 0.5% for Core and 0.4% for Premium, and Justwealth 0.50%. All are before the ETFs' own costs.</li>
            <li>The OSC's investor site says fee-based advisory fees are "typically negotiated between 1% and 2%." Mutual fund MERs range from under 1% to over 3%.</li>
            <li>Deferred sales charges were banned as of June 1, 2022. Trailing commissions are no longer allowed in self-directed (order-execution) accounts.</li>
            <li>In the illustrative example below, $100,000 grows to $319,044 over 25 years after a 0.25% fee, and to $236,324 after a 1.5% fee.</li>
            <li>Check any advisor on aretheyregistered.ca. In Ontario, "Financial Planner" is a protected title, and the transition period ended March 28, 2026.</li>
        </ul>
    </div>

    <p>This is the pillar for <a href="/category/investing/hands-off/">Hands-Off Investing</a>, part of the <a href="/category/investing/">Investing</a> category. It compares the four ways to hand off your investments: a robo-advisor, a bank or mutual fund advisor, an investment advisor at a full-service firm, and a fee-only planner. It covers what each costs, what each does, and how to check them. If you would rather run a one-fund portfolio yourself, read <a href="/blog/couch-potato-portfolio-canada/">couch potato investing</a>.</p>

    <nav aria-label="On this page">
        <ul>
            <li><a href="#options">What are your options?</a></li>
            <li><a href="#cost">What does each option cost?</a></li>
            <li><a href="#drag">How much does the fee cost over time?</a></li>
            <li><a href="#which">Which one fits you?</a></li>
            <li><a href="#check">How do you check an advisor?</a></li>
            <li><a href="#provinces">What changes by province?</a></li>
            <li><a href="#questions">What should you ask before signing?</a></li>
            <li><a href="#faq">FAQ</a></li>
        </ul>
    </nav>

    <h2 id="options">What are your options?</h2>

    <p>There are four common choices. They differ in who chooses the investments, how they are paid, and whether they create a financial plan.</p>

    <div class="table-wrapper">
        <table>
            <caption>Four ways to hand off your investing in Canada, as of October 2026</caption>
            <thead>
                <tr><th>Option</th><th>What you get</th><th>How they are paid</th><th>What you do not get</th></tr>
            </thead>
            <tbody>
                <tr><td>Robo-advisor</td><td>A questionnaire, a model ETF portfolio, automatic rebalancing, and usually access to a human by phone or chat</td><td>An annual percentage of assets, plus the ETFs' MERs</td><td>Detailed planning for taxes, pensions, insurance, or estates</td></tr>
                <tr><td>Bank or mutual fund advisor</td><td>Mutual funds chosen for you, usually from a limited range, and an advisor at a branch</td><td>Usually built into the fund through trailing commissions, or a front-end load of up to 5%</td><td>ETFs or individual stocks in most cases; the full cost is often not obvious</td></tr>
                <tr><td>Investment advisor at a full-service firm</td><td>Stocks, bonds, ETFs, and funds, often with planning help</td><td>A fee-based account (often 1% to 2%) or commissions per trade</td><td>A low cost on small accounts</td></tr>
                <tr><td>Fee-only planner</td><td>A written financial plan covering retirement, tax, pensions, and insurance</td><td>An hourly, project, or annual fee, paid directly by you</td><td>Investment management, in most cases; you or a robo run the portfolio</td></tr>
            </tbody>
        </table>
    </div>

    <p>A portfolio manager with discretionary authority is a fifth option, usually for larger accounts. They can trade without asking you first and are registered as portfolio managers with provincial securities regulators.</p>

    <h2 id="cost">What does each option cost?</h2>

    <p>Add the service fee to the fund costs. A robo's advertised percentage does not include the ETFs it holds. A mutual fund's MER often includes the advisor's pay. Here are the published fee schedules as of today.</p>

    <div class="table-wrapper">
        <table>
            <caption>Published robo-advisor fees, reviewed October 23, 2026</caption>
            <thead>
                <tr><th>Service</th><th>Annual management fee</th><th>Notes from the provider's page</th></tr>
            </thead>
            <tbody>
                <tr><td><a href="${QW}">Questwealth Portfolios</a></td><td>0.25% on $250–$99,999; 0.20% on $100,000+</td><td>Plus the ETFs' MERs</td></tr>
                <tr><td><a href="${WS_PRICING}">Wealthsimple managed (Classic)</a></td><td>Core 0.5%; Premium ($100,000+) 0.4%; Generation ($500,000+) 0.4% down to 0.2%</td><td>The tier is based on your total assets at Wealthsimple</td></tr>
                <tr><td><a href="${WS_FEES}">Wealthsimple Automated Investing</a></td><td>0.25%, capped at $250 a year per account</td><td>From Wealthsimple's fee schedule for trade accounts</td></tr>
                <tr><td><a href="${JW}">Justwealth</a></td><td>0.50%; minimum $4.99 a month</td><td>Its own example adds an average ETF fee of about 0.20%. $5,000 minimum, except RESP, FHSA, and RDSP accounts</td></tr>
            </tbody>
        </table>
    </div>

    <div class="chart-container">
        <h3>Annual fee on a $250,000 account (calculated from published schedules)</h3>
        <div class="bar-chart">
            <div class="bar-item"><div class="bar-label wide">WS Automated: $250</div><div class="bar-wrapper"><div class="bar" style="width: 5%;"><span></span></div></div></div>
            <div class="bar-item"><div class="bar-label wide">One-fund ETF: $475</div><div class="bar-wrapper"><div class="bar" style="width: 9.5%;"><span></span></div></div></div>
            <div class="bar-item"><div class="bar-label wide">Questwealth: $500</div><div class="bar-wrapper"><div class="bar" style="width: 10%;"><span></span></div></div></div>
            <div class="bar-item"><div class="bar-label wide">WS Premium: $1,000</div><div class="bar-wrapper"><div class="bar" style="width: 20%;"><span></span></div></div></div>
            <div class="bar-item"><div class="bar-label wide">Justwealth</div><div class="bar-wrapper"><div class="bar" style="width: 25%;"><span>$1,250</span></div></div></div>
            <div class="bar-item"><div class="bar-label wide">Advisor at 1%</div><div class="bar-wrapper"><div class="bar" style="width: 50%;"><span>$2,500</span></div></div></div>
            <div class="bar-item"><div class="bar-label wide">Advisor at 2%</div><div class="bar-wrapper"><div class="bar" style="width: 100%;"><span>$5,000</span></div></div></div>
        </div>
        <p>Service fees on $250,000, before fund costs (except the one-fund ETF bar, which is the fund's own MER). Calculated from the provider pages listed under the table above and the OSC's 1%–2% typical range, reviewed October 23, 2026. A robo also pays its ETFs' MERs, and an advised account also pays its funds' MERs. The real gap depends on both.</p>
    </div>

    <p>Mutual funds sold through an advisor work differently. The <a href="${GSAM_MF_FEES}">OSC's investor site</a> says MERs range from under 1% to over 3%, and trailing commissions are typically 0.25% to 1.5% a year, paid out of the MER. A front-end load can be up to 5%. Deferred sales charges and low-load options were banned as of June 1, 2022. Funds you bought under an old DSC schedule can still carry redemption charges of up to 6%, declining over 5 to 7 years. Check before you transfer.</p>

    <h2 id="drag">How much does the fee cost over time?</h2>

    <p>More than it looks, because the fee comes out every year whether or not the portfolio grows. Here is the same $100,000 over 25 years, assuming a 5% gross return before fees.</p>

    <div class="table-wrapper">
        <table>
            <caption>Illustrative example: $100,000 for 25 years at an assumed 5% gross return, by total annual cost</caption>
            <thead>
                <tr><th>Total annual cost</th><th>Net return</th><th>Value after 25 years</th><th>Compared with 0.25%</th></tr>
            </thead>
            <tbody>
                <tr><td>0.19%</td><td>4.81%</td><td>$323,644</td><td>+$4,600</td></tr>
                <tr><td>0.25%</td><td>4.75%</td><td>$319,044</td><td>—</td></tr>
                <tr><td>0.50%</td><td>4.50%</td><td>$300,543</td><td>-$18,501</td></tr>
                <tr><td>1.00%</td><td>4.00%</td><td>$266,584</td><td>-$52,460</td></tr>
                <tr class="highlight-row"><td>1.50%</td><td>3.50%</td><td>$236,324</td><td>-$82,720</td></tr>
                <tr><td>2.00%</td><td>3.00%</td><td>$209,378</td><td>-$109,666</td></tr>
            </tbody>
        </table>
    </div>

    <p>Formula: $100,000 × (1 + 5% − cost)<sup>25</sup>. The 5% is an assumption, not a forecast. The costs are round numbers chosen to match the ranges above. The table shows why a 1% difference matters: over 25 years it is a large share of the final balance. The fee is worth paying only if the advice adds more than it costs, for example by stopping you from selling in a crash or by saving you tax. The <a href="/blog/mer-drag-index-funds-canada/">MER drag guide</a> goes further.</p>

    <h2 id="which">Which one fits you?</h2>

    <p>Decide whether you need someone to manage the portfolio, someone to make a plan, or both. Many people pay for portfolio management when what they really need is a plan.</p>

    <div class="flowchart">
        <div class="flow-node decision">Will you buy one ETF and leave it alone, without help?</div>
        <div class="flow-arrow"></div>
        <div class="flow-branch-container">
            <div class="flow-node result">Yes: run a one-fund portfolio yourself. Pay a fee-only planner once if you need a plan</div>
            <div class="flow-node decision">No: do you need advice on tax, pensions, a business, or an estate?</div>
        </div>
        <div class="flow-arrow"></div>
        <div class="flow-branch-container">
            <div class="flow-node result">No: use a robo-advisor</div>
            <div class="flow-node result">Yes: robo plus fee-only planner, or a full-service advisor whose total cost you have checked</div>
        </div>
    </div>

    <div class="example-box">
        <strong>Illustration: two households, two answers</strong>
        <p><strong>Jordan, 29, Calgary, $40,000 in a TFSA.</strong> No pension or business, and does not want to place trades. A robo at 0.25% costs about $100 a year before ETF fees. A planner's hourly fee might never be needed.</p>
        <p><strong>Lise and Marc, 58, Quebec City, $900,000 across RRSPs, a defined-benefit pension, and a corporation.</strong> Their questions are when to start the QPP, how to draw down the RRSP, and how to take money out of the corporation. That is planning, not portfolio management. A fee-only planner holding the Quebec planner title, together with a low-cost portfolio, may cost less than 1% of $900,000, which is $9,000 a year. They should get quotes for both and compare total costs.</p>
        <p>Both households are hypothetical, and neither is a recommendation.</p>
    </div>

    <h2 id="check">How do you check an advisor?</h2>

    <p>Check their registration before you hand over money or account numbers. It takes five minutes.</p>

    <div class="step-section">
        <div class="step">
            <div class="step-number">1</div>
            <div>
                <div class="step-title">Registration</div>
                <p>Search the person and the firm on the CSA's <a href="https://www.aretheyregistered.ca/">National Registration Search</a>. Note the registration category: dealing representative, advising representative, and so on.</p>
            </div>
        </div>
        <div class="step">
            <div class="step-number">2</div>
            <div>
                <div class="step-title">Discipline history</div>
                <p>If they are at a CIRO-regulated firm, use CIRO's "Know Your Advisor: Advisor Report."</p>
            </div>
        </div>
        <div class="step">
            <div class="step-number">3</div>
            <div>
                <div class="step-title">Title</div>
                <p>In Ontario, check that a "Financial Planner" or "Financial Advisor" holds a credential from an FSRA-approved body. In Quebec, check the AMF register.</p>
            </div>
        </div>
        <div class="step">
            <div class="step-number">4</div>
            <div>
                <div class="step-title">Total cost in writing</div>
                <p>Ask for the service fee and the fund costs (MER plus TER) as a dollar estimate for your balance.</p>
            </div>
        </div>
    </div>

    <div class="warning-box">
        <strong>Red flags</strong>
        <ul>
            <li>They will not state the total annual cost in dollars.</li>
            <li>They recommend moving an account that still has deferred sales charges, without telling you what it will cost.</li>
            <li>They are not registered, or the name on the registration does not match the firm.</li>
            <li>They promise returns, or recommend borrowing to invest before you have a plan.</li>
        </ul>
    </div>

    <h2 id="provinces">What changes by province?</h2>

    <p>Securities registration is provincial, coordinated through the Canadian Securities Administrators, so the registration search above works in every province. Rules for planner titles differ by province:</p>
    <ul>
        <li><strong>Ontario:</strong> Under the Financial Professionals Title Protection Act, 2019, "Financial Planner" and "Financial Advisor" require a credential from an FSRA-approved body. FSRA says the transition period for existing planners <a href="${FSRA}">ended March 28, 2026</a>.</li>
        <li><strong>Quebec:</strong> The AMF says the financial planner title requires a diploma from the Institut de planification financière and an <a href="${AMF}">AMF certificate</a>. Check the AMF's register of authorized firms and individuals.</li>
        <li><strong>Other provinces:</strong> This guide has not confirmed a title-protection regime in force elsewhere. Rely on the registration search and the credential itself.</li>
    </ul>

    <h2 id="questions">What should you ask before signing?</h2>

    <div class="example-box">
        <strong>Script: questions for your first meeting</strong>
        <ol>
            <li>"What will I pay in total, in dollars, in the first year on $[balance], including fund MERs and TERs?"</li>
            <li>"How are you paid: by me, by the fund company, or both?"</li>
            <li>"What is your registration category, and which firm are you registered with?"</li>
            <li>"Will I get a written financial plan? What does it cover, and how often is it updated?"</li>
            <li>"If I leave, what will it cost to transfer my account out?"</li>
        </ol>
    </div>

    <h2>Checklist</h2>
    <ul class="checklist">
        <li>Decided whether you need management, a plan, or both</li>
        <li>Total yearly cost written down in dollars for each option</li>
        <li>Registration checked on aretheyregistered.ca</li>
        <li>Planner credential checked (FSRA in Ontario, AMF in Quebec)</li>
        <li>Any deferred sales charges on your current funds confirmed before you transfer</li>
        <li>A reminder to compare against your first total cost report in early 2027</li>
    </ul>

    <h2 id="faq">Frequently asked questions</h2>

    <h3>Is a robo-advisor worth it in Canada?</h3>
    <p>If you will not run a one-fund ETF portfolio yourself, yes, usually. Published fees as of October 23, 2026 range from 0.20% to 0.50% plus ETF costs, far below typical advised mutual-fund costs. If you will hold one ETF and leave it alone, the robo fee is the price of convenience.</p>

    <h3>How much does a financial advisor cost in Canada?</h3>
    <p>The OSC's investor site says fee-based accounts typically charge 1% to 2%, and mutual fund MERs range from under 1% to over 3%. From 2027, your annual report will show the combined total in dollars.</p>

    <h3>What is total cost reporting?</h3>
    <p>A regulatory change. CIRO says that from January 1, 2027, annual fee and charge reports will show the total dollars you paid, including each fund's expense ratio (MER plus TER). CIRO says no new fees are being added; costs you were already paying will now be shown.</p>

    <h3>What is a fee-only planner?</h3>
    <p>A planner you pay directly, by the hour, the project, or the year, who does not earn commissions on products. Ask how they are paid. The terms "fee-only" and "fee-based" are easy to confuse.</p>

    <h3>Can I get out of a deferred sales charge?</h3>
    <p>New DSC sales were banned as of June 1, 2022. Existing DSC schedules can still apply until they run out. Ask the fund company for the remaining charge before you move the account.</p>

    <h3>Are robo-advisors safe?</h3>
    <p>They are registered dealers or portfolio managers, and your money is in investments that can fall in value. Check the firm on aretheyregistered.ca, as you would any advisor.</p>

    <h3>Do I need an advisor if I have a pension?</h3>
    <p>A defined-benefit pension, a commuted-value decision, or a corporation are good reasons to pay for a plan once. You may not need to pay an ongoing fee on your portfolio to get one.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="${CIRO_TCR}">CIRO: Total Cost Reporting, what investors need to know for 2027</a>, reviewed October 23, 2026</li>
        <li><a href="${GSAM_MF_FEES}">GetSmarterAboutMoney (OSC): Mutual fund fees</a>, page last updated September 26, 2023, reviewed October 23, 2026</li>
        <li><a href="${QW}">Questrade: Questwealth Portfolios</a>, reviewed October 23, 2026</li>
        <li><a href="${WS_PRICING}">Wealthsimple: pricing</a> and <a href="${WS_FEES}">fee schedule for trade accounts</a>, reviewed October 23, 2026</li>
        <li><a href="${JW}">Justwealth: pricing</a>, reviewed October 23, 2026</li>
        <li><a href="${FSRA}">FSRA: Financial Planner title transition reminder</a> (March 23, 2026), reviewed October 23, 2026</li>
        <li><a href="${AMF}">AMF: Financial planning</a> and the <a href="https://www.aretheyregistered.ca/">CSA National Registration Search</a>, reviewed October 23, 2026</li>
    </ul>

    <h2>Related reading</h2>
    <ul>
        <li><a href="/blog/best-robo-advisors-canada/">Best robo-advisors in Canada</a></li>
        <li><a href="/blog/couch-potato-portfolio-canada/">Couch potato investing in Canada</a></li>
        <li><a href="/blog/mer-drag-index-funds-canada/">MER drag on index funds</a></li>
        <li><a href="/blog/how-to-invest-canada-guide/">How to invest in Canada</a></li>
        <li><a href="/blog/build-retirement-plan-7-steps/">Build a retirement plan in 7 steps</a></li>
    </ul>

    <div class="cta-section">
        <p><strong>Chosen a robo-advisor? Compare them before you open an account.</strong></p>
        <p>Our robo-advisor comparison covers what each one adds on top of its ETFs.</p>
        <a href="/blog/best-robo-advisors-canada/" class="cta-button">Compare robo-advisors in Canada</a>
    </div>

    ${invFooter('General education about choosing a robo-advisor, advisor, or planner in Canada as of October 23, 2026. It is not a recommendation of any firm or individual, and not investment or tax advice. Fees are copied from the provider or regulator pages listed in Sources on the date shown; they change. Households and growth figures are labelled illustrations, not forecasts. Check registration and the current fee schedule before you sign.')}

</div>`
);
