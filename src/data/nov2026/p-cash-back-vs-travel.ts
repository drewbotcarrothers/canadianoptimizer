import { batchFooter, batchPost } from './types';

const D = '2026-11-17';

const disclaimer = `General education, not financial advice. Card terms, earn rates and fees were read from the issuers' own pages listed under Sources on November 14, 2026 and can change without notice; check the issuer's page before you apply. The monthly spending profiles, spending mixes, household budgets and the 1 cent point value are our illustrations, not forecasts or your result, and the figures leave out interest, which can wipe out any rewards if a balance is carried. Canadian Optimizer has no affiliate relationship with these cards at the time of writing and links to no application pages. Approval, credit limits and welcome offers are the issuer's decision.`;

const content = `<div class="container">

    <div class="hook">
        Cash back is simple and travel points sound better, but the dollars decide it. <span class="highlight">We priced one cash-back card against one travel-points card for three households, with every earn rate taken from the issuers' own pages.</span> The result, from our <a href="/category/credit-cards/cash-back/">cash back cards hub</a>, depends less on the card type than on one number: what a point is worth to you.
    </div>

    <p>For most households the cash-back card wins. In our model, Amex SimplyCash Preferred beats the Scotiabank Gold American Express by $18.12 to $60.12 a year at $1,500 to $5,000 of monthly spend, unless you can get over 1.04 cents from each Scene+ point or spend heavily at Sobeys-family grocers.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>After each card's annual fee, the cash-back card earned $340.92, $801.72 and $1,416.12 a year at $1,500, $3,000 and $5,000 a month. The points card earned $322.80, $765.60 and $1,356.00 at a flat 1 cent a point.</li>
            <li>The points card only pulls ahead if each point is worth more than about 1.04 cents in our standard spending mix, or if a family spends much more of its budget at Sobeys-family grocers (the break-even drops to 0.96 cents).</li>
            <li>Foreign spending flips part of the maths: the points card charges no foreign transaction fee, which saves money, but it earns only 1 point per dollar abroad.</li>
            <li>A welcome offer can beat a year of everyday rewards. We leave it out of the comparison and note both offers separately.</li>
        </ul>
    </div>

    <nav aria-label="On this page">
        <strong>On this page</strong>
        <ul>
            <li><a href="#how">How we compared them</a></li>
            <li><a href="#results">Three households, side by side</a></li>
            <li><a href="#value">What does a point have to be worth?</a></li>
            <li><a href="#family">A grocery-heavy family</a></li>
            <li><a href="#picks">Picks by buyer type</a></li>
            <li><a href="#foreign">Foreign spending and the hidden fee</a></li>
        </ul>
    </nav>

    <h2 id="how">How we compared them</h2>
    <p>We chose one cash-back card and one travel-rewards card from the same issuer network, so the comparison is about earning rates and fees, not about which bank is nicer. We read the rates from the issuers' own pages on November 14, 2026, did the multiplication ourselves, and labelled every spending profile as an example. Our method and its limits are described on <a href="/how-we-use-ai/">how we use AI</a>, and we explain our affiliate position on the <a href="/disclosure/">disclosure page</a>: there are no card affiliate links on this page.</p>

    <div class="table-wrapper">
        <table>
            <caption>The two cards compared (issuer pages, reviewed November 14, 2026)</caption>
            <thead>
                <tr><th></th><th>Amex SimplyCash Preferred (cash back)</th><th>Scotiabank Gold American Express (travel points)</th></tr>
            </thead>
            <tbody>
                <tr><td>Annual fee</td><td>$9.99 a month, $119.88 a year ($119 in Quebec) (<a href="https://www.americanexpress.com/en-ca/credit-cards/simply-cash-preferred/">Amex</a>)</td><td>$120 a year, waived with an eligible account (<a href="https://www.scotiabank.com/ca/en/personal/credit-cards/american-express/gold-card.html">Scotiabank</a>)</td></tr>
                <tr><td>Groceries</td><td>4% at stand-alone grocery stores, on up to $30,000 of purchases a year</td><td>6 points per $1 at Sobeys, Safeway, FreshCo and Foodland; 5 points at other eligible grocery stores</td></tr>
                <tr><td>Gas</td><td>4% at stand-alone gas stations</td><td>3 points per $1 on gas and transit</td></tr>
                <tr><td>Dining</td><td>2%</td><td>5 points per $1, including food delivery</td></tr>
                <tr><td>Everything else</td><td>2%</td><td>1 point per $1 (3 extra points on hotels and car rentals booked through Scene+ Travel)</td></tr>
                <tr><td>Foreign currency purchases</td><td>Not stated on the card page, so we do not price it</td><td>1 point per $1; no foreign transaction fee</td></tr>
                <tr><td>How you are paid</td><td>A credit on the September statement each year</td><td>Scene+ points, redeemed for travel, groceries, dining and more</td></tr>
            </tbody>
        </table>
    </div>

    <p>Scotiabank's page says the higher earn rates apply to the first $50,000 a year on the card, calculated from January 1 to December 31. Amex says the 4% grocery rate covers purchases at stand-alone grocery stores, and superstores, wholesale clubs, alcohol retailers and general merchandise retailers do not qualify for it. We treat the spending in our groceries line as stand-alone grocery stores and Sobeys-family stores, which is a favourable assumption for both cards.</p>

    <div class="table-wrapper">
        <table>
            <caption>Example spending mixes (our illustrations, not averages)</caption>
            <thead>
                <tr><th>Profile</th><th>Sobeys-family groceries</th><th>Other groceries</th><th>Gas</th><th>Dining</th><th>Everything else</th></tr>
            </thead>
            <tbody>
                <tr><td>Standard mix at $1,500, $3,000 and $5,000 a month</td><td>10%</td><td>10%</td><td>8%</td><td>10%</td><td>62%</td></tr>
                <tr><td>Grocery-heavy family at $3,000 a month</td><td>15%</td><td>20%</td><td>8%</td><td>7%</td><td>50%</td></tr>
            </tbody>
        </table>
    </div>

    <p>The point value is the other half of the method. Scotiabank's page lists its own redemption examples: 10,000 points for $100 off at eligible grocery stores and 20,000 points for $200 off travel, which is 1 cent per point, and we use 1 cent. The same page also shows 3,000 points for a $20 account credit, which is about 0.67 cents, so not every redemption is worth a cent. Rather than pick a "true value" from someone else's list, we also solve for the break-even: the cents per point at which the two cards tie.</p>

    <h2 id="results">Three households, side by side</h2>
    <p>At $1,500, $3,000 and $5,000 a month, the cash-back card is ahead by $18.12, $36.12 and $60.12 a year after fees, with points at 1 cent. The gap grows with spending because Amex's 4% gas and grocery rates and 2% on everything else beat the points card's 1 point per dollar on the other 62% of spend.</p>

    <div class="table-wrapper">
        <table>
            <caption>Yearly rewards in Canada, welcome offers excluded, points at 1 cent (our calculation; examples)</caption>
            <thead>
                <tr><th>Spend</th><th>Cash back</th><th>Cash back after $119.88 fee</th><th>Points earned</th><th>Points worth</th><th>Points after $120 fee</th><th>Cash-back card ahead by</th></tr>
            </thead>
            <tbody>
                <tr><td>$1,500 a month</td><td>$460.80</td><td>$340.92</td><td>44,280</td><td>$442.80</td><td>$322.80</td><td>+$18.12</td></tr>
                <tr><td>$3,000 a month</td><td>$921.60</td><td>$801.72</td><td>88,560</td><td>$885.60</td><td>$765.60</td><td>+$36.12</td></tr>
                <tr><td>$5,000 a month</td><td>$1,536.00</td><td>$1,416.12</td><td>147,600</td><td>$1,476.00</td><td>$1,356.00</td><td>+$60.12</td></tr>
            </tbody>
        </table>
    </div>

    <p class="did-you-know" data-info-gain><strong>Did you know:</strong> our own calculation shows the cash-back card wins at every spending level we tested, by $18.12 to $60.12 a year, unless a point is worth more than 1.04 cents. A family spending more of its budget at Sobeys-family grocers lowers that line to 0.96 cents.</p>

    <div class="chart-container">
        <h3>Yearly rewards after annual fee at $3,000 a month (points at 1 cent)</h3>
        <div class="bar-chart">
            <div class="bar-item">
                <div class="bar-label">Cash back</div>
                <div class="bar-wrapper"><div class="bar" style="width: 100%;"><span>$801.72</span></div></div>
            </div>
            <div class="bar-item">
                <div class="bar-label">Points</div>
                <div class="bar-wrapper"><div class="bar" style="width: 95%;"><span>$765.60</span></div></div>
            </div>
        </div>
    </div>

    <h2 id="value">What does a point have to be worth for travel rewards to win?</h2>
    <p>In the standard mix, each Scene+ point has to be worth 1.041 cents or more for the points card to match the cash-back card after fees. The number is the same at all three spending levels because the mix is the same. It is the cash-back card's yearly earnings plus the points card's fee, divided by the points earned. At 1.04 cents a point, the two tie.</p>

    <div class="table-wrapper">
        <table>
            <caption>Points card after the $120 fee at $3,000 a month, at different point values (our calculation from 88,560 points; example values)</caption>
            <thead>
                <tr><th>Value per point</th><th>Points worth</th><th>After $120 fee</th><th>Against cash back after fee ($801.72)</th></tr>
            </thead>
            <tbody>
                <tr><td>0.67 cents (Scotiabank's 3,000-point account credit example)</td><td>$593.35</td><td>$473.35</td><td>&minus;$328.37</td></tr>
                <tr class="highlight-row"><td>1 cent (Scotiabank's grocery and travel examples)</td><td>$885.60</td><td>$765.60</td><td>&minus;$36.12</td></tr>
                <tr><td>1.25 cents (an example above the issuer's)</td><td>$1,107.00</td><td>$987.00</td><td>+$185.28</td></tr>
                <tr><td>1.5 cents (an example above the issuer's)</td><td>$1,328.40</td><td>$1,208.40</td><td>+$406.68</td></tr>
            </tbody>
        </table>
    </div>

    <p>The two rows above 1 cent are examples, not claims about what Scene+ points are worth. Scotiabank's page lists flat-value redemptions, and we have not found a published redemption on it above 1 cent. If you chase higher values with a different travel card that transfers points to airlines, our <a href="/blog/credit-card-points-valuations-aeroplan-avion-amex-canada/">points valuations guide</a> shows how to value those currencies, and our <a href="/blog/best-travel-rewards-cards-canada/">travel rewards card comparison</a> covers the cards built for it.</p>

    <h2 id="family">What about a grocery-heavy family?</h2>
    <p>Spending more at Sobeys-family grocers moves the answer. Take a family with a $3,000 monthly budget where 15% goes to Sobeys-family stores, 20% to other grocers, 8% to gas and 7% to dining. The cash-back card earns $1,029.60 and the points card earns 107,640 points, worth $1,076.40 at 1 cent. After fees, the points card is ahead by $46.68.</p>

    <div class="table-wrapper">
        <table>
            <caption>Grocery-heavy family, $3,000 a month, welcome offers excluded (our calculation; example)</caption>
            <thead>
                <tr><th>Card</th><th>Rewards</th><th>Fee</th><th>Net per year</th></tr>
            </thead>
            <tbody>
                <tr><td>Amex SimplyCash Preferred</td><td>$1,029.60</td><td>$119.88</td><td>$909.72</td></tr>
                <tr class="highlight-row"><td>Scotiabank Gold American Express</td><td>$1,076.40 (at 1 cent)</td><td>$120.00</td><td>$956.40</td></tr>
                <tr><td>Amex SimplyCash (no annual fee)</td><td>$566.10</td><td>$0</td><td>$566.10</td></tr>
            </tbody>
        </table>
    </div>
    <p>The no-fee Amex SimplyCash earns 2% on gas and on groceries up to $300 of cash back, and 1.25% on everything else, per <a href="https://www.americanexpress.com/en-ca/credit-cards/simply-cash/">Amex's page</a>. It is the quiet alternative for a family that wants a flat, no-fee cash-back card. If most of your grocery shopping is at a store the points card does not name, the family result reverses.</p>

    <h2 id="picks">Which should you pick? Picks by buyer type</h2>
    <p>Choose by what you will actually do with the rewards, not by the label on the card. Here is how our numbers sort the three buyer types, with the non-affiliate alternative for each.</p>

    <div class="table-wrapper">
        <table>
            <caption>Picks by buyer type (our reading of the model above; no affiliate links)</caption>
            <thead>
                <tr><th>Buyer</th><th>Pick</th><th>Why</th><th>Alternative to compare</th></tr>
            </thead>
            <tbody>
                <tr data-pick="simple-spender"><td>Simple spender: wants statement credits, no redemption decisions</td><td>Amex SimplyCash Preferred, or the no-fee Amex SimplyCash at low spend</td><td>Cash back beat points by $18.12 to $60.12 a year at 1 cent a point</td><td><a href="/blog/best-cash-back-credit-cards-canada/">Best cash-back cards by category</a></td></tr>
                <tr data-pick="frequent-flyer"><td>Frequent flyer: books travel and may redeem for more than 1 cent a point</td><td>A travel card, only if you can reach 1.04 cents a point or more</td><td>Scotiabank's own redemptions are flat at 1 cent; transfer-partner cards are a separate comparison</td><td><a href="/blog/best-travel-rewards-cards-canada/">Best travel rewards cards</a></td></tr>
                <tr data-pick="grocery-family"><td>Grocery-heavy family that shops at Sobeys-family stores</td><td>Scotiabank Gold American Express</td><td>Ahead by $46.68 a year in our example, with a break-even of 0.96 cents</td><td><a href="/blog/best-grocery-credit-cards-canada/">Best grocery credit cards</a></td></tr>
            </tbody>
        </table>
    </div>

    <p>Read each card in detail before choosing: our <a href="/blog/amex-simplycash-preferred-review/">Amex SimplyCash Preferred review</a> and <a href="/blog/scotiabank-gold-american-express-review/">Scotiabank Gold American Express review</a> show the break-evens and the caps. Neither card is right if you carry a balance: at 21.99% purchase interest on both, interest costs more than the rewards pay.</p>

    <h2 id="foreign">Foreign spending and the hidden fee</h2>
    <p>On $5,000 of annual foreign spending, the points card's lack of a foreign transaction fee is worth about $125 against a card that charges the typical 2.5% (Scotiabank's page describes 2.5% as the typical fee). The points card earns only 1 point per dollar in a foreign currency, though, so the same $5,000 earns 5,000 points. Amex's card page does not state a foreign currency conversion fee, so we could not price that side, and we do not guess. Check the cardmember agreement before you rely on a card abroad. Our guide to <a href="/blog/best-no-foreign-transaction-fee-credit-cards-canada/">no foreign transaction fee cards</a> covers the cards built for it.</p>

    <h2>What do welcome offers change?</h2>
    <p>They can change the first year completely, and they are temporary. As of November 14, 2026, Scotiabank's page advertises up to 65,000 bonus Scene+ points, which it equates to up to $650, for accounts opened between November 2, 2026 and January 3, 2027: 40,000 points after $2,000 in the first 3 months and 25,000 more after $7,500 in the first 12 months. Amex's page shows up to $200 in bonus cash back (10% on up to $2,000 in the first 3 months) plus a $50 statement credit for a purchase in month 13. Amex says offers vary by link, and both exclude some existing cardholders, so check the issuer's page. Our <a href="/blog/credit-card-welcome-bonus-math-canada/">welcome bonus math</a> shows how to price an offer against the spending you would have done anyway.</p>

    <h2>Frequently asked questions</h2>
    <h3>Is cash back or travel rewards better in Canada?</h3>
    <p>Cash back is better for most spenders. In our example, the cash-back card beat the points card by $18.12 to $60.12 a year at 1 cent a point. Travel cards win when each point is worth over about 1.04 cents.</p>
    <h3>How much is a Scene+ point worth?</h3>
    <p>Scotiabank's page gives examples at about 1 cent a point: 10,000 points for $100 off groceries and 20,000 for $200 off travel. It also shows 3,000 points for a $20 credit, about 0.67 cents. We use 1 cent.</p>
    <h3>Does a travel card with an annual fee make sense?</h3>
    <p>Only if the rewards beat what a no-fee card would pay by more than the fee. At $3,000 a month the points card earns $885.60 at 1 cent against $525.60 on the no-fee Amex SimplyCash, so the $120 fee is covered in our standard mix. At $800 a month it is not, as our Scotiabank review shows.</p>
    <h3>Is there a cash-back card with no annual fee?</h3>
    <p>Yes. Amex SimplyCash has no annual fee and earns 2% on gas, 2% on groceries up to $300 of cash back and 1.25% on everything else, per Amex's page. See our <a href="/blog/best-no-annual-fee-credit-cards-canada/">no-fee card guide</a>.</p>
    <h3>Do I need to travel to benefit from travel points?</h3>
    <p>No. Scene+ points can be redeemed for groceries, dining and more, per Scotiabank's page. But if you never use the redemptions above 1 cent, a travel card has little edge over cash back in our model.</p>
    <h3>Which card is better for groceries?</h3>
    <p>It depends where you shop. The points card earns 6 points at Sobeys-family stores. Amex's cash-back card pays 4% at stand-alone grocery stores up to $30,000 a year, but not at superstores or wholesale clubs.</p>
    <h3>Should I choose a card for the welcome offer?</h3>
    <p>Only if you would meet the spend requirement anyway and the card also works for your everyday spending after the first year. A one-time bonus does not fix a card that earns less every month afterwards.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="https://www.americanexpress.com/en-ca/credit-cards/simply-cash-preferred/">Amex Canada: SimplyCash Preferred Card</a>, reviewed November 14, 2026</li>
        <li><a href="https://www.americanexpress.com/en-ca/benefits/simplycashpreferred-card/">Amex Canada: SimplyCash Preferred benefits</a>, reviewed November 14, 2026</li>
        <li><a href="https://www.americanexpress.com/en-ca/credit-cards/simply-cash/">Amex Canada: SimplyCash Card</a>, reviewed November 14, 2026</li>
        <li><a href="https://www.scotiabank.com/ca/en/personal/credit-cards/american-express/gold-card.html">Scotiabank: Gold American Express Card</a>, reviewed November 14, 2026</li>
    </ul>

    <h2>Related reading</h2>
    <ul>
        <li><a href="/blog/amex-simplycash-preferred-review/">Amex SimplyCash Preferred review: when the fee pays for itself</a></li>
        <li><a href="/blog/scotiabank-gold-american-express-review/">Scotiabank Gold American Express review</a></li>
        <li><a href="/blog/best-cash-back-credit-cards-canada/">Best cash-back credit cards by spending category</a></li>
        <li><a href="/blog/best-travel-rewards-cards-canada/">Best travel rewards cards for Canadians</a></li>
        <li><a href="/blog/credit-card-annual-fee-vs-no-fee-canada/">Annual fee vs no-fee: when it pays</a></li>
        <li><a href="/blog/credit-card-rewards-calculator/">Credit card rewards calculator</a></li>
    </ul>

    ${batchFooter(D, 'Credit Cards', disclaimer)}

</div>`;

export const cashBackVsTravelPost = batchPost({
  date: D,
  category: 'Credit Cards',
  categorySlug: 'credit-cards',
  subcategory: 'cash-back',
  slug: 'cash-back-vs-travel-rewards-credit-card-canada',
  title: "Cash Back vs Travel Rewards Credit Cards in Canada: What Each Is Worth",
  excerpt:
    "We priced a cash-back card against a travel-points card at $1,500, $3,000 and $5,000 a month. Cash back wins by up to $60.12 a year unless points are worth over 1.04\u00a2.",
  content,
});
