type ToolPost = {
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

const published = 'September 27, 2026';

function toolPost(
  category: string,
  categorySlug: string,
  slug: string,
  title: string,
  excerpt: string,
  content: string,
  updated = '2026-09-27'
): ToolPost {
  return {
    title,
    slug,
    category,
    categorySlug,
    author: 'Andrew',
    date: '2026-09-27',
    updated,
    excerpt,
    image: `/images/blog/${slug}.png`,
    content,
  };
}

function footer(category: string, disclaimer: string) {
  return `<div class="article-footer">
        <p><strong>Disclaimer:</strong> ${disclaimer}</p>
        <div class="footer-note">Published: ${published} | Category: ${category} | Author: Andrew</div>
    </div>`;
}

export const toolsClusterPosts: ToolPost[] = [
  toolPost(
    'Credit Cards',
    'credit-cards',
    'credit-card-rewards-calculator',
    'Credit Card Rewards Calculator (Canada)',
    'A Canadian rewards calculator that uses the spend, earn rates, point value, and annual fee you type. It does not assume a card’s published rate.',
    `<div class="container">

    <div class="hook">
        A rewards card is worth the <span class="highlight">dollars your own spend produces, minus the annual fee</span>. On an illustration of $28,000 a year, 5 points on groceries and dining, 2 on gas, 1 on everything else, and a point you value at 1 cent, gross rewards are $928. A $120 fee leaves $808, about 2.89 percent of that spend. Change the rates. Those numbers are not a card.
    </div>

    <p>The hub for choosing a product is <a href="/blog/best-credit-cards-canada/">best credit cards in Canada</a>. This page is the arithmetic after you have read the issuer’s earn table. How to price one point from a real booking, instead of borrowing a blog’s cents-per-point, is the <a href="/blog/credit-card-points-valuations-aeroplan-avion-amex-canada/">points valuation guide</a>. Aeroplan’s transfer ratios, which are not a value, are the <a href="/blog/aeroplan-points-guide-canada/">Aeroplan points guide</a>.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>You type the earn rate and the point value. The calculator does not store Cobalt, Aeroplan, Avion, or Scene+ rates.</li>
            <li>Points mode is spend × points per dollar × (cents per point ÷ 100). Cash-back mode is spend × the percent you type.</li>
            <li>Net value is gross rewards minus the annual fee. A welcome bonus is not in the formula.</li>
            <li>The loaded example is $12,000 at 5, $3,600 at 5, $2,400 at 2, $10,000 at 1, 1 cent a point, fee $120: gross $928, net $808.</li>
            <li>If the same earn rates are cash back percents, $8,000 at 4 percent and $12,000 at 1 percent is $440 gross. A $120 fee leaves $320.</li>
        </ul>
    </div>

    <h2>What is this card worth on my spend?</h2>

    <p>Open the issuer page, copy the earn rate for each merchant you actually use, and paste it into the rate box. If the store will not take the card, the rate for that row is zero. Caps, merchant codes, and foreign-currency markups are not inside the tool. Subtract them yourself, or lower the spend that earns the bonus.</p>

</div>

    <div id="credit-card-rewards-calculator"></div>

<div class="container">

    <h2>How is the loaded example calculated?</h2>

    <div class="example-box">
        <strong>Illustration, not a product: $28,000 of spend, 1 cent a point, $120 fee</strong>
        <p>Groceries $12,000 × 5 points = 60,000 points × $0.01 = $600. Dining $3,600 × 5 = 18,000 points = $180. Gas $2,400 × 2 = 4,800 points = $48. Everything else $10,000 × 1 = 10,000 points = $100. Gross $928. Net $928 − $120 = $808. Net divided by $28,000 is 2.8857 percent, which the tool shows as 2.89 percent. None of those rates is copied from an issuer.</p>
    </div>

    <table>
        <caption>Second check, cash-back mode, as of the calculator’s own arithmetic</caption>
        <thead>
            <tr>
                <th>Row</th>
                <th>Spend</th>
                <th>Rate you type</th>
                <th>Value</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Groceries</td>
                <td>$8,000</td>
                <td>4 percent</td>
                <td>$320</td>
            </tr>
            <tr>
                <td>Everything else</td>
                <td>$12,000</td>
                <td>1 percent</td>
                <td>$120</td>
            </tr>
            <tr>
                <td>Gross, then net of a $120 fee</td>
                <td>$20,000</td>
                <td></td>
                <td>$440 gross, $320 net</td>
            </tr>
        </tbody>
    </table>

    <p>Switch the reward type to cash back and replace the rows before you trust that second table. A 5 in points mode is five points. A 5 in cash-back mode is 5 percent. They are not the same input.</p>

    <h2>What does the calculator leave out?</h2>

    <ul>
        <li><strong>Welcome bonuses.</strong> Price those with the <a href="/blog/credit-card-welcome-bonus-math-canada/">welcome-bonus worksheet</a>, then come back here for year two, when the bonus is gone.</li>
        <li><strong>Category caps.</strong> If the 5-point rate dies after a monthly maximum, put only the capped dollars in that row and the overflow in the base-rate row.</li>
        <li><strong>Foreign transaction fees.</strong> A 2.5 percent markup on a trip can erase a rich earn rate. The no-foreign-fee comparison is <a href="/blog/best-no-foreign-transaction-fee-credit-cards-canada/">no foreign transaction fee cards</a>.</li>
        <li><strong>Interest.</strong> Carrying a balance at a purchase rate near 20 percent wipes out $808 of rewards on a few thousand dollars of debt. Pay the statement in full or the net value is the wrong number.</li>
        <li><strong>A point’s resale value.</strong> One cent is a placeholder. If your last Aeroplan booking was worth less, type less. The valuation guide is the method.</li>
    </ul>

    <h2>Frequently asked questions</h2>

    <h3>Should I enter the earn rate from a review, or from the issuer?</h3>
    <p>From the issuer, the day you calculate. Reviews, including this site’s card posts, go stale. The boxes start with round numbers so the page is not empty. They are not a recommendation and they are not a current earn table.</p>

    <h3>Is 1 cent per point a Canadian standard?</h3>
    <p>No. It is the default in the box so the first result is easy to check: 92,800 points at 1 cent is $928. A cash-price redemption can be worth more or less. Type the cents you got on a trip you would have paid for. Do not type a leaderboard number you cannot book.</p>

    <h3>How do I compare two cards?</h3>
    <p>Run the first card, write down the net, then change the earn rates and the fee and run it again. The tool keeps one set of boxes so you cannot accidentally mix two cards’ rates in one total. The annual-fee test, against a no-fee card, is <a href="/blog/credit-card-annual-fee-vs-no-fee-canada/">annual fee versus no fee</a>.</p>

    <h3>Does the result include the annual fee rebate in year one?</h3>
    <p>Only if you type the fee you will actually pay. If the first year is rebated, type zero for that year and the real fee for the next year. A rebate you have to call and ask for is not zero until it posts.</p>

    <h3>Why is my statement lower than this?</h3>
    <p>The tool multiplies annual spend by the rate you typed. Issuers pay the bonus only when the merchant code matches, and only up to a cap. Returns, annual fees, and cash advances usually earn nothing. If the store coded as something else, the row is wrong. The grocery-code problem is the <a href="/blog/best-grocery-credit-cards-canada/">grocery cards guide</a>.</p>

    <h3>Are the rewards taxable?</h3>
    <p>Personal points and cash back on your own household spending are generally a discount on what you bought, not a line you invent income for. Business spending is a bookkeeping question. This calculator does not do tax. The business-card guide is <a href="/blog/business-credit-cards-sole-prop-corporation-canada/">sole prop and corporation cards</a>.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="https://www.canada.ca/en/financial-consumer-agency/services/credit-cards.html">FCAC: credit cards</a></li>
        <li><a href="/blog/credit-card-points-valuations-aeroplan-avion-amex-canada/">How to value a point from a cash price</a></li>
    </ul>

    <div class="cta-section">
        <p><strong>The fee is a few hundred dollars. The tax return is larger.</strong></p>
        <p>Once the plastic is chosen, contribution room moves more money. The 2026 tax guide is the filing companion, not a card offer.</p>
        <a href="/ebooks/tax-guide/" class="cta-button">Get the 2026 Tax Guide — $49 CAD</a>
    </div>

    ${footer(
      'Credit Cards',
      'This is general education about reward arithmetic. It is not a recommendation to apply for any card, and not credit, tax, or insurance advice. Earn rates, fees, caps, and point values change. The rates in the loaded example are illustrations you can edit, not issuer quotes. Confirm the earn table on the issuer’s page the day you apply. Paying interest can erase any reward.'
    )}

</div>`
  ),

  toolPost(
    'Retirement',
    'retirement',
    'canadian-retirement-calculator',
    'Canadian Retirement Calculator (CPP, OAS, RRSP, TFSA)',
    'Project RRSP and TFSA growth in today’s dollars, then add the CPP and OAS figures you type. Official maximums are not filled in for you.',
    `<div class="container">

    <div class="hook">
        A retirement number is your spending, minus the CPP and OAS <span class="highlight">you actually expect</span>, with the RRSP and TFSA grown at a real return you chose. In the loaded illustration, $100,000 in an RRSP and $40,000 in a TFSA, plus $10,000 and $7,000 a year for 25 years at 5 percent nominal and 2 percent inflation, become about $904,015 at retirement. That is not a forecast of markets, and it is not the maximum pension.
    </div>

    <p>The pillar is <a href="/blog/how-much-money-retire-canada/">how much money you need to retire in Canada</a>. The order of the accounts, and the seven-step plan around this arithmetic, is <a href="/blog/build-retirement-plan-7-steps/">building a retirement plan</a>. When to start the public pensions, which this tool will not decide for you, is <a href="/blog/cpp-when-to-take-canada/">when to take CPP</a> and <a href="/blog/oas-gis-clawback-canada/">OAS, GIS, and the clawback</a>.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>You type CPP and OAS. This page does not quote a maximum, because the Canada.ca pages could not be loaded on September 27, 2026. Open the links below and type the figure from your account, not the national maximum.</li>
            <li>Most people do not receive the maximum CPP. OAS can also be reduced by the recovery tax. Type the annual amount you expect, already net of any clawback.</li>
            <li>The real return is (1 + nominal) ÷ (1 + inflation) − 1. Five percent with 2 percent inflation is about 2.94 percent.</li>
            <li>Contributions land at the end of each working year. In retirement the balance grows, then spending is taken. TFSA dollars come out first. RRSP withdrawals are grossed up by the tax rate you type.</li>
            <li>On the loaded inputs there is no shortfall from 65 through 89, and about $553,381 is still there at the end of the year you are 89. A second illustration, with higher spending, runs short at 70.</li>
        </ul>
    </div>

    <h2>Will my savings and public pensions cover spending?</h2>

    <p>The tool answers a narrower question than a financial plan. It grows two accounts at one constant real return, pays the CPP and OAS amounts you typed once you reach the start ages, and withdraws the gap. It does not know your earnings history, your pension, your spouse, GIS, the OAS recovery tax, or a bad sequence of returns. My Service Canada Account is the CPP estimate. The OAS estimator on Canada.ca is the OAS estimate. This page is what those dollars do next to the accounts.</p>

</div>

    <div id="canadian-retirement-calculator"></div>

<div class="container">

    <h2>Why are the official maximums not filled in?</h2>

    <p>Canada.ca publishes a maximum CPP retirement pension, an average pension, and a maximum OAS pension that changes by quarter and by age. Those pages did not load from here on September 27, 2026, so this article does not quote the dollars. Most people do not get the maximum CPP. Your record, the post-2019 enhancement, and the age you start all move the cheque. Type the annual figure from My Service Canada Account. Do not type a maximum you remember from a blog.</p>

    <p>OAS has a recovery tax once net world income is high enough, and the thresholds are on the OAS pages, not in this tool. If you will be in that range, the OAS you type should already be the net amount you expect, or you will overstate income. GIS is not in the tool. The stacking version is <a href="/blog/oas-gis-income-stacking-canada/">OAS and GIS income stacking</a>. The current dollar maximums, if you want them as a ceiling and not as your pension, are on the Canada.ca links in Sources.</p>

    <p>Canada.ca also publishes an age adjustment for starting CPP before or after 65, and for delaying OAS. This tool does not apply that adjustment. If you will start at 70, type the higher annual amount yourself after you have read the when-to-start page. Do not multiply a maximum by a factor you found somewhere else and call it your CPP.</p>

    <h2>What does the loaded example do?</h2>

    <div class="example-box">
        <strong>Illustration: age 40 to 65, then spending of $50,000 to age 90</strong>
        <p>RRSP $100,000 and $10,000 a year. TFSA $40,000 and $7,000 a year. Nominal return 5 percent. Inflation 2 percent. Real return (1.05 ÷ 1.02) − 1, about 2.9412 percent. After 25 end-of-year contributions the RRSP is $568,198.67 and the TFSA is $335,816.43, together $904,015.09, in today’s dollars. CPP typed as $10,000 a year from 65. OAS typed as $8,000 a year from 65. Those two are not the maximums. Spending $50,000. Tax on RRSP withdrawals 25 percent. At 65 the gap after CPP and OAS is $32,000, taken from the TFSA, so the RRSP withdrawal is $0. There is no shortfall through age 89. The balance at the end of that year is $553,381.32, all of it still in the RRSP. The TFSA is exhausted by then because it was spent first.</p>
    </div>

    <p>A second illustration, also not a plan: age 55, retire at 65, plan to 90, RRSP $200,000 plus $5,000 a year, TFSA $20,000 and no new contribution, 4 percent nominal, 2 percent inflation, CPP $8,000, OAS $9,000, spending $60,000, RRSP tax 30 percent. The accounts reach about $297,513.73 and $24,286.32. Spending is covered at 65, with a TFSA withdrawal of $24,762.52 and an RRSP withdrawal of $26,053.54 gross. The first age with a shortfall is 70, and the balance at the end of age 89 is $0. Change the spending or the return and the age moves. That is the point of typing it.</p>

    <h2>Which assumptions are doing the work?</h2>

    <ul>
        <li><strong>One real return, every year.</strong> A 5 percent nominal return is not a promise, and a bad decade at the start of retirement is not in the model. If you need a stress test, lower the return and run it again.</li>
        <li><strong>Contributions at year end, no growth on the contribution in the year it is made.</strong> A January contribution would finish a bit higher. The tool does not do months.</li>
        <li><strong>CPP and OAS only after you have retired, and only from the start age.</strong> Working while you collect CPP, and the post-retirement benefit, are outside the model. So is OAS while you are still working, if you retire after 65: the first retirement year includes OAS only if the start age you typed is no higher than your retirement age.</li>
        <li><strong>TFSA first, then RRSP.</strong> That order spends the tax-free account and leaves a taxable account. It can be the wrong order when a withdrawal raises OAS recovery tax or kills GIS. The clawback article is the warning. The tax rate is one flat percent you type. It is not the <a href="/blog/canada-income-tax-calculator/">income tax calculator</a>, and it does not phase in with the brackets.</li>
        <li><strong>No pension, no rental, no debt payment, no one-time expense.</strong> A defined-benefit pension replaces some of the spending. Put it in the spending gap by lowering spending, or add it to the CPP box only if you are willing to mislabel it. Better: lower the spending number by the after-tax pension.</li>
        <li><strong>Today’s dollars on both sides.</strong> Because the return is real, a $50,000 spending target stays $50,000 of today’s buying power. Do not also inflate the spending.</li>
    </ul>

    <p>RRSP and TFSA room are not checked. The 2026 dollar limits live on the <a href="/blog/contribution-limits/">contribution limits</a> page. If you type a contribution above your room, the projection is a wish. The account mechanics are <a href="/blog/rrsp-playbook/">the RRSP playbook</a> and <a href="/blog/tfsa-strategies/">TFSA strategies</a>.</p>

    <h2>Frequently asked questions</h2>

    <h3>Should I type the CPP maximum?</h3>
    <p>Only if My Service Canada Account says your pension is the maximum. Canada.ca publishes a maximum and an average, and neither is a guarantee. Your pension depends on your contributions and when you start. The loaded example uses $10,000 a year of CPP on purpose. It is an input, not a quote of the maximum.</p>

    <h3>Does the calculator include the OAS clawback?</h3>
    <p>No. The recovery-tax thresholds are on the Canada.ca OAS pages, and those pages did not load here, so this article does not quote the income band. If your income will be high enough for a repayment, reduce the OAS amount you type, or read the clawback guide and do not treat this output as your cheque.</p>

    <h3>Why does the TFSA run out while the RRSP remains?</h3>
    <p>The tool spends the TFSA first because a TFSA withdrawal is not taxed at the rate you typed. In the loaded example the entire $32,000 gap at 65 comes from the TFSA. Later years keep drawing it until it is gone, then gross-up the RRSP. A different order can be better. This one is stated so you can see it.</p>

    <h3>What if I retire at 60 and CPP starts at 65?</h3>
    <p>Type retirement age 60 and CPP start age 65. The years from 60 to 64 have no CPP in the income line, so the accounts cover all of the spending. The same switch works for OAS. The tool will not invent a bridge pension.</p>

    <h3>Is the 4 percent rule in here?</h3>
    <p>No. Spending is a dollar amount you type, not a percent of the portfolio. A flat real withdrawal can still run the accounts to zero, which is what the second illustration does at age 70. Sequence risk can do that earlier than a constant-return model shows.</p>

    <h3>Can I use this for a couple?</h3>
    <p>Only by adding both CPP amounts into the CPP box, both OAS amounts into the OAS box, and both accounts into the balances. The tax rate is still one number. Pension income splitting and two different brackets are not modelled. It is a household sketch, not two returns.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="https://www.canada.ca/en/services/benefits/publicpensions/cpp/amount.html">Canada.ca: how much CPP you could receive</a></li>
        <li><a href="https://www.canada.ca/en/services/benefits/publicpensions/cpp.html">Canada.ca: CPP retirement pension overview</a></li>
        <li><a href="https://www.canada.ca/en/employment-social-development/programs/pensions/pension/statistics/2026-quarterly-july-september.html">ESDC: CPP 2026 and OAS July to September 2026 maximums</a></li>
        <li><a href="https://www.canada.ca/en/services/benefits/publicpensions/cpp/when-start.html">Canada.ca: when to start CPP</a></li>
        <li><a href="https://www.canada.ca/en/services/benefits/publicpensions/old-age-security.html">Canada.ca: Old Age Security</a></li>
    </ul>

    <div class="cta-section">
        <p><strong>The projection is a spreadsheet. The return is a tax return.</strong></p>
        <p>RRSP deductions, TFSA room, and the brackets on a withdrawal are the filing side. The 2026 tax guide is that map, $49 CAD.</p>
        <a href="/ebooks/tax-guide/" class="cta-button">Get the 2026 Tax Guide — $49 CAD</a>
    </div>

    ${footer(
      'Retirement',
      'This is general education, not a retirement, tax, or investment projection for your file. Returns, inflation, tax rates, and the CPP and OAS amounts in the examples are assumptions you can edit. Official maximums are not quoted here, because the Canada.ca pages did not load on September 27, 2026. Confirm CPP in My Service Canada Account and OAS on Canada.ca before you retire, delay, or spend.'
    )}

</div>`
  ),

  toolPost(
    'Real Estate',
    'real-estate',
    'rent-vs-buy-canada',
    'Rent vs Buy in Canada: Calculator and the Assumptions That Decide It',
    'Compare ending wealth for renting and buying on assumptions you type: down payment, Canadian mortgage rate, appreciation, maintenance, property tax, closing costs, and the return on money not used to buy.',
    `<div class="container">

    <div class="hook">
        Rent versus buy is an ending-wealth comparison, not a monthly-payment comparison. On the loaded illustration — a $700,000 home, $140,000 down, a 4.50 percent mortgage, and $2,800 rent — buying finishes <span class="highlight">$34,147.69 behind</span> after 10 years. Change the appreciation, the rent, or the return on the renter’s portfolio and the sign flips. None of those rates is a 2026 forecast.
    </div>

    <p>The mortgage around this calculator is the <a href="/blog/canadian-mortgage-guide/">Canadian mortgage guide</a>. How a payment is built, and what an extra payment does to the same loan, is the <a href="/blog/mortgage-prepayment-calculator/">prepayment calculator</a>. Cash due on top of the down payment, including land transfer tax, is the <a href="/blog/land-transfer-tax-closing-costs-canada/">closing cost guide</a>. If the “buy” case is a rental rather than a home you will live in, stop and read <a href="/blog/primary-residence-vs-rental-property-canada/">primary residence versus rental</a>, because this tool does not deduct interest or charge capital gains.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>The mortgage uses semi-annual compounding, not in advance. On $560,000 at 4.50 percent over 25 years the payment is $3,099.45 a month.</li>
            <li>The renter invests the down payment plus buying costs, then invests any month in which owning costs more than rent, at the return you type.</li>
            <li>Property tax and maintenance are a percent of that month’s home value. Insurance stays a flat annual amount. Selling costs come off the home at the end.</li>
            <li>Loaded result, 10 years: buyer net $404,342.54, renter portfolio $438,490.23, buyer behind by $34,147.69. Home value $853,296.09. Mortgage left $406,288.75. Selling costs $42,664.80.</li>
            <li>A second illustration, $500,000 with $100,000 down, 4 percent, five years, $2,500 rent, finishes with buying ahead by $45,173.00. The assumptions did the work.</li>
        </ul>
    </div>

    <h2>Does buying finish ahead of renting?</h2>

    <p>Only after you have typed a price, a down payment, a contract rate, a stay, and a set of costs you believe. The tool will not look up a city’s property tax, a neighbourhood’s rent, or this month’s discounted mortgage rate. The 4.50 percent in the box is the same illustrative rate the mortgage guide uses so the arithmetic can be checked. It is not a rate on offer in September 2026.</p>

</div>

    <div id="rent-vs-buy-canada"></div>

<div class="container">

    <h2>What is each assumption doing?</h2>

    <table>
        <caption>What you type, and what the calculator does with it</caption>
        <thead>
            <tr>
                <th>Input</th>
                <th>Loaded illustration</th>
                <th>What it affects</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Price and down payment</td>
                <td>$700,000 and $140,000</td>
                <td>The mortgage starts at $560,000. The renter invests the $140,000.</td>
            </tr>
            <tr>
                <td>Rate and amortization</td>
                <td>4.50 percent, 25 years</td>
                <td>Monthly rate is (1 + 0.045 / 2) raised to 1/6, minus 1. Payment $3,099.45.</td>
            </tr>
            <tr>
                <td>Years you will stay</td>
                <td>10</td>
                <td>Selling costs land at month 120. A short stay makes those costs dominate.</td>
            </tr>
            <tr>
                <td>Appreciation</td>
                <td>2 percent a year</td>
                <td>Home value compounds monthly. It is not a housing forecast.</td>
            </tr>
            <tr>
                <td>Property tax and maintenance</td>
                <td>0.6 percent and 1 percent of current value</td>
                <td>Charged every month on that month’s value, so they rise with appreciation.</td>
            </tr>
            <tr>
                <td>Insurance</td>
                <td>$1,800 a year, flat</td>
                <td>Does not rise. If your premium will rise, type a higher number.</td>
            </tr>
            <tr>
                <td>Buying costs</td>
                <td>$15,000</td>
                <td>Added to the owner’s cash and to the renter’s starting portfolio. Land transfer tax is the large piece in many cities. Look it up. Do not reuse $15,000.</td>
            </tr>
            <tr>
                <td>Selling costs</td>
                <td>5 percent of the ending value</td>
                <td>$42,664.80 on the loaded ending value. Commission and legal fees vary.</td>
            </tr>
            <tr>
                <td>Rent and rent growth</td>
                <td>$2,800 a month, 2 percent</td>
                <td>Rent compounds monthly. Total rent paid in the illustration is $371,271.08.</td>
            </tr>
            <tr>
                <td>Return on the difference</td>
                <td>5 percent a year</td>
                <td>The renter’s portfolio compounds monthly, then adds owning-minus-rent. If rent is higher, the portfolio shrinks by the gap.</td>
            </tr>
        </tbody>
    </table>

    <p>Table as of the calculator’s rules, September 2026. The dollar results are the output of these inputs, not a market study. Owner cash over the whole stay, including the down payment and buying costs, is $668,895.42 in the loaded case. That number is not the buyer’s wealth. Wealth is the home, minus selling costs, minus the mortgage that is left.</p>

    <div class="example-box">
        <strong>Second illustration: buying finishes ahead</strong>
        <p>Price $500,000. Down payment $100,000. Rate 4 percent. Amortization 25 years. Stay 5 years. Appreciation 3 percent. Property tax 1 percent. Maintenance 1 percent. Insurance $1,500. Buying costs $10,000. Selling costs 4 percent. Rent $2,500 growing at 3 percent. Investment return 4 percent. Payment $2,104.08. Buyer net $208,235.85. Renter portfolio $163,062.85. Buying ahead by $45,173.00. Same tool, different assumptions, opposite sign. Do not quote either gap as “the” Canadian answer.</p>
    </div>

    <h2>What is left out, on purpose?</h2>

    <ul>
        <li><strong>CMHC premiums.</strong> A down payment under 20 percent usually means default insurance. The premium is borrowed and added to the mortgage. This tool does not add it. The <a href="/blog/cmhc-mortgage-insurance-canada/">CMHC guide</a> is the premium schedule. The loaded case is exactly 20 percent down so the question does not arise.</li>
        <li><strong>The stress test and whether you qualify.</strong> Qualifying is the <a href="/blog/mortgage-stress-test-canada/">stress test</a>. This page assumes the mortgage exists.</li>
        <li><strong>Tax on a sale, and tax on the renter’s portfolio.</strong> A principal residence is often sheltered by the principal residence exemption. A non-registered portfolio is not. If the renter’s return is inside a TFSA, the untaxed return is the right input. If it is not, type a lower after-tax return. The tool will not compute the tax.</li>
        <li><strong>Repairs that are not a smooth percent, condo fees, and utilities that differ between the apartment and the house.</strong> Put the difference into maintenance or into rent. A smooth 1 percent is a modelling choice, not a building standard.</li>
        <li><strong>Leverage risk.</strong> A 2 percent decline instead of 2 percent appreciation changes the buyer’s net by more than 2 percent, because the mortgage does not shrink when the price does. Run a zero, and a negative, before you treat the first result as a decision.</li>
    </ul>

    <h2>Frequently asked questions</h2>

    <h3>Is a lower monthly payment a reason to buy?</h3>
    <p>No. The owner’s monthly cash includes principal, which is savings, and also tax, maintenance, and insurance, which are not. The renter keeps the down payment invested. Comparing $3,099.45 with $2,800 and stopping there ignores both the principal and the $155,000 the renter invested on day one in the loaded case.</p>

    <h3>Why does the payment not match a US mortgage calculator?</h3>
    <p>US calculators usually convert the annual rate by dividing by 12. This one uses (1 + annual rate / 2) to the power of 1/6, minus 1, which is the semi-annual convention Canadian residential mortgages are quoted on. The mortgage guide uses the same conversion. A $500,000 loan at 4.50 percent over 25 years is $2,767.36 a month here. The guide rounds that payment to $2,767.</p>

    <h3>Should appreciation be the average house-price increase?</h3>
    <p>Only if you are willing to bet your down payment on that average holding for your house, in your years. This page does not publish a national appreciation rate. Two percent and three percent appear above because they are the inputs that produce the two checked outputs. Replace them.</p>

    <h3>Where do closing costs go?</h3>
    <p>Into the buying-costs box, as a dollar amount, not as a percent of the price. Land transfer tax is provincial and, in Toronto, municipal on top. The closing-cost guide is the map. The $15,000 in the box is a placeholder so the formula has a number. It is not Toronto’s tax on a $700,000 purchase.</p>

    <h3>What return should the renter use?</h3>
    <p>The after-tax return you would actually earn on that down payment for the years you would rent. A TFSA can take the pre-tax return you believe. A taxable account cannot. Five percent in the loaded case is an assumption, not a balanced-fund promise. If you would leave the money in a savings account, type the savings rate.</p>

    <h3>Does this work for a five-year stay?</h3>
    <p>Yes. Shorten the years. Selling costs then hit a home that has not appreciated for long, which is why the second illustration still needed 3 percent appreciation and a 4 percent selling cost to finish ahead. Run your own stay before you waive a condition.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="/blog/canadian-mortgage-guide/">Canadian mortgage guide</a> — the semi-annual payment convention used here, and the illustrative 4.50 percent payment on $500,000.</li>
        <li><a href="https://www.canada.ca/en/financial-consumer-agency/services/mortgages.html">FCAC: mortgages</a></li>
        <li><a href="/blog/land-transfer-tax-closing-costs-canada/">Land transfer tax and closing costs</a></li>
    </ul>

    <div class="cta-section">
        <p><strong>The sign on the comparison is only as good as the rate and the tax.</strong></p>
        <p>Interest on the home you live in is not deductible. The filing side of a move, a sale, or a rental is the 2026 tax guide.</p>
        <a href="/ebooks/tax-guide/" class="cta-button">Get the 2026 Tax Guide — $49 CAD</a>
    </div>

    ${footer(
      'Real Estate',
      'This is general education, not a mortgage offer, a rent quote, or tax or housing advice. Every rate in the examples is an assumption labelled as such, not a September 2026 market statistic. Contract rates, property tax, land transfer tax, insurance, and commissions vary. Confirm the commitment, the city’s tax, and the lawyer’s statement of adjustments before you offer or sign a lease.'
    )}

</div>`
  ),

  toolPost(
    'Real Estate',
    'real-estate',
    'mortgage-prepayment-calculator',
    'Mortgage Prepayment Calculator (Canada)',
    'See how much interest and time a Canadian mortgage prepayment saves. You type the rate, the extra payment, and the annual lump sum.',
    `<div class="container">

    <div class="hook">
        On a $400,000 mortgage at 5 percent, amortized over 25 years with semi-annual compounding, the monthly payment is <span class="highlight">$2,326.42</span>. Adding $200 to every payment and $5,000 once a year cuts the interest from $297,925.98 to $190,817.38. That is $107,108.60 of interest and 97 months. The 5 percent is an assumption, not a rate on offer.
    </div>

    <p>This mortgage prepayment calculator prices that choice with the same monthly rate Canadian lenders use when they quote a residential mortgage: semi-annual compounding, not in advance. You type the balance, the contract rate, the amortization, an extra amount on every monthly payment, and a lump sum on each anniversary payment. The contractual payment does not fall. The balance hits zero sooner, and the interest you do not pay is the result. Whether that extra dollar should go to the mortgage or to a registered account is the <a href="/blog/mortgage-prepayment-vs-investing-canada/">prepayment versus investing guide</a> and the <a href="/blog/mortgage-prepayment-vs-tfsa-rrsp-canada/">priority against TFSA and RRSP room</a>. The contract around the rate is the <a href="/blog/canadian-mortgage-guide/">Canadian mortgage guide</a>. Breaking the term and paying a penalty is a different problem. That one is the <a href="/blog/mortgage-prepayment-penalty-ird-canada/">IRD penalty guide</a>, and it tells you to use the lender’s own penalty tool. Renting instead of carrying the loan at all is <a href="/blog/rent-vs-buy-canada/">rent versus buy</a>.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>The monthly rate is (1 + annual rate / 2) to the power of 1/6, minus 1. The payment is rounded to the cent. Each month’s interest is rounded to the cent.</li>
            <li>A $500,000 loan at 4.50 percent over 25 years is $2,767.36 a month, the same convention as the mortgage guide, which rounds it to $2,767.</li>
            <li>The contractual payment does not fall when you prepay. The balance hits zero sooner.</li>
            <li>The annual lump sum is applied on every 12th payment, after that month’s regular payment and after the extra monthly amount.</li>
            <li>Without extras, the $400,000 illustration runs 300 months and $297,925.98 of interest. With $200 a month and $5,000 a year, it runs 203 months and $190,817.38 of interest.</li>
            <li>A lump-sum privilege and a payment-increase privilege are separate caps written in the commitment. This tool does not know either percentage. Type only what the clause allows.</li>
            <li>Interest you avoid on the home you live in is an after-tax return equal to the contract rate. A TFSA or an RRSP has to beat that rate on its own terms, which the neighbouring guides spell out. This page only prices the mortgage.</li>
        </ul>
    </div>

    <h2>How much interest and time does a prepayment save?</h2>

    <p>Type the balance, the contract rate, and the amortization on the disclosure. Then type only the extra payment and the lump sum your privilege actually allows. A closed mortgage limits penalty-free prepayments. This page does not know the limit. If you type more than the privilege, the interest saved is incomplete: the lender’s penalty is missing from the model, and the penalty guide is where that charge is explained.</p>

</div>

    <div id="mortgage-prepayment-calculator"></div>

<div class="container">

    <h2>How is the payment built?</h2>

    <p>Canadian residential mortgages are quoted with interest compounded semi-annually, not in advance. The calculator turns that quote into a monthly rate by taking (1 + annual rate / 2) to the power of one-sixth, then subtracting 1. At 5 percent, half the rate is 2.5 percent, and the monthly rate is 1.025 to the power of 1/6, minus 1. The payment is the standard amortizing payment on that monthly rate, rounded to the nearest cent. Interest each month is the remaining balance times that monthly rate, also rounded to the cent. Principal is the payment minus that interest. An extra amount, and the anniversary lump sum, reduce principal and do not change the next contractual payment.</p>

    <p>That rounding is why a bank’s schedule can differ by a few dollars and still be the same loan. Lenders also differ on whether the first period is a full month and on the day they apply a lump sum. A difference of hundreds of dollars means the rate, the balance, or the amortization you typed is not the disclosure. Match the disclosure. If the lender’s schedule still differs by more than rounding, their day count or their prepayment timing governs, not this page.</p>

    <h2>Worked examples from this calculator</h2>

    <p>Every dollar below is the output of the assumptions in the heading, run through the same function the calculator on this page uses. The 5 percent and the 4 percent are assumptions so the arithmetic can be checked. They are not offers, and they are not a September 2026 or October 2026 average. Replace them with the rate on your commitment before you treat the interest saved as yours.</p>

    <div class="example-box">
        <strong>Illustration: $400,000, 5 percent, 25 years</strong>
        <p>Payment $2,326.42. With no extras the loan runs 300 payments, which is 25 years 0 months, and the interest is $297,925.98. The lump sum in the rows that use one lands on payments 12, 24, 36, and so on. It is capped so it cannot overpay the last balance.</p>
    </div>

    <table>
        <caption>Same $400,000 loan at an assumed 5 percent over 25 years. Each row is a separate run of this calculator.</caption>
        <thead>
            <tr>
                <th>What you type</th>
                <th>Payments</th>
                <th>Interest</th>
                <th>Interest saved</th>
                <th>Time saved</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Contract payment only</td>
                <td>300</td>
                <td>$297,925.98</td>
                <td>—</td>
                <td>—</td>
            </tr>
            <tr>
                <td>$200 extra on every monthly payment</td>
                <td>258</td>
                <td>$249,629.03</td>
                <td>$48,296.95</td>
                <td>42 months</td>
            </tr>
            <tr>
                <td>$5,000 on each anniversary payment, and nothing extra each month</td>
                <td>227</td>
                <td>$216,450.11</td>
                <td>$81,475.87</td>
                <td>73 months</td>
            </tr>
            <tr>
                <td>Both: $200 a month and $5,000 a year</td>
                <td>203</td>
                <td>$190,817.38</td>
                <td>$107,108.60</td>
                <td>97 months</td>
            </tr>
            <tr>
                <td>$193.87 extra each month, the accelerated bi-weekly approximation below</td>
                <td>259</td>
                <td>$250,861.62</td>
                <td>$47,064.36</td>
                <td>41 months</td>
            </tr>
        </tbody>
    </table>

    <p>Do not add the $200-a-month saving to the $5,000-a-year saving. Those two rows are each measured against the untouched loan, so $48,296.95 plus $81,475.87 is $129,772.82, and that sum double-counts interest both prepayments would have avoided on the same balance. The row that types both at once saves $107,108.60. If you will actually do both, that is the number. The separate rows are there so you can see which privilege is doing the work.</p>

    <p>The $200 row finishes in 258 payments, which is 21 years 6 months. The $5,000 row finishes in 227 payments, which is 18 years 11 months. Both together finish in 203 payments, which is 16 years 11 months. Time saved is 42 months, 73 months, and 97 months. The same rule applies to the months: do not add 42 and 73 and expect 115. The combined run saves 97.</p>

    <table>
        <caption>Second check: $250,000 at 4 percent over 20 years, plus $100 a month and no lump sum</caption>
        <thead>
            <tr>
                <th></th>
                <th>Payments</th>
                <th>Interest</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Contract payment $1,510.62, no extras</td>
                <td>240</td>
                <td>$112,547.37</td>
            </tr>
            <tr>
                <td>Same payment plus $100 a month</td>
                <td>219</td>
                <td>$101,252.95</td>
            </tr>
            <tr>
                <td>Difference</td>
                <td>21 months</td>
                <td>$11,294.42</td>
            </tr>
        </tbody>
    </table>

    <p>A biweekly contract, a variable rate that changes, or a payment the lender recalculates after you prepay will not match these rows. Some lenders keep the payment fixed and shorten the amortization, which is what this tool does. Some lenders drop the payment and keep the amortization, which puts the interest back. Read which one your commitment does before you compare a screen to a statement.</p>

    <h2>How prepayment privileges work at Canadian lenders</h2>

    <p>A closed mortgage is a promise to follow the amortization, with a written exception called the prepayment privilege. The exception is not a national percentage. It is a clause. Two limits show up in that clause again and again, and they are usually separate buckets. Using one does not automatically use up the other. The commitment is the only place that says whether they interact.</p>

    <p>The first limit is the lump sum. Once a year, or on the payment dates the clause names, you may pay an extra amount up to a percentage of a balance the clause names. Sometimes that balance is the original principal. Sometimes it is the current principal. The percentage is the lender’s number for that product, not a figure this site publishes. FCAC’s prepayment pages tell you to read that clause, and they explain the charge that applies when you pay more than it allows. As of the pages already linked from this site, that charge on a closed term is usually the higher of three months’ interest and an interest-rate differential. The worked version of that sentence is the <a href="/blog/mortgage-prepayment-penalty-ird-canada/">penalty guide</a>.</p>

    <p>The arithmetic, once you have the clause, is ordinary. Allowed lump sum equals the percentage in the clause times the balance the clause names. On the $400,000 illustration, a clause that uses original principal means you multiply the percentage by $400,000. A clause that uses the current balance means you multiply by whatever is still owing on the date the clause allows the payment. This page does not fill in the percentage. If you type a lump sum larger than that product, the calculator will still show interest saved, and that figure will be wrong by the penalty.</p>

    <p>The second limit is the payment increase. The clause lets you raise the contractual payment by up to a stated percentage, often once a year, or it lets you pay an extra full payment on a payment date, sometimes called a double-up. Those are payment privileges, not lump-sum privileges. The calculator’s “extra amount added to every monthly payment” is this bucket. If the clause caps the increase at a percentage of the payment, the maximum extra is that percentage times $2,326.42 in the illustration, not that percentage times the balance. A double-up, if the clause allows one, is an extra payment of $2,326.42 on a payment date, not $2,326.42 every month.</p>

    <p>Ask two more questions the percentage does not answer. Does unused room carry into the next year? Do not assume it does. The clause says so, or it does not. And does a skip-a-payment put interest back after you have prepaid? Some contracts offer a skip once you have made extra payments. A skip is the opposite of a prepayment. This calculator does not model one. If you skip, the interest saved on this page is too high.</p>

    <p>An open term is the product built to be prepaid. A closed term is the product with the limit and the charge. The rate difference between those products is a quote from the lender, not a number on this page. If you are choosing the product, the privilege and the penalty method belong in the same comparison as the rate. A cheaper closed rate with a small privilege is a bet that you will not need the money back and will not need to leave.</p>

    <h2>Prepay, or invest in a TFSA or an RRSP</h2>

    <p>The calculator stops at the mortgage. The decision does not. Interest on the mortgage that bought the home you live in is not deductible, so a dollar of interest you never pay is an after-tax return equal to the contract rate, for as long as that rate is locked. There is no market path on which that particular return goes negative. The dollar is also illiquid. Getting it back means a refinance, a sale, or a readvance, each with a cost and a new underwriting. That trade is the whole point of the <a href="/blog/mortgage-prepayment-vs-investing-canada/">prepayment versus investing guide</a>. Borrowing the equity back out to invest is a different strategy, the <a href="/blog/smith-maneuver-canada-steps-risks/">Smith Manoeuvre</a>, and it is leverage, not a prepayment.</p>

    <p>A TFSA has no second tax calculation. The return you earn inside it is already after tax. The comparison is whether the return you actually expect, after the risk you will actually hold through a bad year, beats the contract rate. This page does not publish an expected return for stocks, bonds, or a balanced fund. If you would leave the alternative dollars in a savings account or a GIC, type that rate in your own head and compare it with the mortgage rate on the disclosure. A GIC outside a TFSA is not the same comparison: interest on it is taxable, so the pre-tax GIC rate has to be grossed up by your marginal rate before it can tie the mortgage. The TFSA does not need that gross-up. The account order, including when the TFSA wins because you will need the dollar again, is the <a href="/blog/mortgage-prepayment-vs-tfsa-rrsp-canada/">TFSA and RRSP priority guide</a>.</p>

    <p>An RRSP is not a TFSA with a deduction stapled on. The deduction arrives now, at the marginal rate on the contribution, and the withdrawal is included later, at the marginal rate in that year. If those rates match and the refund is spent, the RRSP does not beat a prepayment. If the contribution is deducted in a higher bracket than the eventual withdrawal, and the refund is assigned in advance to the mortgage or the TFSA, the RRSP can win. The brackets are yours. Look them up in the <a href="/blog/federal-tax-brackets/">federal tax brackets</a> guide and add your provincial rate. Do not borrow a bracket from a blog. The mechanics of the refund, and the room, are the <a href="/blog/rrsp-playbook/">RRSP playbook</a>.</p>

    <p>Two uses of the dollar outrank both the mortgage and the registered accounts, and the priority guide already says so. High-interest consumer debt is a certain non-deductible return at a rate no sober investment clears. The fair version of that comparison, for debt that is not the residence mortgage, is <a href="/blog/debt-payoff-vs-investing-canada/">debt payoff versus investing</a>. An employer match, on the matched slice only, is compensation. Declining the match to prepay principal donates that compensation. Take the match, then come back to the mortgage.</p>

    <p>Whatever you choose, the interest figure on this page is not cash in the account this month. A dollar of interest avoided in year 16 is not a dollar you can spend in year 1. The calculator’s job is to show how large that later saving is, and how many payments disappear, so the hurdle rate has a size. It is not a forecast of a TFSA balance.</p>

    <h2>Accelerated bi-weekly versus a prepayment</h2>

    <p>The schedule on this page is monthly. A lender’s bi-weekly contract is a different payment count, and the two names that sound alike are not the same product.</p>

    <p>A regular bi-weekly payment is the monthly payment times 12, divided by 26. You pay every two weeks, and the year still adds up to 12 monthly payments. You have changed the calendar, not the annual principal. Little extra interest is saved, and what is saved comes from paying slightly earlier in the year, not from paying more.</p>

    <p>An accelerated bi-weekly payment is half the monthly payment, paid 26 times. Half of $2,326.42 is $1,163.21. Twenty-six of those payments are $30,243.46, which is exactly 13 monthly payments of $2,326.42. The thirteenth payment is a prepayment. Accelerated bi-weekly is not a lower rate. It is one extra monthly payment a year, applied every two weeks instead of as a lump sum on the anniversary.</p>

    <p>This tool cannot take a bi-weekly frequency. The monthly stand-in is one twelfth of the contractual payment, typed in the extra-amount box. One twelfth of $2,326.42 is $193.8683…, and the cent this calculator uses is $193.87. Twelve payments of $193.87 are $2,326.44, two cents more than one monthly payment, because of that rounding. Running $193.87 as the extra monthly amount, with no anniversary lump sum, produces 259 payments, $250,861.62 of interest, $47,064.36 of interest saved, and 41 months saved. That row is in the table above.</p>

    <p>A lender’s accelerated schedule will not match those figures to the cent. Payments land every 14 days, the first period may be short, and the lender’s rounding may differ. Expect a gap larger than two cents. Also check the privilege. An accelerated schedule that raises the annual amount you pay above the payment-increase clause can be a penalty problem even though the bank set the frequency up for you. Ask the lender to confirm the accelerated payment sits inside the privilege before you treat it as free.</p>

    <h2>When a prepayment becomes a penalty</h2>

    <p>Inside the privilege, the model on this page is the right model: extra principal, same contractual payment, less interest, fewer months, no charge. Outside the privilege, or when you pay the closed mortgage off before the end of the term, the lender adds a prepayment charge. FCAC describes that charge, on a closed fixed term, as usually the higher of three months’ interest and an interest-rate differential. Lenders differ. Federally regulated lenders have to describe the method and post a calculator. Use that calculator. This one does not compute a penalty, and it will not warn you that the lump sum you typed is past the clause.</p>

    <p>The reason a fixed term can produce a large interest-rate differential, and many variable terms produce three months’ interest only, is the <a href="/blog/mortgage-prepayment-penalty-ird-canada/">IRD penalty guide</a>. FCAC’s own illustration lives there: a $200,000 balance at 6 percent with 36 months left, a $3,000 three-month charge, and a $12,000 differential, so the penalty is $12,000. Those are FCAC’s inputs, not a rate on offer. A discount off the posted rate can make a real penalty larger than the simple gap. Paying $200 extra inside the privilege is not that transaction. Refinancing to “get a head start” on the balance can be.</p>

    <p>If the penalty is the price of a lower rate, the renewal guide is the shopping question, not this page. Run the interest this calculator says you would save by staying and prepaying inside the privilege. Then put the lender’s penalty beside it. A saving that arrives over 16 years does not automatically beat a charge that is due now.</p>

    <h2>Renewal timing</h2>

    <p>The tool holds one rate for the whole amortization. A five-year term at 5 percent, followed by an unknown renewal, is not one 25-year rate. The interest in the table is what happens if that assumed rate never changes. When the renewal offer is in writing, run the calculator again on the remaining balance, the new rate, and the remaining amortization. That second run is the prepayment decision for the next term. The first run was the decision for this one.</p>

    <p>Maturity is the date the closed term ends. The penalty guide on this site says the charge is usually zero then, which is why the <a href="/blog/mortgage-renewal-strategy-canada/">2026 renewal guide</a> tells you to shop before you are locked in again. A lump sum made before the new term starts reduces the balance that gets renewed. Confirm the renewal letter before you move the money. An automatic renewal can start a new closed term on a date you did not shop, and the privilege and the penalty come back with it.</p>

    <p>A prepayment during the term and a prepayment at maturity are different sizes of decision. During the term you are limited to the clause. At maturity you can usually pay any amount, including the whole balance, and renew or switch what remains. The straight-switch rules, the stress test, and the $3,000 cost allowance are the renewal guide’s subject. This calculator does not know whether your file is a straight switch. It only prices the balance you still choose to carry.</p>

    <p>If the renewal rate is lower and you keep the old payment, the difference is itself a prepayment. Type that difference in the extra-amount box on the new run. If you spend the difference, the amortization stretches back out and the interest saved on this page never happens. The renewal guide’s line about a lower payment you spend being a longer amortization in disguise is the same point.</p>

    <h2>What will this not tell you?</h2>

    <ul>
        <li><strong>Your prepayment privilege.</strong> The percentage, the balance it multiplies, and whether unused room carries forward are in the commitment. FCAC’s prepayment pages are the consumer explanation of the charge when you exceed it.</li>
        <li><strong>The interest-rate differential for breaking a closed term.</strong> Paying $200 extra inside the privilege is not the same as refinancing. The penalty guide walks through FCAC’s example. Use the lender’s calculator before you break anything.</li>
        <li><strong>Whether the extra dollar beats a TFSA or an RRSP.</strong> This tool only prices the mortgage side. The neighbouring articles are the comparison, including the refund and the bracket.</li>
        <li><strong>Tax deductibility on a rental.</strong> Interest on the home you live in is not deductible, so the interest saved is not a tax event. Interest on a rental can be. Prepaying a deductible loan is a different decision, because the hurdle is the after-tax cost of the interest, not the contract rate itself. This page does not split them.</li>
        <li><strong>A variable rate that resets, a bi-weekly day count, or a payment the lender recalculates downward.</strong> Those schedules will not match. Match the disclosure.</li>
    </ul>

    <h2>Frequently asked questions</h2>

    <h3>Why is my bank’s payment a few dollars different?</h3>
    <p>The payment here is rounded to the cent, and interest is rounded to the cent each month. Lenders differ on when they round and on whether the first period is a full month. A few dollars on the payment is rounding. Hundreds of dollars means the rate, the amortization, or the balance you typed is not the disclosure.</p>

    <h3>Does the lump sum happen in month one?</h3>
    <p>No. It happens on each anniversary payment: month 12, month 24, and so on, after that month’s regular payment and after any extra monthly amount. If you will make the lump sum at the start, the interest saved will be a bit higher than this tool shows. The tool’s timing is stated so the $107,108.60 can be reproduced.</p>

    <h3>Can I type a biweekly payment?</h3>
    <p>Not as a frequency. The schedule is monthly. Do not divide the monthly payment by two and call it the bank’s accelerated bi-weekly. Accelerated bi-weekly is half the monthly payment, paid 26 times, which is 13 monthly payments a year. The monthly stand-in on the $400,000 illustration is an extra $193.87 a month. A regular bi-weekly payment, by contrast, still adds up to 12 monthly payments and is not the same prepayment.</p>

    <h3>What if the rate changes at renewal?</h3>
    <p>The tool holds one rate for the whole amortization. Run the remaining balance at the new rate when the renewal offer is in writing, and type only the prepayment the new term allows. The shopping decision around that offer is the <a href="/blog/mortgage-renewal-strategy-canada/">2026 renewal guide</a>.</p>

    <h3>Is the interest saved the same as money in my pocket today?</h3>
    <p>No. It is interest you do not pay over the shortened life of the loan. A dollar of interest avoided in year 16 is not a dollar in your account this month. The prepayment-versus-investing guide is the comparison with a return you could earn instead.</p>

    <h3>What happens if the payment does not cover the interest?</h3>
    <p>The tool stops and says the balance does not fall. That is a rate and payment combination that does not amortize. It is not a payment quote.</p>

    <h3>What is a lump-sum privilege, and what is a payment-increase privilege?</h3>
    <p>They are the two caps in a closed mortgage, and the commitment states each one. The lump-sum cap is a percentage of the original principal or of the current principal, payable on the dates the clause allows. The payment-increase cap is a percentage increase in the contractual payment, or a right to double a payment. This calculator does not store either percentage. Multiply the percentage you read by the balance or the payment the clause names, and type only that much.</p>

    <h3>Should I prepay the mortgage or contribute to a TFSA?</h3>
    <p>On a principal residence, prepaying earns a certain after-tax return equal to the contract rate, and the dollar is illiquid. A TFSA contribution earns whatever return you actually get, with no tax on the growth, and you can withdraw it. Compare that expected return, after the risk of abandoning it, with the rate on your disclosure. This page does not name a TFSA return. The priority against RRSP room and an employer match is the <a href="/blog/mortgage-prepayment-vs-tfsa-rrsp-canada/">TFSA and RRSP guide</a>.</p>

    <h3>Should I prepay the mortgage or contribute to an RRSP?</h3>
    <p>The RRSP adds a deduction now and an inclusion later. It can beat a prepayment when the deduction is in a higher bracket than the withdrawal and the refund is kept, in the mortgage or the TFSA. It loses when the brackets match and the refund is spent. Use your own marginal rates. The mortgage side of the dollar, the interest and the months, is what this calculator prices.</p>

    <h3>Does accelerated bi-weekly count as a prepayment?</h3>
    <p>Yes. Half the monthly payment, 26 times a year, is 13 monthly payments. The thirteenth payment is extra principal. Regular bi-weekly, which spreads 12 monthly payments over 26 dates, is not that extra payment. Confirm the accelerated amount still fits inside the payment-increase privilege.</p>

    <h3>When does a prepayment trigger a penalty?</h3>
    <p>When you pay more than the privilege, or you pay a closed mortgage off before the term ends. The charge is usually the higher of three months’ interest and an interest-rate differential. The method and FCAC’s example are the <a href="/blog/mortgage-prepayment-penalty-ird-canada/">penalty guide</a>. Use the lender’s penalty calculator for the dollar figure. This tool assumes the amount you type is allowed.</p>

    <h3>Can I prepay any amount at renewal?</h3>
    <p>At maturity the prepayment charge is usually zero, so a lump sum before the new term starts can be larger than the annual privilege. Confirm that on the renewal letter. An automatic renewal can start a new closed term and put the privilege back in force. After you renew, you are back to the new clause, and you should rerun this calculator at the new rate.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="/blog/canadian-mortgage-guide/">Canadian mortgage guide</a> — semi-annual compounding and the illustrative $2,767 payment on $500,000 at 4.50 percent.</li>
        <li><a href="https://www.canada.ca/en/financial-consumer-agency/services/mortgages/reduce-prepayment-penalties.html">FCAC: prepayment penalties</a></li>
        <li><a href="/blog/mortgage-prepayment-penalty-ird-canada/">IRD versus three months’ interest</a></li>
        <li><a href="/blog/mortgage-renewal-strategy-canada/">Mortgage renewal in 2026</a></li>
        <li><a href="/blog/mortgage-prepayment-vs-investing-canada/">Prepayment versus investing</a></li>
        <li><a href="/blog/mortgage-prepayment-vs-tfsa-rrsp-canada/">Prepayment versus TFSA and RRSP</a></li>
    </ul>

    <div class="cta-section">
        <p><strong>The prepayment is a choice. The penalty for guessing past the privilege is not.</strong></p>
        <p>Read the privilege before you type a lump sum larger than the contract allows. The tax character of the interest, if the property is not your home, is the 2026 tax guide.</p>
        <a href="/ebooks/tax-guide/" class="cta-button">Get the 2026 Tax Guide — $49 CAD</a>
    </div>

    ${footer(
      'Real Estate',
      'This is general education about Canadian mortgage arithmetic, not a payment quote or mortgage advice. The 5 percent and 4 percent rates in the examples are assumptions, not offers and not a market average. Prepayment privileges, rounding, and payment frequency are set by the contract. Confirm the disclosure and the lender’s schedule before you prepay or refinance.'
    )}

</div>`,
    '2026-10-03'
  ),
];
