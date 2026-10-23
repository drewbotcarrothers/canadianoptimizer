import { invFooter, invPost } from './types';

const ITAM27 = 'https://www.canada.ca/en/revenue-agency/services/tax/technical-information/income-tax-audit-manual-domestic-compliance-programs-branch-dcpb-27.html';
const CRA_TFSA_TAX = 'https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/tax-free-savings-account-tfsa-issuers/taxes.html';
const ITA_1462 = 'https://laws-lois.justice.gc.ca/eng/acts/I-3.3/section-146.2.html';
const AHAMED_TCC = 'https://www.canlii.org/en/ca/tcc/doc/2023/2023tcc17/2023tcc17.html';
const TI_AHAMED = 'https://taxinterpretations.com/content/672701';
const TI_CWT = 'https://taxinterpretations.com/content/820812';
const IE_2019 = 'https://www.investmentexecutive.com/news/industry/tfsa-holders-ultimately-liable-for-any-tax-on-day-trading-in-an-account/';

export const tfsaDayTradingBusinessIncomeCanada = invPost(
  'stock-picking',
  'tfsa-day-trading-business-income-canada',
  'Day Trading in a TFSA: When the CRA Calls It a Business',
  'Frequent trading in a TFSA can be taxed as business income, with the full gain taxable. See the factors the CRA uses, the court cases, and how to stay safe.',
  `<div class="container">

    <div class="hook">
        In one self-directed TFSA, <span class="highlight">$15,000 of contributions grew to $564,483 between 2009 and 2012</span> through active trading, mostly in penny stocks. The CRA taxed the gains as business income, and the Tax Court agreed (<em>Ahamed</em>, 2023 TCC 17, as summarized by Tax Interpretations). Tax-free only applies while the account is investing, not running a trading business.
    </div>

    <p>Trading in a TFSA is allowed, but if the account is carrying on a business, the TFSA trust is taxed on that income, with the full gain counted, under Income Tax Act section 146.2(6) (current to September 2026). You are jointly liable for that tax. The CRA weighs trading frequency, holding periods, your market knowledge and time spent.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>The CRA says a TFSA that carries on a business is taxable on that income and must report it on a T3 trust return.</li>
            <li>Under section 146.2(6), the trust's taxable gain equals the full capital gain, not half of it.</li>
            <li>Under section 146.2(6.1), the TFSA holder is jointly and severally liable for the tax. The issuer's liability is limited to the TFSA's assets.</li>
            <li>The CRA's audit manual lists eight factors for securities trading, including frequency, holding period, knowledge, time spent and use of margin. No single factor decides it.</li>
            <li>The Federal Court of Appeal confirmed in 2024 that owning only qualified investments does not protect a TFSA that is trading as a business.</li>
        </ul>
    </div>

    <p>This guide is part of <a href="/category/investing/stock-picking/">Stock Picking</a>, in the <a href="/category/investing/">Investing</a> category. The pillar, <a href="/blog/how-to-pick-stocks-canada/">how to pick stocks in Canada</a>, covers research and which account to use. This page is about the line between investing and trading in a TFSA.</p>

    <nav aria-label="On this page">
        <ul>
            <li><a href="#rule">What is the rule?</a></li>
            <li><a href="#factors">What factors does the CRA use?</a></li>
            <li><a href="#cost">What happens if your TFSA is a business?</a></li>
            <li><a href="#cases">What have the courts said?</a></li>
            <li><a href="#selfcheck">How do you check your own TFSA?</a></li>
            <li><a href="#provinces">Does your province matter?</a></li>
            <li><a href="#safe">How do you stay on the safe side?</a></li>
            <li><a href="#faq">FAQ</a></li>
        </ul>
    </nav>

    <h2 id="rule">What is the rule?</h2>

    <p>Section <a href="${ITA_1462}">146.2(6) of the Income Tax Act</a> says a trust governed by a TFSA pays no tax on its income, except when it carries on a business or holds non-qualified investments. Then it pays tax on the income from that business. The CRA's <a href="${CRA_TFSA_TAX}">TFSA issuer page</a> puts it simply: if a TFSA carries on a business, the trust is taxable on the income and capital gains from it, reported on Form T3RET.</p>

    <p>There is no fixed number of trades that makes a TFSA a business. It is a question of fact, decided on your whole course of conduct.</p>

    <h2 id="factors">What factors does the CRA use?</h2>

    <p>Chapter 27 of the CRA's <a href="${ITAM27}">Income Tax Audit Manual</a> lists the factors auditors consider when deciding whether securities trading is a business. It says none may be enough on its own, but a combination can be.</p>

    <div class="table-wrapper">
        <table>
            <caption>CRA factors for securities trading as a business (Income Tax Audit Manual, chapter 27.1.5), reviewed October 23, 2026</caption>
            <thead>
                <tr><th>CRA factor</th><th>What it can look like in a TFSA</th><th>Lower-risk pattern</th></tr>
            </thead>
            <tbody>
                <tr class="highlight-row"><td>Frequency of transactions</td><td>Many trades a week, quick turnover</td><td>A few trades a year</td></tr>
                <tr><td>Period of ownership</td><td>Holding for days or hours</td><td>Holding for years</td></tr>
                <tr><td>Knowledge of securities markets</td><td>Working in finance, trading courses, years of active trading</td><td>General investing knowledge</td></tr>
                <tr><td>Part of your ordinary business</td><td>Trading similar to your job</td><td>Unrelated to your work</td></tr>
                <tr><td>Time spent</td><td>Hours each day studying markets and analyzing trades</td><td>A periodic review</td></tr>
                <tr><td>Financing</td><td>Purchases financed on margin or with debt</td><td>Bought with your own savings</td></tr>
                <tr><td>Advertising</td><td>Promoting yourself as a buyer of securities</td><td>None</td></tr>
                <tr><td>Nature of the shares</td><td>Speculative, non-dividend shares</td><td>Broad ETFs and dividend payers</td></tr>
            </tbody>
        </table>
    </div>

    <p>A TFSA trust cannot borrow under section 146.2(2)(f), so margin is less common inside one. The other factors apply fully.</p>

    <h2 id="cost">What happens if your TFSA is a business?</h2>

    <div class="table-wrapper">
        <table>
            <caption>How a $50,000 gain is treated in three situations (Income Tax Act s.146.2 and CRA pages, reviewed October 23, 2026)</caption>
            <thead>
                <tr><th></th><th>TFSA, investing</th><th>Taxable account, capital gain</th><th>TFSA found to be carrying on a business</th></tr>
            </thead>
            <tbody>
                <tr><td>Share of gain that is taxable</td><td>None</td><td>Half (50% inclusion rate, per the CRA audit manual)</td><td>All of it, under s.146.2(6)(b)</td></tr>
                <tr><td>Taxable amount on $50,000</td><td>$0</td><td>$25,000</td><td>$50,000</td></tr>
                <tr><td>Who files</td><td>Nobody</td><td>You, on your T1</td><td>The TFSA trust, on a T3 return</td></tr>
                <tr><td>Who is liable</td><td>Nobody</td><td>You</td><td>The trust and you, jointly (s.146.2(6.1))</td></tr>
            </tbody>
        </table>
    </div>

    <div class="chart-container">
        <h3>Share of a gain that is taxable (Income Tax Act and CRA)</h3>
        <div class="bar-chart">
            <div class="bar-item"><div class="bar-label wide">TFSA, investing: 0%</div><div class="bar-wrapper"><div class="bar" style="width: 1%;"><span></span></div></div></div>
            <div class="bar-item"><div class="bar-label wide">Taxable account</div><div class="bar-wrapper"><div class="bar" style="width: 50%;"><span>50%</span></div></div></div>
            <div class="bar-item"><div class="bar-label wide">TFSA as a business</div><div class="bar-wrapper"><div class="bar" style="width: 100%;"><span>100%</span></div></div></div>
        </div>
        <p>Section 146.2(6)(b) sets the TFSA trust's taxable capital gain equal to the full capital gain. The CRA's audit manual describes the current capital gains inclusion rate as 50%. A business TFSA can therefore be worse than trading in a regular taxable account.</p>
    </div>

    <p>Since the 2019 federal budget, the holder is on the hook. Before then, the TFSA trust and the financial institution were jointly liable, but not the account holder, according to <a href="${IE_2019}">Investment Executive's 2019 report</a>. Now section 146.2(6.1) makes the holder jointly and severally liable, and limits the issuer's liability to the property in the TFSA plus distributions made after the assessment. The same 2019 article reported that, as of December 31, 2018, the CRA had assessed about $114 million in taxes from TFSA audits covering 2009 to 2017, some of it from TFSAs found to be carrying on a business.</p>

    <h2 id="cases">What have the courts said?</h2>

    <ul>
        <li><strong><a href="${AHAMED_TCC}">Ahamed v. The King, 2023 TCC 17</a>.</strong> A professional investment advisor's self-directed TFSA actively traded qualified investments, mostly TSX Venture penny stocks. Its gains for 2009 to 2012 were assessed as business income. The Tax Court dismissed the appeal, holding that all businesses, including a business of trading qualified investments, fall within section 146.2(6). (<a href="${TI_AHAMED}">Tax Interpretations summary</a>.)</li>
        <li><strong>Canadian Western Trust Company v. The King, 2024 FCA 108.</strong> The Federal Court of Appeal dismissed the trustee's appeal. It rejected the argument that the TFSA should be exempt the way an RRSP trading qualified investments is, saying that would amount to redrafting the provision. (<a href="${TI_CWT}">Tax Interpretations summary</a>.)</li>
    </ul>

    <p>The case summaries above are from Tax Interpretations, a secondary source; the decisions themselves are on CanLII. The key point for you: holding only eligible investments is not a defence if the way you trade is a business.</p>

    <h2 id="selfcheck">How do you check your own TFSA?</h2>

    <div class="flowchart">
        <div class="flow-node decision">Do you trade most weeks, or hold positions for days rather than months?</div>
        <div class="flow-arrow"></div>
        <div class="flow-branch-container">
            <div class="flow-node result">No: typical long-term investing. Keep records of your intent anyway</div>
            <div class="flow-node decision">Yes: do you also work in finance, spend hours a day on it, or trade speculative shares?</div>
        </div>
        <div class="flow-arrow"></div>
        <div class="flow-branch-container">
            <div class="flow-node result">No: grey zone. Slow down, or move the trading out of the TFSA</div>
            <div class="flow-node result">Yes: high risk. Move active trading to a taxable account and get tax advice</div>
        </div>
    </div>

    <div class="example-box">
        <strong>Illustrative example: two TFSA holders</strong>
        <p><strong>Kevin, 34, Calgary,</strong> works as an equity analyst. He makes about 600 trades a year in his TFSA, mostly small-cap stocks held for a few days, and spends evenings on charts. Several CRA factors line up: frequency, short holding, professional knowledge, time spent, speculative shares. His TFSA is at real risk of being treated as a business.</p>
        <p><strong>Sofia, 45, Moncton,</strong> buys an all-in-one ETF every month and sells two or three stocks a year after reviewing her plan. Her activity looks like investing. Both people are illustrative, and only the CRA or a court can decide a real case.</p>
    </div>

    <h2 id="provinces">Does your province matter?</h2>

    <p>The test is the same everywhere, because it comes from the federal Income Tax Act and court decisions. If a TFSA is taxed as a business, provincial tax applies too; Quebec residents also deal with Revenu Québec for Quebec tax. The TFSA rules themselves, including the dollar limits, are federal and do not vary by province.</p>

    <h2 id="safe">How do you stay on the safe side?</h2>

    <div class="step-section">
        <div class="step"><div class="step-number">1</div><div><div class="step-title">Keep the TFSA for long-term holdings</div><p>Broad ETFs and stocks you intend to hold for years fit the account's purpose.</p></div></div>
        <div class="step"><div class="step-number">2</div><div><div class="step-title">Trade actively in a taxable account</div><p>Gains there are usually capital gains at a 50% inclusion, or business income if you are a trader, and losses can be used. A TFSA business gain is fully taxable, and money lost in a TFSA never comes back as contribution room.</p></div></div>
        <div class="step"><div class="step-number">3</div><div><div class="step-title">Write down your intent</div><p>Note why you bought each position and how long you planned to hold it. Intent is a key factor in the CRA's analysis.</p></div></div>
        <div class="step"><div class="step-number">4</div><div><div class="step-title">Get advice if you already trade heavily</div><p>A tax professional can review your history before the CRA does.</p></div></div>
    </div>

    <div class="tip-box">
        <strong>The section 39(4) election does not help a trader.</strong>
        <p>The CRA's audit manual explains that an election to treat Canadian securities as capital property does not apply to a trader or dealer in securities. It is not a way to turn trading profits into capital gains.</p>
    </div>

    <h2>What if the CRA reassesses your TFSA?</h2>

    <p>Read the notice carefully: it should say which years, how the income was calculated, and why the CRA considers the activity a business. Gather your trade history, notes on why you bought each position, and evidence of how much time you spent. If you disagree, you can file a notice of objection; the deadline is generally 90 days from the date of the notice of reassessment, so act quickly. Because the holder is jointly liable under section 146.2(6.1), the tax can be collected from you if the TFSA does not hold enough to pay it. This is the point to hire a tax professional, not after the objection deadline has passed.</p>

    <h2>Checklist</h2>
    <ul class="checklist">
        <li>Number of TFSA trades in the past year counted</li>
        <li>Average holding period estimated</li>
        <li>Speculative or penny stocks in the TFSA reviewed</li>
        <li>Active trading moved to a taxable account</li>
        <li>Notes kept on why you bought and how long you planned to hold</li>
        <li>Tax advice sought if several CRA factors apply to you</li>
    </ul>

    <h2 id="faq">Frequently asked questions</h2>

    <h3>Can you day trade in a TFSA in Canada?</h3>
    <p>Your broker will let you, but if the CRA finds the TFSA is carrying on a business, the trust is taxed on the income, with the full gain counted, and you are jointly liable.</p>

    <h3>How many trades are too many in a TFSA?</h3>
    <p>There is no number. The CRA looks at frequency together with holding period, knowledge, time spent, financing and the type of shares. A combination of factors decides it.</p>

    <h3>Will my broker warn me?</h3>
    <p>Not necessarily. When the 2019 budget made holders liable, the government said the holder is typically in the best position to know whether the TFSA's activities amount to a business, as reported by Investment Executive.</p>

    <h3>What tax rate applies to a TFSA business?</h3>
    <p>The trust is taxed on its business income, with the full capital gain counted under section 146.2(6). The rate depends on trust tax rules; get professional advice if you are assessed.</p>

    <h3>Does holding only qualified investments protect me?</h3>
    <p>No. In 2024 the Federal Court of Appeal confirmed that a TFSA carrying on a business of trading qualified investments is still taxable on that business income.</p>

    <h3>Is an RRSP treated the same way?</h3>
    <p>No. The Tax Court noted that the RRSP rules have an exemption for business income from trading qualified investments, added in 1993. Parliament did not add one for TFSAs.</p>

    <h3>Is options trading in a TFSA risky too?</h3>
    <p>The same factors apply. Frequent, short-term, speculative trading of any kind raises the risk that the TFSA is carrying on a business.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="${ITA_1462}">Income Tax Act, section 146.2</a> (current to September 30, 2026), reviewed October 23, 2026</li>
        <li><a href="${CRA_TFSA_TAX}">CRA: TFSA issuers, tax implications</a>, reviewed October 23, 2026</li>
        <li><a href="${ITAM27}">CRA: Income Tax Audit Manual, chapter 27</a> (sections 27.1.1, 27.1.2 and 27.1.5), reviewed October 23, 2026</li>
        <li><a href="${AHAMED_TCC}">Ahamed v. The King, 2023 TCC 17 (CanLII)</a>, with the <a href="${TI_AHAMED}">Tax Interpretations summary</a> (secondary), reviewed October 23, 2026</li>
        <li>Canadian Western Trust Company v. The King, 2024 FCA 108, via the <a href="${TI_CWT}">Tax Interpretations summary</a> (secondary), reviewed October 23, 2026</li>
        <li><a href="${IE_2019}">Investment Executive: TFSA holders ultimately liable for any tax on day trading</a> (March 21, 2019; secondary, citing the CRA), reviewed October 23, 2026</li>
    </ul>

    <h2>Related reading</h2>
    <ul>
        <li><a href="/blog/how-to-pick-stocks-canada/">How to pick stocks in Canada</a></li>
        <li><a href="/blog/tfsa-overcontribution-penalty/">TFSA overcontribution penalty</a></li>
        <li><a href="/blog/capital-gains-tax-canada/">Capital gains tax in Canada</a></li>
        <li><a href="/blog/superficial-loss-rule-canada/">The superficial loss rule</a></li>
    </ul>

    <div class="cta-section">
        <p><strong>Trading outside the TFSA means reporting gains and losses yourself.</strong></p>
        <p>The 2026 tax guide covers capital gains, losses and business income from the filing side.</p>
        <a href="/ebooks/tax-guide/" class="cta-button">Get the 2026 Tax Guide — $49 CAD</a>
    </div>

    ${invFooter("General education about trading in a TFSA as of October 23, 2026. It is not tax or legal advice, and only the CRA or a court can decide whether a particular TFSA is carrying on a business. Examples are illustrations. Case summaries marked secondary come from the sources named. Get professional advice about your own situation.")}

</div>`
);
