import type { BlogPostRecord } from '../lib/post-video';

const meta = {
  category: 'Earning More',
  categorySlug: 'earning-more',
  author: 'Andrew',
  date: '2026-10-15',
  updated: '2026-10-15',
  subcategory: 'entrepreneur',
} as const;

function post(slug: string, title: string, excerpt: string, content: string): BlogPostRecord {
  return { ...meta, title, slug, excerpt, image: `/images/blog/${slug}.png`, content };
}

const footer = `<div class="article-footer">
        <p><strong>Disclaimer:</strong> This is general education about self-employment and small business in Canada as of October 2026. It is not tax, legal, or business advice. Fees and eligibility rules change. Figures below are taken from the government or survey page linked beside them. Illustrations that are not cited are a method, not a quote. Confirm the registry, CRA, and Service Canada pages before you pay a fee or opt into a program.</p>
        <div class="footer-note">Published: October 15, 2026 | Category: Earning More | Author: Andrew</div>
    </div>`;

export const earningMore2026EntrepreneurPosts: BlogPostRecord[] = [
  post(
    'how-to-register-a-business-canada',
    'How to Register a Business in Canada (Sole Prop vs Incorporate)',
    'A sole proprietorship, an Ontario corporation, and a federal corporation are different filings with published fees. Here is the order, and what registration does not decide.',
    `<div class="container">

    <div class="hook">
        Registering a business is a filing, not a strategy. <span class="highlight">A sole prop using a trade name, an Ontario corporation, and a federal corporation are three different fees and three different ongoing chores.</span> None of them, by itself, tells you what to charge or how to pay yourself.
    </div>

    <p>Price the work first: <a href="/blog/consulting-rate-after-cpp-ei-tax-canada/">how to set a freelance rate</a>. Confirm you are actually self-employed: <a href="/blog/employee-vs-contractor-canada/">employee versus contractor</a>. Whether a corporation should exist is <a href="/blog/should-you-incorporate/">should you incorporate</a>. How money comes out if it does is <a href="/blog/salary-vs-dividends-incorporated-canada/">salary versus dividends</a>. GST/HST and the T2125 are <a href="/blog/side-hustle-taxes-canada/">side-hustle taxes</a>. This page is the registration step in between.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>Ontario's business registry lists a sole proprietorship or general partnership name registration at $60 online, effective immediately. A registration under the Business Names Act lasts five years and is renewed for $60.</li>
            <li>An Ontario business corporation is $300 online on the same fee page. A federal incorporation filed online with Corporations Canada is $200, with an extra $100 if you buy the four-hour express service.</li>
            <li>A CRA business number is not the Ontario BIN and not the federal corporation number. You still open it when you need payroll, GST/HST, or import accounts.</li>
            <li>Other provinces have their own registries and their own fees. This page does not invent them. Use that province's registry.</li>
        </ul>
    </div>

    <h2>Sole prop first, unless you already know you need a company</h2>

    <p>If you operate in your own legal name, you may not need a business-name registration at all. The moment the invoice says something other than your name, Ontario wants a registration. The Ontario Business Registry fee table lists a new sole proprietorship, general partnership, or business-name registration at $60 online, processed immediately, and $60 by mail with a longer wait. The renewal instruction for the Business Names Act says the registration lasts five years. Miss the renewal, including the grace period described on that form, and you are filing a new registration with a new identification number rather than extending the old one.</p>

    <p>That $60 buys a name on a public register. It does not incorporate you, it does not limit your liability, and it does not register you for GST/HST. The small-supplier tests, including the $30,000 line most suppliers meet before they must register, are on the side-hustle tax article and on CRA's registration pages. Read those before you collect tax you are not required to collect, and before you skip tax you are required to collect.</p>

    <h2>Two ways to incorporate, with the fees on the fee pages</h2>

    <table>
        <caption>Fees as published on the Ontario and Corporations Canada pages linked below. They are not a quote from a filing service.</caption>
        <thead>
            <tr><th>Filing</th><th>Published online fee</th><th>What you still owe after</th></tr>
        </thead>
        <tbody>
            <tr><td>Ontario business corporation</td><td>$300, immediate online</td><td>A minute book, annual returns, and a T2. A NUANS name search if you are not using a number name. Ontario says a federal-biased NUANS is not accepted for an Ontario named corporation.</td></tr>
            <tr><td>Federal corporation, Corporations Canada, online</td><td>$200, about one day. Express service adds $100 for a four-hour standard.</td><td>Extra-provincial registration in the province where you operate. That fee is provincial and variable. Corporations Canada says so.</td></tr>
            <tr><td>Ontario trade name on an existing corporation</td><td>$60 online for a business-name registration</td><td>The corporation you already have. The name registration is not a second company.</td></tr>
        </tbody>
    </table>

    <p>A federal corporation is not "more official" than an Ontario one for a person who lives and sells in Ontario. It is a different statute, a different fee, and often a second registration in the province. People who sell incorporation as a package sometimes bundle a holding company on day one. A holdco is a later question, and usually a no, until there is surplus to hold: <a href="/blog/holding-company-income-streams-canada/">holding-company income</a>.</p>

    <h2>The order that wastes the least money</h2>

    <ol>
        <li>Decide the status. If the payer controls the work, you may be an employee. Registering a company does not fix that.</li>
        <li>Pick the name. Search the Ontario registry for free before you pay. Corporations Canada includes a name search in the online federal incorporation. Do not pay for a report you do not need.</li>
        <li>File the smallest thing that matches the decision. Trade name if you are a sole prop with a brand. Corporation only if <a href="/blog/should-you-incorporate/">the incorporation test</a> is met.</li>
        <li>Then the CRA business number, only for the accounts you actually need. Payroll if you will pay yourself a salary. GST/HST if the tests say so.</li>
        <li>Then a bank account in the name that is on the registration, and invoices that use that name. The rate on the invoice is the freelance-rate article, not this one.</li>
    </ol>

    <h2>Frequently asked questions</h2>

    <h3>Do I need a corporation to send an invoice?</h3>
    <p>No. A sole prop invoices in their own name, or in a registered trade name. A corporation is a second taxpayer. It earns its cost only in the cases the incorporation article describes. A Tuesday-turnaround incorporation is a product. It is not a milestone.</p>

    <h3>Is the Ontario BIN the same as a CRA business number?</h3>
    <p>No. Ontario says so on the registration steps. The BIN is the provincial identifier. The BN is CRA's. You will be asked for both by banks and by payroll, and they are not interchangeable.</p>

    <h3>What if I am not in Ontario?</h3>
    <p>Use your provincial registry's fee page. This article quotes Ontario and the federal fee because those are the pages reviewed. Copying the $60 or the $300 into another province is how people pay the wrong office.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="https://www.ontario.ca/page/cost-time-required-to-register-change-search-for-business-name-corporation-not-for-profit">Ontario: cost and time to register a business name or corporation</a></li>
        <li><a href="https://www.ontario.ca/page/business/start/register-your-business-online">Ontario: register your business online</a></li>
        <li><a href="https://ised-isde.canada.ca/site/corporations-canada/en/services-fees-and-processing-times">Corporations Canada: services, fees, and processing times</a></li>
    </ul>

    <h2>Related reading</h2>
    <ul>
        <li><a href="/blog/should-you-incorporate/">Should you incorporate?</a></li>
        <li><a href="/blog/consulting-rate-after-cpp-ei-tax-canada/">How to set your freelance rate</a></li>
        <li><a href="/blog/salary-vs-dividends-incorporated-canada/">Salary versus dividends</a></li>
        <li><a href="/blog/side-hustle-taxes-canada/">Side-hustle taxes</a></li>
    </ul>

    ${footer}

</div>`
  ),
  post(
    'side-hustle-to-full-time-canada',
    'Going From Side Hustle to Full-Time: The Numbers',
    'Nearly 1 in 5 side hustlers say they are likely to go full-time. Here is the runway math before you resign, and the registration step if you do.',
    `<div class="container">

    <div class="hook">
        On BNN Bloomberg's October 8, 2026 report of Ownr and Ipsos research, <span class="highlight">nearly 1 in 5 side hustlers say they're likely to go full-time</span>. That is a mood with a sample behind it. It is not a reason to resign on a Tuesday. The resignation needs a runway.
    </div>

    <p>Ownr's Ipsos survey, conducted September 1 to 8, 2026, with 1,501 Canadians, found that 23 percent earn side income. The release is linked below. What the side income looks like for most people, in a different survey, is smaller than a salary: Omnisend found 53 percent of side hustlers earn $500 a month or less. The catalogue is <a href="/blog/best-side-hustles-canada/">best side hustles</a>. The filing if you scale it is <a href="/blog/side-hustle-taxes-canada/">side-hustle taxes</a>. Whether benefits shrink on the way is <a href="/blog/side-income-benefits-tax-clawbacks-canada/">clawbacks</a>.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>Use the exact finding: nearly 1 in 5 side hustlers say they're likely to go full-time. It describes intent. It does not describe income.</li>
            <li>Replace the paycheque on paper before you replace it in real life: months of expenses covered, and a monthly profit that survives the slow month.</li>
            <li>Quitting ends regular EI from that job. Self-employed EI special benefits are a different program, with a 12-month wait: <a href="/blog/ei-self-employed-canada/">EI for the self-employed</a>.</li>
            <li>Register the name when the invoices stop being your personal name: <a href="/blog/how-to-register-a-business-canada/">how to register</a>.</li>
        </ul>
    </div>

    <h2>Intent is not revenue</h2>

    <p>The Ownr release and the BNN interview are about how many people want the leap. Omnisend's separate report is about what the leap pays today for the people already doing the work on the side: more than half at or under $500 a month, and 91 percent under 20 hours a week. A side hustle at $500 a month does not replace a salary. It replaces a bill. Going full-time means the monthly profit, after expenses and after the tax you will remit, covers the household for a run of ordinary months, not for the best month you have had.</p>

    <h2>A runway you can write on one page</h2>

    <p>Write three numbers. Monthly costs you cannot pause: housing, food, insurance, debt payments, child care. Months of those costs you already hold in cash, not in a TFSA you needed as the emergency fund and not in an RRSP you would tax to withdraw. And the lowest monthly profit from the side hustle over the last six months, not the average and not the best. If the cash covers fewer months than it will take for that low month to become the normal month, you do not have a runway. You have a good story.</p>

    <p>The rate you will need once the salary is gone is <a href="/blog/consulting-rate-after-cpp-ei-tax-canada/">the freelance rate</a>, because both CPP shares and the empty weeks show up the month the T4 stops. The first customers beyond friends are <a href="/blog/first-10-clients-freelance-canada/">the first ten clients</a>. If the only client is the old employer, read <a href="/blog/employee-vs-contractor-canada/">employee versus contractor</a> before you call it a business.</p>

    <h2>What resigning turns off</h2>

    <p>A job's regular EI eligibility is attached to insurable hours as an employee. Leaving voluntarily is not a layoff. The self-employed special-benefit opt-in does not replace regular benefits, and it does not pay you for the year you wait. Benefits that test household income, including the Canada Child Benefit, can move when the side hustle grows. Run that test before the notice, using the clawback article. Do not discover it in July.</p>

    <h2>Frequently asked questions</h2>

    <h3>Is "nearly 1 in 5" the same as 23 percent?</h3>
    <p>No. The 23 percent figure, from the Ownr/Ipsos release, is the share of Canadians who earn side income. The "nearly 1 in 5" line, from BNN Bloomberg's coverage of that research, is the share of side hustlers who say they're likely to go full-time. Different denominators. Do not add them.</p>

    <h3>How many months of expenses do I need?</h3>
    <p>This page will not invent a universal number. Write your monthly costs and your worst recent month of profit. The gap between them, times the months you believe it takes to replace the salary, is your number. If you cannot write the months, you are not ready to resign.</p>

    <h3>Should I incorporate the week I quit?</h3>
    <p>Only if the incorporation test is already met. Most people who are scaling a side hustle need a trade name, a separate account, and a rate. The company can wait until there is profit you do not need to live on.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="https://www.bnnbloomberg.ca/business/economics/2026/10/08/necessity-and-opportunity-turning-a-side-hustle-into-a-small-business/">BNN Bloomberg, October 8, 2026</a></li>
        <li><a href="https://www.rbcx.com/news/press-releases/side-hustles-are-getting-serious-nearly-one-in-four-canadians-has-one-but-many-arent-taking-the-entrepreneurial-leap-ownr-data-reveals/">RBCx / Ownr Ipsos release</a></li>
        <li><a href="https://www.omnisend.com/side-hustles-report-2026">Omnisend side hustles report 2026</a></li>
    </ul>

    <h2>Related reading</h2>
    <ul>
        <li><a href="/blog/best-side-hustles-canada/">Best side hustles</a></li>
        <li><a href="/blog/consulting-rate-after-cpp-ei-tax-canada/">Freelance rate</a></li>
        <li><a href="/blog/ei-self-employed-canada/">EI for the self-employed</a></li>
        <li><a href="/blog/how-to-register-a-business-canada/">How to register a business</a></li>
    </ul>

    ${footer}

</div>`
  ),
  post(
    'first-10-clients-freelance-canada',
    'Getting Your First 10 Clients',
    'A practical sequence for the first ten paying clients in Canada: who already knows the work, what to charge, and when a favour becomes an invoice.',
    `<div class="container">

    <div class="hook">
        The first ten clients are not a brand exercise. <span class="highlight">They are ten people who pay an invoice for a defined piece of work.</span> Friends who say you are talented are not clients until the money moves.
    </div>

    <p>The price on that invoice is <a href="/blog/consulting-rate-after-cpp-ei-tax-canada/">the freelance rate</a>. If the only buyer is a former employer who still sets your hours, read <a href="/blog/employee-vs-contractor-canada/">employee versus contractor</a> before you celebrate. Registering the name can wait until the name on the invoice is not your own: <a href="/blog/how-to-register-a-business-canada/">how to register</a>. Raising the price once those ten exist is <a href="/blog/raising-prices-small-business-canada/">raising prices</a>.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>List 30 people who have seen you do the work. Ask 10 of them for a conversation, not for a favour disguised as a coffee.</li>
            <li>Sell a bounded offer: a deliverable, a date, and a price. "Pick my brain" is not an offer.</li>
            <li>Get paid on an invoice with a due date. A kind delay teaches the client that the due date is optional.</li>
            <li>Stop at ten paid engagements and write down who they were. The pattern is your next pitch. The absence of a pattern means the offer is fuzzy.</li>
        </ul>
    </div>

    <h2>Where the ten come from</h2>

    <p>Start with people who already trust the work: former colleagues, a past manager, a client from the job you still have if the contract allows it. A moonlighting clause can forbid that. Read it before you email the office. Then one circle out: people those ten can introduce, with a sentence you wrote for them so the introduction is easy. A public posting is a later channel. It is a slow way to get client number one.</p>

    <p>The message is short. What you do, who it is for, and one result. Then a question: "Do you know anyone who needs this in the next month?" Not "let me know if I can ever help." The first is a request. The second is a greeting card.</p>

    <h2>The offer they can say yes to</h2>

    <p>Write the first offer so a stranger could forward it. One outcome. One time box, often two to four weeks. One price, taken from the rate worksheet, not from what you think they can afford. A discount for the first three, if you use one, is a dated discount with the real price beside it. An open-ended "mates rates" becomes the only rate you have.</p>

    <p>Scope in writing. What is included, what is not, and what happens if they add a third round. The invoice goes when the milestone goes, not at the end of a vague relationship. If they want net 60 and you are on client number two, you are financing their business. Say so, and ask for a deposit.</p>

    <h2>After the invoice is paid</h2>

    <p>Ask what they would tell a peer, and ask for the introduction while the work is fresh. Keep a list: name, what they bought, what they paid, whether they came back. Ten rows is enough to see whether you have a service or a series of accidents. If every row is a different offer, you do not have a business yet. You have availability. Tighten the offer before you chase client eleven. The price increase, when the ten are real, is a separate conversation and a separate article.</p>

    <h2>Frequently asked questions</h2>

    <h3>Should I build a website first?</h3>
    <p>A page with the offer and a way to pay is enough. A brand project before client one is a way to avoid asking for the work. Ask first.</p>

    <h3>What if my employer forbids outside work?</h3>
    <p>Then the first client cannot be a secret from that contract. Conflict, confidentiality, and who owns the work product are employment terms. Read them. A side practice that uses the employer's clients or the employer's time is how people get fired and then litigated.</p>

    <h3>Do I charge GST/HST on client one?</h3>
    <p>Not automatically. The small-supplier tests are in the side-hustle tax article. Charging tax before you are registered, and not charging it after you must, are both mistakes. The rate article keeps the tax off the "what I earned" line either way.</p>

    <h2>Related reading</h2>
    <ul>
        <li><a href="/blog/consulting-rate-after-cpp-ei-tax-canada/">How to set your freelance rate</a></li>
        <li><a href="/blog/raising-prices-small-business-canada/">Raising prices without losing clients</a></li>
        <li><a href="/blog/employee-vs-contractor-canada/">Employee versus contractor</a></li>
        <li><a href="/blog/side-hustle-to-full-time-canada/">Side hustle to full-time</a></li>
    </ul>

    ${footer}

</div>`
  ),
  post(
    'ei-self-employed-canada',
    'EI for the Self-Employed: Worth $1.63 per $100?',
    'Self-employed EI in 2026 costs $1.63 per $100 of earnings, up to $1,123.07. You need $9,254 of net earnings in 2025, a 12-month wait, and you cannot leave after a claim.',
    `<div class="container">

    <div class="hook">
        Self-employed EI is not the benefit you had as an employee. It is an opt-in for special benefits, priced at <span class="highlight">$1.63 per $100</span> outside Quebec, up to <span class="highlight">$1,123.07 in 2026</span>. After you are paid a claim, you cannot opt out for as long as you stay self-employed.
    </div>

    <p>Regular benefits if you are laid off from a job are <a href="/blog/employment-insurance-benefits-canada/">the EI guide</a>. This page is the self-employed agreement. The premium comes off the rate you charge: <a href="/blog/consulting-rate-after-cpp-ei-tax-canada/">how to set a freelance rate</a>. It does not replace an emergency fund, and it does not pay you because a client disappeared.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>Outside Quebec you pay $1.63 per $100 of self-employed earnings, to a maximum of $1,123.07 in 2026. In Quebec the premium is $1.30 per $100, to a maximum of $895.70 in 2026, because Quebec runs its own parental plan.</li>
            <li>You pay the employee rate, not the employer rate. Premiums go on the tax return, on Schedule 13.</li>
            <li>To qualify for benefits in 2026 you need at least $9,254 of net self-employed earnings in 2025, and the agreement has to have been in place for at least 12 months.</li>
            <li>You must have reduced the time spent on the business by more than 40 percent for at least one week, and you enter the agreement only if you are a Canadian citizen or permanent resident who owns the business or controls more than 40 percent of the voting shares.</li>
            <li>Once you have received benefits, you keep paying for the rest of your self-employment. You cannot withdraw.</li>
        </ul>
    </div>

    <h2>What you are buying</h2>

    <p>Service Canada's premiums page states the $1.63 and the $1,123.07 cap for 2026, and the Quebec figures beside them. The actuarial summary says self-employed people who opt in pay the employee rate and do not pay the employer portion. The benefits are the special benefits: maternity, parental, sickness, compassionate care, and family caregiver. They are not regular benefits for a slow season. If a client ends a contract, this program does not replace that invoice.</p>

    <h2>The two gates people miss</h2>

    <p>The eligibility page says the agreement must be active for at least 12 months before you can receive benefits, and that a claim in 2026 needs at least $9,254 of net self-employed earnings between January 1 and December 31, 2025. Registering in the month you need the benefit is a year late. Net earnings are self-employment income minus losses, on the tax rules, not the deposits in the bank. A year of revenue with no profit can miss the $9,254 even if the business looked busy.</p>

    <p>You also have to show the time on the business dropped by more than 40 percent for at least a week because of the reason you are claiming. Keep a record of hours before you need it. A feeling that you worked less is not the test.</p>

    <h2>A break-even that uses only the premium</h2>

    <p>The most you pay outside Quebec in 2026 is $1,123.07. If you never claim, that maximum is the cost of holding the option, and a smaller earning year costs $1.63 per $100 until you hit the cap. One special-benefit claim that replaces income you would otherwise lose can be worth several years of that premium. The claim amount is on Canada.ca for the benefit you would actually use. Divide that confirmed amount by $1,123.07 and you have the number of maximum-premium years one claim covers. This page does not print a weekly benefit, because that figure was not the one verified here.</p>

    <p>The lock-in is the rest of the math. The premiums page says that once you have received benefits, you continue paying for the duration of your self-employment and cannot withdraw. Opt in when a maternity, parental, sickness, or caregiving claim is a real possibility in the next several years, and you can wait 12 months. Skip it when you are buying regular-EI peace of mind. This program does not sell that.</p>

    <h2>Frequently asked questions</h2>

    <h3>Does this cover me if I have no clients for a month?</h3>
    <p>No. Loss of business is not a special benefit. Sickness, a birth, or caregiving can be, if you registered a year ahead, earned enough last year, and cut your hours by more than 40 percent.</p>

    <h3>I live in Quebec. Which rate?</h3>
    <p>$1.30 per $100, maximum $895.70 in 2026, on the same Service Canada premiums page. The lower premium exists because maternity, paternity, parental, and adoption benefits for Quebec residents run through the Québec Parental Insurance Plan. Confirm which program pays the benefit you think you are buying.</p>

    <h3>Can I opt out later?</h3>
    <p>Before a claim, the agreement can be ended on the terms Service Canada sets. After you have been paid benefits, the premiums page says you cannot withdraw while you remain self-employed. Read that sentence before you register, not after the deposit.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="https://www.canada.ca/en/services/benefits/ei/ei-self-employed-workers/premiums.html">Service Canada: EI premiums for self-employed people</a></li>
        <li><a href="https://www.canada.ca/en/services/benefits/ei/ei-self-employed-workers/eligibility.html">Service Canada: who can qualify</a></li>
        <li><a href="https://www.canada.ca/en/employment-social-development/programs/ei/ei-list/reports/premium/rates2026.html">2026 EI premium rate summary</a></li>
    </ul>

    <h2>Related reading</h2>
    <ul>
        <li><a href="/blog/employment-insurance-benefits-canada/">Employment insurance for employees</a></li>
        <li><a href="/blog/consulting-rate-after-cpp-ei-tax-canada/">How to set a freelance rate</a></li>
        <li><a href="/blog/side-hustle-to-full-time-canada/">Side hustle to full-time</a></li>
    </ul>

    ${footer}

</div>`
  ),
  post(
    'raising-prices-small-business-canada',
    'Raising Prices Without Losing Clients',
    'A script and the arithmetic for a price increase: tell current clients the date, keep the old price off new proposals, and measure what you keep.',
    `<div class="container">

    <div class="hook">
        A price increase is a sentence with a date, not an apology. <span class="highlight">New clients hear the new price immediately. Current clients hear it with notice.</span> The ones who leave were often the ones the old price was subsidising.
    </div>

    <p>The number you are raising from should already be a real rate, not a salary divided by 2,000. If it is not, fix the floor first: <a href="/blog/consulting-rate-after-cpp-ei-tax-canada/">how to set a freelance rate</a>. The clients you are afraid of losing are <a href="/blog/first-10-clients-freelance-canada/">the first ten</a>, and some of them were priced as a favour. This page is the second conversation.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>Raise new work first. A proposal at the old price after you have decided to raise is how the old price survives another year.</li>
            <li>Give current clients a date, the new price, and one sentence on what they are buying. Do not narrate your rent.</li>
            <li>Do the arithmetic on profit, not on feelings. Losing a client who consumed the margin can raise what you keep.</li>
            <li>A one-time discount to keep someone is a new price. Write the end date or do not offer it.</li>
        </ul>
    </div>

    <h2>The arithmetic, labelled as a method</h2>

    <p>Suppose, as an illustration and not as a market study, that a client pays $4,000 a month and the time costs you $3,200 of the hours you could have sold, so the margin is $800. A 15 percent increase makes the invoice $4,600. If they stay, the extra $600 is almost all margin, because the hours did not change. If they leave, you lose the $800 and you get the hours back to sell. You are not ahead until those hours are sold. You are also not automatically behind. Write your own two numbers: margin if they stay at the new price, and hours returned if they leave. The feeling that every client is irreplaceable is how prices freeze.</p>

    <p>Do not borrow a percentage from a survey this page does not have. Fifteen percent in the illustration is a teaching number. Your increase is the gap between the rate worksheet and what the current invoice says.</p>

    <h2>The script</h2>

    <p>"Starting on the first of next month, this engagement moves from $A to $B. The work stays the same: the deliverable we already scoped. I will invoice the new amount on the May cycle. If you want to stop at the end of April, tell me by the 15th and I will close the file cleanly."</p>

    <p>That is the whole message. No essay about inflation. No apology for the original price. If they negotiate, you can trade scope, not dignity: fewer rounds, a longer cycle, or an annual prepay at a price you still like. You cannot trade your way back to a number that does not cover CPP and the empty weeks. Those are in the rate, and the rate is the floor under B.</p>

    <h2>Who hears it, and when</h2>

    <p>New inquiries hear B today. Current clients hear it with enough notice to finish a cycle, usually one billing period. Do not raise the price in the middle of a fixed quote you already signed. Do raise it when that quote ends. A client on a handshake has had the handshake. The email is how it becomes a price.</p>

    <p>If several clients leave and the hours do not resell, the offer is the problem, not the courage. Go back to the first-ten list and see what people actually bought. Then price that, instead of a vague retainer nobody can describe.</p>

    <h2>Frequently asked questions</h2>

    <h3>What if my biggest client says no?</h3>
    <p>Then you have a choice with a date on it. Keep them at the old price for a defined period while you replace the margin, or let them go. An indefinite exception becomes the business. One named exception with an end date is a transition.</p>

    <h3>Should I raise a little every year or a lot once?</h3>
    <p>Either can work. A small annual increase that still leaves you under the rate worksheet is a delay. A single correction to the worksheet number, with notice, is cleaner if you are far below it. Do the worksheet before you pick the style.</p>

    <h3>Do I tell them my costs went up?</h3>
    <p>You can say the price now matches the work. You do not owe them a tour of your CPP or your rent. Cost stories invite a debate you will not win. The date and the number do not.</p>

    <h2>Related reading</h2>
    <ul>
        <li><a href="/blog/consulting-rate-after-cpp-ei-tax-canada/">How to set your freelance rate</a></li>
        <li><a href="/blog/first-10-clients-freelance-canada/">Getting your first 10 clients</a></li>
        <li><a href="/blog/how-to-earn-more-money-canada/">How to earn more money in Canada</a></li>
    </ul>

    ${footer}

</div>`
  ),
];
