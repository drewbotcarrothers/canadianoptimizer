import type { PostVideoFields } from '../lib/post-video';
import { oct2026InsurancePosts } from './oct2026/insurance';

type InsurancePost = {
  title: string;
  slug: string;
  category: string;
  categorySlug: string;
  author: string;
  date: string;
  updated: string;
  excerpt: string;
  image: string;
  content: string;
} & PostVideoFields;

const meta = {
  category: 'Insurance',
  categorySlug: 'insurance',
  author: 'Andrew',
  date: '2026-09-27',
  updated: '2026-09-27',
} as const;

function insurancePost(
  slug: string,
  title: string,
  excerpt: string,
  content: string
): InsurancePost {
  return {
    ...meta,
    title,
    slug,
    excerpt,
    image: `/images/blog/${slug}.png`,
    content,
  };
}

const footer = (published: string) => `<div class="article-footer">
        <p><strong>Disclaimer:</strong> This is general education about Canadian life, disability, health, and property insurance as of September 2026. It is not a premium quote, a carrier ranking, or insurance, tax, or legal advice. Premiums depend on the person, the insurer, and the contract. Official figures below are tied to FCAC, CRA, ESDC, Assuris, a provincial regulator, a public auto insurer, RAMQ, or a named carrier page reviewed in September 2026. Dollar examples that are not from those pages are labelled as illustrations. Confirm the certificate, the booklet, and your tax position before you buy, cancel, convert, or decline coverage.</p>
        <div class="footer-note">Published: ${published} | Category: Insurance | Author: Andrew</div>
    </div>`;

const published = 'September 27, 2026';

export const insuranceClusterPosts: InsurancePost[] = [
  insurancePost(
    'canadian-insurance-planning-guide',
    'Canadian Insurance Planning Guide: What to Buy, in What Order',
    'In 2026, insure the paycheque you cannot replace first, then a term death benefit sized to a gap. Premiums are personal. This guide does not rank insurers.',
    `<div class="container">

    <div class="hook">
        Buy insurance for a named loss, in an order. In September 2026 the first loss for most working households is <span class="highlight">income that stops while you are still alive</span>. The second is a death benefit sized to a gap with an end date. Provincial health care, a home policy, and a mandatory auto policy cover different losses. A ranked list of insurers is not a plan, and this page does not publish one.
    </div>

    <p>This is the hub for the insurance cluster. The face amount is the <a href="/blog/life-insurance-need-analysis-canada/">life insurance need analysis</a>. Term versus a policy that never expires is <a href="/blog/term-vs-whole-life-insurance-canada/">term versus whole life</a>. What age does to a term premium, without a fake national rate card, is <a href="/blog/term-life-insurance-cost-by-age-canada/">term life cost by age</a>. How to compare two real term contracts is <a href="/blog/best-term-life-insurance-canada/">best term life insurance in Canada</a>. The certificate at the mortgage signing is <a href="/blog/mortgage-life-insurance-vs-term-life-canada/">mortgage life versus term life</a>.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>There is no single best Canadian insurance product in 2026. Premiums vary by person and insurer. This guide quotes no household premium.</li>
            <li>A long disability is the living risk. EI sickness in 2026 pays at most $729 a week for up to 26 weeks. CPP disability's 2026 maximum is $1,741.20 a month.</li>
            <li>Term life pays a death benefit for a stated term. FCAC describes that payment as tax-free. Permanent insurance is for a need that is still there late in life.</li>
            <li>Group coverage ends when you leave the plan. Lender mortgage life pays the lender and is optional. It is a different product from CMHC mortgage default insurance.</li>
            <li>If a life insurer fails, Assuris protects a death benefit up to $1,000,000 or 90 percent, whichever is higher.</li>
        </ul>
    </div>

    <h2>What should you buy first?</h2>

    <p>Write the loss before you write the product. A household that can replace a paycheque from savings for a few months, and cannot replace it for two years, has a disability problem. A household whose survivor can pay the bills has a smaller life insurance problem than a slogan of "ten times salary" suggests. The stacking rule, including the duplicates, is <a href="/blog/insurance-shopping-without-over-insuring-canada/">shopping without over-insuring</a>.</p>

    <table>
        <caption>Order of insurance decisions, as of September 2026. Premiums are deliberately absent.</caption>
        <thead>
            <tr>
                <th>Order</th>
                <th>Loss</th>
                <th>Start here</th>
                <th>Leave it until later</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>You cannot work for months or years</td>
                <td><a href="/blog/disability-insurance-canada-guide/">Disability insurance</a>, and the <a href="/blog/disability-insurance-self-employed-canada/">self-employed version</a> if the draw is a business</td>
                <td>A critical-illness lump sum. That cheque does not replace a monthly benefit. See <a href="/blog/critical-illness-insurance-canada/">critical illness</a>.</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Someone depends on your earnings, and the need ends</td>
                <td>Personally owned term, sized in the need analysis, compared in the <a href="/blog/best-term-life-insurance-canada/">term feature test</a></td>
                <td>Whole life bought to "build cash." The test for permanent coverage is <a href="/blog/term-vs-whole-life-insurance-canada/">term versus whole life</a>. A corporation is a separate owner: <a href="/blog/corporate-owned-life-insurance-canada/">corporate-owned life insurance</a>.</td>
            </tr>
            <tr>
                <td>3</td>
                <td>A mortgage dies with you, or it does not</td>
                <td>Put the mortgage inside the personal need, once. The lender's optional certificate is a different contract.</td>
                <td>Buying the bank's mortgage life on top of a term policy that already includes the balance. That double count is the <a href="/blog/mortgage-life-insurance-vs-term-life-canada/">mortgage life comparison</a>.</td>
            </tr>
            <tr>
                <td>4</td>
                <td>Drugs, dental, and vision the province does not fund</td>
                <td><a href="/blog/private-health-dental-insurance-canada/">Private health and dental</a>, after you check the Canadian Dental Care Plan test</td>
                <td>A thin dental plan that makes you ineligible for the public dental plan. Travel care is a separate certificate: <a href="/blog/travel-medical-insurance-canada/">travel medical</a>.</td>
            </tr>
            <tr>
                <td>5</td>
                <td>The car and the building</td>
                <td>The mandatory auto layer where you live, then a home or tenant policy</td>
                <td>Shopping the mandatory layer as if every province used the same insurer. The map is <a href="/blog/car-insurance-by-province-canada/">car insurance by province</a>. The building is <a href="/blog/home-tenant-insurance-coverage-gaps-canada/">home and tenant gaps</a>.</td>
            </tr>
        </tbody>
    </table>

    <p>Table as of September 2026. It is a sequence, not a quote.</p>

    <h2>Which loss is already partly covered?</h2>

    <p>Public programs and employer booklets are real, and they are narrow. Employment Insurance sickness benefits, on the ESDC page reviewed in September 2026, can run for up to 26 weeks at 55 percent of insurable earnings, to a maximum of $729 a week in 2026. The Canada Pension Plan disability benefit's maximum monthly amount for 2026 is $1,741.20, made up of a $610.46 basic amount plus an earnings-related portion. Those are ceilings for people who qualify. They are not an own-occupation plan you already own.</p>

    <p>Group life and group disability exist only while the plan covers you. The portability question is <a href="/blog/group-life-insurance-vs-personal-canada/">group benefits versus personal coverage</a>. A mortgage from a bank is underwritten in the <a href="/blog/canadian-mortgage-guide/">Canadian mortgage guide</a>. Optional life insurance sold beside that mortgage is not the default-insurance premium CMHC charges when the down payment is small. FCAC states the difference on its mortgage-life rights page.</p>

    <h2>What does Assuris cover if the insurer fails?</h2>

    <p>Assuris protects policyholders of member life and health insurers. On its term-life page, the death-benefit protection is up to $1,000,000 or 90 percent of the death benefit, whichever is higher. Its May 25, 2023 announcement of higher limits, still the schedule on the Assuris site in September 2026, also lists health-expense protection of $250,000 or 90 percent, monthly-income protection of $5,000 a month or 90 percent, and cash-value protection of $100,000 or 90 percent, each on a whichever-is-higher basis. Protection is not a reason to ignore the contract. It is a reason to buy from a member insurer and to understand that a very large benefit can be reduced to 90 percent in a failure.</p>

    <div class="example-box">
        <strong>Illustration: two households, same city, different first policy</strong>
        <p>Household A, in Halifax, has two salaries, a paid-off car, and a child in elementary school. The binding loss is the higher salary if that person cannot work. They read the disability guide, then size term life with the need analysis, and they do not add a lender mortgage certificate on top of a term face that already includes the mortgage. Household B is one incorporated consultant in Winnipeg. The corporation may own a policy later, which is the corporate-owned guide, after the personal disability contract and a personal term policy for the family are in place. The <a href="/blog/should-you-incorporate/">incorporation decision</a> does not replace either contract. Neither household gets a premium from this page. Both get an order.</p>
    </div>

    <h2>Where does each spoke go deeper?</h2>

    <ul>
        <li><a href="/blog/term-life-insurance-cost-by-age-canada/">Term life cost by age</a> — what moves a premium, and why a mixed age table lies.</li>
        <li><a href="/blog/best-term-life-insurance-canada/">Best term life insurance</a> — features to compare on two real quotes.</li>
        <li><a href="/blog/mortgage-life-insurance-vs-term-life-canada/">Mortgage life versus term life</a> — who is paid, and the declining balance.</li>
        <li><a href="/blog/disability-insurance-self-employed-canada/">Disability insurance for the self-employed</a> — EI, CPP, and a personal contract.</li>
        <li><a href="/blog/group-life-insurance-vs-personal-canada/">Group versus personal</a> — what ends when the job ends.</li>
        <li><a href="/blog/private-health-dental-insurance-canada/">Private health and dental</a> — the dental-plan test, and Quebec's drug rule.</li>
        <li><a href="/blog/car-insurance-by-province-canada/">Car insurance by province</a> — public, private, and Quebec's split.</li>
        <li><a href="/blog/online-vs-broker-life-insurance-canada/">Online versus a broker for life insurance</a> — same contract, different way of getting the illustration.</li>
        <li><a href="/blog/lower-car-insurance-canada/">How to lower car insurance</a> — the levers on a quote, without a made-up percent off.</li>
    </ul>

    <h2>Frequently asked questions</h2>

    <h3>What insurance should Canadians buy first in 2026?</h3>
    <p>Start with the loss that would force you to sell investments or borrow. For most workers that is a long disability, then term life if someone depends on earnings that end at a known date. Health, dental, home, and auto fill gaps the first two contracts do not touch. Skip a product that duplicates a loss you have already funded. The shopping guide is the duplicate check.</p>

    <h3>Is there a best life insurance company in Canada?</h3>
    <p>Not one this site will name. Premiums depend on age, health, smoking, term length, and face amount, and they differ by insurer. Compare the contract you were actually offered: guaranteed term, renewal, conversion, exclusions, owner, and beneficiary. Assuris protection applies if a member insurer fails. A blog score is not a policy.</p>

    <h3>Are life insurance premiums deductible in Canada?</h3>
    <p>Personal life insurance premiums are generally a personal expense, not a deduction on a T1. The death benefit FCAC describes is a tax-free payment to the beneficiary. Corporate-owned policies have their own tax file, including a capital dividend account credit, and premiums there are generally not deductible either. That file is the corporate-owned guide, not a reason to skip the personal need.</p>

    <h3>Does workplace insurance replace a personal policy?</h3>
    <p>Only while you remain in the plan, and only for the amount and definition in the booklet. Group life often ends on the last day of coverage, with a conversion window you must read in that booklet. Count it as a bridge. The long need belongs on a policy you own. The group-versus-personal page is the resignation case.</p>

    <h3>How much does term life insurance cost in Canada?</h3>
    <p>There is no national price. Canada Life publishes a handful of "about" monthly figures for its simplified term product, based on rates as of January 2026, and those examples use different ages, amounts, terms, and smoking statuses. They are not a rate card. Get two illustrations on the same face amount and the same term, and read the cost-by-age page before you compare them.</p>

    <h3>What is the difference between mortgage life insurance and mortgage default insurance?</h3>
    <p>Mortgage life insurance is optional coverage a lender may offer, and FCAC says the lender cannot require it as a condition of approving the mortgage. The benefit is aimed at the loan. Mortgage default insurance, including CMHC insurance when a down payment is under 20 percent, protects the lender against default. It does not pay your family. The mortgage guide covers the loan. This cluster covers the optional life certificate.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="https://www.canada.ca/en/financial-consumer-agency/services/insurance/life.html">FCAC: life insurance</a></li>
        <li><a href="https://www.canada.ca/en/financial-consumer-agency/services/rights-responsibilities/rights-mortgages/rights-mortgage-life-insurance.html">FCAC: mortgage life insurance rights</a></li>
        <li><a href="https://www.canada.ca/en/services/benefits/ei/ei-sickness/benefit-amount.html">ESDC: EI sickness benefit amount</a></li>
        <li><a href="https://www.canada.ca/en/services/benefits/publicpensions/cpp-disability-benefit/benefit-amount.html">ESDC: CPP disability benefit amount</a></li>
        <li><a href="https://assuris.ca/how-am-i-protected/assuris-protection/life-insurance/individual/term-life/">Assuris: term life protection</a> and the <a href="https://assuris.ca/expertise-hub/higher-policyholder-protection-for-canadians/">May 2023 protection levels</a></li>
    </ul>

    <div class="cta-section">
        <p><strong>The policy is a contract. The tax return is the other file.</strong></p>
        <p>Who paid the premium changes the tax on some benefits. The 2026 tax guide is the filing companion, not an insurance offer.</p>
        <a href="/ebooks/tax-guide/" class="cta-button">Get the 2026 Tax Guide — $49 CAD</a>
    </div>

    ${footer(published)}

</div>`
  ),

  insurancePost(
    'term-life-insurance-cost-by-age-canada',
    'Term Life Insurance Cost by Age in Canada: What Drives Your Premium',
    'Term premiums rise with age, health, and smoking. Canada Life’s January 2026 examples use different amounts, so they are not an age curve.',
    `<div class="container">

    <div class="hook">
        Age raises a term life premium, and it is not the only input. Sex, smoking, health, term length, and face amount move the price too. <span class="highlight">Canada does not publish a national rate-by-age table</span>, and this page will not invent one. The only dollar premiums below are Canada Life's own "about" examples, based on rates as of January 2026, and they are not comparable to each other.
    </div>

    <p>This spoke sits under the <a href="/blog/canadian-insurance-planning-guide/">Canadian insurance planning guide</a>. The face amount you are pricing is the <a href="/blog/life-insurance-need-analysis-canada/">need analysis</a>, not a multiple of salary. Whether the need should be term at all is <a href="/blog/term-vs-whole-life-insurance-canada/">term versus whole life</a>. How to read two quotes once you have them is <a href="/blog/best-term-life-insurance-canada/">best term life insurance</a>.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>A honest age comparison holds the term, the face amount, the smoking status, and the insurer fixed. Change one cell and you are no longer looking at age.</li>
            <li>Canada Life's My Simple Term page, reviewed September 2026, gives four "about" premiums based on rates as of January 2026. The ages, amounts, terms, and smoking statuses all differ.</li>
            <li>On that product, the monthly premium stays the same for the initial term, then increases yearly on the schedule in the policy.</li>
            <li>Canada Life My Term, the advisor product, offers any term from 5 to 50 years, with level premiums for the initial term and guaranteed yearly-renewable rates afterward if coverage has not changed.</li>
            <li>Larger face amounts fall into premium bands. A rate per thousand on a $150,000 policy is not the rate per thousand on a $1,000,000 policy.</li>
        </ul>
    </div>

    <h2>What actually sets a term premium?</h2>

    <p>Canada Life's consumer explanation lists age, gender, the amount of coverage, the type of policy, health history, and occupation among the factors in a premium. Term is usually less expensive than permanent coverage for the same temporary job, which is why the need analysis comes first. Smoking is its own axis on the illustrations below. None of this is a quote for you. A second insurer can price the same person differently. Ask both for the same term and the same face amount.</p>

    <table>
        <caption>Canada Life My Simple Term illustrations. The page says "Based on premium rates as of Jan. 2026." Reviewed September 2026. Not an age curve.</caption>
        <thead>
            <tr>
                <th>Canada Life's example</th>
                <th>Age and smoking</th>
                <th>Product and face amount</th>
                <th>About, per month</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Angela</td>
                <td>30, smoker</td>
                <td>25-year, $450,000</td>
                <td>about $60</td>
            </tr>
            <tr>
                <td>Tyrone</td>
                <td>40, non-smoker</td>
                <td>15-year, $500,000</td>
                <td>about $48</td>
            </tr>
            <tr>
                <td>Ivana</td>
                <td>45, non-smoker</td>
                <td>20-year, $300,000</td>
                <td>about $48</td>
            </tr>
            <tr>
                <td>Fatima</td>
                <td>55, non-smoker</td>
                <td>10-year, $150,000</td>
                <td>about $45</td>
            </tr>
        </tbody>
    </table>

    <p>Source: Canada Life, "When should you get term life insurance?" Do not read down the monthly column and conclude that insurance gets cheaper with age. Fatima's figure is a shorter term and a smaller face amount. Angela smokes. Tyrone and Ivana pay a similar "about" number for different terms and different amounts. The column is four separate illustrations.</p>

    <h2>Why does a published "rates by age" chart mislead?</h2>

    <p>Publishers build those charts by picking one insurer, one term, one face amount, one sex, and one health class, then changing only the age. That can be a fair illustration if every assumption is printed beside the number and dated. A chart that hides the term, the smoking status, or the insurer is a marketing table. This page refuses to fill the missing cells. If you want the age effect, ask one insurer for the identical policy at the age you are now and, if you are curious, what the same policy would have cost at a younger issue age. You cannot buy the younger age retroactively. You can see the direction.</p>

    <p>Canada Life also says that once a policy is in effect, most term policies no longer cover you past 85, and that most insurers will not issue a new policy past 80. Treat that as the carrier's description of the market's usual shape, then read the expiry age on the illustration in front of you. My Term's own advisor guide sets expiry at the policy anniversary nearest age 85, and the maximum issue age is 85 minus the term length chosen.</p>

    <h2>What stays level, and what jumps when the term ends?</h2>

    <p>On My Simple Term, Canada Life says premium payments stay the same for the initial term. Its example: a policy bought in 2020 with a $20 monthly payment is still $20 in 2030, and the payment starts to increase only after the initial term ends. After that, payments increase yearly according to the schedule in the policy. My Term's advisor guide says the same structure in product language: level premiums for the initial term, then renewal on a yearly renewable term schedule, with those renewal premiums guaranteed if coverage has not changed.</p>

    <p>That guarantee is the point of buying the term you actually need. A 10-year term is cheaper at issue because the insurer is on the risk for fewer years and because renewal comes sooner. Renewal at the attained age is a different price. Laddering a larger 10-year policy and a smaller 20-year policy, so coverage drops when the mortgage drops, is a design choice. The arithmetic of the declining mortgage itself is the <a href="/blog/mortgage-life-insurance-vs-term-life-canada/">mortgage life comparison</a>.</p>

    <div class="example-box">
        <strong>Worked arithmetic on Canada Life's "about" figures, not a new quote</strong>
        <p>These products use the word "about," so the totals are about, too. Angela's about $60 a month is about $720 a year, and about $18,000 over a 25-year initial term if the premium never changes and the policy stays in force. Tyrone's about $48 a month is about $576 a year, and about $8,640 over 15 years. Ivana's about $48 a month over 20 years is about $11,520. Fatima's about $45 a month over 10 years is about $5,400. The totals are not a ranking. They price different promises. A $500,000 15-year policy and a $150,000 10-year policy are not the same object with a different birthday.</p>
    </div>

    <h2>How do face-amount bands change the rate?</h2>

    <p>Canada Life's My Term advisor guide says premiums vary by term length, age, gender, smoking status, risk class, and face amount, and it sorts coverage into bands. Band 1 is under $250,000. Band 2 runs from $250,000 to $499,999. Band 3 is $500,000 to $999,999. Band 4 is $1,000,000 to $1,999,999. Higher bands continue above that, and a special quote is required above $25 million. The practical lesson: doubling the face amount does not politely double the premium, and a rate someone quotes "per thousand" without the band is incomplete. Confirm the band on the illustration. Other insurers use their own bands. This list is Canada Life's, reviewed from the advisor guide in September 2026.</p>

    <div class="tip-box">
        <strong>Price the policy you will keep:</strong>
        <p>A conversion option, a renewability promise, and a waiver of premium are features with a cost. Canada Life's My Term sheet lists conversion options. Whether you need them is the permanent-insurance question in the term-versus-whole guide, including <a href="/blog/corporate-owned-life-insurance-canada/">corporate ownership</a> if a company will be the owner. Do not pay for a feature you have not named a job for.</p>
    </div>

    <h2>Frequently asked questions</h2>

    <h3>How much is term life insurance at age 30, 40, or 50 in Canada?</h3>
    <p>No single number. Canada Life's January 2026 illustrations include a 30-year-old smoker at about $60 a month for a 25-year $450,000 My Simple Term policy, and a 40-year-old non-smoker at about $48 a month for a 15-year $500,000 policy. There is no matching 50-year-old cell on that page. A 45-year-old and a 55-year-old appear at different amounts and terms. Ask for your own illustration.</p>

    <h3>Do term premiums rise every birthday?</h3>
    <p>During the initial term of the Canada Life products described here, the premium stays level. Your age at issue is baked into that level price. The premium steps up when the initial term ends, on a yearly schedule, unless you convert or replace the policy. A new application at an older age is priced at the new age. It does not inherit the old premium.</p>

    <h3>Why can two people of the same age pay different premiums?</h3>
    <p>Smoking, sex, health history, occupation, hobbies the insurer asks about, the term, the face amount, and the insurer's own pricing all sit in the premium. Angela and a non-smoker of the same age are not the same risk on Canada Life's page. A simplified-issue policy with few health questions is a different product from a fully underwritten one, and it is priced as a different product.</p>

    <h3>Is a 10-year term always the cheapest way to cover 20 years?</h3>
    <p>It is often cheaper in year one and expensive if you still need coverage in year 11. Renewal rates are attained-age rates. If the need truly ends in 10 years, a 10-year term matches the need. If the need runs 20 years, price a 20-year level term against the cost of renewing, using the renewal schedule in the illustration, not a hope that you will still be insurable on the same terms.</p>

    <h3>Are these Canada Life figures the best prices in Canada?</h3>
    <p>They are one carrier's examples for one simplified product, labelled "about," as of January 2026. They are not a survey and not a ranking. Another carrier can be higher or lower for the same person. The feature comparison, once you hold two illustrations, is the best-term page. This page is only the cost drivers.</p>

    <h3>Does the death benefit get taxed?</h3>
    <p>FCAC describes the life insurance death benefit as a one-time tax-free payment. Canada Life uses the same description for My Simple Term. If you name your estate, FCAC says the benefit becomes part of the estate, where creditors may claim it. Name a beneficiary on purpose. The wills layer is the <a href="/blog/estate-planning-wills-poa/">wills and powers of attorney guide</a>.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="https://www.canadalife.com/insurance/life-insurance/term-life-insurance/when-should-you-get-term-life-insurance.html">Canada Life: when to get term life insurance</a> (illustrations based on premium rates as of January 2026)</li>
        <li><a href="https://www.canadalife.com/insurance/life-insurance/how-does-life-insurance-work.html">Canada Life: how life insurance works</a></li>
        <li><a href="https://www.acp.canadalife.com/content/dam/advisors/documents/marketing/insurance/en_ca/term_life/canada-life-my-term-product-information-page.pdf">Canada Life My Term product information</a></li>
        <li><a href="https://www.acp.canadalife.com/content/dam/advisors/documents/marketing/insurance/en_ca/term_life/canada-life-my-term-advisor-guide-99-10988.pdf">Canada Life My Term advisor guide</a></li>
        <li><a href="https://www.canada.ca/en/financial-consumer-agency/services/insurance/life.html">FCAC: life insurance</a></li>
    </ul>

    <div class="cta-section">
        <p><strong>A premium is a price. The face amount is a household number.</strong></p>
        <p>Registered accounts you subtract from the need are tax. The 2026 tax guide is that side of the file.</p>
        <a href="/ebooks/tax-guide/" class="cta-button">Get the 2026 Tax Guide — $49 CAD</a>
    </div>

    ${footer(published)}

</div>`
  ),

  insurancePost(
    'best-term-life-insurance-canada',
    'Best Term Life Insurance in Canada (2026)',
    'The best term policy in 2026 matches the years you need, guarantees that premium, and names your beneficiary. This page does not rank insurers.',
    `<div class="container">

    <div class="hook">
        The best term life insurance in Canada in 2026 is the contract that <span class="highlight">matches the years you need, locks the premium for those years, and pays a beneficiary you named</span>. It is not a carrier this page scores. Premiums vary by person and insurer. Any "best of" list that prints a winner without your age, health, and term is a ranking this site will not copy.
    </div>

    <p>This page is a spoke of the <a href="/blog/canadian-insurance-planning-guide/">Canadian insurance planning guide</a>. Size the benefit in the <a href="/blog/life-insurance-need-analysis-canada/">need analysis</a> before you compare prices. What those prices respond to is <a href="/blog/term-life-insurance-cost-by-age-canada/">term life cost by age</a>. If the need does not end, stop and read <a href="/blog/term-vs-whole-life-insurance-canada/">term versus whole life</a>.</p>

    <div class="callout">
        <strong>Choose on the contract, not on a logo:</strong>
        <ul>
            <li>Choose the term that covers the last year someone still depends on the income. A shorter term is the right product when the need is shorter.</li>
            <li>Choose a premium that is guaranteed for that initial term. Read what happens the year after, in the renewal schedule, before you treat a low start as the cost of the whole need.</li>
            <li>Choose conversion only if a permanent need is plausible later. Canada Life's My Term sheet lists conversion options. Another contract may not.</li>
            <li>Choose a beneficiary who is a person, not a default to your estate, unless the estate is a deliberate choice. FCAC says an estate beneficiary pulls the death benefit into the estate.</li>
            <li>This page has no affiliate links and no winner.</li>
        </ul>
    </div>

    <h2>What should you compare on two real quotes?</h2>

    <p>Hold the face amount and the term still. Then read the rows that actually differ. Canada Life, Manulife, Sun Life, RBC Insurance, iA, and Desjardins are examples of carriers advisors use. That list is not a ranking, not an offer, and not a link. The <a href="/blog/insurance-shopping-without-over-insuring-canada/">shopping guide</a> uses the same rule.</p>

    <table>
        <caption>Term contract features to compare, as of September 2026. Cells describe what to read, not a score.</caption>
        <thead>
            <tr>
                <th>Feature</th>
                <th>What "good" means for a temporary need</th>
                <th>Where a number on this page comes from</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Term length</td>
                <td>Covers the dependency and then stops. My Simple Term offers 10, 15, 20, or 25 years. My Term offers any length from 5 to 50 years, until age 85.</td>
                <td>Canada Life product pages and the My Term advisor guide</td>
            </tr>
            <tr>
                <td>Premium guarantee</td>
                <td>Level for the initial term. Renewal, if you still need it, is priced on the schedule in the policy, not negotiated from scratch if the contract guarantees those rates.</td>
                <td>Canada Life: level initial term, then yearly increases; My Term renewal rates guaranteed if coverage is unchanged</td>
            </tr>
            <tr>
                <td>Conversion</td>
                <td>A right to move to a permanent policy without new medical evidence, up to an age the contract states. Useful only if a lifelong need might appear.</td>
                <td>Canada Life My Term sheet lists conversion options. Confirm the deadline on any contract you hold.</td>
            </tr>
            <tr>
                <td>Underwriting</td>
                <td>Full underwriting before the policy is in force tells you the insurer has accepted the risk. A short questionnaire is a different product. Ask when the insurer is bound.</td>
                <td>Qualitative. The certificate controls. No denial-rate statistic is cited here.</td>
            </tr>
            <tr>
                <td>Exclusions and expiry</td>
                <td>Read suicide, aviation, and residency wording, and the age when the term expires. Canada Life says most term policies stop covering you after 85, and most insurers will not issue a new policy after 80.</td>
                <td>Canada Life consumer page, as the carrier's description</td>
            </tr>
            <tr>
                <td>Failure protection</td>
                <td>If the insurer fails, Assuris keeps a death benefit up to $1,000,000 or 90 percent, whichever is higher.</td>
                <td>Assuris term-life page</td>
            </tr>
        </tbody>
    </table>

    <p>Table as of September 2026. Sources are the pages in the source list. Welcome-style "discounts" that expire are not a feature. Price the premium you pay in year five.</p>

    <h2>How do you run the comparison without a ranking?</h2>

    <div class="example-box">
        <strong>Illustration of a method, not two real offers</strong>
        <p>You need $600,000 until the younger child is independent in 18 years, a number that came from the need analysis, not from this page. Quote A is a 20-year term at a level premium, renewable, with conversion available until age 60. Quote B is a 10-year term with a lower premium and no conversion. Quote B wins the first 120 months and then hands you a renewal at the age you will be, plus a new medical if you replace it instead of renewing. If the need is truly 18 years, Quote A's longer guarantee is the product that matches, even when its monthly number is higher. If you also have a group plan of one times salary, leave that amount out of the 18-year face. It ends with the job. That offset is the <a href="/blog/group-life-insurance-vs-personal-canada/">group versus personal guide</a>.</p>
    </div>

    <p>The lender's mortgage certificate is not a third quote in this contest. It pays the lender, and the benefit is built around the loan. Put it in the <a href="/blog/mortgage-life-insurance-vs-term-life-canada/">mortgage life comparison</a>, not in a term ranking.</p>

    <h2>When is term the wrong product?</h2>

    <p>Term expires. A lifelong dependant, a tax bill at death on a private company, or a buy-sell that has to fund whenever a shareholder dies can be a permanent job. Those are the term-versus-whole tests, and the company version is <a href="/blog/corporate-owned-life-insurance-canada/">corporate-owned life insurance</a>. Buying participating whole life because a term quote felt "wasted if you live" is a different purchase. The premium you paid bought a year of risk transfer. That is what insurance is.</p>

    <div class="warning-box">
        <strong>Simplified issue is not the same contract at a lower price:</strong>
        <p>A policy that skips medical evidence is priced for the risk the insurer did not measure. It can be the right product if you cannot qualify for a fully underwritten one. It is a poor default if you can. Ask which one you were shown. The monthly number is not comparable across those two designs.</p>
    </div>

    <h2>Frequently asked questions</h2>

    <h3>What is the best term life insurance in Canada in 2026?</h3>
    <p>The policy whose term matches your need, whose premium is guaranteed for that term, and whose beneficiary is someone you chose. Insurers price the same person differently. This page does not name a winner, and it does not print a premium, because a premium that is not yours is a fiction. Get two illustrations on the same amount and term.</p>

    <h3>Should I buy the longest term available?</h3>
    <p>Buy the term that ends when the dependency ends. Canada Life My Term can run from 5 to 50 years, and My Simple Term offers 10, 15, 20, or 25. A 30-year term for a mortgage that amortizes in 12 years insures years you may not need. Laddering two terms is allowed. One oversized term is a choice, not a rule.</p>

    <h3>Is a convertible term worth more?</h3>
    <p>Only if you may need coverage past the term and you may not want a new medical exam then. Conversion usually moves you into a permanent product at attained-age rates, which is a different price. Read the conversion deadline. If you already know the need is lifelong, price permanent coverage directly using the term-versus-whole guide.</p>

    <h3>Does a cheap first-year premium win?</h3>
    <p>It wins if the guarantee lasts as long as the need. It loses if the illustration is a teaser and year two steps up, or if the term is shorter than the need and renewal is unaffordable. Add up the guaranteed premiums over the years you will hold it. The cost-by-age page shows that arithmetic on Canada Life's published "about" figures.</p>

    <h3>Are online insurers better than a broker?</h3>
    <p>They are different distribution. An online application can be the same carrier contract with fewer meetings. A broker can show more than one carrier. Neither is "best" in the abstract. Compare the contract, the underwriting, and the premium on the same face amount. This page has no referral link to either channel.</p>

    <h3>What happens if the life insurance company fails?</h3>
    <p>Assuris, the industry compensation association, guarantees that you retain up to $1,000,000 or 90 percent of the death benefit, whichever is higher, for term life if a member insurer fails. A $750,000 benefit is kept in full on Assuris's own example. A $1,500,000 benefit is adjusted to 90 percent, which is $1,350,000. Membership is the question to ask, not a blog award.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="https://www.canadalife.com/insurance/life-insurance/term-life-insurance/when-should-you-get-term-life-insurance.html">Canada Life: term life, including My Simple Term lengths</a></li>
        <li><a href="https://www.acp.canadalife.com/content/dam/advisors/documents/marketing/insurance/en_ca/term_life/canada-life-my-term-product-information-page.pdf">Canada Life My Term product information</a></li>
        <li><a href="https://www.acp.canadalife.com/content/dam/advisors/documents/marketing/insurance/en_ca/term_life/canada-life-my-term-advisor-guide-99-10988.pdf">Canada Life My Term advisor guide</a></li>
        <li><a href="https://assuris.ca/how-am-i-protected/assuris-protection/life-insurance/individual/term-life/">Assuris: term life protection</a></li>
        <li><a href="https://www.canada.ca/en/financial-consumer-agency/services/insurance/life.html">FCAC: life insurance</a></li>
    </ul>

    <div class="cta-section">
        <p><strong>The winning contract is the one that matches the need.</strong></p>
        <p>The tax on the accounts behind that need is a separate return. The 2026 tax guide covers that file.</p>
        <a href="/ebooks/tax-guide/" class="cta-button">Get the 2026 Tax Guide — $49 CAD</a>
    </div>

    ${footer(published)}

</div>`
  ),

  insurancePost(
    'mortgage-life-insurance-vs-term-life-canada',
    'Mortgage Life Insurance vs Term Life Insurance',
    'Mortgage life insurance is optional creditor coverage that pays the lender. It is not CMHC default insurance. Personal term life pays a beneficiary you name.',
    `<div class="container">

    <div class="hook">
        Mortgage life insurance is optional creditor insurance. The Financial Consumer Agency of Canada says you do not have to buy it for a lender to approve the mortgage, and the benefit is there to pay the loan. <span class="highlight">A personal term policy pays a beneficiary you name</span>, in an amount you chose, for a term you chose. They are different contracts. Mortgage life insurance is also different from CMHC mortgage default insurance.
    </div>

    <p>This comparison sits under the <a href="/blog/canadian-insurance-planning-guide/">Canadian insurance planning guide</a>. The loan itself is the <a href="/blog/canadian-mortgage-guide/">Canadian mortgage guide</a>, and the first-purchase version is the <a href="/blog/first-time-home-buyer-guide-canada/">first-time home buyer guide</a>. How large a personal policy should be, including the rule against insuring the mortgage twice, is the <a href="/blog/life-insurance-need-analysis-canada/">need analysis</a>.</p>

    <div class="callout">
        <strong>Choose term life if / choose the lender certificate if:</strong>
        <ul>
            <li>Choose personal term if you want a level face amount, a person as beneficiary, and underwriting finished before you rely on the policy.</li>
            <li>Choose the lender's optional certificate only after you have read who is paid, whether the benefit follows the declining balance, and what happens when you switch lenders or renew somewhere else.</li>
            <li>Do not buy both for the same balance. That is the same debt twice.</li>
            <li>Do not confuse either product with mortgage default insurance. FCAC says default insurance is the coverage required when your down payment is under 20 percent. It protects the lender against default. It does not pay your family.</li>
        </ul>
    </div>

    <h2>How do the two contracts differ?</h2>

    <table>
        <caption>Mortgage life versus personal term, as of September 2026. Contract-specific cells say "read the certificate."</caption>
        <thead>
            <tr>
                <th>Question</th>
                <th>Lender mortgage life</th>
                <th>Personal term life</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Is it required?</td>
                <td>No. FCAC: federally regulated lenders must get express consent, and they cannot make the mortgage conditional on this optional product.</td>
                <td>No. You buy it if the need analysis shows a gap.</td>
            </tr>
            <tr>
                <td>Who receives the money?</td>
                <td>The lender, to pay down or pay off the loan. FCAC's credit-insurance page says the insurer pays the benefit to the lender.</td>
                <td>The beneficiary you name. FCAC calls the death benefit a one-time tax-free payment. An estate beneficiary pulls it into the estate.</td>
            </tr>
            <tr>
                <td>Does the amount stay level?</td>
                <td>The job of the product is the debt. If the certificate tracks the balance, coverage shrinks as you amortize. Read whether yours does. This page does not claim every certificate works the same way.</td>
                <td>A level term face stays level for the term. Canada Life's term products keep the premium level for the initial term as well.</td>
            </tr>
            <tr>
                <td>Can you take it to a new lender?</td>
                <td>It is tied to that loan. A switch or a refinance is a moment to read whether coverage ends. Personal insurance does not care which bank holds the mortgage.</td>
                <td>You own it. The <a href="/blog/best-term-life-insurance-canada/">term feature test</a> is how to replace it on purpose.</td>
            </tr>
            <tr>
                <td>When is health reviewed?</td>
                <td>Often a short questionnaire at the signing desk. Whether the insurer can revisit health at claim time is a term of that certificate. Ask. This page does not cite a denial rate.</td>
                <td>A fully underwritten term policy is assessed before it is placed. A simplified questionnaire is a different product. Ask which one you were sold.</td>
            </tr>
        </tbody>
    </table>

    <p>Table as of September 2026. FCAC and Canada Life are the sourced cells. Everything else is a question for the certificate in your hand.</p>

    <h2>What does a declining balance do to the family?</h2>

    <p>The illustration below is a mortgage schedule, not a premium and not a lender's posted rate. Principal $400,000. Amortization 25 years. Interest 5 percent compounded monthly, which is an assumed contract rate, not a September 2026 offer. The payment is about $2,338 a month. The balance falls because each payment retires principal. A level $400,000 term policy does not fall with it.</p>

    <table>
        <caption>Illustrative $400,000 mortgage at 5 percent, 25-year amortization. Not a rate quote and not an insurance premium.</caption>
        <thead>
            <tr>
                <th>Year</th>
                <th>Approximate balance left</th>
                <th>Level $400,000 term still pays</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>0</td>
                <td>$400,000</td>
                <td>$400,000</td>
            </tr>
            <tr>
                <td>5</td>
                <td>$354,000</td>
                <td>$400,000</td>
            </tr>
            <tr>
                <td>10</td>
                <td>$296,000</td>
                <td>$400,000</td>
            </tr>
            <tr>
                <td>15</td>
                <td>$220,000</td>
                <td>$400,000</td>
            </tr>
            <tr>
                <td>20</td>
                <td>$124,000</td>
                <td>$400,000</td>
            </tr>
        </tbody>
    </table>

    <div class="example-box">
        <strong>What the family keeps in this illustration</strong>
        <p>At year 10 the mortgage balance is about $296,000. A mortgage-life certificate that pays the lender the outstanding balance pays about $296,000 to the bank. The family receives a paid-off house and no cash from that certificate. A $400,000 personal term policy pays $400,000 to the named beneficiary. That person can pay the $296,000 mortgage and still have about $104,000, or they can keep the mortgage and use the cheque for income. The need analysis lets you pick one design. Insuring the payment inside the lifestyle need and also insuring the full balance is the double count.</p>
        <p>The premium on the lender certificate is not in this table. Some certificates keep a similar premium while the benefit shrinks. Some do not. Read yours. The term premium, if it is a level-premium term, stays level while the face stays level. That pairing is the product difference. It is not a promise that term is cheaper. Price both on the same day, for the coverage you would actually have at year 10.</p>
    </div>

    <h2>Where does this sit in the mortgage paperwork?</h2>

    <p>FCAC says a lender that offers an optional product must disclose the charges, get express consent, and allow you to cancel. Banks that follow the Canadian Bankers Association code provide a separate disclosure. None of that paperwork is a substitute for reading who can claim. If you are renewing or switching, the rate decision is the <a href="/blog/mortgage-renewal-strategy-canada/">renewal guide</a>. Insurance portability is a separate question you ask in the same meeting. The cost of a term premium as you get older, if you delay the personal policy until the next renewal, is the <a href="/blog/term-life-insurance-cost-by-age-canada/">cost-by-age guide</a>. Whether that personal policy should expire is <a href="/blog/term-vs-whole-life-insurance-canada/">term versus whole life</a>, and the duplicate check is <a href="/blog/insurance-shopping-without-over-insuring-canada/">shopping without over-insuring</a>.</p>

    <div class="warning-box">
        <strong>Joint mortgage life is not two personal policies:</strong>
        <p>Ask whether the certificate pays on the first death only, whether both borrowers are covered, and whether the survivor still has a premium and no remaining benefit. A personal policy on each adult, sized in the need analysis, names its own beneficiary. A stay-at-home parent's coverage is a childcare need, not a zero.</p>
    </div>

    <h2>Frequently asked questions</h2>

    <h3>Is mortgage life insurance required in Canada?</h3>
    <p>No. FCAC says mortgage life insurance is optional, and a lender cannot require it to approve your mortgage. You must give express consent. Mortgage default insurance is the other product, the one tied to a down payment under 20 percent, and it does not pay your family if you die. Decline the optional certificate if you do not want it, and say so in writing.</p>

    <h3>Does mortgage life insurance pay my spouse?</h3>
    <p>The benefit is paid to the lender to deal with the loan. Your spouse is not the beneficiary of that payment. A personal term policy pays the person you named, who can then decide whether to pay off the mortgage. If you want the family to control the money, own the policy.</p>

    <h3>Why do people say the bank's insurance gets worse over time?</h3>
    <p>If the benefit tracks the mortgage balance, you are covered for less debt every year. Whether the premium falls by the same proportion is a line in the certificate, not a law. In the illustration above, a $400,000 balance is about $296,000 after 10 years at 5 percent. A level term face is still $400,000. Compare those two promises, then compare the two premiums you were actually offered.</p>

    <h3>Can I cancel mortgage life insurance later?</h3>
    <p>FCAC says lenders that offer the optional product must give you the option to cancel, and they must tell you the conditions. Cancelling the certificate does not cancel the mortgage. Replace the coverage first if your family still needs a death benefit, so you are not briefly uninsured while a new term policy is underwritten.</p>

    <h3>Is the payout taxable?</h3>
    <p>A personal life insurance death benefit is described by FCAC as a tax-free payment to the beneficiary. A payment to the lender retires debt rather than arriving as income. Neither result is a reason to skip the beneficiary designation on a personal policy. Name someone. The estate-planning guide covers what happens when you do not.</p>

    <h3>Should I wait until renewal to buy term?</h3>
    <p>You can. The premium is then the premium at the age you have become, and your health is the health you have then. Canada Life prices term from age and health, and the initial premium stays level only after you buy. Waiting is a bet that you remain insurable. If the bet matters, underwrite the personal policy while the mortgage is new and keep the lender certificate only for the weeks the personal policy is not yet in force.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="https://www.canada.ca/en/financial-consumer-agency/services/insurance/credit-loan.html">FCAC: credit or loan insurance</a></li>
        <li><a href="https://www.canada.ca/en/financial-consumer-agency/services/rights-responsibilities/rights-mortgages/rights-mortgage-life-insurance.html">FCAC: mortgage life insurance rights</a></li>
        <li><a href="https://www.canada.ca/en/financial-consumer-agency/services/mortgages/choose-mortgage.html">FCAC: choosing a mortgage, including optional mortgage insurance</a></li>
        <li><a href="https://www.canada.ca/en/financial-consumer-agency/services/insurance/life.html">FCAC: life insurance</a></li>
        <li><a href="https://www.canadalife.com/insurance/life-insurance/term-life-insurance/when-should-you-get-term-life-insurance.html">Canada Life: level premiums on My Simple Term</a></li>
    </ul>

    <div class="cta-section">
        <p><strong>The mortgage is a loan. The family cheque is a different contract.</strong></p>
        <p>Interest deductibility and the accounts you might use to pay the loan down are tax. The 2026 tax guide is that file.</p>
        <a href="/ebooks/tax-guide/" class="cta-button">Get the 2026 Tax Guide — $49 CAD</a>
    </div>

    ${footer(published)}

</div>`
  ),

  insurancePost(
    'disability-insurance-self-employed-canada',
    'Disability Insurance for Self-Employed Canadians',
    'Self-employed disability insurance replaces your draw. In 2026, EI sickness pays at most $729 a week for 26 weeks. CPP disability maxes at $1,741.20 a month.',
    `<div class="container">

    <div class="hook">
        If you are self-employed, the asset is your ability to invoice. Employment Insurance sickness benefits in 2026 pay <span class="highlight">55 percent of insurable earnings, up to $729 a week, for at most 26 weeks</span>. The Canada Pension Plan disability benefit's 2026 maximum is $1,741.20 a month. Neither is an own-occupation policy sized to a proprietor's draw. A personal disability contract is the product that tries to be.
    </div>

    <p>This page is under the <a href="/blog/canadian-insurance-planning-guide/">Canadian insurance planning guide</a>. Definitions, elimination periods, and the employee version of the same contract are the <a href="/blog/disability-insurance-canada-guide/">disability insurance guide</a>. A lump sum on a diagnosis is <a href="/blog/critical-illness-insurance-canada/">critical illness</a>, and it does not pay the rent every month. The tax file for the business is the <a href="/blog/self-employed-tax-guide/">self-employed tax guide</a>.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>As of September 2026, EI sickness is up to 26 weeks and the 2026 maximum is $729 a week. A full 26 weeks at that maximum is $18,954. Many people qualify for less, or for fewer weeks.</li>
            <li>CPP disability's 2026 maximum is $1,741.20 a month, which is $20,894.40 a year. The basic portion is $610.46. The average for new beneficiaries is lower. The maximum is not a promise.</li>
            <li>A self-employed person is not automatically inside EI. Opting into special benefits is a separate registration. Read the <a href="/blog/employment-insurance-benefits-canada/">EI guide</a> before you count the $729.</li>
            <li>If you pay for your own disability policy, the benefit is generally outside the taxable wage-loss rules that apply when an employer pays. The premium is generally a personal expense.</li>
            <li>This page does not quote a disability premium. Insurers price occupation, income, waiting period, and definition. Those numbers belong on an illustration.</li>
        </ul>
    </div>

    <h2>What do EI and CPP disability pay in 2026?</h2>

    <table>
        <caption>Public disability-related benefits, figures as published for 2026 and reviewed September 2026. Not a private-insurance quote.</caption>
        <thead>
            <tr>
                <th>Program</th>
                <th>2026 published ceiling</th>
                <th>What it is not</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>EI sickness</td>
                <td>55 percent of insurable earnings, maximum $729 a week, up to 26 weeks. Family supplement cannot push the week above $729.</td>
                <td>Not a two-year or to-age-65 benefit. Not automatic for a sole proprietor who never opted in.</td>
            </tr>
            <tr>
                <td>CPP disability</td>
                <td>Maximum $1,741.20 a month for 2026, of which $610.46 is the basic amount. ESDC's average for new beneficiaries, cited on the benefit page as of October 2025, was $1,234.68.</td>
                <td>Not an own-occupation plan. ESDC says other disability income, including a private insurer, may change what that insurer pays if CPP is approved. Disclose it.</td>
            </tr>
            <tr>
                <td>Personal disability policy</td>
                <td>Whatever the contract says, after the waiting period, for the benefit period, if you meet the occupation definition.</td>
                <td>Not EI, and not a critical-illness lump sum.</td>
            </tr>
        </tbody>
    </table>

    <p>Sources: ESDC pages linked below. Quebec residents look to the Quebec Pension Plan for the provincial disability pension. This table is the Canada Pension Plan figure.</p>

    <h2>Who should pay the premium, and why does tax change the benefit?</h2>

    <p>CRA's payroll guidance treats periodic benefits from a wage-loss plan as taxable when the employer has contributed, under paragraph 6(1)(f) of the Income Tax Act, with a reduction for employee contributions. An employee-pay-all plan, where employees legally pay the entire premium, is the case where those benefits are not included under that paragraph. Interpretation Bulletin IT-428 is the archived CRA bulletin that draws this line, and later CRA letters still use it. A self-employed person who buys and pays an individual policy is not in an employer plan. The benefit is generally not employment income. The premium is generally not a deduction against business income, because it insures a person, not a furnace.</p>

    <p>Business overhead expense insurance, which is aimed at rent, staff, and other office costs rather than the owner's groceries, is a different contract. Ask the person who files the T2125 whether that premium is deductible. Do not assume the owner's personal disability premium is. Group coverage you might lose by leaving employment is the <a href="/blog/group-life-insurance-vs-personal-canada/">group versus personal page</a>. Incorporating, which is <a href="/blog/should-you-incorporate/">its own decision</a>, does not create disability coverage.</p>

    <div class="example-box">
        <strong>Illustration: taxable benefit versus a benefit you paid for</strong>
        <p>A consultant in Ontario needs $5,000 a month, after tax, to keep the household. That $5,000 is a spending assumption, not a contract maximum and not a tax bracket. If the disability benefit is tax-free because the owner paid the premium, a $5,000 monthly benefit matches the spending. If the benefit is taxable, an illustrative 30 percent tax means $5,000 is 70 percent of the gross benefit. Gross is about $5,000 divided by 0.70, or about $7,140 a month. The 30 percent is an assumption so the arithmetic is visible. It is not your marginal rate. Look up the rate on the return you actually file, then gross the benefit up. Under-insuring because you copied an employee's 60 percent of salary, on a taxable group plan, onto a tax-free personal policy is a different mistake in the other direction. Read which tax applies before you copy a percentage.</p>
        <p>CPP disability at the 2026 maximum is $1,741.20 a month. If a private contract offsets CPP, which many do once CPP is approved, the personal benefit can shrink by that amount. Build the illustration with the offset disclosed. EI at the 2026 maximum for all 26 weeks is $729 times 26, or $18,954, and then it stops. A waiting period on the private policy that is shorter than the cash you hold, and a benefit period that continues after week 26, is the design. The <a href="/blog/consulting-rate-after-cpp-ei-tax-canada/">consulting-rate guide</a> is how the invoice was priced before anyone was sick.</p>
    </div>

    <h2>Which contract words matter more than the brochure?</h2>

    <ul>
        <li><strong>Occupation definition.</strong> "Own occupation" pays if you cannot do your occupation. "Any occupation" pays if you cannot do work you are reasonably suited for. The word in the specimen wording is the product. The disability guide walks through it. Do not buy a title.</li>
        <li><strong>Waiting period.</strong> Contracts offer a period you choose, often in 30-day steps. A longer wait usually costs less and requires more cash on hand. The price difference is on the illustration, not here.</li>
        <li><strong>Benefit period.</strong> To age 65 is a different promise from two years or five years. Match it to how long the household can survive without the draw.</li>
        <li><strong>Income the insurer will cover.</strong> Carriers cap the benefit as a share of earned income. The cap is in the contract. A dividend from a corporation and a T2125 net income are not the same earnings number. Show the underwriter the income you want insured.</li>
        <li><strong>Residual and partial disability.</strong> Self-employed people often return part-time. A contract that pays only if you are fully unable to work misses that month. Ask.</li>
    </ul>

    <div class="tip-box">
        <strong>Assuris, if the insurer fails:</strong>
        <p>Assuris's 2023 protection schedule, still published on its site, protects monthly income at $5,000 a month or 90 percent, whichever is higher. A benefit under $5,000 a month is kept in full on that rule. A larger monthly benefit can be reduced to 90 percent. That is failure protection, not a target benefit.</p>
    </div>

    <h2>Frequently asked questions</h2>

    <h3>Do self-employed Canadians get EI sickness benefits?</h3>
    <p>Not by default. The 2026 employee sickness benefit is 55 percent of insurable earnings up to $729 a week, for up to 26 weeks. A self-employed person can access EI special benefits only if they have registered and qualified under that program. If you have not, the $729 is not your coverage. The EI guide is the opt-in. This page is the private contract you price because 26 weeks is a short ceiling.</p>

    <h3>Will CPP disability replace my consulting income?</h3>
    <p>The 2026 maximum is $1,741.20 a month, and the average new benefit is lower. You have to meet Service Canada's test and have enough contributions. ESDC also says a private insurer may reduce its payment if CPP is approved. Treat CPP as a possible offset you disclose, not as the plan.</p>

    <h3>Are disability insurance premiums tax deductible for a sole proprietor?</h3>
    <p>Premiums on a personal disability policy are generally a personal expense, and the benefits, because you paid for them, are generally not taxable. That is the useful trade. Overhead insurance that pays business expenses is a different policy. Confirm the deduction with whoever signs the T2125. Do not deduct the personal premium because it was paid from the business account.</p>

    <h3>Should I buy critical illness instead?</h3>
    <p>Critical illness pays a lump sum if you meet a condition and survive the waiting period. It does not replace a monthly draw for a back injury that is not on the condition list. Many self-employed people need the monthly contract first. The critical-illness guide is the second decision, after the income hole has a policy.</p>

    <h3>How long a waiting period should I pick?</h3>
    <p>As long as your cash can honestly carry, because a longer wait is usually a lower premium. If the emergency fund covers 90 days of spending, a 90-day wait matches the cash. If it covers two weeks, a long wait is a gap, not a saving. The premium for each choice is on the illustration. This page will not invent it.</p>

    <h3>Does a corporation's group plan count?</h3>
    <p>A one-person company can sometimes buy a group-style plan, and the tax follows who pays. If the company pays and the benefit would be taxable, you may need a larger gross benefit to land on the same after-tax spending. If you leave the company or wind it up, read whether the coverage converts. The group-versus-personal page is that exit. Personal coverage you own survives the wind-up.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="https://www.canada.ca/en/services/benefits/ei/ei-sickness/benefit-amount.html">ESDC: EI sickness benefit amount, 2026</a></li>
        <li><a href="https://www.canada.ca/en/services/benefits/ei/ei-sickness.html">ESDC: what EI sickness benefits offer</a></li>
        <li><a href="https://www.canada.ca/en/services/benefits/publicpensions/cpp-disability-benefit/benefit-amount.html">ESDC: CPP disability amounts</a></li>
        <li><a href="https://www.canada.ca/en/employment-social-development/programs/pensions/pension/statistics/2026-quarterly-april-june.html">ESDC: CPP maximums, January 2026</a></li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/payroll/benefits-allowances/benefits-allowances-chart/premiums-contributions.html">CRA: premiums and contributions to insurance plans</a></li>
        <li><a href="https://assuris.ca/expertise-hub/higher-policyholder-protection-for-canadians/">Assuris: protection levels, including monthly income</a></li>
    </ul>

    <div class="cta-section">
        <p><strong>The benefit is income. The premium's tax status is a filing choice.</strong></p>
        <p>T2125 expenses, instalments, and CPP contributions on self-employed earnings are the 2026 tax guide.</p>
        <a href="/ebooks/tax-guide/" class="cta-button">Get the 2026 Tax Guide — $49 CAD</a>
    </div>

    ${footer(published)}

</div>`
  ),

  insurancePost(
    'group-life-insurance-vs-personal-canada',
    'Group Benefits vs Personal Coverage: What Happens When You Leave Your Job',
    'Group life and disability end when you leave the plan. The death benefit is generally tax-free. Employer-paid group life premiums are a taxable benefit.',
    `<div class="container">

    <div class="hook">
        Group benefits are real on the days you are in the plan, and they end when you leave unless you complete a conversion the booklet actually offers. <span class="highlight">The life insurance death benefit is generally tax-free either way.</span> Employer-paid group life premiums are a different amount: CRA treats them as a taxable benefit. A personal policy is the one you still have on the Monday after the job ends.
    </div>

    <p>This spoke is part of the <a href="/blog/canadian-insurance-planning-guide/">Canadian insurance planning guide</a>. How much personal life insurance the household needed all along is the <a href="/blog/life-insurance-need-analysis-canada/">need analysis</a>, which already tells you not to build an 18-year number on group life. The living benefit is the <a href="/blog/disability-insurance-canada-guide/">disability guide</a>, and the self-employed version is <a href="/blog/disability-insurance-self-employed-canada/">disability insurance for the self-employed</a>.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>Read the certificate for the last day of coverage. Do not assume coverage runs through a severance period unless the booklet says it does.</li>
            <li>Conversion, if it exists, is a short window written in that booklet. This page will not invent a number of days. Miss the window and you are applying with new medical evidence.</li>
            <li>FCAC describes a life insurance death benefit as a tax-free payment. CRA's payroll chart treats employer-paid life insurance premiums as a taxable benefit. Those are different amounts.</li>
            <li>If the employer pays any part of a group disability plan, periodic benefits are generally taxable. If employees pay the entire premium, they generally are not. The after-tax cheque is what you replace.</li>
            <li>Health and dental access through work can also block the Canadian Dental Care Plan. That test is the <a href="/blog/private-health-dental-insurance-canada/">health and dental guide</a>.</li>
        </ul>
    </div>

    <h2>What is different about a policy you do not own?</h2>

    <table>
        <caption>Group benefits versus personal coverage, as of September 2026. The booklet overrides the general column.</caption>
        <thead>
            <tr>
                <th>Question</th>
                <th>Group plan</th>
                <th>Personal policy</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Who owns it?</td>
                <td>The plan. You are covered while you are eligible. Leaving the employer, or dropping below the hours the plan requires, can end it.</td>
                <td>You. It continues while you pay the premium and the contract is in force, including after a resignation.</td>
            </tr>
            <tr>
                <td>How much life insurance?</td>
                <td>Whatever the booklet says, often a multiple of salary. The multiple is a plan design, not a Canadian average. This page does not cite one.</td>
                <td>The face amount from the need analysis, reduced by group coverage only for the years you will actually have the group coverage.</td>
            </tr>
            <tr>
                <td>Can you take it with you?</td>
                <td>Only if the contract offers conversion or portability and you complete it on time. Life conversion and health conversion are often separate applications.</td>
                <td>It is already yours. Replacing it is optional. The <a href="/blog/best-term-life-insurance-canada/">term feature test</a> is how.</td>
            </tr>
            <tr>
                <td>Tax on the life premium</td>
                <td>Employer-paid group term life is generally a taxable benefit under the prescribed rules, reported on the T4. It is not always equal to the raw premium.</td>
                <td>You pay with after-tax dollars. The premium is generally not deductible.</td>
            </tr>
            <tr>
                <td>Tax on the disability benefit</td>
                <td>Taxable if the employer contributes. Not taxable if it is a true employee-pay-all plan.</td>
                <td>Generally not taxable when you paid the premium yourself.</td>
            </tr>
            <tr>
                <td>Underwriting</td>
                <td>Often a group guarantee, with limits, while you join on time. Convenient, and not a personal medical file you can show the next insurer.</td>
                <td>Your health at issue. Buying a small personal policy while you are healthy is how you avoid doing the whole need at conversion, when you may be older or unwell.</td>
            </tr>
        </tbody>
    </table>

    <p>Table as of September 2026. Tax rows follow FCAC's description of a tax-free death benefit and CRA's payroll treatment of employer-paid premiums and wage-loss plans.</p>

    <h2>What should you do in the weeks you resign?</h2>

    <ol>
        <li><strong>Get the booklet and the conversion form before the last day.</strong> Ask human resources, in writing, when life, disability, and health each end. Severance pay and benefit coverage are not the same date unless the agreement says so.</li>
        <li><strong>Price conversion against a new personal policy.</strong> Conversion without medical evidence is valuable if you would not qualify today. It is often a permanent product at attained-age rates, which can be a poor fit for a temporary need. A new term policy, if you are insurable, may match the need analysis better. Apply early enough that the new policy is in force before the group coverage stops.</li>
        <li><strong>Do not let one form do two jobs.</strong> A health-and-dental conversion does not preserve a life conversion. Submit each one the plan requires.</li>
        <li><strong>Recount the disability tax.</strong> If group long-term disability was taxable, a personal policy you pay for may be tax-free, so the monthly amount you need can be lower. The arithmetic is on the self-employed disability page and applies to employees buying their own contract too.</li>
        <li><strong>Check dental before you buy a private plan out of habit.</strong> Access to private dental coverage can make you ineligible for the Canadian Dental Care Plan even if you never claim. Read that test the same week.</li>
    </ol>

    <div class="example-box">
        <strong>Illustration: a booklet that says two times salary</strong>
        <p>An employee in Ottawa earns $110,000. This illustration assumes the booklet says group life of two times salary, so $220,000, while employed. That multiple is a made-up plan design for the example, not a statistic about Canadian employers. The household need analysis, done properly, might be several times larger because of a mortgage and children. The $220,000 is a bridge. It is not subtracted from an 18-year personal need. On the Friday the job ends, the $220,000 ends too, unless a conversion is completed. A personal term policy bought two years earlier, for the gap the group plan never covered, is still in force. The life event that should trigger the recount is the same one in the <a href="/blog/life-events-tax-implications/">life events tax guide</a>: a job change is a tax event and an insurance event on the same day.</p>
    </div>

    <div class="warning-box">
        <strong>The taxable benefit is not the death benefit:</strong>
        <p>Seeing group life on a T4 surprises people into thinking the eventual payout will be taxed. FCAC's description of the death benefit is a tax-free payment to the beneficiary, whether premiums were paid by you or by an employer. The annual amount on the slip is the benefit of coverage this year. CRA's payroll chart is the premium side. A 2008 CRA interpretation, document 2008-0278501E5, says the same split in more technical language: proceeds received because the insured person died are generally not taxable.</p>
    </div>

    <h2>Frequently asked questions</h2>

    <h3>Do I lose life insurance when I quit?</h3>
    <p>You lose the group coverage when the plan says you do, which is often at the end of the month of termination or on the last day of work. Read the date. Personal policies continue. A conversion right, if the booklet includes one, is a deadline. Missing it means a new application. Ask for the form before you give notice if you may not pass a medical.</p>

    <h3>Is employer-paid life insurance taxable?</h3>
    <p>The premium benefit generally is. CRA includes employer-paid life insurance in the list of premiums that can be a taxable benefit, and group term life uses a prescribed calculation rather than a casual estimate. The death benefit paid because someone died is a separate amount, and FCAC describes it as tax-free. Check the T4 for the annual benefit. Do not add the face amount to your income.</p>

    <h3>Are group disability benefits taxable?</h3>
    <p>If the employer pays any part of the wage-loss plan, periodic benefits are generally included in income under paragraph 6(1)(f), minus employee contributions that have not already been deducted. If the plan is employee-pay-all, those benefits are generally not taxed. Know which plan you are in before you compare a group percentage of salary with a personal quote.</p>

    <h3>Should I convert or buy a new term policy?</h3>
    <p>Convert if you need coverage and a new medical would be a problem. Buy a new term policy if you are insurable and the need has an end date, because conversion products are often permanent and priced at the age you are now. You can do both for a few weeks: apply for term, and keep the conversion right alive until the term policy is in force. Then cancel the one you do not want.</p>

    <h3>Does a new employer's plan replace what I lost?</h3>
    <p>Only after you are eligible, which may be after a waiting period, and only for the amount that plan offers. A three-month wait with no personal policy is an uninsured quarter. Personal coverage is the bridge between booklets. Compare the new booklet's definition, especially on disability, before you cancel anything you bought yourself.</p>

    <h3>What about health benefits during severance?</h3>
    <p>The severance letter controls, not a custom. Some agreements continue health and dental for a stated number of months. Some end them immediately. Life conversion deadlines can run from the coverage end date, not from the resignation date. Get the dates in writing. Private health insurance after that, and the dental-plan interaction, are the health and dental guide.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="https://www.canada.ca/en/financial-consumer-agency/services/insurance/life.html">FCAC: life insurance, including the tax-free death benefit</a></li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/payroll/benefits-allowances/benefits-allowances-chart/premiums-contributions.html">CRA: employer premiums for life, health, and disability plans</a></li>
        <li><a href="https://taxinterpretations.com/cra/severed-letters/2008-0278501e5">CRA views in document 2008-0278501E5, via Tax Interpretations</a></li>
        <li><a href="https://www.canada.ca/en/services/benefits/dental/dental-care-plan/qualify.html">Canada.ca: Canadian Dental Care Plan eligibility</a></li>
    </ul>

    <div class="cta-section">
        <p><strong>The booklet is a benefit of the job. The policy is yours.</strong></p>
        <p>The T4 benefit and the disability income line are tax. The 2026 tax guide is the return side.</p>
        <a href="/ebooks/tax-guide/" class="cta-button">Get the 2026 Tax Guide — $49 CAD</a>
    </div>

    ${footer(published)}

</div>`
  ),

  insurancePost(
    'private-health-dental-insurance-canada',
    'Private Health and Dental Insurance for Self-Employed and Early Retirees',
    'Private dental coverage can block the Canadian Dental Care Plan even if you never use it. Eligibility still requires adjusted family net income under $90,000.',
    `<div class="container">

    <div class="hook">
        Provincial health plans pay physicians and hospitals. They do not pay routine dental the way they pay a doctor. The Canadian Dental Care Plan, on the Canada.ca qualify page reviewed in September 2026, requires <span class="highlight">adjusted family net income under $90,000 and no access to private dental insurance</span>. Access counts even if you decline the plan, pay a premium, or never claim. Buying a thin private dental policy can close the public door.
    </div>

    <p>This spoke is under the <a href="/blog/canadian-insurance-planning-guide/">Canadian insurance planning guide</a>. Costs that show up after you stop working, beyond the dental plan, are <a href="/blog/healthcare-costs-retirement/">healthcare costs in retirement</a>. A facility years later is <a href="/blog/long-term-care-costs/">long-term care costs</a>. Care outside Canada is <a href="/blog/travel-medical-insurance-canada/">travel medical insurance</a>, which a domestic health plan does not replace.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>As of the qualify page reviewed in September 2026, CDCP eligibility needs adjusted family net income under $90,000, a filed return, Canadian tax residency, and no private dental access.</li>
            <li>Private access includes an employer or a family member's employer, a pension plan, a professional or student organization, and insurance you or a family member bought. Health and wellness accounts are included.</li>
            <li>A retiree exception exists if you opted out of pension dental before December 11, 2023, and the pension rules will not let you opt back in.</li>
            <li>Canada.ca's coverage page, as used on the <a href="/blog/canadian-dental-care-plan-eligibility/">dental plan eligibility guide</a>, sets co-payments at 0 percent under $70,000, 40 percent from $70,000 to $79,999, and 60 percent from $80,000 to $89,999 of the plan's own fees.</li>
            <li>Premiums you pay to a private health services plan can be medical expenses if 90 percent or more of the premium is for eligible expenses. Provincial plans such as OHIP are not eligible medical expenses.</li>
        </ul>
    </div>

    <h2>Who pays for which bill?</h2>

    <table>
        <caption>Health and dental layers, eligibility rules as of September 2026 where a source is named. Premiums are not listed.</caption>
        <thead>
            <tr>
                <th>Layer</th>
                <th>What it is for</th>
                <th>What it does not do</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Provincial or territorial health insurance</td>
                <td>Medically necessary physician and hospital care in the province, on that province's terms.</td>
                <td>Routine dental, most vision care, and many drugs. Out-of-country care is not a plan you can build a trip on. See travel medical.</td>
            </tr>
            <tr>
                <td>Canadian Dental Care Plan</td>
                <td>Dental for residents under the income test who have no private dental access.</td>
                <td>Drugs, disability income, or a hospital outside Canada. A private dental plan, even a poor one, can make you ineligible.</td>
            </tr>
            <tr>
                <td>Private health and dental</td>
                <td>Drugs, dental, vision, and paramedical care the province leaves to you, inside annual maximums and fee guides the contract states.</td>
                <td>Replace disability insurance or critical illness. A dental maximum is not an income plan. Those contracts are the <a href="/blog/disability-insurance-canada-guide/">disability guide</a> and <a href="/blog/critical-illness-insurance-canada/">critical illness</a>.</td>
            </tr>
            <tr>
                <td>Quebec prescription drug insurance</td>
                <td>Mandatory drug coverage. RAMQ says everyone permanently settled in Quebec must be covered, by the public plan or a private plan. If you are eligible for a private plan and under 65, you must join it.</td>
                <td>A substitute for dental. RAMQ says the public drug plan covers around 8,000 prescription drugs. Dental is a different benefit.</td>
            </tr>
        </tbody>
    </table>

    <p>Table as of September 2026. CDCP rules are from the qualify page. Quebec rules are from RAMQ. Private-plan maximums are in your certificate, not here.</p>

    <h2>When does a private dental plan hurt more than it helps?</h2>

    <p>The qualify page is blunt. You do not qualify for the CDCP if you have access to dental coverage through your employer, a family member's employer, a pension, a professional or student organization, or a policy bought from an insurer, including through a group plan. That remains true if you decide not to take the coverage, if you must pay a premium, or if you do not use it. The adjusted-family-net-income test uses line 23600 of each spouse's return, minus universal child care benefit and RDSP income, plus amounts of those benefits repaid. Under $90,000 is the line on the page reviewed in September 2026.</p>

    <p>Canada.ca's coverage page sets the co-payment on the plan's own fees: none under $70,000 of adjusted family net income, 40 percent from $70,000 to $79,999, and 60 percent from $80,000 to $89,999. A clinic can still charge more than the plan fee. Application steps and the worked examples are the <a href="/blog/canadian-dental-care-plan-eligibility/">Canadian Dental Care Plan eligibility guide</a>. The qualify-page tests on this page are the reason a private dental plan can close that door.</p>

    <div class="example-box">
        <strong>Illustration: an early-retired couple and a dental plan they do not need</strong>
        <p>A couple in British Columbia retires at 60. Workplace benefits end the month the job ends, which is the <a href="/blog/group-life-insurance-vs-personal-canada/">group versus personal</a> problem. Their adjusted family net income is $68,000 in this illustration, under the $90,000 CDCP line, and they have no pension dental plan. They qualify to apply if they also meet residency and filing rules. A broker offers a private dental plan with a low annual maximum. Joining it is "access to private dental insurance" on the qualify page, even if the maximum is small and they never claim. In this illustration the private plan can cost them CDCP eligibility. The right comparison is the private plan's premium and maximum against CDCP coverage they would lose, not against an uninsured toothache. If income later rises to $90,000 or more, the public plan's income test fails and the private market is the remaining dental option. Income in the illustration is not a quote of their taxes. Run line 23600.</p>
    </div>

    <h2>Can you deduct the premium?</h2>

    <p>CRA's medical-expense guide, RC4065, says premiums paid to private health services plans, including medical, dental, and hospitalization plans, can be claimed as medical expenses when 90 percent or more of the premiums are for expenses that qualify for the credit. Amounts reimbursed by the plan are not also claimed. Premiums for provincial and territorial plans, and the list includes the Alberta Health Care Insurance Plan and OHIP, are not eligible. Employer-paid premiums that were not included in your income are not your claim. The credit has an income threshold on the return. This page does not restate that dollar floor. Use the worksheet for the year you file. The <a href="/blog/missed-tax-credits/">missed tax credits guide</a> is the habit of actually claiming the lines you qualify for.</p>

    <div class="warning-box">
        <strong>A health plan is not income insurance:</strong>
        <p>Drug and dental maximums pay bills. They do not replace a consulting draw. Self-employed readers still need the disability page. A critical-illness lump sum is a third contract. Stacking all three without a job for each one is how people over-insure, which the shopping guide is written to stop.</p>
    </div>

    <h2>Frequently asked questions</h2>

    <h3>Does OHIP or my provincial plan cover dental?</h3>
    <p>Routine dental is outside ordinary provincial physician coverage. Some provinces fund limited dental programs for children, seniors, or people on social assistance. Those programs have their own rules. The Canadian Dental Care Plan is the federal plan with the under-$90,000 income test and the no-private-coverage test. Read both before you assume a cleaning is insured.</p>

    <h3>If I waive dental at work, can I get the Canadian Dental Care Plan?</h3>
    <p>The qualify page says no. Access through your employer or a family member's employer counts even if you refuse the plan, pay a premium for it, or do not use it. Health spending accounts are included in that access. Waiving coverage to qualify is the mistake the page is written to prevent. The exception it does describe is a narrow pension opt-out made before December 11, 2023, where you cannot opt back in.</p>

    <h3>What are the CDCP co-payments?</h3>
    <p>Canada.ca's coverage page sets no co-payment under $70,000 of adjusted family net income, 40 percent from $70,000 to $79,999, and 60 percent from $80,000 to $89,999, applied to the plan's fees. You can still owe the dentist any amount above that fee. The tiers, the 2026–27 benefit year, and a worked example are the <a href="/blog/canadian-dental-care-plan-eligibility/">eligibility guide</a>.</p>

    <h3>I am self-employed and have no benefits. What should I buy?</h3>
    <p>Check the CDCP test before you buy dental. If you are over the income line or you want drugs and paramedical coverage the province does not provide, price a private plan on its annual maximums, waiting periods, and pre-existing condition rules, not on the brochure's category list. In Quebec, drug coverage is mandatory: join a private plan if you are eligible, or register with RAMQ if you are not. Disability insurance is still a separate purchase.</p>

    <h3>Are retiree health premiums a medical expense?</h3>
    <p>Premiums you pay yourself to a private health services plan can qualify when at least 90 percent of the premium relates to eligible medical expenses. CRA's guide says so, and it excludes provincial health premiums. Keep the invoice. If the former employer pays and the amount is not in your income, you do not claim it again. Reimbursed expenses are not claimed either.</p>

    <h3>Does private health insurance cover me outside Canada?</h3>
    <p>A domestic extended-health plan sometimes includes a short emergency-travel benefit, with a day limit and a dollar cap in the certificate. It is not a substitute for reading that cap before a long trip. Snowbird coverage is the travel-medical guide. Provincial out-of-country amounts are small relative to a US hospital. This page does not quote them, because ministries change them.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="https://www.canada.ca/en/services/benefits/dental/dental-care-plan/qualify.html">Canada.ca: Do you qualify for the Canadian Dental Care Plan</a></li>
        <li><a href="https://www.canada.ca/en/services/benefits/dental/dental-care-plan/coverage.html">Canada.ca: Canadian Dental Care Plan coverage and co-payments</a></li>
        <li><a href="https://www.canada.ca/en/health-canada/news/2023/12/the-canadian-dental-care-plan.html">Health Canada, December 2023: CDCP announcement</a></li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/forms-publications/publications/rc4065/medical-expenses.html">CRA RC4065: medical expenses, including private health premiums</a></li>
        <li><a href="https://www.ramq.gouv.qc.ca/en/citizens/prescription-drug-insurance/obligation">RAMQ: obligation to have prescription drug insurance</a></li>
        <li><a href="https://www.ramq.gouv.qc.ca/en/citizens/prescription-drug-insurance/know-eligibility-conditions-public-plan">RAMQ: public drug plan eligibility, including the figure of around 8,000 drugs</a></li>
    </ul>

    <div class="cta-section">
        <p><strong>Dental eligibility is a tax-return test.</strong></p>
        <p>Line 23600 and the medical expense claim live on the return. The 2026 tax guide is that worksheet.</p>
        <a href="/ebooks/tax-guide/" class="cta-button">Get the 2026 Tax Guide — $49 CAD</a>
    </div>

    ${footer(published)}

</div>`
  ),

  insurancePost(
    'car-insurance-by-province-canada',
    'Car Insurance by Province: Public vs Private Systems Explained',
    'Basic auto insurance is public in B.C., Manitoba, and Saskatchewan, split in Quebec, and private elsewhere. This page lists mandatory structures, not premiums.',
    `<div class="container">

    <div class="hook">
        Canada has four auto-insurance structures, not one market. British Columbia, Manitoba, and Saskatchewan require the basic policy from a public insurer. Quebec covers bodily injury through the SAAQ and property damage through a private insurer. <span class="highlight">Every other province and territory uses private insurers</span> for the mandatory layer. Premiums are personal. This page does not print average premiums.
    </div>

    <p>This is a spoke of the <a href="/blog/canadian-insurance-planning-guide/">Canadian insurance planning guide</a>. The building next to the car is <a href="/blog/home-tenant-insurance-coverage-gaps-canada/">home and tenant insurance</a>. Injury that keeps you from working is still <a href="/blog/disability-insurance-canada-guide/">disability insurance</a>, because accident benefits inside an auto policy are not an own-occupation plan. The duplicate check is <a href="/blog/insurance-shopping-without-over-insuring-canada/">shopping without over-insuring</a>.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>ICBC is the only seller of Basic Autoplan. Basic includes $200,000 of third-party liability. Optional collision and extended liability can come from ICBC or a private insurer.</li>
            <li>MPI's basic third-party liability is $500,000. SGI's basic plate insurance, as the Insurance Bureau of Canada summarizes the SGI rules, includes $200,000 of third-party liability.</li>
            <li>The SAAQ's public plan pays bodily injury on a no-fault basis. Private civil liability for property damage must be at least $50,000. Carriers and dangerous-goods vehicles have higher statutory floors.</li>
            <li>Ontario's minimum third-party liability is $200,000. For a new policy on or after July 1, 2026, only medical, rehabilitation, and attendant care benefits are mandatory accident benefits. Income replacement is optional.</li>
            <li>Alberta remains a private market in September 2026. The province has said a Care-First system starts January 1, 2027. The mandatory numbers below are the pre-Care-First description in Alberta's intentions paper.</li>
        </ul>
    </div>

    <h2>Who sells the mandatory policy where you live?</h2>

    <p>The Insurance Bureau of Canada publishes a province-by-province summary and tells readers to confirm it with government sources because requirements change. Rows for British Columbia, Manitoba, Ontario, Quebec, and Alberta below were checked against the public insurer, the regulator, or the provincial paper named in the source list. Saskatchewan, Atlantic Canada, and the territories use IBC's summary of those governments' rules, reviewed September 2026. IBC's page carries 2025-update language, so a renewal in those places should still be checked against the local regulator.</p>

    <table>
        <caption>Mandatory auto insurance structure by jurisdiction, as of September 2026. No average premiums.</caption>
        <thead>
            <tr>
                <th>Jurisdiction</th>
                <th>Who sells the mandatory layer</th>
                <th>What that layer includes</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>British Columbia</td>
                <td>ICBC only, for Basic Autoplan</td>
                <td>$200,000 third-party liability and up to $200,000 basic vehicle damage coverage. Enhanced accident benefits apply regardless of fault. Optional collision, comprehensive, and extended liability: ICBC or a private insurer.</td>
            </tr>
            <tr>
                <td>Alberta</td>
                <td>Private insurers</td>
                <td>Minimum $200,000 third-party liability, direct compensation for property damage, and accident benefits. The August 2025 intentions paper describes current accident benefits as up to $50,000 for up to two years, and income replacement as the lesser of $600 a week and 80 percent of average gross earnings for up to two years. Care-First is scheduled for January 1, 2027.</td>
            </tr>
            <tr>
                <td>Saskatchewan</td>
                <td>SGI, with the plate</td>
                <td>IBC, citing SGI: $200,000 third-party liability, basic auto damage included with registration, and accident benefits unless the tort injury option is chosen. Extension coverage is separate.</td>
            </tr>
            <tr>
                <td>Manitoba</td>
                <td>MPI, Basic Autopac</td>
                <td>Basic third-party liability of $500,000 on MPI's own page. IBC describes Basic Autopac as also including personal injury protection and all perils. MPI offers optional liability of $1 million, $2 million, or $5 million.</td>
            </tr>
            <tr>
                <td>Ontario</td>
                <td>Private insurers, regulated by FSRA</td>
                <td>Minimum $200,000 third-party liability, uninsured automobile coverage, and statutory accident benefits. From July 1, 2026, a new policy must include medical, rehabilitation, and attendant care; other accident benefits, including income replacement, are optional. Direct compensation for property damage can be declined, an option FSRA dates to January 2024.</td>
            </tr>
            <tr>
                <td>Quebec</td>
                <td>SAAQ for bodily injury; private insurers for property</td>
                <td>No-fault bodily injury for Quebec residents, in Quebec or elsewhere, funded through the licence and registration. Private civil liability of at least $50,000 for property damage. The SAAQ sets $1,000,000 for carriers and $2,000,000 when dangerous substances are transported.</td>
            </tr>
            <tr>
                <td>New Brunswick</td>
                <td>Private insurers</td>
                <td>IBC: $200,000 third-party liability, direct compensation for property damage, accident benefits, and uninsured automobile.</td>
            </tr>
            <tr>
                <td>Nova Scotia</td>
                <td>Private insurers</td>
                <td>IBC: $500,000 third-party liability, direct compensation for property damage, accident benefits, and uninsured automobile. The liability floor is higher than the $200,000 figure used in several other private provinces.</td>
            </tr>
            <tr>
                <td>Prince Edward Island</td>
                <td>Private insurers</td>
                <td>IBC: $200,000 third-party liability, direct compensation for property damage, accident benefits, and uninsured automobile.</td>
            </tr>
            <tr>
                <td>Newfoundland and Labrador</td>
                <td>Private insurers</td>
                <td>IBC: $200,000 third-party liability, direct compensation for property damage, and uninsured or unidentified automobile. IBC lists accident benefits as additional coverage, not in that minimum list. Confirm Section B before you assume it is included.</td>
            </tr>
            <tr>
                <td>Yukon</td>
                <td>Private insurers</td>
                <td>IBC: $200,000 third-party liability and accident benefits.</td>
            </tr>
            <tr>
                <td>Northwest Territories</td>
                <td>Private insurers</td>
                <td>IBC: $200,000 third-party liability, uninsured or unidentified automobile, and accident benefits.</td>
            </tr>
            <tr>
                <td>Nunavut</td>
                <td>Private insurers</td>
                <td>IBC: $200,000 third-party liability, accident benefits, and uninsured or unidentified automobile.</td>
            </tr>
        </tbody>
    </table>

    <p>Table as of September 2026. A legal minimum is a floor. It is not a recommendation of how much liability to buy.</p>

    <h2>Why does the liability limit matter more than the logo?</h2>

    <div class="example-box">
        <strong>Illustration: a judgment above the legal minimum</strong>
        <p>A driver carries the $200,000 third-party liability minimum that ICBC, FSRA, and Alberta's paper each describe as the floor in their systems. A claim is resolved at $750,000. The insurer's limit pays $200,000. The remaining $550,000 is the driver's problem in this illustration. The $750,000 is not a statistic about Canadian lawsuits. It is arithmetic that shows why a floor and a personal limit are different numbers. Alberta's intentions paper, with data as of July 25, 2025, says most Alberta drivers choose $1,000,000 or $2,000,000. That is the government's description of behaviour, not a quote for your policy. MPI will sell $1 million, $2 million, or $5 million above the $500,000 basic limit. Ask what a trip outside the province does to the lawsuit risk. MPI says injury lawsuits are largely removed inside Manitoba and remain a reason to raise liability if you drive elsewhere.</p>
    </div>

    <h2>What changes in 2026 and 2027 should you read before you renew?</h2>

    <p>Ontario already changed. FSRA says that if you buy a new policy on or after July 1, 2026, medical, rehabilitation, and attendant care stay mandatory, and other accident benefits, including income replacement, are optional. Existing policies renew with the same coverage unless you agree in writing to decline benefits, but FSRA also says who is covered for the newly optional benefits changes on July 1, 2026, even if your renewal date is later. Income you need if you cannot work belongs on a disability policy you have actually read, not on an auto benefit you declined to save premium. FSRA's consumer fact sheet says to check workplace and private benefits before you remove an auto benefit.</p>

    <p>Alberta has not switched yet. The government's Care-First intentions paper says the new system starts January 1, 2027, and it warns that the paper is not legally binding and was current as of July 25, 2025. Until that date, the private tort-and-accident-benefits market described in the table is the system to renew into. Re-read the Superintendent's pages at renewal in 2027 rather than treating this article as the regulation.</p>

    <div class="tip-box">
        <strong>Optional physical damage is still your car:</strong>
        <p>Collision and comprehensive are how you repair your own vehicle when the mandatory layer does not. In British Columbia they are optional and can be bought from ICBC or a private insurer. In Manitoba, IBC describes all perils as part of Basic Autopac, which is a different design. A leased or financed car often requires physical damage in the loan agreement even when the province does not. That requirement is the lender's, and it belongs in the same conversation as the <a href="/blog/canadian-mortgage-guide/">mortgage guide</a> only in the sense that both are contracts you sign beside a loan. The car loan is not a mortgage.</p>
    </div>

    <h2>Frequently asked questions</h2>

    <h3>Which provinces have public car insurance?</h3>
    <p>British Columbia, Saskatchewan, and Manitoba require the basic policy from ICBC, SGI, and MPI. Quebec is split: the SAAQ covers bodily injury, and a private insurer covers property damage, with at least $50,000 of civil liability. Alberta, Ontario, the Atlantic provinces, and the three territories use private insurers for the mandatory policy. Optional coverage in the public provinces can still be private. ICBC says so for B.C.</p>

    <h3>Why are there no average premiums on this page?</h3>
    <p>A provincial average hides territory, vehicle, driving record, and coverage. It is also a number that goes stale. This page cites mandatory structure from insurers and regulators. Your premium is the one on the declaration. Compare two quotes at the same liability limit and the same deductibles, in the province where the car is plated.</p>

    <h3>Is $200,000 of liability enough?</h3>
    <p>It is the legal minimum in several jurisdictions, including B.C. and Ontario, and the minimum Alberta's paper describes. It is a poor personal limit if a claim can exceed it, because you pay the excess. Nova Scotia's minimum, on IBC's summary, is $500,000. Manitoba's basic limit is $500,000. Raising the limit is an optional purchase even where the basic policy is public. The illustration on this page is the arithmetic, not a required amount.</p>

    <h3>What changed in Ontario on July 1, 2026?</h3>
    <p>FSRA says medical, rehabilitation, and attendant care benefits stay mandatory on new policies, and other statutory accident benefits, including income replacement, become optional. You can also decline direct compensation for property damage, an election available since January 2024. Declining income replacement does not decline your need for income. Read the disability guide before you trade that benefit for a lower premium.</p>

    <h3>Does Quebec auto insurance cover injuries?</h3>
    <p>Yes, through the SAAQ public plan, on a no-fault basis, for Quebec residents injured in Quebec or elsewhere in the world. You still buy private insurance for property damage, at least $50,000 of civil liability for a passenger vehicle. The public plan is not collision coverage for your own car. Tell the private insurer if you will drive outside Quebec, which is the SAAQ's own instruction, because lawsuits in other places are not the same system.</p>

    <h3>Will Alberta's Care-First system change my 2026 renewal?</h3>
    <p>The intentions paper schedules Care-First for January 1, 2027. A September 2026 renewal is still the current private system: $200,000 minimum liability, direct compensation for property damage, and the accident benefits the paper describes, including up to $50,000 for medical and rehabilitation for up to two years. Treat the 2027 date as a date to re-check, not as a rule already in your policy.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="https://www.icbc.com/insurance/products-coverage/basic-insurance">ICBC: basic insurance and Enhanced Care</a></li>
        <li><a href="https://www.mpi.mb.ca/basic-third-party-liability-insurance/">MPI: basic third-party liability</a></li>
        <li><a href="https://saaq.gouv.qc.ca/en/traffic-accident/public-automobile-insurance-plan/in-brief/">SAAQ: public automobile insurance plan in brief</a></li>
        <li><a href="https://saaq.gouv.qc.ca/blob/saaq/documents/publications/property-damage-liability-insurance.pdf">SAAQ: liability insurance for property damage</a></li>
        <li><a href="https://www.fsrao.ca/consumers/auto-insurance/purchasing-your-policy/what-standard-auto-insurance-policy">FSRA: what is in a standard Ontario auto policy</a></li>
        <li><a href="https://www.fsrao.ca/industry/auto-insurance/changes-statutory-accident-benefits-coverage-ontario-july-1-2026">FSRA: accident benefits changes, July 1, 2026</a></li>
        <li><a href="https://open.alberta.ca/publications/care-first-auto-insurance">Government of Alberta: Care-First intentions paper, August 2025</a></li>
        <li><a href="https://www.ibc.ca/insurance-basics/auto/types-of-auto-coverage/mandatory-auto-insurance-requirements">Insurance Bureau of Canada: mandatory auto coverage by jurisdiction</a></li>
    </ul>

    <div class="cta-section">
        <p><strong>The plate is local. The income you need if you are injured is not.</strong></p>
        <p>Accident benefits and a personal disability policy can overlap, and the tax treatment does not. The 2026 tax guide is the income side.</p>
        <a href="/ebooks/tax-guide/" class="cta-button">Get the 2026 Tax Guide — $49 CAD</a>
    </div>

    ${footer(published)}

</div>`
  ),
  {
    ...insurancePost(
      'online-vs-broker-life-insurance-canada',
      'Online vs Broker Life Insurance in Canada: Which Gets the Better Policy?',
      'Neither channel is a cheaper premium on this page. FCAC says a broker sells several insurers and an agent represents a company. Compare the same term, face amount, and health class.',
      `<div class="container">

    <div class="hook">
        Buying life insurance online is not automatically cheaper than using a broker, and a broker is not automatically more thorough. The Financial Consumer Agency of Canada says you can buy from an insurance company, a licensed agent, or a registered broker, and that you should <span class="highlight">shop around, get quotes, and compare coverage and cost</span>. A cheaper policy that is not the same contract is not a saving.
    </div>

    <p>This comparison sits under the <a href="/blog/canadian-insurance-planning-guide/">Canadian insurance planning guide</a>. How much face amount you need is the <a href="/blog/life-insurance-need-analysis-canada/">need analysis</a>. What actually moves a premium, without a fake age curve, is <a href="/blog/term-life-insurance-cost-by-age-canada/">term life cost by age</a>. The features worth comparing once you have two real illustrations are <a href="/blog/best-term-life-insurance-canada/">best term life insurance</a>. Coverage that ends when the job ends is <a href="/blog/group-life-insurance-vs-personal-canada/">group versus personal</a>. The lender's certificate is not this decision: <a href="/blog/mortgage-life-insurance-vs-term-life-canada/">mortgage life versus term life</a>.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>FCAC: an agent represents an insurance company. A broker sells the products of several companies. In some cases a life agent also represents several companies. Both must be licensed in the province or territory where they do business.</li>
            <li>Ask whether the person passed the Life Licence Qualification Program if you are buying life insurance. Confirm the licence with the provincial regulator. FCAC lists that check as something the regulator can do.</li>
            <li>Life and health applications can require a medical questionnaire or an exam. That is evidence of insurability. An online form does not remove it. A broker does not remove it either.</li>
            <li>FCAC says the death benefit is a one-time, tax-free payment. This page does not publish a premium, because no insurer page reviewed for this article is a rate card for your age and health.</li>
            <li>Compare term length, renewability, conversion, exclusions, owner, and beneficiary on two illustrations with the same face amount. A score on a website is not a policy.</li>
        </ul>
    </div>

    <div class="tip-box">
        <strong>Choose online if</strong> the need is level term, your health is straightforward enough to answer the questions, and you will read the contract and get at least two illustrations on the same face amount and term.
        <p><strong>Choose a broker if</strong> your health history, your business, or a conversion and renewal strategy needs a person who can place the file with more than one insurer, and you have confirmed the licence. The premium is still the illustration, not the relationship.</p>
    </div>

    <h2>What does FCAC say the two roles are?</h2>

    <table>
        <caption>How you can buy, from FCAC's "Getting an insurance policy" page, as of October 2026</caption>
        <thead>
            <tr>
                <th>Path</th>
                <th>Who is on the other side</th>
                <th>What you still have to do</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Insurance company, including a company website</td>
                <td>That company's products. FCAC lists the company as a place you can buy.</td>
                <td>You only see that company's contract unless you repeat the application elsewhere. Medical questions still apply.</td>
            </tr>
            <tr>
                <td>Licensed agent</td>
                <td>Represents an insurance company and sells its products. FCAC notes that a life agent may represent several companies.</td>
                <td>Ask which companies they can actually place. "Agent" is not a promise of one insurer, and it is not a promise of many.</td>
            </tr>
            <tr>
                <td>Registered broker</td>
                <td>A person or company who sells the products of several insurance companies.</td>
                <td>Confirm the registration. Ask what happens after the sale. A broker who only shows you one quote has not done the thing you hired them for.</td>
            </tr>
            <tr>
                <td>A lender, when you apply for a loan</td>
                <td>FCAC lists this path separately. It is often mortgage life or creditor insurance.</td>
                <td>Do not treat it as the household term policy. The benefit, the owner, and the declining balance are the mortgage-life comparison.</td>
            </tr>
        </tbody>
    </table>

    <p>Table as of October 2026. Source: FCAC, getting an insurance policy. Some policies may be cheaper and may not offer the same coverage or service. That is FCAC's sentence, and it is the whole comparison. This page will not attach a percent to it.</p>

    <h2>What should the two illustrations match?</h2>

    <p>Age, sex, smoking status, face amount, term length, and health class move the premium. The cost-by-age page explains why a chart that mixes those is not an age curve. Bring the same facts to the website and to the broker. If one quote assumes non-smoker preferred and the other assumes a rated class, you are not comparing channels. You are comparing underwriting outcomes. Ask each source for the renewal premium after the first term, and whether you can convert to permanent insurance without new evidence of insurability. Those two clauses are where a cheap first term gets expensive, or where a policy you can no longer qualify for is the one you needed.</p>

    <div class="example-box">
        <strong>Illustration: same need, two paths, no prices</strong>
        <p>A parent in Ottawa wants 20-year term sized with the need analysis, enough to replace income and clear a mortgage, and not a second mortgage-life certificate on top. Online, they complete two insurers' questionnaires and request the same face amount and the same term. With a broker, they ask for the same two facts plus any insurer the broker can add, and they ask which file would be rated because of a past prescription. If both channels return the same insurer, the same class, and the same riders, the lower premium is the better price. If the classes differ, the lower number may be the one that will be repriced after the medical. No dollar in this paragraph is a quote. There isn't one on this page.</p>
    </div>

    <h2>What does the licence check look like?</h2>

    <p>FCAC says agents and brokers must be licensed in the province or territory where they do business, and that you should confirm it before dealing with them. The provincial regulator can confirm that the company, the agent, or the broker is licensed or registered. FCAC also says to ask for references, training, whether they passed the LLQP for life insurance, whether they belong to a professional association, how long they have been in business, and what service they provide after the sale. An online form has no LLQP. The company behind the form still has to be authorized. The person who calls you after the form still needs a licence if they are advising. Ask.</p>

    <p>If the insurer fails, Assuris protection for member life insurers is described in the planning guide, including the death-benefit figure that guide ties to Assuris. This page does not restate a protection number it did not re-read in October 2026. Buy from a member insurer, and do not treat protection as a reason to skip the contract. A complaint that the channel will not resolve goes to the insurer first. FCAC says it does not resolve individual complaints. For life and health, FCAC points at the OmbudService for Life and Health Insurance after the company's process.</p>

    <div class="warning-box">
        <strong>Personal premiums are not a deduction you should assume:</strong>
        <p>The planning guide's position, tied there to FCAC's description of the death benefit, is that personal life insurance premiums are generally a personal expense. Corporate-owned coverage is a different file, the <a href="/blog/corporate-owned-life-insurance-canada/">corporate-owned guide</a>. Buying online does not create a deduction. Buying through a broker does not either.</p>
    </div>

    <h2>Frequently asked questions</h2>

    <h3>Is online life insurance cheaper in Canada?</h3>
    <p>This page will not say yes or no in percent terms. No insurer schedule reviewed here is a national price gap between a website and a broker. FCAC's instruction is to compare quotes. Get two on the same face amount, term, and health class. The lower premium on the same contract is the cheaper one. A different contract is a different product.</p>

    <h3>Do I still need a medical exam if I apply online?</h3>
    <p>Often you answer a questionnaire first. FCAC says insurers may require a questionnaire or an exam before they approve life and health coverage. Some policies are sold with limited questions and a lower maximum benefit. Those are not the same as a fully underwritten term policy. Read whether the death benefit can be challenged for a non-disclosure. The application is evidence. A short form is not a gift.</p>

    <h3>Can a broker get me a policy the website cannot?</h3>
    <p>A broker who can place business with several insurers can sometimes find a carrier that will offer a standard class when the first company rates you or declines you. That is the job. It is not guaranteed. An agent who represents one company can only sell that company. Ask how many insurers will actually see the file.</p>

    <h3>Should I buy the bank's mortgage life insurance instead?</h3>
    <p>FCAC says a lender cannot require mortgage life insurance as a condition of the mortgage, on the rights page linked from the planning guide. The benefit is aimed at the loan, and the coverage often declines as the balance declines. A personal term policy can include the mortgage and still pay the family. Compare them on the mortgage-life page before you sign at the branch.</p>

    <h3>What if I already have group life at work?</h3>
    <p>Count it as a bridge. It often ends when the job ends. The group-versus-personal page is that case. An online term policy you own is the piece that survives a resignation. Do not add the group benefit to the face amount and then forget it ends.</p>

    <h3>How do I complain?</h3>
    <p>Start with the company, the agent, or the broker. FCAC describes the company's complaint process and says FCAC itself does not decide your case. For life and health, the external body FCAC names is the OmbudService for Life and Health Insurance. The provincial regulator is the licence check and a further stop. Keep the illustration and the policy.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="https://www.canada.ca/en/financial-consumer-agency/services/insurance/get-insurance.html">FCAC: getting an insurance policy</a></li>
        <li><a href="https://www.canada.ca/en/financial-consumer-agency/services/insurance/life.html">FCAC: life insurance, tax-free death benefit</a></li>
        <li><a href="https://www.canada.ca/en/financial-consumer-agency/services/insurance/determining-insurance-needs.html">FCAC: how insurance works, and what the provincial regulator can confirm</a></li>
        <li><a href="https://www.canada.ca/en/financial-consumer-agency/services/insurance/make-complaint.html">FCAC: complaining about an insurer, agent, or broker</a></li>
    </ul>

    <div class="cta-section">
        <p><strong>The channel is a doorway. The contract is the product.</strong></p>
        <p>Who owns the policy can change the tax. The 2026 tax guide is the filing side, not an application.</p>
        <a href="/ebooks/tax-guide/" class="cta-button">Get the 2026 Tax Guide — $49 CAD</a>
    </div>

    <div class="article-footer">
        <p><strong>Disclaimer:</strong> This is general education about buying life insurance in Canada as of October 2026. It is not a premium quote, a carrier ranking, or insurance, tax, or legal advice. Premiums depend on the person and the contract. No price on this page is an offer. Confirm the licence, the illustration, and the policy before you cancel coverage you already have.</p>
        <div class="footer-note">Published: October 3, 2026 | Category: Insurance | Author: Andrew</div>
    </div>

</div>`
    ),
    author: 'Andrew',
    date: '2026-10-03',
    updated: '2026-10-03',
  },
  {
    ...insurancePost(
      'lower-car-insurance-canada',
      'How to Lower Your Car Insurance in Canada',
      'Lower the premium by comparing the same liability limit and deductibles, and by dropping coverage you have replaced on purpose. This page does not publish a percent off.',
      `<div class="container">

    <div class="hook">
        You lower car insurance in Canada by comparing quotes at the <span class="highlight">same liability limit and the same deductibles</span>, in the province where the car is plated, and by removing only the coverage you have deliberately replaced. A provincial average premium is not a target. This page does not publish one, and it does not publish a percent you will save.
    </div>

    <p>The map of who even sells the mandatory policy is <a href="/blog/car-insurance-by-province-canada/">car insurance by province</a>. The order of the household's other policies is the <a href="/blog/canadian-insurance-planning-guide/">insurance planning guide</a>. Income you still need if you are injured is <a href="/blog/disability-insurance-canada-guide/">disability insurance</a>, not an optional auto benefit you declined to save premium. The home policy you might bundle is <a href="/blog/home-tenant-insurance-coverage-gaps-canada/">home and tenant coverage</a>.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>British Columbia, Saskatchewan, and Manitoba require the basic policy from the public insurer. Quebec splits bodily injury (SAAQ) from property damage (private). The other provinces and the territories use private insurers for the mandatory policy. You cannot "shop the market" in a province that does not have one.</li>
            <li>Compare two quotes only after the liability limit, the deductibles, and the drivers are the same. A lower price with a lower limit is a different product.</li>
            <li>In Ontario, FSRA says that on policies bought on or after July 1, 2026, medical, rehabilitation, and attendant care stay mandatory, and other accident benefits, including income replacement, are optional. Declining a benefit can change the premium. It also opens a gap.</li>
            <li>Ask the insurer about winter tires, kilometres, occasional drivers, and usage-based programs. Do not budget a discount this page did not read on an insurer's schedule.</li>
            <li>A legal minimum, including the $200,000 third-party liability floor described for several provinces on the province page, is a poor personal limit if a claim can exceed it. You pay the excess.</li>
        </ul>
    </div>

    <h2>What can you change without changing the protection?</h2>

    <table>
        <caption>Levers on a Canadian auto premium, and the evidence this page will cite, as of October 2026</caption>
        <thead>
            <tr>
                <th>Lever</th>
                <th>What it can do</th>
                <th>What not to assume</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Shop the same policy</td>
                <td>In a private-market province, two insurers can price the same limit differently. FCAC says to shop around and compare coverage and cost.</td>
                <td>That shopping exists inside ICBC, SGI, or MPI basic insurance. Optional coverages in those provinces can still be private. The province page separates them.</td>
            </tr>
            <tr>
                <td>Deductible</td>
                <td>A higher deductible usually lowers the premium, because you pay more of a small claim yourself.</td>
                <td>A dollar saving. The quote is the saving. If you cannot pay the deductible from cash, you did not buy a deductible. You bought a problem.</td>
            </tr>
            <tr>
                <td>Liability limit</td>
                <td>Raising it costs something. Leaving it at the legal minimum can cost the excess over the limit if a claim is larger.</td>
                <td>That $200,000 is "enough" because it is a floor in several jurisdictions. The province page's illustration is the arithmetic, not a required amount.</td>
            </tr>
            <tr>
                <td>Optional accident benefits, Ontario</td>
                <td>FSRA says income replacement and other benefits became optional on new policies from July 1, 2026. Medical, rehabilitation, and attendant care stayed mandatory.</td>
                <td>That declining income replacement is free money. Replace the income with a disability policy you have read, or keep the benefit.</td>
            </tr>
            <tr>
                <td>Kilometres, drivers, and the car</td>
                <td>Insurers ask how far you drive, who else drives, and what the vehicle is. Fewer kilometres and fewer occasional drivers are facts you can correct if the application is wrong.</td>
                <td>A national discount for winter tires, alumni memberships, or bundling. Ask your insurer. If the percent is not on the quote, it is not yours.</td>
            </tr>
            <tr>
                <td>Tickets and at-fault claims</td>
                <td>A clean record is the largest honest lever, and it is slow. Convictions and at-fault claims are underwriting facts.</td>
                <td>A surcharge percent. This page does not have one from a regulator that applies in every province.</td>
            </tr>
        </tbody>
    </table>

    <p>Table as of October 2026. Structure of the mandatory market: the province-by-province guide and the insurer and regulator pages it cites. Shopping instruction: FCAC's getting-an-insurance-policy page. Ontario benefits: FSRA's July 1, 2026 accident-benefits page. No cell in this table is a promised reduction.</p>

    <h2>Where does the province stop you from shopping?</h2>

    <p>The province guide's table, built from ICBC, MPI, SAAQ, FSRA, Alberta's intentions paper, and the Insurance Bureau of Canada, is the constraint. In British Columbia the basic policy is ICBC. In Saskatchewan it is SGI. In Manitoba it is MPI. You can still choose optional physical damage and, in some of those systems, a higher liability limit. You cannot collect three "basic" quotes that do not exist. In Quebec, bodily injury is the public plan and property damage is private, with a liability floor the SAAQ describes. In Alberta, Ontario, the Atlantic provinces, and the territories, the mandatory policy is private, and shopping is the actual lever.</p>

    <div class="example-box">
        <strong>Illustration: a lower quote that is not lower coverage</strong>
        <p>A driver in a private-market province has a renewal at a $1,000,000 liability limit and a $500 collision deductible. A second insurer offers a lower premium at $200,000 liability and a $1,000 deductible. The second quote is not a discount on the first policy. It is less coverage. Ask the second insurer to rerun $1,000,000 and $500. Then compare. The dollar gap, if one remains, is the saving. The $1,000,000 and the deductibles are a teaching pair, not a recommendation and not a statistic about what Canadians buy. Alberta's intentions paper, cited on the province page, describes many drivers choosing $1,000,000 or $2,000,000. That is behaviour the government described, not your price.</p>
    </div>

    <h2>What should you not cancel to save the renewal?</h2>

    <ul>
        <li><strong>Income replacement, if you have no other disability pay.</strong> Ontario's July 1, 2026 change made it optional on new policies. FSRA's consumer fact sheet, as described on the province page, says to check workplace and private benefits before you remove an auto benefit. The disability guide is the personal contract. EI sickness and CPP disability are ceilings for people who qualify. They are not an own-occupation plan.</li>
        <li><strong>Collision on a financed or leased car</strong> if the loan requires it. That requirement is the lender's. The province's mandatory layer often does not repair your own car when you are at fault.</li>
        <li><strong>The liability limit, to the legal floor,</strong> because a claim above the floor is yours. The province page walks through that arithmetic without pretending the judgment is a national statistic.</li>
    </ul>

    <div class="warning-box">
        <strong>Credit information is a provincial rule, not a blog rule:</strong>
        <p>FCAC's "how insurance works" page says the Insurance Bureau of Canada provides guidelines, and that insurers may choose to use your credit information. It does not, on the page reviewed, print a province-by-province ban or permission. Ask the insurer and the provincial regulator whether credit is used on your file. This page will not tell you that fixing a score will cut the premium by a stated percent. It will not tell you the practice is illegal in a province it has not read a statute for.</p>
    </div>

    <h2>A renewal checklist</h2>

    <ol>
        <li>Read the declaration. Write down the liability limit, the deductibles, the drivers, and the annual kilometres the insurer thinks you drive.</li>
        <li>Correct the kilometres and the occasional drivers if they are wrong. Those are facts, not negotiating lines.</li>
        <li>In a private market, get a second quote at those same limits. In a public basic market, ask what optional coverage is available and from whom.</li>
        <li>If you are in Ontario and the policy is new or you are being asked to sign away an accident benefit, read the FSRA page dated July 1, 2026 before you sign.</li>
        <li>Ask, in writing, which discounts the insurer actually applies: winter tires, bundling, alumni, usage-based. Accept only the ones on the new declaration.</li>
        <li>Put the premium you kept into the same folder as the disability policy. A cheaper auto policy that leaves your income uninsured was not a saving.</li>
    </ol>

    <h2>Frequently asked questions</h2>

    <h3>What is a realistic discount?</h3>
    <p>The one on the quote you accept, at the same limits. This page does not average Canadian premiums and does not publish "save 20 percent" or any other figure. Insurer pages that advertise a winter-tire or bundling percent are the source for that percent, and only for that insurer, in that province, on that date.</p>

    <h3>Does bundling home and auto always help?</h3>
    <p>Only if the bundle price is lower than the two policies bought separately at the same coverage. Ask for both numbers. A bundle that drops a sewer-backup or liability feature on the home to make the auto look cheap is the home-insurance gaps page, not a win.</p>

    <h3>Will winter tires lower my premium?</h3>
    <p>Some insurers say they consider them. This page did not retrieve a national amount. Ask yours, and keep the proof they ask for. Tires you do not actually install are not a discount. They are a misrepresentation.</p>

    <h3>Can I lower the premium by dropping collision?</h3>
    <p>Yes, if you can replace the car from cash and no lender requires the coverage. The premium falls because the insurer no longer pays for your own car in an at-fault crash. That is a real trade. It is a bad trade on a car you cannot replace, and it may breach a lease or a loan.</p>

    <h3>Do public insurers let me compare companies?</h3>
    <p>Not for the basic policy in British Columbia, Saskatchewan, or Manitoba. Optional coverage can be a choice, including private insurers for some B.C. optional products, which ICBC's own pages describe. Quebec's property-damage policy is private. Start with the province page so you do not spend an evening requesting quotes the law will not sell you.</p>

    <h3>Does a ticket fall off if I switch insurers?</h3>
    <p>No. The driving record is the record. A new insurer asks for it. Shopping does not delete a conviction. Time, and not collecting another one, is the lever. The application should match the record. A wrong answer is not a discount.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="https://www.canada.ca/en/financial-consumer-agency/services/insurance/get-insurance.html">FCAC: shop around and compare coverage and cost</a></li>
        <li><a href="https://www.canada.ca/en/financial-consumer-agency/services/insurance/determining-insurance-needs.html">FCAC: how premiums are set, including credit information</a></li>
        <li><a href="https://www.fsrao.ca/industry/auto-insurance/changes-statutory-accident-benefits-coverage-ontario-july-1-2026">FSRA: Ontario accident benefits, July 1, 2026</a></li>
        <li><a href="/blog/car-insurance-by-province-canada/">Car insurance by province</a> — public, private, and the liability floors that page sources</li>
    </ul>

    <div class="cta-section">
        <p><strong>The cheaper declaration is only cheaper at the same limit.</strong></p>
        <p>Accident benefits and a disability policy can overlap, and the tax treatment does not. The 2026 tax guide is the income side.</p>
        <a href="/ebooks/tax-guide/" class="cta-button">Get the 2026 Tax Guide — $49 CAD</a>
    </div>

    <div class="article-footer">
        <p><strong>Disclaimer:</strong> This is general education about comparing Canadian auto insurance as of October 2026. It is not a quote, a broker recommendation, or insurance or legal advice. Premiums, discounts, and mandatory coverages differ by province and insurer. No savings percentage on this page is implied. Read the declaration and the FSRA or public-insurer page for your province before you decline a benefit.</p>
        <div class="footer-note">Published: October 3, 2026 | Category: Insurance | Author: Andrew</div>
    </div>

</div>`
    ),
    author: 'Andrew',
    date: '2026-10-03',
    updated: '2026-10-03',
  },
  ...oct2026InsurancePosts,
];
