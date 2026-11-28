# Independent fact check, 2026-11-28

Checked the three posts on `batch-2026-11-28` against their figures logs and the live pages named in those logs. This check did not edit the posts, the figures logs, or any other site file.

Posts and logs:

- `src/data/nov2026/p-vgro-vs-xgro-canada.ts` and `content/figures/vgro-vs-xgro-canada.json`
- `src/data/nov2026/p-best-all-in-one-etfs-canada.ts` and `content/figures/best-all-in-one-etfs-canada.json`
- `src/data/nov2026/p-balance-transfer-vs-consolidation-loan-canada.ts` and `content/figures/balance-transfer-vs-consolidation-loan-canada.json`

Read on 28 November 2026. Vanguard and BlackRock fund pages were the server-rendered HTML. BlackRock holding weights are the JSON the holdings table on each page requests (`…/1464253357814.ajax?tab=all&fileType=json`), which the page dates "as of Nov 25, 2026". The VGRO ETF Facts PDF and the Vanguard 18 November 2025 fee-cut press release were read with `pdftotext`. The OBSI bulletin was read from the live HTML. Direct `curl` and headless Chrome to `www.canada.ca` opened the TLS session and then returned no body; the four FCAC pages were then read through a page fetch that returned the live article text. Bright Data was not used (the token was rejected).

## Summary

| Check | Count | Result |
| --- | --- | --- |
| Sourced rows | 244 (89 + 124 + 31) | 201 match the cited page for the same fund and the same meaning. 43 do not. |
| Derived rows | 110 (43 + 23 + 44) | All 110 match the displayed string at the displayed precision. One summed stock weight differs by 0.01 point from Vanguard's own published stock line. |
| Post prose | 3 posts, read in full | Problems are listed below. There is no "no problems found" result. |

The dollar amounts, MERs, management fees, holding weights, fund sizes, inception dates, and the FCAC and OBSI figures that the posts display were found on a live page for that fund or that agency. The 43 sourced mismatches are rows whose `sourceUrl` does not state the claim the row is attached to (wrong fund, a one-fund page used for every fund, or an example number tagged to an FCAC page). The underlying fee and MER figures in those sentences were then checked on each fund's own page, and those pages do state them. The posts are not inventing the fees. The figures log is citing the wrong URL for those rows.

## Problems

### Numbers that differ

1. **VGRO "All stocks" 81.09% versus the page's Stock line of 81.08%.** In `p-vgro-vs-xgro-canada.ts` the mix table shows VGRO all stocks as 81.09%. That equals the sum of the four equity ETF weights on the VGRO page as at 31 October 2026: 36.62 + 24.76 + 14.36 + 5.35 = 81.09. The same page's asset-allocation table says "Stock 81.08%" on that date. The displayed sum is the sum of the rounded holding weights. It is 0.01 percentage point above the published stock weight. Derived row `dfc368279cbf`.

2. **"Matches the arithmetic above to within rounding" overstates the U.S. country weight.** The VGRO page's market-allocation table, as at 31 October 2026, says United States of America 45.30% and Canada 30.59%. Dividing the holding weights by the 81.09 stock sum gives 36.62 / 81.09 = 45.16%, shown in the post as 45.2%, and 24.76 / 81.09 = 30.53%, shown as 30.5%. The Canada pair is 0.06 points apart. The U.S. pair is 0.14 points apart, and 0.10 points apart from the 45.2% the post prints. The sentence in the mix section says the country table "matches the arithmetic above to within rounding and the different rounding of the underlying weights."

### Cited page does not state the claim (43 sourced rows)

These rows fail the test "this `sourceUrl` states this value, for this fund, with this meaning." Where a correct page was found, the quote from that page is in the matching section below.

**VGRO vs XGRO**

- `8abde499619f`, value `0.22%`, context "cut from 0.22% on November 18, 2025", URL the VGRO product page. That page shows Management Fee 0.17% and Management Expense Ratio (MER) 0.22%. It does not say the management fee was cut from 0.22%. The HTML of the VEQT, VGRO, VBAL, and VCNS product pages contains neither "November 18" nor "from 0.22%". The cut is in the ETF Facts and the press release, quoted below.

**Best all-in-one ETFs.** A VEQT, XEQT, or XBAL URL is used for a figure about a different fund, or for "all eight" / "every Vanguard fund" / "Vanguard (all four)" / the BlackRock fee sentence. The cited page states its own fund's fee or MER. It does not state the other fund's.

Wrong fund:

- `9f867e96af8e` and `bdb2adae6530`: VEQT page, values 0.17% and 0.22%, context the VGRO / XGRO row of the comparison table.
- `5dd63f52ee9f` and `47d525f03a5f`: XEQT page, value 0.19%, context the XGRO MER (the table row, and the "0.22% against 0.19%" sentence in the VGRO section).
- `4c9a0067d548`, `3e851c2fcb56`, and `f8d6608329f0`: VEQT page, values 0.17% or 0.22%, context VBAL's fee or MER.
- `aac433298641`, `6cc65f559e0a`, and `52142cd62de6`: VEQT page, values 0.17% or 0.22%, context VCNS's fee or MER.
- `67f3870fe129` and `e531322761a8`: XBAL page, value 0.18%, context XCNS's MER.
- `b899e705afec` and `62b7c3646b4e`: VEQT page, values 0.17% and 0.22%, context the VGRO / XGRO 80/20 fee and the MER gap. VEQT's page describes a 100% equity fund.

One page used for several funds:

- `0c68be191000`, `70b4e771ddea`, `4d41a05f3827`: VEQT page, value 0.17%, contexts "a tie at 0.17%", "All eight funds charge a 0.17% management fee", and "All eight compared here charge a 0.17% management fee".
- `ad69ff293b42`, `899ecfce90a8`, `8dc66aeebcc7`, `c8c83f28f4d9`: VEQT page, value 0.22%, contexts "every Vanguard fund", "Vanguard (all four)", and the Vanguard-funds MER sentence.
- `7d626186305a`, `f4e7d91839f3`, `b4b4c91114b9`, `f3b4e21b3bac`: VEQT page, value 0.17%, contexts that apply 0.17% to the Vanguard funds or to all of the funds in the cost table.
- `29e814361da8`, `75372e1176c2`, `90c29c361d25`: XEQT page, value 0.19%, contexts that give 0.19% to both XEQT and XGRO.
- `8ac9719d7a95`, `302dcd97c4bf`, `8daad0d734c2`: XBAL page, value 0.18%, contexts that give 0.18% to both XBAL and XCNS.
- `e9670763a691`: VEQT page, value 0.17%, context "BlackRock says XEQT, XGRO, XBAL and XCNS's 0.17% management fee includes all the underlying ETF fees." The VEQT page does not say that.
- `3a94ee00ea53`, `188d4f1d1eba`, `91ea3603c57f`, `064303c65129`: VEQT product page, values 0.22% and 0.17%, contexts that say Vanguard cut the fee from 0.22% to 0.17%. The VEQT page shows those two rates as the current MER and the current management fee. It does not say one replaced the other.
- `f58a394485e8`: XBAL page, value 0.18%, context "BlackRock cut it on its four from 0.18% to 0.17%". The XBAL page says that about XBAL.
- `af26363fe492` and `2ebfa1124d32`: VGRO ETF Facts, value `November 18, 2025`, contexts that say Vanguard cut the fee on VEQT, VGRO, VBAL, and VCNS that day. The PDF says the cut was for "this ETF".
- `8c1dbfacc480`: XGRO page, value `December 18, 2025`, same four-fund sentence. The XGRO page says that date for XGRO.

**Balance transfer vs consolidation loan**

- `0472158264f1`, value `18`, context "18 months $457.78". The debt-consolidation page says promotional rates usually last 6 to 18 months. It does not state an 18-month payoff row or $457.78. That payment is the post's own division of $8,240 by 18.
- `741d1a5a1f16`, value `18`, context "Need 18 months or more: a transfer only if the clock is long enough…". That decision rule is the author's. The page does not state it.

### Figures-log value field is truncated

The posts print the full net-asset figures, and the pages state those full figures. The log's `value` field drops the leading digit and the comma:

- `1a7b24b31d4d` and `69eb2f9a98f6` store `272,287,718`. The XGRO page and both posts say CAD 5,272,287,718.
- `08b77514f2f6` stores `571,121,567`. The XBAL page and the all-in-one post say CAD 3,571,121,567.

XEQT (`24,169,949,662`) and XCNS (`451,152,137`) are stored in full and match.

### Prose

3. **VGRO vs XGRO, key takeaway.** "Pick one. Holding both doubles up on the same markets and adds nothing." The same post's holdings show the Canadian stock weight about 5 points of the portfolio apart (24.76 versus 19.92) and the developed-markets weight about 5 points apart (14.36 versus 19.70). "Adds nothing" is stronger than those holdings.

4. **VGRO vs XGRO, "How different are the stock and bond mixes?"** The first sentence is "The funds are not identical twins." The sizes of the differences start in the next sentence.

5. **VGRO vs XGRO, FAQ "Can I hold VGRO or XGRO in a TFSA or RRSP?"** The first sentence does not say yes or no. It says both are Canadian-listed and then quotes the ETF Facts on how tax depends on the account. The next sentence is "Confirm eligibility with your broker."

6. **All-in-one, "Vanguard publishes its mixes as approximate targets."** VGRO, VBAL, and VCNS use "approximately" (80/20, 60/40, 40/60). VEQT's page says "a long-term strategic asset allocation of 100% equity securities" with no "approximately".

7. **All-in-one size table, "Started" June 21, 2007 for XGRO and XBAL.** Both pages do show inception Jun 21, 2007. Both pages also say: "Effective December 11, 2018, the fundamental investment objective, management fee and fee structure of the ETF changed." The all-in-one post never says that, so the 2007 date is doing the work of a start date for the current 80/20 and 60/40 designs. The VGRO vs XGRO post does disclose the 2018 change for XGRO.

8. **All-in-one, "How do you choose between them?"** The first sentence says "Choose in three steps". The numbered list under it has five items.

9. **All-in-one, method.** "We used only each issuer's own fund page for every number." The four Vanguard product pages do not contain the 18 November 2025 fee cut. That cut, for VEQT, VGRO, VBAL, and VCNS, is in the press release. The "as of March 31, 2026" expense date is in the VGRO ETF Facts, and that date is not on the VGRO fund page. "We recorded" and "we compared" are the editorial voice. They are not a claimed personal investment test. No invented quotation was found. The paraphrases checked against Vanguard, BlackRock, the ETF Facts, OBSI, and FCAC follow the wording quoted in the matching section.

10. **All-in-one, VGRO section.** "This is the most popular pairing for investors who want growth with a little ballast." No listed source gives a count or a ranking that would support "most popular".

11. **All-in-one, FAQ "Do all-in-one ETFs rebalance on their own?"** The first sentence is "Yes." Each Vanguard fund page says the mix "may be reconstituted and rebalanced from time to time at the discretion of the sub-advisor." The listed "Built for investors" page says the portfolios "are automatically rebalanced to help maintain its intended mix over time." Those two Vanguard pages do not say the same thing. BlackRock's line, "Continuously monitored and automatically rebalanced, as needed," does support the "Yes" for the iShares funds.

12. **Balance transfer, FCAC loan examples.** The personal-loans page table is headed "Total cost of the loan" and shows $2,220, $2,700, and $3,180 for a $2,000 loan at 19.99% over 12, 36, and 60 months, and $2,304 at 8.99% and $3,312 at 34.99% over 36 months. The post's numbers match that column. The takeaway and the risks bullet say the loan "costs" those amounts and do not say the $2,000 principal is inside them. On the 12-month row the interest is $220, because $185 × 12 = $2,220.

13. **Balance transfer, "A late payment or going over your limit are the usual triggers, per the FCAC and OBSI."** OBSI says the terms of most offers "allow the credit card company to revoke the promotional interest rate if you miss payments or exceed your credit card limit." FCAC's choosing-a-card page says "In some cases, the introductory rate ends as soon as you go over your credit limit or make a late payment." "Usual triggers, per the FCAC" is stronger than "in some cases."

The other question headings and FAQ items open with a direct answer in the first sentence. Examples: "On the published MER, XGRO costs less", "Neither is better in every case", "No" to holding both, "On $100,000, the published MER costs $220 a year", "It is better only if you can clear the balance and the fee before the promotional rate ends", and "The FCAC says lenders may not charge more than 35% interest annually".

## Task 1. Sourced claims that match

Grouped by the page that states them. Each line is the live wording. Repeated rows that use the same value for the same meaning on that page are one group.

### Vanguard VGRO product page

Quote: "the sub-advisor will strive to maintain a long-term strategic asset allocation of equity (approximately 80%) and fixed income (approximately 20%) securities. The portfolio asset mix may be reconstituted and rebalanced from time to time at the discretion of the sub-advisor."

Also on that page, as read 28 November 2026: Inception date Jan 25 2018. Total assets $10.88 B. Management Fee 0.17%. MER 0.22%. Distribution frequency Quarterly. Standard Deviation 8.27% as at Oct 31 2026. Underlying funds as at Oct 31 2026: Morningstar US Total Market Index ETF 36.62%, FTSE Canada All Cap Index ETF 24.76%, FTSE Developed All Cap ex-North America Index ETF 14.36%, Canadian Aggregate Bond Index ETF 11.54%, FTSE Emerging Markets All Cap Index ETF 5.35%, Global ex-U.S. Aggregate Bond Index ETF CAD-hedged 3.77%, US Aggregate Bond Index ETF Cad Hedged 3.59%. Asset allocation: Bond 18.90%, Short-term reserves 0.02%, Stock 81.08%. Market allocation: United States of America 45.30%, Canada 30.59%.

The 80%, 20%, 0.17% current fee, 0.22% MER, $10.88 billion, January 25, 2018, October 31, 2026, the seven holding weights, 0.02%, 18.90%, 45.30%, and 30.59% in the VGRO vs XGRO log match this page. Rows that use 0.22% to mean the pre-cut management fee do not, and are listed above.

### Vanguard VEQT, VBAL, and VCNS product pages

VEQT: "strategic asset allocation of 100% equity securities." Inception Jan 29 2019. Total assets $17.64 B. Management Fee 0.17%. MER 0.22%. Distribution frequency Annually. Standard Deviation 9.55% as at Oct 31 2026. Market allocation: United States 45.40%, Canada 30.79%.

VBAL: "equity (approximately 60%) and fixed income (approximately 40%)." Inception Jan 25 2018. Total assets $5.98 B. Management Fee 0.17%. MER 0.22%. Distribution frequency Quarterly. Asset allocation as at Oct 31 2026: Bond 39.45%, Stock 60.53%. Number of bonds 17,362. YTM (Yield to Maturity) effective 4.2%. Canada 30.64%.

VCNS: "equity (approximately 40%) and fixed income (approximately 60%)." Inception Jan 25 2018. Total assets $977.26 M. Management Fee 0.17%. MER 0.22%. Distribution frequency Quarterly. Asset allocation: Bond 59.47%, Stock 40.51%. Canada 30.82%.

Rows in the all-in-one log whose URL is that fund, and whose value is that fund's own target, fee, MER, size, date, country weight, standard deviation, bond count, or yield, match. The cross-fund rows listed above do not.

### BlackRock XEQT, XGRO, XBAL, and XCNS pages

Each page says "Management fee of 0.17% includes all underlying ETF management fees" and "Effective December 18, 2025, the management fee of the ETF was reduced from 0.18% to 0.17%." Distribution Frequency Quarterly on all four. Net assets as of Nov 27, 2026:

- XEQT CAD 24,169,949,662, inception Aug 7, 2019, MER 0.19%, "strategic asset allocation of 100% equity."
- XGRO CAD 5,272,287,718, inception Jun 21, 2007, MER 0.19%, "80% equity and 20% fixed income." "Continuously monitored and automatically rebalanced, as needed." "Effective December 11, 2018, the fundamental investment objective, management fee and fee structure of the ETF changed. … The performance data shown above does not reflect these changes."
- XBAL CAD 3,571,121,567, inception Jun 21, 2007, MER 0.18%, "60% equity and 40% fixed income." The same 11 December 2018 sentence is on this page.
- XCNS CAD 451,152,137, inception Aug 7, 2019, MER 0.18%, "40% equity and 60% fixed income."

Holdings the pages load as of Nov 25, 2026, displayed weight:

- XGRO: ITOT 36.23, XIC 19.92, XEF 19.70, XBB 13.12, XEC 3.85, XSH 3.06, GOVT 1.99, USIG 1.97, CAD CASH 0.14, USD CASH 0.10. Key facts say Number of Holdings 8. The names do not say the U.S. bond ETFs are hedged, and the visible page text has no "hedg" wording. The post's statement that the page does not say whether those two are hedged matches what was on the page.
- XEQT: XTOT 31.22, XIC 25.58, XEF 24.37, ITOT 13.72, XEC 4.85, plus cash.
- XBAL: XBB 26.78, ITOT 26.41, XIC 14.82, XEF 14.67, XSH 5.82, GOVT 4.23, USIG 4.18, XEC 2.97, plus cash.
- XCNS: XBB 38.66, then ITOT 17.91. XBB is the largest holding. The post's 38.66% matches the displayed weight.

XGRO rows in the VGRO vs XGRO log for 0.19%, 0.17%, 0.18% as the previous fee, June 21, 2007, December 11, 2018, December 18, 2025, November 25, 2026, November 27, 2026, and the eight holding weights match this page. The full net-asset figure in the post matches. The stored value `272,287,718` does not.

### VGRO ETF Facts, dated July 16, 2026

"Effective November 18, 2025, Vanguard reduced the management fee for this ETF from 0.22% to 0.17%."

"As of March 31, 2026, the ETF's expenses were 0.22% of its value. This equals $2.20 for every $1,000 invested." The MER line is 0.22%. Date ETF started: 25 January 2018. Distributions: Quarterly.

"In general, you'll have to pay income tax on any money you make on an ETF. How much you pay depends on the tax laws where you live and whether or not you hold the ETF in a registered plan, such as a Registered Retirement Savings Plan or a Tax-Free Savings Account."

"if you hold your ETF in a non-registered account, distributions from the ETF are included in your taxable income, whether you get them in cash or have them reinvested."

The FAQ sentences in both ETF posts that attribute the 0.22% expense figure, the 31 March 2026 date, the 18 November 2025 cut for this ETF, and the registered-account tax wording to the ETF Facts match this PDF. The Facts holdings are as of 31 May 2026 (for example U.S. equity 36.72%) and are not the 31 October 2026 weights the posts use. Those October weights match the fund page, not this PDF. The Facts document also shows total value on May 31, 2026 of $10,144 million, which the posts do not use. They use the fund page's $10.88 billion.

### Vanguard fee-cut press release, Toronto, November 18, 2025

"The changes in expense ratios are effective as of November 18, 2025." The table lists Vanguard All-Equity ETF Portfolio VEQT, Vanguard Growth ETF Portfolio VGRO, Vanguard Balanced ETF Portfolio VBAL, and Vanguard Conservative ETF Portfolio VCNS, each from a current annual management fee of 0.22% to a new annual management fee of 0.17%.

The all-in-one sentences that say Vanguard cut those four funds from 0.22% to 0.17% effective 18 November 2025 match this release. The figures log does not use this PDF as a `sourceUrl`. The rows that carry the date point at the VGRO ETF Facts, which cover VGRO only.

### FCAC personal loans

"Most personal loans range from $100 to $50,000 with a term between 6 and 60 months."

"By law, lenders may not charge more than 35% interest annually. This includes all fees, costs and interest that you'll pay to get the loan."

Table 1, "$2,000" at "19.99%": 12 months total cost $2,220, 36 months $2,700, 60 months $3,180. Table 2, $2,000 for 36 months: 8.99% total cost $2,304, 34.99% total cost $3,312.

"sent to other lenders directly (if you're consolidating other debts)."

"Some lenders may charge a fee if you pay off your loan early." "They may also allow you to pay off your loan before the end of the term without a penalty."

The sourced loan amounts, terms, rates, the 35% cap, and the $100 to $50,000 range match this page. The wording problem about "total cost" versus interest is in the problems list.

### FCAC debt consolidation

"This promotional rate only applies for a specific period, usually 6 to 18 months."

"You may lose your promotional rate if you miss a payment."

"With a credit card balance transfer, you usually pay a fee to transfer a balance. This fee is usually a percentage of the amount that you transfer. You'll also need to make minimum monthly payments."

"Consolidating high-interest debts into a lower-interest product may save you money. However, it may extend your repayment period, costing more in interest over time. If you keep the spending habits that caused your debt, you'll accumulate more debt."

"A poor credit history may lead to higher interest rates." "You may only qualify for a debt consolidation product with a higher interest rate than your current products. If that's the case, a debt consolidation will likely increase your debt."

"applying for loans with different lenders in a short time may lower your credit score." Paying on time and reducing the number of high-balance accounts are the two improvements the page names. Credit counselling agencies and Licensed Insolvency Trustees are named.

Rows whose value is 18, $100, $50,000, 60, or 35% inside those FCAC sentences match. The two rows that pin "18" to the example payoff table and to "Need 18 months or more" do not.

### FCAC choosing a credit card, and paying off a credit card

These two URLs are in the post's source list. They are not `sourceUrl` values on any sourced row. The live pages do state the sentences the post attributes to them:

"Generally, the low interest rate will apply for a limited time, usually 6 to 12 months."

"Federally regulated credit card issuers must give you the following key details about introductory rates: the date at which the low interest rate ends; the types of transactions the introductory rate covers; … the standard interest rate you'll pay after the low interest rate period ends."

"If you don't pay at least the minimum payment or you make a late payment, you risk: … losing the benefit of any promotional rate offer you have."

The figures log classifies the "12" in "6 to 12 months" as `example` (not `sourced`). The sentence matches this page.

### OBSI bulletin, 14 February 2025

"This fee often ranges from 2% to 5% of the amount of the transferred balance and is billed to your new credit card account in addition to interest charges."

"Credit card companies charge interest from the time a balance is transferred until the balance is repaid, with no grace period."

"any new purchases will be subject to higher standard interest rates and any payments you make on your credit card are usually applied to the balance transfer amount first."

"These offers generally require consumers to apply for a credit card … Applying for credit usually involves a credit check."

"lines of credit and personal loans typically charge less interest than a credit card. These more traditional loan products also will have more predictable interest rates, and the balance will decline over time as you make payments."

"allow the credit card company to revoke the promotional interest rate if you miss payments or exceed your credit card limit."

The sourced 2% and 5% rows match. The post's sentences on grace period, payment order, a new card and a credit check, and lines of credit versus cards match this bulletin.

### Vanguard "Built for investors"

"Vanguard Asset Allocation ETFs are designed to provide investors with a complete, diversified portfolio through a single ETF." The all-in-one FAQ's paraphrase of that sentence matches. The rebalancing wording on this page is the conflict noted in problem 11.

## Task 2. Derived figures

Recomputed from the holding weights and fees above, and from the month-by-month model specified for the balance-transfer post: monthly interest at APR/12, payment at month end, the transfer fee added to the balance up front, promotional months at 0% and later months at 22.99%, and the standard amortised payment for the loans. "Lost after four payments" was modelled as four months at 0% and then 22.99%, with the $400 payment still made every month.

### Holding shares and dollar costs

Stock sums of the displayed weights: VGRO equity ETFs 81.09, XGRO ITOT+XIC+XEF+XEC 79.70. Shares of those sums, rounded to one decimal as the posts print them:

| Share | Calculation | Displayed | Result |
| --- | --- | --- | --- |
| VGRO Canada | 24.76 / 81.09 = 30.53% | 30.5% | match |
| VGRO U.S. | 36.62 / 81.09 = 45.16% | 45.2% | match |
| VGRO developed ex-North America | 14.36 / 81.09 = 17.71% | 17.7% | match |
| VGRO emerging | 5.35 / 81.09 = 6.60% | 6.6% | match |
| XGRO Canada | 19.92 / 79.70 = 24.99% | 25.0% | match |
| XGRO U.S. | 36.23 / 79.70 = 45.46% | 45.5% | match |
| XGRO developed | 19.70 / 79.70 = 24.72% | 24.7% | match |
| XGRO emerging | 3.85 / 79.70 = 4.83% | 4.8% | match |
| XGRO CAD bonds | 13.12 + 3.06 | 16.18% | match |
| XGRO foreign bonds | 1.99 + 1.97 | 3.96% | match |
| XGRO all bonds | 16.18 + 3.96 | 20.14% | match |
| VGRO foreign bonds | 3.77 + 3.59 | 7.36% | match |
| XGRO cash | 0.14 + 0.10 | 0.24% | match |

Raw cash weights are 0.14298 and 0.10315, which sum to 0.246. The post's 0.24% is the sum of the two weights the page displays. Dollar slices of $100,000 at the displayed weights are $24,760, $19,920, $19,700, and $14,360, which match the post.

iShares Canada-as-a-share-of-stocks, from the displayed equity weights: XEQT 25.58 / 99.74 = 25.65%, shown as about 25.6%. XGRO 25.0%, as above. XBAL 14.82 / 58.87 = 25.17%, shown as about 25.2%. XCNS 9.59 / 39.00 = 24.59%, shown as about 24.6%. The range "about 24.6% to 25.6%" matches. Vanguard's published Canada weights are 30.79, 30.59, 30.64, and 30.82, and "about 30.6% to 30.8%" is those figures rounded to one decimal. The gap between the families runs from about 4.9 points (30.59 versus 25.65) to about 6.2 points (30.82 versus 24.59). "Roughly 5 to 6 percentage points" matches that range. XBAL's XBB weight displays as 26.78, and "about 26.8%" matches.

MER dollars: 0.22% of $25,000 / $100,000 / $250,000 is $55.00 / $220.00 / $550.00. At 0.19%: $47.50 / $190.00 / $475.00. At 0.18% of $100,000: $180. At 0.17%: $42.50 / $170.00 / $425.00. Gaps: $7.50, $30.00, $75.00, and $40.00 for the 0.04-point VBAL-versus-XBAL gap. All match the displayed strings, including the "$30" and "$220" / "$190" / "$180" / "$170" lines that are printed without cents.

### Balance-transfer model

Inputs from the post: balance $8,000, payment $400 unless noted, stay-on-card APR 20.99%, rate after the promotion 22.99%, fees 3% ($240) and 5% ($400), promotional lengths 10 and 12 months, loans 12.99% and 19.99% over 24 months.

| Case | Months | Interest plus fee, unrounded | Displayed |
| --- | --- | --- | --- |
| Stay at 20.99%, $400 | 25 | $1,931.64 | 25 months, $1,932 |
| 0% for 12 months, 3% fee, then 22.99%, $400 | 22 | $595.79 | 22 months, $596 |
| 0% for 10 months, 3% fee, then 22.99%, $400 | 22 | $784.82 | 22 months, $785 |
| 0% for 10 months, 5% fee, then 22.99%, $400 | 23 | $989.30 | 23 months, $989 |
| 3% fee, promotion ends after 4 months, $400 | 25 | $1,668.51 | 25 months, $1,669 |
| 0% for 10 months, 3% fee, $300 | 32 | $1,441.34 | 32 months, about $1,441 |
| Stay at 20.99%, $300 | 37 | $2,868.55 | about $2,869 |

Each displayed dollar is the unrounded result rounded to the nearest dollar. Differences of the displayed dollars: $989 − $785 = $204, $1,669 − $785 = $884, and $1,932 − $1,771 = $161. Those match "about $204", "about $884", and "about $161".

Payoff inside the promotion, $8,240 / months: 6 months $1,373.333… displayed $1,373.33; 10 months $824.00; 12 months $686.666… displayed $686.67; 18 months $457.777… displayed $457.78. All match.

Loan payment = principal × r × (1+r)^n / ((1+r)^n − 1), r = APR/12, n = 24, then half-up to the cent:

- 12.99% payment $380.297…, displayed $380.30. Interest $1,127.13, displayed $1,127.
- 19.99% payment $407.127…, displayed $407.13. Interest $1,771.06, displayed $1,771.

No derived row differs from the displayed string at the precision the post prints. The 0.01-point stock-weight gap in problem 1 is the difference against Vanguard's published stock line, and the post labels 81.09% as its own sum.

## Task 3. What was checked in the prose and did not turn up a further problem

- No invented quotation and no first-person claim of having bought, tested, or held either fund or either debt product.
- The issuer sentences that were checked (targets, rebalancing, the fee-inclusion line, the ETF Facts tax paragraph, the built-for-investors "single ETF" sentence, the OBSI fee and payment-order sentences, and the FCAC 6-to-18-month, 6-to-12-month, 35%, and missed-payment sentences) match the pages quoted above.
- "About 5 percentage points of the whole portfolio" is 24.76 − 19.92 = 4.84 and 19.70 − 14.36 = 5.34. That phrase is consistent with those gaps. It is not its own figures-log row.
- The eight distribution frequencies in the all-in-one table match the eight fund pages (VEQT annually, the other seven quarterly). Those words are not their own sourced values in the log. They are on the fund pages the posts list.

## Bottom count

- Sourced rows checked: 244. Matching the cited page for the same fund and the same meaning: 201. Not matching that test: 43, all listed under "Cited page does not state the claim."
- Derived rows recomputed: 110. Matching the displayed string at the displayed precision: 110. Additional difference: VGRO all-stocks 81.09% versus the page's Stock 81.08%.
- Post problems that are not only a wrong `sourceUrl`: the rounding sentence on the country weights, "adds nothing," two question openings that do not answer, "approximate targets" applied to VEQT, the 2007 start dates without the 2018 change, "three steps" over a five-item list, "only each issuer's own fund page for every number," "most popular pairing," the rebalancing "Yes," the FCAC total-cost figures presented without saying the principal is included, and "usual triggers, per the FCAC."
- Three figures-log values are truncated net-asset fragments. The posts show the full figures, and the pages state the full figures.
