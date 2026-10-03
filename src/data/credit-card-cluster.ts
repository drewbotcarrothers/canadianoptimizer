type CardPost = {
  title: string;
  slug: string;
  category: string;
  categorySlug: string;
  author: string;
  date: string;
  updated: string;
  excerpt: string;
  image: string;
  content: string;
};

const meta = {
  category: 'Credit Cards',
  categorySlug: 'credit-cards',
  author: 'Andrew',
  date: '2026-09-27',
  updated: '2026-09-27',
} as const;

function cardPost(
  slug: string,
  title: string,
  excerpt: string,
  content: string
): CardPost {
  return {
    ...meta,
    title,
    slug,
    excerpt,
    image: `/images/blog/${slug}.png`,
    content,
  };
}

const footer = (published: string) => `<div class="article-footer">
        <p><strong>Disclaimer:</strong> This is general education about Canadian credit cards as of September 2026. It is not a recommendation to apply for or keep any product, and not credit, tax, or insurance advice. Fees, earn rates, income rules, merchant codes, insurance certificates, and welcome offers change without notice. Figures below are tied to issuer or Costco pages reviewed in September 2026; confirm them on those pages the day you apply. Paying interest can erase any reward. Illustrative point values are labelled as illustrations, not quotes from an issuer.</p>
        <div class="footer-note">Published: ${published} | Category: Credit Cards | Author: Andrew</div>
    </div>`;

export const creditCardClusterPosts: CardPost[] = [
  cardPost(
    'best-credit-cards-canada',
    'Best Credit Cards in Canada for 2026: Picks by Spending Profile',
    'The best Canadian credit card in 2026 is the one that matches your merchants and fee. Picks by spending profile, with issuer figures as of September 2026.',
    `<div class="container">

    <div class="hook">
        There is no single best credit card in Canada in 2026. The best card is the one whose <span class="highlight">network, earn rate, and annual fee match the merchants you already use</span>, after you pay the statement in full. As of September 2026, that usually means a grocery or food earner, a no-fee catch-all, and a no-foreign-fee card if you leave the country.
    </div>

    <p>This is the hub for the credit-card cluster. Every spoke below links back here. Welcome bonuses are left off the picks on purpose: they change monthly and they are often unavailable if you have held the product before. The keep-or-cancel test is year two. The worksheet for that test is the <a href="/blog/credit-card-annual-fee-vs-no-fee-canada/">annual-fee versus no-fee guide</a>. How to price a point, once you have earned it, is the <a href="/blog/credit-card-points-valuations-aeroplan-avion-amex-canada/">points valuation guide</a>.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>Pick the spending profile first. The logo is the last decision.</li>
            <li>American Express still misses Costco warehouses and many Loblaw-banner stores. A high earn rate at those merchants is zero.</li>
            <li>As of September 2026, Cobalt is $15.99 a month outside Quebec ($191.88 a year; Quebec is billed $191.88 a year) and earns 5 points per dollar on eligible Canadian food, capped at $2,500 a month.</li>
            <li>A no-annual-fee card is the default until a fee card beats it on spend you can actually place on it.</li>
            <li>Pay in full. Purchase interest on these products sits near 21 percent. Rewards do not catch that.</li>
        </ul>
    </div>

    <h2>Which card fits your spending profile?</h2>

    <p>Rates below are ongoing earn rates and fees published by the issuer, not welcome offers. "As of September 2026" means the issuer page reviewed that month. If a cell says "confirm," the public page did not state a number clearly enough to quote.</p>

    <table>
        <caption>Canadian card picks by spending profile, as of September 2026</caption>
        <thead>
            <tr>
                <th>Profile</th>
                <th>Start here</th>
                <th>Why, as of September 2026</th>
                <th>The constraint</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Groceries and restaurants that take Amex</td>
                <td><a href="/blog/amex-cobalt-review-canada/">American Express Cobalt</a></td>
                <td>$15.99 a month outside Quebec ($191.88 a year). 5 points per $1 on eligible eats and stand-alone groceries in Canada, up to $2,500 a month combined, then 1 point.</td>
                <td>Not a warehouse or superstore rate. Membership Rewards are not cash until you redeem them.</td>
            </tr>
            <tr>
                <td>Air Canada, paid in cash or points</td>
                <td><a href="/blog/best-aeroplan-credit-cards-canada/">An Aeroplan co-brand</a></td>
                <td>TD and CIBC Aeroplan Visa Infinite are $139 a year and earn 1.5 points per $1 on gas, EV charging, grocery, and Air Canada. Amex Aeroplan Reserve is $599 and earns 3 points per $1 on direct Air Canada.</td>
                <td>Points are one programme. Income minimums apply on Infinite and Reserve products.</td>
            </tr>
            <tr>
                <td>You want Aeroplan from food, not from the co-brand</td>
                <td><a href="/blog/amex-cobalt-vs-td-aeroplan-visa-infinite/">Cobalt versus TD Aeroplan Visa Infinite</a></td>
                <td>Cobalt Membership Rewards transfer to Aeroplan at 1,000 points to 1,000 Aeroplan points, minimum 1,000.</td>
                <td>Only the spend you can put on Amex earns the 5x.</td>
            </tr>
            <tr>
                <td>Trips and foreign-currency websites</td>
                <td><a href="/blog/best-no-foreign-transaction-fee-credit-cards-canada/">A no-foreign-fee card</a></td>
                <td>Scotiabank Passport Visa Infinite is $150 a year and does not add the 2.5 percent markup Scotiabank describes as typical. Scotiabank Gold American Express is $120 and waives it too.</td>
                <td>The waiver has to beat the annual fee. A richer domestic earn rate can still lose abroad.</td>
            </tr>
            <tr>
                <td>Costco warehouse</td>
                <td><a href="/blog/best-credit-card-for-costco-canada/">A Mastercard</a></td>
                <td>Costco Canada warehouses list Mastercard, not Visa or American Express. The CIBC Costco Mastercard is $0 and earns 1 percent on warehouse merchandise.</td>
                <td>The accelerated rates are gas, restaurants, and Costco.ca, not the aisle spend most people mean by "Costco."</td>
            </tr>
            <tr>
                <td>You will not pay a fee</td>
                <td><a href="/blog/best-no-annual-fee-credit-cards-canada/">A $0-fee card</a></td>
                <td>Tangerine Money-Back, Simplii Cash Back Visa, the no-fee PC Mastercard lineup, BMO CashBack Mastercard, and Amex SimplyCash are $0 on the pages reviewed.</td>
                <td>Category caps and merchant codes decide whether "no fee" is actually the higher return.</td>
            </tr>
            <tr>
                <td>The grocery bill is the budget</td>
                <td><a href="/blog/best-grocery-credit-cards-canada/">A grocery accelerator</a></td>
                <td>Scotia Momentum Visa Infinite is $120 and earns 4 percent at Visa grocery merchants (MCC 5411), with an annual accelerated cap. PC World Elite is $0 and states 3 percent back in points at participating grocery stores.</td>
                <td>Walmart, Costco, and Superstore often miss the grocery code. Amex misses stores that refuse the network.</td>
            </tr>
        </tbody>
    </table>

    <p>Table as of September 2026. Sources are the issuer and Costco pages in the sources list. Welcome bonuses are excluded.</p>

    <h2>How should you build the stack?</h2>

    <p>Most households do not need five annual fees. They need slots. The role templates are in <a href="/blog/canadian-credit-card-stack-templates/">Canadian credit card stack templates</a>. The short version:</p>

    <ol>
        <li><strong>Catch-all.</strong> A no-fee Visa or Mastercard that earns something on uncategorized spend. See the <a href="/blog/best-no-annual-fee-credit-cards-canada/">no-annual-fee guide</a> and the <a href="/blog/best-cash-back-credit-cards-canada/">cash-back category guide</a>.</li>
        <li><strong>Accelerator.</strong> One card for the category that is actually large: groceries, food, or Air Canada. One accelerator, not three overlapping ones.</li>
        <li><strong>Abroad.</strong> A no-foreign-fee card if you spend in another currency. Leave it out of the wallet in Canada if its domestic earn rate is ordinary.</li>
        <li><strong>Temporary bonus card.</strong> Only with spending you already have. The <a href="/blog/card-churning-minimum-spend/">minimum-spend playbook</a> and the <a href="/blog/credit-card-welcome-bonus-math-canada/">welcome-bonus worksheet</a> are the rules. Space applications using the <a href="/blog/credit-card-utilization-applications-credit-score-canada/">utilization and applications guide</a>.</li>
    </ol>

    <div class="example-box">
        <strong>Example: two households, two honest stacks</strong>
        <p>Household A, in Ottawa, spends about $800 a month at a grocer and restaurants that take American Express, flies Air Canada twice a year, and takes one US trip of about $2,000. Cobalt on the food, a $139 TD or CIBC Aeroplan Visa Infinite if the checked bag and 1.5x on gas and Air Canada clear the fee, and Scotiabank Passport in the travel wallet. Household B, in Calgary, shops at Costco and a Loblaw banner, rarely flies, and will not pay a fee. They skip Cobalt. A PC World Elite or a no-fee Mastercard for the stores that take it, the CIBC Costco card or another Mastercard for the warehouse, and no third annual fee. The ranking that puts Household A's answer first is wrong for Household B.</p>
    </div>

    <h2>What should you ignore in a "best cards" list?</h2>

    <ul>
        <li><strong>A point valued at a blog's favourite redemption</strong> when you will redeem for merchandise. Use the redemption you will book. The method is the <a href="/blog/credit-card-points-valuations-aeroplan-avion-amex-canada/">valuation guide</a>.</li>
        <li><strong>Insurance you already have through work.</strong> A premium card's medical certificate is worth the premium you would otherwise pay, not the number in the marketing tile. Lounge math is separate: <a href="/blog/credit-card-airport-lounge-travel-portal-canada/">lounges and travel portals</a>.</li>
        <li><strong>A business card for personal groceries</strong> unless the ledger and the guarantee make sense. That decision is the <a href="/blog/business-credit-cards-sole-prop-corporation-canada/">sole-prop and corporation guide</a>.</li>
        <li><strong>Travel structure when you book the cheapest cash fare.</strong> The map of structures is <a href="/blog/best-travel-rewards-cards-canada/">best travel rewards cards</a>.</li>
    </ul>

    <h2>Where does each spoke go deeper?</h2>

    <ul>
        <li><a href="/blog/amex-cobalt-review-canada/">Amex Cobalt review</a> — fee, 5x cap, and the food-spend break-even.</li>
        <li><a href="/blog/amex-cobalt-vs-td-aeroplan-visa-infinite/">Cobalt versus TD Aeroplan Visa Infinite</a> — same household, two earn paths into Aeroplan.</li>
        <li><a href="/blog/best-aeroplan-credit-cards-canada/">Best Aeroplan cards</a> — TD, CIBC, and American Express co-brands.</li>
        <li><a href="/blog/best-no-foreign-transaction-fee-credit-cards-canada/">No foreign transaction fee</a> — when the 2.5 percent markup Scotiabank describes is the whole decision.</li>
        <li><a href="/blog/best-credit-card-for-costco-canada/">Best card for Costco</a> — Mastercard-only warehouse math.</li>
        <li><a href="/blog/best-no-annual-fee-credit-cards-canada/">No annual fee</a> — the default until a fee clears.</li>
        <li><a href="/blog/best-grocery-credit-cards-canada/">Grocery cards</a> — caps, codes, and Loblaw versus stand-alone grocers.</li>
        <li><a href="/blog/credit-card-rewards-calculator/">Rewards calculator</a> — your spend, your earn rates, your point value, minus the fee.</li>
        <li><a href="/blog/credit-card-travel-insurance-canada/">Card travel insurance</a> — the day count and the dollar cap, from the issuer pages.</li>
        <li><a href="/blog/aeroplan-points-guide-canada/">Aeroplan points</a> — earning, conversion ratios, and how to price a redemption.</li>
        <li><a href="/blog/best-balance-transfer-credit-cards-canada/">Balance transfers</a> — the promo clock and the fee, where the issuer stated them.</li>
        <li><a href="/blog/premium-credit-cards-canada-comparison/">Premium cards</a> — Platinum, Aeroplan Reserve, and Visa Infinite Privilege.</li>
    </ul>

    <h2>Frequently asked questions</h2>

    <h3>What is the best credit card in Canada in 2026?</h3>
    <p>There isn't one. As of September 2026, Cobalt is the strongest published food earn rate if the store takes American Express. A $0 card wins when your spend misses bonus categories or you will not clear an annual fee. Costco warehouse spend needs a Mastercard. Foreign spend needs a card that does not add a currency markup. Match the profile, then confirm the issuer page.</p>

    <h3>Should I pick a welcome bonus or an earn rate?</h3>
    <p>Price the bonus with the welcome-bonus worksheet, using spending you already have. Then price year two with the annual-fee test and no bonus in the equation. A card you would not keep after the bonus is a one-time project, not your daily driver. Bonuses also exclude many current and recent cardholders.</p>

    <h3>Is American Express worth it if my grocery store is Loblaws or Costco?</h3>
    <p>Not as the only card. Costco warehouses do not list American Express. Many Loblaw-banner stores do not take it either. Cobalt's 5x rate does not apply to spend that never reaches Amex. Keep a Visa or Mastercard for those merchants and put Cobalt only where it is accepted and coded as eligible food or stand-alone grocery.</p>

    <h3>Do I need a credit score before I apply for a premium card?</h3>
    <p>You need income that meets the product, a file the issuer will approve, and room to take a new inquiry. TD Aeroplan Visa Infinite publishes $60,000 personal or $100,000 household income. Infinite Privilege publishes $150,000 personal or $200,000 household. A decline is a hard inquiry for nothing. Read the utilization guide before you apply for several cards in one month.</p>

    <h3>Are credit card rewards taxable in Canada?</h3>
    <p>Personal rewards on your own spending are generally treated as a discount, not as income you report. That is a different question from business spending, where a reward can affect the expense you deduct. This page is not tax advice. If the card is used for a sole prop or corporation, read the business-card guide and confirm the treatment with your tax preparer.</p>

    <h3>How often do these figures change?</h3>
    <p>Fees and earn rates move without a blog update. Cobalt's travel 2x rate already ended in October 2024; gas and transit stayed at 2x. Treat every number here as September 2026 and re-check the issuer before you apply. The Financial Consumer Agency of Canada publishes consumer guidance on credit cards that is a better tie-breaker than a stale roundup.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="https://www.americanexpress.com/ca/en/benefits/cobalt-card/">American Express Cobalt benefits</a> and the <a href="https://www.americanexpress.com/en-ca/benefits/upgrade/cobalt-to-gold-card/">Cobalt fee comparison</a></li>
        <li><a href="https://www.td.com/ca/en/personal-banking/products/credit-cards/aeroplan/aeroplan-visa-infinite-card">TD Aeroplan Visa Infinite</a></li>
        <li><a href="https://www.scotiabank.com/ca/en/personal/credit-cards/visa/passport-infinite-card.html">Scotiabank Passport Visa Infinite</a></li>
        <li><a href="https://customerservice.costco.ca/app/answers/answer_view/a_id/1017193">Costco Canada payment methods</a></li>
        <li><a href="https://www.canada.ca/en/financial-consumer-agency/services/credit-cards.html">FCAC: credit cards</a></li>
    </ul>

    <div class="cta-section">
        <p><strong>The card is a few hundred dollars. The tax return is larger.</strong></p>
        <p>Once the plastic is chosen, contribution room and brackets move more money. The 2026 tax guide is the companion, not a card offer.</p>
        <a href="/ebooks/tax-guide/" class="cta-button">Get the 2026 Tax Guide — $49 CAD</a>
    </div>

    ${footer('September 27, 2026')}

</div>`
  ),

  cardPost(
    'amex-cobalt-review-canada',
    'Amex Cobalt Review 2026: Is 5x on Food Still Worth the Monthly Fee?',
    'As of September 2026, Amex Cobalt is $15.99 a month outside Quebec and earns 5 points per dollar on eligible Canadian food, capped at $2,500 a month.',
    `<div class="container">

    <div class="hook">
        As of September 2026, the American Express Cobalt Card costs <span class="highlight">$15.99 a month outside Quebec, which is $191.88 a year</span> (Quebec residents are billed $191.88 a year). It earns 5 Membership Rewards points per dollar on eligible eats and stand-alone groceries in Canada, up to $2,500 of those purchases a month, then 1 point. It is worth the fee when that food spend is real, the merchant takes Amex, and you will redeem the points. It is not worth it as a catch-all card.
    </div>

    <p>This review sits under the <a href="/blog/best-credit-cards-canada/">best credit cards in Canada</a> hub. The head-to-head with the main Aeroplan co-brand is <a href="/blog/amex-cobalt-vs-td-aeroplan-visa-infinite/">Cobalt versus TD Aeroplan Visa Infinite</a>. How to turn points into a dollar figure you trust is the <a href="/blog/credit-card-points-valuations-aeroplan-avion-amex-canada/">points valuation guide</a>.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>Fee: $15.99 per month for non-Quebec residents ($191.88 a year). Quebec: $191.88 a year. Supplementary cards: no annual fee, per Amex.</li>
            <li>5 points per $1 at restaurants, coffee shops, bars, stand-alone grocery stores, and food or grocery delivery in Canada, combined cap $2,500 net purchases a month. Then 1 point. The counter resets on the 1st.</li>
            <li>3 points per $1 on eligible streaming at providers on Amex's list. 2 points per $1 at stand-alone gas stations and on local transit, taxis, and ride-hail in Canada. 1 point on everything else.</li>
            <li>Travel purchases no longer earn 2 points. Amex says that change took effect 8 October 2024. Gas and transit stayed at 2 points.</li>
            <li>1,000 Membership Rewards points transfer to 1,000 Aeroplan points. Minimum transfer is 1,000, in increments of 100.</li>
        </ul>
    </div>

    <h2>What does Cobalt earn as of September 2026?</h2>

    <table>
        <caption>American Express Cobalt earn rates and fee, as of September 2026</caption>
        <thead>
            <tr>
                <th>Item</th>
                <th>Published term</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Monthly fee, outside Quebec</td>
                <td>$15.99 ($191.88 a year)</td>
            </tr>
            <tr>
                <td>Annual fee, Quebec</td>
                <td>$191.88 a year</td>
            </tr>
            <tr>
                <td>Eats, drinks, stand-alone grocery, food and grocery delivery in Canada</td>
                <td>5 points per $1, up to $2,500 net a month combined, then 1 point</td>
            </tr>
            <tr>
                <td>Eligible streaming</td>
                <td>3 points per $1 at providers on americanexpress.ca/streaming. Bundled telecom or third-party billing does not qualify.</td>
            </tr>
            <tr>
                <td>Stand-alone gas and local transit in Canada</td>
                <td>2 points per $1. General merchandise retailers do not qualify.</td>
            </tr>
            <tr>
                <td>Other eligible purchases</td>
                <td>1 point per $1</td>
            </tr>
            <tr>
                <td>Purchase interest</td>
                <td>21.99 percent on the Cobalt-to-Gold comparison Amex publishes</td>
            </tr>
            <tr>
                <td>Aeroplan transfer</td>
                <td>1,000 Membership Rewards = 1,000 Aeroplan. Minimum 1,000.</td>
            </tr>
        </tbody>
    </table>

    <p>As of September 2026, from American Express. Superstores, wholesale clubs, and merchants that are not stand-alone grocers are the usual miss on the 5x grocery rate. Interest, fees, and cash-equivalent transactions do not earn points. Amex does not publish Cobalt's foreign-currency markup as a single percentage on the benefits page reviewed here, so this review does not invent one. If you spend in another currency, read the cardmember agreement and compare it with a <a href="/blog/best-no-foreign-transaction-fee-credit-cards-canada/">no-foreign-fee card</a>.</p>

    <h2>Is 5x still worth $191.88?</h2>

    <p>The fee is the same number of dollars whether Amex bills it monthly or, in Quebec, once a year. The question is whether the points from spend you already make are worth more than $191.88 after you subtract what a no-fee card would have paid on the same taps. The fee test in general is the <a href="/blog/credit-card-annual-fee-vs-no-fee-canada/">annual-fee guide</a>. The grocery-only version is the <a href="/blog/best-grocery-credit-cards-canada/">grocery card guide</a>.</p>

    <div class="example-box">
        <strong>Example: Nadia in Hamilton, $800 a month on eligible food</strong>
        <p>Nadia spends $800 a month at a stand-alone grocer and restaurants that take American Express. That is $9,600 a year, and no month crosses the $2,500 cap, so all of it earns 5 points. She earns 48,000 Membership Rewards points. The fee is $191.88. At an illustrative 1 cent per point — a round number for the arithmetic, not a rate American Express quotes on the benefits page — those points are $480 against a charge, or $288 after the fee. A no-fee card at 1 percent on the same $9,600 returns $96 and costs $0, so Cobalt is ahead by about $192 in this illustration. If she redeems Aeroplan for a ticket she would have bought, the points can be worth more or less than 1 cent. If the grocer refuses Amex, the 48,000 points are zero. Plug your redemption into the valuation guide before you treat $288 as cash.</p>
    </div>

    <h3>What happens if you cross the $2,500 cap?</h3>

    <p>The cap is monthly and combined across the 5x categories. It does not care that you returned something later in the month: Amex says once you hit the maximum you earn 1 point, regardless of later credits. A household that puts $3,000 of eligible food on Cobalt in a month earns 5 points on $2,500 (12,500 points) and 1 point on $500 (500 points), not 15,000 points. The counter resets on the first of the next month. Two cardholders on one account share the cap, because it is an account maximum.</p>

    <div class="warning-box">
        <strong>Do not manufacture food spend to "use the cap":</strong>
        <p>Gift cards, cash equivalents, and interest do not earn. Buying groceries you will not eat to clear a mental target is the minimum-spend mistake. If a welcome bonus is why you applied, clear it with the <a href="/blog/card-churning-minimum-spend/">minimum-spend playbook</a>, not with extra food.</p>
    </div>

    <h2>Who should skip Cobalt?</h2>

    <ul>
        <li><strong>Costco is the grocery shop.</strong> Warehouses do not take American Express. The <a href="/blog/best-credit-card-for-costco-canada/">Costco card guide</a> is the replacement.</li>
        <li><strong>Most of the bill is a Loblaw banner that declines Amex.</strong> A PC Financial Mastercard or a Visa grocery card earns there. Cobalt earns nothing.</li>
        <li><strong>Food spend is under a few hundred dollars a month</strong> and you will not transfer to a redemption you can name. The illustrative break-even at 1 cent and 5 points per dollar is $191.88 divided by $0.05, about $3,838 a year, or roughly $320 a month. Less spend can still win if your redemption is richer. More spend can lose if you value a point at a fraction of a cent.</li>
        <li><strong>You carry a balance.</strong> At 21.99 percent purchase interest, a month of interest on a grocery balance dwarfs 5x.</li>
    </ul>

    <h2>Frequently asked questions</h2>

    <h3>How much is the Amex Cobalt annual fee in 2026?</h3>
    <p>As of September 2026, American Express lists $15.99 a month for non-Quebec residents, equal to $191.88 a year, and $191.88 a year for Quebec residents. Supplementary cards have no annual fee on the comparison page Amex publishes. Confirm the line on your statement. A first-year promotion, if one is offered, is not the ongoing fee.</p>

    <h3>Does Cobalt still earn 5x on groceries?</h3>
    <p>Yes, on stand-alone grocery stores in Canada, and on delivery of food and groceries in Canada as a primary business, inside the same $2,500 monthly cap as restaurants, coffee shops, and bars. Superstores and wholesale clubs are not that category. The earn rate after the cap is 1 point per dollar until the first of the next month.</p>

    <h3>Can I transfer Cobalt points to Aeroplan?</h3>
    <p>Yes. Amex's Membership Rewards travel-partner page lists Aeroplan at 1,000 Membership Rewards points to 1,000 Aeroplan points, with a 1,000-point minimum and 100-point increments. Transfers are not a cash-out. The value depends on the award you book, which is the point of the valuation guide.</p>

    <h3>Does Cobalt earn 2x on travel?</h3>
    <p>Not anymore. American Express's membership-benefits notice says that effective 8 October 2024, Cobalt stopped earning 2 points per dollar on travel purchases and kept 2 points on eligible gas stations and local transit. Booked flights are 1 point unless a separate offer says otherwise. Do not use an old blog's travel multiplier.</p>

    <h3>Is Cobalt a good no-foreign-fee card?</h3>
    <p>This review does not treat it as one. The benefits page reviewed in September 2026 does not state a waived foreign-currency markup. Scotiabank Passport and Scotiabank Gold American Express do state that waiver. Use those, or another card whose agreement you have read, for foreign-currency spend.</p>

    <h3>Does the 5x rate apply outside Canada?</h3>
    <p>Amex's Cobalt footnote limits the 5-point categories to restaurants, grocery, and food delivery in Canada. A meal in another country is not that sentence. Even if a foreign merchant coded in a way you hoped, the published 5x language is domestic. Read the footnote before you tap Cobalt abroad.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="https://www.americanexpress.com/ca/en/benefits/cobalt-card/">Cobalt Card benefits, American Express Canada</a></li>
        <li><a href="https://www.americanexpress.com/en-ca/benefits/upgrade/cobalt-to-gold-card/">Cobalt and Gold fee comparison, American Express</a></li>
        <li><a href="https://www.americanexpress.com/ca/en/benefits/membership-benefits/index.html">Membership benefits earn-rate notice (travel 2x ended 8 October 2024)</a></li>
        <li><a href="https://www.americanexpress.com/en-ca/rewards/membership-rewards/travel/airlines?currenttravelproducttype=Travel">Membership Rewards airline transfer ratios</a></li>
    </ul>

    <div class="cta-section">
        <p><strong>A point is not a plan.</strong></p>
        <p>Cobalt is a spending tool. Registered accounts are where the larger compounding sits. The 2026 tax guide is the other half of the year.</p>
        <a href="/ebooks/tax-guide/" class="cta-button">Get the 2026 Tax Guide — $49 CAD</a>
    </div>

    ${footer('September 27, 2026')}

</div>`
  ),

  cardPost(
    'amex-cobalt-vs-td-aeroplan-visa-infinite',
    'Amex Cobalt vs TD Aeroplan Visa Infinite: Which Card Earns More for Your Spending?',
    'Cobalt earns 5 points per dollar on eligible Canadian food; TD Aeroplan Visa Infinite earns 1.5 Aeroplan points on grocery, gas, EV charging, and Air Canada. The winner is the spend you can place.',
    `<div class="container">

    <div class="hook">
        Choose Cobalt if a large share of your food spend is in Canada at merchants that take American Express and you will transfer Membership Rewards to a redemption you can name. Choose the TD Aeroplan Visa Infinite if you need Visa acceptance, you want Aeroplan points deposited directly, and your bonus categories are gas, grocery, EV charging, and Air Canada. <span class="highlight">As of September 2026 the fees are $191.88 a year for Cobalt and $139 for the TD card.</span> Neither wins on spend the other card cannot touch.
    </div>

    <p>Both cards are spokes of <a href="/blog/best-credit-cards-canada/">best credit cards in Canada</a>. The full Cobalt terms are the <a href="/blog/amex-cobalt-review-canada/">Cobalt review</a>. The rest of the Aeroplan lineup is <a href="/blog/best-aeroplan-credit-cards-canada/">best Aeroplan credit cards</a>. Do not compare welcome bonuses in this matchup. They move, and many applicants are excluded. Compare the card you would still hold next September.</p>

    <div class="callout">
        <strong>Verdict:</strong>
        <ul>
            <li><strong>Choose Cobalt</strong> if eligible Canadian food is at least a few hundred dollars a month, Amex is accepted, and you are willing to move points (1,000 Membership Rewards become 1,000 Aeroplan).</li>
            <li><strong>Choose TD Aeroplan Visa Infinite</strong> if Loblaws, Costco, or other non-Amex merchants are the bill, or you want 1.5 Aeroplan points on gas and Air Canada without a transfer step.</li>
            <li><strong>Choose both</strong> only when each card has a job the other cannot do, and both fees clear. Two fees for one grocery shop is a hobby.</li>
        </ul>
    </div>

    <h2>How do the published earn rates compare?</h2>

    <table>
        <caption>Cobalt versus TD Aeroplan Visa Infinite, as of September 2026</caption>
        <thead>
            <tr>
                <th></th>
                <th>Amex Cobalt</th>
                <th>TD Aeroplan Visa Infinite</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Annual fee</td>
                <td>$15.99 a month outside Quebec ($191.88). Quebec: $191.88 a year.</td>
                <td>$139. Additional cardholder $75.</td>
            </tr>
            <tr>
                <td>Income published by the issuer</td>
                <td>Confirm on the application. Amex did not print a dollar minimum on the benefits page reviewed.</td>
                <td>$60,000 personal or $100,000 household.</td>
            </tr>
            <tr>
                <td>Food and stand-alone grocery in Canada</td>
                <td>5 points per $1, cap $2,500 a month, then 1.</td>
                <td>1.5 Aeroplan points per $1 on eligible grocery. Not a restaurant accelerator on the TD page.</td>
            </tr>
            <tr>
                <td>Gas and EV charging</td>
                <td>2 points at stand-alone gas stations. EV charging is not in that sentence.</td>
                <td>1.5 Aeroplan points on eligible gas and EV charging.</td>
            </tr>
            <tr>
                <td>Air Canada</td>
                <td>1 point, unless a separate offer applies. The old 2x travel rate ended in October 2024.</td>
                <td>1.5 Aeroplan points on purchases direct through Air Canada, including Air Canada Vacations.</td>
            </tr>
            <tr>
                <td>Everything else</td>
                <td>1 Membership Rewards point.</td>
                <td>1 Aeroplan point.</td>
            </tr>
            <tr>
                <td>Currency of the point</td>
                <td>Membership Rewards. Aeroplan transfer is 1,000 to 1,000.</td>
                <td>Aeroplan, posted to the programme.</td>
            </tr>
            <tr>
                <td>Network</td>
                <td>American Express.</td>
                <td>Visa.</td>
            </tr>
            <tr>
                <td>Purchase interest</td>
                <td>21.99 percent on Amex's comparison table.</td>
                <td>21.99 percent. Cash advances 22.99 percent.</td>
            </tr>
        </tbody>
    </table>

    <p>As of September 2026, from American Express and TD. A Membership Rewards point and an Aeroplan point are not the same object until you transfer. After a 1:1 transfer they are the same programme currency, and then the valuation guide applies to both.</p>

    <h2>Which card earns more on a real month?</h2>

    <div class="example-box">
        <strong>Example: Sam in Winnipeg, one month of ordinary spend</strong>
        <p>Sam's month: $700 at a stand-alone grocer that takes Amex, $250 at restaurants that take Amex, $200 at a Loblaw banner that does not, $150 at a stand-alone gas station, $100 on Air Canada, and $400 of other spend that takes Visa everywhere and Amex only half the time. Put the Amex-accepted food ($950) on Cobalt: 4,750 Membership Rewards points, under the $2,500 cap. Gas on Cobalt if the station takes it: 300 points at 2x. Air Canada and the Loblaw shop and half the "other" spend cannot ride the 5x rate. If Sam instead puts the whole month on the TD card — $700 + $250 + $200 grocery, $150 gas, $100 Air Canada — that $1,400 earns 1.5 Aeroplan points (2,100 points) and the $400 of other spend earns 400 points, for 2,500 Aeroplan points with no transfer. Cobalt's 4,750 points from food alone beat that food slice (TD would have earned 1,425 points on the same $950). TD wins the $200 Loblaw shop, the Air Canada dollar, and any merchant that refuses Amex. The household that holds only one card should pick the network that covers the larger bill, not the higher multiplier on a bill that never posts.</p>
    </div>

    <h3>What does a year of food look like after fees?</h3>

    <p>Take $9,600 of eligible food that Amex accepts, and ignore every other category so the comparison is clean. Cobalt earns 48,000 Membership Rewards points and costs $191.88. Transferred, that is 48,000 Aeroplan points. TD earns 14,400 Aeroplan points on the same $9,600 at 1.5 per dollar and costs $139. The gap is 33,600 points for an extra $52.88 of fee. At an illustrative 1 cent per point, the extra points are $336, so Cobalt is ahead by about $283 on this slice alone. At half a cent, the extra points are $168, and Cobalt is still ahead by about $115. At a quarter of a cent, the extra points are $84, and the $52.88 fee gap eats most of it. The illustration is not a quote. It is the reason you price your own redemption before you pay both fees. The <a href="/blog/credit-card-annual-fee-vs-no-fee-canada/">fee break-even</a> is the same worksheet with your numbers.</p>

    <div class="tip-box">
        <strong>Holding both is a stack, not a personality:</strong>
        <p>Food that Amex accepts goes on Cobalt. Gas, Air Canada, and anywhere Visa is the only network go on the TD card. You are then paying $191.88 plus $139. Run the year-two test on each card separately. The stack templates show where a third card stops helping.</p>
    </div>

    <h2>What else should decide it?</h2>

    <ul>
        <li><strong>Income.</strong> TD prints $60,000 personal or $100,000 household for Visa Infinite. If you miss it, TD points you to the Aeroplan Visa Platinum instead of pretending the Infinite card is available.</li>
        <li><strong>Checked bags and insurance.</strong> A co-brand card is partly an insurance certificate. Read it. Do not assume Cobalt's coverage matches TD's because both "are travel cards." Lounge access is a different product decision: <a href="/blog/credit-card-airport-lounge-travel-portal-canada/">lounges and portals</a>.</li>
        <li><strong>Applications.</strong> Two new accounts are two inquiries. If a mortgage is close, read the <a href="/blog/credit-card-utilization-applications-credit-score-canada/">utilization guide</a> before you apply for either.</li>
        <li><strong>Foreign spend.</strong> Neither page reviewed here is a no-markup travel card. Pair the winner with the <a href="/blog/best-no-foreign-transaction-fee-credit-cards-canada/">no-foreign-fee guide</a> if you leave Canada.</li>
    </ul>

    <h2>Frequently asked questions</h2>

    <h3>Is Cobalt or the TD Aeroplan Visa Infinite better for groceries?</h3>
    <p>On eligible stand-alone groceries in Canada that take American Express, Cobalt's 5 points per dollar beat TD's 1.5 Aeroplan points, inside the $2,500 monthly cap. On a Loblaw banner or Costco, Cobalt often earns nothing because the network is refused. TD's 1.5x grocery rate still depends on Visa's grocery merchant code. "Grocery" on a receipt is not always grocery on the network.</p>

    <h3>Which fee is lower?</h3>
    <p>As of September 2026, TD's primary-card fee is $139. Cobalt is $191.88 a year, billed monthly outside Quebec and annually in Quebec. An additional TD cardholder is $75. Cobalt supplementary cards are $0 on Amex's comparison page. The cheaper fee is not the better card if the earn gap on your spend is larger than the $52.88 difference.</p>

    <h3>Do Cobalt points become Aeroplan points automatically?</h3>
    <p>No. You transfer them. Amex lists Aeroplan at 1,000 Membership Rewards to 1,000 Aeroplan, minimum 1,000 points. TD deposits Aeroplan points from the purchase. If you will never open the transfer page, the 5x rate is a balance in a programme you are not using.</p>

    <h3>Can I get the welcome bonus on both?</h3>
    <p>Maybe, and maybe not. Aeroplan's rules restrict repeat bonuses across issuers in the same card category, and each issuer adds its own "new cardholder" test. This comparison ignores the bonus. Price it separately with the welcome-bonus worksheet on the day you apply, and assume you might be ineligible.</p>

    <h3>What if I only fly once a year?</h3>
    <p>A $139 Aeroplan card for one flight is a bag-fee and insurance question, not an earn-rate question. If you will not use the certificate and your food spend can sit on Cobalt or on a no-fee cash-back card, skip the co-brand. The travel-rewards guide is the structure choice before the logo.</p>

    <h3>Which card is safer if I might carry a balance?</h3>
    <p>Neither. Both publish 21.99 percent on purchases. A reward of 1.5 or 5 points does not offset a month of interest. Pay the statement in full or use a debit card. Rewards are a rebate on spending you were going to do anyway.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="https://www.americanexpress.com/ca/en/benefits/cobalt-card/">American Express Cobalt benefits</a></li>
        <li><a href="https://www.americanexpress.com/en-ca/benefits/upgrade/cobalt-to-gold-card/">Cobalt fee, American Express</a></li>
        <li><a href="https://www.td.com/ca/en/personal-banking/products/credit-cards/aeroplan/aeroplan-visa-infinite-card">TD Aeroplan Visa Infinite</a></li>
        <li><a href="https://www.americanexpress.com/en-ca/rewards/membership-rewards/travel/airlines?currenttravelproducttype=Travel">Membership Rewards transfer ratios</a></li>
    </ul>

    ${footer('September 27, 2026')}

</div>`
  ),

  cardPost(
    'best-aeroplan-credit-cards-canada',
    'Best Aeroplan Credit Cards in Canada for 2026',
    'As of September 2026, TD and CIBC Aeroplan Visa Infinite cost $139 and earn 1.5 points on gas, grocery, and Air Canada. Amex Aeroplan Reserve costs $599 and earns 3 points on Air Canada.',
    `<div class="container">

    <div class="hook">
        The best Aeroplan card in Canada in 2026 is the cheapest one that earns points on spend you can place on that network and that you will still hold after the welcome bonus. <span class="highlight">As of September 2026, TD and CIBC Aeroplan Visa Infinite are $139 a year and earn 1.5 points per dollar on gas, EV charging, grocery, and Air Canada.</span> The American Express Aeroplan Reserve is $599 and earns 3 points per dollar on purchases made directly with Air Canada. Cobalt is not an Aeroplan card, but it can transfer into Aeroplan.
    </div>

    <p>This page is a spoke of <a href="/blog/best-credit-cards-canada/">best credit cards in Canada</a>. Cobalt versus the TD Infinite card is its own matchup. How many cents a point is worth on a ticket you will book is the <a href="/blog/credit-card-points-valuations-aeroplan-avion-amex-canada/">valuation guide</a>, not a number printed on the application.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>TD Aeroplan Visa Infinite: $139, additional card $75, income $60,000 personal or $100,000 household, 1.5 points on gas, EV charging, grocery, and direct Air Canada, 1 point on other purchases.</li>
            <li>CIBC Aeroplan Visa Infinite: $139, additional card $50, same 1.5-point categories on CIBC's page, plus a first checked bag on Air Canada for the cardholder, authorized users, and companions, subject to the certificate.</li>
            <li>Amex Aeroplan card: $120 annual fee on Amex's comparison table. Confirm the accelerated categories on that page before you quote an earn rate.</li>
            <li>Amex Aeroplan Reserve: $599. 3 points per dollar on direct Air Canada, including Air Canada Vacations. 2 points on eligible dining and food delivery in Canada, not groceries. 1 point on other purchases.</li>
            <li>TD Aeroplan Visa Infinite Privilege: $599, additional card $199, income $150,000 personal or $200,000 household. 2 points on direct Air Canada, 1.5 on gas, EV, grocery, travel, transit, and dining, 1.25 on other purchases.</li>
        </ul>
    </div>

    <h2>Which Aeroplan card matches how you fly?</h2>

    <table>
        <caption>Aeroplan consumer cards, ongoing terms as of September 2026</caption>
        <thead>
            <tr>
                <th>Card</th>
                <th>Annual fee</th>
                <th>Earn rate worth remembering</th>
                <th>Pick it when</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>TD Aeroplan Visa Infinite</td>
                <td>$139</td>
                <td>1.5 on gas, EV charging, grocery, Air Canada. 1 on other purchases.</td>
                <td>You want Visa and a mid-tier fee, and you meet $60,000 / $100,000 income.</td>
            </tr>
            <tr>
                <td>CIBC Aeroplan Visa Infinite</td>
                <td>$139</td>
                <td>1.5 on gas, EV charging, groceries, and Air Canada. First checked bag is the published differentiator.</td>
                <td>The bag fee you actually pay is worth more than the small differences versus TD.</td>
            </tr>
            <tr>
                <td>American Express Aeroplan Card</td>
                <td>$120</td>
                <td>Amex's compare table shows a $120 fee and a 1-point base on "everything else." Accelerators: confirm on the page.</td>
                <td>You want a lower co-brand fee and you already know Amex is accepted where you spend.</td>
            </tr>
            <tr>
                <td>American Express Aeroplan Reserve</td>
                <td>$599</td>
                <td>3 on direct Air Canada. 2 on dining and food delivery in Canada. 1 on other purchases.</td>
                <td>Air Canada spend and the insurance or status benefits clear $599 without a fantasy valuation.</td>
            </tr>
            <tr>
                <td>TD Aeroplan Visa Infinite Privilege</td>
                <td>$599</td>
                <td>2 on direct Air Canada. 1.5 on gas, EV, grocery, travel, transit, and dining. 1.25 on the rest. Bonus rates are capped at $100,000 of those purchases a year on the welcome-guide terms.</td>
                <td>You meet $150,000 / $200,000 income and the Visa network matters more than Amex's 3x on Air Canada.</td>
            </tr>
            <tr>
                <td>Amex Cobalt, then transfer</td>
                <td>$191.88</td>
                <td>5x on eligible Canadian food, then transfer 1:1 to Aeroplan.</td>
                <td>Food, not flying, is where the points should be earned. See the Cobalt review.</td>
            </tr>
        </tbody>
    </table>

    <p>Welcome bonuses are omitted. TD, CIBC, and American Express all attach "new cardholder" tests, and Aeroplan's own terms can block a bonus if you recently held another card in the same category. Read the offer on the day you apply. The math for that offer is the <a href="/blog/credit-card-welcome-bonus-math-canada/">welcome-bonus worksheet</a>.</p>

    <h2>Does the checked bag pay for a $139 card?</h2>

    <div class="example-box">
        <strong>Example: Priya in Montreal, two round trips</strong>
        <p>Priya flies Air Canada twice a year with one checked bag each way, so four bag events. She does not put a dollar on CIBC's "value" tile. She uses the bag fee Air Canada would charge her on those flights, which she looks up for her fare. If four bags cost her more than $139, the CIBC card's bag benefit can clear the fee before a single point is earned, but only if the certificate covers her fare class, her companions, and the route. If she flies with a fare that already includes a bag, the benefit is worth $0 and the card has to win on 1.5x earn. On $6,000 of grocery, gas, and Air Canada spend, 1.5 points is 9,000 Aeroplan points. At an illustrative 1 cent, that is $90, which does not cover $139. She would need either the bag, a richer redemption, or more spend. The illustration is not a quote from Air Canada or from CIBC.</p>
    </div>

    <h3>When is $599 the wrong flex?</h3>

    <p>Reserve's 3x rate applies to purchases made directly with Air Canada, including Air Canada Vacations bought from Air Canada. A ticket bought through another website, a travel agent, or a hotel booked on aircanada.com is not that rate. Amex's terms say those earn 1 point. Dining at 2x is restaurants and food delivery in Canada, and the terms exclude groceries. If your "travel card" spend is groceries and a once-a-year fare from an online agency, you are paying $599 for the base rate. The <a href="/blog/credit-card-annual-fee-vs-no-fee-canada/">fee guide</a> is the test. Lounge visits are priced in the <a href="/blog/credit-card-airport-lounge-travel-portal-canada/">lounge guide</a>, not assumed to be worth the fee.</p>

    <h2>Frequently asked questions</h2>

    <h3>What is the best Aeroplan credit card in Canada for 2026?</h3>
    <p>For most people who simply want Aeroplan points on everyday Visa spend, TD or CIBC Aeroplan Visa Infinite at $139 is the published mid-tier. Pick CIBC when the checked-bag certificate covers bags you would pay for. Pick TD when you already bank there and the earn rate is the same 1.5 points on gas, grocery, EV charging, and Air Canada. Pick a $599 card only after the benefits you will use clear the fee. Pick Cobalt when food, not the co-brand, is the earn engine.</p>

    <h3>Do Aeroplan points from these cards expire?</h3>
    <p>TD says Aeroplan points will not expire as long as you are a primary cardholder in good standing. That is a cardholder condition, not a promise about the Aeroplan programme itself. If you cancel the card, re-read Aeroplan's current expiry rules before you assume the balance is permanent.</p>

    <h3>Is the American Express Aeroplan card the same as Cobalt?</h3>
    <p>No. The Aeroplan cards earn Aeroplan points directly. Cobalt earns Membership Rewards and can transfer to Aeroplan at 1,000 to 1,000. The core Amex Aeroplan card is listed at $120. Cobalt is $191.88. They also fail at different merchants. Holding both only makes sense if each has a job.</p>

    <h3>What income do I need for Visa Infinite?</h3>
    <p>TD publishes $60,000 personal or $100,000 household for the Aeroplan Visa Infinite, and $150,000 personal or $200,000 household for Infinite Privilege. If you miss the Infinite figure, TD's page points you to the Aeroplan Visa Platinum. Do not apply for a product you cannot qualify for just to "see."</p>

    <h3>Should I collect Aeroplan if I do not fly Air Canada?</h3>
    <p>Only if you will redeem on a partner you actually book. Aeroplan is one currency. A devaluation hits a co-brand balance directly. If you buy the cheapest cash fare on whoever is flying, a cash-back card is the cleaner rebate. The travel-rewards guide separates that structure from a locked airline programme.</p>

    <h3>Can I get the welcome bonus if I had the card before?</h3>
    <p>Often no. Issuer offers reviewed in September 2026 exclude current and former cardholders of the same product, and Aeroplan's programme terms can exclude people who received a bonus on another issuer's card in the same category. Read the footnote on the application. Do not plan a year of spending around a bonus you are not eligible for.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="https://www.td.com/ca/en/personal-banking/products/credit-cards/aeroplan/aeroplan-visa-infinite-card">TD Aeroplan Visa Infinite</a></li>
        <li><a href="https://www.td.com/ca/en/personal-banking/products/credit-cards/aeroplan/aeroplan-visa-infinite-privilege-card">TD Aeroplan Visa Infinite Privilege</a></li>
        <li><a href="https://www.cibc.com/en/personal-banking/credit-cards/all-credit-cards/aeroplan-visa-infinite-card.html">CIBC Aeroplan Visa Infinite</a></li>
        <li><a href="https://www.americanexpress.com/ca/en/credit-cards/aeroplan-cards/compare-cards/">American Express Aeroplan card comparison</a></li>
        <li><a href="https://www.americanexpress.com/ca/en/membership-benefits/aeroplan-reserve-card/">American Express Aeroplan Reserve benefits</a></li>
    </ul>

    ${footer('September 27, 2026')}

</div>`
  ),

  cardPost(
    'best-no-foreign-transaction-fee-credit-cards-canada',
    'Best No Foreign Transaction Fee Credit Cards in Canada (2026)',
    'As of September 2026, Scotiabank Passport Visa Infinite ($150) and Scotiabank Gold American Express ($120) charge no foreign-transaction markup. Scotiabank describes the typical markup as 2.5 percent.',
    `<div class="container">

    <div class="hook">
        As of September 2026, Scotiabank Passport Visa Infinite ($150 a year) and Scotiabank Gold American Express ($120 a year) do not add a foreign-transaction markup. Scotiabank describes the markup other issuers typically add as <span class="highlight">2.5 percent</span>, and says only the exchange rate applies on these two cards. A card with a richer Canadian earn rate still loses on a trip if it adds that markup and you spend enough abroad for the markup to exceed the rewards.
    </div>

    <p>This spoke belongs to <a href="/blog/best-credit-cards-canada/">best credit cards in Canada</a>. The travel-structure choice, before the fee, is <a href="/blog/best-travel-rewards-cards-canada/">best travel rewards cards</a>. Whether the annual fee clears at all is the <a href="/blog/credit-card-annual-fee-vs-no-fee-canada/">annual-fee test</a>. The wallet that holds this card next to a grocery card is the <a href="/blog/canadian-credit-card-stack-templates/">stack templates</a> page.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>Passport Visa Infinite: $150 a year, no foreign-transaction fee, six complimentary lounge visits, Scene+ points. First additional card $0, then $50. Purchase interest 20.99 percent.</li>
            <li>Passport Infinite Privilege: $599 and the same no-markup language. A premium card, not the default for one trip.</li>
            <li>Scotiabank Gold American Express: $120, no foreign-transaction fee, 6 Scene+ points per dollar at listed Empire-banner grocers and 5 at other grocery, dining, and entertainment. Amex acceptance still limits it.</li>
            <li>A Scotiabank Ultimate Package can rebate up to $150 of one eligible card's annual fee. The chequing account has its own cost. Do not "save" $150 by paying more in account fees.</li>
            <li>Rogers Bank's disclosure still adds 2.5 percent on foreign currency. A higher US-dollar earn rate can offset that. It is not a no-markup card.</li>
        </ul>
    </div>

    <h2>Which no-markup cards did the issuers actually publish?</h2>

    <table>
        <caption>No-foreign-transaction-fee cards confirmed on issuer pages, as of September 2026</caption>
        <thead>
            <tr>
                <th>Card</th>
                <th>Annual fee</th>
                <th>Markup</th>
                <th>Use it for</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Scotiabank Passport Visa Infinite</td>
                <td>$150</td>
                <td>None. Scotiabank says the typical markup is 2.5 percent and that only the exchange rate applies.</td>
                <td>Foreign-currency spend on Visa, plus Scene+ on travel. Earn on ordinary travel purchases is 1 Scene+ point per dollar on the product page, with an extra 3 points on hotels and cars booked through Scene+ Travel.</td>
            </tr>
            <tr>
                <td>Scotiabank Passport Visa Infinite Privilege</td>
                <td>$599</td>
                <td>Same waiver language.</td>
                <td>A household that already uses the Privilege benefits. Not a card you open only to avoid 2.5 percent.</td>
            </tr>
            <tr>
                <td>Scotiabank Gold American Express</td>
                <td>$120</td>
                <td>Same waiver language.</td>
                <td>Foreign spend at merchants that take Amex, and Canadian grocery at Sobeys, IGA, Safeway, Foodland, FreshCo, and the other banners on Scotiabank's list (6 points per dollar).</td>
            </tr>
        </tbody>
    </table>

    <p>Other fintech and prepaid products advertise no foreign fees. This page does not assign them a rate that was not on an issuer page reviewed in September 2026. If your card's agreement is silent, do not assume the markup is zero. Confirm your own card before you travel. The Financial Consumer Agency of Canada explains credit-card fees in consumer language if the agreement is opaque.</p>

    <h2>When does avoiding 2.5 percent pay for the annual fee?</h2>

    <div class="example-box">
        <strong>Example: Owen in Halifax, one US trip and some US-dollar websites</strong>
        <p>Owen spends the equivalent of $4,000 in foreign currency in a year: a trip and a few subscriptions billed in US dollars. Using the 2.5 percent figure Scotiabank calls typical, a marked-up card costs him about $100. Passport's fee is $150, so the waiver alone is $50 short. He needs either more foreign spend or Scene+ value and lounge visits he would have paid for. The foreign spend that covers $150 at 2.5 percent is $150 divided by 0.025, which is $6,000. At $8,000 of foreign spend, the waiver saves $200 against a $150 fee, or $50 before any earn-rate difference. If his current card's markup is not 2.5 percent, this arithmetic changes. Read that card's foreign-currency section. And if a merchant offers to charge him in Canadian dollars at the shop's rate, he should refuse. That is dynamic currency conversion, and it is not the card's exchange rate.</p>
    </div>

    <div class="warning-box">
        <strong>A no-markup card can still be the wrong daily driver:</strong>
        <p>Passport's published everyday travel earn is 1 Scene+ point per dollar. Cobalt's 5x food rate is a better domestic food card where Amex works, and it is a worse foreign card if Cobalt adds a markup the benefits page does not waive. Split the jobs. The grocery decision is separate from the border.</p>
    </div>

    <h2>What about cards that earn more in US dollars but still charge the markup?</h2>

    <p>Rogers Bank's current marketing says the Rogers Red World Elite Mastercard has no annual fee, needs $80,000 personal or $150,000 household income, and earns 3 percent cash back on US-dollar purchases, with "up to 3 percent" cash back value for Rogers customers. The Rogers Bank disclosure summary still converts foreign currency at the Mastercard rate plus 2.5 percent. A 3 percent US-dollar earn rate and a 2.5 percent markup can net a small rebate on US-dollar spend. It is not the same product as a card that charges no markup on euros, pounds, and pesos. Confirm the Canadian-dollar base rate and any annual cap on rogersbank.com before you make it your only card. It is a Mastercard, which matters at Costco, and that question is the <a href="/blog/best-credit-card-for-costco-canada/">Costco guide</a>.</p>

    <h2>Frequently asked questions</h2>

    <h3>What is the best no-foreign-transaction-fee credit card in Canada?</h3>
    <p>As of September 2026, Scotiabank Passport Visa Infinite is the Visa card that states the waiver at a $150 fee, with six complimentary lounge visits. Scotiabank Gold American Express states the same waiver at $120 and earns more at Empire-banner grocers, but only where Amex is accepted. Choose on acceptance and on whether $6,000 or so of foreign spend, at the 2.5 percent figure Scotiabank uses, covers the fee you will actually pay.</p>

    <h3>Does "no foreign transaction fee" mean no exchange rate?</h3>
    <p>No. Scotiabank says you still pay the exchange rate. The waiver is the extra percentage, which Scotiabank describes as typically 2.5 percent. You can still lose money by accepting the merchant's offer to convert the charge into Canadian dollars at a rate the merchant sets.</p>

    <h3>Is the Scotiabank annual fee waived with a bank account?</h3>
    <p>Scotiabank's Ultimate Package page says an eligible chequing account rebates up to $150 a year on one eligible card, including Passport Visa Infinite, Gold American Express, and Momentum Visa Infinite. If the card's fee is higher than $150, you pay the difference. The rebate cannot be combined with another fee waiver. Price the account's own monthly fee before you call the card free.</p>

    <h3>Do I need a no-foreign-fee card if I only cross the border once?</h3>
    <p>Run the dollars. One weekend of a few hundred dollars is not $150 of markup. At 2.5 percent, $400 of spend is $10. Keep the card you already have, decline dynamic currency conversion, and do not open a $150 card for a $10 problem. The fee test is the whole decision.</p>

    <h3>Will Cobalt's 5x beat a 2.5 percent markup on a foreign meal?</h3>
    <p>Cobalt's published 5-point categories are in Canada. A foreign meal is not that footnote. This page does not claim Cobalt waives a currency markup, because the benefits page reviewed did not say that. Use a card whose agreement states the waiver.</p>

    <h3>Are prepaid travel cards included?</h3>
    <p>Not with a made-up rate. Some prepaid and fintech cards advertise no foreign fee and then add a different spread or an ATM charge. If it is not in the agreement you can open, it is not in this table. Credit-card insurance on a prepaid card is a separate gap. Read what you are giving up before you travel on a prepaid balance.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="https://www.scotiabank.com/ca/en/personal/credit-cards/visa/passport-infinite-card.html">Scotiabank Passport Visa Infinite</a></li>
        <li><a href="https://www.scotiabank.com/ca/en/personal/credit-cards/visa/passport-infinite-privilege-card.html">Scotiabank Passport Visa Infinite Privilege</a></li>
        <li><a href="https://www.scotiabank.com/ca/en/personal/credit-cards/american-express/gold-card.html">Scotiabank Gold American Express</a></li>
        <li><a href="https://www.rogersbank.com/">Rogers Bank cards</a> and the <a href="https://www.rogersbank.com/legaldocs/en/Disclosure_0924.pdf">Rogers Bank disclosure summary</a></li>
        <li><a href="https://www.canada.ca/en/financial-consumer-agency/services/credit-cards.html">FCAC: credit cards</a></li>
    </ul>

    ${footer('September 27, 2026')}

</div>`
  ),

  cardPost(
    'best-credit-card-for-costco-canada',
    'Best Credit Card for Costco in Canada: The Mastercard-Only Math',
    'Costco warehouses take Mastercard, not Visa or American Express. As of September 2026 the CIBC Costco card is $0 and earns 1% in the warehouse.',
    `<div class="container">

    <div class="hook">
        The best credit card for Costco in Canada is a Mastercard, because that is the credit network Costco warehouses list. <span class="highlight">As of September 2026, the CIBC Costco Mastercard has a $0 annual fee and earns 1 percent on warehouse merchandise</span>, 3 percent at restaurants and Costco gas, and 2 percent at other gas, EV charging, and Costco.ca, with caps on the gas and Costco.ca rates. Visa and American Express are not on Costco's warehouse payment list. Costco.ca does accept Visa.
    </div>

    <p>This is a spoke of <a href="/blog/best-credit-cards-canada/">best credit cards in Canada</a>. Grocery coding, which is a different problem from the warehouse, is the <a href="/blog/best-grocery-credit-cards-canada/">grocery card guide</a>. A $0 fee is not automatically the highest return: the <a href="/blog/best-no-annual-fee-credit-cards-canada/">no-annual-fee guide</a> and the <a href="/blog/best-cash-back-credit-cards-canada/">cash-back guide</a> are the comparison set. Cobalt's 5x rate does not apply inside a warehouse that will not take the card. That limit is spelled out in the <a href="/blog/amex-cobalt-review-canada/">Cobalt review</a>.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>Warehouses, per Costco's help centre: Mastercard, debit, cash, Costco Shop Card, personal cheque, and Apple Pay. Gas: Mastercard credit and debit, other debit, and a physical Shop Card. No cash at the pump.</li>
            <li>Costco.ca: Mastercard, Visa, most PIN debit, and the Shop Card. A Visa grocery card can still be right for the website and wrong for the building.</li>
            <li>CIBC Costco Mastercard and CIBC Costco World Mastercard: $0 annual fee. The regular card publishes a $15,000 minimum income. World publishes $50,000 personal or $80,000 household. You must be a Costco member.</li>
            <li>Cash back is a certificate in January, redeemable at a Canadian warehouse, not a statement credit. The certificate has exclusions, including gas, the food court, and tobacco.</li>
            <li>The 1 percent warehouse rate is the number that matters for the cart. The 3 percent rate is restaurants and Costco gas, not the aisle.</li>
        </ul>
    </div>

    <h2>What does the CIBC Costco card earn?</h2>

    <table>
        <caption>CIBC Costco Mastercard, as of September 2026</caption>
        <thead>
            <tr>
                <th>Spend</th>
                <th>Rate</th>
                <th>Cap</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Costco gas in Canada</td>
                <td>3 percent</td>
                <td>Shares the gas and EV cap: 3 percent at Costco gas and 2 percent at other gas and at EV charging (MCC 5552) on the first $5,000 net a year, then 1 percent. Resets 1 January.</td>
            </tr>
            <tr>
                <td>Other gas and EV charging</td>
                <td>2 percent, then 1 percent</td>
                <td>The same $5,000.</td>
            </tr>
            <tr>
                <td>Restaurants</td>
                <td>3 percent</td>
                <td>No dollar cap in the footnote reviewed.</td>
            </tr>
            <tr>
                <td>Costco.ca</td>
                <td>2 percent, then 1 percent</td>
                <td>First $8,000 net a year, then 1 percent. Resets 1 January.</td>
            </tr>
            <tr>
                <td>Warehouse merchandise and everything else</td>
                <td>1 percent</td>
                <td>This is the cart. The World card's published income rule is higher. Confirm on the benefits guide if World's earn table differs before you assume it matches.</td>
            </tr>
            <tr>
                <td>Annual fee</td>
                <td>$0</td>
                <td>Up to three additional cards at $0 on the product page.</td>
            </tr>
            <tr>
                <td>How you are paid</td>
                <td>Certificate</td>
                <td>Once a year, in January, for the prior calendar year, if the account and the membership are in good standing on 31 December. Redeemed at a Canadian warehouse, with exclusions.</td>
            </tr>
        </tbody>
    </table>

    <p>Purchase interest on the Costco cards overview page is 21.75 percent. Cash interest is 22.49 percent outside Quebec and 21.99 percent in Quebec. Interest still dominates 1 percent. Pay the statement in full.</p>

    <h2>Is 1 percent at the warehouse actually the best?</h2>

    <div class="example-box">
        <strong>Example: the Leung household in Burnaby</strong>
        <p>They spend $6,000 a year on warehouse merchandise, $1,200 at Costco gas, $800 at restaurants, and $400 on Costco.ca. On the CIBC schedule that is $60 on the warehouse (1 percent), $36 on Costco gas (3 percent, under the $5,000 gas cap), $24 at restaurants (3 percent), and $8 on Costco.ca (2 percent). Total: $128, paid as a January certificate, fee $0. If a different no-fee Mastercard paid a flat 2 percent on the same $8,400, it would pay $168 and might beat the certificate, including on the warehouse slice ($120 versus $60). This page does not assign that 2 percent to a named card, because a current flat rate that high was not what the issuer pages reviewed here showed for warehouse coding. Rogers Bank markets elevated cash back for Rogers customers on a no-fee World Elite Mastercard, which is a Mastercard and therefore works in the warehouse, and it still adds a 2.5 percent foreign markup. Confirm Rogers' Canadian-dollar base rate and any cap before you assume it beats 1 percent on the cart. PC World Elite is also a Mastercard and states 1 percent back in points on "everywhere else," which is the honest comparison for a warehouse that is not a Loblaw store: about the same 1 percent, in PC Optimum points instead of a Costco certificate.</p>
    </div>

    <div class="tip-box">
        <strong>Split the trip:</strong>
        <p>Warehouse and Costco gas: Mastercard. Costco.ca: Visa is accepted, so a Visa grocery or cash-back card can be better online if its rate beats 2 percent and the purchase is inside that card's cap. Do not use Cobalt in the building. The <a href="/blog/best-travel-rewards-cards-canada/">travel rewards guide</a> makes the same acceptance point for a different reason. If you are tempted to pay an annual fee for a richer base rate, run it through the <a href="/blog/credit-card-annual-fee-vs-no-fee-canada/">annual-fee test</a> on warehouse spend only.</p>
    </div>

    <h2>Frequently asked questions</h2>

    <h3>Does Costco Canada take Visa?</h3>
    <p>Not at the warehouse, on the payment list Costco published for Canadian warehouses. Costco.ca does list Visa. Gas stations list Mastercard, not Visa. Apple Pay at the warehouse still has to be a method Costco accepts, which means a Mastercard in that wallet, not a Visa riding Apple Pay.</p>

    <h3>Is the CIBC Costco card the highest earn rate inside the warehouse?</h3>
    <p>It is the card Costco and CIBC built for the membership, and the warehouse rate they publish is 1 percent. A different Mastercard with a higher base rate can win on merchandise. The 3 percent headline is restaurants and Costco gas. Run your own split before you collect a certificate for spend that another Mastercard pays as cash.</p>

    <h3>When do I receive the cash back?</h3>
    <p>CIBC says the certificate is issued once a year in January for the prior calendar year, to the primary cardholder, if the account is in good standing and the Costco membership is active on 31 December. It is not a monthly statement credit. Authorized users are not issued the certificate.</p>

    <h3>Can I use the certificate at the gas bar?</h3>
    <p>CIBC's benefits language says the certificate may not be used for gas, the food court, tobacco, and a list of other exclusions, and not at Costco.ca. Read the current benefits guide. A reward you can only spend inside the warehouse, on eligible merchandise, is still useful. It is not the same as cash in your chequing account.</p>

    <h3>Do I need a World Mastercard?</h3>
    <p>Only if you want that card's insurance and you meet $50,000 personal or $80,000 household income. The annual fee is $0 on both the Costco Mastercard and the Costco World Mastercard. Merchants can be charged more to accept a World card. That does not change your earn rate, but it is why some small merchants set a premium-card limit. Confirm whether the World earn table matches the regular card before you upgrade for a rate that may be identical.</p>

    <h3>What if I am not a Costco member?</h3>
    <p>You cannot hold the CIBC Costco card. The product page says it is exclusively for members. Any other Mastercard you already have will still pay at the warehouse at that card's base or category rate. Membership is a separate fee from the card. Do not buy a membership only to open the card.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="https://customerservice.costco.ca/app/answers/answer_view/a_id/1017193">Costco Canada: payment methods</a></li>
        <li><a href="https://www.cibc.com/en/personal-banking/credit-cards/costco-cards.html">CIBC Costco cards</a></li>
        <li><a href="https://www.cibc.com/en/personal-banking/credit-cards/all-credit-cards/costco-mastercard.html">CIBC Costco Mastercard</a></li>
        <li><a href="https://www.cibc.com/en/personal-banking/credit-cards/rewards-and-points.html">CIBC rewards footnote for Costco earn rates</a></li>
        <li><a href="https://www.pcfinancial.ca/en/credit-cards/world-elite/">PC World Elite Mastercard</a></li>
    </ul>

    ${footer('September 27, 2026')}

</div>`
  ),

  cardPost(
    'best-no-annual-fee-credit-cards-canada',
    'Best No-Annual-Fee Credit Cards in Canada for 2026',
    'As of September 2026, Tangerine, Simplii, PC Financials no-fee lineup, BMO CashBack, and Amex SimplyCash charge $0. The best one is the category you actually spend in.',
    `<div class="container">

    <div class="hook">
        The best no-annual-fee credit card in Canada in 2026 is the $0 card whose bonus category matches a bill you already pay. <span class="highlight">As of September 2026, Tangerine Money-Back, Simplii Cash Back Visa, the no-fee PC Mastercard lineup, BMO CashBack Mastercard, and American Express SimplyCash all publish a $0 annual fee.</span> A $120 or $139 card still wins if its extra earn, on spend you can place on it, is larger than the fee. That test is the point of a no-fee list: it is the hurdle, not a moral category.
    </div>

    <p>Start from <a href="/blog/best-credit-cards-canada/">best credit cards in Canada</a> if you are still choosing a profile. The arithmetic for paying a fee on purpose is the <a href="/blog/credit-card-annual-fee-vs-no-fee-canada/">annual-fee versus no-fee guide</a>. Groceries get their own page because the caps are the whole game. Cash-back structure, without this month's rates, is the <a href="/blog/best-cash-back-credit-cards-canada/">cash-back guide</a>.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>Tangerine Money-Back: $0. 2 percent in two categories, or three if the reward is deposited to a Tangerine Savings Account. 0.5 percent on everything else. Categories can be changed every 90 days.</li>
            <li>Simplii Cash Back Visa: $0, including up to three additional cards. 1.5 percent on gas, groceries, drugstore, and pre-authorized payments, up to $15,000 a year combined. The page markets up to 4 percent at restaurants. Not offered to Quebec residents, on Simplii's eligibility list. Household income $15,000.</li>
            <li>PC World Elite: $0, income $80,000 personal or $150,000 household. PC states 4.5 percent back in points at Shoppers Drug Mart and Pharmaprix, 3 percent at participating grocery stores and Joe Fresh, and 1 percent elsewhere.</li>
            <li>BMO CashBack Mastercard: no annual fee on BMO's page. 3 percent on grocery, up to $500 a statement period, then the 0.5 percent base. 1 percent on eligible recurring bills up to $500 a statement.</li>
            <li>Amex SimplyCash: positioned as a no-annual-fee card. 2 percent at stand-alone gas and grocery in Canada, up to $15,000 combined a year ($300), then 1.25 percent. 1.25 percent on other purchases.</li>
        </ul>
    </div>

    <h2>How do the $0 cards differ?</h2>

    <table>
        <caption>No-annual-fee cards, issuer terms as of September 2026</caption>
        <thead>
            <tr>
                <th>Card</th>
                <th>Fee</th>
                <th>The rate that matters</th>
                <th>Watch</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Tangerine Money-Back</td>
                <td>$0</td>
                <td>2 percent in up to three chosen categories. 0.5 percent elsewhere.</td>
                <td>The third category requires rewards paid to a Tangerine savings account. Wrong categories for 90 days is a quiet loss.</td>
            </tr>
            <tr>
                <td>Simplii Cash Back Visa</td>
                <td>$0</td>
                <td>1.5 percent on gas, groceries, drugstore, and pre-authorized payments, cap $15,000 a year.</td>
                <td>Excludes Quebec on the eligibility page. Cash back lands as an annual credit on the January statement, not monthly.</td>
            </tr>
            <tr>
                <td>PC Mastercard / World / World Elite</td>
                <td>$0</td>
                <td>World Elite: 3 percent in points at participating grocers, 4.5 percent at Shoppers. Base PC Mastercard: 1 percent, and 2.5 percent at Shoppers.</td>
                <td>You are approved for the tier that fits income and credit. Points are PC Optimum, redeemed in that ecosystem, not a bank deposit.</td>
            </tr>
            <tr>
                <td>BMO CashBack Mastercard</td>
                <td>$0</td>
                <td>3 percent grocery up to $500 per statement, MCC 5411 in Canada. 0.5 percent after that and on other purchases.</td>
                <td>The cap is a statement period, not a year. A $1,000 grocery month only gets 3 percent on the first $500.</td>
            </tr>
            <tr>
                <td>Amex SimplyCash</td>
                <td>$0</td>
                <td>2 percent stand-alone gas and grocery, $15,000 combined cap, then 1.25 percent. 1.25 percent base.</td>
                <td>Amex acceptance. Wholesale clubs and superstores are excluded from the 2 percent grocery rate.</td>
            </tr>
            <tr>
                <td>CIBC Costco Mastercard</td>
                <td>$0</td>
                <td>1 percent in the warehouse. Higher on gas, restaurants, and Costco.ca.</td>
                <td>Members only. Certificate redemption. See the Costco guide.</td>
            </tr>
            <tr>
                <td>Rogers Red World Elite Mastercard</td>
                <td>$0</td>
                <td>Rogers markets up to 3 percent cash back value for Rogers customers, and 3 percent on US-dollar purchases.</td>
                <td>Income $80,000 personal or $150,000 household. Foreign currency still includes a 2.5 percent markup in the disclosure. Confirm the Canadian base rate.</td>
            </tr>
        </tbody>
    </table>

    <h2>When does a fee card beat all of these?</h2>

    <div class="example-box">
        <strong>Example: Elise in Quebec City, $12,000 of coded grocery</strong>
        <p>Elise's grocer codes as Visa grocery (MCC 5411) and does not take American Express. Simplii is off the table because Simplii's page excludes Quebec. Tangerine at 2 percent on groceries, if she selects that category, returns $240 and costs $0. BMO's 3 percent applies to $500 a statement. On $1,000 a month she earns 3 percent on $6,000 ($180) and 0.5 percent on the other $6,000 ($30), which is $210, still $0. Scotia Momentum Visa Infinite pays 4 percent on grocery and costs $120. On $12,000 that is $480 minus $120, or $360, if the $25,000 accelerated cap is not already used by recurring bills. Against Tangerine's $240, Momentum is ahead by $120 in this illustration. Against a household whose grocery spend is $4,000, Momentum's 4 percent is $160 minus the $120 fee, or $40, and Tangerine's 2 percent is $80 with no fee. The fee card loses. Same card, different winner. The grocery guide walks the caps. The fee guide is the general form of this subtraction.</p>
    </div>

    <div class="warning-box">
        <strong>No annual fee is not no interest:</strong>
        <p>Simplii publishes 21.99 percent on purchases. A month of interest on a carried balance is larger than a year of 2 percent cash back. The <a href="/blog/credit-card-utilization-applications-credit-score-canada/">utilization guide</a> is the other reason a drawer full of $0 cards is not free: unused credit can help a ratio, and a pile of new applications does not.</p>
    </div>

    <h2>Frequently asked questions</h2>

    <h3>What is the best no-annual-fee credit card in Canada for 2026?</h3>
    <p>For a household that will pick categories and keep them current, Tangerine's 2 percent in two or three categories is the flexible $0 option. For Loblaw and Shoppers spend, PC World Elite's published 3 percent and 4.5 percent in points is stronger if you meet the income test and you redeem PC Optimum. For a hard grocery cap without a fee, BMO's 3 percent on the first $500 a statement is the published rate. None of these is best at Costco's warehouse or on a foreign-currency trip.</p>

    <h3>Is a no-fee card always better than Cobalt?</h3>
    <p>No. Cobalt costs $191.88 and earns 5 points per dollar on eligible food. On enough of that spend, the points can clear the fee against a 1 or 2 percent no-fee card. On spend Amex cannot touch, Cobalt is a fee for nothing. Compare them on the Cobalt review's break-even, not on the slogan.</p>

    <h3>Do no-fee cards include travel insurance?</h3>
    <p>Some do, in a thinner form, and some sell it as an extra. Simplii's page points to optional CIBC travel medical, which is not included coverage. Do not skip a travel-medical plan because a $0 card exists. Read the certificate. Insurance you do not have is not a saving.</p>

    <h3>Why does Simplii say "up to 4 percent" at restaurants?</h3>
    <p>That is the wording on Simplii's page, including the "up to." The grocery, gas, drugstore, and pre-authorized rate is stated as 1.5 percent with a $15,000 annual cap. Treat "up to 4 percent" as a claim to verify in the footnote on the day you apply, not as a rate this article will pretend is unconditional.</p>

    <h3>Can I hold more than one no-fee card?</h3>
    <p>Yes. A common pair is a category card for groceries and a flat card for everything else, which is the stack in the cash-back guide. Each application is still an inquiry. If you are about to apply for a mortgage, stop opening cards. The utilization guide is the timing rule.</p>

    <h3>Are rewards on a no-fee card paid in cash?</h3>
    <p>Not always. Tangerine can deposit to a savings account or the card. Simplii pays an annual statement credit in January. PC pays PC Optimum points. CIBC Costco pays a warehouse certificate. "Cash back" in the headline is not the same as a transfer to your chequing account this month.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="https://www.tangerine.ca/en/personal/spend/credit-cards/money-back-credit-card">Tangerine Money-Back Credit Card</a></li>
        <li><a href="https://www.simplii.com/en/credit-cards/cash-back-visa.html">Simplii Financial Cash Back Visa</a></li>
        <li><a href="https://www.pcfinancial.ca/en/credit-cards/pc-mastercard/">PC Mastercard lineup</a> and <a href="https://www.pcfinancial.ca/en/credit-cards/world-elite/">PC World Elite</a></li>
        <li><a href="https://www.bmo.com/main/personal/credit-cards/bmo-cashback-mastercard/">BMO CashBack Mastercard</a></li>
        <li><a href="https://www.americanexpress.com/en-ca/benefits/simplycash-card/">SimplyCash from American Express</a></li>
    </ul>

    ${footer('September 27, 2026')}

</div>`
  ),

  cardPost(
    'best-grocery-credit-cards-canada',
    'Best Credit Cards for Groceries in Canada (2026)',
    'As of September 2026, Cobalt earns 5 points per dollar on stand-alone groceries, Scotia Momentum earns 4 percent at Visa grocery merchants, and PC World Elite states 3 percent in points at participating stores.',
    `<div class="container">

    <div class="hook">
        The best grocery credit card in Canada in 2026 is the one your store will accept and code as grocery. <span class="highlight">As of September 2026, Amex Cobalt earns 5 points per dollar at stand-alone grocers, Scotia Momentum Visa Infinite earns 4 percent at Visa grocery merchants, and PC World Elite states 3 percent back in points at participating grocery stores with a $0 fee.</span> Costco and many Walmart and Superstore taps miss those rates. The cap, not the headline, is what you should multiply.
    </div>

    <p>This page hangs off <a href="/blog/best-credit-cards-canada/">best credit cards in Canada</a>. Cobalt's fee and monthly cap are the <a href="/blog/amex-cobalt-review-canada/">Cobalt review</a>. The $0 alternatives are the <a href="/blog/best-no-annual-fee-credit-cards-canada/">no-annual-fee guide</a>. Warehouse math is the <a href="/blog/best-credit-card-for-costco-canada/">Costco guide</a>, because a grocery accelerator that is declined at the door earns zero. Category strategy without this month's percentages is the <a href="/blog/best-cash-back-credit-cards-canada/">cash-back guide</a>.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>Cobalt: 5 points per $1 at stand-alone grocery stores in Canada, inside a $2,500 monthly cap shared with restaurants and food delivery. Fee $191.88 a year.</li>
            <li>Scotia Momentum Visa Infinite: $120. 4 percent at merchants Visa codes as grocery stores and supermarkets (MCC 5411) and on recurring bill payments. Scotiabank's terms say the 4 percent and 2 percent rates each have a $25,000 annual spend limit.</li>
            <li>Amex SimplyCash Preferred: 4 percent at stand-alone gas and grocery, up to $30,000 combined a year ($1,200 of cash back), then 2 percent. It has an annual fee. The dollar fee was not a stable figure on the page reviewed, so it is not quoted here. Confirm it before you compare.</li>
            <li>PC World Elite: $0 fee if you are approved, income $80,000 or $150,000 household. 3 percent back in points at participating grocery stores. 4.5 percent at Shoppers and Pharmaprix.</li>
            <li>BMO CashBack: $0. 3 percent grocery up to $500 per statement, then 0.5 percent. Convenience stores, bakeries, and many general-merchandise stores are excluded.</li>
        </ul>
    </div>

    <h2>Which grocery rate survives your store?</h2>

    <table>
        <caption>Grocery earn rates as of September 2026, and where they fail</caption>
        <thead>
            <tr>
                <th>Card</th>
                <th>Grocery rate</th>
                <th>Fee</th>
                <th>Fails when</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Amex Cobalt</td>
                <td>5 points per $1</td>
                <td>$191.88 a year</td>
                <td>Store refuses Amex, is a superstore or warehouse, or the month exceeds $2,500 of combined 5x spend.</td>
            </tr>
            <tr>
                <td>Scotia Momentum Visa Infinite</td>
                <td>4 percent</td>
                <td>$120, plus $50 per additional card</td>
                <td>Merchant is not MCC 5411. The accelerated cap is used up. You do not meet Visa Infinite income. Confirm Scotia's current income line on the application.</td>
            </tr>
            <tr>
                <td>SimplyCash Preferred</td>
                <td>4 percent, then 2 percent</td>
                <td>Annual fee: confirm on Amex's page</td>
                <td>Not a stand-alone grocer. Combined gas and grocery cap of $30,000. Amex not accepted.</td>
            </tr>
            <tr>
                <td>PC World Elite</td>
                <td>3 percent back in points at participating grocers</td>
                <td>$0</td>
                <td>The store is not a participating Loblaw banner. You wanted cash, not PC Optimum. Income test is missed and you are issued a lower tier at a lower rate.</td>
            </tr>
            <tr>
                <td>Tangerine Money-Back</td>
                <td>2 percent if groceries is a selected category</td>
                <td>$0</td>
                <td>You forgot to select the category, or you only have two slots and groceries is not one of them.</td>
            </tr>
            <tr>
                <td>Simplii Cash Back Visa</td>
                <td>1.5 percent</td>
                <td>$0</td>
                <td>The $15,000 combined cap with gas, drugstore, and pre-authorized payments is already gone. You live in Quebec, where Simplii says the card is not offered.</td>
            </tr>
            <tr>
                <td>BMO CashBack Mastercard</td>
                <td>3 percent up to $500 a statement</td>
                <td>$0</td>
                <td>The month's grocery bill is larger than $500, or the store is not MCC 5411.</td>
            </tr>
            <tr>
                <td>Scotiabank Gold American Express</td>
                <td>6 Scene+ points per $1 at listed banners; 5 at other grocery</td>
                <td>$120</td>
                <td>Amex is declined. The 6-point list is Empire banners (Sobeys, IGA, Safeway, Foodland, FreshCo, and the others Scotiabank names), not every grocer in town.</td>
            </tr>
        </tbody>
    </table>

    <p>Scene+ points are not cash back. PC's "percent back in points" is PC Financial's description of PC Optimum value, not an independent cheque. Price both in the <a href="/blog/credit-card-points-valuations-aeroplan-avion-amex-canada/">valuation guide</a> before you rank them against a 4 percent cash card.</p>

    <h2>How do the caps change a $1,000 grocery month?</h2>

    <div class="example-box">
        <strong>Example: Andre in London, Ontario, $1,000 a month at one store</strong>
        <p>The store takes Visa and Mastercard and codes as a grocery store. It does not take American Express. Cobalt earns nothing here, fee or no fee. Scotia Momentum at 4 percent earns $40 that month, $480 a year, then subtract the $120 fee: $360, if recurring bills have not already eaten the accelerated cap. BMO earns 3 percent on $500 ($15) and 0.5 percent on the other $500 ($2.50), so $17.50 a month, $210 a year, fee $0. Tangerine at 2 percent earns $20 a month, $240 a year, fee $0. Momentum beats Tangerine by $120 a year in this picture and beats BMO by $150. Move the same $1,000 to a Superstore that refuses Amex and does not code as MCC 5411, and Momentum's 4 percent disappears too. He is then on the base rate, and a PC World Elite card at a participating Loblaw banner — 3 percent in points on $12,000, which PC describes as 3 percent back, fee $0 — can be the better Loblaw tool. The store decides. The ranking does not.</p>
    </div>

    <h3>What about the $2,500 Cobalt cap on a big household?</h3>

    <p>Two adults spending $1,800 on eligible Amex groceries and $900 on restaurants have already passed $2,500 in that month. Only $2,500 earns 5 points (12,500 points). The other $200 earns 1 point. Annualized without the cap, people imagine 5 points on $32,400, which is 162,000 points. With the cap binding every month, the 5x portion maxes at $2,500 times 12, which is $30,000 and 150,000 points, and the overflow earns 1 point. The fee is still $191.88. If that overflow is large, a second card on the overflow — Momentum, PC, or a no-fee 2 percent category — is the stack, not a second Cobalt on the same account. The account cap is shared.</p>

    <div class="tip-box">
        <strong>Recurring bills can crowd out groceries:</strong>
        <p>Momentum's 4 percent also covers recurring bill payments. If the terms cap accelerated grocery and the 4 percent rate is shared with bills, a year of insurance and phone bills can push groceries down to 1 percent. Scotiabank's terms page says the 4 percent and 2 percent categories each have their own $25,000 limit. The marketing page compresses grocery and recurring into one sentence. Read the terms in your welcome kit before you model $25,000 of groceries on top of $25,000 of bills. The subtraction itself is the <a href="/blog/credit-card-annual-fee-vs-no-fee-canada/">annual-fee test</a>.</p>
    </div>

    <h2>Frequently asked questions</h2>

    <h3>What is the best credit card for groceries in Canada in 2026?</h3>
    <p>At a stand-alone grocer that takes American Express, Cobalt's 5 points per dollar is the highest published accelerator, inside $2,500 a month. At a Visa grocery merchant, Scotia Momentum's 4 percent cash back is the clean dollar comparison, after the $120 fee. At a participating Loblaw store, PC World Elite's 3 percent in points at a $0 fee is the card built for that banner. At Costco, none of those grocery rates apply. Use a Mastercard.</p>

    <h3>Does Walmart or Superstore count as grocery?</h3>
    <p>Often no. Issuers pay the bonus when the network's merchant category is grocery, typically MCC 5411, or when the store is on a named list. Superstores, warehouse clubs, and general-merchandise retailers are named exclusions on Amex's grocery language. Visa and Mastercard can code the same building differently from the sign on the door. If the bonus does not post, the code is the reason. Call the issuer with the transaction if you need the code confirmed.</p>

    <h3>Is 4 percent cash back better than 5 points?</h3>
    <p>Only after you value the point. Four percent is $4 on $100. Five points is five points. At an illustrative 1 cent, five points are 5 percent, which beats 4 percent before fees. At half a cent, five points are 2.5 percent, which loses to 4 percent cash. Cobalt's fee is also higher than Momentum's by $71.88 a year. Do the subtraction on your spend. Do not borrow a blog's cents-per-point.</p>

    <h3>How much grocery spend covers the Momentum fee?</h3>
    <p>Against a 2 percent no-fee card, Momentum's extra 2 percentage points on MCC 5411 spend have to cover $120. That is $120 divided by 0.02, or $6,000 of grocery spend that actually earns 4 percent. Against a 0.5 percent base card the gap is wider and the break-even spend is lower. If recurring bills are already earning 4 percent and eating the cap, this grocery math does not apply to the overflow.</p>

    <h3>Should I put gas on the grocery card?</h3>
    <p>Only if gas is in that card's bonus list. Momentum publishes 2 percent on gas, transit, and food delivery, separate from the 4 percent grocery rate, with its own cap in the terms. Cobalt publishes 2 points at stand-alone gas stations, not at a grocery store's fuel desk if that desk is coded as something else. A gas accelerator that misses the station is the same mistake as a grocery accelerator that misses the store.</p>

    <h3>Do grocery rewards change my taxes?</h3>
    <p>Personal points and cash back on household groceries are a rebate on spending, not a deduction, and not income you should invent a slip for. Business groceries are a bookkeeping question. The business-card guide is the separation. This is not tax advice.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="https://www.americanexpress.com/ca/en/benefits/cobalt-card/">American Express Cobalt</a></li>
        <li><a href="https://www.scotiabank.com/ca/en/personal/credit-cards/visa/momentum-infinite-card.html">Scotia Momentum Visa Infinite</a></li>
        <li><a href="https://www.scotiabank.com/ca/en/personal/credit-cards/visa/momentum-infinite-card/welcome-kit/terms-conditions-momentum-infinite.html">Scotia Momentum cash-back terms</a></li>
        <li><a href="https://www.americanexpress.com/en-ca/benefits/simplycashpreferred-card/">SimplyCash Preferred</a></li>
        <li><a href="https://www.pcfinancial.ca/en/credit-cards/world-elite/">PC World Elite</a></li>
        <li><a href="https://www.bmo.com/main/personal/credit-cards/bmo-cashback-mastercard/">BMO CashBack Mastercard</a></li>
        <li><a href="https://www.scotiabank.com/ca/en/personal/credit-cards/american-express/gold-card.html">Scotiabank Gold American Express</a></li>
    </ul>

    ${footer('September 27, 2026')}

</div>`
  ),

  cardPost(
    'credit-card-travel-insurance-canada',
    'Credit Card Travel Insurance in Canada: What Card Coverage Actually Pays',
    'Card travel insurance is a certificate with a day cap and an age cap. As of September 2026, TD Aeroplan Visa Infinite Privilege states 31 days and $5 million; Amex Platinum states 15 days and $5 million under age 65.',
    `<div class="container">

    <div class="hook">
        Credit-card travel medical coverage in Canada is not a blank cheque for the whole trip. As of September 2026, TD’s Aeroplan Visa Infinite Privilege page states up to <span class="highlight">$5 million for the first 31 days</span>, and 4 days if you or your spouse is 65 or older. The Platinum Card from American Express states up to $5 million for the first 15 consecutive days, and it describes that medical benefit for cardmembers under 65. A longer trip needs a top-up or a separate policy.
    </div>

    <p>This spoke sits under <a href="/blog/best-credit-cards-canada/">best credit cards in Canada</a>. The standalone product, and why a provincial health plan is not the ceiling, is <a href="/blog/travel-medical-insurance-canada/">travel medical insurance</a>. The three premium cards people confuse with a full policy are compared in <a href="/blog/premium-credit-cards-canada-comparison/">premium credit cards</a>. None of this is a certificate. Read the one in your welcome kit before you fly.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>Emergency medical, trip cancellation, trip interruption, and baggage are different benefits with different caps.</li>
            <li>Age and trip length cut the medical benefit off even when the dollar limit looks enormous. A $5 million cap that lasts 15 days does not cover day 16.</li>
            <li>Figures below are from issuer pages and TD benefit guides reviewed in September 2026. If a cell is not a number, that page did not state one clearly enough to quote.</li>
            <li>A card benefit is not a substitute for reading the stability rules on a pre-existing condition. Those rules live in the certificate, and this page does not restate them from memory.</li>
            <li>Paying with the card is often a condition of the trip benefits. Medical coverage can apply to the cardholder and family members named in the certificate even when the flight was not bought on the card. Confirm which one you have.</li>
        </ul>
    </div>

    <h2>What does the card actually pay?</h2>

    <p>Marketing tiles say “travel insurance.” The certificate says who, for how many days, for which dollars, and which conditions are excluded. The table uses the issuer’s own words where a number was on the page. It is not a ranking, and it is not every Canadian card.</p>

    <table>
        <caption>Card travel benefits as stated by the issuer, reviewed September 2026</caption>
        <thead>
            <tr>
                <th>Card and source</th>
                <th>Emergency medical</th>
                <th>Cancellation and interruption</th>
                <th>Other trip benefits the page stated</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>TD Aeroplan Visa Infinite Privilege. Product page, and the privilege benefit-coverages guide for the day count.</td>
                <td>Up to $5 million for the first 31 days. If you or your spouse is 65 or older, the product page says the first 4 days. The certificate says 31 consecutive days at 64 and under, and 4 consecutive days at 65 or older.</td>
                <td>Cancellation up to $2,500 per insured person, maximum $5,000 for all insured persons. Interruption up to $5,000 per insured person, maximum $25,000 for all insured persons on the same trip.</td>
                <td>Flight or trip delay more than 4 hours, up to $1,000. Delayed baggage over 4 hours, up to $1,000. Lost baggage up to $2,500 per insured person. Common-carrier accident up to $500,000. Auto rental collision or loss damage up to 48 consecutive days. Hotel or motel burglary up to $2,500.</td>
            </tr>
            <tr>
                <td>TD Aeroplan Visa Infinite. Benefit-coverages guide for the day count. The $2 million figure is on TD’s Quebec product page, not in the certificate excerpt reviewed here.</td>
                <td>The guide covers the first 21 consecutive days if you are 64 or under, and the first 4 consecutive days if you are 65 or older. TD’s Quebec product page states up to $2 million for the first 21 days, and 4 days if you or your spouse is 65 or older. Confirm the dollar cap on the certificate for your province.</td>
                <td>On the Quebec product page: cancellation up to $1,500 per insured person, maximum $5,000 for everyone. Interruption up to $5,000 per insured person, maximum $25,000.</td>
                <td>The guide says you can ask the administrator, at 1-866-374-1129, to extend coverage if the trip is longer than 21 days or 4 days. Top-up terms are the administrator’s, not this page’s.</td>
            </tr>
            <tr>
                <td>The Platinum Card from American Express. Product page.</td>
                <td>Up to $5,000,000 for eligible emergency medical expenses if you are under 65, for the first 15 consecutive days outside your province or territory. The page labels the benefit “for under age 65” and, in the section reviewed, does not state a day count for cardmembers 65 or older.</td>
                <td>Cancellation up to $2,500 per insured person, maximum $5,000 combined. Interruption up to $2,500 per insured person, maximum $6,000 combined.</td>
                <td>Flight delay of 4 hours or more, up to $1,000 combined with baggage-delay insurance. Baggage delay of 6 hours or more, same combined $1,000. Lost or stolen baggage up to $1,000 per trip for all insured persons combined. Car rental theft and damage on a vehicle with an MSRP up to $85,000, rentals of 48 days or less, if you charge the full rental and decline the rental company’s waiver. Travel accident insurance up to $500,000. Foreign-currency conversion commission 2.5 percent, stated in the page’s own FAQ.</td>
            </tr>
            <tr>
                <td>American Express Aeroplan cards. Amex’s compare-cards page. Column amounts are quoted only where the table printed a number for that card.</td>
                <td>The insurance section describes coverage up to $5,000,000 if you are under 65, for the first 15 consecutive days. The public table did not print a separate dollar cap in each card’s column. Treat that sentence as the page’s description, then read the certificate for the card you hold.</td>
                <td>The same section describes cancellation up to $1,500 per insured person, maximum $3,000 combined, and interruption up to $1,500 per insured person, maximum $6,000 combined. Those figures sit in the row description, not in a per-card column.</td>
                <td>Flight delay: up to $500 on the Aeroplan Card, up to $1,000 on the Aeroplan Reserve and the Business Reserve. Lost or stolen baggage: $500, $1,000, and $1,000 in that same column order. The car-rental row describes an MSRP up to $85,000 and rentals of 48 days or less, and it says to decline the rental company’s damage waiver.</td>
            </tr>
        </tbody>
    </table>

    <p>Table as of September 2026. Amex marks every insurance line as subject to the certificate. TD says the same and points cardholders at a travel-insurance verification tool. A blog table is the map. The certificate is the contract. Cobalt’s medical terms are not in this table because this review did not open a Cobalt certificate that stated a day count and a dollar cap clearly enough to quote. If Cobalt is the card in your wallet, open its certificate. Do not borrow the Platinum row.</p>

    <h2>Which trips make a card benefit the wrong product?</h2>

    <div class="example-box">
        <strong>Illustration: a 20-day trip at age 62, on the pages above</strong>
        <p>Privilege’s 31-day window still covers day 20. Infinite’s 21-day window still covers day 20 and stops the next day. Platinum’s 15-day window has already stopped. None of that math is a claim approval. A pre-existing condition that fails the certificate’s stability test can void the medical benefit on day one. The illustration only shows the day counts the issuers printed.</p>
    </div>

    <div class="warning-box">
        <strong>The dollar limit is the part people quote. The day count is the part that pays.</strong>
        <p>$5 million and 15 days is a short policy with a large ceiling. A hospital stay that starts on day 16 is outside the window the Platinum page describes. TD’s guides tell you to buy the extra days from the administrator before you are past the cap. Buying them after you are already sick is a different product, and it may not be offered.</p>
    </div>

    <p>Trip cancellation pays non-refundable prepaid arrangements if you cancel for a covered reason. It does not pay because you changed your mind. Interruption pays when a covered reason cuts the trip short. Baggage delay pays for essentials after a stated number of hours, and on the Platinum page that cap is combined with the flight-delay cap, so you do not get $1,000 twice. Auto rental coverage, where the page states it, requires you to charge the rental and decline the agency’s waiver. Accepting the waiver and also expecting the card to pay is how claims get refused.</p>

    <p>The annual fee is the price of the whole card, not a premium you can compare one-for-one with a standalone medical policy unless you would have paid that fee anyway. Run the fee through the <a href="/blog/credit-card-rewards-calculator/">rewards calculator</a> with the earn rates you copied from the issuer, and decide whether the certificate is a reason to keep the card or a reason to buy a policy and a cheaper card. The fee test is <a href="/blog/credit-card-annual-fee-vs-no-fee-canada/">annual fee versus no fee</a>.</p>

    <h2>Frequently asked questions</h2>

    <h3>Does my provincial health plan cover me outside Canada?</h3>
    <p>Not in any way you should plan a hospital around. The travel-medical guide on this site is the longer version: provincial coverage outside Canada is limited, and the policy or the certificate is the plan. This page does not quote a provincial per-diem. Those rates move. Check the ministry page for the year you travel.</p>

    <h3>I am 66. Which row applies?</h3>
    <p>On the TD pages reviewed, 65 is the cut. Privilege’s product page says 4 days if you or your spouse is 65 or older, against 31 days otherwise. Infinite’s guide says 4 days at 65 or older, against 21 days at 64 or under. Platinum’s medical sentence is written for cardmembers under 65. Do not assume the under-65 day count still applies. Open the certificate, and price a standalone policy for the rest of the trip.</p>

    <h3>Do I have to charge the flight to the card?</h3>
    <p>For several trip benefits, yes. Platinum’s flight-delay, baggage, and travel-accident lines say the tickets have to be charged to the card. The car-rental line says the full rental has to be charged to the card. Medical eligibility is defined in the certificate and is not the same sentence. Read the “who is insured” section instead of assuming the medical benefit follows the ticket.</p>

    <h3>Is a $5 million limit better than a $2 million limit?</h3>
    <p>Only inside the days you are actually covered, and only for expenses the certificate calls eligible. A larger ceiling does not fix a 4-day window, a stability exclusion, or a trip that started before the coverage period. Compare the day count and the exclusion list first. Compare the dollar cap second.</p>

    <h3>Can I rely on this table at the airport?</h3>
    <p>No. Issuers change certificates without updating a blog. TD tells you to use its verification tool. Amex tells you to read the certificate, and Quebec residents to read the insurance summary. If the trip is the expensive one, get the day count in writing from the certificate in force on your departure date.</p>

    <h3>What if the card is in my spouse’s name?</h3>
    <p>Coverage often follows the insured person defined in the certificate, which may include a spouse and dependent children, and it may not include a travelling companion who is neither. The Privilege page talks about you and your spouse for the age test. It does not, in the sentences quoted here, insure an unrelated friend. Check the definition before you split a booking.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="https://www.td.com/ca/en/personal-banking/products/credit-cards/aeroplan/aeroplan-visa-infinite-privilege-card">TD Aeroplan Visa Infinite Privilege</a></li>
        <li><a href="https://www.td.com/content/dam/tdct/document/pdf/personal-banking/12281-1a-ap-infpriv-roc-e-03-a1.pdf">TD Aeroplan Visa Infinite Privilege benefit coverages guide (PDF)</a></li>
        <li><a href="https://www.td.com/content/dam/tdct/document/pdf/personal-banking/credit-cards/welcome-guide/aeroplaninfinite-bcg-en.pdf">TD Aeroplan Visa Infinite benefit coverages guide (PDF)</a></li>
        <li><a href="https://www.td.com/ca/en/personal-banking/products/credit-cards/aeroplan/aeroplan-visa-infinite-card/quebec">TD Aeroplan Visa Infinite, Quebec product page</a></li>
        <li><a href="https://www.americanexpress.com/en-ca/charge-cards/the-platinum-card/">The Platinum Card, American Express Canada</a></li>
        <li><a href="https://www.americanexpress.com/ca/en/credit-cards/aeroplan-cards/compare-cards/">American Express: compare Aeroplan cards</a></li>
        <li><a href="/blog/travel-medical-insurance-canada/">Travel medical insurance</a></li>
    </ul>

    <div class="cta-section">
        <p><strong>The certificate is the product. The metal card is the packaging.</strong></p>
        <p>If you would have bought a policy anyway, do not count the card’s medical line as a reason to pay a premium fee. The tax side of a year of travel and work is the 2026 tax guide.</p>
        <a href="/ebooks/tax-guide/" class="cta-button">Get the 2026 Tax Guide — $49 CAD</a>
    </div>

    ${footer('September 27, 2026')}

</div>`
  ),

  cardPost(
    'aeroplan-points-guide-canada',
    'Aeroplan Points Guide: Earning, Transfer Partners, and Redemptions',
    'Aeroplan points are Air Canada currency. As of September 2026, Amex Membership Rewards Canada transfers at 1,000 points to 1,000 Aeroplan.',
    `<div class="container">

    <div class="hook">
        An Aeroplan point is worth the cash you do not spend on a seat you would actually buy, divided by the points that seat costs. There is no stable cents-per-point on Air Canada’s site, and this guide will not invent one. What you can look up is how points are earned and which partner programs convert into Aeroplan, including American Express Membership Rewards Canada at <span class="highlight">1,000 points to 1,000 Aeroplan points</span>, minimum 1,000.
    </div>

    <p>The card hub is <a href="/blog/best-credit-cards-canada/">best credit cards in Canada</a>. The co-brand lineup is <a href="/blog/best-aeroplan-credit-cards-canada/">best Aeroplan credit cards</a>. Pricing a redemption you have already found is the <a href="/blog/credit-card-points-valuations-aeroplan-avion-amex-canada/">points valuation guide</a>. Running earn rates you typed yourself is the <a href="/blog/credit-card-rewards-calculator/">rewards calculator</a>. The premium co-brands are in <a href="/blog/premium-credit-cards-canada-comparison/">the premium comparison</a>.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>Do not stockpile points against a blog’s “sweet spot.” Dynamic pricing means the only value is the cash price of the trip you would take.</li>
            <li>Aeroplan’s Canada conversion page, retrieved September 27, 2026, lists hotel programs and several non-Canadian banks. The Canada American Express block, at 1,000 to 1,000 with a 1,000-point minimum, was on Aeroplan’s US-English conversion page in the same review. Confirm which page you are shown.</li>
            <li>Marriott Bonvoy converts at 3 points to 1 Aeroplan point, minimum 3,000, plus 5,000 Aeroplan points when you convert at least 60,000. World of Hyatt converts at 2 points to 1, minimum 5,000.</li>
            <li>Amex’s Aeroplan compare page lists the Reserve card at $599, earning 3 points per dollar on Air Canada and Air Canada Vacations. TD’s Infinite Privilege page lists $599, with 2 points per dollar on Air Canada, and an income test of $150,000 personal or $200,000 household.</li>
            <li>Aeroplan’s own page says you have 18 months to keep points from expiring by earning or redeeming. A co-brand page can say points do not expire while you hold that card in good standing. Both can be true. Read both.</li>
        </ul>
    </div>

    <h2>How do you earn Aeroplan points in Canada?</h2>

    <p>You earn them by flying Air Canada and partners, by spending on a co-brand card, by converting another program, and by the retail partners Aeroplan lists. This page quotes the card earn rates that were on issuer pages in September 2026. It does not quote a flight-earning chart, because that chart was not the page under review. Check aircanada.com for the accrual on the fare you buy.</p>

    <table>
        <caption>Co-brand earn rates and fees stated by the issuer, September 2026. Not a complete Aeroplan card list.</caption>
        <thead>
            <tr>
                <th>Card</th>
                <th>Annual fee</th>
                <th>Earn rate the page stated</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>American Express Aeroplan Card</td>
                <td>$120. Additional Aeroplan card $50. Additional no-fee card $0.</td>
                <td>2 points per dollar on Air Canada and Air Canada Vacations. 1.5 on eligible dining and food delivery in Canada. 1 on everything else. Amex’s compare page also lists 1.5 at participating Hyatt hotels.</td>
            </tr>
            <tr>
                <td>American Express Aeroplan Reserve</td>
                <td>$599. Additional Reserve card $199, or $0 for a no-fee additional card.</td>
                <td>3 points per dollar on Air Canada and Air Canada Vacations. 2 on eligible dining and food delivery in Canada. 2 at participating Hyatt. 1.25 on everything else.</td>
            </tr>
            <tr>
                <td>TD Aeroplan Visa Infinite Privilege</td>
                <td>$599. Additional cardholder $199. Income $150,000 personal or $200,000 household.</td>
                <td>2 points per dollar on Air Canada, including Air Canada Vacations. 2 at participating Hyatt. 1.5 on eligible gas, EV charging, groceries, travel, transit, and dining. 1.25 on other purchases. Purchase interest on the page: 21.99 percent. Cash advances: 22.99 percent.</td>
            </tr>
        </tbody>
    </table>

    <p>Welcome bonuses are extra and they expire as offers. On the Amex compare page in this review, a new Aeroplan Card cardmember could earn 35,000 points after $7,500 in the first 6 months and 10,000 more after $1,000 in month 13. A new Reserve cardmember could earn 60,000 after $7,500 in the first 3 months and 25,000 more after $2,500 in month 13. Amex says current or former cardmembers with that card are not eligible. TD’s Privilege page listed 20,000 points on the first purchase, 30,000 after $12,000 in 180 days, and 50,000 after $24,000 in the first 12 months. TD also describes the package as “up to $3,300 in value.” That dollar figure is TD’s, not an independent valuation. Offers move. Read the application.</p>

    <p>The $120 Aeroplan card is labelled a charge card on Amex’s compare page, and the Reserve card is labelled a credit card. The footnotes on that page define the difference. Do not assume a charge card lets you carry a purchase balance the way a credit card does.</p>

    <h2>Which programs convert into Aeroplan?</h2>

    <p>Aeroplan’s Canada conversion page is the list that matters for a Canadian account. Retrieved on September 27, 2026, that page included the hotel and bank ratios below. It did not, in the copy returned for that URL, include an American Express Canada block. Aeroplan’s US-English conversion page did include “American Express Membership Rewards – Canada,” at 1,000 Membership Rewards points to 1,000 Aeroplan points, in increments of 100, minimum 1,000 per transfer, and it said transferred points cannot move back. If the block is missing when you open the Canada URL, do not transfer until the ratio is on the screen in front of you. Select-tier and some other Membership Rewards tiers are called out as ineligible on that US-English page. Read the sentence before you move Cobalt points. Cobalt’s own earn rate is not restated here. It is on the <a href="/blog/amex-cobalt-review-canada/">Cobalt review</a>, and it still has to match the issuer page that day.</p>

    <table>
        <caption>Conversion ratios on Aeroplan’s Canada conversion page, retrieved September 27, 2026</caption>
        <thead>
            <tr>
                <th>Program</th>
                <th>Ratio stated</th>
                <th>Minimum the page stated</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Marriott Bonvoy</td>
                <td>3 Bonvoy points = 1 Aeroplan point, plus 5,000 Aeroplan points when you convert at least 60,000 Bonvoy points</td>
                <td>3,000 Bonvoy points</td>
            </tr>
            <tr>
                <td>World of Hyatt</td>
                <td>2 Hyatt points = 1 Aeroplan point</td>
                <td>5,000, then increments of 1,250</td>
            </tr>
            <tr>
                <td>Hilton Honors</td>
                <td>10,000 Hilton points = 1,000 Aeroplan points</td>
                <td>10,000</td>
            </tr>
            <tr>
                <td>IHG One Rewards</td>
                <td>5 IHG points = 1 Aeroplan point</td>
                <td>10,000, in increments of 10,000</td>
            </tr>
            <tr>
                <td>Accor Live Limitless</td>
                <td>2 ALL points = 1 Aeroplan point</td>
                <td>Increments of 4,000</td>
            </tr>
            <tr>
                <td>Choice Privileges</td>
                <td>5 Choice points = 1 Aeroplan point</td>
                <td>See the page</td>
            </tr>
            <tr>
                <td>Wyndham Rewards</td>
                <td>5 Wyndham points = 1 Aeroplan point</td>
                <td>6,000</td>
            </tr>
            <tr>
                <td>Best Western Rewards</td>
                <td>5 Best Western points = 1 Aeroplan point</td>
                <td>See the page</td>
            </tr>
            <tr>
                <td>Coast Rewards</td>
                <td>1 Coast point = 1 Aeroplan point</td>
                <td>1,000</td>
            </tr>
            <tr>
                <td>Shangri-La Golden Circle</td>
                <td>1 Golden Circle point = 1 Aeroplan point</td>
                <td>2,500, in increments of 500</td>
            </tr>
        </tbody>
    </table>

    <p>The same Canada page also lists US and overseas bank programs, including Chase Ultimate Rewards at 1,000 to 1,000 and Capital One miles at 1,000 to 1,000, with eligibility rules that point at US-issued cards. A Canadian-issued card does not get those transfers just because the logo is familiar. Hotel points usually convert at a loss against using them for a room. Convert them when the flight you want is the better use, not because a ratio looks round.</p>

    <h2>How do you redeem without a fake sweet spot?</h2>

    <p>TD’s Privilege page says every Air Canada seat available for cash is also available for points, with no blackout periods. That is a description of availability, not a price. The points required move with the cash fare. The valuation method is: find the cash price of the itinerary you would actually buy, subtract the taxes and fees the award still charges, divide by the points, and multiply by 100 to get cents per point. If you would not pay that cash price, do not use it as the numerator. The worked version is the valuation guide.</p>

    <div class="example-box">
        <strong>Method, with numbers you must replace</strong>
        <p>Suppose a ticket you would buy is $700 all-in, and the award still charges $140 in taxes and fees and asks for 40,000 points. The cash you avoid is $560. Cents per point are 560 ÷ 40,000 × 100 = 1.4. If the award asks for 80,000 points, the same ticket is 0.7 cents. Neither 40,000 nor 80,000 is an Aeroplan price from this review. They show the division. The live price is on the Air Canada search.</p>
    </div>

    <p>TD’s page also says a primary Privilege cardholder who spends $25,000 in net purchases receives an annual companion pass to buy a companion ticket from $99 plus taxes, fees, charges, and surcharges. Amex’s compare page describes a companion pass on Aeroplan cards after $25,000, at a fixed base fare from $99 up to $599 plus taxes and fees. A companion fare is not free. Price it against two cash tickets before you count it as a reason to spend $25,000.</p>

    <p>Aeroplan’s “your Aeroplan” page says you have 18 months to keep points from expiring by earning or redeeming a single point. TD’s Privilege page says points will not expire as long as you are a primary cardholder in good standing. If you cancel the card, the 18-month rule is the one to assume until Aeroplan tells you otherwise. Family sharing is described on TD’s page as up to eight family members. The program rules for who may join a family are on Air Canada’s site. This review did not restate them beyond TD’s sentence.</p>

    <h2>Frequently asked questions</h2>

    <h3>What is an Aeroplan point worth in cents?</h3>
    <p>Whatever the next redemption you will actually book pays, after taxes and fees. This page does not publish a single number, because Air Canada’s pricing is dynamic and a fixed “sweet spot” goes stale. Use the division in the example with live fares. The rewards calculator will then take that cents-per-point figure and apply it to earn rates you type.</p>

    <h3>Do Membership Rewards transfer to Aeroplan at 1:1?</h3>
    <p>Aeroplan’s US-English conversion page said that for American Express Membership Rewards – Canada: 1,000 points become 1,000 Aeroplan points, minimum 1,000, increments of 100. The Canada URL retrieved the same day listed hotel and foreign-bank partners and did not include that block in the text returned. Confirm the ratio on the page you see. Points that have moved cannot be moved back.</p>

    <h3>Is the Reserve card’s 3 points per dollar on Air Canada better than Privilege’s 2?</h3>
    <p>On Air Canada spend, 3 is more than 2, at the same $599 fee, if the merchant takes American Express. Privilege earns 1.5 on gas, grocery, and dining and runs on Visa. The premium comparison is the side-by-side. Acceptance decides it as often as the multiplier does.</p>

    <h3>Do Aeroplan points expire?</h3>
    <p>Aeroplan says you have 18 months, and that earning or redeeming one point keeps the balance alive. TD says Privilege points do not expire while you are a primary cardholder in good standing. Cancel the card, wait 18 months, and do not assume the TD sentence still applies.</p>

    <h3>Should I transfer Marriott points to Aeroplan?</h3>
    <p>Only when the flight beats the hotel stay you could have booked, and when the 5,000-point bonus on a conversion of at least 60,000 Bonvoy points is part of a transfer you were going to make anyway. Three Bonvoy points become one Aeroplan point. That is a poor trade if you were about to book the hotel.</p>

    <h3>Are the points taxable?</h3>
    <p>Personal points on your own spending are generally a discount, not a slip you invent. Business spending, and points bought or transferred in a business, are a bookkeeping question. This is not tax advice. The business-card guide is the neighbouring article.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="https://www.aircanada.com/ca/en/aco/home/aeroplan/your-aeroplan/conversion-programs.html">Aeroplan: convert points (Canada)</a></li>
        <li><a href="https://www.aircanada.com/us/en/aco/home/aeroplan/your-aeroplan/conversion-programs.html">Aeroplan: convert points, including Membership Rewards Canada (US-English page)</a></li>
        <li><a href="https://www.aircanada.com/ca/en/aco/home/aeroplan/your-aeroplan.html">Aeroplan: keep points active, 18 months</a></li>
        <li><a href="https://www.americanexpress.com/ca/en/credit-cards/aeroplan-cards/compare-cards/">American Express: compare Aeroplan cards</a></li>
        <li><a href="https://www.td.com/ca/en/personal-banking/products/credit-cards/aeroplan/aeroplan-visa-infinite-privilege-card">TD Aeroplan Visa Infinite Privilege</a></li>
    </ul>

    <div class="cta-section">
        <p><strong>A point you cannot book is a story. A ticket you can price is a number.</strong></p>
        <p>Run the cents on a real itinerary, then decide whether the annual fee still makes sense. The filing side of the rest of the year is the 2026 tax guide.</p>
        <a href="/ebooks/tax-guide/" class="cta-button">Get the 2026 Tax Guide — $49 CAD</a>
    </div>

    ${footer('September 27, 2026')}

</div>`
  ),

  cardPost(
    'best-balance-transfer-credit-cards-canada',
    'Best Balance Transfer Credit Cards in Canada (2026)',
    'As of September 2026, CIBC Select Visa states 0% for up to 10 months with a 1% fee, and MBNA True Line states 0% for 12 months on transfers within 90 days. The transfer fee on MBNA’s product page was not a single percent.',
    `<div class="container">

    <div class="hook">
        A balance transfer is a fee plus a clock. As of September 2026, CIBC’s Select Visa page offers <span class="highlight">0 percent interest for up to 10 months</span> on a transfer of $100 or more, with a 1 percent fee, and a $29 annual fee that is rebated in the first year. MBNA’s True Line Mastercard page offers 0 percent for 12 months on balance transfers completed within 90 days of account opening, with a $0 annual fee. Neither offer is a reason to keep spending.
    </div>

    <p>The card hub is <a href="/blog/best-credit-cards-canada/">best credit cards in Canada</a>. What to do with the payment you free up, once the high-interest balance is on a promo, is <a href="/blog/debt-payoff-vs-investing-canada/">debt payoff versus investing</a>. A rewards card is the wrong tool while you carry a balance. The <a href="/blog/credit-card-rewards-calculator/">rewards calculator</a> assumes you pay in full. This page assumes you do not.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>Quote a promo rate only from the issuer page. Aggregator roundups are not the source for the numbers below.</li>
            <li>CIBC Select Visa: 0 percent for up to 10 months, 1 percent fee, transfers up to 50 percent of the credit limit you are assigned, offer selected at online application. Annual fee $29, first year rebated. Minimum household income $15,000.</li>
            <li>CIBC says the promo balance costs you the interest-free grace period on new purchases unless you pay the entire amount due, including the promo balance, every month.</li>
            <li>MBNA True Line: $0 annual fee, 12.99 percent on purchases, 17.99 percent standard rate on balance transfers, 24.99 percent on cash advances, and a 0 percent promo for 12 months on transfers in the first 90 days. The product page did not print one transfer-fee percent. It says the fee, if any, shows up when you calculate the transfer.</li>
            <li>MBNA says product rates and fees may vary by region, and its page notes that fee structures may differ for Quebec. Confirm the disclosure for your province.</li>
        </ul>
    </div>

    <h2>Which balance-transfer offers were on the issuer sites?</h2>

    <p>Two issuer pages were clear enough to quote in September 2026. Other banks advertise transfers too. If this table does not name the card in your other hand, the rate was not verified here. Open that issuer’s page. Do not borrow a review site’s “0 percent for 18 months.”</p>

    <table>
        <caption>Balance-transfer terms stated by the issuer, September 2026</caption>
        <thead>
            <tr>
                <th>Card</th>
                <th>Promo the page stated</th>
                <th>Fee</th>
                <th>After the promo, and the annual fee</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>CIBC Select Visa</td>
                <td>0 percent for up to 10 months on a balance transfer of $100 or more, chosen at online application. Up to 50 percent of the assigned credit limit.</td>
                <td>1 percent on amounts over $100.</td>
                <td>Annual fee $29, rebated in the first year. Up to three additional cards at $0. The purchase interest rate on the marketing page did not render as a number in this review. Open CIBC’s summary of rates before you rely on a post-promo figure.</td>
            </tr>
            <tr>
                <td>MBNA True Line Mastercard</td>
                <td>0 percent promotional annual interest rate for 12 months on balance transfers completed within 90 days of account opening.</td>
                <td>Not stated as a single percent on the product page. The page says to calculate the total, which includes the balance-transfer fee if one applies.</td>
                <td>Annual fee $0. Purchases 12.99 percent. Standard balance-transfer rate 17.99 percent. Cash advances 24.99 percent. Rates may differ by region.</td>
            </tr>
        </tbody>
    </table>

    <h2>How do you price the fee against the interest you stop paying?</h2>

    <div class="example-box">
        <strong>Illustration only: $8,000, CIBC’s 1 percent fee, 10 months, an old rate you type as 20 percent</strong>
        <p>The 1 percent fee is CIBC’s. The 20 percent is not anyone’s posted rate in this article. It is a placeholder for the purchase rate on the card you are leaving. Fee: $8,000 × 0.01 = $80. A rough interest sketch, balance times annual rate times 10/12, is $8,000 × 0.20 × 10/12 = $1,333.33. Difference about $1,253, if you pay the transferred balance off inside 10 months, make no new purchases, and the old issuer really was charging 20 percent. Credit-card interest is usually calculated daily. The sketch is not the issuer’s formula. It is a ceiling-check before you pay the fee.</p>
    </div>

    <div class="warning-box">
        <strong>New purchases on a promo balance are how the offer gets expensive.</strong>
        <p>CIBC’s page says that once you have a promotional-rate balance, you lose the interest-free grace period on new purchases unless you pay the amount due, including the promo balance, in full each month. The practical reading: do not put groceries on the transfer card. Pay the old card’s minimum until the transfer posts, then pay the transfer card down. MBNA’s standard balance-transfer rate, after the 12 months, is the 17.99 percent printed on the product page. A balance that survives the clock is a new debt at that rate, plus whatever fee you already paid.</p>
    </div>

    <p>A transfer that uses half the new limit, which is CIBC’s own cap language, can also leave you with a high utilization on that card. Utilization is a credit-score input. The guide is <a href="/blog/credit-card-utilization-applications-credit-score-canada/">utilization and applications</a>. Opening the card is a new inquiry. If you are about to apply for a mortgage, read that cost before you add an inquiry to save ten months of interest.</p>

    <h2>Frequently asked questions</h2>

    <h3>What is the best balance-transfer card in Canada in 2026?</h3>
    <p>The one whose clock is longer than your payoff, whose fee you have priced, and whose post-promo rate you have read. On the pages reviewed, CIBC’s 1 percent fee is the lower printed fee, and the clock is up to 10 months. MBNA’s clock is 12 months and the annual fee is $0, but the transfer fee was not a number on the product page. If you can finish in 10 months, price CIBC’s $80 on $8,000 against whatever fee MBNA shows you at the calculator step. If you need the 11th and 12th months, MBNA’s longer clock is the one the page actually offers.</p>

    <h3>Is the CIBC purchase rate 13.99 percent?</h3>
    <p>Not according to anything this review could read. The marketing page’s purchase-rate field did not come through as a number. Do not use a review site’s 13.99 percent as if it were CIBC’s disclosure. Open the summary of annual interest rates PDF linked from CIBC’s page.</p>

    <h3>Does MBNA charge 3 percent to transfer?</h3>
    <p>The True Line product page reviewed in September 2026 did not say 3 percent. It said the total includes the fee if one applies, and that you should read the terms when you confirm the transfer. Type the amount into MBNA’s transfer screen and read the fee line. Quebec fee structures can differ. The page says so.</p>

    <h3>Should I transfer a balance and keep spending on the new card?</h3>
    <p>No. CIBC says the promo balance removes the grace period on new purchases unless the whole amount due is paid in full. New purchases can accrue interest immediately. Put spending on a card you pay in full. Put the debt on the promo card. They are different jobs.</p>

    <h3>What if I cannot pay the balance off before the promo ends?</h3>
    <p>Then the post-promo rate is the product. On MBNA’s page that standard balance-transfer rate is 17.99 percent. On CIBC’s page the ongoing purchase rate was not readable here. A 12-month 0 percent offer you only half pay is a fee plus a year of principal reduction plus a high rate on the rest. Run that rate for the months you will still owe. If the number is ugly, a payment plan you can finish beats a promo you cannot.</p>

    <h3>Does a balance transfer help my taxes?</h3>
    <p>Personal credit-card interest is not a deduction. Moving it does not create a credit. The value is the interest you do not pay. Business interest is a different test and is not what these consumer offers are for.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="https://www.cibc.com/en/personal-banking/credit-cards/all-credit-cards/select-visa-card.html">CIBC Select Visa</a></li>
        <li><a href="https://www.mbna.ca/en/credit-cards/low-interest/true-line-mastercard">MBNA True Line Mastercard</a></li>
        <li><a href="https://www.canada.ca/en/financial-consumer-agency/services/credit-cards.html">FCAC: credit cards</a></li>
    </ul>

    <div class="cta-section">
        <p><strong>The promo is a calendar. The fee is due whether you finish or not.</strong></p>
        <p>Pay the transferred balance on a schedule you can see. The rest of the year’s tax is the 2026 tax guide, not a reason to carry a card balance.</p>
        <a href="/ebooks/tax-guide/" class="cta-button">Get the 2026 Tax Guide — $49 CAD</a>
    </div>

    ${footer('September 27, 2026')}

</div>`
  ),

  cardPost(
    'premium-credit-cards-canada-comparison',
    'Best Premium Credit Cards in Canada: Amex Platinum vs Aeroplan Reserve vs Visa Infinite Privilege',
    'As of September 2026, Amex Platinum costs $799. The Amex Aeroplan Reserve and the TD Aeroplan Visa Infinite Privilege cost $599.',
    `<div class="container">

    <div class="hook">
        As of September 2026, The Platinum Card from American Express costs <span class="highlight">$799 a year</span>. The American Express Aeroplan Reserve card and the TD Aeroplan Visa Infinite Privilege card each cost $599. Platinum is the transferable-points card with a $200 travel credit and a $200 dining credit. The other two are Aeroplan cards, one on American Express and one on Visa, with an income test only on the TD card.
    </div>

    <p>The hub is <a href="/blog/best-credit-cards-canada/">best credit cards in Canada</a>. How Aeroplan points are earned and converted is the <a href="/blog/aeroplan-points-guide-canada/">Aeroplan points guide</a>. What the medical certificates actually say is <a href="/blog/credit-card-travel-insurance-canada/">credit card travel insurance</a>. A Cobalt-versus-Infinite comparison at a lower fee is <a href="/blog/amex-cobalt-vs-td-aeroplan-visa-infinite/">Cobalt versus TD Aeroplan Visa Infinite</a>. Price the year-two earn rate in the <a href="/blog/credit-card-rewards-calculator/">rewards calculator</a> after you copy the issuer’s rates. Do not type a rate this page did not quote.</p>

    <div class="callout">
        <strong>Choose Platinum if</strong> you will use the $200 travel credit and the $200 dining credit on spending you already do, you want Membership Rewards rather than Aeroplan-only points, and you accept a 2.5 percent foreign-currency conversion commission.
        <strong>Choose Aeroplan Reserve if</strong> your expensive spending is on Air Canada and at merchants that take American Express, and you want Aeroplan points directly.
        <strong>Choose Visa Infinite Privilege if</strong> you need Visa acceptance, you meet the $150,000 personal or $200,000 household income test, and the Aeroplan benefits are the reason for the fee.
    </div>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>Platinum’s annual fee is $799. An additional Platinum card is $250. The first two additional Gold cards are $0, then $50. There is no income figure on the eligibility lines reviewed: Canadian resident, Canadian credit file, age of majority.</li>
            <li>The $200 travel credit is one booking of $200 or more a year through American Express Travel, and Amex says you cannot use it again that year if you cancel. The $200 dining credit is a statement credit at restaurants on Amex’s list, on a single transaction of $200 or more.</li>
            <li>Reserve is $599 and earns 3 points per dollar on Air Canada and Air Canada Vacations, 2 on dining and food delivery in Canada, 2 at participating Hyatt, and 1.25 on everything else.</li>
            <li>Privilege is $599, additional card $199, purchase interest 21.99 percent, cash advance 22.99 percent. Earn 2 points per dollar on Air Canada, 1.5 on gas, EV charging, groceries, travel, transit, and dining, and 1.25 elsewhere.</li>
            <li>Platinum medical coverage, as stated on the product page, is up to $5 million for 15 days if you are under 65. Privilege states up to $5 million for 31 days, and 4 days if you or your spouse is 65 or older.</li>
        </ul>
    </div>

    <h2>How do the three annual fees compare?</h2>

    <table>
        <caption>Premium cards, issuer pages reviewed September 2026. Blank cells are figures this review did not quote.</caption>
        <thead>
            <tr>
                <th></th>
                <th>Platinum Card (Amex)</th>
                <th>Aeroplan Reserve (Amex)</th>
                <th>Aeroplan Visa Infinite Privilege (TD)</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Annual fee</td>
                <td>$799</td>
                <td>$599</td>
                <td>$599</td>
            </tr>
            <tr>
                <td>Additional card</td>
                <td>$250 for each additional Platinum card. First two additional Gold cards $0, then $50.</td>
                <td>$199 for an additional Reserve card, or $0 for a no-fee additional card.</td>
                <td>$199</td>
            </tr>
            <tr>
                <td>Income test on the page</td>
                <td>Not stated. Canadian resident with a Canadian credit file, age of majority.</td>
                <td>Not stated on the compare page reviewed.</td>
                <td>$150,000 personal or $200,000 household.</td>
            </tr>
            <tr>
                <td>Network and points</td>
                <td>American Express. Membership Rewards. Earn rate not quoted here, because the product page reviewed did not state a clean points-per-dollar table in the section that loaded.</td>
                <td>American Express. Aeroplan. 3× on Air Canada and Air Canada Vacations. 2× on dining and food delivery in Canada. 2× at participating Hyatt. 1.25× elsewhere.</td>
                <td>Visa. Aeroplan. 2× on Air Canada, including Vacations, and 2× at participating Hyatt. 1.5× on gas, EV charging, groceries, travel, transit, and dining. 1.25× elsewhere.</td>
            </tr>
            <tr>
                <td>Credits</td>
                <td>$200 annual travel credit, one booking of $200 or more through Amex Travel, lost for that year if the booking is cancelled. $200 annual dining credit at restaurants on Amex’s list.</td>
                <td>No $200 travel credit was stated on the compare page. Companion pass language: after $25,000 in net purchases, a companion base fare from $99 up to $599 plus taxes and fees.</td>
                <td>Companion pass from $99 plus taxes and fees after $25,000 in net purchases, on the card anniversary. NEXUS application fee rebate up to $100 CAD every 48 months.</td>
            </tr>
            <tr>
                <td>Foreign currency</td>
                <td>2.5 percent conversion commission, stated in the page FAQ.</td>
                <td>Not quoted from the compare page in this review. Check the agreement.</td>
                <td>Not quoted from the Privilege page in this review. Check the agreement. Do not assume it matches Platinum’s 2.5 percent, and do not assume it is zero.</td>
            </tr>
            <tr>
                <td>Emergency medical, as stated</td>
                <td>Up to $5 million, under age 65, first 15 consecutive days.</td>
                <td>The Aeroplan compare page describes up to $5 million, under 65, first 15 days, in the shared insurance section. Confirm the certificate for Reserve specifically.</td>
                <td>Up to $5 million for the first 31 days. Four days if you or your spouse is 65 or older.</td>
            </tr>
            <tr>
                <td>Lounges, in the issuer’s words</td>
                <td>American Express Global Lounge Collection. Amex says complimentary Plaza Premium and Priority Pass visits change on January 1, 2027, and that unlimited access to those two programs can depend on $20,000 of eligible spend. The page dates the lounge-count claim “as of 06/2026.”</td>
                <td>The compare page lists Maple Leaf Lounge access and Priority Pass among Aeroplan card benefits. Checkmarks did not survive the page text cleanly. Confirm Reserve is included before you count the lounge.</td>
                <td>Maple Leaf Lounges for the primary and additional cardholders, with a guest, on a same-day Air Canada or Star Alliance departure. Six complimentary Visa Airport Companion visits a year.</td>
            </tr>
        </tbody>
    </table>

    <h2>When does the credit actually reduce the fee?</h2>

    <div class="example-box">
        <strong>Illustration: Platinum’s two $200 credits, if you already spend that way</strong>
        <p>Fee $799. Travel credit $200, only if you book $200 or more through American Express Travel and do not cancel. Dining credit $200, only if you spend $200 or more in one transaction at a restaurant on the list. If both happen, the credits are $400 against a $799 fee, and $399 of fee is left before any points. If you book the travel only because the credit exists, the credit is not a saving. Amex’s own FAQ says the fee is $799. It does not say the fee is $399. The $399 is this paragraph’s subtraction, and it disappears the year you skip either credit.</p>
    </div>

    <p>Reserve and Privilege do not, on the pages reviewed, offer that pair of statement credits. Their fee test is the points, the companion fare after $25,000 of spend, the lounges, and the insurance day count. A companion ticket “from $99” still owes taxes, fees, charges, and surcharges. Price two cash tickets before you call the pass a $599 reason.</p>

    <p>Privilege’s purchase rate on the product page is 21.99 percent, and cash advances are 22.99 percent. Platinum’s page says a preferred rate of 21.99 percent applies to a Flexible Payment Option balance, and 30 percent applies to a delinquent due-in-full balance. Carrying a balance on any of these cards wipes out the points. The rewards calculator’s net value assumes the fee is the cost and the interest is zero. If interest is not zero, stop.</p>

    <h2>Frequently asked questions</h2>

    <h3>Is Amex Platinum worth $799 in 2026?</h3>
    <p>Only if the credits you will actually use, plus points at a value you have booked before, plus insurance or lounge visits you would otherwise pay for, clear $799. The page states the credits and the fee. It does not state a points-per-dollar table in the section this review relied on, so this article will not invent a 2-point earn rate to make the fee work. Copy the current earn table into the rewards calculator yourself.</p>

    <h3>Reserve or Privilege if I only fly Air Canada?</h3>
    <p>Reserve pays 3 Aeroplan points per dollar on Air Canada. Privilege pays 2, and it works anywhere Visa works, including merchants that refuse American Express. The fees match at $599. The income test is TD’s. If you cannot put the Air Canada spend on Amex, the 3× rate is zero.</p>

    <h3>Do I need $150,000 of income for all three?</h3>
    <p>TD prints that test for Infinite Privilege, personal $150,000 or household $200,000. The Platinum eligibility lines reviewed do not print an income minimum. Amex’s Aeroplan compare page, in the section reviewed, does not print one for Reserve either. Approval is still a credit decision. An unpublished minimum is not the same thing as a guarantee.</p>

    <h3>Which card has the longer medical window?</h3>
    <p>On the pages reviewed, Privilege states 31 days under the age cutoff, and Platinum states 15 days for cardmembers under 65. The age rules are not the same sentence. Privilege’s 4-day window if you or your spouse is 65 or older can be shorter than a 15-day under-65 Platinum window. Read the travel-insurance article, then the certificate.</p>

    <h3>What happens to Platinum lounge access in 2027?</h3>
    <p>Amex’s product page says that effective January 1, 2027, complimentary Plaza Premium and Priority Pass visits become a limited number per year, and that other lounges in the Global Lounge Collection stay unlimited. It also says unlimited Plaza Premium and Priority Pass access can be unlocked with $20,000 of eligible spend. The terms are Amex’s. They are a reason to re-read the page before you renew in 2027, not a reason to ignore the $799 fee in 2026.</p>

    <h3>Are the welcome bonuses included in the fee test?</h3>
    <p>Not in year two. Amex’s compare page listed Reserve welcome points of 60,000 after $7,500 in three months and 25,000 after $2,500 in month 13, and it excluded current or former cardmembers. TD listed Privilege bonuses of 20,000 on the first purchase, 30,000 after $12,000 in 180 days, and 50,000 after $24,000 in twelve months. Those are issuer offers as of this review. Price them once, with the valuation guide, then drop them from the keep-or-cancel test.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="https://www.americanexpress.com/en-ca/charge-cards/the-platinum-card/">The Platinum Card, American Express Canada</a></li>
        <li><a href="https://www.americanexpress.com/en-ca/benefits/travel/the-platinum-card/">Platinum travel benefits, including the $200 travel credit</a></li>
        <li><a href="https://www.americanexpress.com/ca/en/credit-cards/aeroplan-cards/compare-cards/">American Express: compare Aeroplan cards</a></li>
        <li><a href="https://www.td.com/ca/en/personal-banking/products/credit-cards/aeroplan/aeroplan-visa-infinite-privilege-card">TD Aeroplan Visa Infinite Privilege</a></li>
    </ul>

    <div class="cta-section">
        <p><strong>Metal is not a benefit. A credit you already spend is.</strong></p>
        <p>Subtract the fee from benefits you will use, then stop. The rest of the household’s tax is the 2026 tax guide.</p>
        <a href="/ebooks/tax-guide/" class="cta-button">Get the 2026 Tax Guide — $49 CAD</a>
    </div>

    ${footer('September 27, 2026')}

</div>`
  ),
];
