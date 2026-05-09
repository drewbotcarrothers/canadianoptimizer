import re

file_path = "/Users/andrewcarrothers/Desktop/CanadianOptimizer/Website/src/data/posts.ts"
with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# The content to replace for the specific slug
new_html = """<div class="container">

    <div class="hook">
        H&R Block Canada's Second Look service reviews previously filed tax returns — and finds an average of nearly <span class="stat-highlight">$3,000 per client</span> in missed deductions and credits. Multiply that across millions of Canadians, and we're talking <strong>billions left on the table every single year.</strong>
    </div>

    <p>Here's the problem: Canadians are phenomenal at filing taxes. We follow the rules, we meet deadlines, we report our income. But we're terrible at <em>optimizing</em> them. Most people file their taxes and never think about it again — completely missing hundreds or thousands of dollars they're legally entitled to claim.</p>

    <p>This isn't about being clever or aggressive. It's about knowing what you can claim. And the system makes that surprisingly hard.</p>

    <div class="callout">
        <strong>$3,000 Average Recovery:</strong>
        <p>This is the average amount H&R Block clients recover per return when claiming missed deductions and credits.</p>
    </div>

    <h2>The #1 Mistake: Not Claiming What You're Owed</h2>

    <p>Here's why so many Canadians leave money on the table: <strong>Canada's tax system includes over 400 credits and deductions.</strong> Some you'll hear about every year (basic personal amount, tuition, RRSP). Others are buried in the tax code, rarely discussed, and only claimed by people who know to look for them.</p>

    <p>The biggest culprit? <strong>Credits that don't come with a tax slip.</strong></p>

    <p>When your employer gives you a T4, CRA knows exactly how much income you earned. When you make an RRSP contribution, you get a receipt. But when you have medical expenses, donate to charity, or claim the Canada Workers Benefit? You have to remember to claim these yourself. CRA won't remind you. Your employer doesn't report it. And most people never connect the dots that they're eligible.</p>

    <p>The result: <span class="stat-highlight">nearly 4 in 10 Canadians</span> believe they have unclaimed benefits — yet most never do anything about it. In a single year, Canadians left <span class="stat-highlight">$212 million in Canada Workers Benefits unclaimed.</span> That's not a small number. That's generational wealth.</p>

    <div class="tip-box">
        <strong>Key insight:</strong>
        <p>The average Canadian tax refund is about $2,000. But if you're missing deductions, you might be looking at $3,000, $5,000, or more if you go back and file adjustments. That's money CRA literally owes you — you just have to claim it.</p>
    </div>

    <h2>The 10 Most Commonly Missed Deductions and Credits</h2>

    <p>Let's walk through the deductions and credits that most Canadians overlook. If any of these apply to you, you could be eligible to claim them on your next return — or even on a T1 Adjustment for previous years.</p>

    <h3>1. Medical Expense Tax Credit</h3>
    <p>You can claim medical expenses that exceed <strong>3% of your net income</strong> (or $2,834, whichever is less). This includes prescriptions, dental work, glasses, physiotherapy, counselling, and even some medical equipment. Many people don't realize that everyday health costs count. The key is bundling expenses — claim them in the year that pushes you over the threshold. A year with major dental work, prescriptions, and glasses might suddenly qualify you. <span class="stat-highlight">Highly Variable</span></p>

    <h3>2. Disability Tax Credit</h3>
    <p>Worth up to <strong>$10,138 in 2025</strong> — plus an additional <strong>$5,914 supplement</strong> if you have a child under 18. This isn't just for mobility issues. ADHD, diabetes, mental health conditions, chronic pain, and learning disabilities all qualify. You need a T2201 form signed by a medical professional, but if you qualify, the credit is substantial and can be carried back to previous years. <span class="stat-highlight">Up to $10,138</span></p>

    <h3>3. Canada Workers Benefit</h3>
    <p>This refundable credit is designed for low-to-moderate income workers. If you earned between roughly $15,000–$35,000, you likely qualify. It's worth <strong>$1,633 for single filers</strong> and <strong>$2,813 for families</strong>. The shocking part? <strong>$212 million in CWB went unclaimed in a single year.</strong> This is free money from the government, and most people don't even know it exists. You must claim it — CRA won't automatically give it to you. <span class="stat-highlight">$1,633–$2,813</span></p>

    <h3>4. Moving Expenses</h3>
    <p>Moved for work or school? If you relocated <strong>40+ kilometres closer</strong> to your workplace or educational institution, you can deduct moving costs: truck rental, movers, flights, temporary housing, and even eligible meals. Most people either don't know this or don't think to claim it. It's a one-time deduction that can add up quickly. <span class="stat-highlight">Full Deduction Eligible</span></p>

    <h3>5. Charitable Donations</h3>
    <p>The credit rate is <strong>15% on the first $200</strong> and up to <strong>33% above that.</strong> Here's the clever part: if you donate sporadically, you can file a charitable donation in the year it's most beneficial for your tax bracket. Better yet, you can <em>bundle</em> donations across multiple years — donate $5,000 over five years, then claim the full amount in year five. This strategy can dramatically increase your credit by pushing more donations into the higher bracket. <span class="stat-highlight">Up to 54% on High Amounts</span></p>

    <h3>6. Home Buyers' Amount</h3>
    <p>First-time home buyers can claim up to <strong>$10,000 of the purchase price as a credit, worth $1,500.</strong> This is a one-time claim, and many first-time buyers either forget about it or don't know it exists. If you bought your first home in the last few years, check your past returns. <span class="stat-highlight">$1,500 Credit</span></p>

    <h3>7. Home Accessibility Tax Credit</h3>
    <p>If you or a family member is eligible for the Disability Tax Credit, you can claim eligible home renovation expenses to improve accessibility. This covers wheelchair ramps, grab bars, modified bathrooms, and more. With expenses capped at <strong>$20,000, you get a $2,900 credit.</strong> Many homeowners miss this because it requires the T2201 (DTC) first. <span class="stat-highlight">$2,900 Credit</span></p>

    <h3>8. Carrying Charges</h3>
    <p>Interest on loans used to buy income-producing investments is deductible. This includes investment advisor fees, margin loan interest, and similar costs. Many self-directed investors forget to claim these because they're not obvious like RRSP contributions. Keep receipts and claim them annually. <span class="stat-highlight">Full Deduction Eligible</span></p>

    <h3>9. Union and Professional Dues</h3>
    <p>Union dues, professional association fees, and licensing fees are fully deductible. Many employees are shocked to learn they can claim these — they're reported on a T2029, and most people just ignore it or forget it's a deduction. <span class="stat-highlight">Full Deduction Eligible</span></p>

    <h3>10. Northern Residents Deduction</h3>
    <p>If you live in a prescribed northern area, you can claim this deduction. It's worth <strong>$2,187 per year</strong> if you qualify. It's specific to certain communities, but if you live in one and haven't claimed it, you're leaving money on the table. <span class="stat-highlight">Up to $2,187</span></p>

    <h2>The Quick Self-Audit: Are You Making These Mistakes?</h2>

    <p>Use this checklist to spot-check whether you've been missing claims. If you check even a few of these, it's time to file a T1 Adjustment.</p>

    <ul class="checklist">
        <li><strong>Medical Expenses</strong> — Do you have significant medical, dental, or prescription expenses that you've never claimed?</li>
        <li><strong>Disability Tax Credit</strong> — Have you been diagnosed with ADHD, diabetes, chronic pain, mental health conditions, or other disabilities that might qualify for the DTC?</li>
        <li><strong>Canada Workers Benefit</strong> — Do you earn between $15,000–$35,000 annually?</li>
        <li><strong>Moving Expenses</strong> — Have you moved 40+ km closer to work or school without claiming the moving expenses?</li>
        <li><strong>Charitable Donations</strong> — Do you make regular charitable donations but claim them sporadically (not optimizing your bracket)?</li>
        <li><strong>Home Buyers' Amount</strong> — Have you bought your first home in the last few years without claiming the credit?</li>
        <li><strong>Home Accessibility</strong> — Do you have home accessibility expenses related to a disability in your household?</li>
        <li><strong>Carrying Charges</strong> — Do you pay investment loan interest or investment advisor fees that you've never claimed?</li>
        <li><strong>Union Dues</strong> — Do you pay union dues or professional association fees without claiming them?</li>
        <li><strong>Northern Residents</strong> — Do you live in a prescribed northern area and have never claimed the Northern Residents Deduction?</li>
    </ul>

    <p>If you checked even two or three of these, you're likely eligible to recover hundreds or thousands of dollars. The good news? <strong>You don't have to refile — you can file a T1 Adjustment.</strong></p>

    <div class="warning-box">
        <strong>Don't Leave Money on the Table:</strong>
        <p>You have 10 years to go back and claim what you missed. Every year you wait is a year of lost refunds.</p>
    </div>

    <h2>How to Fix It: The T1 Adjustment Request</h2>

    <p>The good news: you don't need to refile your entire tax return. CRA allows you to file a <strong>T1 Adjustment Request</strong> to claim missed deductions and credits going back <strong>up to 10 years.</strong> Here's how to do it:</p>

    <ol>
        <li><strong>Gather Your Documentation:</strong> Collect receipts, invoices, and proof of any deductions or credits you're claiming. For medical expenses, keep receipts. For the Disability Tax Credit, get a T2201 signed by your medical professional. For charitable donations, keep donation receipts. CRA may ask for proof, and you need to be ready to provide it.</li>
        <li><strong>Complete Form T1-ADJ (T1 Adjustment Request):</strong> Download the form from CRA's website or contact them for it. Fill in your personal information, the years you're adjusting, and the deductions/credits you're adding. Be clear and specific about what you're claiming and why.</li>
        <li><strong>Include Supporting Documentation:</strong> Attach copies (not originals) of all receipts, forms, and proof. For major claims like the DTC, include the completed T2201. The more thorough you are, the faster CRA processes your request.</li>
        <li><strong>Mail or File Online:</strong> You can mail the form to your local CRA office, or if you have CRA My Account, you can file it online through the CRA portal. Online filing is faster and gives you tracking information.</li>
        <li><strong>Wait for Processing and Receive Your Refund:</strong> CRA typically processes T1 Adjustments within 4–8 weeks. Once approved, you'll receive a Notice of Assessment showing your adjusted tax owing or refund due. If you're owed money, the refund will be deposited directly to your account.</li>
    </ol>

    <div class="tip-box">
        <strong>Pro tip:</strong>
        <p>If you're claiming multiple years, file separate T1 Adjustments for each year. It can actually speed up processing and makes it easier to track what you're claiming for which year.</p>
    </div>

    <h2>What to Expect</h2>

    <p>When you file a T1 Adjustment, CRA reviews your claim against the documentation you provide. They're not trying to deny you — they just want proof that you're eligible. If everything checks out, you'll see an updated Notice of Assessment and your refund will be processed.</p>

    <p>The amount you recover depends on what you claim, but based on H&R Block's data, the average is around <span class="stat-highlight">$3,000 per person.</span> Some people get $500. Others get $5,000 or more. It all depends on your situation.</p>

    <p>One more important point: <strong>CRA won't challenge legitimate claims.</strong> If you have receipts and you're eligible, you'll get your money. The only reason a claim gets denied is if you lack documentation or genuinely don't qualify.</p>

    <h2>The Bottom Line</h2>

    <p>The biggest tax mistake Canadians make isn't being careless. It's being uninformed. We're all capable of filing taxes correctly — but most of us have no idea what we're actually allowed to claim.</p>

    <p>Canada's tax system has over 400 credits and deductions. Most of us use maybe 5–10. That leaves hundreds of dollars, thousands of dollars, or tens of thousands of dollars on the table depending on your situation.</p>

    <p>The fix is simple: <strong>Do a self-audit.</strong> Check the checklist above. If anything applies to you, gather your documentation and file a T1 Adjustment. You have 10 years to go back. You might recover hundreds or thousands of dollars.</p>

    <p>That's not being clever. That's not being aggressive. That's just claiming what the law says you're owed.</p>

    <div class="cta-section">
        <p><strong>Ready to Recover Your Missing Deductions?</strong></p>
        <p>We've created a free ebook with detailed checklists for all 400+ Canadian tax credits and deductions. Find out exactly which ones apply to you — and how much money you might recover.</p>
        <a href="https://canadianoptimizer.com/ebooks/" class="cta-button">Explore Canadian Optimizer →</a>
    </div>

    <div class="article-footer">
        <p><strong>Disclaimer:</strong> This article is for informational purposes only and does not constitute professional tax advice. Consult a qualified tax professional for advice specific to your situation.</p>
        <p><em>Last updated: April 2026. Based on CRA rules and rates for the 2026 tax year.</em></p>
    </div>

</div>"""

# Find the block corresponding to the 'biggest-tax-mistake-canadians' slug
pattern = r'(slug:\s*"biggest-tax-mistake-canadians",.*?content:\s*`)(.*?)(`\s*},\s*\{\s*title:\s*"The RRSP Playbook)'
match = re.search(pattern, content, re.DOTALL)

if match:
    new_content = content[:match.start(2)] + new_html + content[match.end(2):]
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(new_content)
    print("Replaced successfully in posts.ts")
else:
    print("Pattern not found!")
