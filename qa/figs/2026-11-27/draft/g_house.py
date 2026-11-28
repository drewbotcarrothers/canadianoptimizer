from house_model import *; from genlib import *
from decimal import Decimal as Dc
def r0(v): return int(Dc(v).quantize(Dc(1), rounding=ROUND_HALF_UP))
def r2(v): return Dc(v).quantize(Dc('0.01'), rounding=ROUND_HALF_UP)
TAX, HEAT, DOWN, C = 350, 125, 50000, '0.045'
q = qual_rate(C); f = pay_factor(q); fc = pay_factor(C)
# Table A: by income
rowsA = []; resA = {}
for inc in (80000, 100000, 125000, 150000):
    p, L, pi, b, _ = max_price(inc, C, DOWN, TAX, HEAT)
    resA[inc] = (p, L, pi, b)
    rowsA.append([m(inc), m(r0(Dc('0.39')*Dc(inc)/12)), m(r0(pi)), m(r0(L)), m(p), b])
# Table B: by contract rate at $100,000
rowsB = []; resB = {}
for c in ('0.0325', '0.045', '0.055', '0.065'):
    p, L, pi, b, ff = max_price(100000, c, DOWN, TAX, HEAT); loan = loan_for(p, DOWN)[0]
    resB[c] = (p, loan)
    rowsB.append([pc(Dc(c)), pc(qual_rate(c)), m(p), m(r0(loan)), m(r2(loan*pay_factor(c)), True), m(r2(loan*pay_factor(qual_rate(c))), True)])
# Table C: other debts
rowsC = []; resC = {}
for d in (0, 500, 1000):
    p, L, pi, b, _ = max_price(100000, C, DOWN, TAX, HEAT, debt=d); resC[d] = (p, pi, b)
    rowsC.append([m(d), b, m(r0(pi)), m(p)])
p30 = max_price(100000, C, DOWN, TAX, HEAT, years=30)[0]; p25 = resA[100000][0]
need500 = income_needed(500000, DOWN, C)
L500 = loan_for(500000, DOWN)[0]; L501, pr501, ltv501 = loan_for(501000, DOWN)
pr500 = loan_for(500000, DOWN)[1]
cond400 = r0(Dc(200)/f)       # a $400 condo fee counts $200 a month, lowering the maximum loan by 200/f
a100 = resA[100000]
gap_pay = r2(loan_for(a100[0], DOWN)[0]*(pay_factor(q)-pay_factor(C)))
disclaimer = ("General education, not mortgage, tax or financial advice, and not a pre-approval. The 39% and 44% limits, the gross debt service and total debt service formulas, the qualifying rate and the treatment of condo fees and heat come from CMHC and the Financial Consumer Agency of Canada; the down payment tiers, the $1.5 million insured price cap and the 30-year amortization rules come from the Department of Finance Canada; the premium rates come from CMHC; all read on November 27, 2026. "
 "The tables are our own calculations for a household with one gross income, a 25-year amortization (30 years only where stated), $350 a month of property tax and $125 a month of heat, which are labelled assumptions, and semi-annual compounding. Your lender's figures will differ with your actual property tax, heating costs, condo fees, debts and credit, and a lender can set stricter limits than CMHC's.")
content = f"""<div class="container">

    <div class="hook">
        You have a household income, a down payment and a rate quote, and you want to know the highest price a lender will say yes to. <span class="highlight">The answer is a formula, not a feeling: two ratios, tested at a higher rate than the one you will pay.</span> This guide, part of our <a href="@HUB@">first-time buyers hub</a>, puts the formula into tables so you can find your own row.
    </div>

    <p>Lenders test two ratios at the qualifying rate: your housing costs can be at most 39% of gross income (GDS) and all your debt payments at most 44% (TDS). With a $100,000 household income, no other debts, a 4.50% contract rate and $50,000 down, that works out to a price of about {m(p25)} in our example. Change any input and the answer moves.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>CMHC caps gross debt service at 39% and total debt service at 44%, and the ratios use a qualifying rate that is the greater of your contract rate plus 2 percentage points or 5.25%.</li>
            <li>On our example at a 4.50% contract rate, the qualifying rate is {pc(q)}, so the test uses a payment {m(gap_pay, True)} a month higher than the one you would pay on a {m(r0(loan_for(a100[0], DOWN)[0]))} loan.</li>
            <li>At $100,000 of income with $50,000 down, the maximum price is about {m(p25)} (GDS is the limit); the same household needs about {m(r0(need500))} of income for a $500,000 home.</li>
            <li>Other monthly debts can switch the limit from GDS to TDS: {m(500)} a month of other debt lowers the example price from {m(resC[0][0])} to {m(resC[500][0])}.</li>
            <li>A lender's maximum is a ceiling, not a budget. The FCAC warns that going above the ratios increases the risk of taking on more debt than you can afford.</li>
        </ul>
    </div>

    <nav aria-label="On this page">
        <ul>
            <li><a href="#ratios">What lenders test</a></li>
            <li><a href="#formula">The formula, step by step</a></li>
            <li><a href="#income">How much by income</a></li>
            <li><a href="#down">What the down payment does</a></li>
            <li><a href="#rate">How the rate changes the answer</a></li>
            <li><a href="#debts">Other debts and condo fees</a></li>
            <li><a href="#budget">Budget below the ceiling</a></li>
            <li><a href="#faq">FAQ</a></li>
        </ul>
    </nav>

    <h2 id="ratios">What do lenders test when you ask how much house you can afford?</h2>
    <p>They test your gross debt service (GDS) and total debt service (TDS) ratios. The Financial Consumer Agency of Canada says your total monthly housing costs shouldn't be more than 39% of your gross household income, which is the GDS ratio, and that your total debt load, which adds all your other debts to the housing costs, shouldn't be more than 44% of gross income, which is the TDS ratio. CMHC states the same limits for the mortgages it insures.</p>
    <p>"Housing costs" has a specific meaning. CMHC's formula for GDS is principal and interest, plus property taxes, plus heat, divided by gross annual income, and the TDS formula adds your other debt obligations. The principal and interest use the amortization period and the loan amount including the CMHC premium. If the property is a condominium, 50% of the condominium fees are included in both ratios.</p>
    <p>The payment is not calculated at the rate you will pay. CMHC says the ratios must be calculated at the greater of your contract rate plus 2%, or 5.25%, and OSFI sets the same minimum qualifying rate for uninsured mortgages at federally regulated lenders. That is the stress test, and it is why a lender can approve less than a simple payment calculator suggests. For the rule in more detail, see our <a href="/blog/mortgage-stress-test-canada/">mortgage stress test guide</a>.</p>
    <p class="did-you-know" data-info-gain><strong>What this page adds:</strong> three tables built from CMHC's published formulas, showing the maximum price by income, by contract rate and by other debts, with the premium and minimum down payment rules applied, plus the income needed for a $500,000 home, so you can find your own situation instead of reading a generic range.</p>

    <h2 id="formula">What is the formula for how much house you can afford?</h2>
    <p>Work backwards from your income to the largest loan the ratios allow. The steps below are what the tables use, and you can follow them with your own numbers.</p>
    <ol>
        <li><strong>Find the monthly limits.</strong> Divide gross household income by 12. The GDS limit is 39% of that figure and the TDS limit is 44%.</li>
        <li><strong>Take out the non-mortgage housing costs.</strong> Subtract monthly property tax and heat (and 50% of any condo fees) from both limits, and subtract your other monthly debt payments from the TDS limit only.</li>
        <li><strong>Use the smaller of the two results.</strong> That is the largest monthly principal and interest payment the lender will count, calculated at the qualifying rate.</li>
        <li><strong>Turn the payment into a loan.</strong> Divide the payment by the payment per dollar borrowed at the qualifying rate and amortization. At {pc(q)} over 25 years our calculation gives {m(r2(f*1000), True)} a month per $1,000 borrowed, so each $100 a month of room supports about {m(r0(Dc(100)/f))} of loan.</li>
        <li><strong>Take off the premium and add the down payment.</strong> If you have less than 20% down the loan includes the CMHC premium, so the amount you actually borrow against the home is smaller than the maximum loan. The price is that borrowed amount plus your down payment.</li>
    </ol>
    <p>The answer is the lower of what the ratios allow and what the down payment rules allow, which the next sections cover. Our tables assume {m(TAX)} a month of property tax and {m(HEAT)} a month of heat, labelled assumptions for a typical home, because CMHC says to use actual heating costs where they are available and otherwise a reasonable estimate. Use the real figures for the home you are looking at, since the property tax bill can be much higher or lower.</p>

    <h2 id="income">How much house can you afford at common household incomes?</h2>
    <p>At a $100,000 household income, $50,000 down and a 4.50% contract rate, the example maximum is about {m(resA[100000][0])}. The table shows four incomes with the same assumptions: a {pc(Dc(C))} contract rate, a {pc(q)} qualifying rate, a 25-year amortization, no other debts and a $50,000 down payment.</p>
{table('Maximum price by household income (our calculation, 4.50% contract rate, $50,000 down, 25-year amortization, November 27, 2026)', ['Gross household income','39% of monthly income','Largest payment counted after tax and heat','Largest loan including premium','Maximum price','Limit that binds'], rowsA, 1)}
    <p>Going from $100,000 to $125,000 of income adds {m(resA[125000][0]-resA[100000][0])} of price, and from $125,000 to $150,000 adds {m(resA[150000][0]-resA[125000][0])}, because each extra dollar of monthly room supports the same amount of loan. At every income in the table, the GDS limit binds because there are no other debts. The $50,000 down payment also stays above the minimum for each price, which the next section explains.</p>

    <h2 id="down">What do the down payment rules do to the maximum price?</h2>
    <p>They set a floor on the down payment and a ceiling on the price. The Department of Finance Canada says that, for mortgage insurance applications submitted on or after December 15, 2024, the minimum down payment is 5% on the part of the price up to $500,000 and 10% on the part from $500,000 to $1.5 million, and that the value of the property must be less than $1.5 million. At a price of {m(751000)} the minimum is {m(r0(min_down(751000)))}, which is why a $50,000 down payment cannot support a price much above $750,000 even if your income could.</p>
    <p>With less than 20% down the loan is insured, and CMHC's premium rises in bands as the loan-to-value rises: 2.80% for 80.01% to 85%, 3.10% for 85.01% to 90% and 4.00% for 90.01% to 95%. The premium is added to the loan, so it uses up some of your borrowing limit. The bands create cliffs. At a $500,000 price with $50,000 down the loan-to-value is 90% and the premium is 3.10%, a loan of {m(r0(L500))}. At {m(501000)} the loan-to-value passes 90%, the premium becomes 4.00% and the loan is {m(r0(L501))}, {m(r0(L501 - L500))} more for a $1,000 higher price. That is why the maximum at a 3.25% contract rate in the rate table below stops at $500,000.</p>
    <p>A longer amortization raises the ceiling. First-time buyers and buyers of a new build can get 30 years on an insured mortgage, and CMHC adds a 0.20% surcharge to the premium when the amortization is longer than 25 years. On the $100,000 example the 30-year maximum price is about {m(p30)} against {m(p25)} at 25 years, a difference of {m(p30 - p25)}, and a longer amortization also costs more interest over the life of the loan, so check the total cost before choosing it.</p>

    <h2 id="rate">How does your mortgage rate change how much house you can afford?</h2>
    <p>A higher rate lowers the maximum price, and the effect is larger than the rate change alone because the test adds 2 percentage points. At a $100,000 income the example maximum falls from {m(resB['0.045'][0])} at a 4.50% contract rate to {m(resB['0.055'][0])} at 5.50%, which is {m(resB['0.045'][0]-resB['0.055'][0])} of buying power for one percentage point.</p>
{table('Maximum price by contract rate at $100,000 of income (our calculation, $50,000 down, 25-year amortization, November 27, 2026)', ['Contract rate','Qualifying rate','Maximum price','Loan including premium','Monthly payment at the contract rate','Payment counted at the qualifying rate'], rowsB, 1)}
    <p>The 5.25% floor matters only for low rates: any contract rate under 3.25% is tested at 5.25%, so the maximum price stops rising as rates fall. In the table, the 3.25% row is tested at 5.25%, and its {m(resB['0.0325'][0])} maximum is set by the premium cliff at a 90% loan-to-value rather than by the ratios. You never pay the qualifying rate. The last two columns show the gap between what you would pay and what the lender counts.</p>

    <h2 id="debts">How do other debts and condo fees change the answer?</h2>
    <p>Other debts can move the limit from GDS to TDS, and once TDS binds each dollar of debt payment comes straight out of your housing budget. At $100,000 of income, {m(500)} a month of other debt payments (a car loan, for example) lowers the example maximum from {m(resC[0][0])} to {m(resC[500][0])}, and {m(1000)} a month lowers it to {m(resC[1000][0])}.</p>
{table('Maximum price by other monthly debt payments at $100,000 of income (our calculation, 4.50% contract rate, $50,000 down, November 27, 2026)', ['Other monthly debt payments','Limit that binds','Largest payment counted after tax and heat','Maximum price'], rowsC, 1)}
    <p>Condo fees count too, at half their amount. A $400 monthly fee adds $200 to the housing costs in both ratios, which at {pc(q)} lowers the maximum loan by about {m(cond400)}, so a condo with high fees needs a lower price than a house at the same income. CMHC's formula also includes all your other debt obligations in the TDS, so paying down a loan before you apply can raise your maximum.</p>

    <h2 id="budget">Should you spend the maximum a lender will approve?</h2>
    <p>Not automatically. The ratios are a lender's risk limit, and the FCAC says you may still qualify with a ratio slightly higher, but that you are increasing the risk of taking on more debt than you can afford. Your monthly budget includes things the ratios ignore, such as groceries, childcare, car costs, savings and the cost of moving. Compare the payment at the contract rate with what you spend today before you decide on a price.</p>
    <p>Run these checks before you pick a number:</p>
    <ul>
        <li><strong>Test your payment at a higher rate.</strong> Add 2 percentage points to your contract rate and see whether you could still carry the payment at renewal.</li>
        <li><strong>Add the one-time costs.</strong> Land transfer tax and other closing costs come on top of the down payment. See our <a href="/blog/land-transfer-tax-closing-costs-canada/">closing costs and land transfer tax guide</a>.</li>
        <li><strong>Plan the down payment.</strong> The FHSA and the Home Buyers' Plan can raise it, and the <a href="/blog/first-time-home-buyer-guide-canada/">first-time home buyer guide</a> sets out the order to use them.</li>
        <li><strong>Compare with renting.</strong> Our <a href="/blog/rent-vs-buy-canada/">rent versus buy calculator</a> tests whether buying at your price makes sense.</li>
    </ul>

    <h2 id="faq">Frequently asked questions</h2>
    <h3>How much income do I need for a $500,000 house in Canada?</h3>
    <p>About {m(r0(need500))} of gross household income on our example: a $50,000 down payment, a 4.50% contract rate, no other debts, and $350 a month of property tax and $125 of heat. The loan including the CMHC premium is {m(r0(L500))}, and the qualifying payment plus tax and heat must be no more than 39% of income.</p>
    <h3>What is the difference between GDS and TDS?</h3>
    <p>GDS counts only housing costs: principal and interest, property taxes, heat and half of any condo fees. TDS adds your other debt payments. CMHC caps them at 39% and 44% of gross income.</p>
    <h3>What is the qualifying rate?</h3>
    <p>It is the rate the lender uses to test your payment: the greater of your contract rate plus 2 percentage points or 5.25%. You pay your contract rate, not the qualifying rate.</p>
    <h3>How much do I need for a down payment?</h3>
    <p>At least 5% of the first $500,000 of the price and 10% of the part from $500,000 to $1.5 million for an insured mortgage, and the property value must be under $1.5 million. Your lender may require more.</p>
    <h3>Does a bigger down payment let me afford a bigger house?</h3>
    <p>Yes, in two ways: it is added to the loan to make the price, and it lowers the loan-to-value, which can reduce or remove the CMHC premium. Each $10,000 of extra down payment adds at least $10,000 to the price.</p>
    <h3>Is my maximum the same at every lender?</h3>
    <p>No. CMHC sets maximums for the loans it insures, and lenders can apply their own stricter rules, so the figure from one lender may differ from another's.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="@PREP@">Financial Consumer Agency of Canada: Preparing to get a mortgage</a>, reviewed November 27, 2026</li>
        <li><a href="@GDS@">CMHC: Calculating GDS/TDS</a>, reviewed November 27, 2026</li>
        <li><a href="@PUR@">CMHC: Mortgage loan insurance for purchase</a>, reviewed November 27, 2026</li>
        <li><a href="@FIN@">Department of Finance Canada: Delivering the boldest mortgage reforms in decades</a>, September 24, 2024, reviewed November 27, 2026</li>
        <li><a href="@PREM@">CMHC: Mortgage loan insurance premiums for homeowner and small rental loans</a>, reviewed November 27, 2026</li>
        <li><a href="@OSFI@">OSFI: Minimum qualifying rate for uninsured mortgages</a>, reviewed November 27, 2026</li>
    </ul>

    <h2>Related reading</h2>
    <ul>
        <li><a href="/blog/mortgage-stress-test-canada/">Mortgage stress test</a></li>
        <li><a href="/blog/cmhc-mortgage-insurance-canada/">CMHC mortgage insurance guide</a></li>
        <li><a href="/blog/first-time-home-buyer-guide-canada/">First-time home buyer guide</a></li>
        <li><a href="/blog/fhsa-home-purchase-sequencing-canada/">FHSA home purchase sequencing</a></li>
        <li><a href="/blog/home-buyers-plan-hbp-guide/">Home Buyers' Plan guide</a></li>
    </ul>

    <div class="cta-section">
        <p><strong>A bigger down payment is the one input you control.</strong></p>
        <p>The Canadian Tax Guide covers the First Home Savings Account and the Home Buyers' Plan, which can raise your down payment and your maximum price before you apply.</p>
        <a href="/ebooks/tax-guide/" class="cta-button">Get the 2026 Tax Guide — $49 CAD</a>
    </div>

    ${{batchFooter(D, 'Real Estate', disclaimer)}}

</div>"""
for k, v in [('@PREP@', '${PREP}'), ('@GDS@', '${GDS}'), ('@PUR@', '${PUR}'), ('@FIN@', '${FIN}'), ('@PREM@', '${PREM}'), ('@OSFI@', '${OSFI}')]: content = content.replace(k, v)
consts = """const PREP = 'https://www.canada.ca/en/financial-consumer-agency/services/mortgages/preparing-mortgage.html';
const GDS = 'https://www.cmhc-schl.gc.ca/professionals/project-funding-and-mortgage-financing/mortgage-loan-insurance/calculating-gds-tds';
const PUR = 'https://www.cmhc-schl.gc.ca/professionals/project-funding-and-mortgage-financing/mortgage-loan-insurance/mortgage-loan-insurance-homeownership-programs/purchase';
const FIN = 'https://www.canada.ca/en/department-finance/news/2024/09/delivering-the-boldest-mortgage-reforms-in-decades.html';
const PREM = 'https://www.cmhc-schl.gc.ca/professionals/project-funding-and-mortgage-financing/mortgage-loan-insurance/mortgage-loan-insurance-homeownership-programs/premium-information-for-homeowner-and-small-rental-loans';
const OSFI = 'https://www.osfi-bsif.gc.ca/en/supervision/financial-institutions/banks/minimum-qualifying-rate-uninsured-mortgages';"""
open('../../../../src/data/nov2026/p-how-much-house-can-i-afford-canada.ts', 'w').write(ts('how-much-house-can-i-afford-canada', 'howMuchHouseCanIAffordCanadaPost', '/category/real-estate/first-time-buyers/', consts, disclaimer, content, 'Real Estate', 'real-estate', 'first-time-buyers', "How Much House Can I Afford in Canada? Income, Down Payment and Rate", "How much house you can afford in Canada: the 39% and 44% debt service limits, the stress test, the down payment rules and tables of the maximum price by income, rate and debts."))
print('ok', p25, p30, int(need500), resA, resB, resC)
