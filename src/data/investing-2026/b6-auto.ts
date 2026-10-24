import { invFooter, invPost } from './types';

export const automatingPassivePortfolioBrokersCanada = invPost(
  'passive-etf',
  'automating-passive-portfolio-brokers-canada',
  'Automating Passive ETF Investing at Canadian Brokers',
  'Recurring buys, fractional shares and DRIPs differ by broker. How to automate a passive ETF plan without inventing features your platform does not offer.',
  `<div class="container">

    <div class="hook">Automation fails when blogs invent features. <span class="highlight">Use only what your broker's help page documents</span>: recurring deposits, recurring buys, fractional shares and DRIPs each have different coverage.</div>
    <p>A durable passive plan is contribution automation plus a written ETF policy. Brokers differ on whether you can schedule ETF purchases, buy fractions, or enroll synthetic DRIPs. Build the workflow from primary help pages dated the week you set it up—not from memory of a Twitter thread.</p>
    <div class="callout"><strong>Key takeaways:</strong><ul>
            <li>Automate the contribution first; the ticker second.</li>
            <li>Confirm recurring buy, fractional share and DRIP support on your broker's own help pages.</li>
            <li>DRIPs reinvest distributions; they do not replace a savings rate.</li>
            <li>All-in-one ETFs reduce the number of recurring orders you must maintain.</li>
            <li>Re-check features after app redesigns—menus move, capabilities change.</li>
    </ul></div>
    <p>Part of <a href="/category/investing/passive-etf/">Passive ETF investing</a>. Pair with <a href="/blog/couch-potato-portfolio-canada/">Couch Potato</a> and <a href="/blog/drip-dividend-reinvestment-canada/">DRIPs</a>.</p>
    <nav aria-label="On this page"><ul>
    <li><a href="#stack">Automation stack</a></li>
    <li><a href="#features">Feature checklist by type</a></li>
    <li><a href="#setup">Setup sequence</a></li>
    <li><a href="#example">Example monthly workflow</a></li>
    <li><a href="#faq">FAQ</a></li></ul></nav>
    <h2 id="stack">Automation stack</h2>
    <p>Think in layers: payroll or bank transfer → registered account deposit → ETF purchase → distribution handling. Each layer can fail independently. Document the institution name for every hop.</p>
    <div class="flowchart"><div class="flow-node">Payroll or bank recurring transfer</div>
    <div class="flow-arrow"></div><div class="flow-node">Broker deposit lands</div>
    <div class="flow-arrow"></div><div class="flow-node decision">Recurring buy available?</div>
    <div class="flow-arrow"></div><div class="flow-branch-container">
    <div class="flow-node result">Yes: schedule ETF purchase</div>
    <div class="flow-node result">No: calendar reminder + manual market order</div></div></div>
    <h2 id="features">Feature checklist by type</h2>
    <div class="table-wrapper"><table><caption>What to verify on broker help pages (do not invent)</caption>
    <thead><tr><th>Feature</th><th>Why it matters</th><th>Verify</th></tr></thead>
    <tbody>
    <tr><td>Recurring deposit</td><td>Funding without willpower</td><td>Limit, timing, registered account support</td></tr>
    <tr class="highlight-row"><td>Recurring buy</td><td>Turns cash into ETFs automatically</td><td>Which tickers, CAD/USD, order type</td></tr>
    <tr><td>Fractional shares</td><td>Invest odd cash amounts</td><td>Eligible symbols and account types</td></tr>
    <tr><td>Synthetic DRIP</td><td>Reinvest distributions</td><td>Enrollment and partial-share rules</td></tr>
    </tbody></table></div>
    <h2 id="setup">Setup sequence</h2>
    <ol>
    <li>Write the target ETF and account (TFSA/RRSP/FHSA) on one page.</li>
    <li>Open the broker help articles for recurring deposits and buys; save PDFs with dates.</li>
    <li>Set the deposit two business days before the intended buy date.</li>
    <li>If recurring buys are unavailable, create a phone calendar event the day cash arrives.</li>
    <li>Enroll DRIP only after you understand ACB record-keeping for taxable accounts.</li>
    </ol>
    <h2 id="example">Example monthly workflow</h2>
    <div class="example-box"><strong>Illustrative: Maya, TFSA, one all-in-one ETF</strong>
    <div class="example-calculation">
    <div class="line"><span>Payday transfer</span><span>$500</span></div>
    <div class="line"><span>Broker deposit day</span><span>+1 business day</span></div>
    <div class="line"><span>Buy or recurring order</span><span>all-in-one ETF</span></div>
    <div class="line total"><span>Annual review</span><span>fee page + allocation</span></div>
    </div><p>Amounts are illustrative. Confirm features on her broker's help centre.</p></div>

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
    <h3>Which broker is best for automation?</h3>
    <p>Compare current help pages for your must-have features; rankings go stale quickly.</p>
    <h3>Do I need fractional shares?</h3>
    <p>Helpful for small buys; not required if you accumulate cash to a full share.</p>
    <h3>Is a DRIP enough?</h3>
    <p>No. DRIPs reinvest distributions; they do not create new savings.</p>
    <h3>Can I automate US-listed ETFs?</h3>
    <p>Only if your broker supports recurring buys in USD for that symbol—verify.</p>
    <h3>What if the app changes?</h3>
    <p>Re-read help pages after major redesigns and keep a manual backup calendar.</p>
    <h3>Should I automate taxable accounts?</h3>
    <p>Yes for contributions, but track ACB carefully when DRIPs create many lots.</p>
    <h3>All-in-one or three-fund?</h3>
    <p>All-in-one reduces automation moving parts for most households.</p>

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
        <li><a href="https://www.wealthsimple.com/en-ca/learn">Wealthsimple Learn / help (verify feature articles)</a>, reviewed October 24, 2026</li>
        <li><a href="https://www.questrade.com/learning">Questrade learning / help</a>, reviewed October 24, 2026</li>
        <li><a href="https://www.getsmarteraboutmoney.ca/">GetSmarterAboutMoney.ca</a>, reviewed October 24, 2026</li>
    </ul>
    <h2>Related reading</h2>
    <ul>
        <li><a href="/blog/couch-potato-portfolio-canada/">Couch Potato</a></li>
        <li><a href="/blog/drip-dividend-reinvestment-canada/">DRIPs</a></li>
        <li><a href="/blog/model-etf-portfolios-canada/">Model portfolios</a></li>
        <li><a href="/blog/best-online-brokerages-canada/">Best online brokerages</a></li>
    </ul>

    <div class="cta-section">
        <p><strong>Tax and accounts decide what you keep.</strong></p>
        <p>The 2026 tax guide covers RRSP, TFSA, RESP and taxable-account basics.</p>
        <a href="/ebooks/tax-guide/" class="cta-button">Get the 2026 Tax Guide — $49 CAD</a>
    </div>


    ${invFooter("General education about brokerage automation features as of October 24, 2026. Feature availability changes—verify on broker pages.", "October 24, 2026")}

</div>`,
  '2026-10-24'
);
