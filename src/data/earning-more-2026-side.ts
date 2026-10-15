import type { BlogPostRecord } from '../lib/post-video';

const meta = {
  category: 'Earning More',
  categorySlug: 'earning-more',
  author: 'Andrew',
  date: '2026-10-15',
  updated: '2026-10-15',
  subcategory: 'side-hustles',
} as const;

function post(slug: string, title: string, excerpt: string, content: string): BlogPostRecord {
  return { ...meta, title, slug, excerpt, image: `/images/blog/${slug}.png`, content };
}

const footer = `<div class="article-footer">
        <p><strong>Disclaimer:</strong> This is general education about side income in Canada as of October 2026. It is not tax, legal, or business advice, and it is not a filing position. Survey figures are quoted from the publisher named in the sources. Platform fee splits that were not on the survey page itself are not repeated here. Confirm CRA's current pages before you decide a sale is tax-free or that a platform will not report you.</p>
        <div class="footer-note">Published: October 15, 2026 | Category: Earning More | Author: Andrew</div>
    </div>`;

export const earningMore2026SidePosts: BlogPostRecord[] = [
  post(
    'best-side-hustles-canada',
    'Best Side Hustles in Canada (2026, With Real Earnings)',
    'Omnisend 2026 survey: 31 percent of Canadians have a side hustle, 85 percent for the money, 53 percent earn $500 a month or less, and 91 percent work under 20 hours.',
    `<div class="container">

    <div class="hook">
        A side hustle in Canada is common, and it is usually small. Omnisend's 2026 report says <span class="highlight">31 percent have one, 85 percent of them for the money, 53 percent earn $500 a month or less, and 91 percent work under 20 hours a week.</span> Pick the hours first. The fantasy income can wait.
    </div>

    <p>A second survey, Ownr and Ipsos in September 2026, found 23 percent of Canadians earn side income. Both numbers can be true. They are different questions and different samples. How the extra dollar hits benefits is <a href="/blog/side-income-benefits-tax-clawbacks-canada/">clawbacks</a>. How to report it is <a href="/blog/side-hustle-taxes-canada/">side-hustle taxes</a>. The three paths, including just asking for a raise instead, are <a href="/blog/how-to-earn-more-money-canada/">how to earn more</a>.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>Omnisend's figures come from a Cint survey of 1,029 people in Canada in March 2026, published on its side-hustles report.</li>
            <li>Most of that work fits beside a job: 91 percent under 20 hours a week. Plan for that, not for a second full-time job you will not keep.</li>
            <li>Facebook Marketplace leads the report's online-selling chart at 53 percent of Canadian online sellers. This page does not repeat Amazon, eBay, or Etsy shares that were not in the page text.</li>
            <li>On BNN Bloomberg's October 8, 2026 coverage of Ownr/Ipsos, nearly 1 in 5 side hustlers say they're likely to go full-time. Intent is not the $500 month.</li>
        </ul>
    </div>

    <h2>What "best" can mean when half earn $500 or less</h2>

    <p>Best, on these numbers, means the highest chance of keeping the money after the hours and the clawbacks, not the highest screenshot in a forum. A hustle that fits in 5 to 20 hours, uses skills you already sell at work or tools you already own, and does not require inventory you cannot return, matches how Canadians in the Omnisend sample actually behave. A hustle that needs a storefront, a vehicle, and 30 hours will lose to the job you already have. Price that job's next raise before you price the hustle: <a href="/blog/how-to-ask-for-a-raise-canada/">how to ask for a raise</a>.</p>

    <h2>Three shapes that match the hours</h2>

    <table>
        <thead>
            <tr><th>Shape</th><th>Why it fits the data</th><th>Read next</th></tr>
        </thead>
        <tbody>
            <tr><td>Sell things you already own, occasionally</td><td>No inventory bet. The tax question is whether it is still personal. Marketplace is where the Omnisend chart says Canadian online sellers already are, at 53 percent.</td><td><a href="/blog/facebook-marketplace-tax-canada/">Is Marketplace taxable?</a></td></tr>
            <tr><td>Resell on purpose</td><td>This is a business once you buy to sell. The reporting rules, not a fee rumour, decide whether the platform tells CRA.</td><td><a href="/blog/reselling-flipping-canada/">Reselling and flipping</a> and <a href="/blog/platform-reporting-rules-canada/">platform reporting</a></td></tr>
            <tr><td>Sell a skill or an audience</td><td>Tutoring, local services, or content. Sponsorships and free products are income. Driving has its own tax article.</td><td><a href="/blog/content-creator-income-canada/">Creator income</a> and <a href="/blog/rideshare-delivery-driver-taxes-canada/">rideshare and delivery taxes</a></td></tr>
        </tbody>
    </table>

    <p>Omnisend also reported that 48 percent sell online, with a caveat: the same report's FAQ gives a different Canada figure, 55 percent. This page does not pick a winner between those two lines. The 53 percent Marketplace share is the chart figure the report states in the body, and it is the one used here. Vintage at 27 percent of sellers is on the same report if you are choosing what to sell. It is not a promise of profit.</p>

    <h2>Before you scale</h2>

    <p>If the month is reliably over your costs and you are about to resign, the runway article is <a href="/blog/side-hustle-to-full-time-canada/">side hustle to full-time</a>. If the income will move a benefit, run the clawback page first. A $500 month that costs $400 of Canada Child Benefit is not a $500 month. The Omnisend sample's most common reason is money. Money after the clawback is the only money that counts.</p>

    <h2>Frequently asked questions</h2>

    <h3>Why do two surveys disagree, 31 percent and 23 percent?</h3>
    <p>Omnisend asked, through Cint, who has a side hustle. Ownr and Ipsos asked who earns side income, in a different month, with a different sample. Quote the question with the number. Do not average them into a third statistic.</p>

    <h3>What is the best side hustle if I have ten hours?</h3>
    <p>The one you can finish inside those hours without a pile of unsold goods. Selling items you already own, or a skill you can book by the hour, fits the 91 percent who stay under 20 hours. A new product line does not, until the first version has sold.</p>

    <h3>Will I owe tax under $500 a month?</h3>
    <p>Business income is reported even when it is small. The $30,000 GST/HST line is a different test, and it is in the side-hustle tax article. "Under $500" is not a filing exemption.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="https://www.omnisend.com/side-hustles-report-2026">Omnisend: side hustles report 2026</a></li>
        <li><a href="https://www.rbcx.com/news/press-releases/side-hustles-are-getting-serious-nearly-one-in-four-canadians-has-one-but-many-arent-taking-the-entrepreneurial-leap-ownr-data-reveals/">RBCx / Ownr Ipsos release</a></li>
        <li><a href="https://www.bnnbloomberg.ca/business/economics/2026/10/08/necessity-and-opportunity-turning-a-side-hustle-into-a-small-business/">BNN Bloomberg, October 8, 2026</a></li>
    </ul>

    <h2>Related reading</h2>
    <ul>
        <li><a href="/blog/side-income-benefits-tax-clawbacks-canada/">Is the side hustle worth it after clawbacks?</a></li>
        <li><a href="/blog/side-hustle-taxes-canada/">Side-hustle taxes</a></li>
        <li><a href="/blog/facebook-marketplace-tax-canada/">Facebook Marketplace and tax</a></li>
        <li><a href="/category/earning-more/side-hustles/">All side-hustle articles</a></li>
    </ul>

    ${footer}

</div>`
  ),
  post(
    'facebook-marketplace-tax-canada',
    'Is Selling Stuff on Facebook Marketplace Taxable?',
    'CRA draws a line between occasional sales of personal-use property and selling for profit. Marketplace does not make a garage clean-out a business, and it does not make a resale business a hobby.',
    `<div class="container">

    <div class="hook">
        Selling the couch you bought for the apartment is not, by itself, a business. <span class="highlight">Buying couches to sell on Marketplace is.</span> CRA's line is whether you are disposing of personal-use property or carrying on a business. The app does not decide.
    </div>

    <p>The peer-to-peer page on Canada.ca is the platform-economy note for people who sell to other people. The capital-gains guide describes personal-use property as items you own mainly for your own or your family's use, such as furniture and household goods, and it says many of those sales do not produce a taxable gain because the items fell in value. A business is defined, on CRA's definitions page, as any business, adventure, or concern in the nature of trade. Regular selling for profit is the pattern that crosses the line. The filing once you are across it is <a href="/blog/side-hustle-taxes-canada/">side-hustle taxes</a>. Whether the platform files a slip is <a href="/blog/platform-reporting-rules-canada/">the reporting rules</a>.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>Occasional sales of your own household goods are generally personal-use property. A loss on ordinary household goods is not something you claim. A gain, if you actually have one, is reported. Most used furniture does not have one.</li>
            <li>Buying items to resell, or selling often enough that it is a trade, is business income. Report it. The peer-to-peer page points that income to a T2125 and line 26000.</li>
            <li>Being under the platform's excluded-seller line does not make the income non-taxable. It only affects whether the platform must report you.</li>
            <li>Omnisend's 2026 report says Facebook Marketplace leads among Canadian online sellers, at 53 percent. Popular is not the same as invisible to CRA.</li>
        </ul>
    </div>

    <h2>A clean-out versus a shop</h2>

    <p>Use two questions. Did you buy or make the item to sell it? And is the selling regular, organized, and aimed at profit? One winter of clearing a basement, at a loss on things you used, is the first pattern. Weekly sourcing, a spreadsheet, and prices set to clear a margin is the second. CRA's peer-to-peer news note says residents report income from all sources, including peer-to-peer transactions. That sentence is about income. A personal item sold for less than you paid is usually not income. Do not "report" a garage sale as a business loss to manufacture a deduction. The capital-gains guide says a loss on personal-use property is generally not claimable.</p>

    <h2>What to keep if you are unsure</h2>

    <p>Keep the listing, the payment, and what the item cost you if you still know. If the year starts to look like a shop, move it onto a T2125 and read the side-hustle tax article for GST/HST. If you are only clearing personal goods, you do not need a business number for the couch. You also do not need to describe the couch as a sole proprietorship on the advice of a video. The definitions page and the capital-gains guide are the two pages to sit with when a year is mixed: some personal, some bought to flip. Split them. Do not average them into one vague total.</p>

    <p>Reselling as the actual plan is <a href="/blog/reselling-flipping-canada/">the flipping article</a>. Delivery driving is a different tax file: <a href="/blog/rideshare-delivery-driver-taxes-canada/">rideshare and delivery</a>.</p>

    <h2>Frequently asked questions</h2>

    <h3>I sold $2,000 of old furniture. Do I owe tax?</h3>
    <p>If it was yours, you used it, and you sold it for less than it cost, there is usually no income and no claimable loss. If you bought it to resell, the profit is business income even if the total feels small. The dollars are not the test. The purpose is.</p>

    <h3>Does Marketplace send a slip to CRA?</h3>
    <p>Platforms have reporting rules, with an excluded-seller test for goods: fewer than 30 sales and $2,800 or less in the reporting period. That test is about the platform's report. It is not a rule that your profit is tax-free. Read the reporting article before you rely on the threshold.</p>

    <h3>What if I sell often but only my own things?</h3>
    <p>Frequency is a fact CRA looks at, along with whether you are in the nature of trade. A one-time move is an easier story than a standing shop of "my old stuff" that you keep replenishing. If you are replenishing, you are in business. Say so on the return.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="https://www.canada.ca/en/revenue-agency/programs/about-canada-revenue-agency-cra/compliance/platform-economy/peer-to-peer.html">CRA: peer-to-peer sales in the platform economy</a></li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/forms-publications/publications/t4037/capital-gains.html">CRA: capital gains, personal-use property</a></li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/businesses/definitions-letter-a-business.html">CRA: definition of a business</a></li>
        <li><a href="https://www.omnisend.com/side-hustles-report-2026">Omnisend side hustles report 2026</a></li>
    </ul>

    <h2>Related reading</h2>
    <ul>
        <li><a href="/blog/platform-reporting-rules-canada/">Platform reporting rules</a></li>
        <li><a href="/blog/side-hustle-taxes-canada/">Side-hustle taxes</a></li>
        <li><a href="/blog/reselling-flipping-canada/">Reselling and flipping</a></li>
        <li><a href="/blog/best-side-hustles-canada/">Best side hustles</a></li>
    </ul>

    ${footer}

</div>`
  ),
  post(
    'platform-reporting-rules-canada',
    'The Platform Reporting Rules: Will Etsy or eBay Report You to CRA?',
    'CRA excludes a goods seller when the platform facilitated fewer than 30 sales and $2,800 or less. That exclusion is about the platform report, not about whether you owe tax.',
    `<div class="container">

    <div class="hook">
        A platform does not have to report every seller of goods. CRA's excluded-seller rule, in the Income Tax Act's platform rules, covers a seller with <span class="highlight">fewer than 30 relevant sales of goods and $2,800 or less</span> in the reporting period. Both conditions. Miss either one and the exclusion does not apply. The exclusion still does not make the profit tax-free.
    </div>

    <p>The pages to read are CRA's "who is affected" note and the longer guidance on the reporting rules. What you owe if you are in business is <a href="/blog/side-hustle-taxes-canada/">side-hustle taxes</a>. Occasional personal sales are <a href="/blog/facebook-marketplace-tax-canada/">the Marketplace article</a>. Driving and delivery are not "sales of goods" and have their own page: <a href="/blog/rideshare-delivery-driver-taxes-canada/">rideshare and delivery taxes</a>.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>The goods exclusion is two tests: fewer than 30 relevant activities for the sale of goods, and total consideration paid or credited not over $2,800 in the reportable period. CRA's guidance states them together.</li>
            <li>Services, rides, deliveries, and property rentals are not saved by the goods test. Personal services and rentals are relevant activities of their own.</li>
            <li>If you are excluded, the platform still keeps the records that show why. Exclusion is not anonymity.</li>
            <li>You report business income whether or not a slip arrives. A missing slip is not a nil return.</li>
        </ul>
    </div>

    <h2>What the platform has to do</h2>

    <p>Reporting platform operators that enable sellers to earn from certain activities have to collect information and file it with CRA. CRA's overview lists the sale of goods, rental of real property, rideshare and delivery, and personal services. Software that only moves money, with no further role, is not itself the platform. The practical effect for a seller is simple: the company you sell through may already be sending CRA a file with your identity and your totals. Plan the return as if the file exists. Then check whether you were actually excluded.</p>

    <h2>The $2,800 and 30-sale line, read carefully</h2>

    <p>CRA's guidance says a seller is excluded if the operator solely facilitated fewer than 30 relevant activities for the sale of goods, and the total consideration paid or credited did not exceed $2,800 in the reportable period. "Fewer than 30" and "$2,800 or less" are the words to keep. Twenty-nine sales at $3,000 fails. Forty sales at $2,000 fails. Twenty sales at $2,000 can fall inside the exclusion. Consideration is what was paid or credited, not your profit after the cost of goods. A year of break-even sales can still be over the line.</p>

    <p>The same guidance lists other excluded sellers that do not apply to a person clearing a closet: governments, publicly traded entities, and some large property-rental operators. Do not borrow those categories. The goods test is the one that matters for Etsy, eBay, and similar marketplaces when what you sell is goods.</p>

    <h2>What to do with the information</h2>

    <p>If you are under both limits and the sales were personal-use property, you may have nothing to put on a T2125. If you are under both limits and the sales were a business, you still file the business income. If you are over either limit, expect the platform's report and make your T2125 match the year's deposits, not a rounded guess. Fees the platform kept are expenses if the activity is a business. They are not a reason to report only the payout and hope the slip shows the same number. Read the slip, if one arrives, against your own records.</p>

    <h2>Frequently asked questions</h2>

    <h3>Does the $2,800 line mean I can earn $2,800 tax-free?</h3>
    <p>No. It is a reporting threshold for the platform, and it is measured on consideration, not profit. Business profit under that line is still income. Personal household goods sold at a loss are a different analysis, in the Marketplace article.</p>

    <h3>I sell on three platforms. Does each one get its own 30 sales?</h3>
    <p>The exclusion is written per platform operator: what that operator facilitated for you. Three platforms do not merge into one 30. They also do not give you three excuses on the tax return. Your income is the total of the businesses you ran, slips or no slips.</p>

    <h3>I only drive for a delivery app. Am I excluded?</h3>
    <p>The goods test is for sales of goods. Rideshare and delivery are listed as their own relevant activities. Use the driver tax article and CRA's platform pages for services, not the $2,800 goods line.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="https://www.canada.ca/en/revenue-agency/programs/about-canada-revenue-agency-cra/compliance/reporting-rules-digital-platforms/who-is-affected.html">CRA: who is affected by the digital-platform reporting rules</a></li>
        <li><a href="https://www.canada.ca/en/revenue-agency/programs/about-canada-revenue-agency-cra/compliance/reporting-rules-digital-platforms/guidance-on-reporting-rules.html">CRA: guidance on the reporting rules</a></li>
        <li><a href="https://www.canada.ca/en/revenue-agency/programs/about-canada-revenue-agency-cra/compliance/reporting-rules-digital-platforms.html">CRA: reporting rules for digital platforms</a></li>
    </ul>

    <h2>Related reading</h2>
    <ul>
        <li><a href="/blog/facebook-marketplace-tax-canada/">Marketplace and personal sales</a></li>
        <li><a href="/blog/side-hustle-taxes-canada/">Side-hustle taxes</a></li>
        <li><a href="/blog/reselling-flipping-canada/">Reselling and flipping</a></li>
        <li><a href="/blog/rideshare-delivery-driver-taxes-canada/">Rideshare and delivery taxes</a></li>
    </ul>

    ${footer}

</div>`
  ),
  post(
    'reselling-flipping-canada',
    'Reselling and Flipping in Canada: Marketplace, Amazon, eBay, and Etsy',
    'Facebook Marketplace leads Omnisend\'s chart at 53 percent of Canadian online sellers. Pick a platform for the buyer, and treat reselling as a business once you buy to sell.',
    `<div class="container">

    <div class="hook">
        The platform is a booth, not a business model. Omnisend's 2026 report says <span class="highlight">Facebook Marketplace leads at 53 percent of Canadian online sellers.</span> Amazon, eBay, and Etsy have Canadian sellers too. This page does not quote their shares, because those splits were not in the report's page text. Choose on purpose. Then track the profit.
    </div>

    <p>If you are selling your own used goods once, start with <a href="/blog/facebook-marketplace-tax-canada/">is Marketplace taxable?</a>. If a platform might file a slip, read <a href="/blog/platform-reporting-rules-canada/">the reporting rules</a> before you assume you are invisible. The T2125 and GST/HST line are <a href="/blog/side-hustle-taxes-canada/">side-hustle taxes</a>. The earnings context is <a href="/blog/best-side-hustles-canada/">best side hustles</a>: 53 percent of side hustlers in the Omnisend sample earn $500 a month or less.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>Marketplace is where the cited survey says Canadian online sellers already concentrate. Local pickup avoids a pile of shipping. It also means you are meeting strangers. Price that in time, not just in fees.</li>
            <li>A national or cross-border marketplace can reach a buyer Marketplace will not. It also adds fee schedules that change. Read the current fee page. Do not use a percentage remembered from a video.</li>
            <li>Buying to resell is business income. The cost of the item, the platform fee, and the shipping you paid are the records that turn a deposit into profit.</li>
            <li>News stories have repeated chart splits for Amazon, eBay, and Etsy. They are not repeated here, because the plan's check did not find them in Omnisend's page text.</li>
        </ul>
    </div>

    <h2>Match the platform to the object</h2>

    <p>A couch, a stroller, or a lot of hockey gear wants a local buyer. Marketplace is built for that, which is why a 53 percent share is plausible and useful: you are not early. You are in a crowd. Price against what sold nearby, not against what the item cost new. A handmade or searchable product wants a buyer who will wait for shipping. That is the case for a marketplace with search, categories, and a cart. Etsy, eBay, and Amazon are different crowds and different fee schedules. Look up the live fee. A 2024 screenshot is not a cost.</p>

    <p>Do not run the same item on four platforms unless you can take the listing down the hour it sells. A double sale is how a side hustle becomes a refund and a bad review. One home platform until the records are boring.</p>

    <h2>The profit line</h2>

    <p>Write, for each item: what you paid, what the buyer paid, what the platform kept, and what shipping cost you. Profit is what is left. A deposit of $80 on a $50 thrift find with $20 of fees and postage is $10, and the hour it took is part of whether you do it again. Omnisend's $500-or-less month is the base rate for this kind of work in that survey. If your sheet says you are under that after a month of evenings, you have a hobby with paperwork or a business that needs a different product. You do not have a salary.</p>

    <p>When the sheet shows a profit you could live on, the leap is <a href="/blog/side-hustle-to-full-time-canada/">side hustle to full-time</a>, not a second platform. Scale the thing that already clears, and keep the records CRA can ask for. The reporting exclusion, fewer than 30 goods sales and $2,800 or less, is about the platform's file. Your sheet exists either way.</p>

    <h2>Frequently asked questions</h2>

    <h3>Which platform takes the smallest cut?</h3>
    <p>This page will not rank fees it has not copied from a current fee schedule. Open the platform's own page on the day you list. Marketplace often has no seller commission on local pickup, and it has its own risks: no-shows, and meeting in person. A cart platform charges for the buyer it brought. Compare fee plus your time, not the fee alone.</p>

    <h3>Can I flip as a side hustle beside my job?</h3>
    <p>Yes, if the employment contract allows it and you are not using the employer's time or customers. Report the profit. Read the clawback article if a benefit depends on family income. A small profit that shrinks a benefit can be a loss.</p>

    <h3>Should I incorporate a resale shop?</h3>
    <p>Not at the start. A sole prop with a sheet and, if you use a trade name, a registration is enough until the profit is more than you need to spend. The decision is <a href="/blog/should-you-incorporate/">should you incorporate</a>.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="https://www.omnisend.com/side-hustles-report-2026">Omnisend: side hustles report 2026</a></li>
        <li><a href="https://www.canada.ca/en/revenue-agency/programs/about-canada-revenue-agency-cra/compliance/reporting-rules-digital-platforms/who-is-affected.html">CRA: platform reporting, who is affected</a></li>
    </ul>

    <h2>Related reading</h2>
    <ul>
        <li><a href="/blog/facebook-marketplace-tax-canada/">Marketplace tax</a></li>
        <li><a href="/blog/platform-reporting-rules-canada/">Platform reporting rules</a></li>
        <li><a href="/blog/content-creator-income-canada/">Creator income, if you are selling attention instead of goods</a></li>
        <li><a href="/blog/best-side-hustles-canada/">Best side hustles</a></li>
    </ul>

    ${footer}

</div>`
  ),
  post(
    'content-creator-income-canada',
    'Making Money as a Content Creator: Sponsorships and Free Products',
    'CRA says Canadian influencers report monetary and non-monetary income. A free product is not free if you were given it because of the audience.',
    `<div class="container">

    <div class="hook">
        A brand that sends a product, a trip, or a fee is paying you. CRA's influencer page says a resident creator reports <span class="highlight">all of that income, monetary and non-monetary</span>, from inside and outside Canada. The box with no invoice is still a number on the return.
    </div>

    <p>The page to follow is CRA's social-media-influencer note in the platform-economy section. Business income goes on the return and on Form T2125, and taxable income is reflected on line 26000. An incorporated creator files a T2. GST/HST registration follows the taxable-supply tests, including the threshold over four calendar quarters that CRA states on that page. The walk-through of those tests is <a href="/blog/side-hustle-taxes-canada/">side-hustle taxes</a>. Whether a platform reports a seller of goods is a different regime: <a href="/blog/platform-reporting-rules-canada/">platform reporting</a>. A gift card or a product is not a "sale of goods" you made. It is income you received.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>Report fees, gifts, and free products. Value a non-cash perk at what you would have paid for it, fair market value, and keep the record of how you got there.</li>
            <li>CRA treats the activity as self-employment when it is not a personal endeavour: T2125, and line 26000.</li>
            <li>GST/HST registration is a separate test from income tax. CRA's influencer examples use the taxable-supplies threshold over four calendar quarters. Read the current registration page before you charge tax.</li>
            <li>A hobby that never aimed at profit is not this article. An account you grow in order to get paid is.</li>
        </ul>
    </div>

    <h2>What counts</h2>

    <p>A sponsorship fee is the easy line. The harder lines are the ones that never hit the bank: a camera sent in exchange for a video, a hotel stay in exchange for posts, a "keep it" product after a review. CRA's page groups these as non-monetary income and says they are reported. Write the fair market value on the day you received the perk, in Canadian dollars, with a note of the source: the brand's own price, or what a stranger would pay. Do not write zero because you did not ask for the item. If you were chosen because of the audience, it was not a birthday gift.</p>

    <p>Barter between creators is the same shape. A service traded for a service is still value. If you cannot put a number on it, you do not yet have a record. Make one before the year ends.</p>

    <h2>What you can deduct, and what you should not invent</h2>

    <p>CRA's peer-to-peer and influencer material points business expenses at costs incurred to earn the income: platform fees, equipment used in the work, and the part of a home workspace the rules actually allow. A ring light used for the videos is a business cost. A wardrobe you would have bought anyway is not, just because you wore it on camera. The side-hustle tax article is the longer version of records and GST/HST. This page will not invent a percentage of rent you may claim. The workspace rules are specific. Read them, or stop at the costs that are obviously the business.</p>

    <p>If the creator work sits on top of a job, run <a href="/blog/side-income-benefits-tax-clawbacks-canada/">clawbacks</a> before you count the sponsorship as spending money. And if the contracts are large enough that you are about to leave the job, the rate and the runway are <a href="/blog/consulting-rate-after-cpp-ei-tax-canada/">the freelance rate</a> and <a href="/blog/side-hustle-to-full-time-canada/">side hustle to full-time</a>. A single good month of brand deals is the Omnisend pattern's exception: 53 percent of side hustlers in that survey earn $500 a month or less.</p>

    <h2>Frequently asked questions</h2>

    <h3>The brand said the product was a gift. Do I still report it?</h3>
    <p>If it arrived because you have an audience they want, treat it as income at fair market value. A gift from a person with no commercial reason is a different story. The brand's email calling it a gift does not rewrite the income.</p>

    <h3>I was not paid, I was only given affiliate links.</h3>
    <p>Commission you earn when someone buys is income when it is credited to you. The link itself, unused, is not. Track the payouts. Report those, not a hypothetical.</p>

    <h3>Do I need a company?</h3>
    <p>Not because you own a camera. Incorporate when the test in <a href="/blog/should-you-incorporate/">should you incorporate</a> is met. Until then, a T2125 and a separate record of perks is the business. How you would pay yourself from a company is <a href="/blog/salary-vs-dividends-incorporated-canada/">salary versus dividends</a>.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="https://www.canada.ca/en/revenue-agency/programs/about-canada-revenue-agency-cra/compliance/platform-economy/social-media-influencers.html">CRA: social media influencers and taxes</a></li>
        <li><a href="https://www.omnisend.com/side-hustles-report-2026">Omnisend side hustles report 2026, for the earnings context</a></li>
    </ul>

    <h2>Related reading</h2>
    <ul>
        <li><a href="/blog/side-hustle-taxes-canada/">Side-hustle taxes</a></li>
        <li><a href="/blog/best-side-hustles-canada/">Best side hustles</a></li>
        <li><a href="/blog/side-income-benefits-tax-clawbacks-canada/">Benefit clawbacks</a></li>
        <li><a href="/blog/platform-reporting-rules-canada/">Platform reporting rules</a></li>
    </ul>

    ${footer}

</div>`
  ),
];
