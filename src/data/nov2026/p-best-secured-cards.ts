import { batchFooter, batchPost } from './types';

const D = '2026-11-21';

const disclaimer = `General education, not financial advice. Deposits, fees, interest rates, bureau reporting and upgrade rules were read from each issuer's own pages listed under Sources on November 20, 2026, and can change; check the issuer's page before you apply. The 12-month costs are our illustration: they assume an average carried balance of $150 for a full year and estimate interest as balance times the annual rate, which is a simplification of daily interest. They exclude cash advance, over-limit and foreign currency fees. Canadian Optimizer has no affiliate relationship with Home Trust, Neo Financial or Capital One at the time of writing and links to no application page.`;

const content = `<div class="container">

    <div class="hook">
        A secured card is a credit card backed by your own deposit, and the cheapest one depends on whether you ever carry a balance. <span class="highlight">We costed 12 months on each of Canada's three best-known secured cards, and checked which ones say they report to both credit bureaus.</span> This guide is part of our <a href="/category/credit-cards/credit-score-building/">credit score building hub</a>, using issuer pages read on November 20, 2026.
    </div>

    <p>The best secured credit card in Canada for most people rebuilding credit is the no-fee Home Trust Secured Visa: $0 a year, 19.99% interest and a $500 minimum deposit. Neo's secured Mastercard needs only $50 down and names both credit bureaus, but its required membership costs $119.88 a year. Capital One is $0 too, with guaranteed approval if you meet four conditions, but charges 29.9%.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>Paid in full every month, the 12-month cost is $0 for the Home Trust no-fee option and Capital One, $59 for Home Trust's low-rate option and $119.88 for Neo's required Build membership.</li>
            <li>Carrying a $150 balance all year, Home Trust no-fee costs about $29.99, Capital One about $44.85 and Neo $149.87 to $164.87, membership included.</li>
            <li>Only Neo names both TransUnion and Equifax; Home Trust says it reports to "the credit bureau" each month, and Capital One's secured card page does not say.</li>
            <li>Home Trust's $59 low-rate option only beats its no-fee option if your average carried balance is above $1,159.14.</li>
        </ul>
    </div>

    <nav aria-label="On this page">
        <strong>On this page</strong>
        <ul>
            <li><a href="#how">How we compared the secured cards</a></li>
            <li><a href="#cost">12-month cost of each card</a></li>
            <li><a href="#bureaus">Which cards report to both bureaus</a></li>
            <li><a href="#cards">The three cards, one by one</a></li>
            <li><a href="#graduate">Moving to an unsecured card</a></li>
            <li><a href="#picks">Picks: smallest deposit, fastest graduation, lowest fee</a></li>
        </ul>
    </nav>

    <h2 id="how">How we compared the secured cards</h2>
    <p>We compared the three secured cards that are widely available across Canada and publish their terms online: the Home Trust Secured Visa, the Neo Mastercard with a secured credit limit, and the Capital One Guaranteed Secured Mastercard. On November 20, 2026, we read each issuer's card page, fee page and support articles for the minimum and maximum deposit, annual or monthly fees, interest rates, which credit bureaus each says it reports to, and how you move to an unsecured card.</p>
    <p>We then calculated a 12-month cost two ways: paying in full every month, and carrying an average balance of $150 all year. We chose $150 because it is 30% of a $500 limit, the ceiling the Financial Consumer Agency of Canada (FCAC) suggests staying under for credit utilization. Interest is estimated as balance times the annual rate. The model, method and the limits of AI help are set out on <a href="/how-we-use-ai/">how we use AI</a>, and our <a href="/disclosure/">disclosure page</a> confirms there are no affiliate links.</p>

    <h2 id="cost">What does each secured card cost over 12 months?</h2>
    <p>If you pay in full, the Home Trust no-fee option and Capital One cost nothing to hold, Home Trust's low-rate option costs $59 and Neo costs $119.88 in membership fees. If you carry a balance, interest is added on top, and Capital One's 29.9% rate starts to matter.</p>

    <div class="table-wrapper" data-info-gain>
        <table>
            <caption>12-month cost per secured card, and the bureaus each names (our calculation from issuer pages, reviewed November 20, 2026; example)</caption>
            <thead>
                <tr><th>Card</th><th>Minimum deposit</th><th>Yearly fee</th><th>Purchase rate</th><th>12-month cost, paid in full</th><th>12-month cost, carrying $150</th><th>Bureaus named</th></tr>
            </thead>
            <tbody>
                <tr class="highlight-row"><td>Home Trust Secured Visa, no-fee option</td><td>$500</td><td>$0</td><td>19.99%</td><td>$0.00</td><td>$29.99</td><td>"The credit bureau" (not named)</td></tr>
                <tr><td>Home Trust Secured Visa, low-rate option</td><td>$500</td><td>$59</td><td>14.90%</td><td>$59.00</td><td>$81.35</td><td>"The credit bureau" (not named)</td></tr>
                <tr><td>Neo Mastercard, secured</td><td>$50</td><td>$119.88 (Build membership, $9.99 a month)</td><td>19.99% to 29.99%</td><td>$119.88</td><td>$149.87 to $164.87</td><td>TransUnion and Equifax</td></tr>
                <tr><td>Capital One Guaranteed Secured Mastercard</td><td>Not printed on the card page</td><td>$0</td><td>29.9% (21.9% in Quebec)</td><td>$0.00</td><td>$44.85 ($32.85 in Quebec)</td><td>Not named on the card page</td></tr>
            </tbody>
        </table>
    </div>

    <p class="did-you-know"><strong>Did you know:</strong> Neo has the smallest deposit by far, $50 against $500 at Home Trust, but the $119.88 a year Build membership means that with $500 of security funds, your first-year cash outlay is $619.88, of which only the $500 comes back.</p>

    <div class="chart-container">
        <h3>12-month cost carrying a $150 balance (our calculation; example)</h3>
        <div class="bar-chart">
            <div class="bar-item">
                <div class="bar-label">HT $0</div>
                <div class="bar-wrapper"><div class="bar" style="width: 18%;"><span>$29.99</span></div></div>
            </div>
            <div class="bar-item">
                <div class="bar-label">Cap1</div>
                <div class="bar-wrapper"><div class="bar" style="width: 27%;"><span>$44.85</span></div></div>
            </div>
            <div class="bar-item">
                <div class="bar-label">HT $59</div>
                <div class="bar-wrapper"><div class="bar" style="width: 49%;"><span>$81.35</span></div></div>
            </div>
            <div class="bar-item">
                <div class="bar-label">Neo</div>
                <div class="bar-wrapper"><div class="bar" style="width: 100%;"><span>$149.87 to $164.87</span></div></div>
            </div>
        </div>
        <p>Carrying $150 for a year costs about $29.99 on Home Trust's no-fee option, $44.85 on Capital One, $81.35 on Home Trust's low-rate option and $149.87 to $164.87 on Neo, depending on the rate Neo assigns.</p>
    </div>

    <div class="example-box">
        <strong>Example: when does Home Trust's $59 option pay off? (illustration)</strong>
        <div class="example-calculation">
            <div class="line"><span>Rate saved by paying the fee: 19.99% minus 14.90%</span><span>5.09 points</span></div>
            <div class="line"><span>Interest saved on a $150 average balance</span><span>about $7.64</span></div>
            <div class="line"><span>Annual fee</span><span>$59.00</span></div>
            <div class="line total"><span>Average balance where the saving equals the fee: $59 &divide; 5.09%</span><span>$1,159.14</span></div>
        </div>
        <p>Below an average carried balance of about $1,159.14, the no-fee option is cheaper. On a $500 deposit, you cannot carry that much, so the low-rate option only makes sense with a larger deposit and a habit of carrying a balance, which is the habit a rebuilding card should break.</p>
    </div>

    <h2 id="bureaus">Which secured cards report to both credit bureaus?</h2>
    <p>Neo is the only one of the three that names both. The FCAC says Canada has two main credit bureaus, Equifax and TransUnion, so a card that reports to only one builds history on only one report.</p>
    <ul>
        <li><strong>Neo</strong> says every payment is reported to both TransUnion and Equifax.</li>
        <li><strong>Home Trust</strong> says that once your card is issued, it reports your account activity to "the credit bureau" each month, without naming which one on the page we read.</li>
        <li><strong>Capital One's</strong> secured card page and the support articles we read describe the card as a way to build credit but do not name the bureaus it reports to.</li>
    </ul>
    <p>If both reports matter to you, for example because you expect a mortgage or car lender to check one you cannot predict, ask Home Trust and Capital One directly before applying, and check your reports a few months after you start. Our <a href="/blog/credit-card-utilization-applications-credit-score-canada/">guide to utilization, applications and your credit score</a> explains what lenders see.</p>

    <div class="warning-box">
        <strong>Watch out:</strong> the FCAC says some secured cards charge a one-time application or set-up fee that is separate from the deposit and may not be refunded if you are declined. None of the three cards here prints such a fee, but be cautious with any secured card that does, and check that your deposit is insured. Home Trust says its deposits are eligible for CDIC protection.
    </div>

    <h2 id="cards">How do the three secured cards compare, one by one?</h2>
    <p>All three are real credit cards that build history when used and paid on time. They differ in deposit size, cost and what happens when you are ready to move on.</p>

    <h3>Home Trust Secured Visa</h3>
    <p>Home Trust's limit equals your deposit, from $500 to $10,000, and the deposit stays with Home Trust while the account is open. You choose between no annual fee at 19.99% or a $59 annual fee at 14.90%. To apply, you must be a permanent Canadian resident, not be in bankruptcy, and provide the $500 minimum deposit from a Canadian account in your name. The card is not available in Quebec. Cash advances are limited to 20% of your limit, and the no-fee disclosure statement lists a $29 over-limit fee and a 2% foreign currency conversion charge.</p>

    <h3>Neo Mastercard with a secured limit</h3>
    <p>Neo lets you set your limit with security funds from $50 for most cards, up to $10,000, adding in $50 steps. The card has no annual fee, but the secured limit needs Neo's Build membership at $9.99 a month, or Grow at $14.99. Neo prints a purchase rate of 19.99% to 29.99% (19.99% to 24.99% in Quebec), says the Neo Mastercard has no income requirement, and charges a $29 over-limit fee and a 3% foreign currency fee. You cannot reduce your security funds; to withdraw them, you pay off the card and close it. Our <a href="/blog/neo-credit-card-review/">Neo credit card review</a> covers the unsecured version and the rest of Neo's fees.</p>

    <h3>Capital One Guaranteed Secured Mastercard</h3>
    <p>Capital One charges no annual fee and guarantees approval if you meet four conditions: you are at least the age of majority, you are authorized to have credit with no frozen credit profile, you have no existing Capital One account or pending application, and your account is in good standing. You provide security funds after approval, but the card page does not print the amount. You can raise the limit up to $2,500 by adding funds, $1 of limit for every $1. Capital One says the funds come back within 60 days of closing the account, if the balance is paid in full and the account is in good standing.</p>

    <div class="tip-box">
        <strong>Pro tip:</strong> set your deposit with your normal spending in mind. If your card bill is about $150 a month, a $500 deposit keeps you at 30%; on Neo's $50 minimum, 30% is only $15.00, so you would need to pay several times a month to keep the reported balance low.
    </div>

    <h2>How much should you deposit?</h2>
    <p>Enough that your normal monthly card spending stays under 30% of your limit, because the FCAC suggests using less than 30% of your total credit limit. For each card's limit range, that works out as follows.</p>

    <div class="table-wrapper">
        <table>
            <caption>Deposit, limit and the 30% guideline (our calculation; example)</caption>
            <thead>
                <tr><th>Deposit and limit</th><th>30% of the limit</th><th>Which card allows it</th></tr>
            </thead>
            <tbody>
                <tr><td>$50</td><td>$15.00</td><td>Neo minimum</td></tr>
                <tr><td>$500</td><td>$150.00</td><td>Home Trust minimum; Neo; Capital One</td></tr>
                <tr><td>$2,500</td><td>$750.00</td><td>Home Trust; Neo; Capital One maximum</td></tr>
            </tbody>
        </table>
    </div>

    <p>The deposit is not a fee: every issuer here says it comes back when you close the account in good standing. But it is money you cannot use while the card is open, so do not deposit funds you might need for rent or an emergency.</p>

    <h2>What should your first 12 months on a secured card look like?</h2>
    <p>A simple routine does most of the work: small, regular purchases, the full balance paid automatically, and no new applications while the history builds. Here is a plan that follows the FCAC's guidance on payment history, utilization and inquiries.</p>
    <ol>
        <li><strong>Month 1:</strong> put one predictable bill on the card, such as a phone plan, and set up an automatic payment of the full statement balance from your bank account.</li>
        <li><strong>Months 2 to 3:</strong> keep the balance reported on each statement under 30% of your limit. On a $500 limit, that means paying down anything above $150.00 before the statement date.</li>
        <li><strong>Months 3 to 6:</strong> check your credit reports from Equifax and TransUnion to confirm the account appears and the payments show as on time. If it is missing from one, that tells you which bureau the issuer reports to.</li>
        <li><strong>Months 6 to 12:</strong> avoid other credit applications. When your record is steady, look at moving to an unsecured card, or at Neo, applying to switch.</li>
    </ol>
    <p>None of this requires carrying a balance. Paying in full each month builds the same payment history without any interest, which is why the paid-in-full column in our cost table is the one to aim for.</p>

    <h2 id="graduate">How do you move to an unsecured card?</h2>
    <p>Neo prints the clearest path: you can apply in the app or on its website to switch to a standard, unsecured Neo card. That switch needs a credit check, and Neo's card page says you can be eligible for higher limits in as little as 3 months. Capital One says it does not offer an upgrade or switch from your current card, but you can apply for a new card and use its Quick Check tool to see whether you would be approved first. Home Trust's page does not describe a path to an unsecured card.</p>
    <p>Whatever the card, graduating comes down to the same record: on-time payments, low utilization and few applications. The FCAC says payment history is the most important part of your score and that inquiries from lenders appear on your report for 3 years. Once you qualify, compare unsecured options in our <a href="/blog/best-no-annual-fee-credit-cards-canada/">best no-annual-fee credit cards</a> list before applying for the first offer you see.</p>

    <h2>Is a secured card the right tool for you?</h2>
    <p>The FCAC lists three cases where a secured card may make sense: you are a newcomer with no credit history, you have filed for bankruptcy in the past, or you want to rebuild your credit score after past problems. If you are a newcomer, look first at the unsecured bank programs in our <a href="/blog/best-credit-cards-newcomers-canada/">best credit cards for newcomers</a> guide, which can approve an unsecured card without a deposit. If you are a student, the no-fee student cards in our <a href="/blog/best-student-credit-cards-canada/">best student credit cards</a> guide may approve you without one.</p>
    <p>Home Trust says applicants cannot currently be in bankruptcy, and Capital One requires that your eligibility for credit is not prohibited for legal reasons, so anyone in an active bankruptcy should check with a licensed insolvency trustee before applying.</p>

    <h2 id="picks">Which secured card should you pick? Picks by goal</h2>
    <p>Choose by what limits you most today: cash for a deposit, time, or cost.</p>

    <div class="table-wrapper">
        <table>
            <caption>Best secured card by goal (our reading of the numbers above; no affiliate links)</caption>
            <thead>
                <tr><th>Goal</th><th>Pick</th><th>Why</th><th>Trade-off</th></tr>
            </thead>
            <tbody>
                <tr data-pick="smallest-deposit"><td>Smallest deposit</td><td>Neo Mastercard, secured</td><td>Starts from $50 of security funds and names both TransUnion and Equifax</td><td>Build membership costs $119.88 a year</td></tr>
                <tr data-pick="fastest-graduation"><td>Fastest graduation</td><td>Neo Mastercard, secured</td><td>Only issuer here with a printed in-app switch to unsecured credit, and higher limits possible in as little as 3 months</td><td>The switch requires a credit check</td></tr>
                <tr data-pick="lowest-fee"><td>Lowest fee</td><td>Home Trust Secured Visa, no-fee option</td><td>$0 a year with the lowest no-fee rate here, 19.99%; $29.99 to carry $150 for a year</td><td>$500 minimum deposit; not available in Quebec; bureau not named</td></tr>
            </tbody>
        </table>
    </div>

    <p>Capital One is the fallback if you have been declined elsewhere: its approval is guaranteed when you meet the four conditions, it is available in Quebec at 21.9%, and it charges no annual fee. Just keep the balance at zero, because 29.9% outside Quebec is the highest rate in this comparison.</p>

    <h2>Frequently asked questions</h2>
    <h3>What is the best secured credit card in Canada?</h3>
    <p>For most people, the no-fee Home Trust Secured Visa, at $0 a year and 19.99% with a $500 minimum deposit. Neo is better if you can only spare $50, and Capital One if you need guaranteed approval.</p>
    <h3>Do secured credit cards build credit in Canada?</h3>
    <p>Yes, when the issuer reports your payments. Neo says it reports to TransUnion and Equifax, and Home Trust says it reports to the credit bureau each month.</p>
    <h3>How much deposit does a secured card need?</h3>
    <p>From $50 at Neo and $500 at Home Trust. Capital One's card page does not print the amount. The FCAC says deposits may range from a few hundred to a few thousand dollars.</p>
    <h3>Do you get your secured card deposit back?</h3>
    <p>Yes, when you close the account with the balance paid. Capital One says it returns the funds within 60 days of closing if the account is in good standing.</p>
    <h3>Can you get a secured card in Quebec?</h3>
    <p>Home Trust says its secured card is not available in Quebec. Capital One prints a Quebec rate of 21.9%, and Neo prints Quebec rates of 19.99% to 24.99%.</p>
    <h3>How long until you can switch to a regular card?</h3>
    <p>It depends on your record. Neo says you can be eligible for higher limits in as little as 3 months, and switching to its standard card needs a credit check.</p>
    <h3>Is a secured card the same as a prepaid card?</h3>
    <p>No. A secured card is a credit card backed by a deposit, and its payments can be reported to the credit bureaus. Home Trust contrasts the two on its page, noting that a prepaid card needs reloading once the balance is spent.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="https://www.hometrust.ca/en/credit-cards/secured-visa-card">Home Trust: Home Trust Secured Visa card</a>, reviewed November 20, 2026</li>
        <li><a href="https://www.hometrust.ca/content/dam/hometrust/pdfs/credit-cards/secured-visa-card/HT-CVSC6-Secured-Disclosure-no-fee-8.5x11-WEB-11.2023.pdf">Home Trust: Secured Visa disclosure statement (no annual fee option)</a>, reviewed November 20, 2026</li>
        <li><a href="https://www.neofinancial.com/secured">Neo Financial: Secured credit cards</a>, reviewed November 20, 2026</li>
        <li><a href="https://www.neofinancial.com/credit-cards/neo-mastercard">Neo Financial: Neo Mastercard</a>, reviewed November 20, 2026</li>
        <li><a href="https://support.neofinancial.com/en/articles/14009843-fees-on-your-credit-card">Neo Financial Help Centre: Fees on your credit card</a>, reviewed November 20, 2026</li>
        <li><a href="https://support.neofinancial.com/en/articles/14009880-is-there-a-minimum-maximum-amount-of-funds-to-be-secured">Neo Financial Help Centre: Minimum and maximum security funds</a>, reviewed November 20, 2026</li>
        <li><a href="https://support.neofinancial.com/en/articles/14009873-monthly-fee-for-secured-credit-cards">Neo Financial Help Centre: Monthly fee for secured credit cards</a>, reviewed November 20, 2026</li>
        <li><a href="https://www.capitalone.ca/credit-cards/guaranteed-secured-mastercard2">Capital One Canada: Guaranteed Secured Mastercard</a>, reviewed November 20, 2026</li>
        <li><a href="https://support.capitalone.ca/managing-credit/how-to-get-a-credit-limit-increase-on-your-secured-card">Capital One Canada: How to get a credit limit increase on your secured card</a>, reviewed November 20, 2026</li>
        <li><a href="https://support.capitalone.ca/card-application-and-approval/how-to-upgrade-my-credit-card">Capital One Canada: How to upgrade my credit card</a>, reviewed November 20, 2026</li>
        <li><a href="https://creditblog.capitalone.ca/latest-stories/security-funds">Capital One Canada: Security funds</a>, reviewed November 20, 2026</li>
        <li><a href="https://www.canada.ca/en/financial-consumer-agency/services/credit-cards/choose-credit-card.html">Financial Consumer Agency of Canada: Choosing a credit card</a>, reviewed November 20, 2026</li>
        <li><a href="https://www.canada.ca/en/financial-consumer-agency/services/credit-reports-score/improve-credit-score.html">Financial Consumer Agency of Canada: Improving your credit score</a>, reviewed November 20, 2026</li>
        <li><a href="https://www.canada.ca/en/financial-consumer-agency/services/credit-reports-score/credit-report-score-basics.html">Financial Consumer Agency of Canada: Credit report and score basics</a>, reviewed November 20, 2026</li>
    </ul>

    <h2>Related reading</h2>
    <ul>
        <li><a href="/blog/credit-score-canada-guide/">How credit scores work in Canada: Equifax vs TransUnion</a></li>
        <li><a href="/blog/credit-card-utilization-applications-credit-score-canada/">Credit card utilization, applications and your score</a></li>
        <li><a href="/blog/neo-credit-card-review/">Neo credit card review</a></li>
        <li><a href="/blog/best-credit-cards-newcomers-canada/">Best credit cards for newcomers to Canada</a></li>
        <li><a href="/blog/best-student-credit-cards-canada/">Best student credit cards in Canada</a></li>
        <li><a href="/blog/best-no-annual-fee-credit-cards-canada/">Best no-annual-fee credit cards in Canada</a></li>
        <li><a href="/blog/best-credit-cards-canada/">Best credit cards in Canada</a></li>
    </ul>

    ${batchFooter(D, 'Credit Cards', disclaimer)}

</div>`;

export const bestSecuredCardsPost = batchPost({
  date: D,
  category: 'Credit Cards',
  categorySlug: 'credit-cards',
  subcategory: 'credit-score-building',
  slug: 'best-secured-credit-cards-canada',
  title: "Best Secured Credit Cards in Canada for Rebuilding Credit",
  excerpt:
    "12-month cost of the Home Trust, Neo and Capital One secured cards, paid in full or carrying a balance, which ones name both credit bureaus, and the pick for the smallest deposit, fastest graduation and lowest fee.",
  content,
});
