type BudgetPost = {
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
  category: 'Budgeting & Saving',
  categorySlug: 'budgeting-saving',
  author: 'Andrew',
  date: '2026-09-27',
  updated: '2026-09-27',
} as const;

function budgetPost(
  slug: string,
  title: string,
  excerpt: string,
  content: string
): BudgetPost {
  return {
    ...meta,
    title,
    slug,
    excerpt,
    image: `/images/blog/${slug}.png`,
    content,
  };
}

const published = 'September 27, 2026';

const footer = `<div class="article-footer">
        <p><strong>Disclaimer:</strong> This is general education about Canadian deposits, cash ETFs, GICs, everyday accounts, budgeting tools, and insolvency options as of September 2026. It is not a rate quote, a product ranking, or deposit-insurance, investment, tax, credit, or legal advice. Rates, MERs, yields, fees, and app prices change. Figures are tied to issuer, fund, Bank of Canada, CDIC, or Office of the Superintendent of Bankruptcy pages reviewed in September 2026. Arithmetic on those figures is an illustration, not a maturity quote. Confirm the live page, your contribution room, and your coverage before you move money. Insolvency decisions belong with a Licensed Insolvency Trustee.</p>
        <div class="footer-note">Published: ${published} | Category: Budgeting &amp; Saving | Author: Andrew</div>
    </div>`;

export const budgetingClusterPosts: BudgetPost[] = [
  budgetPost(
    'canadian-cash-management-guide',
    'Canadian Cash Management Guide: HISAs, GICs, Cash ETFs, and T-Bills',
    'In September 2026 the Bank of Canada target is 2.25%. Park cash in a deposit, a GIC, or a cash ETF only after you know the date you need it.',
    `<div class="container">

    <div class="hook">
        Short-term money in Canada is a date, a legal form, and a tax location. In September 2026 the Bank of Canada’s target for the overnight rate is <span class="highlight">2.25%</span>, unchanged at the 2 September announcement. A high-interest savings account, a GIC, and a cash ETF are three different contracts sitting near that rate. The headline yield is the last input.
    </div>

    <p>This is the hub for the budgeting cluster. Ongoing deposit rates versus offers that expire are <a href="/blog/best-high-interest-savings-accounts-canada/">best high-interest savings accounts</a>. CASH, PSA, and CBIL are <a href="/blog/cash-vs-psa-vs-cbil-hisa-etf/">three cash ETFs compared</a>. Locking slices of a known date is <a href="/blog/gic-ladder-canada/">how to build a GIC ladder</a>. Coverage above one pile of $100,000 is <a href="/blog/cdic-coverage-explained-canada/">CDIC, explained</a>. The account that pays the bills is <a href="/blog/best-no-fee-chequing-account-canada/">no-fee chequing</a>. The tool that assigns the dollars is <a href="/blog/best-budgeting-apps-canada/">budgeting apps</a>. When the bills have already won, the legal fork is <a href="/blog/consumer-proposal-vs-bankruptcy-canada/">a consumer proposal versus bankruptcy</a>.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>The Bank of Canada target was 2.25% on 2 September 2026. Deposit rates and ETF yields move around that target. They are not the target.</li>
            <li>A HISA or GIC at a CDIC member can be an eligible deposit. A cash ETF is a security. CDIC’s page lists ETFs as not eligible.</li>
            <li>EQ Bank’s rates page, effective 16 September 2026, shows 1.00% on the Personal Account, or 2.75% with qualifying pay deposits. Notice savings is 2.35% (10-day) or 2.75% (30-day).</li>
            <li>Global X listed CASH’s annualized distribution yield at 2.02% as at 24 September 2026, and CBIL’s at 2.15% as at 2 September 2026. Purpose showed a 2.18% net yield on PSA on 25 September 2026.</li>
            <li>Interest outside a TFSA, RRSP, or FHSA is fully taxable. Compare the after-tax figure, then the date you can actually spend the dollar.</li>
        </ul>
    </div>

    <h2>Where should a dollar you might spend actually sit?</h2>

    <p>Write the spending date before you write the product. Money for a bill this week is not the same contract as money for a roof in four years. The older decision framework, without a live rate table, is <a href="/blog/hisa-vs-cash-etf-canada/">HISA versus cash ETF</a>. This page is the map those vehicles hang on. How large the cash pile should be is the <a href="/blog/emergency-fund-heloc-investments-canada/">emergency-fund guide</a>, not a yield contest.</p>

    <table>
        <caption>Short-term vehicles, as of September 2026. Rates are not in this table. They are in the spokes, with the date of the page that stated them.</caption>
        <thead>
            <tr>
                <th>Vehicle</th>
                <th>What you hold</th>
                <th>When you can spend it</th>
                <th>What it is not</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Everyday savings or a combined chequing account</td>
                <td>A deposit, if the institution is a CDIC member and the product is an eligible deposit</td>
                <td>Usually the same day or the next, inside transfer limits. EQ’s own page says an EFT to a linked bank takes two to three business days.</td>
                <td>A rate that survives after a direct-deposit hurdle or a teaser ends. Read <a href="/blog/best-high-interest-savings-accounts-canada/">ongoing versus promo</a>.</td>
            </tr>
            <tr>
                <td>Notice savings</td>
                <td>A deposit you have agreed not to touch until the notice period runs</td>
                <td>EQ lists 10 days at 2.35% and 30 days at 2.75%, effective 16 September 2026</td>
                <td>An emergency fund. The notice is the product.</td>
            </tr>
            <tr>
                <td>GIC</td>
                <td>A term deposit. EQ says its GICs are non-redeemable once the cancellation window closes.</td>
                <td>The maturity date. A ladder, not a single five-year lock, is <a href="/blog/gic-ladder-canada/">the ladder</a>.</td>
                <td>Five separate CDIC limits. Rungs at one member in one name share a category.</td>
            </tr>
            <tr>
                <td>HISA ETF or T-bill ETF</td>
                <td>Units. CASH holds bank deposits. CBIL holds Government of Canada treasury bills. PSA’s page describes both bank deposits and T-bills.</td>
                <td>After you sell and your broker releases the cash. Purpose describes PSA liquidity as T+1.</td>
                <td>A CDIC deposit. Global X states that CASH and CBIL are not covered by CDIC. Purpose states the same for its fund securities.</td>
            </tr>
        </tbody>
    </table>

    <p>Table as of September 2026. It is a sequence, not a quote. The Bank of Canada’s next fixed announcement date on the schedule reviewed is 28 October 2026.</p>

    <h2>What is the rate environment, not the ad?</h2>

    <p>The target for the overnight rate was cut by 0.25 percentage points on 29 October 2025, from 2.50% to 2.25%, and the Bank’s table shows 2.25% at every announcement since, including 2 September 2026. Deposit specials and fund distributions are priced off that short end. They are not promised to match it. A page that still shows a 2024 yield is describing a different policy rate.</p>

    <div class="example-box">
        <strong>Illustration, not a forecast: why the second page matters</strong>
        <p>EQ’s Personal Account base rate on the 16 September 2026 rates page is 1.00%. The 2.75% line is 1.00% plus a 1.75% bonus, and the product page pays that bonus only while qualifying direct deposits of pay total at least $2,000 a month. Someone who screenshots 2.75% and then never sets up the deposit earns the base. That gap, 1.75 percentage points, is the whole “ongoing versus promo” argument. The full table is the HISA post.</p>
    </div>

    <h2>Which account should hold the cash?</h2>

    <p>Interest is fully included in income outside a registered account. There is no dividend tax credit on a savings distribution. The character of that income is <a href="/blog/tax-efficient-investing/">tax-efficient investing</a>. Your marginal rate is the <a href="/blog/federal-tax-brackets/">federal brackets</a> plus the <a href="/blog/provincial-tax-rates/">provincial rates</a>, not a number this page will invent.</p>

    <ul>
        <li><strong>TFSA.</strong> Interest inside the account is not taxed. The cost is room you might rather fill with a long-term holding. Withdrawn room generally returns the next 1 January, not the day you take the money out. The account is the <a href="/blog/tfsa-strategies/">TFSA guide</a>. January funding is the <a href="/blog/tfsa-contribution-optimization/">contribution guide</a>. The year’s dollar limit is the <a href="/blog/contribution-limits/">limits table</a>.</li>
        <li><strong>RRSP.</strong> A poor home for money you may need. A withdrawal is included in income and the room does not come back. Do not hide an emergency fund here for the deduction. The account order is <a href="/blog/rrsp-vs-tfsa-vs-fhsa/">RRSP versus TFSA versus FHSA</a>.</li>
        <li><strong>FHSA.</strong> The right pocket for a down payment that has a date, and the wrong pocket for an equity bet if that date is close. Cash or a GIC inside it is a horizon decision. The sequence is <a href="/blog/fhsa-home-purchase-sequencing-canada/">FHSA sequencing</a> and the <a href="/blog/fhsa-guide/">FHSA guide</a>.</li>
        <li><strong>Non-registered.</strong> The default for a balance that does not fit in unused registered room and that you might spend without wanting a registered withdrawal. Track the interest. A T5 or a T3 is not optional because the amount felt small.</li>
    </ul>

    <div class="warning-box">
        <strong>A cash ETF inside a TFSA is still a security:</strong>
        <p>The shelter removes tax on the distribution. It does not turn the units into a deposit, and it does not make the units CDIC-insured. Room used on cash is room not used on the equity sleeve in <a href="/blog/diy-etf-portfolio-asset-location-canada/">the asset-location map</a>. If you will fill the TFSA with long-term holdings anyway, the emergency slice can sit in a taxable deposit and the TFSA can stay invested.</p>
    </div>

    <h2>How do you insure more than one pile?</h2>

    <p>CDIC’s depositor page states that each insurance category is protected separately up to $100,000, including principal and interest, and that a person with deposits in more than one category can have more than $100,000 of coverage in total. The categories named on that page are deposits in one name, joint deposits, RRSP, RRIF, TFSA, RDSP, RESP, FHSA, and trusts. Mutual funds, stocks, bonds, ETFs, and crypto are listed as not eligible. EQ Bank’s own FAQ says deposits under the EQ Bank and Equitable Bank names are aggregated: they are one member, not two. The stacking rules, including the Wealthsimple trust structure, are the <a href="/blog/cdic-coverage-explained-canada/">CDIC guide</a>.</p>

    <h2>How does the cash pile connect to the rest of the household?</h2>

    <p>A rate does not fix a leak. The transfer that fills the pile is the <a href="/blog/cash-flow-system-canada/">cash-flow system</a> and the <a href="/blog/money-automation-stack-canada/">automation stack</a>. The share of income that transfer should be is <a href="/blog/saving-rate-targets-canada/">saving-rate targets</a>. Two people running two systems is <a href="/blog/couples-money-system-canada/">the couples system</a>. Subscriptions and telecom bills that never touch the savings rate are the <a href="/blog/fixed-cost-audit-canada/">fixed-cost audit</a>. Spending that belongs on a card, not in the HISA, is <a href="/blog/best-credit-cards-canada/">the credit-card hub</a>.</p>

    <p>Debt changes the order. A balance charging a high purchase rate is usually a worse place to leave money than a 2-something percent deposit. The fair comparison, including the cases where investing still wins, is <a href="/blog/debt-payoff-vs-investing-canada/">debt payoff versus investing</a>. If the unsecured debts are already past what a budget can clear, stop rate-shopping and read the insolvency comparison. A Licensed Insolvency Trustee, not a blog, files either process.</p>

    <div class="tip-box">
        <strong>Put a review date on the winner:</strong>
        <p>Once a quarter, open the deposit page and the ETF page on the same day. Write the rate you will earn after the hurdle, after the MER, and after tax. The <a href="/blog/how-to-invest-canada-guide/">investing guide</a> is where cash stops and a portfolio starts. Cash is a parking spot. It is not an asset allocation.</p>
    </div>

    <h2>Frequently asked questions</h2>

    <h3>Is a HISA or a cash ETF better in 2026?</h3>
    <p>Whichever you can spend on the day you named, after tax and after the fee. A deposit at a CDIC member is the first layer if you might need it inside a few days and the product is an eligible deposit. A cash ETF can suit a larger balance you can wait to sell, once you have subtracted the MER and accepted that CDIC does not cover the units. Compare today’s pages, not a screenshot. The vehicle post and the three-ticker post do that split.</p>

    <h3>Does the Bank of Canada rate equal my savings rate?</h3>
    <p>No. The target was 2.25% as of the 2 September 2026 announcement. Banks and fund managers set their own rates around that policy rate, and they change them on their own calendars. EQ’s 1.00% base and 2.75% bonus, effective 16 September 2026, are both real and neither is 2.25%. Read the issuer page the day you move the money.</p>

    <h3>Should emergency savings go in a TFSA?</h3>
    <p>Only if you will not fill that room with a long-term holding anyway. The shelter on interest is real. The cost is the room, and a withdrawal does not restore the room until the next calendar year. A taxable HISA plus a TFSA full of the portfolio you meant to own is often the cleaner split. The emergency-fund guide sizes the pile. This guide only places it.</p>

    <h3>Are EQ Bank and Equitable Bank separately insured?</h3>
    <p>Not on EQ’s own description. The bank says deposits made under both names are aggregated for CDIC purposes, up to $100,000 per insured category per depositor. A Personal Account and a GIC in the same name at that member share the “one name” category. A joint deposit is a different category. Confirm the member on CDIC’s list before you treat a trade name as a second insurer.</p>

    <h3>Where do GICs fit if rates might fall?</h3>
    <p>A ladder locks a slice each year so you are not guessing the whole balance on one day. EQ’s non-registered table, reviewed 27 September 2026, is the rate card in the ladder post. The rate on the rung you buy next year is not on that card. If you might need the money early, EQ says the GIC is non-redeemable after the cancellation period. Use a deposit instead.</p>

    <h3>What if the cash is actually a debt problem?</h3>
    <p>Then the yield is the wrong worksheet. Compare the after-tax interest you earn with the interest you are paying, using the debt-payoff post. If unsecured debts are beyond a repayment you can finish, the OSB describes a consumer proposal for individuals whose debts do not exceed $250,000, not counting a mortgage on a principal residence, and a bankruptcy with a different clock. That comparison is its own article. Talk to a Licensed Insolvency Trustee before you file either one.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="https://www.bankofcanada.ca/core-functions/monetary-policy/key-interest-rate/">Bank of Canada: policy interest rate</a></li>
        <li><a href="https://www.eqbank.ca/rates">EQ Bank: rates and accounts</a>, effective 16 September 2026</li>
        <li><a href="https://www.cdic.ca/depositors/whats-covered/">CDIC: what’s covered</a></li>
        <li><a href="https://www.globalx.ca/product/cash">Global X: CASH</a> and <a href="https://www.globalx.ca/product/cbil">CBIL</a></li>
        <li><a href="https://www.purposeinvest.com/funds/purpose-high-interest-savings-fund">Purpose: High Interest Savings Fund (PSA)</a></li>
    </ul>

    <div class="cta-section">
        <p><strong>The rate is a quote. The tax on the interest is a return.</strong></p>
        <p>Marginal rates decide what a taxable HISA actually pays you. The 2026 tax guide is that half of the comparison.</p>
        <a href="/ebooks/tax-guide/" class="cta-button">Get the 2026 Tax Guide — $49 CAD</a>
    </div>

    ${footer}

</div>`
  ),

  budgetPost(
    'best-high-interest-savings-accounts-canada',
    'Best High-Interest Savings Accounts in Canada (2026): Ongoing Rates vs Promos',
    'EQ Bank’s Personal Account pays 1.00%, or 2.75% with $2,000 of monthly pay deposits, effective 16 September 2026. A teaser that expires is a different product.',
    `<div class="container">

    <div class="hook">
        The savings rate that matters is the one still posted after the offer ends. As of EQ Bank’s rates page, effective <span class="highlight">16 September 2026</span>, the Personal Account pays 1.00%, or 2.75% if qualifying direct deposits of pay total at least $2,000 a month. That 2.75% is a bonus on top of the base, not a separate account, and EQ says it lasts while the deposits continue. A new-client teaser with an end date is a different contract.
    </div>

    <p>The map of deposits, GICs, and cash ETFs is the <a href="/blog/canadian-cash-management-guide/">cash management guide</a>. How a fund yield compares once you are willing to hold a security is <a href="/blog/cash-vs-psa-vs-cbil-hisa-etf/">CASH versus PSA versus CBIL</a>. Whether the balance is even the right size is the <a href="/blog/emergency-fund-heloc-investments-canada/">emergency-fund guide</a>.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>Write down the rate in month six, not the rate in the ad. If the page does not say what happens when the offer ends, you do not have an ongoing rate.</li>
            <li>EQ’s 2.75% requires $2,000 a month of qualifying pay deposits. Without them the posted base is 1.00%. Both lines are effective 16 September 2026.</li>
            <li>EQ notice savings pays 2.35% with 10 days’ notice or 2.75% with 30 days’ notice. The wait is the product. It is a bad first-layer emergency fund.</li>
            <li>Wealthsimple’s chequing page lists 1.25% (Core), 1.75% (Premium), and 2.25% (Generation), with a 0.5 point boost for Core and Premium if $2,000 lands in 30 days, and not above 2.25%.</li>
            <li>Tangerine’s and Simplii’s public rate tables did not return a readable number in a static fetch on 27 September 2026. This page does not invent one. Open the issuer page.</li>
        </ul>
    </div>

    <div class="callout">
        <p><strong>Choose an ongoing rate if…</strong> you will still qualify next quarter, because the hurdle is a direct deposit or an asset tier you already have. <strong>Treat a promo as a promo if…</strong> the page names an end date, a “new money” window, or a rate that applies only to clients who opened in a stated period. When the teaser ends, the comparison starts over.</p>
    </div>

    <h2>What is an ongoing rate, and what is a promo?</h2>

    <p>An ongoing rate is the number the institution says it pays now, with the conditions printed beside it, and with no calendar end on the page you are reading. It can still change. EQ’s notice-savings page says the rate is subject to change and that the bank will email you if it does. “Ongoing” means “not a countdown,” not “guaranteed.”</p>

    <p>A promo is a higher number with an expiry, a cap on which dollars earn it, or a requirement that you be a new client. The honest test is mechanical. Copy the rate into a note, write the condition, and write the date it dies. If you cannot find the date, look for the sentence that says the bonus continues only while a deposit lands. That sentence is the condition. It is still not an expiry, and it is still not the base rate.</p>

    <p>EQ’s Personal Account FAQ uses the word “promotion” for the 2.75% line and, in the same set of answers, says existing customers earn it for as long as direct deposits total at least $2,000 each month. Read both sentences. The bonus is conditional and, on the page reviewed, not a five-month teaser. Miss the direct deposit and the rates page says you are at 1.00%.</p>

    <h2>Which rates were actually on the issuer pages?</h2>

    <p>The table is limited to pages that returned a number on 27 September 2026. Tangerine’s rates index describes a savings account and a no-monthly-fee chequing account, and Simplii’s high-interest savings page describes balance tiers, but both sites filled the rate cells with a script this fetch could not read. Quoting a blog’s version of those rates would be how a stale 4-point teaser ends up presented as fact. Check those two sites yourself the day you move money, and write down the rate that applies after any introductory period.</p>

    <table>
        <caption>Deposit rates read from issuer pages on 27 September 2026. EQ’s table is effective 16 September 2026. Wealthsimple dates the comparison chart on its chequing page as collected 11 June 2026; the rate FAQ on that same page states the tiers below.</caption>
        <thead>
            <tr>
                <th>Account</th>
                <th>Posted rate</th>
                <th>What you must do</th>
                <th>What the page says about the end</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>EQ Bank Personal Account</td>
                <td>1.00% base, or 2.75% (1.00% plus a 1.75% bonus)</td>
                <td>Direct deposits of pay totalling at least $2,000 in the month, for the bonus</td>
                <td>Bonus continues while the deposits continue. The FAQ also calls the bonus a promotion. No end date was printed on the rates page.</td>
            </tr>
            <tr>
                <td>EQ Bank Joint Account</td>
                <td>Same 1.00% / 2.75% split</td>
                <td>Same direct-deposit test</td>
                <td>Same rates page, effective 16 September 2026</td>
            </tr>
            <tr>
                <td>EQ Bank 10-day notice savings</td>
                <td>2.35%</td>
                <td>Give 10 days’ notice to withdraw</td>
                <td>EQ says the rate can change and that it will email you</td>
            </tr>
            <tr>
                <td>EQ Bank 30-day notice savings</td>
                <td>2.75%</td>
                <td>Give 30 days’ notice to withdraw</td>
                <td>Same change language as the 10-day account</td>
            </tr>
            <tr>
                <td>EQ Bank TFSA, FHSA, and RRSP cash savings</td>
                <td>1.50% on each</td>
                <td>Registered room, and the account has to be open</td>
                <td>Posted on the same 16 September 2026 rates page. Not a bonus rate.</td>
            </tr>
            <tr>
                <td>Wealthsimple chequing, Core</td>
                <td>1.25%, or up to 2.25% with the boost</td>
                <td>Under $100,000 in assets for the 1.25% tier. A further 0.5 point if at least $2,000 is direct-deposited in 30 days, and not above 2.25%</td>
                <td>Wealthsimple says the rates have no set end date and that they follow Bank of Canada changes. They can still change.</td>
            </tr>
            <tr>
                <td>Wealthsimple chequing, Premium</td>
                <td>1.75% above $100,000 in assets, plus the same 0.5 point boost, capped at 2.25%</td>
                <td>The asset tier, and the direct deposit if you want the boost</td>
                <td>Same “no set end date” sentence</td>
            </tr>
            <tr>
                <td>Wealthsimple chequing, Generation</td>
                <td>2.25% at $500,000 or more in assets</td>
                <td>The asset tier. Generation is not eligible for a further 0.5 point, because 2.25% is already the top rate on the page</td>
                <td>Same sentence</td>
            </tr>
        </tbody>
    </table>

    <p>Table as of 27 September 2026. EQ also lists a US-dollar account at 2.50% on that rates page. It is a currency decision, not a Canadian-dollar parking spot, and this page does not compare it with a Canadian HISA.</p>

    <h2>What do you keep after tax?</h2>

    <p>Outside a TFSA, RRSP, or FHSA, interest is included in your income. A posted 2.75% is not 2.75% in your pocket. Multiply by one minus your combined marginal rate. This page will not invent that rate. Look it up on the <a href="/blog/federal-tax-brackets/">federal</a> and <a href="/blog/provincial-tax-rates/">provincial</a> tables for your province and your bracket.</p>

    <div class="example-box">
        <strong>Illustration only: 2.75% at an assumed 40% marginal rate</strong>
        <p>Forty percent is not a Canadian average and not your rate. It is a round number so the arithmetic is easy to check. Keep 60% of the interest: 2.75% times 0.60 is 1.65%. On a $10,000 balance that stays $10,000, 2.75% is $275 of interest before tax. At this assumed 40%, tax is $110 and you keep $165. The same $10,000 inside a TFSA keeps the $275 if the rate is actually 2.75% for the whole year, and it spends TFSA room. EQ’s registered cash accounts were posted at 1.50% on the same day, which is $150 on $10,000 before any fee this page did not see. Shelter does not repair a lower posted rate. Run your own bracket before you move registered room onto cash.</p>
    </div>

    <h2>Who is each account actually for?</h2>

    <ul>
        <li><strong>You already direct-deposit a paycheque of at least $2,000.</strong> EQ’s 2.75% is the ongoing line to beat, with the bonus condition written down. Pair it with a no-fee chequing account if EQ’s limits bother you: no cheques, no cash deposits, no bank drafts. That tradeoff is the <a href="/blog/best-no-fee-chequing-account-canada/">chequing comparison</a>.</li>
        <li><strong>You will not move your pay.</strong> Do not quote yourself 2.75%. EQ’s base is 1.00%. Wealthsimple Core at 1.25%, or 1.75% if the boost applies, can be higher than a base you will actually earn. Read both pages the same day.</li>
        <li><strong>The dollar has a date and you can wait.</strong> Notice savings pays for the wait. A 30-day notice account is not the rent money. The first layer of an emergency fund has to move without notice. The <a href="/blog/emergency-fund-heloc-investments-canada/">emergency-fund guide</a> is that test.</li>
        <li><strong>The dollar is a house down payment inside an FHSA.</strong> EQ’s FHSA cash rate on the page was 1.50%, not the 2.75% personal-account bonus. A GIC inside the FHSA is the ladder post. Do not buy an equity ETF because the cash rate looks dull. The timeline is <a href="/blog/fhsa-home-purchase-sequencing-canada/">FHSA sequencing</a>.</li>
    </ul>

    <div class="warning-box">
        <strong>CDIC is not automatic just because the ad says “savings”:</strong>
        <p>CDIC’s depositor FAQ says it determines whether a given high-interest savings account is an eligible deposit case by case. EQ states that its deposits are eligible and that EQ Bank is a trade name of Equitable Bank, one CDIC member. Wealthsimple states that it is not a bank and not a CDIC member, and that chequing balances are held in trust at member institutions. Those are different sentences. The coverage map is <a href="/blog/cdic-coverage-explained-canada/">CDIC coverage</a>.</p>
    </div>

    <h2>How often should you re-check?</h2>

    <p>The Bank of Canada’s target was 2.25% at the 2 September 2026 announcement, and the next date on its 2026 schedule is 28 October. Banks do not have to wait for that date to change a deposit rate. A quarterly fifteen minutes is enough: today’s base rate, today’s bonus and its hurdle, the rate after any teaser, and the account the money sits in. Automate the transfer in the <a href="/blog/money-automation-stack-canada/">automation stack</a>. Do not automate the assumption that last quarter’s winner is still ahead.</p>

    <h2>Frequently asked questions</h2>

    <h3>What is the highest ongoing savings rate in Canada right now?</h3>
    <p>This page will not crown one. On the pages reviewed on 27 September 2026, EQ’s 2.75% Personal Account bonus and EQ’s 2.75% 30-day notice account are the highest Canadian-dollar figures that came back with a condition attached. Wealthsimple’s top posted chequing rate is 2.25% for Generation clients. Tangerine and Simplii did not return a readable rate in the fetch, so they are absent on purpose. Check them before you decide you have the highest number.</p>

    <h3>Is EQ’s 2.75% a promo?</h3>
    <p>EQ’s FAQ calls it a promotion and also says you keep it while monthly qualifying pay deposits stay at or above $2,000. The rates page, effective 16 September 2026, shows it as 1.00% base plus 1.75% bonus, with no end date on that table. Treat it as conditional and ongoing, and re-read the terms the month your pay schedule changes. If the deposits stop, the page says the rate does too.</p>

    <h3>Why isn’t Tangerine or Simplii in the rate table?</h3>
    <p>Their rate pages did not render a number in a static fetch on 27 September 2026. Simplii’s savings page showed balance tiers with the percentage replaced by a placeholder. Inventing a “base” or a “4 percent promo” from another site would break the rule this article is built on. Open the issuer page, record the rate, the end date, and which dollars it applies to, and compare that note with the table above.</p>

    <h3>Should I chase a five-month teaser?</h3>
    <p>Only if you will move the money on the day it ends, and only if the after-tax gap beats the hassle. A teaser on new money that then falls to a low base is how people earn a high rate for a season and a poor rate for the rest of the year. Write the month-six rate in the same note as the teaser. If you will not calendar the move, take the ongoing rate you will still have in month six.</p>

    <h3>Is a notice account a HISA?</h3>
    <p>It is a savings deposit with a withdrawal delay. EQ pays 2.35% for 10 days’ notice and 2.75% for 30 days’ notice, on the 16 September 2026 page. The rate can look like a top HISA. The liquidity does not. Keep the bill money in an account you have already withdrawn from once, without notice.</p>

    <h3>Does a higher rate change my emergency fund?</h3>
    <p>No. The size of the fund is months of spending you cannot easily cut, set in the emergency-fund guide. A better rate changes how much interest that pile earns. It does not make a HELOC a substitute for the pile, and it does not make a 30-day notice account the first layer.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="https://www.eqbank.ca/rates">EQ Bank: rates and accounts</a>, effective 16 September 2026</li>
        <li><a href="https://www.eqbank.ca/personal-banking/personal-account">EQ Bank: Personal Account</a></li>
        <li><a href="https://www.eqbank.ca/personal-banking/notice-savings-account">EQ Bank: Notice Savings Account</a></li>
        <li><a href="https://www.wealthsimple.com/en-ca/chequing">Wealthsimple: chequing</a></li>
        <li><a href="https://www.bankofcanada.ca/core-functions/monetary-policy/key-interest-rate/">Bank of Canada: policy interest rate</a></li>
        <li><a href="https://www.cdic.ca/what-happens-in-a-failure/resolution-of-small-and-medium-size-banks/reimbursement-of-insured-deposits/for-depositors/">CDIC: for depositors</a>, including the HISA eligibility answer</li>
    </ul>

    <div class="cta-section">
        <p><strong>A posted rate is not an after-tax rate.</strong></p>
        <p>Interest lands on the T1 at your marginal rate. The 2026 tax guide is how that line is calculated.</p>
        <a href="/ebooks/tax-guide/" class="cta-button">Get the 2026 Tax Guide — $49 CAD</a>
    </div>

    ${footer}

</div>`
  ),

  budgetPost(
    'cash-vs-psa-vs-cbil-hisa-etf',
    'CASH vs PSA vs CBIL: Canadian HISA and T-Bill ETFs Compared',
    'As of late September 2026, CASH’s annualized distribution yield is 2.02% and CBIL’s is 2.15%. PSA’s page shows a 2.18% net yield. None is CDIC-insured.',
    `<div class="container">

    <div class="hook">
        CASH, PSA, and CBIL are three Toronto-listed cash funds, not three savings accounts. On the pages reviewed in late September 2026, Global X showed an annualized distribution yield of <span class="highlight">2.02%</span> for CASH (as at 24 September) and <span class="highlight">2.15%</span> for CBIL (as at 2 September). Purpose showed a net yield of <span class="highlight">2.18%</span> for PSA on 25 September, next to a separate 2.35% figure the same day. None of those yields is a CDIC deposit rate.
    </div>

    <p>Where a deposit still beats a fund is the <a href="/blog/canadian-cash-management-guide/">cash management guide</a> and the <a href="/blog/best-high-interest-savings-accounts-canada/">HISA comparison</a>. The older structure piece, written before these yields, is <a href="/blog/hisa-vs-cash-etf-canada/">HISA versus cash ETF</a>. Brokerage costs around the trade are <a href="/blog/best-online-brokerages-canada/">online brokerages</a> and <a href="/blog/wealthsimple-vs-questrade/">Wealthsimple versus Questrade</a>.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>CASH holds bank deposit accounts. CBIL holds Government of Canada treasury bills generally under three months. PSA’s page says it holds Schedule I bank deposits and short-term Government of Canada treasury bills. PSA is the blend.</li>
            <li>Global X lists a 0.10% management fee, plus sales tax, on both CASH and CBIL. CASH’s MER is 0.11% as at 30 June 2026. CBIL’s MER is 0.11% as at 31 December 2025.</li>
            <li>Purpose’s PSA page on 25 September 2026 showed 2.35% and a net yield of 2.18%, with a unit price of $50.09. A 0.17% figure on that page is dated 30 June 2026. Confirm which line is the fee before you subtract it twice.</li>
            <li>Global X states that CASH and CBIL are not covered by CDIC. Purpose states that its investment-fund securities are not covered by CDIC either.</li>
            <li>Distributions are interest income outside a registered account. A higher yield that you then pay tax on can lose to a deposit you were already going to hold.</li>
        </ul>
    </div>

    <div class="callout">
        <p><strong>Choose CASH if…</strong> you want bank-deposit exposure inside a fund and you accept bank credit rather than Government of Canada bills. <strong>Choose CBIL if…</strong> you want the fund’s assets to be short Government of Canada treasury bills and you accept that the yield follows T-bill rates, not a bank’s posted savings rate. <strong>Choose PSA if…</strong> you want Purpose’s mix of bank deposits and T-bills and you have checked the net-yield line, not only the larger percentage on the same page. <strong>Choose a HISA instead if…</strong> you need CDIC treatment or same-day spending money.</p>
    </div>

    <h2>What does each fund actually hold?</h2>

    <p>The ticker is not the holding. Global X says CASH invests primarily in high-interest deposit accounts with Canadian banks, and that it seeks monthly income while preserving capital and liquidity. The same manager says CBIL seeks interest income from Government of Canada treasury bills with remaining maturities generally under three months, and it describes those bills as backed by the full faith and credit of the Canadian government. That is a credit difference, not a marketing adjective. A bank deposit inside a fund is a claim on the bank, held by the fund. A treasury bill is a claim on the federal government, held by the fund. You own units either way.</p>

    <p>Purpose’s description of PSA is both. The page says the fund allocates to high-interest deposit accounts with Schedule I Canadian banks and to short-term Bank of Canada treasury bills. Comparing PSA with CASH as if both were pure bank-deposit funds, or with CBIL as if both were pure T-bill funds, skips the sentence Purpose wrote. Read the holdings on the day you buy. They change.</p>

    <h2>What were the yields and fees on the day the pages were read?</h2>

    <table>
        <caption>Figures taken from the manager pages reviewed on 27 September 2026. Each cell keeps the “as at” date the manager printed. Yields are not comparable to each other without reading the definition under the number.</caption>
        <thead>
            <tr>
                <th></th>
                <th>CASH (Global X)</th>
                <th>PSA (Purpose)</th>
                <th>CBIL (Global X)</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>What the page calls the yield</td>
                <td>Annualized distribution yield 2.02% as at 24 September 2026. Gross yield 2.16% effective 8 July 2026. 12-month trailing yield 2.06% as at 31 August 2026.</td>
                <td>Net yield 2.18% on 25 September 2026. The same page also displayed 2.35% dated 25 September 2026. This article does not relabel 2.35% as “gross” because the static text did not.</td>
                <td>Annualized distribution yield 2.15% as at 2 September 2026. 12-month trailing yield 2.23% as at 31 August 2026.</td>
            </tr>
            <tr>
                <td>Management fee</td>
                <td>0.10%, plus applicable sales tax</td>
                <td>Not cleanly labelled in the static fetch. Do not guess.</td>
                <td>0.10%, plus applicable sales tax</td>
            </tr>
            <tr>
                <td>MER</td>
                <td>0.11% as at 30 June 2026. TER 0.00% the same date.</td>
                <td>A 0.17% figure is dated 30 June 2026 on the page. Confirm whether that line is the MER or the management fee.</td>
                <td>0.11% as at 31 December 2025. TER 0.00% the same date.</td>
            </tr>
            <tr>
                <td>Recent price or NAV</td>
                <td>NAV $50.07 as at 24 September 2026</td>
                <td>$50.09 on 25 September 2026</td>
                <td>Not used here. Net assets were listed at about $2.73 billion as at 2 September 2026.</td>
            </tr>
            <tr>
                <td>Latest distribution cited</td>
                <td>$0.08430 per unit, ex-dividend 31 August 2026, paid 8 September 2026</td>
                <td>Not copied. The page says interest is calculated daily and paid monthly.</td>
                <td>$0.08970 per unit in the distribution metrics as at 31 August 2026</td>
            </tr>
            <tr>
                <td>CDIC</td>
                <td>Global X: the ETF is not covered by CDIC</td>
                <td>Purpose: investment-fund securities are not covered by CDIC</td>
                <td>Global X: the ETF is not covered by CDIC</td>
            </tr>
            <tr>
                <td>Liquidity language</td>
                <td>Can be bought or sold through the trading day. Your broker still has to release the cash.</td>
                <td>Purpose says daily liquidity (T+1)</td>
                <td>Exchange-traded. Global X also warns the fund may not hold a constant NAV.</td>
            </tr>
        </tbody>
    </table>

    <p>Table as of 27 September 2026. Global X defines the annualized distribution yield as the most recent regular distribution, annualized, divided by current NAV. That is not the gross yield, and it is not a forecast. CASH’s August distribution of $0.08430 was lower than its July distribution of $0.10000 on the same distribution table. The yield you saw in July was not the yield the August payment produced.</p>

    <div class="example-box">
        <strong>Illustration: one month of CASH’s August distribution on a round unit count</strong>
        <p>The 31 August 2026 cash distribution was $0.08430 per unit. Two hundred units, a $10,014 position if the 24 September NAV of $50.07 still applied, would have been paid $16.86 for that month. Annualize that single month and you get $202.32, about 2.02% of $10,014, which is why the annualized yield and the latest distribution agree and why a fatter month would not. This is arithmetic on Global X’s figures. It is not a projection, and it ignores any premium or discount you pay to get in or out. CASH’s own price-and-NAV block showed a 0.02% premium or discount figure as at 24 September 2026. Small is not zero.</p>
    </div>

    <h2>Why can the “higher yield” still lose?</h2>

    <p>Three subtractions sit between the headline and the dollar you keep.</p>

    <ul>
        <li><strong>The MER is already inside the net figure, or it is not.</strong> Global X’s gross yield on CASH, 2.16% effective 8 July 2026, is not the annualized distribution yield of 2.02%. Do not subtract the 0.11% MER from the 2.02% a second time unless the facts sheet tells you the yield is gross. Purpose’s page shows both 2.35% and a 2.18% net yield. Use the net line, and confirm the label, so you do not haircut it twice. How a fee compounds when the gap is real is the <a href="/blog/mer-drag-index-funds-canada/">MER drag guide</a>.</li>
        <li><strong>Tax.</strong> Outside a registered account the distribution is interest. There is no dividend tax credit. A fund that leads a deposit by a fraction of a percent can lose that lead at your marginal rate. Brackets are the <a href="/blog/federal-tax-brackets/">federal</a> and <a href="/blog/provincial-tax-rates/">provincial</a> pages. Inside a TFSA the tax gap closes and the room cost remains. That trade is the <a href="/blog/tfsa-strategies/">TFSA guide</a>.</li>
        <li><strong>The day you need the money.</strong> Purpose’s T+1 line is about the fund. Your broker can hold the proceeds again before an EFT to your bank. A deposit you have already withdrawn from is the first layer in the <a href="/blog/emergency-fund-heloc-investments-canada/">emergency-fund guide</a>. These ETFs are a second layer at best.</li>
    </ul>

    <div class="warning-box">
        <strong>Government of Canada risk is not a fixed price:</strong>
        <p>CBIL’s bills are federal obligations. Global X still says there is no assurance the fund will keep a constant NAV, and that you may not get back the full amount invested. A T-bill ETF can move a little when rates move or when many people sell. “Government” is not CDIC, and it is not a GIC. The lock-up alternative, if you can name the date, is the <a href="/blog/gic-ladder-canada/">GIC ladder</a>.</p>
    </div>

    <h2>Who should not buy any of the three?</h2>

    <p>Do not buy them with the rent, with money that has to move this week, or with the belief that a unit is a savings account. Do not buy all three and call it diversification. They are three versions of short-term cash. Pick the credit you meant to own, bank deposits or treasury bills or Purpose’s mix, and hold one. If the dollar is a long-term investment you are nervous about, none of these is the portfolio. The portfolio is <a href="/blog/how-to-invest-canada-guide/">how to invest in Canada</a>.</p>

    <h2>Frequently asked questions</h2>

    <h3>Is CASH safer than CBIL?</h3>
    <p>They are safer against different things. CASH, on Global X’s description, holds bank deposit accounts, so the credit is bank credit inside a fund that is not itself CDIC-insured. CBIL holds short Government of Canada treasury bills. Federal bills are a different issuer than a bank. Neither fund promises a fixed NAV. Safer is the risk you wrote down, not a star rating.</p>

    <h3>Why does PSA show two percentages?</h3>
    <p>On 25 September 2026 Purpose’s page displayed 2.35% and, separately, a net yield of 2.18%. The static version of the page did not attach the word “gross” to 2.35% cleanly enough to repeat that label here. Use the net-yield line when you compare, and read the live page so you know which figure already has the fee removed. A 0.17% line dated 30 June 2026 also needs its label checked before you subtract it from the net yield.</p>

    <h3>Are the distributions eligible Canadian dividends?</h3>
    <p>No. These funds pay interest income. Eligible dividends and the dividend tax credit belong to Canadian equities, which are a different contract and can fall by more than a year of distributions. The distinction is <a href="/blog/tax-efficient-investing/">tax-efficient investing</a>. Do not park emergency money in a dividend ETF because the yield looks higher.</p>

    <h3>Can I hold them in a TFSA or FHSA?</h3>
    <p>Global X lists CASH and CBIL as eligible for all registered and non-registered accounts. Purpose lists PSA as registered-account eligible. Eligibility is not a reason. In a TFSA you give up room. In an FHSA you should match the purchase date, which is <a href="/blog/fhsa-home-purchase-sequencing-canada/">FHSA sequencing</a>. In an RRSP you may be locking spending money behind a taxable withdrawal.</p>

    <h3>Does the MER make CASH and CBIL the same fund?</h3>
    <p>The posted management fee is 0.10% plus sales tax on both, and both show a 0.11% MER, dated differently (30 June 2026 for CASH, 31 December 2025 for CBIL). The fee is not the holding. One fund’s assets are bank deposits. The other’s are treasury bills. Buy the holding. The fee is the tie-breaker only after the holding is the one you wanted.</p>

    <h3>What yield should I compare with my HISA?</h3>
    <p>The net yield you would earn after the fee, on the same day, after tax if the account is taxable, minus the hassle of selling. For CASH, do not compare a July gross yield of 2.16% with a September HISA rate. Compare the 24 September annualized distribution yield of 2.02%, or whatever the page says the day you look, with the deposit rate you will still earn after any bonus hurdle. EQ’s conditional 2.75% and its 1.00% base are both in the HISA post. A fund does not win because a teaser has not been subtracted yet.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="https://www.globalx.ca/product/cash">Global X: High Interest Savings ETF (CASH)</a></li>
        <li><a href="https://www.globalx.ca/product/cbil">Global X: 0-3 Month T-Bill ETF (CBIL)</a></li>
        <li><a href="https://www.purposeinvest.com/funds/purpose-high-interest-savings-fund">Purpose: High Interest Savings Fund (PSA)</a></li>
        <li><a href="https://www.cdic.ca/depositors/whats-covered/">CDIC: what’s covered</a>, which lists ETFs as not eligible</li>
    </ul>

    <div class="cta-section">
        <p><strong>A distribution is interest. The return is what the T1 does with it.</strong></p>
        <p>Registered versus taxable location changes which of these yields is real. The 2026 tax guide is the account side.</p>
        <a href="/ebooks/tax-guide/" class="cta-button">Get the 2026 Tax Guide — $49 CAD</a>
    </div>

    ${footer}

</div>`
  ),

  budgetPost(
    'gic-ladder-canada',
    'How to Build a GIC Ladder in Canada',
    'A GIC ladder rolls one rung each year. EQ Bank’s non-registered page listed 3.70% for one year and 4.25% for five years on 27 September 2026.',
    `<div class="container">

    <div class="hook">
        A GIC ladder is five term deposits, bought so one matures each year, not a bet that you know where rates go. On EQ Bank’s GIC page, reviewed <span class="highlight">27 September 2026</span>, the non-registered table listed 3.70% for one year and 4.25% for five years. The rung you reinvest next year is priced that day, not today. Once the cancellation period passes, EQ says the GIC is non-redeemable.
    </div>

    <p>Cash that might be needed sooner belongs in the <a href="/blog/canadian-cash-management-guide/">cash management guide</a>, not in a locked term. The deposit rates that are not locked are <a href="/blog/best-high-interest-savings-accounts-canada/">high-interest savings accounts</a>. A fund you can sell is <a href="/blog/cash-vs-psa-vs-cbil-hisa-etf/">CASH versus PSA versus CBIL</a>. Insurance on the rungs is <a href="/blog/cdic-coverage-explained-canada/">CDIC coverage</a>, and it does not multiply because you bought five certificates.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>Split the amount you can lock into rungs of one through five years. Each year, the maturing rung is spent or rolled into a new five-year GIC at whatever rate is posted then.</li>
            <li>EQ’s non-registered table on 27 September 2026: 1 year 3.70%, 15 months 3.75%, 2 years 3.85%, 27 months 4.00%, 3 years 4.10%, 4 years 4.15%, 5 years 4.25%. Short terms on the same page: 3 months 2.55%, 6 months 2.75%, 9 months 3.25%.</li>
            <li>The same page listed 6-year, 7-year, and 10-year rates at 2.35%. A longer lock was not a higher rate. Confirm the tab, registered or not, before you buy.</li>
            <li>EQ’s minimum is $100. The maximum is $100,000 per GIC. Non-registered accounts are limited to 20 active GICs. Joint GICs are on EQ’s “not right for you” list.</li>
            <li>CDIC counts principal and interest together, up to $100,000 per category per member. Five GICs in one name at one member share one category with your other deposits there.</li>
        </ul>
    </div>

    <h2>How does a ladder actually work?</h2>

    <p>You pick a horizon you can live with, usually five years, and you divide the money into equal rungs. Year one you buy a one-year, a two-year, a three-year, a four-year, and a five-year. A year later the one-year matures. You spend it or you buy a new five-year. The old two-year now has one year left. From then on, something matures every year and the long rate, whatever it is that day, is the rate you roll into. You are never locked out of the whole balance, and you are never forced to reprice the whole balance on a single afternoon.</p>

    <p>That is the entire mechanism. It does not raise the rate. It spreads the date. If rates fall, the rungs you already bought keep the rate on the contract. If rates rise, the maturing rung is the piece you can reprice, and the rest of the ladder waits. People who want every dollar at the new higher rate will hate a ladder in a rising year. People who locked everything for five years will hate a ladder less, because at least one fifth comes free each year.</p>

    <h2>What rates were on EQ Bank’s page?</h2>

    <p>One issuer is enough to show the shape. It is not a survey of the highest GIC in Canada. Oaken’s rate page did not load for this review. Another bank’s table can be higher or lower the same morning. Use EQ’s numbers as a worked card you can check, then open a second issuer before you fund anything.</p>

    <table>
        <caption>EQ Bank GIC rates as displayed under the non-registered heading, reviewed 27 September 2026. The page also highlighted a registered five-year at 4.25%, the same five-year figure. Confirm registered versus non-registered on the live tab. EQ says rates can differ by product terms.</caption>
        <thead>
            <tr>
                <th>Term</th>
                <th>Rate on the page</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>3 months</td>
                <td>2.55%</td>
            </tr>
            <tr>
                <td>6 months</td>
                <td>2.75%</td>
            </tr>
            <tr>
                <td>9 months</td>
                <td>3.25%</td>
            </tr>
            <tr>
                <td>1 year</td>
                <td>3.70%</td>
            </tr>
            <tr>
                <td>15 months</td>
                <td>3.75%</td>
            </tr>
            <tr>
                <td>2 years</td>
                <td>3.85%</td>
            </tr>
            <tr>
                <td>27 months</td>
                <td>4.00%</td>
            </tr>
            <tr>
                <td>3 years</td>
                <td>4.10%</td>
            </tr>
            <tr>
                <td>4 years</td>
                <td>4.15%</td>
            </tr>
            <tr>
                <td>5 years</td>
                <td>4.25%</td>
            </tr>
            <tr>
                <td>6, 7, and 10 years</td>
                <td>2.35% on a further table on the same page</td>
            </tr>
        </tbody>
    </table>

    <p>Table as of 27 September 2026. The drop from 4.25% at five years to 2.35% at six years is what the page showed. Do not assume a longer term pays more. Do not assume your registered tab matches the non-registered column. EQ also says RRSP GICs are not available to Quebec customers, while its other GICs are.</p>

    <div class="example-box">
        <strong>Illustration: $50,000 in five non-registered rungs, simple interest for one year</strong>
        <p>Five slices of $10,000. Using only the one- through five-year rates above, one year of simple interest is $370, $385, $410, $415, and $425. The sum is $2,005. Divided by $50,000, that is 4.01%. That 4.01% is the average of the five posted rates. It is not cash that lands in your account in year one, because EQ’s page, in the section reviewed, does not say whether interest is paid out annually or compounded to maturity. Interest on a non-registered GIC is still reported on a T5. The illustration ignores the cancellation window, ignores a second issuer, and dies the day EQ changes the card. The one-year rung is the only slice you can reprice twelve months from now. The five-year rung keeps 4.25% only for the term you actually bought.</p>
    </div>

    <h2>What happens on maturity, and what if you need the money?</h2>

    <p>EQ says that at maturity the funds go back to the Personal Account the GIC was bought from, and that you get an email or a text. There is no paper certificate. You then buy the next rung, or you do not. If you do nothing, the money sits in the Personal Account at whatever rate that account is paying, which on 16 September 2026 was 1.00% unless the direct-deposit bonus applied. A ladder you do not roll is just a set of GICs that end.</p>

    <p>Before maturity, EQ’s answer is that you cannot redeem once the cancellation period has passed. The page tells you to read the GIC agreement for that window. This article will not invent how many days the window is. If the dollar might be the emergency fund, it does not belong on the ladder. The first layer stays in a deposit you can move, which is the test in the <a href="/blog/emergency-fund-heloc-investments-canada/">emergency-fund guide</a>. A ladder is a second or third layer for a date you can name: a tuition year, a roof, a property-tax bill you refuse to float on a card.</p>

    <h2>Where should the ladder live, and how is it insured?</h2>

    <p>Interest on a non-registered GIC is taxable as interest. Inside a TFSA it is not, and it uses room. EQ says each TFSA, RRSP, or FHSA GIC still has a $100 minimum and a $100,000 maximum, and that you have to track contribution room yourself. The room rules are the <a href="/blog/contribution-limits/">limits table</a> and the <a href="/blog/tfsa-contribution-optimization/">TFSA contribution guide</a>. A GIC inside an FHSA matches a home date. It does not match a vague wish to “earn more than a savings account” on money you might need for something else. The home sequence is <a href="/blog/fhsa-guide/">the FHSA guide</a>.</p>

    <div class="warning-box">
        <strong>Five rungs are not five insurance limits:</strong>
        <p>CDIC insures eligible deposits, including GICs, up to $100,000 per depositor, per member, per category, principal and interest combined. EQ’s $100,000 maximum per GIC can already sit on the line, and accrued interest counts toward the cap. A $50,000 ladder plus a $60,000 Personal Account in the same name at Equitable Bank is one pile for the “one name” category, not six. EQ and Equitable Bank are one member on EQ’s own FAQ. Joint GICs are not offered, so you cannot use EQ’s joint category for this product. The ways coverage does stack are the <a href="/blog/cdic-coverage-explained-canada/">CDIC guide</a>.</p>
    </div>

    <h2>When is a ladder the wrong tool?</h2>

    <ul>
        <li><strong>You might need the capital.</strong> Non-redeemable means non-redeemable. A HISA or a cash ETF you can sell is the alternative, with the yield and the insurance differences in the other posts.</li>
        <li><strong>You are comparing the ladder with a debt.</strong> A five-year lock at 4.25% is not a reason to carry a credit-card balance. The fair comparison is <a href="/blog/debt-payoff-vs-investing-canada/">debt payoff versus investing</a>.</li>
        <li><strong>You wanted the savings-account bonus and also a lock.</strong> EQ’s 2.75% Personal Account bonus is not the GIC rate. The five-year GIC was 4.25% on the day reviewed, and you cannot spend it. Pick the contract that matches the date.</li>
        <li><strong>The long end of the table is lower.</strong> On this page, ten years at 2.35% lost to one year at 3.70%. Stretching the term to feel serious would have cut the rate. Read the row you are buying.</li>
    </ul>

    <h2>Frequently asked questions</h2>

    <h3>How many rungs should a Canadian GIC ladder have?</h3>
    <p>Five is the usual shape: one through five years, then roll each maturity into a new five-year. Four or three also works if your date is shorter. EQ’s page happens to offer 15-month and 27-month terms. You do not need those for a plain annual ladder. What you need is a maturity every year so you are never fully locked and never fully floating.</p>

    <h3>Are the EQ rates the best GIC rates in Canada?</h3>
    <p>This page does not know. They are the rates EQ displayed on 27 September 2026, under the non-registered heading, and they are high enough to be worth writing down. A second issuer can beat any line tomorrow. Compare the same term, the same registration, the same redeemability, and the same CDIC member. Do not compare a cashable GIC at one bank with a non-redeemable five-year at another and call it a rate win.</p>

    <h3>Is GIC interest taxed?</h3>
    <p>Yes, outside a registered account. EQ says the interest is included on a T5. Inside a TFSA, RRSP, or FHSA the account rules replace that T5, and the contribution room is the cost. Compounded interest you cannot spend yet can still be taxable annually on a non-registered GIC. The T5, not the maturity date, is the filing clue. The tax character of interest is <a href="/blog/tax-efficient-investing/">tax-efficient investing</a>.</p>

    <h3>Can I build the ladder inside one CDIC member?</h3>
    <p>Yes, and you should know what that means. The rungs share the category. If the total of deposits in that category, plus interest, goes over $100,000, the excess is uninsured. Use a second member, or a second category you actually qualify for, when the pile is larger. EQ will not sell you a joint GIC, so the joint category is not available for this product at this bank.</p>

    <h3>What if rates rise after I lock?</h3>
    <p>The rungs you already bought keep their contract rate. Only the maturing slice can be reinvested at the new rate. That is the point of the ladder and the cost of it. Selling early is not a feature EQ offers after the cancellation period. If you need the option to chase a higher rate every month, you wanted a savings account, and you wanted its lower certainty.</p>

    <h3>Does a GIC ladder replace bonds in a portfolio?</h3>
    <p>Not by itself. A GIC is a term deposit with a known end value if you hold it and the issuer pays. A bond ETF can fall when yields rise, and it can be sold. The portfolio decision, once the cash has a long horizon, is <a href="/blog/diy-etf-portfolio-asset-location-canada/">asset location</a> and <a href="/blog/how-to-invest-canada-guide/">how to invest</a>. Do not call a ladder a bond allocation because both feel safe.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="https://www.eqbank.ca/personal-banking/investments/gics">EQ Bank: GICs</a>, reviewed 27 September 2026</li>
        <li><a href="https://www.eqbank.ca/rates">EQ Bank: rates and accounts</a></li>
        <li><a href="https://www.cdic.ca/depositors/whats-covered/">CDIC: what’s covered</a></li>
        <li><a href="https://www.cdic.ca/what-happens-in-a-failure/resolution-of-small-and-medium-size-banks/reimbursement-of-insured-deposits/for-depositors/">CDIC: for depositors</a>, including what happens to a GIC if a member fails</li>
    </ul>

    <div class="cta-section">
        <p><strong>The contract rate is guaranteed. The tax on a non-registered GIC is not optional.</strong></p>
        <p>A T5 changes the after-tax yield. The 2026 tax guide is how interest is reported.</p>
        <a href="/ebooks/tax-guide/" class="cta-button">Get the 2026 Tax Guide — $49 CAD</a>
    </div>

    ${footer}

</div>`
  ),

  budgetPost(
    'cdic-coverage-explained-canada',
    'CDIC Coverage Explained: How to Insure More Than $100,000',
    'CDIC insures eligible deposits up to $100,000 per category, including interest. A second category or a second member is how a larger balance is covered.',
    `<div class="container">

    <div class="hook">
        CDIC does not insure “your savings” as one pot. It insures eligible deposits up to <span class="highlight">$100,000 per category, including principal and interest</span>, at each member institution. The depositor page lists nine categories. Hold deposits in more than one category, or at more than one member, and the total covered can be more than $100,000. A second account in the same name at the same member does not do it.
    </div>

    <p>Which dollars are worth insuring, and which should be a security instead, is the <a href="/blog/canadian-cash-management-guide/">cash management guide</a>. The accounts people actually open are <a href="/blog/best-high-interest-savings-accounts-canada/">high-interest savings</a> and <a href="/blog/best-no-fee-chequing-account-canada/">no-fee chequing</a>. A GIC is an eligible deposit and still shares a category, which is why the <a href="/blog/gic-ladder-canada/">ladder</a> does not create five limits. An ETF is not an eligible deposit at all. That comparison is <a href="/blog/cash-vs-psa-vs-cbil-hisa-etf/">CASH versus PSA versus CBIL</a>.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>The $100,000 figure on CDIC’s page includes principal and interest. A deposit of $100,000 that then earns interest can push part of the balance over the cap.</li>
            <li>The nine categories named on the “what’s covered” page are: one name, joint, RRSP, RRIF, TFSA, RDSP, RESP, FHSA, and trust.</li>
            <li>Not eligible, on that same page: mutual funds, stocks, bonds, ETFs, and crypto, including stablecoins.</li>
            <li>Joint deposits are a separate category, up to $100,000 per set of joint owners, not per person. Different sets of owners are separate.</li>
            <li>EQ Bank says the EQ Bank and Equitable Bank names are aggregated. They are one member. Wealthsimple says it is not a CDIC member and that it places chequing funds in trust at member institutions, up to a combined $1 million on its description.</li>
        </ul>
    </div>

    <h2>What does CDIC actually cover?</h2>

    <p>CDIC is a federal Crown corporation. Coverage is free and automatic. You do not buy a policy. If a member fails, CDIC’s tools include helping sell the institution or, if it comes to it, paying depositors. The public page says no one has lost a dollar that was insured by CDIC. That sentence is about insured deposits. It is not a promise about every product a bank sells.</p>

    <p>Eligible deposits, on the page reviewed, include deposits in Canadian or foreign currency and guaranteed investment certificates and other term deposits. If a member fails, CDIC says GICs are cashed out immediately, including interest owing, up to the $100,000 maximum, and that early-redemption fees are not charged. Interest accrued up to the closure date is added to principal before the cap is applied.</p>

    <table>
        <caption>Insurance categories named on CDIC’s “what’s covered” page, reviewed 27 September 2026. Each is up to $100,000 including principal and interest, at each member.</caption>
        <thead>
            <tr>
                <th>Category</th>
                <th>What stacks it</th>
                <th>What does not</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Deposits in one name</td>
                <td>A separate member institution</td>
                <td>A second chequing account, savings account, or GIC in the same name at the same member. CDIC’s own example adds two chequing accounts and one savings account together.</td>
            </tr>
            <tr>
                <td>Joint deposits</td>
                <td>A different set of joint owners. You and a spouse are one set. You and a child are another.</td>
                <td>Splitting one joint account into two accounts with the same two names. Coverage is per set of owners, up to $100,000 for the set, and the records must show joint ownership and each owner’s name and address.</td>
            </tr>
            <tr>
                <td>RRSP, RRIF, TFSA, RDSP, RESP, FHSA</td>
                <td>Each registered plan type is its own category</td>
                <td>Mutual funds, stocks, bonds, and ETFs held inside the plan. CDIC says those are not insured. A savings deposit or GIC inside the plan can be. A spousal RRSP is insured based on the named owner, not the contributor who got the receipt.</td>
            </tr>
            <tr>
                <td>Trust</td>
                <td>Deposits held in trust, which CDIC treats as their own category. A broker-held trust deposit can be separate from a joint deposit even if both names feel “joint.”</td>
                <td>Assuming a fintech app is itself the member. The member is the institution that holds the deposit. Read the trust disclosure.</td>
            </tr>
        </tbody>
    </table>

    <p>Table as of September 2026. CDIC’s for-depositors page also says it decides whether a particular high-interest savings account is eligible case by case. “HISA” on an ad is not, by itself, the coverage.</p>

    <h2>How do you cover more than $100,000?</h2>

    <p>Use a category you already have a reason to use, or use a second member. Do not open an RRSP solely to double a chequing balance. A withdrawal from that RRSP is taxable and the room is gone. The account order is <a href="/blog/rrsp-vs-tfsa-vs-fhsa/">RRSP versus TFSA versus FHSA</a>. A TFSA deposit can be a real second category if you were going to use the room for cash anyway. An FHSA deposit can be a real category if you are saving for a first home. A joint account with a spouse is a real category if you actually own the money together.</p>

    <div class="example-box">
        <strong>CDIC’s own example, then one stacking illustration</strong>
        <p>CDIC’s for-depositors page describes Jane with $10,000 and $15,000 in two chequing accounts and $50,000 in savings, all in her name. Those are added together. She is paid $75,000 for the one-name category, not three cheques. A joint account of $35,000 with her husband is a separate category, so the page’s total protected amount is $110,000. That is the mechanism.</p>
        <p>Illustration, not a CDIC ruling: Sam holds $80,000 in a Personal Account and a $40,000 GIC, both in his name at one member. The one-name total is $120,000 before new interest. Only $100,000 of that category is insured. Moving the GIC to a second CDIC member, still in his name, puts that $40,000 in a separate one-name limit at the second member. Moving it into his TFSA at the first member, if he has the room and the GIC is an eligible deposit inside the TFSA, uses the TFSA category instead. Both moves change coverage. Only the second move also uses TFSA room. Confirm the member list before you treat two brands as two members.</p>
    </div>

    <h2>Which brands share one member?</h2>

    <p>Trade names are the usual mistake. EQ Bank’s FAQ says deposits under EQ Bank and Equitable Bank are aggregated for CDIC, up to $100,000 per category per depositor. A Personal Account, a GIC, and a US-dollar account in one name are one pile. A joint account is separate, on that same FAQ. EQ Bank is a trade name of Equitable Bank, and Equitable Bank is the member.</p>

    <p>Wealthsimple’s chequing page says Wealthsimple is not a bank and not a CDIC member. It says personal chequing funds are placed in trust at up to ten CDIC-member institutions, which it describes as extending protection up to a combined $1 million. That $1 million is Wealthsimple’s description of spreading trust deposits across members. It is not a sentence on CDIC’s page that one member covers $1 million. CDIC’s trust category, at each member, is still the category limit. Wealthsimple also says funds in a joint account are registered under the primary account holder’s name and calculated under that holder’s eligible deposits. Read that sentence before you assume a joint Wealthsimple account is the joint category CDIC describes for a bank account titled in two names.</p>

    <p>Simplii’s chequing page, reviewed the same day, did not itself state the legal member. Access to CIBC ATMs is not the same sentence as “this is a separate CDIC member.” Look the institution up on CDIC’s member list before you park a second $100,000 there and call it a second limit.</p>

    <div class="warning-box">
        <strong>A sole proprietorship is not a second person:</strong>
        <p>CDIC says a depositor can be an individual, a partnership, a corporation, or certain other entities, and that business deposits may be insured separately from personal ones. A sole proprietorship is not a separate legal entity. Deposits in the sole prop’s name are combined with the individual’s personal deposits. A corporation is a different depositor. Do not move household savings into a sole-prop account and believe you created a new $100,000.</p>
    </div>

    <h2>What fails, and what takes longer to get back?</h2>

    <p>Cheques for one-name and joint deposits start going out by mail in the days after a member closes, on CDIC’s description. You do not file a claim. Registered deposits are slower on purpose. CDIC says it cannot pay those by cheque directly, because the plan has to stay tax-sheltered. You choose a new institution that offers the same registered type, and the deposit is transferred into that type. An RRSP deposit cannot be moved into a TFSA to “keep the shelter” in a different category. The shelter is the same plan type.</p>

    <p>During that gap, bill payments and payroll hitting the failed member stop. CDIC’s page tells you to open an account elsewhere and redirect them. A ladder or a HISA that is your only liquid account is a coverage plan and a bad operations plan. Keep a second everyday account before you need it. That is the <a href="/blog/best-no-fee-chequing-account-canada/">chequing</a> decision, and it is also why the <a href="/blog/emergency-fund-heloc-investments-canada/">emergency fund</a> should not all sit at one login.</p>

    <h2>Frequently asked questions</h2>

    <h3>Does CDIC cover more than $100,000 at one bank?</h3>
    <p>Yes, if the deposits are in different categories, and only up to $100,000 in each, including interest. One name, joint, and each registered type are separate. Two savings accounts in one name are not. A second member is the other way to stack the same category. Confirm both the category and the member on CDIC’s pages, not on a comparison site.</p>

    <h3>Are joint accounts $100,000 each?</h3>
    <p>No. CDIC says each joint deposit is protected up to $100,000 per set of joint owners, no matter how many people are on that set. You and your spouse share one $100,000 for accounts in those two names. A different pair, such as you and a child, is a different set and a different $100,000. The bank’s records have to say the deposit is joint and have to list each owner.</p>

    <h3>Is a HISA ETF insured by CDIC?</h3>
    <p>No. CDIC lists exchange-traded funds as not eligible. Global X says CASH and CBIL are not covered. Purpose says PSA’s securities are not covered. You own units. If the fund holds bank deposits, those deposits are the fund’s assets, not a deposit in your name. Brokerage-client protection, if the dealer fails and property is missing, is a different regime. It is not deposit insurance and it is not a promise that the units hold their price.</p>

    <h3>Does interest count toward the $100,000?</h3>
    <p>Yes. CDIC says the limit includes principal and interest, and that interest accrued to the date of failure is added before the cap. A GIC bought at the maximum, or a savings balance sitting at $100,000, can be partly uninsured once interest posts. Leave room for the interest or use another category or member.</p>

    <h3>What happens to a GIC if the bank fails?</h3>
    <p>CDIC says eligible GICs are cashed out immediately, whatever term is left, with interest owing, up to $100,000, and that early-redemption fees are not charged. You do not keep the remaining term. You get the insured amount. Non-registered deposits are paid by cheque. Registered GICs follow the slower transfer process so the plan stays registered.</p>

    <h3>Is Wealthsimple’s $1 million the same as CDIC’s limit?</h3>
    <p>It is Wealthsimple’s description of trust placements at up to ten members, not a higher limit printed by CDIC for a single member. Wealthsimple also says it is not itself a member, and that a joint chequing balance is registered under the primary holder. Read the current trust disclosure and CDIC’s trust category together. Do not add “$1 million” to a mental model that still assumes one chequing account equals one $100,000.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="https://www.cdic.ca/depositors/whats-covered/">CDIC: what’s covered</a></li>
        <li><a href="https://www.cdic.ca/what-happens-in-a-failure/resolution-of-small-and-medium-size-banks/reimbursement-of-insured-deposits/for-depositors/">CDIC: for depositors</a></li>
        <li><a href="https://www.eqbank.ca/personal-banking/personal-account">EQ Bank: Personal Account</a>, including the CDIC aggregation answer</li>
        <li><a href="https://www.wealthsimple.com/en-ca/chequing">Wealthsimple: chequing</a>, including the trust-coverage description</li>
    </ul>

    <div class="cta-section">
        <p><strong>Coverage is a category. The tax on the interest is a different file.</strong></p>
        <p>A TFSA or RRSP changes both the insurance category and the tax. The 2026 tax guide is the tax half.</p>
        <a href="/ebooks/tax-guide/" class="cta-button">Get the 2026 Tax Guide — $49 CAD</a>
    </div>

    ${footer}

</div>`
  ),

  budgetPost(
    'best-no-fee-chequing-account-canada',
    'Best No-Fee Chequing Accounts in Canada (2026)',
    'Simplii, EQ Bank, and Wealthsimple each advertise no monthly fee. They differ on ATMs, the interest hurdle, and which CDIC member holds the dollar.',
    `<div class="container">

    <div class="hook">
        A no-fee chequing account is a <span class="highlight">$0 monthly fee you will still have in month six</span>, plus a way to pay rent and get cash. On the pages reviewed on 27 September 2026, Simplii, EQ Bank, and Wealthsimple each say they do not charge a monthly account fee. They do not offer the same ATM access, the same interest, or the same deposit-insurance structure. There is no single winner.
    </div>

    <p>Where the balance that is not this month’s bills should sit is the <a href="/blog/canadian-cash-management-guide/">cash management guide</a>. The interest rate on savings, including EQ’s bonus and its base, is <a href="/blog/best-high-interest-savings-accounts-canada/">ongoing savings rates versus promos</a>. Who actually insures the dollar is <a href="/blog/cdic-coverage-explained-canada/">CDIC coverage</a>. The transfer that keeps the chequing account thin is the <a href="/blog/cash-flow-system-canada/">cash-flow system</a>.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>Simplii’s no-fee chequing page says there is no monthly fee, unlimited debit purchases, bill payments, and withdrawals, and free access to over 3,400 CIBC ATMs. Interac e-Transfer is described as free.</li>
            <li>EQ’s Personal Account: no monthly fee, no minimum balance, free Interac e-Transfers, free bill payments. No cheques, no cash deposits, no bank drafts. Base interest 1.00%, or 2.75% with at least $2,000 a month of qualifying pay deposits, effective 16 September 2026.</li>
            <li>Wealthsimple chequing: $0 monthly fee, $0 foreign-transaction fee on its card, ATM-provider fees reimbursed. Posted interest is 1.25%, 1.75%, or 2.25% by asset tier. Wealthsimple says it is not a CDIC member.</li>
            <li>Simplii charges $4.97 in a month you use overdraft, plus 19% interest on the overdrawn balance. EQ says it does not charge overdraft fees. Wealthsimple’s page describes overdraft as no fee plus interest from 3.95%.</li>
            <li>Tangerine’s rates index calls its chequing account no-monthly-fee. The numeric interest rate did not render in the fetch. It is not in the table below.</li>
        </ul>
    </div>

    <div class="callout">
        <p><strong>Choose Simplii if…</strong> you want CIBC ATMs and a conventional debit account, and you will confirm the CDIC member yourself. <strong>Choose EQ if…</strong> your pay already qualifies for the 2.75% bonus and you can live without cheques, cash deposits, and drafts. <strong>Choose Wealthsimple if…</strong> you want the prepaid card, no foreign-transaction fee from Wealthsimple, and you have read the trust-and-CDIC paragraph instead of assuming it is a bank.</p>
    </div>

    <h2>What did each issuer actually say?</h2>

    <table>
        <caption>No-fee chequing features taken from issuer pages reviewed on 27 September 2026. Blank means the page did not state it in a way this article will repeat. Wealthsimple’s comparison chart is dated by Wealthsimple as collected 11 June 2026; product terms below are from the page text reviewed in September.</caption>
        <thead>
            <tr>
                <th></th>
                <th>Simplii No Fee Chequing</th>
                <th>EQ Bank Personal Account</th>
                <th>Wealthsimple chequing</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Monthly account fee</td>
                <td>None, on Simplii’s description</td>
                <td>None, and no minimum balance</td>
                <td>$0, and no minimum balance</td>
            </tr>
            <tr>
                <td>Everyday transfers</td>
                <td>Unlimited debit, bill payments, and withdrawals. Interac e-Transfer described as free.</td>
                <td>Free Interac e-Transfers and bill payments. EFT to a linked account up to $30,000 per transaction, arriving in two to three business days.</td>
                <td>No Interac e-Transfer fee, on its description. Outgoing domestic wire: a flat $15. Incoming wires: $0.</td>
            </tr>
            <tr>
                <td>Cash access</td>
                <td>Free access to over 3,400 CIBC ATMs</td>
                <td>No fee at Canadian ATMs. EQ reimburses Canadian ATM-provider fees up to $5 a withdrawal, up to five times a month. You cannot deposit cash.</td>
                <td>No Wealthsimple ATM fee. Provider fees reimbursed, including outside Canada, on the page’s wording.</td>
            </tr>
            <tr>
                <td>Interest</td>
                <td>Tiers are on the page. The percentages did not render. Not quoted here.</td>
                <td>1.00%, or 2.75% with qualifying pay deposits of at least $2,000 a month. Effective 16 September 2026.</td>
                <td>Core 1.25% under $100,000 in assets. Premium 1.75% above $100,000. Generation 2.25% at $500,000 or more. Core and Premium can add 0.5 point with a $2,000 direct deposit in 30 days, not above 2.25%.</td>
            </tr>
            <tr>
                <td>Cheques and drafts</td>
                <td>Not stated in the section reviewed</td>
                <td>No cheques and no bank drafts. EQ lists both under “not right for you.”</td>
                <td>A chequebook is free if your pay is direct-deposited. Cheque deposits by photo are described as about six business days. Bank drafts can be ordered in the app.</td>
            </tr>
            <tr>
                <td>Overdraft</td>
                <td>$4.97 in a month you use it, plus 19% interest. Limits up to $5,000 if you qualify.</td>
                <td>EQ says it does not charge overdraft fees</td>
                <td>Described as no fee, with interest from 3.95%</td>
            </tr>
            <tr>
                <td>Who holds the deposit</td>
                <td>Confirm the CDIC member on CDIC’s list. ATM access to CIBC is not that sentence.</td>
                <td>Equitable Bank, a CDIC member. EQ Bank is a trade name. Balances under both names aggregate.</td>
                <td>Wealthsimple says it is not a CDIC member. Chequing funds are held in trust at member institutions. Its page describes combined coverage up to $1 million.</td>
            </tr>
            <tr>
                <td>New-client offer on the page</td>
                <td>$300 and a $50 Skip gift card for a new client who direct-deposits at least $100 for three straight months. Confirm it is still open.</td>
                <td>The interest bonus is for new and existing customers who meet the deposit test. It is not a one-time cash bonus.</td>
                <td>No cash bonus was stated in the section reviewed</td>
            </tr>
        </tbody>
    </table>

    <p>Table as of 27 September 2026. A welcome bonus is not a reason to pick an account you will not use. Simplii also describes a $125 referral for the person who invites a friend, and $50 for the friend. Read the conditions. A bonus you miss because the direct deposit was $90 is a bonus you did not get.</p>

    <h2>Which missing feature actually costs you?</h2>

    <p>Monthly fees are the easy comparison, and on these three pages they are zero. The costs that remain are the things the account will not do.</p>

    <ul>
        <li><strong>Cash and cheques.</strong> EQ will not take a cash deposit and will not give you cheques or a draft. If your landlord, your daycare, or your lawyer still wants one of those, EQ is the wrong everyday account. Keep Simplii, or Wealthsimple’s chequebook once pay is deposited there, for that job. The rest of the balance can still earn EQ’s savings rate if you qualify.</li>
        <li><strong>Foreign purchases.</strong> Wealthsimple says it charges no foreign-transaction fee, and that the card network can still apply a conversion rate. A big-bank debit card often does charge a markup. This page does not copy a percentage Wealthsimple used to describe other banks. The credit-card version of the same question is <a href="/blog/best-no-foreign-transaction-fee-credit-cards-canada/">no-foreign-transaction-fee cards</a>.</li>
        <li><strong>Overdraft as a habit.</strong> Simplii’s 19% plus $4.97 in a month you dip is a debt product. EQ saying it does not charge an overdraft fee is not a reason to spend money you do not have. The comparison with investing, once you are carrying a balance, is <a href="/blog/debt-payoff-vs-investing-canada/">debt payoff versus investing</a>.</li>
        <li><strong>A rate you will not qualify for.</strong> EQ at 1.00% without the pay deposit can lose to Wealthsimple Core at 1.25%. EQ at 2.75% with the deposit can beat both. Write the rate you will earn, not the rate in the headline. The full savings table is the HISA post.</li>
    </ul>

    <div class="warning-box">
        <strong>Do not keep the emergency fund in the spending account:</strong>
        <p>Chequing is where the month’s bills clear. The pile you hope not to spend is a separate transfer, on payday, in the <a href="/blog/money-automation-stack-canada/">automation stack</a>. EQ lets you open up to eight accounts for that split. Two logins at two members is also how you avoid having every dollar at the institution that just failed. Coverage details are the CDIC guide. The size of the second pile is the <a href="/blog/emergency-fund-heloc-investments-canada/">emergency-fund guide</a>.</p>
    </div>

    <h2>What about the account you already pay for?</h2>

    <p>Wealthsimple’s own chart, collected as of 11 June 2026, describes traditional-bank monthly fees as “up to $30” and digital banks as “up to $22.” Those are Wealthsimple’s figures about other institutions, not fee schedules this article re-fetched from those banks. Before you switch, open your own fee schedule and circle the monthly plan, the extra e-Transfer charges, and the ATM charges you actually paid last quarter. The habit of finding those lines is the <a href="/blog/fixed-cost-audit-canada/">fixed-cost audit</a>. A $0 account that makes you keep a $16 package “for the branch” has not saved the $16.</p>

    <p>Points and cash back on spending belong on a credit card you pay in full, not on the deposit account. The card side is <a href="/blog/best-credit-cards-canada/">best credit cards</a> and the <a href="/blog/credit-card-annual-fee-vs-no-fee-canada/">annual-fee test</a>. A prepaid card, which is what Wealthsimple says its Visa is, does not build a credit file. Simplii’s page points at a separate cash-back credit card. Do not confuse the chequing account with that card.</p>

    <h2>Frequently asked questions</h2>

    <h3>What is the best no-fee chequing account in Canada in 2026?</h3>
    <p>The one whose missing feature you will not hit. Simplii is the ATM account, with a new-client bonus you must still qualify for. EQ is the interest account if your pay clears $2,000 a month and you do not need cheques or cash deposits. Wealthsimple is the card-and-FX account if you accept that the firm is not itself a CDIC member. Tangerine also describes a no-monthly-fee chequing account. Its rate did not render here, so it is not ranked.</p>

    <h3>Is EQ Bank a chequing account?</h3>
    <p>EQ calls the Personal Account everyday banking: direct deposit, pre-authorized debits, bill payments, and Interac e-Transfers, with no monthly fee. It also says the account is not right for you if you want cheques, drafts, or in-branch service, and you cannot deposit cash. Functionally it replaces chequing for people who live inside those limits. It does not replace a branch account for people who do not.</p>

    <h3>Does Wealthsimple chequing have CDIC insurance?</h3>
    <p>Wealthsimple says no, not in its own name. It says the balance is held in trust at CDIC members, up to ten of them, and describes combined protection up to $1 million. Joint balances, it says, are registered under the primary holder. That is a different structure from a bank account in your name at a member. Read the current disclosure beside the <a href="/blog/cdic-coverage-explained-canada/">CDIC guide</a> before you treat the accounts as interchangeable.</p>

    <h3>Are Interac e-Transfers free at these three?</h3>
    <p>Each page reviewed says yes: Simplii describes free e-Transfers, EQ says it does not charge to send or receive them, and Wealthsimple says it does not charge an e-Transfer fee. Limits still exist. EQ notes that the receiving bank may cap what you can collect in a day. A “free” transfer you have to split across three days is still free. It is not instant for a large down payment.</p>

    <h3>Should I switch for a welcome bonus?</h3>
    <p>Only after the account is one you would keep once the bonus is paid. Simplii’s page offers $300 plus a $50 Skip gift card if you are a new client and you direct-deposit at least $100 for three consecutive months. If the offer has ended by the time you apply, the bonus is zero. The monthly fee you stop paying a former bank is the durable number. Confirm that fee on your own statement.</p>

    <h3>Can two partners use one no-fee account?</h3>
    <p>EQ offers a joint account with the same 1.00% and 2.75% rate split as the personal account, on the 16 September 2026 rates page. How you split visibility and bills is not a banking feature. It is the <a href="/blog/couples-money-system-canada/">couples money system</a>. A joint login does not replace a written rule for who moves the surplus to savings on payday.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="https://www.simplii.com/en/bank-accounts/no-fee-chequing.html">Simplii: No Fee Chequing Account</a></li>
        <li><a href="https://www.eqbank.ca/personal-banking/personal-account">EQ Bank: Personal Account</a></li>
        <li><a href="https://www.eqbank.ca/rates">EQ Bank: rates and accounts</a></li>
        <li><a href="https://www.wealthsimple.com/en-ca/chequing">Wealthsimple: chequing</a></li>
        <li><a href="https://www.tangerine.ca/en/rates/">Tangerine: rates index</a>, which describes a no-monthly-fee chequing account without a readable interest figure in this fetch</li>
    </ul>

    <div class="cta-section">
        <p><strong>A $0 fee is not a savings plan.</strong></p>
        <p>What you do with the fee you stopped paying is a tax and savings question. The 2026 tax guide is the return side, not a bank offer.</p>
        <a href="/ebooks/tax-guide/" class="cta-button">Get the 2026 Tax Guide — $49 CAD</a>
    </div>

    ${footer}

</div>`
  ),

  budgetPost(
    'best-budgeting-apps-canada',
    'Best Budgeting Apps in Canada (2026)',
    'YNAB is US$14.99 a month or US$109 a year. Neontra Premium is $12 a month or $99 a year. A spreadsheet still does the job the cash-flow system describes.',
    `<div class="container">

    <div class="hook">
        A budgeting app is worth the fee only if it changes a transfer you were not making. As of the pricing pages reviewed on <span class="highlight">27 September 2026</span>, YNAB charges US$14.99 a month or US$109 a year, and Neontra charges $12 a month or $99 a year for Premium. Both numbers are the vendors’ prices. Neither app holds your savings, and neither one knows your TFSA room.
    </div>

    <p>The system the app is supposed to enforce is the <a href="/blog/canadian-cash-management-guide/">cash management guide</a> and the <a href="/blog/cash-flow-system-canada/">cash-flow system</a>. The payday transfer itself is the <a href="/blog/money-automation-stack-canada/">automation stack</a>. What “enough” means as a share of income is <a href="/blog/saving-rate-targets-canada/">saving-rate targets</a>. Two people sharing one plan is <a href="/blog/couples-money-system-canada/">the couples system</a>.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>YNAB is priced in US dollars. The pricing page says exchange rates are not included. A 34-day trial does not require a card if you sign up on YNAB’s site. A third-party app store may still ask for one.</li>
            <li>Neontra’s free plan is manual tracking at $0. Premium is $99 a year, or $12 a month, and the page says the annual plan saves 30% versus monthly. Premium includes unlimited institution connections. The free plan does not include auto-sync.</li>
            <li>YNAB says one subscription can be shared with up to six people. Neontra’s pricing page does not describe a household share.</li>
            <li>Bank sync in Canada is uneven. YNAB says direct import supports select Canadian banks. This article does not list which ones, because the pricing page did not.</li>
            <li>A notebook or a spreadsheet at $0 still works if the transfer runs. The app is not the saving rate.</li>
        </ul>
    </div>

    <div class="callout">
        <p><strong>Choose YNAB if…</strong> you want a zero-based method, you will pay in US dollars, and more than one person should sit on the same subscription. <strong>Choose Neontra if…</strong> you want a Canadian-dollar price and automatic connections, and you have confirmed your institutions actually connect. <strong>Choose neither if…</strong> you will not open the app. Use the cash-flow system and a calendar reminder. The fee you skip is the point.</p>
    </div>

    <h2>What do the pricing pages actually charge?</h2>

    <table>
        <caption>App prices from the vendor pricing pages reviewed on 27 September 2026. YNAB’s figures are US dollars. Neontra’s figures are the dollar sign on its Canadian pricing page.</caption>
        <thead>
            <tr>
                <th></th>
                <th>YNAB</th>
                <th>Neontra</th>
                <th>Your own spreadsheet</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Price</td>
                <td>US$14.99 a month, or US$109 a year (the page shows that as US$9.08 a month). Plus tax where it applies.</td>
                <td>Free plan $0. Premium $12 a month or $99 a year. The page says annual saves 30% versus the monthly price.</td>
                <td>$0</td>
            </tr>
            <tr>
                <td>Trial</td>
                <td>34 days, no card if you start on YNAB’s own site. College students can get a 365-day trial with proof of enrolment.</td>
                <td>The page says the first two weeks are on them</td>
                <td>None needed</td>
            </tr>
            <tr>
                <td>What the paid plan adds</td>
                <td>The subscription is the product. Direct import is part of it. One currency per plan. Share with up to six people.</td>
                <td>Unlimited institution connections, premium support, no ads. The free plan is manual tracking only.</td>
                <td>Nothing automatic. The <a href="/blog/cash-flow-system-canada/">categories</a> are yours.</td>
            </tr>
            <tr>
                <td>Currency of the bill</td>
                <td>US dollars. YNAB says the exchange rate is not built into the price.</td>
                <td>Shown as dollars on the Canadian site. Confirm the checkout currency before you subscribe.</td>
                <td>Canadian dollars, because you are not billed</td>
            </tr>
            <tr>
                <td>Holds your money?</td>
                <td>No. It reads accounts you connect.</td>
                <td>No, on the pricing page’s privacy lines. It is not a bank.</td>
                <td>No</td>
            </tr>
        </tbody>
    </table>

    <p>Table as of 27 September 2026. YNAB’s pricing page also publishes the company’s own averages for what new users save. Those figures are the vendor’s marketing. They are not used here as evidence. Your result is the transfer you added, which you can see in the account.</p>

    <h2>What should the app do, and what should it refuse to do?</h2>

    <p>The job is small. On payday, assign the dollars before they are spent. One piece is the bill account. One piece is the emergency or savings transfer. One piece is the irregular annual bills, which are easier to see when they have a name. Anything left is spending. That is zero-based budgeting, and it is also the cash-flow system written in software. If the app will not show you those three transfers, the extra charts are entertainment.</p>

    <ul>
        <li><strong>It should not pick your savings rate.</strong> A target you did not write down is the app’s default, not your plan. The framework is <a href="/blog/saving-rate-targets-canada/">saving-rate targets</a>.</li>
        <li><strong>It should not replace the registered-account order.</strong> An app that categorizes a TFSA contribution as “savings” has not checked your room. Room is the <a href="/blog/contribution-limits/">limits table</a> and the <a href="/blog/tfsa-contribution-optimization/">January TFSA guide</a>.</li>
        <li><strong>It should not be your only copy.</strong> Export or screenshot the categories once a quarter. If the sync breaks, the plan should still exist. Canadian bank connections are the usual break point. YNAB says select Canadian banks work for direct import and that a file import exists when they do not. Test your institution during the trial, before the US-dollar charge starts.</li>
        <li><strong>It should not hide a fixed cost.</strong> A subscription inside the app is itself a fixed cost. US$109 a year is worth it if it surfaces a larger leak. It is not worth it if you already know the leak and will not cancel it. The leak hunt is the <a href="/blog/fixed-cost-audit-canada/">fixed-cost audit</a>.</li>
    </ul>

    <div class="example-box">
        <strong>Illustration: the fee against one cancelled monthly charge</strong>
        <p>Neontra Premium at $99 a year is $8.25 a month if you divide the annual bill by twelve. The page’s monthly price is $12, which is why the annual option is cheaper if you stay the year. YNAB at US$109 a year is the US-dollar amount. Your card converts it. This article does not invent the conversion or a foreign-transaction markup. If your card charges one, the no-foreign-fee comparison is <a href="/blog/best-no-foreign-transaction-fee-credit-cards-canada/">that card guide</a>. A single $15 monthly subscription you cancel because the app made you look covers a Neontra annual plan with room left over. If you cancel nothing, the app was an expense. The arithmetic uses the posted prices and a round $15 you have to find on your own statement. It is not a promise that you will find one.</p>
    </div>

    <h2>How should couples and card spenders use one?</h2>

    <p>YNAB’s page says one subscription covers up to six people. That is a price feature, not a relationship feature. You still need a rule for joint bills and personal spending. The rule is the <a href="/blog/couples-money-system-canada/">couples system</a>. Neontra’s pricing page does not offer that share. Two Neontra Premium plans would be two bills. Confirm before you assume a household login exists.</p>

    <p>Credit-card spending belongs in the plan on the day it happens, not on the day the bank account pays the statement. Otherwise the month looks fine and the statement does not. Which card earns the spending is <a href="/blog/best-credit-cards-canada/">the card hub</a>, and only if the statement is paid in full. A budgeting app that helps you carry a balance has failed at the only job that matters. The interest comparison is <a href="/blog/debt-payoff-vs-investing-canada/">debt payoff versus investing</a>.</p>

    <div class="tip-box">
        <strong>Start the trial against a real payday:</strong>
        <p>Connect, or type, one paycheque. Assign the rent, the savings transfer, and the card payment before you assign restaurants. If the app is still empty when the trial ends, do not subscribe. The <a href="/blog/money-automation-stack-canada/">automation stack</a> can move the savings without a subscription. The app is for people who will not look at the bank page unless something else opens it for them.</p>
    </div>

    <h2>Frequently asked questions</h2>

    <h3>What is the best budgeting app in Canada in 2026?</h3>
    <p>For a strict zero-based plan priced in US dollars, YNAB is the method with a published price: US$14.99 a month or US$109 a year. For a Canadian-dollar subscription with bank sync on the paid tier, Neontra Premium is $12 a month or $99 a year, and the free tier is manual. For someone who already runs the cash-flow system, the best app is no app. This page did not re-price every other product on the market. If a vendor is not in the table, its price was not on a page fetched for this article.</p>

    <h3>Why is YNAB billed in US dollars?</h3>
    <p>Because YNAB’s pricing page says it is. The page also says exchange rates are not reflected in the price. You pay your card’s conversion. A no-foreign-transaction-fee card removes one markup and does not remove the exchange rate. Confirm both on the card and on the checkout screen. Do not annualize a US price into a Canadian price in your head and then forget the conversion.</p>

    <h3>Does Neontra’s free plan connect to my bank?</h3>
    <p>No. The pricing page says manual tracking on the free plan, and unlimited connections on Premium. The two-week period the page mentions is the time to test whether your institutions connect before you pay $12 or $99. If they do not connect, you are back to typing, and the spreadsheet is honest about that.</p>

    <h3>Can an app see my TFSA and RRSP?</h3>
    <p>Only if the connection supports those accounts, which you test rather than assume. Even then, the app does not know your remaining room. CRA My Account does. A net-worth chart that double-counts a transfer from chequing into a TFSA is a chart, not a contribution. Keep the room count in the contribution guide, not in the app’s “savings” category.</p>

    <h3>Is a budgeting app safe?</h3>
    <p>You are giving a company read access to your transactions if you connect a bank. YNAB’s pricing page says it makes money from the subscription rather than from selling data. That is the company’s statement. Read the current privacy policy before you connect, use the trial, and disconnect if you do not subscribe. A spreadsheet never gets the password. Safety here is a choice about access, not a star rating.</p>

    <h3>Will an app get me out of debt?</h3>
    <p>It will show the payment if you enter it. The interest you are paying is still the interest in the contract. If the debts are larger than a budget can clear, an app is the wrong tool and a Licensed Insolvency Trustee is the right conversation. The legal comparison is <a href="/blog/consumer-proposal-vs-bankruptcy-canada/">consumer proposal versus bankruptcy</a>. Do not pay US$109 to categorize a problem that needs a trustee.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="https://www.ynab.com/pricing">YNAB: pricing</a></li>
        <li><a href="https://www.neontra.com/pricing">Neontra: pricing</a></li>
    </ul>

    <div class="cta-section">
        <p><strong>The app categorizes. The tax return does not read the app.</strong></p>
        <p>Registered contributions and interest still have to land on the T1 correctly. The 2026 tax guide is that file.</p>
        <a href="/ebooks/tax-guide/" class="cta-button">Get the 2026 Tax Guide — $49 CAD</a>
    </div>

    ${footer}

</div>`
  ),

  budgetPost(
    'consumer-proposal-vs-bankruptcy-canada',
    'Consumer Proposal vs Bankruptcy in Canada',
    'A consumer proposal covers debts up to $250,000, excluding a home mortgage, and lasts at most five years. A first bankruptcy runs 9 or 21 months.',
    `<div class="container">

    <div class="hook">
        A consumer proposal and a bankruptcy are both federal insolvency files run by a Licensed Insolvency Trustee, and they are not the same deal. The Office of the Superintendent of Bankruptcy says a consumer proposal is available if your debts do not exceed <span class="highlight">$250,000</span>, not counting debts such as a mortgage on your principal residence, and the term cannot exceed five years. A first bankruptcy is nine months if your surplus income is under $200 a month, and 21 months if it is not.
    </div>

    <p>Try a repayment you can finish before you file either one. That comparison, while the interest is still the problem and a trustee is not, is <a href="/blog/debt-payoff-vs-investing-canada/">debt payoff versus investing</a>. The budget that shows whether a repayment exists is the <a href="/blog/canadian-cash-management-guide/">cash management guide</a> and the <a href="/blog/cash-flow-system-canada/">cash-flow system</a>. This page is what the OSB says happens after those tools are not enough. It is not a filing checklist, and it is not a substitute for a trustee.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>A consumer proposal is an offer, through a trustee, to pay creditors a percentage, or to take longer, or both. Creditors vote. You generally keep your assets if you keep paying secured creditors.</li>
            <li>A bankruptcy puts non-exempt assets in the trustee’s hands to sell. You stop paying unsecured creditors directly. Surplus income can require monthly payments and a longer file.</li>
            <li>The OSB’s 2026 standards for surplus income start at $2,716 a month for one person and rise with family size. If monthly surplus income is $200 or more, the bankrupt pays 50 percent of it to the estate.</li>
            <li>Miss three monthly proposal payments, or fall more than three months behind on a less frequent schedule, and the OSB says the proposal is deemed annulled unless a court or an amendment says otherwise.</li>
            <li>Some debts survive both processes. The OSB names support, court fines, debts from fraud, and student loans if you stopped being a student less than seven years before a bankruptcy.</li>
        </ul>
    </div>

    <div class="callout">
        <p><strong>Choose a consumer proposal if…</strong> you can offer creditors a fixed amount they are likely to accept, your unsecured debts fit under the $250,000 line, and you need to keep an asset a bankruptcy would sell. <strong>Choose bankruptcy if…</strong> you cannot fund a proposal creditors will take, you can live with the surplus-income payment and the shorter or longer clock, and a trustee agrees it is the file. <strong>Choose neither yet if…</strong> a written repayment, a lower interest rate, or a sale of something you do not need would clear the debt. A trustee’s first meeting is allowed to reach that conclusion.</p>
    </div>

    <h2>What does the OSB say each process is?</h2>

    <table>
        <caption>Consumer proposal versus bankruptcy, from OSB pages reviewed on 27 September 2026. Provincial exemptions for assets are not in this table. A trustee reads those for your province.</caption>
        <thead>
            <tr>
                <th></th>
                <th>Consumer proposal</th>
                <th>Bankruptcy</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Who can use it</td>
                <td>An individual whose debts do not exceed $250,000, excluding debts such as a mortgage secured by a principal residence</td>
                <td>The OSB page reviewed does not set a dollar minimum in the section quoted here. A trustee decides whether to take the file.</td>
            </tr>
            <tr>
                <td>What you pay</td>
                <td>The amount in the proposal, as a lump sum or periodic payments, for a term that cannot exceed five years</td>
                <td>The trustee’s fees, plus surplus-income payments if your income is over the standard. The OSB does not publish a single national trustee fee on the page reviewed.</td>
            </tr>
            <tr>
                <td>How long</td>
                <td>Up to five years. You can be done sooner if the proposal says so and you pay it.</td>
                <td>First bankruptcy: 9 months if surplus income is under $200 a month, 21 months if it is higher. Second bankruptcy: 24 or 36 months on the same split.</td>
            </tr>
            <tr>
                <td>Assets</td>
                <td>You retain your assets, provided you keep paying secured creditors</td>
                <td>The trustee sells assets, except those provincial and federal law exempts</td>
            </tr>
            <tr>
                <td>Creditors</td>
                <td>They have 45 days. A meeting is held if creditors owed at least 25% of proven claims ask for one. Acceptance is a simple majority of the dollar value of proven claims.</td>
                <td>Creditors are notified. A meeting is sometimes required. They do not have to accept an offer, because the process is not an offer.</td>
            </tr>
            <tr>
                <td>If payments stop</td>
                <td>Three missed monthly payments, or a last payment more than three months late on another schedule, and the proposal is deemed annulled</td>
                <td>The trustee opposes discharge if required surplus-income payments are not made</td>
            </tr>
            <tr>
                <td>Credit file, in the OSB’s words</td>
                <td>The proposal stays on the report for the term, plus a few years, and the period depends on the province. The OSB does not print an R-rating on this page.</td>
                <td>Generally removed after six or seven years for a first bankruptcy, and after 14 years for a later one. The OSB says the lowest possible credit rating is assigned.</td>
            </tr>
        </tbody>
    </table>

    <p>Table as of September 2026. Both processes require two financial counselling sessions. Both stop wage garnishments and lawsuits by unsecured creditors once the file is in. A secured creditor, the OSB says, generally keeps its rights. A car loan or a mortgage is a conversation with the trustee, not a line that disappears because you filed.</p>

    <h2>What is surplus income in 2026?</h2>

    <p>Surplus income is the part of what the household has, after the deductions the directive allows, that sits above the Superintendent’s standard for the size of the family. Directive No. 11R2-2026, issued 27 March 2026, sets the standards. The OSB notes that the HTML copy is not the official version if it disagrees with the PDF. The figures below are the HTML table reviewed for this article.</p>

    <table>
        <caption>Superintendent’s standards for 2026, monthly, from Directive No. 11R2-2026 Appendix A. The OSB says they start from Statistics Canada’s before-tax low-income cutoff for large urban areas, adjusted by 2.16% from the 2025 figures for the 2026 CPI expectation.</caption>
        <thead>
            <tr>
                <th>People in the family unit</th>
                <th>Monthly standard</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>$2,716</td>
            </tr>
            <tr>
                <td>2</td>
                <td>$3,381</td>
            </tr>
            <tr>
                <td>3</td>
                <td>$4,157</td>
            </tr>
            <tr>
                <td>4</td>
                <td>$5,047</td>
            </tr>
            <tr>
                <td>5</td>
                <td>$5,724</td>
            </tr>
            <tr>
                <td>6</td>
                <td>$6,456</td>
            </tr>
            <tr>
                <td>7 or more</td>
                <td>$7,188</td>
            </tr>
        </tbody>
    </table>

    <p>If the monthly surplus is under $200, the directive says the bankrupt pays nothing under that rule. If it is $200 or more, the bankrupt pays 50 percent of the surplus to the estate, then adjusted for the bankrupt’s share of the household’s income. The OSB’s own example is the cleanest arithmetic: one person with $3,500 of available monthly income, standard $2,716, surplus $784, payment $392. That example is in the directive. It is not a prediction of your income, and “available” income is after the non-discretionary items the directive lists, including child support, spousal support, child care, and certain medical and employment expenses. A trustee does that subtraction. A blog should not.</p>

    <div class="example-box">
        <strong>Why the proposal does not move when your pay does</strong>
        <p>In a bankruptcy, income is reported to the trustee, and a raise can create surplus income and extend a first-time automatic discharge from 9 months to 21. In a consumer proposal, the payment is the payment in the contract. The OSB does not describe a monthly income report for proposal debtors. Creditors, voting on dollar value, will compare your offer with what a bankruptcy would have paid them, including surplus income. An offer that ignores that comparison is an offer they can refuse. If they do, you can amend and resubmit, look at other options, or file bankruptcy.</p>
    </div>

    <h2>Which debts and which people stay on the hook?</h2>

    <ul>
        <li><strong>Support, fines, and fraud.</strong> The OSB says a bankruptcy discharge does not wipe alimony and child support, court-ordered fines or penalties, or debts from fraud. Do not plan a filing around a debt the statute keeps.</li>
        <li><strong>Student loans.</strong> A bankruptcy discharge releases federal student loans if you filed at least seven years after you stopped being a full-time or part-time student. The court can shorten that to five years in undue hardship if you have tried to repay. The OSB also points at the Repayment Assistance Plan for federal loans as the program to ask about before insolvency. This cluster does not have a separate student-loan article yet. The payoff-versus-investing post is the general debt test.</li>
        <li><strong>A co-signer or a spouse.</strong> Your bankruptcy does not release the person who co-signed. A joint debt can still be collected from the spouse who did not file. Joint assets can be pulled in for your share. Tell the trustee about both.</li>
        <li><strong>A house.</strong> Secured creditors keep their rights. Keeping the house means keeping the mortgage payments, in a proposal or in a bankruptcy, and it means knowing whether your equity is exempt where you live. That exemption is provincial. It is not a number on the federal pages reviewed here, so this article does not print one.</li>
    </ul>

    <div class="warning-box">
        <strong>Credit-score codes are not on the OSB page:</strong>
        <p>Other sites publish R7 and R9 and exact bureau clocks. The OSB’s consumer-proposal page says a proposal or a bankruptcy is generally assigned the lowest possible credit score, and that a proposal remains on the report for the term plus a few years, depending on the province. The bankruptcy page says the first bankruptcy is generally gone after six or seven years, and a later one after 14. Those are the sentences this article will stand on. Ask the trustee and the bureau what your province does. Do not treat a forum’s “R7 for three years” as the statute.</p>
    </div>

    <h2>Who do you call, and who you should not pay first?</h2>

    <p>Only a Licensed Insolvency Trustee can file either process. The OSB’s Bankruptcy Assistance Program can help you find one if you have already asked at least two trustees, you are not and have not recently been in commercial activity, you would not owe surplus-income payments, and you are not in jail. A credit counsellor who is not a trustee can talk to collectors. They cannot administer a proposal or a bankruptcy.</p>

    <p>Collectors are not allowed to harass you. The rules depend on the province. A trustee or a qualified counsellor can stand between you and the calls while you decide. Paying a new “debt relief” company that is not a trustee, before you have had the free OSB-side conversation, is how people add a fee to a file they still have to open. The counselling sessions inside a real filing exist so the next budget is not the same budget. The mechanics of that budget, after the file, are the <a href="/blog/cash-flow-system-canada/">cash-flow system</a> and <a href="/blog/best-budgeting-apps-canada/">a budgeting app only if you will use it</a>.</p>

    <h2>Frequently asked questions</h2>

    <h3>Is a consumer proposal better than bankruptcy?</h3>
    <p>It is better when you can pay a fixed offer creditors will accept and you need to keep assets a bankruptcy would sell. It is worse when the offer would cost more than the surplus-income payments of a short bankruptcy, or when creditors will vote it down. The OSB tells you to sit with a Licensed Insolvency Trustee and compare both against your income, your assets, and your debts. A website cannot see that file.</p>

    <h3>What is the debt limit for a consumer proposal?</h3>
    <p>The OSB says your debts must not exceed $250,000, not including debts such as a mortgage secured by your principal residence. A mortgage on the house you live in is outside that cap. Other debts count. If you are over the line, a consumer proposal is the wrong form. Ask the trustee what process replaces it. Do not leave a debt off the list to fit under the cap. You have to give the trustee a complete list of assets and liabilities.</p>

    <h3>How long will it stay on my credit report?</h3>
    <p>The OSB says a first bankruptcy is generally removed after six or seven years, and a later bankruptcy after 14. It says a consumer proposal stays for the length of the proposal plus a few years, and that the exact period depends on the province. It does not publish a single national R-code on the pages reviewed. When the proposal is fully performed you get a certificate of full performance. The OSB says to send that certificate to the credit-reporting agencies yourself.</p>

    <h3>Do I lose my house or my car?</h3>
    <p>Not automatically in a proposal. The OSB says you retain your assets if you keep paying secured creditors. In a bankruptcy the trustee sells what the law does not exempt, and exemptions are provincial. A financed car is the lender’s security either way. If you can afford the payment, the OSB says arrangements with the secured creditor are possible. If you cannot, the car is part of the trustee meeting, not a footnote.</p>

    <h3>What if my income goes up during the file?</h3>
    <p>In a bankruptcy, the trustee recalculates surplus income. The directive’s examples show a raise that creates a payment, and a drop that removes one. A first-time bankrupt who starts owing surplus income also moves from a 9-month automatic discharge toward 21 months. In a consumer proposal the contracted payment does not rise just because you earned more. Creditors priced the offer at the start. Windfalls and new debts are questions for the trustee, not for this paragraph.</p>

    <h3>Can I include my student loan?</h3>
    <p>In a bankruptcy, the OSB says the loan is released only if you filed at least seven years after you stopped being a student, or five years if a court finds undue hardship and you have tried to repay. Ask the trustee before you assume a proposal treats the same loan the same way. Before either filing, the OSB points federal borrowers to the Repayment Assistance Plan. Use that program if it fits. Insolvency is the later tool.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="https://ised-isde.canada.ca/site/office-superintendent-bankruptcy/en/you-owe-money/you-owe-money-consumer-proposals">Office of the Superintendent of Bankruptcy: consumer proposals</a></li>
        <li><a href="https://ised-isde.canada.ca/site/office-superintendent-bankruptcy/en/you-owe-money/you-owe-money-considering-bankruptcy">Office of the Superintendent of Bankruptcy: considering bankruptcy</a></li>
        <li><a href="https://ised-isde.canada.ca/site/office-superintendent-bankruptcy/en/directive-no-11r2-2026-surplus-income">Directive No. 11R2-2026: surplus income</a>. The OSB says the PDF prevails if the HTML differs.</li>
    </ul>

    <div class="cta-section">
        <p><strong>A filing is a legal process. The budget after it is still a tax file.</strong></p>
        <p>Interest, support, and what a trustee reports are not a substitute for the return. The 2026 tax guide is the filing companion, not insolvency advice.</p>
        <a href="/ebooks/tax-guide/" class="cta-button">Get the 2026 Tax Guide — $49 CAD</a>
    </div>

    ${footer}

</div>`
  ),
];
