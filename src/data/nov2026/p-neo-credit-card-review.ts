import { batchFooter, batchPost } from './types';

const D = '2026-11-19';

const disclaimer = `General education, not financial advice. Earn rates, spending limits, annual fees, income minimums and interest rates were read from Neo Financial's card pages listed under Sources on November 18, 2026; card terms change, so confirm the current figures with Neo before you apply. The three monthly spending profiles and every yearly cash back total are our own illustrations and calculations, not a promise of what you will earn. Partner cashback offers vary by merchant and are not included in our totals. Canadian Optimizer has no affiliate relationship with Neo Financial at the time of writing and links to no application page.`;

const content = `<div class="container">

    <div class="hook">
        Neo no longer sells one card with a pile of partner offers. <span class="highlight">It now sells three cash back "flavours" at two price points, and the right one depends on where your money actually goes each month.</span> This review, part of our <a href="/category/credit-cards/cash-back/">cash back cards hub</a>, prices every version against three household budgets using Neo's own rates, read on November 18, 2026.
    </div>

    <p>For most households that qualify, the best Neo credit card is the Neo World Elite Mastercard in its Gas &amp; Grocery version: on our typical $3,000-a-month budget it returns about $745 a year after its $149 fee, per Neo's November 2026 rates. Without $80,000 of personal income, the no-fee World Gas &amp; Grocery card is the pick.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>Neo's no-fee World Mastercard earns 2% in its chosen categories and 0.5% elsewhere, or a flat 1% on the Everywhere version; it needs $50,000 of personal income or $80,000 of household income.</li>
            <li>The $149 World Elite card earns up to 5% on groceries but needs $80,000 personal or $150,000 household income.</li>
            <li>Every bonus category has a monthly spending limit, as low as $500, after which the rate drops.</li>
            <li>Neo's own break-even for the World Elite Everywhere card compares it with earning nothing; compared with the free Everywhere card, you need about $14,900 of yearly spending.</li>
            <li>The Neo Mastercard (no income minimum) is a credit-building card that can require security funds and a $9.99-a-month membership.</li>
        </ul>
    </div>

    <nav aria-label="On this page">
        <strong>On this page</strong>
        <ul>
            <li><a href="#how">How we compared Neo's cards</a></li>
            <li><a href="#lineup">Which Neo credit cards are there?</a></li>
            <li><a href="#math">How much cash back does each Neo card pay?</a></li>
            <li><a href="#catch">What is the catch with Neo?</a></li>
            <li><a href="#building">Is the Neo Mastercard good for building credit?</a></li>
            <li><a href="#picks">Which Neo card should you get?</a></li>
        </ul>
    </nav>

    <h2 id="how">How we compared Neo's cards</h2>
    <p>We read Neo Financial's credit card comparison page and the Everywhere, Gas &amp; Grocery and Shop &amp; Dine pages on November 18, 2026, and recorded each card's earn rates, monthly spending limits, the rate paid above each limit, the annual fee and the income minimum. We then ran three illustrative monthly budgets through every card: a lean $1,500, a typical $3,000 and a high $5,000. Each budget is split across groceries, gas, recurring bills, dining, shopping and everything else. The result is the yearly cash back minus the annual fee.</p>
    <p>We left out partner cashback, because Neo says those offers vary by merchant and are limited, and we left out the travel cards (United and Cathay), which earn airline miles rather than cash. Neo is not a partner of ours, so partner status played no part. Our wider method, and what AI drafts on this site, is on <a href="/how-we-use-ai/">how we use AI</a>; our <a href="/disclosure/">disclosure page</a> explains how the site earns money.</p>

    <div class="table-wrapper">
        <table>
            <caption>The three example budgets (our illustrations, dollars a month)</caption>
            <thead>
                <tr><th>Category</th><th>Lean</th><th>Typical</th><th>High</th></tr>
            </thead>
            <tbody>
                <tr><td>Groceries</td><td>$400</td><td>$800</td><td>$1,200</td></tr>
                <tr><td>Gas and EV charging</td><td>$150</td><td>$250</td><td>$400</td></tr>
                <tr><td>Recurring bills</td><td>$100</td><td>$250</td><td>$500</td></tr>
                <tr><td>Dining and food delivery</td><td>$150</td><td>$300</td><td>$600</td></tr>
                <tr><td>Retail shopping</td><td>$150</td><td>$300</td><td>$600</td></tr>
                <tr><td>Everything else</td><td>$550</td><td>$1,100</td><td>$1,700</td></tr>
                <tr class="highlight-row"><td>Total a month</td><td>$1,500</td><td>$3,000</td><td>$5,000</td></tr>
            </tbody>
        </table>
    </div>

    <h2 id="lineup">Which Neo credit cards are there?</h2>
    <p>Neo sells four kinds of card: the Neo World Mastercard with no annual fee, the Neo World Elite Mastercard at $149 a year, two airline cards, and the Neo Mastercard for building credit. The World and World Elite cards each come in three versions, and you pick the version that matches your spending.</p>

    <div class="table-wrapper">
        <table>
            <caption>Neo cash back cards, earn rates and requirements (Neo Financial card pages, reviewed November 18, 2026)</caption>
            <thead>
                <tr><th>Card</th><th>Annual fee</th><th>Bonus earn rates</th><th>Everything else</th><th>Income minimum (personal or household)</th></tr>
            </thead>
            <tbody>
                <tr><td>Neo World Mastercard, Gas &amp; Grocery</td><td>$0</td><td>2% groceries, 2% gas and EV charging, 2% recurring payments</td><td>0.5%</td><td>$50,000 or $80,000</td></tr>
                <tr><td>Neo World Mastercard, Shop &amp; Dine</td><td>$0</td><td>2% food and drink, 2% shopping</td><td>0.5%</td><td>$50,000 or $80,000</td></tr>
                <tr><td>Neo World Mastercard, Everywhere</td><td>$0</td><td>1% on all purchases</td><td>1%</td><td>$50,000 or $80,000</td></tr>
                <tr><td>Neo World Elite Mastercard, Gas &amp; Grocery</td><td>$149</td><td>5% groceries, 4% recurring payments, 3% gas and EV charging</td><td>1%</td><td>$80,000 or $150,000</td></tr>
                <tr><td>Neo World Elite Mastercard, Shop &amp; Dine</td><td>$149</td><td>5% food and drink, 3% shopping</td><td>1%</td><td>$80,000 or $150,000</td></tr>
                <tr><td>Neo World Elite Mastercard, Everywhere</td><td>$149</td><td>2% on all purchases, up to $4,000 a month</td><td>1% above the limit</td><td>$80,000 or $150,000</td></tr>
                <tr><td>Neo Mastercard</td><td>$0</td><td>Cashback at Neo partners</td><td>Not printed</td><td>None</td></tr>
            </tbody>
        </table>
    </div>

    <p>The income rule is the first filter. The World cards ask for a minimum of $50,000 in personal or $80,000 in household income; the World Elite cards ask for $80,000 or $150,000. If you are below both, the Neo Mastercard is the only Neo card on offer, and it is built for credit history rather than rewards. Neo prints a purchase rate of 19.99% to 29.99% and a cash advance rate of 22.99% to 31.99% on all of these cards, set by its assessment of your application and your province; Quebec rates differ, and Neo's travel insurance is not available to Quebec residents.</p>

    <h2 id="math">How much cash back does each Neo card pay?</h2>
    <p>On every budget we tested, the World Elite Gas &amp; Grocery card paid the most after its fee, and among the free cards the World Gas &amp; Grocery version paid the most. The Shop &amp; Dine versions only lead if most of your spending is restaurants and retail, which is not how our three budgets are built.</p>

    <div class="table-wrapper" data-info-gain>
        <table>
            <caption>Yearly cash back after the annual fee, by Neo card and budget (our calculation from Neo's rates and limits, reviewed November 18, 2026; partner offers excluded)</caption>
            <thead>
                <tr><th>Budget</th><th>World Gas &amp; Grocery ($0)</th><th>World Shop &amp; Dine ($0)</th><th>World Everywhere ($0)</th><th>World Elite Gas &amp; Grocery ($149)</th><th>World Elite Shop &amp; Dine ($149)</th><th>World Elite Everywhere ($149)</th></tr>
            </thead>
            <tbody>
                <tr><td>Lean ($1,500 a month)</td><td>$207</td><td>$144</td><td>$180</td><td>$295</td><td>$139</td><td>$211</td></tr>
                <tr><td>Typical ($3,000 a month)</td><td>$414</td><td>$288</td><td>$360</td><td>$745</td><td>$427</td><td>$571</td></tr>
                <tr><td>High ($5,000 a month)</td><td>$642</td><td>$480</td><td>$600</td><td>$1,207</td><td>$883</td><td>$931</td></tr>
            </tbody>
        </table>
    </div>

    <div class="example-box">
        <strong>Example: the typical budget on the World Elite Gas &amp; Grocery card (illustration)</strong>
        <div class="example-calculation">
            <div class="line"><span>Groceries, $800 a month at 5%</span><span>$40.00</span></div>
            <div class="line"><span>Gas, $250 a month at 3%</span><span>$7.50</span></div>
            <div class="line"><span>Recurring bills, $250 a month at 4%</span><span>$10.00</span></div>
            <div class="line"><span>Dining, shopping and everything else, $1,700 a month at 1%</span><span>$17.00</span></div>
            <div class="line"><span>Cash back per month</span><span>$74.50</span></div>
            <div class="line"><span>Per year (&times; 12)</span><span>$894</span></div>
            <div class="line total"><span>After the $149 annual fee</span><span>$745</span></div>
        </div>
        <p>The same budget earns $414 a year on the free World Gas &amp; Grocery card, so the fee buys about $331 of extra cash back a year at this spending level.</p>
    </div>

    <p>Even our lean budget comes out ahead on the World Elite Gas &amp; Grocery card ($295 after the fee, against $207 on the free version), because 5% on groceries does most of the work. The fee only stops paying when groceries, gas and bills are a small share of your spending. That is where the flat Everywhere versions earn their place.</p>

    <h3>Neo's break-even claim, and ours</h3>
    <p>Neo's Everywhere page says that at 2% you would need to spend roughly $625 a month, or $7,500 a year, to earn back the $149 fee. That is correct only if the alternative is earning nothing. The free World Everywhere card already pays 1% on the same spending, so the World Elite version only adds one extra percentage point. On that comparison you need about $14,900 of yearly spending, or roughly $1,242 a month, before the paid card wins.</p>
    <p class="did-you-know"><strong>Did you know:</strong> above $4,000 of spending in a month, the World Elite Everywhere card drops to 1%, the same as the free Everywhere card. A household that puts every bill on one card can hit that limit, and the extra 1% only applies to the first $4,000.</p>

    <h2 id="catch">What is the catch with Neo?</h2>
    <p>The catches are the monthly spending limits, the income minimums, and the fact that some purchases do not count where you expect. None is hidden, but each one changes the maths.</p>
    <ul>
        <li><strong>Monthly limits.</strong> On the World cards, groceries and gas earn the bonus rate on the first $1,000 a month each, food and drink and shopping on the first $500 each, and recurring payments on the first $500. Above a limit you drop to 0.5%. On the World Elite cards the limit is $1,000 per category ($500 for recurring payments) and the rate above it is 1%.</li>
        <li><strong>Exclusions.</strong> Neo says purchases on Amazon and at wholesale stores are not eligible for the retail shopping rate. Costco gas does count as gas, according to the Gas &amp; Grocery page.</li>
        <li><strong>Merchant codes decide the category.</strong> Neo pays on the merchant category code, so a meal kit or a grocery delivery may not code as groceries. Neo's page tells you to check the transaction in the app.</li>
        <li><strong>Refunds claw back cashback.</strong> Neo says refunds and similar credits reduce or cancel the cashback earned on the original purchase.</li>
        <li><strong>Extra cards.</strong> Additional cards are free on the World card and cost $49 a year each on the World Elite card, and their cashback goes to the account owner.</li>
    </ul>
    <p>Partner offers are the other variable. Neo advertises up to 15% at partners, but says cashback "may be limited and varies by perks, offer, and partner." Treat partner cashback as a bonus on top of the table above, not as a reason to pick a card.</p>

    <div class="warning-box">
        <strong>Watch out:</strong> carrying a balance wipes out any card's cash back. At Neo's lowest printed purchase rate of 19.99%, a $1,000 balance carried for a year costs roughly $200 in interest, more than the lean budget earns on any free Neo card. Pay in full every month, and if you cannot, compare the low-rate cards in our <a href="/blog/best-no-annual-fee-credit-cards-canada/">best no-annual-fee credit cards</a> guide first.
    </div>

    <h2 id="building">Is the Neo Mastercard good for building credit?</h2>
    <p>Yes, if you need a first card and cannot qualify elsewhere: Neo reports to both Equifax and TransUnion and has no income minimum on this card. The cost is the catch. Neo says you will be offered either a traditional card with a limit of up to $10,000 or a card with a secured limit, depending on your credit history. The secured version needs refundable security funds, from a minimum of $50, and the Build membership at $9.99 a month.</p>
    <p>That membership is about $119.88 a year, so check what you would pay elsewhere. A secured card without a monthly fee, or a credit-building tool you already pay for through your bank account, may cost less; our <a href="/blog/koho-review/">KOHO review</a> prices KOHO's Credit Building add-on, and our guide to <a href="/blog/credit-card-utilization-applications-credit-score-canada/">credit card utilization and your credit score</a> covers the habits that move a score. Neo says your security funds come back when the balance is paid in full and the account is closed.</p>

    <h2 id="steps">How to choose and apply</h2>
    <ol>
        <li>Check the income rule first: $50,000 personal or $80,000 household for the World card, $80,000 or $150,000 for World Elite.</li>
        <li>Add up three months of spending by category from your current statements: groceries, gas, recurring bills, dining, shopping, everything else.</li>
        <li>Compare each category with Neo's monthly limits, and cap anything above the limit at the lower rate.</li>
        <li>Run the numbers for the free and the $149 version of the best-matching card, and subtract the fee.</li>
        <li>Use Neo's pre-approval check, which Neo says involves no hard credit check, before a full application.</li>
        <li>Set up Auto-Pay for the full statement balance so interest never eats the cash back.</li>
    </ol>
    <ul class="checklist">
        <li>Income minimum confirmed for the card you want</li>
        <li>Spending sorted into Neo's categories, with limits applied</li>
        <li>Net value after the fee compared with a free card</li>
        <li>Quebec residents: confirm the rates and insurance that apply to you</li>
        <li>Full-balance Auto-Pay switched on</li>
    </ul>

    <h2 id="picks">Which Neo card should you get?</h2>
    <p>Pick by income first, then by where your spending goes. Every row below links to no application page; it is our reading of Neo's published terms.</p>

    <div class="table-wrapper">
        <table>
            <caption>Neo picks by situation (our reading of Neo's pages, reviewed November 18, 2026; no affiliate links)</caption>
            <thead>
                <tr><th>If you&hellip;</th><th>Pick</th><th>Why</th><th>Not for you if&hellip;</th><th>Also consider</th></tr>
            </thead>
            <tbody>
                <tr data-pick="grocery-household"><td>Earn $80,000+ (or $150,000 household) and spend mostly on groceries, gas and bills</td><td>Neo World Elite, Gas &amp; Grocery</td><td>Highest net value on all three of our budgets: $295, $745 and $1,207 a year</td><td>Groceries, gas and bills are a small share of your spending, or you will not pay a fee</td><td>Our <a href="/blog/best-grocery-credit-cards-canada/">best grocery credit cards</a> list</td></tr>
                <tr data-pick="no-fee"><td>Earn $50,000+ (or $80,000 household) and want no annual fee</td><td>Neo World, Gas &amp; Grocery</td><td>Best free version on our budgets: $207 to $642 a year</td><td>You spend mostly on dining and retail (look at Shop &amp; Dine)</td><td>Our <a href="/blog/best-cash-back-credit-cards-canada/">best cash back credit cards</a> list</td></tr>
                <tr data-pick="credit-building"><td>Have thin or damaged credit, or no income minimum</td><td>Neo Mastercard</td><td>Reports to Equifax and TransUnion; secured option from $50 in security funds</td><td>You can qualify for a regular no-fee card, or the $9.99 monthly membership is a strain</td><td>Our <a href="/blog/koho-review/">KOHO review</a> for a credit-building add-on</td></tr>
            </tbody>
        </table>
    </div>

    <p>When to get help: if you are carrying card debt across several cards, a non-profit credit counsellor can help you sort out repayment before you add another card.</p>

    <h2>Frequently asked questions</h2>
    <h3>Is Neo a good credit card?</h3>
    <p>For a household that qualifies and spends mostly on groceries, gas and bills, yes. On our typical budget the World Elite Gas &amp; Grocery card returns about $745 a year after its fee, using Neo's November 2026 rates.</p>
    <h3>Does Neo have an annual fee?</h3>
    <p>The Neo World Mastercard and the Neo Mastercard have no annual fee. The Neo World Elite Mastercard costs $149 a year, and additional World Elite cards cost $49 each.</p>
    <h3>What income do you need for a Neo credit card?</h3>
    <p>Neo asks for $50,000 personal or $80,000 household income for the World card, and $80,000 personal or $150,000 household for the World Elite card. The Neo Mastercard has no income minimum.</p>
    <h3>Does Neo report to both credit bureaus?</h3>
    <p>Yes. Neo says it reports to Equifax and TransUnion.</p>
    <h3>Does Neo cash back have a limit?</h3>
    <p>Yes. Bonus categories have monthly spending limits of $500 or $1,000, and the World Elite Everywhere card earns 2% only on the first $4,000 a month. Above a limit the rate drops to 0.5% or 1%.</p>
    <h3>How do you redeem Neo cashback?</h3>
    <p>Neo says you can apply it to your credit card balance, move it to a Neo Everyday account, or redeem it for merchandise in the Neo Store.</p>
    <h3>Is the secured Neo Mastercard worth it?</h3>
    <p>Only if you cannot get an unsecured card. It needs at least $50 in security funds and the $9.99-a-month Build membership, so compare its yearly cost with other credit-building options.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="https://www.neofinancial.com/credit-cards">Neo Financial: Compare Neo credit cards</a>, reviewed November 18, 2026</li>
        <li><a href="https://www.neofinancial.com/credit-cards/everywhere">Neo Financial: Everywhere credit cards</a>, reviewed November 18, 2026</li>
        <li><a href="https://www.neofinancial.com/credit-cards/gas-and-grocery">Neo Financial: Gas &amp; Grocery credit cards</a>, reviewed November 18, 2026</li>
        <li><a href="https://www.neofinancial.com/credit-cards/shop-and-dine">Neo Financial: Shop &amp; Dine credit cards</a>, reviewed November 18, 2026</li>
        <li><a href="https://www.neofinancial.com/credit-cards/neo-world-elite-mastercard">Neo Financial: Neo World Elite Mastercard</a>, reviewed November 18, 2026</li>
        <li><a href="https://www.neofinancial.com/credit-cards/neo-mastercard">Neo Financial: Neo Mastercard</a>, reviewed November 18, 2026</li>
    </ul>

    <h2>Related reading</h2>
    <ul>
        <li><a href="/blog/best-cash-back-credit-cards-canada/">Best cash back credit cards in Canada</a></li>
        <li><a href="/blog/best-grocery-credit-cards-canada/">Best grocery credit cards in Canada</a></li>
        <li><a href="/blog/best-no-annual-fee-credit-cards-canada/">Best no-annual-fee credit cards in Canada</a></li>
        <li><a href="/blog/credit-card-utilization-applications-credit-score-canada/">Credit card utilization, applications and your score</a></li>
        <li><a href="/blog/koho-review/">KOHO review: fees, interest and credit building</a></li>
    </ul>

        <p><strong>Related:</strong> <a href="/blog/best-secured-credit-cards-canada/">Best secured credit cards in Canada for rebuilding credit</a> &middot; <a href="/blog/tangerine-money-back-credit-card-review/">Tangerine Money-Back Credit Card review: choosing your 2% categories</a></p>

    ${batchFooter(D, 'Credit Cards', disclaimer)}

</div>`;

export const neoCreditCardReviewPost = batchPost({
  date: D,
  category: 'Credit Cards',
  categorySlug: 'credit-cards',
  subcategory: 'cash-back',
  slug: 'neo-credit-card-review',
  title: "Neo Credit Card Review: Which Neo Mastercard Pays You Most?",
  excerpt:
    "We priced every Neo cash back card against three budgets: the $149 World Elite Gas & Grocery card paid most after its fee, and the free World version won without it.",
  content,
});
