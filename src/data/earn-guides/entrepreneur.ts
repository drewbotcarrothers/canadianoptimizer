import { barChart, flowChart } from '../../lib/earn-visuals';
import { cta, directAnswer, howto, readNext, sources, takeaways, toc } from './chrome';

const footer = `<div class="article-footer">
        <p><strong>Disclaimer:</strong> This is general education about self-employment and small business in Canada as of October 2026. It is not tax, legal, or business advice. Fees and eligibility rules change. Figures below are taken from the government or survey page linked beside them. Illustrations that are not cited are a method, not a quote. Confirm the registry, CRA, and Service Canada pages before you pay a fee or opt into a program.</p>
        <div class="footer-note">Published: October 15, 2026 | Updated: October 16, 2026 | Category: Earning More | Author: Andrew</div>
    </div>`;

export const registerContent = `<div class="container">

    <div class="hook">
        How to register a business in Canada is a filing question, and people treat it like a strategy. <span class="highlight">A sole proprietorship under your own name, an Ontario trade name, an Ontario corporation, and a federal corporation are different fees and different chores.</span> The payoff is the cheapest structure that matches the risk you actually have, not the one a friend incorporated because it sounded serious.
    </div>

    ${directAnswer('Register a business in Canada only after you know the structure. In Ontario, a sole proprietorship or general partnership name is $60 online and lasts five years. An Ontario business corporation is $300 online. A federal incorporation filed online with Corporations Canada is $200. Registration does not set your price, your GST/HST status, or whether you are an employee.')}

    ${takeaways([
      'Price the work before you pay a registry. The rate page is <a href="/blog/consulting-rate-after-cpp-ei-tax-canada/">how to set a freelance rate</a>.',
      'A CRA business number is not the Ontario BIN and not the federal corporation number. You open program accounts when you need GST/HST, payroll, or import.',
      'You must register for GST/HST once you are no longer a small supplier. The threshold is $30,000 of taxable supplies in a single calendar quarter, or over four consecutive calendar quarters.',
      'A corporation does not, by itself, cut your tax. Whether one should exist is <a href="/blog/should-you-incorporate/">should you incorporate</a>. How money comes out is <a href="/blog/salary-vs-dividends-incorporated-canada/">salary versus dividends</a>.',
      'Other provinces have their own registries. This page does not invent their fees.',
    ])}

    ${toc([
      { id: 'which-structure', label: 'Which structure are you actually choosing?' },
      { id: 'fees', label: 'What do Ontario and federal filings cost?' },
      { id: 'order', label: 'What order wastes the least money?' },
      { id: 'gst', label: 'When does GST/HST force a registration?' },
      { id: 'provinces', label: 'What if you are not in Ontario?' },
      { id: 'mistakes', label: 'What do new owners get wrong?' },
      { id: 'faq', label: 'Frequently asked questions' },
    ])}

    <h2 id="which-structure">Which structure should you register?</h2>
    <p>Choose the liability and the tax home first. The form is second. A sole proprietorship is you. Business income goes on your T1, usually on a T2125. You pay both shares of CPP on that income. A corporation is a separate person. It files a T2. You are not automatically an employee of it, and you are not automatically paid.</p>
    ${flowChart({
      aria: 'Decision flow: if you might be an employee, do not register as a business to paper over that. If you are self-employed and the risk is personal, start with a sole prop. Incorporate when the separate-person reasons are real.',
      caption: 'Registration does not decide employee versus contractor. CRA and the courts do. Read that test before you pay $300 to look like a company.',
      nodes: [
        { title: 'Are you actually self-employed?', kind: 'decision', text: 'If a client controls you like staff, registering will not fix it.' },
        { title: 'Is the risk bigger than you?', kind: 'decision', text: 'Contracts, staff, or a partner who needs shares.' },
        { title: 'Sole prop or partnership', kind: 'option', text: 'Name registration only if you are not using your own legal name.' },
        { title: 'Corporation', kind: 'result', text: 'Ontario $300 or federal $200, then a CRA program account if you need one.' },
      ],
    })}
    <p>The status test is <a href="/blog/employee-vs-contractor-canada/">employee versus contractor</a>. If you fail it, a corporation can make the mess more expensive. Clients still want a contractor invoice, and CRA still sees an employee.</p>

    <h2 id="fees">What do the Ontario and federal fees actually are?</h2>
    <p>These are the figures on the government fee pages, not a lawyer’s quote. A lawyer or a service can cost more. That extra is their fee. It is not the registry.</p>
    <div class="table-wrapper">
    <table>
        <caption>Government filing fees from Ontario’s register-your-business page and Corporations Canada’s online filing centre. Checked October 2026.</caption>
        <thead><tr><th>Filing</th><th>Fee on the official page</th><th>What you get</th><th>What you still do not get</th></tr></thead>
        <tbody>
            <tr><td>Ontario sole proprietorship</td><td>$60</td><td>Name registration. Ontario’s own materials say a registration is valid for five years and then must be renewed.</td><td>Limited liability. A corporate tax return. A GST/HST account.</td></tr>
            <tr><td>Ontario general partnership</td><td>$60</td><td>Name registration for the partnership.</td><td>A shield between partners. You still need a partnership agreement if you care who owns what.</td></tr>
            <tr><td>Ontario limited partnership</td><td>$210</td><td>A different partnership statute, with at least one general partner.</td><td>A substitute for understanding which partner is still fully liable.</td></tr>
            <tr><td>Ontario business corporation</td><td>$300</td><td>An Ontario corporation filed online.</td><td>A minute book that maintains itself. Annual corporate records. A salary.</td></tr>
            <tr><td>Federal business corporation, online</td><td>$200</td><td>A CBCA corporation. Corporations Canada lists the online incorporation at $200.</td><td>An automatic extra-provincial registration in every province where you will carry on business. Ask that province.</td></tr>
        </tbody>
    </table>
    </div>

    ${barChart({
      title: 'Government fee to open the file',
      aria: 'Bar chart of official fees: Ontario sole prop $60, Ontario corporation $300, federal online incorporation $200.',
      caption: 'Ontario fees from ontario.ca, register your business online. Federal fee from Corporations Canada’s online filing centre. Scaled to $300. Professional help is extra and is not shown because this page will not invent a law-firm price.',
      rows: [
        { label: 'Ontario sole prop', pct: 20, text: '$60' },
        { label: 'Federal corporation', pct: 67, text: '$200' },
        { label: 'Ontario corporation', pct: 100, text: '$300' },
      ],
    })}

    <p>A named Ontario corporation usually needs a NUANS name search from a private search house. That price is not on the $300 line. A numbered company skips the name. Federal online incorporation’s own page is the place to see whether a name search is included in the filing you are about to submit. Do not take a blog’s word for a search fee.</p>

    <h2 id="order">What order of steps wastes the least money?</h2>
    <p>Pay the registry after the other decisions, not before.</p>
    ${howto('How to register a business in Canada', [
      { name: 'Confirm you are self-employed', text: 'If the client sets your hours and tools and forbids substitutes, stop. The contractor test comes before the form.' },
      { name: 'Pick sole prop or corporation', text: 'Use a sole prop when you are the business and the contracts are ordinary. Use a corporation when you need a separate legal person, shares, or you have already decided the tax case with someone who will sign the return.' },
      { name: 'Register the name or the company', text: 'Ontario Business Registry for the provincial file. Corporations Canada for a federal company. Keep the receipt and the number.' },
      { name: 'Open the CRA accounts you actually need', text: 'A business number with a GST/HST account when you cross the small-supplier line or you volunteer. A payroll account when you pay employees, including yourself a salary from a corporation.' },
      { name: 'Set the invoice', text: 'Your legal name or registered name, the rate from the rate page, and GST/HST only if you are registered. Charging tax you are not registered to collect is a problem. Not charging it when you must is a bigger one.' },
    ])}
    <div class="tip-box"><strong>Pro tip.</strong> Put the renewal date for an Ontario business-name registration in your calendar the day you pay the $60. Five years is long enough to forget, and a lapsed name is an awkward surprise when a client’s accounts payable asks for it.</div>

    <h2 id="gst">When does the $30,000 GST/HST line force your hand?</h2>
    <p>CRA’s small-supplier rule is about taxable supplies, not profit. You are a small supplier if you do not go over <strong>$30,000</strong> in a single calendar quarter and you do not go over $30,000 across four consecutive calendar quarters. Worldwide taxable supplies count, and so do associates. The $30,000 figure is revenue before expenses. It is not what you take home.</p>
    <p>If you cross $30,000 inside one calendar quarter, you charge GST/HST on the supply that put you over, and your registration is effective no later than that day. If you cross over four quarters but not inside one quarter, you stop being a small supplier at the end of the month after that quarter, and you charge tax from your effective date. Voluntary registration is allowed earlier. You may have to stay registered for at least a year. Taxi and ride-share drivers are a mandatory exception even under the threshold. That exception is <a href="/blog/rideshare-delivery-driver-taxes-canada/">rideshare and delivery taxes</a>.</p>
    <div class="example-box"><strong>Example, not a filing position.</strong> You invoice $8,000 in each of four quarters. That is $32,000 over four quarters and never $30,000 inside one quarter. You have crossed the four-quarter test. The effective date is not “whenever you notice.” It follows the rule on CRA’s when-to-register page. HST in Ontario is 13 percent. On a later $2,000 invoice that is taxable, the client pays $260 of HST on top if you are registered. That $260 is not your income. You remit it, minus input tax credits on business purchases. The filing mechanics are <a href="/blog/side-hustle-taxes-canada/">side-hustle taxes</a>.</div>
    <p>Tools: CRA My Business Account to open the program account, the Ontario Business Registry or Corporations Canada for the legal file, and a bookkeeping tool once invoices exist. Wave, QuickBooks, and FreshBooks all keep invoices and sales tax. This page will not quote their prices. The pro of a dedicated ledger is that the $30,000 test is a running total, not a shoebox. The con is paying for software before you have a client. A spreadsheet is enough until the first invoice. It is not enough once you are registered for GST/HST.</p>

    <h2 id="provinces">What if the business is not in Ontario?</h2>
    <p>Use that province’s registry and its fee schedule. British Columbia, Alberta, and Quebec each have their own corporate and trade-name systems. Copying Ontario’s $60 or $300 into another province is how people budget the wrong cheque. Federal incorporation is portable in the sense that the corporation exists across Canada, and you still register extra-provincially where that province requires it. The fee for that extra step is the province’s, and it was not a single national number on the federal page used here.</p>
    <p>Quebec sales tax is not HST. If you sell into Quebec, QST is a separate registration question. Do not add 13 percent because the example above was Ontario.</p>

    <h2 id="mistakes">What do new owners get wrong?</h2>
    <ul class="checklist">
        <li>Incorporating to “pay less tax” before there is profit to leave in the company.</li>
        <li>Registering a trade name and thinking that created a corporation.</li>
        <li>Charging HST from invoice one while still a small supplier, or not charging it the week you stop being one.</li>
        <li>Using a corporation to invoice a single client who treats you as staff.</li>
        <li>Forgetting both shares of CPP. In 2026 the self-employed CPP maximum is $8,460.90, plus up to $832 of CPP2. That is a cost of the structure, not a surprise in April.</li>
        <li>Skipping a partnership agreement because the registry only asked for $60.</li>
    </ul>
    <p>Get a lawyer when someone else will own shares, when you are signing a commercial lease in a corporate name, or when you are buying a business rather than starting one. Get an accountant when the first year will include payroll, GST/HST, and a shareholder loan. You do not need either to register an Ontario sole prop under a trade name.</p>

    <h2 id="faq">Frequently asked questions</h2>
    <h3>Do I have to register a sole proprietorship in Ontario if I use my own name?</h3>
    <p>The $60 fee on the Ontario page is for registering a sole proprietorship, partnership, or trade name. People who carry on business in their own legal name are the case the Business Names Act is aimed away from. Confirm that on the registry before you skip it. You still report the income, and you still watch the $30,000 GST/HST line.</p>
    <h3>Is a federal corporation better than an Ontario one?</h3>
    <p>Federal is $200 online and gives a federal name. Ontario is $300 and is the simpler map if you will only operate in Ontario. Neither fee tells you which one saves tax. Extra-provincial registration can add cost the federal fee does not include.</p>
    <h3>Does registration give me a business number?</h3>
    <p>No. The Ontario BIN, the federal corporation number, and the CRA business number are three identifiers. Open the CRA account when you need a program account.</p>
    <h3>When do I have to charge GST/HST?</h3>
    <p>When you are no longer a small supplier, or when you register voluntarily, or immediately if you are in a mandatory category such as taxi and ride-sharing. The ordinary threshold is $30,000.</p>
    <h3>Should I incorporate on day one?</h3>
    <p>Incorporate when you need a separate legal person or you have a tax reason you can explain without using the word “write-off.” Otherwise start as a sole prop, keep the records, and revisit. The longer test is the incorporate article.</p>
    <h3>Can I register in Ontario and sell to clients in other provinces?</h3>
    <p>Yes, you can have clients elsewhere. Where you are carrying on business can still trigger that province’s registration. One contract in another city is not the same as an office there. If you open a location, read that province’s extra-provincial rules.</p>
    <h3>What records do I need the day I register?</h3>
    <p>The receipt, the legal name, the start date, and a list of invoices from that date. GST/HST is a running total of taxable supplies. Reconstructing it from email in year two is how people miss the threshold.</p>
    <h3>Is Ownr or another service required?</h3>
    <p>No. The registries take the filing directly. A service is a convenience. Compare its price to the government fee above before you pay it, and do not treat the service as legal advice.</p>

    ${sources([
      '<a href="https://www.ontario.ca/page/business/start/register-your-business-online">Ontario: register your business online, including the $60 and $300 fees</a>',
      '<a href="https://ised-isde.canada.ca/site/corporations-canada/en">Corporations Canada, online incorporation listed at $200</a>',
      '<a href="https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/gst-hst-businesses/when-register-charge.html">CRA: when to register for and start charging GST/HST</a>',
      '<a href="https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/payroll/payroll-deductions-contributions/canada-pension-plan-cpp/cpp-contribution-rates-maximums-exemptions.html">CRA: 2026 CPP maximums, including self-employed</a>',
      '<a href="https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/payroll/calculating-deductions/making-deductions/second-additional-cpp-contribution-rates-maximums.html">CRA: CPP2 maximums</a>',
    ])}

    ${readNext([
      '<a href="/blog/consulting-rate-after-cpp-ei-tax-canada/">Set the rate before you print invoices</a>',
      '<a href="/blog/employee-vs-contractor-canada/">Employee versus contractor</a>',
      '<a href="/blog/should-you-incorporate/">Should you incorporate</a>',
      '<a href="/blog/side-hustle-taxes-canada/">GST/HST and the T2125</a>',
    ])}

    ${cta('Next step: if you will pay yourself from a corporation, run a sample salary through the income tax calculator before you pick a mix. The 2026 tax guide is the longer treatment of the personal return that salary lands on.')}

    ${footer}
</div>`;
