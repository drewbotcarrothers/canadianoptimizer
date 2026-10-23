import { invFooter, invPost } from './types';

const CIRO_TRANSFER = 'https://www.ciro.ca/office-investor/investing-basics/transferring-accounts-between-firms';
const CRA_TFSA_TRANSFER = 'https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/tax-free-savings-account/transfers.html';
const CRA_T2033 = 'https://www.canada.ca/en/revenue-agency/services/forms-publications/forms/t2033.html';
const QT_PROMO = 'https://invest.questrade.com/about-us/programs-promotions';
const WS_TRANSFER = 'https://help.wealthsimple.com/hc/en-ca/articles/360056580174-Transfer-fee-reimbursement-policy';
const OSC_DSC = 'https://www.osc.ca/en/news-events/news/osc-implement-ban-deferred-sales-charge-option-harmonizing-rule-across-canada';
const CRA_T4037 = 'https://www.canada.ca/en/revenue-agency/services/forms-publications/publications/t4037/capital-gains.html';

export const transferInvestmentAccountLeaveAdvisorCanada = invPost(
  'hands-off',
  'transfer-investment-account-leave-advisor-canada',
  'How to Leave Your Advisor: In-Kind Transfers, Fees, Timing',
  'How to move your RRSP, TFSA or other accounts away from an advisor: in-kind vs cash transfers, transfer-out fees, DSC charges, timing and costly mistakes.',
  `<div class="container">

    <div class="hook">
        You've decided to leave your advisor. The awkward part is the phone call, right? No: you never have to make it. The new firm requests the transfer for you. CIRO says it usually takes <span class="highlight">about 10 days</span>, and the transfer-out fee, typically $35 to $150, is often covered by the firm you're moving to.
    </div>

    <p>To leave an advisor, open the same type of account at the new firm and ask it to transfer your old account. You don't need to cash out or call your advisor. Choose an in-kind transfer to move investments without selling them. Done this way, CIRO says your RRSP or TFSA room is unaffected.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>The receiving firm starts the transfer. You sign its transfer form; it contacts your old firm.</li>
            <li>An in-kind transfer moves your holdings as they are, avoiding a sale and any tax in a non-registered account.</li>
            <li>Never withdraw from a TFSA or RRSP and redeposit it yourself. The CRA warns a do-it-yourself TFSA move counts as a new contribution and can create a 1%-a-month over-contribution tax.</li>
            <li>Proprietary funds may not move in kind. CIRO says you'll be asked whether to sell them or leave them behind.</li>
            <li>Check for deferred sales charges before selling old mutual funds. New DSC sales have been banned since June 1, 2022, but older schedules can still apply.</li>
        </ul>
    </div>

    <p>This guide is part of <a href="/category/investing/hands-off/">Hands-off investing</a>, in the <a href="/category/investing/">Investing</a> category. If you're deciding where to go, see <a href="/blog/robo-advisor-vs-financial-advisor-canada/">who should manage your money</a> and <a href="/blog/best-robo-advisors-canada/">the best robo-advisors</a>.</p>

    <nav aria-label="On this page">
        <ul>
            <li><a href="#before">What should you do before you move?</a></li>
            <li><a href="#types">In kind, cash or partial: which transfer?</a></li>
            <li><a href="#steps">How does the transfer work, step by step?</a></li>
            <li><a href="#fees">What will it cost?</a></li>
            <li><a href="#registered">How do RRSP, TFSA and locked-in transfers work?</a></li>
            <li><a href="#stuck">What if some investments can't move?</a></li>
            <li><a href="#mistakes">Which mistakes cost tax?</a></li>
            <li><a href="#example">How would Karen move $380,000?</a></li>
            <li><a href="#faq">FAQ</a></li>
        </ul>
    </nav>

    <h2 id="before">What should you do before you move?</h2>

    <p>Get your paperwork together first. A transfer goes faster when the new account details match the old ones exactly.</p>

    <ol>
        <li><strong>Download your latest statement for every account.</strong> You need the account numbers, account types and the full list of holdings.</li>
        <li><strong>Note each account's exact type.</strong> An RRSP, spousal RRSP, LIRA, TFSA and non-registered account are all different. Open the same type at the new firm.</li>
        <li><strong>Find the fund codes.</strong> Mutual fund codes show the company and the purchase option. Codes with DSC or low-load options may carry a redemption fee.</li>
        <li><strong>Record your ACB</strong> for non-registered holdings. Book values sometimes go missing in transfers.</li>
        <li><strong>Check for pending trades, open orders and cash.</strong> Let trades settle first.</li>
    </ol>

    <p>CIRO's page on <a href="${CIRO_TRANSFER}">transferring accounts between firms</a> also suggests checking that the new firm and advisor are registered, using the National Registration Search. Our guide to <a href="/blog/check-financial-advisor-registration-canada/">checking an advisor's registration</a> walks through it.</p>

    <h2 id="types">In kind, cash or partial: which transfer?</h2>

    <div class="table-wrapper">
        <table>
            <caption>Transfer types described by CIRO and the CRA</caption>
            <thead>
                <tr><th>Type</th><th>What happens</th><th>Tax in a non-registered account</th><th>Market exposure</th><th>Best when</th></tr>
            </thead>
            <tbody>
                <tr class="highlight-row"><td>In kind</td><td>Investments move as they are</td><td>No sale, so no gain or loss triggered</td><td>Stays invested throughout</td><td>You want to keep some holdings, or have big unrealized gains</td></tr>
                <tr><td>Cash</td><td>Old firm sells everything, then moves the cash</td><td>Gains and losses triggered on the sale</td><td>Out of the market until reinvested</td><td>Holdings can't move, or a registered account you plan to reinvest anyway</td></tr>
                <tr><td>Partial</td><td>Only specified cash or investments move</td><td>Depends on whether those holdings are sold</td><td>Depends</td><td>Leaving some assets behind</td></tr>
            </tbody>
        </table>
    </div>

    <p>In a TFSA or RRSP, a cash transfer has no immediate tax cost because selling inside the account isn't taxed. The cost is time out of the market, usually days. In a non-registered account, a cash transfer can trigger a large capital gain. Half of it is taxable; see the <a href="${CRA_T4037}">CRA's Guide T4037</a>. Unless you're moving at a loss, choose in kind for non-registered accounts.</p>

    <p>Many people move in kind and then sell, at the new firm, what they don't want. That lets you control the timing, for example selling winners across two tax years.</p>

    <h2 id="steps">How does the transfer work, step by step?</h2>

    <div class="flowchart">
        <div class="flow-node decision">Open the same account type at the new firm</div>
        <div class="flow-arrow"></div>
        <div class="flow-node decision">Submit the new firm's transfer request: old firm, account number, in kind or cash</div>
        <div class="flow-arrow"></div>
        <div class="flow-node decision">New firm sends the request; old firm lists assets and flags any that can't move</div>
        <div class="flow-arrow"></div>
        <div class="flow-branch-container">
            <div class="flow-node result">Everything transferable: assets arrive, often in about 10 days</div>
            <div class="flow-node result">Some can't move: decide whether to sell them or leave them behind</div>
        </div>
    </div>

    <p>CIRO says the transfer process "usually takes about 10 days", depending on the investments, and is almost entirely electronic. Mutual funds and unusual holdings take longer. Your old advisor may call to ask why you're leaving. You don't have to explain, but if there's a fixable problem, you can hear them out.</p>

    <p>Once the assets arrive, check the new statement against your old one: every holding, the number of units and the book value. Report anything missing to the new firm straight away.</p>

    <div class="tip-box">
        <strong>Moving because your advisor changed firms?</strong>
        <p>CIRO suggests asking why they moved, how the new firm's products and fees differ, and whether you'll need to sell anything. You can stay, follow, or pick a different firm entirely.</p>
    </div>

    <h2 id="fees">What will it cost?</h2>

    <p>CIRO says transfer-out fees range from $35 to $150 at most Canadian institutions, and that some receiving firms cover them. Two examples, as published on October 23, 2026:</p>

    <div class="table-wrapper">
        <table>
            <caption>Transfer fee coverage at two receiving firms (provider pages, reviewed October 23, 2026)</caption>
            <thead>
                <tr><th>Firm</th><th>What it covers</th><th>Conditions it lists</th><th>What it doesn't cover</th></tr>
            </thead>
            <tbody>
                <tr><td><a href="${QT_PROMO}">Questrade</a></td><td>Rebates transfer fees charged for the switch</td><td>Maximum $150 per account; no offer code needed; see terms</td><td>See terms on the page</td></tr>
                <tr><td><a href="${WS_TRANSFER}">Wealthsimple</a></td><td>One administrative transfer-out fee per $25,000 transferred in</td><td>Minimum $25,000; account funded for 90 days; automatic</td><td>DSC fees, low-load charges, trading fees, commissions, account closure fees</td></tr>
            </tbody>
        </table>
    </div>

    <p>The fee that can really hurt is a deferred sales charge. The <a href="${OSC_DSC}">OSC's announcement</a> covers the ban on new DSC sales from June 1, 2022, but funds bought under DSC before then can keep their redemption schedules until they expire. Moving DSC funds in kind doesn't trigger the charge. Selling them does. Check the schedule in your fund's documents or ask the fund company before you sell.</p>

    <div class="chart-container">
        <h3>Illustrative one-time cost of moving three accounts</h3>
        <div class="bar-chart">
            <div class="bar-item"><div class="bar-label wide">Three transfer-out fees at $150, not reimbursed: $450</div><div class="bar-wrapper"><div class="bar" style="width: 100%;"><span></span></div></div></div>
            <div class="bar-item"><div class="bar-label wide">Three fees at $50: $150</div><div class="bar-wrapper"><div class="bar" style="width: 33%;"><span></span></div></div></div>
            <div class="bar-item"><div class="bar-label wide">Fees reimbursed by receiving firm: $0</div><div class="bar-wrapper"><div class="bar" style="width: 1%;"><span></span></div></div></div>
        </div>
        <p>Fee levels are within the $35 to $150 range CIRO cites. Compare with ongoing fees: 1% a year on $300,000 is $3,000 a year. Our calculations.</p>
    </div>

    <h2 id="registered">How do RRSP, TFSA and locked-in transfers work?</h2>

    <p><strong>TFSA:</strong> the <a href="${CRA_TFSA_TRANSFER}">CRA's TFSA transfer page</a> says to ask the receiving institution to do a direct transfer. Then the funds don't affect your contribution room and there are no tax implications. The CRA's example shows a woman who withdrew $50,000 herself and redeposited it at another bank in the same year. With no room left, it counted as a $50,000 over-contribution, taxed at 1% a month, or $500 a month.</p>

    <p><strong>RRSP and RRIF:</strong> direct transfers between plans use the CRA's <a href="${CRA_T2033}">Form T2033</a>, which records the direct transfer of property from an RRSP or RRIF to another. The receiving firm usually fills it in for you. Withdrawing instead would trigger withholding tax and add the amount to your income.</p>

    <p><strong>Locked-in accounts:</strong> CIRO says LIRAs and locked-in RSPs can usually be transferred the same way. The receiving account must also be locked in, under the same pension law.</p>

    <p>CIRO's summary: as long as you transfer to the same account type, the transfer is not a contribution or withdrawal, and your RRSP and TFSA room stays the same.</p>

    <h2 id="stuck">What if some investments can't move?</h2>

    <p>CIRO lists examples of securities you may not be able to transfer: products sold only by your old firm (proprietary products), private placements, annuities and bankrupt securities. Your old firm must transfer what it can and ask what you want to do with the rest. Usually you can sell and move the cash, or leave the holding where it is.</p>

    <p>Bank-branded mutual funds are the common case. If the new firm can't hold them, you'll have to sell. In a TFSA or RRSP that's fine. In a non-registered account, check the capital gain first, and consider selling in stages.</p>

    <h2 id="mistakes">Which mistakes cost tax?</h2>

    <ul>
        <li><strong>Withdrawing from a TFSA to move it yourself.</strong> It counts as a new contribution and can create an over-contribution.</li>
        <li><strong>Withdrawing from an RRSP.</strong> It is taxable income, and the room is lost.</li>
        <li><strong>Choosing a cash transfer for a non-registered account</strong> with large gains.</li>
        <li><strong>Selling DSC funds before checking the schedule.</strong></li>
        <li><strong>Not recording ACB before the move.</strong> If book values arrive wrong, you'll need your own records to fix them.</li>
        <li><strong>Mismatching account types,</strong> such as moving a spousal RRSP into a regular RRSP.</li>
    </ul>

    <h2 id="example">How would Karen move $380,000?</h2>

    <div class="example-box">
        <strong>Illustrative example: Karen, 61, Regina</strong>
        <p>Karen has three accounts with a bank advisor: an RRSP ($220,000), a TFSA ($90,000) and a non-registered account ($70,000 with a $40,000 ACB). Most of it is in the bank's own mutual funds. She's moving to a robo-advisor.</p>
        <div class="example-calculation">
            <div class="line"><span>RRSP: cash transfer (bank funds can't move; no tax inside RRSP)</span><span>T2033 handled by the new firm</span></div>
            <div class="line"><span>TFSA: cash transfer, direct</span><span>No effect on TFSA room</span></div>
            <div class="line"><span>Non-registered: bank funds can't move; selling would trigger a $30,000 gain</span><span>$15,000 taxable</span></div>
            <div class="line"><span>Her choice: sell half in December, half in January</span><span>About $7,500 taxable each year</span></div>
            <div class="line total"><span>Transfer fees</span><span>Checked against the new firm's reimbursement terms</span></div>
        </div>
        <p>Karen first confirms none of her funds has a remaining DSC schedule. Amounts are illustrative.</p>
    </div>

    <h2>Does your province change anything?</h2>
    <p>The transfer process and CRA rules are the same across Canada. Locked-in accounts follow the pension law that governs the plan, federal or provincial, so the receiving account must match. Quebec residents should note that some providers don't offer every account type in Quebec. Check before opening.</p>

    <h2>Checklist</h2>
    <ul class="checklist">
        <li>Latest statements saved, with account numbers, types and holdings</li>
        <li>ACB recorded for every non-registered holding</li>
        <li>Fund codes checked for DSC or low-load schedules</li>
        <li>Same account types opened at the new firm</li>
        <li>In kind chosen for non-registered accounts with gains</li>
        <li>Transfer fee reimbursement terms read and proof kept</li>
        <li>New statement checked line by line on arrival</li>
    </ul>

    <h2 id="faq">Frequently asked questions</h2>

    <h3>Do I have to tell my advisor I'm leaving?</h3>
    <p>No. The new firm sends the transfer request. Your advisor will find out, and may call, but you don't have to explain.</p>

    <h3>How long does an account transfer take?</h3>
    <p>CIRO says it usually takes about 10 days, depending on the investments. Mutual funds and non-transferable holdings take longer.</p>

    <h3>Will transferring my TFSA affect my contribution room?</h3>
    <p>Not if it's a direct transfer requested through the receiving institution. Withdrawing and redepositing yourself counts as a new contribution.</p>

    <h3>How much is a transfer-out fee?</h3>
    <p>CIRO says $35 to $150 at most Canadian institutions. Some receiving firms reimburse it under their own conditions.</p>

    <h3>Can I transfer mutual funds in kind?</h3>
    <p>Often, if the new firm can hold them. Proprietary funds sold only by your old firm usually have to be sold or left behind.</p>

    <h3>Will I pay tax when I transfer?</h3>
    <p>Not for an in-kind or registered-to-registered transfer. Selling in a non-registered account can trigger capital gains.</p>

    <h3>Can I move just part of my account?</h3>
    <p>Yes. CIRO describes partial transfers of specific cash amounts or investments.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="${CIRO_TRANSFER}">CIRO: Transferring accounts between firms</a>, reviewed October 23, 2026</li>
        <li><a href="${CRA_TFSA_TRANSFER}">CRA: Requesting a TFSA transfer</a>, reviewed October 23, 2026</li>
        <li><a href="${CRA_T2033}">CRA: Form T2033, Direct Transfer</a>, reviewed October 23, 2026</li>
        <li><a href="${QT_PROMO}">Questrade: Promotions and programs (transfer fee rebate)</a>, reviewed October 23, 2026</li>
        <li><a href="${WS_TRANSFER}">Wealthsimple Help Centre: Transfer fee reimbursement policy</a>, reviewed October 23, 2026</li>
        <li><a href="${OSC_DSC}">OSC: Ban on the deferred sales charge option</a>, reviewed October 23, 2026</li>
        <li><a href="${CRA_T4037}">CRA: Guide T4037, Capital Gains</a>, reviewed October 23, 2026</li>
        <li>Fee illustrations and Karen's example: our calculations</li>
    </ul>

    <h2>Related reading</h2>
    <ul>
        <li><a href="/blog/robo-advisor-vs-financial-advisor-canada/">Who should manage your money?</a></li>
        <li><a href="/blog/mutual-fund-fees-series-a-vs-f-canada/">Mutual fund fees: Series A vs F</a></li>
        <li><a href="/blog/questions-to-ask-financial-advisor-canada/">Questions to ask a financial advisor</a></li>
        <li><a href="/blog/is-a-financial-advisor-worth-it-canada/">Is a 1% advisor worth it?</a></li>
    </ul>

    <div class="cta-section">
        <p><strong>Selling funds in a taxable account as part of the move?</strong></p>
        <p>The 2026 tax guide covers capital gains, ACB and splitting sales across tax years.</p>
        <a href="/ebooks/tax-guide/" class="cta-button">Get the 2026 Tax Guide — $49 CAD</a>
    </div>

    ${invFooter("General education about account transfers as of October 23, 2026. Transfer timelines and fee ranges are from CIRO; fee coverage is from each provider's page on the review date and can change. Examples are illustrative. It is not investment or tax advice.")}

</div>`
);
