import { invFooter, invPost } from './types';

const GSAM_Q = 'https://www.getsmarteraboutmoney.ca/learning-path/working-with-an-advisor/8-questions-to-ask-an-advisor/';
const BCSC_CFR = 'https://www.investright.org/news-and-insights/investing-articles/putting-investors-first-client-focused-reforms-and-conflicts-of-interest/';
const GSAM_MF_FEES = 'https://www.getsmarteraboutmoney.ca/learning-path/mutual-funds-segregated-funds/mutual-fund-fees/';
const CIRO_TCR = 'https://www.ciro.ca/office-investor/investing-basics/total-cost-reporting-what-investors-need-know-2027';
const NRS = 'https://www.aretheyregistered.ca/';
const CIRO_AR = 'https://www.ciro.ca/advisor-report-search';
const CIRO_KYA = 'https://www.ciro.ca/office-investor/know-your-advisor-advisor-report';
const OBSI_FAQ = 'https://www.obsi.ca/en/for-consumers/faqs/';
const FSRA = 'https://www.fsrao.ca/announcements/final-reminder-financial-planner-title-users-must-act-march-28';
const AMF_FP = 'https://lautorite.qc.ca/en/becoming-a-professional/financial-planning';
const AMF_REG = 'https://lautorite.qc.ca/en/general-public/registers';

export const questionsToAskFinancialAdvisorCanada = invPost(
  'hands-off',
  'questions-to-ask-financial-advisor-canada',
  'Questions to Ask a Financial Advisor in Canada (2026 List)',
  'Ask these questions before you hire a financial advisor in Canada: total cost in dollars, how they are paid, registration, conflicts, and what the plan covers.',
  `<div class="container">

    <div class="hook">
        Since <span class="highlight">December 31, 2021, Canada's Client Focused Reforms have been fully in force</span>, requiring registered advisors to put your interests first and to tell you about material conflicts (BCSC). Most people never ask about those conflicts. The questions below get them on the table, in writing, before you sign.
    </div>

    <p>Before hiring a financial advisor in Canada, ask how much you will pay in total, in dollars, and how they are paid. Also ask what they are registered to sell, what conflicts they have, and what the plan covers. The OSC's investor site lists eight core questions; the answers below show which replies should worry you.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>The single most useful question: "What will I pay in total this year, in dollars, including fund costs?" From 2027, your annual report must show that number anyway, according to CIRO.</li>
            <li>Ask how they are paid: salary, commission, a fee on assets, a flat fee, or a mix. The OSC's investor site says fee-based accounts typically cost 1% to 2% a year.</li>
            <li>Check the answer to "Are you registered?" yourself on aretheyregistered.ca before the second meeting.</li>
            <li>Conflicts must be addressed in your best interest and disclosed, under the reforms that began June 30, 2021. Ask what theirs are.</li>
            <li>Vague answers on cost, pressure to move money quickly, and promised returns are reasons to walk away.</li>
        </ul>
    </div>

    <p>This guide is part of <a href="/category/investing/hands-off/">Hands-Off Investing</a>, in the <a href="/category/investing/">Investing</a> category. Use it with <a href="/blog/check-financial-advisor-registration-canada/">how to check an advisor is registered</a> and <a href="/blog/total-cost-reporting-canada/">how to read your total cost report</a>. If you are still deciding whether you need an advisor at all, start with <a href="/blog/robo-advisor-vs-financial-advisor-canada/">robo-advisor versus financial advisor</a>.</p>

    <nav aria-label="On this page">
        <ul>
            <li><a href="#core">Which questions matter most?</a></li>
            <li><a href="#answers">Which answers should worry you?</a></li>
            <li><a href="#paid">How do advisors get paid, and what does it cost?</a></li>
            <li><a href="#conflicts">How do you ask about conflicts?</a></li>
            <li><a href="#decide">How do you decide after the meeting?</a></li>
            <li><a href="#provinces">What differs by province?</a></li>
            <li><a href="#faq">FAQ</a></li>
        </ul>
    </nav>

    <h2 id="core">Which questions matter most?</h2>

    <p>The <a href="${GSAM_Q}">OSC's investor site</a> groups its list into eight areas: qualifications, registration, experience, products and services, clients, investment philosophy, pay, and how you will work together. Here they are as questions you can read out, with the reason each matters.</p>

    <div class="step-section">
        <div class="step"><div class="step-number">1</div><div><div class="step-title">"What will I pay in total, in dollars, this year?"</div><p>Ask for the advisory or account fee plus the fund costs (MER plus trading costs) on your actual balance.</p></div></div>
        <div class="step"><div class="step-number">2</div><div><div class="step-title">"How are you paid, and by whom?"</div><p>Salary, commission, a percentage of assets, a flat fee, or trailing commissions from fund companies.</p></div></div>
        <div class="step"><div class="step-number">3</div><div><div class="step-title">"What is your registration category, and with which firm?"</div><p>This tells you what they are allowed to sell or advise on.</p></div></div>
        <div class="step"><div class="step-number">4</div><div><div class="step-title">"What products can you offer, and are any limited to your firm's own funds?"</div><p>A narrow shelf is not wrong, but you should know about it.</p></div></div>
        <div class="step"><div class="step-number">5</div><div><div class="step-title">"Will I get a written financial plan? What does it cover?"</div><p>Retirement income, tax, pensions, insurance and estate, or only the portfolio?</p></div></div>
        <div class="step"><div class="step-number">6</div><div><div class="step-title">"What is your investment approach?"</div><p>Buy and hold, or frequent trading? Index funds, active funds, or individual stocks?</p></div></div>
        <div class="step"><div class="step-number">7</div><div><div class="step-title">"Who are your typical clients?"</div><p>Someone who mostly serves retirees may not be the best fit for a 30-year-old business owner.</p></div></div>
        <div class="step"><div class="step-number">8</div><div><div class="step-title">"How often will we meet, and who do I call?"</div><p>Annual review, quarterly calls, or only when you ask? Will you deal with them or with an assistant?</p></div></div>
    </div>

    <h2 id="answers">Which answers should worry you?</h2>

    <p>A good advisor answers these clearly and puts the cost answer in writing. The table shows what a clear answer sounds like and what should make you pause.</p>

    <div class="table-wrapper">
        <table>
            <caption>Questions to ask a financial advisor: clear answers and warning signs</caption>
            <thead>
                <tr><th>Question</th><th>A clear answer</th><th>An answer that should worry you</th></tr>
            </thead>
            <tbody>
                <tr class="highlight-row"><td>Total cost in dollars?</td><td>"About $4,100 a year on $250,000: $3,125 advisory fee and about $1,000 in fund costs. I'll email it."</td><td>"It's built into the funds, you won't notice it."</td></tr>
                <tr><td>How are you paid?</td><td>"A 1.25% fee you see on your statement. I don't receive trailing commissions."</td><td>"The fund company pays me, so it's free to you."</td></tr>
                <tr><td>Registration?</td><td>"Dealing representative with [firm], registered in Ontario and BC. Here's how to look me up."</td><td>"I'm licensed," with no category or firm, or a firm name that does not match the registration search.</td></tr>
                <tr><td>Product shelf?</td><td>"ETFs and funds from several companies. Our own funds are on the list, and here's how I avoid favouring them."</td><td>"Our funds are the best, so that's what we use."</td></tr>
                <tr><td>Written plan?</td><td>"Yes, covering retirement income, tax and insurance, updated every year."</td><td>"We'll talk about planning once your money is moved over."</td></tr>
                <tr><td>Expected returns?</td><td>"I can't promise returns. Here's how a mix like this has behaved in bad years."</td><td>Any specific return promise, or pressure to decide today.</td></tr>
                <tr><td>Leaving later?</td><td>"Transfer-out fee of $X. No deferred sales charges on what I recommend."</td><td>"You won't want to leave," with no fee answer.</td></tr>
            </tbody>
        </table>
    </div>

    <p>The dollar figures in the "clear answer" column are illustrative. The point is the form of the answer: specific, in dollars, and in writing.</p>

    <h2 id="paid">How do advisors get paid, and what does it cost?</h2>

    <p>Pay structure shapes advice. Commission-based pay can reward selling, and a percentage-of-assets fee can reward gathering assets. Flat fees remove some conflicts but can be expensive on small accounts. None is automatically better: what matters is that you know which one you are in.</p>

    <div class="table-wrapper">
        <table>
            <caption>How Canadian advisors are paid and the conflict to ask about, from OSC investor education pages, reviewed October 23, 2026</caption>
            <thead>
                <tr><th>Pay model</th><th>Typical cost</th><th>Conflict to ask about</th></tr>
            </thead>
            <tbody>
                <tr><td>Trailing commission (inside a mutual fund's MER)</td><td>Typically 0.25% to 1.5% a year</td><td>Funds paying higher trailers may be favoured</td></tr>
                <tr><td>Front-end load</td><td>Up to 5% of the amount invested</td><td>A one-time sale incentive</td></tr>
                <tr><td>Fee-based (percentage of assets)</td><td>Typically negotiated between 1% and 2%</td><td>Advice to keep money in the account rather than pay down debt or buy a pension</td></tr>
                <tr><td>Flat or hourly fee (fee-only)</td><td>Set by the planner</td><td>Fewer product conflicts; check what is and is not included</td></tr>
                <tr><td>Deferred sales charge</td><td>Banned for new sales as of June 1, 2022</td><td>Old DSC schedules can still apply when you sell</td></tr>
            </tbody>
        </table>
    </div>

    <div class="chart-container">
        <h3>Annual fee on a $300,000 account at different rates (calculated)</h3>
        <div class="bar-chart">
            <div class="bar-item"><div class="bar-label wide">0.50%: $1,500</div><div class="bar-wrapper"><div class="bar" style="width: 25%;"><span></span></div></div></div>
            <div class="bar-item"><div class="bar-label wide">1.00%</div><div class="bar-wrapper"><div class="bar" style="width: 50%;"><span>$3,000</span></div></div></div>
            <div class="bar-item"><div class="bar-label wide">1.50%</div><div class="bar-wrapper"><div class="bar" style="width: 75%;"><span>$4,500</span></div></div></div>
            <div class="bar-item"><div class="bar-label wide">2.00%</div><div class="bar-wrapper"><div class="bar" style="width: 100%;"><span>$6,000</span></div></div></div>
        </div>
        <p>Simple percentage of $300,000, before fund costs and sales tax. The 1% to 2% range is from the <a href="${GSAM_MF_FEES}">OSC's investor site</a>. Ask for your own number in dollars.</p>
    </div>

    <h2 id="conflicts">How do you ask about conflicts?</h2>

    <p>Under the Client Focused Reforms, the <a href="${BCSC_CFR}">BC Securities Commission explains</a> that registered firms and advisors must address material conflicts in your best interest, disclose them in plain language, and avoid conflicts they cannot address. The conflict rules began June 30, 2021, and the rest of the package came into force December 31, 2021. The BCSC suggests asking about conflicts at every meeting and getting answers in writing.</p>

    <div class="example-box">
        <strong>Script: three conflict questions</strong>
        <ol>
            <li>"Do you or your firm earn more if I buy one product rather than another? Which ones?"</li>
            <li>"Do you recommend your firm's own funds? How do you decide when a cheaper outside fund is better?"</li>
            <li>"Do you get any bonus, trip or sales credit tied to what I buy or how much I move to you?"</li>
        </ol>
        <p>Ask for the answers by email. Firms must disclose material conflicts to you in plain language, so a written answer should not be a problem.</p>
    </div>

    <h2 id="decide">How do you decide after the meeting?</h2>

    <div class="flowchart">
        <div class="flow-node decision">Did they give you a total annual cost in dollars, in writing?</div>
        <div class="flow-arrow"></div>
        <div class="flow-branch-container">
            <div class="flow-node result">No: ask once more. If still no, walk away</div>
            <div class="flow-node decision">Yes: does the registration search match their name, firm and category?</div>
        </div>
        <div class="flow-arrow"></div>
        <div class="flow-branch-container">
            <div class="flow-node result">No: do not proceed. Contact your securities regulator</div>
            <div class="flow-node result">Yes: compare the cost and services with one other advisor or a robo before signing</div>
        </div>
    </div>

    <div class="example-box">
        <strong>Illustrative example: Amara, 41, Winnipeg</strong>
        <p>Amara has $300,000 across an RRSP and TFSA and is meeting two advisors. Advisor A quotes 1.25% plus about 0.30% in ETF costs: $4,650 a year, with a written plan updated annually. Advisor B says the cost is "built into the funds" and will not put a number in writing. Amara checks Advisor A on the national registration search, finds a match, and asks one follow-up: "What would it cost to leave?" She signs with A and diarizes a review when her first total cost report arrives in 2027. Amara and the fees are illustrative.</p>
    </div>

    <h2 id="provinces">What differs by province?</h2>

    <p>The registration and conflict rules are national, coordinated through the CSA. Titles and complaint timelines differ:</p>
    <ul>
        <li><strong>Ontario:</strong> anyone using "Financial Planner" or "Financial Advisor" needs a credential from a body approved by FSRA. FSRA says the transition period <a href="${FSRA}">ended March 28, 2026</a>. Ask which credential they hold.</li>
        <li><strong>Quebec:</strong> the financial planner title requires a diploma from the Institut de planification financière and an <a href="${AMF_FP}">AMF certificate</a>. You can look up authorized people in the <a href="${AMF_REG}">AMF registers</a>.</li>
        <li><strong>Complaints:</strong> OBSI says investment firms have 90 days to respond to your written complaint, or 60 days for Quebec residents, before you can take it to OBSI.</li>
        <li><strong>Elsewhere:</strong> this guide has not confirmed title-protection rules in force in other provinces. Rely on the registration search and the credential itself.</li>
    </ul>

    <h2>Checklist</h2>
    <ul class="checklist">
        <li>Total annual cost in dollars, in writing</li>
        <li>How they are paid, and by whom</li>
        <li>Registration category and firm checked on aretheyregistered.ca</li>
        <li>Conflicts explained in writing</li>
        <li>What the written plan covers</li>
        <li>Transfer-out cost and any deferred sales charges</li>
        <li>Compared with at least one other option</li>
    </ul>

    <h2 id="faq">Frequently asked questions</h2>

    <h3>What is the most important question to ask a financial advisor?</h3>
    <p>"What will I pay in total this year, in dollars, including fund costs?" It forces a specific answer and makes it easy to compare. From 2027, your annual report must show this figure anyway.</p>

    <h3>Is a fee-only advisor better than a commission-based one?</h3>
    <p>Not automatically. Fee-only planners avoid product commissions but can be expensive for small needs. Commission-based advisors can be good value if the total cost is reasonable. Compare total cost and services.</p>

    <h3>Should I ask an advisor about their returns?</h3>
    <p>You can ask how their recommended portfolios behaved in bad years, such as 2022. Be wary of anyone who promises returns or shows only good years.</p>

    <h3>Do I have to give an advisor all my financial information?</h3>
    <p>To give suitable advice, a registered advisor must collect know-your-client information about your situation, goals and risk tolerance. You can meet first and ask your questions before sharing account numbers.</p>

    <h3>How do I check if a financial advisor is legitimate?</h3>
    <p>Search their name and firm on the CSA's national registration search at aretheyregistered.ca. For investment dealer advisors, CIRO's AdvisorReport also shows their history. Our <a href="/blog/check-financial-advisor-registration-canada/">registration guide</a> walks through it.</p>

    <h3>What if my advisor will not answer about fees?</h3>
    <p>Ask in writing. If the firm still will not answer, that is a reason to leave. If you think the rules were broken, complain to the firm first, then to OBSI or your securities regulator.</p>

    <h3>Can I negotiate an advisor's fee?</h3>
    <p>Often, yes, especially on larger accounts. The OSC's investor site describes fee-based rates as typically negotiated between 1% and 2%.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="${GSAM_Q}">GetSmarterAboutMoney (OSC): 8 questions to ask an advisor</a>, last updated December 11, 2023, reviewed October 23, 2026</li>
        <li><a href="${GSAM_MF_FEES}">GetSmarterAboutMoney (OSC): Mutual fund fees</a>, reviewed October 23, 2026</li>
        <li><a href="${BCSC_CFR}">BCSC InvestRight: Client Focused Reforms and conflicts of interest</a>, reviewed October 23, 2026</li>
        <li><a href="${CIRO_TCR}">CIRO: Total Cost Reporting for 2027</a>, reviewed October 23, 2026</li>
        <li><a href="${OBSI_FAQ}">OBSI: Frequently asked questions</a>, reviewed October 23, 2026</li>
        <li><a href="${FSRA}">FSRA: Financial Planner title transition reminder</a>, <a href="${AMF_FP}">AMF: Financial planning</a> and <a href="${AMF_REG}">AMF registers</a>, reviewed October 23, 2026</li>
    </ul>

    <h2>Related reading</h2>
    <ul>
        <li><a href="/blog/check-financial-advisor-registration-canada/">How to check a financial advisor is registered</a></li>
        <li><a href="/blog/total-cost-reporting-canada/">Total cost reporting in Canada</a></li>
        <li><a href="/blog/robo-advisor-vs-financial-advisor-canada/">Robo-advisor vs financial advisor</a></li>
        <li><a href="/blog/best-robo-advisors-canada/">Best robo-advisors in Canada</a></li>
    </ul>

    <div class="cta-section">
        <p><strong>Not sure you need an advisor at all?</strong></p>
        <p>Compare the cost and services of a robo-advisor, a full-service advisor and a fee-only planner.</p>
        <a href="/blog/robo-advisor-vs-financial-advisor-canada/" class="cta-button">Compare your options</a>
    </div>

    ${invFooter("General education about choosing a financial advisor in Canada as of October 23, 2026. It is not a recommendation of any firm or individual, and not investment, tax or legal advice. Dollar figures in example answers and households are illustrations. Check registration and get costs in writing before you sign.")}

</div>`
);

export const checkFinancialAdvisorRegistrationCanada = invPost(
  'hands-off',
  'check-financial-advisor-registration-canada',
  'How to Check a Financial Advisor Is Registered in Canada',
  'Check any Canadian advisor in minutes with the CSA National Registration Search, CIRO AdvisorReport and provincial title registers. Here is which tool to use.',
  `<div class="container">

    <div class="hook">
        The CSA is warning investors about <span class="highlight">fake documents that use CSA branding to promise people money</span> (aretheyregistered.ca, updated January 13, 2026). A real-looking letterhead proves nothing. A free registration search proves a great deal, and it takes less time than the first coffee meeting.
    </div>

    <p>To check a Canadian financial advisor, search their name and firm on the CSA's National Registration Search at aretheyregistered.ca. Then check CIRO's AdvisorReport if they work for an investment dealer, and look for disciplinary history. In Ontario and Quebec, also confirm their planner title with FSRA or the AMF.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>Anyone selling securities or giving investment advice must be registered with a securities regulator unless they have an exemption, according to the OSC's investor site.</li>
            <li>The CSA's National Registration Search covers every province and territory. It shows the firm, category and provinces.</li>
            <li>CIRO's AdvisorReport adds approval categories, past firms, courses and disciplinary disclosures, but only for advisors at investment dealers, not mutual fund dealers.</li>
            <li>Also check the CSA Disciplined List and the cease trade orders database on SEDAR+, as the CSA recommends.</li>
            <li>If something goes wrong, OBSI can recommend up to $350,000 per complaint. Its recommendations are not binding.</li>
        </ul>
    </div>

    <p>This guide is part of <a href="/category/investing/hands-off/">Hands-Off Investing</a>, in the <a href="/category/investing/">Investing</a> category. Pair it with <a href="/blog/questions-to-ask-financial-advisor-canada/">questions to ask a financial advisor</a>, so you check both the person and the deal.</p>

    <nav aria-label="On this page">
        <ul>
            <li><a href="#why">Why does registration matter?</a></li>
            <li><a href="#tools">Which tool do you use?</a></li>
            <li><a href="#steps">How do you run the check?</a></li>
            <li><a href="#read">How do you read the results?</a></li>
            <li><a href="#provinces">What about provincial titles?</a></li>
            <li><a href="#scams">What do impersonation scams look like?</a></li>
            <li><a href="#wrong">What if something goes wrong?</a></li>
            <li><a href="#faq">FAQ</a></li>
        </ul>
    </nav>

    <h2 id="why">Why does registration matter?</h2>

    <p>Registration means a regulator has checked the person's proficiency and the firm's capital, insurance and compliance systems, and can discipline them. The <a href="${NRS}">CSA's "Are They Registered?" page</a> says securities professionals must register in each province or territory where they do business, and regulators only register firms and individuals that are properly qualified. It also warns that being registered does not mean a given investment suits you.</p>

    <p>Unregistered people offering investments is one of the most common signs of fraud. If someone says they are "licensed" but you cannot find them, stop there.</p>

    <h2 id="tools">Which tool do you use?</h2>

    <div class="table-wrapper">
        <table>
            <caption>Where to check a Canadian financial advisor, reviewed October 23, 2026</caption>
            <thead>
                <tr><th>Tool</th><th>Who it covers</th><th>What it shows</th></tr>
            </thead>
            <tbody>
                <tr class="highlight-row"><td><a href="${NRS}">CSA National Registration Search</a></td><td>Individuals and firms registered with any provincial or territorial securities regulator</td><td>Registration category, firm, provinces, and any terms or conditions</td></tr>
                <tr><td><a href="${CIRO_AR}">CIRO AdvisorReport</a></td><td>Advisors currently approved at a CIRO-regulated investment dealer (not mutual fund dealer registrants)</td><td>Approval categories, provinces, terms, past firms, courses and exams, disciplinary disclosures</td></tr>
                <tr><td>CIRO disciplinary case search</td><td>Current and former CIRO-regulated advisors and firms</td><td>Enforcement decisions, which CIRO says are never removed</td></tr>
                <tr><td>CSA Disciplined List and SEDAR+ cease trade orders</td><td>Individuals and companies sanctioned by securities regulators</td><td>Bans, sanctions and cease trade orders</td></tr>
                <tr><td><a href="${AMF_REG}">AMF registers</a> (Quebec)</td><td>Firms and individuals authorized in Quebec, including insurance representatives</td><td>Authorization, training requirements, and whether someone has been barred</td></tr>
                <tr><td>FSRA (Ontario)</td><td>People using "Financial Planner" or "Financial Advisor" titles in Ontario</td><td>Whether their credential comes from an FSRA-approved body</td></tr>
            </tbody>
        </table>
    </div>

    <div class="flowchart">
        <div class="flow-node decision">Do they sell or advise on securities (stocks, ETFs, mutual funds)?</div>
        <div class="flow-arrow"></div>
        <div class="flow-branch-container">
            <div class="flow-node result">Yes: National Registration Search first</div>
            <div class="flow-node result">Only insurance or segregated funds: your provincial insurance regulator (AMF in Quebec)</div>
        </div>
        <div class="flow-arrow"></div>
        <div class="flow-node decision">Is their firm an investment dealer?</div>
        <div class="flow-arrow"></div>
        <div class="flow-branch-container">
            <div class="flow-node result">Yes: add CIRO AdvisorReport</div>
            <div class="flow-node result">No: check the CSA Disciplined List and SEDAR+ cease trade orders</div>
        </div>
    </div>

    <h2 id="steps">How do you run the check?</h2>

    <div class="step-section">
        <div class="step"><div class="step-number">1</div><div><div class="step-title">Get their exact details</div><p>Full legal name, firm name, and the province they work from. Ask for them by email so you have them in writing.</p></div></div>
        <div class="step"><div class="step-number">2</div><div><div class="step-title">Search the National Registration Search</div><p>Search the individual, then the firm. Note the category and the provinces listed.</p></div></div>
        <div class="step"><div class="step-number">3</div><div><div class="step-title">Check CIRO if they are at an investment dealer</div><p>CIRO's tips: enter the last name exactly, watch for spelling variants such as Lee and Li, and leave the firm blank if you are unsure.</p></div></div>
        <div class="step"><div class="step-number">4</div><div><div class="step-title">Check discipline and the news</div><p>The CSA suggests the Disciplined List, cease trade orders on SEDAR+, and a plain web search for complaints or court cases.</p></div></div>
        <div class="step"><div class="step-number">5</div><div><div class="step-title">Confirm the title</div><p>In Ontario, ask which FSRA-approved credential they hold. In Quebec, check the AMF register.</p></div></div>
        <div class="step"><div class="step-number">6</div><div><div class="step-title">Reach the firm independently</div><p>CIRO recommends typing the firm's web address yourself rather than clicking a link someone sent. Call the firm's main number to confirm the person works there.</p></div></div>
    </div>

    <h2 id="read">How do you read the results?</h2>

    <p>The registration category tells you what the person can do. The firm category tells you what the firm can sell. These are the categories you will see most often.</p>

    <div class="table-wrapper">
        <table>
            <caption>Common registration categories on the National Registration Search</caption>
            <thead>
                <tr><th>You see</th><th>What it generally means</th><th>Question to ask</th></tr>
            </thead>
            <tbody>
                <tr><td>Dealing representative, mutual fund dealer</td><td>Can sell mutual funds through that dealer</td><td>"Can you offer ETFs or only mutual funds?"</td></tr>
                <tr><td>Dealing representative, investment dealer</td><td>Can trade a broad range of securities, such as stocks, bonds and ETFs, through that dealer</td><td>"Is my account fee-based or commission?"</td></tr>
                <tr><td>Advising representative, portfolio manager</td><td>Can manage portfolios with discretion, without asking before each trade</td><td>"What is the minimum account and the fee schedule?"</td></tr>
                <tr><td>Dealing representative, exempt market dealer</td><td>Sells prospectus-exempt products, such as private placements</td><td>"What are the risks and how would I sell this later?"</td></tr>
                <tr><td>Terms and conditions on registration</td><td>The regulator placed limits, such as supervision</td><td>"Why are there conditions on your registration?"</td></tr>
            </tbody>
        </table>
    </div>

    <div class="warning-box">
        <strong>Red flags in the results</strong>
        <ul>
            <li>No result at all, or the name matches but the firm does not.</li>
            <li>They are not registered in your province.</li>
            <li>A disciplinary record they did not mention.</li>
            <li>They want you to send money to anyone other than the registered firm.</li>
        </ul>
    </div>

    <div class="example-box">
        <strong>Illustrative example: Tom, 63, Kelowna</strong>
        <p>Tom gets a call offering a "guaranteed 12%" private investment. The caller emails a document with a securities regulator logo. Tom searches the caller's name and company on aretheyregistered.ca: no result. He finds the company on no CIRO list. He stops, does not send money, and reports it to the BC Securities Commission. Tom and the offer are illustrative, but the steps are the ones the CSA recommends.</p>
    </div>

    <h2 id="provinces">What about provincial titles?</h2>

    <p>Registration is about what someone can sell or advise on. Titles are separate, and only some provinces regulate them:</p>
    <ul>
        <li><strong>Ontario:</strong> "Financial Planner" and "Financial Advisor" require a credential from an FSRA-approved body. FSRA says the transition period <a href="${FSRA}">ended March 28, 2026</a>.</li>
        <li><strong>Quebec:</strong> the AMF says the planner title requires the Institut de planification financière diploma and an <a href="${AMF_FP}">AMF certificate</a>. The <a href="${AMF_REG}">AMF registers</a> also show insurance representatives and anyone barred from practising.</li>
        <li><strong>Other provinces and territories:</strong> this guide has not confirmed a title-protection regime in force. A title alone tells you little, so rely on the registration search and the actual credential.</li>
    </ul>

    <h2 id="scams">What do impersonation scams look like?</h2>

    <p>The CSA's current warning is about false documents that use CSA branding to promise investors funds. Regulators do not send letters promising you money, and they do not ask for fees to release funds. CIRO's fraud page adds three points worth repeating:</p>
    <ul>
        <li>Check registration before you give anyone your personal information or your money.</li>
        <li>A company that says it is regulated by CIRO may not be. Check CIRO's own list.</li>
        <li>Reach a dealer's website by typing the address yourself, and check that the address is exactly right. Lookalike sites copy real firms.</li>
    </ul>

    <div class="table-wrapper">
        <table>
            <caption>Real registrant or impersonator? Quick checks</caption>
            <thead>
                <tr><th>What you are told</th><th>What to do</th></tr>
            </thead>
            <tbody>
                <tr><td>"We're with the securities commission and can release your funds for a fee."</td><td>Hang up. Call the regulator using the number on its official website.</td></tr>
                <tr><td>"I'm registered, here's my licence number."</td><td>Search the name and firm yourself on aretheyregistered.ca.</td></tr>
                <tr><td>"Send the money to my personal account or a crypto wallet."</td><td>Do not. Registered firms take deposits into accounts in your name.</td></tr>
                <tr class="highlight-row"><td>"Here's a link to log in to your new account."</td><td>Type the firm's address yourself instead of clicking.</td></tr>
            </tbody>
        </table>
    </div>

    <h2 id="wrong">What if something goes wrong?</h2>

    <p>Complain in writing to the firm first. If you are not satisfied, OBSI is the free ombudsman for investment complaints. Its FAQ sets out the timelines below.</p>

    <div class="chart-container">
        <h3>Complaint timelines, in days (OBSI, reviewed October 23, 2026)</h3>
        <div class="bar-chart">
            <div class="bar-item"><div class="bar-label wide">Firm response, Quebec: 60</div><div class="bar-wrapper"><div class="bar" style="width: 33.3%;"><span></span></div></div></div>
            <div class="bar-item"><div class="bar-label wide">Firm response, elsewhere: 90</div><div class="bar-wrapper"><div class="bar" style="width: 50%;"><span></span></div></div></div>
            <div class="bar-item"><div class="bar-label wide">OBSI investigation target</div><div class="bar-wrapper"><div class="bar" style="width: 66.7%;"><span>120</span></div></div></div>
            <div class="bar-item"><div class="bar-label wide">Your window to go to OBSI</div><div class="bar-wrapper"><div class="bar" style="width: 100%;"><span>180</span></div></div></div>
        </div>
        <p>From the <a href="${OBSI_FAQ}">OBSI FAQ</a>: investment firms have 90 days to respond (60 for Quebec residents, extendable to 90 in exceptional cases). You have 180 calendar days after the firm's final written response to go to OBSI. OBSI aims to finish investment investigations within 120 days of assignment.</p>
    </div>

    <p>OBSI can recommend up to $350,000 for a single complaint, across all accounts. Its recommendations are not binding, but OBSI publishes refusals. If you think rules were broken, you can also report to your securities regulator, which can discipline the advisor but normally does not recover money.</p>

    <h2>Checklist</h2>
    <ul class="checklist">
        <li>Exact name, firm and province in writing</li>
        <li>National Registration Search match for person and firm</li>
        <li>CIRO AdvisorReport checked, if at an investment dealer</li>
        <li>Disciplined List, SEDAR+ cease trade orders and a web search done</li>
        <li>Title confirmed with FSRA (Ontario) or the AMF (Quebec)</li>
        <li>Money sent only to the registered firm, never to a person</li>
    </ul>

    <h2 id="faq">Frequently asked questions</h2>

    <h3>How do I know if a financial advisor is registered in Canada?</h3>
    <p>Search the CSA's National Registration Search at aretheyregistered.ca. It covers registrants in every province and territory and shows their category and firm.</p>

    <h3>What is CIRO AdvisorReport?</h3>
    <p>CIRO's search tool for advisors at CIRO-regulated investment dealers. It shows approval categories, provinces, past firms, courses and disciplinary disclosures. CIRO says it does not cover mutual fund dealer registrants.</p>

    <h3>Why can't I find my advisor on CIRO?</h3>
    <p>They may be at a mutual fund dealer, a portfolio manager or an exempt market dealer, which AdvisorReport does not cover. Use the National Registration Search instead.</p>

    <h3>Does registration mean an investment is safe?</h3>
    <p>No. The CSA says registration does not mean an investment suits you. It means the person and firm meet regulatory standards and can be disciplined.</p>

    <h3>Are insurance agents on the National Registration Search?</h3>
    <p>Not for their insurance licence. Insurance licensing is provincial. In Quebec, the AMF registers include insurance representatives; elsewhere, check your provincial insurance regulator.</p>

    <h3>What should I do if someone is not registered?</h3>
    <p>Do not invest or share account details. Contact your provincial or territorial securities regulator, as the CSA recommends.</p>

    <h3>How much can OBSI recover for me?</h3>
    <p>OBSI can recommend up to $350,000 for a single complaint, across all accounts involved. Firms are not legally bound to follow it, but refusals are made public.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="${NRS}">CSA: Are They Registered?</a> (last updated January 13, 2026), reviewed October 23, 2026</li>
        <li><a href="${CIRO_AR}">CIRO: Search for an AdvisorReport</a> and <a href="${CIRO_KYA}">Know Your Advisor: Advisor Report</a>, reviewed October 23, 2026</li>
        <li><a href="${OBSI_FAQ}">OBSI: Frequently asked questions</a>, reviewed October 23, 2026</li>
        <li><a href="${FSRA}">FSRA: Financial Planner title transition reminder</a>, reviewed October 23, 2026</li>
        <li><a href="${AMF_FP}">AMF: Financial planning</a> and <a href="${AMF_REG}">AMF registers</a>, reviewed October 23, 2026</li>
        <li><a href="${GSAM_Q}">GetSmarterAboutMoney (OSC): 8 questions to ask an advisor</a>, reviewed October 23, 2026</li>
    </ul>

    <h2>Related reading</h2>
    <ul>
        <li><a href="/blog/questions-to-ask-financial-advisor-canada/">Questions to ask a financial advisor</a></li>
        <li><a href="/blog/total-cost-reporting-canada/">Total cost reporting in Canada</a></li>
        <li><a href="/blog/robo-advisor-vs-financial-advisor-canada/">Robo-advisor vs financial advisor</a></li>
    </ul>

    <div class="cta-section">
        <p><strong>Checked them out? Now check the questions.</strong></p>
        <p>Use our list of questions, with the answers that should worry you.</p>
        <a href="/blog/questions-to-ask-financial-advisor-canada/" class="cta-button">Questions to ask an advisor</a>
    </div>

    ${invFooter("General education about checking advisor registration in Canada as of October 23, 2026. It is not legal or investment advice and does not assess any firm or individual. Examples are illustrations. Tools and rules change; use the official search pages linked above.")}

</div>`
);
