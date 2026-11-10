import { articleFooter, octPost } from './types';

const disclaimer =
  'This is general education about Canadian retirement math as of November 9, 2026. It is not tax, pension, or investment advice. CPP and OAS figures are ESDC amounts for 2026 (CPP maximum January 2026, CPP average July 2026, OAS October to December 2026), used as today’s ceilings or averages, not as a forecast of what a 55-year-old will be paid at 65. Portfolio paths use a stated 3 percent real return, withdrawals at the start of each year, and no fees or tax unless a separate paragraph says so. Change the return and the age the money lasts will move. Confirm My Service Canada Account before you treat a maximum as your pension.';

const footer = articleFooter('Retirement', disclaimer);

export const oct2026RetirementPosts = [
  {
    ...octPost(
    'Retirement',
    'retirement',
    'retire-at-55-one-million-canada',
    'Can You Retire at 55 With $1 Million in Canada? Three Spending Cases',
    'Three illustrations of retiring at 55 with $1 million, at $40,000, $60,000, and $80,000 of spending. The 3% real return is an assumption, not a forecast.',
    `<div class="container">

    <div class="hook">
        On its own, $1 million at 55 in Canada pays about <span class="highlight">$41,000 a year to age 95</span> in this page's model: a tax-free account, a steady 3 percent real return, and no CPP or OAS. Add one average CPP and a full OAS from 65 and the same million stretches to about $54,000 a year. The hard part is not the million. It is the ten years from 55 to 64, when neither public pension has started and the portfolio pays every dollar. $40,000 a year lasts past 95 with money left. At $80,000 a year the money runs out at 70.
    </div>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>The model starts with $1,000,000, withdraws spending at the beginning of each age, then grows the remainder at 3 percent real. There is no fee, no tax, and no bad sequence of returns in the base table. It is a TFSA-like illustration so the arithmetic stays visible.</li>
            <li>With no CPP and no OAS, $40,000 of spending ends age 95 with about $119,000 left. $60,000 cannot fund the withdrawal at age 77. $80,000 cannot fund it at age 70.</li>
            <li>The highest steady spending the model can fund from 55 to 95 is about $41,468 a year with no pensions, about $53,832 with one average CPP and a full OAS from 65, and about $66,195 for a couple with two of each. At a 2 percent real return those drop to about $35,267, $48,432, and $61,597.</li>
            <li>ESDC's maximum CPP retirement pension at 65, for a benefit starting in January 2026, is $1,507.65 a month. The average at 65, dated July 2026, is $858.34. OAS for October to December 2026 is $762.50 a month from 65 to 74 if you qualify for the full pension, and $838.75 from 75. A 55-year-old in 2026 does not receive those cheques. They are today's amounts, used as a ceiling and an average, not as a 2036 quote.</li>
            <li>CPP cannot start before 60, and it is 0.6 percent lower for each month before 65. OAS cannot start before 65. The years from 55 to 64 are a bridge the portfolio pays, unless you have a workplace pension this model does not include.</li>
            <li>An RRSP dollar is not a TFSA dollar. Spending $60,000 after tax from an RRSP means withdrawing more than $60,000. The portfolio dies sooner. The calculator that will take your own CPP and OAS figures is the <a href="/blog/canadian-retirement-calculator/">Canadian retirement calculator</a>.</li>
        </ul>
    </div>

    <p>The general "how much" question is <a href="/blog/how-much-money-retire-canada/">how much money you need to retire</a>. The mechanics of leaving work early are <a href="/blog/early-retirement-fire-canada/">early retirement in Canada</a>. When the public pensions should start is <a href="/blog/cpp-when-to-take-canada/">when to take CPP</a> and <a href="/blog/oas-gis-clawback-canada/">OAS and the recovery tax</a>. Your own CPP number is <a href="/blog/how-much-cpp-will-i-get/">how much CPP you will get</a>, and OAS residence rules are in <a href="/blog/oas-eligibility-deferral-canada/">OAS eligibility and deferral</a>. More guides are in the <a href="/category/retirement/">retirement hub</a>. This page answers a narrower search: one million, age 55, three spending levels.</p>

    <h2>How does this $1 million illustration work?</h2>

    <p>It is a simple, checkable model: $1,000,000 at 55, a fixed spending amount in today's dollars, the withdrawal taken first each year, and a 3 percent real return on what remains, through age 95. It is not a forecast.</p>

    <p>Age 55 begins with $1,000,000. Spending is constant in today's dollars. The return is 3 percent after inflation, every year, with no down year and no up year. The withdrawal happens first. What remains grows. Ages run from 55 through 95, which is 41 withdrawals. "Breaks at 77" means that at the start of age 77 the scheduled withdrawal is larger than the balance. A workplace pension, a house, rent, and a spouse's separate savings are not in the base case. Adding any of them is your edit, not a hidden input.</p>

    <p>Public pensions, when a later table includes them, start at 65 and are subtracted from spending before the portfolio is touched. They are not indexed further inside the model, because the portfolio is already in real dollars and the pension figures are today's dollars. That is a convenience. OAS is in fact adjusted quarterly with prices, and a CPP benefit you start in 2036 will not be the January 2026 maximum. Using today's maximum as if it arrives on your 65th birthday overstates what most people get and mis-dates what the maximum will be. The average is the more honest single number, and it is still not your number. My Service Canada Account is your number.</p>

    <h2>How long does $1 million last at 55 with no pension?</h2>

    <p>At $40,000 a year it lasts past 95 with about $119,000 left. At $60,000 it runs out at 77. At $80,000 it runs out at 70. The bridge decade to 65 is where the higher spending cases lose most of their cushion.</p>

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

    <h2>How much can $1 million pay each year from 55 to 95?</h2>

    <p>Turn the question around and solve for spending. In the same withdraw-first model, the highest constant amount that still funds age 95 is about $41,500 a year with no pension. Public pensions from 65 lift it, because they shrink what the portfolio pays after the bridge decade.</p>

    <table>
        <caption>Highest steady spending that still funds age 95, $1,000,000 at 55, withdrawals first, no tax, pensions in today's dollars from 65</caption>
        <thead>
            <tr>
                <th>Income besides the portfolio</th>
                <th>3 percent real return</th>
                <th>2 percent real return</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>No CPP, no OAS</td>
                <td>About $41,468 a year</td>
                <td>About $35,267 a year</td>
            </tr>
            <tr>
                <td>One average CPP plus full OAS (~$19,450)</td>
                <td>About $53,832 a year</td>
                <td>About $48,432 a year</td>
            </tr>
            <tr>
                <td>Two average CPPs plus two full OAS (~$38,900)</td>
                <td>About $66,195 a year</td>
                <td>About $61,597 a year</td>
            </tr>
        </tbody>
    </table>

    <p>Two things stand out. First, the pensions are worth roughly $12,000 a year of spending per person in this model, even though they pay nothing for the first ten years. Second, one point of return moves the answer by about $4,600 to $6,200 a year. That is why the spending number, not the million, is the decision.</p>

    <h2>What do CPP and OAS change for a 55-year-old?</h2>

    <p>Nothing until 60 at the earliest for CPP and 65 for OAS. After that, today's average CPP and a full OAS cover about $19,450 a year for one person, which keeps the $40,000 case growing and pushes the $60,000 failure from 77 to 85.</p>

    <p>January 2026 maximum CPP at 65 is $1,507.65 a month, $18,091.80 a year. The July 2026 average at 65 is $858.34 a month, $10,300.08 a year. October to December 2026 full OAS from 65 to 74 is $762.50 a month, $9,150 a year, after a 1.4 percent cost-of-living increase for the quarter. One person with the average CPP and a full OAS has about $19,450 a year in today's dollars. A couple with two average CPPs and two full OAS pensions has about $38,900. A couple with two maximum CPPs would have more. Most households should not put the maximum in the plan. The enhanced CPP will raise some future pensions relative to older averages. It will not turn a short contribution history into the maximum. The 0.6 percent monthly reduction means a CPP started at 60 is 36 percent below the age-65 amount. This model does not start CPP at 60. It waits until 65, which means the portfolio carries every dollar of spending for ten years. Two details make the model conservative or optimistic in opposite directions. OAS rises 10 percent at 75 ($838.75 a month for October to December 2026), which the model ignores. A full OAS also needs 40 years in Canada after age 18; with fewer years you get a partial pension, years divided by 40, which the model also ignores.</p>

    <table>
        <caption>Same 3 percent model, pensions in today's dollars subtracted from spending from age 65</caption>
        <thead>
            <tr>
                <th>Spending</th>
                <th>No pension, fails</th>
                <th>One average CPP plus full OAS (~$19,450)</th>
                <th>Two average CPPs plus two full OAS (~$38,900)</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>$40,000</td>
                <td>Still about $119,000 at 95</td>
                <td>Balance grows after 65. About $1.12 million at 95</td>
                <td>Spending is almost covered by the two pensions. About $2.12 million at 95</td>
            </tr>
            <tr>
                <td>$60,000</td>
                <td>Fails at 77</td>
                <td>Fails at 85</td>
                <td>Does not fail by 95. About $502,000 left</td>
            </tr>
            <tr>
                <td>$80,000</td>
                <td>Fails at 70</td>
                <td>Fails at 72</td>
                <td>Fails at 76</td>
            </tr>
        </tbody>
    </table>

    <p>Read the $40,000 couple row as a warning, not a victory. If two full average public pensions nearly pay the bills, the portfolio is not the plan. The plan is whether those pensions exist. A couple with one average CPP, or with years abroad that shrink OAS, does not get the $38,900. OAS also has a recovery tax. For July 2026 to June 2027 the threshold is $93,454 of 2025 net world income, at 15 percent of the excess. For 2026 income, which sets July 2027 to June 2028, ESDC lists $95,323. A portfolio large enough to throw off taxable income, or an RRSP withdrawal on top of CPP, can claw the OAS back. The model does not apply that clawback. If your projected income is near the threshold, the OAS you type into the <a href="/blog/canadian-retirement-calculator/">retirement calculator</a> should already be the net amount.</p>

    <div class="example-box">
        <strong>The RRSP gross-up, which the table ignored</strong>
        <p>Every balance above assumes the withdrawal is not taxed, as if the million were a TFSA. Suppose instead the million is an RRSP and you need $60,000 to spend. At an assumed 30 percent average tax on the withdrawal, close to the rate this site's Ontario calculator shows on an extra $20,000 when other taxable income is around $60,000 to $90,000, you withdraw about $85,700 to keep $60,000. That is a higher spending rate than the $80,000 column. The no-pension RRSP case fails faster than age 70. The 30 percent is an assumption about the whole withdrawal, not a bracket quote, and a meltdown that spreads the income over more years can lower it. The <a href="/blog/rrsp-meltdown-strategy/">RRSP meltdown</a> is that spreading. The order between accounts is the <a href="/blog/retirement-withdrawal-strategy/">withdrawal strategy</a>. A mix, half TFSA and half RRSP, lands between the tax-free table and the grossed-up failure. It does not land on a slogan.</p>
    </div>

    <h2>What should you decide before you give notice at 55?</h2>

    <p>Six decisions, in this order, settle whether a million works for you.</p>

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

    <h3>How much can I spend each year from $1 million at 55?</h3>
    <p>In this model, about $41,500 a year to age 95 with no pensions, about $53,800 with one average CPP and a full OAS from 65, and about $66,200 for a couple with two of each, at a steady 3 percent real return and no tax. At 2 percent real, take about $4,600 to $6,200 off each figure.</p>

    <h3>Can I get CPP or OAS at 55?</h3>
    <p>No. CPP can start at 60 at the earliest, 36 percent lower than at 65. OAS cannot start before 65. Between 55 and 60 the portfolio, a workplace pension, or work income has to pay all of your spending.</p>

    <h3>Can a couple retire on $1 million?</h3>
    <p>If both people have something close to an average CPP and a full OAS, about $38,900 a year in today's program amounts, a $60,000 spending case in this model does not run out by 95, and a $40,000 case barely needs the portfolio after 65. Those pensions are not guaranteed by the existence of a partner. Two people also means two sets of spending. Run the household number, not the single number with a ring on it.</p>

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
        <li><a href="https://www.canada.ca/en/services/benefits/publicpensions/cpp/amount.html">ESDC: CPP amounts, maximum $1,507.65 in January 2026 and average $858.34 in July 2026</a></li>
        <li><a href="https://www.canada.ca/en/services/benefits/publicpensions/cpp/when-start.html">ESDC: CPP reduced 0.6 percent for each month before 65</a></li>
        <li><a href="https://www.canada.ca/en/services/benefits/publicpensions/old-age-security/payments.html">ESDC: OAS payment amounts, $762.50 (65 to 74) and $838.75 (75 and over), October to December 2026</a></li>
        <li><a href="https://www.canada.ca/en/services/benefits/publicpensions/old-age-security/recovery-tax.html">ESDC: OAS recovery tax</a></li>
        <li><a href="https://www.canada.ca/en/services/benefits/publicpensions/old-age-security/when-start.html">ESDC: OAS starts at 65, rises 0.6 percent a month if deferred, partial pension under 40 years of residence</a></li>
    </ul>

    ${footer}

</div>`,
    '2026-11-09'
    ),
    youtubeId: 'fWfhNPTZ13c',
    youtubeTitle: 'How Long a Million Lasts From Age 55',
    youtubeUploadDate: '2026-11-10T06:10:12-05:00',
    youtubeDuration: 'PT5M22S',
  },
];
