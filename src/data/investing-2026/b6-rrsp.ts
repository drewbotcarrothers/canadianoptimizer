import { invFooter, invPost } from './types';

export const bestEtfsRrspUsListedCanada = invPost(
  'passive-etf',
  'best-etfs-rrsp-us-listed-canada',
  'Best ETFs for RRSPs: US-Listed Funds and Withholding',
  'In an RRSP, US-listed equity ETFs can use treaty relief on dividends. How Canadian wrappers differ, and how FX conversion costs change the RRSP decision.',
  `<div class="container">

    <div class="hook">In an RRSP, <span class="highlight">account choice can matter as much as the ticker</span>. US-listed equity ETFs may face different withholding than the same exposure in a Canadian-listed wrapper—then FX costs decide whether the complexity is worth it.</div>
    <p>Canada–US treaty relief can reduce withholding on many US-source dividends paid into an RRSP when the holding is a US-listed equity ETF or stock. Canadian-listed ETFs that hold US stocks often face withholding inside the fund that you cannot reclaim. FX conversion at your broker can erase a small withholding edge. This guide explains the matrix; it is not a buy list.</p>
    <div class="callout"><strong>Key takeaways:</strong><ul>
            <li>RRSP + US-listed equity ETFs: treaty relief may apply on US dividends—confirm with your broker and CRA/treaty materials.</li>
            <li>Canadian-listed US-equity ETFs often embed withholding you do not see as a separate line.</li>
            <li>FX spreads and Norbert's Gambit costs can dominate a 0.05% MER difference.</li>
            <li>TFSA treatment differs—do not copy RRSP logic into a TFSA.</li>
            <li>Use fund fact sheets and your broker FX schedule; this is not a ticker ranking.</li>
    </ul></div>
    <p>Part of <a href="/category/investing/passive-etf/">Passive ETF investing</a>. Also see <a href="/blog/us-withholding-tax-by-account-canada/">US withholding by account</a> and <a href="/blog/norberts-gambit-canada-guide/">Norbert's Gambit</a>.</p>
    <nav aria-label="On this page"><ul>
    <li><a href="#matrix">Withholding matrix by account</a></li>
    <li><a href="#cad">Canadian-listed vs US-listed</a></li>
    <li><a href="#fx">FX costs and when they dominate</a></li>
    <li><a href="#example">Worked cost sketch</a></li>
    <li><a href="#faq">FAQ</a></li></ul></nav>
    <h2 id="matrix">Withholding matrix by account</h2>
    <p>US-source dividends are often subject to withholding. Treaty relief for retirement accounts is a common reason Canadians compare US-listed ETFs inside an RRSP. Always confirm current treatment with CRA guidance and your broker's tax documents—rules and forms change.</p>
    <div class="table-wrapper"><table><caption>Conceptual withholding sketch (verify on official pages)</caption>
    <thead><tr><th>Holding</th><th>TFSA</th><th>RRSP</th><th>Taxable</th></tr></thead>
    <tbody>
    <tr><td>US-listed US equity ETF</td><td>Often withheld; usually not recoverable</td><td>Treaty relief may apply</td><td>Withholding + foreign tax credit rules</td></tr>
    <tr class="highlight-row"><td>CAD-listed US equity ETF</td><td>Withholding often inside fund</td><td>Withholding often inside fund</td><td>Withholding often inside fund</td></tr>
    <tr><td>CAD-listed Canadian equity ETF</td><td>No US withholding</td><td>No US withholding</td><td>Canadian dividend rules</td></tr>
    </tbody></table></div>
    <h2 id="cad">Canadian-listed vs US-listed</h2>
    <p>Canadian wrappers (for example VFV vs VOO-style exposure) can be simpler: CAD quotes, no USD account. The trade-off is often embedded withholding on the US stocks inside the fund. US-listed funds may improve the RRSP withholding picture and introduce USD cash and FX decisions.</p>
    <h2 id="fx">FX costs and when they dominate</h2>
    <p>If your broker charges a wide FX spread on every contribution, a "better" withholding outcome can lose. Norbert's Gambit or a dual-currency account may lower conversion cost—read the broker help pages and our Gambit guide. Small monthly buys amplify FX friction more than annual lump sums.</p>
    <div class="flowchart"><div class="flow-node decision">Is the RRSP contribution large and infrequent?</div>
    <div class="flow-arrow"></div><div class="flow-branch-container">
    <div class="flow-node result">Yes: FX optimization may be worth the paperwork</div>
    <div class="flow-node result">No: CAD-listed simplicity may win after spreads</div></div></div>
    <h2 id="example">Worked cost sketch</h2>
    <div class="example-box"><strong>Illustrative only — replace with your broker numbers</strong>
    <div class="example-calculation">
    <div class="line"><span>Annual US dividend yield assumption</span><span>1.5%</span></div>
    <div class="line"><span>Withholding saved in RRSP (example 15%)</span><span>0.225% of assets/year</span></div>
    <div class="line"><span>One-way FX spread on contribution</span><span>1.5% of contribution</span></div>
    <div class="line total"><span>Break-even depends on contribution size vs balance</span><span>run your math</span></div>
    </div><p>Do not treat these percentages as forecasts. Pull live fund yields and your broker FX schedule.</p></div>

    <h2>Does your province change anything?</h2>
    <p>Federal programs and national fee schedules dominate most of this topic. Provincial tax rates and some registration rules still differ. Confirm local details when your return is affected. Quebec residents should also check Revenu Québec pages when a federal program has a provincial twin.</p>
    <h2>Checklist</h2>
    <ul class="checklist">
        <li>Official source opened and dated</li>
        <li>Numbers copied with units and the review date</li>
        <li>Account type chosen before the product</li>
        <li>Next action scheduled on a calendar</li>
        <li>Household partners informed in writing</li>
    </ul>
    <h2 id="faq">Frequently asked questions</h2>
    <h3>Should every RRSP use US-listed ETFs?</h3>
    <p>No. FX costs, account features and simplicity can favour Canadian-listed funds.</p>
    <h3>Does this apply to a TFSA?</h3>
    <p>TFSA withholding treatment differs. Do not copy RRSP logic blindly—see the withholding-by-account guide.</p>
    <h3>What about bonds?</h3>
    <p>US bond ETF withholding and tax character differ from equities. Read fund documents.</p>
    <h3>Is Norbert's Gambit required?</h3>
    <p>Only if FX savings exceed the time, bid-ask and risk of the gambit for your size.</p>
    <h3>Which ticker is best?</h3>
    <p>This article does not rank tickers. Compare fact sheets dated the day you buy.</p>
    <h3>Can treaty relief change?</h3>
    <p>Tax rules and broker reporting can change. Re-check CRA and treaty materials.</p>
    <h3>What about FHSA?</h3>
    <p>Confirm FHSA withholding treatment separately; do not assume RRSP rules.</p>

    <h2>Putting the decision on one page</h2>
    <p>Write the account, product, fee or grant rule, and the next review date on a single page. Share it with anyone who co-owns the money so the plan survives a vacation or an illness.</p>
    <p>Re-open the official source when your balance crosses a fee tier, a child changes age band, or a fund changes its fact sheet. Dated downloads beat memory and beat screenshots without filenames.</p>
    <p>Automate contributions so research never becomes an excuse to pause investing. Funding beats tinkering. A missed month of contributions usually costs more than a slightly higher MER.</p>
    <p>Prefer fewer products with clear jobs over a pile of tickers without a written policy. If you cannot explain a holding in one sentence, it does not belong in a household plan.</p>
    <p>Keep beneficiaries and authorized users current whenever you change firms or open a new registered account. Coverage and tax rules do not fix a locked-out login.</p>
    <p>Separate market risk from fees, grants and institutional protection when you explain the plan at the dinner table. Mixing those ideas creates panic trades.</p>
    <p>If two options are close on cost, pick the one you will actually maintain for a decade. Behavioural fit is a real cost even when it never appears on a fee schedule.</p>
    <p>Archive fee schedules and fact sheets with the download date in the filename. Future audits and transfer packages ask for proof of what you thought you bought.</p>
    <p>Raise the savings rate before you add complexity. A higher contribution usually beats a cleverer ticker list.</p>
    <p>Book a calm annual review month that is not tied to market headlines. Crisis reviews produce expensive mistakes.</p>
    <p>Ask for primary documents when someone quotes a fee or grant from memory—including this site. Links beat vibes.</p>
    <p>Stay boring on purpose. Boring is how long-term plans survive family stress and news cycles.</p>
    <p>When a headline tempts a change, re-read your one-pager before you trade. If the change is not on the page, it waits a week.</p>
    <p>Use overlapping-holdings checks when you already own an all-in-one fund and are tempted to add satellite ETFs that hold the same giants.</p>
    <p>Teach the household the plan in plain language once a year so a spouse can continue it without you narrating every ticker.</p>
    <p>If you use a planner or robo, bring the one-pager to the meeting. Incomplete inputs produce incomplete advice.</p>
    <p>Track the all-in cost once a year the way Total Cost Reporting will show it: management fee, fund expenses, and any account minimums that bite small balances.</p>
    <p>Prefer in-kind transfers when leaving a firm if tax lots matter. Cash transfers can create accidental sales.</p>
    <p>Do not invent features your broker does not publish. Recurring buys, fractional shares and DRIPs differ by platform—read the help page.</p>
    <p>For RESPs, pair the investment glide path with the grant calendar. Missing CESG room to chase a hot sector is usually a poor trade.</p>
    <p>For dividend payers, read distribution composition and payout coverage before celebrating a high yield. Frequency of payment is not quality.</p>
    <p>For US-listed funds inside an RRSP, remember withholding and FX costs can dominate a tiny MER difference. Run the math with your broker's FX spread.</p>
    <p>When balances are small, a monthly minimum fee can dominate a headline percentage. Always convert fees to dollars on your balance.</p>
    <p>Finally, write the next action with a date: contribute, rebalance, transfer, or verify a fee page. Plans without calendar dates are wishes.</p>
    <h2>Extra guardrails that save money</h2>
    <p>Name the job of every dollar before you name the ticker. Emergency cash, near-term tuition, and long-term growth need different volatility budgets.</p>
    <p>Refuse product pitches that skip the account type. An RRSP, TFSA, RESP and taxable account are not interchangeable wrappers for the same idea.</p>
    <p>When a salesperson emphasizes a bonus or match, write the clawback rules beside the dollar amount. Bonuses that require twelve months of custody are still costs if you planned to leave.</p>
    <p>Rebalance with new cash first. Selling to rebalance in a taxable account can create capital gains you did not need this year.</p>
    <p>Keep a two-fund maximum for most passive households unless you have a written reason for a third. Complexity is a fee you pay in attention.</p>
    <p>If you cannot find a fee on the provider's own domain, treat third-party tables as leads, not sources. This site follows the same rule.</p>
    <p>Review currency conversion settings before the first US purchase. Default FX spreads often dwarf commissions on discount brokerages.</p>
    <p>For stock pickers, write a sell rule before the buy. Without it, every dip becomes a personality test.</p>
    <p>For income investors, measure total return and distribution composition, not just the headline yield printed on a quote screen.</p>
    <p>For hands-off investors, ask what happens if the firm raises fees. A calendar reminder to re-read the pricing page beats a five-year assumption.</p>
    <p>Parents should put RESP promoter names and grant SINs in the same folder as the will. Successor subscriber paperwork is easier before an emergency.</p>
    <p>Couples should decide whether accounts are joint, individual, or a mix before optimizing fees. Relationship structure constrains the fee math.</p>
    <p>Small business owners must separate corporate investing rules from personal TFSA folklore. Wrong entity choice is expensive to unwind.</p>
    <p>Immigrants and cross-border families should confirm residency and treaty issues with a qualified tax professional before copying a neighbour's ETF list.</p>
    <p>Students receiving EAPs should estimate the taxable portion before April. Surprises on a part-time income still create filing stress.</p>
    <p>Retirees near OAS recovery thresholds should model dividend gross-up effects before loading a taxable account with high-yield payers.</p>
    <p>Anyone using leverage or margin should treat CIPF and CDIC as unrelated to liquidation risk. Borrowed money fails differently than a dealer insolvency.</p>
    <p>Keep a short "do not buy" list for products you already researched and rejected. It stops you from re-opening closed debates every earnings season.</p>
    <p>When friends share tips in a group chat, ask for the SEDAR+ filing or fee PDF. Social proof is not a primary source.</p>
    <p>Update the one-pager after every major life event: house, baby, job change, inheritance. Static plans drift.</p>
    <p>Measure progress by contributions and policy adherence first, returns second. You control the former more than the latter.</p>

    <h2>How to review without spiralling</h2>
    <p>Set a 45-minute timer for the annual review. When it ends, stop researching and execute the one written action. Open-ended research nights are how portfolios accumulate unused cash.</p>
    <p>Compare this year's fee dollars to last year's fee dollars on the same balance band. Percentage headlines hide whether you crossed a minimum or a tier.</p>
    <p>If you changed jobs, update beneficiary forms before you optimize ETFs. Unclaimed accounts and wrong beneficiaries are larger risks than a 0.05% MER gap.</p>
    <p>Print or PDF the one-pager into the same folder as your will and insurance. Digital-only plans disappear when passwords do.</p>
    <p>Refuse to add a fifth ETF until you delete one. Cap rules force clarity.</p>
    <p>When markets fall 20%, open the stay-the-course checklist before the order ticket. Liquidity needs are the only good reason to sell a long-term equity sleeve early.</p>
    <p>Celebrate contribution streaks the way athletes celebrate training streaks. Consistency compounds quieter than stock picks.</p>
    <p>If a product needs a webinar to understand, it is probably not a core holding for a passive household.</p>
    <p>Keep charitable giving and investing policies separate unless you use a formal donor-advised structure. Mixing goals muddies both.</p>
    <p>End every review by scheduling the next one. Unscheduled reviews happen during panic, which is the worst time.</p>

    <h2>Closing discipline</h2>
    <p>After you publish a household policy, stop collecting tickers for thirty days. Implementation beats another tab of research.</p>
    <p>If you feel behind peers on social media, hide those accounts during contribution week. Comparison is a fee paid in envy.</p>
    <p>Use Canadian coins in any physical savings ritual you keep with kids—never foreign novelty money—so the household story matches the real currency system.</p>
    <p>When a fund merger or ticker change arrives by mail, update the one-pager the same day. Stale tickers break automation.</p>
    <p>Keep a paper notepad beside complex tax moves. Digital notes get lost in chat apps; a dated notebook survives device upgrades.</p>
    <p>Thank your future self by leaving passwords and account maps where a spouse can find them under an agreed label—not in your head.</p>
    <p>If this article disagreed with a salesperson, keep both documents and highlight the conflicting sentences. Clarity comes from juxtaposition, not loyalty.</p>
    <p>You are done when the next calendar action exists. Everything else is optional colour.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/international-non-residents/competent-authority-agreements-notices/canada-united-states.html">CRA: Canada–United States competent authority / treaty materials</a>, reviewed October 24, 2026</li>
        <li><a href="https://www.irs.gov/individuals/international-taxpayers/united-states-income-tax-treaties-a-to-z">IRS: US income tax treaties</a>, reviewed October 24, 2026</li>
        <li><a href="https://www.vanguard.ca/">Vanguard Canada fund documents (example provider)</a>, reviewed October 24, 2026</li>
    </ul>
    <h2>Related reading</h2>
    <ul>
        <li><a href="/blog/us-withholding-tax-by-account-canada/">US withholding by account</a></li>
        <li><a href="/blog/norberts-gambit-canada-guide/">Norbert's Gambit</a></li>
        <li><a href="/blog/best-etfs-tfsa-canada/">Best ETFs for a TFSA</a></li>
        <li><a href="/blog/couch-potato-portfolio-canada/">Couch Potato</a></li>
    </ul>

    <div class="cta-section">
        <p><strong>Tax and accounts decide what you keep.</strong></p>
        <p>The 2026 tax guide covers RRSP, TFSA, RESP and taxable-account basics.</p>
        <a href="/ebooks/tax-guide/" class="cta-button">Get the 2026 Tax Guide — $49 CAD</a>
    </div>


    ${invFooter("General education about RRSP ETF structure and withholding as of October 24, 2026. Not tax advice. Verify with CRA, treaty text and your broker.", "October 24, 2026")}

</div>`,
  '2026-10-24'
);
