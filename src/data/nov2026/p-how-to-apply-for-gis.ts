import { batchFooter, batchPost } from './types';

const D = '2026-11-23';
const OAS = 'https://www.canada.ca/en/services/benefits/publicpensions/old-age-security';
const GIS = `${OAS}/guaranteed-income-supplement`;
const HUB = '/category/government-benefits/seniors-cpp-oas/';

const disclaimer = `General education, not financial or tax advice. Eligibility rules, income limits, maximum amounts and processing times come from the Government of Canada's Guaranteed Income Supplement and Old Age Security pages, all read on November 23, 2026. Maximum amounts are for October to December 2026 and are adjusted every January, April, July and October. Your actual payment depends on your income; use the Old Age Security Benefits Estimator or your decision letter for your own figure. Ruth and Ken are labelled illustrations.`;

const content = `<div class="container">

    <div class="hook">
        The Guaranteed Income Supplement is a monthly, tax-free top-up on Old Age Security for seniors with low income, and it is easy to miss. <span class="highlight">You may be signed up automatically, or you may have to apply, and either way it is renewed from your tax return every July.</span> This guide, part of our <a href="${HUB}">CPP, OAS and GIS hub for seniors</a>, covers who qualifies, how to apply, and how to keep the payments coming.
    </div>

    <p>To get the Guaranteed Income Supplement you must receive Old Age Security, live in Canada and have income under the limit, which is $23,112 a year for a single person (October to December 2026). Service Canada tries to enrol you automatically; if your letter invites you to apply, use My Service Canada Account or form ISP-3025.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>GIS is paid on top of OAS. No OAS, no GIS, so do not defer OAS if you qualify for the supplement.</li>
            <li>The single maximum is up to $1,138.90 a month for October to December 2026, and GIS is not taxable.</li>
            <li>Already on OAS but never applied for GIS? You need the GIS-only application (ISP-3025), or the GIS option in MSCA.</li>
            <li>File a tax return by April 30 every year, even with little income. The July review uses it.</li>
            <li>If your income just dropped because you retired, ask Service Canada to use an estimate of this year's income instead of last year's.</li>
        </ul>
    </div>

    <nav aria-label="On this page">
        <ul>
            <li><a href="#qualify">Who qualifies</a></li>
            <li><a href="#limits">Income limits and maximums</a></li>
            <li><a href="#need">Do you need to apply?</a></li>
            <li><a href="#how">How to apply</a></li>
            <li><a href="#renewal">The July renewal</a></li>
            <li><a href="#drop">When your income drops</a></li>
            <li><a href="#couples">Couples and the Allowance</a></li>
            <li><a href="#faq">FAQ</a></li>
        </ul>
    </nav>

    <h2 id="qualify">Who qualifies for the Guaranteed Income Supplement?</h2>
    <p>Someone 65 or older who receives the OAS pension, lives in Canada, is not under a sponsorship agreement, and has annual income below the limit for their situation. That is the list on Canada.ca's <a href="${GIS}/eligibility.html">GIS eligibility page</a>.</p>
    <ul>
        <li><strong>Sponsored immigrants:</strong> no GIS for the length of the sponsorship, unless the sponsor has died, is imprisoned for more than 6 months, has been convicted of an offence against you, or declares personal bankruptcy. Since October 1, 2025, parent and grandparent sponsorships run 20 years instead of 10 in every province except Quebec.</li>
        <li><strong>Immigrants who were not sponsored:</strong> can get the GIS if they qualify for OAS.</li>
        <li><strong>Living abroad:</strong> GIS cannot be collected while you are outside Canada for more than 6 months.</li>
    </ul>

    <h2 id="limits">What are the GIS income limits and maximum payments?</h2>
    <p>They depend on whether you have a partner and what that partner receives. Canada.ca's <a href="${GIS}/benefit-amount.html">amount page</a> lists these for October to December 2026:</p>
    <div class="table-wrapper">
        <table>
            <caption>GIS income limits and maximum monthly amounts, October to December 2026 (Canada.ca)</caption>
            <thead>
                <tr><th>Your situation</th><th>Annual income must be less than</th><th>Maximum monthly GIS</th></tr>
            </thead>
            <tbody>
                <tr class="highlight-row"><td>Single, divorced or widowed</td><td>$23,112</td><td>$1,138.90</td></tr>
                <tr><td>Partner receives the full OAS pension</td><td>$30,528 (combined)</td><td>$685.56</td></tr>
                <tr><td>Partner receives the Allowance</td><td>$42,768 (combined)</td><td>$685.56</td></tr>
                <tr><td>Partner receives neither OAS nor the Allowance</td><td>$55,392 (combined)</td><td>$1,138.90</td></tr>
            </tbody>
        </table>
    </div>
    <p>These are maximums: Canada.ca says your actual payment depends on your income, and your income has to be under the limit to get any. GIS, the Allowance and the Allowance for the Survivor are not taxable, according to Canada.ca's <a href="${OAS}/payments.html">OAS payment amounts page</a>.</p>
    <p><strong>What counts as income:</strong> private and public pensions (including CPP), EI and workers' compensation, salaries, rental income, RRSP withdrawals, and taxable interest, dividends and capital gains. <strong>What does not:</strong> OAS, GIS and Allowance payments themselves, RDSP payments and GST/HST credit payments. That is why where retirement money comes from matters; our <a href="/blog/oas-gis-income-stacking-canada/">income stacking guide</a> shows the effect of RRSP and TFSA withdrawals.</p>

    <h2 id="need">Do you have to apply for the GIS?</h2>
    <p>Maybe. Canada.ca's <a href="${GIS}/apply.html">GIS apply page</a> says that if Service Canada has enough information, you get a letter shortly after your 64th birthday confirming OAS enrolment and saying it will try to enrol you in the GIS automatically. If it cannot, it sends a letter inviting you to apply. You need to act if:</p>
    <ul>
        <li>the letter has incorrect information;</li>
        <li>a letter asks you to apply;</li>
        <li>you applied for OAS but never applied for the GIS;</li>
        <li>it has been one month since your 64th birthday and no letter has arrived (contact Service Canada).</li>
    </ul>
    <div class="table-wrapper">
        <table>
            <caption>Which GIS application fits your situation (Canada.ca, read November 23, 2026)</caption>
            <thead><tr><th>Your situation</th><th>Online (MSCA) choice</th><th>Paper form</th></tr></thead>
            <tbody>
                <tr><td>Not yet applied for OAS</td><td>Application for Old Age Security Pension and Guaranteed Income Supplement</td><td>ISP-3550 (OAS and GIS together)</td></tr>
                <tr class="highlight-row"><td>Already receiving OAS</td><td>Application for Guaranteed Income Supplement</td><td>ISP-3025 (GIS only)</td></tr>
            </tbody>
        </table>
    </div>

    <h2 id="how">How do you apply for the GIS?</h2>
    <p>Online through My Service Canada Account if you are at least one month past your 64th birthday, have not already applied (or your application is still being assessed), and no third party such as a power of attorney or trustee manages your OAS account. Otherwise use paper.</p>
    <div class="step-section">
        <div class="step"><span class="step-number">1</span><span class="step-title">Gather your details.</span> SIN and date of birth; your partner's SIN and date of birth; where you have lived since 18; any drop in employment or pension income in the last two years; income earned in another country by you or your partner; banking details for direct deposit.</div>
        <div class="step"><span class="step-number">2</span><span class="step-title">Sign in to MSCA.</span> Open the Old Age Security section and choose "Apply for Old Age Security and manage my benefits".</div>
        <div class="step"><span class="step-number">3</span><span class="step-title">Pick the right application.</span> OAS and GIS together if you have not applied for OAS; GIS alone if you already receive OAS.</div>
        <div class="step"><span class="step-number">4</span><span class="step-title">Or mail the paper form.</span> ISP-3550 or ISP-3025, signed in pen, with copies of the documents asked for; see Reference Guide ISP-3550A.</div>
    </div>
    <p>Canada.ca's <a href="${GIS}/after-apply.html">after-you-apply page</a> gives 14 days for an online decision and 120 days for one by mail. An approval letter shows the monthly amount and first payment date, and you have 90 days from receiving a decision to ask for a reconsideration.</p>

    <h2 id="renewal">How does the GIS renew each year?</h2>
    <p>From your tax return, every July. Canada.ca's <a href="${GIS}/while-receiving.html">receiving page</a> says the benefit is reviewed each year using your federal return, and you get a July letter saying it is renewed with a new amount, stopped, starting or resuming, or that more income information is needed. You must file by April 30 every year to avoid a gap in payments.</p>
    <div class="table-wrapper">
        <table>
            <caption>Which year's income sets which GIS payments (our mapping of Canada.ca's rule that GIS is recalculated each July on the previous calendar year's net income)</caption>
            <thead><tr><th>Income year</th><th>Return due</th><th>GIS payments it sets</th></tr></thead>
            <tbody>
                <tr><td>2025</td><td>April 30, 2026</td><td>July 2026 to June 2027</td></tr>
                <tr class="highlight-row"><td>2026</td><td>April 30, 2027</td><td>July 2027 to June 2028</td></tr>
                <tr><td>2027</td><td>April 30, 2028</td><td>July 2028 to June 2029</td></tr>
            </tbody>
        </table>
    </div>
    <p class="did-you-know" data-info-gain><strong>Why the lag matters:</strong> the table maps each income year to the GIS payments it sets, so a large RRSP withdrawal in 2026 lowers or stops GIS from July 2027 to June 2028, long after the money came out, while a retirement-year income drop can be used right away only if you ask Service Canada to estimate your current-year income.</p>
    <p>If no payment arrives in July, call Service Canada with your SIN, your income for last year and your partner's.</p>

    <h2 id="drop">What if your income has just dropped?</h2>
    <p>Ask Service Canada to use an estimate. The receiving page says that if your income, or your partner's, is lower because of retirement, or because another pension was reduced or stopped, Service Canada can set the GIS on an estimate of this year's income instead of last year's.</p>
    <div class="example-box">
        <div class="example-title">Illustration: Ruth retires at 66</div>
        <p>Ruth (a labelled example) earned a salary in 2026 and retires in early 2027 with only CPP and OAS. Her 2026 income is over the single limit, so the normal rule would give her no GIS until the July 2028 review. By telling Service Canada about the retirement and her expected 2027 income, she can ask for the GIS to be set on that estimate now. If her income stays under $23,112, she can qualify; the amount depends on the estimate.</p>
    </div>

    <h2 id="couples">How does the GIS work for couples?</h2>
    <p>On combined income, and the partner under 65 may get the Allowance. If you qualify for the GIS, your spouse or common-law partner aged 60 to 64 can receive the Allowance if they have lived in Canada at least 10 years since 18 and your combined income is under the limit. For October to December 2026 the Allowance pays up to $1,448.06 a month with combined income under $42,768.</p>
    <ul>
        <li><strong>Living apart for reasons beyond your control,</strong> such as long-term care, can mean a higher payment. Send form ISP-3040 (Statement, Spouses or Common-law Partners Living Apart for Reasons beyond their Control) to a Service Canada office.</li>
        <li><strong>Widowed at 60 to 64:</strong> the Allowance for the Survivor pays up to $1,726.18 a month with income under $31,152 (October to December 2026).</li>
        <li><strong>Report changes</strong> in marital status, income or address quickly to avoid overpayments you would have to repay.</li>
    </ul>
    <div class="example-box">
        <div class="example-title">Illustration: Ken and his wife</div>
        <p>Ken, 67, gets OAS; his wife is 62. Their combined income puts them under $42,768. Ken applies for the GIS, and his wife applies for the Allowance, a separate application. If she later turns 65 and starts her own OAS, the row of the table that applies to them changes, and so does the GIS limit.</p>
    </div>

    <h2>Before you apply: a GIS checklist</h2>
    <ul class="checklist">
        <li>Confirm you receive, or have applied for, OAS. Do not defer OAS if you expect GIS.</li>
        <li>Check your income against the limit for your situation in the table above.</li>
        <li>Find out whether your letter at 64 confirmed automatic enrolment or asked you to apply.</li>
        <li>Pick ISP-3550 (OAS and GIS) or ISP-3025 (GIS only), or the matching MSCA option.</li>
        <li>If your income dropped on retirement, ask for a current-year estimate.</li>
        <li>File your tax return by April 30 every year, and your partner too.</li>
    </ul>
    <p>The other two pieces of a public pension, CPP and OAS, have their own steps: see <a href="/blog/how-to-apply-for-cpp/">how to apply for CPP</a> and <a href="/blog/how-to-apply-for-oas/">how to apply for OAS</a>.</p>

    <h2 id="faq">Frequently asked questions</h2>
    <h3>Is the GIS automatic?</h3>
    <p>Sometimes. Service Canada tries to enrol you automatically when it has enough information, and tells you by letter after your 64th birthday. If the letter asks you to apply, or you are on OAS and never applied for GIS, you must apply.</p>
    <h3>Is the Guaranteed Income Supplement taxable?</h3>
    <p>No. Canada.ca says GIS, Allowance and Allowance for the Survivor payments are not taxable income, but you must still file a return every year.</p>
    <h3>What is the GIS form called?</h3>
    <p>ISP-3025 if you already receive OAS. If you are applying for OAS at the same time, use ISP-3550, which covers both.</p>
    <h3>Can I get the GIS if I defer OAS?</h3>
    <p>No. Canada.ca says you cannot get the GIS while you do not receive the OAS pension, and GIS amounts do not increase when you delay.</p>
    <h3>Does my CPP count against the GIS?</h3>
    <p>Yes. Public pensions, including CPP, count as income for the GIS test. OAS itself does not.</p>
    <h3>Can I cancel the GIS?</h3>
    <p>Yes, within 6 months of the first payment, by letter to Service Canada.</p>
    <h3>How long can I travel and keep the GIS?</h3>
    <p>Up to 6 months. Contact Service Canada before leaving for longer, and again when you return, to restart payments.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="${GIS}/eligibility.html">Government of Canada: GIS, Do you qualify</a>, reviewed November 23, 2026</li>
        <li><a href="${GIS}/benefit-amount.html">Government of Canada: GIS, How much you could receive</a>, reviewed November 23, 2026</li>
        <li><a href="${GIS}/apply.html">Government of Canada: GIS, Apply</a>, reviewed November 23, 2026</li>
        <li><a href="${GIS}/after-apply.html">Government of Canada: GIS, After you apply</a>, reviewed November 23, 2026</li>
        <li><a href="${GIS}/while-receiving.html">Government of Canada: GIS, Receiving your benefit</a>, reviewed November 23, 2026</li>
        <li><a href="${OAS}/payments.html">Government of Canada: Old Age Security payment amounts (October to December 2026)</a>, reviewed November 23, 2026</li>
        <li><a href="${OAS}/when-start.html">Government of Canada: OAS, When to start your retirement pension</a>, reviewed November 23, 2026</li>
    </ul>

    <h2>Related reading</h2>
    <ul>
        <li><a href="/blog/how-to-apply-for-oas/">How to apply for OAS</a></li>
        <li><a href="/blog/oas-gis-income-stacking-canada/">OAS and GIS income stacking</a></li>
        <li><a href="/blog/oas-gis-clawback-canada/">The OAS clawback and GIS</a></li>
        <li><a href="/blog/how-to-apply-for-cpp/">How to apply for CPP</a></li>
        <li><a href="/blog/seniors-tax-credits-canada/">Tax credits for seniors</a></li>
    </ul>

    <div class="cta-section">
        <p><strong>The GIS is one of 18 federal benefits with its own rules.</strong></p>
        <p>The Canadian Government Benefits Guide covers who qualifies, how much, how to apply and what happens next for each, including the GIS, the Allowance and the Allowance for the Survivor. $29 CAD.</p>
        <a href="/ebooks/government-benefits-guide/" class="cta-button">See the Government Benefits Guide</a>
    </div>

    ${batchFooter(D, 'Government Benefits', disclaimer)}

</div>`;

export const howToApplyForGisPost = batchPost({
  date: D,
  category: 'Government Benefits',
  categorySlug: 'government-benefits',
  subcategory: 'seniors-cpp-oas',
  slug: 'how-to-apply-for-gis',
  title: 'How to Apply for the GIS and Keep It Coming Every July',
  excerpt:
    'Who qualifies for the Guaranteed Income Supplement, the October to December 2026 income limits, when you must apply (ISP-3025 or ISP-3550), and how the July renewal uses your tax return.',
  content,
});
