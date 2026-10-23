import { invFooter, invPost } from './types';

const OSC_SEDAR = 'https://www.osc.ca/en/news-events/news/sedar-filing-system-launch-july-25';
const OSC_CD = 'https://www.osc.ca/en/industry/companies/continuous-disclosure';
const OSC_INS = 'https://www.osc.ca/en/industry/companies/insider-reporting';
const FTS_Q4 = 'https://fortis.gcs-web.com/news-releases/news-release-details/fortis-inc-reports-fourth-quarter-annual-2025-results';
const FTS_HIST = 'https://www.fortisinc.com/docs/default-source/investor-presentations/historical-dividends-1972-2025_updated-dec-2025.pdf';

export const sedarPlusCompanyFilingsCanada = invPost(
  'stock-picking',
  'sedar-plus-company-filings-canada',
  'How to Read SEDAR+ Filings: AIF, MD&A and the Financials',
  'A step-by-step guide to SEDAR+: which filings Canadian companies must make, their deadlines, what each answers for an investor, and a worked Fortis example.',
  `<div class="container">

    <div class="hook">
        Since July 25, 2023, Canadian public companies have filed their official disclosure in one free system, SEDAR+, which the Canadian Securities Administrators built to replace SEDAR. A large company must file its audited annual statements within <span class="highlight">90 days of year-end</span>, the OSC says. Most investors never open them, and miss the one source that cannot be spun.
    </div>

    <p>SEDAR+ is the free public database where Canadian public companies file their disclosure. Start with the annual MD&amp;A for management's explanation, check the audited financial statements for the numbers, and read the annual information form for risks. Non-venture issuers file annual statements within 90 days of year-end and quarterly within 45 days (OSC, 2026).</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>SEDAR+ launched July 25, 2023, replacing SEDAR, the national cease trade order database and the disciplined list, per the CSA announcement published by the OSC.</li>
            <li>Larger (non-venture) issuers file annual financial statements and MD&amp;A within 90 days of year-end and interim statements within 45 days. Venture issuers get 120 and 60 days.</li>
            <li>The MD&amp;A explains the numbers in management's words. The financial statements are audited annually. The AIF describes the business and its risks.</li>
            <li>Material changes need a news release immediately and a material change report within 10 days.</li>
            <li>Insider trades are reported on SEDI, a separate system, generally within five calendar days.</li>
        </ul>
    </div>

    <p>This guide is part of <a href="/category/investing/stock-picking/">Stock Picking</a>, in the <a href="/category/investing/">Investing</a> category. The pillar, <a href="/blog/how-to-pick-stocks-canada/">how to pick stocks in Canada</a>, sets out the full research process. This page is the research step: where to find the facts, and how to read them.</p>

    <nav aria-label="On this page">
        <ul>
            <li><a href="#what">What is SEDAR+?</a></li>
            <li><a href="#docs">Which documents do companies file, and when?</a></li>
            <li><a href="#order">Which document should you read first?</a></li>
            <li><a href="#mdna">What should you look for in the MD&amp;A?</a></li>
            <li><a href="#fs">How do you read the financial statements?</a></li>
            <li><a href="#aif">What does the AIF tell you?</a></li>
            <li><a href="#example">What can you learn from Fortis's 2025 results?</a></li>
            <li><a href="#flags">What red flags can filings reveal?</a></li>
            <li><a href="#faq">FAQ</a></li>
        </ul>
    </nav>

    <h2 id="what">What is SEDAR+?</h2>

    <p>SEDAR+ is the filing system run by the Canadian Securities Administrators, the umbrella group of provincial and territorial securities regulators. According to the <a href="${OSC_SEDAR}">CSA launch announcement</a>, at launch it consolidated SEDAR, the national cease trade order database, the disciplined list, and some paper and local electronic filings, plus a consolidated list of reporting issuers. Future phases are planned to replace SEDI (insider reports) and the National Registration Database.</p>

    <p>Anyone can search it free at sedarplus.ca. Search for the company by name to reach its profile, then filter its filings by document type and date. Companies usually post the same reports on their investor relations pages, but SEDAR+ is the official record, including filings a company may not highlight.</p>

    <h2 id="docs">Which documents do companies file, and when?</h2>

    <p>The core rules are in National Instrument 51-102, Continuous Disclosure Obligations. The OSC's <a href="${OSC_CD}">continuous disclosure page</a> summarizes them:</p>

    <div class="table-wrapper">
        <table>
            <caption>Main continuous disclosure filings and deadlines (OSC summary of NI 51-102 and NI 55-104)</caption>
            <thead>
                <tr><th>Document</th><th>What it answers</th><th>Non-venture deadline</th><th>Venture deadline</th></tr>
            </thead>
            <tbody>
                <tr class="highlight-row"><td>Annual financial statements (audited)</td><td>What did the company earn, own, owe and generate in cash?</td><td>90 days after year-end</td><td>120 days</td></tr>
                <tr><td>Interim financial statements</td><td>How did the last quarter go?</td><td>45 days after the quarter</td><td>60 days</td></tr>
                <tr><td>MD&amp;A</td><td>Why did results change, and what does management expect?</td><td>Filed with the statements</td><td>Filed with the statements</td></tr>
                <tr><td>Annual information form (AIF)</td><td>What does the business do, and what are its risks?</td><td>Usually 90 days after year-end</td><td>Not required</td></tr>
                <tr><td>Material change report</td><td>What big event just happened?</td><td>News release immediately; report within 10 days</td><td>Same</td></tr>
                <tr><td>Business acquisition report</td><td>What did a significant acquisition add?</td><td>75 days after the acquisition</td><td>Same</td></tr>
                <tr><td>Information circular (executive pay)</td><td>How are executives paid? What will shareholders vote on?</td><td>Pay disclosure within 140 days</td><td>180 days</td></tr>
                <tr><td>Insider reports (on SEDI)</td><td>Are insiders buying or selling?</td><td>Initial within 10 days; changes within 5 calendar days</td><td>Same</td></tr>
            </tbody>
        </table>
    </div>

    <div class="chart-container">
        <h3>Days after financial year-end that key filings are due (OSC)</h3>
        <div class="bar-chart">
            <div class="bar-item"><div class="bar-label wide">Non-venture annual statements: 90</div><div class="bar-wrapper"><div class="bar" style="width: 50%;"><span></span></div></div></div>
            <div class="bar-item"><div class="bar-label wide">Venture annual statements: 120</div><div class="bar-wrapper"><div class="bar" style="width: 67%;"><span></span></div></div></div>
            <div class="bar-item"><div class="bar-label wide">Non-venture pay disclosure: 140</div><div class="bar-wrapper"><div class="bar" style="width: 78%;"><span></span></div></div></div>
            <div class="bar-item"><div class="bar-label wide">Venture pay disclosure: 180</div><div class="bar-wrapper"><div class="bar" style="width: 100%;"><span></span></div></div></div>
        </div>
        <p>Interim statements are due 45 days (non-venture) or 60 days (venture) after each quarter. A company with a December 31 year-end therefore has until about the end of March for its annual filings.</p>
    </div>

    <p>"Venture issuers" are mostly smaller companies listed on exchanges such as the TSX Venture Exchange or the CSE. They have longer deadlines, do not have to file an AIF, and can file a basic CEO and CFO certificate, according to the OSC. That is one reason small-cap research takes more digging.</p>

    <h2 id="order">Which document should you read first?</h2>

    <div class="flowchart">
        <div class="flow-node decision">Do you already understand what the business does?</div>
        <div class="flow-arrow"></div>
        <div class="flow-branch-container">
            <div class="flow-node result">No: start with the AIF's business description and risk factors</div>
            <div class="flow-node decision">Yes: read the latest annual MD&amp;A, then the statements</div>
        </div>
        <div class="flow-arrow"></div>
        <div class="flow-branch-container">
            <div class="flow-node result">Then: the latest interim MD&amp;A for anything new</div>
            <div class="flow-node result">Then: material change reports and news releases since</div>
        </div>
    </div>

    <h2 id="mdna">What should you look for in the MD&amp;A?</h2>

    <p>The OSC describes the MD&amp;A as a narrative explanation, "through the eyes of management", of how the company performed and its financial condition and prospects. It must be filed with the financial statements. Read it with five questions:</p>

    <div class="step-section">
        <div class="step"><div class="step-number">1</div><div><div class="step-title">What drove revenue and earnings?</div><p>Volume, price, acquisitions, currency? Growth from acquisitions is different from growth in the existing business.</p></div></div>
        <div class="step"><div class="step-number">2</div><div><div class="step-title">How is cash being used?</div><p>Capital spending plans, debt repayment, dividends, buybacks. Look for the liquidity and capital resources section.</p></div></div>
        <div class="step"><div class="step-number">3</div><div><div class="step-title">Which numbers are non-GAAP?</div><p>"Adjusted" earnings exclude items management considers unusual. Companies must label and reconcile them. Read the reconciliation to see what was removed.</p></div></div>
        <div class="step"><div class="step-number">4</div><div><div class="step-title">What is forward-looking, and on what assumptions?</div><p>The OSC says forward-looking information must come with a statement that it is a projection, the factors that could make results differ, the material assumptions, and cautionary language. Compare last year's outlook with what happened.</p></div></div>
        <div class="step"><div class="step-number">5</div><div><div class="step-title">What changed in accounting or risk?</div><p>New accounting policies, critical estimates, and changes in risk language can matter more than the headline numbers.</p></div></div>
    </div>

    <h2 id="fs">How do you read the financial statements?</h2>

    <p>There are four statements plus the notes. The annual set is audited; interim statements usually are not.</p>

    <div class="table-wrapper">
        <table>
            <caption>The four financial statements and what to check in each</caption>
            <thead>
                <tr><th>Statement</th><th>Shows</th><th>Check</th></tr>
            </thead>
            <tbody>
                <tr><td>Income statement (statement of earnings)</td><td>Revenue, expenses, net earnings, earnings per share</td><td>Trend over three to five years; diluted EPS; unusual items</td></tr>
                <tr><td>Balance sheet (statement of financial position)</td><td>Assets, liabilities, equity at year-end</td><td>Debt compared with equity and cash; goodwill size</td></tr>
                <tr class="highlight-row"><td>Cash flow statement</td><td>Cash from operations, investing and financing</td><td>Operating cash flow minus capital spending (free cash flow) vs dividends paid</td></tr>
                <tr><td>Statement of changes in equity</td><td>Share issues, buybacks, dividends</td><td>Is the share count rising? Dilution reduces your slice</td></tr>
                <tr><td>Notes</td><td>Accounting policies, debt terms, segments, commitments</td><td>Debt maturities, lease and pension obligations, contingencies</td></tr>
            </tbody>
        </table>
    </div>

    <p>Most Canadian companies report under IFRS. Some that are also registered with the US SEC use US GAAP; the statements say which on their first pages. Compare companies using the same basis where you can.</p>

    <p>Five numbers over five years tell most of the story. Revenue shows whether the business is growing. Diluted EPS shows whether that growth reaches shareholders after dilution. Operating cash flow shows whether profits turn into cash. Capital spending shows how much of that cash the business needs to keep going. Net debt shows how much room is left if things go wrong. When earnings rise but operating cash flow does not, read the MD&amp;A to find out why.</p>

    <h2 id="aif">What does the AIF tell you?</h2>

    <p>The OSC describes the AIF as material information about the company and its business "in the context of its historical and possible future development": its operations, prospects, risks and other factors. Read the business description to learn the segments, the risk factors section for what management thinks could go wrong, and the capital structure section for share classes and dividend policy. Dual-class or restricted voting shares are disclosed there too.</p>

    <h2 id="example">What can you learn from Fortis's 2025 results?</h2>

    <p>Fortis released its 2025 annual results on February 12, 2026, well inside the 90-day window. Its <a href="${FTS_Q4}">results release</a> says it should be read with its MD&amp;A and consolidated financial statements, available on SEDAR+. Here is what an investor could pull from the release alone:</p>

    <div class="table-wrapper">
        <table>
            <caption>Fortis 2025: figures from the February 12, 2026 results release, and simple ratios we calculated</caption>
            <thead>
                <tr><th>Item</th><th>2025</th><th>2024</th><th>Where it comes from</th></tr>
            </thead>
            <tbody>
                <tr><td>Net earnings to common shareholders</td><td>$1,714 million</td><td>$1,606 million</td><td>Statement of earnings (US GAAP)</td></tr>
                <tr><td>Earnings per common share</td><td>$3.40</td><td>$3.24</td><td>Statement of earnings</td></tr>
                <tr><td>Adjusted basic EPS (non-US GAAP)</td><td>$3.53</td><td>$3.28</td><td>Reconciliation in the release</td></tr>
                <tr><td>Capital expenditures (non-US GAAP)</td><td>$5.6 billion</td><td>$5.2 billion</td><td>Reconciliation in the release</td></tr>
                <tr><td>Dividends paid per share</td><td>$2.49</td><td>$2.385</td><td>Company dividend history</td></tr>
                <tr class="highlight-row"><td>Payout ratio on EPS (our calculation)</td><td>73%</td><td>74%</td><td>$2.49 ÷ $3.40; $2.385 ÷ $3.24</td></tr>
                <tr><td>Payout on adjusted EPS (our calculation)</td><td>71%</td><td>73%</td><td>$2.49 ÷ $3.53; $2.385 ÷ $3.28</td></tr>
            </tbody>
        </table>
    </div>

    <p>Three things worth noticing. First, the adjusted figure removes $63 million of losses on selling FortisTCI (Turks and Caicos) and its Belize investments; the release reconciles it, so you can decide whether to accept the adjustment. Second, Fortis says the weighted average share count rose, "largely associated with the Corporation's dividend reinvestment plan", which is dilution you would see in the statement of changes in equity. Third, the release lists the assumptions behind its 4% to 6% dividend growth guidance, including continued DRIP participation and regulatory stability. That is exactly the forward-looking disclosure the MD&amp;A rules require. Dividend history is from the <a href="${FTS_HIST}">Fortis dividend history</a>. This is an example of reading filings, not a recommendation.</p>

    <h2 id="flags">What red flags can filings reveal?</h2>

    <ul>
        <li><strong>Late filings.</strong> Missing a deadline can lead to a cease trade order, which SEDAR+ now lists.</li>
        <li><strong>A change of auditor.</strong> NI 51-102 has specific rules for auditor changes. Read why it happened.</li>
        <li><strong>A going concern note.</strong> The auditor or management doubts the company can keep operating without new money.</li>
        <li><strong>Adjusted earnings far above reported earnings, every year.</strong> "One-time" items that recur are not one-time.</li>
        <li><strong>Free cash flow below dividends for several years.</strong> The dividend is being funded by borrowing or share issues. See <a href="/blog/dividend-yield-traps-canada/">dividend yield traps</a>.</li>
        <li><strong>Heavy insider selling on SEDI.</strong> Not proof of trouble, since insiders sell for many reasons, but worth a look. The OSC notes insider reports help investors infer insiders' views.</li>
        <li><strong>Large related-party transactions.</strong> Deals between the company and its executives or controlling shareholders, disclosed in the notes.</li>
    </ul>

    <div class="example-box">
        <strong>Illustrative example: Priya's one-evening review, Halifax</strong>
        <div class="example-calculation">
            <div class="line"><span>AIF: business and risk factors</span><span>40 minutes</span></div>
            <div class="line"><span>Annual MD&amp;A: drivers, cash use, outlook</span><span>60 minutes</span></div>
            <div class="line"><span>Statements: five numbers into a spreadsheet</span><span>30 minutes</span></div>
            <div class="line"><span>Last two interim MD&amp;As and news since year-end</span><span>30 minutes</span></div>
            <div class="line total"><span>One company, first pass</span><span>about 2 hours 40 minutes</span></div>
        </div>
        <p>Priya records revenue, diluted EPS, operating cash flow, capital spending and net debt for five years. She will not buy until she can explain each trend in a sentence. Times are illustrative.</p>
    </div>

    <h2>Does your province change anything?</h2>
    <p>No. SEDAR+ is national, and NI 51-102 applies across Canada. Each provincial regulator reviews filings for companies based in its province, and the OSC, BCSC, ASC and AMF each publish guidance. Quebec companies may file in French; many also file English versions. Your province matters for the tax on any gains you make, not for the filings you read.</p>

    <h2>Checklist</h2>
    <ul class="checklist">
        <li>Company profile found on SEDAR+</li>
        <li>AIF business description and risk factors read</li>
        <li>Annual MD&amp;A read, including non-GAAP reconciliations</li>
        <li>Five-year numbers recorded from the statements</li>
        <li>Recent interim filings and material change reports checked</li>
        <li>Insider activity glanced at on SEDI</li>
    </ul>

    <h2 id="faq">Frequently asked questions</h2>

    <h3>Is SEDAR+ free?</h3>
    <p>Yes. Searching and reading public filings on sedarplus.ca is free.</p>

    <h3>What replaced SEDAR?</h3>
    <p>SEDAR+, launched July 25, 2023. It also replaced the national cease trade order database and the disciplined list.</p>

    <h3>When do Canadian companies file annual reports?</h3>
    <p>Non-venture issuers within 90 days of year-end; venture issuers within 120 days. Quarterly reports are due within 45 and 60 days.</p>

    <h3>What is the difference between the MD&amp;A and the AIF?</h3>
    <p>The MD&amp;A explains the period's results and outlook. The AIF describes the business, its history, capital structure and risks. Venture issuers do not have to file an AIF.</p>

    <h3>Where do I find insider trades?</h3>
    <p>On SEDI, the System for Electronic Disclosure by Insiders. Insiders generally report changes within five calendar days.</p>

    <h3>Are US-listed Canadian companies on SEDAR+?</h3>
    <p>Canadian reporting issuers file on SEDAR+ even if they also list in the US. Many also file with the SEC on EDGAR.</p>

    <h3>Do I need accounting training to read filings?</h3>
    <p>No. Start with the MD&amp;A and five numbers: revenue, EPS, operating cash flow, capital spending and debt. Understanding comes with repetition.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="${OSC_SEDAR}">OSC (CSA): SEDAR+ filing system to launch July 25</a> (June 29, 2023), reviewed October 23, 2026</li>
        <li><a href="${OSC_CD}">OSC: Continuous disclosure (NI 51-102 deadlines and documents)</a>, reviewed October 23, 2026</li>
        <li><a href="${OSC_INS}">OSC: Insider reporting (NI 55-104 deadlines)</a>, reviewed October 23, 2026</li>
        <li><a href="${FTS_Q4}">Fortis Inc.: Fourth quarter and annual 2025 results</a> (February 12, 2026), reviewed October 23, 2026</li>
        <li><a href="${FTS_HIST}">Fortis Inc.: Common share dividend history</a>, reviewed October 23, 2026</li>
    </ul>

    <h2>Related reading</h2>
    <ul>
        <li><a href="/blog/how-to-pick-stocks-canada/">How to pick stocks in Canada</a></li>
        <li><a href="/blog/position-sizing-stocks-canada/">How much of your portfolio should one stock be?</a></li>
        <li><a href="/blog/dividend-yield-traps-canada/">Dividend yield traps</a></li>
        <li><a href="/blog/t5008-slip-cost-base-canada/">The T5008 slip and your cost base</a></li>
    </ul>

    <div class="cta-section">
        <p><strong>Research is step one. Reporting your gains correctly is the last step.</strong></p>
        <p>The 2026 tax guide covers capital gains, dividends and cost base from the filing side.</p>
        <a href="/ebooks/tax-guide/" class="cta-button">Get the 2026 Tax Guide — $49 CAD</a>
    </div>

    ${invFooter("General education about Canadian securities filings as of October 23, 2026. It is not a recommendation to buy or sell any security, and not investment advice. Fortis figures are taken from the company's own release and shown as a reading exercise. Deadlines are summarized from OSC pages; the instruments themselves govern.")}

</div>`
);
