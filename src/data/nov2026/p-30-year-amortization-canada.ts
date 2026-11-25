import { batchFooter, batchPost } from './types';

const D = '2026-11-25';
const FIN = 'https://www.canada.ca/en/department-finance/news/2024/09/delivering-the-boldest-mortgage-reforms-in-decades.html';
const FCAC = 'https://www.canada.ca/en/financial-consumer-agency/services/mortgages/choose-mortgage.html';
const CMHC = 'https://www.cmhc-schl.gc.ca/professionals/project-funding-and-mortgage-financing/mortgage-loan-insurance/mortgage-loan-insurance-homeownership-programs/premium-information-for-homeowner-and-small-rental-loans';
const HOME = 'https://www.cmhc-schl.gc.ca/professionals/project-funding-and-mortgage-financing/mortgage-loan-insurance/mortgage-loan-insurance-homeownership-programs/home-start';
const OSFI = 'https://www.osfi-bsif.gc.ca/en/supervision/financial-institutions/banks/minimum-qualifying-rate-uninsured-mortgages';
const ACT = 'https://laws-lois.justice.gc.ca/eng/acts/i-15/page-1.html';
const HUB = '/category/real-estate/mortgages-renewal/';

const disclaimer = `General education, not financial or mortgage advice, and not a rate quote. Amortization eligibility, the $1.5 million cap, the down payment rule, insurance premiums and the qualifying-rate formula come from the Department of Finance Canada, the Financial Consumer Agency of Canada, CMHC, OSFI and the Interest Act pages listed under Sources, all read on November 25, 2026. The rates of 3.5%, 4.5% and 5.5%, the $500,000 loan and the $600,000 purchase price are illustrations, not offers or market data. Every payment, interest and balance figure is our own arithmetic for a fixed rate held for the whole amortization with semi-annual compounding; real mortgages renew every term at whatever rate applies then. Your lender's quote and your own contract decide what you pay.`;

const content = `<div class="container">

    <div class="hook">
        A 30-year amortization lowers the monthly payment and raises the lifetime interest, and the trade is steeper than most people expect. <span class="highlight">On a $500,000 mortgage at an illustration rate of 4.5%, the 30-year schedule saves $246.29 a month and costs $77,379 more interest.</span> This guide, part of our <a href="${HUB}">mortgages and renewal hub</a>, shows who can get one, what it costs at three rates and what the insurance surcharge adds.
    </div>

    <p>In Canada, a 30-year amortization is the maximum for an insured mortgage only if you are a first-time buyer or buying a newly built home; otherwise the limit is 25 years when your down payment is under 20%. With 20% or more down, your lender sets the maximum.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>With less than 20% down, 30 years is available to first-time buyers and buyers of new builds. Everyone else is limited to 25 years.</li>
            <li>CMHC adds a 0.20% surcharge to the insurance premium for any amortization beyond 25 years.</li>
            <li>At an illustration rate of 4.5%, a $500,000 mortgage costs $2,767.36 a month over 25 years and $2,521.08 over 30 years.</li>
            <li>After five years you would owe about $16,520 more on the 30-year schedule than on the 25-year one.</li>
            <li>The longer schedule also lowers the payment used in the stress test, so it can raise the loan you qualify for.</li>
        </ul>
    </div>

    <nav aria-label="On this page">
        <ul>
            <li><a href="#who">Who can get 30 years</a></li>
            <li><a href="#cost">What 30 years costs</a></li>
            <li><a href="#balance">Balance after five years</a></li>
            <li><a href="#insured">The insurance surcharge</a></li>
            <li><a href="#stress">The stress test</a></li>
            <li><a href="#choose">When it makes sense</a></li>
            <li><a href="#mistakes">Common mistakes</a></li>
            <li><a href="#steps">Compare on your own numbers</a></li>
            <li><a href="#faq">FAQ</a></li>
        </ul>
    </nav>

    <h2 id="who">Who can get a 30-year amortization in Canada?</h2>
    <p>Anyone, if the lender agrees, with a down payment of 20% or more. With less than 20% down, only first-time buyers and buyers of newly built homes. The Financial Consumer Agency of Canada's <a href="${FCAC}">mortgage page</a> sets out the rule.</p>
    <ul>
        <li><strong>Down payment under 20%:</strong> a maximum of 30 years if you are a first-time buyer and/or buying a new build, and 25 years in all other cases.</li>
        <li><strong>Down payment over 20%:</strong> your lender sets the maximum amortization.</li>
        <li><strong>Since December 15, 2024:</strong> Finance Canada's <a href="${FIN}">backgrounder</a> says insured 30-year amortizations apply to all first-time buyers and all buyers of new builds, on properties the borrower or a close relative occupies.</li>
    </ul>
    <p>Finance Canada defines a first-time buyer as someone who has never purchased a home, who has not in the last four years lived in a home that they or their spouse owned, or who recently went through the breakdown of a marriage or common-law partnership. A newly constructed home is one that has not been occupied for residential purposes before, and the department says newly built condominiums with an interim occupancy period are not excluded.</p>
    <p>The same changes raised the insured price cap from $1 million to $1.5 million. The property must be worth less than $1.5 million, and the down payment is 5% of the first $500,000 of the price and 10% of the part between $500,000 and $1.5 million. CMHC's <a href="${HOME}">Home Start page</a> lists a 30-year maximum for these loans, with at least one first-time buyer on the application or a newly built property.</p>

    <h2 id="cost">What does a 30-year amortization cost compared with 25 years?</h2>
    <p>A lower payment now and a much larger interest bill over the life of the loan. The table compares the two schedules on a $500,000 mortgage at three illustration rates, using semi-annual compounding as Canadian fixed-rate mortgages do. The Interest Act requires the rate in a mortgage to be stated as calculated yearly or half-yearly, not in advance (<a href="${ACT}">Interest Act</a>).</p>
    <p class="did-you-know" data-info-gain><strong>What this page adds:</strong> a side-by-side calculation of payment, total interest and the balance after five years for a $500,000 mortgage at three scenario rates, plus an insured first-time buyer example showing the 0.20% premium surcharge and how the longer amortization raises the loan that passes the stress test.</p>
    <div class="table-wrapper">
        <table>
            <caption>25 versus 30 years on a $500,000 mortgage (illustration rates; our arithmetic)</caption>
            <thead>
                <tr><th>Illustration rate</th><th>Payment, 25 years</th><th>Payment, 30 years</th><th>Monthly saving</th><th>Total interest, 25 years</th><th>Total interest, 30 years</th><th>Extra interest</th></tr>
            </thead>
            <tbody>
                <tr><td>3.5%</td><td>$2,496.35</td><td>$2,238.18</td><td>$258.17</td><td>$248,905</td><td>$305,745</td><td>$56,840</td></tr>
                <tr class="highlight-row"><td>4.5%</td><td>$2,767.36</td><td>$2,521.08</td><td>$246.29</td><td>$330,209</td><td>$407,588</td><td>$77,379</td></tr>
                <tr><td>5.5%</td><td>$3,051.96</td><td>$2,819.53</td><td>$232.43</td><td>$415,587</td><td>$515,031</td><td>$99,444</td></tr>
            </tbody>
        </table>
    </div>
    <p>Two patterns matter. The monthly saving shrinks slightly as rates rise, from $258.17 to $232.43, while the extra interest grows from $56,840 to $99,444. So the higher the rate, the more each dollar of monthly relief costs you later. These are totals over the full schedule at one unchanged rate, which no real borrower gets, so read them as a comparison of the two schedules, not a forecast.</p>

    <h2 id="balance">How much more do you still owe after five years?</h2>
    <p>About $16,000 to $17,000 more on a $500,000 mortgage, because a longer schedule pays down principal more slowly. That matters most at renewal, when your remaining balance sets the new loan.</p>
    <div class="table-wrapper">
        <table>
            <caption>Balance after 60 payments on a $500,000 mortgage (illustration rates; our arithmetic)</caption>
            <thead>
                <tr><th>Illustration rate</th><th>Balance, 25-year schedule</th><th>Balance, 30-year schedule</th><th>Difference</th></tr>
            </thead>
            <tbody>
                <tr><td>3.5%</td><td>$431,400</td><td>$448,291</td><td>$16,891</td></tr>
                <tr class="highlight-row"><td>4.5%</td><td>$438,982</td><td>$455,502</td><td>$16,520</td></tr>
                <tr><td>5.5%</td><td>$445,938</td><td>$461,922</td><td>$15,984</td></tr>
            </tbody>
        </table>
    </div>
    <p>At the 4.5% illustration, a typical five-year term ends with about $438,982 owing on the 25-year schedule and $455,502 on the 30-year schedule. The mortgage renewal guide covers how to approach that moment: see <a href="/blog/mortgage-renewal-strategy-canada/">mortgage renewal strategy</a>.</p>

    <h2 id="insured">What does the insurance surcharge add on a 30-year amortization?</h2>
    <p>An extra 0.20% of the loan, as part of a one-time premium that may be added to the insured mortgage. CMHC's <a href="${CMHC}">premium schedule</a> says an amortization period beyond 25 years is subject to a 0.20% surcharge, on top of the premium that depends on your loan-to-value ratio.</p>
    <div class="table-wrapper">
        <table>
            <caption>CMHC premium on the total loan amount, owner-occupied homes (CMHC schedule read November 25, 2026)</caption>
            <thead>
                <tr><th>Loan-to-value ratio</th><th>Premium</th></tr>
            </thead>
            <tbody>
                <tr><td>80.01% to 85%</td><td>2.80%</td></tr>
                <tr><td>85.01% to 90%</td><td>3.10%</td></tr>
                <tr><td>90.01% to 95%</td><td>4.00%</td></tr>
            </tbody>
        </table>
    </div>
    <div class="example-box">
        <div class="example-title">Illustration: a first-time buyer at $600,000 with the minimum down payment</div>
        <div class="example-calculation">
            <div class="line"><span>Price (illustration)</span><span>$600,000</span></div>
            <div class="line"><span>Minimum down payment: 5% of $500,000 plus 10% of $100,000</span><span>$35,000</span></div>
            <div class="line"><span>Mortgage before insurance (loan-to-value 94.17%)</span><span>$565,000</span></div>
            <div class="line"><span>Premium, 25 years: 4.00%</span><span>$22,600</span></div>
            <div class="line"><span>Premium, 30 years: 4.00% plus 0.20%</span><span>$23,730</span></div>
            <div class="line"><span>Payment at 4.5%, 25 years, on $587,600</span><span>$3,252.21</span></div>
            <div class="line total"><span>Payment at 4.5%, 30 years, on $588,730</span><span>$2,968.47</span></div>
        </div>
        <p>The 30-year schedule saves $283.74 a month, costs $1,130 more in premium and adds $91,857 of interest over the full schedule. The price, rate and a premium added to the loan are illustrations; Ontario, Quebec and Saskatchewan apply provincial sales tax to the premium, and that tax cannot be added to the loan, according to CMHC.</p>
    </div>

    <h2 id="stress">How does a longer amortization affect the stress test?</h2>
    <p>It lowers the payment lenders test you at, so you can qualify for a larger loan. OSFI's minimum qualifying rate is the greater of your contract rate plus 2% or 5.25% (<a href="${OSFI}">OSFI</a>), so a 4.5% contract rate is tested at 6.5%, and a contract rate below 3.25% is tested at 5.25%.</p>
    <p>On the $565,000 loan above, the qualifying payment at 6.5% is $3,784.50 over 25 years and $3,539.17 over 30 years, which is 6.5% lower. Put differently, the 25-year qualifying payment would support a loan of about $604,165 on a 30-year schedule, or $39,165 more, a gain of 6.9% (our arithmetic). Lenders also test your total debt ratios, so this is one input, not your approval. Our <a href="/blog/mortgage-stress-test-canada/">mortgage stress test guide</a> covers the rest.</p>

    <h2 id="choose">When does a 30-year amortization make sense?</h2>
    <p>When the lower payment solves a real cash-flow or qualification problem, and you have a plan for the interest cost. The numbers above suggest three questions.</p>
    <ul>
        <li><strong>Do you need it to qualify, or to breathe?</strong> If the 25-year payment passes the stress test and fits your budget, the 30-year option costs $56,840 to $99,444 more interest on $500,000 in our scenarios.</li>
        <li><strong>Can you pay it down faster?</strong> Choosing 30 years and paying the 25-year amount gets the same payoff at the same rate, but your contract's prepayment privileges decide whether that is allowed. See the <a href="/blog/mortgage-prepayment-calculator/">prepayment calculator</a> and <a href="/blog/mortgage-prepayment-vs-investing-canada/">prepayment versus investing guide</a>.</li>
        <li><strong>Is the insurance surcharge worth it?</strong> On our $565,000 loan it is $1,130, which is the price of keeping the option open.</li>
    </ul>
    <p>The <a href="/blog/cmhc-mortgage-insurance-canada/">CMHC mortgage insurance guide</a> explains the premium itself, and <a href="/blog/fixed-vs-variable-mortgage-canada/">fixed versus variable</a> covers the rate decision that sits next to amortization.</p>

    <h2 id="mistakes">What are the common mistakes when choosing a 30-year amortization?</h2>
    <p>Judging the choice by the monthly payment alone. The payment is the visible number, while the interest, the premium and the slower principal paydown are the costs you only see later. Five slips are worth avoiding.</p>
    <ul>
        <li><strong>Comparing only the payment.</strong> In the 4.5% illustration the saving is $246.29 a month, and the price of that relief is $77,379 of extra interest over the full schedule.</li>
        <li><strong>Forgetting the surcharge.</strong> The 0.20% premium surcharge was $1,130 on the $565,000 loan above, and it applies only to insured loans.</li>
        <li><strong>Ignoring the renewal balance.</strong> After five years the 30-year schedule left about $16,520 more owing in the 4.5% illustration, and that balance is what you renew.</li>
        <li><strong>Treating the rate as fixed for 30 years.</strong> Terms are shorter than amortizations, so your rate resets at renewal. Our tables hold one rate throughout to compare the two schedules, not to predict your cost.</li>
        <li><strong>Assuming you qualify.</strong> With less than 20% down, the 30-year option is for first-time buyers and buyers of new builds, so check the rule before you build a budget around it.</li>
    </ul>

    <h2 id="steps">How do you compare 25 and 30 years on your own mortgage?</h2>
    <p>Ask for both quotes and set them side by side before you decide. The steps below take about the same effort as one rate quote, and they turn the tables in this guide into your own numbers.</p>
    <ol>
        <li><strong>Confirm eligibility.</strong> If your down payment is under 20%, check whether you meet the first-time buyer or new-build rule and whether the property is below the $1.5 million cap.</li>
        <li><strong>Get two payment quotes.</strong> Ask your lender or broker for the payment at 25 years and at 30 years at the same rate, and for the insurance premium on each.</li>
        <li><strong>Write down the monthly saving.</strong> Subtract the 30-year payment from the 25-year payment, as the tables above do.</li>
        <li><strong>Ask for the balance at the end of the term.</strong> Your lender can show what you would still owe after your term on each schedule.</li>
        <li><strong>Check the prepayment privileges.</strong> If you choose 30 years and plan to pay it down faster, confirm how much extra you can pay each year without a penalty.</li>
        <li><strong>Test the stress test.</strong> Ask which qualifying payment the lender uses, since the longer amortization lowers it.</li>
    </ol>
    <p>If the numbers show you do not need the lower payment, the 25-year schedule is the cheaper route. If they show you need 30 years to qualify or to keep a buffer, choose it with the interest cost in front of you, and treat it as a starting schedule you can shorten later when your income grows and your contract allows it.</p>

    <h2 id="faq">Frequently asked questions</h2>
    <h3>Is a 30-year amortization available in Canada?</h3>
    <p>Yes, for insured mortgages when you are a first-time buyer or buying a new build, and from lenders who allow it when you put down 20% or more.</p>
    <h3>Can you get a 30-year amortization with 20% down?</h3>
    <p>With a down payment above 20% of the price, your lender sets the maximum amortization period, so ask the lender what it allows.</p>
    <h3>Does a 30-year amortization cost more in mortgage insurance?</h3>
    <p>Yes. CMHC adds a 0.20% surcharge for any amortization period beyond 25 years.</p>
    <h3>Who counts as a first-time buyer for the 30-year rule?</h3>
    <p>Someone who has never bought a home, has not lived in a home they or their spouse owned in the last four years, or has recently had a marriage or common-law relationship end.</p>
    <h3>What is the maximum price for an insured mortgage?</h3>
    <p>The property must be worth less than $1.5 million, with 5% down on the first $500,000 and 10% on the rest of the price.</p>
    <h3>How much interest does a 30-year amortization add?</h3>
    <p>On $500,000 at an illustration rate of 4.5%, $77,379 more than a 25-year schedule, or $56,840 at 3.5% and $99,444 at 5.5%.</p>
    <h3>Does a 30-year amortization help me pass the stress test?</h3>
    <p>It can. It lowers the payment tested at the qualifying rate, which in our example raises the supportable loan by about 6.9%.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="${FIN}">Department of Finance Canada: Delivering the boldest mortgage reforms in decades (backgrounder, September 24, 2024)</a>, reviewed November 25, 2026</li>
        <li><a href="${FCAC}">Financial Consumer Agency of Canada: Choosing a mortgage that is right for you</a>, reviewed November 25, 2026</li>
        <li><a href="${CMHC}">CMHC: Mortgage loan insurance premiums for homeowner and small rental loans</a>, reviewed November 25, 2026</li>
        <li><a href="${HOME}">CMHC: Home Start, 30-year mortgages</a>, reviewed November 25, 2026</li>
        <li><a href="${OSFI}">OSFI: Minimum qualifying rate for uninsured mortgages</a>, reviewed November 25, 2026</li>
        <li><a href="${ACT}">Justice Laws: Interest Act</a>, reviewed November 25, 2026</li>
    </ul>

    <h2>Related reading</h2>
    <ul>
        <li><a href="/blog/canadian-mortgage-guide/">The Canadian mortgage guide</a></li>
        <li><a href="/blog/mortgage-stress-test-canada/">Mortgage stress test</a></li>
        <li><a href="/blog/cmhc-mortgage-insurance-canada/">CMHC mortgage insurance</a></li>
        <li><a href="/blog/first-time-home-buyer-guide-canada/">First-time home buyer guide</a></li>
        <li><a href="/blog/mortgage-renewal-strategy-canada/">Mortgage renewal strategy</a></li>
    </ul>

    ${batchFooter(D, 'Real Estate', disclaimer)}

</div>`;

export const thirtyYearAmortizationCanadaPost = batchPost({
  date: D,
  category: 'Real Estate',
  categorySlug: 'real-estate',
  subcategory: 'mortgages-renewal',
  slug: '30-year-amortization-canada',
  title: '25 vs 30-Year Mortgage Amortization: The Real Cost',
  excerpt:
    'Who can get a 30-year amortization in Canada, what it costs against 25 years at three illustration rates, the CMHC 0.20% surcharge and how it changes the stress test.',
  content,
});
