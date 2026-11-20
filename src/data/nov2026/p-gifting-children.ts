import { batchFooter, batchPost } from './types';

const D = '2026-11-16';
const CRA = 'https://www.canada.ca/en/revenue-agency/services/tax/individuals';
const T4037 = 'https://www.canada.ca/en/revenue-agency/services/forms-publications/publications/t4037/capital-gains.html';
const IT510 =
  'https://www.canada.ca/en/revenue-agency/services/forms-publications/publications/it510/archived-transfers-loans-property-made-after-may-22-1985-a-related-minor.html';
const ITA74 = 'https://laws-lois.justice.gc.ca/eng/acts/I-3.3/section-74.1.html';
const ITA56 = 'https://laws-lois.justice.gc.ca/eng/acts/I-3.3/section-56.html';
const CESG = 'https://www.canada.ca/en/services/benefits/education/education-savings/savings-grant.html';

const disclaimer = `General education, not tax, legal or financial advice. Rules and 2026 limits were checked against the CRA, Government of Canada and Justice Laws pages listed under Sources on November 12, 2026. The gift amounts, the 3% interest rate and the share values in the examples are illustrations, not forecasts or quotes. Confirm the current pages, and talk to a tax professional, and a family lawyer for large gifts, about your own situation.`;

const content = `<div class="container">

    <div class="hook">
        You want to help your kids with a down payment, a TFSA or school, and you have heard there is a "gift tax". <span class="highlight">There isn't one in Canada, but the attribution rules decide who pays tax on what the gift earns.</span> This guide from our <a href="/category/taxes/life-events-estates/">life events and estates hub</a> answers the questions parents ask most.
    </div>

    <p>Canada has no gift tax, and your child does not report a cash gift as income; the CRA lists most gifts as amounts not reported or taxed. Two rules still matter for the 2026 tax year: income on money given to a child under 18 is taxed to you, and giving investments counts as selling them at fair market value.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>Cash gifts to adult children are simple: no tax to give, no tax to receive, and what the money earns is the child's income.</li>
            <li>For a child under 18, interest and dividends on the gift are taxed to the parent or grandparent who gave it, but capital gains are the child's.</li>
            <li>Gifting shares or a property is a deemed sale: you report the gain in the year you give it.</li>
            <li>Funding your adult child's TFSA or FHSA, or a child's RESP, avoids most of the attribution question.</li>
        </ul>
    </div>

    <h2 id="gift-tax">Is there a gift tax in Canada?</h2>
    <p>No. Canada has no gift tax and no annual gift limit. The CRA's list of <a href="${CRA}/topics/about-your-tax-return/tax-return/completing-a-tax-return/personal-income/amounts-that-taxed.html">amounts that are not reported or taxed</a> includes most gifts and inheritances, so your child does not report the gift. You do not report it either, and you get no deduction for it.</p>
    <p>The same CRA page adds a note that matters: income earned on a non-taxable amount is taxable. So the question is never "is the gift taxed?" It is "who reports what the gift earns?" That depends on the child's age and on what you give.</p>

    <h2 id="who-pays">Who pays tax on what a gift earns?</h2>
    <p>For a child 18 or older, the child does. For a younger child, the giver usually reports interest and dividends until the year the child turns 18, while capital gains go to the child. The table summarizes the common ways parents give.</p>

    <div class="table-wrapper">
        <table>
            <caption>Who reports the income on a gift to a child (federal rules, checked November 2026)</caption>
            <thead>
                <tr><th>How you give</th><th>Tax when you give</th><th>Who reports interest and dividends</th><th>Who reports capital gains</th></tr>
            </thead>
            <tbody>
                <tr><td>Cash to an adult child</td><td>None</td><td>Child</td><td>Child</td></tr>
                <tr class="highlight-row"><td>Cash to a child under 18, invested in their name or in trust</td><td>None</td><td>You, until the year they turn 18</td><td>Child</td></tr>
                <tr><td>Shares or units you own, to any child</td><td>You report the gain as if you sold</td><td>Depends on age, as above</td><td>Child, on growth after the gift</td></tr>
                <tr><td>Cash your adult child puts in their TFSA</td><td>None</td><td>No one while it stays in the TFSA</td><td>No one while it stays in the TFSA</td></tr>
                <tr><td>Cash your adult child puts in their FHSA</td><td>None</td><td>No one while it stays in the FHSA</td><td>No one while it stays in the FHSA</td></tr>
                <tr><td>Contributions to an RESP for a child</td><td>None</td><td>Growth and grants are taxed to the student when paid out for school</td><td>Same</td></tr>
            </tbody>
        </table>
    </div>

    <p data-info-gain>Our one-table rule of thumb: for an adult child, give cash and let them use their own TFSA or FHSA room; for a child under 18, the RESP and growth-oriented investments are the two places where attribution costs you little or nothing.</p>

    <h2 id="minor">What are the attribution rules for a child under 18?</h2>
    <p>Section 74.1(2) of the <a href="${ITA74}">Income Tax Act</a> says that when you transfer or lend property, including money, to a person under 18 who does not deal with you at arm's length (or who is your niece or nephew), income from that property is deemed to be yours unless the child turned 18 before the end of the year. Grandchildren are covered too, because they are related to you.</p>
    <p>Capital gains are treated differently. The CRA's archived bulletin <a href="${IT510}">IT-510</a> says this rule does not attribute a taxable capital gain or allowable capital loss from a later sale of the transferred property by the minor. The bulletin also says income earned on the attributed income, such as interest on interest left to build up, is the child's.</p>

    <div class="example-box">
        <strong>Example (illustration): $10,000 given to a 15-year-old</strong>
        <div class="example-calculation">
            <div class="line"><span>Placed in a GIC paying an illustrative 3% a year</span><span>$300 interest</span></div>
            <div class="line"><span>Who reports the $300 each year until the child turns 18</span><span>The parent</span></div>
            <div class="line"><span>Instead invested in a growth fund that later rises to $14,000 and is sold</span><span>$4,000 gain</span></div>
            <div class="line total"><span>Who reports the $4,000 gain</span><span>The child</span></div>
        </div>
        <p>The rate and growth are made up to show the split. Interest and dividends a fund pays along the way would still be attributed to the parent while the child is a minor.</p>
    </div>

    <h2 id="adult">Can I give money to my adult child without tax consequences?</h2>
    <p>Yes, if it is a true gift of cash. The minor-child rule in section 74.1(2) stops applying in the year the child turns 18. The income the money earns afterwards is your child's to report, at their tax rate.</p>
    <p>Loans are different. Under section 56(4.1) of the <a href="${ITA56}">Income Tax Act</a>, if you lend money to a family member at low or no interest and one of the main reasons can reasonably be considered to be reducing tax, income from the borrowed money can be taxed back to you. If you want to lend instead of give, our guide to <a href="/blog/prescribed-rate-spousal-loans/">prescribed-rate loans</a> explains how a loan at the prescribed rate is set up.</p>

    <h2 id="shares">What happens if I give my child shares or a property instead of cash?</h2>
    <p>You are treated as selling it. The CRA's <a href="${T4037}">capital gains guide (T4037)</a> says that if you give capital property as a gift, you are considered to have sold it at its fair market value at the time you give it, and you report any gain for that year. Your child is considered to have acquired it at that fair market value.</p>

    <div class="example-box">
        <strong>Example (illustration): giving $30,000 of shares that cost $10,000</strong>
        <div class="example-calculation">
            <div class="line"><span>Fair market value on the day you give them</span><span>$30,000</span></div>
            <div class="line"><span>Your adjusted cost base</span><span>$10,000</span></div>
            <div class="line"><span>Capital gain you report that year</span><span>$20,000</span></div>
            <div class="line total"><span>Taxable half added to your income</span><span>$10,000</span></div>
        </div>
        <p>Your child's cost becomes $30,000, so the $20,000 of past growth is never taxed twice. Gifting cash is often cleaner: sell what you choose, use any capital losses, and give the money.</p>
    </div>

    <p>The same deemed sale applies to a cottage or rental you transfer to a child, and you cannot escape it by selling to them for $1. T4037 says a sale to someone you do not deal with at arm's length for less than fair market value is treated as a sale at fair market value. Real property transfers also bring provincial land transfer rules into play; check your province before you move title.</p>

    <h2 id="accounts">Which accounts are best for gifting money to my children?</h2>
    <p>Accounts that shelter the income remove the attribution question. The right one depends on the child's age and goal.</p>
    <ul>
        <li><strong>RESP, for a child of any age.</strong> The <a href="${CESG}">Canada Education Savings Grant</a> adds up to 20% of the first $2,500 contributed each year, a maximum of $500 a year and $7,200 per child over their lifetime. Our <a href="/blog/resp-investing-age-glide-path-canada/">RESP investing guide</a> covers how to invest it.</li>
        <li><strong>TFSA, for a child 18 or older.</strong> The CRA's <a href="${CRA}/topics/tax-free-savings-account/opening.html">TFSA opening rules</a> require the holder to be 18; in provinces where the age of majority is 19, they open it at 19 and keep the room from the year they turned 18. The <a href="${CRA}/topics/tax-free-savings-account/contributing/calculate-room.html">2026 TFSA dollar limit</a> is $7,000. Give the cash; your child makes the contribution.</li>
        <li><strong>FHSA, for an adult first-time buyer.</strong> The CRA's <a href="${CRA}/topics/first-home-savings-account/contributing-your-fhsa.html">FHSA contribution page</a> gives $8,000 of participation room in the year the first FHSA is opened, and the CRA's <a href="${CRA}/topics/first-home-savings-account/definitions.html">FHSA definitions</a> set the lifetime limit at $40,000. Contributions are deductible by your child, not by you. Our <a href="/blog/fhsa-guide/">FHSA guide</a> covers the rest.</li>
    </ul>

    <div data-offer="questrade-self-directed"></div>

    <h2 id="down-payment">How should I give my child money for a down payment?</h2>
    <p>As a clear gift, documented in writing, timed so your child can use their FHSA and home buyer programs first. A cash gift has no tax cost to you. Your child's lender may ask for a signed letter confirming the money is a gift that does not have to be repaid, so keep the transfer records.</p>
    <p>If you want the money back someday, for example if the relationship ends, talk to a family lawyer before you give it. How gifts are treated when a couple separates is provincial family law, and the answer can change if the money goes into a shared home. A loan agreement or a cohabitation or marriage contract is the usual tool.</p>
    <ol>
        <li>Decide whether it is a gift or a loan, and write that down.</li>
        <li>Have your child open and fund an FHSA early so the room starts building.</li>
        <li>Transfer the money from your account to theirs, not in cash, and keep the statements.</li>
        <li>Sign the lender's gift letter if one is requested.</li>
        <li>If you are selling investments to fund the gift, report any capital gain on your own return.</li>
    </ol>

    <div class="warning-box">
        <strong>Common mistakes:</strong>
        <ul>
            <li><strong>Opening a "TFSA" for a 16-year-old.</strong> Holders must be at least 18; until then the RESP or an informal account is the option.</li>
            <li><strong>Putting a minor's money in a joint or in-trust account and reporting nothing.</strong> Interest and dividends are yours to report until the year they turn 18.</li>
            <li><strong>Transferring a cottage for $1.</strong> You are still taxed as if you sold at fair market value.</li>
            <li><strong>Assuming the US gift tax applies.</strong> It is a US rule. It can matter if you are a US citizen or give US property, which needs separate advice.</li>
        </ul>
    </div>

    <h2 id="estate">Is giving money now better than leaving it in my will?</h2>
    <p>Often yes for cash, because your child gets it when it helps most and it avoids probate on that amount. It does not avoid the tax at death on investments you keep, since gifting them is itself a deemed sale. Our explainer on <a href="/blog/inheritance-tax-canada/">inheritance tax in Canada</a> shows how the final return treats what you still own, and the <a href="/blog/tax-efficient-wealth-transfer/">wealth transfer guide</a> compares giving now with leaving it later.</p>
    <p>Keep enough for your own retirement first. A gift cannot be taken back, and a long life or care needs can cost more than expected.</p>

    <h2>Frequently asked questions</h2>
    <h3>How much money can I gift my child tax-free in Canada?</h3>
    <p>There is no limit. Canada has no gift tax, and the CRA lists most gifts as not reported or taxed. Watch who reports the income the gift earns, and whether you are giving cash or property.</p>
    <h3>Does my child have to report a cash gift on their tax return?</h3>
    <p>No. A gift is not income to the person who receives it. Interest or other income it earns afterwards is reportable, by the child if they are an adult.</p>
    <h3>Do the attribution rules apply to grandparents?</h3>
    <p>Yes. Section 74.1(2) covers transfers to anyone under 18 who does not deal with you at arm's length, which includes grandchildren, plus nieces and nephews.</p>
    <h3>Can I contribute to my adult child's TFSA for them?</h3>
    <p>Give them the money and let them contribute; the account and the room are theirs. Their contribution uses their own room, which for 2026 includes the $7,000 dollar limit.</p>
    <h3>Is a gift of shares to my child taxable?</h3>
    <p>To you, yes, if they have gone up in value. You are considered to sell at fair market value on the day you give them and report the gain that year.</p>
    <h3>Can I give my child money to buy a house?</h3>
    <p>Yes, with no tax cost if it is cash. Document it as a gift, consider the FHSA first, and get family law advice if you want protection should their relationship end.</p>
    <h3>What is the best account to save for a young child?</h3>
    <p>For education, the RESP, because of the grant of up to $500 a year. For other goals, growth investments in your own name or in trust keep attributed income low, since capital gains are the child's.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="${CRA}/topics/about-your-tax-return/tax-return/completing-a-tax-return/personal-income/amounts-that-taxed.html">CRA: Amounts that are not reported or taxed</a>, reviewed November 12, 2026</li>
        <li><a href="${ITA74}">Justice Laws: Income Tax Act, section 74.1</a>, reviewed November 12, 2026</li>
        <li><a href="${ITA56}">Justice Laws: Income Tax Act, section 56</a>, reviewed November 12, 2026</li>
        <li><a href="${IT510}">CRA archived Interpretation Bulletin IT-510, transfers and loans to a related minor</a>, reviewed November 12, 2026</li>
        <li><a href="${T4037}">CRA: Guide T4037, Capital Gains</a>, reviewed November 12, 2026</li>
        <li><a href="${CRA}/topics/tax-free-savings-account/opening.html">CRA: Opening a TFSA</a>, reviewed November 12, 2026</li>
        <li><a href="${CRA}/topics/tax-free-savings-account/contributing/calculate-room.html">CRA: Calculate your TFSA contribution room (2026 dollar limit)</a>, reviewed November 12, 2026</li>
        <li><a href="${CRA}/topics/first-home-savings-account/contributing-your-fhsa.html">CRA: Contributing to your FHSA</a>, reviewed November 12, 2026</li>
        <li><a href="${CRA}/topics/first-home-savings-account/definitions.html">CRA: Definitions for FHSAs (lifetime limit)</a>, reviewed November 12, 2026</li>
        <li><a href="${CESG}">Government of Canada: Canada Education Savings Grant</a>, reviewed November 12, 2026</li>
    </ul>

    <h2>Related reading</h2>
    <ul>
        <li><a href="/blog/inheritance-tax-canada/">Inheritance tax in Canada: who pays</a></li>
        <li><a href="/blog/tfsa-successor-holder-vs-beneficiary/">TFSA successor holder vs beneficiary</a></li>
        <li><a href="/blog/final-tax-return-deceased-canada/">Final tax return for a deceased person</a></li>
        <li><a href="/blog/prescribed-rate-spousal-loans/">Prescribed-rate loans</a></li>
        <li><a href="/blog/fhsa-guide/">FHSA guide</a></li>
    </ul>

    <div class="cta-section">
        <p><strong>If you sell investments to fund a gift, the gain goes on your return.</strong></p>
        <p>The Canadian Optimizer Tax Guide covers capital gains, the TFSA and the FHSA on the return.</p>
        <a href="/ebooks/tax-guide/" class="cta-button">See the Tax Guide</a>
    </div>

    ${batchFooter(D, 'Taxes', disclaimer)}

</div>`;

export const giftingChildrenPost = batchPost({
  date: D,
  category: 'Taxes',
  categorySlug: 'taxes',
  subcategory: 'life-events-estates',
  slug: 'gifting-money-to-children-canada',
  title: 'Gifting Money to Children in Canada: The Tax Rules Parents Need',
  excerpt:
    'Canada has no gift tax, but the attribution rules decide who pays tax on what a gift earns. What to know before you give cash, shares, a TFSA top-up or a down payment.',
  content,
});
