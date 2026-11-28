from model import *; from genlib import *
from decimal import Decimal as Dc
EI_MAX=Dc(729); CPPD_MAX=Dc('1741.20'); CPPD_AVG=Dc('1236.32')
def ei_week(salary):
    return min(Dc(salary)/52*Dc('0.55'), EI_MAX)
rows=[]
for s in (40000,70000,100000):
    w=ei_week(s); mo_inc=Dc(s)/12; ei_mo=w*52/12
    rows.append([m(s),m(r0(mo_inc)),m(r2(w),True),m(r0(ei_mo)),pc(ei_mo/mo_inc).replace('.0%','%') if False else '%d%%'%r0(ei_mo/mo_inc*100),m(r0(mo_inc*Dc('0.6'))),m(r0(mo_inc*Dc('0.85')))])
# first-year illustration at 70,000
s=Dc(70000); y_ei=EI_MAX*26; y_cppd_max=CPPD_MAX*12*26/52; y_cppd_avg=CPPD_AVG*12*26/52
rec_max=y_ei+y_cppd_max; rec_avg=y_ei+y_cppd_avg
gap_max=s-rec_max; gap_avg=s-rec_avg
dis_rows=[
 ['Weeks 1 to 26','EI sickness benefit',m(EI_MAX)+' a week, the 2026 maximum',m(y_ei)],
 ['Weeks 27 to 52','CPP disability benefit, if approved and paid at the maximum',m(CPPD_MAX,True)+' a month',m(r2(y_cppd_max),True)],
 ['Weeks 27 to 52','CPP disability benefit at the average for new beneficiaries',m(CPPD_AVG,True)+' a month',m(r2(y_cppd_avg),True)],
]
disclaimer=("General education, not insurance, tax or financial advice. EI sickness benefit amounts and duration come from Service Canada, CPP disability amounts and eligibility from the Government of Canada, and the descriptions of disability and critical illness insurance, typical replacement rates and the tax treatment of benefits from the Financial Consumer Agency of Canada, all read on November 27, 2026. The tables are our own calculations using labelled example salaries; they use a simple average of weekly earnings, whereas Service Canada uses your best weeks, they ignore tax and any waiting periods, and they assume you qualify for the programs shown. Sam is a labelled illustration. Policy terms vary by insurer and by plan, so read the policy and ask a licensed insurance advisor about your own situation.")
content=f"""<div class="container">

    <div class="hook">
        You are comparing two insurance products that both promise money if you get seriously ill, and the quotes are not the same size. <span class="highlight">One replaces income month after month, the other pays a lump sum on diagnosis, and for most working Canadians the bigger hole is the income.</span> This guide, part of our <a href="@HUB@">income protection hub</a>, compares them against what public programs already pay.
    </div>

    <p>Disability insurance replaces a share of your income, typically 60% to 85%, while you cannot work, and critical illness insurance pays a one-time lump sum if you are diagnosed with a covered illness. The public safety net is capped: in 2026, EI sickness benefits pay at most $729 a week for up to 26 weeks, and the CPP disability benefit tops out at $1,741.20 a month.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>Disability insurance pays monthly income, usually 60% to 85% of your pay, for a set period when you cannot work; critical illness insurance pays a lump sum only for covered diagnoses.</li>
            <li>EI sickness benefits are capped at 26 weeks and $729 a week in 2026, which replaces only {rows[1][4]} of a $70,000 salary and {rows[2][4]} of a $100,000 one.</li>
            <li>The CPP disability benefit is long-term and has a maximum of $1,741.20 a month in 2026, with an average of $1,236.32 for new beneficiaries as of October 2025.</li>
            <li>On our $70,000 example, a year off work with only EI and the maximum CPP disability benefit leaves a gap of about {m(r0(gap_max))} before tax.</li>
            <li>If you pay the disability premium yourself the benefits are generally tax-free, and if your employer pays all or part they are taxable.</li>
        </ul>
    </div>

    <nav aria-label="On this page">
        <ul>
            <li><a href="#what">What each one pays</a></li>
            <li><a href="#public">What public programs already pay</a></li>
            <li><a href="#gap">Which gap is bigger</a></li>
            <li><a href="#ci">When critical illness fits</a></li>
            <li><a href="#di">What to check in a disability plan</a></li>
            <li><a href="#order">The order to buy in</a></li>
            <li><a href="#faq">FAQ</a></li>
        </ul>
    </div>

    <h2 id="what">What is the difference between critical illness and disability insurance?</h2>
    <p>Disability insurance pays you a monthly income when illness or injury stops you working, while critical illness insurance pays a single lump sum if you are diagnosed with a covered illness such as cancer, a heart attack, a stroke or Alzheimer's disease. The Financial Consumer Agency of Canada describes both on its <a href="@FDIS@">disability insurance</a> and <a href="@FHEALTH@">health insurance</a> pages.</p>
{table('The two products side by side (Financial Consumer Agency of Canada, read November 27, 2026)', ['','Disability insurance','Critical illness insurance'], [['What triggers it','You cannot work because of illness or injury','A diagnosis of a covered critical illness'],['How it pays','Monthly income, generally 60% to 85% of your income up to a maximum, for a specified time','A one-time lump sum, in the amount of coverage you chose'],['What it replaces','Lost earnings','Whatever you decide to spend it on, such as daycare or home renovations'],['Watch for','Definition of disability, waiting period, taxable benefits, offsetting','Which conditions are covered and how each is defined']])}
    <p>The FCAC adds that insurers define disability and critical illness differently, even between plans from the same company, which is why two quotes with the same headline benefit can pay out in different situations.</p>
    <p class="did-you-know" data-info-gain><strong>What this page adds:</strong> a calculated comparison of what EI sickness benefits and the CPP disability benefit pay at $40,000, $70,000 and $100,000 salaries against the 60% to 85% a private disability plan replaces, and a first-year income gap on a $70,000 salary, so you can see which gap each product is meant to fill before choosing between them.</p>

    <h2 id="public">What do EI and the CPP already pay if you cannot work?</h2>
    <p>EI sickness benefits pay 55% of your insurable earnings up to a maximum of $729 a week in 2026, for up to 26 weeks, and you need a medical certificate showing you cannot work for medical reasons. The <a href="@EI@">Service Canada page</a> says some employers also have sick leave or a short-term disability plan, and that long-term or permanent conditions may qualify for CPP disability benefits.</p>
    <p>The <a href="@CPPD@">CPP disability benefit</a> is a monthly payment with a basic monthly amount of $610.46 in 2026 plus an additional amount based on your contributions. The maximum monthly payment in 2026 is $1,741.20, and the average for new beneficiaries as of October 2025 was $1,236.32. To qualify you must be between 18 and 65, have a disability that stops you from working at any job on a regular basis and is long-term, and have contributed in 4 of the 6 years before your disability stopped you from working (or 3 of those 6 with 25 years or more in total). The <a href="@CPPE@">eligibility page</a> lists the other routes.</p>
{table('Example salaries: EI sickness benefit against a private disability plan, per month (our calculation, November 27, 2026)', ['Example salary','Monthly pay before tax','EI weekly benefit','EI per month','Share of pay replaced by EI','60% private plan','85% private plan'], rows, 1)}
    <p>EI replaces 55% of pay at lower incomes and a shrinking share above the cap, because the $729 cap binds from about {m(r0(EI_MAX/Dc('0.55')*52))} a year in earnings. A private plan replaces a share of your pay instead, which the FCAC puts at 60% to 85% for disability plans, so it matters most to people who earn more than the point where the EI cap binds.</p>

    <h2 id="gap">Which gap is bigger: lost income or a lump-sum need?</h2>
    <p>In the example below it is the lost income, because it lasts for months or years and the public programs cap well below the salary. A critical illness payment is one-time, and you choose its size, so it only helps if the amount you chose covers the costs that income replacement does not.</p>
    <p><strong>Example, a labelled illustration:</strong> Sam earns $70,000 and has no employer plan or private insurance. An illness stops Sam working for a year. EI sickness benefits pay up to the maximum for 26 weeks and, if Sam's condition is long-term and the CPP disability benefit is approved, that benefit pays from week 27. The table assumes no waiting period and no tax, which is optimistic.</p>
{table('Example: one year off work on a $70,000 salary with only public programs (our calculation, before tax, November 27, 2026)', ['Period','Source','Rate','Amount received in the period'], dis_rows)}
    <p>Over the year, EI and the maximum CPP disability benefit pay {m(r2(rec_max),True)}, which leaves a gap of {m(r0(gap_max))} against a $70,000 salary. At the average CPP disability amount for new beneficiaries the total is {m(r2(rec_avg),True)} and the gap is {m(r0(gap_avg))}. The gap keeps growing in the second year, when EI is gone and only the CPP disability benefit remains, at most {m(CPPD_MAX*12,True)} over twelve months against $70,000 of pay.</p>
    <p>A lump sum could cover that, but only for a limited time: a $50,000 critical illness payout, as an example, covers about the first year's gap, and only if the illness is on the policy's list and meets its definition. Disability insurance covers any illness or injury that meets its disability definition, which is why it addresses the larger gap in this example. Note that the FCAC says that if you have more than one disability plan your income usually will not be higher than 60% to 85% of your regular pay, and that many long-term plans reduce your benefit when you receive other disability income, so CPP disability payments may reduce a private plan's payment.</p>

    <h2 id="ci">When does critical illness insurance fit?</h2>
    <p>When you want cash for costs that income replacement does not cover and you can afford the premium after you have dealt with disability coverage. The FCAC says the lump sum may cover expenses such as daycare or renovations to make your home more accessible, and that the amount you receive depends on the coverage you choose.</p>
    <ul>
        <li><strong>Check the list.</strong> Critical illnesses may include cancer, Alzheimer's disease, a heart attack and a stroke, but the FCAC says insurers differ on what they define as a critical illness and what conditions they cover.</li>
        <li><strong>Read the definition for each condition</strong> before you buy, since a diagnosis that does not meet the policy's wording does not trigger a payment.</li>
        <li><strong>Pick the amount deliberately.</strong> The benefit is whatever coverage you choose, so size it to a specific need, such as a year of the mortgage payment or childcare, not to a round number.</li>
    </ul>

    <h2 id="di">What should you check in a disability plan?</h2>
    <p>The FCAC lists the questions to ask: how much the policy costs, whether you still pay premiums while disabled, how much you get each month, whether the benefits are taxable, whether benefits are adjusted for inflation, how long you wait before benefits start, whether partial disability benefits are included, and whether you can increase coverage without a medical exam.</p>
    <ul>
        <li><strong>Start with your employer.</strong> The FCAC says to check whether you already have group disability coverage before buying, since many employers offer it. Short-term plans typically provide benefits for up to 6 months, and most long-term plans replace 60% to 70% of your normal income.</li>
        <li><strong>Know who pays the premium.</strong> If you pay the entire premium yourself, benefits are generally tax-free, which may bring your income on disability closer to your normal pay. If your employer pays all or part, the benefits are subject to income tax.</li>
        <li><strong>Self-employed?</strong> The FCAC says to consider disability insurance, and notes it can cover many of your business expenses if you cannot work. Our <a href="/blog/disability-insurance-canada-guide/">disability insurance guide</a> goes through waiting periods and definitions.</li>
    </ul>

    <h2 id="order">In what order should you buy disability and critical illness cover?</h2>
    <p>Our view, from the numbers above: fix the income gap first, then consider a lump sum. The public programs replace a minority of a mid-range or high salary, and a lump sum cannot do the job of a monthly cheque for long.</p>
    <ol>
        <li><strong>List what you already have.</strong> Group disability, sick leave, and the EI and CPP amounts above.</li>
        <li><strong>Measure the gap.</strong> Use the table: your pay minus what EI would pay and a realistic CPP disability amount.</li>
        <li><strong>Close it with disability insurance</strong> if the gap is larger than your savings can bridge, paying the premium yourself if you want tax-free benefits.</li>
        <li><strong>Then decide on critical illness cover</strong> for one-time costs, sized to a named need, and only after reading the condition definitions.</li>
    </ol>
    <p>For the broader picture of what to insure and what to skip, see our <a href="/blog/critical-illness-insurance-canada/">critical illness insurance guide</a>, <a href="/blog/insurance-shopping-without-over-insuring-canada/">shopping for insurance without over-insuring</a> and <a href="/blog/employment-insurance-benefits-canada/">EI benefits guide</a>.</p>

    <h2 id="faq">Frequently asked questions</h2>
    <h3>Can I claim both critical illness and disability insurance?</h3>
    <p>Yes, if you hold both policies and meet each one's own conditions, since they pay for different triggers. The FCAC notes that benefits from one insurance plan may reduce the income you get from another, so check how each plan handles offsetting.</p>
    <h3>How long does EI pay for sickness?</h3>
    <p>Up to 26 weeks, at 55% of insurable earnings up to a maximum of $729 a week in 2026.</p>
    <h3>What is the maximum CPP disability benefit?</h3>
    <p>$1,741.20 a month in 2026, with an average of $1,236.32 for new beneficiaries as of October 2025. The CPP says the maximum and average are not guaranteed.</p>
    <h3>Are disability insurance benefits taxable?</h3>
    <p>It depends on who paid the premium. Generally, if you pay the entire premium yourself the benefits are tax-free, and if your employer pays all or part they are subject to income tax.</p>
    <h3>Does the CPP disability benefit cover my medication?</h3>
    <p>No. The CPP says its disability benefit does not cover medications, medical devices or other health costs.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="@EI@">Service Canada: EI sickness benefits</a>, reviewed November 27, 2026</li>
        <li><a href="@EIA@">Service Canada: EI sickness benefits, how much you could receive</a>, reviewed November 27, 2026</li>
        <li><a href="@CPPD@">Government of Canada: CPP disability benefit, how much you could receive</a>, reviewed November 27, 2026</li>
        <li><a href="@CPPE@">Government of Canada: CPP disability benefit, do you qualify</a>, reviewed November 27, 2026</li>
        <li><a href="@FDIS@">Financial Consumer Agency of Canada: Disability insurance</a>, reviewed November 27, 2026</li>
        <li><a href="@FHEALTH@">Financial Consumer Agency of Canada: Health insurance (critical illness insurance)</a>, reviewed November 27, 2026</li>
    </ul>

    <h2>Related reading</h2>
    <ul>
        <li><a href="/blog/disability-insurance-canada-guide/">Disability insurance guide</a></li>
        <li><a href="/blog/critical-illness-insurance-canada/">Critical illness insurance guide</a></li>
        <li><a href="/blog/employment-insurance-benefits-canada/">EI benefits guide</a></li>
        <li><a href="/blog/insurance-shopping-without-over-insuring-canada/">Insurance shopping without over-insuring</a></li>
        <li><a href="/blog/life-insurance-need-analysis-canada/">Life insurance need analysis</a></li>
    </ul>

    <div class="cta-section">
        <p><strong>Income protection works best as part of the whole insurance picture.</strong></p>
        <p>The Canadian Insurance Guide covers disability, critical illness, life insurance and group benefits, so you can size each cover to a real gap.</p>
        <a href="/ebooks/insurance-guide/" class="cta-button">See the Insurance Guide</a>
    </div>

    ${{batchFooter(D, 'Insurance', disclaimer)}}

</div>"""
for k,v in [('@EI@','${EI}'),('@EIA@','${EIA}'),('@CPPD@','${CPPD}'),('@CPPE@','${CPPE}'),('@FDIS@','${FDIS}'),('@FHEALTH@','${FHEALTH}')]: content=content.replace(k,v)
consts="""const EI = 'https://www.canada.ca/en/services/benefits/ei/ei-sickness.html';
const EIA = 'https://www.canada.ca/en/services/benefits/ei/ei-sickness/benefit-amount.html';
const CPPD = 'https://www.canada.ca/en/services/benefits/publicpensions/cpp-disability-benefit/benefit-amount.html';
const CPPE = 'https://www.canada.ca/en/services/benefits/publicpensions/cpp-disability-benefit/eligibility.html';
const FDIS = 'https://www.canada.ca/en/financial-consumer-agency/services/insurance/disability.html';
const FHEALTH = 'https://www.canada.ca/en/financial-consumer-agency/services/insurance/health.html';"""
open('../../../../src/data/nov2026/p-critical-illness-vs-disability-insurance-canada.ts','w').write(ts('critical-illness-vs-disability-insurance-canada','criticalIllnessVsDisabilityInsuranceCanadaPost','/category/insurance/income-protection/',consts,disclaimer,content,'Insurance','insurance','income-protection',"Critical Illness vs Disability Insurance: Which Gap Is Bigger?","Critical illness and disability insurance compared against what EI sickness benefits and the CPP disability benefit pay, with a calculated first-year income gap on a $70,000 salary."))
print('ok',rows,rec_max,gap_max,gap_avg)
