import { batchFooter, batchPost } from './types';

const D = '2026-11-22';
const TFSA = 'https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/tax-free-savings-account';
const LIMITS = 'https://www.canada.ca/en/revenue-agency/services/tax/registered-plans-administrators/pspa/mp-rrsp-dpsp-tfsa-limits-ympe.html';
const WS_ELIG = 'https://help.wealthsimple.com/hc/en-ca/articles/4404721755287-Eligibility-requirements-to-open-an-account-with-Wealthsimple';
const WS_OPEN = 'https://help.wealthsimple.com/hc/en-ca/articles/4404053510299-Open-a-TFSA';
const QT_OPEN = 'https://www.questrade.com/learning/accounts-taxes/how-to-open-a-tfsa-account-in-canada';
const QT_WHAT = 'https://www.questrade.com/learning/accounts-taxes/what-is-a-tfsa';
const EQ_TFSA = 'https://www.eqbank.ca/personal-banking/tfsa';
const EQ_FAQ = 'https://www.eqbank.ca/about-us/help/common-questions';
const TD_REVIEW = 'https://www.td.com/ca/en/investing/direct-investing/accounts/review';
const TD_OPEN = 'https://td.intelliresponse.com/tddirectinvesting/public/?id=2684&question=How+do+I+open+a+TD+Direct+Investing+account&requestType=NormalRequest&uuid=a3fca458-1065-11f0-86f4-7f4ecdd4ec08';

const disclaimer = `General education, not financial or tax advice, and not a recommendation of any provider. Eligibility rules come from the Canada Revenue Agency TFSA pages, and provider requirements from each provider's own pages listed under Sources, all read on November 21, 2026. Providers change their sign-up steps often, so check the provider's current page before you apply. The room table assumes you were a resident of Canada every year and never contributed; your own room depends on your history.`;

const content = `<div class="container">

    <div class="hook">
        Opening a TFSA online usually takes one sitting. <span class="highlight">The part that takes thought is choosing what kind of TFSA to open, because the account can only hold what its provider offers.</span> This walkthrough, part of our <a href="/category/investing/accounts-asset-location/">accounts and asset location hub</a>, covers the CRA's rules, what four providers ask for, and the room you already have.
    </div>

    <p>To open a TFSA you must be a resident of Canada, at least 18, and have a valid Social Insurance Number, according to the CRA in 2026. You apply with a bank, credit union, insurer or brokerage, give your SIN and date of birth, and pass identity checks. In provinces where adulthood starts at 19, you wait a year but keep the room.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>Decide first what the TFSA will hold: cash and GICs (a bank) or ETFs and stocks (a brokerage). The choice decides the provider.</li>
            <li>Have your SIN, government-issued ID, a Canadian address, a phone number and a bank account to fund it.</li>
            <li>Room starts the year you turn 18 (or arrive as a resident), even if you can only open the account at 19.</li>
            <li>Add a successor holder or beneficiary when you open it; some providers cannot do this step online.</li>
            <li>Opening a second TFSA does not create new room. Your room is shared across every TFSA you hold.</li>
        </ul>
    </div>

    <nav aria-label="On this page">
        <ul>
            <li><a href="#who">Who can open one</a></li>
            <li><a href="#type">Pick the type first</a></li>
            <li><a href="#providers">What four providers ask for</a></li>
            <li><a href="#steps">The steps</a></li>
            <li><a href="#room">How much you can put in</a></li>
            <li><a href="#after">After it is open</a></li>
            <li><a href="#faq">FAQ</a></li>
        </ul>
    </nav>

    <h2 id="who">Who can open a TFSA in Canada?</h2>
    <p>Any adult resident of Canada with a valid SIN. The CRA's <a href="${TFSA}/opening.html">opening a TFSA</a> page lists three conditions, and earned income is not one of them: you can open and fund a TFSA with no job at all.</p>
    <ul>
        <li><strong>Residency:</strong> you must be a resident of Canada for income tax purposes. A new resident can open one from the day residency starts, but room only begins in the year of residency, not from age 18.</li>
        <li><strong>Age:</strong> 18 or older. Where the age of majority is 19, the CRA says you can open the account after you turn 19 and carry over the room from the year you turned 18.</li>
        <li><strong>SIN:</strong> a valid Social Insurance Number. EQ Bank's TFSA page excludes customers with temporary SINs, so check with your provider first if you hold a temporary SIN.</li>
    </ul>
    <p>Which provinces wait until 19? Wealthsimple's <a href="${WS_ELIG}">eligibility page</a> lists 18 for Alberta, Manitoba, Ontario, Prince Edward Island, Quebec and Saskatchewan, and 19 for British Columbia, New Brunswick, Newfoundland and Labrador, Nova Scotia and the three territories. A non-resident may keep holding a TFSA but cannot contribute to it tax-free, so open yours before you move abroad, not after.</p>

    <h2 id="type">What type of TFSA should I open?</h2>
    <p>Pick what the money will be invested in, then pick a provider that offers it. The CRA's <a href="${TFSA}/what.html">What is a TFSA</a> page describes three main types:</p>
    <div class="table-wrapper">
        <table>
            <caption>The three TFSA types the CRA describes, and when each fits</caption>
            <thead>
                <tr><th>Type</th><th>Who offers it</th><th>What it holds</th><th>Fits when</th></tr>
            </thead>
            <tbody>
                <tr><td>Deposit TFSA</td><td>Banks and credit unions</td><td>Savings balance and GICs</td><td>The money has a date within a few years, or you want no market risk</td></tr>
                <tr class="highlight-row"><td>Arrangement in trust (often self-directed)</td><td>Brokerages, robo-advisors, mutual fund dealers</td><td>Stocks, ETFs, bonds, mutual funds, GICs</td><td>The money is for the long run and you will invest it</td></tr>
                <tr><td>Annuity contract</td><td>Insurance companies</td><td>Guaranteed payments for a set period</td><td>You want a fixed payout from a lump sum</td></tr>
            </tbody>
        </table>
    </div>
    <p>The most common mistake is the first one: opening a TFSA at your bank because it is convenient and leaving the money in a low-rate savings balance for decades. A TFSA is a container, not an investment. If you plan to hold index ETFs, a brokerage TFSA is the right container, and our <a href="/blog/best-online-brokerages-canada/">online brokerage comparison</a> and <a href="/blog/best-etfs-tfsa-canada/">best ETFs for a TFSA</a> cover the next two decisions. If the money is an emergency fund, a deposit TFSA at a savings bank is fine, as our <a href="/blog/eq-bank-review/">EQ Bank review</a> shows.</p>

    <h2 id="providers">What do Questrade, Wealthsimple, EQ Bank and TD ask for?</h2>
    <p>All four want your SIN and proof of identity, and all four let you apply online. The differences are in what else they ask, what the TFSA can hold, and which steps must happen off the app.</p>

    <div class="table-wrapper">
        <table>
            <caption>Opening a TFSA at four providers: requirements and limits from each provider's own pages (read November 21, 2026)</caption>
            <thead>
                <tr><th>Provider</th><th>What you need</th><th>What the TFSA holds</th><th>Worth knowing</th></tr>
            </thead>
            <tbody>
                <tr><td><a href="${QT_OPEN}">Questrade</a></td><td>Canadian resident, 18 or older, valid SIN; identity verified online; financial background questions</td><td>A self-directed TFSA (the page names ETFs, mutual funds and GICs) or Questwealth Portfolios</td><td>States "No annual account fee. No opening fees." and that the account can hold both Canadian and U.S. dollars</td></tr>
                <tr><td><a href="${WS_ELIG}">Wealthsimple</a></td><td>Live in Canada as a citizen or with a valid visa; provincial minimum age; valid SIN; a valid phone number; identity check</td><td>Trade (stocks, options, ETFs), managed portfolios, or a registered savings account</td><td>Identity check uses a soft credit check; you can have 8 trade TFSAs, but no joint TFSA</td></tr>
                <tr><td><a href="${EQ_TFSA}">EQ Bank</a></td><td>Existing EQ Bank Personal Account; age of majority in your province; valid SIN (not temporary); Canadian mobile number to sign up online</td><td>TFSA Cash Savings Account and TFSA GICs</td><td>A deposit TFSA, eligible for CDIC protection up to $100,000 per insured category; available in Quebec</td></tr>
                <tr><td><a href="${TD_REVIEW}">TD Direct Investing</a></td><td>Canadian resident, SIN, personal email address, government-issued ID upload if required</td><td>Self-directed investments</td><td>A beneficiary or successor holder designation on a TFSA cannot be completed online</td></tr>
            </tbody>
        </table>
    </div>

    <p class="did-you-know" data-info-gain><strong>What the table shows:</strong> the four providers' own pages differ less on who can open a TFSA than on what happens after, since only one of them (EQ Bank) is a deposit TFSA covered by CDIC, Wealthsimple allows up to 8 trade TFSAs but no joint account, and TD Direct Investing cannot record a successor holder or beneficiary online, so that step needs a separate form or call.</p>

    <p>A few points from the providers' pages that trip people up:</p>
    <ul>
        <li><strong>EQ Bank needs two accounts.</strong> Its FAQ says new customers must open a Personal Account first, then add the TFSA from online banking or the app.</li>
        <li><strong>Wealthsimple only serves people living in Canada.</strong> Its eligibility page says it cannot hold accounts for Canadians living abroad.</li>
        <li><strong>Multiple TFSAs share one limit.</strong> Wealthsimple's FAQ notes the CRA calculates room per person, which is also why there are no joint TFSAs anywhere.</li>
    </ul>
    <p>None of this table is a ranking. Fees, products and promotions change, and the best provider depends on what you will hold. For brokerage costs side by side, see <a href="/blog/wealthsimple-vs-questrade/">Wealthsimple vs Questrade</a>.</p>

    <h2 id="steps">How do I open a TFSA, step by step?</h2>
    <p>Choose the provider, gather your documents, apply online, name your successor or beneficiary, then fund and invest. Each step is quick; skipping the last two is the expensive part.</p>

    <div class="step">
        <h3>1. Check your eligibility and your room</h3>
        <p>Confirm you are 18 (or 19 where required), a resident, and have a valid SIN. Then work out your room using the table below or your CRA account, remembering that the CRA account is only refreshed each spring.</p>
    </div>
    <div class="step">
        <h3>2. Choose the type and the provider</h3>
        <p>Bank for cash and GICs, brokerage or robo-advisor for investments. If you already have a TFSA elsewhere, a new one does not add room.</p>
    </div>
    <div class="step">
        <h3>3. Gather what you need</h3>
        <ul class="checklist">
            <li>Social Insurance Number</li>
            <li>Date of birth and government-issued ID</li>
            <li>Canadian home address, email and phone number</li>
            <li>Basic financial information (Questrade, for one, asks about your financial background as part of its regulatory checks)</li>
            <li>Bank account details for funding</li>
            <li>The names of your spouse or partner and any beneficiaries you plan to name</li>
        </ul>
    </div>
    <div class="step">
        <h3>4. Apply and verify your identity</h3>
        <p>Most applications run in a browser or an app. The CRA says the issuer then registers the account as a TFSA, and warns that it can deny the registration if your information is inaccurate or incomplete. An unregistered account's income is taxable.</p>
    </div>
    <div class="step">
        <h3>5. Name a successor holder or beneficiary</h3>
        <p>The CRA allows a spouse or common-law partner to be named successor holder, and anyone to be named beneficiary, though Quebec treats most designations differently. The choice decides whether your TFSA stays tax-free for your partner at death; our <a href="/blog/tfsa-successor-holder-vs-beneficiary/">successor holder vs beneficiary</a> guide explains the difference. At TD Direct Investing this step is not available online.</p>
    </div>
    <div class="step">
        <h3>6. Fund it, then invest it</h3>
        <p>Questrade lists funding by bank transfer, pre-authorized debit, or a contribution from another registered account. Moving an existing TFSA? Ask the new provider for a direct transfer instead of withdrawing, which our <a href="/blog/tfsa-withdrawal-rules/">TFSA withdrawal rules</a> guide explains. Then buy the investments: cash sitting in a brokerage TFSA earns little until you do.</p>
    </div>

    <h2 id="room">How much can I put in my new TFSA?</h2>
    <p>Your room is every annual dollar limit since the year you turned 18, or 2009 if that came earlier, minus anything you have contributed, plus past withdrawals. Opening the account late does not shrink it. The CRA's <a href="${TFSA}/contributing/before.html">dollar limit table</a> sets the yearly amounts; the room column below is our sum of them.</p>

    <div class="table-wrapper">
        <table>
            <caption>TFSA room available in 2026 if you never contributed, by the first year you were 18 and a resident (our sum of the CRA's annual limits)</caption>
            <thead>
                <tr><th>First eligible year</th><th>That year's limit</th><th>Total room in 2026</th></tr>
            </thead>
            <tbody>
                <tr class="highlight-row"><td>2009 or earlier</td><td>$5,000</td><td>$109,000</td></tr>
                <tr><td>2010</td><td>$5,000</td><td>$104,000</td></tr>
                <tr><td>2011</td><td>$5,000</td><td>$99,000</td></tr>
                <tr><td>2012</td><td>$5,000</td><td>$94,000</td></tr>
                <tr><td>2013</td><td>$5,500</td><td>$89,000</td></tr>
                <tr><td>2014</td><td>$5,500</td><td>$83,500</td></tr>
                <tr><td>2015</td><td>$10,000</td><td>$78,000</td></tr>
                <tr><td>2016</td><td>$5,500</td><td>$68,000</td></tr>
                <tr><td>2017</td><td>$5,500</td><td>$62,500</td></tr>
                <tr><td>2018</td><td>$5,500</td><td>$57,000</td></tr>
                <tr><td>2019</td><td>$6,000</td><td>$51,500</td></tr>
                <tr><td>2020</td><td>$6,000</td><td>$45,500</td></tr>
                <tr><td>2021</td><td>$6,000</td><td>$39,500</td></tr>
                <tr><td>2022</td><td>$6,000</td><td>$33,500</td></tr>
                <tr><td>2023</td><td>$6,500</td><td>$27,500</td></tr>
                <tr><td>2024</td><td>$7,000</td><td>$21,000</td></tr>
                <tr><td>2025</td><td>$7,000</td><td>$14,000</td></tr>
                <tr><td>2026</td><td>$7,000</td><td>$7,000</td></tr>
            </tbody>
        </table>
    </div>
    <p>Two cases need care. A newcomer counts from the year they became a resident, and the CRA's own example is a 40-year-old who arrived in 2024, assumed room back to 2009, and created an $88,000 excess. And anyone who was a non-resident for a whole year gets no limit for that year. If either applies, rebuild your room year by year rather than reading the table.</p>
    <p>The 2027 limit was not yet on the CRA's <a href="${LIMITS}">limits table</a> on November 21, 2026. When it is published it is added to everyone's room on January 1, 2027.</p>

    <div class="warning-box">
        <strong>Do not trust the first number you see.</strong> The CRA account shows TFSA room as of its last annual update. If you contributed anywhere last year, the January figure can be too high, and the 1%-a-month tax applies to any excess from the first dollar. Our <a href="/blog/tfsa-overcontribution-penalty/">over-contribution penalty</a> guide shows the cost.
    </div>

    <h2 id="after">What should I do after the TFSA is open?</h2>
    <p>Set up regular contributions within your room, invest the cash, and keep your own record of deposits and withdrawals. That record matters more than any app, because the CRA asks you to calculate your room from your own records.</p>
    <ul>
        <li><strong>Automate it.</strong> A monthly pre-authorized contribution is easier to track than lump sums.</li>
        <li><strong>Mind what you hold.</strong> Qualified investments include cash, GICs, bonds, mutual funds and listed securities. Frequent trading can lead the CRA to tax the account as a business, which our guide to <a href="/blog/tfsa-day-trading-business-income-canada/">day trading in a TFSA</a> covers.</li>
        <li><strong>Decide TFSA vs RRSP for new money.</strong> If you also have RRSP room, our <a href="/blog/rrsp-or-tfsa-by-income/">RRSP or TFSA by income</a> table shows which pays more at your tax rate.</li>
        <li><strong>Closing it later</strong> means contacting the issuer, withdrawing everything and asking for the account to be closed. A locked-in GIC may carry a fee.</li>
    </ul>

    <h2 id="faq">Frequently asked questions</h2>
    <h3>What documents do I need to open a TFSA?</h3>
    <p>Your SIN and date of birth, which the CRA requires, plus whatever your provider asks for: usually government-issued ID, a Canadian address, a phone number, and bank details to fund the account.</p>
    <h3>Can I open a TFSA at 18 in British Columbia?</h3>
    <p>No. B.C.'s age of majority is 19, so providers open the account at 19. The room from the year you turned 18 still carries forward.</p>
    <h3>Do I need a job or income to open a TFSA?</h3>
    <p>No. The CRA says you do not need earned income to open or contribute to a TFSA.</p>
    <h3>Can I have more than one TFSA?</h3>
    <p>Yes, at one provider or several, but your room is shared across all of them. Wealthsimple, for example, allows up to 8 trade TFSAs.</p>
    <h3>Can I open a joint TFSA with my spouse?</h3>
    <p>No. Room is tracked per person, so every TFSA has one holder.</p>
    <h3>Can I open a TFSA for my child?</h3>
    <p>Not until they are 18, or 19 where that is the age of majority. Their room starts accumulating the year they turn 18.</p>
    <h3>Can a newcomer open a TFSA right away?</h3>
    <p>Yes, from the day they become a resident if they are 18 or older and have a valid SIN, but room starts only in the year of residency.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="${TFSA}/opening.html">CRA: Opening a TFSA</a>, reviewed November 21, 2026</li>
        <li><a href="${TFSA}/what.html">CRA: What is a TFSA (types of TFSAs)</a>, reviewed November 21, 2026</li>
        <li><a href="${TFSA}/contributing/before.html">CRA: Before you contribute to a TFSA (dollar limits, new residents)</a>, reviewed November 21, 2026</li>
        <li><a href="${LIMITS}">CRA: MP, DB, RRSP, DPSP, ALDA, TFSA limits, YMPE and the YAMPE</a>, reviewed November 21, 2026</li>
        <li><a href="${TFSA}/contributing/calculate-room.html">CRA: Calculate your TFSA contribution room</a>, reviewed November 21, 2026</li>
        <li><a href="${TFSA}/death-of-holder/what-happens.html">CRA: What happens when a TFSA holder is deceased (successor holders, beneficiaries)</a>, reviewed November 21, 2026</li>
        <li><a href="${QT_OPEN}">Questrade: How to open a TFSA account in Canada</a>, reviewed November 21, 2026</li>
        <li><a href="${QT_WHAT}">Questrade: What is a TFSA? (account fees, currencies)</a>, reviewed November 21, 2026</li>
        <li><a href="${WS_ELIG}">Wealthsimple Help Centre: Eligibility requirements</a>, reviewed November 21, 2026</li>
        <li><a href="${WS_OPEN}">Wealthsimple Help Centre: Open a TFSA</a>, reviewed November 21, 2026</li>
        <li><a href="${EQ_TFSA}">EQ Bank: Tax-Free Savings Account</a>, reviewed November 21, 2026</li>
        <li><a href="${EQ_FAQ}">EQ Bank: Common questions</a>, reviewed November 21, 2026</li>
        <li><a href="${TD_REVIEW}">TD Direct Investing: What you'll need</a>, reviewed November 21, 2026</li>
        <li><a href="${TD_OPEN}">TD Direct Investing: How do I open an account?</a>, reviewed November 21, 2026</li>
    </ul>

    <h2>Related reading</h2>
    <ul>
        <li><a href="/blog/tfsa-withdrawal-rules/">TFSA withdrawal rules: when your room comes back</a></li>
        <li><a href="/blog/rrsp-or-tfsa-by-income/">RRSP or TFSA at every income</a></li>
        <li><a href="/blog/best-etfs-tfsa-canada/">Best ETFs for a TFSA</a></li>
        <li><a href="/blog/investing-when-leaving-canada-tfsa-rrsp/">Your TFSA and RRSP when you leave Canada</a></li>
        <li><a href="/blog/tfsa-contribution-optimization/">When in the year to contribute to your TFSA</a></li>
    </ul>

    <div class="cta-section">
        <p><strong>Opening the account is step one; filling it well is the rest.</strong></p>
        <p>The Canadian Investing Guide covers every account, what to invest in, and a 90-day plan to get started. $29 CAD.</p>
        <a href="/ebooks/investing-guide/" class="cta-button">See the Canadian Investing Guide</a>
    </div>

    ${batchFooter(D, 'Investing', disclaimer)}

</div>`;

export const howToOpenTfsaPost = batchPost({
  date: D,
  category: 'Investing',
  categorySlug: 'investing',
  subcategory: 'accounts-asset-location',
  slug: 'how-to-open-tfsa',
  title: 'How to Open a TFSA in Canada, Step by Step',
  excerpt:
    'Who can open a TFSA, what Questrade, Wealthsimple, EQ Bank and TD ask for, the steps to apply, and how much room you already have by the year you turned 18.',
  content,
});
