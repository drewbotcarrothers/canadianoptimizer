type TaxPost = {
  title: string;
  slug: string;
  category: string;
  categorySlug: string;
  author: string;
  date: string;
  updated: string;
  excerpt: string;
  image: string;
  content: string;
};

const meta = {
  category: 'Taxes',
  categorySlug: 'taxes',
  author: 'Andrew Carrothers',
  date: '2026-09-27',
  updated: '2026-09-27',
} as const;

function taxPost(slug: string, title: string, excerpt: string, content: string): TaxPost {
  return {
    ...meta,
    title,
    slug,
    excerpt,
    image: `/images/blog/${slug}.png`,
    content,
  };
}

const footer = (published: string) => `<div class="article-footer">
        <p><strong>Disclaimer:</strong> This is general education about Canadian income tax as of September 2026. It is not tax, legal, or investment advice, and it is not a filing position. Brackets, credits, penalties, and inclusion rates change, and they depend on your return. Figures below are tied to CRA, the Department of Finance, Revenu Québec, or a provincial finance page reviewed in September 2026. Dollar examples are illustrations of arithmetic, not a projection of your assessment. Confirm the current form and consult a tax professional for your file.</p>
        <div class="footer-note">Published: ${published} | Category: Taxes | Author: Andrew Carrothers</div>
    </div>`;

const published = 'September 27, 2026';

export const taxesClusterPosts: TaxPost[] = [
  taxPost(
    'capital-gains-tax-canada',
    'Capital Gains Tax in Canada (2026): 50% Inclusion, Calculation, and Planning',
    'In 2026, one-half of a capital gain is taxable in Canada. The proposal to raise that inclusion rate to two-thirds was cancelled in March 2025 and was not enacted.',
    `<div class="container">

    <div class="hook">
        In 2026, Canada taxes <span class="highlight">one-half of a capital gain</span>. The other half is not included in income. A 2024 proposal to raise the inclusion rate to two-thirds was cancelled on March 21, 2025, and it was never passed into law. The map of the system these gains sit inside is <a href="/blog/how-canadian-taxes-work/">how Canadian taxes work</a>.
    </div>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>Taxable capital gain = one-half of (proceeds minus adjusted cost base minus selling costs), under the inclusion rate in force for 2026.</li>
            <li>The two-thirds rate, and the $250,000 individual threshold that went with it, were a proposal. The Prime Minister cancelled that proposal on March 21, 2025.</li>
            <li>CRA pages written at the January 2025 deferral still describe a January 1, 2026 effective date. That text describes a proposal that was later dropped. The enacted rate CRA was already administering is one-half.</li>
            <li>A capital loss offsets capital gains, not salary. The superficial-loss rule can deny the loss if you rebuy too soon.</li>
            <li>The lifetime capital gains exemption is a different rule, for qualifying small-business shares and farm or fishing property, not for a typical ETF.</li>
        </ul>
    </div>

    <h2>What is the capital gains inclusion rate in 2026?</h2>

    <p>The inclusion rate is the fraction of a capital gain that enters your income. For 2026 that fraction is one-half, for individuals, corporations, and trusts, unless a specific exemption sets it to zero. There is no annual $250,000 band at a higher rate, because that band was part of the proposal that did not become law.</p>

    <p>The sequence, from the official notices, is short. Budget 2024 proposed raising the rate from one-half to two-thirds, above $250,000 of gains a year for individuals and on all gains of corporations and most trusts, from June 25, 2024. On January 31, 2025 the Department of Finance deferred that date to January 1, 2026, and the CRA said it would keep administering the enacted one-half rate for gains before the new date. On March 21, 2025 the Prime Minister announced the government would cancel the increase. The increase was not enacted. Some CRA "what's new" pages still repeat the January deferral language. Read them as history of a proposal, not as the 2026 rate.</p>

    <table>
        <caption>Capital gains inclusion rate, as of September 2026</caption>
        <thead>
            <tr>
                <th>What happened</th>
                <th>Rate that applies</th>
                <th>Source</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Enacted rule, including gains realized in 2026</td>
                <td>One-half</td>
                <td>CRA administered the enacted one-half rate while the proposal was outstanding</td>
            </tr>
            <tr>
                <td>Budget 2024 proposal, deferred on January 31, 2025 to January 1, 2026</td>
                <td>Not in force. Would have been two-thirds above $250,000 for individuals, and on all gains of corporations and most trusts</td>
                <td>Department of Finance, January 31, 2025</td>
            </tr>
            <tr>
                <td>March 21, 2025 announcement</td>
                <td>Proposal cancelled. One-half remains</td>
                <td>Prime Minister of Canada</td>
            </tr>
            <tr>
                <td>Gift of certain listed securities to a qualified donee</td>
                <td>Inclusion rate of zero on that gift</td>
                <td>CRA, capital gains on gifts of certain capital property</td>
            </tr>
        </tbody>
    </table>

    <p>Table as of September 2026. The lifetime exemption increase to $1.25 million was kept. That is a separate limit, covered below. The account-location version of this rule is <a href="/blog/tax-efficient-investing/">tax-efficient investing</a>.</p>

    <h2>How do you calculate the tax?</h2>

    <p>A capital gain is not a tax rate. It is an amount that then rides your ordinary brackets. Three numbers:</p>

    <ol>
        <li><strong>Proceeds of disposition.</strong> What you received, generally the selling price.</li>
        <li><strong>Adjusted cost base.</strong> What you paid, plus costs to buy, adjusted for returns of capital and reinvested distributions. A T5008 is an input, not the books. The habit is in the <a href="/blog/tax-record-keeping/">record-keeping guide</a>.</li>
        <li><strong>Outlays and expenses.</strong> Commission to sell, for example.</li>
    </ol>

    <p>Gain = proceeds − adjusted cost base − outlays. Taxable capital gain = one-half of that gain. That taxable half is added to your other income and taxed at your marginal rate. The other half is not taxed. You report it on Schedule 3.</p>

    <div class="example-box">
        <strong>Illustration: Priya in Ontario sells ETF units</strong>
        <p>Proceeds $58,000. Adjusted cost base $40,000. Commission $50. Capital gain = $58,000 − $40,000 − $50 = $17,950. Taxable capital gain = one-half × $17,950 = $8,975. The other $8,975 is not included. If the included half is taxed at a combined marginal rate of 29.65 percent — the federal 20.5 percent bracket plus Ontario's 9.15 percent bracket, which is where the <a href="/blog/canada-income-tax-calculator/">2026 calculator</a> lands on about $80,000 of ordinary taxable income — the tax on this gain is about $8,975 × 0.2965 = $2,661. That rate is an illustration of those two brackets, not her whole return. Provincial surtax, credits, and other income move it.</p>
    </div>

    <p>The same $17,950 at a two-thirds inclusion would have put $11,967 into income. That is the proposal that was cancelled. Do not file 2026 on that fraction.</p>

    <h2>What if you have a loss?</h2>

    <p>An allowable capital loss is one-half of a capital loss, matching the inclusion rate. It offsets taxable capital gains. It does not offset salary, interest, or business income. Unused net capital losses carry back three years on Form T1A and forward indefinitely, still against capital gains. The year-end sequence is the <a href="/blog/tax-loss-harvesting-calendar-canada/">tax-loss harvesting calendar</a>.</p>

    <p>The superficial-loss rule denies the loss when you, or an affiliated person, acquire the same property in the window that runs 30 days before the sale and 30 days after, and still hold it at the end of that window. A repurchase inside your TFSA or RRSP is the version that deletes the loss permanently, because those accounts have no personal capital gain to attach the denied loss to.</p>

    <h2>Which gains are not taxed at one-half?</h2>

    <ul>
        <li><strong>Your principal residence,</strong> when the exemption applies. The designation rules, and the trap when a property was also a rental, sit with the <a href="/blog/primary-residence-vs-rental-property-canada/">primary residence versus rental</a> comparison. This page does not replace Form T2091.</li>
        <li><strong>Gains inside a TFSA, RRSP, RRIF, or FHSA.</strong> There is no personal capital gain on a sale inside those accounts. The RRSP version comes back later as ordinary income when you withdraw. The account comparison is <a href="/blog/rrsp-vs-tfsa-vs-fhsa/">RRSP versus TFSA versus FHSA</a>.</li>
        <li><strong>Listed securities donated in kind</strong> to a registered charity or other qualified donee. The inclusion rate on that gift can be zero, and you still get a donation receipt for fair market value. The credit math is the <a href="/blog/charitable-donation-tax-credit-canada/">donation tax credit</a>.</li>
        <li><strong>Qualifying small-business shares and qualified farm or fishing property,</strong> up to the lifetime capital gains exemption. CRA describes the limit as $1.25 million for dispositions after June 24, 2024, with indexation resuming in 2026. The federal indexing factor CRA published for January 1, 2026 is 2.0 percent. Applied to $1.25 million, that arithmetic is $1,275,000. Confirm the indexed dollar on CRA's indexation chart before you rely on it. The exemption is not a credit on a cottage or a public stock.</li>
        <li><strong>Business income, not capital.</strong> If you are trading rather than investing, the profit can be fully included. That distinction is the whole of the <a href="/blog/crypto-tax-canada/">crypto tax guide</a>, and it applies to shares too.</li>
    </ul>

    <div class="warning-box">
        <strong>Large gains can still trigger minimum tax:</strong>
        <p>Regular tax includes half the gain. The alternative minimum tax, since 2024, includes the full gain and taxes the excess over a basic exemption at 20.5 percent. A gain that looks lightly taxed under the one-half rate can still produce minimum tax. Read the <a href="/blog/amt-canada/">AMT guide</a> before a large sale or a large in-kind donation.</p>
    </div>

    <h2>Does the rate differ inside a corporation?</h2>

    <p>The inclusion rate is one-half there too, now that the two-thirds proposal is cancelled. The taxable half is investment income inside a Canadian-controlled private corporation, taxed up front, with a refundable piece when the company pays a taxable dividend. The untaxed half can be added to the capital dividend account and paid out as a capital dividend, which requires an election. That machinery is <a href="/blog/corporate-vs-personal-investing-canada/">corporate versus personal investing</a>. It is accountant work.</p>

    <h2>Frequently asked questions</h2>

    <h3>Is the capital gains inclusion rate 50 percent or 66.67 percent in 2026?</h3>
    <p>One-half. The two-thirds proposal from Budget 2024 was deferred to January 1, 2026 and then cancelled on March 21, 2025. It was not enacted. File Schedule 3 at one-half unless a specific rule, such as a gift of listed securities, sets the inclusion to zero.</p>

    <h3>Do I pay capital gains tax when my ETF goes up but I do not sell?</h3>
    <p>Not on the unrealized rise in units you still hold. You can still receive a taxable capital gain the fund distributes, including a gain it realized inside the fund and reinvested. That distribution is on the T3, and it changes your adjusted cost base. An unrealized personal gain is not a tax bill yet.</p>

    <h3>Can I use a capital loss against my salary?</h3>
    <p>No. Allowable capital losses offset taxable capital gains. They carry back three years and forward indefinitely against gains. They do not reduce employment income. That is a different rule from the United States.</p>

    <h3>Does my spouse's TFSA purchase after I sell ruin the loss?</h3>
    <p>It can. The superficial-loss rule looks at you and affiliated persons, which includes a spouse, and it looks inside registered accounts. If the same property is acquired in that window and still held at the end of it, the loss is denied. Pick a substitute that is not the identical property.</p>

    <h3>Is the $1.25 million lifetime exemption available on my rental or my stocks?</h3>
    <p>Not on a typical rental, cottage, or publicly traded stock. The lifetime capital gains exemption CRA describes applies to qualified small business corporation shares and qualified farm or fishing property, and the tests are strict. The $1.25 million figure is the limit CRA states for dispositions after June 24, 2024. Indexation resumes in 2026. Confirm the indexed amount before you sell.</p>

    <h3>Where do I report a gain?</h3>
    <p>Schedule 3, then the taxable half on your return. Keep the confirmation slip, the adjusted cost base worksheet, and the T5008. If the gain is large enough that minimum tax is plausible, also complete Form T691. The filing software roundup is <a href="/blog/best-tax-software/">best tax software</a>, and it does not replace the schedule.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="https://www.pm.gc.ca/en/news/news-releases/2025/03/21/prime-minister-mark-carney-cancels-proposed-capital-gains-tax-increase">Prime Minister of Canada: cancellation of the proposed capital gains increase, March 21, 2025</a></li>
        <li><a href="https://www.canada.ca/en/department-finance/news/2025/01/government-of-canada-announces-deferral-in-implementation-of-change-to-capital-gains-inclusion-rate.html">Department of Finance: deferral announcement, January 31, 2025</a></li>
        <li><a href="https://www.canada.ca/en/revenue-agency/news/newsroom/tax-tips/tax-tips-2025/update-cra-administration-proposed-capital-gains-taxation-changes.html">CRA: administration of the proposed changes, and the enacted one-half rate</a></li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-34900-donations-gifts/capital-gains-realized-on-gifts-certain-capital-property.html">CRA: inclusion rate of zero on gifts of certain capital property</a></li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/personal-income/line-12700-capital-gains/you-calculate-your-capital-gain-loss.html">CRA: how to calculate a capital gain or loss</a></li>
    </ul>

    <div class="cta-section">
        <p><strong>The inclusion rate is the easy half. The return is the rest.</strong></p>
        <p>Brackets, the adjusted cost base, and the credits around a gain are the filing problem. The 2026 tax guide is that companion, $49 CAD.</p>
        <a href="/ebooks/tax-guide/" class="cta-button">Get the 2026 Tax Guide — $49 CAD</a>
    </div>

    ${footer(published)}

</div>`
  ),

  taxPost(
    'amt-canada',
    'Alternative Minimum Tax (AMT) in Canada: Who Gets Caught After the 2024 Changes',
    'For 2026, federal alternative minimum tax is 20.5 percent above a basic exemption of $181,440. Salary alone rarely triggers it. Large capital gains can.',
    `<div class="container">

    <div class="hook">
        For 2026, federal alternative minimum tax is <span class="highlight">20.5 percent</span> of adjusted taxable income above a basic exemption of <span class="highlight">$181,440</span>. You pay it only when that minimum exceeds your ordinary federal tax. Most people who earn a salary never see it. The ordinary system those salaries run through is <a href="/blog/how-canadian-taxes-work/">how Canadian taxes work</a>.
    </div>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>AMT is a parallel calculation on Form T691. You pay the difference if minimum tax is higher than regular tax. The extra can be carried forward up to seven years against regular tax.</li>
            <li>Since 2024 the rate is 20.5 percent, which is the second federal bracket rate. The basic exemption is the start of the fourth federal bracket. CRA's 2026 brackets put that start at $181,440. CRA's 2025 instructions used $177,882, the 2025 start of the same bracket.</li>
            <li>The exemption does not apply to trusts. A trust can owe AMT on amounts that would be sheltered for a person.</li>
            <li>Ordinary employment income, fully taxed, almost never produces AMT. Preferential income does: large capital gains, the lifetime capital gains exemption, and in-kind gifts of listed securities.</li>
            <li>Provinces and territories generally add their own minimum tax on top of the federal amount. Quebec calculates its version separately. This page is the federal calculation.</li>
        </ul>
    </div>

    <h2>Who actually pays alternative minimum tax?</h2>

    <p>AMT exists so that a large tax preference in one year cannot reduce federal tax to nearly nothing. You compute regular tax. You compute a second tax on a broader base, at a flat rate, above an exemption. If the second number is higher, you pay the difference, on line 41700.</p>

    <p>CRA's line 41700 page for the 2025 return tells you that if the relevant income total is $177,882 or less you probably do not owe minimum tax, and if it is higher you complete Form T691. $177,882 is the 2025 start of the 29 percent federal bracket. For 2026, CRA's bracket table starts that same bracket at $181,440. The exemption tracks that threshold. CIBC's May 2026 summary of the rules in force since 2024 uses $181,440 for the 2026 exemption and 20.5 percent for the rate. Use Form T691 for the year you file. Do not reuse a 2025 software file.</p>

    <table>
        <caption>Federal AMT parameters, as of September 2026</caption>
        <thead>
            <tr>
                <th>Item</th>
                <th>Before 2024</th>
                <th>2024 and after, including 2026</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Rate</td>
                <td>15 percent</td>
                <td>20.5 percent</td>
            </tr>
            <tr>
                <td>Basic exemption for individuals</td>
                <td>$40,000</td>
                <td>Start of the fourth federal bracket. $181,440 for 2026. Not available to trusts.</td>
            </tr>
            <tr>
                <td>Capital gains in the AMT base</td>
                <td>80 percent included</td>
                <td>100 percent included</td>
            </tr>
            <tr>
                <td>Capital gains on listed securities donated in kind</td>
                <td>Zero, matching regular tax</td>
                <td>30 percent included for AMT</td>
            </tr>
            <tr>
                <td>Donation tax credit allowed against AMT</td>
                <td>Generally the full credit</td>
                <td>80 percent</td>
            </tr>
            <tr>
                <td>Most other non-refundable credits, including the basic personal amount</td>
                <td>Generally allowed</td>
                <td>50 percent</td>
            </tr>
            <tr>
                <td>Lifetime capital gains exemption in the AMT base</td>
                <td>Different fraction</td>
                <td>30 percent of the exempt gain remains in the AMT base (the exemption is allowed at 70 percent)</td>
            </tr>
        </tbody>
    </table>

    <p>Table as of September 2026. The rate and the exemption threshold are tied to CRA's published brackets and to CRA's 2025 line 41700 instructions. The inclusion percentages are the post-2023 rules as summarized by CIBC Private Wealth in May 2026. Form T691 is the CRA form that applies them. The regular inclusion rate, which is still one-half, is the <a href="/blog/capital-gains-tax-canada/">capital gains guide</a>.</p>

    <h2>Why does a salary almost never trigger it?</h2>

    <p>Employment income is fully included under both calculations. Regular tax on a high salary uses brackets up to 33 percent. AMT uses 20.5 percent, and only above $181,440. The graduated tax is higher, so the minimum does not bite. The same is generally true of interest, rents, and other fully taxed income. AMT is a preference tax. If you have no preference, you are not the audience.</p>

    <div class="example-box">
        <strong>Illustration: a $400,000 capital gain and nothing else, federal only</strong>
        <p>Regular tax includes half, so taxable income is $200,000. Federal tax on $200,000, after the basic personal amount phased down for income between $181,440 and $258,482, is $40,066.79. AMT includes the full $400,000, subtracts the $181,440 exemption, and taxes $218,560 at 20.5 percent, which is $44,804.80 before credits. Half of the maximum basic-personal-amount credit (half of $16,452 × 14 percent) is $1,151.64, leaving about $43,653 of minimum tax. The gap versus regular tax is about $3,586 of federal AMT. Provincial AMT is extra. This uses only the basic personal amount. CPP, carrying charges, and loss carryforwards change Form T691. It is an illustration, not a filing.</p>
    </div>

    <p>The sensitive cases are the ones where regular tax is unusually low relative to the economic gain. A qualifying small-business sale that uses the lifetime exemption can zero regular tax and still leave a minimum-tax bill, because only 70 percent of that gain is removed from the AMT base. A large in-kind gift of listed securities can do the same: regular tax uses a zero inclusion on the donated shares, while AMT includes 30 percent of that gain and allows only 80 percent of the donation credit. The gift is still often the better move. It is no longer free of minimum tax. The credit itself is the <a href="/blog/charitable-donation-tax-credit-canada/">donation tax credit</a>.</p>

    <h2>What else gets limited?</h2>

    <p>Since 2024, half of several deductions are disallowed in the AMT base. CIBC's May 2026 summary lists employment expenses other than those to earn commission income, moving expenses, child-care expenses, interest and carrying charges, investment-counsel fees, limited-partnership losses of other years, and non-capital loss carryovers. Capital-loss carryforwards are allowed at 50 percent, while current-year capital gains are included at 100 percent, so a loss carried forward does not fully shelter a current gain for AMT. The stock-option deduction that halves a qualifying benefit for regular tax is not available in the AMT base. Confirm each line on the current Form T691. A summary is not the form.</p>

    <p>Eligible Canadian dividends are a special case. The gross-up and the dividend tax credit are both ignored for AMT, and the cash dividend is what enters the base. CIBC's worked comparison shows that eligible dividends alone, even in large amounts, still produce more regular tax than AMT under the post-2023 rules. Do not assume a dividend year is an AMT year. Run the form.</p>

    <h2>Can you get the minimum tax back?</h2>

    <p>AMT you pay can be carried forward for up to seven years and used against regular federal tax in a later year, to the extent regular tax exceeds minimum tax in that later year. It is a timing tax for many people, not a permanent extra tax. It is still cash in the year of the sale. If you realize a large gain and then have several low-income years, the carryforward can expire unused. That is the planning problem, not the rate table. The brackets you are comparing it with are the <a href="/blog/federal-tax-brackets/">2026 federal brackets</a>, and the combined bill is what the <a href="/blog/canada-income-tax-calculator/">income tax calculator</a> estimates before AMT.</p>

    <div class="tip-box">
        <strong>Spread a gain only if the alternative is real:</strong>
        <p>Realizing a capital gain over two calendar years can keep each year under the exemption, or can leave enough regular tax to absorb the minimum. That only helps if you were going to sell across the date anyway. A sale you delay for a tax reason you have not modelled is not a plan. The loss-harvesting calendar is a different tool and should not be mixed into a gain you actually want.</p>
    </div>

    <h2>Frequently asked questions</h2>

    <h3>Do I owe AMT if I only have a T4?</h3>
    <p>Almost certainly not. Fully taxed employment income produces more regular tax than the 20.5 percent minimum above $181,440. AMT shows up when a preference — a large capital gain, the lifetime exemption, a donation of securities, or a stack of limited deductions — pulls regular tax down. Complete Form T691 if you are anywhere near that description.</p>

    <h3>What is the 2026 basic exemption?</h3>
    <p>It is the start of the fourth federal tax bracket. CRA's 2026 bracket table puts that threshold at $181,440. CRA's 2025 line 41700 instructions used $177,882, which was the 2025 threshold. The exemption is for individuals. Trusts do not get it.</p>

    <h3>Does AMT replace provincial tax?</h3>
    <p>No. Provinces and territories generally levy their own minimum tax, often as a percentage of the federal amount. Quebec's calculation is separate. A federal-only illustration understates the cash you might owe in the year of a large gain.</p>

    <h3>I donated shares and paid no capital gains tax. Can I still owe AMT?</h3>
    <p>Yes. Since 2024, 30 percent of the capital gain on donated listed securities is included in the AMT base, and only 80 percent of the donation credit counts against minimum tax. The regular inclusion on that gift is still zero. The donation can remain the better tax result and still produce a minimum-tax cheque.</p>

    <h3>Is the minimum tax gone if I am under $181,440 of ordinary income?</h3>
    <p>The exemption is applied to adjusted taxable income, not to your salary line. A $400,000 capital gain is $400,000 in the AMT base even though only $200,000 is in regular taxable income. Look at the AMT base, then subtract $181,440.</p>

    <h3>How long can I carry AMT forward?</h3>
    <p>Up to seven years, against regular federal tax in a year when regular tax exceeds minimum tax. It is not a refund in the year you pay it. If later years stay light, the carryforward can expire. Track it. Your notice of assessment is the record.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/deductions-credits-expenses/line-41700-minimum-tax.html">CRA: line 41700, minimum tax</a></li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/tax-rates-brackets/current-year.html">CRA: 2026 federal brackets, including the $181,440 threshold</a></li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/forms-publications/forms/t691.html">CRA: Form T691, Alternative Minimum Tax</a></li>
        <li><a href="https://www.cibc.com/content/dam/cibc-public-assets/personal-banking/smart-advice/tax-savings-tips/pdfs/amt-changes-en.pdf">CIBC Private Wealth, May 2026: the AMT rules in force since 2024</a></li>
    </ul>

    <div class="cta-section">
        <p><strong>Minimum tax is a form, not a vibe.</strong></p>
        <p>The preferences that trigger it are the same ones the rest of a return turns on. The 2026 tax guide is the filing companion, $49 CAD.</p>
        <a href="/ebooks/tax-guide/" class="cta-button">Get the 2026 Tax Guide — $49 CAD</a>
    </div>

    ${footer(published)}

</div>`
  ),

  taxPost(
    'canada-income-tax-calculator',
    'Canadian Income Tax Calculator 2026 (Every Province)',
    'Estimate 2026 federal and provincial tax on taxable income for every province and territory, using CRA brackets as of September 2026, after the basic personal amount.',
    `<div class="container">

    <div class="hook">
        For 2026, federal tax starts at <span class="highlight">14 percent</span> on taxable income up to $58,523 and reaches 33 percent above $258,482. Your province or territory on December 31 adds its own brackets. The calculator below applies those brackets and the basic personal amount. The system around the brackets is <a href="/blog/how-canadian-taxes-work/">how Canadian taxes work</a>.
    </div>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>Enter taxable income, the amount after deductions such as an RRSP contribution. This is not a gross-salary tool and it does not subtract CPP or EI.</li>
            <li>Federal brackets and the 2.0 percent indexing factor are from CRA's 2026 payroll tables. The lowest rate is 14 percent for the full 2026 year. In 2025 the lowest rate was a 14.5 percent blend because the cut started on July 1, 2025.</li>
            <li>British Columbia's 2026 tax-year rate on the first $50,363 is 5.60 percent, up from 5.06 percent. The 6.14 percent figure in CRA's July payroll formulas is a withholding proration, not the annual rate.</li>
            <li>Ontario surtax is included: 20 percent of basic Ontario tax above $5,818, plus 36 percent of basic Ontario tax above $7,446. The Ontario health premium and the Ontario tax reduction are not.</li>
            <li>Quebec includes Revenu Québec's 2026 brackets and the 16.5 percent federal abatement.</li>
        </ul>
    </div>

    <h2>What will I owe on this taxable income?</h2>

    <p>The tool is a bracket calculator. It is the right instrument for "what rate hits the next dollar" and a poor instrument for "what will my refund be." A refund depends on what was withheld. This page does not know your TD1, your donations, or your slips.</p>

</div>

    <div id="income-tax-calculator"></div>

<div class="container">

    <h2>Which federal brackets does it use?</h2>

    <table>
        <caption>Federal tax on taxable income, 2026, as published by the CRA</caption>
        <thead>
            <tr>
                <th>Taxable income</th>
                <th>Federal rate</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>$0 to $58,523</td>
                <td>14 percent</td>
            </tr>
            <tr>
                <td>$58,523.01 to $117,045</td>
                <td>20.5 percent</td>
            </tr>
            <tr>
                <td>$117,045.01 to $181,440</td>
                <td>26 percent</td>
            </tr>
            <tr>
                <td>$181,440.01 to $258,482</td>
                <td>29 percent</td>
            </tr>
            <tr>
                <td>Over $258,482</td>
                <td>33 percent</td>
            </tr>
        </tbody>
    </table>

    <p>Table as of September 2026. Source: CRA, current-year rates, and the 2026 federal payroll thresholds. The indexing factor for January 1, 2026 is 2.0 percent. The basic personal amount is $16,452 for income at or below $181,440 and phases down to $14,829 once income reaches $258,482. The credit is 14 percent of that amount. The longer bracket walkthrough is <a href="/blog/federal-tax-brackets/">federal tax brackets</a>. Provincial tables are <a href="/blog/provincial-tax-rates/">provincial tax rates</a>.</p>

    <h2>What does a worked example look like?</h2>

    <div class="example-box">
        <strong>Illustration: $80,000 of taxable income in Ontario</strong>
        <p>Federal tax before the basic personal amount is $12,596.01. The credit on $16,452 at 14 percent is $2,303.28. Federal tax is $10,292.73. Ontario tax before the basic amount is $5,110.47. The Ontario basic amount is $12,989, and the credit at 5.05 percent is $655.94, so Ontario tax is $4,454.52. That is under the $5,818 surtax threshold, so surtax is zero. Combined tax is $14,747.25. The marginal rate on the next dollar is 29.65 percent, which is 20.5 federal plus 9.15 Ontario. Effective rate is about 18.43 percent. No CPP, no Ontario health premium, no tax reduction.</p>
    </div>

    <table>
        <caption>Calculator checks, tax year 2026, basic personal amount only</caption>
        <thead>
            <tr>
                <th>Case</th>
                <th>Federal</th>
                <th>Provincial or territorial</th>
                <th>Combined</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Ontario, $0</td>
                <td>$0</td>
                <td>$0</td>
                <td>$0</td>
            </tr>
            <tr>
                <td>Ontario, $16,452</td>
                <td>$0</td>
                <td>$174.88</td>
                <td>$174.88</td>
            </tr>
            <tr>
                <td>Ontario, $80,000</td>
                <td>$10,292.73</td>
                <td>$4,454.52</td>
                <td>$14,747.25</td>
            </tr>
            <tr>
                <td>Ontario, $250,000, surtax included</td>
                <td>$54,714.25</td>
                <td>$33,857.99, of which surtax is $9,689.95</td>
                <td>$88,572.25</td>
            </tr>
            <tr>
                <td>British Columbia, $50,000, first bracket at 5.60 percent</td>
                <td>$4,696.72</td>
                <td>$2,059.90</td>
                <td>$6,756.62</td>
            </tr>
            <tr>
                <td>Alberta, $100,000</td>
                <td>$14,392.73</td>
                <td>$6,954.48</td>
                <td>$21,347.21</td>
            </tr>
            <tr>
                <td>Quebec, $60,000, after the 16.5 percent abatement</td>
                <td>$5,170.93</td>
                <td>$6,029.47</td>
                <td>$11,200.40</td>
            </tr>
        </tbody>
    </table>

    <p>Table as of September 2026. These are the cases the page's calculator is built to reproduce. Quebec's federal line is after the abatement of $1,021.80. British Columbia provincial tax before the basic amount, on $50,000, is $2,800, which is $50,000 times 5.60 percent.</p>

    <h2>What is left out, on purpose?</h2>

    <ul>
        <li><strong>CPP, EI, and the Canada employment amount.</strong> CRA's payroll formulas build those into withholding. A taxable-income tool that also subtracted them would double-count if you had already entered taxable income.</li>
        <li><strong>The Ontario health premium,</strong> up to $900, and the Ontario tax reduction for lower incomes. Surtax is in. Those two are not.</li>
        <li><strong>Dividend gross-up, donation credits, and medical credits.</strong> Those are separate articles: <a href="/blog/charitable-donation-tax-credit-canada/">donations</a> and <a href="/blog/medical-expense-tax-credit-canada/">medical expenses</a>.</li>
        <li><strong>Prince Edward Island's top bracket.</strong> CRA's 2026 annual thresholds page taxes income over $142,250 at 19 percent. The July 2026 payroll-formulas edition lists a further bracket and does not state one consistent rate for it. This calculator follows the annual thresholds page.</li>
        <li><strong>Minimum tax.</strong> A large capital gain can owe more than this page shows. That calculation is the <a href="/blog/amt-canada/">alternative minimum tax</a>.</li>
    </ul>

    <p>Quebec's basic amount in the tool is $18,952, the income level at which Revenu Québec's 2026 estimation table starts charging provincial tax. Manitoba's basic amount stays $15,780 at or below $200,000 and phases out by $400,000, which is the CRA formula, and Manitoba's brackets are not indexed. Yukon's basic amount mirrors the federal amount, including the phase-out, and the territorial credit uses Yukon's 6.4 percent rate.</p>

    <h2>Frequently asked questions</h2>

    <h3>Why is this lower than the tax on my paycheque?</h3>
    <p>A paycheque withholds tax on employment income and also withholds CPP and EI. This page starts from taxable income you type in, and it only subtracts the basic personal amount. If you type your gross salary, the result is not your balance owing. Type the income you expect on line 26000, or use it only to see marginal rates.</p>

    <h3>Does a raise get taxed entirely at the higher rate?</h3>
    <p>No. Each bracket rate applies only to the dollars inside that bracket. The marginal rate is the rate on the next dollar. The effective rate is total tax divided by taxable income, and it is lower. The $80,000 Ontario illustration is a 29.65 percent marginal rate and about an 18.4 percent effective rate.</p>

    <h3>Which province do I pick if I moved?</h3>
    <p>The province or territory where you reside on December 31. CRA states that rule on the current-year rates page. Income earned earlier in the year in another province is still taxed by the December 31 province, aside from special multi-jurisdiction cases this tool does not handle.</p>

    <h3>Why does British Columbia not use 5.06 percent?</h3>
    <p>Budget 2026 raised the lowest rate from 5.06 percent to 5.60 percent for the 2026 tax year, on the first $50,363. The Province of British Columbia says the higher rate shows up in payroll withholding after July 1, 2026. CRA's July formulas use 6.14 percent for withholding so the full-year 5.60 percent is collected over half a year. The annual tax is 5.60 percent. This calculator uses 5.60 percent.</p>

    <h3>Does the calculator include the Ontario surtax?</h3>
    <p>Yes. For 2026, surtax is zero when basic Ontario tax is $5,818 or less, 20 percent of the amount above $5,818 up to $7,446, and that 20 percent plus 36 percent of the amount above $7,446 after that. At $80,000 of taxable income, Ontario tax after the basic amount is about $4,455, so surtax is zero. At $250,000, surtax is $9,689.95.</p>

    <h3>Can I use this for a self-employed estimate?</h3>
    <p>Only after you have already estimated net income and the deductions that produce taxable income. It will not compute CPP contributions on self-employment earnings or instalments. The filing side of that is the <a href="/blog/self-employed-tax-guide/">self-employed tax guide</a> and the <a href="/blog/quarterly-tax-instalments/">instalments guide</a>.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/tax-rates-brackets/current-year.html">CRA: 2026 federal and provincial rates</a></li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/payroll/payroll-deductions-contributions/income-tax/reducing-remuneration-subject-income-tax.html">CRA: 2026 income thresholds and indexing factors</a></li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/forms-publications/payroll/t4127-payroll-deductions-formulas/t4127-jul/t4127-jul-payroll-deductions-formulas.html">CRA: T4127 payroll formulas, July 1, 2026, including Ontario surtax and basic amounts</a></li>
        <li><a href="https://www2.gov.bc.ca/gov/content/taxes/income-taxes/personal/tax-rates">Province of British Columbia: 2026 personal rates, lowest bracket 5.60 percent</a></li>
        <li><a href="https://www.revenuquebec.ca/fr/citoyens/declaration-de-revenus/produire-votre-declaration-de-revenus/taux-dimposition/">Revenu Québec: 2026 income tax rates</a></li>
        <li><a href="https://www.canada.ca/en/department-finance/services/publications/report-impact-reducing-lowest-marginal-personal-income-tax-rate-non-refundable-tax-credits.html">Department of Finance, June 2026: the 14 percent lowest rate and the $16,452 basic personal amount</a></li>
    </ul>

    <div class="cta-section">
        <p><strong>A bracket is not a plan.</strong></p>
        <p>The calculator shows the rate. The deductions and credits that change taxable income are the rest of the return. The 2026 tax guide is that map, $49 CAD.</p>
        <a href="/ebooks/tax-guide/" class="cta-button">Get the 2026 Tax Guide — $49 CAD</a>
    </div>

    ${footer(published)}

</div>`
  ),

  taxPost(
    'tfsa-overcontribution-penalty',
    "TFSA Over-Contribution Penalty: How It's Calculated and How to Fix It",
    'A TFSA excess is taxed at 1 percent a month on the highest excess in the account that month. The 2026 dollar limit is $7,000. Withdraw the excess; that month still counts.',
    `<div class="container">

    <div class="hook">
        A TFSA over-contribution is taxed at <span class="highlight">1 percent per month</span> on the highest excess in the account for each month the excess exists. The tax applies even if you withdraw later in the same month. The 2026 TFSA dollar limit is $7,000. The account itself is <a href="/blog/tfsa-strategies/">TFSA strategies</a>. How the wider return is assembled is <a href="/blog/how-canadian-taxes-work/">how Canadian taxes work</a>.
    </div>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>Room is this year's dollar limit, plus unused room from past years, plus withdrawals from last year, minus what you have already contributed this year.</li>
            <li>The CRA's My Account figure lags. CRA says 2025 TFSA records are processed by April 2026. A contribution in January that relies on a stale balance is how people go over.</li>
            <li>A withdrawal does not restore room until January 1 of the next year. Taking the excess out stops future months. It does not erase the months already over, and it does not let you put the money back this year.</li>
            <li>File a TFSA return, Form RC243, with the payment, by June 30 of the year after the tax applies. Deliberate excesses can be taxed at the 100 percent advantage rate.</li>
            <li>A non-resident contribution is a separate 1 percent monthly tax, and it can stack on the excess-amount tax.</li>
        </ul>
    </div>

    <h2>How is the 1 percent tax calculated?</h2>

    <p>CRA's rule is monthly, and it uses the highest excess in the month, not the excess on the last day. Two of CRA's own examples are the whole lesson.</p>

    <table>
        <caption>TFSA excess tax, using CRA's examples, as of September 2026</caption>
        <thead>
            <tr>
                <th>What you did</th>
                <th>Tax</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Over-contribute $2,000 in June and remove it in September</td>
                <td>$20 for each of June, July, August, and September. Total $80.</td>
            </tr>
            <tr>
                <td>Over-contribute $2,000 in June and remove it later in June</td>
                <td>$20. The month of the contribution still counts.</td>
            </tr>
            <tr>
                <td>Over-contribute $6,000 in August and withdraw $4,000 in mid-September</td>
                <td>$60 for August and $60 for September. Total $120. September is taxed on the highest excess that month, which was $6,000 before the withdrawal.</td>
            </tr>
        </tbody>
    </table>

    <p>Table as of September 2026. Source: CRA, "If you owe tax on excess TFSA amounts." The dollar limit for 2026 is $7,000, added on January 1. The schedule of limits is the <a href="/blog/contribution-limits/">2026 contribution limits</a> page. The January funding habit, which is where most excesses start, is <a href="/blog/tfsa-contribution-optimization/">TFSA contribution optimization</a>.</p>

    <div class="example-box">
        <strong>Illustration: a stale CRA balance</strong>
        <p>On January 2 you read $12,000 of room in My Account. That figure does not yet include a $7,000 contribution you made in December, because the institution has not reported it and CRA has not posted it. You contribute $12,000. Your real room was $5,000. The excess is $7,000. Left in place from January through December, the tax is 1 percent × $7,000 × 12 = $840. Withdraw $7,000 in January and the tax is $70 for January only, but you cannot recontribute that $7,000 until next January 1. The $12,000 and the dates are an illustration of the lag CRA warns about. Your room is your own ledger.</p>
    </div>

    <h2>What should you do the day you notice?</h2>

    <ol>
        <li><strong>Rebuild room from your own records.</strong> Dollar limit for each year you were 18 or older and a resident, plus unused room, plus last year's withdrawals, minus this year's contributions. Qualifying transfers do not consume room. A withdrawal you made this year does not come back until next January.</li>
        <li><strong>Withdraw the excess as soon as you know the number.</strong> Waiting for CRA's letter adds months at 1 percent. CRA says it typically notifies you in late spring, through My Account or by mail. That is not a deadline you should wait for.</li>
        <li><strong>Do not put it back the same year.</strong> The withdrawal creates room next January, not today. Putting it back is a second excess.</li>
        <li><strong>File Form RC243</strong> and pay by June 30 of the following year. Tax for 2026 is due with that return by June 30, 2027. The schedule of excess amounts is the related schedule CRA specifies with the return.</li>
        <li><strong>Ask for a waiver only if the mistake was reasonable.</strong> CRA can cancel or waive the tax when the excess came from a reasonable error. A waiver is a request, not a right, and it is not a reason to leave the money in.</li>
    </ol>

    <div class="warning-box">
        <strong>Deliberate excesses are a different tax:</strong>
        <p>CRA states that excess amounts that result from a deliberate over-contribution may be taxed at the 100 percent advantage rate. The 1 percent monthly tax is the accidental version. Do not park money over the limit because the 1 percent "is only 12 percent a year." That reading is wrong if CRA treats the contribution as deliberate, and it is a bad trade even when it is not.</p>
    </div>

    <h2>Which mistakes are not an over-contribution?</h2>

    <ul>
        <li><strong>A direct transfer</strong> between TFSA issuers. That is not a withdrawal and a new contribution. Withdrawing and redepositing yourself, in the same year, is.</li>
        <li><strong>Investment losses inside the account.</strong> Room is about contributions, not about the market value. A TFSA that falls from $50,000 to $30,000 does not create $20,000 of room, and it does not reduce an excess you already created.</li>
        <li><strong>A withdrawal of qualifying amounts</strong> that CRA lists as not affecting room, including certain exempt contributions. Read the current CRA page before you treat a death benefit or a transfer as ordinary room.</li>
    </ul>

    <p>If you are a non-resident and you contribute, other than a qualifying transfer or an exempt contribution, CRA charges 1 percent for each month that contribution stays in. That tax can apply on top of the excess-amount tax if you were also over the limit. Residency is a facts test. Leaving the country is the longer problem in <a href="/blog/life-events-tax-implications/">life events and tax</a>, not a TFSA loophole.</p>

    <h2>Frequently asked questions</h2>

    <h3>Is the penalty 1 percent a year or 1 percent a month?</h3>
    <p>One percent per month, on the highest excess TFSA amount for that month. Twelve months on an untouched excess is 12 percent of the excess, not 1 percent. CRA's June-to-September example of a $2,000 excess is $80, which is four months, not a single annual charge.</p>

    <h3>If I remove the extra money the same week, do I owe anything?</h3>
    <p>Yes, for that month. CRA's example of a $2,000 excess contributed and removed in June is still $20. Removing it stops July. It does not rewind June.</p>

    <h3>Can I trust the room shown in My Account?</h3>
    <p>Not for a contribution you are about to make in the first quarter. CRA says 2025 records are processed by April 2026, and that contributions reduce room immediately even though My Account does not update immediately. Keep your own total. The issuer's statements are the source. My Account is a reconciliation.</p>

    <h3>Does a withdrawal this year let me contribute again this year?</h3>
    <p>No. The amount you withdraw is added to room on January 1 of the next year, along with the new dollar limit. Recontributing the withdrawal in the same year is a classic way to create a second excess, especially after you "fixed" the first one.</p>

    <h3>What if I contributed and I am not a resident?</h3>
    <p>A contribution while you are a non-resident, other than a qualifying transfer or an exempt contribution, is taxed at 1 percent for each month it remains. If you were also over your room, CRA can charge both 1 percent taxes. Remove the contribution and read both rules. They are not the same form line, and they can both apply.</p>

    <h3>Will CRA always charge the tax?</h3>
    <p>CRA assesses it, and you can ask for a waiver when the excess was a reasonable error and you remove it. The request is not automatic. File the return by June 30 of the next year either way, so interest and a late-filing penalty are not sitting on top of a tax you hoped would be forgiven.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/tax-free-savings-account/owing-tax/excess.html">CRA: tax on excess TFSA amounts</a></li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/tax-free-savings-account/contributing/calculate-room.html">CRA: calculate your TFSA contribution room, including the 2026 dollar limit of $7,000</a></li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/tax-free-savings-account/contributing/before.html">CRA: before you contribute, and the 1 percent non-resident contribution tax</a></li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/forms-publications/forms/rc243.html">CRA: Form RC243, TFSA return</a></li>
    </ul>

    <div class="cta-section">
        <p><strong>The 1 percent is the expensive way to learn the room formula.</strong></p>
        <p>Limits, withdrawals, and the accounts around the TFSA are the rest of the return. The 2026 tax guide covers that filing side, $49 CAD.</p>
        <a href="/ebooks/tax-guide/" class="cta-button">Get the 2026 Tax Guide — $49 CAD</a>
    </div>

    ${footer(published)}

</div>`
  ),

  taxPost(
    'charitable-donation-tax-credit-canada',
    'Charitable Donation Tax Credit: Donating Cash vs Securities',
    'In 2026 the federal donation credit is 14 percent on the first $200 and 29 percent above that. Donating listed securities in kind sets the capital-gains inclusion on that gift to zero.',
    `<div class="container">

    <div class="hook">
        In 2026 the federal charitable donation credit is <span class="highlight">14 percent on the first $200</span> and 29 percent on the rest, with 33 percent instead of 29 percent on donations above $200 to the extent your taxable income is in the 33 percent bracket. A gift of listed securities can also zero the capital gain on those shares. The return those credits reduce is described in <a href="/blog/how-canadian-taxes-work/">how Canadian taxes work</a>.
    </div>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>The first $200 of donations in the year uses the lowest federal rate. For 2026 that rate is 14 percent. Department of Finance's June 2026 report ties non-refundable credits to that rate cut.</li>
            <li>Donations above $200 use 29 percent federally, and 33 percent on the slice matched to income taxed at 33 percent. The 33 percent bracket starts at $258,482 of taxable income in 2026.</li>
            <li>Gifts of shares, mutual-fund units, and certain other listed securities to a qualified donee can have a capital-gains inclusion rate of zero, plus a receipt for fair market value. Selling first and donating the cash does not.</li>
            <li>The general annual limit is 75 percent of net income. Unused gifts can be carried forward five years. Spouses can claim the family's gifts on one return.</li>
            <li>Donations count in the calendar year they are made. There is no RRSP-style grace period in the first 60 days of the next year. December 31 is the deadline for a 2026 claim.</li>
        </ul>
    </div>

    <h2>How much is the federal credit on a cash gift?</h2>

    <p>The credit is non-refundable. It reduces tax you otherwise owe. It does not pay you a refund if you have no tax. The rate is not your marginal rate. It is a schedule: a low rate on the first $200 of total gifts for the year, and a higher rate after that. People who donate $100 a year for a decade leave the higher rate unused. Bundling several years of giving into one calendar year, or combining both spouses' receipts on the higher-income return once the first $200 is absorbed, is the mechanical version of that fact.</p>

    <table>
        <caption>Federal donation tax credit, 2026, as of September 2026</caption>
        <thead>
            <tr>
                <th>Portion of the year's donations</th>
                <th>Federal credit rate</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>First $200</td>
                <td>14 percent, the lowest federal rate</td>
            </tr>
            <tr>
                <td>Above $200</td>
                <td>29 percent</td>
            </tr>
            <tr>
                <td>Above $200, to the extent taxable income is taxed at 33 percent (over $258,482)</td>
                <td>33 percent</td>
            </tr>
        </tbody>
    </table>

    <p>Table as of September 2026. Provinces and territories add their own credit, on their own schedule. This page does not quote a provincial dollar, because those rates are not one national table. Claim the provincial credit on the provincial schedule. The credits people miss more broadly are in <a href="/blog/missed-tax-credits/">missed tax credits</a>.</p>

    <div class="example-box">
        <strong>Illustration: a $1,000 cash gift, federal credit only</strong>
        <p>First $200 × 14 percent = $28. Remaining $800 × 29 percent = $232. Federal credit = $260. That is not $1,000 times your marginal rate. If you are not in the 33 percent bracket, none of the $800 moves to 33 percent. If your taxable income is above $258,482, a further 4 percentage points can apply to the portion of the gift above $200 that is matched to that top-bracket income, which is how 29 percent becomes 33 percent. Provincial credit is extra and is not in the $260.</p>
    </div>

    <h2>Why is a gift of securities different?</h2>

    <p>CRA's page on gifts of certain capital property says you may be entitled to an inclusion rate of zero on a capital gain from donating, among other things, a share or debt listed on a designated stock exchange, a mutual-fund share or unit, and an interest in a related segregated fund trust. You still receive a donation receipt for the fair market value. You file Form T1170 and report the disposition on Schedule 3 as that form instructs. The ordinary inclusion rate, for a sale that is not this gift, is one-half, and the history of that rate is the <a href="/blog/capital-gains-tax-canada/">capital gains guide</a>.</p>

    <div class="example-box">
        <strong>Illustration: $10,000 of shares that cost $4,000</strong>
        <p>The gain is $6,000. Sell, then donate the cash: one-half of $6,000 is a $3,000 taxable gain. At a federal marginal rate of 26 percent, used here only as the third federal bracket, federal tax on that inclusion is $780, and you then claim the donation credit on $10,000, which is $28 plus $9,800 × 29 percent = $2,870. Donate the shares in kind: the inclusion on the gift is zero, so the $780 of federal tax on the gain is not there, and the federal credit on the $10,000 fair market value is still $2,870. The $26 percent and the $780 are an illustration of one federal bracket, not a combined provincial bill. Timing matters. The transfer has to be in the charity's hands in the calendar year. A letter of direction in the last week of December can miss.</p>
    </div>

    <div class="warning-box">
        <strong>Minimum tax can still apply to the in-kind gift:</strong>
        <p>Since 2024, alternative minimum tax includes 30 percent of the capital gain on donated listed securities, and it allows only 80 percent of the donation credit. A gift that is painless under regular tax can still produce Form T691 tax. Read the <a href="/blog/amt-canada/">AMT guide</a> before a large December transfer.</p>
    </div>

    <h2>What are the limits and the timing rules?</h2>

    <ul>
        <li><strong>75 percent of net income</strong> is the general ceiling for the year. In the year of death, and the year before death, the ceiling is higher. Confirm the current line 34900 instructions if the gift is large relative to income.</li>
        <li><strong>Five-year carryforward.</strong> Gifts you do not claim this year can be claimed in any of the next five years. The first $200 threshold is annual, so a carryforward claimed in a later year can join that year's gifts above $200.</li>
        <li><strong>Either spouse can claim.</strong> Pooling receipts on one return usually beats splitting them, because the first $200 at 14 percent would otherwise apply twice. The couple version of income planning is <a href="/blog/income-splitting-strategies-couples/">income splitting for couples</a>.</li>
        <li><strong>December 31, not March 1.</strong> An RRSP contribution in the first 60 days of 2027 can still be a 2026 deduction. A donation in January 2027 is a 2027 gift.</li>
        <li><strong>The charity must be a qualified donee.</strong> CRA's charity listings are the check. A crowdfunding page, a foreign organization, or a political contribution is not this credit. Political contributions have their own credit, with its own cap.</li>
    </ul>

    <h2>Frequently asked questions</h2>

    <h3>Is the donation credit the same as a deduction?</h3>
    <p>No. A deduction, such as an RRSP contribution, reduces taxable income. The donation credit reduces tax, at 14 percent on the first $200 and 29 percent after that, federally. It is not worth your marginal rate unless that rate happens to match. People who multiply the gift by their marginal rate are describing a deduction they do not have.</p>

    <h3>Should I sell the shares and donate the cash?</h3>
    <p>Usually not, if the shares are listed and are in a gain, and the charity can accept them. The in-kind gift can zero the capital gain and still produce a receipt for fair market value. Selling first realizes a gain at the one-half inclusion rate and then donates whatever cash is left after tax. Losses are different: a share in a loss is often better sold, so you can use the loss, and the cash donated.</p>

    <h3>Do I have until the RRSP deadline to donate?</h3>
    <p>No. Charitable gifts are tied to the calendar year. A donation on January 5, 2027 is not a 2026 credit. If the gift is securities, leave enough time for the broker and the charity to settle the transfer before December 31.</p>

    <h3>Can I claim my spouse's receipts?</h3>
    <p>Yes. Spouses and common-law partners can combine donations on one return. That is usually better than each person using up a fresh first $200 at 14 percent. The receipt still has to be from a qualified donee, in one of your names or both.</p>

    <h3>What if the gift is bigger than 75 percent of my income?</h3>
    <p>The unclaimed portion is not lost. It carries forward up to five years, still subject to the limit in the year you claim it. A very large gift relative to income is also an alternative-minimum-tax question, especially if the gift was securities. Do not assume the credit will all land in the year of the gift.</p>

    <h3>Does this credit apply to a GoFundMe or a US charity?</h3>
    <p>Only if the organization is a qualified donee under Canadian rules. Many crowdfunding campaigns and foreign charities are not. Search CRA's list of charities before you count on a receipt. A US gift can qualify in narrow treaty cases. That is a form question, not a default.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-34900-donations-gifts.html">CRA: line 34900, donations and gifts</a></li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-34900-donations-gifts/capital-gains-realized-on-gifts-certain-capital-property.html">CRA: capital gains on gifts of certain capital property</a></li>
        <li><a href="https://www.canada.ca/en/department-finance/services/publications/report-impact-reducing-lowest-marginal-personal-income-tax-rate-non-refundable-tax-credits.html">Department of Finance, June 2026: lowest rate of 14 percent for 2026, and the donation credit</a></li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/tax-rates-brackets/current-year.html">CRA: 2026 brackets, including the 33 percent rate above $258,482</a></li>
    </ul>

    <div class="cta-section">
        <p><strong>The receipt is worth more when the gain is not taxed.</strong></p>
        <p>Credits, carryforwards, and the rest of the return are the filing problem. The 2026 tax guide is that companion, $49 CAD.</p>
        <a href="/ebooks/tax-guide/" class="cta-button">Get the 2026 Tax Guide — $49 CAD</a>
    </div>

    ${footer(published)}

</div>`
  ),

  taxPost(
    'spousal-rrsp-canada',
    'Spousal RRSP Guide: Attribution, Withdrawals, and When It Still Helps',
    "A spousal RRSP uses the contributor's room. A withdrawal is attributed back if the contributor put money in during the year of the withdrawal or the two preceding years.",
    `<div class="container">

    <div class="hook">
        A spousal RRSP gives the <span class="highlight">contributor the deduction and the spouse the account</span>. The contribution uses the contributor's RRSP room, not the spouse's. If the spouse withdraws, and the contributor paid into any spousal RRSP in that year or the two previous calendar years, the withdrawal can be taxed in the contributor's hands. The ordinary RRSP rules are the <a href="/blog/rrsp-playbook/">RRSP playbook</a>. The return around them is <a href="/blog/how-canadian-taxes-work/">how Canadian taxes work</a>.
    </div>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>The 2026 RRSP dollar limit is $33,810. Your room is 18 percent of 2025 earned income, up to that dollar limit, plus unused room, minus the pension adjustment. A spousal contribution consumes that room.</li>
            <li>Attribution looks at the year of withdrawal and the two preceding years. CRA's page for a 2025 withdrawal looks at contributions in 2023, 2024, and 2025. The same three-year window applies to a later year.</li>
            <li>The amount included in the contributor's income is the lesser of those contributions and the withdrawal. Form T2205 does the split.</li>
            <li>A RRIF minimum payment is not attributed. Amounts above the minimum can be. A transfer from a spousal RRSP to an FHSA can be treated as a taxable withdrawal.</li>
            <li>Pension income splitting at 65 covers a lot of what spousal RRSPs used to do. It does not cover RRSP withdrawals before that age, and it does not help a couple that needs income in the lower-income spouse's name earlier.</li>
        </ul>
    </div>

    <h2>Whose room is it, and who deducts it?</h2>

    <p>The contributor deducts the amount, against the contributor's income, in the year of the contribution or a later year. The annuitant is the spouse or common-law partner. Their own RRSP room is untouched. Two working spouses do not get two spousal plans that magically double the limit. Each person's room is still that person's. You can contribute to your own RRSP and to a spousal RRSP in the same year, and the sum cannot exceed your room.</p>

    <p>CRA's registered-plans table lists the 2026 RRSP dollar limit at $33,810. The contribution deadline for a deduction on the 2026 return is 60 days into 2027. A contribution in that window can be designated to either year. The limit table on this site is <a href="/blog/contribution-limits/">contribution limits</a>. The choice among RRSP, TFSA, and FHSA is <a href="/blog/rrsp-vs-tfsa-vs-fhsa/">RRSP versus TFSA versus FHSA</a>.</p>

    <h2>When does a withdrawal bounce back to the contributor?</h2>

    <p>CRA states the rule in calendar years, not in a rolling 36 months from the deposit. For a withdrawal in 2025, contributions in 2023, 2024, or 2025 can cause attribution. To have none of the withdrawal included in the contributor's income, the contributor must not have paid into any spousal RRSP in the year of withdrawal or either of the two preceding years. "Any" matters. A contribution to a different spousal plan still counts. The last contribution anywhere in the spousal plans sets the clock.</p>

    <table>
        <caption>Spousal RRSP attribution, the rule CRA describes</caption>
        <thead>
            <tr>
                <th>Situation</th>
                <th>Who reports the income</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>No spousal contributions in the year of withdrawal or the two previous calendar years</td>
                <td>The annuitant</td>
            </tr>
            <tr>
                <td>Contributions in that three-year window, and a withdrawal from an unmatured spousal RRSP</td>
                <td>The contributor, up to the lesser of those contributions and the withdrawal. The rest, if any, is the annuitant's.</td>
            </tr>
            <tr>
                <td>Spousal RRIF payment, up to the minimum</td>
                <td>The annuitant</td>
            </tr>
            <tr>
                <td>Spousal RRIF payment above the minimum, contributions in the window</td>
                <td>The excess can be attributed to the contributor</td>
            </tr>
            <tr>
                <td>Transfer from a spousal RRSP to the annuitant's FHSA</td>
                <td>CRA can treat it as a taxable withdrawal from the spousal RRSP</td>
            </tr>
        </tbody>
    </table>

    <p>Table as of September 2026. Source: CRA, withdrawing from spousal or common-law partner RRSPs, and CRA's example of how much each spouse reports. The couple's wider toolkit, including pension splitting, is <a href="/blog/income-splitting-strategies-couples/">income splitting for couples</a>.</p>

    <div class="example-box">
        <strong>Illustration, using CRA's structure</strong>
        <p>CRA's published example: contributions of $2,000 in 2023, $1,000 in 2024, and $2,000 in 2025, and a $4,000 withdrawal in 2025. The contributor includes $4,000, because that is the lesser of the $5,000 contributed in the three-year window and the $4,000 withdrawn. Change only the dates and the same arithmetic applies to a 2026 withdrawal looking back to 2024, 2025, and 2026. If the last spousal contribution was in 2026, a withdrawal in 2029 with no contributions in 2027, 2028, or 2029 is the annuitant's income. The dollars are CRA's example, not a suggested contribution.</p>
    </div>

    <h2>When does a spousal RRSP still earn its keep?</h2>

    <p>Pension income splitting lets a couple move up to half of eligible pension income to the other spouse on Form T1032. RRIF income qualifies once the annuitant is 65, or in the year of death. It does not turn a 55-year-old's RRSP withdrawal into the other spouse's income. A spousal RRSP is the tool for income that has to land in the lower-income spouse's name before that age: a sabbatical, a parental leave, the years between retirement and 65, or a period when one spouse has no other income and the contributor is still in a high bracket.</p>

    <p>It is a weak tool if you will need the money inside the three-year window. The deduction is real, and then attribution puts the income back on the higher earner's return, often with withholding that does not match. It is also a weak tool if both spouses will be in the same bracket in retirement anyway. Equalizing brackets is the point. A spousal plan that leaves both people in the same bracket at withdrawal did not split anything that mattered.</p>

    <div class="tip-box">
        <strong>Contribute to the spousal plan in the years you will not need it back:</strong>
        <p>The clean pattern is contributions in high-income years, then a gap of the year of withdrawal plus two calendar years, then withdrawals taxed to the lower-income spouse. Write the last contribution year down. A "small" contribution three Decembers later restarts the window on the whole spousal relationship, not just on that deposit.</p>
    </div>

    <h2>What about separation, death, and the HBP?</h2>

    <p>Attribution has exceptions CRA lists for breakdown of the relationship and for death. Do not assume them from a blog. Read the current page if you are separated. The Home Buyers' Plan and the Lifelong Learning Plan have their own repayment rules, and a spousal withdrawal under those plans is not the ordinary attribution example. The first-home account that often sits beside an HBP withdrawal is the <a href="/blog/fhsa-guide/">FHSA guide</a>. A deemed withdrawal when a spousal RRSP moves to an FHSA is the attribution trap in that stack, and CRA names it explicitly.</p>

    <h2>Frequently asked questions</h2>

    <h3>Does a spousal contribution use my spouse's RRSP room?</h3>
    <p>No. It uses yours. Your spouse can still contribute to their own RRSP up to their own room. The deduction for the spousal contribution is yours. The investments, and eventually the income if you respect the attribution window, are your spouse's.</p>

    <h3>Is the attribution period three years from the day I contribute?</h3>
    <p>No. It is the calendar year of the withdrawal and the two preceding calendar years. A contribution on December 31, 2026 affects withdrawals in 2026, 2027, and 2028. A withdrawal in January 2029 is outside that window if you made no spousal contribution in 2027, 2028, or 2029. Count years, not a 36-month timer.</p>

    <h3>Are RRIF minimums attributed?</h3>
    <p>No. CRA excludes the minimum amount from a spousal RRIF. Amounts above the minimum can be included in the contributor's income if contributions were made in the year or the two preceding years. Converting to a RRIF does not wipe the window. It changes which dollars the window can reach.</p>

    <h3>Is a spousal RRSP obsolete because of pension splitting?</h3>
    <p>Not if you need the income taxed to the lower-income spouse before age 65, or you are withdrawing from an RRSP rather than a RRIF. Pension splitting of RRIF income generally waits until the annuitant is 65. A couple retiring at 58 cannot use that form to move an RRSP withdrawal. The spousal plan is how the income was aimed at the right person years earlier.</p>

    <h3>What if both of us contribute to spousal plans?</h3>
    <p>Each contribution uses the contributor's room and starts that contributor's attribution window. There is nothing improper about it when both people have room and both people have income worth deducting against. Track the two clocks separately. They do not cancel each other out.</p>

    <h3>Can I contribute to a spousal RRSP after 71?</h3>
    <p>Your own RRSP has to be wound up by the end of the year you turn 71. If you still have room and your spouse is younger and still has an RRSP, a spousal contribution can still be available. The deduction still needs your room. Confirm the age rule against the current CRA page before you rely on a December contribution.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/rrsps-related-plans/making-withdrawals/withdrawing-spousal-common-law-partner-rrsps.html">CRA: withdrawing from spousal or common-law partner RRSPs</a></li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/rrsps-related-plans/making-withdrawals/example-much-income-report-on-each-spouse-s-return.html">CRA: example of how much each spouse reports</a></li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/registered-plans-administrators/pspa/mp-rrsp-dpsp-tfsa-limits-ympe.html">CRA: RRSP dollar limit for 2026, $33,810</a></li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/forms-publications/forms/t2205.html">CRA: Form T2205</a></li>
    </ul>

    <div class="cta-section">
        <p><strong>The deduction is immediate. The attribution window is the part people forget.</strong></p>
        <p>Room, brackets, and the withdrawal order are the rest of the plan. The 2026 tax guide is the filing side, $49 CAD.</p>
        <a href="/ebooks/tax-guide/" class="cta-button">Get the 2026 Tax Guide — $49 CAD</a>
    </div>

    ${footer(published)}

</div>`
  ),

  taxPost(
    'medical-expense-tax-credit-canada',
    'Medical Expense Tax Credit: What Qualifies and How to Maximize It',
    'The federal medical expense credit is 14 percent of expenses above the lesser of 3 percent of net income and an indexed dollar ceiling. The lower-income spouse usually claims them.',
    `<div class="container">

    <div class="hook">
        The federal medical expense tax credit is <span class="highlight">14 percent</span> of eligible expenses above a threshold. The threshold is the lesser of 3 percent of your net income and a dollar ceiling. CRA's 2025 medical guide prints that ceiling as <span class="highlight">$2,834</span>. It is indexed each year. For 2026 the federal indexing factor is 2.0 percent. How credits differ from deductions is in <a href="/blog/how-canadian-taxes-work/">how Canadian taxes work</a>.
    </div>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>You claim the amount above the threshold, not the whole bill. On line 33099 the threshold is the lesser of 3 percent of your net income (line 23600) and the indexed ceiling.</li>
            <li>CRA's guide RC4065 for 2025 uses $2,834. The Income Tax Folio says that fixed amount is indexed under subsection 117.1(1). Confirm the 2026 dollar on CRA's indexation chart before you file. Do not invent it from a blog, including this one.</li>
            <li>The credit rate is the lowest federal rate. For 2026 that is 14 percent. A $2,500 claimable amount is a $350 federal credit, not $2,500 off your income.</li>
            <li>Expenses for you, your spouse, and your children under 18 go on line 33099 and can be pooled. Other dependants 18 or older go on line 33199, with a threshold based on that dependant's income.</li>
            <li>You may pick any 12-month period ending in the tax year, if you did not claim those expenses before. The lower-income spouse usually gets the larger credit, because 3 percent of a smaller income is a smaller hurdle.</li>
        </ul>
    </div>

    <h2>How is the claim calculated?</h2>

    <p>Add the eligible expenses paid in the period. Subtract the lesser of 3 percent of net income and the dollar ceiling. Multiply the remainder by the lowest federal rate. For 2026 that rate is 14 percent. The credit is non-refundable. If you owe no tax, the federal credit does not create a refund by itself. There is a separate refundable medical expense supplement for lower-income working people who meet CRA's conditions. Read the current guide before you assume you qualify for the supplement. The other credits that get missed are in <a href="/blog/missed-tax-credits/">missed tax credits</a>.</p>

    <table>
        <caption>Federal medical expense credit, the rule, as of September 2026</caption>
        <thead>
            <tr>
                <th>Piece</th>
                <th>What CRA states</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Who, on line 33099</td>
                <td>You, your spouse or common-law partner, and your dependent children under 18</td>
            </tr>
            <tr>
                <td>Who, on line 33199</td>
                <td>Other dependants 18 or older. The threshold uses the dependant's net income.</td>
            </tr>
            <tr>
                <td>Threshold</td>
                <td>Lesser of 3 percent of net income and the indexed ceiling. The 2025 guide prints $2,834.</td>
            </tr>
            <tr>
                <td>Period</td>
                <td>Any 12 months ending in the tax year, not claimed already. For a death in the year, a 24-month period that includes the date of death.</td>
            </tr>
            <tr>
                <td>Federal rate for 2026</td>
                <td>14 percent, the lowest personal rate</td>
            </tr>
        </tbody>
    </table>

    <p>Table as of September 2026. Sources: CRA lines 33099 and 33199, guide RC4065 for 2025, and Income Tax Folio S1-F1-C1. Provinces have their own credit and their own ceiling. This page does not quote a provincial ceiling it has not read on that province's form.</p>

    <div class="example-box">
        <strong>Illustration: $4,000 of receipts and $50,000 of net income</strong>
        <p>Three percent of $50,000 is $1,500. That is less than the $2,834 ceiling CRA printed for 2025, and it is less than that ceiling indexed by the 2.0 percent factor for 2026, so the threshold is $1,500 either way. Claimable amount = $4,000 − $1,500 = $2,500. Federal credit = $2,500 × 14 percent = $350. If the same $4,000 is claimed by a spouse with $120,000 of net income, 3 percent is $3,600, which is above the ceiling, so the threshold becomes the ceiling and the claimable amount shrinks. The $4,000 and the incomes are an illustration. They are not a list of what qualifies.</p>
    </div>

    <h2>Which expenses usually qualify?</h2>

    <p>CRA's list is specific, and it is longer than people think and shorter than a pharmacy flyer. The common items that qualify, when they were paid and not reimbursed, include payments to medical practitioners, dentists, and nurses where the provincial rules recognize them; prescription drugs; eyeglasses and contact lenses prescribed by a medical practitioner; and certain travel for medical care when substantially equivalent care is not available near where you live, on the conditions CRA sets. Premiums paid to a private health-insurance plan can qualify. Amounts a plan reimbursed do not. You claim the unreimbursed part.</p>

    <p>Cosmetic procedures generally do not qualify unless they are required for medical or reconstructive purposes. Over-the-counter vitamins, gym memberships, and most non-prescription items do not qualify just because they feel medical. Attendant care and renovations for mobility have detailed conditions and, in some cases, dollar discussion in the folio. The checklist habit, including keeping the receipts, is the <a href="/blog/tax-deduction-checklist/">tax deduction checklist</a> and the <a href="/blog/tax-record-keeping/">record-keeping guide</a>. A credit you cannot prove is not a credit.</p>

    <div class="tip-box">
        <strong>Pick the 12 months on purpose:</strong>
        <p>The period does not have to be the calendar year. If a surgery and the related bills fall across December and January, a 12-month period that ends in the tax year and covers both clusters beats two calendar years that each fail the 3 percent test. You cannot claim the same expense twice. Write the start and end dates on the folder.</p>
    </div>

    <h2>Who should claim the family's expenses?</h2>

    <p>CRA says to compare the credit on each spouse's return. The spouse with the lower net income usually wins, because the 3 percent hurdle is smaller, as long as that spouse has enough tax for a non-refundable credit to bite. Splitting the same pool across two returns applies the threshold twice and usually wastes receipts. Line 33199 is different: the threshold follows the dependant's income, not yours, and either supporting person may be able to claim. Do not mix the two lines.</p>

    <p>A disability supports deduction and the medical credit can overlap on some expenses. CRA says you can claim an expense on one line or split it, and the total claimed cannot exceed what you paid. Run both if the supports deduction, which reduces income, is worth more than the 14 percent credit. That comparison is arithmetic, not a slogan. The disability credit itself is a different claim and is covered from the benefits side in the <a href="/blog/disability-tax-credit-canada-guide/">disability tax credit guide</a>.</p>

    <h2>Frequently asked questions</h2>

    <h3>Do I claim every dollar I paid the dentist?</h3>
    <p>No. You claim eligible expenses minus the threshold. The threshold is the lesser of 3 percent of net income and the indexed ceiling. On a $50,000 income, 3 percent is $1,500, so the first $1,500 of an otherwise eligible pile produces no federal credit. The credit on what remains is 14 percent federally for 2026.</p>

    <h3>What is the 2026 dollar ceiling?</h3>
    <p>CRA's 2025 guide RC4065 and the 2025 line 33099 instructions print $2,834. The folio says the fixed amount is indexed annually. CRA's indexing factor for January 1, 2026 is 2.0 percent. This page does not print a 2026 ceiling it has not seen on CRA's indexation chart. If 3 percent of your net income is below both $2,834 and any modest indexation of it, the ceiling does not change your claim. Look the chart up when 3 percent of your income is near the cap.</p>

    <h3>Can I claim expenses from 13 months ago?</h3>
    <p>You can choose any 12-month period that ends in the tax year, and you cannot claim an expense that you or someone else already claimed. A period that starts in January of the prior year and ends in December of the tax year is the ordinary choice. A period that ends in the tax year and starts earlier can pull in a cluster of bills. It cannot be longer than 12 months, except the 24-month rule CRA describes when someone died in the year.</p>

    <h3>Should the higher-income spouse claim the receipts?</h3>
    <p>Usually the lower-income spouse should, if they have tax to absorb a non-refundable credit. Their 3 percent threshold is lower, so more of the same receipts survive. If the lower-income spouse owes no tax, the credit is wasted there and the higher-income spouse's smaller claim is the one that actually reduces tax.</p>

    <h3>Do premiums I pay through work count?</h3>
    <p>Premiums you paid to a private health services plan can qualify, including amounts shown on a T4 that you paid rather than your employer. Amounts your employer paid and that were not a taxable benefit to you generally were not an expense you paid. Reimbursements from the plan reduce the expense. Claim the unreimbursed portion, with the statement that shows it.</p>

    <h3>Is this the same as the disability tax credit?</h3>
    <p>No. The disability tax credit is a separate non-refundable credit with its own form and eligibility test. Medical expenses are receipts above a threshold. Some costs of care can interact with the disability supports deduction. They are three different claims. Qualifying for one does not enter the others automatically.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/lines-33099-33199-eligible-medical-expenses-you-claim-on-your-tax-return.html">CRA: lines 33099 and 33199</a></li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/forms-publications/publications/rc4065/medical-expenses.html">CRA: RC4065, Medical Expenses, 2025 ceiling of $2,834</a></li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/technical-information/income-tax/income-tax-folios-index/series-1-individuals/folio-1-health-medical/income-tax-folio-s1-f1-c1-medical-expense-tax-credit.html">CRA: Income Tax Folio S1-F1-C1, Medical Expense Tax Credit</a></li>
        <li><a href="https://www.canada.ca/en/department-finance/services/publications/report-impact-reducing-lowest-marginal-personal-income-tax-rate-non-refundable-tax-credits.html">Department of Finance, June 2026: lowest rate of 14 percent on non-refundable credits</a></li>
    </ul>

    <div class="cta-section">
        <p><strong>The credit is 14 percent of what clears the threshold, not the receipt total.</strong></p>
        <p>Which spouse claims, and which 12 months you use, is the optimization. The 2026 tax guide is the broader filing map, $49 CAD.</p>
        <a href="/ebooks/tax-guide/" class="cta-button">Get the 2026 Tax Guide — $49 CAD</a>
    </div>

    ${footer(published)}

</div>`
  ),

  taxPost(
    'crypto-tax-canada',
    'Crypto Taxes in Canada: Capital vs Business Income',
    'The CRA taxes a crypto disposition as business income or as a capital gain. Capital treatment includes half the gain. Business treatment includes the full profit. Paying with crypto is a barter.',
    `<div class="container">

    <div class="hook">
        The CRA does not treat crypto as currency. A disposition is either <span class="highlight">business income, fully included</span>, or a <span class="highlight">capital gain, one-half included</span>. Using crypto to buy something is a barter. Which side you are on is a facts test, not a setting in the exchange. The inclusion-rate mechanics are the <a href="/blog/capital-gains-tax-canada/">capital gains guide</a>. The return they land on is <a href="/blog/how-canadian-taxes-work/">how Canadian taxes work</a>.
    </div>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>CRA's crypto guide says you report business income or a capital gain when you dispose of a crypto-asset. If it is not business, it is capital.</li>
            <li>On capital account, half the gain is taxable in 2026. On income account, the profit is fully included. The same price rise is a very different tax bill.</li>
            <li>CRA looks at your course of conduct: regularity, continuity, and whether you are disposing of crypto in a way capable of producing gains. An isolated trade can still be business if it is an adventure in the nature of trade.</li>
            <li>Mining, staking, and yield farming are named in CRA's self-employed guide as business activities when you are carrying on a business. Inventory and capital property are valued differently.</li>
            <li>A loss on capital account offsets capital gains, and the superficial-loss rule still applies. A business loss is a different schedule.</li>
        </ul>
    </div>

    <h2>When is crypto a capital gain?</h2>

    <p>CRA says that if the disposition is not on income account, it is capital. You have a capital gain when proceeds exceed the adjusted cost base plus the costs of selling. You have a capital loss when they do not. Half of a capital gain is included in income. The other half is not. That one-half rate is the enacted rate for 2026. The cancelled two-thirds proposal does not apply. You report capital dispositions on Schedule 3.</p>

    <p>Holding crypto the way you would hold a stock, for a longer period, without a trading operation, is the pattern that usually supports capital treatment. It is not a guarantee. CRA's audit manual on securities, which is the older cousin of this question, says the taxpayer's intention at acquisition and the whole course of conduct decide income versus capital. Frequency, time spent, knowledge of markets, financing, and advertising all show up in that analysis. No single factor wins.</p>

    <table>
        <caption>How the CRA splits a crypto disposition, as of September 2026</caption>
        <thead>
            <tr>
                <th>Treatment</th>
                <th>What is included</th>
                <th>Where it goes</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Capital</td>
                <td>One-half of the gain, or one-half of the loss against capital gains</td>
                <td>Schedule 3. Guide T4037.</td>
            </tr>
            <tr>
                <td>Business</td>
                <td>The full profit, or the full loss, after the expenses of earning it</td>
                <td>Form T2125. Guide T4002.</td>
            </tr>
            <tr>
                <td>Barter, paying for goods or services</td>
                <td>A disposition at fair market value. Capital or business, depending on the account it was held on.</td>
                <td>The same schedules. GST/HST, if you are in business, uses that fair market value too.</td>
            </tr>
        </tbody>
    </table>

    <p>Table as of September 2026. Sources: CRA's guide to reporting income from crypto-asset transactions, CRA's February 2024 tax tip on business income, and guide T4002. Nothing in the table is a quote of a token's price.</p>

    <div class="example-box">
        <strong>Illustration of the barter rule, not a market price</strong>
        <p>You bought one unit for $2,000 Canadian and later used it to pay for a laptop when that unit's fair market value was $4,000 Canadian. CRA treats the payment as a disposition. If the unit was capital property, the gain is $2,000 and the taxable half is $1,000. If you were carrying on a trading business, the $2,000 profit is fully included. The laptop, if it is a business input, has a cost of $4,000, the fair market value at the exchange. The $2,000 and $4,000 are invented round numbers so the arithmetic is visible. They are not a price for any asset on any day.</p>
    </div>

    <h2>When is it business income?</h2>

    <p>CRA's 2024 tax tip says you are generally carrying on a business if your course of conduct shows you are disposing of crypto-assets in a way capable of producing gains, and you conduct the activities with regularity or continuity. It also says an isolated transaction can be business income when it is an adventure or concern in the nature of trade. Day trading, trading with leverage as a business, and running a mining operation are the obvious end of that spectrum. A single large flip, bought to resell, can still be income. If you are not sure, the cost of guessing wrong is the difference between half and all of the profit, plus GST/HST questions if you are carrying on a business.</p>

    <p>Guide T4002 tells self-employed filers to include income from trading, mining, staking, or yield farming of crypto-assets in business income when those are business activities. Staking rewards and similar yields, when they are business income, are included when they are income, not only when you later sell the coins. Capital property, by contrast, waits for a disposition, and you track the adjusted cost base from the day you acquired it. CRA's note on valuing cryptocurrency says the method depends on whether the asset is capital property or inventory. Mixing the two without records is how people double-count or miss a year.</p>

    <p>If crypto activity is a business, the filing mechanics overlap the <a href="/blog/self-employed-tax-guide/">self-employed tax guide</a>: T2125, expenses that were actually incurred to earn the income, and instalments if you owe enough. A hobby label you invented in April does not convert a trading business into a capital gain.</p>

    <h2>What records does the CRA expect?</h2>

    <p>Dates, quantities, the fair market value in Canadian dollars at each acquisition and disposition, the wallet or exchange, and the purpose of the transfer. Transfers between your own wallets are not dispositions. Trades of one crypto-asset for another are. A spreadsheet that starts the year you get serious, with a hole where 2021 should be, is not a record. The standard is the same as any other capital property, which is why the <a href="/blog/tax-record-keeping/">record-keeping guide</a> belongs next to this page. Export the exchange history while the exchange still exists.</p>

    <p>Superficial losses apply on capital account. Selling a coin at a loss and rebuying the same coin, in your own wallet or your spouse's, inside the 30-day window, can deny the loss. The calendar version of that rule is <a href="/blog/tax-loss-harvesting-calendar-canada/">tax-loss harvesting</a>. A loss inside a business is not a superficial-loss claim. It is inventory or a business loss, and it has its own limits.</p>

    <div class="warning-box">
        <strong>Foreign reporting is a separate question:</strong>
        <p>Specified foreign property can include crypto-assets situated, deposited, or held outside Canada. If the total cost amount of specified foreign property exceeds the threshold in the Income Tax Act, Form T1135 is required. CRA's crypto guidance points users at the foreign-reporting rules rather than inventing a special exemption for tokens. A coin sitting with a foreign exchange is not "just on an app." Read the current T1135 questions-and-answers page for the year's threshold and for what counts. This article does not restate a threshold it is not quoting from that page in the same sentence as a guess.</p>
    </div>

    <h2>Frequently asked questions</h2>

    <h3>Is crypto tax-free in a TFSA?</h3>
    <p>A TFSA shelters investment income and capital gains. CRA has challenged taxpayers who carry on a business inside a TFSA, including active trading. If the activity is a business, the shelter is the wrong place to assume you are safe. Capital treatment of a buy-and-hold position is the scenario the account was built for. The account rules are <a href="/blog/tfsa-strategies/">TFSA strategies</a>.</p>

    <h3>Do I owe tax if I only swapped one coin for another?</h3>
    <p>Yes, that is a disposition. CRA treats crypto-for-crypto exchanges as barter. You realize a gain or a loss based on the fair market value in Canadian dollars of what you received, compared with the adjusted cost base of what you gave up. "I never cashed out to dollars" is not a tax rule.</p>

    <h3>How do I know if I am a trader or an investor?</h3>
    <p>CRA looks at the whole course of conduct, not at the label in your bio. Regularity, time spent, knowledge, financing, and an intention to resell pull toward business income. A longer hold, without a trading operation, pulls toward capital. An isolated purchase made to flip can still be an adventure in the nature of trade. If the amount is large, this is a determination for a tax advisor with the trade history in front of them, not a checkbox.</p>

    <h3>Are staking rewards income when I receive them?</h3>
    <p>If the activity is a business, CRA's self-employed guide tells you to include staking and yield-farming income in business income. You then have a cost for the coins you received, and a later disposition of those coins is a second event. Capital property is tracked to disposition. The classification of the activity comes first. Do not pick the answer that makes this year's return smaller.</p>

    <h3>Can I claim a loss when a coin goes to zero?</h3>
    <p>A disposition includes a sale and can include a situation where the property has become worthless, on the conditions in the capital-gains guide. You need a record of the cost and of the event. A screenshot of a dead exchange, with no cost base, is a weak claim. Capital losses still only offset capital gains. A business loss follows the business-loss rules, including any superficial or stop-loss style rule that does not apply, and the non-capital loss carryover rules that do.</p>

    <h3>Does the CRA actually see exchange activity?</h3>
    <p>CRA's valuing-cryptocurrency note says unreported income can bring tax, penalties, and interest, and it points people who need to correct past years at the voluntary-disclosures program. Assume the records exist somewhere. Correcting a past year on purpose is cheaper than waiting for a review. The tone of a review, if it comes, is closer to the <a href="/blog/cra-audit-guide/">CRA audit guide</a> than to a customer-service chat.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="https://www.canada.ca/en/revenue-agency/programs/about-canada-revenue-agency-cra/compliance/cryptocurrency-guide/income-crypto-transactions.html">CRA: reporting income from crypto-asset transactions</a></li>
        <li><a href="https://www.canada.ca/en/revenue-agency/news/newsroom/tax-tips/tax-tips-2024/reporting-your-crypto-asset-income-individual-carrying-business.html">CRA: crypto-asset income where you are carrying on a business</a></li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/forms-publications/publications/t4002/t4002-3.html">CRA: T4002, crypto-assets, mining, staking, and barter</a></li>
        <li><a href="https://www.canada.ca/en/revenue-agency/news/newsroom/tax-tips/tax-tips-2023/valuing-your-cryptocurrency.html">CRA: valuing your cryptocurrency</a></li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/international-non-residents/information-been-moved/foreign-reporting/questions-answers-about-form-t1135.html">CRA: questions and answers about Form T1135</a></li>
    </ul>

    <div class="cta-section">
        <p><strong>Half the gain, or all of the profit. The facts pick.</strong></p>
        <p>Records, the inclusion rate, and the rest of the return decide the bill. The 2026 tax guide is the filing companion, $49 CAD.</p>
        <a href="/ebooks/tax-guide/" class="cta-button">Get the 2026 Tax Guide — $49 CAD</a>
    </div>

    ${footer(published)}

</div>`
  ),
];
