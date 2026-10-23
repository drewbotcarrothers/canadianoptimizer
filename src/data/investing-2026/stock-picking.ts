import { invFooter, invPost } from './types';

const CRA_LOSSES = 'https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/personal-income/line-12700-capital-gains/capital-losses-deductions.html';
const CRA_TFSA_TAX = 'https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/tax-free-savings-account-tfsa-issuers/taxes.html';
const GSAM_EVAL = 'https://www.getsmarteraboutmoney.ca/learning-path/stocks/how-to-evaluate-companies-when-buying-stock/';

export const howToPickStocksCanada = invPost(
  'stock-picking',
  'how-to-pick-stocks-canada',
  "How to Pick Stocks in Canada: A DIY Investor's Framework",
  'Pick stocks in Canada by reading the filings on SEDAR+, valuing the business, capping each position, writing sell rules, and holding it in the right account.',
  `<div class="container">

    <div class="hook">
        Picking a stock means three decisions: what to buy, how much to buy, and which account to hold it in. <span class="highlight">Half of a capital gain is taxable, and a loss is denied if you buy the shares back within 30 days</span> (CRA). Most DIY investors only plan the first decision. This framework covers all three.
    </div>

    <p>To pick stocks in Canada, read the company's filings on SEDAR+, judge whether it can keep growing cash flow, and compare its price with peers using P/E, P/S, or P/B. Limit each position's size, and write a sell rule before you buy. Hold it in the right account, because the CRA taxes 50% of gains in taxable accounts in 2026.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>Start with the filings, not the chart. Canadian public companies file their annual reports, MD&amp;A, and annual information forms on SEDAR+.</li>
            <li>Use ratios such as P/E, P/S, and P/B to compare a company with its peers and its own history. No single ratio tells you whether a stock is cheap.</li>
            <li>Position size limits the damage from being wrong. A 50% drop in a 5% position costs the portfolio 2.5%.</li>
            <li>The CRA says a TFSA that carries on a business is taxable on that income. Frequent short-term trading in a TFSA has been taxed in court.</li>
            <li>Capital losses only count in a taxable account. They can be carried back 3 years or forward indefinitely, and the 30-day superficial loss rule applies.</li>
        </ul>
    </div>

    <p>This is the pillar for <a href="/category/investing/stock-picking/">DIY Stock Picking</a>, part of the <a href="/category/investing/">Investing</a> category. It is for investors who want to own individual companies and are willing to read what those companies file. If you would rather own the whole market, start with <a href="/blog/couch-potato-portfolio-canada/">couch potato investing</a>.</p>

    <nav aria-label="On this page">
        <ul>
            <li><a href="#should">Should you pick stocks at all?</a></li>
            <li><a href="#read">Where do you find what a company actually reports?</a></li>
            <li><a href="#quality">How do you judge the business?</a></li>
            <li><a href="#value">How do you tell if the price is reasonable?</a></li>
            <li><a href="#size">How much should you put in one stock?</a></li>
            <li><a href="#sell">When should you sell?</a></li>
            <li><a href="#account">Which account should hold individual stocks?</a></li>
            <li><a href="#records">What records do you need?</a></li>
            <li><a href="#faq">FAQ</a></li>
        </ul>
    </nav>

    <h2 id="should">Should you pick stocks at all?</h2>

    <p>Pick stocks only if you will do the reading and keep the records. Even then, most DIY investors are best off with an index-fund core and individual stocks as a smaller part, often called a satellite. You are competing against professionals who read the same filings full time. An index fund owns every company and gives you the market's return, minus a small fee. Your picks need to beat that return after costs and taxes for the effort to pay off.</p>

    <div class="table-wrapper">
        <table>
            <caption>Three ways to own stocks, compared</caption>
            <thead>
                <tr><th>Approach</th><th>Work required</th><th>Main risk</th><th>Fits when</th></tr>
            </thead>
            <tbody>
                <tr><td>Index ETFs only</td><td>Minutes a year</td><td>You get the market's return, including its bad years</td><td>You want the result without the research</td></tr>
                <tr class="highlight-row"><td>Index core + stock satellite (e.g. 80/20)</td><td>A few hours per holding per year</td><td>The satellite trails the market; the damage is limited by its size</td><td>You enjoy research and want limited downside if you are wrong</td></tr>
                <tr><td>All individual stocks</td><td>Ongoing, at least 15–25 holdings to diversify</td><td>Concentration, behaviour, and record-keeping errors</td><td>You treat it as a serious, ongoing commitment</td></tr>
            </tbody>
        </table>
    </div>

    <h2 id="read">Where do you find what a company actually reports?</h2>

    <p>In its filings. Canadian public companies file on <a href="https://www.sedarplus.ca/">SEDAR+</a>. US companies file on the SEC's EDGAR system. Read four documents before you buy:</p>

    <div class="table-wrapper">
        <table>
            <caption>What to read before you buy, and what it tells you</caption>
            <thead>
                <tr><th>Document</th><th>Where</th><th>What to look for</th></tr>
            </thead>
            <tbody>
                <tr><td>Annual financial statements</td><td>SEDAR+</td><td>Revenue, earnings, cash flow from operations, debt, and the notes on one-time items</td></tr>
                <tr><td>MD&amp;A (management's discussion and analysis)</td><td>SEDAR+</td><td>Management's explanation of results, the risks it names, and its capital plans</td></tr>
                <tr><td>Annual information form (AIF)</td><td>SEDAR+</td><td>How the business makes money, where it operates, and the risk factors</td></tr>
                <tr><td>Management information circular</td><td>SEDAR+</td><td>How executives are paid, and whether that rewards per-share results or just size</td></tr>
            </tbody>
        </table>
    </div>

    <p>Read last year's MD&amp;A next to this year's. What management promised, and what it later explained away, tells you more than any single number.</p>

    <h2 id="quality">How do you judge the business?</h2>

    <p>Ask whether the company can keep earning more cash than it needs to stay in business, for years. That comes down to four questions. Answer each one in writing.</p>

    <div class="step-section">
        <div class="step">
            <div class="step-number">1</div>
            <div>
                <div class="step-title">How does it make money?</div>
                <p>Explain it in two sentences: who pays, for what, and why they come back. If you cannot, stop here.</p>
            </div>
        </div>
        <div class="step">
            <div class="step-number">2</div>
            <div>
                <div class="step-title">What protects it?</div>
                <p>Switching costs, regulation, scale, a network, or a brand. Then name what could break that protection.</p>
            </div>
        </div>
        <div class="step">
            <div class="step-number">3</div>
            <div>
                <div class="step-title">Is the balance sheet safe?</div>
                <p>Compare debt with cash flow, and check when the debt has to be repaid. A good business with too much debt can still fail.</p>
            </div>
        </div>
        <div class="step">
            <div class="step-number">4</div>
            <div>
                <div class="step-title">Does management allocate capital well?</div>
                <p>Track what it did with cash over five years: reinvestment, acquisitions, buybacks, and dividends. Then check whether results per share improved.</p>
            </div>
        </div>
    </div>

    <h2 id="value">How do you tell if the price is reasonable?</h2>

    <p>Compare the price with what the business earns, sells, and owns, and then with similar companies. GetSmarterAboutMoney, the Ontario Securities Commission's investor site, explains three common ratios: <a href="${GSAM_EVAL}">price-to-earnings, price-to-sales, and price-to-book</a>. Each one can mislead on its own.</p>

    <div class="table-wrapper">
        <table>
            <caption>Valuation ratios: what they show and when they mislead</caption>
            <thead>
                <tr><th>Ratio</th><th>Calculation</th><th>Useful for</th><th>Misleads when</th></tr>
            </thead>
            <tbody>
                <tr><td>P/E</td><td>Share price ÷ earnings per share</td><td>Steady, profitable businesses</td><td>Earnings are temporarily high or low, or include one-time gains</td></tr>
                <tr><td>P/S</td><td>Market value ÷ annual revenue</td><td>Young companies with little profit yet</td><td>Profit margins are thin; revenue is not profit</td></tr>
                <tr><td>P/B</td><td>Share price ÷ book value per share</td><td>Banks and insurers, where assets are mostly financial</td><td>Value comes from brands or software that are not on the balance sheet</td></tr>
                <tr><td>Earnings yield</td><td>EPS ÷ share price (P/E inverted)</td><td>Comparing with a GIC or bond yield</td><td>Earnings are about to change sharply</td></tr>
            </tbody>
        </table>
    </div>

    <div class="example-box">
        <strong>Illustration: a quick valuation check</strong>
        <div class="example-calculation">
            <div class="line"><span>Share price</span><span>$30.00</span></div>
            <div class="line"><span>Earnings per share, last 12 months</span><span>$2.00</span></div>
            <div class="line"><span>P/E = $30 ÷ $2</span><span>15</span></div>
            <div class="line total"><span>Earnings yield = $2 ÷ $30</span><span>6.7%</span></div>
        </div>
        <p>A hypothetical company. A P/E of 15 is neither cheap nor expensive until you compare it with peers, the company's own history, and how fast earnings can grow. If earnings are expected to shrink, 15 may be expensive. If they will grow steadily for a decade, it may be cheap.</p>
    </div>

    <h2 id="size">How much should you put in one stock?</h2>

    <p>Set a maximum before you buy. Many DIY investors cap a single stock at 5% of the portfolio, and the whole satellite at 10% to 30%. The cap matters because some of your picks will be wrong.</p>

    <div class="chart-container">
        <h3>Portfolio loss if one stock falls 50%, by position size (illustrative example)</h3>
        <div class="bar-chart">
            <div class="bar-item"><div class="bar-label wide">2% position: -1%</div><div class="bar-wrapper"><div class="bar" style="width: 10%;"><span></span></div></div></div>
            <div class="bar-item"><div class="bar-label wide">5% position</div><div class="bar-wrapper"><div class="bar" style="width: 25%;"><span>-2.5%</span></div></div></div>
            <div class="bar-item"><div class="bar-label wide">10% position</div><div class="bar-wrapper"><div class="bar" style="width: 50%;"><span>-5%</span></div></div></div>
            <div class="bar-item"><div class="bar-label wide">20% position</div><div class="bar-wrapper"><div class="bar" style="width: 100%;"><span>-10%</span></div></div></div>
        </div>
        <p>Portfolio loss = position size × 50%. At a 5% position, a stock falling by half costs the portfolio 2.5%. At 20%, it costs 10%. This is arithmetic, not a forecast for any stock.</p>
    </div>

    <div class="chart-container">
        <h3>Gain needed to recover from a loss (illustrative example)</h3>
        <div class="bar-chart">
            <div class="bar-item"><div class="bar-label wide">Fall 10%: +11.1%</div><div class="bar-wrapper"><div class="bar" style="width: 3.7%;"><span></span></div></div></div>
            <div class="bar-item"><div class="bar-label wide">Fall 25%: +33.3%</div><div class="bar-wrapper"><div class="bar" style="width: 11.1%;"><span></span></div></div></div>
            <div class="bar-item"><div class="bar-label wide">Fall 50%</div><div class="bar-wrapper"><div class="bar" style="width: 33.3%;"><span>+100%</span></div></div></div>
            <div class="bar-item"><div class="bar-label wide">Fall 75%</div><div class="bar-wrapper"><div class="bar" style="width: 100%;"><span>+300%</span></div></div></div>
        </div>
        <p>Recovery gain = 1 ÷ (1 − loss) − 1. A 50% loss needs a 100% gain just to get back to where you started. That is why it matters more to avoid large losses than to find the biggest winner.</p>
    </div>

    <h2 id="sell">When should you sell?</h2>

    <p>Sell when the reason you bought is no longer true, or when the position grows past your cap. Do not sell just because the price fell or rose. Write your reason for buying in one paragraph on the day you buy. Then use this decision tree.</p>

    <div class="flowchart">
        <div class="flow-node decision">Is the reason you bought still true, according to the latest filings?</div>
        <div class="flow-arrow"></div>
        <div class="flow-branch-container">
            <div class="flow-node result">No: sell, whether you are up or down</div>
            <div class="flow-node decision">Yes: is the position above your cap?</div>
        </div>
        <div class="flow-arrow"></div>
        <div class="flow-branch-container">
            <div class="flow-node result">Yes: trim back to the cap (in a taxable account, check the gain first)</div>
            <div class="flow-node result">No: hold, and check again at the next annual report</div>
        </div>
    </div>

    <div class="example-box">
        <strong>Template: a buy note (fill in the blanks)</strong>
        <p>"I am buying [company] at [price] on [date], as [x]% of my portfolio, because [how it makes money] and [what protects it]. I expect [measurable result, for example revenue per customer rising] by [date]. I will sell if [specific event: dividend cut, debt above a set level, losing a key customer]. I will trim if the position goes above [cap]%."</p>
    </div>

    <h2 id="account">Which account should hold individual stocks?</h2>

    <p>A TFSA suits long-term holdings you expect to grow a lot, because the gain is tax-free. A taxable account is the only place where a capital loss can be used, and where Canadian eligible dividends get the dividend tax credit. An RRSP shelters growth but taxes every withdrawal as income. US stocks held directly in an RRSP can be exempt from US withholding on dividends.</p>

    <div class="warning-box">
        <strong>A TFSA is not for frequent trading.</strong> The CRA states that if a TFSA <a href="${CRA_TFSA_TAX}">carries on a business</a>, the TFSA trust is taxable on that business income and gains. In <em>Ahamed v. The King</em> (2023 TCC 17), frequent short-term trading in a TFSA was found to be a business and taxed. In 2024, the Federal Court of Appeal dismissed the trustee's appeal. It held that a TFSA trust carrying on a business of trading is taxable even when every investment is a qualified one (<em>Canadian Western Trust Company v. The King</em>, 2024 FCA 108). Hold long-term in a TFSA, and trade elsewhere if you trade at all.
    </div>

    <div class="table-wrapper">
        <table>
            <caption>How each account treats a stock picker's results. Source: CRA pages, reviewed October 23, 2026</caption>
            <thead>
                <tr><th>Account</th><th>Gains</th><th>Losses</th><th>Watch out for</th></tr>
            </thead>
            <tbody>
                <tr><td>TFSA</td><td>Tax-free</td><td>Not deductible, and the room is not restored</td><td>Business-like trading; foreign withholding tax</td></tr>
                <tr><td>RRSP</td><td>Not taxed until withdrawn, then taxed as income</td><td>Not deductible</td><td>Losing room permanently when a holding falls</td></tr>
                <tr class="highlight-row"><td>Non-registered</td><td>50% of the gain is taxable</td><td>50% is an allowable loss; carry back 3 years or forward indefinitely</td><td>Superficial loss rule; ACB records</td></tr>
            </tbody>
        </table>
    </div>

    <p>The CRA's <a href="${CRA_LOSSES}">capital losses page</a> sets out the 50% inclusion rate that has applied since 2001, the three-year carryback, and the indefinite carryforward. It also describes the superficial loss rule: a loss is denied if you, or an affiliated person such as your spouse, buy identical property within 30 days before or after the sale and still hold it 30 days after. The denied loss is added to the ACB of the shares you bought back. The full rules are in the <a href="/blog/superficial-loss-rule-canada/">superficial loss guide</a>. Timing is in the <a href="/blog/tax-loss-harvesting-calendar-canada/">tax-loss harvesting calendar</a>.</p>

    <p>Provinces: the federal capital gains rules apply everywhere, and your province taxes the included half at its own rates. Quebec residents also report the gain on their Revenu Québec return. Securities regulation is provincial. Your regulator is the OSC in Ontario, the BCSC in British Columbia, the AMF in Quebec, and so on, all coordinated by the Canadian Securities Administrators.</p>

    <h2 id="records">What records do you need?</h2>

    <p>An ACB record for each holding in a taxable account, updated with every purchase, sale, reinvested dividend, and return of capital. Your broker's T5008 slip is not a complete ACB record. Use the <a href="/blog/adjusted-cost-base-canada-guide/">adjusted cost base guide</a> to keep one.</p>

    <div class="diagram">
        <div class="diagram-step">Buy: record date, shares, price, and commission</div>
        <div class="diagram-arrow"></div>
        <div class="diagram-step light">Hold: add reinvested dividends; subtract return of capital</div>
        <div class="diagram-arrow"></div>
        <div class="diagram-step">Sell: proceeds minus (ACB per share × shares sold) minus costs</div>
        <div class="diagram-arrow"></div>
        <div class="diagram-step light">File: report on Schedule 3; 50% of the net gain is taxable</div>
    </div>

    <div class="warning-box">
        <strong>Common mistakes</strong>
        <ul>
            <li>Buying because the price fell, without reading the filings.</li>
            <li>Averaging down into a stock whose reason for buying has already broken.</li>
            <li>Letting one winner grow to 30% of the portfolio without deciding to.</li>
            <li>Selling at a loss and buying back within 30 days, including in your spouse's account.</li>
            <li>Day trading in a TFSA.</li>
            <li>Relying on the broker's book value instead of your own ACB record.</li>
        </ul>
    </div>

    <h2>Checklist</h2>
    <ul class="checklist">
        <li>Annual report, MD&amp;A, and AIF read on SEDAR+</li>
        <li>The four business questions answered in writing</li>
        <li>Valuation compared with peers and with the company's own history</li>
        <li>Position cap and satellite cap written down</li>
        <li>Buy note saved, with a sell rule</li>
        <li>Account chosen deliberately; ACB record started for taxable holdings</li>
    </ul>

    <p>When to get help: if you trade often, hold large positions in a single company, or use a TFSA in a way that could look like a business, ask a CPA or tax lawyer before the CRA asks you.</p>

    <h2 id="faq">Frequently asked questions</h2>

    <h3>How many stocks should I own?</h3>
    <p>If stocks are your whole portfolio, enough to spread risk across sectors, often 15 to 25 or more. If they are a satellite around an index fund, a handful is fine because the index provides the diversification.</p>

    <h3>Is a low P/E stock a good buy?</h3>
    <p>Not on its own. A low P/E often means the market expects earnings to fall. Compare with peers and the company's own history, and read the MD&amp;A for the reason.</p>

    <h3>Can I day trade in my TFSA?</h3>
    <p>The CRA can tax a TFSA that carries on a business, and the courts have upheld that for frequent short-term trading. Trade long-term in a TFSA.</p>

    <h3>What happens to a capital loss I cannot use this year?</h3>
    <p>In a taxable account, a net capital loss can be carried back three years or forward indefinitely against taxable capital gains, using Schedule 3 or Form T1A for a carryback.</p>

    <h3>Should I buy Canadian or US stocks?</h3>
    <p>Either can work. Canadian eligible dividends get the dividend tax credit in a taxable account. US stocks add sectors the TSX lacks, but they involve currency conversion and US withholding tax on dividends. Read the <a href="/blog/us-withholding-tax-by-account-canada/">withholding tax guide</a>.</p>

    <h3>Where can I check whether a broker or advisor is registered?</h3>
    <p>Use the Canadian Securities Administrators' National Registration Search at <a href="https://www.aretheyregistered.ca/">aretheyregistered.ca</a>.</p>

    <h3>Do I need to report every trade?</h3>
    <p>Every sale in a taxable account is reported on Schedule 3, with your own ACB. Trades inside a TFSA or RRSP are not reported, unless the CRA treats the TFSA activity as a business.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="${CRA_LOSSES}">CRA: Capital losses</a> (inclusion rate, carryback and carryforward, superficial loss), reviewed October 23, 2026</li>
        <li><a href="${CRA_TFSA_TAX}">CRA: TFSA issuers, tax implications</a> (TFSA carrying on a business), reviewed October 23, 2026</li>
        <li><a href="${GSAM_EVAL}">GetSmarterAboutMoney (OSC): How to evaluate companies when buying stock</a>, reviewed October 23, 2026</li>
        <li><a href="https://www.sedarplus.ca/">SEDAR+</a> and <a href="https://www.aretheyregistered.ca/">CSA National Registration Search</a></li>
        <li><em>Ahamed v. The King</em>, 2023 TCC 17; <em>Canadian Western Trust Company v. The King</em>, 2024 FCA 108</li>
    </ul>

    <h2>Related reading</h2>
    <ul>
        <li><a href="/blog/adjusted-cost-base-canada-guide/">Adjusted cost base guide</a></li>
        <li><a href="/blog/superficial-loss-rule-canada/">Superficial loss rule</a></li>
        <li><a href="/blog/tax-loss-harvesting-calendar-canada/">Tax-loss harvesting calendar</a></li>
        <li><a href="/blog/should-canadians-sell-us-stocks/">Should Canadians sell US stocks?</a></li>
        <li><a href="/blog/dividend-investing-canada/">Dividend investing in Canada</a></li>
    </ul>

    <div class="cta-section">
        <p><strong>Every sale in a taxable account ends up on your tax return.</strong></p>
        <p>The 2026 tax guide covers capital gains and losses from the filing side.</p>
        <a href="/ebooks/tax-guide/" class="cta-button">Get the 2026 Tax Guide — $49 CAD</a>
    </div>

    ${invFooter('General education about researching and holding individual stocks in Canada as of October 23, 2026. It is not a recommendation to buy, sell, or hold any security, and not investment, tax, or legal advice. Companies, prices, and ratios in the examples are hypothetical. Tax rules are from the CRA pages listed in Sources; confirm them for your tax year, and consult a tax professional about your own trading.')}

</div>`
);
