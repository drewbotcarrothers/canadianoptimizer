import { batchFooter, batchPost } from './types';

const D = '2026-11-16';
const CRA = 'https://www.canada.ca/en/revenue-agency/services/tax/individuals';
const DIED = `${CRA}/life-events/doing-taxes-someone-died`;
const PR = `${DIED}/prepare-returns`;

const disclaimer = `General education, not tax or legal advice. Deadlines, forms and rules were checked against the Canada Revenue Agency pages listed under Sources on November 12, 2026. The dates of death in the calendar are examples chosen to show how the rules work. A deadline that falls on a weekend or public holiday moves to the next business day. Confirm the current CRA pages, and use a tax professional for any estate with a business, rental, trust or foreign assets.`;

const content = `<div class="container">

    <div class="hook">
        You have been named executor, and somewhere in the paperwork is a tax return nobody explained. <span class="highlight">The final return is a normal T1 with a few extra rules, a different deadline and a paper filing.</span> This step-by-step guide from our <a href="/category/taxes/forms-slips/">CRA forms, lines and slips hub</a> takes you from the date of death to the clearance certificate.
    </div>

    <p>The final return is the T1 that reports a deceased person's income from January 1 to the date of death. For a death from January 1 to October 31, 2026, the CRA's due date to file and pay is April 30, 2027. For a death in November or December, it is six months after the death. The executor files it.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>Use the T1 package for the year of death and the province where the person lived on that date.</li>
            <li>The final return includes a deemed sale of capital property and usually the full value of any RRSP or RRIF.</li>
            <li>Up to three optional returns can cut the tax by letting you claim some credits again.</li>
            <li>The CRA says online tax software does not currently support submitting the final return; you mail it, or an authorized preparer can EFILE it.</li>
            <li>Ask for a clearance certificate before you distribute the estate.</li>
        </ul>
    </div>

    <nav aria-label="On this page">
        <ul>
            <li><a href="#deadlines">When is the final return due?</a></li>
            <li><a href="#which-returns">Which returns do you need to file?</a></li>
            <li><a href="#steps">How to file the final return, step by step</a></li>
            <li><a href="#income">What goes on the final return?</a></li>
            <li><a href="#credits">Credits and deductions worth checking</a></li>
            <li><a href="#after">After you file</a></li>
        </ul>
    </nav>

    <h2 id="deadlines">When is the final return due?</h2>
    <p>The due date depends on when the person died and whether they or their spouse ran a business. The CRA's <a href="${PR}/filing-deadlines.html">filing and payment due dates</a> page sets these rules:</p>
    <ul>
        <li>Death between January 1 and October 31: file and pay by April 30 of the following year.</li>
        <li>Death between November 1 and December 31: file and pay six months after the death, on the same calendar day.</li>
        <li>If the person or their cohabiting spouse or common-law partner operated a business: file by June 15 of the following year for a death between January 1 and December 15, or six months after a death between December 16 and December 31. The payment due date does not move.</li>
    </ul>

    <div class="table-wrapper">
        <table>
            <caption>Filing calendar for example 2026 dates of death (applying the CRA rules above, November 2026)</caption>
            <thead>
                <tr><th>Example date of death</th><th>Situation</th><th>File by</th><th>Pay by</th></tr>
            </thead>
            <tbody>
                <tr><td>March 10, 2026</td><td>Retired, no business</td><td>April 30, 2027</td><td>April 30, 2027</td></tr>
                <tr class="highlight-row"><td>November 20, 2026</td><td>Retired, no business</td><td>May 20, 2027</td><td>May 20, 2027</td></tr>
                <tr><td>March 10, 2026</td><td>Self-employed</td><td>June 15, 2027</td><td>April 30, 2027</td></tr>
                <tr><td>December 18, 2026</td><td>Self-employed</td><td>June 18, 2027</td><td>June 18, 2027</td></tr>
                <tr><td>February 5, 2026</td><td>2025 return not yet filed</td><td>2025 return: August 5, 2026</td><td>August 5, 2026</td></tr>
            </tbody>
        </table>
    </div>

    <p data-info-gain>Our filing calendar turns the CRA's rules into real dates for 2026 deaths: a March death and a self-employed March death share the April 30, 2027 payment date even though the self-employed return can be filed until June 15, 2027.</p>

    <p>The last row trips people up. If someone dies early in the year before filing the previous year's return, the CRA gives six months from the date of death for that return too. Late filing with a balance owing brings a penalty of 5% of the balance plus 1% for each full month late, up to 12 months, and the CRA charges compound daily interest on unpaid amounts.</p>

    <h2 id="which-returns">Which returns do you need to file?</h2>
    <p>Every estate needs the final return. Some also need one or more optional T1 returns, a T3 trust return for the estate, or returns for earlier years the person never filed. The CRA's <a href="${PR}/what-to-file.html">what returns you need to file</a> page lists them.</p>

    <div class="table-wrapper">
        <table>
            <caption>Which return gets which income (CRA rules, checked November 2026)</caption>
            <thead>
                <tr><th>Return</th><th>What goes on it</th><th>Due</th></tr>
            </thead>
            <tbody>
                <tr><td>Final return</td><td>All income from January 1 to the date of death, the deemed sale of capital property, RRSP or RRIF values</td><td>As in the calendar above</td></tr>
                <tr><td>Return for rights or things</td><td>Amounts earned but not yet paid at death: unpaid salary for a finished pay period, the month-of-death CPP or OAS, declared but unpaid dividends</td><td>Later of one year after death or 90 days after the final return's notice of assessment</td></tr>
                <tr><td>Return for a partner or proprietor</td><td>Business income from a fiscal year-end that is not December 31 to the date of death</td><td>Same as the final return</td></tr>
                <tr><td>Return for income from a graduated rate estate</td><td>Income from another person's estate between its year-end and the date of death</td><td>Same as the final return</td></tr>
                <tr><td>T3 return for the estate</td><td>Income the estate earns after the date of death and does not pay out to beneficiaries</td><td>90 days after the estate's tax year-end</td></tr>
            </tbody>
        </table>
    </div>

    <p>The optional returns are worth the effort when the amounts are large. The CRA explains that filing them may reduce or eliminate tax because some credits and deductions can be claimed more than once or split between returns. Capital gains never go on a return for rights or things.</p>
    <p>An estate can choose to be a graduated rate estate, taxed at the same graduated rates as individuals, for up to 36 months after the death. Its first tax year can end on any date up to one year after the death.</p>

    <h2 id="steps">How do you file the final return, step by step?</h2>
    <p>Tell the CRA, confirm your authority, gather values at death, complete the right package, then mail it and pay from the estate. Each step is below, in order.</p>
    <div class="step-section">
        <div class="step"><div class="step-number">1</div><div><div class="step-title">Tell the CRA about the death</div><p>Report the date of death and stop or transfer benefit payments. The CRA's <a href="${DIED}.html">doing taxes for someone who died</a> page lists the first steps, including applying for the CPP death benefit of up to $2,500.</p></div></div>
        <div class="step"><div class="step-number">2</div><div><div class="step-title">Confirm your authority</div><p>The CRA's page on <a href="${DIED}/represent-deceased.html">representing someone who died</a> explains how the executor named in the will, or a court-appointed administrator if there is none, notifies the CRA and gets access to the person's tax accounts and slips.</p></div></div>
        <div class="step"><div class="step-number">3</div><div><div class="step-title">Gather slips and values at death</div><p>Collect T4, T4A, T5, T4RIF or T4RSP slips, and the fair market value at death of every property, investment and registered plan. Ask each institution for a date-of-death valuation.</p></div></div>
        <div class="step"><div class="step-number">4</div><div><div class="step-title">Get the right package</div><p>Use the T1 package for the year of death and the province or territory of residence on that date. If that year's package is not out yet, use the latest one and write the year you are filing for in the top right corner of page 1.</p></div></div>
        <div class="step"><div class="step-number">5</div><div><div class="step-title">Complete and label the return</div><p>Write "The Estate of the Late" before the person's name, use your address as the mailing address, enter the date of death, and sign with your title, such as executor.</p></div></div>
        <div class="step"><div class="step-number">6</div><div><div class="step-title">Mail it, or use an authorized preparer</div><p>The CRA's <a href="${PR}/file-final-return.html">file the returns</a> page says online tax software does not currently support submitting the final return or optional returns. Mail them to your tax centre, or have an authorized tax preparer (an accountant, for example) file through EFILE.</p></div></div>
        <div class="step"><div class="step-number">7</div><div><div class="step-title">Pay from the estate</div><p>Pay any balance using the deceased person's social insurance number as the account. Interest runs from the payment due date, even if you file later.</p></div></div>
    </div>

    <h2 id="income">What goes on the final return?</h2>
    <p>Everything the person earned to the date of death, plus amounts that arise because they died. The big ones are a deemed sale of capital property and the value of registered plans.</p>
    <ul>
        <li><strong>Capital property.</strong> The CRA's page on <a href="${PR}/report-income/capital-gains.html">capital gains at death</a> says a person is considered to have sold all their property just before death at fair market value. Report gains on Schedule 3 and line 12700. Property left to a surviving spouse or common-law partner can roll over at cost.</li>
        <li><strong>Principal residence.</strong> Even if the whole gain is exempt, you must designate it on Schedule 3 and Form T1255.</li>
        <li><strong>RRSPs and RRIFs.</strong> Unless a spouse rollover applies, the fair market value at death is shown on a T4RSP or T4RIF slip in the person's name and included in income. See the CRA's <a href="${PR}/report-income/rrif.html">RRIF page</a>.</li>
        <li><strong>TFSAs.</strong> Nothing goes on the final return. Our guide to the <a href="/blog/tfsa-successor-holder-vs-beneficiary/">TFSA successor holder and beneficiary</a> covers what happens next.</li>
        <li><strong>Instalments.</strong> No instalments are due after the date of death, only ones that were due and unpaid before it.</li>
    </ul>
    <p>Our explainer on <a href="/blog/inheritance-tax-canada/">inheritance tax in Canada</a> works through a full estate to show how these amounts add up. Gifts the person made while alive are not on the final return unless they gave property, which our guide to <a href="/blog/gifting-money-to-children-canada/">gifting money to children</a> explains.</p>

    <h2 id="credits">Which credits and deductions should you check?</h2>
    <p>Claim the full year's personal amounts on the final return, then look at the items that work differently at death. The CRA's <a href="${PR}/credits-deductions.html">deductions and credits page for deceased persons</a> shows which amounts can be claimed again or split on optional returns.</p>
    <ul class="checklist">
        <li>Charitable donations: the CRA's <a href="${PR}/credits-deductions/donations-gifts.html">donations page</a> lets the final return claim gifts up to 100% of the person's net income, with any excess carried back to the prior year's return.</li>
        <li>Net capital losses: on the final return and the year before, they can reduce other income, not only capital gains.</li>
        <li>Medical expenses paid for the person, including in the final months.</li>
        <li>The spouse or common-law partner amount and caregiver amounts, which the CRA lets you claim in full on each return you file.</li>
        <li>The refundable medical expense supplement, if the person qualifies.</li>
        <li>Unused tuition, disability or other carryforwards on prior assessments.</li>
    </ul>

    <div class="warning-box">
        <strong>Common mistakes:</strong>
        <ul>
            <li><strong>Trying to NETFILE it.</strong> Consumer software cannot submit a final return; the CRA says to mail it or use an authorized preparer's EFILE.</li>
            <li><strong>Leaving out the home.</strong> An exempt principal residence still needs Schedule 3 and Form T1255.</li>
            <li><strong>Filing with the clearance request.</strong> The CRA says not to send the clearance certificate request with the returns; it delays assessing them.</li>
            <li><strong>Paying late because filing is later.</strong> A self-employed estate's June filing date does not move the payment date.</li>
        </ul>
    </div>

    <h2 id="after">What happens after you file?</h2>
    <p>Wait for the notice of assessment, deal with any reassessment, then ask for a clearance certificate on Form TX19. The CRA's <a href="${DIED}/clearance-certificate.html">clearance certificate page</a> says to request it only after the returns are assessed and all amounts are paid or secured. A legal representative who distributes assets without one can be personally liable for unpaid tax, up to the value distributed.</p>
    <p>If the estate keeps earning income while it is being settled, file the T3 return for each year until the assets are distributed. Probate is a separate, provincial process; see <a href="/blog/probate-fees-by-province-canada/">probate fees by province</a> and our <a href="/blog/estate-planning-wills-poa/">wills and powers of attorney guide</a>.</p>

    <h2 id="help">When should you hire a professional?</h2>
    <p>Hire a tax professional when the person owned a business, rental property, a cottage with a large gain, foreign assets or a trust, or when you are not sure whether optional returns would help. Professionals can also EFILE returns that you would otherwise have to mail.</p>

    <h2>Frequently asked questions</h2>
    <h3>Who files the final tax return for a deceased person?</h3>
    <p>The legal representative: the executor named in the will, or an administrator appointed by a court if there is no will. They sign the return and pay any balance from the estate.</p>
    <h3>Can I file a deceased person's final return online?</h3>
    <p>Not with consumer software. The CRA says online tax software does not currently support submitting the final return or optional returns. Mail them to the tax centre, or an authorized preparer can EFILE.</p>
    <h3>What is the deadline if the person died in December?</h3>
    <p>Six months after the date of death. A December 18, 2026 death has a June 18, 2027 due date. If the person or their spouse ran a business, the business rule gives the same six months.</p>
    <h3>Do you have to file a final return if the person had little income?</h3>
    <p>The CRA says a final return must be filed for every person who dies. It also lets the estate claim refunds and benefit amounts owed.</p>
    <h3>What is a return for rights or things?</h3>
    <p>An optional return for amounts earned but not paid at death, like a final paycheque for a finished pay period or declared but unpaid dividends. It lets you claim certain credits a second time.</p>
    <h3>How long does a clearance certificate take?</h3>
    <p>The CRA posts its processing times on the clearance certificate page and updates them; check the page when you apply. Request the certificate only after the returns are assessed.</p>
    <h3>Is the CPP death benefit taxable?</h3>
    <p>Yes. The CRA says it can be reported on the beneficiary's return or on the estate's T3 return, not on the final return.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="${DIED}.html">CRA: Doing taxes for someone who died</a>, reviewed November 12, 2026</li>
        <li><a href="${PR}/filing-deadlines.html">CRA: Filing and payment due dates (deceased persons)</a>, reviewed November 12, 2026</li>
        <li><a href="${PR}/what-to-file.html">CRA: What returns you need to file</a>, reviewed November 12, 2026</li>
        <li><a href="${PR}/file-final-return.html">CRA: File the returns</a>, reviewed November 12, 2026</li>
        <li><a href="${PR}/report-income/capital-gains.html">CRA: Taxable capital gains on property, investments, and belongings</a>, reviewed November 12, 2026</li>
        <li><a href="${PR}/report-income/rrif.html">CRA: RRIF (deceased persons)</a>, reviewed November 12, 2026</li>
        <li><a href="${PR}/credits-deductions/donations-gifts.html">CRA: Donations and gifts (deceased persons)</a>, reviewed November 12, 2026</li>
        <li><a href="${DIED}/clearance-certificate.html">CRA: Apply for a clearance certificate</a>, reviewed November 12, 2026</li>
        <li><a href="${DIED}/represent-deceased.html">CRA: Represent someone who died</a>, reviewed November 12, 2026</li>
        <li><a href="${PR}/credits-deductions.html">CRA: Claim deductions and tax credits (deceased persons)</a>, reviewed November 12, 2026</li>
    </ul>

    <h2>Related reading</h2>
    <ul>
        <li><a href="/blog/inheritance-tax-canada/">Inheritance tax in Canada: what the estate owes</a></li>
        <li><a href="/blog/tfsa-successor-holder-vs-beneficiary/">TFSA successor holder vs beneficiary</a></li>
        <li><a href="/blog/gifting-money-to-children-canada/">Gifting money to children</a></li>
        <li><a href="/blog/probate-fees-by-province-canada/">Probate fees by province</a></li>
        <li><a href="/blog/estate-planning-wills-poa/">Wills and powers of attorney</a></li>
    </ul>

    <div class="cta-section">
        <p><strong>The final return is still a T1, line by line.</strong></p>
        <p>The Canadian Optimizer Tax Guide explains the lines, schedules and credits the final return uses.</p>
        <a href="/ebooks/tax-guide/" class="cta-button">See the Tax Guide</a>
    </div>

    ${batchFooter(D, 'Taxes', disclaimer)}

</div>`;

export const finalReturnPost = batchPost({
  date: D,
  category: 'Taxes',
  categorySlug: 'taxes',
  subcategory: 'forms-slips',
  slug: 'final-tax-return-deceased-canada',
  title: 'Final Tax Return for a Deceased Person in Canada: Step by Step',
  excerpt:
    'How an executor files the final T1: due dates for 2026 deaths, which optional returns can cut the tax, what must be mailed, and when to ask for a clearance certificate.',
  content,
});
