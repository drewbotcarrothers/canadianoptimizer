import { batchFooter, batchPost } from './types';

const D = '2026-11-28';
const HUB = '/category/investing/passive-etf/';
const VGRO = 'https://www.vanguard.ca/en/product/etf/asset-allocation/9579/vanguard-growth-etf-portfolio';
const VFACTS = 'https://fund-docs.vanguard.com/VGRO_Growth_ETF_Portfolio_ETF_9579_EN_FACTS.pdf';
const VFEE = 'https://www.vanguard.ca/content/dam/intl/americas/canada/en/documents/PressRelease_Vanguard_PriceChanges_Final.pdf';
const XGRO = 'https://www.blackrock.com/ca/investors/en/products/239447/ishares-balanced-growth-coreportfoliotm-fund';
const disclaimer = `General education, not investment, tax or financial advice, and not a recommendation to buy either fund. Fees, targets, holdings, fund size and dates come from the Vanguard Canada and BlackRock Canada fund pages, the Vanguard ETF Facts document and the Vanguard fee-cut press release listed under Sources, all read on November 28, 2026; they change, so confirm them on the issuer pages before you buy. The percentages of equity and of $100,000 are our own arithmetic on the published weights, which are rounded and dated differently (October 31, 2026 for Vanguard, November 25, 2026 for BlackRock). Past returns are not shown here and do not predict future returns. Canadian Optimizer has no affiliate relationship with Vanguard or BlackRock and links to no paid investment product.`;

const content = `<div class="container">

    <div class="hook">
        VGRO and XGRO both promise the same thing: a diversified portfolio of about 80% stocks and 20% bonds in a single ticker, with the rebalancing done for you. <span class="highlight">The two are close on fees, so the real differences are in what sits inside each fund.</span> This guide, part of our <a href="${HUB}">passive ETF investing hub</a>, puts the two portfolios side by side using both issuers' own pages.
    </div>

    <p>VGRO (Vanguard Growth ETF Portfolio) and XGRO (iShares Core Growth ETF Portfolio) both target 80% equity and 20% fixed income and both charge a 0.17% management fee. The difference is the mix: VGRO holds more Canadian stocks and more foreign bonds, while XGRO holds more developed-market stocks outside North America.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>Both funds target 80% stocks and 20% bonds, hold other ETFs rather than individual securities, pay quarterly and are rebalanced for you, although the issuers word it differently.</li>
            <li>The management fee is 0.17% on both. The published MER is 0.22% for VGRO and 0.19% for XGRO, which is $30 a year apart on $100,000.</li>
            <li>About 30.5% of VGRO's stock holdings are Canadian against about 25.0% for XGRO, because XGRO puts more into developed markets outside North America.</li>
            <li>XGRO's name is older than its current design: its page shows a June 21, 2007 inception, and its objective and fee structure changed on December 11, 2018.</li>
            <li>Pick one. Holding both doubles up on mostly the same markets and adds little.</li>
        </ul>
    </div>

    <nav aria-label="On this page">
        <ul>
            <li><a href="#same">What the two have in common</a></li>
            <li><a href="#holdings">What each fund holds</a></li>
            <li><a href="#mix">How the stock and bond mixes differ</a></li>
            <li><a href="#cost">Which costs less</a></li>
            <li><a href="#history">Which has the longer history</a></li>
            <li><a href="#choose">How to choose</a></li>
            <li><a href="#faq">FAQ</a></li>
        </ul>
    </div>

    <h2 id="same">What do VGRO and XGRO have in common?</h2>
    <p>Both are asset-allocation ETFs that aim for the same split, hold a handful of other index ETFs and charge the same management fee. Vanguard says VGRO's sub-advisor will strive to maintain a long-term mix of approximately 80% equity and 20% fixed income, and BlackRock says XGRO targets a strategic asset allocation of 80% equity and 20% fixed income.</p>
    <div class="table-wrapper">
        <table>
            <caption>VGRO and XGRO side by side (issuer pages, read November 28, 2026)</caption>
            <thead><tr><th></th><th>VGRO (Vanguard)</th><th>XGRO (iShares)</th></tr></thead>
            <tbody>
                <tr><td>Target mix</td><td>Approximately 80% equity, 20% fixed income</td><td>80% equity, 20% fixed income</td></tr>
                <tr><td>Management fee</td><td>0.17% (cut from 0.22% on November 18, 2025)</td><td>0.17% (cut from 0.18% on December 18, 2025)</td></tr>
                <tr><td>Management expense ratio (MER)</td><td>0.22%</td><td>0.19%</td></tr>
                <tr><td>Distributions</td><td>Quarterly</td><td>Quarterly</td></tr>
                <tr><td>Fund size</td><td>$10.88 billion in total assets</td><td>CAD 5,272,287,718 in net assets (November 27, 2026)</td></tr>
                <tr><td>Started</td><td>January 25, 2018</td><td>June 21, 2007 (structure changed December 11, 2018)</td></tr>
            </tbody>
        </table>
    </div>
    <p>Rebalancing is where the wording differs. BlackRock says XGRO is continuously monitored and automatically rebalanced as needed to hold its target weights. Vanguard says VGRO's asset mix may be reconstituted and rebalanced from time to time at the sub-advisor's discretion, so neither page gives a fixed schedule or threshold.</p>
    <p class="did-you-know" data-info-gain><strong>What this page adds:</strong> a side-by-side table that sorts both funds' published underlying holdings into the same seven buckets, so you can see that VGRO holds about 30.5% of its stocks in Canada against about 25.0% for XGRO, and what $100,000 in each actually owns.</p>

    <h2 id="holdings">What does each fund actually hold?</h2>
    <p>Each fund is a wrapper around other ETFs. VGRO holds seven Vanguard index ETFs and XGRO holds eight iShares ETFs plus a little cash, so owning either one gives you exposure to thousands of stocks and bonds without buying them one at a time.</p>
    <div class="table-wrapper">
        <table>
            <caption>Underlying holdings as published (VGRO as at October 31, 2026; XGRO as at November 25, 2026)</caption>
            <thead><tr><th>VGRO holds</th><th>Weight</th><th>XGRO holds</th><th>Weight</th></tr></thead>
            <tbody>
                <tr><td>Morningstar US Total Market Index ETF</td><td>36.62%</td><td>iShares Core S&amp;P Total U.S. Stock (ITOT)</td><td>36.23%</td></tr>
                <tr><td>FTSE Canada All Cap Index ETF</td><td>24.76%</td><td>iShares S&amp;P/TSX Capped Composite (XIC)</td><td>19.92%</td></tr>
                <tr><td>FTSE Developed All Cap ex-North America Index ETF</td><td>14.36%</td><td>iShares MSCI EAFE IMI Index (XEF)</td><td>19.70%</td></tr>
                <tr><td>Canadian Aggregate Bond Index ETF</td><td>11.54%</td><td>iShares Core CAD Universe Bond Index ETF (XBB)</td><td>13.12%</td></tr>
                <tr><td>FTSE Emerging Markets All Cap Index ETF</td><td>5.35%</td><td>iShares MSCI Emerging Market (XEC)</td><td>3.85%</td></tr>
                <tr><td>Global ex-U.S. Aggregate Bond Index ETF, CAD-hedged</td><td>3.77%</td><td>iShares Core CAD ST Corporate Bond Index (XSH)</td><td>3.06%</td></tr>
                <tr><td>US Aggregate Bond Index ETF, CAD-hedged</td><td>3.59%</td><td>iShares US Treasury Bond ETF (GOVT)</td><td>1.99%</td></tr>
                <tr><td>(none)</td><td></td><td>iShares Broad USD Investment Grade (USIG)</td><td>1.97%</td></tr>
                <tr><td>Short-term reserves</td><td>0.02%</td><td>CAD and USD cash</td><td>0.24%</td></tr>
            </tbody>
        </table>
    </div>
    <p>Two details stand out. First, VGRO's three bond funds are described on Vanguard's page as a Canadian aggregate bond ETF plus a CAD-hedged global ex-U.S. and a CAD-hedged U.S. aggregate bond ETF, while XGRO's list shows two Canadian-dollar bond ETFs and two US-dollar bond ETFs, and BlackRock's page does not say whether those two are hedged. Second, VGRO holds only a single short-term reserve line, while XGRO has cash in two currencies.</p>

    <h2 id="mix">How different are the stock and bond mixes?</h2>
    <p>The two funds hold the same kinds of assets in somewhat different proportions. Dividing each stock holding by the fund's total stock weight shows VGRO at about 30.5% Canadian against about 25.0% for XGRO, and XGRO putting about 24.7% of its stocks into developed markets outside North America against about 17.7% for VGRO.</p>
    <div class="table-wrapper">
        <table>
            <caption>The same weights sorted into common buckets (our arithmetic on the published weights; rounding applies)</caption>
            <thead><tr><th>Bucket</th><th>VGRO, % of fund</th><th>XGRO, % of fund</th><th>VGRO, % of its stocks</th><th>XGRO, % of its stocks</th></tr></thead>
            <tbody>
                <tr><td>US stocks</td><td>36.62%</td><td>36.23%</td><td>45.2%</td><td>45.5%</td></tr>
                <tr><td>Canadian stocks</td><td>24.76%</td><td>19.92%</td><td>30.5%</td><td>25.0%</td></tr>
                <tr><td>Developed markets outside North America</td><td>14.36%</td><td>19.70%</td><td>17.7%</td><td>24.7%</td></tr>
                <tr><td>Emerging markets</td><td>5.35%</td><td>3.85%</td><td>6.6%</td><td>4.8%</td></tr>
                <tr class="highlight-row"><td>All stocks</td><td>81.09%</td><td>79.70%</td><td>100%</td><td>100%</td></tr>
                <tr><td>Canadian-dollar bonds</td><td>11.54%</td><td>16.18%</td><td></td><td></td></tr>
                <tr><td>Foreign bonds</td><td>7.36%</td><td>3.96%</td><td></td><td></td></tr>
                <tr class="highlight-row"><td>All bonds</td><td>18.90%</td><td>20.14%</td><td></td><td></td></tr>
            </tbody>
        </table>
    </div>
    <p>On $100,000, that means VGRO holds about $24,760 in Canadian stocks and XGRO about $19,920, while XGRO holds about $19,700 in developed markets outside North America against $14,360 for VGRO. Vanguard's own country table, which covers stocks only, shows 45.30% in the United States and 30.59% in Canada as at October 31, 2026. Those are close to the 45.2% and 30.5% we calculate but not identical, and the page does not say how it assigns each security, so treat Vanguard's published figures as the official ones. The 81.09% in the table is the sum of the rounded holding weights; Vanguard's own asset-allocation line shows 81.08% for stocks.</p>
    <p>Neither mix is the "right" one. A larger Canadian share means more exposure to the banks, energy and materials companies that dominate the Canadian market and a smaller share of everything else, while a larger international share does the opposite. The difference between the two is about 5 percentage points of the whole portfolio.</p>

    <h2 id="cost">Which costs less, VGRO or XGRO?</h2>
    <p>On the published MER, XGRO costs less: 0.19% against 0.22%, a gap of 0.03 percentage points. On the management fee, the two are tied at 0.17%, and that is the number to watch because both issuers cut it in late 2025.</p>
    <div class="table-wrapper">
        <table>
            <caption>Yearly cost in dollars at three balances (our arithmetic: balance times the published rate; not a forecast)</caption>
            <thead><tr><th>Balance</th><th>VGRO MER 0.22%</th><th>XGRO MER 0.19%</th><th>Gap</th><th>Both at 0.17%</th></tr></thead>
            <tbody>
                <tr><td>$25,000</td><td>$55.00</td><td>$47.50</td><td>$7.50</td><td>$42.50</td></tr>
                <tr><td>$100,000</td><td>$220.00</td><td>$190.00</td><td>$30.00</td><td>$170.00</td></tr>
                <tr class="highlight-row"><td>$250,000</td><td>$550.00</td><td>$475.00</td><td>$75.00</td><td>$425.00</td></tr>
            </tbody>
        </table>
    </div>
    <p>The MER is a looking-back number. Vanguard's ETF Facts say the ETF's expenses were 0.22% of its value as of March 31, 2026, and add that the manager reduced the management fee from 0.22% to 0.17% effective November 18, 2025. BlackRock's page shows a 0.17% management fee and a 0.19% MER, and says the 0.17% includes all underlying ETF management fees. So the 0.03-point gap in the table is what each fund last reported, not a promise about next year.</p>
    <p>The gap is small enough to be outweighed by other costs. Our <a href="/blog/mer-drag-index-funds-canada/">MER drag guide</a> shows how a fee compounds, and your broker's trading costs and any currency conversion matter as much as 0.03%.</p>

    <h2 id="history">Which has the longer track record?</h2>
    <p>XGRO shows the older start date, but VGRO's history and XGRO's current-design history begin close together. VGRO began on January 25, 2018. XGRO's page lists an inception date of June 21, 2007 and notes that on December 11, 2018 the fundamental investment objective, management fee and fee structure of the ETF changed.</p>
    <p>That matters when you compare long-run returns. A return quoted for XGRO before December 2018 belongs to a differently designed fund, and BlackRock's page also says its performance data does not reflect the December 18, 2025 fee reduction. Compare funds only over periods when both had their current structure, and remember that a short history says little about the next decade.</p>

    <h2 id="choose">How should you choose between them?</h2>
    <p>Choose the one whose mix you would rather hold through a bad year, because the difference in cost is only a few dollars a year and the fund you abandon in a panic is the most expensive one. If you want less Canadian concentration and more of the developed world, XGRO's mix leans that way. If you want a larger Canadian slice and more of your bonds outside Canada, VGRO's does.</p>
    <ul>
        <li><strong>Hold one, not both.</strong> They share the same target and overlapping markets, so owning both only splits your holdings across two tickers. Our guide to <a href="/blog/too-many-etfs-overlap-mistakes-canada/">ETF overlap mistakes</a> covers the stop rule.</li>
        <li><strong>Check which account it goes in.</strong> Both are Canadian-listed ETFs priced in Canadian dollars. Where the fund sits matters more than which one it is; see <a href="/blog/diy-etf-portfolio-asset-location-canada/">asset location</a>.</li>
        <li><strong>Decide whether 80/20 is your mix.</strong> If you want all stocks, compare <a href="/blog/xeqt-vs-veqt-canada/">XEQT and VEQT</a>. If you want a more balanced split, <a href="/blog/all-in-one-etfs-vs-diy-canada/">all-in-one ETFs versus a DIY portfolio</a> is the wider comparison.</li>
        <li><strong>Re-read the fees in a year.</strong> Both issuers changed their management fees in late 2025, so the MERs should be re-checked when each fund reports its next full year.</li>
    </ul>
    <p>If you already own one of them, the comparison above is rarely a reason to switch. Selling a fund to buy its near-twin can trigger a taxable gain in a non-registered account, costs you trading commissions at some brokers, and leaves you out of the market for however long the trade takes to settle, all to chase a difference that is small next to the choice of stock share. Switching is easier to justify when you are starting fresh, or when you are inside a TFSA or RRSP where a sale does not create a tax bill. Either way, the decision is about which holdings you want, not about which fund will win.</p>

    <h2 id="faq">Frequently asked questions</h2>
    <h3>Is VGRO or XGRO better?</h3>
    <p>Neither is better in every case. They target the same 80/20 mix at the same 0.17% management fee, so the choice comes down to the stock and bond mix inside each fund and to the small MER gap of 0.22% against 0.19%.</p>
    <h3>Do VGRO and XGRO rebalance automatically?</h3>
    <p>Yes, but the issuers describe it differently. BlackRock says XGRO is automatically rebalanced as needed to maintain its target weights, and Vanguard says VGRO's mix may be rebalanced from time to time at the sub-advisor's discretion.</p>
    <h3>Why is the VGRO MER higher than its management fee?</h3>
    <p>Because the MER is a historical figure and the management fee is the current one. Vanguard's ETF Facts report expenses of 0.22% as of March 31, 2026, and say the management fee was reduced from 0.22% to 0.17% on November 18, 2025.</p>
    <h3>Can I hold VGRO or XGRO in a TFSA or RRSP?</h3>
    <p>Generally yes, but confirm with your broker. Both are Canadian-listed ETFs priced in Canadian dollars, and the Vanguard ETF Facts say how much tax you pay depends on whether you hold the ETF in a registered plan such as a Registered Retirement Savings Plan or a Tax-Free Savings Account. Confirm eligibility with your broker.</p>
    <h3>Should I hold both VGRO and XGRO?</h3>
    <p>No. Both aim for the same 80% stocks and 20% bonds, so holding both mainly duplicates the same markets across two tickers.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="${VGRO}">Vanguard Canada: Growth ETF Portfolio (VGRO)</a>, reviewed November 28, 2026</li>
        <li><a href="${VFACTS}">Vanguard Investments Canada: VGRO ETF Facts</a>, dated July 16, 2026, reviewed November 28, 2026</li>
        <li><a href="${VFEE}">Vanguard Canada: fee reductions press release</a>, November 18, 2025, reviewed November 28, 2026</li>
        <li><a href="${XGRO}">BlackRock Canada: iShares Core Growth ETF Portfolio (XGRO)</a>, reviewed November 28, 2026</li>
    </ul>

    <h2>Related reading</h2>
    <ul>
        <li><a href="/blog/xeqt-vs-veqt-canada/">XEQT vs VEQT</a></li>
        <li><a href="/blog/all-in-one-etfs-vs-diy-canada/">All-in-one ETFs versus a DIY portfolio</a></li>
        <li><a href="/blog/model-etf-portfolios-canada/">Model ETF portfolios</a></li>
        <li><a href="/blog/stay-the-course-balanced-portfolios-canada/">Staying the course with a balanced portfolio</a></li>
        <li><a href="/blog/couch-potato-portfolio-canada/">The couch potato portfolio</a></li>
    </ul>

    <div class="cta-section">
        <p><strong>Picking the fund is the easy part.</strong></p>
        <p>The Canadian Index Investing Guide covers how to build, automate and stick with an index portfolio, including when to rebalance and how to hold it through a down market.</p>
        <a href="/ebooks/index-investing-guide/" class="cta-button">See the Index Investing Guide</a>
    </div>

    ${batchFooter(D, 'Investing', disclaimer)}

</div>`;

export const vgroVsXgroCanadaPost = batchPost({
  date: D,
  category: 'Investing',
  categorySlug: 'investing',
  subcategory: 'passive-etf',
  slug: 'vgro-vs-xgro-canada',
  title: 'VGRO vs XGRO: What Each 80/20 All-in-One ETF Holds',
  excerpt:
    'VGRO and XGRO both target 80% stocks and 20% bonds at a 0.17% management fee. Here is what each holds, sorted into the same buckets, with the MER gap in dollars.',
  content,
});
