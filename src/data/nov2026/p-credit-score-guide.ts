import { batchFooter, batchPost } from './types';

const D = '2026-11-21';

const disclaimer = `General education, not credit or financial advice. The retention periods, score range, free-access rules, freeze rules and dispute timelines come from the Financial Consumer Agency of Canada (FCAC), Equifax Canada and TransUnion Canada pages listed under Sources, reviewed on November 20, 2026, and they can change. The two-card utilization example and the dated timelines are our illustrations, not a prediction of any score: Equifax and TransUnion do not publish their scoring formulas, and a lender may use a different score from the one you see. Canadian Optimizer has no affiliate relationship with Equifax or TransUnion and links to no paid credit product.`;

const content = `<div class="container">

    <div class="hook">
        Your credit score in Canada is a 3-digit number built from your credit report, and you have two reports, not one. <span class="highlight">We put Equifax and TransUnion side by side on the rules that differ between them: how long each keeps your history, what you can see for free, and how fast each fixes an error.</span> This guide is part of our <a href="/category/credit-cards/credit-score-building/">credit score building hub</a>, using FCAC and bureau pages read on November 20, 2026.
    </div>

    <p>A Canadian credit score usually runs from 300 to 900, and higher is better. Equifax and TransUnion each build it from the credit report they keep on you, so your two scores can differ. Payment history matters most, followed by how much of your limits you use, how long you have had credit and how often you apply.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>Both bureaus give you your credit report free. Equifax shows your score free in every province and territory; TransUnion includes it free only for residents of Ontario and Quebec.</li>
            <li>The bureaus keep some items for different lengths of time: hard inquiries stay 3 years at Equifax but 6 years at TransUnion, and closed accounts paid in full stay up to 10 years at Equifax but up to 20 years at TransUnion.</li>
            <li>Late or unpaid accounts stay up to 6 years. A first bankruptcy usually stays 6 years after discharge, but TransUnion keeps it 7 years in Newfoundland and Labrador, Ontario, Prince Edward Island and Quebec.</li>
            <li>Checking your own report is a soft inquiry and does not lower your score.</li>
        </ul>
    </div>

    <nav aria-label="On this page">
        <strong>On this page</strong>
        <ul>
            <li><a href="#what">What a credit score is</a></li>
            <li><a href="#factors">What moves your score</a></li>
            <li><a href="#compare">Equifax vs TransUnion: where the rules differ</a></li>
            <li><a href="#timeline">How long negative items stay: a dated example</a></li>
            <li><a href="#utilization">Utilization worked example</a></li>
            <li><a href="#free">How to see both reports for free</a></li>
            <li><a href="#errors">Fixing an error</a></li>
        </ul>
    </nav>

    <h2 id="what">What is a credit score in Canada?</h2>
    <p>A credit score is a 3-digit number that estimates how likely you are to repay money you borrow, calculated from the information on your credit report at a point in time. The FCAC says scores usually range from 300 to 900, and TransUnion uses the same range on its own page. A higher score means lenders see you as a lower risk.</p>
    <p>Your credit report is the record underneath the score. It holds personal details (name, date of birth, addresses, employers), your credit cards, loans, lines of credit and mortgages, how much you owe, whether you paid on time, debts sent to collection, bankruptcies and court decisions, and the inquiries lenders made when you applied. The FCAC says the bureaus update your report at least once per month as lenders send in new information.</p>
    <p>Canada has 2 main credit bureaus, Equifax and TransUnion, and each keeps its own file on you. TransUnion notes that lenders report to at least one of the two, not necessarily both, and at different times of the month. That is the main reason the same person can see two different numbers.</p>

    <div class="tip-box">
        <strong>No single score:</strong> TransUnion says nobody has just one credit score, because lenders use several scoring methods, and the FCAC adds that the score you see may differ from the one a lender sees because the lender weights some information more heavily. Treat the number in an app as a trend line, and the report itself as the thing to keep clean.
    </div>

    <h2 id="factors">What affects your credit score the most?</h2>
    <p>Payment history is the biggest factor: the FCAC calls it the most important part of your score, and TransUnion says it is typically the most important aspect. After that come the balances you carry against your limits, the length of your credit history, the mix of credit you use and how recently and often you apply for new credit.</p>

    <div class="table-wrapper">
        <table>
            <caption>The factors both the FCAC and TransUnion name, and what helps (reviewed November 20, 2026)</caption>
            <thead>
                <tr><th>Factor</th><th>What it looks at</th><th>What helps</th></tr>
            </thead>
            <tbody>
                <tr><td>Payment history</td><td>Whether you pay on time, miss payments or have debts sent to collection</td><td>Pay at least the minimum every month, even while you dispute a charge</td></tr>
                <tr><td>Credit utilization</td><td>How much of your available credit you use</td><td>The FCAC suggests using less than 30% of your total credit limit</td></tr>
                <tr><td>Length of history</td><td>How long you have had credit and how long each account has been open</td><td>Keep an old no-fee card open and use it now and then</td></tr>
                <tr><td>Credit mix</td><td>The types of credit you hold, such as a card, a car loan and a line of credit</td><td>Only add a product you need and can repay</td></tr>
                <tr><td>Recent applications</td><td>How often and how recently you applied for credit</td><td>Space applications out; rate-shop a mortgage or car loan within 2 weeks</td></tr>
            </tbody>
        </table>
    </div>

    <p>Some things never enter the score. TransUnion lists personal details such as age, ethnicity, religion, marital status, salary, occupation and employer as not used in the calculation, and says your report does not include your income or purchases you paid for in cash. Checking your own report is a soft inquiry, and TransUnion adds insurance inquiries, promotional or pre-approved offers, and its tenancy and employment checks to the list of inquiries that don't affect the score.</p>
    <p>Hard inquiries are different. The FCAC lists credit card, loan and mortgage applications, plus some rental and job applications, as hard inquiries that anyone who pulls your report can see. The FCAC says that when you shop for a car loan or a mortgage, quotes from different lenders within a 2-week period are treated as 1 inquiry, so compare rates inside that window rather than spreading applications across months.</p>

    <h2 id="compare">How are Equifax and TransUnion different?</h2>
    <p>They follow the same broad rules, but they differ on how long they keep some items, what you can see for free, and how their freeze and dispute services work. The table below lists every difference the FCAC and the two bureaus print, so you know which file to check for which question.</p>

    <p class="did-you-know" data-info-gain><strong>Did you know:</strong> a hard inquiry from November 2026 is gone from your Equifax file after 3 years but stays on your TransUnion file for 6, and a card you closed in good standing can stay on your TransUnion file up to twice as long as on Equifax (20 years vs 10), so the two bureaus can tell a lender noticeably different stories about the same person.</p>

    <div class="table-wrapper">
        <table>
            <caption>Equifax vs TransUnion: the rules that differ (FCAC, Equifax and TransUnion pages, reviewed November 20, 2026)</caption>
            <thead>
                <tr><th>Rule</th><th>Equifax</th><th>TransUnion</th></tr>
            </thead>
            <tbody>
                <tr><td>Free credit report</td><td>Yes, online, by mail, by phone or in person in some places</td><td>Yes (called a Consumer Disclosure), online, by mail, by phone or in person in some places</td></tr>
                <tr class="highlight-row"><td>Free credit score online</td><td>All provinces and territories</td><td>Only for residents of Ontario and Quebec, with the Consumer Disclosure</td></tr>
                <tr class="highlight-row"><td>Hard inquiries kept</td><td>3 years</td><td>6 years</td></tr>
                <tr class="highlight-row"><td>Closed accounts paid in full</td><td>Up to 10 years after closing (open accounts stay while open)</td><td>Up to 20 years, even if closed</td></tr>
                <tr><td>Late or unpaid cards and loans</td><td>Up to 6 years</td><td>Up to 6 years</td></tr>
                <tr><td>First bankruptcy, after discharge</td><td>6 years</td><td>6 years; 7 years in Newfoundland and Labrador, Ontario, Prince Edward Island and Quebec</td></tr>
                <tr><td>Court judgments</td><td>6 years</td><td>6 years; 7 years in Newfoundland and Labrador, Ontario and Quebec; 10 years in Prince Edward Island</td></tr>
                <tr><td>Credit freeze or lock</td><td>Credit Lock for Quebec and Ontario residents</td><td>Free credit freeze for Ontario and Quebec residents; by mail it can take up to 30 days</td></tr>
                <tr><td>How long a dispute takes</td><td>About 15 to 20 days online, 20 to 25 days by mail</td><td>Typically concluded within 30 days of receiving the request</td></tr>
            </tbody>
        </table>
    </div>

    <p>Some rules are the same at both. A consumer proposal comes off 3 years after you pay off the debts in it or 6 years after you sign it, whichever comes first. A debt management plan comes off 2 years after you finish paying. A second bankruptcy stays for 14 years.</p>

    <h2 id="timeline">How long do negative items stay on your credit report?</h2>
    <p>Most negative items stay up to 6 years, but the exact length depends on the item, the bureau and sometimes your province. Dating each item from its trigger (the late payment, the inquiry, the discharge) shows when it drops off at each bureau. The table uses a made-up person in Ontario to show how the rules play out.</p>

    <div class="table-wrapper">
        <table>
            <caption>Example: when each item leaves an Ontario resident's reports (our dates from FCAC retention rules; illustration)</caption>
            <thead>
                <tr><th>Item in the example</th><th>Trigger date</th><th>Off Equifax by</th><th>Off TransUnion by</th></tr>
            </thead>
            <tbody>
                <tr><td>Hard inquiry for a new card</td><td>November 2026</td><td>November 2029</td><td>November 2032</td></tr>
                <tr><td>Card payment reported late</td><td>March 2026</td><td>No later than March 2032</td><td>No later than March 2032</td></tr>
                <tr><td>First bankruptcy, discharged</td><td>November 2026</td><td>November 2032</td><td>November 2033</td></tr>
                <tr><td>Consumer proposal signed January 2027, paid off January 2029</td><td>January 2029 (paid off)</td><td>January 2032</td><td>January 2032</td></tr>
                <tr><td>Card closed in good standing</td><td>June 2026</td><td>Up to June 2036</td><td>Up to June 2046</td></tr>
            </tbody>
        </table>
    </div>

    <div class="example-box">
        <strong>Example: why the consumer proposal leaves in January 2032 (illustration)</strong>
        <div class="example-calculation">
            <div class="line"><span>Paid off January 2029, plus 3 years</span><span>January 2032</span></div>
            <div class="line"><span>Signed January 2027, plus 6 years</span><span>January 2033</span></div>
            <div class="line total"><span>Whichever comes first</span><span>January 2032</span></div>
        </div>
        <p>Paying a proposal off early brings its removal date forward, because the 3-years-after-payment clock then ends before the 6-years-after-signing clock.</p>
    </div>

    <p>The FCAC doesn't say exactly which date each period runs from, so we counted from the event itself; treat the right-hand columns as the latest likely dates. The closed-card row is positive history, not a black mark: a long record of on-time payments can keep helping after you close the account. If an item is still on your report after its maximum period, the FCAC lists that as an error worth disputing.</p>

    <h2 id="utilization">How much of your credit limit should you use?</h2>
    <p>Less than 30% of your total limit, according to the FCAC, which uses the example of a $5,000 limit with $1,000 normally used, a 20% utilization rate. The FCAC also says lenders may see high use as a risk even if you pay in full every month, so the balance that gets reported matters, not only whether you pay it.</p>

    <div class="example-box">
        <strong>Example: two cards, one payment moved earlier (illustration)</strong>
        <div class="example-calculation">
            <div class="line"><span>Card A limit $2,000 + card B limit $3,000</span><span>$5,000 total</span></div>
            <div class="line"><span>Balances when reported: $1,200 on A + $300 on B</span><span>$1,500, 30% overall</span></div>
            <div class="line"><span>Card A on its own</span><span>60% of its limit</span></div>
            <div class="line"><span>Pay $500 on card A before its balance is reported</span><span>$1,000, 20% overall</span></div>
            <div class="line total"><span>Card A on its own after the payment</span><span>35% of its limit</span></div>
        </div>
        <p>The same month of spending reads as 30% or 20% depending on when the payment lands. The FCAC's own example of a regularly owed $4,500 on a $5,000 limit is the pattern to avoid: lenders may see it as riskier than owing $1,000.</p>
    </div>

    <p>Three habits follow from the FCAC's advice. Pay part of a large balance before your card company reports it to the bureaus (ask your issuer when it reports), ask for a higher limit on a card you already manage well rather than opening a new one, and keep an old no-fee card open, since closing it removes its limit from your total and can shorten your history. Our <a href="/blog/credit-card-utilization-applications-credit-score-canada/">guide to utilization and application spacing</a> covers how to time a new card around a mortgage.</p>

    <h2 id="free">How do you check your credit report and score for free?</h2>
    <p>Request your report from both bureaus. The FCAC says you can get it free online from Equifax and TransUnion, by mail with a form and copies of 2 valid pieces of ID, by phone after answering identity questions, or in person in some provinces and territories. Checking does not lower your score.</p>
    <ul>
        <li><strong>Equifax:</strong> its consumer credit report page offers your report and score online at no charge, each updated once per month.</li>
        <li><strong>TransUnion:</strong> anyone in Canada can get the free Consumer Disclosure. Ontario and Quebec residents get the score with it at no charge; in other provinces TransUnion points to bank apps or its paid monitoring for a score.</li>
        <li><strong>Bank and other apps:</strong> the FCAC notes that some federally regulated financial institutions show a free score in their app, and that other companies offer one too. Read their privacy terms first; the FCAC warns that some sell your data.</li>
    </ul>

    <div class="tip-box">
        <strong>Pro tip:</strong> pull both reports a couple of months before a mortgage or car loan application. A wrong late payment or an account you don't recognize takes weeks to fix, and both bureaus' dispute times are measured in days to a month.
    </div>

    <h2 id="errors">What if your credit report has an error?</h2>
    <p>Dispute it with the bureau that shows it, and with the other bureau if both do. The FCAC says credit bureaus must correct errors for free. Gather statements or letters that prove the mistake, file through each bureau's dispute form, and contact the lender too, since it can update both bureaus directly.</p>
    <ol>
        <li><strong>Check the usual suspects.</strong> The FCAC's list: wrong personal details, wrong balances, payments marked late that were on time, accounts you never opened, and negative items past their maximum period.</li>
        <li><strong>File the dispute.</strong> Equifax takes disputes online or by mail for free and says it takes about 15 to 20 days online and 20 to 25 days by mail. TransUnion says its investigations are typically concluded within 30 days, and if it cannot verify the item, it is removed or updated.</li>
        <li><strong>Escalate if needed.</strong> If the lender insists the item is correct, it stays. You can ask for a higher-level review, complain to the lender if it is a federally regulated institution, and add a consumer statement. Equifax allows up to 800 characters, free.</li>
        <li><strong>Suspect fraud?</strong> Ask both bureaus for a fraud alert, tell the lender and report it to the National Fraud Reporting System. In Ontario and Quebec you can also freeze or lock your file; remember to lift it before you apply for credit. TransUnion says that from July 1, 2027 you will be able to set a date for a temporary suspension.</li>
    </ol>
    <p>The federal government doesn't regulate credit bureaus, the FCAC notes, so a complaint about the bureau itself goes to the bureau first and then to your provincial or territorial consumer affairs office.</p>

    <h2>How do you build a credit score from scratch?</h2>
    <p>Get one card, use a small part of the limit, and pay it in full and on time every month. With no history, a no-fee student, newcomer or secured card is the usual first step, and our guides compare them: <a href="/blog/best-student-credit-cards-canada/">best student credit cards</a>, <a href="/blog/best-credit-cards-newcomers-canada/">best cards for newcomers</a> and <a href="/blog/best-secured-credit-cards-canada/">best secured cards for rebuilding credit</a>.</p>
    <p>The FCAC notes that only Canadian credit activity goes on a Canadian report, so a strong file abroad does not carry over automatically; some lenders will look at a foreign report if you bring one. TransUnion also lists alternative account history, such as rent, buy now pay later and utility payments, as something its report can include, which is worth asking about if you pay rent on time but have no card yet.</p>

    <h2>Frequently asked questions</h2>
    <h3>What is a good credit score in Canada?</h3>
    <p>Scores run from 300 to 900 and higher is better, but each lender sets its own cut-offs. TransUnion says the lender is the best source for how your score affects its decision, and that the score is only one part of what lenders look at.</p>
    <h3>Why are my Equifax and TransUnion scores different?</h3>
    <p>Each bureau may hold slightly different information, because lenders don't always report to both or on the same day, and each may use a different scoring model. A gap between the two is normal.</p>
    <h3>Does checking my credit score lower it?</h3>
    <p>No. Requesting your own report is a soft inquiry. Only hard inquiries from credit applications count, and the FCAC treats car loan or mortgage quotes within 2 weeks as 1 inquiry.</p>
    <h3>How long does a late payment stay on my credit report?</h3>
    <p>Up to 6 years at both Equifax and TransUnion, according to the FCAC's page on how long information stays on your report.</p>
    <h3>Can I get my TransUnion score for free outside Ontario and Quebec?</h3>
    <p>Not with the Consumer Disclosure. TransUnion's free score comes only with the disclosure for Ontario and Quebec residents. Elsewhere, TransUnion points to bank partner apps or its paid monitoring. Equifax's free score is available in every province and territory.</p>
    <h3>Does carrying a balance help my credit score?</h3>
    <p>None of the FCAC or bureau pages we read says it does. The FCAC lists carrying a balance among the credit habits that affect your score, and advises keeping utilization low even if you pay in full each month. Paying in full avoids interest and still builds payment history.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="https://www.canada.ca/en/financial-consumer-agency/services/credit-reports-score/credit-report-score-basics.html">Financial Consumer Agency of Canada: Credit report and score basics</a>, reviewed November 20, 2026</li>
        <li><a href="https://www.canada.ca/en/financial-consumer-agency/services/credit-reports-score/improve-credit-score.html">Financial Consumer Agency of Canada: Improving your credit score</a>, reviewed November 20, 2026</li>
        <li><a href="https://www.canada.ca/en/financial-consumer-agency/services/credit-reports-score/information-credit-report.html">Financial Consumer Agency of Canada: How long information stays on your credit report</a>, reviewed November 20, 2026</li>
        <li><a href="https://www.canada.ca/en/financial-consumer-agency/services/credit-reports-score/order-credit-report.html">Financial Consumer Agency of Canada: Getting your credit report and credit score</a>, reviewed November 20, 2026</li>
        <li><a href="https://www.canada.ca/en/financial-consumer-agency/services/credit-reports-score/check-errors.html">Financial Consumer Agency of Canada: Checking your credit report for errors and fraud</a>, reviewed November 20, 2026</li>
        <li><a href="https://www.equifax.ca/personal/products/equifax-consumer-credit-report/">Equifax Canada: Equifax Consumer Credit Report</a>, reviewed November 20, 2026</li>
        <li><a href="https://www.equifax.ca/personal/dispute-credit-report/">Equifax Canada: How to dispute information on your Equifax credit report</a>, reviewed November 20, 2026</li>
        <li><a href="https://www.transunion.ca/consumer/credit-score">TransUnion Canada: What is a credit score?</a>, reviewed November 20, 2026</li>
        <li><a href="https://www.transunion.ca/consumer/what-is-a-credit-report">TransUnion Canada: What is a credit report?</a>, reviewed November 20, 2026</li>
        <li><a href="https://www.transunion.ca/consumer/credit-freeze">TransUnion Canada: Credit freeze</a>, reviewed November 20, 2026</li>
        <li><a href="https://www.transunion.ca/consumer/credit-disputes">TransUnion Canada: Credit disputes</a>, reviewed November 20, 2026</li>
    </ul>

    <h2>Related reading</h2>
    <ul>
        <li><a href="/blog/credit-card-utilization-applications-credit-score-canada/">Credit utilization and applications: protecting your score</a></li>
        <li><a href="/blog/best-secured-credit-cards-canada/">Best secured credit cards in Canada for rebuilding credit</a></li>
        <li><a href="/blog/best-student-credit-cards-canada/">Best student credit cards in Canada</a></li>
        <li><a href="/blog/best-credit-cards-newcomers-canada/">Best credit cards for newcomers to Canada</a></li>
        <li><a href="/blog/best-no-annual-fee-credit-cards-canada/">Best no-annual-fee credit cards in Canada</a></li>
    </ul>

    ${batchFooter(D, 'Credit Cards', disclaimer)}

</div>`;

export const creditScoreGuidePost = batchPost({
  date: D,
  category: 'Credit Cards',
  categorySlug: 'credit-cards',
  subcategory: 'credit-score-building',
  slug: 'credit-score-canada-guide',
  title: 'How Credit Scores Work in Canada: Equifax vs TransUnion',
  excerpt:
    'The 300 to 900 range, what moves your score, and every rule where Equifax and TransUnion differ: how long each keeps inquiries and closed accounts, free score access by province, freezes and dispute times.',
  content,
});
