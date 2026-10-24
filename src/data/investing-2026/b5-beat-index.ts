import { invFooter, invPost } from './types';

const CIRO = 'https://www.ciro.ca/office-investor/investing-basics/understanding-investment-performance-returns';
const NSSC = 'https://nssc.novascotia.ca/before-you-invest/crm2-statements-annual-performance-report';

export const beatingTheIndexPortfolioReturnCanada = invPost(
  'stock-picking',
  'beating-the-index-portfolio-return-canada',
  'Are You Beating the Index? Measuring Your Real Return',
  'CIRO requires money-weighted returns on your annual report. How that differs from time-weighted fund returns, with a worked example of labelled cash flows.',
  `<div class="container">

    <div class="hook">
        Your ETF gained 12%. Your account shows 7%. Both can be right. <span class="highlight">Money-weighted and time-weighted returns</span> answer different questions.
    </div>

    <p>CIRO dealers must use a money-weighted rate of return when telling you about investment performance. That number includes the timing and size of your deposits and withdrawals. Fund fact sheets and index returns are closer to time-weighted measures of the investments themselves. Comparing them without adjusting for cash flows is how people falsely conclude they are geniuses or failures.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>Money-weighted return (MWRR) = your personal experience, including when you added or removed cash.</li>
            <li>Time-weighted return (TWRR) = how the investments performed between cash flows; better for comparing to an index or fund.</li>
            <li>CIRO requires MWRR on the performance story dealers tell you.</li>
            <li>Annual reports also show opening value, deposits, withdrawals, change in market value and closing value.</li>
            <li>To ask "did I beat the index?", compare a time-weighted figure to the index, or compare your MWRR to a personal benchmark that includes your cash flows.</li>
        </ul>
    </div>

    <p>This guide is part of <a href="/category/investing/stock-picking/">Stock picking</a>. For fees that drag returns, see <a href="/blog/total-cost-reporting-canada/">total cost reporting</a>.</p>

    <nav aria-label="On this page">
        <ul>
            <li><a href="#two">What is the difference between the two returns?</a></li>
            <li><a href="#report">What must your annual performance report show?</a></li>
            <li><a href="#beat">How do you fairly ask if you beat the index?</a></li>
            <li><a href="#example">Worked example with labelled cash flows</a></li>
            <li><a href="#faq">FAQ</a></li>
        </ul>
    </nav>

    <h2 id="two">What is the difference between the two returns?</h2>
    <div class="table-wrapper">
        <table>
            <caption>Money-weighted vs time-weighted returns</caption>
            <thead><tr><th>Feature</th><th>Money-weighted (MWRR)</th><th>Time-weighted (TWRR)</th></tr></thead>
            <tbody>
                <tr class="highlight-row"><td>Includes your deposit timing?</td><td>Yes</td><td>No (removed)</td></tr>
                <tr><td>Best for</td><td>Am I on track for my goals?</td><td>Did the portfolio beat the index?</td></tr>
                <tr><td>CIRO dealer reporting</td><td>Required</td><td>Optional / other contexts</td></tr>
                <tr><td>Fund fact sheet style</td><td>Not the usual presentation</td><td>Closer match</td></tr>
            </tbody>
        </table>
    </div>
    <p><a href="${CIRO}">CIRO's investor page</a> states that dealers must use a money-weighted rate of return when telling you about investment performance, and that you should ask if you are unsure which number you are looking at.</p>

    <h2 id="report">What must your annual performance report show?</h2>
    <p>Under the Client Relationship Model rules, annual performance reports typically include market values, deposits, withdrawals, change in value, and annualized returns for standard periods (1, 3, 5, 10 years and since opening when available), calculated with a money-weighted method. Provincial investor education pages, such as the <a href="${NSSC}">Nova Scotia Securities Commission's CRM2 explainer</a>, walk through that layout.</p>

    <div class="flowchart">
        <div class="flow-node decision">Are you judging the investments or your timing?</div>
        <div class="flow-arrow"></div>
        <div class="flow-branch-container">
            <div class="flow-node result">Investments vs index: use TWRR or fund/index returns</div>
            <div class="flow-node result">Your goals: use the MWRR on your annual report</div>
        </div>
    </div>

    <h2 id="beat">How do you fairly ask if you beat the index?</h2>
    <p>Pick a benchmark that matches what you own (for example a Canadian equity index for a Canadian equity sleeve, or a blended benchmark for a 60/40). Compare time-weighted portfolio returns to that benchmark over the same period. Do not compare your MWRR after a large mid-year deposit to the index's calendar return and call it skill.</p>
    <p>Fees matter. A portfolio that matches the index before costs will lag after MER and trading costs. Total cost reporting will make the dollar cost clearer from 2027 statements onward.</p>

    <div class="chart-container">
        <p class="chart-title">Same market, different personal returns (illustration)</p>
        <div class="bar-chart">
            <div class="bar-group"><div class="bar" style="height:80%"></div><span class="bar-label">Index<br>+10%</span></div>
            <div class="bar-group"><div class="bar" style="height:56%"></div><span class="bar-label">Late buyer<br>+7%</span></div>
            <div class="bar-group"><div class="bar" style="height:96%"></div><span class="bar-label">Early buyer<br>+12%</span></div>
        </div>
        <p class="chart-source">Illustration of how cash-flow timing changes money-weighted results when the market path is identical. Not measured client data.</p>
    </div>

    <h2 id="example">Worked example with labelled cash flows</h2>
    <div class="example-box">
        <strong>Illustrative example: labelled cash flows only</strong>
        <p>Opening value $50,000. Deposit $50,000 on day 1 of month 7. Closing value $110,000. Market rose smoothly; exact MWRR needs a full calculation, but the story is clear: half the money missed the first half of the gains.</p>
        <div class="example-calculation">
            <div class="line"><span>Opening market value</span><span>$50,000</span></div>
            <div class="line"><span>Deposit (month 7)</span><span>$50,000</span></div>
            <div class="line"><span>Closing market value</span><span>$110,000</span></div>
            <div class="line total"><span>Change in market value</span><span>$10,000</span></div>
        </div>
        <p>A naive $10,000 / $50,000 = 20% ignores that $50,000 arrived late. Your annual report's MWRR will be lower than a full-year time-weighted figure. Amounts are illustrative.</p>
    </div>

    <h2>Does your province change anything?</h2>
    <p>Performance reporting rules are national through CIRO and CSA instruments. Educational explainers may come from your provincial regulator.</p>

    <h2>Checklist</h2>
    <ul class="checklist">
        <li>Annual performance report saved</li>
        <li>Confirmed the return is money-weighted</li>
        <li>Benchmark chosen that matches holdings</li>
        <li>Fees and transfers noted for the year</li>
        <li>No skill claim based on mismatched methods</li>
    </ul>


    <h2 id="fees">How do fees change the beat-the-index question?</h2>
    <p>Even a portfolio that tracks an index before costs will lag after MER, trading costs and advice fees. When you compare your results to an index, use a net-of-fee personal number or subtract a realistic cost line from the index. Total cost reporting will put ongoing fund costs in dollars on statements from 2027; until then, ask for the all-in number.</p>
    <p>Stock pickers should also separate luck from process. One year of outperformance after a concentrated bet is not evidence you have an edge. Keep a written journal of why you bought, the benchmark you chose and the review date. Without that, "beating the index" is storytelling.</p>
    <p>If your annual report looks wrong, ask the dealer which cash flows entered the money-weighted calculation. Large late-year deposits can produce odd MWRR figures even when the spreadsheet is correct. CIRO has published targeted-review commentary on that point for dealers; as a client, you mainly need to know the quirk exists.</p>


    <h2 id="benchmark">How to choose a fair benchmark</h2>
    <p>A Canadian equity sleeve should not be judged only against the S&amp;P 500. A global equity sleeve should not be judged only against the S&amp;P/TSX Composite. Write the benchmark beside each sleeve on your one-page plan.</p>
    <p>Balanced investors often need a blended benchmark (for example 60% global equity index and 40% Canadian bond index). Building that blend takes a few minutes in a spreadsheet. Skipping it leads to false underperformance stories every time bonds cushion a stock crash.</p>
    <p>When your advisor or robo-advisor shows a personal rate of return, ask whether it is money-weighted and which benchmark they prefer for comparison. Then decide if that benchmark matches your written policy.</p>


    <h2 id="behaviour">Behavioural benchmarks beat numerical ones</h2>
    <p>The most important benchmark for many households is whether they stayed invested and kept contributing. A money-weighted return that looks mediocre because you invested steadily through a rising market can still be a life success. A flashy time-weighted return after you sold in a panic and bought back higher is a hollow win.</p>
    <p>Write both numbers in your annual review: (1) Did we follow the plan? (2) What was MWRR? (3) What was TWRR versus the policy benchmark? If (1) is no, fix behaviour before you change products.</p>
    <p>Households with multiple accounts should consolidate mentally. Beating the index in a small TFSA while a large taxable account lags with high fees is not a win. Weight by dollars.</p>
    <p>When you switch dealers mid-year, ask both firms how performance was calculated across the transfer. Gaps and double-counting happen. Keep PDF statements from both sides for that year.</p>


    <h2 id="mistakes2">Mistakes when judging performance</h2>
    <ul>
        <li>Comparing MWRR to an index calendar return</li>
        <li>Changing strategy after one bad year without reading cash flows</li>
        <li>Using the S&amp;P 500 to judge a Canadian balanced portfolio</li>
        <li>Ignoring fees when declaring victory</li>
        <li>Forgetting transfers when the account is new mid-year</li>
    </ul>
    <p>A clean annual ritual beats constant looking. Markets generate more noise than signal at daily frequency. Your annual report is designed for the slower conversation CIRO expects dealers to support.</p>
    <p>If you self-manage, recreate a simple TWRR once a year with a spreadsheet if your broker does not show one. The exercise teaches you where cash flows distorted the story.</p>
    <p>Investment clubs and family offices should assign a note-taker so performance debates reference methods, not vibes.</p>

    <h2 id="faq">Frequently asked questions</h2>
    <h3>Why is my return lower than my ETF's return?</h3>
    <p>Often cash-flow timing. Your MWRR includes deposits and withdrawals; the ETF's calendar return does not. Check the linked primary sources in the Sources section for the figures and dates used in this article.</p>
    <h3>What return does CIRO require?</h3>
    <p>A money-weighted rate of return when dealers report investment performance to you. Check the linked primary sources in the Sources section for the figures and dates used in this article.</p>
    <h3>Is money-weighted better than time-weighted?</h3>
    <p>Better for personal goal tracking. Worse for isolating manager or product skill. Check the linked primary sources in the Sources section for the figures and dates used in this article.</p>
    <h3>Can I calculate TWRR myself?</h3>
    <p>Some brokerages show both. Otherwise you need period returns between cash flows. Check the linked primary sources in the Sources section for the figures and dates used in this article.</p>
    <h3>Should I beat the S&amp;P/TSX every year?</h3>
    <p>No. A global or balanced portfolio will diverge from a Canadian equity index by design. Check the linked primary sources in the Sources section for the figures and dates used in this article.</p>
    <h3>Do fees show up in the return?</h3>
    <p>Account performance is typically net of many charges. Still read your cost report when it arrives. Check the linked primary sources in the Sources section for the figures and dates used in this article.</p>
    <h3>What if I transferred accounts mid-year?</h3>
    <p>Transfers are cash flows for MWRR. Ask the new dealer how they treated the transfer date. Check the linked primary sources in the Sources section for the figures and dates used in this article.</p>


    <h2 id="together">Putting performance review on a calendar</h2>
    <p>Pick one month each year—January works for many—to read the annual performance report, the fee report when available, and your written Investment Policy Statement. Do not review returns on days the market is down 3%. Check the linked primary sources in the Sources section for the figures and dates used in this article.</p>
    <p>Bring three numbers to the meeting with yourself: MWRR from the statement, TWRR or fund returns for the same period if available, and contributions as a percentage of income. The third number often matters more than the first two. Check the linked primary sources in the Sources section for the figures and dates used in this article.</p>
    <p>If you employ an advisor, ask them to explain any year your MWRR diverged sharply from the agreed benchmark. Cash-flow timing is a satisfactory answer. Surprise fees or style drift are not. Check the linked primary sources in the Sources section for the figures and dates used in this article.</p>
    <p>Parents teaching teens about investing can use the MWRR versus TWRR distinction as a live lesson when a RESP contribution lands mid-year. Check the linked primary sources in the Sources section for the figures and dates used in this article.</p>
    <p>Archive PDFs of statements for at least seven years. Disputes and tax questions arrive late. Check the linked primary sources in the Sources section for the figures and dates used in this article.</p>

    <p>Index definitions change and total-return series differ from price-return series. When you cite a benchmark, note whether dividends are reinvested. Fact sheets and index providers usually state that clearly. Comparing your total return to a price-only index will flatter or punish you by accident. Write the benchmark ticker or series name in your annual review notes so next year's you knows what this year's you meant.</p><p>If you use model portfolios from our site, judge yourself against the model's stated mix, not against whichever index was fashionable in the news that year.</p>

    <p>Parents and grandparents funding RESPs should judge those accounts on contribution discipline and grant capture first, and on market return second. A strong MWRR after missed CESG room is still a planning failure. Put grant rules beside performance numbers in the annual review.</p>

    <p>Keep your IPS and performance PDFs in the same folder dated by year.</p>

    <p>Side hustles and irregular bonuses create lumpy contributions that pull MWRR around. That lumpiness is not a moral failure. Note it in your annual review so you do not "fix" a strategy that is actually working on a time-weighted basis.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="${CIRO}">CIRO: Understanding investment performance / returns</a>, reviewed October 24, 2026</li>
        <li><a href="${NSSC}">Nova Scotia Securities Commission: CRM2 annual performance report</a>, reviewed October 24, 2026</li>
    </ul>

    <h2>Related reading</h2>
    <ul>
        <li><a href="/blog/total-cost-reporting-canada/">Total cost reporting</a></li>
        <li><a href="/blog/how-to-pick-stocks-canada/">How to pick stocks in Canada</a></li>
        <li><a href="/blog/stay-the-course-balanced-portfolios-canada/">Stay the course</a></li>
        <li><a href="/blog/t5008-slip-cost-base-canada/">T5008 and cost base</a></li>
    </ul>

    <div class="cta-section">
        <p><strong>Returns after tax are what you keep.</strong></p>
        <p>The 2026 tax guide covers capital gains, dividends and account location.</p>
        <a href="/ebooks/tax-guide/" class="cta-button">Get the 2026 Tax Guide — $49 CAD</a>
    </div>

    ${invFooter("General education about performance measurement as of October 24, 2026. Examples are illustrative. This is not investment advice.", "October 24, 2026")}

</div>`,
  '2026-10-24'
);
