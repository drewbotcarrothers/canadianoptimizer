import { batchFooter, batchPost } from './types';

const D = '2026-11-16';
const TFSA = 'https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/tax-free-savings-account';
const DEATH = `${TFSA}/death-of-holder`;

const disclaimer = `General education, not tax, legal or financial advice. Rules were checked against the Canada Revenue Agency TFSA pages listed under Sources on November 12, 2026. The $120,000 account, the $3,000 of growth after death and the March 2026 date of death are illustrations, not forecasts. Designations are made with your TFSA issuer or in your will, and provincial law decides which are valid. Confirm the current CRA pages and talk to your issuer and an estate lawyer before you change a designation.`;

const content = `<div class="container">

    <div class="hook">
        Most people tick a box on their TFSA form once and never look at it again. <span class="highlight">That box decides whether your spouse keeps the account tax-free or receives a cheque.</span> This comparison from our <a href="/category/retirement/estate-legacy/">estate and legacy hub</a> shows what each choice does for a spouse, a child and the estate.
    </div>

    <p>A successor holder is a spouse or common-law partner who takes over your TFSA at death, so it stays a TFSA and keeps growing tax-free. A beneficiary receives the money instead: the value at death is tax-free, but growth after death is taxable. Only a spouse or partner can be a successor holder, according to the CRA in 2026.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>For a spouse or common-law partner, successor holder is usually the simpler choice: no paperwork with the CRA and no effect on their own contribution room.</li>
            <li>Children, other relatives and charities can only be beneficiaries.</li>
            <li>A spouse named as beneficiary can still shelter the money again through an exempt contribution, if they act within the rollover period and file Form RC240.</li>
            <li>Quebec does not recognize successor holder or beneficiary designations on most TFSAs; the will governs.</li>
        </ul>
    </div>

    <nav aria-label="On this page">
        <ul>
            <li><a href="#difference">What is the difference?</a></li>
            <li><a href="#example">The same TFSA, three designations</a></li>
            <li><a href="#successor">How a successor holder works</a></li>
            <li><a href="#beneficiary">How a beneficiary works</a></li>
            <li><a href="#choose">Which should you choose?</a></li>
            <li><a href="#quebec">Quebec and other exceptions</a></li>
        </ul>
    </nav>

    <h2 id="difference">What is the difference between a TFSA successor holder and a beneficiary?</h2>
    <p>A successor holder becomes the new owner of the same account; a beneficiary gets paid out of it. The CRA's page on <a href="${DEATH}/what-happens.html">what happens when a TFSA holder dies</a> defines the two types:</p>
    <ul>
        <li><strong>Successor holder:</strong> a survivor, meaning your spouse or common-law partner, named as the new TFSA holder in the TFSA contract or in your will.</li>
        <li><strong>Designated beneficiary:</strong> anyone else named to receive the TFSA, including a spouse who was not named successor holder, children, other people or a charity.</li>
    </ul>
    <p>If you name nobody, the TFSA goes to your estate and is distributed under your will. That can mean probate fees and a wait; our guide to <a href="/blog/probate-fees-by-province-canada/">probate fees by province</a> shows what that costs where you live.</p>

    <div class="table-wrapper">
        <table>
            <caption>Successor holder vs beneficiary vs estate (CRA rules, checked November 2026)</caption>
            <thead>
                <tr><th>Question</th><th>Successor holder</th><th>Beneficiary</th><th>No designation (estate)</th></tr>
            </thead>
            <tbody>
                <tr><td>Who can it be?</td><td>Spouse or common-law partner only</td><td>Anyone, including a spouse, child or charity</td><td>Whoever the will names</td></tr>
                <tr class="highlight-row"><td>Does the account survive?</td><td>Yes, under the new holder</td><td>No, it is paid out</td><td>No, it is paid out</td></tr>
                <tr><td>Value at death taxed?</td><td>No</td><td>No</td><td>No</td></tr>
                <tr><td>Growth after death taxed?</td><td>No</td><td>Yes, to the beneficiary</td><td>Yes</td></tr>
                <tr><td>Effect on the receiver's own TFSA room</td><td>None, unless the account held an excess</td><td>Spouse: can re-contribute as an exempt contribution. Others: must use their own room</td><td>Same as beneficiary</td></tr>
                <tr><td>Forms for the receiver</td><td>None, in a province that recognizes the designation</td><td>Spouse re-contributing: Form RC240</td><td>Depends on who inherits</td></tr>
                <tr><td>Goes through the estate?</td><td>No, where the designation is valid</td><td>No, where the designation is valid</td><td>Yes</td></tr>
            </tbody>
        </table>
    </div>

    <h2 id="example">What happens to the same TFSA under each choice?</h2>
    <p>The value at death is tax-free in every case. What changes is whether the growth after death is taxed and whether the money can stay sheltered. Here is one TFSA traced through three designations.</p>

    <div class="example-box">
        <strong>Example (illustration): a $120,000 trust-type TFSA, holder dies in March 2026, $3,000 of growth before payout</strong>
        <div class="example-calculation">
            <div class="line"><span>Spouse as successor holder: tax on the $120,000</span><span>$0</span></div>
            <div class="line"><span>Spouse as successor holder: tax on the $3,000 of growth</span><span>$0, still in a TFSA</span></div>
            <div class="line"><span>Spouse as beneficiary: taxable income reported</span><span>$3,000</span></div>
            <div class="line"><span>Spouse as beneficiary: can re-shelter as an exempt contribution by December 31, 2027</span><span>The $120,000 value at death</span></div>
            <div class="line"><span>Adult child as beneficiary: taxable income reported</span><span>$3,000</span></div>
            <div class="line total"><span>Adult child as beneficiary: can re-shelter</span><span>Only up to their own room</span></div>
        </div>
        <p>The account balance, growth and date are made up. The rules come from the CRA's successor holder, beneficiary and definitions pages listed under Sources.</p>
    </div>

    <p data-info-gain>Tracing one $120,000 TFSA through three designations shows the real gap: a spouse can keep the full $120,000 sheltered either way, as long as a beneficiary spouse files Form RC240 on time, but an adult child who has used their room can re-shelter only what their own room allows, which may be just the $7,000 the 2026 limit added, or nothing.</p>

    <p>For the child, the rest goes into a taxable account, where its future income is taxed every year. That is not a reason to skip naming children, since naming them still avoids the estate. It is a reason to know the money leaves the TFSA system unless they have room. The CRA's <a href="${TFSA}/contributing/calculate-room.html">2026 TFSA dollar limit</a> is $7,000.</p>

    <h2 id="successor">How does a successor holder work?</h2>
    <p>The spouse becomes the holder the moment you die. The CRA's <a href="${DEATH}/successor-holder.html">successor holder page</a> says the value on the date of death and any income earned after that date stay sheltered from tax, and because the TFSA continues, the deceased is not considered to receive anything.</p>
    <ul>
        <li><strong>Contribution room.</strong> The successor's own room is not affected, as long as the deceased's TFSA held no excess amount. They do not gain the deceased's unused room.</li>
        <li><strong>Two accounts.</strong> If the successor already has a TFSA, they now hold two. They can ask the issuer to transfer one into the other as a qualifying transfer that does not affect their room.</li>
        <li><strong>Paperwork.</strong> The issuer tells the CRA about the change. In the CRA's example, no Form RC240 is required when the holder lived in a province that recognizes TFSA designations.</li>
        <li><strong>Identification.</strong> The successor needs a social insurance number, or an individual tax number if they live outside Canada.</li>
        <li><strong>Naming in a will.</strong> A will can name a successor holder if it gives them all the rights of the original holder, including the right to change beneficiaries.</li>
    </ul>
    <p>The catch is an excess amount. If the deceased had over-contributed, the CRA charges 1% per month on the excess up to the month of death, and the successor is treated as contributing that excess to their own TFSA.</p>

    <h2 id="beneficiary">How does a TFSA beneficiary work?</h2>
    <p>The beneficiary is paid the account's value, and only growth after death is taxable. The CRA's <a href="${DEATH}/beneficiary.html">designated beneficiary page</a> says a beneficiary pays no tax on amounts up to the fair market value at the date of death. Earnings after death and before the estate is settled are taxable, and how they are reported depends on the type of TFSA.</p>
    <ul>
        <li><strong>Trust-type TFSAs</strong> (arrangements in trust) stay non-taxable until the end of the exempt period. Payments above the value at death are reported in box 134 of a T4A slip. The <a href="${TFSA}/definitions-tfsa.html">CRA's definitions</a> say the exempt period ends at the end of the first calendar year that begins after the death.</li>
        <li><strong>Deposit or annuity TFSAs</strong> stop being TFSAs at death, and later earnings are taxed under the normal rules, for example on a T5 slip.</li>
    </ul>

    <h3>Can a spouse beneficiary put the money back in a TFSA?</h3>
    <p>Yes, through an exempt contribution. The CRA allows a survivor named as beneficiary to contribute their survivor payment to their own TFSA and designate it as exempt, without using their own room, if they:</p>
    <ol>
        <li>receive and contribute it during the rollover period, which ends on December 31 of the year after the death;</li>
        <li>keep the total exempt contribution to no more than the TFSA's fair market value at death; and</li>
        <li>send Form RC240 to the CRA within 30 days of making the contribution.</li>
    </ol>
    <p>The CRA's beneficiary page also says that starting January 1, 2026, earnings that build up after the death, up to the end of the rollover period, could be designated as an exempt contribution. Use Form RC240 to work out the maximum. An exempt contribution is not available if the deceased's TFSA held an excess amount or if payments went to more than one survivor.</p>

    <div data-offer="wealthsimple-invest"></div>

    <h2 id="choose">Should you name your spouse as successor holder or beneficiary?</h2>
    <p>For most couples, successor holder. It keeps the account intact, needs no form from the survivor in most provinces, and removes the 30-day RC240 deadline from a grieving spouse's to-do list.</p>
    <p>Naming a spouse as beneficiary can make sense in narrower cases: a blended family where you want the will to control the money, or where you want the payout to cover estate costs first. Talk to an estate lawyer before choosing that route.</p>

    <div class="table-wrapper">
        <table>
            <caption>Which designation fits (decision guide, November 2026)</caption>
            <thead>
                <tr><th>Your situation</th><th>Usually fits</th><th>Why</th></tr>
            </thead>
            <tbody>
                <tr><td>Married or common-law, outside Quebec</td><td>Spouse as successor holder</td><td>Account and growth stay sheltered, no RC240</td></tr>
                <tr><td>Single, or the TFSA should go to children</td><td>Children as beneficiaries</td><td>Value at death is tax-free and skips the estate</td></tr>
                <tr><td>Spouse first, then children</td><td>Spouse as successor holder, who then names the children</td><td>A successor holder can name their own beneficiaries</td></tr>
                <tr><td>Charitable gift</td><td>Charity as beneficiary</td><td>The CRA lets the estate claim a donation credit once funds reach the charity within 36 months</td></tr>
                <tr><td>Quebec resident</td><td>Will</td><td>Quebec does not recognize designations on most TFSAs</td></tr>
            </tbody>
        </table>
    </div>

    <p>Whichever you choose, check it after a marriage, separation, divorce or death in the family. An old designation can name a former spouse; the CRA's beneficiary page lists former spouses among possible beneficiaries. Our <a href="/blog/estate-planning-wills-poa/">wills and powers of attorney guide</a> covers how designations and wills fit together.</p>

    <h2 id="quebec">Are there exceptions in Quebec or for non-residents?</h2>
    <p>Yes. The CRA says Quebec does not recognize successor holder designations, or beneficiary designations for deposit TFSAs and trust arrangements, with an exception for annuity contracts. In Quebec the will directs the money, though a surviving spouse can still make an exempt contribution within the rollover period and file Form RC240 within 30 days. A non-resident successor or beneficiary faces different rules, including withholding tax on amounts above the value at death.</p>

    <div class="warning-box">
        <strong>Common mistakes:</strong>
        <ul>
            <li><strong>Naming a spouse as "beneficiary" when you meant successor holder.</strong> It still works, but the survivor must re-contribute and file RC240 on time.</li>
            <li><strong>Assuming a child can be successor holder.</strong> Only a spouse or common-law partner can.</li>
            <li><strong>Leaving the estate as default.</strong> The TFSA then passes under the will, often with probate.</li>
            <li><strong>Missing the rollover period.</strong> A survivor who contributes after December 31 of the year after the death loses the exempt treatment.</li>
        </ul>
    </div>

    <p>The TFSA is one piece of the estate picture. For the rest, see our explainer on <a href="/blog/inheritance-tax-canada/">inheritance tax in Canada</a> and the executor's guide to the <a href="/blog/final-tax-return-deceased-canada/">final tax return</a>. If you are thinking of helping children now rather than later, read <a href="/blog/gifting-money-to-children-canada/">gifting money to children</a>.</p>

    <h2>Frequently asked questions</h2>
    <h3>Can my child be the successor holder of my TFSA?</h3>
    <p>No. Only a spouse or common-law partner can be a successor holder. A child can be a designated beneficiary and receives the value at death tax-free.</p>
    <h3>Does a successor holder lose their own TFSA room?</h3>
    <p>No, as long as the deceased's TFSA had no excess amount. They do not gain the deceased's unused room either.</p>
    <h3>Is a TFSA taxable when left to a beneficiary?</h3>
    <p>The value at death is not. Earnings after the date of death are taxable to the beneficiary, for a trust-type TFSA reported in box 134 of a T4A slip.</p>
    <h3>What is the deadline for a spouse's exempt contribution?</h3>
    <p>The contribution must be made by December 31 of the year after the death, and Form RC240 must reach the CRA within 30 days of the contribution.</p>
    <h3>Can I name a successor holder in my will?</h3>
    <p>Yes, outside Quebec, if the will gives the successor all the rights of the original holder, including the right to change beneficiaries.</p>
    <h3>What if I named my ex-spouse as beneficiary?</h3>
    <p>The designation can still pay them. The CRA lists former spouses among possible beneficiaries. Update it with your TFSA issuer after a separation, and get legal advice.</p>
    <h3>Does a TFSA go through probate?</h3>
    <p>Generally not when a successor holder or beneficiary is validly named outside Quebec, because the account does not pass through the estate. With no designation, it passes to the estate and is distributed under the will, which can mean probate fees.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="${DEATH}/what-happens.html">CRA: What happens when a TFSA holder is deceased</a>, reviewed November 12, 2026</li>
        <li><a href="${DEATH}/successor-holder.html">CRA: If you are a successor holder of a TFSA</a>, reviewed November 12, 2026</li>
        <li><a href="${DEATH}/beneficiary.html">CRA: If you are a designated beneficiary of a TFSA</a>, reviewed November 12, 2026</li>
        <li><a href="${TFSA}/definitions-tfsa.html">CRA: Definitions for TFSA (rollover period, exempt period)</a>, reviewed November 12, 2026</li>
        <li><a href="${TFSA}/contributing/calculate-room.html">CRA: Calculate your TFSA contribution room (2026 dollar limit)</a>, reviewed November 12, 2026</li>
    </ul>

    <h2>Related reading</h2>
    <ul>
        <li><a href="/blog/inheritance-tax-canada/">Inheritance tax in Canada</a></li>
        <li><a href="/blog/final-tax-return-deceased-canada/">Final tax return for a deceased person</a></li>
        <li><a href="/blog/gifting-money-to-children-canada/">Gifting money to children</a></li>
        <li><a href="/blog/tfsa-retirement-strategy/">TFSA retirement strategy</a></li>
        <li><a href="/blog/tax-efficient-wealth-transfer/">Tax-efficient wealth transfer</a></li>
    </ul>

    <div class="cta-section">
        <p><strong>A designation is one line on a form, but it belongs in a full retirement and estate plan.</strong></p>
        <p>The Canadian Optimizer Retirement Guide covers TFSAs, RRIFs and estate planning in retirement.</p>
        <a href="/ebooks/retirement-guide/" class="cta-button">See the Retirement Guide</a>
    </div>

    ${batchFooter(D, 'Retirement', disclaimer)}

</div>`;

export const tfsaSuccessorPost = batchPost({
  date: D,
  category: 'Retirement',
  categorySlug: 'retirement',
  subcategory: 'estate-legacy',
  slug: 'tfsa-successor-holder-vs-beneficiary',
  title: 'TFSA Successor Holder vs Beneficiary: What Your Spouse and Kids Get',
  excerpt:
    'A successor holder keeps your TFSA tax-free; a beneficiary gets a payout. How each works for a spouse, a child and the estate, with the CRA deadlines that apply.',
  content,
});
