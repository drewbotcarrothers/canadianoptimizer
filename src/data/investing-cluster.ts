type InvestingPost = {
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
  category: 'Investing',
  categorySlug: 'investing',
  author: 'Andrew',
  date: '2026-09-27',
  updated: '2026-09-27',
} as const;

function investingPost(
  slug: string,
  title: string,
  excerpt: string,
  content: string
): InvestingPost {
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
        <p><strong>Disclaimer:</strong> This is general education about investing in Canada as of September 2026. It is not a recommendation to buy, sell, or hold any security, and not investment, tax, or legal advice. Management fees, MERs, commissions, foreign-exchange spreads, and withholding rules change. Figures are tied to issuer, broker, CRA, or treaty pages reviewed in September 2026; confirm them before you act. Dollar examples are illustrations of arithmetic, not forecasts of return. Consult a registered adviser for a plan that fits your file.</p>
        <div class="footer-note">Published: ${published} | Category: Investing | Author: Andrew</div>
    </div>`;

export const investingClusterPosts: InvestingPost[] = [
  investingPost(
    'how-to-invest-canada-guide',
    "How to Invest in Canada: The Optimizer's Guide to Accounts, ETFs, and Brokerages",
    'In 2026, invest in Canada by filling TFSA and RRSP room, picking a mix you can hold, and choosing a broker for the foreign-exchange cost you will actually pay.',
    `<div class="container">

    <div class="hook">
        In 2026, investing in Canada is three decisions in order. Fill the account that has room — the <span class="highlight">TFSA dollar limit is $7,000</span> (CRA). Write down a stock-and-bond mix you will still hold after a bad year. Then pick a broker whose foreign-exchange cost matches the funds you will actually buy. The ticker is last.
    </div>

    <p>This is the hub for the investing cluster. Every spoke below links back here. It is a map, not a model portfolio and not a product ranking. Contribution room, brackets, and the deduction are tax. The companion on that side is the <a href="/blog/rrsp-vs-tfsa-vs-fhsa/">RRSP versus TFSA versus FHSA comparison</a> and the <a href="/blog/contribution-limits/">2026 limits table</a>.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>The 2026 TFSA dollar limit is $7,000. Room is that limit, plus unused room, plus last year's withdrawals, minus what you already put in.</li>
            <li>A one-ticket ETF is the right design when you will not rebalance. Building blocks are the right design when account location matters and you will maintain it.</li>
            <li>As of September 2026, XEQT and VEQT both list a 0.17% management fee. The published MER gap is not the decision.</li>
            <li>US portfolio dividends are taxed at 15% under the Canada-US treaty, or 30% if the broker has no treaty claim. An RRSP can be exempt. A TFSA cannot recover the tax.</li>
            <li>Wealthsimple and Questrade both list $0 commissions on Canadian and US stocks and ETFs, and both list a 1.5% currency-conversion fee. Price the conversion, not the headline.</li>
        </ul>
    </div>

    <h2>Which account should the next dollar use?</h2>

    <p>Canada does not have one sheltered account. It has a set, and they do different jobs. The expensive mistake is a clever non-registered sleeve while TFSA or RRSP room is empty. The January funding rule is the <a href="/blog/tfsa-contribution-optimization/">TFSA contribution guide</a>. The account itself is <a href="/blog/tfsa-strategies/">TFSA strategies</a>. The deduction is the <a href="/blog/rrsp-playbook/">RRSP playbook</a>. A first home on a real timeline is the <a href="/blog/fhsa-guide/">FHSA guide</a>.</p>

    <table>
        <caption>Where a dollar of long-term investing usually goes first, as of September 2026</caption>
        <thead>
            <tr>
                <th>Account</th>
                <th>What it does</th>
                <th>The constraint</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>FHSA, if a first home is still the plan</td>
                <td>A deduction on the way in, and a tax-free withdrawal for a qualifying home, within the rules and the lifetime cap.</td>
                <td>Money you will need for a purchase date does not belong in a volatile equity ETF. Match the horizon.</td>
            </tr>
            <tr>
                <td>TFSA</td>
                <td>Growth and withdrawals are tax-free in Canada. Withdrawals do not count as income for benefits tested on income. The 2026 dollar limit is $7,000.</td>
                <td>US dividend withholding inside a TFSA is not recoverable. Over-contribution is a separate penalty. Confirm room in CRA My Account.</td>
            </tr>
            <tr>
                <td>RRSP</td>
                <td>A deduction today if the contribution is deductible. US-listed securities held directly can use the treaty exemption on dividends.</td>
                <td>Withdrawals are fully taxable later. A large balance is a future inclusion, including for OAS. The credit for Canadian dividends is wasted inside.</td>
            </tr>
            <tr>
                <td>Non-registered</td>
                <td>Eligible Canadian dividends and capital losses only work here. Foreign tax on US dividends can be claimed, within limits, on Form T2209.</td>
                <td>This is overflow. Do not build it while registered room you will actually use is empty.</td>
            </tr>
        </tbody>
    </table>

    <p>Table as of September 2026. The TFSA dollar limit is from CRA. Treaty treatment is the Canada-US convention, Article X and Article XXI, summarized in the <a href="/blog/us-withholding-tax-by-account-canada/">withholding-tax guide</a>.</p>

    <h2>What mix should you write down?</h2>

    <p>The stock-and-bond split is a behaviour constraint. Equities are the growth engine and the part that can be down hard. Bonds, GICs, and savings are there so you are not forced to sell equities to buy groceries. There is no CRA-approved percentage. Write one sentence: equity weight, bond weight, Canada weight, and whether foreign equity is currency-hedged. If you cannot say it in a drawdown, you do not have an allocation.</p>

    <p>A global equity fund already owns a small slice of Canada. Adding more Canada is a home-bias choice. The honest reasons are the currency you spend and the eligible-dividend treatment available only in a taxable account. The honest caution is concentration in financials, energy, and materials. The placement of each sleeve is the <a href="/blog/diy-etf-portfolio-asset-location-canada/">asset-location guide</a>. Maintenance is <a href="/blog/rebalancing-without-tax-events-canada/">rebalancing without junk tax events</a>.</p>

    <h2>Should you buy one ETF or several?</h2>

    <p>Both are legitimate. They fail in different ways. The longer comparison is <a href="/blog/all-in-one-etfs-vs-diy-canada/">all-in-one ETFs versus a DIY portfolio</a>. The ticker-level version, with September 2026 fees and weights, is <a href="/blog/xeqt-vs-veqt-canada/">XEQT versus VEQT</a>.</p>

    <table>
        <caption>One fund versus building blocks</caption>
        <thead>
            <tr>
                <th>Structure</th>
                <th>What you buy</th>
                <th>What you give up</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>One asset-allocation ETF</td>
                <td>A single Canadian-listed fund that already mixes regions, and rebalances inside the fund. XEQT and VEQT are the all-equity examples. XGRO and VGRO are the growth examples, near 80% equity.</td>
                <td>You cannot put bonds in the RRSP and equities in the TFSA. US withholding inside the fund is whatever the fund pays. Fine when simplicity is what will keep you invested.</td>
            </tr>
            <tr>
                <td>Building blocks</td>
                <td>Separate ETFs for Canada, the US, the rest of the world, and bonds, placed in different accounts.</td>
                <td>You must rebalance, or the mix drifts. The MER gap versus an all-in-one is usually small next to a portfolio you abandon. How a fee compounds is the <a href="/blog/mer-drag-index-funds-canada/">MER drag guide</a>.</td>
            </tr>
        </tbody>
    </table>

    <div class="example-box">
        <strong>Illustration: the fee on $100,000, not a forecast</strong>
        <p>As of the August 2026 iShares fact sheet, XEQT's reported MER is 0.19%. On a $100,000 balance that stays $100,000, 0.19% is $190 a year. Vanguard's VEQT page still shows a 0.22% MER, which is $220, but Vanguard says that MER is the year-end figure and does not yet reflect the management-fee cut to 0.17% on 18 November 2025. The management fee on both XEQT and VEQT is 0.17%, which is $170. The $30 gap between the two reported MERs is not a reason to switch. Behaviour is.</p>
    </div>

    <h2>Which brokerage fits the portfolio?</h2>

    <p>A zero-commission headline is not a cost. As of September 2026, Wealthsimple and Questrade both list $0 commissions on stocks and ETFs listed in Canada and the United States, and both list a 1.5% fee on CAD-USD conversion. The dated comparison is <a href="/blog/wealthsimple-vs-questrade/">Wealthsimple versus Questrade</a>. The structural comparison, without a live price list, is the <a href="/blog/best-online-brokerages-canada/">brokerage guide</a>.</p>

    <p>If the portfolio is one Canadian-listed ETF, you may never convert currency, and the simpler platform can be the whole decision. If the <a href="/blog/diy-etf-portfolio-asset-location-canada/">asset-location guide</a> has you holding a US-listed fund inside an RRSP, the test order is contribute Canadian dollars, convert, and buy. That conversion is <a href="/blog/norberts-gambit-canada-guide/">Norbert's gambit</a> at Wealthsimple and Questrade, and it is usually the broker's own spot conversion at Interactive Brokers. Currency hedging, separate from the journal, is the <a href="/blog/currency-hedging-us-listed-etfs-canada/">hedging guide</a>.</p>

    <h2>What about a robo-advisor?</h2>

    <p>A robo-advisor charges a management fee on top of the ETFs it holds. An all-in-one ETF's MER is the product fee. As of September 2026, Questwealth lists 0.25% on balances from $250 to $99,999 and 0.20% from $100,000. Wealthsimple lists 0.5% on managed accounts for Core clients and 0.4% for Premium. Those percentages are not the whole cost. The comparison is <a href="/blog/best-robo-advisors-canada/">best robo-advisors in Canada</a>.</p>

    <div class="example-box">
        <strong>Illustration: $800 a month, one fund, one account</strong>
        <p>Priya in Ontario has no FHSA plan, a marginal rate that does not make the RRSP deduction obviously valuable, and she will not rebalance. She puts the 2026 TFSA limit, $7,000, into one Canadian-listed all-equity ETF in January, then $800 a month for the rest of the year into the same fund as room and cash allow. She does not convert currency. She does not add a second global ETF "for safety." The MER on a $7,000 balance at 0.19% is about $13 for that year if the balance never grows. The point of the example is the sequence, not the $13. If her income later justifies the RRSP, the <a href="/blog/rrsp-playbook/">RRSP playbook</a> picks up the deduction. This is an illustration, not a recommendation of 100% equity.</p>
    </div>

    <h2>Where does US withholding actually land?</h2>

    <p>A Canadian ticker is not a treaty exemption. Vanguard says VFV invests primarily in the US-domiciled Vanguard S&P 500 ETF. Holding that Canadian ticker inside an RRSP does not put the RRSP in front of the US payer. Holding the US-listed fund directly can. The side-by-side is <a href="/blog/vfv-vs-voo-canadians/">VFV versus VOO</a>, and the account matrix is <a href="/blog/us-withholding-tax-by-account-canada/">US withholding by account</a>. What belongs in the TFSA once room is funded is <a href="/blog/best-etfs-tfsa-canada/">best ETFs for a TFSA</a>.</p>

    <p>Cash you will spend inside a few years does not belong in an equity ETF. The parking comparison is <a href="/blog/hisa-vs-cash-etf-canada/">HISA versus cash ETF</a>. Eligible dividends versus deferred gains, once a taxable account exists, is <a href="/blog/dividend-vs-growth-taxable-accounts-canada/">dividends versus growth</a>. Losses, only in that taxable account, are the <a href="/blog/tax-loss-harvesting-calendar-canada/">tax-loss harvesting calendar</a>.</p>

    <h2>A weekend sequence</h2>

    <ol>
        <li>Confirm TFSA, RRSP, and FHSA room in CRA My Account. Do not trust a brokerage estimate.</li>
        <li>Write the mix in one sentence. Date it.</li>
        <li>If you will not rebalance, buy one Canadian-listed asset-allocation ETF that matches the sentence. Same fund in every registered account you are using. Stop.</li>
        <li>If you will rebalance, place bonds and any US-listed equity in the RRSP, broad growth in the TFSA, and Canadian equity in non-registered once registered room is full.</li>
        <li>Open the broker that can hold that structure. Read the foreign-exchange line before you move a large USD amount.</li>
        <li>Revisit once a year. Do not add a fund because it led last year's chart.</li>
    </ol>

    <h2>Spokes in this cluster</h2>

    <ul>
        <li><a href="/blog/wealthsimple-vs-questrade/">Wealthsimple versus Questrade</a> — commissions, the 1.5% FX fee, and USD accounts.</li>
        <li><a href="/blog/xeqt-vs-veqt-canada/">XEQT versus VEQT</a> — and XGRO versus VGRO.</li>
        <li><a href="/blog/best-etfs-tfsa-canada/">Best ETFs for a TFSA</a> — what the shelter is actually for.</li>
        <li><a href="/blog/norberts-gambit-canada-guide/">Norbert's gambit</a> — Questrade, Wealthsimple, and when IBKR makes it pointless.</li>
        <li><a href="/blog/vfv-vs-voo-canadians/">VFV versus VOO</a> — the S&P 500 as a Canadian, including the wrapper.</li>
        <li><a href="/blog/us-withholding-tax-by-account-canada/">US withholding by account</a> — TFSA, RRSP, and non-registered.</li>
        <li><a href="/blog/best-robo-advisors-canada/">Best robo-advisors</a> — the management fee on top of the ETFs.</li>
    </ul>

    <h2>Frequently asked questions</h2>

    <h3>What is the simplest way to invest in Canada in 2026?</h3>
    <p>Open a TFSA, confirm the room, and buy one Canadian-listed asset-allocation ETF that matches a mix you wrote down. The 2026 TFSA dollar limit is $7,000. Skip US-dollar conversion until an RRSP is large enough that a US-listed holding is worth the paperwork. Revisit once a year. That is a complete plan for a lot of households.</p>

    <h3>Should I max the TFSA or the RRSP first?</h3>
    <p>Use the RRSP when the deduction is worth more now than the tax you expect on the withdrawal later. Use the TFSA when you want tax-free withdrawals that do not inflate income-tested benefits, or when today's marginal rate is modest. A first-home FHSA can come before both if the purchase is real. The three-account comparison is the worksheet. This page will not assign you a winner.</p>

    <h3>Are XEQT and VEQT safe?</h3>
    <p>They are equity funds. BlackRock describes XEQT as a 100% equity portfolio. Vanguard describes VEQT the same way. Equity funds fall. "Eligible for registered plans" is a tax fact, not a promise that the unit price holds. If you cannot watch that, use a fund with bonds, or do not invest money you need soon.</p>

    <h3>Do I need a US-dollar account?</h3>
    <p>Not if every fund you buy is listed in Canadian dollars. You need one if you will hold US-listed securities and you do not want a conversion fee on every order. As of September 2026, Wealthsimple lists USD accounts at $10 a month for Core clients, included for Premium and Generation. Questrade lists dual-currency accounts at no extra account fee.</p>

    <h3>Is a robo-advisor cheaper than an all-in-one ETF?</h3>
    <p>Usually no, once you add the management fee to the ETFs inside the robo portfolio. Questwealth's 0.25% is already more than XEQT's 0.19% MER before those underlying ETFs. You are paying for someone else to choose and rebalance. That can be worth it. It is not a lower product fee.</p>

    <h3>Where do I confirm these numbers?</h3>
    <p>CRA for the TFSA limit and your room. The ETF facts sheet for the MER and the holdings. The broker's fee schedule for commissions and FX. The Canada-US tax convention for the 15% dividend rate and the pension exemption. A blog, including this one, is a map dated September 2026.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/tax-free-savings-account/contributing/calculate-room.html">CRA: TFSA dollar limit and contribution room</a></li>
        <li><a href="https://www.canada.ca/en/department-finance/programs/tax-policy/tax-treaties/country/united-states-america-convention-consolidated-1980-1983-1984-1995-1997-2007.html">Canada-US tax convention (Finance Canada, consolidated)</a></li>
        <li><a href="https://www.blackrock.com/ca/investors/en/products/309480/ishares-core-equity-etf-portfolio">iShares XEQT</a> and the <a href="https://www.vanguard.ca/en/product/etf/asset-allocation/9692/vanguard-all-equity-etf-portfolio">Vanguard VEQT</a> page</li>
        <li><a href="https://www.wealthsimple.com/en-ca/pricing">Wealthsimple pricing</a> and <a href="https://www.questrade.com/pricing/self-directed-commissions-plans-fees/transaction">Questrade transaction fees</a></li>
    </ul>

    <div class="cta-section">
        <p><strong>The portfolio is the engine. The return is the tax.</strong></p>
        <p>Account choice does not set your bracket. The 2026 tax guide is the filing side of the same plan.</p>
        <a href="/ebooks/tax-guide/" class="cta-button">Get the 2026 Tax Guide — $49 CAD</a>
    </div>

    ${footer('September 27, 2026')}

</div>`
  ),

  investingPost(
    'wealthsimple-vs-questrade',
    'Wealthsimple vs Questrade (2026): Fees, FX, Account Types, and Who Should Use Which',
    'As of September 2026, both charge $0 stock and ETF commissions and 1.5% to convert currency. The split is USD accounts, journaling, and account menus.',
    `<div class="container">

    <div class="hook">
        As of September 2026, Wealthsimple and Questrade both list <span class="highlight">$0 commissions on Canadian and US stocks and ETFs</span>, and both list a 1.5% currency-conversion fee. Choose Wealthsimple if you will buy Canadian-listed ETFs and want the simpler app. Choose Questrade if you want dual-currency registered accounts without a monthly USD subscription, or you will journal often.
    </div>

    <p>This comparison sits under the <a href="/blog/how-to-invest-canada-guide/">how to invest in Canada</a> hub. The structural broker map, without a live price list, is the <a href="/blog/best-online-brokerages-canada/">brokerage guide</a>. The journal itself is <a href="/blog/norberts-gambit-canada-guide/">Norbert's gambit</a>. Neither firm is a referral here. There is no affiliate link on this page.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>Stock and ETF commissions: $0 at both, for securities listed in Canada or the United States, on the pages reviewed.</li>
            <li>CAD-USD conversion: 1.5% at both when you convert. Wealthsimple's tiered lower rates apply only to cash moved between a CAD account and a USD account, and only in larger bands.</li>
            <li>Wealthsimple USD accounts are $10 a month plus tax for Core clients after a 30-day trial, and included for Premium and Generation.</li>
            <li>Questrade lists dual-currency accounts with no annual account fee and no inactivity fee. Journaling is $9.95 a request, or free with Questrade Plus.</li>
            <li>Interactive Brokers is the third path when the conversion itself is the whole cost. Its spot schedule is not a 1.5% spread.</li>
        </ul>
    </div>

    <div class="tip-box">
        <strong>Choose Wealthsimple if…</strong> the portfolio is Canadian-listed ETFs, you want one app, and you will not convert currency often.
        <p><strong>Choose Questrade if…</strong> you will hold US dollars inside an RRSP or TFSA, journal more than occasionally, or you want the self-directed desk and the Questwealth robo at the same firm. The robo fees are in <a href="/blog/best-robo-advisors-canada/">best robo-advisors</a>.</p>
    </div>

    <h2>What do the fee schedules actually say?</h2>

    <table>
        <caption>Wealthsimple and Questrade self-directed pricing, as of September 2026</caption>
        <thead>
            <tr>
                <th>Item</th>
                <th>Wealthsimple</th>
                <th>Questrade</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Canadian and US stocks and ETFs, online</td>
                <td>$0 commission</td>
                <td>$0 commission to buy and to sell</td>
            </tr>
            <tr>
                <td>CAD-USD conversion</td>
                <td>1.5% on trades from a CAD account. Between a CAD and a USD account: 1.5% under $10,000, 1.0% from $10,000 to $24,999.99, 0.5% from $25,000 to $99,999.99, 0% at $100,000 and over. Applied to Wealthsimple's corporate exchange rate, which itself includes a spread.</td>
                <td>1.5%, included in the FX rate. Questrade says this fee was last updated 18 November 2023.</td>
            </tr>
            <tr>
                <td>USD account</td>
                <td>$10 a month plus tax for Core, after a 30-day trial. Included if you are Premium or Generation and you opt in. Trading US-listed securities from the USD account has no per-trade FX fee.</td>
                <td>Dual-currency is listed as enabled, with no annual account fee, so you can hold USD in registered accounts and avoid a forced conversion on each US trade.</td>
            </tr>
            <tr>
                <td>Journaling (Norbert's gambit)</td>
                <td>Help Centre: $9.95 plus tax per request, web only, Global X DLR and DLR.U only, about two business days, and you need a USD account.</td>
                <td>$9.95 per online request. Free and unlimited with Questrade Plus. Requests can take up to five business days. A recent purchase needs one business day to settle before the journal.</td>
            </tr>
            <tr>
                <td>Options, if you use them</td>
                <td>Pricing page lists $0 USD options for Core, Premium, and Generation. Confirm the contract schedule before you trade.</td>
                <td>CAD options: $0 plus $0.99 per contract. US equity options: $0 on the pricing page reviewed, with a separate index schedule.</td>
            </tr>
        </tbody>
    </table>

    <p>Table as of September 2026. Sources are the Wealthsimple pricing page and trade fee schedule, and Questrade's transaction-fee and journaling pages. Questrade Plus is free to all customers until 30 September 2026; from 1 October 2026 Questrade lists it at $19.99 a month plus tax. Do not build a multi-year plan on a three-day promotion.</p>

    <h2>Who pays the 1.5% more than once?</h2>

    <p>A Canadian-listed asset-allocation ETF never needs this line. XEQT and VEQT trade in Canadian dollars. The <a href="/blog/xeqt-vs-veqt-canada/">XEQT versus VEQT</a> decision is holdings and MER, not FX. You pay the 1.5% when you buy or sell a US-listed security from a CAD balance, or when you convert cash.</p>

    <div class="example-box">
        <strong>Illustration: converting $10,000 once</strong>
        <p>At 1.5%, $10,000 costs $150 before any spread already inside the corporate rate. A $9.95 journal is $9.95 plus sales tax. In Ontario, 13% HST on $9.95 is about $1.29, so the ticket is about $11.24. That is the arithmetic, not a quote of your province's tax. The break-even against 1.5%, before the ETF's bid-ask, is $9.95 divided by 0.015, about $663, and higher once tax and the spread are in. On $10,000 the journal is the cheaper posted fee. At Interactive Brokers Canada's spot schedule, tier one is 0.20 basis points with a USD $2 minimum, so $10,000 costs the $2 minimum, not $150. Auto-conversion there is typically 0.03%, which is $3 on $10,000. Norbert's gambit is the wrong tool at that broker. Details are in the <a href="/blog/norberts-gambit-canada-guide/">gambit guide</a>.</p>
    </div>

    <p>Wealthsimple Core clients also pay $10 a month plus tax for the USD account the gambit requires, unless they are already Premium or Generation. On a single conversion, add that month. On a standing USD RRSP, it is a subscription, and Questrade's "no annual account fee" line is the comparison.</p>

    <h2>Which accounts can you actually open?</h2>

    <p>Self-directed menus move. Wealthsimple's own pages say you can upgrade self-directed stock accounts to USD, and that you convert only between paired accounts: a CAD TFSA to a USD TFSA, not a CAD TFSA to a USD RRSP. Questrade's journaling page says online journaling is not available in an RESP; you call or chat for that account. Before you transfer a retirement account, confirm FHSA, RESP, LIRA, RRIF, and spousal RRSP on the firm's current list. A perfect fee on a missing account type is not a perfect fee.</p>

    <p>Transfers in are a different bill from trades. Read the transfer-out fee and any reimbursement before you move a TFSA or RRSP. Withdrawing and re-contributing is not a transfer. That mistake is in the <a href="/blog/tfsa-contribution-optimization/">TFSA contribution guide</a>. Where the US-listed sleeve belongs, once the broker can hold it, is the <a href="/blog/diy-etf-portfolio-asset-location-canada/">asset-location guide</a>.</p>

    <h2>What this page will not call a winner</h2>

    <p>Research tools, fractional shares, options depth, and phone support change, and they matter only if you use them. CIPF membership is a coverage fact with a limit you should read on <a href="https://www.cipf.ca/">cipf.ca</a>, not a reason to pick a logo. Wealthsimple's managed portfolios and Questrade's Questwealth are a separate product with a management fee. Do not compare a self-directed $0 commission with a robo percentage as if they were the same service.</p>

    <h2>Frequently asked questions</h2>

    <h3>Is Wealthsimple or Questrade cheaper in 2026?</h3>
    <p>For Canadian-listed ETFs bought with Canadian dollars, both list $0 commissions, so the cheaper one is the one you will actually use. The gap opens when you convert currency. Both list 1.5%. Wealthsimple then adds a $10 monthly USD-account fee for Core clients. Questrade lists dual-currency without that monthly fee and charges $9.95 to journal. Price your own orders.</p>

    <h3>Does the 1.5% apply twice, on the buy and on the sell?</h3>
    <p>At Wealthsimple, a US trade placed from a CAD account is converted on the order. Selling back into CAD converts again. A USD account avoids the per-trade fee; you pay when you move cash between CAD and USD, on the tier for that amount. Questrade's 1.5% is on the conversion. Holding the USD proceeds skips the second conversion until you switch back.</p>

    <h3>Is Questrade Plus worth $19.99 a month for free journaling?</h3>
    <p>Only if you journal often enough that $9.95 a request exceeds the subscription, and you will use the other Plus items. One journal a year does not. Questrade says Plus is free for all customers until 30 September 2026 and $19.99 a month plus tax after that. Read the current offer. Do not subscribe to save a fee you will not incur.</p>

    <h3>Can I hold VOO at either broker?</h3>
    <p>VOO is a US-listed ETF. Both brokers list US-listed ETFs at $0 commission. You still pay to get Canadian dollars into US dollars unless the account already holds USD. Whether VOO belongs in the account at all is a withholding question, not a commission question. See <a href="/blog/vfv-vs-voo-canadians/">VFV versus VOO</a>.</p>

    <h3>Which one is better for a TFSA all-in-one ETF?</h3>
    <p>Either, if the only trade is a Canadian-listed fund and you will not convert currency. Both list $0 commissions on those ETFs. Pick the app you will actually fund in January. The fund choice is <a href="/blog/best-etfs-tfsa-canada/">best ETFs for a TFSA</a>, not the broker logo. A USD account does not help that trade.</p>

    <h3>Are these figures promotional?</h3>
    <p>The $0 commissions and the 1.5% FX lines are from the firms' own pricing pages, not from a bonus. Welcome bonuses and transfer rebates were left out on purpose. They change, and they are often unavailable if you have held an account before. Confirm the schedule the day you apply.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="https://www.wealthsimple.com/en-ca/pricing">Wealthsimple pricing</a> and the <a href="https://www.wealthsimple.com/en-ca/legal/fees/trade">trade fee schedule</a></li>
        <li><a href="https://help.wealthsimple.com/hc/en-ca/articles/4414660979355-Upgrade-to-USD-accounts-for-stock-and-crypto-trading">Wealthsimple: USD accounts</a></li>
        <li><a href="https://www.questrade.com/pricing/self-directed-commissions-plans-fees/transaction">Questrade transaction fees</a> and <a href="https://www.questrade.com/learning/stocks-etfs/journaling-shares">journaling shares</a></li>
        <li><a href="https://www.interactivebrokers.ca/en/pricing/commissions-spot-currencies.php">Interactive Brokers Canada: spot currency commissions</a></li>
    </ul>

    <div class="cta-section">
        <p><strong>The broker is the pipe. Tax is the pressure.</strong></p>
        <p>A cleaner platform does not set your bracket. The 2026 tax guide is the other half.</p>
        <a href="/ebooks/tax-guide/" class="cta-button">Get the 2026 Tax Guide — $49 CAD</a>
    </div>

    ${footer('September 27, 2026')}

</div>`
  ),

  investingPost(
    'xeqt-vs-veqt-canada',
    'XEQT vs VEQT (and XGRO vs VGRO): Which All-in-One ETF for Canadians?',
    'As of September 2026, XEQT and VEQT both charge a 0.17% management fee. The live difference is Canada weight and payout frequency, not a fee gap.',
    `<div class="container">

    <div class="hook">
        As of September 2026, XEQT and VEQT both charge a <span class="highlight">0.17% management fee</span>. Pick VEQT if you want more Canada and more emerging markets in an all-equity fund that pays once a year. Pick XEQT if you want more developed markets outside North America and quarterly distributions. The reported MER gap is not the decision. The same pattern, with bonds, is XGRO versus VGRO.
    </div>

    <p>Both are Canadian-listed asset-allocation ETFs under the <a href="/blog/how-to-invest-canada-guide/">how to invest in Canada</a> hub. They are examples of a structure, not a recommendation to concentrate a household in one ticker. When one fund is the wrong design entirely, read <a href="/blog/all-in-one-etfs-vs-diy-canada/">all-in-one versus DIY</a>. Where that one fund should sit is the <a href="/blog/diy-etf-portfolio-asset-location-canada/">asset-location guide</a>.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>Management fee: 0.17% on XEQT, XGRO, VEQT, and VGRO. BlackRock cut XEQT and XGRO on 18 December 2025. Vanguard cut VEQT and VGRO on 18 November 2025.</li>
            <li>Reported MER: XEQT 0.19% (August 2026 fact sheet). XGRO 0.20% (ETF facts, 30 April 2026). VEQT and VGRO still show 0.22%, and Vanguard says that figure does not yet reflect the fee cut.</li>
            <li>As of 31 August 2026, VEQT's Canada fund weight is 30.58%. XEQT's Canada holding on the August 2026 fact sheet is 25.64%.</li>
            <li>XEQT and XGRO distribute quarterly. VEQT distributes annually.</li>
            <li>An all-equity fund can fall hard. If you need bonds, compare XGRO and VGRO, not XEQT and VEQT.</li>
        </ul>
    </div>

    <div class="tip-box">
        <strong>Choose XEQT if…</strong> you want 100% equity, a smaller Canada weight, and quarterly cash you will reinvest or spend.
        <p><strong>Choose VEQT if…</strong> you want 100% equity, closer to 30% Canada, and you do not care that the distribution is annual. <strong>Choose XGRO or VGRO if…</strong> the sentence you wrote down includes bonds.</p>
    </div>

    <h2>What is the fee, really?</h2>

    <table>
        <caption>All-in-one fees as published, September 2026</caption>
        <thead>
            <tr>
                <th>ETF</th>
                <th>Target</th>
                <th>Management fee</th>
                <th>MER on the page reviewed</th>
                <th>Distributions</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>XEQT</td>
                <td>100% equity</td>
                <td>0.17% since 18 December 2025 (was 0.18%)</td>
                <td>0.19%</td>
                <td>Quarterly</td>
            </tr>
            <tr>
                <td>VEQT</td>
                <td>100% equity</td>
                <td>0.17% since 18 November 2025 (was 0.22%)</td>
                <td>0.22%, year-end figure; Vanguard says it does not yet include the cut</td>
                <td>Annually</td>
            </tr>
            <tr>
                <td>XGRO</td>
                <td>About 80% equity and 20% fixed income</td>
                <td>0.17%</td>
                <td>0.20% on the 30 April 2026 ETF facts</td>
                <td>Quarterly</td>
            </tr>
            <tr>
                <td>VGRO</td>
                <td>About 80% equity and 20% fixed income. On 31 August 2026 the page showed 81.65% stock and 18.33% bonds.</td>
                <td>0.17%</td>
                <td>0.22%, same year-end caveat as VEQT</td>
                <td>Vanguard lists the growth portfolio on its own page; confirm the latest distribution line there</td>
            </tr>
        </tbody>
    </table>

    <p>MER includes management fees and GST/HST. It is a backward-looking ratio. The management fee is what the manager cut. Comparing 0.19% with 0.22% and calling VEQT permanently more expensive ignores Vanguard's own note. How a tenth of a percent compounds, when the gap is real, is the <a href="/blog/mer-drag-index-funds-canada/">MER drag guide</a>.</p>

    <div class="example-box">
        <strong>Illustration: $100,000 for one year, balance unchanged</strong>
        <p>0.17% of $100,000 is $170. That is the management fee on each of the four funds. XEQT's 0.19% MER is $190. VEQT's published 0.22% MER is $220. The $30 difference is the stale-MER gap, not a cheque Vanguard says you will keep paying at the old rate. A switch in a non-registered account can realize a capital gain larger than many years of $30. Inside a TFSA or RRSP there is no capital gain on the switch. There is still a bid-ask, and there is still the chance you own two copies of the same idea. Do not hold XEQT and VEQT together and call it diversification.</p>
    </div>

    <h2>How different are the holdings?</h2>

    <p>Fees converged. Weights did not. Figures below are the issuers' own breakdowns, not a target you should expect tomorrow.</p>

    <table>
        <caption>Equity building blocks, issuer pages reviewed September 2026</caption>
        <thead>
            <tr>
                <th>Sleeve</th>
                <th>XEQT, August 2026 fact sheet</th>
                <th>VEQT, 31 August 2026</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>United States</td>
                <td>Two total-US iShares lines, 29.68% and 15.35%, together 45.03%</td>
                <td>US total-market ETF 44.77%. Country weight 44.99%</td>
            </tr>
            <tr>
                <td>Canada</td>
                <td>S&amp;P/TSX Capped Composite holding 25.64%</td>
                <td>FTSE Canada All Cap ETF 30.58%. Country weight 30.64%</td>
            </tr>
            <tr>
                <td>Developed markets outside North America</td>
                <td>MSCI EAFE IMI holding 24.41%</td>
                <td>FTSE Developed All Cap ex North America 17.63%</td>
            </tr>
            <tr>
                <td>Emerging markets</td>
                <td>4.78%</td>
                <td>7.00%</td>
            </tr>
        </tbody>
    </table>

    <p>XGRO's ETF facts as of 30 April 2026 list the US total-market ETF at 36.8%, the Canadian equity ETF at 20.2%, EAFE at 19.8%, and emerging markets at 4.2%, plus Canadian and US bond ETFs. VGRO on 31 August 2026 lists US equity at 36.51%, Canada equity at 24.71%, developed ex North America at 14.76%, and emerging markets at 5.67%, with the bond sleeve in Canadian aggregate bonds and hedged global and US bonds. The home-bias gap shows up again: Vanguard's Canada equity weight is higher.</p>

    <p>BlackRock says XGRO hedges foreign currency inside the non-Canadian bond sleeve. Equity in these funds is generally unhedged. That choice, and why a bond hedge is a different question from an equity hedge, is the <a href="/blog/currency-hedging-us-listed-etfs-canada/">currency hedging guide</a>.</p>

    <h2>Does the RRSP fix withholding inside these funds?</h2>

    <p>No. These are Canadian-listed funds. US withholding that happens inside a US-listed ETF they own is not unwound because your RRSP holds the Canadian ticker. The account matrix is <a href="/blog/us-withholding-tax-by-account-canada/">US withholding by account</a>. For a pure S&amp;P 500 sleeve, the wrapper question is <a href="/blog/vfv-vs-voo-canadians/">VFV versus VOO</a>. Inside a TFSA the treaty exemption was never available, so a Canadian-listed all-in-one is the simple holding. That case is <a href="/blog/best-etfs-tfsa-canada/">best ETFs for a TFSA</a>.</p>

    <h2>What should you do if you already own one?</h2>

    <p>Keep it, unless the Canada weight or the bond weight is wrong for the sentence you wrote down. A 0.03 percentage-point argument is not a rebalance. New money can go to the fund you would buy today. Selling the old one in a taxable account is a tax event. The order is <a href="/blog/rebalancing-without-tax-events-canada/">rebalancing without junk tax events</a>.</p>

    <h2>Frequently asked questions</h2>

    <h3>Is XEQT better than VEQT?</h3>
    <p>Not on the management fee. Both are 0.17%. XEQT has less Canada and more EAFE on the pages reviewed. VEQT has more Canada and more emerging markets, and it pays annually. "Better" is the weight you meant to own. If you did not write that down, you are shopping for a ticker, not a portfolio.</p>

    <h3>Why do the MER and the management fee disagree?</h3>
    <p>The MER is calculated at the fund's year end and includes taxes. Vanguard says the 0.22% MER on VEQT does not yet reflect the 18 November 2025 cut from 0.22% to 0.17%. BlackRock's XEQT fact sheet already shows a 0.19% MER beside the 0.17% management fee. Use the management fee for the go-forward cost, and expect the next MER to land near it, plus tax, not on the old Vanguard rate.</p>

    <h3>Should I buy XGRO instead of XEQT?</h3>
    <p>Buy the growth fund if your mix includes bonds. XGRO targets about 80% equity and 20% fixed income. XEQT targets 100% equity. The bond weight is the risk decision. The fee is almost the same. Do not use a bond fund as a three-year house down payment. A near-term purchase belongs in something that cannot gap down. The FHSA timeline is the <a href="/blog/fhsa-guide/">FHSA guide</a>.</p>

    <h3>Can I hold XEQT in a TFSA and VEQT in an RRSP?</h3>
    <p>You can. You should not, if the reason is "diversification." They own the same idea with different Canada weights. One all-equity fund in both accounts is easier to explain in a bad year. Split only when you are placing different sleeves on purpose.</p>

    <h3>Do quarterly distributions make XEQT better for income?</h3>
    <p>No. A distribution is not a higher return. Inside a TFSA or RRSP, reinvest it and the timing barely matters. In a non-registered account, a distribution can be taxable whether you spend it or not. VEQT's annual payout is a different calendar, not a tax shelter. Character comes from the T3, not from the yield label.</p>

    <h3>Will these weights stay put?</h3>
    <p>No. Both managers rebalance toward a strategic mix, and the mix can be revised. The August 2026 and April 2026 weights on this page are a snapshot. Open the fact sheet in the year you buy. Past returns on the issuer pages are not a forecast and are not repeated here as a reason to pick either fund.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="https://www.blackrock.com/ca/investors/en/products/309480/ishares-core-equity-etf-portfolio">iShares XEQT product page</a> and the <a href="https://www.blackrock.com/ca/investors/en/literature/fact-sheet/xeqt-ishares-core-equity-etf-portfolio-fund-fact-sheet-en-ca.pdf">August 2026 XEQT fact sheet</a></li>
        <li><a href="https://www.blackrock.com/ca/investors/en/literature/press-release/fee-cut-aa-1218-en.pdf">BlackRock fee cut, 18 December 2025</a></li>
        <li><a href="https://www.vanguard.ca/en/product/etf/asset-allocation/9692/vanguard-all-equity-etf-portfolio">Vanguard VEQT</a> and <a href="https://www.vanguard.ca/en/product/etf/asset-allocation/9579/vanguard-growth-etf-portfolio">Vanguard VGRO</a></li>
        <li><a href="https://www.vanguard.ca/en/insights/lowering-the-cost-of-investing-again">Vanguard fee cut, effective 18 November 2025</a></li>
        <li><a href="https://www.blackrock.com/ca/investors/en/literature/etf-summary/xgro-facts-en-ca.pdf">XGRO ETF facts (30 April 2026)</a></li>
    </ul>

    <div class="cta-section">
        <p><strong>The ticker is the last choice. The tax return is larger.</strong></p>
        <p>Which account holds the fund moves more money than 0.03 of a percent. The 2026 tax guide is that half.</p>
        <a href="/ebooks/tax-guide/" class="cta-button">Get the 2026 Tax Guide — $49 CAD</a>
    </div>

    ${footer('September 27, 2026')}

</div>`
  ),

  investingPost(
    'best-etfs-tfsa-canada',
    'Best ETFs for a TFSA in Canada (2026)',
    'The best TFSA ETF in 2026 is a Canadian-listed fund you will hold. US withholding in a TFSA is not creditable, and the TFSA limit is $7,000.',
    `<div class="container">

    <div class="hook">
        The best ETF for a TFSA in 2026 is the <span class="highlight">Canadian-listed fund that matches a mix you will still hold</span>, bought with room you have confirmed. The TFSA dollar limit is $7,000 (CRA). US dividend withholding inside a TFSA is not recoverable. A high-yield US payer is the expensive version of that mistake. A broad equity ETF with a small dividend is usually fine.
    </div>

    <p>This page sits under the <a href="/blog/how-to-invest-canada-guide/">how to invest in Canada</a> hub. The January funding rules, including the in-kind loss trap, are the <a href="/blog/tfsa-contribution-optimization/">TFSA contribution guide</a>. The account, as distinct from the product, is <a href="/blog/tfsa-strategies/">TFSA strategies</a>. Nothing here is a ranked buy list or a referral.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>Confirm room before you contribute. The 2026 dollar limit is $7,000. Unused room and last year's withdrawals add to it. This year's contributions subtract.</li>
            <li>If you will not rebalance, one asset-allocation ETF is the whole TFSA. XEQT and VEQT are the all-equity examples. XGRO and VGRO are the versions with bonds.</li>
            <li>The treaty exemption for US dividends does not apply to a TFSA. Article XXI covers pension arrangements. A TFSA is not one.</li>
            <li>VFV's published 12-month yield was 0.84% as of 31 August 2026. Fifteen percent of a small dividend is a small leak. It is still gone.</li>
            <li>Do not park a near-term house down payment in an equity ETF. Horizon first, ticker second.</li>
        </ul>
    </div>

    <h2>What job is the TFSA doing?</h2>

    <table>
        <caption>TFSA ETF jobs, as of September 2026</caption>
        <thead>
            <tr>
                <th>Job</th>
                <th>Start here</th>
                <th>Why it fits a TFSA</th>
                <th>The constraint</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>One fund, decades, you will not rebalance</td>
                <td>A Canadian-listed asset-allocation ETF. Compare <a href="/blog/xeqt-vs-veqt-canada/">XEQT and VEQT</a>, or XGRO and VGRO if you want bonds.</td>
                <td>Trades in Canadian dollars. Rebalances inside the fund. Withholding inside the product is the same leak you would have had with a US-listed fund in this account, without the FX fee.</td>
                <td>You cannot put bonds in a different account. If an RRSP exists and is large, location may be worth building blocks. See the <a href="/blog/diy-etf-portfolio-asset-location-canada/">asset-location guide</a>.</td>
            </tr>
            <tr>
                <td>US large-cap, in Canadian dollars</td>
                <td><a href="/blog/vfv-vs-voo-canadians/">VFV</a>, not VOO, unless you already hold USD and accept the withholding.</td>
                <td>Vanguard says VFV invests in the US-domiciled S&amp;P 500 ETF. You avoid a 1.5% broker conversion. The MER is 0.08%.</td>
                <td>Withholding happens inside that US fund. The RRSP trick does not apply in a TFSA anyway.</td>
            </tr>
            <tr>
                <td>Canadian equity, only account you have</td>
                <td>A broad Canadian equity ETF, once you have decided you want the extra Canada weight.</td>
                <td>The shelter on growth usually beats the dividend tax credit you cannot use inside a TFSA.</td>
                <td>If a non-registered account already exists and registered room is full, Canadian equity often belongs there so the credit works. That case is <a href="/blog/dividend-vs-growth-taxable-accounts-canada/">dividends versus growth</a>.</td>
            </tr>
            <tr>
                <td>Money you will spend within a few years</td>
                <td>A savings vehicle or a cash ETF, not an equity fund.</td>
                <td>The TFSA shelter on interest is real. The point is not losing the principal.</td>
                <td>Read <a href="/blog/hisa-vs-cash-etf-canada/">HISA versus cash ETF</a> before you chase a yield that can gap.</td>
            </tr>
        </tbody>
    </table>

    <p>Table as of September 2026. MERs and yields are from the issuer pages linked in Sources. Welcome-bonus thinking does not belong on an ETF you will hold for years.</p>

    <h2>Why is US withholding the TFSA-specific problem?</h2>

    <p>Article X of the Canada-US convention caps portfolio dividends at 15% when the beneficial owner is a resident of the other country. The statutory US rate, if the broker has no treaty claim on file, is 30% (IRS Form W-8BEN instructions). Article XXI exempts dividends derived by an arrangement operated exclusively to provide pension or retirement benefits. A TFSA is not that arrangement. Canada does not tax the dividend inside the TFSA, so there is no foreign tax credit to claim on Form T2209. The tax is gone. The full matrix, including RRSP and non-registered, is <a href="/blog/us-withholding-tax-by-account-canada/">US withholding by account</a>.</p>

    <div class="example-box">
        <strong>Illustration: $50,000 of VFV inside a TFSA</strong>
        <p>Vanguard lists VFV's 12-month yield at 0.84% as of 31 August 2026. On $50,000, that yield is $420 of distributions if the published yield described the year and the balance did not change. Fifteen percent of $420 is $63. That is the scale of the leak on a broad S&amp;P 500 fund, not a bill from Vanguard and not a forecast. VFV's 2025 tax table shows foreign tax paid of $0.28441 per unit on foreign income of $1.81097, about 15.7 cents per dollar of that foreign income. A US dividend stock yielding several times 0.84% multiplies the same rate. Put that payer in the RRSP if you want the treaty, or do not own it. Do not put it in the TFSA because the word "dividend" sounds like income.</p>
    </div>

    <h2>What does the $7,000 actually cost in fees?</h2>

    <div class="example-box">
        <strong>Illustration: one 2026 contribution</strong>
        <p>Andre in Manitoba contributes the full $7,000 on the first business day he has the cash and the room. He buys XEQT. The August 2026 fact sheet MER is 0.19%. On a balance that stays $7,000, that is about $13.30 for the year. VEQT's published 0.22% MER would be about $15.40, with the caveat that Vanguard's management fee is already 0.17% ($11.90) and the MER has not caught up. The contribution decision is worth thousands of dollars of shelter over a career. The $2 fee argument is not. He does not contribute $7,000, withdraw it in November, and put it back in December. Withdrawn room returns on 1 January of the next year. That rule is in the <a href="/blog/tfsa-contribution-optimization/">contribution guide</a>.</p>
    </div>

    <h2>What should you leave out?</h2>

    <ul>
        <li><strong>A second global ETF on top of an all-in-one.</strong> That is the same companies twice. The <a href="/blog/all-in-one-etfs-vs-diy-canada/">all-in-one versus DIY</a> page is the stop rule.</li>
        <li><strong>US-listed VOO, unless the USD is already there.</strong> Wealthsimple and Questrade both list a 1.5% conversion. On $7,000 that is $105, which swamps a year of MER. The broker comparison is <a href="/blog/wealthsimple-vs-questrade/">Wealthsimple versus Questrade</a>.</li>
        <li><strong>A covered-call ETF bought for the yield.</strong> The cash can be return of capital. The cap can cut the recovery. Read the facts sheet. This page will not quote a covered-call yield as income.</li>
        <li><strong>Anything you will need for a house on a dated timeline.</strong> The <a href="/blog/fhsa-guide/">FHSA guide</a> is about that date. An equity TFSA is the wrong parking spot.</li>
    </ul>

    <h2>Frequently asked questions</h2>

    <h3>What is the best ETF for a TFSA in 2026?</h3>
    <p>One Canadian-listed asset-allocation ETF that matches your mix, if you will not rebalance. Use an all-equity fund only if you can hold it through a large decline. Use a growth or balanced fund if the sentence you wrote down includes bonds. There is no single ticker that is best for every horizon. Confirm the MER on the facts sheet the day you buy.</p>

    <h3>Should VOO go in a TFSA?</h3>
    <p>Usually no. You pay the broker to convert currency, and US withholding on the dividend is not creditable in a TFSA. VFV is the Canadian-listed version. It still holds the US fund, so withholding still happens, but you skip the 1.5% conversion. If the RRSP has room and you want the treaty exemption, the US-listed fund belongs there, held directly, not in the TFSA.</p>

    <h3>Are Canadian dividend ETFs better in a TFSA because of the dividend tax credit?</h3>
    <p>No. The credit does not operate inside a TFSA. The shelter does. Canadian dividends earn their tax preference in a non-registered account. If the TFSA is your only account, a Canadian equity ETF is still a reasonable holding. It is not better than a global fund just because the word "eligible" appears on a taxable T-slip you will not receive.</p>

    <h3>Can I hold the same ETF in my TFSA and my RRSP?</h3>
    <p>Yes. For a one-fund household, that is the design. The accounts do different tax jobs. The fund can be the same. Split the holdings only when you are placing US-listed securities in the RRSP on purpose and you will rebalance the household back to the mix.</p>

    <h3>Does a TFSA ETF distribution create tax?</h3>
    <p>Not in Canada, if the account is a TFSA and you have not over-contributed. US withholding can still be taken before the cash arrives. You do not report TFSA growth on your T1. You also do not get a credit for the US tax. Over-contribution is a separate issue. Check CRA My Account.</p>

    <h3>How often should I change TFSA ETFs?</h3>
    <p>When the mix is wrong, not when a chart is. A fee gap of a few dollars on a $7,000 balance is not a trade. New contributions can correct a drift. The habit is <a href="/blog/rebalancing-without-tax-events-canada/">rebalancing without junk tax events</a>.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/tax-free-savings-account/contributing/calculate-room.html">CRA: 2026 TFSA dollar limit</a></li>
        <li><a href="https://www.canada.ca/en/department-finance/programs/tax-policy/tax-treaties/country/united-states-america-convention-consolidated-1980-1983-1984-1995-1997-2007.html">Canada-US tax convention, Articles X and XXI</a></li>
        <li><a href="https://www.irs.gov/instructions/iw8ben">IRS: Form W-8BEN instructions (30% statutory rate)</a></li>
        <li><a href="https://www.vanguard.ca/en/product/etf/equity/9563/vanguard-sp-500-index-etf">Vanguard VFV</a></li>
        <li><a href="https://www.blackrock.com/ca/investors/en/literature/fact-sheet/xeqt-ishares-core-equity-etf-portfolio-fund-fact-sheet-en-ca.pdf">iShares XEQT fact sheet</a></li>
    </ul>

    <div class="cta-section">
        <p><strong>The room is the asset. The ETF is the container.</strong></p>
        <p>Over-contributing costs more than a fancy ticker saves. The 2026 tax guide covers the filing side.</p>
        <a href="/ebooks/tax-guide/" class="cta-button">Get the 2026 Tax Guide — $49 CAD</a>
    </div>

    ${footer('September 27, 2026')}

</div>`
  ),

  investingPost(
    'norberts-gambit-canada-guide',
    "Norbert's Gambit Step by Step: Questrade, Wealthsimple, and IBKR",
    "Norbert's gambit beats a 1.5% FX fee once the amount covers a $9.95 journal. At Interactive Brokers, the broker's own conversion is usually cheaper.",
    `<div class="container">

    <div class="hook">
        Norbert's gambit is a way to convert Canadian and US dollars by buying a dual-listed security, journaling it to the other currency, and selling. As of September 2026 it beats Wealthsimple's and Questrade's <span class="highlight">1.5% conversion fee</span> once the amount is large enough to cover a $9.95 journal plus tax and the bid-ask. At Interactive Brokers Canada it is usually the expensive path, because the spot commission is 0.20 basis points with a USD $2 minimum.
    </div>

    <p>The broker context is the <a href="/blog/how-to-invest-canada-guide/">how to invest in Canada</a> hub and the <a href="/blog/wealthsimple-vs-questrade/">Wealthsimple versus Questrade</a> fee table. You only need this if you are buying US-listed securities. A Canadian-listed ETF does not. The hedging choice, separate from the journal, is the <a href="/blog/currency-hedging-us-listed-etfs-canada/">currency hedging guide</a>. The rest of the desk, including transfer fees and options, is the <a href="/blog/best-online-brokerages-canada/">brokerage guide</a>. This is a procedure description from the brokers' own pages, not a recommendation to convert.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>Questrade: journaling is $9.95 per online request, or free with Questrade Plus. Allow one business day of settlement on a fresh purchase, then up to five business days for the request.</li>
            <li>Wealthsimple: the Help Centre describes a $9.95 plus tax journal, web only, and only for the Global X US Dollar Currency ETF (DLR and DLR.U). You need a USD account. Processing is about two business days.</li>
            <li>Wealthsimple Core USD accounts are $10 a month plus tax after a 30-day trial. That subscription is part of the cost if you did not already have it.</li>
            <li>Interactive Brokers Canada: tier-one spot commission is 0.20 basis points, minimum USD $2. Auto-conversion is typically 0.03% with no separate commission.</li>
            <li>While the journal is in flight, the exchange rate can move. The fee you avoided can come back as price risk. Questrade says so on its journaling page.</li>
        </ul>
    </div>

    <h2>When is the gambit worth it?</h2>

    <table>
        <caption>Cost of converting $10,000, posted fees only, as of September 2026</caption>
        <thead>
            <tr>
                <th>Path</th>
                <th>Posted cost on $10,000</th>
                <th>What the page does not include</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Wealthsimple or Questrade 1.5% conversion</td>
                <td>$150</td>
                <td>Wealthsimple applies the 1.5% to its corporate exchange rate, which already includes a spread. Questrade says the 1.5% is included in the rate you receive.</td>
            </tr>
            <tr>
                <td>Journal at $9.95</td>
                <td>$9.95 plus sales tax. Stock and ETF commissions on the buy and sell are $0 at both firms.</td>
                <td>Bid-ask on the security. Rate move during the wait. At Wealthsimple, the USD-account subscription if you are Core and did not already have it.</td>
            </tr>
            <tr>
                <td>Interactive Brokers manual spot, tier one</td>
                <td>USD $2 minimum. 0.20 basis points of $10,000 is $0.20, so the minimum applies.</td>
                <td>GST/PST where IBKR says tax applies to commissions. The spread on the quote, which IBKR says it does not mark up.</td>
            </tr>
            <tr>
                <td>Interactive Brokers auto-conversion</td>
                <td>Typically 0.03%, which is $3 on $10,000, with no separate commission.</td>
                <td>IBKR says it may add or subtract 0.03% at its discretion. Introduced clients may pay more.</td>
            </tr>
        </tbody>
    </table>

    <div class="example-box">
        <strong>Illustration: the break-even against 1.5%</strong>
        <p>$9.95 divided by 0.015 is $663. Below that, the percentage fee can be smaller than the flat journal before you count tax and the bid-ask. Above it, the flat ticket wins on posted fees. Add Ontario HST at 13% only as a picture: $9.95 times 1.13 is $11.24, and $11.24 divided by 0.015 is about $750. Your province's tax is not Ontario's. A $10 monthly USD subscription, if you turn it on for one conversion and cancel, adds another $10 plus tax and pushes the break-even higher. On $10,000, $150 versus about $11 is not a close call, unless the security's spread is wide or the rate moves against you while you wait.</p>
    </div>

    <h2>How does Questrade describe the steps?</h2>

    <p>Questrade's journaling page, updated 10 April 2026, says the process can be done online:</p>

    <ol>
        <li>Log in.</li>
        <li>Go to the Management page and click Journal shares.</li>
        <li>Follow the prompts and continue.</li>
        <li>Submitted requests are under Request History.</li>
    </ol>

    <p>You can journal equivalent dual-listed shares. Questrade's own example is an interlisted bank stock, not a product recommendation. A currency ETF is the other common vehicle; use it only if you understand you are briefly long that fund. If you bought today, Questrade says settlement delays the request by one business day. A Monday buy journaled the same day settles Tuesday in their example, and the request itself can take another one or two business days. Do not trade that security while the request is processing. Online journaling is not available in an RESP; Questrade says to contact support for that account. Questrade Plus makes online journals free. Plus is listed at $19.99 a month plus tax from 1 October 2026, and free to all customers until 30 September 2026. One journal a year does not pay for the subscription.</p>

    <h2>How does Wealthsimple describe the steps?</h2>

    <p>Wealthsimple's Help Centre article on Norbert's gambit says the feature journals the Global X US Dollar Currency ETF between DLR and DLR.U. It is on the web, not in the mobile app. The fee is $9.95 plus tax, always charged in CAD, and the request can fail if the CAD cash is not there to cover it. You need an active USD account.</p>

    <ol>
        <li>Log in on the web.</li>
        <li>Buy DLR if you are converting CAD to USD. Wealthsimple says to reverse the steps, starting with DLR.U, to go the other way.</li>
        <li>Open the security and choose Journal shares.</li>
        <li>Enter the number of shares and submit.</li>
        <li>Wait about two business days. When DLR.U appears, sell it for USD.</li>
    </ol>

    <p>Other dual-listed stocks are not what that article describes. Do not assume a bank-stock journal works because it works at Questrade. The USD account is a separate decision: $10 a month plus tax for Core clients after the trial, included for Premium and Generation. Premium on the pricing page is the $100,000 tier. If you will not keep the USD account, add at least one month of the fee to the gambit.</p>

    <h2>Why skip the gambit at Interactive Brokers?</h2>

    <p>Interactive Brokers Canada publishes a spot-currency schedule instead of a 1.5% retail spread. Tier one, up to very large monthly volume, is 0.20 basis points (0.002%) with a minimum of USD $2 per order. IBKR says it passes through the quote and charges the commission separately. For automatic conversion it typically adjusts the rate by 0.03% and does not charge a separate commission. On household-sized conversions, both of those numbers are smaller than $9.95 plus two spreads and two days of rate risk. Use the platform's currency conversion. Do not invent a DLR journal to feel sophisticated. Introduced or advisor clients may pay a different rate. Read the schedule on your own login.</p>

    <p>Once the US dollars exist, the question is which account should hold the US-listed fund. That is <a href="/blog/vfv-vs-voo-canadians/">VFV versus VOO</a> and <a href="/blog/us-withholding-tax-by-account-canada/">US withholding by account</a>. A gambit into a TFSA, to buy VOO, saves the 1.5% and then donates 15% of the dividends forever. Run both bills. The place for the US-listed sleeve is usually the RRSP, which is the <a href="/blog/diy-etf-portfolio-asset-location-canada/">asset-location guide</a>.</p>

    <h2>Frequently asked questions</h2>

    <h3>Is Norbert's gambit legal?</h3>
    <p>It is a brokerage operation the firms document: you buy a security, ask the broker to journal it to the other listing, and sell. It is not a tax shelter and not a loophole with a CRA form. You still bear the price of the security while you hold it. Questrade says you may avoid the FX fee and still face processing fees, settlement delay, and exchange-rate risk.</p>

    <h3>How long does it take?</h3>
    <p>Questrade says a fresh purchase needs one business day to settle, and the journal itself may take up to five business days. Wealthsimple says about two business days after you submit. Do not spend the US dollars before the shares have settled on the other side. Questrade also says a sale after the journal needs another two days before a withdrawal of those proceeds.</p>

    <h3>Can I do this inside an RRSP or TFSA?</h3>
    <p>Questrade says online journaling works on accounts other than the RESP, where you have to contact support. Wealthsimple says you need a USD account and that conversions stay inside the paired account, CAD TFSA with USD TFSA. Confirm the account type on the day you try. A failed journal is a security you did not mean to hold.</p>

    <h3>Should I use DLR or an interlisted stock?</h3>
    <p>Wealthsimple's article is DLR and DLR.U only. Questrade's article allows equivalent dual-listed shares and uses a bank stock as the teaching example. A stock moves for business reasons. A currency ETF is built to track the US dollar, and it still has a spread and its own costs. Read that ETF's facts sheet. This page does not quote a DLR MER because the figure belongs on Global X's page, not in a remembered number.</p>

    <h3>What if the exchange rate moves while I wait?</h3>
    <p>You are exposed. A move of a fraction of a percent on a large conversion can exceed the $9.95 you saved relative to a tighter method, and it can still leave you far ahead of 1.5%. There is no hedge inside the basic gambit. If you cannot tolerate a two-day wait, pay the broker's posted conversion or use a broker whose spot ticket is already cheap.</p>

    <h3>Does the gambit avoid US withholding tax?</h3>
    <p>No. It changes the currency of your cash. Withholding is about what you hold and which account holds it. Converting $20,000 and buying VOO in a TFSA does not create a treaty exemption. The exemption is Article XXI, and it is about pension arrangements, not about how you obtained the US dollars.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="https://www.questrade.com/learning/stocks-etfs/journaling-shares">Questrade: journaling shares</a> (updated 10 April 2026)</li>
        <li><a href="https://www.questrade.com/pricing/self-directed-commissions-plans-fees/transaction">Questrade: 1.5% currency conversion</a></li>
        <li><a href="https://help.wealthsimple.com/hc/en-ca/articles/45418222943131-Convert-currency-with-Norbert-s-Gambit">Wealthsimple Help: Norbert's gambit</a></li>
        <li><a href="https://www.wealthsimple.com/en-ca/legal/fees/trade">Wealthsimple trade fee schedule</a></li>
        <li><a href="https://www.interactivebrokers.ca/en/pricing/commissions-spot-currencies.php">Interactive Brokers Canada: spot currencies</a></li>
    </ul>

    <div class="cta-section">
        <p><strong>The conversion is a cost. The account is the strategy.</strong></p>
        <p>Once the dollars are in the right currency, contribution room still dominates. The 2026 tax guide is the filing side.</p>
        <a href="/ebooks/tax-guide/" class="cta-button">Get the 2026 Tax Guide — $49 CAD</a>
    </div>

    ${footer('September 27, 2026')}

</div>`
  ),

  investingPost(
    'vfv-vs-voo-canadians',
    'VFV vs XUS vs VOO: Holding the S&P 500 as a Canadian',
    'VFV holds the US-listed Vanguard S&P 500 ETF and charges a 0.08% MER. VOO charges 0.03%. In an RRSP, only the US-listed fund gets the treaty exemption.',
    `<div class="container">

    <div class="hook">
        VFV is the Canadian-listed way to own the S&amp;P 500. Vanguard says it invests primarily in the US-domiciled Vanguard S&amp;P 500 ETF, and its MER is <span class="highlight">0.08%</span>. VOO, that US-listed fund, lists a 0.03% expense ratio. XUS lists a 0.09% MER and a 0.08% management fee. In a TFSA, buy the Canadian ticker and skip the currency conversion. In an RRSP, the treaty exemption applies to VOO held directly, not to the Canadian wrapper.
    </div>

    <p>This comparison is under the <a href="/blog/how-to-invest-canada-guide/">how to invest in Canada</a> hub. The account matrix is <a href="/blog/us-withholding-tax-by-account-canada/">US withholding by account</a>. Getting the Canadian dollars into US dollars, if you choose VOO, is <a href="/blog/norberts-gambit-canada-guide/">Norbert's gambit</a> or the broker's own conversion. A global all-in-one is a different product. That comparison is <a href="/blog/xeqt-vs-veqt-canada/">XEQT versus VEQT</a>.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>VFV: management fee 0.08%, MER 0.08%, 12-month yield 0.84% as of 31 August 2026. It holds the US-domiciled S&amp;P 500 ETF. Vanguard says the management fee is reduced so you do not pay the underlying fee twice.</li>
            <li>VOO: total annual fund operating expenses 0.03% in the prospectus (management fees 0.02%, other expenses 0.01%).</li>
            <li>XUS: management fee 0.08% since 12 January 2023, MER 0.09%. Open the holdings before you assume it is, or is not, a wrapper around a US-listed iShares ETF.</li>
            <li>Article X caps portfolio dividends at 15%. Article XXI can exempt an RRSP when the plan holds the US security directly.</li>
            <li>A 1.5% currency conversion on the way into VOO can exceed many years of the MER gap.</li>
        </ul>
    </div>

    <div class="tip-box">
        <strong>Choose VFV if…</strong> the account is a TFSA, or you want Canadian dollars and you will not maintain a US-dollar side.
        <p><strong>Choose VOO if…</strong> the account is an RRSP or RRIF, you can hold USD, and the dividend exemption is the point. <strong>Choose XUS if…</strong> you want iShares rather than Vanguard and you have checked whether the holding is the stocks or a US-listed ETF. The MER difference versus VFV is 0.01 percentage point on the pages reviewed.</p>
    </div>

    <h2>What are the posted costs?</h2>

    <table>
        <caption>S&amp;P 500 funds Canadians actually compare, as of September 2026</caption>
        <thead>
            <tr>
                <th></th>
                <th>VFV</th>
                <th>XUS</th>
                <th>VOO</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Listing</td>
                <td>Toronto, Canadian dollars</td>
                <td>Toronto. CAD units, and BlackRock also lists USD units as XUS.U</td>
                <td>United States, US dollars</td>
            </tr>
            <tr>
                <td>What it owns</td>
                <td>Vanguard says it invests primarily in the US-domiciled Vanguard S&amp;P 500 ETF</td>
                <td>Seeks the S&amp;P 500 net of expenses, by holding iShares ETFs and/or US stocks. Confirm the current holdings list.</td>
                <td>The S&amp;P 500 stocks themselves. Expense ratio 0.03%.</td>
            </tr>
            <tr>
                <td>Fee</td>
                <td>MER 0.08%. Management fee 0.08%.</td>
                <td>MER 0.09%. Management fee 0.08%.</td>
                <td>0.03% total annual operating expenses.</td>
            </tr>
            <tr>
                <td>RRSP treaty exemption on the dividend</td>
                <td>No. The US payer sees the US fund VFV owns, not your RRSP.</td>
                <td>Only if the fund's withholding is taken at a level your RRSP can stand in front of. A US-listed ETF inside XUS is the VFV problem. Direct stocks inside a Canadian fund are still withheld at the fund. Read the holdings.</td>
                <td>Yes, if the RRSP or RRIF is the beneficial owner and the broker has the paperwork. Article XXI.</td>
            </tr>
            <tr>
                <td>TFSA</td>
                <td>Simple. Withholding inside the US fund is not recoverable. There was no exemption to recover.</td>
                <td>Same account result. Confirm the product fee, not a myth about a Canadian ticker.</td>
                <td>You pay to convert currency, and the 15% is still not creditable.</td>
            </tr>
        </tbody>
    </table>

    <p>VFV's benchmark on the Vanguard page is labelled "S&amp;P 500 (CAD NY Rate) NTR 15%." That label is the net-of-15% index, which matches the treaty rate on portfolio dividends. It is not a promise that your personal rate is 15%. Without a W-8BEN, the IRS instructions say withholding is 30%.</p>

    <h2>What does the wrapper cost in tax?</h2>

    <div class="example-box">
        <strong>Illustration: $100,000, using VFV's published yield</strong>
        <p>VFV's 12-month yield was 0.84% as of 31 August 2026. On $100,000 that is $840 if the yield described a flat balance. Fifteen percent of $840 is $126. VFV's 2025 distribution table shows foreign income of $1.81097 per unit and foreign tax paid of $0.28441, about 15.7% of that foreign income. The MER gap between VFV at 0.08% and VOO at 0.03% is 0.05 percentage points, or $50 a year on $100,000. The withholding on the wrapper can be larger than the MER gap, and in an RRSP it is avoidable by holding VOO directly. In a TFSA it is not avoidable by switching to VOO. You would add a currency conversion and keep the withholding.</p>
    </div>

    <div class="example-box">
        <strong>Illustration: the conversion versus the MER</strong>
        <p>Questrade and Wealthsimple list 1.5% to convert. On $100,000 that is $1,500 once, before any spread inside the rate. The annual MER saving of VOO versus VFV, $50 on $100,000, takes 30 years of that gap to equal a single 1.5% conversion, and that ignores the withholding you might have removed in an RRSP. Run the gambit or use Interactive Brokers if the RRSP exemption is why you want VOO. Do not pay 1.5% for a 0.05 point MER story. The fee schedules are in <a href="/blog/wealthsimple-vs-questrade/">Wealthsimple versus Questrade</a>.</p>
    </div>

    <h2>Where should the S&amp;P 500 sit?</h2>

    <p>If the S&amp;P 500 is your entire portfolio, you have a concentration decision, not just a ticker decision. A global fund already holds a large US weight. VEQT's US country weight was 44.99% on 31 August 2026. Adding VFV on top raises the US share again. The <a href="/blog/diy-etf-portfolio-asset-location-canada/">asset-location guide</a> is the map: US-listed equity in the RRSP when you will actually maintain the USD side, Canadian-listed equity in the TFSA when you will not.</p>

    <p>In a non-registered account, VFV reports foreign income and foreign tax paid. Whether you can claim it is Form T2209, and it is limited to the Canadian tax on that income. Some of the withholding may already have been taken inside VOO, before a T3 can show it. Do not assume the full 15% appears as a credit. The mechanics are in <a href="/blog/tax-efficient-investing/">tax-efficient investing</a> and the withholding article. Hedging the Canadian dollar on top of this, with a fund such as VSP, is a currency preference with its own cost. That discussion is the <a href="/blog/currency-hedging-us-listed-etfs-canada/">hedging guide</a>.</p>

    <h2>Frequently asked questions</h2>

    <h3>Is VFV just VOO in Canadian dollars?</h3>
    <p>Vanguard says VFV invests primarily in the US-domiciled Vanguard S&amp;P 500 ETF, which is VOO. You buy VFV in Canadian dollars on the TSX. You do not get VOO's 0.03% expense ratio. You get VFV's 0.08% MER, which Vanguard says is not a second full fee stacked on VOO, because the Canadian management fee is reduced by the underlying expenses. You also do not get the RRSP treaty exemption, because the US fund is in the middle.</p>

    <h3>Is XUS cheaper than VFV?</h3>
    <p>No. XUS lists a 0.09% MER. VFV lists 0.08%. On $100,000 that is $90 versus $80 a year. Confirm both facts sheets. The useful difference is what each fund holds, not that hundredth of a percent. If XUS's top holding is a US-listed iShares ETF, treat it like VFV for withholding. If it holds the stocks directly, the Canadian fund still withholds at fund level, and a taxable account may see foreign tax on the T3.</p>

    <h3>Should I switch my TFSA from VFV to VOO?</h3>
    <p>No, not for the treaty. A TFSA is not an Article XXI pension arrangement. You would pay to convert currency and the withholding would still be lost. Stay in the Canadian listing unless you already have USD you need to invest and you have accepted the leak.</p>

    <h3>Does VOO avoid Canadian tax inside an RRSP?</h3>
    <p>US withholding can be zero when the RRSP holds VOO directly and the plan qualifies. Canada still taxes the withdrawal later, as ordinary income. The exemption is not a tax-free account. It is a withholding exemption on the dividend along the way. A large RRSP is still a future inclusion. The <a href="/blog/rrsp-playbook/">RRSP playbook</a> is that half.</p>

    <h3>Why is VFV's yield so low if people buy it for US stocks?</h3>
    <p>The S&amp;P 500's cash yield is modest. Vanguard's published 12-month yield on VFV was 0.84% as of 31 August 2026. Most of the historical return of that index has been price, not the dividend. Withholding applies to the dividend, not to unrealized price gains. That is why the leak is small on a broad fund and large on a high-yield US payer.</p>

    <h3>Can I hold VFV and an all-in-one ETF?</h3>
    <p>You can. You will own the S&amp;P 500 twice, once inside the all-in-one and once on its own. That is a bigger US bet than the all-in-one already made. If that was the sentence you wrote down, fine. If it was an accident, sell the overlap inside a registered account before you sell it in a taxable one.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="https://www.vanguard.ca/en/product/etf/equity/9563/vanguard-sp-500-index-etf">Vanguard Canada: VFV</a></li>
        <li><a href="https://investor.vanguard.com/investment-products/etfs/profile/voo">Vanguard US: VOO</a></li>
        <li><a href="https://www.blackrock.com/ca/investors/en/products/251422/ishares-sp-500-index-etf">iShares Canada: XUS</a></li>
        <li><a href="https://www.canada.ca/en/department-finance/programs/tax-policy/tax-treaties/country/united-states-america-convention-consolidated-1980-1983-1984-1995-1997-2007.html">Canada-US tax convention</a></li>
        <li><a href="https://www.irs.gov/instructions/iw8ben">IRS Form W-8BEN instructions</a></li>
    </ul>

    <div class="cta-section">
        <p><strong>The wrapper is the tax decision. The index is the same idea.</strong></p>
        <p>Account location moves more than five basis points of MER. The 2026 tax guide is the filing companion.</p>
        <a href="/ebooks/tax-guide/" class="cta-button">Get the 2026 Tax Guide — $49 CAD</a>
    </div>

    ${footer('September 27, 2026')}

</div>`
  ),

  investingPost(
    'us-withholding-tax-by-account-canada',
    'US Withholding Tax on Dividends by Account Type (TFSA, RRSP, Non-Registered)',
    'US portfolio dividends face 15% withholding under the Canada-US treaty, or 30% without it. An RRSP can be exempt. A TFSA cannot recover the tax.',
    `<div class="container">

    <div class="hook">
        US portfolio dividends paid to a Canadian resident are capped at <span class="highlight">15% withholding</span> under Article X of the Canada-US tax convention. Without a treaty claim on file, the IRS statutory rate is 30%. An RRSP or RRIF that holds the US security directly can be exempt under Article XXI. A TFSA cannot recover the tax, because Canada does not tax the income and the pension exemption does not apply.
    </div>

    <p>This is the account matrix under the <a href="/blog/how-to-invest-canada-guide/">how to invest in Canada</a> hub. The S&amp;P 500 version of the same rule is <a href="/blog/vfv-vs-voo-canadians/">VFV versus VOO</a>. Where to place the sleeve is the <a href="/blog/diy-etf-portfolio-asset-location-canada/">asset-location guide</a>. The paperwork that turns 30% into 15% is Form W-8BEN at your broker, described in the IRS instructions.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>Article X(2)(b): 15% of the gross dividend in cases other than a company that owns at least 10% of the voting stock. That 5% corporate rate is not a personal TFSA rate.</li>
            <li>Article XXI(2): dividends and interest derived by a resident arrangement that is generally exempt and operated exclusively to administer or provide pension, retirement, or employee benefits are exempt in the other country.</li>
            <li>Brokers apply that pension exemption to RRSPs, RRIFs, and similar locked-in retirement accounts when the US security is held directly. Confirm the account is coded that way.</li>
            <li>TFSA, FHSA, RESP, and RDSP are not named in that paragraph. Do not assume the exemption. In a TFSA the 15% is not creditable.</li>
            <li>A Canadian ETF that owns a US-listed ETF takes the withholding inside the US fund. Your RRSP cannot unwind it.</li>
        </ul>
    </div>

    <h2>Which account keeps the dividend?</h2>

    <table>
        <caption>US dividend withholding by account, treaty text as consolidated by Finance Canada</caption>
        <thead>
            <tr>
                <th>Account</th>
                <th>US stock or US-listed ETF you hold directly</th>
                <th>Canadian ETF that owns a US-listed ETF (VFV is the worked example)</th>
                <th>Can you claim it on a T1?</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>TFSA</td>
                <td>15% with a valid treaty claim. Up to 30% without one.</td>
                <td>Withholding inside the US fund, before the Canadian fund distributes. Not recoverable.</td>
                <td>No. TFSA income is not reported, so there is no foreign tax credit.</td>
            </tr>
            <tr>
                <td>RRSP, RRIF, and similar retirement accounts</td>
                <td>Exempt when Article XXI applies and the plan is the beneficial owner.</td>
                <td>The exemption does not reach through VOO or a similar US ETF. VFV's page says that is what it holds.</td>
                <td>Not on the way in. The withdrawal is taxable later as ordinary income. The <a href="/blog/rrsp-playbook/">RRSP playbook</a> is that bill.</td>
            </tr>
            <tr>
                <td>FHSA, RESP, RDSP</td>
                <td>Do not assume Article XXI. The paragraph is about pension and employee-benefit arrangements. These accounts are not those products.</td>
                <td>Same wrapper problem, and usually no Canadian tax against which to credit the withholding.</td>
                <td>Generally no credit for tax on income Canada is not taxing inside the account. Confirm the slip.</td>
            </tr>
            <tr>
                <td>Non-registered</td>
                <td>15% with W-8BEN, otherwise up to 30%. Report the gross dividend.</td>
                <td>The fund may report foreign income and foreign tax on a T3. Withholding taken inside a US ETF is not always passed through in full.</td>
                <td>Yes, within limits. Form T2209, line 40500. A provincial credit is separate. Quebec is not the federal form.</td>
            </tr>
        </tbody>
    </table>

    <p>Table as of September 2026. It describes the treaty and CRA's foreign-tax-credit page. It is not a ruling on your account. US citizens and green-card holders have a different problem: the IRS may not treat a TFSA the way Canada does. This page is about Canadian residents who are not US persons. If you are a US person, stop and get cross-border advice before you open a TFSA.</p>

    <h2>What does 15% mean in dollars?</h2>

    <div class="example-box">
        <strong>Illustration: $1,000 of US dividends</strong>
        <p>Fifteen percent of $1,000 is $150. Thirty percent is $300. The $150 difference is the W-8BEN. In a non-registered account you report the gross $1,000, not the $850 that hit the account. CRA's line 40500 instructions say you may claim a foreign tax credit for foreign income tax on income you reported. The credit is limited. If Canadian tax on that income is only $80, you do not get a $150 refund. The unused slice is not a gift. In a low-income year, or when the dividend tax math is already low, the credit can fail to cover the withholding. The character of foreign dividends, with no gross-up, is <a href="/blog/dividend-vs-growth-taxable-accounts-canada/">dividends versus growth</a>.</p>
    </div>

    <div class="example-box">
        <strong>Illustration: the same $1,000 inside an RRSP, two products</strong>
        <p>You hold VOO directly in the RRSP. Article XXI applies. Withholding on that dividend is $0. You hold VFV, which owns VOO. The US fund pays the withholding before your RRSP sees the cash. Switching the ticker without changing the account does not create the exemption. On VFV's published 0.84% yield, $100,000 throws off about $840, and 15% of that is about $126 a year left inside the wrapper. Holding VOO directly is how that $126 stays in the RRSP. You still need USD to buy it. The conversion cost is <a href="/blog/norberts-gambit-canada-guide/">Norbert's gambit</a>. A 1.5% conversion on $100,000 is $1,500, which is many years of $126. Do the gambit, or use a broker whose spot ticket is cheap, or accept the wrapper.</p>
    </div>

    <h2>What about interest and capital gains?</h2>

    <p>The damage people feel is the dividend. Article XI of the same convention deals with interest, and the treaty rate on ordinary interest is not the dividend rate. Most gains from selling a US stock are not FDAP dividends. The IRS instructions for Form W-8BEN say FDAP does not include most gains from the sale of property. A US stock that pays no dividend does not create this withholding bill when you sell it. A US stock bought for the yield does. Do not let a blog treat "US stocks" as one tax object.</p>

    <p>Level I of the decision is still the account, which is <a href="/blog/best-etfs-tfsa-canada/">best ETFs for a TFSA</a> if the shelter is the TFSA, and <a href="/blog/tax-efficient-investing/">tax-efficient investing</a> if the account is taxable. A Canadian ticker does not collect a treaty benefit the RRSP could have collected itself. That sentence is also the point of the <a href="/blog/currency-hedging-us-listed-etfs-canada/">hedging guide</a>.</p>

    <h2>Frequently asked questions</h2>

    <h3>Is US withholding in a TFSA always 15%?</h3>
    <p>It is 15% when the treaty rate applies. Article X(2)(b) is 15% for portfolio dividends. The IRS says the statutory rate is 30% if the withholding agent does not have a valid W-8BEN. File the form your broker asks for, and renew it when it expires. The 15% that is correctly withheld is still not recoverable inside a TFSA.</p>

    <h3>Does an RRSP always get 0%?</h3>
    <p>Article XXI(2) exempts dividends derived by a qualifying pension arrangement. RRSPs are treated that way when the plan holds the US security and the broker applies the exemption. A Canadian ETF in the middle breaks the chain. A missing form can leave you at 30% until it is fixed. Check a recent dividend, not the marketing page, if the amount looks like 15% or 30% inside an RRSP that should be exempt.</p>

    <h3>Can I claim a foreign tax credit on TFSA withholding?</h3>
    <p>No. CRA's foreign-tax-credit page is for foreign tax on income you earned outside Canada and reported on your return. TFSA investment income is not reported. There is nothing to attach the credit to. That is why asset location puts high US dividends in the RRSP and not in the TFSA.</p>

    <h3>What about the FHSA?</h3>
    <p>The FHSA is not described in Article XXI(2). Do not import the RRSP exemption because both accounts feel "registered." US dividends inside an FHSA should be treated as exposed to withholding, and the FHSA's Canadian tax-free treatment means you should not count on a credit. If the horizon is a house, you may not want a volatile US fund there at all. The timeline is the <a href="/blog/fhsa-guide/">FHSA guide</a>.</p>

    <h3>Do I get a full credit in a taxable account?</h3>
    <p>You get a credit up to the Canadian tax on that foreign income, computed on Form T2209, not a refund of whatever the US withheld. Report the gross income. Keep the T3 or T5. If the fund did not pass the foreign tax through, there may be nothing on the slip to claim. Provincial credits are a second form. Quebec residents follow Revenu Québec's version, not the other provinces' Form 428 line.</p>

    <h3>Does this apply to Canadian companies listed in New York?</h3>
    <p>A dividend from a Canadian company is a Canadian dividend, even if you bought the New York listing. The US withholding in this article is about US-source dividends. Journaling an interlisted Canadian stock, which is a currency operation, does not create US dividend tax. The journal is <a href="/blog/norberts-gambit-canada-guide/">Norbert's gambit</a>.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="https://www.canada.ca/en/department-finance/programs/tax-policy/tax-treaties/country/united-states-america-convention-consolidated-1980-1983-1984-1995-1997-2007.html">Finance Canada: Canada-US tax convention (Articles X and XXI)</a></li>
        <li><a href="https://www.irs.gov/instructions/iw8ben">IRS instructions for Form W-8BEN</a></li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-40500-federal-foreign-tax-credit.html">CRA: line 40500 federal foreign tax credit</a></li>
        <li><a href="https://www.vanguard.ca/en/product/etf/equity/9563/vanguard-sp-500-index-etf">Vanguard VFV, including the foreign-tax column on distributions</a></li>
    </ul>

    <div class="cta-section">
        <p><strong>Fifteen percent of a dividend is a location problem.</strong></p>
        <p>The bracket on the RRSP withdrawal is a larger one. The 2026 tax guide is that calculation.</p>
        <a href="/ebooks/tax-guide/" class="cta-button">Get the 2026 Tax Guide — $49 CAD</a>
    </div>

    ${footer('September 27, 2026')}

</div>`
  ),

  investingPost(
    'best-robo-advisors-canada',
    'Best Robo-Advisors in Canada (2026): Wealthsimple, Questwealth, Justwealth and More',
    'As of September 2026, Questwealth charges 0.25% up to $100,000 and 0.20% after. Wealthsimple managed is 0.5% at Core and 0.4% at Premium, on top of ETF fees.',
    `<div class="container">

    <div class="hook">
        As of September 2026, the cheapest published management fee among the large Canadian robos is Questwealth: <span class="highlight">0.25% from $250 to $99,999, and 0.20% from $100,000</span>. Wealthsimple lists 0.5% for Core managed accounts and 0.4% for Premium. Those fees sit on top of the ETFs. An all-in-one ETF you buy yourself can be cheaper. The robo is worth it when you will not choose or fund the ETF yourself.
    </div>

    <p>This roundup is under the <a href="/blog/how-to-invest-canada-guide/">how to invest in Canada</a> hub. Self-directed pricing at the same two firms is <a href="/blog/wealthsimple-vs-questrade/">Wealthsimple versus Questrade</a>. The product you are paying the robo not to pick is often <a href="/blog/xeqt-vs-veqt-canada/">XEQT or VEQT</a>. There are no affiliate or referral links on this page.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>Questwealth's management fee is 0.25% or 0.20% by balance. It is not the MER of the ETFs inside the portfolio. Those are extra.</li>
            <li>Wealthsimple managed: 0.5% Core, 0.4% Premium. Generation runs from 0.4% at $500,000 to 0.2% at $10 million. Confirm which band you are actually in.</li>
            <li>Justwealth's own illustration uses a 0.50% management fee plus an average 0.20% ETF fee. CIPF coverage of $1,000,000 is stated for its custodian, CI Investment Services.</li>
            <li>RBC InvestEase lists 0.50% plus sales tax, billed monthly, plus a weighted ETF MER it describes as 0.12% to 0.25% on one page and 0.11% to 0.23% on another. Read the page the day you open the account.</li>
            <li>On $100,000, Questwealth's 0.25% is $250 before ETF MERs. XEQT's 0.19% MER is $190 all-in. The gap is the price of being managed.</li>
        </ul>
    </div>

    <div class="tip-box">
        <strong>Choose a robo if…</strong> you will not rebalance, you want automatic contributions, and the management fee is smaller than the cost of doing nothing.
        <p><strong>Choose an all-in-one ETF if…</strong> you can buy one fund a year and leave it. The MER is the product fee. There is no second management layer.</p>
    </div>

    <h2>What do the firms publish?</h2>

    <table>
        <caption>Management fees on Canadian robo portfolios, issuer pages, September 2026</caption>
        <thead>
            <tr>
                <th>Firm</th>
                <th>Management fee</th>
                <th>On top of that</th>
                <th>A detail that changes the fit</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Questwealth (Questrade Wealth Management)</td>
                <td>0.25% on $250 to $99,999. 0.20% at $100,000 and above.</td>
                <td>The ETFs' own MERs. The marketing page does not publish one blended number. Read the portfolio facts.</td>
                <td>Questwealth says portfolios are actively managed. That is a different promise from a static 80/20 ETF. Questrade Inc. is a CIPF member. The page says Questrade Wealth Management is not.</td>
            </tr>
            <tr>
                <td>Wealthsimple managed</td>
                <td>0.5% Core. 0.4% Premium. Generation 0.2% to 0.4%, from 0.4% at $500,000 to 0.2% at $10,000,000.</td>
                <td>ETF MERs inside the portfolio. Not stated as a single figure on the pricing page reviewed.</td>
                <td>Premium on that page is the $100,000 relationship tier and includes USD accounts for self-directed trading. The managed fee and the trade fee are different products.</td>
            </tr>
            <tr>
                <td>Justwealth</td>
                <td>0.50% in the firm's own $100,000 illustration.</td>
                <td>Justwealth describes an average additional 0.20% in ETF management fees, for a 0.70% combined figure in that example.</td>
                <td>The firm says it does not earn sales commissions. It also says accounts are CIPF-protected up to $1,000,000 through CI Investment Services. Higher-balance tiers, if any, belong on the current fee schedule. This page does not invent one.</td>
            </tr>
            <tr>
                <td>RBC InvestEase</td>
                <td>0.50% plus applicable sales tax, billed monthly on average assets.</td>
                <td>Weighted-average ETF MER. The pricing page says 0.12% to 0.25%. A separate RBC article says 0.11% to 0.23%.</td>
                <td>Invested once the balance is $100 or more. From $100 to $1,499, RBC uses a Starter Portfolio because it does not buy fractional shares. Above $1,500 it moves you to the broader portfolio.</td>
            </tr>
        </tbody>
    </table>

    <p>Table as of September 2026. Bank robos not in the table exist. If a fee was not on the firm's own page when this was written, it is not guessed here. How a percent compounds once it is real is the <a href="/blog/mer-drag-index-funds-canada/">MER drag guide</a>.</p>

    <h2>What does the fee cost next to an all-in-one ETF?</h2>

    <div class="example-box">
        <strong>Illustration: $100,000, one year, balance unchanged</strong>
        <p>Questwealth at 0.25% is $250, and the ETFs inside still charge their MERs. Wealthsimple Core at 0.5% is $500, plus those ETFs. Justwealth's illustration is 0.50% plus 0.20%, which is $700 on $100,000. RBC InvestEase at 0.50% is $500, plus sales tax, plus a weighted MER. If that MER is 0.20%, add $200, and the management fee's sales tax is extra because RBC states the 0.50% before tax. XEQT's reported MER of 0.19% is $190, and that is the fund's cost, not a second advisory fee. The robo is not cheaper. It is a service. On $100,000 the service costs a few hundred dollars a year before the ETFs. If that is what gets the money invested, it can be the right purchase. If you already buy one ETF, you are paying for a job you do.</p>
    </div>

    <div class="example-box">
        <strong>Illustration: $40,000 at two firms</strong>
        <p>Nadia has $40,000 and will add $500 a month. She will not log in to rebalance. Questwealth's 0.25% on $40,000 is $100 a year before ETF MERs and before the new contributions. Wealthsimple Core's 0.5% is $200 on the same starting balance. RBC's 0.50% is also $200, plus tax, and she is above the $1,500 starter threshold. The dollar gap between 0.25% and 0.50% is $100 a year at this balance. It grows as the account grows. At $100,000 the same 0.25-point gap is $250 a year, and Questwealth's rate steps down to 0.20% while Wealthsimple Premium steps to 0.4%. Run the schedule you will actually be on. This is arithmetic, not a ranking of returns, and not a statement that the cheaper fee wins after tax or after behaviour.</p>
    </div>

    <h2>What else should you check before you transfer?</h2>

    <p>Account types differ. Questwealth's page lists RRSP, TFSA, FHSA, RESP, and non-registered. Confirm LIRA, RRIF, and spousal accounts on the application, not on a blog. A transfer is not a withdrawal. Pulling a TFSA to chequing and "putting it back" uses room. The <a href="/blog/tfsa-contribution-optimization/">TFSA contribution guide</a> is that mistake. The portfolio the robo builds may hold Canadian-listed ETFs that wrap US funds. You do not get an RRSP treaty exemption by accident. The test is <a href="/blog/us-withholding-tax-by-account-canada/">US withholding by account</a>.</p>

    <p>CIPF is not a performance guarantee. Justwealth states $1,000,000 through its custodian. Questrade's journaling page says Questrade Inc. is a CIPF member and that Questwealth's manager is not a CIPF member; custody and execution are described as Questrade Inc.'s job. Read <a href="https://www.cipf.ca/">cipf.ca</a> for the limit that applies to the dealer that actually holds the securities. A lower fee at a firm you do not understand is not a free reduction.</p>

    <h2>Frequently asked questions</h2>

    <h3>What is the best robo-advisor in Canada in 2026?</h3>
    <p>On the published management fee, Questwealth is the lowest of the four firms in the table, at 0.25% and then 0.20%. ETF MERs sit on top, and the fee is not a return. Wealthsimple fits if your tier drops the charge. Justwealth fits if you want the advisor relationship its site describes. RBC InvestEase fits if you want the bank and accept 0.50% plus tax.</p>

    <h3>Are robo fees tax deductible?</h3>
    <p>Fees charged to manage investments can be deductible in a non-registered account in some cases, and they are not a deduction inside a TFSA. RRSP fees paid inside the plan are not a personal deduction either. This page will not give you a line number to claim. Confirm with the slip and with CRA's rules for carrying charges. The tax guide on this site is the filing companion, not a receipt.</p>

    <h3>Is a robo safer than buying XEQT?</h3>
    <p>Safer is the wrong word. Both can hold equity that falls. A robo can put you in a portfolio with bonds if that is what the questionnaire produces. XEQT is 100% equity unless you choose XGRO or another step on the ladder. The risk is the mix. The fee is what you pay someone to maintain it. Read <a href="/blog/all-in-one-etfs-vs-diy-canada/">all-in-one versus DIY</a> before you pay 0.5% to own a fund you could buy for under 0.2%.</p>

    <h3>Does Questwealth's "up to 50% wealthier" claim belong in the decision?</h3>
    <p>No. Questrade's own footnote says the claim is a hypothetical comparison of its fees with average mutual-fund MERs over long periods, and that it excludes the conservative portfolio. It is not a forecast that you will be 50% wealthier than a neighbour who bought VGRO. Ignore the slogan. Use the fee table.</p>

    <h3>What is the minimum?</h3>
    <p>Questwealth's fee line starts at $250. RBC InvestEase says money is invested once you reach $100, with a simpler portfolio until $1,500. Wealthsimple's pricing page reviewed for this article did not state a managed minimum in the fee table, so this page does not invent one. Justwealth's homepage illustration uses $100,000 and does not, on that page, state an account minimum. Confirm the application.</p>

    <h3>Should I use a robo for a TFSA and a discount broker for an RRSP?</h3>
    <p>You can. You will then have two mixes to add up, and two sets of fees. If both accounts hold the same all-in-one ETF, the robo is an expensive way to own the fund you already buy. If the RRSP is where US-listed ETFs go, the self-directed account is doing a job the robo may not offer. Write that down before you split the household.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="https://www.questrade.com/questwealth-portfolios">Questwealth Portfolios fees</a></li>
        <li><a href="https://www.wealthsimple.com/en-ca/pricing">Wealthsimple pricing, managed investing</a></li>
        <li><a href="https://www.justwealth.com/">Justwealth fee illustration and CIPF statement</a></li>
        <li><a href="https://www.rbcinvestease.com/pricing-fees.html">RBC InvestEase pricing</a> and <a href="https://www.rbcinvestease.com/how-it-works.html">how it works</a></li>
        <li><a href="https://www.blackrock.com/ca/investors/en/literature/fact-sheet/xeqt-ishares-core-equity-etf-portfolio-fund-fact-sheet-en-ca.pdf">XEQT fact sheet, for the DIY comparison MER</a></li>
    </ul>

    <div class="cta-section">
        <p><strong>The management fee is certain. The extra return is not.</strong></p>
        <p>Pay for a service you will use. Then get the account and the deduction right. The 2026 tax guide is that half.</p>
        <a href="/ebooks/tax-guide/" class="cta-button">Get the 2026 Tax Guide — $49 CAD</a>
    </div>

    ${footer('September 27, 2026')}

</div>`
  ),
];
