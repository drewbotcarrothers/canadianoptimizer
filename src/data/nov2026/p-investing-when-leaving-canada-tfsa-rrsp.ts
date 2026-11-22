import { batchFooter, batchPost } from './types';

const D = '2026-11-22';
const EMIG = 'https://www.canada.ca/en/revenue-agency/services/tax/international-non-residents/individuals-leaving-entering-canada-non-residents';
const TFSA = 'https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/tax-free-savings-account';
const RRSP = 'https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/rrsps-related-plans';

const disclaimer = `General education, not tax, legal or financial advice. Rules come from the Canada Revenue Agency pages listed under Sources, read on November 22, 2026. Sam, his July 31, 2026 departure, his account balances and the withholding amounts are illustrations, not your numbers, and they ignore any tax treaty, which can change the rates and the outcome. Residency is decided case by case on your residential ties, and the country you move to will have its own rules for your TFSA, RRSP and gains. Get advice from a cross-border tax professional in both countries before you leave.`;

const content = `<div class="container">

    <div class="hook">
        Leaving Canada does not close your TFSA or RRSP, and it does not tax them on the way out. <span class="highlight">What it changes is everything you do with them afterwards.</span> This guide, part of our <a href="/category/investing/accounts-asset-location/">accounts and asset location hub</a>, walks through each account, the departure tax on everything else, and the forms, with one family's numbers.
    </div>

    <p>When you become a non-resident, you can keep your TFSA and RRSP. Neither is subject to departure tax, the CRA's deemed sale on leaving. The TFSA stays tax-free in Canada, but new contributions are taxed at 1% a month and you earn no new room. RRSP withdrawals face 25% Part XIII withholding unless a treaty lowers it. Non-registered investments are deemed sold at fair market value.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>You usually become a non-resident on the latest of the day you leave, the day your spouse and dependants leave, and the day you become resident in your new country.</li>
            <li>RRSPs, RRIFs and TFSAs are excluded from the departure tax deemed disposition; shares in a non-registered account are not.</li>
            <li>Stop TFSA contributions the day you leave. A non-resident contribution is taxed at 1% for every month it stays in the account.</li>
            <li>RRSP payments to a non-resident have 25% Part XIII tax withheld, reduced by any tax treaty, and that is usually your final Canadian tax on them.</li>
            <li>If your property is worth more than $25,000, you must file Form T1161 with your departure-year return, or face a penalty of up to $2,500.</li>
        </ul>
    </div>

    <nav aria-label="On this page">
        <ul>
            <li><a href="#when">When you become a non-resident</a></li>
            <li><a href="#accounts">What happens to each account</a></li>
            <li><a href="#tfsa">Your TFSA after you leave</a></li>
            <li><a href="#rrsp">Your RRSP after you leave</a></li>
            <li><a href="#departure">Departure tax on everything else</a></li>
            <li><a href="#sam">Sam's numbers</a></li>
            <li><a href="#hbp">Home Buyers' Plan balances</a></li>
            <li><a href="#checklist">Before-you-leave checklist</a></li>
            <li><a href="#faq">FAQ</a></li>
        </ul>
    </nav>

    <h2 id="when">When do you become a non-resident of Canada?</h2>
    <p>On a date the CRA works out from your circumstances, not the date on your plane ticket. The CRA's <a href="${EMIG}/leaving-canada-emigrants.html">page for emigrants</a> says that when you leave to settle in another country, you usually become a non-resident on the latest of three dates: the date you leave Canada, the date your spouse or common-law partner and dependants leave, and the date you become a resident of the country you settle in.</p>
    <p>Residency is decided case by case. The CRA's <a href="${TFSA}/non-resident.html">TFSA non-residency page</a> lists the significant residential ties it looks at first, a home in Canada, a spouse or common-law partner in Canada and dependants in Canada, and secondary ties such as a provincial driver's licence, provincial health coverage, a Canadian passport and membership in a Canadian union or professional organization. Keep a home here and leave your spouse behind, and you may still be a factual resident. If you are not sure, the CRA's Form NR73 asks it for an opinion.</p>
    <p>Everything below assumes you have actually become a non-resident. That date matters because it splits your departure year in two. Before it, you report world income on your Canadian return. After it, you pay Canadian tax only on Canadian-source income, and some of that is handled by withholding rather than on a return.</p>

    <h2 id="accounts">What happens to each account when you leave Canada?</h2>
    <p>Here is the short version, account by account, from the CRA pages listed under Sources.</p>
    <div class="table-wrapper">
        <table>
            <caption>Your accounts when you become a non-resident (CRA rules, checked November 22, 2026)</caption>
            <thead>
                <tr><th>Account</th><th>Departure tax?</th><th>Can you keep it?</th><th>Contributions after leaving</th><th>Withdrawals after leaving</th></tr>
            </thead>
            <tbody>
                <tr><td>TFSA</td><td>No, excluded</td><td>Yes</td><td>Taxed at 1% a month; no new room for full non-resident years</td><td>Not taxed in Canada; room only comes back when you are resident again</td></tr>
                <tr><td>RRSP and RRIF</td><td>No, excluded</td><td>Yes</td><td>New room is 18% of earned income, so it usually stops growing when Canadian earned income stops</td><td>25% Part XIII withholding unless a treaty reduces it; a section 217 election can apply</td></tr>
                <tr class="highlight-row"><td>Non-registered investments</td><td>Yes, deemed sold at fair market value</td><td>Yes</td><td>No Canadian limits</td><td>Gains from the deemed sale are reported on your departure-year return</td></tr>
                <tr><td>Cash in Canadian bank accounts</td><td>No</td><td>Yes</td><td>No limits</td><td>Interest from an unrelated payer is generally exempt from withholding</td></tr>
            </tbody>
        </table>
    </div>
    <p>The order of risk is the opposite of what most people assume. The registered accounts people worry about are mostly safe to hold. The ordinary brokerage account is the one that can produce a tax bill on the way out.</p>

    <h2 id="tfsa">What happens to your TFSA after you leave Canada?</h2>
    <p>You can keep it, and it stays tax-free in Canada. The CRA's <a href="${TFSA}/non-resident.html">non-residency page</a> says that if you become a non-resident, you are allowed to keep your existing TFSA, and interest, dividends and capital gains earned in it will not be taxed in Canada. Your new country may tax that income, because the TFSA is a Canadian account that other countries may not recognize.</p>
    <p><strong>Contributions.</strong> Only residents can contribute tax-free. You can contribute up to the date you become a non-resident; after that, every deposit is a non-resident contribution taxed at 1% for each month it stays in the account, until you withdraw it or become resident again. If it also exceeds your room, the regular 1% monthly tax on excess amounts is added on top. Our <a href="/blog/tfsa-overcontribution-penalty/">TFSA over-contribution guide</a> covers that second tax.</p>
    <p><strong>Room.</strong> You get the full annual dollar limit for any year in which you are resident for at least part of the year, so a person leaving in 2026 still gets the 2026 limit of $7,000. You get no new room for a year in which you are a non-resident for the whole year.</p>
    <p><strong>Withdrawals.</strong> You can withdraw without Canadian tax. But withdrawals you make as a non-resident are only added back as room when you become a resident again, not the next January 1 as they are for residents. The CRA's example: Daniel moves to the U.K. in September 2020, withdraws $5,000 in 2021 and $3,000 in 2024, and gets that room back only after returning in 2025. Our <a href="/blog/tfsa-withdrawal-rules/">TFSA withdrawal rules guide</a> explains the resident timing.</p>
    <p>Whether to keep the TFSA is a question for your new country. If it taxes TFSA income every year, the account may lose its main advantage and add reporting work. If it does not, keeping it costs nothing in Canada. A TFSA withdrawal itself is not taxed in Canada, so closing the account after you leave does not create a Canadian tax bill.</p>

    <h2 id="rrsp">What happens to your RRSP after you leave Canada?</h2>
    <p>You can keep it, and it keeps growing tax-deferred in Canada. RRSPs and RRIFs are on the CRA's list of property excluded from the deemed disposition, so nothing is taxed in Canada just because you leave. The tax arrives when money comes out.</p>
    <p><strong>Withholding as a non-resident.</strong> The CRA's <a href="${EMIG}/non-residents-canada.html">non-resident page</a> lists RRSP and RRIF payments among the most common types of Canadian income subject to Part XIII tax. Your financial institution withholds it when it pays you. The usual rate is 25% unless a tax treaty between Canada and your new country reduces it, and if the correct amount is withheld, it is your final tax obligation to Canada on that income. You do not file a Canadian return to get any of it back.</p>
    <p><strong>The section 217 option.</strong> The CRA's <a href="${EMIG}/electing-under-section-217.html">section 217 page</a> lets a non-resident choose to file a Canadian return for certain Canadian-source income, including pension-type income, and pay tax at the same rates as residents, which may refund some or all of the non-resident tax withheld. It tends to help people whose total Canadian-source income is low, because resident rates on a small income can be well below 25%. It does not help someone withdrawing large amounts.</p>
    <p><strong>Withdrawing before you go.</strong> As a resident, the CRA's <a href="${RRSP}/making-withdrawals/tax-rates-on-withdrawals.html">withholding rates</a> are 10% on up to $5,000, 20% on $5,000 to $15,000 and 30% over $15,000 (5%, 10% and 15% in Quebec). Those are only prepayments. The whole withdrawal is added to your income for the year and taxed at your marginal rates, which in Ontario reach 44.97% at $150,000 of income by our 2026 bracket calculation. That is why collapsing a large RRSP in the year you leave is often the most expensive option.</p>
    <p>Treaties matter more for the RRSP than for anything else on this page. Some reduce the rate on periodic pension payments; your new country may also tax the withdrawal and give a credit for the Canadian tax. Check both sides before choosing between a lump sum and a RRIF schedule. Our <a href="/blog/retirement-withdrawal-strategy/">retirement withdrawal strategy</a> and <a href="/blog/rrif-minimum-only-mistake/">RRIF minimum-only mistake</a> guides cover the schedule side.</p>

    <h2 id="departure">Departure tax: the deemed sale of everything else</h2>
    <p>When you leave Canada, you are considered to have sold certain property at fair market value and immediately bought it back for the same amount. The CRA's <a href="${EMIG}/leaving-canada-emigrants.html">emigrant page</a> calls this a deemed disposition, often known as departure tax, and gives shares, jewellery, paintings and collections as examples. Any gain is reported on your departure-year return.</p>
    <p>The CRA's <a href="${EMIG}/dispositions-property.html">dispositions page</a> lists what is excluded, including Canadian real or immovable property, pension plans, annuities, RRSPs, RRIFs, RESPs, RDSPs and TFSAs. It also lists what you do not have to include on Form T1161: cash, including bank deposits, registered plans such as RRSPs and TFSAs, and personal-use property such as household effects, clothing and cars worth less than $10,000 per item.</p>
    <p><strong>Form T1161.</strong> If the total fair market value of the property you own when you leave is more than $25,000, you must file Form T1161, List of Properties by an Emigrant of Canada, by your filing due date, even if you do not otherwise have to file a return. The penalty for filing it late is $25 for each day, with a minimum of $100 and a maximum of $2,500.</p>
    <p><strong>Deferring the payment.</strong> Instead of paying the departure tax with your return, you can elect on Form T1244 to defer it, with no interest, until you actually sell the property. The election is due by April 30 of the year after you emigrate. If the federal tax owing on the deemed disposition is more than $16,500 (more than $13,777.50 for former Quebec residents), you have to give the CRA adequate security.</p>

    <h2 id="sam">Sam's numbers: what leaving actually costs</h2>
    <p>Sam lives in Ontario and moves to another country on July 31, 2026, with his spouse and children leaving the same day. He holds a $60,000 TFSA, a $150,000 RRSP, a non-registered brokerage account worth $80,000 that cost him $50,000, and $20,000 in a chequing account.</p>
    <div class="table-wrapper">
        <table>
            <caption>Sam's accounts on leaving Canada (illustration; our calculation from the CRA rules, no tax treaty applied)</caption>
            <thead>
                <tr><th>Account</th><th>Value</th><th>On leaving</th><th>On T1161?</th><th>If he later takes it all out as a non-resident</th></tr>
            </thead>
            <tbody>
                <tr><td>TFSA</td><td>$60,000</td><td>Nothing</td><td>No</td><td>$0 Canadian tax; room only returns if he moves back</td></tr>
                <tr><td>RRSP</td><td>$150,000</td><td>Nothing</td><td>No</td><td>$37,500 withheld at 25%, leaving $112,500</td></tr>
                <tr class="highlight-row"><td>Non-registered</td><td>$80,000 (cost $50,000)</td><td>Deemed sale: $30,000 capital gain on his 2026 return</td><td>Yes</td><td>No further Canadian tax on the deemed gain already reported</td></tr>
                <tr><td>Chequing</td><td>$20,000</td><td>Nothing</td><td>No</td><td>Nothing</td></tr>
            </tbody>
        </table>
    </div>
    <p data-info-gain="true"><strong>Our worked example:</strong> of Sam's $310,000 across four accounts, only the $80,000 brokerage account triggers departure tax, on a $30,000 deemed gain. His $150,000 RRSP, the account most people worry about, is untouched on departure, and if he later collapses it as a non-resident without a treaty reduction, $37,500 is withheld at 25%, compared with a 30% prepayment of $45,000 and full marginal tax if he cashed it in before leaving.</p>
    <p>Three things follow from his numbers. First, he must file T1161, because his reportable property ($80,000) is over $25,000; the TFSA, RRSP and cash do not count toward it. Second, even if the whole $30,000 gain were taxed at the top 2026 federal rate of 33%, the federal tax would be $9,900, below the $16,500 level at which the CRA asks for security, so a T1244 deferral would not need security. Third, his TFSA must not get any more deposits. If an automatic $7,000 contribution went in during January 2027 and stayed for five months, the non-resident tax alone would be $350 (1% a month), and up to another $350 if it also exceeded his room.</p>

    <h2 id="hbp">Home Buyers' Plan balances when you become a non-resident</h2>
    <p>If you owe an HBP balance, leaving brings it due. The CRA's <a href="${RRSP}/what-home-buyers-plan/repay-funds-withdrawn-rrsp-s-under-home-buyers-plan.html">HBP repayment page</a> says that if you become a non-resident after you buy or build a qualifying home, you must either repay the remaining balance to your RRSPs by the earlier of the time you file your return for the year you become a non-resident and 60 days after you become a non-resident, or include the balance as RRSP income on line 12900 of that return.</p>
    <p>If you leave after withdrawing but before buying or building the home, you must cancel your participation or include the unpaid amount on line 12900 for the year of the withdrawals. A large balance included as income on a part-year return can be expensive, so plan the repayment before you go.</p>

    <h2 id="benefits">Benefits and credits stop too</h2>
    <p>The CRA's emigrant page says that, generally, non-residents are not eligible for the Canada Groceries and Essentials Benefit or the Canada child benefit, and asks you to contact it immediately if any arrive after you leave. It also stresses telling the CRA the date you leave, so update your address and residency status with it before payments continue in error.</p>
    <p>The same page says you must tell your Canadian payers and financial institutions that you are no longer a resident, so they can withhold the right non-resident tax. Ask your brokerage and bank whether they can keep serving you from your new country and what that means for trading.</p>

    <h2 id="checklist">Before-you-leave checklist</h2>
    <ol>
        <li><strong>Pin your departure date.</strong> Work out the latest of the three dates and keep evidence: lease, flights, new country residency documents.</li>
        <li><strong>Stop automatic TFSA deposits</strong> before that date. Make any final resident contribution before you leave.</li>
        <li><strong>Value your non-registered holdings</strong> at fair market value on the departure date, and list their cost. That is your T1161 and your deemed gain.</li>
        <li><strong>Decide on T1244</strong> if the deemed gain is large; it is due by April 30 of the following year.</li>
        <li><strong>Settle any HBP balance</strong> within 60 days of becoming a non-resident, or plan for it as income.</li>
        <li><strong>Notify your financial institutions</strong> and the CRA of your new address and non-resident status.</li>
        <li><strong>Get cross-border advice</strong> on how your new country treats the TFSA, RRSP withdrawals and your stepped-up cost base.</li>
    </ol>
    <p>If you are still building savings before a move, our <a href="/blog/rrsp-or-tfsa-by-income/">RRSP or TFSA by income guide</a> shows how a planned departure can tilt the choice, and <a href="/blog/how-to-open-tfsa/">how to open a TFSA</a> covers the account itself.</p>

    <h2 id="faq">FAQ</h2>
    <h3>Do I have to close my TFSA when I leave Canada?</h3>
    <p>No. The CRA lets non-residents keep their TFSA, and its income is not taxed in Canada. Your new country may tax it.</p>
    <h3>Is my RRSP subject to departure tax?</h3>
    <p>No. RRSPs and RRIFs are excluded from the deemed disposition. Withdrawals are subject to Part XIII withholding at 25% unless a treaty reduces it.</p>
    <h3>Can I contribute to my TFSA as a non-resident?</h3>
    <p>You can, but any contribution after you become a non-resident is taxed at 1% a month until you withdraw it or become resident again, and you earn no room for full non-resident years.</p>
    <h3>What is Form T1161?</h3>
    <p>The List of Properties by an Emigrant of Canada. You must file it if the total fair market value of your reportable property is more than $25,000. Cash, registered plans and personal-use items under $10,000 are left out.</p>
    <h3>Can I defer departure tax?</h3>
    <p>Yes, with Form T1244 by April 30 of the year after you leave. You pay no interest, but the CRA requires security if the federal tax is over $16,500.</p>
    <h3>What is a section 217 election?</h3>
    <p>A choice to file a Canadian return for certain Canadian-source income, such as RRSP and pension payments, and pay tax at resident rates instead of the flat withholding, which can produce a refund.</p>
    <h3>Does my TFSA room come back if I withdraw while abroad?</h3>
    <p>Only when you become a resident of Canada again. Until then, withdrawals made as a non-resident do not create usable room.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="${EMIG}/leaving-canada-emigrants.html">CRA: Leaving Canada (emigrants)</a>, reviewed November 22, 2026</li>
        <li><a href="${EMIG}/dispositions-property.html">CRA: Dispositions of property for emigrants of Canada</a>, reviewed November 22, 2026</li>
        <li><a href="${EMIG}/non-residents-canada.html">CRA: Non-residents of Canada (Part XIII tax)</a>, reviewed November 22, 2026</li>
        <li><a href="${EMIG}/electing-under-section-217.html">CRA: Electing under section 217</a>, reviewed November 22, 2026</li>
        <li><a href="${TFSA}/non-resident.html">CRA: How non-residency affects your TFSA</a>, reviewed November 22, 2026</li>
        <li><a href="${TFSA}/withdraw.html">CRA: Withdrawing from a TFSA</a>, reviewed November 22, 2026</li>
        <li><a href="${RRSP}/making-withdrawals/tax-rates-on-withdrawals.html">CRA: Tax rates on RRSP withdrawals</a>, reviewed November 22, 2026</li>
        <li><a href="${RRSP}/what-home-buyers-plan/repay-funds-withdrawn-rrsp-s-under-home-buyers-plan.html">CRA: Repay funds withdrawn under the Home Buyers' Plan</a>, reviewed November 22, 2026</li>
        <li><a href="${RRSP}/contributing-a-rrsp-prpp/contributions-affect-your-rrsp-prpp-deduction-limit.html">CRA: How contributions affect your RRSP deduction limit</a>, reviewed November 22, 2026</li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/tax-rates-brackets/current-year.html">CRA: Tax rates and income brackets for individuals, current year (2026)</a>, reviewed November 22, 2026</li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/registered-plans-administrators/pspa/mp-rrsp-dpsp-tfsa-limits-ympe.html">CRA: MP, DB, RRSP, DPSP, ALDA, TFSA limits, YMPE and the YAMPE</a>, reviewed November 22, 2026</li>
    </ul>

    <h2>Related reading</h2>
    <ul>
        <li><a href="/blog/tfsa-withdrawal-rules/">TFSA withdrawal rules: when your room comes back</a></li>
        <li><a href="/blog/rrsp-or-tfsa-by-income/">RRSP or TFSA at every income</a></li>
        <li><a href="/blog/how-to-open-tfsa/">How to open a TFSA, step by step</a></li>
        <li><a href="/blog/tfsa-overcontribution-penalty/">TFSA over-contribution penalty</a></li>
        <li><a href="/blog/transfer-investment-account-leave-advisor-canada/">How to transfer an investment account</a></li>
    </ul>

    <div class="cta-section">
        <p><strong>Moving abroad is a good moment to rethink every account you hold.</strong></p>
        <p>The Canadian Investing Guide covers every registered account, the order to fill them, and what to hold in each. $29 CAD.</p>
        <a href="/ebooks/investing-guide/" class="cta-button">See the Canadian Investing Guide</a>
    </div>

    ${batchFooter(D, 'Investing', disclaimer)}

</div>`;

export const investingWhenLeavingCanadaPost = batchPost({
  date: D,
  category: 'Investing',
  categorySlug: 'investing',
  subcategory: 'accounts-asset-location',
  slug: 'investing-when-leaving-canada-tfsa-rrsp',
  title: 'Leaving Canada? What Happens to Your TFSA, RRSP and Investments',
  excerpt:
    'Leaving Canada? Your TFSA and RRSP escape departure tax, but not the rules after. See each account, Form T1161, Part XIII withholding and a worked example.',
  content,
});
