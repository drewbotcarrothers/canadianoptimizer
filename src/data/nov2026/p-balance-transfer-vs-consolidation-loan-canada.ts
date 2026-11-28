import { batchFooter, batchPost } from './types';

const D = '2026-11-28';
const HUB = '/category/credit-cards/balance-transfer-low-interest/';
const DC = 'https://www.canada.ca/en/financial-consumer-agency/services/debt/debt-consolidation.html';
const PL = 'https://www.canada.ca/en/financial-consumer-agency/services/loans/personal-loans.html';
const CC = 'https://www.canada.ca/en/financial-consumer-agency/services/credit-cards/choose-credit-card.html';
const PAY = 'https://www.canada.ca/en/financial-consumer-agency/services/credit-cards/pay-off-credit-card.html';
const OBSI = 'https://www.obsi.ca/en/news/posts/consumer-bulletin-things-to-consider-before-you-accept-a-balance-transfer-offer/';
const disclaimer = `General education, not credit, debt or financial advice. How balance transfers and consolidation loans work, the usual length of promotional rates, the 35% annual limit on loan interest, the loss of promotional rates after a missed payment and the typical transfer fee range come from the Financial Consumer Agency of Canada (FCAC) and the Ombudsman for Banking Services and Investments (OBSI) pages listed under Sources, all read on November 28, 2026. The $8,000 balance, the $400 monthly payment, the 20.99%, 22.99%, 12.99% and 19.99% rates, the 0% promotion lengths and the 3% and 5% fees are our own example inputs, not offers from any lender; the results are our own month-by-month arithmetic using monthly interest, whereas real cards usually charge interest daily, so your statement will differ. Your own rates, fees and approval depend on your credit and the lender. Canadian Optimizer has no affiliate relationship with any lender and links to no paid credit product.`;

const content = `<div class="container">

    <div class="hook">
        You have a few thousand dollars on credit cards at a high interest rate, and two offers on the table: move it to a card that charges 0% for a while, or take a loan and pay the cards off. <span class="highlight">Both can cut your interest bill, but they fail in different ways, and the deciding number is how long you need to be debt-free.</span> This guide, part of our <a href="${HUB}">balance transfer and low-interest cards hub</a>, runs the same $8,000 through both.
    </div>

    <p>A balance transfer is cheaper if you can pay off the whole balance, plus the transfer fee, before the promotional rate ends. A consolidation loan is steadier if you need longer. On our $8,000 example at $400 a month, a 10-month 0% transfer cost about $785 in fees and interest, a 12.99% two-year loan about $1,127, and staying on the card about $1,932.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>The Financial Consumer Agency of Canada says promotional balance transfer rates usually last 6 to 18 months and usually come with a fee, while most personal loans run from $100 to $50,000 over 6 to 60 months.</li>
            <li>To clear $8,000 on a 3% transfer fee in 10 months you would need to pay $824 a month, and in 12 months $686.67.</li>
            <li>If a payment is missed, the promotional rate can be lost; in our example losing it after four payments raises the cost from about $785 to about $1,669.</li>
            <li>A loan costs more the longer you take: the FCAC's own $2,000 example costs $2,220 over 12 months and $3,180 over 60 months at 19.99%.</li>
            <li>By law, lenders cannot charge more than 35% interest a year on a personal loan, including all fees and costs.</li>
        </ul>
    </div>

    <nav aria-label="On this page">
        <ul>
            <li><a href="#how">How the two options work</a></li>
            <li><a href="#example">The same $8,000 through both</a></li>
            <li><a href="#clock">The promo clock and the payment it needs</a></li>
            <li><a href="#risks">What can go wrong with each</a></li>
            <li><a href="#decide">Which fits your situation</a></li>
            <li><a href="#ask">What to ask before you accept</a></li>
            <li><a href="#faq">FAQ</a></li>
        </ul>
    </div>

    <h2 id="how">How do a balance transfer and a consolidation loan work?</h2>
    <p>A balance transfer moves debt from one or more credit cards to a new card with a lower or 0% introductory rate, and a consolidation loan is a new loan that pays the cards off and replaces them with one fixed payment. The FCAC lists both, along with lines of credit and home equity products, as ways to combine debts into one.</p>
    <div class="table-wrapper">
        <table>
            <caption>The two options side by side (FCAC and OBSI, read November 28, 2026)</caption>
            <thead><tr><th></th><th>Balance transfer</th><th>Consolidation loan</th></tr></thead>
            <tbody>
                <tr><td>Rate</td><td>A lower or 0% introductory rate, then the card's standard rate</td><td>A fixed or variable rate for the whole term</td></tr>
                <tr><td>How long the low rate lasts</td><td>Usually 6 to 18 months</td><td>The full term, from 6 to 60 months for most personal loans</td></tr>
                <tr><td>Fee</td><td>Usually a percentage of the amount transferred; OBSI says often 2% to 5%</td><td>Depends on the lender: ask about fees and service charges</td></tr>
                <tr><td>Payments</td><td>Minimum monthly payments; you choose how much more to pay</td><td>Regular fixed instalments over a set period</td></tr>
                <tr><td>What can break it</td><td>A missed payment can end the promotional rate</td><td>A longer term costs more interest</td></tr>
            </tbody>
        </table>
    </div>
    <p>The FCAC adds a caution that applies to both: consolidating into a lower-interest product may save money, but it may extend your repayment period and cost more interest over time, and if you keep the spending habits that caused the debt you will accumulate more. It also says that if you only qualify for a rate higher than your current products, consolidation will likely increase your debt.</p>
    <p class="did-you-know" data-info-gain><strong>What this page adds:</strong> a month-by-month calculation of the same $8,000 balance and the same $400 monthly budget through a 0% transfer, a two-year loan and staying put, plus the monthly payment each promotional length demands and what a lost promotion costs.</p>

    <h2 id="example">What does the same $8,000 cost both ways?</h2>
    <p>On $8,000 with $400 a month, a 0% transfer for 12 months at a 3% fee is cheapest at about $596, the 10-month version is about $785, a two-year loan at 12.99% is about $1,127, and staying on the card at 20.99% is about $1,932. The ranking holds only while the promotion survives.</p>
    <div class="table-wrapper">
        <table>
            <caption>Example: $8,000 balance, about $400 a month, results from our month-by-month arithmetic (example rates and fees, not offers)</caption>
            <thead><tr><th>Option</th><th>Payment</th><th>Months to clear</th><th>Interest and fees</th></tr></thead>
            <tbody>
                <tr><td>Stay on the cards at 20.99%</td><td>$400</td><td>25</td><td>$1,932</td></tr>
                <tr class="highlight-row"><td>Transfer: 0% for 12 months, 3% fee ($240), then 22.99%</td><td>$400</td><td>22</td><td>$596</td></tr>
                <tr><td>Transfer: 0% for 10 months, 3% fee ($240), then 22.99%</td><td>$400</td><td>22</td><td>$785</td></tr>
                <tr><td>Transfer: 0% for 10 months, 5% fee ($400), then 22.99%</td><td>$400</td><td>23</td><td>$989</td></tr>
                <tr><td>Transfer, promotion lost after four payments (3% fee)</td><td>$400</td><td>25</td><td>$1,669</td></tr>
                <tr><td>Loan at 12.99% over 24 months</td><td>$380.30</td><td>24</td><td>$1,127</td></tr>
                <tr><td>Loan at 19.99% over 24 months</td><td>$407.13</td><td>24</td><td>$1,771</td></tr>
            </tbody>
        </table>
    </div>
    <p>Three things stand out. The fee matters: raising it from 3% to 5% adds about $204 to the 10-month transfer. The promotion matters more: losing it after four payments cost about $884 more than keeping it for ten months. And a loan at a rate near the card's saves little: the 19.99% loan costs about $161 less than staying on the card at 20.99%, because the longer you borrow the more interest accrues.</p>
    <p>The transfer wins the example even though $400 a month cannot clear $8,240 in 10 or 12 months; the leftover balance falls to the 22.99% standard rate and still costs less than the alternatives. That is a result of our assumed 0% rate and low fee. A transfer with a higher rate or a higher fee would narrow it, which is why the figures from the offer in front of you matter more than ours.</p>

    <h2 id="clock">How big a payment does the promo clock demand?</h2>
    <p>To clear $8,000 plus a 3% fee of $240, you need $8,240 paid before the promotion ends, which is $824 a month over 10 months and $686.67 over 12. The shorter the clock, the less a transfer behaves like a loan.</p>
    <div class="table-wrapper">
        <table>
            <caption>Example: monthly payment to clear $8,000 plus a 3% fee within the promotional period (our arithmetic)</caption>
            <thead><tr><th>0% period</th><th>Monthly payment needed</th></tr></thead>
            <tbody>
                <tr><td>6 months</td><td>$1,373.33</td></tr>
                <tr><td>10 months</td><td>$824.00</td></tr>
                <tr class="highlight-row"><td>12 months</td><td>$686.67</td></tr>
                <tr><td>18 months</td><td>$457.78</td></tr>
            </tbody>
        </table>
    </div>
    <p>If those payments are out of reach, the transfer becomes a partial fix, and the loan's fixed schedule is easier to plan around. With a $300 monthly payment instead of $400, our 10-month transfer still takes 32 months and costs about $1,441 in interest and fees, against about $2,869 for staying put at the same payment.</p>

    <h2 id="risks">What can go wrong with a balance transfer or a loan?</h2>
    <p>The biggest risk with a transfer is losing the promotional rate, and the biggest risk with a loan is taking a term so long that it costs more than the problem it solved. Both are avoidable if you know the rules before you sign.</p>
    <ul>
        <li><strong>A missed payment can end the promotion.</strong> The FCAC says that if you do not pay at least the minimum payment or you make a late payment you risk losing the benefit of a promotional rate, and OBSI says issuers can revoke it if you miss payments or exceed your credit limit.</li>
        <li><strong>New purchases cost more.</strong> OBSI says new purchases are charged the standard rate and that payments are usually applied to the transferred balance first, which leaves new purchases accruing at the higher rate. Avoid using the new card for anything else during the promotion.</li>
        <li><strong>There is no grace period on a transfer.</strong> OBSI says interest is charged from the day the balance is moved until it is repaid, at the promotional rate for that balance.</li>
        <li><strong>You may need a new account and a credit check.</strong> OBSI says offers generally require applying for a new card, which usually involves a credit check, and the FCAC says that applying with different lenders in a short time may lower your credit score.</li>
        <li><strong>A loan costs more the longer it runs.</strong> In the FCAC's example a $2,000 loan at 19.99% costs $2,220 over 12 months, $2,700 over 36 months and $3,180 over 60 months, and at 36 months the cost rises from $2,304 at 8.99% to $3,312 at 34.99%.</li>
        <li><strong>The rate you are offered may not be lower.</strong> The FCAC says a poor credit history may lead to higher interest rates, and you may only qualify for a product with a higher rate than your current ones.</li>
    </ul>
    <p>OBSI also notes that lines of credit and personal loans typically charge less interest than a credit card and have more predictable rates, with a balance that declines as you pay. If the transfer's fee, new-account and promo-loss risks outweigh the savings for you, a loan is the more predictable path.</p>

    <h2 id="decide">Which should you choose?</h2>
    <p>Choose the transfer if you can clear the balance, fee included, inside the promotional period and you will not use the card for anything else. Choose the loan if you need more than about a year, want a payment you cannot accidentally lose, or expect to find the transfer's payment too high.</p>
    <ul>
        <li><strong>Clear it in under a year:</strong> a transfer, if the fee and the monthly payment in the table above fit your budget.</li>
        <li><strong>Need 18 months or more:</strong> a transfer only if the clock is long enough to matter, otherwise a loan at a rate well below your card. Compare offers in our <a href="/blog/best-balance-transfer-credit-cards-canada/">best balance transfer cards</a> guide, which lists the clocks and fees the issuers printed.</li>
        <li><strong>Likely to miss a payment or keep spending:</strong> neither fixes the habit; start with a budget and the FCAC's advice to identify and list your debts first.</li>
        <li><strong>Debt is beyond what either can fix:</strong> the FCAC lists credit counselling agencies and Licensed Insolvency Trustees as sources of help. See our <a href="/blog/consumer-proposal-vs-bankruptcy-canada/">consumer proposal versus bankruptcy</a> guide for the options past consolidation.</li>
        <li><strong>Investing or paying off debt:</strong> if you are weighing investing against paying debt, see <a href="/blog/debt-payoff-vs-investing-canada/">debt payoff versus investing</a>.</li>
    </ul>
    <p>Whatever you choose, check how it will touch your credit. Our guide to <a href="/blog/credit-card-utilization-applications-credit-score-canada/">utilization and applications</a> explains why a new card and a lower balance can move your score in opposite directions for a while.</p>

    <h2 id="ask">What should you ask before you accept an offer?</h2>
    <p>Ask for the number of months at the promotional rate, the transfer fee in dollars, the standard rate afterwards, what ends the promotion and how your payments are applied. Federally regulated issuers must give you the date the low rate ends, the types of transactions it covers and the standard rate after it ends, according to the FCAC.</p>
    <ol>
        <li><strong>When does the low rate end, and what ends it early?</strong> A late payment or going over your limit are the usual triggers, per the FCAC and OBSI.</li>
        <li><strong>What is the fee in dollars?</strong> Multiply it out on your balance, as in the table above.</li>
        <li><strong>What is the standard rate afterwards?</strong> That is the rate on whatever is left when the clock runs out.</li>
        <li><strong>How are payments applied?</strong> OBSI says agreements explain how payments are allocated among purchases, balance transfers and cash advances, and that it changes your interest.</li>
        <li><strong>For a loan: which debts will be paid, and by whom?</strong> The FCAC says some lenders send the money directly to your other lenders.</li>
        <li><strong>Is there a prepayment penalty?</strong> The FCAC says some lenders charge a fee if you pay a loan off early, while others allow extra payments without a penalty.</li>
    </ol>

    <h2 id="faq">Frequently asked questions</h2>
    <h3>Is a balance transfer better than a consolidation loan?</h3>
    <p>It is better only if you can clear the balance and the fee before the promotional rate ends. If you need longer than the promotion, or cannot be sure of making every payment, a fixed loan is the safer fit.</p>
    <h3>How long do balance transfer promotions last?</h3>
    <p>The FCAC says introductory rates usually last 6 to 12 months in its credit card guidance and usually 6 to 18 months in its debt consolidation guidance. The exact length is in the offer.</p>
    <h3>What fee does a balance transfer cost?</h3>
    <p>It is usually a percentage of the amount you move. OBSI says the fee often ranges from 2% to 5% and is billed to the new card on top of interest.</p>
    <h3>Will either one hurt my credit score?</h3>
    <p>Both can, at least at first. OBSI says a new card usually means a credit check, and the FCAC says applying with different lenders in a short time may lower your score, while on-time payments and fewer high-balance accounts may improve it.</p>
    <h3>What is the maximum interest a lender can charge on a personal loan?</h3>
    <p>The FCAC says lenders may not charge more than 35% interest annually on a personal loan, including all fees, costs and interest.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="${DC}">Financial Consumer Agency of Canada: Debt consolidation</a>, reviewed November 28, 2026</li>
        <li><a href="${PL}">Financial Consumer Agency of Canada: Personal loans</a>, reviewed November 28, 2026</li>
        <li><a href="${CC}">Financial Consumer Agency of Canada: Choosing a credit card</a>, reviewed November 28, 2026</li>
        <li><a href="${PAY}">Financial Consumer Agency of Canada: Paying off your credit card</a>, reviewed November 28, 2026</li>
        <li><a href="${OBSI}">Ombudsman for Banking Services and Investments: Things to consider before you accept a balance transfer offer</a> (consumer bulletin, February 14, 2025), reviewed November 28, 2026</li>
    </ul>

    <h2>Related reading</h2>
    <ul>
        <li><a href="/blog/best-balance-transfer-credit-cards-canada/">Best balance transfer credit cards in Canada</a></li>
        <li><a href="/blog/credit-card-utilization-applications-credit-score-canada/">Credit card utilization and your score</a></li>
        <li><a href="/blog/credit-score-canada-guide/">Credit score guide</a></li>
        <li><a href="/blog/debt-payoff-vs-investing-canada/">Debt payoff versus investing</a></li>
        <li><a href="/blog/consumer-proposal-vs-bankruptcy-canada/">Consumer proposal versus bankruptcy</a></li>
    </ul>

    ${batchFooter(D, 'Credit Cards', disclaimer)}

</div>`;

export const balanceTransferVsConsolidationLoanCanadaPost = batchPost({
  date: D,
  category: 'Credit Cards',
  categorySlug: 'credit-cards',
  subcategory: 'balance-transfer-low-interest',
  slug: 'balance-transfer-vs-consolidation-loan-canada',
  title: 'Balance Transfer vs Consolidation Loan: Which Costs Less?',
  excerpt:
    'A balance transfer wins if you can clear the debt inside the promo. A consolidation loan wins if you cannot. The same $8,000 run both ways, with the payment each promo clock demands.',
  content,
});
