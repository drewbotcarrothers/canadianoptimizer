import { articleFooter, octPost } from './types';

const disclaimer =
  'This is general education about permanent life insurance and policy loans in Canada as of October 4, 2026. It is not insurance, tax, or investment advice, and it is not a review of any carrier’s illustration. The policy-loan tax rule is described from CRA’s archived Interpretation Bulletin IT-87R2 and from the Income Tax Act concepts that bulletin explains. Early-year cash values in the numerical sketch are assumptions, labelled as such, because no current insurer illustration was reproduced here. Ask a licensed advisor for a real illustration, including the guaranteed column and a reduced dividend scale, before you buy.';

const footer = articleFooter('Insurance', disclaimer);

export const oct2026InsurancePosts = [
  octPost(
    'Insurance',
    'insurance',
    'infinite-banking-canada',
    'Infinite Banking in Canada: The Pitch vs the Math',
    'Infinite banking borrows against permanent life insurance. The pitch skips thin early cash values, loan interest, and tax above the policy’s cost basis.',
    `<div class="container">

    <div class="hook">
        The pitch says you become the bank. You pay premiums into a permanent life policy, the cash value grows, and you borrow against it to buy the car, the rental, or the next premium. The math that matters is duller. In the early years the cash value is a fraction of the premiums, the loan charges interest, and a policy loan is tax-free only while it stays within the policy’s <span class="highlight">adjusted cost basis</span>. Above that line, CRA’s rules put the excess in your income.
    </div>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>Infinite banking is not a registered account and not a product category on FSRA’s licence. It is a sales description of participating whole life, plus policy loans, plus the discipline to pay the loans back. The insurance need, if you have one, is sized in the <a href="/blog/life-insurance-need-analysis-canada/">needs analysis</a>. The term-versus-permanent choice is <a href="/blog/term-vs-whole-life-insurance-canada/">term versus whole life</a>.</li>
            <li>CRA’s archived IT-87R2 describes the adjusted cost basis of a life policy and treats a policy loan as a disposition. The income inclusion is the excess of the loan proceeds over the adjusted cost basis immediately before the loan. Repayment can create a deduction to the extent a gain was previously included. The bulletin is archived. The concepts live in section 148. A current illustration from the insurer is not a tax ruling.</li>
            <li>Dividends on a participating policy are not guaranteed. IT-87R2 also explains that a policy dividend can itself be proceeds of a disposition, with an exception when the dividend is used, under the contract, to pay a premium or repay a policy loan. "The dividend will pay the premium" is a scale assumption until the insurer declares it.</li>
            <li>This page does not quote a 2026 dividend scale or a named carrier’s year-by-year cash value. Those numbers belong on an illustration with a date, a guaranteed column, and a reduced-scale column. The sketch below uses round assumptions so the gap between premiums paid and early cash value is visible. It is not a quote.</li>
            <li>Borrowing from a policy to invest can raise a different interest question, the one in Folio S3-F6-C1, and it is not the same thing as borrowing to buy a kitchen. Corporate-owned versions add a capital-dividend and shareholder-benefit file. That is <a href="/blog/corporate-owned-life-insurance-canada/">corporate-owned life insurance</a>, not a personality.</li>
        </ul>
    </div>

    <p>If the death benefit is the point, price term insurance for the years someone depends on your income. The retail comparison, without a ranking of carriers, is <a href="/blog/best-term-life-insurance-canada/">term life insurance</a>. Ontario’s regulator for life agents is FSRA. A licence is not an endorsement of a leveraged whole-life diagram. Start at <a href="https://www.fsrao.ca/consumers/life-and-health-insurance">FSRA’s life and health insurance consumer pages</a> and ask who gets paid if you buy the policy the diagram recommends.</p>

    <h2>What the pitch is claiming</h2>

    <p>Strip the vocabulary and four claims remain. First, that paying a whole-life premium is "paying yourself" rather than paying an insurer. Second, that policy loans have no application, no credit check, and no repayment schedule, so the capital is free in a way a bank loan is not. Third, that the cash value continues to earn dividends or interest as if you had not borrowed. Fourth, that the death benefit replaces the loan, so the strategy cannot fail. Each claim is half true, which is why the diagram works in a seminar.</p>

    <p>The premium buys insurance, pays expenses and commissions, and only then adds to cash value. In the early years the cash value is designed to be smaller than the premiums paid. You did not deposit the premium in a savings account with your name on it. You bought a contract. A policy loan is the insurer lending you money, secured by that contract, at a rate in the contract. You do not have to repay on a bank’s schedule. Unpaid interest is typically added to the loan. The loan still grows. If the loan and the interest overtake the cash value, the policy can lapse. A lapse with a loan outstanding is a disposition. The death benefit is reduced by the loan. It does not sit beside the loan as a separate untouched promise. Dividends that are "still credited on the full cash value" are a feature of some participating contracts and a sentence you should find on the illustration, not in the seminar. If the dividend scale falls, the picture that repaid the loan out of dividends was a picture.</p>

    <h2>The tax rule the diagram skips</h2>

    <p>IT-87R2, which CRA marks as archived, is still the plain-language map practitioners point at for section 148. The adjusted cost basis of an interest in a life insurance policy goes up with premiums and with income you had to include, and it goes down with certain proceeds. A policy loan is a disposition. You include in income the amount by which the proceeds of the loan exceed the adjusted cost basis just before the loan. Borrowing $20,000 against a policy whose adjusted cost basis is $50,000 does not, on that rule, create $20,000 of income. Borrowing $20,000 when the adjusted cost basis is $12,000 can include $8,000. Later repayment of the loan can be deducted to the extent you previously included a gain, which the CRA guide to the return describes as a deduction that cannot exceed the previously included gain minus repayments already deducted. This is not a TFSA. The shelter inside an exempt policy is the annual accrual test, and it fails if the policy is not exempt. This article does not walk the exempt test. The insurer’s exempt-status confirmation is the document. Your loan balance is the other document.</p>

    <div class="warning-box">
        <strong>A lapse is the tax event people do not model:</strong>
        <p>Paying interest by adding it to the loan feels like "the policy is carrying itself." It is the loan getting larger. If the contract lapses or you surrender it, the proceeds include the loan. A gain over the adjusted cost basis is income, in a year you also lost the insurance. Ask the insurer for the adjusted cost basis before you borrow, not after the anniversary when the loan crossed it.</p>
    </div>

    <h2>I ran the numbers on a sketch, not an illustration</h2>

    <p>No carrier’s current illustration is copied here. Dividend scales move, and quoting a stale one as if it were yours would be the same sin as the seminar. The sketch uses assumptions you can throw out. Annual premium $12,000, paid for 20 years, $240,000 in. Assume, and this is the assumption, that the guaranteed cash value is $0 in year 1, $8,000 in year 3, $40,000 in year 7, and $150,000 in year 20. Those are round teaching numbers, not a scale. A real illustration’s guaranteed column is often in that shape: far below premiums for a long time, then a cash value that reflects mortality costs having been paid. The non-guaranteed column, with dividends, will look better. Ask for it at the current scale and at a scale one or two percentage points lower. Decide on the lower one if you would still want the contract.</p>

    <table>
        <caption>Teaching sketch, not a carrier illustration. Premium $12,000 a year</caption>
        <thead>
            <tr>
                <th>Year</th>
                <th>Premiums paid</th>
                <th>Assumed guaranteed cash value</th>
                <th>Gap</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>$12,000</td>
                <td>$0</td>
                <td>$12,000 of premium is not cash you can borrow</td>
            </tr>
            <tr>
                <td>3</td>
                <td>$36,000</td>
                <td>$8,000</td>
                <td>$28,000</td>
            </tr>
            <tr>
                <td>7</td>
                <td>$84,000</td>
                <td>$40,000</td>
                <td>$44,000</td>
            </tr>
            <tr>
                <td>20</td>
                <td>$240,000</td>
                <td>$150,000</td>
                <td>$90,000, before any loan</td>
            </tr>
        </tbody>
    </table>

    <p>Now put a loan on the year-7 row. You borrow $30,000 of the assumed $40,000 cash value at an assumed policy-loan rate of 6 percent. Year-one interest is $1,800 if you do not repay. If you capitalize the interest, year two is charged on $31,800. After five years of capitalized 6 percent interest and no repayment, the loan is about $40,147. On a cash value that was $40,000 and has not grown in this guaranteed sketch, the policy is at the edge of lapse. A dividend scale might have lifted the cash value. The sketch refuses to assume the dividend, because that is the entire sales move. If you instead repay the $1,800 each year from your salary, you have a bank-like loan at 6 percent inside an insurance contract you are still funding at $12,000 a year. Compare that with a line of credit you already understand. The <a href="/blog/heloc-strategies-cra-clean-canada/">HELOC guide</a> is the secured-credit version, with its own deductibility rules. A policy loan used to buy a personal truck is not deductible interest. A policy loan used to buy income-producing investments might be, if the folio’s use test is met and you can trace the dollars. "I borrowed from myself" does not answer the folio.</p>

    <div class="example-box">
        <strong>Term and invest, with the same assumed $12,000</strong>
        <p>Assume a 20-year term premium of $80 a month, $960 a year, for a death benefit you actually calculated. The rest of the $12,000, which is $11,040 a year, goes into a TFSA or a non-registered account. This page will not compound that $11,040 at a heroic rate. At a stated 4 percent a year, contributions at the start of each year, the side account is about $34,500 after three years, about $88,000 after seven, and about $342,000 after twenty, before tax and before any loss. The three-year and seven-year numbers are already above the guaranteed cash values in the sketch, and the twenty-year number is above the sketch’s $150,000, and you still have the term insurance until year 20. After year 20 the term ends and the permanent policy, if you kept it, does not. That is the real trade: insurance that expires versus a contract that can last, funded by the gap between the term premium and the whole-life premium. If you still need insurance at 65, term that ends at 65 was the wrong term, or whole life was solving a permanent need. Buy the permanent need with your eyes on the guaranteed column. Do not buy it to avoid a savings account.</p>
    </div>

    <p>The 4 percent is an assumption, like the cash values. A lost decade in the side account narrows the gap. Fees narrow it. A participating policy that hits its illustrated scale for twenty years narrows it from the other direction. The comparison is allowed to be close. It is not allowed to be a seminar in which the cash value never lags the premium and the loan never charges interest.</p>

    <h2>Questions to take to a licensed advisor</h2>

    <ol>
        <li>What is the death benefit, and whose income dies with me? If the answer is "the strategy," you do not have a need. You have a diagram.</li>
        <li>Show the guaranteed cash value beside the premiums for years 1, 5, 10, and 20. Read the guaranteed column first.</li>
        <li>Show the same page at the current dividend scale and at a reduced scale. Ask what happened to the scale the last time it was cut.</li>
        <li>What is the policy-loan rate, is it variable, and does unpaid interest capitalize? Ask for the lapse point if you borrow 90 percent of the cash value and pay nothing back.</li>
        <li>What is the adjusted cost basis today, and at what loan balance would a new loan exceed it?</li>
        <li>Who is compensated, and is the illustration from the insurer or from a concept marketer? FSRA expects life agents in Ontario to deal in a way a regulator can examine. A webinar is not that examination.</li>
    </ol>

    <h2>Frequently asked questions</h2>

    <h3>Is infinite banking legal in Canada?</h3>
    <p>Borrowing against a life policy you own is a contract feature, not a banned strategy. What gets people in trouble is the tax on a loan above the adjusted cost basis, a lapse, or a sales pitch that describes the cash value as a TFSA. The contract is legal. The diagram can still be a bad purchase.</p>

    <h3>Are policy loans tax-free?</h3>
    <p>A policy loan is not income to the extent it does not exceed the adjusted cost basis, under the disposition rule IT-87R2 describes and section 148 implements. The excess is included in income. Capitalized interest that pushes a later surrender over that basis does not stay invisible because nobody sent you a T5 in the borrowing year. Ask the insurer for the basis before you rely on "tax-free."</p>

    <h3>Do I need whole life to be properly insured?</h3>
    <p>You need a death benefit matched to a temporary or a permanent obligation. A mortgage, a young family, and a decade of high human capital are the usual term facts. A lifelong dependent, a charitable bequest, or a corporate need can be a permanent fact. Infinite banking is not itself a need. The needs page is the filter. Term is the default when the need has an end date.</p>

    <h3>Can I deduct the interest on a policy loan?</h3>
    <p>Only if the borrowed money was used to earn income from a business or property and the usual interest-deductibility tests are met. The insurer can complete Form T2210 so you can support interest paid on a policy loan made to earn income. A loan that bought a vehicle for personal use is not that form. The purpose is the use of the money, not the fact that the lender was your insurer.</p>

    <h3>What if the dividend scale pays the premium?</h3>
    <p>That is a non-guaranteed outcome called a premium offset, and it arrives years after issue if it arrives. IT-87R2 says a policy dividend used under the contract to pay a premium is not included in proceeds the way a cash dividend can be. The dividend still has to be declared. A scale cut pushes the offset year out or cancels it. Budget the premium from cash you have, for as long as the guaranteed column says you might have to.</p>

    <h3>Is this better inside a corporation?</h3>
    <p>A corporation can own a policy, and the death benefit can have a capital-dividend effect. It can also create a shareholder benefit if the person, not the company, enjoys the loan or the cash. The corporate article is the longer version. Do not add a holdco so that a personal infinite-banking pitch has somewhere to sit.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/forms-publications/publications/it87r2/archived-policyholders-income-life-insurance-policies.html">CRA archived IT-87R2: policyholders’ income from life insurance policies, including policy loans and adjusted cost basis</a></li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/non-residents/5013-g/guide-non-residents-deemed-residents-deductions-net-income-taxable-income.html">CRA: deduction for repayment of a policy loan that was previously included in income</a></li>
        <li><a href="https://laws-lois.justice.gc.ca/eng/acts/I-3.3/section-148.html">Justice Laws: Income Tax Act, section 148</a></li>
        <li><a href="https://www.fsrao.ca/consumers/life-and-health-insurance">FSRA: life and health insurance for consumers</a></li>
    </ul>

    ${footer}

</div>`
  ),
];
