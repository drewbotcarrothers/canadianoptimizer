import { barChart, flowChart } from '../../lib/earn-visuals';
import { cta, directAnswer, howto, readNext, sources, takeaways, toc } from './chrome';

const footer = `<div class="article-footer">
        <p><strong>Disclaimer:</strong> This is general education about side income in Canada as of October 2026. It is not tax, legal, or business advice, and it is not a filing position. Survey figures are quoted from the publisher named in the sources. Platform fee splits that were not on the survey page itself are not repeated here. Confirm CRA’s current pages before you decide a sale is tax-free or that a platform will not report you.</p>
        <div class="footer-note">Published: October 15, 2026 | Updated: October 16, 2026 | Category: Earning More | Author: Andrew</div>
    </div>`;

export const marketplaceContent = `<div class="container">

    <div class="hook">
        Selling a couch on Facebook Marketplace is not the same activity as buying couches to sell. <span class="highlight">CRA’s line is personal-use clean-out versus a business carried on for profit.</span> The payoff is a record you can point at if the sales get regular, and a stop before you call every garage sale taxable.
    </div>

    ${directAnswer('Selling your own used personal belongings on Facebook Marketplace is generally not business income. Buying items to resell, or selling often enough that the activity is a business, is taxable. A platform report to CRA does not create tax by itself. Keep a note of what you sold and why you owned it.')}

    ${takeaways([
      'Occasional sales of personal-use property are the clean-out. A pattern of buying low and selling high is a shop, even if the shop is your porch.',
      'The excluded-seller rule for platform reporting, under 30 sales of goods and $2,800 or less, is about what the platform must file. It is not a tax-free allowance. Details are in <a href="/blog/platform-reporting-rules-canada/">platform reporting</a>.',
      'If the activity is a business, GST/HST can apply once taxable supplies cross $30,000. Most closet clean-outs never get there.',
      'Omnisend’s 2026 chart puts Facebook Marketplace at 53 percent of Canadian online sellers. Popular does not mean invisible to CRA.',
      'Losses on personal-use property are generally not a business write-off. Do not invent deductions for a clean-out.',
    ])}

    ${toc([
      { id: 'line', label: 'When is a Marketplace sale taxable?' },
      { id: 'records', label: 'What should you keep?' },
      { id: 'numbers', label: 'What do the reporting numbers not mean?' },
      { id: 'hst', label: 'When does sales tax show up?' },
      { id: 'mistakes', label: 'What do sellers get wrong?' },
      { id: 'sort', label: 'How do you sort a month of listings?' },
      { id: 'faq', label: 'Frequently asked questions' },
    ])}

    <h2 id="line">When is a Facebook Marketplace sale business income?</h2>
    <p>When you are carrying on a business. CRA’s platform-economy materials treat peer-to-peer sales as a place business income shows up, and they still distinguish a business from an occasional sale of something you used. The signals are ordinary: you bought it to sell, you sell regularly, you improve goods for resale, you advertise beyond a one-off listing, or the point of the activity is profit. One stroller you finished with is not that. Twenty strollers you sourced in a month is.</p>
    ${flowChart({
      aria: 'Flowchart: if you used the item yourself and you are not repeating the activity for profit, it is generally a personal sale. If you bought it to resell or you sell on a schedule, treat it as a business.',
      caption: 'Frequency and intention decide more than the app you tapped. Marketplace is the venue. It is not the tax category.',
      nodes: [
        { title: 'Did you buy it to resell?', kind: 'decision' },
        { title: 'Yes: treat it as a business', kind: 'result', text: 'Track cost, sale price, and fees.' },
        { title: 'No: was it personal-use, sold occasionally?', kind: 'decision' },
        { title: 'Yes: generally not business income', kind: 'option', text: 'Keep a note anyway.' },
      ],
    })}
    <p>The resale version, with the profit line written out, is <a href="/blog/reselling-flipping-canada/">reselling and flipping</a>. The return, once it is a business, is <a href="/blog/side-hustle-taxes-canada/">side-hustle taxes</a> and a T2125.</p>

    <h2 id="records">What records are worth keeping even for a clean-out?</h2>
    <p>A one-line note per item: what it was, roughly when you bought it for personal use, what you sold it for, and the date. You do not need a corporation for that. You need it if a year later the activity has become weekly and you cannot remember which sales were the closet.</p>
    ${howto('How to tell a closet clean-out from a Marketplace business', [
      { name: 'Ask why you owned it', text: 'Personal use, then a sale, points away from business income. Bought to flip, points toward it.' },
      { name: 'Count the repetition', text: 'A weekend clean-out is an event. A weekly sourcing trip is a business rhythm.' },
      { name: 'Write the dollars', text: 'Sale price minus what you paid, minus the platform fee if there was one. Personal-use losses are not a hobby write-off you should invent.' },
      { name: 'Separate the two lists', text: 'Closet on one page, inventory on another. Mixing them is how a clean-out starts to look like a shop, and how a shop pretends to be a clean-out.' },
      { name: 'Stop and register the tax account if the shop is real', text: 'Business number and GST/HST only when the rules say so. The name registration is optional until a buyer or a bank wants it.' },
    ])}
    <div class="example-box"><strong>Example, not a ruling.</strong> You sell a used desk you bought years ago for the apartment, for $80. You are not replacing it with desks you intend to sell. That is the clean-out pattern. Next month you buy four desks at garage sales for $40 each and list them at $120. Cost $160, expected sales $480, and the intention is profit. That second month is a business even if each listing looks like the first. Profit if all four sell and fees are zero in this example: $480 − $160 = <strong>$320</strong>. Fees come off that profit. This page does not quote a Marketplace fee, because a fee not verified against the platform’s own page would be a guess.</div>

    <h2 id="numbers">What do the $2,800 and 30-sale figures not mean?</h2>
    <p>They are the excluded-seller test for <strong>reporting by the platform</strong>, from the Income Tax Act’s definition in section 282. Both have to be true: fewer than 30 relevant activities for the sale of goods, and consideration of $2,800 or less. Services are not that goods test. Being excluded does not mean the profit is tax-free. Being reported does not mean every dollar is taxable. Read the reporting guide before you use the threshold as a target. Aiming to stay under $2,800 to “stay legal” misunderstands the law. The tax follows the business. The report follows the platform’s duty.</p>

    ${barChart({
      title: 'Two different questions',
      aria: 'A conceptual split between platform reporting thresholds and whether the sales are business income. Not a dollar chart of tax owing.',
      caption: 'The bar lengths are labels, not amounts of tax. Reporting is the platform’s filing. Tax is your filing. They overlap and they are not the same decision.',
      rows: [
        { label: 'Platform may report', pct: 70, text: 'Over the rule' },
        { label: 'You may owe tax', pct: 85, text: 'If it is a business' },
      ],
    })}

    <h2 id="hst">When would GST/HST apply to Marketplace sales?</h2>
    <p>When the sales are taxable supplies in a commercial activity and you are no longer a small supplier, or you registered voluntarily. The threshold is <strong>$30,000</strong> in a single calendar quarter or over four consecutive quarters. A closet clean-out of personal belongings is not that commercial activity. A resale business can reach $30,000 faster than the owner feels “big,” because the test is revenue, not profit. Used goods have special GST/HST rules in some cases. Do not assume every used sale is tax-free or that every used sale is taxable. The CRA page on used goods, and the side-hustle tax guide, are the next read once you are actually in business.</p>
    <div class="warning-box"><strong>Watch out.</strong> Cash sales are still sales. “They paid me in the parking lot” is not a category on the T2125. If the activity is a business, the parking-lot cash goes in the income line.</div>

    <h2 id="mistakes">What do Marketplace sellers get wrong?</h2>
    <ul class="checklist">
        <li>Treating “I used Facebook” as the test, instead of why they owned the item.</li>
        <li>Using the $2,800 reporting line as a tax-free cap.</li>
        <li>Deducting a personal-use loss against employment income.</li>
        <li>Ignoring a benefit clawback on profit that is taxable. <a href="/blog/side-income-benefits-tax-clawbacks-canada/">Clawbacks</a> can make a small shop less attractive than it looks.</li>
        <li>Scaling inventory before they know the hourly. The best-hustle frame is <a href="/blog/best-side-hustles-canada/">best side hustles</a>.</li>
    </ul>
    <p>Get an accountant when the activity is clearly a business and you have mixed personal and resale purchases in one bank account. You do not need one to sell a single used couch. A lawyer is the wrong first call unless the goods are regulated or the platform has frozen a large balance you believe is yours.</p>

    <h2 id="sort">How do you sort a month of listings into two piles?</h2>
    <p>Open the sold list. Give every item one row. The question on the row is why you owned it, not which app you used.</p>
    <div class="table-wrapper">
    <table>
        <caption>A sorting sheet for Marketplace sales. This is a record, not a CRA ruling.</caption>
        <thead><tr><th>Question</th><th>Clean-out pile</th><th>Business pile</th></tr></thead>
        <tbody>
            <tr><td>Why did you own it?</td><td>You bought it to use</td><td>You bought it to sell</td></tr>
            <tr><td>How often?</td><td>A purge, then it stops</td><td>You list most weeks</td></tr>
            <tr><td>What do you do with the cash?</td><td>It replaces an item you used up</td><td>You buy the next thing to list</td></tr>
            <tr><td>Where it goes at tax time</td><td>Usually not business income</td><td>T2125 if you are a sole prop</td></tr>
            <tr><td>GST/HST watch</td><td>A closet does not cross $30,000 as a commercial activity</td><td>Count taxable supplies toward $30,000</td></tr>
        </tbody>
    </table>
    </div>
    <p>Do the sort on the last Sunday of the month. It takes less time than arguing with a comment section. If a row is mixed, put it in the business pile and ask a tax preparer before you omit it. The costly error is calling a shop a clean-out. The cheap error is writing down a used lamp you do not need to report.</p>
    <p><strong>Stop and get help if</strong> you are buying inventory with a credit card, the sold total is climbing toward $30,000, or a platform has sent a slip that mixes both piles. <strong>Do not get help yet if</strong> the month is three items from your own apartment and you can say why you owned each one. The reporting rules, if a slip shows up, are <a href="/blog/platform-reporting-rules-canada/">the platform article</a>. The profit math, if the business pile is the point, is <a href="/blog/reselling-flipping-canada/">reselling</a>.</p>

    <h2 id="faq">Frequently asked questions</h2>
    <h3>Do I pay tax on Facebook Marketplace sales in Canada?</h3>
    <p>Not on a typical sale of your own used personal belongings. Yes, if you are carrying on a business, including buying to resell. The app does not decide. The pattern does.</p>
    <h3>Is there a dollar amount I can sell before it is taxable?</h3>
    <p>There is no personal-sale allowance this page can quote as a tax-free cap. The $2,800 figure is a platform-reporting threshold for excluded sellers of goods, and only together with the under-30-sales test. It is not a CRA hobby exemption.</p>
    <h3>What if I sell a lot of old clothes from my own closet?</h3>
    <p>Volume can start to look like a business, especially if you are buying more clothes to list. A one-time purge of what you wore is still the personal pattern. Write down which is which.</p>
    <h3>Does Marketplace send a slip to CRA?</h3>
    <p>Platforms that are reporting platform operators have filing duties. You might be an excluded seller of goods under the 30-sale and $2,800 tests. Either way, your tax obligation does not wait for a slip. The reporting article is the precise version.</p>
    <h3>Can I deduct mileage to meet a buyer?</h3>
    <p>If the sale is personal-use, do not invent a business deduction. If the activity is a business, vehicle costs have their own rules and a log. The side-hustle tax guide is where that log belongs. This page will not give you a cents-per-kilometre rate.</p>
    <h3>Do I need a business number to list an item?</h3>
    <p>No. You need a business number when CRA requires an account, most commonly GST/HST or payroll, or when you choose to register. Listing a used lamp does not require one.</p>
    <h3>What about income-tested benefits?</h3>
    <p>Business profit can change benefits even when the sales feel small. A clean-out that is not income should not. The reason the classification matters is the benefit return as much as the tax return.</p>
    <h3>Should I incorporate a Marketplace shop?</h3>
    <p>Not because you listed a couch. Incorporate for reasons that survive a reading of <a href="/blog/should-you-incorporate/">should you incorporate</a>. A sole prop can report a real resale business on a T2125.</p>

    ${sources([
      '<a href="https://www.canada.ca/en/revenue-agency/programs/about-canada-revenue-agency-cra/compliance/platform-economy.html">CRA: taxes and the platform economy</a>',
      '<a href="https://www.canada.ca/en/revenue-agency/programs/about-canada-revenue-agency-cra/compliance/reporting-rules-digital-platforms/who-is-affected.html">CRA: who is affected by platform reporting, including the excluded seller</a>',
      '<a href="https://laws-lois.justice.gc.ca/eng/acts/I-3.3/section-282.html">Income Tax Act, section 282, excluded seller</a>',
      '<a href="https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/gst-hst-businesses/when-register-charge.html">CRA: GST/HST $30,000 threshold</a>',
      '<a href="https://www.omnisend.com/side-hustles-report-2026">Omnisend 2026: Facebook Marketplace at 53 percent of Canadian online sellers</a>',
    ])}

    ${readNext([
      '<a href="/blog/platform-reporting-rules-canada/">When Etsy or eBay has to report you</a>',
      '<a href="/blog/reselling-flipping-canada/">How to price a flip before fees</a>',
      '<a href="/blog/side-hustle-taxes-canada/">How to report a real shop</a>',
      '<a href="/blog/best-side-hustles-canada/">Whether selling things is the right hustle</a>',
    ])}

    ${cta('Next step: if the sales are a business, run a sample profit through the income tax calculator before you spend it. The 2026 tax guide covers a T2125 sitting next to a job.')}

    ${footer}
</div>`;

export const platformContent = `<div class="container">

    <div class="hook">
        A platform slip is not a tax bill, and silence from the platform is not a pardon. <span class="highlight">CRA’s excluded-seller rule for goods is fewer than 30 sales and $2,800 or less, both of them.</span> The payoff is knowing whether you are under that reporting line, and knowing that the line does not decide whether you owe tax.
    </div>

    ${directAnswer('Platforms that are reporting platform operators may have to report your sales to CRA. You are an excluded seller of goods only if the platform facilitated fewer than 30 sales of goods and the consideration was $2,800 or less. Services, rides, and rentals are not that goods exception.')}

    ${takeaways([
      'The definition is in Income Tax Act subsection 282(1), and CRA’s “who is affected” page repeats it in plain language.',
      'Both conditions are required. Twenty-nine sales that total $3,000 are not excluded. Forty sales that total $2,000 are not excluded.',
      'The goods test does not cover personal services, rides, or property rental. Those can be relevant activities with their own reporting.',
      'Operators generally file by January 31 for the prior calendar year. A late slip does not move your filing deadline.',
      'You report business income whether or not a slip arrives. The return is <a href="/blog/side-hustle-taxes-canada/">side-hustle taxes</a>.',
    ])}

    ${toc([
      { id: 'who-reports', label: 'Who has to report?' },
      { id: 'excluded', label: 'When are you an excluded seller?' },
      { id: 'not-tax', label: 'Why is reporting not the same as tax?' },
      { id: 'do', label: 'What do you do with the information?' },
      { id: 'mistakes', label: 'What do sellers misunderstand?' },
      { id: 'three', label: 'How do tax, the slip, and GST/HST differ?' },
      { id: 'faq', label: 'Frequently asked questions' },
    ])}

    <h2 id="who-reports">Which platforms have to tell CRA about you?</h2>
    <p>Reporting platform operators. CRA’s page says that includes a platform operator resident in Canada, certain operators in partner jurisdictions who elect in, and operators who are not resident in Canada or a partner jurisdiction if they facilitate relevant activities by sellers resident in Canada or rentals of immovable property in Canada. An excluded platform operator is one whose entire model does not let sellers profit, or that has no reportable sellers. You cannot assume a foreign site is outside the rules because the headquarters are not in Canada.</p>
    <p>Relevant activities include the sale of goods and certain services: personal services, rental of real property, rides, and delivery. The goods-only exclusion is a narrow door inside a wider regime.</p>

    <h2 id="excluded">When does the $2,800 and 30-sale rule apply?</h2>
    <p>CRA’s wording: a seller with <strong>less than 30 relevant activities for the sale of goods</strong> and for which the total consideration paid or credited <strong>did not exceed $2,800</strong> during the reportable period. The statute says the same thing in subsection 282(1). “Less than 30” and “did not exceed $2,800” are a pair. Fail either one and the exclusion does not apply.</p>
    <div class="table-wrapper">
    <table>
        <caption>Goods sellers only. Both columns have to pass. Figures are the statutory tests, not an example.</caption>
        <thead><tr><th>Sales of goods</th><th>Consideration</th><th>Excluded seller?</th></tr></thead>
        <tbody>
            <tr><td>29</td><td>$2,800</td><td>Yes, if nothing else pulls you out</td></tr>
            <tr><td>29</td><td>$2,801</td><td>No</td></tr>
            <tr><td>30</td><td>$500</td><td>No. Thirty is not “less than 30.”</td></tr>
            <tr><td>10 rideshare trips</td><td>$400</td><td>The goods test does not answer this. Rides are not sales of goods.</td></tr>
        </tbody>
    </table>
    </div>
    ${barChart({
      title: 'The goods exclusion needs both tests',
      aria: 'Two bars showing the excluded-seller goods tests: fewer than 30 sales and consideration of 2800 dollars or less.',
      caption: 'Income Tax Act subsection 282(1) and CRA’s who-is-affected page. A seller who misses either test is not excluded on this ground. Other excluded-seller categories exist for governments, listed entities, and certain large property-rental operators.',
      rows: [
        { label: 'Under 30 sales', pct: 70, text: 'Required' },
        { label: '$2,800 or less', pct: 70, text: 'Required' },
      ],
    })}
    <div class="example-box"><strong>Example.</strong> You sell 12 handmade items for $200 each. Consideration is $2,400, and the count is under 30. You can fall in the goods exclusion if those are the only relevant goods activities that platform facilitated. You sell a 13th item for $500. Consideration is $2,900. The dollar test fails. The platform may have to report. The tax answer was already “business income” if you made the goods to sell. The report did not create that answer, and staying at $2,400 would not have erased it.</div>

    <h2 id="not-tax">Why can you owe tax with no slip, or get a slip and owe nothing?</h2>
    <p>The slip is an information return. Your T1 is the tax return. CRA’s own guidance, and the professional summaries that quote it, say exclusion from reporting does not remove tax. A personal-use sale that happens to be reported is still analyzed as a personal-use sale. A business that stays under the threshold is still a business. The Marketplace article is the personal-versus-shop line: <a href="/blog/facebook-marketplace-tax-canada/">Facebook Marketplace tax</a>.</p>
    <p>There is a second-order effect. People cap their selling at $2,800 to avoid a slip and then ignore $4,000 of service income that was never in the goods test. The cap did not work, and it trained them to watch the wrong number. Watch profit and the kind of activity. Let the platform watch its own threshold.</p>
    ${flowChart({
      aria: 'Flow: identify whether the activity is goods, a service, a ride, or a rental. Apply the goods exclusion only to goods. Then file business income if it is a business, slip or no slip.',
      caption: 'Reporting is the platform’s problem to solve. Tax is yours either way.',
      nodes: [
        { title: 'Goods, or something else?', kind: 'decision' },
        { title: 'Goods: both tests', text: 'Under 30 and $2,800 or less.' },
        { title: 'Service, ride, or rental', kind: 'option', text: 'Do not borrow the goods exclusion.' },
        { title: 'File if it is business income', kind: 'result' },
      ],
    })}

    <h2 id="do">What should you do when a slip arrives, or does not?</h2>
    ${howto('How to handle platform reporting as a Canadian seller', [
      { name: 'Keep your own total', text: 'Gross sales, fees, refunds, and the count of transactions, per platform, per calendar year. Do not wait for the slip to be your bookkeeping.' },
      { name: 'Match the slip to your total', text: 'If the slip is higher, look for gross versus net. Platforms often report consideration before your expenses. Your profit is not the slip.' },
      { name: 'Report the profit if it is a business', text: 'T2125 for a sole prop. The slip is support. It is not the form.' },
      { name: 'Do not net personal clean-out sales into the business', text: 'Separate lists. The reporting regime does not convert a used couch into inventory.' },
      { name: 'Watch $30,000 of taxable supplies', text: 'GST/HST is a third system, beside income tax and beside the information return. Crossing $30,000 is a registration event even if you were an excluded seller for income-tax reporting.' },
    ])}
    <div class="tip-box"><strong>Pro tip.</strong> Put the platform’s January 31 date on your calendar as a reconciliation date, not as a filing date. Your T1 deadline does not move because the slip is late. Self-employed filers who owe no tax under employment rules may have until June 15 to file, and tax owing is still due in April. Confirm the year you are in on CRA’s filing page. This article will not restate a deadline it might date wrong.</div>

    <h2 id="mistakes">What do people misunderstand?</h2>
    <ul class="checklist">
        <li>Treating $2,800 as a tax-free bracket.</li>
        <li>Applying the goods test to tutoring, design, delivery, or a short-term rental.</li>
        <li>Adding every platform together in their head and assuming each platform does the same. The test is what that platform facilitated.</li>
        <li>Deducting fees twice, once in their head and once because the slip was already net.</li>
        <li>Ignoring a benefit clawback on the profit. <a href="/blog/side-income-benefits-tax-clawbacks-canada/">Clawbacks</a> use income, not slips.</li>
    </ul>
    <p>An accountant is worth it when you have three platforms and you cannot tell gross from net, or when a slip includes personal and business sales in one total. You do not need one to understand the two-part goods test above.</p>

    <h2 id="three">How do income tax, the slip, and GST/HST sit on one sale?</h2>
    <p>Three systems. A sale can trip one, two, or none. People collapse them into “CRA knows, so I owe,” or “CRA does not know, so I do not.”</p>
    <div class="table-wrapper">
    <table>
        <caption>Three questions for one platform sale. Thresholds are from the pages linked in Sources.</caption>
        <thead><tr><th>System</th><th>The question</th><th>The line that matters</th></tr></thead>
        <tbody>
            <tr><td>Income tax</td><td>Are you carrying on a business?</td><td>No dollar cap this page can quote as tax-free</td></tr>
            <tr><td>Platform reporting</td><td>Must that platform file about your goods?</td><td>Fewer than 30 sales and $2,800 or less, both</td></tr>
            <tr><td>GST/HST</td><td>Are you still a small supplier?</td><td>$30,000 of taxable supplies</td></tr>
        </tbody>
    </table>
    </div>
    <p>Walk two goods examples. Forty sales you bought to resell, totalling $2,000. The count is not “fewer than 30,” so the goods exclusion does not apply. The activity is a business, so you report the profit. $2,000 is nowhere near $30,000, so GST/HST registration is not triggered by that total alone.</p>
    <p>Ten sales, totalling $4,000, same buy-to-resell facts. The count could pass and the dollars do not, because $4,000 is over $2,800. Exclusion fails. Income tax still follows the business. GST/HST still waits for $30,000 unless you register early or you are in a trade that must register anyway.</p>
    <p>Now a service. Ten tutoring sessions for $500. Do not borrow the goods test. Tutoring is not a sale of goods. Whether a platform must report it depends on the activity type in the Act, not on a number copied from a seller forum. Your income tax does not wait for that answer.</p>
    <p><strong>Keep your own total if</strong> you sell on more than one app. <strong>Call an accountant if</strong> one slip mixes a clean-out and a shop. The slip is support. Your books are the return.</p>

    <h2 id="faq">Frequently asked questions</h2>
    <h3>Will Etsy or eBay report me to CRA?</h3>
    <p>They may have to if they are reporting platform operators and you are not an excluded seller. For goods, exclusion requires fewer than 30 sales and consideration of $2,800 or less on that platform for the year. Confirm the platform’s own notice. This page cannot see your account.</p>
    <h3>If I stay under $2,800, is the income tax-free?</h3>
    <p>No. The figure is a reporting threshold for a defined exclusion. Business income under that line is still reported by you.</p>
    <h3>Do 30 sales at one dollar each get reported?</h3>
    <p>The exclusion needs less than 30. Thirty sales fail the count test even if the dollars are small. Whether a particular platform’s filing matches that reading is why you keep your own count.</p>
    <h3>Does this apply to Uber or DoorDash?</h3>
    <p>The goods exclusion does not describe rides and delivery. Those are relevant activities of a different kind. Driver tax, including the GST/HST registration exception, is <a href="/blog/rideshare-delivery-driver-taxes-canada/">the driver guide</a>.</p>
    <h3>What if the slip is wrong?</h3>
    <p>Reconcile it to your records and report the income you can support. Keep the correspondence. A wrong slip is not permission to ignore the sales, and it is not a requirement to report someone else’s number blindly.</p>
    <h3>Do I send the slip in with my return?</h3>
    <p>Follow the instructions on the return for information slips you received. The obligation to report business income exists even when you attach nothing. Software that asks for the slip is asking for a matching total, not creating the tax.</p>
    <h3>Can I split sales across platforms to stay excluded?</h3>
    <p>The test is per platform operator. Splitting to avoid a report does not change whether the combined activity is a business. You would be optimizing a form and ignoring the tax. Do not do that as a plan.</p>
    <h3>When do I register for GST/HST?</h3>
    <p>When you stop being a small supplier at $30,000 of taxable supplies, or sooner if you are in a mandatory category. Platform reporting does not register you. You do.</p>

    ${sources([
      '<a href="https://www.canada.ca/en/revenue-agency/programs/about-canada-revenue-agency-cra/compliance/reporting-rules-digital-platforms/who-is-affected.html">CRA: who is affected by the reporting rules for digital platform operators</a>',
      '<a href="https://www.canada.ca/en/revenue-agency/programs/about-canada-revenue-agency-cra/compliance/reporting-rules-digital-platforms/guidance-on-reporting-rules.html">CRA: guidance on the reporting rules</a>',
      '<a href="https://laws-lois.justice.gc.ca/eng/acts/I-3.3/section-282.html">Income Tax Act, section 282</a>',
      '<a href="https://laws-lois.justice.gc.ca/eng/acts/I-3.3/section-283.html">Income Tax Act, section 283, reliance on records</a>',
      '<a href="https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/gst-hst-businesses/when-register-charge.html">CRA: GST/HST registration threshold</a>',
    ])}

    ${readNext([
      '<a href="/blog/facebook-marketplace-tax-canada/">Personal sale versus a shop</a>',
      '<a href="/blog/side-hustle-taxes-canada/">How the income goes on a T2125</a>',
      '<a href="/blog/reselling-flipping-canada/">Pricing the goods before the slip arrives</a>',
      '<a href="/blog/content-creator-income-canada/">When the “sale” is a sponsorship, not goods</a>',
    ])}

    ${cta('Next step: report the profit, not the slip, and check the tax with the income tax calculator. The 2026 tax guide is the longer version of a year with platform income and a job.')}

    ${footer}
</div>`;

export const resellContent = `<div class="container">

    <div class="hook">
        Reselling in Canada is a buying job with a tax tail. <span class="highlight">Facebook Marketplace is where 53 percent of Canadian online sellers show up in Omnisend’s chart.</span> The payoff is a profit line you can do before you buy the object, and a platform choice based on the item, not on a fee split this page will not invent.
    </div>

    ${directAnswer('Reselling is profitable only when the sale price covers the item, the real fees, and your time, and you treat the profit as business income. Pick the platform that matches the object. Omnisend’s 2026 report puts Facebook Marketplace first among Canadian online sellers at 53 percent.')}

    ${takeaways([
      'Write the profit before you buy: expected price minus cost minus fees you have confirmed minus a reserve for returns.',
      'A personal-use clean-out is not this business. The line is <a href="/blog/facebook-marketplace-tax-canada/">Marketplace tax</a>.',
      'Platform reporting can apply once you leave the excluded-seller box. It does not set your fee or your tax.',
      'GST/HST watches revenue, not profit. A flipper with thin margins can cross $30,000 of sales and owe registration while the profit still feels small.',
      'One sourcing hour that produces nothing is still an hour. Put it in the hourly test from <a href="/blog/best-side-hustles-canada/">best side hustles</a>.',
    ])}

    ${toc([
      { id: 'match', label: 'Which platform matches the object?' },
      { id: 'profit', label: 'What is the profit line?' },
      { id: 'tax', label: 'When does flipping become a tax file?' },
      { id: 'hours', label: 'How do you stop the hours from eating the margin?' },
      { id: 'mistakes', label: 'What loses money before tax does?' },
      { id: 'review', label: 'How do you decide a category is done?' },
      { id: 'faq', label: 'Frequently asked questions' },
    ])}

    <h2 id="match">Which platform should you use for which object?</h2>
    <p>Match the buyer, not the logo. Local, bulky, and used-once items belong where a stranger can pick them up. Searchable collectibles belong where buyers already search. Handmade and digital goods belong where the buyer expects a shop, not a driveway. Omnisend found Facebook Marketplace leading Canadian online sellers at <strong>53 percent</strong>. That is usage. It is not a margin study. This page will not fill the rest of that chart with Amazon, eBay, or Etsy percentages that were not in the survey page text.</p>
    <div class="table-wrapper">
    <table>
        <caption>A matching guide. Fee percentages are omitted on purpose unless you read them on the platform’s current fee page.</caption>
        <thead><tr><th>Object</th><th>Where buyers already are</th><th>The operational cost people forget</th></tr></thead>
        <tbody>
            <tr><td>Furniture, baby gear, one-off household</td><td>Local pickup, which in Canada often means Marketplace</td><td>Your time waiting for no-shows. Price that hour.</td></tr>
            <tr><td>Clothing lots and small goods you will ship</td><td>A marketplace with shipping labels and buyer protection</td><td>Returns. A “sold” item that comes back is not profit.</td></tr>
            <tr><td>Handmade or digital files</td><td>A shop platform, often Etsy for this category</td><td>Fees change. Read the current schedule before you set a price. Do not use a 2024 blog’s percentage.</td></tr>
            <tr><td>Higher-value branded goods</td><td>Wherever the buyer will pay, and wherever authenticity rules will not seize the item</td><td>A seized item is a total loss. Know the platform’s restricted list.</td></tr>
        </tbody>
    </table>
    </div>
    <div class="tip-box"><strong>Pro tip.</strong> Open the fee page in a tab while you price the item. If you cannot find the fee, you do not know the profit. A round “they take 15 percent” from a forum is how flips go negative.</div>

    <h2 id="profit">How do you write the profit before you pay for the item?</h2>
    <p>Example, not a fee schedule. You can buy an item for <strong>$40</strong>. You believe it will sell for <strong>$100</strong>. You have confirmed a <strong>$8</strong> fee on that platform’s own page, and you set aside <strong>$5</strong> for a mailer. You have not confirmed those fees from this article. They are placeholders so the subtraction is visible.</p>
    <div class="example-calculation">
        <div class="line"><span>Expected sale</span><span>$100</span></div>
        <div class="line"><span>Cost</span><span>$40</span></div>
        <div class="line"><span>Placeholder fee</span><span>$8</span></div>
        <div class="line"><span>Placeholder shipping supply</span><span>$5</span></div>
        <div class="line total"><span>Cash left before tax and time</span><span>$47</span></div>
    </div>
    <p>If the sourcing and listing took two hours, the example pays $23.50 an hour before income tax and before the trips that found nothing. A week of empty sourcing can wipe the $47. Write those hours down for a month before you call the niche good. Ten wins and six wasted trips is the real hourly.</p>
    <p>If you are registered for GST/HST, the tax you collect is not part of the $47. In Ontario the HST rate on a taxable supply is <strong>13 percent</strong>. On a $100 taxable sale that is $13 you hold in trust, assuming the $100 is before tax. If your price is tax-included, you are eating part of the $13 out of the $47. Say which one you are doing. CRA requires the invoice to show the rate and whether tax is included.</p>

    ${flowChart({
      aria: 'Buying flow: confirm the fee, subtract cost and a return reserve, then buy only if the hourly still works.',
      caption: 'The buy decision is the business. The listing is the paperwork.',
      nodes: [
        { title: 'Fee confirmed on the platform’s page?', kind: 'decision' },
        { title: 'No: do not buy', kind: 'option' },
        { title: 'Yes: subtract cost, fee, returns', text: 'Then divide by hours.' },
        { title: 'Buy only if the hourly beats your alternative', kind: 'result' },
      ],
    })}

    <h2 id="tax">When is flipping a business CRA expects to see?</h2>
    <p>When you are buying to sell. That is the ordinary business test, and it does not wait for a platform slip. The excluded-seller rule, fewer than 30 goods sales and $2,800 or less, only tells you whether that platform may skip an information return. It is explained in <a href="/blog/platform-reporting-rules-canada/">platform reporting</a>. Your T2125 is still yours if the activity is a business.</p>
    <p>GST/HST is the trap in a low-margin flip. <strong>$30,000</strong> of sales can be a modest profit. If you sell $30,000 and your example margin is the $47 on a $100 sale, you have a lot of transactions and a registration duty on the supply that crosses the line. Model the threshold on revenue. People model it on “what I keep” and register a year late.</p>
    <div class="warning-box"><strong>Watch out.</strong> Personal items mixed into inventory make both the profit and the sales-tax total wrong. Separate bank card, or at least a separate column, from the first buy. A year of mixed purchases is an expensive reconstruction.</div>

    <h2 id="hours">How do you keep the hustle inside the hours you have?</h2>
    <p>Omnisend found <strong>91 percent</strong> of side hustlers work under 20 hours a week. Reselling blows that budget in the car. Cap sourcing the way you would cap a client: a set morning, a list, a maximum spend. When the cap is hit, you list what you have. You do not “just check one more sale.”</p>
    <p>Tools: a spreadsheet with cost, fee, sold price, and hours; the platform’s fee page; CRA My Business Account only when you are registering. A paid sourcing app is a cost. Put the subscription in the profit line for the month. If it costs more than the flips it found, cancel it. The pro of Marketplace for bulky goods is that you avoid shipping. The con is no-shows. The pro of a shipped marketplace is a bigger buyer pool. The con is fees and returns you must read on that site, not here.</p>

    <h2 id="mistakes">What loses money before the tax return does?</h2>
    <ul class="checklist">
        <li>Buying because the object is interesting, not because the subtraction works.</li>
        <li>Using a fee from memory.</li>
        <li>Ignoring returns and no-shows.</li>
        <li>Counting a personal-use sale as business revenue, or the reverse.</li>
        <li>Crossing $30,000 of sales without registering, because profit felt small.</li>
        <li>Quitting a job because one good month of flips felt like a salary. The runway test is <a href="/blog/side-hustle-to-full-time-canada/">side hustle to full-time</a>.</li>
    </ul>

    <h2 id="review">How do you decide a category is done?</h2>
    <p>The $47 example above assumed two hours and a clean sale. Change the hours and the decision changes, before tax ever enters.</p>
    <div class="example-calculation">
        <div class="line"><span>Same example profit</span><span>$47</span></div>
        <div class="line"><span>Two hours, as above</span><span>$47 ÷ 2 = $23.50 per hour</span></div>
        <div class="line total"><span>Four hours after a no-show and a second trip</span><span>$47 ÷ 4 = $11.75 per hour</span></div>
    </div>
    <p>Both lines are the same objects and the same placeholder fees. The second line is what reselling actually pays when the buyer does not come. If a category produces the four-hour version more often than the two-hour version, stop buying it. List what you have and move the sourcing hour to a category that picks up.</p>
    <div class="table-wrapper">
    <table>
        <caption>Local pickup versus a shipped marketplace. Fees are whatever that platform’s page says today.</caption>
        <thead><tr><th></th><th>Local pickup</th><th>Shipped</th></tr></thead>
        <tbody>
            <tr><td>Best for</td><td>Bulky goods, furniture, items you will not pack</td><td>Small goods with buyers outside your city</td></tr>
            <tr><td>The hour you lose</td><td>No-shows and second trips</td><td>Packing, drops, and returns</td></tr>
            <tr><td>The number you must read</td><td>Your own gas and time</td><td>The fee and the return rule on that site</td></tr>
            <tr><td>Stop when</td><td>The hourly falls under your alternative</td><td>Returns erase the month</td></tr>
        </tbody>
    </table>
    </div>
    <p>Review the sheet on Sunday. One category to keep, one to stop. A month of interesting buys with no sold column is a hobby you are funding. The side-hustle survey’s under-20-hour week is the cap, not a suggestion to add a third platform.</p>

    <h2 id="faq">Frequently asked questions</h2>
    <h3>What is the best platform to sell on in Canada?</h3>
    <p>The one where that object’s buyer already looks, after you have read the current fee. Marketplace is the most used in Omnisend’s 2026 chart, at 53 percent of Canadian online sellers. It is not automatically the most profitable for what you hold.</p>
    <h3>How do I calculate profit on a flip?</h3>
    <p>Sale price, minus what you paid, minus fees you confirmed, minus shipping supplies, minus a reserve if the category comes back often. Then subtract the hours. Tax comes after that profit exists.</p>
    <h3>Do I charge sales tax on used goods?</h3>
    <p>If you are a GST/HST registrant and the supply is taxable, yes, at the place-of-supply rate. Used goods have special rules. Read them before you assume every second-hand sale is exempt. Registration itself starts at the $30,000 small-supplier line for most businesses.</p>
    <h3>Will CRA see my flips if I use cash locally?</h3>
    <p>Your obligation does not depend on a slip. Cash from a resale business is income. A reporting platform may also file. The absence of a form is not a ruling.</p>
    <h3>Can I deduct my gas?</h3>
    <p>Business kilometres can be a business expense if you keep a log and the travel is for the business. Commuting and personal errands mixed into the same tank are how deductions get rejected. The tax guide covers the log. This page will not quote a per-kilometre rate.</p>
    <h3>Should I collect sales tax from the first sale?</h3>
    <p>Only if you are registered. Register when you must, or earlier if you want input tax credits and you accept the duties. Charging tax you are not registered to collect is its own problem.</p>
    <h3>Is flipping worth it under 10 hours a week?</h3>
    <p>Only if the hourly after fees beats the other uses of those hours, including rest and a raise at work. Do the month-long count before you buy a second storage bin.</p>
    <h3>Do I need a business licence?</h3>
    <p>Sometimes, from the city, especially for regular sales or storage. Provincial name registration is a different filing. <a href="/blog/how-to-register-a-business-canada/">How to register</a> covers Ontario’s $60 trade-name fee. Call the municipality before you assume a provincial registration is a local licence.</p>

    ${sources([
      '<a href="https://www.omnisend.com/side-hustles-report-2026">Omnisend: side hustles report 2026, Marketplace at 53 percent</a>',
      '<a href="https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/gst-hst-businesses/when-register-charge.html">CRA: when to register for GST/HST</a>',
      '<a href="https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/gst-hst-businesses/charge-collect-which-rate.html">CRA: which rate to charge, including 13 percent HST in Ontario</a>',
      '<a href="https://www.canada.ca/en/revenue-agency/programs/about-canada-revenue-agency-cra/compliance/reporting-rules-digital-platforms/who-is-affected.html">CRA: platform reporting and excluded sellers</a>',
    ])}

    ${readNext([
      '<a href="/blog/facebook-marketplace-tax-canada/">Clean-out versus a shop</a>',
      '<a href="/blog/platform-reporting-rules-canada/">The 30-sale and $2,800 reporting line</a>',
      '<a href="/blog/side-hustle-taxes-canada/">Reporting the profit</a>',
      '<a href="/blog/best-side-hustles-canada/">Whether resale fits your hours</a>',
    ])}

    ${cta('Next step: once a month of flips is real, separate the profit from the float you need to buy the next item, and estimate tax in the calculator. The 2026 tax guide is the T2125 walkthrough.')}

    ${footer}
</div>`;

export const creatorContent = `<div class="container">

    <div class="hook">
        A free product is not free when you posted about it. <span class="highlight">CRA’s own example includes a vacation valued at $5,000 as influencer income.</span> The payoff is a way to price a sponsorship, record the perk at fair market value, and know when the $30,000 GST/HST line applies to a hobby that started paying.
    </div>

    ${directAnswer('Content-creator income in Canada is taxable when you are carrying on a business, and it includes money and perks. CRA says to report non-monetary income at fair market value. Sponsorships, commissions, and free products you post about can be business income on a T2125, whether or not a slip arrives.')}

    ${takeaways([
      'CRA’s Maya example: a free all-inclusive vacation valued at $5,000 is included in income, along with sponsorship fees and commissions.',
      'The Competition Act requires disclosure of material connections, including free products. A tax bill and a disclosure are both real. One does not replace the other.',
      'Barter is income. CRA’s GST/HST special-cases page lists barter. A trade of a post for a product is not invisible.',
      'GST/HST can apply once taxable supplies, which can include creator services, cross $30,000. The French CRA influencer page says this in direct language.',
      'A $500 month of creator income can still affect benefits. Read <a href="/blog/side-income-benefits-tax-clawbacks-canada/">clawbacks</a> before you call a perk a gift.',
    ])}

    ${toc([
      { id: 'counts', label: 'What counts as creator income?' },
      { id: 'quote', label: 'How do you quote a sponsorship?' },
      { id: 'perks', label: 'How do you record a free product?' },
      { id: 'disclose', label: 'What do you have to tell the audience?' },
      { id: 'tax', label: 'When do GST/HST and a T2125 start?' },
      { id: 'close', label: 'What do you close at month end?' },
      { id: 'faq', label: 'Frequently asked questions' },
    ])}

    <h2 id="counts">What does CRA say you have to include?</h2>
    <p>If the social-media activity is a business, CRA’s influencer pages say you report monetary and non-monetary income. The list includes subscriptions, advertising, sponsorships, calls to action, merchandise and commissions, tips, perks such as products, clothes, trips, or other gifts, and referral codes. Non-monetary income goes in at <strong>fair market value</strong>. The detailed page’s Maya example includes a vacation <strong>valued at $5,000</strong>. A second example on that page adds subscription fees, commissions, bits, donations, a tournament payout, photo sales, ad revenue, and free equipment. Those are illustrations CRA published, not a typical Canadian creator’s year. Use them as a checklist of categories, not as a forecast.</p>
    <div class="example-box">
        <strong>Example, using CRA’s categories and made-up amounts except the vacation figure they published.</strong>
        <div class="example-calculation">
            <div class="line"><span>Two sponsored posts, example fees</span><span>$800</span></div>
            <div class="line"><span>Affiliate commissions, example</span><span>$150</span></div>
            <div class="line"><span>Free product you posted about, fair market value, example</span><span>$120</span></div>
            <div class="line"><span>Trip, using CRA’s Maya figure if that were your trip</span><span>$5,000</span></div>
            <div class="line total"><span>Income before expenses</span><span>$6,070</span></div>
        </div>
        <p>The $800, $150, and $120 are examples so you can see the addition. The $5,000 is CRA’s published vacation value in the Maya example. Your trip is worth what it was worth, not automatically $5,000. Expenses that were incurred to earn the income can reduce the profit. A camera you also use every weekend for family photos is not automatically 100 percent deductible. The side-hustle tax guide is the place for that split: <a href="/blog/side-hustle-taxes-canada/">side-hustle taxes</a>.</p>
    </div>

    <h2 id="quote">How do you quote a sponsorship so the perk does not disguise a low fee?</h2>
    <p>Price the deliverable in dollars, then decide whether a product replaces cash. It rarely replaces all of it.</p>
    <div class="script-box">
        <p><strong>Rate quote.</strong> “A 60-second integration on [channel] is [$fee], paid on delivery. If you are offering product as well, I will include the fair market value in my income. Product does not replace the fee unless we agree on a number in this email.”</p>
        <p><strong>If they only offer product.</strong> “I can do a product-only post if the retail value is at least [$number] and I would have bought it anyway. Otherwise I need a fee. I have to report the value either way.”</p>
        <p><strong>Usage rights.</strong> “The fee covers one post for 30 days. Whitelisting or running the video as an ad is an extra [$amount].”</p>
    </div>
    <p>The hourly underneath the fee is the same method as any freelance rate. If the video takes ten hours and the fee is $300, you are at $30 an hour before gear and before the tax on a perk they added. <a href="/blog/consulting-rate-after-cpp-ei-tax-canada/">Set the rate</a> from the income you need, not from a brand’s media kit.</p>

    ${barChart({
      title: 'Example: cash fee versus a perk you must report',
      aria: 'Illustrative bars of an 800 dollar fee, a 120 dollar product, and a 5000 dollar trip from CRA’s example category.',
      caption: 'The $800 and $120 are examples. The $5,000 is the vacation value in CRA’s Maya example on the social-media influencer page. A perk is income. It is not a substitute for checking that the cash fee was enough.',
      rows: [
        { label: 'Example fee', pct: 16, text: '$800' },
        { label: 'Example product', pct: 8, text: '$120' },
        { label: 'CRA trip example', pct: 100, text: '$5,000' },
      ],
    })}

    <h2 id="perks">How do you record a free product?</h2>
    <p>Write the date, the brand, what you received, and the fair market value you used. Fair market value is what a willing buyer would pay, not a fantasy retail price and not zero because you did not like the colour. If you return it unused and post nothing, ask whether you received income at all. If you post, assume you did. Keep the email that offered it. That email is the record CRA’s example implies when it says the vacation was valued at $5,000.</p>
    ${howto('How to handle a gifted product as a Canadian creator', [
      { name: 'Decide if it is a business', text: 'Regular posts, a media kit, or a profit motive point to yes. A one-off thank-you you never agreed to promote is a weaker case. When you are unsure, record it and ask a tax preparer before you omit it.' },
      { name: 'Record fair market value', text: 'The price a stranger would pay. Note the source of the number.' },
      { name: 'Invoice cash separately', text: 'Do not let a brand bury the fee inside “product value.”' },
      { name: 'Disclose the connection', text: 'Competition Bureau guidance: material connections include free products. Say so in the content, in plain language.' },
      { name: 'Add it to the GST/HST running total if the supply is taxable', text: 'Creator services can be taxable supplies. The $30,000 line is revenue, including the value of barter in the cases CRA describes.' },
    ])}

    <h2 id="disclose">What do you tell viewers, separate from the tax return?</h2>
    <p>The Competition Bureau says a material connection includes payment, commissions, free products, discounts, trips, tickets, and some personal relationships. Disclosures should be clear, in the format the viewer actually experiences, and a tag or a discount code alone is unlikely to be enough. Reviews should be based on actual experience. This is not a tax rule. It is an advertising rule that applies even when the fee was small. Failing it can be a Competition Act problem. Reporting the income does not cure a misleading post, and a clear disclosure does not make the fee tax-free.</p>
    <div class="warning-box"><strong>Watch out.</strong> A brand that says “we do not issue tax slips, so you do not report this” is wrong. CRA’s page says you report the income whether the activity is on a platform that sends an information return or not. Slips are <a href="/blog/platform-reporting-rules-canada/">platform reporting</a>. Your return is yours.</div>

    <h2 id="tax">When do you file a T2125 and charge GST/HST?</h2>
    <p>File a T2125 when the activity is business or professional income of a sole prop. CRA tells influencers to use Form T2125 and, if incorporated, a T2 and Schedule 125. Incorporate only if you needed a company. The test is <a href="/blog/should-you-incorporate/">should you incorporate</a>. A corporation does not make a perk disappear.</p>
    <p>GST/HST: once you are not a small supplier, you register and you charge tax on taxable supplies. The threshold is <strong>$30,000</strong>. CRA’s French influencer page states that online content is generally a taxable supply and that crossing $30,000 over four calendar quarters means you register, collect, and remit. Ontario’s HST rate is 13 percent. A $2,000 sponsorship fee can become $2,260 on the invoice if you are registered and the place of supply is Ontario. The extra $260 is not your money. Set it aside.</p>
    <p>CPP still applies to self-employed profit. The 2026 self-employed maximum is $8,460.90. A small creator year may be under the $3,500 basic exemption and owe no CPP. A year with a $5,000 trip included in income might not be. Run the profit, including perks, through that math. The calculator on this site is for income tax. CPP is a separate line you still have to plan.</p>

    <h2 id="close">What do you close at the end of the month?</h2>
    <p>A creator month is three piles: cash, perks you posted, and things you refused or returned. Only the first two belong in income. The third is a note so you can explain a parcel if someone asks.</p>
    ${flowChart({
      aria: 'Monthly close for creator income: cash to the invoice total, posted perks at fair market value, refused parcels left off income.',
      caption: 'Fair market value applies to what you accepted and posted. A parcel you sent back is not the vacation in CRA’s example.',
      nodes: [
        { title: 'Did you accept it and post?', kind: 'decision' },
        { title: 'Cash: invoice total', kind: 'option', text: 'Fees, commissions, bits.' },
        { title: 'Perk: fair market value', text: 'The price a stranger would pay.' },
        { title: 'Add both toward $30,000', kind: 'result', text: 'GST/HST watches revenue.' },
      ],
    })}
    <p>On the last day, write four lines: cash received, perk values, expenses with receipts, and hours. If the fee was $300 and the video took ten hours, the hour is $30 before the perk and before CPP. That is an example, and it is a reason to change the rate quote, not a reason to skip the perk on the T2125.</p>
    <p><strong>Charge HST on the next sponsorship if</strong> you are registered. <strong>Keep watching the $30,000 line if</strong> you are not. A year of product-only posts can cross it on fair market value while the bank account still looks small. Set the tax aside in a separate account the week the money arrives. The calculator estimates income tax. It does not hold the HST for you.</p>

    <h2 id="faq">Frequently asked questions</h2>
    <h3>Do influencers pay tax in Canada?</h3>
    <p>Yes, when the activity is a business. CRA includes sponsorships, commissions, tips, and perks at fair market value. A hobby that never had a profit motive is a different analysis. Regular commercial posting is the pattern CRA describes.</p>
    <h3>Is a gifted product taxable if I did not ask for it?</h3>
    <p>If you received it in the course of the business and posted as part of that activity, CRA’s pages point to fair market value. A random parcel you refuse or return is a different fact. Record what you did with it.</p>
    <h3>Do I report a $5,000 trip?</h3>
    <p>If your facts match the kind of exchange in CRA’s Maya example, yes, at fair market value. Their example uses $5,000. Your trip uses its own value. You may have expenses against the business income. You do not ignore the trip because it was “comped.”</p>
    <h3>Does disclosure make it tax-free?</h3>
    <p>No. Disclosure is a Competition Act issue. Tax is the Income Tax Act. Do both.</p>
    <h3>What if the brand pays me in another country?</h3>
    <p>CRA says a resident reports creator income earned in and outside Canada. Foreign tax withheld may be a credit, not a reason to skip the income. Keep the pay statement.</p>
    <h3>When do I charge HST on a sponsorship?</h3>
    <p>When you are a GST/HST registrant and the supply is taxable. Registration is required after the $30,000 small-supplier threshold, with the timing rules on CRA’s page. Under the threshold, charging tax you are not registered for is a mistake.</p>
    <h3>Can I deduct a camera?</h3>
    <p>The business portion, under the capital-cost rules, not as a full expense just because you bought it in a year you posted. Mixed personal use has to be split. Do not take a percentage you cannot explain.</p>
    <h3>Should creator income change my benefits?</h3>
    <p>If it is taxable income, it can. A perk included at fair market value increases income without increasing cash. That is the unpleasant second-order effect. Price it before you accept a product-only deal in a household that receives income-tested benefits.</p>

    ${sources([
      '<a href="https://www.canada.ca/en/revenue-agency/programs/about-canada-revenue-agency-cra/compliance/platform-economy/social-media-influencers.html">CRA: social media influencers, including the $5,000 vacation example</a>',
      '<a href="https://www.canada.ca/en/revenue-agency/news/newsroom/tax-tips/tax-tips-2022/are-you-a-social-media-influencer-heres-what-you-need-to-know.html">CRA tax tip: influencer income, monetary and non-monetary</a>',
      '<a href="https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/gst-hst-businesses/charge-collect-special-cases.html">CRA: GST/HST special cases, including barter</a>',
      '<a href="https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/gst-hst-businesses/when-register-charge.html">CRA: $30,000 GST/HST threshold</a>',
      '<a href="https://competition-bureau.canada.ca/en/deceptive-marketing-practices/types-deceptive-marketing-practices/influencer-marketing-and-competition-act">Competition Bureau: influencer marketing and the Competition Act</a>',
    ])}

    ${readNext([
      '<a href="/blog/side-hustle-taxes-canada/">How the income goes on a T2125</a>',
      '<a href="/blog/platform-reporting-rules-canada/">When a platform also tells CRA</a>',
      '<a href="/blog/consulting-rate-after-cpp-ei-tax-canada/">Turn a sponsorship into an hourly that works</a>',
      '<a href="/blog/best-side-hustles-canada/">Whether creating fits the hours</a>',
    ])}

    ${cta('Next step: add cash fees and the fair market value of perks, then estimate the tax in the calculator before you spend the fee. The 2026 tax guide is the longer personal return for that mix.')}

    ${footer}
</div>`;
