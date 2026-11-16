import { batchFooter, batchPost } from './types';

const D = '2026-11-16';
const CRA = 'https://www.canada.ca/en/revenue-agency/services/tax/individuals';
const DIED = `${CRA}/life-events/doing-taxes-someone-died`;

const disclaimer = `General education, not tax or legal advice. Rules and the 2026 brackets were checked against the Canada Revenue Agency pages listed under Sources on November 12, 2026. The estate in the example is an illustration with round numbers, not a forecast and not your assessment; it ignores credits, deductions and the Ontario surtax. Estates differ a lot. Confirm the current CRA pages and talk to a tax professional or estate lawyer about your own file.`;

const content = `<div class="container">

    <div class="hook">
        Canada has no inheritance tax, so why do so many estates write the CRA a large cheque? <span class="highlight">The tax lands on the person who died, on one final return, before anyone inherits.</span> This guide, part of our <a href="/category/taxes/life-events-estates/">life events and estates hub</a>, shows what that return taxes and how a typical estate's bill is built.
    </div>

    <p>Canada does not tax heirs on what they inherit. The CRA lists most gifts and inheritances as amounts you do not report. Instead, the person who died is treated as selling their capital property at death, and their RRSP or RRIF is generally added to income on the final 2026 return. The estate pays that tax first.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>Heirs do not pay tax on an inheritance itself. Income the inherited money earns afterwards is theirs to report.</li>
            <li>The final return carries a deemed sale of capital property at fair market value, and usually the full value of an RRSP or RRIF.</li>
            <li>A principal residence designation and a spouse or common-law partner rollover are the two biggest reasons an estate's bill is smaller than expected.</li>
            <li>A TFSA adds nothing to the final return, which is why it matters so much in estate planning.</li>
        </ul>
    </div>

    <nav aria-label="On this page">
        <ul>
            <li><a href="#is-there">Is there an inheritance tax in Canada?</a></li>
            <li><a href="#what-is-taxed">What the final return taxes</a></li>
            <li><a href="#example">A worked estate, start to finish</a></li>
            <li><a href="#spouse">What changes when a spouse inherits</a></li>
            <li><a href="#steps">How to reduce the bill: a checklist</a></li>
            <li><a href="#mistakes">Common mistakes</a></li>
        </ul>
    </nav>

    <h2 id="is-there">Is there an inheritance tax in Canada?</h2>
    <p>No. There is no federal or provincial inheritance tax, and the CRA's list of <a href="${CRA}/topics/about-your-tax-return/tax-return/completing-a-tax-return/personal-income/amounts-that-taxed.html">amounts that are not reported or taxed</a> includes "most gifts and inheritances". If your father leaves you a portfolio or a house, you do not put its value on your own return.</p>
    <p>What Canada has instead is a tax on the deceased person's last year. The CRA's guide to <a href="${DIED}/prepare-returns/report-income/capital-gains.html">capital gains at death</a> says a person who dies is considered to have sold all their capital property just before death, even though nothing was sold. This is called a deemed disposition. Every unrealized gain in a cottage, a rental or a non-registered account becomes a gain on the final return.</p>
    <p>Two other costs often get called "inheritance tax" but are not:</p>
    <ul>
        <li><strong>Probate fees.</strong> Provinces charge a fee or tax to confirm a will, based on the value of assets that pass through it. Rates and names differ by province; our <a href="/blog/probate-fees-by-province-canada/">probate fees by province</a> guide has each one.</li>
        <li><strong>Tax on income after death.</strong> Interest, dividends and gains the estate earns after the date of death go on an estate (trust) return, or on the beneficiary's return once assets are paid out.</li>
    </ul>

    <h2 id="what-is-taxed">What does the final return actually tax?</h2>
    <p>The final return taxes the deceased person's normal income up to the date of death, plus amounts that appear only because they died: a deemed sale of capital property and, usually, the value of registered retirement plans. Which assets create tax depends on the asset type and who receives it.</p>

    <div class="table-wrapper">
        <table>
            <caption>How each common asset is treated on the final return (CRA rules, checked November 2026)</caption>
            <thead>
                <tr><th>Asset</th><th>What goes on the final return</th><th>Main exception</th></tr>
            </thead>
            <tbody>
                <tr><td>RRSP or RRIF</td><td>Generally the full fair market value at death, as income</td><td>Rollover to a surviving spouse or common-law partner; limited rollovers for a financially dependent child or grandchild</td></tr>
                <tr><td>Non-registered investments</td><td>Capital gain: value at death minus adjusted cost base; the taxable part is included</td><td>Property left to a spouse or spousal trust rolls over at cost</td></tr>
                <tr><td>Cottage, rental, land</td><td>Capital gain on the deemed sale; rentals can also trigger recaptured depreciation</td><td>Spouse rollover; a cottage may use the principal residence exemption instead of the home</td></tr>
                <tr class="highlight-row"><td>Principal residence</td><td>Reported on Schedule 3, but the gain can be fully exempt</td><td>Must still be designated on Form T1255</td></tr>
                <tr><td>TFSA</td><td>Nothing</td><td>Growth after death is taxable to the beneficiary unless a spouse is successor holder</td></tr>
                <tr><td>Cash and GICs</td><td>Only interest earned to the date of death</td><td>None</td></tr>
                <tr><td>Life insurance paid to a named beneficiary</td><td>Nothing</td><td>None</td></tr>
            </tbody>
        </table>
    </div>

    <p>The registered plan line is the one that surprises people. The CRA's <a href="${DIED}/prepare-returns/report-income/rrif.html">RRIF page for deceased annuitants</a> says that, outside the spouse exceptions, the CRA considers the person to have received the fair market value of all property in the RRIF immediately before death. The <a href="${DIED}/prepare-returns/report-income/rrsp.html">RRSP page</a> says the same for an unmatured RRSP. A large RRIF can push the final return into the top bracket on its own.</p>
    <p>For capital gains, the taxable part is half the gain. The CRA's capital losses page states that the <a href="${CRA}/topics/about-your-tax-return/tax-return/completing-a-tax-return/personal-income/line-12700-capital-gains/capital-losses-deductions.html">inclusion rate for 2025 is 50%</a>, and the <a href="https://www.pm.gc.ca/en/news/news-releases/2025/03/21/prime-minister-mark-carney-cancels-proposed-capital-gains-tax-increase">Prime Minister's March 21, 2025 release</a> cancelled the proposed increase, so one-half still applies to a 2026 death.</p>
    <p>The TFSA line is why TFSAs are such good estate assets. The CRA's page on <a href="${DIED}/prepare-returns/report-income/tfsa.html">TFSAs at death</a> says no income should be reported by the deceased on the final return or any optional return. Our comparison of a <a href="/blog/tfsa-successor-holder-vs-beneficiary/">TFSA successor holder and a beneficiary</a> covers what happens to growth after death.</p>

    <h2 id="example">What does a typical estate owe? A worked example</h2>
    <p>Take one widowed Ontario resident who dies in 2026 with a paid-off home, a RRIF, a taxable investment account and a TFSA. With no spouse to roll assets to, the RRIF and the investment gain land on the final return, and the bracket tax on them is in the six figures before credits.</p>

    <div class="example-box">
        <strong>Example (illustration): a widowed Ontario estate, death in 2026</strong>
        <div class="example-calculation">
            <div class="line"><span>Pension, CPP and OAS received before death</span><span>$30,000</span></div>
            <div class="line"><span>RRIF value at death (fully included)</span><span>$300,000</span></div>
            <div class="line"><span>Taxable account: value $200,000, cost $120,000, gain $80,000; taxable half</span><span>$40,000</span></div>
            <div class="line"><span>Home worth $750,000, principal residence every year</span><span>$0</span></div>
            <div class="line"><span>TFSA worth $95,000</span><span>$0</span></div>
            <div class="line total"><span>Income on the final return</span><span>$370,000</span></div>
        </div>
        <p>Applying the CRA's 2026 federal brackets to $370,000 gives $96,076 of federal tax before credits. Ontario's 2026 brackets add $40,616 before credits and the Ontario surtax. That is $136,692 owed by the estate, roughly a tenth of the $1,345,000 the person owned, even though the house, the biggest asset, was tax-free.</p>
    </div>

    <p data-info-gain>Our worked estate shows where the bill comes from: the RRIF supplies $300,000 of the $370,000 of income, the investment gain only $40,000, and the home and TFSA nothing, so the registered plan, not the house, drives most of the final-return tax.</p>

    <div class="chart-container">
        <h3>Where the example's $370,000 of final-return income comes from (illustration, 2026 death)</h3>
        <div class="bar-chart">
            <div class="bar-item">
                <div class="bar-label">RRIF</div>
                <div class="bar-wrapper"><div class="bar" style="width: 81%;"><span>$300,000</span></div></div>
            </div>
            <div class="bar-item">
                <div class="bar-label">Gain</div>
                <div class="bar-wrapper"><div class="bar" style="width: 11%;"><span>$40,000</span></div></div>
            </div>
            <div class="bar-item">
                <div class="bar-label">Pens.</div>
                <div class="bar-wrapper"><div class="bar" style="width: 8%;"><span>$30,000</span></div></div>
            </div>
            <div class="bar-item">
                <div class="bar-label">Home</div>
                <div class="bar-wrapper"><div class="bar" style="width: 1%;"><span>$0</span></div></div>
            </div>
        </div>
        <p>In this illustration the RRIF is about four-fifths of the income the final return taxes. The bracket figures come from the CRA's <a href="${CRA}/tax-rates-brackets/current-year.html">2026 tax rates and income brackets</a>; the estate itself is made up.</p>
    </div>

    <p>The calculation leaves out several things that lower the real bill: the basic personal amount and other credits, the pension and age amounts, medical expenses, donations made by will, and any capital losses. It also leaves out the Ontario surtax, which raises it. Treat the shape, not the total, as the lesson.</p>

    <h2 id="spouse">What changes when a spouse or common-law partner inherits?</h2>
    <p>Almost everything is deferred. If the RRIF is paid to a surviving spouse and transferred to their own plan, the CRA's RRIF page explains the amount can be reported by the survivor, who claims an offsetting deduction, instead of the deceased. Capital property left to a Canadian-resident spouse moves at its cost with no gain on the final return, according to the CRA's capital gains page. The tax waits until the second death.</p>
    <p>In the example above, if the person had a surviving spouse who received the RRIF and the investments, the final return would show roughly the $30,000 of pension income and little else. The deferral is not forgiveness: the full bill arrives on the survivor's final return, often in a higher bracket because one person now holds everything. Our guide to <a href="/blog/tax-efficient-wealth-transfer/">tax-efficient wealth transfer</a> covers ways couples plan for that second return.</p>

    <h2 id="who-pays">Who actually pays the tax, the estate or the heirs?</h2>
    <p>The estate pays, through the executor, before assets are distributed. The executor files the final return, pays the balance from estate money, and should get a <a href="${DIED}/clearance-certificate.html">clearance certificate</a> before handing out the remaining assets. The CRA warns that a legal representative who distributes without one can be personally liable for unpaid amounts, up to the value of what they distributed.</p>
    <p>This creates a fairness problem families often miss. Suppose a will leaves the RRIF to a daughter by beneficiary designation and the house to a son through the will. The RRIF goes straight to the daughter, but the tax on it is charged to the estate, which may mean the son's share pays for his sister's inheritance. Wills and designations need to be read together. Our <a href="/blog/estate-planning-wills-poa/">wills and powers of attorney guide</a> covers how the documents fit.</p>
    <p>The executor's deadlines are in our step-by-step guide to the <a href="/blog/final-tax-return-deceased-canada/">final tax return for a deceased person</a>.</p>

    <h2 id="steps">How can you reduce the tax your estate will owe?</h2>
    <p>You cannot avoid the deemed sale, but you can shrink what it catches and make sure the right person pays. Work through this list while you are alive and able to change things.</p>
    <ul class="checklist">
        <li>Name a spouse or common-law partner as successor annuitant on a RRIF, or beneficiary on an RRSP, where that suits your plan.</li>
        <li>Name a spouse as successor holder on your TFSA, outside Quebec, so the account keeps its tax-free status.</li>
        <li>Keep records of what you paid for every non-registered investment and property, so the executor can prove the cost.</li>
        <li>Decide which property is your principal residence for which years if you own a home and a cottage.</li>
        <li>Consider drawing down a RRIF faster in lower-income years so less is taxed at the top rate on the final return; our <a href="/blog/rrsp-meltdown-strategy/">RRSP meltdown guide</a> runs that maths.</li>
        <li>Fill unused TFSA room, since TFSA money adds nothing to the final return.</li>
        <li>Plan charitable gifts by will. Under conditions set out on the CRA's donations page, gifts made through the estate can be claimed on the final return.</li>
        <li>Check that beneficiary designations and the will agree on who bears the tax.</li>
        <li>For a family cottage, get advice on funding the future tax, for example with life insurance.</li>
    </ul>

    <div class="warning-box">
        <h3 id="mistakes">Common mistakes</h3>
        <ul>
            <li><strong>Assuming the US estate tax applies here.</strong> Canada has no estate tax. US rules can still matter if you own US property, which is a separate topic.</li>
            <li><strong>Forgetting the home must be reported.</strong> An exempt principal residence still goes on Schedule 3 and Form T1255.</li>
            <li><strong>Thinking a beneficiary designation avoids tax.</strong> It can avoid probate on that asset, but RRSP or RRIF tax is still charged to the estate unless a spouse rollover applies.</li>
            <li><strong>Distributing too early.</strong> Paying out before the CRA clears the estate can leave the executor personally on the hook.</li>
        </ul>
    </div>

    <h2 id="provinces">Does my province change any of this?</h2>
    <p>The income tax rules are federal and apply everywhere, but the provincial rate on the final return depends on where the person lived at death, and probate costs are entirely provincial. Quebec administers its own income tax, and the CRA notes that Quebec does not recognize TFSA successor holder designations, other than for annuity contracts. The example uses Ontario brackets; another province would produce a different total.</p>

    <h2 id="help">When should you get professional help?</h2>
    <p>Get help from a tax professional when the estate includes a business, a rental or a cottage with a large gain, US assets, a spouse rollover you might want to elect out of, or any family disagreement. An estate lawyer should draft or review the will and the beneficiary designations together.</p>

    <h2>Frequently asked questions</h2>
    <h3>Do I have to pay tax on money I inherit in Canada?</h3>
    <p>No. The CRA lists most inheritances as amounts you do not report. Tax owed because of the death is paid by the estate on the final return. Income the money earns after you receive it is yours to report.</p>
    <h3>Is an inherited house taxable in Canada?</h3>
    <p>Not to you. On the final return, the gain on the person's principal residence can be fully exempt if it qualified every year. A second property like a cottage or rental usually has a taxable gain. When you later sell, your cost is generally the value at death.</p>
    <h3>How much tax is paid on an RRSP or RRIF at death?</h3>
    <p>Without a spouse rollover, the full value is generally added to income on the final return and taxed at the person's marginal rate, which a large plan pushes into the top bracket. The rate depends on the province and the rest of their income.</p>
    <h3>Is a TFSA taxed when the holder dies?</h3>
    <p>No. Nothing goes on the final return. Growth after death is taxable to a beneficiary, unless a spouse or common-law partner takes over as successor holder.</p>
    <h3>Do heirs pay the deceased person's tax bill?</h3>
    <p>Not personally, as a rule. The estate pays from its assets before distribution. The CRA's clearance certificate page notes that liability for unpaid tax can pass to beneficiaries who received distributed assets, which is why executors wait for clearance.</p>
    <h3>Is life insurance taxable when paid to my family?</h3>
    <p>Generally no. The CRA lists most amounts received from a life insurance policy after someone's death as not taxed. Our <a href="/blog/life-events-tax-implications/">life events and taxes guide</a> covers related changes.</p>
    <h3>Is gifting money before death a way to avoid this?</h3>
    <p>Gifts of cash are not taxed to the recipient, but gifting investments counts as a sale at fair market value when you give them. Our guide to <a href="/blog/gifting-money-to-children-canada/">gifting money to children</a> covers the rules.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="${CRA}/topics/about-your-tax-return/tax-return/completing-a-tax-return/personal-income/amounts-that-taxed.html">CRA: Amounts that are not reported or taxed</a>, reviewed November 12, 2026</li>
        <li><a href="${DIED}/prepare-returns/report-income/capital-gains.html">CRA: Taxable capital gains on property, investments, and belongings (deceased persons)</a>, reviewed November 12, 2026</li>
        <li><a href="${DIED}/prepare-returns/report-income/rrif.html">CRA: RRIF (deceased persons)</a>, reviewed November 12, 2026</li>
        <li><a href="${DIED}/prepare-returns/report-income/rrsp.html">CRA: RRSP (deceased persons)</a>, reviewed November 12, 2026</li>
        <li><a href="${DIED}/prepare-returns/report-income/tfsa.html">CRA: TFSA (deceased persons)</a>, reviewed November 12, 2026</li>
        <li><a href="${DIED}/clearance-certificate.html">CRA: Apply for a clearance certificate</a>, reviewed November 12, 2026</li>
        <li><a href="${CRA}/topics/about-your-tax-return/tax-return/completing-a-tax-return/personal-income/line-12700-capital-gains/capital-losses-deductions.html">CRA: Capital losses (inclusion rate)</a>, reviewed November 12, 2026</li>
        <li><a href="https://www.pm.gc.ca/en/news/news-releases/2025/03/21/prime-minister-mark-carney-cancels-proposed-capital-gains-tax-increase">Prime Minister of Canada: proposed capital gains tax increase cancelled (March 21, 2025)</a>, reviewed November 12, 2026</li>
        <li><a href="${CRA}/tax-rates-brackets/current-year.html">CRA: Current year tax rates and income brackets (2026)</a>, reviewed November 12, 2026</li>
        <li><a href="${DIED}/prepare-returns/credits-deductions/donations-gifts.html">CRA: Donations and gifts (deceased persons)</a>, reviewed November 12, 2026</li>
    </ul>

    <h2>Related reading</h2>
    <ul>
        <li><a href="/blog/final-tax-return-deceased-canada/">Final tax return for a deceased person: deadlines and steps</a></li>
        <li><a href="/blog/tfsa-successor-holder-vs-beneficiary/">TFSA successor holder vs beneficiary</a></li>
        <li><a href="/blog/gifting-money-to-children-canada/">Gifting money to children: the tax rules</a></li>
        <li><a href="/blog/probate-fees-by-province-canada/">Probate fees by province</a></li>
        <li><a href="/blog/tax-efficient-wealth-transfer/">Tax-efficient wealth transfer</a></li>
    </ul>

    <div class="cta-section">
        <p><strong>The final return is still a T1, and the rest of it follows the normal rules.</strong></p>
        <p>The Canadian Optimizer Tax Guide walks through the return line by line, including capital gains and registered plans.</p>
        <a href="/ebooks/tax-guide/" class="cta-button">See the Tax Guide</a>
    </div>

    ${batchFooter(D, 'Taxes', disclaimer)}

</div>`;

export const inheritanceTaxPost = batchPost({
  date: D,
  category: 'Taxes',
  categorySlug: 'taxes',
  subcategory: 'life-events-estates',
  slug: 'inheritance-tax-canada',
  title: 'Inheritance Tax in Canada: Who Pays and What the Estate Owes',
  excerpt:
    'Canada has no inheritance tax, but the final return taxes a deemed sale of property and most RRSP or RRIF money. A worked 2026 example shows what an estate owes.',
  content,
});
