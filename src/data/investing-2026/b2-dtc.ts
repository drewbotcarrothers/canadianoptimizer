import { invFooter, invPost } from './types';

const CRA_DTC = 'https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-40425-federal-dividend-tax-credit.html';
const CRA_FED_WS = 'https://www.canada.ca/content/dam/cra-arc/formspubs/pbg/5000-d1/5000-d1-25e.pdf';
const RQ_415 = 'https://www.revenuquebec.ca/en/citizens/income-tax-return/completing-your-income-tax-return/how-to-complete-your-income-tax-return/line-by-line-help/400-to-447-income-tax-and-contributions/line-415/';
const GSAM_DIV = 'https://www.getsmarteraboutmoney.ca/learning-path/stocks/how-stocks-and-dividends-work/';

export const dividendTaxCreditByProvinceCanada = invPost(
  'dividend-investing',
  'dividend-tax-credit-by-province-canada',
  'Dividend Tax Credit by Province: 2025 Rates and Examples',
  'Dividend tax credit rates for every province and territory, eligible and non-eligible, from CRA and Revenu Québec, with worked examples on $10,000 of dividends.',
  `<div class="container">

    <div class="hook">
        On $10,000 of eligible Canadian dividends, the provincial credit ranges from <span class="highlight">$760 in Nunavut to $1,932 in New Brunswick</span>, based on CRA's 2025 provincial worksheets. The federal credit is the same everywhere: $2,072.73. Where you live can be worth more than a thousand dollars a year on the same dividend income.
    </div>

    <p>The dividend tax credit is a federal credit plus a provincial one. For 2025, the latest year with published forms, CRA's worksheets give eligible dividends 15.0198% federally plus 5.51% (Nunavut) to 14% (New Brunswick) provincially, applied to the grossed-up amount. Non-eligible dividends get 9.0301% federally plus 0.67% to 6%.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>You report more than you receive: eligible dividends are grossed up by 38% and non-eligible ones by 15%, according to CRA's 2025 federal worksheet.</li>
            <li>The credits then reduce your tax. Federally that is 15.0198% (eligible) and 9.0301% (non-eligible) of the grossed-up amount.</li>
            <li>Provincial eligible rates for 2025 run from 5.51% (Nunavut) to 14% (New Brunswick). Non-eligible rates run from 0.67% (Yukon) to 6% (Northwest Territories).</li>
            <li>Quebec residents claim Quebec's credit on their Revenu Québec return (line 415), worth 11.7% and 3.42% of the grossed-up amounts.</li>
            <li>Only dividends from taxable Canadian corporations qualify. US and other foreign dividends do not, per CRA.</li>
        </ul>
    </div>

    <p>This guide is part of <a href="/category/investing/dividend-investing/">Dividend Investing</a>, in the <a href="/category/investing/">Investing</a> category. The pillar, <a href="/blog/dividend-investing-canada/">dividend investing in Canada</a>, covers how to build a dividend portfolio. This page is the rate table and the arithmetic.</p>

    <nav aria-label="On this page">
        <ul>
            <li><a href="#how">How does the dividend tax credit work?</a></li>
            <li><a href="#rates">What are the rates in each province?</a></li>
            <li><a href="#example">What is the credit on $10,000?</a></li>
            <li><a href="#noneligible">How are non-eligible dividends different?</a></li>
            <li><a href="#slips">Where are the numbers on your slips?</a></li>
            <li><a href="#claim">How do you claim it?</a></li>
            <li><a href="#planning">Does this change where you hold dividend stocks?</a></li>
            <li><a href="#traps">What can go wrong?</a></li>
            <li><a href="#faq">FAQ</a></li>
        </ul>
    </nav>

    <h2 id="how">How does the dividend tax credit work?</h2>

    <p>A Canadian company pays dividends out of profits it has already paid corporate tax on. The gross-up and credit are meant to account for that tax, so the same income is not fully taxed twice. The mechanics have four steps.</p>

    <div class="diagram">
        <div class="diagram-step">1. You receive $1,000 of eligible dividends in cash</div>
        <div class="diagram-arrow">↓</div>
        <div class="diagram-step light">2. Gross-up of 38%: you report $1,380 as income (line 12000)</div>
        <div class="diagram-arrow">↓</div>
        <div class="diagram-step light">3. Federal credit: 15.0198% × $1,380 = $207.27 off federal tax</div>
        <div class="diagram-arrow">↓</div>
        <div class="diagram-step">4. Provincial credit: your province's rate × $1,380 off provincial tax</div>
    </div>

    <p><strong>Eligible dividends</strong> generally come from companies that paid tax at the general corporate rate, which includes most large public companies; the company designates them as eligible. <strong>Non-eligible dividends</strong> (CRA calls them "other than eligible") usually come from private companies that paid tax at the small business rate. Your T5 or T3 slip tells you which is which.</p>

    <h2 id="rates">What are the rates in each province?</h2>

    <p>These are the 2025 rates from each province's CRA worksheet, line 61520. The 2026 forms are not published yet; when they are, check whether your province changed its rate. Each rate applies to the grossed-up (taxable) amount of dividends.</p>

    <div class="table-wrapper">
        <table>
            <caption>Provincial and territorial dividend tax credit rates for the 2025 tax year, and the credit on $10,000 of cash dividends (CRA Worksheets 428 and Revenu Québec, reviewed October 23, 2026)</caption>
            <thead>
                <tr><th>Province or territory</th><th>Eligible rate</th><th>Non-eligible rate</th><th>Credit on $10,000 eligible ($13,800 taxable)</th><th>Credit on $10,000 non-eligible ($11,500 taxable)</th></tr>
            </thead>
            <tbody>
                <tr><td><strong>Federal (all provinces)</strong></td><td>15.0198%</td><td>9.0301%</td><td>$2,072.73</td><td>$1,038.46</td></tr>
                <tr><td>Newfoundland and Labrador</td><td>6.3%</td><td>3.2%</td><td>$869.40</td><td>$368.00</td></tr>
                <tr><td>Prince Edward Island</td><td>10.5%</td><td>1.3%</td><td>$1,449.00</td><td>$149.50</td></tr>
                <tr><td>Nova Scotia</td><td>8.85%</td><td>1.5%</td><td>$1,221.30</td><td>$172.50</td></tr>
                <tr><td>New Brunswick</td><td>14%</td><td>2.75%</td><td>$1,932.00</td><td>$316.25</td></tr>
                <tr><td>Quebec</td><td>11.7%</td><td>3.42%</td><td>$1,614.60</td><td>$393.30</td></tr>
                <tr class="highlight-row"><td>Ontario</td><td>10%</td><td>2.9863%</td><td>$1,380.00</td><td>$343.42</td></tr>
                <tr><td>Manitoba</td><td>8%</td><td>0.7835%</td><td>$1,104.00</td><td>$90.10</td></tr>
                <tr><td>Saskatchewan</td><td>11%</td><td>2.519%</td><td>$1,518.00</td><td>$289.69</td></tr>
                <tr><td>Alberta</td><td>8.12%</td><td>2.18%</td><td>$1,120.56</td><td>$250.70</td></tr>
                <tr><td>British Columbia</td><td>12%</td><td>1.96%</td><td>$1,656.00</td><td>$225.40</td></tr>
                <tr><td>Yukon</td><td>12.02%</td><td>0.67%</td><td>$1,658.76</td><td>$77.05</td></tr>
                <tr><td>Northwest Territories</td><td>11.5%</td><td>6%</td><td>$1,587.00</td><td>$690.00</td></tr>
                <tr><td>Nunavut</td><td>5.51%</td><td>2.61%</td><td>$760.38</td><td>$300.15</td></tr>
            </tbody>
        </table>
    </div>

    <p>How the table was built: each province's worksheet multiplies line 12010 (non-eligible taxable amount) by the non-eligible rate, and the rest of line 12000 by the eligible rate. Quebec's figures are Revenu Québec's line 415 rates of 16.146% and 3.933% of the actual dividends, which equal 11.7% and 3.42% of the grossed-up amounts. Credit amounts are calculated, rounded to the cent.</p>

    <h2 id="example">What is the credit on $10,000?</h2>

    <div class="chart-container">
        <h3>Provincial credit on $10,000 of eligible dividends, 2025 rates (calculated)</h3>
        <div class="bar-chart">
            <div class="bar-item"><div class="bar-label wide">NB: $1,932</div><div class="bar-wrapper"><div class="bar" style="width: 100.0%;"><span></span></div></div></div>
            <div class="bar-item"><div class="bar-label wide">YT: $1,659</div><div class="bar-wrapper"><div class="bar" style="width: 85.9%;"><span></span></div></div></div>
            <div class="bar-item"><div class="bar-label wide">BC: $1,656</div><div class="bar-wrapper"><div class="bar" style="width: 85.7%;"><span></span></div></div></div>
            <div class="bar-item"><div class="bar-label wide">QC: $1,615</div><div class="bar-wrapper"><div class="bar" style="width: 83.6%;"><span></span></div></div></div>
            <div class="bar-item"><div class="bar-label wide">NT: $1,587</div><div class="bar-wrapper"><div class="bar" style="width: 82.1%;"><span></span></div></div></div>
            <div class="bar-item"><div class="bar-label wide">SK: $1,518</div><div class="bar-wrapper"><div class="bar" style="width: 78.6%;"><span></span></div></div></div>
            <div class="bar-item"><div class="bar-label wide">PE: $1,449</div><div class="bar-wrapper"><div class="bar" style="width: 75.0%;"><span></span></div></div></div>
            <div class="bar-item"><div class="bar-label wide">ON: $1,380</div><div class="bar-wrapper"><div class="bar" style="width: 71.4%;"><span></span></div></div></div>
            <div class="bar-item"><div class="bar-label wide">NS: $1,221</div><div class="bar-wrapper"><div class="bar" style="width: 63.2%;"><span></span></div></div></div>
            <div class="bar-item"><div class="bar-label wide">AB: $1,121</div><div class="bar-wrapper"><div class="bar" style="width: 58.0%;"><span></span></div></div></div>
            <div class="bar-item"><div class="bar-label wide">MB: $1,104</div><div class="bar-wrapper"><div class="bar" style="width: 57.1%;"><span></span></div></div></div>
            <div class="bar-item"><div class="bar-label wide">NL: $869</div><div class="bar-wrapper"><div class="bar" style="width: 45.0%;"><span></span></div></div></div>
            <div class="bar-item"><div class="bar-label wide">NU: $760</div><div class="bar-wrapper"><div class="bar" style="width: 39.4%;"><span></span></div></div></div>
        </div>
        <p>Provincial or territorial credit only, on $13,800 of grossed-up eligible dividends. Add the federal credit of $2,072.73 in every province. Calculated from the CRA 2025 worksheets and Revenu Québec line 415.</p>
    </div>

    <div class="example-box">
        <strong>Illustrative example: Lorraine, retired in Kingston, Ontario</strong>
        <p>Lorraine receives $10,000 of eligible dividends from Canadian bank and utility shares in a non-registered account.</p>
        <div class="example-calculation">
            <div class="line"><span>Cash dividends received</span><span>$10,000.00</span></div>
            <div class="line"><span>Taxable amount reported (× 138%)</span><span>$13,800.00</span></div>
            <div class="line"><span>Federal dividend tax credit (15.0198%)</span><span>$2,072.73</span></div>
            <div class="line"><span>Ontario dividend tax credit (10%)</span><span>$1,380.00</span></div>
            <div class="line total"><span>Total credits against her tax</span><span>$3,452.73</span></div>
        </div>
        <p>The credits reduce her tax; how much tax she ends up paying depends on her other income and bracket. The same dividends in New Brunswick would earn $1,932.00 provincially; in Nunavut, $760.38.</p>
    </div>

    <h2 id="noneligible">How are non-eligible dividends different?</h2>

    <p>Non-eligible dividends have a smaller gross-up (15%) and a smaller credit, because the company paid less corporate tax. This matters most to owners of small corporations who pay themselves dividends.</p>

    <div class="example-box">
        <strong>Illustrative example: two business owners, $20,000 of non-eligible dividends each</strong>
        <div class="example-calculation">
            <div class="line"><span>Taxable amount (× 115%)</span><span>$23,000.00</span></div>
            <div class="line"><span>Federal credit (9.0301%)</span><span>$2,076.92</span></div>
            <div class="line"><span>Provincial credit, Yellowknife, NT (6%)</span><span>$1,380.00</span></div>
            <div class="line total"><span>Provincial credit, Brandon, MB (0.7835%)</span><span>$180.21</span></div>
        </div>
        <p>Same dividend, same federal credit, a $1,199.79 difference in provincial credit. Whether salary or dividends work better for an owner depends on much more than this credit; see <a href="/blog/salary-vs-dividends-incorporated-canada/">salary versus dividends</a>.</p>
    </div>

    <h2 id="slips">Where are the numbers on your slips?</h2>

    <p>Your broker or fund company does the gross-up for you. Each slip shows the actual dividend, the taxable (grossed-up) amount and the federal credit, in separate boxes.</p>

    <div class="table-wrapper">
        <table>
            <caption>Where dividend amounts appear on T5 and T3 slips and on your return (CRA, 2025 tax year)</caption>
            <thead>
                <tr><th>Item</th><th>Eligible dividends</th><th>Non-eligible ("other than eligible")</th></tr>
            </thead>
            <tbody>
                <tr><td>Actual amount, T5</td><td>Box 24</td><td>Box 10</td></tr>
                <tr><td>Taxable (grossed-up) amount, T5</td><td>Box 25</td><td>Box 11</td></tr>
                <tr><td>Federal dividend tax credit, T5</td><td>Box 26</td><td>Box 12</td></tr>
                <tr><td>Federal dividend tax credit, T3</td><td>Box 39</td><td>Box 51</td></tr>
                <tr class="highlight-row"><td>Where the taxable amount goes on your return</td><td>Line 12000</td><td>Line 12010, and also included in line 12000</td></tr>
                <tr><td>Where the credits go</td><td colspan="2">Federal: line 40425. Provincial: line 61520 of Form 428. Quebec: line 415 of the TP-1</td></tr>
            </tbody>
        </table>
    </div>

    <h2 id="claim">How do you claim it?</h2>

    <div class="step-section">
        <div class="step"><div class="step-number">1</div><div><div class="step-title">Collect your slips</div><p>T5 slips from your broker and T3 slips from funds. CRA says the federal credit amounts appear in T5 boxes 12 and 26 and T3 boxes 39 and 51.</p></div></div>
        <div class="step"><div class="step-number">2</div><div><div class="step-title">Report the taxable amounts</div><p>Grossed-up eligible and non-eligible dividends go on line 12000, with the non-eligible portion also on line 12010.</p></div></div>
        <div class="step"><div class="step-number">3</div><div><div class="step-title">Claim the federal credit</div><p>Line 40425 of your return. Tax software does this from the slips.</p></div></div>
        <div class="step"><div class="step-number">4</div><div><div class="step-title">Claim the provincial credit</div><p>Line 61520 of your provincial Form 428, or line 415 of the Quebec return (TP-1) for Quebec residents.</p></div></div>
    </div>

    <p>If you received dividends without a slip, CRA's <a href="${CRA_FED_WS}">federal worksheet</a> and your provincial worksheet have charts to calculate the credit by hand.</p>

    <h2 id="planning">Does this change where you hold dividend stocks?</h2>

    <p>It can. Inside a TFSA, dividends are tax-free but earn no credit. Inside an RRSP or RRIF, they earn no credit and are taxed as ordinary income when withdrawn. In a taxable account, eligible Canadian dividends get both credits, The OSC's investor site notes that, depending on your situation, you may pay less tax on dividends than on interest. The effect is larger in provinces with high eligible rates, such as New Brunswick, Yukon and British Columbia.</p>

    <p>That is why many Canadians hold Canadian dividend payers in their taxable account and hold foreign stocks and bonds in registered accounts. The full trade-off, including growth stocks that pay little, is in <a href="/blog/dividend-vs-growth-taxable-accounts-canada/">dividend versus growth in a taxable account</a>.</p>

    <div class="example-box">
        <strong>Illustrative example: the same $20,000 of eligible dividends in Alberta and British Columbia</strong>
        <div class="example-calculation">
            <div class="line"><span>Taxable amount (× 138%)</span><span>$27,600.00</span></div>
            <div class="line"><span>Federal credit (15.0198%), both provinces</span><span>$4,145.46</span></div>
            <div class="line"><span>Alberta credit (8.12%)</span><span>$2,241.12</span></div>
            <div class="line total"><span>British Columbia credit (12%)</span><span>$3,312.00</span></div>
        </div>
        <p>The BC household gets $1,070.88 more in provincial credit. Their final tax bills also depend on each province's brackets, so do not compare provinces on the credit alone.</p>
    </div>

    <h2 id="traps">What can go wrong?</h2>

    <div class="warning-box">
        <strong>Common mistakes</strong>
        <ul>
            <li><strong>Expecting a credit inside a TFSA or RRSP.</strong> Dividends in registered accounts are not reported on your return, so there is no credit. The credit only helps in a taxable account.</li>
            <li><strong>Claiming it on US dividends.</strong> CRA says foreign dividends do not qualify.</li>
            <li><strong>Forgetting the gross-up raises your income.</strong> The $13,800, not the $10,000, counts toward your net income, which can matter for income-tested benefits. See <a href="/blog/oas-gis-clawback-canada/">the OAS and GIS clawback</a>.</li>
            <li><strong>Assuming a refund.</strong> The credits reduce tax you owe. With little other income, part of the credit may go unused.</li>
            <li><strong>Using last year's rate.</strong> Provinces change rates. Check the current year's worksheet when it is published.</li>
        </ul>
    </div>

    <p>Dividends are also not guaranteed. The OSC's <a href="${GSAM_DIV}">investor site</a> notes that a company may delay, reduce or eliminate dividends at any time. A tax credit does not make a risky dividend safe; see <a href="/blog/dividend-yield-traps-canada/">dividend yield traps</a>.</p>

    <h2>Checklist</h2>
    <ul class="checklist">
        <li>Dividends held in a taxable account, if you want the credit</li>
        <li>Eligible and non-eligible amounts checked on each slip</li>
        <li>Grossed-up amounts on line 12000 and 12010</li>
        <li>Federal credit on line 40425</li>
        <li>Provincial credit on line 61520 of your Form 428 (or Quebec line 415)</li>
        <li>Effect of the gross-up on net income checked</li>
    </ul>

    <h2 id="faq">Frequently asked questions</h2>

    <h3>Which province has the best dividend tax credit?</h3>
    <p>For eligible dividends in 2025, New Brunswick had the highest provincial rate at 14% of the grossed-up amount. For non-eligible dividends, the Northwest Territories had the highest at 6%. Your total tax also depends on the province's brackets.</p>

    <h3>What is the gross-up on eligible dividends?</h3>
    <p>38%. You report $138 for every $100 of eligible dividends. For non-eligible dividends, the gross-up is 15%.</p>

    <h3>Is the dividend tax credit refundable?</h3>
    <p>No. It reduces tax you owe. If your other credits already bring your tax to zero, the unused part does not create a refund.</p>

    <h3>Do I get the dividend tax credit in a TFSA?</h3>
    <p>No. Dividends in a TFSA are not reported on your return, so there is no credit. They are already tax-free in a TFSA.</p>

    <h3>Do US dividends get the dividend tax credit?</h3>
    <p>No. CRA says only dividends from taxable Canadian corporations qualify.</p>

    <h3>How does Quebec's dividend tax credit work?</h3>
    <p>Quebec residents claim it on line 415 of the Quebec return. Revenu Québec's rates are 16.146% of actual eligible dividends and 3.933% of actual ordinary dividends, equal to 11.7% and 3.42% of the grossed-up amounts.</p>

    <h3>Are these 2026 rates?</h3>
    <p>They are the 2025 rates, the latest on CRA's published forms as of October 23, 2026. Check the 2026 worksheets when CRA publishes them, usually early in the filing year.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="${CRA_DTC}">CRA: Federal dividend tax credit, line 40425</a> (tax year 2025), reviewed October 23, 2026</li>
        <li><a href="${CRA_FED_WS}">CRA: 2025 Federal Worksheet 5000-D1</a> (gross-up 138% and 115%; credit 15.0198% and 9.0301%), reviewed October 23, 2026</li>
        <li>CRA 2025 provincial and territorial worksheets, line 61520: <a href="https://www.canada.ca/content/dam/cra-arc/formspubs/pbg/5001-d/5001-d-25e.pdf">NL428</a>, <a href="https://www.canada.ca/content/dam/cra-arc/formspubs/pbg/5002-d/5002-d-25e.pdf">PE428</a>, <a href="https://www.canada.ca/content/dam/cra-arc/formspubs/pbg/5003-d/5003-d-25e.pdf">NS428</a>, <a href="https://www.canada.ca/content/dam/cra-arc/formspubs/pbg/5004-d/5004-d-25e.pdf">NB428</a>, <a href="https://www.canada.ca/content/dam/cra-arc/formspubs/pbg/5006-d/5006-d-25e.pdf">ON428</a>, <a href="https://www.canada.ca/content/dam/cra-arc/formspubs/pbg/5007-d/5007-d-25e.pdf">MB428</a>, <a href="https://www.canada.ca/content/dam/cra-arc/formspubs/pbg/5008-d/5008-d-25e.pdf">SK428</a>, <a href="https://www.canada.ca/content/dam/cra-arc/formspubs/pbg/5009-d/5009-d-25e.pdf">AB428</a>, <a href="https://www.canada.ca/content/dam/cra-arc/formspubs/pbg/5010-d/5010-d-25e.pdf">BC428</a>, <a href="https://www.canada.ca/content/dam/cra-arc/formspubs/pbg/5011-d/5011-d-25e.pdf">YT428</a>, <a href="https://www.canada.ca/content/dam/cra-arc/formspubs/pbg/5012-d/5012-d-25e.pdf">NT428</a>, <a href="https://www.canada.ca/content/dam/cra-arc/formspubs/pbg/5014-d/5014-d-25e.pdf">NU428</a>, reviewed October 23, 2026</li>
        <li><a href="${RQ_415}">Revenu Québec: Line 415, dividend tax credit</a>, reviewed October 23, 2026</li>
        <li><a href="${GSAM_DIV}">GetSmarterAboutMoney (OSC): How stocks and dividends work</a>, reviewed October 23, 2026</li>
    </ul>

    <h2>Related reading</h2>
    <ul>
        <li><a href="/blog/dividend-investing-canada/">Dividend investing in Canada</a></li>
        <li><a href="/blog/dividend-yield-traps-canada/">Dividend yield traps</a></li>
        <li><a href="/blog/dividend-vs-growth-taxable-accounts-canada/">Dividend vs growth in a taxable account</a></li>
        <li><a href="/blog/salary-vs-dividends-incorporated-canada/">Salary vs dividends for incorporated owners</a></li>
        <li><a href="/blog/oas-gis-clawback-canada/">OAS and GIS clawback</a></li>
    </ul>

    <div class="cta-section">
        <p><strong>The dividend tax credit is claimed on your return.</strong></p>
        <p>The 2026 tax guide covers investment income from the filing side, including slips, lines and where to hold each investment.</p>
        <a href="/ebooks/tax-guide/" class="cta-button">Get the 2026 Tax Guide — $49 CAD</a>
    </div>

    ${invFooter("General education about Canada's dividend tax credit, using 2025 tax-year rates published by CRA and Revenu Québec, reviewed October 23, 2026. It is not tax advice. Rates can change each year; check the current worksheet for your province before filing. Households are labelled illustrations.")}

</div>`
);
