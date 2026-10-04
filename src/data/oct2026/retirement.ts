import { articleFooter, octPost } from './types';

const disclaimer =
  'This is general education about Canadian retirement math as of October 4, 2026. It is not tax, pension, or investment advice. CPP and OAS figures are ESDC amounts for 2026, used as today’s ceilings or averages, not as a forecast of what a 55-year-old will be paid at 65. Portfolio paths use a stated 3 percent real return, withdrawals at the start of each year, and no fees or tax unless a separate paragraph says so. Change the return and the age the money lasts will move. Confirm My Service Canada Account before you treat a maximum as your pension.';

const footer = articleFooter('Retirement', disclaimer);

export const oct2026RetirementPosts = [
  octPost(
    'Retirement',
    'retirement',
    'retire-at-55-one-million-canada',
    'Can You Retire at 55 With $1 Million in Canada? Three Spending Cases',
    'Three illustrations of retiring at 55 with $1 million, at $40,000, $60,000, and $80,000 of spending. The 3% real return is an assumption, not a forecast.',
    `<div class="container">

    <div class="hook">
        A million dollars at 55 is not a yes or a no. It is a spending rate, a decade with no CPP and no OAS, and a tax choice about which account the spending comes from. At a <span class="highlight">3 percent real return</span> that this page invented as an assumption, $40,000 a year from a tax-free million lasts past 95 with money left. $80,000 a year does not see 75. The public pensions, if you get them, are what bend the middle case.
    </div>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>The model starts with $1,000,000, withdraws spending at the beginning of each age, then grows the remainder at 3 percent real. There is no fee, no tax, and no bad sequence of returns in the base table. It is a TFSA-like illustration so the arithmetic stays visible.</li>
            <li>With no CPP and no OAS, $40,000 of spending ends age 95 with about $119,000 left. $60,000 cannot fund the withdrawal at age 77. $80,000 cannot fund it at age 70.</li>
            <li>ESDC's maximum CPP retirement pension at 65, for a benefit starting in January 2026, is $1,507.65 a month. The average at 65, dated April 2026, is $877.01. OAS for July to September 2026 is $751.97 a month from 65 to 74 if you qualify for the full pension. A 55-year-old in 2026 does not receive those cheques. They are today's amounts, used as a ceiling and an average, not as a 2036 quote.</li>
            <li>CPP cannot start before 60, and it is 0.6 percent lower for each month before 65. OAS cannot start before 65. The years from 55 to 64 are a bridge the portfolio pays, unless you have a workplace pension this model does not include.</li>
            <li>An RRSP dollar is not a TFSA dollar. Spending $60,000 after tax from an RRSP means withdrawing more than $60,000. The portfolio dies sooner. The calculator that will take your own CPP and OAS figures is the <a href="/blog/canadian-retirement-calculator/">Canadian retirement calculator</a>.</li>
        </ul>
    </div>

    <p>The general "how much" question is <a href="/blog/how-much-money-retire-canada/">how much money you need to retire</a>. The mechanics of leaving work early are <a href="/blog/early-retirement-fire-canada/">early retirement in Canada</a>. When the public pensions should start is <a href="/blog/cpp-when-to-take-canada/">when to take CPP</a> and <a href="/blog/oas-gis-clawback-canada/">OAS and the recovery tax</a>. This page answers a narrower search: one million, age 55, three spending levels.</p>

    <h2>The rules of the illustration</h2>

    <p>Age 55 begins with $1,000,000. Spending is constant in today's dollars. The return is 3 percent after inflation, every year, with no down year and no up year. The withdrawal happens first. What remains grows. Ages run from 55 through 95, which is 41 withdrawals. "Breaks at 77" means that at the start of age 77 the scheduled withdrawal is larger than the balance. A workplace pension, a house, rent, and a spouse's separate savings are not in the base case. Adding any of them is your edit, not a hidden input.</p>

    <p>Public pensions, when a later table includes them, start at 65 and are subtracted from spending before the portfolio is touched. They are not indexed further inside the model, because the portfolio is already in real dollars and the pension figures are today's dollars. That is a convenience. OAS is in fact adjusted quarterly with prices, and a CPP benefit you start in 2036 will not be the January 2026 maximum. Using today's maximum as if it arrives on your 65th birthday overstates what most people get and mis-dates what the maximum will be. The average is the more honest single number, and it is still not your number. My Service Canada Account is your number.</p>

    <h2>Case 1, case 2, case 3, portfolio only</h2>

    <table>
        <caption>End-of-age balance, $1,000,000 start, 3 percent real, no CPP, no OAS, no tax</caption>
        <thead>
            <tr>
                <th>Age</th>
                <th>Spend $40,000</th>
                <th>Spend $60,000</th>
                <th>Spend $80,000</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>55</td>
                <td>$988,800</td>
                <td>$968,200</td>
                <td>$947,600</td>
            </tr>
            <tr>
                <td>64</td>
                <td>$871,605</td>
                <td>$635,449</td>
                <td>$399,293</td>
            </tr>
            <tr>
                <td>65</td>
                <td>$856,553</td>
                <td>$592,712</td>
                <td>$328,872</td>
            </tr>
            <tr>
                <td>70</td>
                <td>$774,243</td>
                <td>$359,011</td>
                <td>$0 (cannot fund age 70)</td>
            </tr>
            <tr>
                <td>75</td>
                <td>$678,823</td>
                <td>$88,088</td>
                <td>$0</td>
            </tr>
            <tr>
                <td>77</td>
                <td>Still funded</td>
                <td>Cannot fund the withdrawal</td>
                <td>$0</td>
            </tr>
            <tr>
                <td>95</td>
                <td>$118,971</td>
                <td>$0</td>
                <td>$0</td>
            </tr>
        </tbody>
    </table>

    <p>Four percent of a million is $40,000. The model earns 3 percent real and pays out 4 percent, so the balance falls, slowly, and is not gone at 95. Six percent is $60,000. The bridge decade to 65 takes the portfolio from $1,000,000 to about $635,000 at the end of age 64, and the plan fails at 77. Eight percent is $80,000. The same bridge ends age 64 near $399,000, and age 70 is the year the withdrawal does not clear. A 3 percent real return is a choice, not a market. At a 0 percent real return the $60,000 case fails earlier, at age 71 in the same withdrawal-first arithmetic. At 2 percent real, a single person who also receives the average CPP and full OAS from 65, defined below, still fails the $60,000 case at age 80. If you need the plan to survive a worse return than 3 percent, you need a lower spending number or another income line. You do not need a more optimistic spreadsheet.</p>

    <h2>What today's CPP and OAS do to the line</h2>

    <p>January 2026 maximum CPP at 65 is $1,507.65 a month, $18,091.80 a year. The April 2026 average at 65 is $877.01 a month, $10,524.12 a year. July to September 2026 full OAS from 65 to 74 is $751.97 a month, $9,023.64 a year. One person with the average CPP and a full OAS has about $19,548 a year in today's dollars. A couple with two average CPPs and two full OAS pensions has about $39,096. A couple with two maximum CPPs would have more. Most households should not put the maximum in the plan. The enhanced CPP will raise some future pensions relative to older averages. It will not turn a short contribution history into the maximum. The 0.6 percent monthly reduction means a CPP started at 60 is 36 percent below the age-65 amount. This model does not start CPP at 60. It waits until 65, which means the portfolio carries every dollar of spending for ten years.</p>

    <table>
        <caption>Same 3 percent model, pensions in today's dollars subtracted from spending from age 65</caption>
        <thead>
            <tr>
                <th>Spending</th>
                <th>No pension, fails</th>
                <th>One average CPP plus full OAS (~$19,548)</th>
                <th>Two average CPPs plus two full OAS (~$39,096)</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>$40,000</td>
                <td>Still about $119,000 at 95</td>
                <td>Balance grows after 65. About $1.13 million at 95</td>
                <td>Spending is almost covered by the two pensions. About $2.13 million at 95</td>
            </tr>
            <tr>
                <td>$60,000</td>
                <td>Fails at 77</td>
                <td>Fails at 85</td>
                <td>Does not fail by 95. About $512,000 left</td>
            </tr>
            <tr>
                <td>$80,000</td>
                <td>Fails at 70</td>
                <td>Fails at 72</td>
                <td>Fails at 76</td>
            </tr>
        </tbody>
    </table>

    <p>Read the $40,000 couple row as a warning, not a victory. If two full average public pensions nearly pay the bills, the portfolio is not the plan. The plan is whether those pensions exist. A couple with one average CPP, or with years abroad that shrink OAS, does not get the $39,096. OAS also has a recovery tax. For July 2026 to June 2027 the threshold is $93,454 of 2025 net world income, at 15 percent of the excess. A portfolio large enough to throw off taxable income, or an RRSP withdrawal on top of CPP, can claw the OAS back. The model does not apply that clawback. If your projected income is near the threshold, the OAS you type into the <a href="/blog/canadian-retirement-calculator/">retirement calculator</a> should already be the net amount.</p>

    <div class="example-box">
        <strong>The RRSP gross-up, which the table ignored</strong>
        <p>Every balance above assumes the withdrawal is not taxed, as if the million were a TFSA. Suppose instead the million is an RRSP and you need $60,000 to spend. At an assumed 30 percent average tax on the withdrawal, close to the rate this site's Ontario calculator shows on an extra $20,000 when other taxable income is around $60,000 to $90,000, you withdraw about $85,700 to keep $60,000. That is a higher spending rate than the $80,000 column. The no-pension RRSP case fails faster than age 70. The 30 percent is an assumption about the whole withdrawal, not a bracket quote, and a meltdown that spreads the income over more years can lower it. The <a href="/blog/rrsp-meltdown-strategy/">RRSP meltdown</a> is that spreading. The order between accounts is the <a href="/blog/retirement-withdrawal-strategy/">withdrawal strategy</a>. A mix, half TFSA and half RRSP, lands between the tax-free table and the grossed-up failure. It does not land on a slogan.</p>
    </div>

    <h2>What to decide before you give notice</h2>

    <ol>
        <li>Write the spending number from last year's actual withdrawals, not from a round target. Include tax, a house repair, and health insurance you will not get from an employer.</li>
        <li>Count the years until 65. That bridge is the portfolio's job unless a pension starts sooner.</li>
        <li>Type your own CPP estimate and a realistic OAS, including zero for years you will not yet be eligible. Do not type $1,507.65 because it was the maximum in January 2026.</li>
        <li>Split the million into taxable and tax-free on paper. Re-run the high-spending case with the gross-up. If it fails, the spending number was the variable, not the market.</li>
        <li>Decide CPP timing with the 0.6 percent and 0.7 percent rules, not with this table. Starting at 60 shrinks the pension forever and shortens the bridge. It can still be right if the portfolio would otherwise hit zero first.</li>
        <li>Stress the return. If 3 percent real is the only path that survives, you do not have a plan. You have a hope with a spreadsheet.</li>
    </ol>

    <h2>Frequently asked questions</h2>

    <h3>Is $1 million enough to retire at 55 in Canada?</h3>
    <p>At $40,000 a year, in a tax-free account, at a steady 3 percent real return, the illustration still has about $119,000 at age 95 before any CPP or OAS. At $80,000 a year the same illustration cannot pay the withdrawal at age 70. "Enough" is the spending number. The million is the input.</p>

    <h3>Can a couple retire on $1 million?</h3>
    <p>If both people have something close to an average CPP and a full OAS, about $39,000 a year in today's program amounts, a $60,000 spending case in this model does not run out by 95, and a $40,000 case barely needs the portfolio after 65. Those pensions are not guaranteed by the existence of a partner. Two people also means two sets of spending. Run the household number, not the single number with a ring on it.</p>

    <h3>Should I start CPP at 60 to protect the million?</h3>
    <p>CPP at 60 is 36 percent lower than at 65, permanently, under the 0.6 percent monthly rule. It reduces how hard the portfolio works from 60 to the end. It also cuts income in your eighties, which is when an underfunded plan hurts. The table in this article waits until 65 on purpose. Price the earlier start with your own estimate before you take it.</p>

    <h3>Does the model include a house?</h3>
    <p>No. A paid-off house lowers the spending the portfolio must cover, if you were going to include rent and then you do not. A house with a mortgage raises the spending. Selling the house at 75 is a liquidity event this arithmetic does not assume. Add it only in the year you would actually sell.</p>

    <h3>What return did you use, and what if markets fall in the first five years?</h3>
    <p>Three percent after inflation, every year, including the first year. A real sequence that is weak at the start, while you are withdrawing $60,000 or $80,000, breaks these plans sooner than the table. The table is the calm path. It is the one you should be able to survive a worse path than, not the one you should spend up to.</p>

    <h3>Where do OAS clawbacks fit?</h3>
    <p>They fit on the person's net income, not on the couple's combined mood. The July 2026 to June 2027 recovery starts at $93,454 of 2025 net world income. An RRSP withdrawal counts. A TFSA withdrawal does not. If the only way to fund $80,000 is a large RRSP withdrawal, run the recovery tax before you call the OAS column income.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="https://www.canada.ca/en/services/benefits/publicpensions/cpp/amount.html">ESDC: CPP amounts, maximum $1,507.65 in January 2026 and average $877.01 in April 2026</a></li>
        <li><a href="https://www.canada.ca/en/services/benefits/publicpensions/cpp/when-start.html">ESDC: CPP reduced 0.6 percent for each month before 65</a></li>
        <li><a href="https://www.canada.ca/en/employment-social-development/programs/pensions/pension/statistics/2026-quarterly-july-september.html">ESDC: OAS maximums, July to September 2026</a></li>
        <li><a href="https://www.canada.ca/en/services/benefits/publicpensions/old-age-security/recovery-tax.html">ESDC: OAS recovery tax</a></li>
        <li><a href="https://www.canada.ca/en/services/benefits/publicpensions/old-age-security/when-start.html">ESDC: OAS starts at 65 and rises 0.6 percent a month if deferred</a></li>
    </ul>

    ${footer}

</div>`
  ),
];
