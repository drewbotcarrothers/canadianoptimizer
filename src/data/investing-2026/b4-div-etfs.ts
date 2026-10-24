import { invFooter, invPost } from './types';

const VDY = 'https://www.vanguard.ca/en/advisor/products/products-group/etfs/VDY';
const XEI_FS = 'https://www.blackrock.com/ca/individual/en/literature/fact-sheet/xei-ishares-s-p-tsx-composite-high-dividend-index-etf-fund-fact-sheet-en-ca.pdf';
const XEI_FACTS = 'https://www.blackrock.com/ca/individual/en/literature/etf-summary/xei-facts-en-ca.pdf';
const CDZ_FS = 'https://www.blackrock.com/ca/individual/en/literature/fact-sheet/cdz-ishares-s-p-tsx-canadian-dividend-aristocrats-index-etf-fund-fact-sheet-en-ca.pdf';
const XDV_FS = 'https://www.blackrock.com/ca/individual/en/literature/fact-sheet/xdv-ishares-canadian-select-dividend-index-etf-fund-fact-sheet-en-ca.pdf';
const ZDV_FS = 'https://df.bmogam.com/assets/static/etf-profiles-pdfs/BMO%20Canadian%20Dividend%20ETF_Factsheet_EN_ZDV.pdf';
const CRA_DTC = 'https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-40425-federal-dividend-tax-credit.html';

export const canadianDividendEtfsCompared = invPost(
  'dividend-investing',
  'canadian-dividend-etfs-compared',
  'Canadian Dividend ETFs Compared: VDY, XEI, ZDV, CDZ, XDV',
  'VDY, XEI, ZDV, CDZ and XDV compared on MER, yield, holdings, bank weight and how each picks stocks, using fund pages dated September 30, 2026. Which fits you?',
  `<div class="container">

    <div class="hook">
        Five popular Canadian dividend ETFs, five different recipes. One puts <span class="highlight">69.6%</span> of your money in its top ten stocks. Another spreads its top ten across under 25%. Their fees run from 0.22% to 0.66%. If you buy on yield alone, you can miss what you actually own.
    </div>

    <p>The five main Canadian dividend ETFs differ mainly in how they choose stocks. VDY and XEI are low-cost (0.22% MER) high-yield funds. ZDV (0.39%) screens for quality. CDZ (0.66%) needs five years of dividend increases. XDV (0.55%) holds 30 stocks. On September 30, 2026, trailing yields ranged from about 2.8% to 3.5%.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>VDY is the most concentrated: its top ten holdings were 69.6% of the fund, with Royal Bank alone at 15.8%.</li>
            <li>CDZ is the most spread out (93 holdings, top ten 24.7%) but also the most expensive at a 0.66% MER.</li>
            <li>XEI caps each stock at 5% and each sector at 30%, which limits its bank weight.</li>
            <li>Yields differ by definition. iShares and Vanguard show a 12-month trailing yield; BMO's fact sheet shows an annualized distribution yield. Compare like with like.</li>
            <li>All five hold Canadian stocks that pay mostly eligible dividends, which get the dividend tax credit in a non-registered account.</li>
        </ul>
    </div>

    <p>This guide is part of <a href="/category/investing/dividend-investing/">Dividend investing</a>, in the <a href="/category/investing/">Investing</a> category. The pillar on <a href="/blog/dividend-investing-canada/">dividend investing in Canada</a> covers building an income stream. This page compares the ETFs that do the stock picking for you.</p>

    <nav aria-label="On this page">
        <ul>
            <li><a href="#table">How do the five ETFs compare?</a></li>
            <li><a href="#method">How does each ETF pick its stocks?</a></li>
            <li><a href="#concentration">How concentrated are they?</a></li>
            <li><a href="#returns">How have they performed?</a></li>
            <li><a href="#yield">Why do the yields look different?</a></li>
            <li><a href="#tax">How are the distributions taxed?</a></li>
            <li><a href="#vs-broad">Is a dividend ETF better than a broad index ETF?</a></li>
            <li><a href="#choose">Which one fits you?</a></li>
            <li><a href="#faq">FAQ</a></li>
        </ul>
    </nav>

    <h2 id="table">How do the five ETFs compare?</h2>

    <div class="table-wrapper">
        <table>
            <caption>Canadian dividend ETFs: cost, size and yield (fund pages and fact sheets, data as at September 30, 2026)</caption>
            <thead>
                <tr><th>ETF</th><th>Manager</th><th>MER</th><th>Holdings</th><th>Yield shown</th><th>Net assets</th><th>Pays</th></tr>
            </thead>
            <tbody>
                <tr><td>VDY</td><td>Vanguard</td><td>0.22%</td><td>58</td><td>3.11% (12-month trailing)</td><td>$8.96 billion</td><td>Monthly</td></tr>
                <tr class="highlight-row"><td>XEI</td><td>iShares</td><td>0.22%</td><td>75</td><td>3.54% (12-month trailing)</td><td>$4.26 billion</td><td>Monthly</td></tr>
                <tr><td>ZDV</td><td>BMO</td><td>0.39%</td><td>62</td><td>2.77% (annualized distribution)</td><td>$1.88 billion</td><td>Monthly</td></tr>
                <tr><td>CDZ</td><td>iShares</td><td>0.66%</td><td>93</td><td>3.07% (12-month trailing)</td><td>$1.21 billion</td><td>Monthly</td></tr>
                <tr><td>XDV</td><td>iShares</td><td>0.55%</td><td>30</td><td>3.41% (12-month trailing)</td><td>$2.57 billion</td><td>Monthly</td></tr>
            </tbody>
        </table>
    </div>

    <p>Sources: <a href="${VDY}">Vanguard's VDY page</a> (MER as of the latest fund year end; holdings, yield and assets at September 30, 2026); iShares fact sheets for <a href="${XEI_FS}">XEI</a>, <a href="${CDZ_FS}">CDZ</a> and <a href="${XDV_FS}">XDV</a>; and BMO's <a href="${ZDV_FS}">ZDV fact sheet</a>. Each fund's MER is the most recently reported figure and can change.</p>

    <h2 id="method">How does each ETF pick its stocks?</h2>

    <p>The method decides what you own. Two funds can both be called "Canadian dividend" and hold quite different companies.</p>

    <div class="table-wrapper">
        <table>
            <caption>Selection method by ETF, as described by each manager</caption>
            <thead>
                <tr><th>ETF</th><th>What it tracks or does</th><th>What that means</th></tr>
            </thead>
            <tbody>
                <tr><td>VDY</td><td>FTSE Canada High Dividend Yield Index</td><td>High-yield Canadian stocks, weighted by size, so the biggest banks dominate</td></tr>
                <tr><td>XEI</td><td>S&amp;P/TSX Composite High Dividend Index: 50 to 75 stocks ranked by dividend, each capped at 5% and each sector at 30%</td><td>Caps force more weight into energy, utilities and others</td></tr>
                <tr><td>ZDV</td><td>Rules-based approach considering dividend growth, yield, payout levels and liquidity; rebalanced monthly</td><td>Aims for sustainable dividends, not the highest yield</td></tr>
                <tr><td>CDZ</td><td>S&amp;P/TSX Canadian Dividend Aristocrats Index: companies that raised ordinary cash dividends for at least five consecutive years</td><td>Many mid-size companies, so less bank weight</td></tr>
                <tr><td>XDV</td><td>Dow Jones Canada Select Dividend Index: 30 stocks</td><td>Few holdings, so single stocks matter more</td></tr>
            </tbody>
        </table>
    </div>

    <p>The XEI details come from its <a href="${XEI_FACTS}">ETF Facts</a> document dated June 19, 2026. CDZ's five-year rule is on its fact sheet. ZDV's approach is described on BMO's fact sheet. Index names for VDY and XDV are from the fund documents linked above.</p>

    <h2 id="concentration">How concentrated are they?</h2>

    <p>Canada's stock market is heavy in banks and energy. Dividend funds are heavier still, because those sectors pay most of the dividends. The share held by the top ten stocks tells you how much depends on a few names.</p>

    <div class="chart-container">
        <h3>Top ten holdings as a share of the fund, September 30, 2026</h3>
        <div class="bar-chart">
            <div class="bar-item"><div class="bar-label wide">VDY: 69.6%</div><div class="bar-wrapper"><div class="bar" style="width: 100%;"><span></span></div></div></div>
            <div class="bar-item"><div class="bar-label wide">XDV: 57.8%</div><div class="bar-wrapper"><div class="bar" style="width: 83%;"><span></span></div></div></div>
            <div class="bar-item"><div class="bar-label wide">XEI: 45.8%</div><div class="bar-wrapper"><div class="bar" style="width: 66%;"><span></span></div></div></div>
            <div class="bar-item"><div class="bar-label wide">ZDV: 44.8%</div><div class="bar-wrapper"><div class="bar" style="width: 64%;"><span></span></div></div></div>
            <div class="bar-item"><div class="bar-label wide">CDZ: 24.7%</div><div class="bar-wrapper"><div class="bar" style="width: 35%;"><span></span></div></div></div>
        </div>
        <p>XEI, CDZ and XDV totals are as printed on the iShares fact sheets. VDY and ZDV totals are our sums of the top ten weights listed by Vanguard and BMO.</p>
    </div>

    <p>In VDY, six of the top ten are banks or insurers: Royal Bank (15.8%), TD (11.1%), BMO (6.8%), Scotiabank (6.4%), CIBC (5.8%) and Manulife (4.1%). The other four are energy companies. ZDV's fact sheet shows 38.69% in financials and 21.05% in energy. CDZ's top holdings look completely different: South Bow, Westshore Terminals, Mullen Group and Gibson Energy, each around 3%.</p>

    <p>If you already own a broad Canadian index ETF or bank shares, adding VDY increases the same bets. See <a href="/blog/position-sizing-stocks-canada/">position sizing</a> for why several banks behave like one large position.</p>

    <h2 id="returns">How have they performed?</h2>

    <p>Past returns mostly reflect which sectors did well, not which method is better. Here are annualized returns to September 30, 2026, from the fact sheets. VDY's returns are on Vanguard's site; we have not reproduced them because the page version we reviewed did not show them in a form we could verify.</p>

    <div class="table-wrapper">
        <table>
            <caption>Annualized total returns to September 30, 2026, net of fees (fact sheets)</caption>
            <thead>
                <tr><th>ETF</th><th>1 year</th><th>5 years</th><th>10 years</th></tr>
            </thead>
            <tbody>
                <tr><td>XEI</td><td>29.21%</td><td>15.53%</td><td>11.82%</td></tr>
                <tr><td>ZDV</td><td>29.15%</td><td>15.74%</td><td>11.79%</td></tr>
                <tr><td>CDZ</td><td>15.82%</td><td>11.60%</td><td>10.18%</td></tr>
                <tr class="highlight-row"><td>XDV</td><td>34.10%</td><td>14.90%</td><td>12.28%</td></tr>
            </tbody>
        </table>
    </div>

    <p>The calendar years show how different they can be. In 2022, XEI returned 0.45% and CDZ -4.25%, while XDV lost 8.58%. In 2025, XDV gained 29.34% and CDZ 18.29%. Banks and energy drive most of the gap. Past performance does not predict future returns.</p>

    <h2 id="yield">Why do the yields look different?</h2>

    <p>The managers don't all use the same yield. A 12-month trailing yield adds up the last year of distributions and divides by today's price. An annualized distribution yield takes the latest distribution, multiplies it to a year and divides by the price. When a fund raises or lowers its payout, the two can differ a lot.</p>

    <p>Higher yield is not free money. A fund full of high-yield stocks can also hold companies whose dividend is at risk. Our guide to <a href="/blog/dividend-yield-traps-canada/">dividend yield traps</a> explains the warning signs. Total return, meaning dividends plus price change, is what grows your wealth.</p>

    <div class="tip-box">
        <strong>Monthly does not mean more</strong>
        <p>All five pay monthly. Payment frequency changes when cash arrives, not how much the fund earns. A fund's price drops by roughly the amount of each distribution on the ex-date.</p>
    </div>

    <h2 id="tax">How are the distributions taxed?</h2>

    <p>In a non-registered account, these ETFs pass through mostly eligible Canadian dividends, which are grossed up and earn the federal dividend tax credit (see the <a href="${CRA_DTC}">CRA's line 40425 page</a>). They can also distribute capital gains, especially in December. VDY's page shows its 2025 distributions for tax were $2.19840 a unit of eligible dividends, $0.76462 of capital gains and $0.00151 of return of capital.</p>

    <p>Those capital gains are taxable even if they are reinvested rather than paid in cash. Reinvested amounts increase your adjusted cost base. Our guide to <a href="/blog/return-of-capital-t3-t5-slips-canada/">T3 and T5 slips and return of capital</a> walks through how to record this.</p>

    <p>In a TFSA or RRSP, there is no dividend tax credit and no tax on the distributions. Canadian dividend ETFs in a TFSA are common, but because the credit only helps in taxable accounts, some investors deliberately hold them in non-registered accounts. See <a href="/blog/dividend-tax-credit-by-province-canada/">the dividend tax credit by province</a>.</p>

    <h2 id="vs-broad">Is a dividend ETF better than a broad index ETF?</h2>

    <p>Not automatically. A broad Canadian index ETF holds the whole market, including companies that pay small or no dividends. A dividend ETF tilts toward banks, energy, pipelines, utilities and telecoms. That tilt raises your income and lowers your diversification.</p>

    <p>The trade-off is personal. If you want cash flow without selling units, a dividend ETF delivers it. If you want the broadest possible exposure at the lowest cost, a total-market fund does that better. Our <a href="/blog/dividend-vs-growth-taxable-accounts-canada/">dividend vs growth</a> guide covers the tax side. Most dividend ETFs also hold only Canadian stocks, so they should be one part of a portfolio, not all of it.</p>

    <h2 id="choose">Which one fits you?</h2>

    <div class="flowchart">
        <div class="flow-node decision">Is low cost your top priority?</div>
        <div class="flow-arrow"></div>
        <div class="flow-branch-container">
            <div class="flow-node decision">Yes: are you comfortable with heavy bank weight?</div>
            <div class="flow-node decision">No: do you want many mid-size companies or a quality screen?</div>
        </div>
        <div class="flow-arrow"></div>
        <div class="flow-branch-container">
            <div class="flow-node result">Banks are fine: VDY (0.22%). Prefer caps: XEI (0.22%)</div>
            <div class="flow-node result">Quality screen: ZDV (0.39%). Dividend growers, wide spread: CDZ (0.66%)</div>
        </div>
    </div>

    <p>XDV suits investors who want a concentrated 30-stock basket and accept the 0.55% MER. Whichever you pick, check its holdings against what you already own, and look again each year.</p>

    <div class="example-box">
        <strong>Illustrative example: Raj, 58, Mississauga</strong>
        <p>Raj has $150,000 in a non-registered account and wants Canadian dividend income. He already holds $30,000 of Royal Bank and TD shares from an old employee plan.</p>
        <div class="example-calculation">
            <div class="line"><span>VDY's weight in RBC and TD combined (Sept. 30, 2026)</span><span>26.9%</span></div>
            <div class="line"><span>XEI's weight in RBC and TD combined</span><span>10.2%</span></div>
            <div class="line"><span>Yearly MER on $100,000, VDY or XEI (0.22%)</span><span>$220</span></div>
            <div class="line"><span>Yearly MER on $100,000 in CDZ (0.66%)</span><span>$660</span></div>
            <div class="line total"><span>His pick</span><span>XEI, to avoid doubling up on the banks he already owns</span></div>
        </div>
        <p>The ETF weights are from the fund documents above. Raj's holdings and amounts are illustrative.</p>
    </div>

    <h2>Does your province change anything?</h2>
    <p>The funds are the same everywhere. The after-tax value of eligible dividends depends on your provincial dividend tax credit, which varies widely. Quebec residents get a Relevé slip alongside their federal slips. Our <a href="/blog/dividend-tax-credit-by-province-canada/">province-by-province dividend tax credit guide</a> has the rates.</p>

    <h2>Checklist</h2>
    <ul class="checklist">
        <li>Method understood: high yield, quality screen, dividend growth or concentrated</li>
        <li>MER compared, using each fund's latest reported figure</li>
        <li>Top ten and bank weight checked against what you already own</li>
        <li>Yields compared using the same definition</li>
        <li>Account chosen with the dividend tax credit in mind</li>
        <li>Reinvested capital gains added to your ACB each year</li>
    </ul>

    <h2 id="faq">Frequently asked questions</h2>

    <h3>What is the cheapest Canadian dividend ETF?</h3>
    <p>Of these five, VDY and XEI both had a 0.22% MER on their latest documents. ZDV was 0.39%, XDV 0.55% and CDZ 0.66%.</p>

    <h3>Which Canadian dividend ETF has the highest yield?</h3>
    <p>XEI showed the highest 12-month trailing yield of the group, 3.54% at September 30, 2026. Yields change monthly, so check the fund page.</p>

    <h3>Is VDY too concentrated in banks?</h3>
    <p>It is concentrated. At September 30, 2026, Royal Bank and TD were 26.9% of VDY. Whether that is too much depends on what else you own.</p>

    <h3>Should I hold a dividend ETF in my TFSA?</h3>
    <p>You can. Distributions are tax-free there, but you lose the dividend tax credit. Many investors hold Canadian dividends in non-registered accounts instead.</p>

    <h3>Do dividend ETFs pay return of capital?</h3>
    <p>Usually very little. VDY's 2025 return of capital was $0.00151 a unit. Covered-call and REIT funds are where return of capital is common.</p>

    <h3>Is CDZ worth its higher fee?</h3>
    <p>It gives broader, mid-cap-heavy exposure with a dividend-growth rule. Over the ten years to September 30, 2026, it returned 10.18% a year, below XEI and ZDV.</p>

    <h3>Can I build my own dividend portfolio instead?</h3>
    <p>Yes, with enough money to diversify and time to monitor. See our <a href="/blog/how-to-pick-stocks-canada/">stock-picking framework</a>.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="${VDY}">Vanguard Canada: VDY fund page</a>, data as at September 30, 2026, reviewed October 23, 2026</li>
        <li><a href="${XEI_FS}">BlackRock Canada: XEI fact sheet</a>, data as at September 30, 2026, reviewed October 23, 2026</li>
        <li><a href="${XEI_FACTS}">BlackRock Canada: XEI ETF Facts</a>, June 19, 2026, reviewed October 23, 2026</li>
        <li><a href="${CDZ_FS}">BlackRock Canada: CDZ fact sheet</a>, data as at September 30, 2026, reviewed October 23, 2026</li>
        <li><a href="${XDV_FS}">BlackRock Canada: XDV fact sheet</a>, data as at September 30, 2026, reviewed October 23, 2026</li>
        <li><a href="${ZDV_FS}">BMO Global Asset Management: ZDV fact sheet</a>, data as at September 30, 2026, reviewed October 23, 2026</li>
        <li><a href="${CRA_DTC}">CRA: Line 40425, Federal dividend tax credit</a>, reviewed October 23, 2026</li>
        <li>Top-ten sums for VDY and ZDV, combined bank weights and fee amounts: our calculations from the documents above</li>
    </ul>

    <h2>Related reading</h2>
    <ul>
        <li><a href="/blog/dividend-investing-canada/">Dividend investing in Canada</a></li>
        <li><a href="/blog/dividend-yield-traps-canada/">Dividend yield traps</a></li>
        <li><a href="/blog/covered-call-etfs-canada/">Covered-call ETFs in Canada</a></li>
        <li><a href="/blog/dividend-growth-vs-high-yield-canada/">Dividend growth vs high yield</a></li>
    </ul>

    <div class="cta-section">
        <p><strong>Holding dividend ETFs outside a TFSA? Know the tax.</strong></p>
        <p>The 2026 tax guide covers the gross-up, the dividend tax credit and capital gains distributions.</p>
        <a href="/ebooks/tax-guide/" class="cta-button">Get the 2026 Tax Guide — $49 CAD</a>
    </div>

    ${invFooter("General education about Canadian dividend ETFs as of October 23, 2026. Figures are from each manager's fund page or fact sheet as dated; MERs, holdings and yields change. Naming a fund is not a recommendation. It is not investment or tax advice.")}

</div>`
);
