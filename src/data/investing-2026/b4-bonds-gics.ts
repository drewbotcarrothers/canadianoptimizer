import { invFooter, invPost } from './types';

const XBB_FS = 'https://www.blackrock.com/ca/individual/en/literature/fact-sheet/xbb-ishares-core-canadian-universe-bond-index-etf-fund-fact-sheet-en-ca.pdf';
const XSB_FS = 'https://www.blackrock.com/ca/individual/en/literature/fact-sheet/xsb-ishares-core-canadian-short-term-bond-index-etf-fund-fact-sheet-en-ca.pdf';
const ZAG_FS = 'https://df.bmogam.com/assets/static/etf-profiles-pdfs/BMO%20Aggregate%20Bond%20Index%20ETF_Factsheet_EN_ZAG.pdf';
const EQ_GIC = 'https://www.eqbank.ca/personal-banking/gics';
const CDIC = 'https://www.cdic.ca/depositors/whats-covered/';
const CRA_INT = 'https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/personal-income/line-12100-interest-other-investment-income.html';
const CIPF = 'https://www.cipf.ca/cipf-coverage/about-cipf-coverage';

export const bondEtfsVsGicsCanada = invPost(
  'passive-etf',
  'bond-etfs-vs-gics-canada',
  'Bond ETFs vs GICs: Which Is Better for Your Safe Money?',
  'Bond ETFs vs GICs for the safe side of your portfolio: yield, duration, 2022 losses, CDIC vs CIPF, liquidity, tax and a worked 60/40 example with dated rates.',
  `<div class="container">

    <div class="hook">
        In 2022, a broad Canadian bond ETF lost <span class="highlight">11.78%</span> in a year when stocks also fell. A GIC bought the year before lost nothing on paper. That one year convinced many Canadians that GICs are simply better. The real answer depends on what job the safe side of your portfolio has to do.
    </div>

    <p>GICs suit money you will not need before a fixed date: the rate is locked and CDIC insures eligible deposits up to $100,000 per category at each member. Bond ETFs suit money you may need to rebalance or sell at any time. Their prices move with interest rates, and CDIC does not cover them.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>On September 30, 2026, iShares XBB showed a weighted average yield to maturity of 4.17%. On October 23, 2026, EQ Bank listed a five-year non-registered GIC at 4.30%. The headline yields are close.</li>
            <li>The big difference is price risk. XBB's effective duration was 6.65 years, so a one-point rise in rates would cut its price by roughly 6.65%. A GIC's value does not move on your statement.</li>
            <li>A non-redeemable GIC cannot be sold to rebalance after a stock crash. A bond ETF can be sold on any trading day.</li>
            <li>CDIC covers GICs at member institutions. It does not cover ETFs. CIPF covers missing property if a member dealer fails, not market losses.</li>
            <li>Many investors use both: a GIC ladder for known future spending and a short or broad bond ETF for the rebalancing bucket.</li>
        </ul>
    </div>

    <p>This guide is part of <a href="/category/investing/passive-etf/">Passive and ETF investing</a>, in the <a href="/category/investing/">Investing</a> category. For the GIC side in detail, see <a href="/blog/gic-ladder-canada/">how to build a GIC ladder</a>. For how the bond slice fits a full portfolio, see <a href="/blog/model-etf-portfolios-canada/">model ETF portfolios by risk level</a>.</p>

    <nav aria-label="On this page">
        <ul>
            <li><a href="#job">What job does the safe side of a portfolio do?</a></li>
            <li><a href="#compare">How do bond ETFs and GICs compare?</a></li>
            <li><a href="#rates">What happens when interest rates change?</a></li>
            <li><a href="#yield">Which pays more right now?</a></li>
            <li><a href="#safety">Which is safer if an institution fails?</a></li>
            <li><a href="#tax">How are they taxed?</a></li>
            <li><a href="#example">How would a 60/40 investor split $40,000?</a></li>
            <li><a href="#choose">Which should you choose?</a></li>
            <li><a href="#faq">FAQ</a></li>
        </ul>
    </nav>

    <h2 id="job">What job does the safe side of a portfolio do?</h2>

    <p>In a balanced portfolio, the fixed-income slice has three jobs. It earns a steady return. It cushions the portfolio when stocks fall. And it gives you something to sell, or rebalance from, when stocks are cheap. GICs and bond ETFs do the first job about equally well. They differ sharply on the other two.</p>

    <p>A GIC is a deposit. You lend a bank or credit union a fixed amount for a fixed term at a fixed rate. If you hold to maturity, you know exactly what you will get back. Most GICs are non-redeemable, which means the money is locked until the maturity date.</p>

    <p>A bond ETF holds hundreds or thousands of bonds and trades on the stock exchange like a share. It never matures. Instead, the fund keeps buying new bonds as old ones mature, which keeps its average term roughly constant. You can sell it on any trading day, at whatever the market price is that day.</p>

    <p>If you know the date you need the money, a GIC matches that date. If you don't know when you'll need it, or you want to use it to rebalance, a bond ETF gives you that flexibility. You pay for it by accepting price swings.</p>

    <h2 id="compare">How do bond ETFs and GICs compare?</h2>

    <div class="table-wrapper">
        <table>
            <caption>Bond ETFs vs GICs: key differences (fund figures as at September 30, 2026; GIC rate reviewed October 23, 2026)</caption>
            <thead>
                <tr><th>Feature</th><th>Broad bond ETF (XBB)</th><th>Short-term bond ETF (XSB)</th><th>5-year GIC (EQ Bank, non-registered)</th></tr>
            </thead>
            <tbody>
                <tr><td>Yield figure</td><td>4.17% weighted avg YTM</td><td>3.73% weighted avg YTM</td><td>4.30% fixed rate</td></tr>
                <tr><td>Cost</td><td>MER 0.10%</td><td>MER 0.10%</td><td>None shown; cost is built into the rate</td></tr>
                <tr class="highlight-row"><td>Interest rate sensitivity</td><td>Effective duration 6.65 years</td><td>Effective duration 2.81 years</td><td>None on your statement if held to maturity</td></tr>
                <tr><td>Number of holdings</td><td>1,923</td><td>782</td><td>One issuer</td></tr>
                <tr><td>Can you sell early?</td><td>Yes, any trading day</td><td>Yes, any trading day</td><td>No (non-redeemable)</td></tr>
                <tr><td>2022 calendar return</td><td>-11.78%</td><td>-4.13%</td><td>Rate was locked at purchase</td></tr>
                <tr><td>Deposit insurance</td><td>Not CDIC-eligible</td><td>Not CDIC-eligible</td><td>CDIC-eligible up to $100,000 per category per member</td></tr>
            </tbody>
        </table>
    </div>

    <p>Yield to maturity is the fund's weighted average yield on its bonds before fees. It is a snapshot, not a promise. The ETF's return over the next five years depends on where rates go. The fund fact sheets for <a href="${XBB_FS}">XBB</a> and <a href="${XSB_FS}">XSB</a> give these figures as at September 30, 2026. BMO's <a href="${ZAG_FS}">ZAG</a>, which tracks the same broad market, showed a 0.09% MER, a 4.16% weighted average yield to maturity and a 6.69-year duration on the same date.</p>

    <h2 id="rates">What happens when interest rates change?</h2>

    <p>When interest rates rise, existing bonds with lower coupons become less attractive, so their prices fall. Duration measures how much. A rough rule: for each one percentage point rise in yields, a bond fund's price falls by about its duration in percent. The reverse happens when rates fall.</p>

    <div class="chart-container">
        <h3>Approximate price change on $40,000 if yields rise one percentage point (duration rule of thumb)</h3>
        <div class="bar-chart">
            <div class="bar-item"><div class="bar-label wide">XBB, duration 6.65 years: about -$2,660</div><div class="bar-wrapper"><div class="bar" style="width: 100%;"><span></span></div></div></div>
            <div class="bar-item"><div class="bar-label wide">ZAG, duration 6.69 years: about -$2,676</div><div class="bar-wrapper"><div class="bar" style="width: 100%;"><span></span></div></div></div>
            <div class="bar-item"><div class="bar-label wide">XSB, duration 2.81 years: about -$1,124</div><div class="bar-wrapper"><div class="bar" style="width: 42%;"><span></span></div></div></div>
            <div class="bar-item"><div class="bar-label wide">GIC held to maturity: $0 on your statement</div><div class="bar-wrapper"><div class="bar" style="width: 1%;"><span></span></div></div></div>
        </div>
        <p>Our calculations: $40,000 × duration × 1%. Durations are from the fund fact sheets as at September 30, 2026. The rule is an approximation and ignores the extra income the fund earns at higher yields.</p>
    </div>

    <p>This is what happened in 2022. Yields rose quickly, and XBB's fact sheet shows a calendar-year return of -11.78%. The short-term XSB lost 4.13%. Over the next three years, XBB returned 6.61%, 4.12% and 2.57%. Those numbers show the other half of the story: after rates rise, a bond fund reinvests at the new, higher yields.</p>

    <p>A GIC also loses value when rates rise. You just don't see it, because you cannot sell it. If you lock in at 4.30% and new five-year GICs later pay 5.5%, you are stuck earning less. That opportunity cost is real, even if it never shows up on a statement.</p>

    <div class="tip-box">
        <strong>Match duration to your timeline</strong>
        <p>If a bond fund's duration is shorter than the time until you need the money, rate rises tend to be recovered by higher income over that period. A short-term bond ETF with a duration under three years behaves much more like a GIC ladder than a broad bond fund does.</p>
    </div>

    <h2 id="yield">Which pays more right now?</h2>

    <p>On the dates we checked, the five-year GIC rate was a little higher than the broad bond ETF's yield to maturity. Here are EQ Bank's non-registered GIC rates as listed on October 23, 2026. Rates change often, and other banks will differ.</p>

    <div class="table-wrapper">
        <table>
            <caption>EQ Bank non-registered GIC rates, as listed October 23, 2026</caption>
            <thead>
                <tr><th>Term</th><th>Rate</th><th>Compare with</th></tr>
            </thead>
            <tbody>
                <tr><td>1 year</td><td>3.70%</td><td>XSB weighted avg YTM 3.73% (Sept. 30, 2026)</td></tr>
                <tr><td>2 years</td><td>4.00%</td><td></td></tr>
                <tr class="highlight-row"><td>3 years</td><td>4.15%</td><td>XSB duration is 2.81 years</td></tr>
                <tr><td>4 years</td><td>4.20%</td><td></td></tr>
                <tr><td>5 years</td><td>4.30%</td><td>XBB weighted avg YTM 4.17% (Sept. 30, 2026)</td></tr>
            </tbody>
        </table>
    </div>

    <p>Two things make the comparison less simple than it looks. First, the ETF figures are before the 0.10% MER, so net of fees they are a bit lower. Second, a broad bond ETF holds bonds out to 30 years. Its weighted average maturity was 9.40 years, so it is not the same bet as a five-year GIC. A three-year GIC against the short-term XSB is a closer match. On the dates checked, the GIC paid more.</p>

    <p>Why would anyone choose the ETF, then? Because the GIC's extra yield is payment for giving up access. The ETF lets you sell on any trading day. That is worth something, especially for rebalancing.</p>

    <h2 id="safety">Which is safer if an institution fails?</h2>

    <p>These are different protections for different risks. <a href="${CDIC}">CDIC</a> says it insures eligible deposits, including GICs, at member institutions. Each category is insured separately up to $100,000, including principal and interest. The categories include deposits in one name, joint deposits, and deposits in an RRSP, RRIF, TFSA, RDSP, RESP and FHSA. CDIC lists ETFs, stocks, bonds and mutual funds as not eligible.</p>

    <p><a href="${CIPF}">CIPF</a> protects you if your investment dealer becomes insolvent and your property is missing. For an individual, the limit is generally $1 million for all general accounts combined, plus $1 million for registered retirement accounts, plus $1 million for RESPs. CIPF states that it does not cover a drop in the value of your investments, for any reason.</p>

    <p>For a bond ETF, the main risks are interest rates and the credit of the bond issuers. About a third of XBB was Government of Canada bonds at September 30, 2026, per its fact sheet. For a GIC, the risk is the issuing bank. That is why CDIC limits matter if you hold more than $100,000 at one institution in one category.</p>

    <div class="warning-box">
        <strong>GICs bought through your broker</strong>
        <p>When you buy a GIC through a brokerage account, CDIC coverage depends on the issuing bank, not the broker. A GIC from a bank where you already hold deposits in the same category counts toward the same $100,000 limit.</p>
    </div>

    <h2 id="tax">How are they taxed?</h2>

    <p>In a non-registered account, GIC interest is fully taxable as interest income. Most of a bond ETF's distributions are also interest, taxed the same way. Bond ETFs can also pay out capital gains, and the fund's price can rise or fall. You report the gain or loss when you sell.</p>

    <p>Inside a TFSA, RRSP or FHSA, none of this is taxed as it happens, so the tax comparison mostly disappears. Because interest is taxed at your full marginal rate, many investors put fixed income in registered accounts first. Our <a href="/blog/diy-etf-portfolio-asset-location-canada/">asset location guide</a> covers which account to fill first.</p>

    <p>One detail: a GIC that pays interest at maturity still has interest accruing each year for tax. The <a href="${CRA_INT}">CRA's line 12100 page</a> explains that for investment contracts such as multi-year GICs, you report the interest that accrues each year, even before you receive it.</p>

    <h2 id="example">How would a 60/40 investor split $40,000?</h2>

    <div class="example-box">
        <strong>Illustrative example: Lena, 52, Halifax</strong>
        <p>Lena has $100,000 in a 60/40 portfolio: $60,000 in an all-equity ETF and $40,000 for the safe side. She will need $20,000 for a kitchen renovation in about three years. The rest is long-term retirement money that she rebalances once a year.</p>
        <div class="example-calculation">
            <div class="line"><span>Known spending in 3 years: 3-year GIC at 4.15%</span><span>$20,000</span></div>
            <div class="line"><span>Value at maturity, interest compounded annually (our calculation)</span><span>about $22,595</span></div>
            <div class="line"><span>Rebalancing bucket: broad bond ETF (XBB or ZAG)</span><span>$20,000</span></div>
            <div class="line"><span>Price effect of a 1-point rate rise on that $20,000</span><span>about -$1,330</span></div>
            <div class="line total"><span>Result</span><span>The renovation money is fixed; the rest can be sold to rebalance</span></div>
        </div>
        <p>If stocks fall 30% next year, Lena can sell part of the bond ETF to buy equities and get back to 60/40. Her GIC stays put for the renovation. Rates are those listed on the dates shown; future returns on the ETF are not known.</p>
    </div>

    <p>A five-rung GIC ladder is another option for the whole $40,000: $8,000 each at one, two, three, four and five years. At the EQ Bank rates above, that averages 4.07% and pays about $1,628 of interest in the first year. Each year a rung matures and can be rolled into a new five-year GIC or used to rebalance. The catch is that only one-fifth of the money is available each year.</p>

    <h2 id="choose">Which should you choose?</h2>

    <div class="flowchart">
        <div class="flow-node decision">Do you know the date you will spend this money?</div>
        <div class="flow-arrow"></div>
        <div class="flow-branch-container">
            <div class="flow-node result">Yes, within about 5 years: a GIC or GIC ladder matched to that date</div>
            <div class="flow-node decision">No: will you rebalance into stocks after a crash?</div>
        </div>
        <div class="flow-arrow"></div>
        <div class="flow-branch-container">
            <div class="flow-node result">Yes: a bond ETF; pick short-term if price swings would make you sell</div>
            <div class="flow-node result">No, and price drops would worry you: a GIC ladder with yearly maturities</div>
        </div>
    </div>

    <p>Some practical points:</p>
    <ul>
        <li><strong>All-in-one ETFs already hold bonds.</strong> If you own an all-in-one ETF portfolio, its bond slice is a bond index fund. Adding GICs on top shifts your overall mix. See <a href="/blog/all-in-one-etfs-vs-diy-canada/">all-in-one ETFs vs DIY</a>.</li>
        <li><strong>Stay under CDIC limits.</strong> Spread large GIC holdings across member institutions or categories.</li>
        <li><strong>Watch the redeemable trap.</strong> Cashable GICs usually pay less. If you want access, a bond ETF or a high-interest savings ETF may do the job better. See <a href="/blog/cash-vs-psa-vs-cbil-hisa-etf/">cash ETFs compared</a>.</li>
        <li><strong>Don't chase the last year.</strong> 2022 was unusual. Bond funds have also delivered gains in years when stocks fell.</li>
    </ul>

    <h2>Does your province change anything?</h2>
    <p>Not the products. CDIC is federal and applies to member banks across Canada. Many credit unions are provincially regulated and covered instead by provincial deposit insurance, with their own limits and rules. Check the insurer for your credit union. Interest is taxed at your combined federal and provincial rate, so the after-tax gap between registered and non-registered accounts is wider in higher-tax provinces.</p>

    <h2>Checklist</h2>
    <ul class="checklist">
        <li>Split your safe money into "known date" and "rebalancing" buckets</li>
        <li>Known-date money in GICs matched to the date</li>
        <li>Rebalancing money in a bond ETF whose duration you can live with</li>
        <li>GIC totals per institution and category under CDIC limits</li>
        <li>Fixed income held in registered accounts first where possible</li>
        <li>GIC rates and fund yields compared on the same day</li>
    </ul>

    <h2 id="faq">Frequently asked questions</h2>

    <h3>Are bond ETFs safer than GICs?</h3>
    <p>No. A GIC held to maturity has no price swings and CDIC insures eligible GICs at member institutions. A bond ETF can lose value, as XBB did in 2022, but it can be sold any trading day.</p>

    <h3>Can a bond ETF lose money over five years?</h3>
    <p>Yes, it can. Rising rates cause losses up front, which higher income then makes up over roughly the fund's duration. A five-year loss is less likely in a short-term fund than a long-term one.</p>

    <h3>Is CDIC coverage available for bond ETFs?</h3>
    <p>No. CDIC lists ETFs, stocks and bonds as ineligible. CIPF may cover missing property if your dealer fails, but not market losses.</p>

    <h3>What is a good duration for a bond ETF?</h3>
    <p>Match it roughly to your time horizon. Short-term funds have durations around three years. Broad universe funds were near 6.7 years in September 2026.</p>

    <h3>Should I hold GICs in my TFSA?</h3>
    <p>You can, and interest inside a TFSA is not taxed. But TFSA room is also valuable for growth assets. Many investors hold fixed income in an RRSP first.</p>

    <h3>Why did bond ETFs fall in 2022?</h3>
    <p>Interest rates rose quickly. When yields rise, existing bond prices fall. XBB's fact sheet shows -11.78% for calendar 2022.</p>

    <h3>Is a GIC ladder better than a bond ETF?</h3>
    <p>It is more predictable, and the rate may be higher. A bond ETF is more flexible and broader. A ladder suits known spending; an ETF suits rebalancing.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="${XBB_FS}">BlackRock Canada: iShares Core Canadian Universe Bond Index ETF (XBB) fact sheet</a>, data as at September 30, 2026, reviewed October 23, 2026</li>
        <li><a href="${XSB_FS}">BlackRock Canada: iShares Core Canadian Short Term Bond Index ETF (XSB) fact sheet</a>, data as at September 30, 2026, reviewed October 23, 2026</li>
        <li><a href="${ZAG_FS}">BMO Global Asset Management: BMO Aggregate Bond Index ETF (ZAG) fact sheet</a>, data as at September 30, 2026, reviewed October 23, 2026</li>
        <li><a href="${EQ_GIC}">EQ Bank: GIC rates</a>, reviewed October 23, 2026</li>
        <li><a href="${CDIC}">CDIC: What's covered</a>, reviewed October 23, 2026</li>
        <li><a href="${CIPF}">CIPF: About CIPF coverage</a>, reviewed October 23, 2026</li>
        <li><a href="${CRA_INT}">CRA: Line 12100, Interest and other investment income</a>, reviewed October 23, 2026</li>
        <li>Duration effects, GIC maturity value and ladder averages: our calculations, as shown</li>
    </ul>

    <h2>Related reading</h2>
    <ul>
        <li><a href="/blog/gic-ladder-canada/">How to build a GIC ladder</a></li>
        <li><a href="/blog/cdic-coverage-explained-canada/">CDIC coverage, explained</a></li>
        <li><a href="/blog/model-etf-portfolios-canada/">Model ETF portfolios by risk level</a></li>
        <li><a href="/blog/couch-potato-portfolio-canada/">Couch potato investing in Canada</a></li>
    </ul>

    <div class="cta-section">
        <p><strong>Interest is taxed at your full rate. Put it in the right account.</strong></p>
        <p>The 2026 tax guide explains how interest, dividends and capital gains are taxed, and which accounts shelter them best.</p>
        <a href="/ebooks/tax-guide/" class="cta-button">Get the 2026 Tax Guide — $49 CAD</a>
    </div>

    ${invFooter("General education about fixed income as of October 23, 2026. Fund figures are from the providers' fact sheets dated September 30, 2026, and GIC rates are from one bank's page on October 23, 2026; both change often. Duration effects are approximations. It is not investment or tax advice.")}

</div>`
);
