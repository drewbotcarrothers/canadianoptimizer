import { barChart, flowChart } from '../../lib/earn-visuals';
import { cta, directAnswer, howto, readNext, sources, takeaways, toc } from './chrome';

const footer = `<div class="article-footer">
        <p><strong>Disclaimer:</strong> This is general education about self-employment and small business in Canada as of October 2026. It is not tax, legal, or business advice. Fees and eligibility rules change. Figures below are taken from the government or survey page linked beside them. Illustrations that are not cited are a method, not a quote. Confirm the registry, CRA, and Service Canada pages before you pay a fee or opt into a program.</p>
        <div class="footer-note">Published: October 15, 2026 | Updated: October 16, 2026 | Category: Earning More | Author: Andrew</div>
    </div>`;

export const fullTimeContent = `<div class="container">

    <div class="hook">
        Going from a side hustle to full-time feels like a personality change. It is a cash question. <span class="highlight">Nearly one in five side hustlers tell researchers they are likely to go full-time, and most side hustles still pay $500 a month or less.</span> The payoff is a runway number you can write on one page before you resign.
    </div>

    ${directAnswer('Leave the job when the side hustle covers your spending for a runway you have already saved, after both shares of CPP and after the benefits the job was buying. Ownr and Ipsos found nearly one in five Canadian side hustlers say they are likely to go full-time. Most side hustles still pay $500 a month or less.')}

    ${takeaways([
      'Omnisend’s 2026 Cint survey of 1,029 people in Canada: 31 percent have a side hustle, 53 percent of them earn $500 a month or less, and 91 percent work under 20 hours a week.',
      'Ownr and Ipsos, September 2026, n=1,501: 23 percent of Canadians earn side income. BNN Bloomberg’s October 8, 2026 report of that research said nearly 1 in 5 side hustlers are likely to go full-time.',
      'Self-employed CPP in 2026 is up to $8,460.90, plus up to $832 of CPP2. Your employer was paying half of base CPP. You will pay both.',
      'Quitting usually does not open regular EI. The self-employed EI program is special benefits only, after 12 months, and it is optional. Read <a href="/blog/ei-self-employed-canada/">EI for the self-employed</a> before you opt in on the way out the door.',
      'The GST/HST small-supplier line is $30,000 of taxable supplies, not profit. A “full-time” launch can cross it in a quarter.',
    ])}

    ${toc([
      { id: 'intent', label: 'Why is intent not a business?' },
      { id: 'runway', label: 'How many months of cash do you need?' },
      { id: 'replace', label: 'What does the job still pay for?' },
      { id: 'resign', label: 'What do you turn off when you resign?' },
      { id: 'decide', label: 'When do you stay, go, or wait one quarter?' },
      { id: 'faq', label: 'Frequently asked questions' },
    ])}

    <h2 id="intent">Why do so many people plan a leap the revenue does not support?</h2>
    <p>The surveys are measuring different things, and both can be true. Omnisend asked about having a side hustle and found <strong>31 percent</strong>. Inside that group, <strong>85 percent</strong> said they do it for the money, <strong>53 percent</strong> earn $500 a month or less, and <strong>91 percent</strong> spend under 20 hours a week. Ownr and Ipsos asked a different sample whether they earn side income and found <strong>23 percent</strong>. BNN Bloomberg, reporting that research on October 8, 2026, said nearly one in five side hustlers are likely to go full-time.</p>
    <p>Put those beside each other before you quit. A plan to go full-time is common. A side hustle that replaces a salary is not what the earnings question found. The roundup of shapes that fit the hours is <a href="/blog/best-side-hustles-canada/">best side hustles</a>.</p>

    ${barChart({
      title: 'What the side-hustle surveys actually measured',
      aria: 'Bars for Omnisend 31 percent have a side hustle, 53 percent of them earn 500 dollars or less a month, and Ownr Ipsos 23 percent earn side income.',
      caption: 'Omnisend, Cint, March 2026, n=1,029 in Canada. The 53 percent is a share of people who have a side hustle, not of all Canadians. Ownr and Ipsos, September 1 to 8, 2026, n=1,501. Do not add the bars together.',
      rows: [
        { label: 'Have one (Omnisend)', pct: 31, text: '31%' },
        { label: 'Earn ≤ $500/mo', pct: 53, text: '53%' },
        { label: 'Side income (Ipsos)', pct: 23, text: '23%' },
      ],
    })}

    <h2 id="runway">How do you calculate a runway that is not a vibe?</h2>
    <p>Write three numbers from your own life. This page will not invent your rent. The arithmetic is the method.</p>
    <div class="example-box">
        <strong>Example, not your budget.</strong>
        <p>Suppose spending you cannot cut quickly is $4,000 a month, and you want six months where the business can earn nothing. Cash to set aside before you resign: 6 × $4,000 = <strong>$24,000</strong>. That pile is not an investment account you might need for a downturn in stocks. It is a bill-paying account.</p>
        <p>Suppose the side hustle has cleared $2,000 a month for four months, after costs, before tax. That is not $2,000 of salary. Self-employed CPP still comes out. If that profit is under the ceilings, a rough CPP cost is 11.90 percent of pensionable self-employment earnings after the $3,500 exemption, up to $8,460.90. On a year of $24,000 net, contributory earnings are $24,000 − $3,500 = $20,500, and 11.90 percent is <strong>$2,439.50</strong>. Monthly, that is about $203. You still owe income tax. The calculator is the way to see the tax. Do not use a flat 25 percent you found in a thread.</p>
        <div class="example-calculation">
            <div class="line"><span>Six months of example spending</span><span>$24,000</span></div>
            <div class="line"><span>CPP on a $24,000 example year</span><span>$2,439.50</span></div>
            <div class="line total"><span>Cash plus one year of that CPP</span><span>$26,439.50</span></div>
        </div>
        <p>If the business earns the $2,000 during those six months, the runway lasts longer. If it earns zero, $24,000 is the spending clock. Plan the zero case. Hope is not a line on the page.</p>
    </div>
    <p>A second-order effect: money you pull from an RRSP to build runway is taxable and you lose the room. A TFSA withdrawal is not taxed and the room comes back next year. Which account you raid is an investing decision. The earning decision is whether the business can replace the paycheque without the raid.</p>

    <h2 id="replace">What does the job still pay that the hustle does not?</h2>
    <p>List the benefits the employer was buying. Health premiums, disability insurance, a pension or RRSP match, and the employer half of CPP. In 2026 the employer CPP maximum is <strong>$4,230.45</strong>, and the employer CPP2 maximum is <strong>$416</strong>. You do not “save” that by leaving. You pay both halves yourself, up to the self-employed maximums of $8,460.90 and $832.</p>
    <p>Price disability before you resign if anyone depends on your income. A job’s long-term disability plan is easy to ignore until it is gone. Replacing it is an insurance purchase, not a sentence in a resignation letter. This page does not quote a premium.</p>
    <div class="warning-box"><strong>Watch out.</strong> A side hustle that pays $500 a month does not become a salary because you gave it your weekdays. Omnisend’s hours finding is that 91 percent of side hustlers stay under 20 hours. Going full-time means those hours have to grow, or the rate has to. Raising the rate is <a href="/blog/raising-prices-small-business-canada/">raising prices</a>. Finding the people who pay it is <a href="/blog/first-10-clients-freelance-canada/">the first ten clients</a>.</div>

    <h2 id="resign">What do you turn off when you resign?</h2>
    <p>Regular Employment Insurance is for people who lose insurable employment in a way the Act covers. Quitting to work for yourself is often not that. Confirm with Service Canada before you give notice. Do not plan the first three months on a benefit you have not been told you can receive.</p>
    <p>The self-employed EI program is a different product. You opt in, you pay <strong>$1.63 per $100</strong> outside Quebec up to <strong>$1,123.07</strong> in 2026, and you wait <strong>12 months</strong> before you can claim. The benefits are special benefits, such as sickness and parental, not a cheque because a client went quiet. Once you have received benefits, you generally cannot leave the program while you remain self-employed. Opt in only if that trade is one you want. The full break-even is the EI article.</p>
    <p>GST/HST can turn on in the same season. If the full-time push takes taxable supplies through <strong>$30,000</strong> in a quarter, you charge tax on the supply that crosses the line. A launch discount that ignores tax is how you eat the 13 percent Ontario HST yourself. Registration of the business name is optional until you need it. The tax account is not. <a href="/blog/how-to-register-a-business-canada/">How to register</a> is the filing. <a href="/blog/side-hustle-taxes-canada/">Side-hustle taxes</a> is the return.</p>
    <p>Benefits that depend on family income can shrink when the business shows a profit, even if cash is still tight. That interaction is <a href="/blog/side-income-benefits-tax-clawbacks-canada/">clawbacks</a>. A higher gross that reduces the Canada Child Benefit is still a higher gross. Price it so you are not surprised in July.</p>

    <h2 id="decide">When do you stay, go, or wait one more quarter?</h2>
    <p><strong>Go</strong> if the runway cash is in the bill-paying account, the last four months of profit cover spending after a realistic CPP and tax set-aside, and the clients are not one person who could stop emailing. <strong>Wait one quarter</strong> if profit is real but lumpy, or if you have not yet replaced health coverage. <strong>Stay employed</strong> if the hustle is still in the $500 month that describes half of Omnisend’s sample. Use the job to fund the runway. Do not use the resignation to motivate the hustle.</p>
    ${flowChart({
      aria: 'Decision flow for leaving a job: savings for a zero-revenue case, profit that covers spending, more than one client, then resign. Otherwise wait.',
      caption: 'A single client who provides most of the side income is an employment risk wearing an invoice. Read the contractor test before you call it a business.',
      nodes: [
        { title: 'Is the zero-revenue runway saved?', kind: 'decision' },
        { title: 'Does profit cover spending after CPP and tax?', kind: 'decision' },
        { title: 'More than one client?', kind: 'option', text: 'One client is a job you have not admitted.' },
        { title: 'Resign, or wait a quarter', kind: 'result' },
      ],
    })}
    <p>If the “client” sets your hours, you may still be an employee. Leaving a payroll to invoice the same boss is not a side hustle. It is <a href="/blog/employee-vs-contractor-canada/">employee versus contractor</a>. The rate that replaces the salary, once the status is real, is <a href="/blog/consulting-rate-after-cpp-ei-tax-canada/">the freelance rate</a>.</p>

    <h2 id="faq">Frequently asked questions</h2>
    <h3>How much should a side hustle earn before I quit?</h3>
    <p>Enough that a bad quarter does not bounce a bill, and enough that four recent months were not a fluke. The example on this page uses $4,000 of spending and $24,000 of cash for six quiet months. Replace those with your numbers. A national average will not pay your landlord.</p>
    <h3>Is nearly one in five a forecast for me?</h3>
    <p>No. It is a share of side hustlers in the Ownr and Ipsos research, as reported by BNN Bloomberg on October 8, 2026, who say they are likely to go full-time. Likelihood is not revenue. Omnisend’s earnings finding is the sober one.</p>
    <h3>Do I get EI if I quit to freelance?</h3>
    <p>Do not assume yes. Regular EI has rules about why the job ended. The self-employed program does not pay you for a slow sales month, and it will not pay anything until the agreement has been in place for 12 months. Call Service Canada before you give notice.</p>
    <h3>What about CPP if I leave a salary?</h3>
    <p>You pay both shares. The 2026 self-employed maximum is $8,460.90, and CPP2 can add up to $832. Under the ceiling, use 11.90 percent of pensionable earnings after the $3,500 exemption. The employer half does not follow you.</p>
    <h3>Should I incorporate the week I resign?</h3>
    <p>Only if you already needed a corporation. Resignation does not create that need. A sole prop can send the invoices. The incorporate decision is a separate article, and the registry fees are in the registration guide.</p>
    <h3>How do benefits clawbacks change the math?</h3>
    <p>A profit that shows up on your return can reduce income-tested benefits. The cash in the business account is not the same as the family net. Read the clawback guide and put the approximate reduction next to the runway. If you skip it, July is when the surprise arrives.</p>
    <h3>What if my employer forbids the side hustle?</h3>
    <p>Read the contract before you scale it, and before you resign in a fight about it. A conflict or IP clause can follow you out. This page is not a reading of your contract. If the clause is unclear, ask an employment lawyer before you bet the runway on it.</p>
    <h3>How long should I keep the job while I test the rate?</h3>
    <p>At least long enough to see four months that were not one lucky project, and long enough to save the zero-revenue case. Ninety days of effort is a test of the offer. It is not a test of a year of rent.</p>

    ${sources([
      '<a href="https://www.omnisend.com/side-hustles-report-2026">Omnisend: side hustles report 2026</a>',
      '<a href="https://www.rbcx.com/news/press-releases/side-hustles-are-getting-serious-nearly-one-in-four-canadians-has-one-but-many-arent-taking-the-entrepreneurial-leap-ownr-data-reveals/">RBCx / Ownr: Ipsos side-hustle release</a>',
      '<a href="https://www.bnnbloomberg.ca/business/economics/2026/10/08/necessity-and-opportunity-turning-a-side-hustle-into-a-small-business/">BNN Bloomberg, October 8, 2026</a>',
      '<a href="https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/payroll/payroll-deductions-contributions/canada-pension-plan-cpp/cpp-contribution-rates-maximums-exemptions.html">CRA: CPP rates and self-employed maximums, 2026</a>',
      '<a href="https://www.canada.ca/en/services/benefits/ei/ei-self-employed-workers/premiums.html">Canada.ca: EI premiums for self-employed people</a>',
      '<a href="https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/gst-hst-businesses/when-register-charge.html">CRA: GST/HST $30,000 small-supplier threshold</a>',
    ])}

    ${readNext([
      '<a href="/blog/consulting-rate-after-cpp-ei-tax-canada/">The rate that has to replace the salary</a>',
      '<a href="/blog/ei-self-employed-canada/">Whether self-employed EI is worth opting into</a>',
      '<a href="/blog/best-side-hustles-canada/">What side hustles actually earn</a>',
      '<a href="/blog/side-income-benefits-tax-clawbacks-canada/">What extra income does to benefits</a>',
    ])}

    ${cta('Next step: put a sample year of profit into the income tax calculator before you resign, then set that tax aside. The 2026 tax guide walks through the personal return a sole prop still files.')}

    ${footer}
</div>`;

export const clientsContent = `<div class="container">

    <div class="hook">
        The first ten clients are not a brand exercise. They are ten conversations that end in a paid invoice. <span class="highlight">If you cannot name the ten people you will ask this month, you do not have a pipeline.</span> The payoff is a list, a one-page offer, and a rate sentence you can say without apologizing.
    </div>

    ${directAnswer('Get your first ten freelance clients in Canada by making a named list, offering one scoped result, and quoting a rate that already includes unpaid time and both shares of CPP. Most early clients come from people who already know your work. A new logo does not replace that list.')}

    ${takeaways([
      'Write ten names before you write a website. Former colleagues, past clients, and people who have already asked you for the work count. Strangers are later.',
      'Quote a price for a result, not an open-ended “I charge hourly, thoughts?” The rate math is <a href="/blog/consulting-rate-after-cpp-ei-tax-canada/">how to set a freelance rate</a>.',
      'A client who wants you on their tools, on their hours, with no substitute, may be hiring an employee. The test is <a href="/blog/employee-vs-contractor-canada/">employee versus contractor</a>.',
      'GST/HST starts at $30,000 of taxable supplies. Your first invoices may be under it. Track the total anyway.',
      'The tenth client is a system. The first is a message you were willing to send.',
    ])}

    ${toc([
      { id: 'where', label: 'Where do the ten clients come from?' },
      { id: 'offer', label: 'What offer can they say yes to?' },
      { id: 'quote', label: 'How do you quote the rate?' },
      { id: 'pipeline', label: 'What does a simple pipeline look like?' },
      { id: 'after', label: 'What do you do after they pay?' },
      { id: 'week', label: 'What does one week of asking look like?' },
      { id: 'faq', label: 'Frequently asked questions' },
    ])}

    <h2 id="where">Where do the first ten clients actually come from?</h2>
    <p>From a list you can name. The useful order is people who have seen the work, people who owe you a reply, and people who serve the same buyer and do not do what you do. Cold posts are a fourth source. They are not the first.</p>
    <div class="table-wrapper">
    <table>
        <caption>A first-ten source list. The counts are a planning target, not a survey.</caption>
        <thead><tr><th>Source</th><th>Example target</th><th>Why it converts</th><th>The limit</th></tr></thead>
        <tbody>
            <tr><td>Former employer or colleagues</td><td>3 conversations</td><td>They know the quality.</td><td>Your contract may restrict soliciting their clients. Read it.</td></tr>
            <tr><td>People who already asked for help</td><td>3 conversations</td><td>The need is not theoretical.</td><td>A favour is not a rate. Quote the rate.</td></tr>
            <tr><td>Adjacent professionals</td><td>2 conversations</td><td>They have the buyer and a gap.</td><td>A referral fee has to be disclosed if it would surprise the client.</td></tr>
            <tr><td>A public proof piece</td><td>2 conversations</td><td>Strangers can see a result.</td><td>Slow. Do it after the list, not instead of it.</td></tr>
        </tbody>
    </table>
    </div>
    <p>Tools: a spreadsheet, email, and a calendar. A CRM is optional at ten people. The pro of a simple sheet is that you can see who has gone quiet. The con of a paid CRM in month one is that you configure software instead of sending the note. Job Bank will not find you clients. LinkedIn will, only if you write to a named person. Posting into the void is not a message.</p>

    <h2 id="offer">What should the offer say so they can say yes?</h2>
    <p>One result, one price, one date. “Marketing help” is not an offer. “A homepage rewrite delivered in two weeks for $1,800” is an offer. The number in that sentence is an example, not a Canadian going rate. Your number comes from the rate page, using your salary target and your billable hours.</p>
    ${howto('How to land the first ten freelance clients', [
      { name: 'Write the ten names', text: 'If you cannot reach ten, write the five you can and the reason each one has a problem you can finish.' },
      { name: 'Define one scoped result', text: 'What they receive, what they must provide, and what is not included. Scope is how you avoid working the eleventh hour for free.' },
      { name: 'Send a short note', text: 'Use the script. Ask for a 20-minute call or a yes on the scoped offer. Do not attach a twelve-page deck.' },
      { name: 'Quote, then stop', text: 'Say the price and the date. Silence is not a cue to discount.' },
      { name: 'Invoice a deposit if the work is custom', text: 'A started project with no deposit is a favour. Half to start is a common practice, not a law. Use what you will enforce.' },
      { name: 'Ask for the next introduction when you deliver', text: 'The tenth client is usually a referral from client three. Ask while the result is fresh.' },
    ])}
    <div class="script-box">
        <p><strong>The note.</strong> “I am taking on [result] for [kind of client]. You mentioned [problem]. I can deliver [specific thing] by [date] for [$price], provided you send [their input] by [date]. Want me to hold a start date?”</p>
        <p><strong>The rate, if they ask hourly.</strong> “The project is [$price] because it is about [hours] of focused work at my rate of [$hourly], which covers the weeks I cannot bill. I do not quote an open hourly with no cap.”</p>
        <p><strong>The employee trap.</strong> “If you need someone on your tools from 9 to 5 who cannot send a substitute, that is employment. I can refer you to a hire, or we can keep this as a scoped project.”</p>
    </div>

    <h2 id="quote">How do you keep the quote from being too cheap?</h2>
    <p>An hourly that matches your old salary’s hourly, with no load for unpaid time, is a pay cut. Here is the method, labelled as one. Suppose you want <strong>$80,000</strong> before income tax, you can bill <strong>25 hours a week</strong> for <strong>46 weeks</strong>, and you will pay self-employed CPP.</p>
    <div class="example-calculation">
        <div class="line"><span>Example billable hours</span><span>25 × 46 = 1,150</span></div>
        <div class="line"><span>Target before tax</span><span>$80,000</span></div>
        <div class="line"><span>Add self-employed CPP at the 2026 maximum, if you will hit it</span><span>$8,460.90</span></div>
        <div class="line"><span>Amount the hours must produce</span><span>$88,460.90</span></div>
        <div class="line total"><span>Example hourly</span><span>$88,460.90 ÷ 1,150 = $76.92</span></div>
    </div>
    <p>Round it. A $1,800 project at that example rate is about 23 hours. If the work is 40 hours, the price is wrong. CPP2 can add up to $832 more if earnings sit between $74,600 and $85,000. Benefits you must now buy yourself are extra and are not in the $76.92. This is why a salary and a freelance rate are not the same hourly. The full version, including EI if you opt in, is the rate article.</p>
    <div class="tip-box"><strong>Pro tip.</strong> Put GST/HST on a second line only if you are registered. Under the $30,000 small-supplier threshold you generally do not charge it. Track taxable supplies so the invoice that crosses the line is the one that starts the tax, not the one after.</div>

    <h2 id="pipeline">What does the pipeline look like on one page?</h2>
    <p>Four columns: name, date you asked, next step, dollars if they say yes. Review it every Friday. A name with no next step is a wish.</p>
    ${flowChart({
      aria: 'Pipeline from a named list, to a scoped offer, to a paid deposit, to a referral ask.',
      caption: 'Ten clients is ten times through this loop, not ten logos on a website.',
      nodes: [
        { title: 'Named person', kind: 'decision', text: 'Someone who can say yes.' },
        { title: 'Scoped offer and a date', text: 'One result, one price.' },
        { title: 'Deposit or a declined', kind: 'option', text: 'Both are answers. Silence gets one follow-up.' },
        { title: 'Deliver, then ask who else', kind: 'result' },
      ],
    })}
    <p>Follow up once, on a date you put in the sheet. A second follow-up is optional. A fifth is how you become someone they avoid. If the work needs a contract, a one-page statement of work is enough at this size: result, price, date, who owns the files, and how either of you can stop. A 20-page template you downloaded is not more protective if you will not read it.</p>

    <h2 id="after">What changes after the invoice is paid?</h2>
    <p>You have a data point. Write what the work took, what you will not include next time, and who they might introduce. Raising the price for client eleven is normal. Doing it in the middle of a fixed project is not. The script for a later increase is <a href="/blog/raising-prices-small-business-canada/">raising prices</a>.</p>
    <p>Register the business name when a client’s accounts payable needs a name that is not yours, or when you are ready for the chores. The fees are small next to a bad rate. <a href="/blog/how-to-register-a-business-canada/">Registration</a> does not find client four. Keep the list bigger than the paperwork.</p>
    <p>If a platform will pay you, marketplace rules and reporting are a different path: <a href="/blog/platform-reporting-rules-canada/">platform reporting</a>. Service clients who pay you directly are still your T2125. The return is <a href="/blog/side-hustle-taxes-canada/">side-hustle taxes</a>.</p>

    <h2 id="week">What does one week of asking look like?</h2>
    <p>Ten clients is a quarter of work, not an afternoon. A week you can repeat has a number of asks, one follow-up, and a written no. It does not have a new logo.</p>
    <div class="table-wrapper">
    <table>
        <caption>One week of client acquisition. The counts are a plan, not a benchmark.</caption>
        <thead><tr><th>Day</th><th>The action</th><th>Done when</th></tr></thead>
        <tbody>
            <tr><td>Monday</td><td>Add five names who have seen the work</td><td>Each name has a next step</td></tr>
            <tr><td>Tuesday</td><td>Send three scoped notes from the script above</td><td>The sheet has a follow-up date</td></tr>
            <tr><td>Wednesday</td><td>Send two more, or rewrite a note that was vague</td><td>Every open note names a result and a price</td></tr>
            <tr><td>Thursday</td><td>One follow-up on last week’s silence</td><td>You stopped at one</td></tr>
            <tr><td>Friday</td><td>Move anyone without a next step off the active list</td><td>The pipeline matches reality</td></tr>
        </tbody>
    </table>
    </div>
    <p>After four of those weeks you will have sent about twenty specific notes. This page will not invent a close rate for them. If none became a paid deposit, the list is too distant or the offer is too vague. Change one of those. Do not add a fifth week of the same note.</p>
    <p><strong>Do this if</strong> you can name twenty people. <strong>Do the other thing if</strong> you cannot: spend the month on one public result you can show, then start the list from people who saw it. A website without the list is the slower path. The rate on the note is still the $76.92 method if your numbers match the example, not a discount to make Tuesday easier.</p>
    <div class="example-box"><strong>Example.</strong> Twenty notes and two deposits of $1,800 is $3,600 of booked work. That is not ten clients. It is proof the sentence works. Client three is the same sentence to the next name, not a rebrand.</div>
    <p>When a yes arrives, invoice before you expand the scope. The registration, the GST/HST watch, and the later price increase can wait until the money is real. They are linked above. They are not this week’s job.</p>

    <h2 id="faq">Frequently asked questions</h2>
    <h3>How long does it take to get ten clients?</h3>
    <p>This page will not invent a national average. If you send ten specific notes this month, you will know more in 30 days than a content calendar would tell you. Some will be no. A no is data. Silence is a follow-up.</p>
    <h3>Should I discount the first three?</h3>
    <p>Only if the discount buys a public result you can show, and you put an end date on it. A permanent “friends and family” rate becomes your rate. Quote the real number and offer a smaller scope instead.</p>
    <h3>Do I need a website first?</h3>
    <p>No. You need a way to describe the result in one paragraph and a way to get paid. A page helps stranger number nine. It does not help colleague number one, who already knows you.</p>
    <h3>What if they want a monthly retainer immediately?</h3>
    <p>Price the month as a capped number of hours or a listed set of results. An uncapped “be on call” retainer is employment without the benefits. The rate page is how you turn the month into a number.</p>
    <h3>Should I incorporate to look more credible?</h3>
    <p>Credibility that depends on “Inc.” is weak. Incorporate for liability, shares, or a tax reason you can explain. The decision is <a href="/blog/should-you-incorporate/">should you incorporate</a>.</p>
    <h3>How do I ask for a testimonial without being awkward?</h3>
    <p>Ask for a sentence about the result, not about your personality. “Would you send me two sentences on what changed after the homepage shipped?” Offer to draft it from the facts so they only have to edit.</p>
    <h3>What if my old employer says I cannot take clients?</h3>
    <p>Read the clause. Non-solicits are often limited in time and to people you actually worked with. Do not guess. If the first three names on your list are their clients, get advice before you send the note.</p>
    <h3>When do I charge GST/HST?</h3>
    <p>When you are registered. Registration is required once you are no longer a small supplier at the $30,000 threshold, and it is optional before that. Do not put a tax number you do not have on an invoice.</p>

    ${sources([
      '<a href="https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/payroll/payroll-deductions-contributions/canada-pension-plan-cpp/cpp-contribution-rates-maximums-exemptions.html">CRA: 2026 self-employed CPP maximum $8,460.90</a>',
      '<a href="https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/gst-hst-businesses/when-register-charge.html">CRA: when to register for GST/HST</a>',
    ])}

    ${readNext([
      '<a href="/blog/consulting-rate-after-cpp-ei-tax-canada/">How to set the hourly before you quote</a>',
      '<a href="/blog/raising-prices-small-business-canada/">How to raise the price after client three</a>',
      '<a href="/blog/employee-vs-contractor-canada/">When the “client” is really an employer</a>',
      '<a href="/blog/how-to-register-a-business-canada/">When to register the name</a>',
    ])}

    ${cta('Next step: once a month of invoices is real, run the profit through the income tax calculator and move the tax portion out of the chequing account. The 2026 tax guide is the longer sole-prop walkthrough.')}

    ${footer}
</div>`;

export const eiContent = `<div class="container">

    <div class="hook">
        EI for the self-employed is a narrow insurance policy, and the premium looks small until you notice what it does not cover. <span class="highlight">You pay $1.63 per $100 in 2026, up to $1,123.07, and you cannot claim for a year.</span> The payoff is a yes or a no you can defend with the ceiling math, not with a fear of getting sick.
    </div>

    ${directAnswer('Self-employed EI in Canada is optional special benefits, not regular unemployment insurance. Outside Quebec you pay $1.63 per $100 of self-employment earnings in 2026, up to $1,123.07. The agreement must be in place for 12 months. After you receive benefits, you generally cannot opt out while self-employed.')}

    ${takeaways([
      'The weekly ceiling cited by Service Canada for 2026 is 55 percent of earnings, up to $729 a week. That is the top, not a typical cheque.',
      'Quebec residents pay $1.30 per $100, up to $895.70, because maternity, paternity, parental, and adoption benefits are delivered through the Québec Parental Insurance Plan.',
      'You pay the employee rate only. You do not pay the employer 1.4 times multiplier. You do pay both shares of CPP separately. Do not mix the two programs.',
      'At the maximums, $1,123.07 is about 1.54 weeks of a $729 benefit. Two weeks at the ceiling covers more than a year of maximum premiums. A shorter or smaller claim may not.',
      'Regular EI from a job you quit to freelance is a different question. Do not treat this opt-in as a substitute for that cheque.',
    ])}

    ${toc([
      { id: 'buying', label: 'What are you actually buying?' },
      { id: 'gates', label: 'What two gates do people miss?' },
      { id: 'math', label: 'When does the premium break even?' },
      { id: 'decide', label: 'Who should opt in, and who should not?' },
      { id: 'mistakes', label: 'What do people assume that is wrong?' },
      { id: 'waiting', label: 'What does the waiting year require?' },
      { id: 'faq', label: 'Frequently asked questions' },
    ])}

    <h2 id="buying">What does the self-employed EI program pay for?</h2>
    <p>Special benefits when you have reduced the time spent on the business by more than 40 percent for at least a week: maternity, parental, sickness, compassionate care, and family caregiver benefits, if you meet that benefit’s own rules. Service Canada’s page states the 2026 maximum as <strong>55 percent of earnings, up to $729 a week</strong>. It does not pay you because a client cancelled. It does not pay you because you incorporated and stopped salary. It is not the regular benefit employees receive after a layoff.</p>
    <p>You opt in through My Service Canada Account. Premiums are paid when you file the T1, on Schedule 13. You can register and still not qualify to receive anything until the other gates are open.</p>

    <h2 id="gates">What has to be true before a claim is even possible?</h2>
    <p>Two gates, both on the government pages. First, the agreement with the Canada Employment Insurance Commission has to have been in place for <strong>at least 12 months</strong>. Signing up the week you get sick does not open benefits. Second, for benefits between January 1 and December 31, 2026, you need at least <strong>$9,254 of net self-employed earnings in 2025</strong>. You also have to be a citizen or permanent resident, and you have to own the business or control more than 40 percent of the voting shares.</p>
    <div class="warning-box"><strong>Watch out.</strong> Once you have received benefits, Canada.ca says you must keep paying premiums for as long as you remain self-employed, and you will not be able to withdraw. The opt-in is reversible before a claim. It is sticky after one. Do not “try it” in a year you might claim if you hate the premium.</div>
    <p>CPP is the other payroll-like cost, and it is not optional in the same way. Self-employed CPP in 2026 is up to <strong>$8,460.90</strong>, plus CPP2 up to <strong>$832</strong>. EI at $1,123.07 is the smaller cheque. People compare them as if they were one program. They are not. CPP is a pension contribution. This EI premium is insurance for a short list of leaves.</p>

    <h2 id="math">How many weeks of benefits cover the premium?</h2>
    <p>Use only the published ceilings. This is the most generous case, not a prediction of your claim.</p>
    <div class="example-calculation">
        <div class="line"><span>Maximum premium, outside Quebec, 2026</span><span>$1,123.07</span></div>
        <div class="line"><span>Maximum weekly benefit cited for 2026</span><span>$729</span></div>
        <div class="line"><span>$1,123.07 ÷ $729</span><span>1.54 weeks</span></div>
        <div class="line total"><span>Two weeks at the ceiling</span><span>$1,458, which is more than the year’s maximum premium</span></div>
    </div>
    <p>Quebec’s maximum premium is $895.70. Against the same $729 ceiling, that is about 1.23 weeks. The parental benefits a Quebec resident uses may be QPIP instead, which is why the EI rate is lower. Do not stack a QPIP expectation onto this EI premium without reading QPIP’s own page.</p>
    <p>Now the case that is not the ceiling. Suppose your benefit would be $400 a week because your earnings are lower. The same $1,123.07 premium takes $1,123.07 ÷ $400 = <strong>2.8 weeks</strong> of that benefit to match one year of premiums. A one-week sickness does not pay back the year. A longer sickness, or a parental claim, can. You are insuring the longer event. If you would not claim those benefits, you are paying for an option you will not exercise, and after you do exercise it you may be locked in.</p>

    ${barChart({
      title: 'Weeks of benefits to match the 2026 maximum premium',
      aria: 'Bar chart showing 1.54 weeks at the 729 dollar ceiling and 2.8 weeks at an example 400 dollar benefit, to cover 1123 dollars of premiums.',
      caption: 'The 1.54 weeks uses Service Canada’s $729 maximum and the $1,123.07 maximum premium outside Quebec. The 2.8 weeks uses an example $400 benefit, not a published average. Quebec’s lower premium changes the first bar.',
      rows: [
        { label: 'At $729 max', pct: 51, text: '1.54 wk' },
        { label: 'Example at $400', pct: 93, text: '2.8 wk' },
      ],
    })}

    <h2 id="decide">Who should opt in?</h2>
    <p><strong>Opt in</strong> if you expect a parental or medical leave in more than 12 months, you will clear the earnings test, and you are willing to keep paying after a claim. <strong>Do not opt in</strong> if you want a cushion for a quiet sales month, if you are about to leave self-employment, or if you are within 12 months of the leave you are worried about. The agreement will not be mature in time. <strong>Wait</strong> if you are still an employee with regular EI on that job. Special benefits may already be available through the insurable employment. Adding the self-employed agreement has its own premium and its own lock-in. Read both pages before you stack them.</p>
    ${flowChart({
      aria: 'Decision flow for self-employed EI: special benefits only, twelve-month wait, then opt in if a parental or medical leave is plausible.',
      caption: 'A slow month is not on this flowchart. Regular layoff benefits are a different program.',
      nodes: [
        { title: 'Do you want regular EI for a slow month?', kind: 'decision', text: 'This program does not sell that.' },
        { title: 'Is the leave more than 12 months away?', text: 'The agreement has to age.' },
        { title: 'Will you accept the lock-in after a claim?', kind: 'option' },
        { title: 'Opt in, or skip it', kind: 'result' },
      ],
    })}
    <p>The premium is small next to a salary you are replacing. The decision to leave the salary is <a href="/blog/side-hustle-to-full-time-canada/">side hustle to full-time</a>. The rate that has to fund the premium is <a href="/blog/consulting-rate-after-cpp-ei-tax-canada/">the freelance rate</a>. Neither article makes this opt-in mandatory.</p>

    <h2 id="mistakes">What do people get wrong?</h2>
    <ul class="checklist">
        <li>Thinking the premium buys layoff insurance. It does not.</li>
        <li>Signing up the month a baby is due. The 12-month clock will not be finished.</li>
        <li>Comparing $1.63 per $100 with the employer EI rate. Self-employed people pay the employee rate only.</li>
        <li>Forgetting that a claim can lock the premium in for the rest of your self-employment.</li>
        <li>Using Quebec’s $1.30 rate when you live in Ontario, or the reverse.</li>
        <li>Treating CPP and EI as one “payroll burden.” Price them on separate lines.</li>
    </ul>
    <p>Service Canada is the place to enter the agreement and to ask whether a specific leave qualifies. A tax preparer can put Schedule 13 on the return. They cannot award the benefit. If you are also an employee, ask CRA which earnings are insurable before you assume the job and the business combine the way a forum post said.</p>

    <h2 id="waiting">What does the waiting year require of you?</h2>
    <p>The 12 months are not a waiting room where you do nothing. You are paying, and you are not yet able to claim. Treat the year as a funded option, not as coverage you already have.</p>
    <div class="table-wrapper">
    <table>
        <caption>2026 self-employed EI premiums. Employee rate only, from Service Canada and the CRA payroll pages.</caption>
        <thead><tr><th></th><th>Outside Quebec</th><th>Quebec</th></tr></thead>
        <tbody>
            <tr><td>Rate</td><td>$1.63 per $100</td><td>$1.30 per $100</td></tr>
            <tr><td>Maximum premium</td><td>$1,123.07</td><td>$895.70</td></tr>
            <tr><td>Weeks of the $729 maximum to match the premium</td><td>About 1.54</td><td>About 1.23</td></tr>
            <tr><td>What you are buying</td><td>Special benefits after 12 months</td><td>EI special benefits. Parental benefits may be QPIP.</td></tr>
        </tbody>
    </table>
    </div>
    <p>Set the premium aside monthly. On the maximum outside Quebec, $1,123.07 over 12 months is about $94 a month. That is an example of spreading a known annual maximum, not a payroll deduction. You pay it on the T1 through Schedule 13.</p>
    <p>If you do claim, the time test is separate from the premium. Service Canada requires that you have reduced the time spent on the business by <strong>more than 40 percent for at least one week</strong>. Suppose, as an example, you usually spend 25 hours a week on the business. Forty percent of 25 is 10. You would need to cut more than 10 hours, so you are under 15 hours that week, and you still have to meet the specific benefit’s rules. A quiet inbox is not that reduction if you were available and hunting for work the whole week.</p>
    <p><strong>Opt in this month if</strong> the leave you care about is more than a year away and you will keep records of hours. <strong>Do not opt in this month if</strong> you would need the money for a client cancellation in March. The program will not be ready, and regular EI is a different door.</p>

    <h2 id="faq">Frequently asked questions</h2>
    <h3>Is EI for the self-employed worth $1.63 per $100?</h3>
    <p>It is worth it if you will use a special benefit for longer than the break-even weeks and you accept the lock-in. At the 2026 ceilings, about two weeks of the maximum $729 benefit covers the $1,123.07 premium. If you will never claim, it is a premium for a policy you do not want.</p>
    <h3>Does this replace regular EI if I quit my job?</h3>
    <p>No. Quitting to freelance often fails the regular EI test. This program has a 12-month wait and pays special benefits only. Confirm both with Service Canada before you resign.</p>
    <h3>What is the earnings test for 2026?</h3>
    <p>At least $9,254 of net self-employed earnings in 2025, for a benefit period in the 2026 calendar year. The agreement also has to be 12 months old.</p>
    <h3>Why is Quebec’s premium lower?</h3>
    <p>Quebec provides maternity, paternity, parental, and adoption benefits through QPIP, so the EI rate is $1.30 per $100, up to $895.70 in 2026. Confirm which program pays the leave you expect.</p>
    <h3>Can I opt out later?</h3>
    <p>Canada.ca says that after you have received benefits you must keep paying for as long as you remain self-employed and you will not be able to withdraw. Before a claim, read the current opt-out rules on that page rather than relying on a memory of them.</p>
    <h3>Do I pay the employer portion?</h3>
    <p>No. Self-employed participants pay the employee rate. Your employer, if you also have a job, still pays 1.4 times the employee premium on that job’s insurable earnings.</p>
    <h3>How do I pay?</h3>
    <p>Through the T1, using Schedule 13. It is not a payroll deduction unless you are also an employee. Set the money aside during the year so April is not the first time you see $1,123.</p>
    <h3>Does a corporation change this?</h3>
    <p>You can qualify if you control more than 40 percent of the voting shares and you meet the earnings and agreement tests. A dividend-only year may not produce the self-employed earnings the test measures. Salary versus dividends is a tax choice with an EI side effect. Read <a href="/blog/salary-vs-dividends-incorporated-canada/">salary versus dividends</a> before you assume a dividend year still counts.</p>

    ${sources([
      '<a href="https://www.canada.ca/en/services/benefits/ei/ei-self-employed-workers/premiums.html">Canada.ca: self-employed EI premiums, 2026</a>',
      '<a href="https://www.canada.ca/en/services/benefits/ei/ei-self-employed-workers/eligibility.html">Canada.ca: who can qualify, including the 12-month agreement and the $9,254 test</a>',
      '<a href="https://www.canada.ca/en/services/benefits/ei/ei-self-employed-workers.html">Canada.ca: benefits for self-employed people, $729 weekly maximum in 2026</a>',
      '<a href="https://www.canada.ca/en/employment-social-development/news/2025/09/canada-employment-insurance-commission-sets-the-2026-employment-insurance-premium-rate.html">ESDC: 2026 EI premium rate, including Quebec</a>',
      '<a href="https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/payroll/payroll-deductions-contributions/canada-pension-plan-cpp/cpp-contribution-rates-maximums-exemptions.html">CRA: CPP is a separate contribution</a>',
    ])}

    ${readNext([
      '<a href="/blog/consulting-rate-after-cpp-ei-tax-canada/">Put the premium inside the rate</a>',
      '<a href="/blog/side-hustle-to-full-time-canada/">The runway before you resign</a>',
      '<a href="/blog/employee-vs-contractor-canada/">If you are not actually self-employed, this program is the wrong door</a>',
      '<a href="/blog/salary-vs-dividends-incorporated-canada/">Salary versus dividends, and what counts as earnings</a>',
    ])}

    ${cta('Next step: if you opt in, add the premium to the tax you set aside and check the total in the income tax calculator. The 2026 tax guide covers the T1 lines around that premium.')}

    ${footer}
</div>`;

export const pricesContent = `<div class="container">

    <div class="hook">
        Raising prices feels like asking to be fired by your own clients. The math usually says the opposite. <span class="highlight">A 15 percent increase can survive losing one client in ten and still leave you ahead.</span> The payoff is a sentence you can send, and a count of how many noes you can afford.
    </div>

    ${directAnswer('Raise prices for new work first, then for current clients with a date and a reason tied to scope or cost. On an example book of ten clients, a 15 percent increase still beats the old revenue if you keep nine. Tell them before the next invoice, not on it.')}

    ${takeaways([
      'The break-even is old revenue divided by the new price. That is how many clients you must keep. It is arithmetic, not a personality test.',
      'Raise new clients immediately. Give current clients a date at least one project or one billing cycle out.',
      'A discount for prepaying a block can protect cash without freezing last year’s rate forever. Put an end date on it.',
      'If you are registered for GST/HST, the tax line is not a price increase. In Ontario, 13 percent HST on top of a higher fee is still their tax, remitted by you.',
      'One client who is most of your revenue is not a pricing problem. It is a concentration problem. The first-ten process is how you dilute them.',
    ])}

    ${toc([
      { id: 'math', label: 'How many clients can you lose?' },
      { id: 'who', label: 'Who hears the new price, and when?' },
      { id: 'script', label: 'What do you write?' },
      { id: 'scope', label: 'When is the real problem scope, not price?' },
      { id: 'mistakes', label: 'What makes a fair increase feel hostile?' },
      { id: 'concentration', label: 'What if one client is most of the revenue?' },
      { id: 'faq', label: 'Frequently asked questions' },
    ])}

    <h2 id="math">How many clients can say no before the increase fails?</h2>
    <p>Use your own count. The table is an example so the division is visible. Ten clients pay <strong>$1,000</strong> each. Revenue is <strong>$10,000</strong>. The new price is <strong>$1,150</strong>, a 15 percent increase.</p>
    <div class="table-wrapper">
    <table>
        <caption>Example only. Ten clients at $1,000, new price $1,150. Old revenue $10,000.</caption>
        <thead><tr><th>Clients who stay</th><th>Revenue at $1,150</th><th>Versus the old $10,000</th></tr></thead>
        <tbody>
            <tr><td>10</td><td>$11,500</td><td>Ahead by $1,500</td></tr>
            <tr class="highlight-row"><td>9</td><td>$10,350</td><td>Ahead by $350</td></tr>
            <tr><td>8</td><td>$9,200</td><td>Behind by $800</td></tr>
        </tbody>
    </table>
    </div>
    <p>Clients you must keep = $10,000 ÷ $1,150 = <strong>8.70</strong>. You can lose one of the ten and still be ahead. You cannot lose two. That is the whole decision. If you believe two or more will walk, either the increase is too large, or those two were only there for a price you should not have matched.</p>
    <p>A 10 percent increase, to $1,100, needs $10,000 ÷ $1,100 = 9.09 clients. You can lose none of ten if you need to stay strictly ahead, unless the one who leaves was already under the old price. Do the division before you pick the percent. A round 10 feels polite and can be the increase you cannot afford to lose anyone on.</p>

    ${barChart({
      title: 'Example revenue if some clients leave',
      aria: 'Bars showing example revenue of 11500, 10350, and 9200 dollars if 10, 9, or 8 clients stay at 1150 dollars.',
      caption: 'Illustrative book of business. Your break-even is your old revenue divided by your new price. The 15 percent is not a recommended Canadian increase. It is a number that makes the division obvious.',
      rows: [
        { label: '10 stay', pct: 100, text: '$11,500' },
        { label: '9 stay', pct: 90, text: '$10,350' },
        { label: '8 stay', pct: 80, text: '$9,200' },
      ],
    })}

    <h2 id="who">Who should hear the new price, and when?</h2>
    <p><strong>New enquiries: today.</strong> Quoting the old price to a stranger because you are nervous trains the market you are trying to leave. <strong>Current clients: with notice.</strong> A date after the work they already approved. Changing a signed fixed fee mid-project is a trust problem, not a pricing strategy. <strong>The client who refers you: early.</strong> They will repeat the old number unless you tell them.</p>
    ${flowChart({
      aria: 'Flow: raise new work now, give current clients a future date, keep a signed project at the old price until it ends.',
      caption: 'Notice is what separates a price increase from a surprise invoice.',
      nodes: [
        { title: 'Is the work already signed?', kind: 'decision' },
        { title: 'Yes: finish at the old price', kind: 'option', text: 'The next project uses the new one.' },
        { title: 'No: quote the new price', text: 'New clients first, then renewals on a date.' },
        { title: 'Count the noes you can afford', kind: 'result' },
      ],
    })}
    <div class="tip-box"><strong>Pro tip.</strong> If cash is tight, sell a prepaid block at the new monthly rate for three months, not a permanent discount back to the old rate. You get cash. They get a short lock. The old price still dies on a date.</div>

    <h2 id="script">What do you send?</h2>
    <p>One email. Reason, new number, date, and a door for scope instead of a discount.</p>
    <div class="script-box">
        <p><strong>Current client.</strong> “From [date], the fee for [named result] moves from [$old] to [$new]. Work we have already scheduled stays at the current fee. If you want a smaller scope at a lower number, tell me what to cut. I will assume we continue at the new fee unless I hear otherwise by [date].”</p>
        <p><strong>If they push back.</strong> “I can hold [$old] through [one more cycle] and then move. I am not able to keep [$old] as the ongoing rate.”</p>
        <p><strong>New client.</strong> “The project is [$new], delivered by [date]. Half to start.” Do not mention that someone else pays less.</p>
    </div>
    <p>Then stop. A second paragraph about your rent, your software, or inflation you did not look up weakens the number. If a real cost changed, name that cost. “My insurance renewal” is a fact. “Everything is up” is a mood.</p>

    <h2 id="scope">When should you change the scope instead of the price?</h2>
    <p>When the client is buying hours you did not sell. A $1,000 month that turned into unlimited revisions is not underpriced. It is undefined. The increase and a cap should travel together. “From May, the month includes two rounds of revisions. Further rounds are [$amount] each.”</p>
    <p>That cap is also how you find out whether you need more clients or fewer. If nine of ten accept the cap and the new price, you have room to lose the tenth. If the work only exists because it was unbounded, you did not have the revenue you thought. The pipeline that replaces a lost client is <a href="/blog/first-10-clients-freelance-canada/">the first ten clients</a>, used again for client eleven.</p>
    <p>GST/HST sits beside this, not inside it. If you must start charging 13 percent Ontario HST because you crossed <strong>$30,000</strong> of taxable supplies, say so as a separate line. Clients experience it as a price increase. It is not your fee. Explain it in the same email so they do not think you raised the rate by 13 percent and then another 15. The threshold rules are <a href="/blog/side-hustle-taxes-canada/">side-hustle taxes</a>.</p>

    <h2 id="mistakes">What makes a fair increase feel hostile?</h2>
    <ul class="checklist">
        <li>Putting the new price on an invoice with no prior note.</li>
        <li>Apologizing so hard that you offer the old price before they ask.</li>
        <li>Raising one client because you are annoyed, and leaving the louder client alone.</li>
        <li>Discounting the increase into nothing with a “loyalty rate” that has no end date.</li>
        <li>Quoting a national inflation figure you did not check. If you need a number, use your own cost.</li>
        <li>Ignoring concentration. Losing the one client who is 70 percent of revenue is not the “one in ten” in the table.</li>
    </ul>
    <p>A bookkeeper or accountant is useful when the increase interacts with GST/HST registration or with a fiscal year you are about to close. You do not need them to send the email. A lawyer is the right call if the price is inside a contract that forbids a change, or if the client is also your former employer and a non-solicit is in play.</p>
    <p>The earning choice underneath the email is whether this business is the path or the job still is. If the book of ten cannot survive a 15 percent test, the job may still be the higher-paid hour. That comparison is <a href="/blog/how-to-earn-more-money-canada/">how to earn more</a>.</p>

    <h2 id="concentration">What if one client is most of the revenue?</h2>
    <p>The ten-client table assumes the book is even. Many small businesses are not. Run the same division on the client you cannot afford to lose, before you send the email to everyone else.</p>
    <div class="example-calculation">
        <div class="line"><span>Example book</span><span>One client at $7,000 and six at $500 = $10,000</span></div>
        <div class="line"><span>After a 15 percent increase</span><span>$8,050 and six at $575</span></div>
        <div class="line"><span>If only one small client leaves</span><span>5 × $575 + $8,050 = $10,925</span></div>
        <div class="line total"><span>If the $7,000 client leaves</span><span>6 × $575 = $3,450</span></div>
    </div>
    <p>You are ahead if a small client says no. You are not ahead if the concentrated one says no. The break-even count of 8.70 clients does not apply to a book shaped like this. <strong>Raise the small clients now. Hold a one-cycle conversation with the large one, and start a replacement list the same week.</strong> A loyalty discount with no end date puts you back in the $7,000 dependency.</p>
    <p>That replacement list is the same work as the first ten clients, aimed at one hole. If you cannot name five people who could buy a piece of what the large client buys, you do not have a pricing problem. You have a concentration problem, and a 15 percent email will not fix it.</p>
    <div class="warning-box"><strong>Watch out.</strong> Do not tell the small clients that the large one pays a different rate. Do not tell the large one the increase is “just 15 percent, everyone is doing it” if you have not sent it to everyone. One rule, two dates: new work and small accounts on the new price now, the concentrated account on a dated hold.</div>

    <h2 id="faq">Frequently asked questions</h2>
    <h3>How much should a small business raise prices in Canada?</h3>
    <p>There is no official percent. Divide your current revenue by the new price and see how many clients you must keep. If that number is almost all of them, the increase is fragile. If you can lose one and stay ahead, you can send the email.</p>
    <h3>Should I raise prices during a slow month?</h3>
    <p>Raise the quote for new work anyway. A slow month is a bad time to discount the next client down to a rate you already want to leave. It is a reasonable time to delay the email to a fragile current client until you have a replacement conversation started.</p>
    <h3>Do I raise hourly, project, and retainer by the same percent?</h3>
    <p>Not automatically. A project price that was already too low needs a scope fix. A retainer that includes unlimited access needs a cap. Apply the percent to the offer you actually want to keep selling.</p>
    <h3>What if my best client threatens to leave?</h3>
    <p>Decide with the table. If they are one of ten, you already priced that loss. If they are most of the revenue, you do not have a ten-client business. Offer a one-cycle hold, not a permanent exception, and start the replacement list the same week.</p>
    <h3>Should the email mention inflation?</h3>
    <p>Only if you cite a figure you have actually checked and it is the real reason. A vague inflation line is easy to argue with. A date and a number are not.</p>
    <h3>How does HST affect the increase?</h3>
    <p>If you are registered, HST is added on top and remitted. It is not your raise. If the raise itself pushes you over the $30,000 small-supplier line, the tax can start on the same invoice season. Warn the client about the tax line separately.</p>
    <h3>Can I grandfather old clients forever?</h3>
    <p>You can, and you will have two businesses. Grandfather for one cycle if the relationship is worth it. A forever rate becomes the rate referrals expect.</p>
    <h3>When do I talk to an accountant?</h3>
    <p>When the new prices change whether you must register for GST/HST, or when you pay yourself from a corporation and the extra profit has to come out as salary or dividends. The email itself does not require a professional.</p>

    ${sources([
      '<a href="https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/gst-hst-businesses/when-register-charge.html">CRA: GST/HST small-supplier threshold of $30,000</a>',
      '<a href="https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/gst-hst-businesses/charge-collect-which-rate.html">CRA: which GST/HST rate to charge, including Ontario HST at 13 percent</a>',
    ])}

    ${readNext([
      '<a href="/blog/consulting-rate-after-cpp-ei-tax-canada/">Rebuild the rate from the salary you need</a>',
      '<a href="/blog/first-10-clients-freelance-canada/">Replace a client who says no</a>',
      '<a href="/blog/side-hustle-taxes-canada/">What happens when billings cross $30,000</a>',
      '<a href="/blog/how-to-earn-more-money-canada/">Whether the business is still the right path</a>',
    ])}

    ${cta('Next step: after the new prices stick for a quarter, run the higher profit through the income tax calculator so the set-aside matches the invoices. The 2026 tax guide covers the personal side of that profit.')}

    ${footer}
</div>`;
