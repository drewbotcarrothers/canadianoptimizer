import { invFooter, invPost } from './types';

const FP = 'https://fpcanada.ca/planner-directory';
const NRS = 'https://www.aretheyregistered.ca/';
const GSAM = 'https://www.getsmarteraboutmoney.ca/learning-path/working-with-an-advisor/questions-to-ask-your-advisor/';

export const feeOnlyAdviceOnlyPlannersCanada = invPost(
  'hands-off',
  'fee-only-advice-only-planners-canada',
  'Fee-Only Planners in Canada: What They Charge and Why',
  "How fee-only and advice-only planners differ from commission and AUM advice, what plans can cost, and how to check a CFP or QAFP on FP Canada's directory.",
  `<div class="container">

    <div class="hook">
        Paying someone who does not sell products changes the incentives. <span class="highlight">Fee-only and advice-only</span> planners charge for the plan, not for the fund.
    </div>

    <p>A fee-only or advice-only planner is paid by you—hourly, by project, or on a subscription—not by commissions or trailing commissions on investments they put you in. FP Canada's planner directory lets you confirm current CFP® or QAFP® certification. It does not, by itself, filter for fee-only compensation, so you still have to ask how they are paid.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>Fee-only / advice-only means the planner is paid by the client, not by product manufacturers through commissions.</li>
            <li>Typical deliverable is a written financial plan you implement at a low-cost brokerage or robo-advisor.</li>
            <li>Confirm CFP or QAFP status on <a href="${FP}">FP Canada's planner directory</a>; confirm securities registration on the National Registration Search when they also trade or advise on securities.</li>
            <li>Ask for the all-in engagement cost in dollars before you start.</li>
            <li>This model shines for one-time or periodic planning; ongoing portfolio management is a different service.</li>
        </ul>
    </div>

    <p>This guide is part of <a href="/category/investing/hands-off/">Hands-off investing</a>. Compare with <a href="/blog/is-a-financial-advisor-worth-it-canada/">is a 1% advisor worth it</a> and <a href="/blog/robo-advisor-vs-financial-advisor-canada/">robo vs advisor</a>.</p>

    <nav aria-label="On this page">
        <ul>
            <li><a href="#define">What do fee-only and advice-only mean?</a></li>
            <li><a href="#cost">What does a plan usually cost?</a></li>
            <li><a href="#check">How do you check credentials?</a></li>
            <li><a href="#fit">When is this model a fit?</a></li>
            <li><a href="#example">How would Alex hire a planner?</a></li>
            <li><a href="#faq">FAQ</a></li>
        </ul>
    </nav>

    <h2 id="define">What do fee-only and advice-only mean?</h2>
    <div class="table-wrapper">
        <table>
            <caption>Advice models compared (compensation focus)</caption>
            <thead><tr><th>Model</th><th>Who pays the advisor</th><th>Typical conflict to watch</th></tr></thead>
            <tbody>
                <tr class="highlight-row"><td>Fee-only / advice-only</td><td>You (hourly, project, retainer)</td><td>Scope creep; under-implementation</td></tr>
                <tr><td>Fee-based (AUM %)</td><td>You as % of assets</td><td>Gathering assets over planning</td></tr>
                <tr><td>Commission / embedded</td><td>Product manufacturers</td><td>Product bias</td></tr>
            </tbody>
        </table>
    </div>
    <p>Language is messy. "Fee-based" often means AUM percentage. "Fee-only" should mean no commissions. Ask for the answer in writing: "Do you receive any trailing commissions, referral fees or product-based compensation on my file?"</p>

    <h2 id="cost">What does a plan usually cost?</h2>
    <p>Published directories of advice-only firms list engagement fees that vary widely by complexity—often thousands of dollars for a comprehensive plan. Treat any specific dollar range you see on a private directory as that directory's data, dated on that page, not as a regulated price list. Always get a written quote for your situation.</p>
    <div class="tip-box">
        <strong>Compare apples to apples.</strong>
        <p>A $3,000 plan you follow in a 0.20% ETF portfolio can be cheaper over a decade than a 1% AUM fee on $400,000 ($4,000 a year).</p>
    </div>

    <div class="chart-container">
        <p class="chart-title">Illustrative 10-year advice cost: $3,000 plan once vs 1% on $400,000</p>
        <div class="bar-chart">
            <div class="bar-group"><div class="bar" style="height:8%"></div><span class="bar-label">Plan<br>$3k</span></div>
            <div class="bar-group"><div class="bar" style="height:100%"></div><span class="bar-label">1% AUM<br>$40k</span></div>
        </div>
        <p class="chart-source">Illustration assumes a flat $400,000 for 10 years at 1% and a one-time $3,000 plan. Not a quote.</p>
    </div>

    <h2 id="check">How do you check credentials?</h2>
    <div class="flowchart">
        <div class="flow-node decision">Do they claim CFP or QAFP?</div>
        <div class="flow-arrow"></div>
        <div class="flow-branch-container">
            <div class="flow-node result">Verify on FP Canada planner directory</div>
            <div class="flow-node decision">Do they advise on securities or manage money?</div>
        </div>
        <div class="flow-arrow"></div>
        <div class="flow-branch-container">
            <div class="flow-node result">Check National Registration Search</div>
            <div class="flow-node result">Read engagement letter for scope and liability</div>
        </div>
    </div>
    <p>Also use <a href="/blog/questions-to-ask-financial-advisor-canada/">questions to ask an advisor</a> and <a href="/blog/check-financial-advisor-registration-canada/">how to check registration</a>.</p>

    <h2 id="fit">When is this model a fit?</h2>
    <ul>
        <li>You want a written plan but will invest yourself or with a robo-advisor.</li>
        <li>Your situation is complex once (pension decision, divorce, inheritance) rather than needing weekly portfolio trades.</li>
        <li>You are comfortable implementing recommendations.</li>
    </ul>
    <p>It is a weaker fit if you will not implement, or if you need discretionary portfolio management. Those services require different registration and a different fee conversation.</p>

    <h2 id="example">How would Alex hire a planner?</h2>
    <div class="example-box">
        <strong>Illustrative example: Alex, 38, Victoria</strong>
        <div class="example-calculation">
            <div class="line"><span>Need</span><span>RRSP vs FHSA vs taxable plan</span></div>
            <div class="line"><span>Check</span><span>CFP on FP Canada directory</span></div>
            <div class="line"><span>Written quote</span><span>Flat engagement fee</span></div>
            <div class="line total"><span>Implement at</span><span>Self-directed ETF portfolio</span></div>
        </div>
        <p>Alex asks three planners the same scope question and compares deliverables, not just price. Amounts are illustrative.</p>
    </div>

    <h2>Does your province change anything?</h2>
    <p>Financial planner title rules differ (for example Ontario and Saskatchewan regulate the title; Quebec has AMF rules). Certification through FP Canada is national. Securities advice still needs registration where required.</p>

    <h2>Checklist</h2>
    <ul class="checklist">
        <li>Compensation model in writing</li>
        <li>CFP/QAFP checked on FP Canada</li>
        <li>Registration checked if they touch securities</li>
        <li>Scope and deliverables listed</li>
        <li>Implementation path chosen</li>
    </ul>


    <h2 id="letter">What should the engagement letter say?</h2>
    <p>Before you pay, get an engagement letter that states scope, deliverables, timeline, total fee, what happens if you pause, and whether the planner will implement trades. Advice-only relationships often stop at recommendations. If you want someone to place trades, that is usually a different registration and a different agreement.</p>
    <p>Ask whether the fee is deductible in a non-registered context. CRA's line 22100 rules for carrying charges and investment counsel fees are narrow and exclude many registered-account fees. Do not assume a planning invoice is deductible without reading the CRA page or asking a tax professional.</p>
    <p>Interview at least two planners with the same written scope. Compare sample plan outlines, not marketing adjectives. A cheaper plan that you ignore is more expensive than a clearer plan you implement in a low-cost ETF portfolio.</p>


    <h2 id="diy">How fee-only advice pairs with DIY investing</h2>
    <p>The common pattern is: pay for a plan, open a low-cost brokerage or robo account, buy the ETFs on the plan, and revisit the planner every one to three years or after a life event. That pattern keeps product incentives out of the annual fee while still giving you a professional second brain for tax and retirement order-of-operations questions.</p>
    <p>Bring your own numbers. Net worth, pension estimates, TFSA and RRSP room, and a spending target make the engagement shorter and cheaper. Planners bill for time spent hunting basic facts you could have pasted into a worksheet.</p>
    <p>If a planner pushes a proprietary product while calling themselves fee-only, pause. Ask again how they are paid. Check registration. Walk away if the answers stay vague.</p>


    <h2 id="redflags">Red flags in a planning sales pitch</h2>
    <ul>
        <li>Refusal to put compensation in writing</li>
        <li>Pressure to buy a proprietary fund the same week as the "plan"</li>
        <li>Guaranteed return language</li>
        <li>Dismissal of low-cost ETFs without numbers</li>
        <li>Credentials you cannot find on FP Canada or the National Registration Search</li>
    </ul>
    <p>Good planners are comfortable with you implementing at a discount brokerage. They may still recommend a robo-advisor for behavioural reasons. What they should not need is a commission to make the plan work.</p>
    <p>If your estate, business or cross-border life is complex, expect to pay more and to involve a tax lawyer or CPA for pieces the planner does not cover. Fee-only planning is not a substitute for formal tax opinions on aggressive strategies.</p>
    <p>Revisit the relationship when your net worth or complexity jumps—sale of a business, inheritance, divorce. The right model at $150,000 may be wrong at $1.5 million.</p>


    <h2 id="mistakes2">Mistakes when hiring a fee-only planner</h2>
    <ul>
        <li>Hiring on personality before verifying credentials</li>
        <li>Accepting vague scope ("we'll look at everything")</li>
        <li>Not asking about product-based compensation in writing</li>
        <li>Paying for a plan you will not implement</li>
        <li>Never scheduling the follow-up year</li>
    </ul>
    <p>Implementation is part of value. A planner who offers an implementation session—or a clear DIY checklist—usually saves you from a binder that gathers dust.</p>
    <p>If two planners quote very different fees, compare deliverables line by line. A lower fee with a thinner plan can be fine for simple households and a false economy for complex ones.</p>
    <p>Employees with pensions should bring the pension booklet. Planners waste hours reverse-engineering benefits you could have uploaded on day one.</p>

    <h2 id="faq">Frequently asked questions</h2>
    <h3>What is a fee-only financial planner in Canada?</h3>
    <p>A planner paid by the client without commissions from products. Confirm in writing. Check the linked primary sources in the Sources section for the figures and dates used in this article.</p>
    <h3>Is fee-only the same as fee-based?</h3>
    <p>No. Fee-based often means a percentage of assets. Ask clarifying questions. Check the linked primary sources in the Sources section for the figures and dates used in this article.</p>
    <h3>How do I find a CFP?</h3>
    <p>Use FP Canada's planner directory, then interview for compensation and fit. Check the linked primary sources in the Sources section for the figures and dates used in this article.</p>
    <h3>Do I still need a brokerage?</h3>
    <p>Usually yes. Advice-only planners typically do not custody your assets. Check the linked primary sources in the Sources section for the figures and dates used in this article.</p>
    <h3>Can a fee-only planner sell me mutual funds?</h3>
    <p>If they are truly fee-only, they should not be paid by the fund. Product sales imply other registration and compensation—ask. Check the linked primary sources in the Sources section for the figures and dates used in this article.</p>
    <h3>Is a one-time plan enough?</h3>
    <p>For many DIY investors, yes, with a periodic update. Complex lives may need a retainer. Check the linked primary sources in the Sources section for the figures and dates used in this article.</p>
    <h3>Where do I check registration?</h3>
    <p><a href="${NRS}">aretheyregistered.ca</a> (National Registration Search). Check the linked primary sources in the Sources section for the figures and dates used in this article.</p>


    <h2 id="together">Putting fee-only advice into action</h2>
    <p>After the plan arrives, schedule implementation weeks on your calendar immediately. Plans die in inboxes. Open the brokerage account, set contribution automation and place the first trades while the rationale is fresh. Check the linked primary sources in the Sources section for the figures and dates used in this article.</p>
    <p>Store the plan PDF with your will and insurance folder. Update beneficiaries and powers of attorney in the same weekend if the plan flagged gaps. Check the linked primary sources in the Sources section for the figures and dates used in this article.</p>
    <p>Pay the invoice promptly and ask for a receipt that describes the service. If you intend to explore deductibility, you will need clear documentation. Check the linked primary sources in the Sources section for the figures and dates used in this article.</p>
    <p>Twelve months later, book a one-hour follow-up—either with the same planner or a DIY review checklist—to confirm you still match the plan after raises, babies or house purchases. Check the linked primary sources in the Sources section for the figures and dates used in this article.</p>
    <p>If implementation stalls because you fear choosing ETFs, a low-cost robo-advisor can be the bridge. Paying 0.4%–0.5% to a robo after a fee-only plan can still beat an opaque 1.5%–2% embedded solution—run your own numbers. Check the linked primary sources in the Sources section for the figures and dates used in this article.</p>

    <p>Some planners offer ongoing subscription advice without managing assets. That can be a good middle path if you want an annual check-in without AUM fees. Ask what the subscription includes—email access, one meeting, tax-season questions—and what triggers extra invoices. Put those boundaries in the engagement letter beside the headline price so you are not surprised in April.</p><p>If your workplace offers a paid financial counselling benefit, ask whether it is truly advice-only and whether your information stays confidential from your employer. Benefits vary widely.</p>

    <p>Ask whether meeting notes will be shared after each session. Written notes reduce "I thought you said" disputes and help you implement. If a planner refuses to share notes, treat that as a process smell even when credentials check out.</p>

    <p>Confirm whether GST/HST applies to the planning fee on the invoice before you budget.</p>

    <p>Ask for a sample redacted plan outline before you pay the full fee. You are not asking for free advice; you are checking that the deliverable matches the marketing page. Serious planners usually have a sanitized sample or a detailed table of contents they can share.</p>

    <p>Bring last year's tax return summary, pension statements and mortgage details to the first meeting. Incomplete inputs produce incomplete plans. If privacy is a concern, ask how the planner stores files and when they delete them after the engagement ends.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="${FP}">FP Canada: Planner Directory</a>, reviewed October 24, 2026</li>
        <li><a href="${NRS}">CSA: National Registration Search</a>, reviewed October 24, 2026</li>
        <li><a href="${GSAM}">GetSmarterAboutMoney.ca: Questions to ask your advisor</a>, reviewed October 24, 2026</li>
    </ul>

    <h2>Related reading</h2>
    <ul>
        <li><a href="/blog/is-a-financial-advisor-worth-it-canada/">Is a 1% advisor worth it?</a></li>
        <li><a href="/blog/questions-to-ask-financial-advisor-canada/">Questions to ask an advisor</a></li>
        <li><a href="/blog/check-financial-advisor-registration-canada/">Check advisor registration</a></li>
        <li><a href="/blog/advisor-complaint-obsi-cipf-canada/">When an advisor gets it wrong</a></li>
    </ul>

    <div class="cta-section">
        <p><strong>Bring a sharper tax question to your planner.</strong></p>
        <p>The 2026 tax guide covers RRSP, TFSA, FHSA and retirement income topics planners expect you to understand.</p>
        <a href="/ebooks/tax-guide/" class="cta-button">Get the 2026 Tax Guide — $49 CAD</a>
    </div>

    ${invFooter("General education about advice models as of October 24, 2026. Cost illustrations are not quotes. This is not a referral to any planner.", "October 24, 2026")}

</div>`,
  '2026-10-24'
);
