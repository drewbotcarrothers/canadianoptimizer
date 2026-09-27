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
  content: string
): ToolPost {
  return {
    title,
    slug,
    category,
    categorySlug,
    author: 'Andrew Carrothers',
    date: '2026-09-27',
    updated: '2026-09-27',
    excerpt,
    image: `/images/blog/${slug}.png`,
    content,
  };
}

function footer(category: string, disclaimer: string) {
  return `<div class="article-footer">
        <p><strong>Disclaimer:</strong> ${disclaimer}</p>
        <div class="footer-note">Published: ${published} | Category: ${category} | Author: Andrew Carrothers</div>
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
    'Project RRSP and TFSA growth in today’s dollars, then add the CPP and OAS amounts you type. Official maximums are not filled in. Read them on Canada.ca and type your own figure.',
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
    'Mortgage Payment and Prepayment Calculator (Canada)',
    'Canadian mortgage payments with semi-annual compounding, plus the interest and months saved by a higher payment or an annual lump sum. The rate and the prepayment are yours to type.',
    `<div class="container">

    <div class="hook">
        On a $400,000 mortgage at 5 percent, amortized over 25 years with semi-annual compounding, the monthly payment is <span class="highlight">$2,326.42</span>. Adding $200 to every payment and $5,000 once a year cuts the interest from $297,925.98 to $190,817.38. That is $107,108.60 of interest and 97 months. The 5 percent is an assumption, not a rate on offer.
    </div>

    <p>Whether that extra dollar should go to the mortgage or to a TFSA is the <a href="/blog/mortgage-prepayment-vs-investing-canada/">prepayment versus investing guide</a> and the <a href="/blog/mortgage-prepayment-vs-tfsa-rrsp-canada/">priority against TFSA and RRSP room</a>. The contract around the rate is the <a href="/blog/canadian-mortgage-guide/">Canadian mortgage guide</a>. Breaking the term and paying a penalty is a different calculator. That one is the <a href="/blog/mortgage-prepayment-penalty-ird-canada/">IRD penalty guide</a>, and it tells you to use the lender’s own penalty tool. Renting instead of carrying the loan at all is <a href="/blog/rent-vs-buy-canada/">rent versus buy</a>.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>The monthly rate is (1 + annual rate / 2) to the power of 1/6, minus 1. The payment is rounded to the cent. Each month’s interest is rounded to the cent.</li>
            <li>A $500,000 loan at 4.50 percent over 25 years is $2,767.36 a month, the same convention as the mortgage guide, which rounds it to $2,767.</li>
            <li>The contractual payment does not fall when you prepay. The balance hits zero sooner.</li>
            <li>The annual lump sum is applied on every 12th payment, after that month’s regular payment and after the extra monthly amount.</li>
            <li>Without extras, the $400,000 illustration runs 300 months and $297,925.98 of interest. With $200 a month and $5,000 a year, it runs 203 months and $190,817.38 of interest.</li>
        </ul>
    </div>

    <h2>How much interest and time does a prepayment save?</h2>

    <p>Type the balance, the contract rate, and the amortization on the disclosure. Then type only the extra payment and the lump sum your privilege actually allows. A closed mortgage limits penalty-free prepayments. This page does not know the limit. If you type more than the privilege, the interest saved is fiction and the lender’s penalty is the real number.</p>

</div>

    <div id="mortgage-prepayment-calculator"></div>

<div class="container">

    <h2>How is the payment built?</h2>

    <p>Canadian residential mortgages are quoted with interest compounded semi-annually, not in advance. The calculator turns that quote into a monthly rate by taking (1 + annual rate / 2) to the power of one-sixth, then subtracting 1. At 5 percent, half the rate is 2.5 percent, and the monthly rate is (1.025) to the power of 1/6, minus 1. The payment is the standard amortizing payment on that monthly rate, rounded to the nearest cent. Interest each month is the remaining balance times that monthly rate, also rounded to the cent. Principal is the payment minus that interest. An extra amount, and the anniversary lump sum, reduce principal and do not change the next contractual payment.</p>

    <div class="example-box">
        <strong>Illustration: $400,000, 5 percent, 25 years, $200 extra, $5,000 a year</strong>
        <p>Payment $2,326.42. Baseline: 300 payments, which is 25 years 0 months, interest $297,925.98. With both prepayments: 203 payments, which is 16 years 11 months, interest $190,817.38. Interest saved $107,108.60. Time saved 97 months, which is 8 years 1 month. The lump sum lands on payments 12, 24, 36, and so on, and it is capped so it cannot overpay the last balance.</p>
    </div>

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

    <p>Both tables are the output of the assumptions in the headings. They are not a lender’s quote. A biweekly payment, a variable rate that changes, or a payment that is recalculated when you prepay will not match. Match the disclosure. If the lender’s schedule differs by more than rounding, their day count or their prepayment timing is different, and theirs governs.</p>

    <h2>What will this not tell you?</h2>

    <ul>
        <li><strong>Your prepayment privilege.</strong> Some contracts allow a percent of the original balance, some a percent of the current balance, some a double-up of the payment. The percent is in the commitment. FCAC’s prepayment pages are the consumer explanation of penalties when you exceed it.</li>
        <li><strong>The interest-rate differential for breaking a closed term.</strong> Paying $200 extra inside the privilege is not the same as refinancing. The penalty guide walks through FCAC’s example. Use the lender’s calculator before you break anything.</li>
        <li><strong>Whether the extra dollar beats a TFSA.</strong> Interest you do not pay on a principal residence is an after-tax, risk-free return equal to the contract rate. A TFSA return has to beat that rate after risk. The investing comparison is the neighbouring article. This tool only prices the mortgage side.</li>
        <li><strong>Tax deductibility.</strong> Interest on the home you live in is not deductible, so the interest saved is not a tax event. Interest on a rental can be. Prepaying a deductible loan is a different decision. This page does not split them.</li>
    </ul>

    <h2>Frequently asked questions</h2>

    <h3>Why is my bank’s payment a few dollars different?</h3>
    <p>The payment here is rounded to the cent, and interest is rounded to the cent each month. Lenders differ on when they round and on whether the first period is a full month. A few dollars on the payment is rounding. Hundreds of dollars means the rate, the amortization, or the balance you typed is not the disclosure.</p>

    <h3>Does the lump sum happen in month one?</h3>
    <p>No. It happens on each anniversary payment: month 12, month 24, and so on. If you will make the lump sum at the start, the interest saved will be a bit higher than this tool shows. The tool’s timing is stated so the $107,108.60 can be reproduced.</p>

    <h3>Can I type a biweekly payment?</h3>
    <p>Not in this version. The schedule is monthly. A biweekly contract has a different payment count. Do not divide the monthly payment by two and call it the bank’s accelerated biweekly. Accelerated biweekly is usually half the monthly payment, paid 26 times, which is more than 12 monthly payments.</p>

    <h3>What if the rate changes at renewal?</h3>
    <p>The tool holds one rate for the whole amortization. A five-year term at 5 percent and then an unknown renewal is not one 25-year rate. Run the remaining balance at the new rate when you have it. The renewal decision is the <a href="/blog/mortgage-renewal-strategy-canada/">2026 renewal guide</a>.</p>

    <h3>Is the interest saved the same as money in my pocket today?</h3>
    <p>No. It is interest you do not pay over the shortened life of the loan. A dollar of interest avoided in year 16 is not a dollar in your account this month. The prepayment-versus-investing guide is the comparison with a return you could earn instead.</p>

    <h3>What happens if the payment does not cover the interest?</h3>
    <p>The tool stops and says the balance does not fall. That is a rate and payment combination that does not amortize. It is not a payment quote.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="/blog/canadian-mortgage-guide/">Canadian mortgage guide</a> — semi-annual compounding and the illustrative $2,767 payment on $500,000 at 4.50 percent.</li>
        <li><a href="https://www.canada.ca/en/financial-consumer-agency/services/mortgages/reduce-prepayment-penalties.html">FCAC: prepayment penalties</a></li>
        <li><a href="/blog/mortgage-prepayment-penalty-ird-canada/">IRD versus three months’ interest</a></li>
    </ul>

    <div class="cta-section">
        <p><strong>The prepayment is a choice. The penalty for guessing past the privilege is not.</strong></p>
        <p>Read the privilege before you type a lump sum larger than the contract allows. The tax character of the interest, if the property is not your home, is the 2026 tax guide.</p>
        <a href="/ebooks/tax-guide/" class="cta-button">Get the 2026 Tax Guide — $49 CAD</a>
    </div>

    ${footer(
      'Real Estate',
      'This is general education about Canadian mortgage arithmetic, not a payment quote or mortgage advice. The 5 percent and 4 percent rates in the examples are assumptions, not September 2026 offers. Prepayment privileges, rounding, and payment frequency are set by the contract. Confirm the disclosure and the lender’s schedule before you prepay or refinance.'
    )}

</div>`
  ),
];
