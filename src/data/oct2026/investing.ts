import { articleFooter, octPost } from './types';

const disclaimer =
  'This is general education about investing in Canada as of October 4, 2026. It is not a recommendation to buy, sell, or hold any security, and not investment, tax, or legal advice. Fund figures are taken from BMO’s August 31, 2026 ETF facts for ZWB and ZWC and from BMO’s September 22, 2026 distribution news release. Past performance is not a forecast. Capital-gains figures use the one-half inclusion rate and this site’s 2026 tax calculator as an illustration. Confirm the current ETF facts and your adjusted cost base before you trade.';

const footer = articleFooter('Investing', disclaimer);

export const oct2026InvestingPosts = [
  octPost(
    'Investing',
    'investing',
    'covered-call-etfs-canada',
    'Covered-Call ETFs in Canada: Yield vs Total Return',
    'A covered-call ETF’s cash yield is not its total return. ZWB’s August 2026 facts pair a 6.79% distribution yield with a different 10-year record.',
    `<div class="container">

    <div class="hook">
        The distribution yield is the number on the postcard. Total return is the number that decides whether you made money. On BMO's own facts for the Covered Call Canadian Banks ETF, ZWB, as of August 31, 2026, the annualized distribution yield is <span class="highlight">6.79 percent</span>. The 10-year annualized performance on the same sheet is 12.50 percent. The one-year figure is 45.20 percent. None of those is a promise, and none of them is "about 8 percent."
    </div>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>BMO calculates that distribution yield from the most recent regular distribution, annualized, divided by net asset value. It excludes extra year-end distributions. BMO's own warning: if distributions exceed performance, your original investment shrinks. The yield is not the return.</li>
            <li>As of August 31, 2026, ZWB's fact sheet shows annualized performance, dividends reinvested, net of fees: 1 year 45.20 percent, 3 year 29.13 percent, 5 year 15.27 percent, 10 year 12.50 percent, since inception 11.27 percent. A single strong year for banks is not the strategy.</li>
            <li>The same date's fact sheet for ZWC, the Canadian High Dividend Covered Call ETF, shows an annualized distribution yield of 6.34 percent. This article does not borrow ZWB's performance table and paste it onto ZWC.</li>
            <li>BMO's September 22, 2026 news release set the September cash distribution at $0.170 per unit for ZWB and $0.120 per unit for ZWC, payable October 2 to holders of record September 29. A monthly cash amount is still not a total return.</li>
            <li>Option premium inside a fund can arrive as income, capital gains, or return of capital depending on the year and the fund. Account location follows that character. A TFSA shelters what would have been tax. It does not turn a capped upside into a free yield.</li>
        </ul>
    </div>

    <p>The account decision for any ETF, covered call or not, starts with <a href="/blog/how-to-invest-canada-guide/">how to invest in Canada</a> and the <a href="/blog/best-etfs-tfsa-canada/">TFSA ETF guide</a>. What a high cash distribution does to taxable income, compared with a gain you have not sold, is <a href="/blog/dividend-vs-growth-taxable-accounts-canada/">dividends versus growth</a>. The fee drag on a plain index fund, which is the comparison a covered-call MER has to beat, is <a href="/blog/mer-drag-index-funds-canada/">MER drag</a>.</p>

    <h2>What is the fund actually selling?</h2>

    <p>A covered call is an option the fund writes on shares it already owns. The buyer of the call pays a premium. The fund keeps the premium and gives away the upside above the strike, until expiry. If the shares fall, the premium cushions the fall by a finite amount and does not stop it. If the shares rise through the strike, the fund's gain is capped and the shares may be called away. Doing this every month, on a basket, is the product. The cash distribution is the visible part. The cap is the part the yield statistic does not print.</p>

    <p>BMO's ZWB fact sheet describes the fund as investing in Canadian banks and writing covered calls. ZWC describes dividend-paying Canadian equities and covered calls. Both sheets say the option premiums, along with dividends, are a source of the distribution, and both sheets say distributions are not guaranteed, can be cut, and can include return of capital. Return of capital is not a dividend. It reduces your adjusted cost base. When the adjusted cost base hits zero, further return of capital is a capital gain. That tracking is the <a href="/blog/adjusted-cost-base-canada-guide/">adjusted cost base guide</a>. Inside a TFSA or an RRSP there is no personal adjusted cost base to maintain for Schedule 3. The return of capital still reduces what is left in the fund. You just do not get a tax bill for the erosion. You get a smaller account.</p>

    <h2>Yield beside total return, from one fact sheet</h2>

    <table>
        <caption>BMO Covered Call Canadian Banks ETF (ZWB), fact sheet figures for the period ending August 31, 2026</caption>
        <thead>
            <tr>
                <th>Figure on the fact sheet</th>
                <th>What it measures</th>
                <th>Number</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Annualized distribution yield</td>
                <td>Recent regular distribution, annualized, divided by NAV. Not a total return</td>
                <td>6.79%</td>
            </tr>
            <tr>
                <td>1-year performance</td>
                <td>Net of fees, dividends reinvested</td>
                <td>45.20%</td>
            </tr>
            <tr>
                <td>3-year annualized</td>
                <td>Same basis</td>
                <td>29.13%</td>
            </tr>
            <tr>
                <td>5-year annualized</td>
                <td>Same basis</td>
                <td>15.27%</td>
            </tr>
            <tr>
                <td>10-year annualized</td>
                <td>Same basis</td>
                <td>12.50%</td>
            </tr>
            <tr>
                <td>Since inception, January 28, 2011</td>
                <td>Same basis</td>
                <td>11.27%</td>
            </tr>
        </tbody>
    </table>

    <p>Look at the one-year row before you learn the wrong lesson. A 45.20 percent year means the underlying banks had a year in which giving away the upside still left a huge total return. The distribution yield of 6.79 percent describes the cash, not that year. In a year the shares are called away repeatedly, the total return can lag a plain bank fund that did not sell the upside. This article does not print a head-to-head against a specific non-option bank ETF, because the fact sheet's performance block quoted here is ZWB's own history, not a paired benchmark this page has reproduced line by line. Read the current facts for both tickers on the same date before you decide the option overlay "won." Past performance on that sheet is not a guide to the next year. BMO prints that sentence. So does this page.</p>

    <p>ZWC's fact sheet on the same day shows an annualized distribution yield of 6.34 percent and net assets of about $2.47 billion. ZWB's net assets on its sheet are about $4.59 billion. Size is not quality. It is evidence that the cash-yield pitch has an audience. The September 22, 2026 distribution release is the cash: $0.170 for ZWB and $0.120 for ZWC that month. Multiply a single month by twelve and you have reinvented a yield that will be wrong the month the distribution changes. Use the fact sheet's yield definition, and then ignore it in favour of total return when you are judging the investment.</p>

    <div class="example-box">
        <strong>I ran the numbers on a $100,000 illustration, not a forecast</strong>
        <p>Assume, only to make the yield visible, that the 6.79 percent distribution yield stayed put for a year on a $100,000 holding. Cash distributed would be about $6,790. That cash can be spent, reinvested, or returned as capital wearing a yield costume. It is not $6,790 of economic profit. If the fund's total return in a future year were 3 percent, you would have received more cash than the fund earned, and the unit value would make up the difference by being lower. BMO's fact sheet says this in the yield footnote: distributions greater than performance shrink the original investment. The 10-year annualized figure of 12.50 percent, if it repeated, which it will not on a schedule, would mean the fund earned more than it paid out as the headline yield. You cannot spend the 12.50 percent unless you sell units or the distribution actually pays it. Total return and spendable cash are different decisions. Write down which one you wanted before you buy the higher distributor.</p>
    </div>

    <h2>Where the units should sit</h2>

    <p>Tax character is published after the year, on the T3, not in the yield statistic. A covered-call fund can distribute eligible Canadian dividends, other income, capital gains, and return of capital in a mix that changes. Foreign equity covered-call funds can also distribute foreign income that was already withheld inside the fund. A TFSA hides all of that from your return and wastes the dividend tax credit, because the credit needs taxable income to attach to. An RRSP does the same, and the withdrawal is fully taxed later. A non-registered account is the only place the dividend tax credit and a capital loss exist. That is also the place a high distribution inflates this year's taxable income. The map is <a href="/blog/diy-etf-portfolio-asset-location-canada/">asset location</a>. US withholding, if the fund holds US stocks through a structure that leaks tax, is <a href="/blog/us-withholding-tax-by-account-canada/">US withholding by account</a>. A Canadian bank fund is not that leak. A US equity covered-call fund often is.</p>

    <div class="tip-box">
        <strong>A TFSA is a fine home for a small, deliberate sleeve. It is a bad reason to buy the sleeve:</strong>
        <p>People put covered-call ETFs in a TFSA because the cash feels like income and the shelter feels like a trick. The shelter is real. The opportunity cost is the equity compounding you could have sheltered without selling the upside every month. If you need the cash to spend, a TFSA full of a high distributor is a spending plan. If you reinvest the distribution inside the TFSA, you bought a capped strategy in the account that most rewards uncapped compounding. <a href="/blog/xeqt-vs-veqt-canada/">XEQT versus VEQT</a> is the plain alternative people are usually comparing against, whether they admit it or not. Different holdings, different countries, different job. Do not compare a bank covered-call yield with an all-equity total return and declare a winner from one number.</p>
    </div>

    <h2>A decision list that is not a buy rating</h2>

    <ol>
        <li>Read the latest ETF facts. Write down the distribution yield, the 5-year and 10-year total returns, and the MER from that document. This page's MER line is intentionally absent: the August 31, 2026 extract used here states that the published MER is the audited figure as of the fiscal year, and it did not include a numeral this review could quote without guessing. Use the number on the PDF you open.</li>
        <li>Read the last year's tax characteristics, or the prospectus language on return of capital, before you put a large position in a taxable account.</li>
        <li>Decide whether you are spending the distribution or reinvesting it. The answer changes whether the yield is the product or a distraction.</li>
        <li>Size it as a sleeve, not as the portfolio. A banks-only covered-call fund is a sector bet with an option overlay. It is not a balanced fund because the cash arrives monthly.</li>
        <li>Revisit the total return annually. If you only look at the cash, you will not notice the cap until a bull market has already belonged to someone else.</li>
    </ol>

    <h2>Frequently asked questions</h2>

    <h3>Is a 6.79 percent yield an 8 percent yield?</h3>
    <p>No. The 6.79 percent figure is BMO's annualized distribution yield for ZWB as of August 31, 2026, on that fact sheet's formula. It will move when the distribution or the NAV moves. Rounding it up to a slogan is how the product gets mis-sold. ZWC on the same date was 6.34 percent. Quote the sheet you are buying, with the date.</p>

    <h3>Did ZWB make 45 percent?</h3>
    <p>BMO's fact sheet shows a 1-year performance of 45.20 percent for the period ending August 31, 2026, net of fees, dividends reinvested. That is a historical total return for one year in which Canadian banks did well. The 10-year annualized figure on the same sheet is 12.50 percent. Neither number is the distribution, and neither is a forecast.</p>

    <h3>Are covered-call distributions eligible dividends?</h3>
    <p>Some of the distribution can be eligible dividends, because the fund owns dividend-paying shares. Option premium and gains are not automatically eligible dividends. Return of capital is not a dividend at all. The T3 is the answer for the year you are filing. A blog cannot assign the character in advance.</p>

    <h3>Should they be in a TFSA?</h3>
    <p>They can be. The TFSA removes tax on whatever the distribution would have been. It also removes any benefit from the dividend tax credit, and it uses room you could have filled with a broad equity fund if your horizon is long and you do not need the cash. "In a TFSA" is not a reason the option overlay is a good trade.</p>

    <h3>Do I lose the distribution if I do not spend it?</h3>
    <p>No. Reinvested distributions are still part of total return. You can also be paid in cash and spend economic capital while telling yourself you only spent the yield. The fact sheet's warning about distributions above performance is that case.</p>

    <h3>Is this safer than owning the banks directly?</h3>
    <p>The premium is a limited cushion. The sector risk remains. A covered call does not diversify a bank fund into a balanced portfolio. It changes the shape of the return: a bit more cash in flat markets, less participation when the shares run, and the same uncomfortable drawdown when they do not, minus a finite premium.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="https://df.bmogam.com/assets/static/etf-profiles-pdfs/BMO-Covered-Call-Canadian-Banks-ETF-Factsheet-ZWB.pdf">BMO: ZWB ETF fact sheet, characteristics and performance as of August 31, 2026</a></li>
        <li><a href="https://df.bmogam.com/assets/static/etf-profiles-pdfs/BMO-Canadian-High-Dividend-Covered-Call-ETF-Factsheet-ZWC.pdf">BMO: ZWC ETF fact sheet, distribution yield as of August 31, 2026</a></li>
        <li><a href="https://www.newswire.ca/news-releases/bmo-announces-cash-and-reinvested-distributions-for-certain-bmo-etfs-and-etf-series-of-bmo-mutual-funds-for-september-2026-859933214.html">BMO Asset Management: September 2026 distribution announcement, September 22, 2026</a></li>
    </ul>

    ${footer}

</div>`
  ),
  octPost(
    'Investing',
    'investing',
    'should-canadians-sell-us-stocks',
    'Should Canadians Sell Their US Stocks? Home Bias, Tariffs, and the Tax Cost',
    'Selling US stocks in a taxable account taxes half the gain. Cutting exposure with new money, or inside a registered account, often costs less.',
    `<div class="container">

    <div class="hook">
        The Bank of Canada, on September 2, 2026, left the policy rate at 2.25 percent and said new US tariffs make growth more uncertain. That is a macro sentence. It is not a sell order for the US fund in your taxable account. The bill for hitting sell is a capital gain, included at <span class="highlight">one-half</span>, in the year you settle the trade.
    </div>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>On September 2, 2026 the Bank of Canada held the overnight rate at 2.25 percent. The press release said new US tariffs and Canadian counter-measures had been announced, that affected products were a limited share of exports in the Governor's remarks, and that the situation was fluid. Nothing on that page tells a household to change its equity mix.</li>
            <li>A capital gain in 2026 is one-half included. Selling a taxable US position with a large unrealized gain can cost more tax than a year of discomfort is worth.</li>
            <li>Three different moves get lumped into "sell": a taxable sale, directing new contributions at Canadian or non-US funds, and trading inside a TFSA or RRSP where the gain is not on your return. They are not the same decision.</li>
            <li>Home bias is a choice about currency, eligible dividends, and concentration in financials, energy, and materials. It is not a patriotism score, and it is not a tariff forecast.</li>
            <li>This page does not predict the S&amp;P 500, the Canadian dollar, or the next tariff list.</li>
        </ul>
    </div>

    <p>How a US-listed fund differs from a Canadian wrapper is <a href="/blog/vfv-vs-voo-canadians/">VFV versus VOO</a>. Withholding is <a href="/blog/us-withholding-tax-by-account-canada/">US withholding by account</a>. Where the sleeve sits is <a href="/blog/diy-etf-portfolio-asset-location-canada/">asset location</a>. The inclusion rate is <a href="/blog/capital-gains-tax-canada/">capital gains tax</a>. Read those before you let a headline pick the trade.</p>

    <h2>What the Bank of Canada actually said</h2>

    <p>The September 2, 2026 rate announcement held the target for the overnight rate at 2.25 percent, with the Bank Rate at 2.5 percent and the deposit rate at 2.20 percent. The release ties two risks together: the Middle East conflict keeping energy prices high, and new US tariffs plus Canadian counter-measures after trade talks broke down. CPI inflation had been around 3 percent, mainly from gasoline. Excluding gasoline, the release said inflation was 2.2 percent in the data they were looking at, with core measures close to 2 percent in July. The Governing Council left the rate unchanged and said it was prepared to adjust if the outlook required it.</p>

    <p>The opening statement the same day is more specific about the trade channel. New US tariffs and the uncertainty around them are a risk to the rebound. If they stay, targeted sectors get hit. The Bank does not expect a large direct effect on the overall economy from the measures then in view, and it said the affected products represented about 5 percent of exports to the United States. Support programs offset some of the harm. Businesses may still delay investment and hiring because the relationship itself is uncertain. That is an economy-wide statement. A Canadian who owns a global equity fund already owns companies that sell into that uncertainty, companies that do not, and a currency translation. Reducing "US stocks" as if they were a single tariff exposure is a category error. Some of the US market is the tariff. Some of it invoices the tariff. You cannot see which from the ticker alone.</p>

    <div class="warning-box">
        <strong>Dated context, not a signal:</strong>
        <p>Trade policy moved through 2025 and 2026 and can move again before you finish this article. Use the September 2 texts as a snapshot of what the central bank was willing to say on that day. If you need the current tariff list, read the government notice in force this week. Do not store a blog's paraphrase as the list.</p>
    </div>

    <h2>I ran the numbers on selling a taxable gain</h2>

    <p>Assumptions, stated so they cannot hide. The shares or units sit in a non-registered account. Adjusted cost base is $100,000. Fair market value is $180,000. Selling costs are ignored, so the capital gain is $80,000. One-half is taxable: $40,000. Other taxable income is $120,000, and the person lives in Ontario. This site's 2026 calculator, basic personal amount and Ontario surtax only, charges $17,519.84 more tax when taxable income goes from $120,000 to $160,000. That is the tax on the taxable half. On the $80,000 economic gain it is about 21.9 percent. No CPP, no Ontario health premium, no donation credit. A different province, a different income, or a loss carryforward changes it. The shape does not: you prepay tax to change a mix you could have changed more slowly.</p>

    <table>
        <caption>Illustration: sell $180,000 of taxable US units with a $100,000 cost, Ontario, $120,000 of other taxable income</caption>
        <thead>
            <tr>
                <th>Step</th>
                <th>Amount</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Proceeds minus cost</td>
                <td>$80,000 capital gain</td>
            </tr>
            <tr>
                <td>Taxable half, 2026 inclusion rate</td>
                <td>$40,000</td>
            </tr>
            <tr>
                <td>Extra tax in the 2026 Ontario model</td>
                <td>$17,519.84</td>
            </tr>
            <tr>
                <td>Tax as a share of the economic gain</td>
                <td>About 21.9%</td>
            </tr>
            <tr>
                <td>Cash left from the $180,000 if the tax is paid from the proceeds</td>
                <td>About $162,480, before any selling cost</td>
            </tr>
        </tbody>
    </table>

    <p>Inside a TFSA or an RRSP the same sale does not create that $17,520. The TFSA sale is not a capital gain. The RRSP sale is not a capital gain either. The RRSP withdrawal, later, is ordinary income, which is a different and often larger tax, and it is not triggered by the trade. Swapping a US equity ETF for a Canadian or international ETF inside the RRSP changes the risk and does not change this year's T1. That is the clean place to express a view, if you have one. The taxable account is the expensive place to express it.</p>

    <h2>Three ways to cut US exposure</h2>

    <ol>
        <li><strong>Leave the taxable lot alone and send new money elsewhere.</strong> Contributions, RRSP room, TFSA room, and a non-registered deposit can buy the underweight sleeve. The old gain stays unrealized. This is the first tool in <a href="/blog/rebalancing-without-tax-events-canada/">rebalancing without junk tax events</a>. It is slow. Slow is the point.</li>
        <li><strong>Trade inside the TFSA or RRSP.</strong> Sell the US fund there, buy what you actually want, and do not touch the taxable lot that has the gain. You give up the future US exposure in the registered account. You do not write a cheque to CRA this April for the privilege.</li>
        <li><strong>Sell in the taxable account only for a reason that survives the tax.</strong> A need for the cash, a risk you can no longer hold, or a gain small enough that the table above is noise. Harvesting a loss is the opposite trade and has its own 30-day rule. Realizing an $80,000 gain to feel safer about a headline is a 21.9 percent fee, in the illustration, for a feeling.</li>
    </ol>

    <div class="example-box">
        <strong>The same $80,000 gain, three locations</strong>
        <p>Taxable account: about $17,520 of Ontario tax in the model above, and a new cost base of $180,000 on whatever you repurchase. TFSA: tax today is zero, room is unchanged because you did not withdraw, and the new fund compounds tax-free. RRSP: tax today is zero, and every future dollar that comes out is taxed as income, US fund or Canadian fund. People who "sell America" inside an RRSP have not created a tax event. People who withdraw from the RRSP in order to move the cash to a Canadian taxable account have created an income inclusion of the whole withdrawal. That is the worst version of the trade. Do not withdraw to rebalance.</p>
    </div>

    <h2>Home bias is a portfolio choice</h2>

    <p>Canada is a small share of the world's listed companies. A global fund already owns that share. Adding a Canadian equity fund on top raises your weight in domestic banks, insurers, energy, and materials, and it raises the chance of eligible dividends in a taxable account. Those are coherent reasons. "The Bank mentioned tariffs" is not a target weight. <a href="/blog/xeqt-vs-veqt-canada/">XEQT versus VEQT</a> is a conversation about how much Canada and how much of the rest an all-in-one fund already holds. You can disagree with both funds' Canada weight. Write your number down in a calm week. A tariff headline is not the week.</p>

    <p>Currency is the other honest reason to care. US stocks translated into Canadian dollars move with the US dollar. In a year the Canadian dollar rises, foreign equity returns in CAD can disappoint even when the foreign market did not. Hedging exists and has a cost. The decision belongs in the hedging note you already have, not in a panic sale. If you do not have a note, the absence of a policy is the problem to fix. The sale is optional.</p>

    <p>Withholding is the quiet leak people fix by selling the wrong account. A US-listed fund held inside an RRSP can use the Canada-US treaty to drop withholding on dividends, if the account is the direct holder and the broker has the paperwork. The same fund in a TFSA does not get that relief. A Canadian-listed fund that holds a US fund often pays the withholding inside the product, where your RRSP cannot undo it. Selling the taxable VFV units to "stop the withholding" realizes the gain in the table above and may not stop the withholding if you repurchase a similar wrapper. Read <a href="/blog/us-withholding-tax-by-account-canada/">the withholding guide</a> and move the location, or change the product inside the RRSP, before you volunteer a capital gain. The tariff story and the withholding story are different repairs. One is a macro mood. The other is a form and an account type.</p>

    <p>There is also a concentration version of home bias that the tariff headline disguises. Canada's market is heavy in financials, energy, and materials. The US market is heavy in a handful of large companies that are not those sectors. Cutting the US sleeve to zero, inside a portfolio that is otherwise a Canadian equity fund plus a house and a job paid in Canadian dollars, is three bets on the same economy. A global fund that still holds the US at something like its market weight is the boring alternative. <a href="/blog/xeqt-vs-veqt-canada/">XEQT and VEQT</a> already made a Canada-weight choice for you. If you own one of them and a separate US fund, you may be doubling the US without having written that down. Sell the overlap inside the registered account if the sum is not the weight you wanted. Leave the lot with the $80,000 gain alone until a contribution can do the work.</p>

    <h2>Frequently asked questions</h2>

    <h3>Did the Bank of Canada tell Canadians to sell US stocks?</h3>
    <p>No. On September 2, 2026 it held the policy rate at 2.25 percent and described tariffs as a risk to growth and a possible cost pressure. Portfolio weights are not in the mandate of that press release.</p>

    <h3>Is the capital gains inclusion rate still one-half?</h3>
    <p>Yes, for 2026. The proposal to raise it was cancelled and not enacted. Half of an $80,000 gain is $40,000 of taxable income. The tax on that income depends on the rest of the return and the province.</p>

    <h3>Should I sell inside my TFSA instead?</h3>
    <p>If you want less US exposure, the TFSA and the RRSP are the places where the swap does not create a capital gain. You still need a replacement you intend to hold. Switching funds every time the news changes is a cost, even when the commission is zero, because you abandon the mix you wrote down.</p>

    <h3>What if my US stocks are down?</h3>
    <p>A loss in a taxable account is the opposite of the problem in the table. It can offset capital gains, subject to the superficial-loss rule if you rebuy too soon. A loss in a TFSA is not your loss. Do not withdraw a TFSA loser to "claim" it. You cannot.</p>

    <h3>Does a Canadian-listed US equity ETF avoid the tax if I sell it?</h3>
    <p>No. VFV and a US-listed S&amp;P 500 fund are different products for withholding and currency conversion. In a taxable account, units of either are capital property. The gain on a sale is still a capital gain. The wrapper does not shelter the disposition.</p>

    <h3>How much US is too much?</h3>
    <p>There is no CRA percentage. A global market-weight fund is one coherent answer. A heavier US weight is a bet. A heavier Canada weight is also a bet. Pick the bet you can leave alone for a decade, and use new contributions to walk toward it. The tax table is the price of walking faster.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="https://www.bankofcanada.ca/2026/09/fad-press-release-2026-09-02/">Bank of Canada: policy rate announcement, September 2, 2026</a></li>
        <li><a href="https://www.bankofcanada.ca/2026/09/opening-statement-2026-09-02/">Bank of Canada: opening statement, September 2, 2026</a></li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/personal-income/line-12700-capital-gains/you-calculate-your-capital-gain-loss.html">CRA: how to calculate a capital gain or loss</a></li>
    </ul>

    ${footer}

</div>`
  ),
];
