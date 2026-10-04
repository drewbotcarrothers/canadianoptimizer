import { articleFooter, octPost } from './types';

const taxDisclaimer =
  'This is general education about Canadian income tax as of October 4, 2026. It is not tax, legal, or investment advice, and it is not a filing position. Withholding rates and brackets change. The withholding table is CRA’s withdrawals page and Revenu Québec’s source-deduction page, reviewed on October 4, 2026. The “tax on the extra income” figures use this site’s 2026 taxable-income calculator: federal and provincial tax after the basic personal amount, Quebec abatement where it applies, and Ontario surtax. They omit CPP, EI, the Ontario health premium, and every other credit. They are illustrations, not a T1. Confirm the slip and consult a tax professional for your file.';

const footer = articleFooter('Taxes', taxDisclaimer);

export const oct2026TaxPostsC = [
  octPost(
    'Taxes',
    'taxes',
    'rrsp-withdrawal-tax-by-province',
    'How Much Tax Do You Pay on an RRSP Withdrawal? Withholding vs What You Owe',
    'Outside Quebec, RRSP withholding is 10, 20, or 30 percent. The tax you owe is your bracket. Splitting withdrawals does not change the bill.',
    `<div class="container">

    <div class="hook">
        The bank takes 30 percent of a $20,000 RRSP withdrawal and calls it tax. It is a down payment. In April the withdrawal is just income, stacked on everything else you earned, and the province you live in decides whether that 30 percent was too much, about right, or <span class="highlight">a few thousand dollars short</span>.
    </div>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>CRA's withholding scale for residents outside Quebec is 10 percent up to $5,000, 20 percent from $5,001 to $15,000, and 30 percent over $15,000. The rate is applied to each withdrawal, which is why four $5,000 withdrawals can be withheld at 10 percent.</li>
            <li>In Quebec, CRA withholds a lower federal slice (5, 10, and 15 percent on the same bands) and Revenu Québec withholds 14 percent on a single payment. Combined, that is 19, 24, and 29 percent.</li>
            <li>Withholding is not the tax. The withdrawal is included in income. You owe the difference, or you get a refund, when you file.</li>
            <li>Splitting one $20,000 withdrawal into four $5,000 withdrawals changes the cash the bank holds back. It does not change taxable income, so it does not change the tax.</li>
            <li>Home Buyers' Plan and Lifelong Learning Plan withdrawals are not taxed as income when the rules are met, and Revenu Québec says not to withhold on those amounts within the plan limits. A cash withdrawal that is not one of those plans is ordinary income.</li>
        </ul>
    </div>

    <p>Contributions are the <a href="/blog/rrsp-playbook/">RRSP playbook</a>. A planned series of withdrawals in the years before OAS is the <a href="/blog/rrsp-meltdown-strategy/">RRSP meltdown</a>. This page is the simpler question: you took money out, the issuer withheld, and you want the April number. The brackets live in the <a href="/blog/canada-income-tax-calculator/">income tax calculator</a> and the <a href="/blog/provincial-tax-rates/">provincial rate tables</a>.</p>

    <h2>What does the issuer have to withhold?</h2>

    <p>CRA's page "Tax rates on withdrawals," updated on the site with a January 29, 2026 page date, states the resident scale. The financial institution withholds and remits. You get the rest. Quebec is called out on that page: the federal percentages in parentheses are lower, and provincial tax is also withheld. Revenu Québec's page on payments from an RRSP says to withhold 14 percent on a single payment. A periodic annuity payment from an RRSP is a different instruction on that page: Revenu Québec says not to withhold on a periodical annuity. A lump sum is not an annuity. Read the slip you were actually issued.</p>

    <table>
        <caption>Lump-sum RRSP withholding for residents, from CRA and Revenu Québec</caption>
        <thead>
            <tr>
                <th>Amount of the withdrawal</th>
                <th>Rest of Canada</th>
                <th>Quebec federal slice</th>
                <th>Quebec provincial slice</th>
                <th>Quebec combined</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Up to $5,000</td>
                <td>10%</td>
                <td>5%</td>
                <td>14%</td>
                <td>19%</td>
            </tr>
            <tr>
                <td>$5,001 to $15,000</td>
                <td>20%</td>
                <td>10%</td>
                <td>14%</td>
                <td>24%</td>
            </tr>
            <tr>
                <td>Over $15,000</td>
                <td>30%</td>
                <td>15%</td>
                <td>14%</td>
                <td>29%</td>
            </tr>
        </tbody>
    </table>

    <p>Non-residents are not on that scale. CRA says withholding is 25 percent unless a tax treaty reduces it, and points to Information Circular IC76-12. A Canadian resident who has not told the issuer they left is a different problem. Residency is a fact. The form is how the issuer knows.</p>

    <p>The Home Buyers' Plan can take up to $60,000 out of an RRSP without including it in income, if you qualify and you repay on the schedule. Revenu Québec lists that exclusion, and the Lifelong Learning Plan limits of $10,000 in a year and $20,000 over the participation period, as amounts not to withhold. Those are not "low-tax withdrawals." They are withdrawals under a plan. Break the plan and the missed repayment is income. The plan rules are the <a href="/blog/home-buyers-plan-hbp-guide/">Home Buyers' Plan guide</a>.</p>

    <h2>Why the percentage on the receipt is not your tax rate</h2>

    <p>The issuer does not know your other income, your province's brackets, or your credits. It applies a flat scale so that something is prepaid. When you file, the gross withdrawal is income. The tax withheld is a credit, the same way tax withheld on a paycheque is a credit. If the withholding was larger than the tax on that extra income, you are refunded the difference. If it was smaller, you pay the difference. People experience the second case as a surprise because the cash already left the account and the bill arrives in the spring.</p>

    <p>A RRIF is not this table. A direct transfer from an RRSP to a RRIF is not a withdrawal, and the issuer does not withhold on the transfer. The <a href="/blog/rrsp-to-rrif-conversion/">RRSP to RRIF conversion</a> page is that door. Tax shows up when the RRIF pays you. This article does not restate a RRIF minimum-withholding rule it is not quoting from the withdrawals page. Ask the carrier what they will withhold on the amount above the minimum you actually request.</p>

    <h2>I ran the numbers: withheld versus assessed</h2>

    <p>The method is deliberate and narrow. Take a taxable income before the withdrawal. Add $20,000. Run both through this site's 2026 calculator, which uses CRA's 2026 federal brackets and the provincial brackets in the same file, then the basic personal amount and, in Ontario, the surtax. Subtract. That difference is the tax on the extra $20,000 inside this model. Compare it with 30 percent of $20,000, which is $6,000, the withholding on a single withdrawal over $15,000 outside Quebec. In Quebec the comparable withholding on one $20,000 lump sum is 29 percent, or $5,800.</p>

    <p>What the model leaves out matters. There is no CPP, no EI, no Canada employment amount, no Ontario health premium, no medical credit, no donation credit, and no pension income amount. A real T1 can move the bill by more than the gap in the table. Use the table to see the shape of the surprise, then put your own return in software or in front of a preparer.</p>

    <table>
        <caption>Tax on an extra $20,000 of taxable income, 2026 calculator, versus lump-sum withholding</caption>
        <thead>
            <tr>
                <th>Province</th>
                <th>Other taxable income</th>
                <th>Tax on the extra $20,000</th>
                <th>Withheld on one $20,000 withdrawal</th>
                <th>Still to pay (or refund) in this model</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Ontario</td>
                <td>$40,000</td>
                <td>$4,156.47</td>
                <td>$6,000</td>
                <td>Refund position of $1,843.53</td>
            </tr>
            <tr>
                <td>Ontario</td>
                <td>$60,000</td>
                <td>$5,930.00</td>
                <td>$6,000</td>
                <td>Refund position of $70.00</td>
            </tr>
            <tr>
                <td>Ontario</td>
                <td>$90,000</td>
                <td>$6,259.73</td>
                <td>$6,000</td>
                <td>Owe $259.73</td>
            </tr>
            <tr>
                <td>Ontario</td>
                <td>$140,000</td>
                <td>$8,837.92</td>
                <td>$6,000</td>
                <td>Owe $2,837.92</td>
            </tr>
            <tr>
                <td>British Columbia</td>
                <td>$90,000</td>
                <td>$5,899.62</td>
                <td>$6,000</td>
                <td>Refund position of $100.38</td>
            </tr>
            <tr>
                <td>Alberta</td>
                <td>$90,000</td>
                <td>$6,100.00</td>
                <td>$6,000</td>
                <td>Owe $100.00</td>
            </tr>
            <tr>
                <td>Quebec</td>
                <td>$90,000</td>
                <td>$7,289.50</td>
                <td>$5,800</td>
                <td>Owe $1,489.50</td>
            </tr>
            <tr>
                <td>Quebec</td>
                <td>$140,000</td>
                <td>$9,492.00</td>
                <td>$5,800</td>
                <td>Owe $3,692.00</td>
            </tr>
        </tbody>
    </table>

    <p>Read the Quebec rows with the 29 percent withholding, not the 30 percent figure from the other provinces. At $90,000 of other taxable income, the model tax on the extra $20,000 is $7,289.50. The issuer would have held back $5,800. The gap is about $1,490 before any credit the calculator ignores. At $140,000 the gap is about $3,692. The withholding scale does not know that you are in a higher Quebec bracket. Effective rates in the model run from about 27.5 percent on a $40,000 base to about 47.5 percent on a $140,000 base for that extra $20,000. Neither number is a flat "Quebec RRSP tax."</p>

    <div class="example-box">
        <strong>The $20,000 withdrawal, three ways, same Ontario income of $90,000</strong>
        <p>One withdrawal of $20,000: tax in the model $6,259.73, withholding $6,000, about $260 still to pay. One withdrawal of $5,000, if that were the only extra income: tax $1,484.30, withholding $500, about $984 still to pay. The small withdrawal is withheld at 10 percent and the bracket is near 30 percent, so the spring bill is a larger share of a smaller amount. Four withdrawals of $5,000, which issuers often withhold at 10 percent each: withholding $2,000, tax still $6,259.73, because the income is still $20,000. Amount still to pay in the model: about $4,260. You received more cash in December and a larger balance due in April. That is the whole "trick." It is a cash-flow choice. It is not a tax reduction. CRA can also look at a series of withdrawals that were structured to avoid withholding. Do not build a system out of $5,000 clicks.</p>
    </div>

    <h2>What else rides along with the income</h2>

    <p>The withdrawal raises net income, not just tax. The Canada Child Benefit and the GST/HST credit use family income. Old Age Security recovery tax uses individual net world income. For the July 2026 to June 2027 recovery period, ESDC's threshold is $93,454 of 2025 net world income, repaid at 15 percent of the excess. A withdrawal that pushes a retiree over that line costs 15 cents of OAS on each dollar over, on top of the income tax. The recovery-tax article is <a href="/blog/oas-gis-clawback-canada/">OAS, GIS, and the clawback</a>. GIS is harsher and is not modelled here. If GIS is in the household, an RRSP withdrawal is a conversation with the benefit rules before it is a conversation with the withholding table.</p>

    <p>A withdrawal in the same year as a severance can stack two lumps into one bracket. The severance side is <a href="/blog/severance-pay-tax-canada/">severance pay tax</a>. Neither the employer nor the RRSP issuer coordinates with the other. You do.</p>

    <h2>A short sequence if you actually need the cash</h2>

    <ol>
        <li>Check whether the need is a Home Buyers' Plan or Lifelong Learning Plan case. If it is, follow that plan. Do not take a taxable withdrawal and call it the plan later.</li>
        <li>Check TFSA cash. A TFSA withdrawal is not income. Replacing that room is a January problem, which is a better problem than a T1 problem.</li>
        <li>If the RRSP is the source, estimate the tax with your real other income, not with the withholding percentage. Use the calculator, then add the credits it skips.</li>
        <li>Decide whether you want the issuer to hold back more than the minimum scale. You can often ask for extra withholding. That is the clean way to avoid a spring bill, and it is the opposite of splitting withdrawals to shrink withholding.</li>
        <li>Keep the receipt. The gross amount is income. The tax withheld is a credit. Reporting only the net deposit understates both.</li>
    </ol>

    <h2>Frequently asked questions</h2>

    <h3>Is RRSP withdrawal tax 10 percent?</h3>
    <p>Ten percent is the lowest withholding rate outside Quebec, and only on a withdrawal up to $5,000. It is not the tax. If your marginal rate is higher, you pay the rest when you file. If your income is low enough that the extra dollars are taxed at less than what was withheld, you get some of the withholding back.</p>

    <h3>Does withdrawing $5,000 four times save tax?</h3>
    <p>No. It can reduce withholding, because each withdrawal is scaled on its own amount. The four amounts are still income. The return adds them up. You may owe more in April than if you had taken one withdrawal and had 30 percent held back.</p>

    <h3>Are RRSP withdrawals taxed differently in every province?</h3>
    <p>The withholding scale outside Quebec is federal and identical. Quebec's withholding is lower federally and adds a 14 percent provincial slice. The final tax differs by province because provincial brackets differ. The table above is four provinces and a stripped-down calculator, not a national flat rate.</p>

    <h3>Do I pay withholding on a Home Buyers' Plan withdrawal?</h3>
    <p>Not when the withdrawal qualifies. Revenu Québec and the federal plan both treat a qualifying Home Buyers' Plan amount, up to $60,000, as outside this withholding. The cost of the plan is the repayment schedule. A missed repayment is income in that year.</p>

    <h3>What if I am a non-resident?</h3>
    <p>CRA's default withholding is 25 percent unless a treaty rate is lower. The Canadian brackets in this article are for residents. A non-resident return, if one is even required, is a different statute. Read IC76-12 and the treaty before you use a resident calculator.</p>

    <h3>Should I withdraw from the RRSP or the TFSA first?</h3>
    <p>For a one-time cash need, the TFSA does not create taxable income and does not touch income-tested benefits. The RRSP does both. The long-run order of accounts is a retirement question, not a withholding question. The <a href="/blog/retirement-withdrawal-strategy/">withdrawal strategy</a> page is that order. This page is what happens after you have already chosen the RRSP.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/rrsps-related-plans/making-withdrawals/tax-rates-on-withdrawals.html">CRA: tax rates on withdrawals</a></li>
        <li><a href="https://www.revenuquebec.ca/en/businesses/source-deductions-and-employer-contributions/calculating-source-deductions-and-contributions/special-cases-source-deductions-and-employer-contributions/payments-from-an-rrsp-a-vrsp-a-prpp-or-a-rrif/">Revenu Québec: payments from an RRSP, including the 14 percent single-payment rate and the HBP and LLP exclusions</a></li>
        <li><a href="https://www.canada.ca/en/services/benefits/publicpensions/old-age-security/recovery-tax.html">ESDC: OAS recovery tax thresholds</a></li>
    </ul>

    <div class="cta-section">
        <p><strong>The receipt is a prepayment. The return is the tax.</strong></p>
        <p>Brackets, credits, and the RRSP deduction are the 2026 tax guide, $49 CAD.</p>
        <a href="/ebooks/tax-guide/" class="cta-button">Get the 2026 Tax Guide — $49 CAD</a>
    </div>

    ${footer}

</div>`
  ),
];
