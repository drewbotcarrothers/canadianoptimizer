import { batchFooter, batchPost } from './types';

const D = '2026-11-28';
const HUB = '/category/investing/passive-etf/';
const VEQT = 'https://www.vanguard.ca/en/product/etf/asset-allocation/9692/vanguard-all-equity-etf-portfolio';
const VGRO = 'https://www.vanguard.ca/en/product/etf/asset-allocation/9579/vanguard-growth-etf-portfolio';
const VBAL = 'https://www.vanguard.ca/en/product/etf/asset-allocation/9578/vanguard-balanced-etf-portfolio';
const VCNS = 'https://www.vanguard.ca/en/product/etf/asset-allocation/9577/vanguard-conservative-etf-portfolio';
const XEQT = 'https://www.blackrock.com/ca/investors/en/products/309480/ishares-core-equity-etf-portfolio';
const XGRO = 'https://www.blackrock.com/ca/investors/en/products/239447/ishares-balanced-growth-coreportfoliotm-fund';
const XBAL = 'https://www.blackrock.com/ca/investors/en/products/239449/ishares-balanced-income-coreportfoliotm-fund';
const XCNS = 'https://www.blackrock.com/ca/investors/en/products/309484/ishares-core-conservative-balanced-etf-portfolio';
const VFEE = 'https://www.vanguard.ca/content/dam/intl/americas/canada/en/documents/PressRelease_Vanguard_PriceChanges_Final.pdf';
const VBUILT = 'https://www.vanguard.ca/en/latest-updates/built-for-investors';
const VFACTS = 'https://fund-docs.vanguard.com/VGRO_Growth_ETF_Portfolio_ETF_9579_EN_FACTS.pdf';
const disclaimer = `General education, not investment, tax or financial advice, and not a recommendation to buy any fund. Target mixes, fees, MERs, fund sizes, start dates, distribution schedules, asset mixes and country weights come from the Vanguard Canada and BlackRock Canada fund pages, the Vanguard ETF Facts document and the Vanguard fee-cut press release listed under Sources, all read on November 28, 2026; they change, so confirm them on the issuer pages before you buy. Vanguard's weights are dated October 31, 2026 and BlackRock's holdings November 25, 2026. The Canadian share of stocks for the iShares funds and the dollar costs are our own arithmetic on the published weights and rates, and the weights are rounded. Only the Vanguard and iShares asset-allocation families are compared; other providers are not covered. Past returns are not shown and do not predict future returns. Canadian Optimizer has no affiliate relationship with Vanguard or BlackRock and links to no paid investment product.`;

const content = `<div class="container">

    <div class="hook">
        An all-in-one ETF is the closest thing to a portfolio you can buy with one click: a fund that owns other index funds in a set mix of stocks and bonds and rebalances for you. <span class="highlight">The right one depends on one decision, how much of your money should be in stocks, and then on small differences between the two big families.</span> This guide, part of our <a href="${HUB}">passive ETF investing hub</a>, compares the Vanguard and iShares families at four risk levels using their own pages.
    </div>

    <p>The best all-in-one ETF is the one that matches your stock-and-bond mix: VEQT or XEQT for all stocks, VGRO or XGRO for 80/20, VBAL or XBAL for 60/40 and VCNS or XCNS for 40/60. Within each pair the management fee is a tie at 0.17%, so the choice comes down to MER, holdings and how you want to be paid.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>Pick the stock share first. Each issuer offers four mixes: all-equity, 80/20, 60/40 and 40/60.</li>
            <li>All eight funds charge a 0.17% management fee. The published MER is 0.22% for every Vanguard fund, 0.19% for XEQT and XGRO and 0.18% for XBAL and XCNS.</li>
            <li>Vanguard's funds hold about 30.6% to 30.8% of their stocks in Canada; the iShares funds work out to about 24.6% to 25.6%.</li>
            <li>VEQT pays its distribution once a year, while the other seven funds pay quarterly.</li>
            <li>This guide compares only these two families. It does not cover other providers' all-in-one funds.</li>
        </ul>
    </div>

    <nav aria-label="On this page">
        <ul>
            <li><a href="#method">How we compared them</a></li>
            <li><a href="#table">The four mixes at a glance</a></li>
            <li><a href="#equity">All-equity: VEQT vs XEQT</a></li>
            <li><a href="#growth">Growth, 80/20: VGRO vs XGRO</a></li>
            <li><a href="#balanced">Balanced, 60/40: VBAL vs XBAL</a></li>
            <li><a href="#conservative">Conservative, 40/60: VCNS vs XCNS</a></li>
            <li><a href="#cost">What each one costs</a></li>
            <li><a href="#limits">What they do not do</a></li>
            <li><a href="#fees2025">What changed in 2025</a></li>
            <li><a href="#choose">How to choose</a></li>
            <li><a href="#faq">FAQ</a></li>
        </ul>
    </div>

    <h2 id="method">How we compared the all-in-one ETFs</h2>
    <p>We compared the Vanguard and iShares families because both offer four risk levels from all-equity down to 40% stocks, and we took each fund's figures from its own issuer page, adding the VGRO ETF Facts and Vanguard's fee-cut press release for the 2025 fee cuts and the March 2026 expense date. Nothing here is ranked by past returns, because a fund's recent return says little about its next ten years and the funds started in different years.</p>
    <p>For each of the eight funds we recorded the same six facts, and where an issuer does not publish a figure we say so instead of estimating it:</p>
    <ul>
        <li><strong>Target mix.</strong> The stock and bond split the issuer says the fund aims for.</li>
        <li><strong>Management fee and MER.</strong> The fee the issuer charges now, and the management expense ratio it last reported.</li>
        <li><strong>Holdings.</strong> The underlying ETFs and their weights, from which we worked out the Canadian share of stocks.</li>
        <li><strong>Size and start date.</strong> A bigger, older fund is not better, but a tiny fund is worth knowing about.</li>
        <li><strong>Distribution schedule.</strong> How often the fund pays out.</li>
        <li><strong>What it does not do.</strong> None of these funds is tailored to your account, your age or your tax bracket.</li>
    </ul>
    <p>No affiliate links appear on this page. We receive nothing if you buy any of these funds, and our <a href="/disclosure/">disclosure page</a> explains how affiliate links work elsewhere on the site.</p>
    <p class="did-you-know" data-info-gain><strong>What this page adds:</strong> one table that puts all eight funds on the same footing, with the target mix, fees, distribution schedule and size, plus our calculation of each fund's Canadian share of stocks, which shows Vanguard's four funds hold roughly 5 to 6 percentage points more Canada than iShares'.</p>

    <h2 id="table">What do the four mixes look like side by side?</h2>
    <p>Each family offers the same four risk levels, and at every level the targets are identical, while the fees, MERs and Canadian weights differ slightly. Vanguard publishes VGRO, VBAL and VCNS as approximate targets, states VEQT's target as 100% equity, and BlackRock publishes strategic targets.</p>
    <div class="table-wrapper">
        <table>
            <caption>Vanguard and iShares asset-allocation ETFs (issuer pages, read November 28, 2026)</caption>
            <thead><tr><th>Mix (stocks / bonds)</th><th>Vanguard</th><th>iShares</th><th>Management fee</th><th>MER (Vanguard / iShares)</th><th>Distributions (Vanguard / iShares)</th></tr></thead>
            <tbody>
                <tr><td>100 / 0</td><td>VEQT</td><td>XEQT</td><td>0.17% / 0.17%</td><td>0.22% / 0.19%</td><td>Annually / quarterly</td></tr>
                <tr><td>80 / 20</td><td>VGRO</td><td>XGRO</td><td>0.17% / 0.17%</td><td>0.22% / 0.19%</td><td>Quarterly / quarterly</td></tr>
                <tr><td>60 / 40</td><td>VBAL</td><td>XBAL</td><td>0.17% / 0.17%</td><td>0.22% / 0.18%</td><td>Quarterly / quarterly</td></tr>
                <tr><td>40 / 60</td><td>VCNS</td><td>XCNS</td><td>0.17% / 0.17%</td><td>0.22% / 0.18%</td><td>Quarterly / quarterly</td></tr>
            </tbody>
        </table>
    </div>
    <div class="table-wrapper">
        <table>
            <caption>Size, start date and Canadian share of stocks (Vanguard: published; iShares: our arithmetic on the holdings)</caption>
            <thead><tr><th>Fund</th><th>Size</th><th>Started</th><th>Canada, % of stocks</th></tr></thead>
            <tbody>
                <tr><td>VEQT</td><td>$17.64 billion total assets</td><td>January 29, 2019</td><td>30.79%</td></tr>
                <tr><td>XEQT</td><td>CAD 24,169,949,662 net assets</td><td>August 7, 2019</td><td>about 25.6%</td></tr>
                <tr><td>VGRO</td><td>$10.88 billion total assets</td><td>January 25, 2018</td><td>30.59%</td></tr>
                <tr><td>XGRO</td><td>CAD 5,272,287,718 net assets</td><td>June 21, 2007</td><td>about 25.0%</td></tr>
                <tr><td>VBAL</td><td>$5.98 billion total assets</td><td>January 25, 2018</td><td>30.64%</td></tr>
                <tr><td>XBAL</td><td>CAD 3,571,121,567 net assets</td><td>June 21, 2007</td><td>about 25.2%</td></tr>
                <tr><td>VCNS</td><td>$977.26 million total assets</td><td>January 25, 2018</td><td>30.82%</td></tr>
                <tr><td>XCNS</td><td>CAD 451,152,137 net assets</td><td>August 7, 2019</td><td>about 24.6%</td></tr>
            </tbody>
        </table>
    </div>
    <p>Two patterns repeat all the way down. Vanguard's Canadian share barely moves between funds, while iShares' is a little lower and also steady, so the home-country tilt is a family trait and not something that changes with your risk level. The June 21, 2007 start shown for XGRO and XBAL needs a caveat: their pages say the fundamental investment objective, management fee and fee structure changed effective December 11, 2018, so 2007 is not the age of the current design. And the size ranking is not what you might guess: XEQT's net assets are larger than VEQT's total assets, while Vanguard's growth, balanced and conservative funds are larger than their iShares counterparts.</p>

    <h2 id="equity">VEQT or XEQT: which all-equity fund?</h2>
    <p>Both hold only stocks, so the choice is the mix of countries, the fee and the payout schedule. VEQT's stocks are 30.79% Canadian and 45.40% American by Vanguard's country table, while XEQT's holdings put about 25.6% in Canada and the rest across US, developed-market and emerging-market ETFs.</p>
    <p>On cost, XEQT's 0.19% MER is below VEQT's 0.22%, and both management fees are 0.17%. Vanguard's page lists VEQT's distribution frequency as annual, while BlackRock lists XEQT as quarterly. That matters if you want a regular payout, or if you are reinvesting and would rather see one distribution a year than four.</p>
    <p>An all-equity fund has no bond cushion at all. Vanguard's page reports a standard deviation of 9.55% for VEQT as at October 31, 2026, against 8.27% for VGRO, which gives a sense of how much more it moves. If a bad year would make you sell, a fund with some bonds is the more honest choice. Our <a href="/blog/xeqt-vs-veqt-canada/">XEQT versus VEQT</a> guide goes deeper on this pair.</p>

    <h2 id="growth">VGRO or XGRO: which 80/20 fund?</h2>
    <p>Both aim for 80% stocks and 20% bonds at a 0.17% management fee, and the real difference is the mix inside. VGRO's stocks are 30.59% Canadian by Vanguard's country table and XGRO's are about 25.0% by our arithmetic, and XGRO puts more into developed markets outside North America.</p>
    <p>This is the 80/20 pair for investors who want growth with a little ballast, and we compare the two fund by fund, bucket by bucket, in <a href="/blog/vgro-vs-xgro-canada/">VGRO vs XGRO</a>. The short version is that the MER gap of 0.22% against 0.19% is $30 a year on $100,000, so the mix, not the fee, should decide.</p>

    <h2 id="balanced">VBAL or XBAL: which 60/40 fund?</h2>
    <p>Both target 60% stocks and 40% bonds. VBAL's page shows 60.53% in stocks and 39.45% in bonds as at October 31, 2026, with 17,362 bonds held and an effective yield to maturity of 4.2% on the bond side, while XBAL's holdings put about 26.8% in a Canadian universe bond ETF and the rest of its bonds in short-term corporate, US Treasury and US investment-grade ETFs.</p>
    <p>The bonds are what separate these funds from the equity-heavy ones. Vanguard splits them into a Canadian aggregate bond ETF and two CAD-hedged foreign bond ETFs. BlackRock's list shows two Canadian-dollar bond ETFs and two US-dollar bond ETFs, and its page does not say whether the US-dollar ones are hedged. If currency swings on your bonds worry you, ask the issuer before you buy.</p>
    <p>XBAL's MER of 0.18% is the lowest in the table, 0.04 points below VBAL's 0.22%, which is $40 a year on $100,000. The funds suit people who are close enough to spending the money that a bad year in stocks would matter, or who simply want a smoother ride. See our <a href="/blog/stay-the-course-balanced-portfolios-canada/">guide to staying the course with balanced portfolios</a> for the behaviour side.</p>

    <h2 id="conservative">VCNS or XCNS: which 40/60 fund?</h2>
    <p>Both target 40% stocks and 60% bonds, and both are far smaller than their siblings. VCNS has $977.26 million in total assets and XCNS has net assets of CAD 451,152,137, against billions for the growth funds, so check that your broker shows a normal bid and ask before you place a large order.</p>
    <p>VCNS's page shows 59.47% bonds and 40.51% stocks, with 30.82% of the stocks in Canada. XCNS's largest holding is a Canadian universe bond ETF at 38.66%, and about 24.6% of its stocks are Canadian by our arithmetic. XCNS's MER is 0.18% against VCNS's 0.22%. These funds fit investors who are drawing on the money soon or who know they would not tolerate large drops.</p>
    <p>A fund's distribution is not the same thing as guaranteed income. If you want income by design, the <a href="/blog/bond-etfs-vs-gics-canada/">bond ETFs versus GICs</a> comparison is a better starting point.</p>

    <h2 id="cost">What does each all-in-one ETF cost in dollars?</h2>
    <p>On $100,000, the published MER costs $220 a year for any Vanguard fund, $190 for XEQT or XGRO and $180 for XBAL or XCNS. If the funds charge only their 0.17% management fee, the same $100,000 costs $170, which is the floor if the MERs fall to the management fee; the gaps in the table reflect what each fund last reported.</p>
    <div class="table-wrapper">
        <table>
            <caption>Yearly cost on $100,000 at the published MER and at the 0.17% management fee (our arithmetic, not a forecast)</caption>
            <thead><tr><th>Fund family</th><th>MER</th><th>Yearly cost at the MER</th><th>Yearly cost at 0.17%</th></tr></thead>
            <tbody>
                <tr><td>Vanguard (all four)</td><td>0.22%</td><td>$220</td><td>$170</td></tr>
                <tr><td>XEQT and XGRO</td><td>0.19%</td><td>$190</td><td>$170</td></tr>
                <tr class="highlight-row"><td>XBAL and XCNS</td><td>0.18%</td><td>$180</td><td>$170</td></tr>
            </tbody>
        </table>
    </div>
    <p>The MER is backward-looking. Vanguard announced on November 18, 2025 that it cut the management fee on VEQT, VGRO, VBAL and VCNS from 0.22% to 0.17%, and VGRO's ETF Facts show expenses of 0.22% as of March 31, 2026. BlackRock says XEQT, XGRO, XBAL and XCNS's 0.17% management fee includes all the underlying ETF fees. Our <a href="/blog/mer-drag-index-funds-canada/">MER drag guide</a> shows how a few hundredths of a percent compound over decades.</p>

    <h2 id="limits">What does an all-in-one ETF not do for you?</h2>
    <p>An all-in-one ETF does not know your age, your account, your tax bracket or your other savings, because it holds one fixed mix for everyone who buys it. The mix is set by the issuer, so you cannot tilt it toward more Canada or less bonds without adding a second fund, and adding a second fund mostly defeats the purpose.</p>
    <p>Taxes work the same way as with any ETF. The Vanguard ETF Facts say you generally pay income tax on money you make on an ETF, that how much depends on whether you hold it in a registered plan such as a Registered Retirement Savings Plan or a Tax-Free Savings Account, and that in a non-registered account distributions are included in your taxable income whether you take them in cash or reinvest them. That is why the account matters as much as the fund; our <a href="/blog/diy-etf-portfolio-asset-location-canada/">asset-location guide</a> covers where a fund like this belongs.</p>
    <p>Rebalancing is also out of your hands. That is the point for most people, but it means the fund keeps its mix whether or not your plans change, so the fund you chose at 35 is not automatically the right one at 60. Revisit the mix when your time horizon changes, and not when the market makes the news.</p>

    <h2 id="fees2025">What changed in 2025?</h2>
    <p>Both issuers cut management fees in late 2025, which is why the published MERs and the current management fees no longer match. Vanguard cut the management fee on its four funds from 0.22% to 0.17%, effective November 18, 2025, and BlackRock cut it on its four from 0.18% to 0.17%, effective December 18, 2025.</p>
    <p>For you, the practical point is to read two numbers and not one. The management fee tells you what the issuer charges now; the MER tells you what the fund actually paid over its last reported period. Right now the two differ most for the Vanguard funds, whose 0.22% MER sits next to a 0.17% fee. When you read an older article quoting a fee for these funds, check the date, because it may predate the cuts.</p>

    <h2 id="choose">How do you choose between them?</h2>
    <p>Choose in five short steps: pick your stock share, then pick the family whose holdings you prefer, then check the payout schedule and your broker's costs. Most people can stop after the first step, because the difference between the families is small next to the difference between 100% stocks and 60% stocks.</p>
    <ol>
        <li><strong>Pick the mix.</strong> Decide how large a fall you could live through without selling, and match it to one of the four mixes. A written mix you can hold in a bad year beats an optimal one you abandon.</li>
        <li><strong>Pick the family.</strong> If you want a bigger Canadian tilt, Vanguard's funds hold roughly 5 to 6 points more of it. If you want more developed markets outside North America, the iShares funds hold more.</li>
        <li><strong>Check the details.</strong> VEQT pays annually and the rest quarterly. Check your broker's commissions and whether it offers automatic reinvestment of distributions.</li>
        <li><strong>Hold one fund.</strong> Do not combine two all-in-ones. The <a href="/blog/too-many-etfs-overlap-mistakes-canada/">ETF overlap guide</a> explains why a second fund mostly repeats the first.</li>
        <li><strong>Place it in the right account.</strong> The <a href="/blog/diy-etf-portfolio-asset-location-canada/">asset-location guide</a> covers the TFSA, RRSP, FHSA and taxable choices.</li>
    </ol>
    <p>One way to keep the decision small is to treat the stock share as the real choice and the family as the tie-breaker. Two investors who both pick the 80/20 mix will end up with nearly the same portfolio whether they choose VGRO or XGRO, while an investor who moves from the 80/20 mix to the 60/40 mix changes the portfolio far more than any difference between the families. Spend your time on the first decision, write down why you made it, and revisit it only when your plans change.</p>
    <p>It also helps to decide in advance what you will do in a bad year. If a sharp fall in an all-equity fund would make you sell, the mix is too aggressive for you, however good its long-run record looks. An all-in-one ETF only works when you hold it through the downturns, so the best fund is the one whose worst year you can sit through.</p>
    <p>If you would rather build the mix yourself, compare <a href="/blog/all-in-one-etfs-vs-diy-canada/">all-in-one ETFs versus a DIY portfolio</a> first, and our <a href="/blog/model-etf-portfolios-canada/">model ETF portfolios</a> show what a DIY version looks like.</p>

    <h2 id="faq">Frequently asked questions</h2>
    <h3>What is an all-in-one ETF?</h3>
    <p>An all-in-one ETF is a single fund that holds several underlying index ETFs in a target mix of stocks and bonds and rebalances automatically. Vanguard says its asset-allocation ETFs are designed to provide a complete, diversified portfolio through a single ETF, and BlackRock describes XGRO as a simple way to gain exposure to a portfolio of ETFs in one convenient package.</p>
    <h3>Which all-in-one ETF has the lowest fee?</h3>
    <p>All eight compared here charge a 0.17% management fee. On the published MER, XBAL and XCNS are lowest at 0.18%, followed by XEQT and XGRO at 0.19%, with every Vanguard fund at 0.22%.</p>
    <h3>Which all-in-one ETF is the safest?</h3>
    <p>The ones with the most bonds, VCNS and XCNS, target 60% bonds, but none of these funds is guaranteed and each can fall in value. Match the mix to how much loss you could tolerate.</p>
    <h3>Do all-in-one ETFs rebalance on their own?</h3>
    <p>Yes, though the issuers word it differently. BlackRock says its funds are continuously monitored and automatically rebalanced as needed. Vanguard's fund pages say the sub-advisor may reconstitute and rebalance the asset mix from time to time at its discretion, and its Built for investors page says the portfolios are automatically rebalanced to help maintain the intended mix over time.</p>
    <h3>Are distributions taxable?</h3>
    <p>Outside a registered plan, yes. The Vanguard ETF Facts say that if you hold the ETF in a non-registered account, distributions are included in your taxable income whether you get them in cash or reinvest them.</p>
    <h3>Can I hold two all-in-one ETFs?</h3>
    <p>You can, but there is no reason to. Two funds with similar mixes hold much of the same markets, so you get complexity without diversification.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="${VEQT}">Vanguard Canada: All-Equity ETF Portfolio (VEQT)</a>, reviewed November 28, 2026</li>
        <li><a href="${VGRO}">Vanguard Canada: Growth ETF Portfolio (VGRO)</a>, reviewed November 28, 2026</li>
        <li><a href="${VBAL}">Vanguard Canada: Balanced ETF Portfolio (VBAL)</a>, reviewed November 28, 2026</li>
        <li><a href="${VCNS}">Vanguard Canada: Conservative ETF Portfolio (VCNS)</a>, reviewed November 28, 2026</li>
        <li><a href="${XEQT}">BlackRock Canada: iShares Core Equity ETF Portfolio (XEQT)</a>, reviewed November 28, 2026</li>
        <li><a href="${XGRO}">BlackRock Canada: iShares Core Growth ETF Portfolio (XGRO)</a>, reviewed November 28, 2026</li>
        <li><a href="${XBAL}">BlackRock Canada: iShares Core Balanced ETF Portfolio (XBAL)</a>, reviewed November 28, 2026</li>
        <li><a href="${XCNS}">BlackRock Canada: iShares Core Conservative Balanced ETF Portfolio (XCNS)</a>, reviewed November 28, 2026</li>
        <li><a href="${VFEE}">Vanguard Canada: fee reductions press release</a>, November 18, 2025, reviewed November 28, 2026</li>
        <li><a href="${VFACTS}">Vanguard Investments Canada: VGRO ETF Facts</a>, dated July 16, 2026, reviewed November 28, 2026</li>
        <li><a href="${VBUILT}">Vanguard Canada: Built for investors (asset-allocation ETFs)</a>, reviewed November 28, 2026</li>
    </ul>

    <h2>Related reading</h2>
    <ul>
        <li><a href="/blog/vgro-vs-xgro-canada/">VGRO vs XGRO</a></li>
        <li><a href="/blog/xeqt-vs-veqt-canada/">XEQT vs VEQT</a></li>
        <li><a href="/blog/all-in-one-etfs-vs-diy-canada/">All-in-one ETFs versus a DIY portfolio</a></li>
        <li><a href="/blog/couch-potato-portfolio-canada/">The couch potato portfolio</a></li>
        <li><a href="/blog/best-online-brokerages-canada/">Best online brokerages in Canada</a></li>
    </ul>

    <div class="cta-section">
        <p><strong>Choosing the fund is one decision. Sticking with it is the rest.</strong></p>
        <p>The Canadian Index Investing Guide covers building an index portfolio, automating contributions and holding through a down market.</p>
        <a href="/ebooks/index-investing-guide/" class="cta-button">See the Index Investing Guide</a>
    </div>

    ${batchFooter(D, 'Investing', disclaimer)}

</div>`;

export const bestAllInOneEtfsCanadaPost = batchPost({
  date: D,
  category: 'Investing',
  categorySlug: 'investing',
  subcategory: 'passive-etf',
  slug: 'best-all-in-one-etfs-canada',
  title: 'Best All-in-One ETFs in Canada: Vanguard and iShares Compared',
  excerpt:
    'The best all-in-one ETF depends on your stock share. Vanguard and iShares compared at four risk levels, with fees, holdings, Canadian weights and dollar costs from the issuers.',
  content,
});
