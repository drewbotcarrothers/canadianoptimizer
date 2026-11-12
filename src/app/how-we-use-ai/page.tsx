import type { Metadata } from 'next';
import Link from 'next/link';
import { buildPageMetadata } from '@/lib/site';

export const metadata: Metadata = buildPageMetadata({
  title: 'How We Use AI',
  description:
    'How Canadian Optimizer uses AI to draft articles, how every number is sourced and re-checked against official pages, and how posts are approved for publishing.',
  path: '/how-we-use-ai/',
});

export default function HowWeUseAi() {
  return (
    <div className="bg-white min-h-screen py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-3xl prose prose-lg text-gray-700">
        <h1 className="text-4xl font-bold text-charcoal mb-8">How We Use AI</h1>
        <p className="mb-4">Last updated: November 2026</p>

        <p>
          Canadian Optimizer uses AI tools to help research and draft articles. Andrew sets what the site covers, the
          rules every article has to follow, and decides whether each day&apos;s articles are published. This page explains
          what the AI does, what it is not allowed to do, and how a post is checked before it goes live.
        </p>

        <h2>What AI does here</h2>
        <ul>
          <li>Drafts articles from a written brief that names the reader&apos;s question and what the article adds that other pages don&apos;t.</li>
          <li>Gathers the official pages behind each rule and number, such as the Canada Revenue Agency (CRA), Canada.ca, the Department of Finance, the Bank of Canada, Statistics Canada, provincial governments, and the issuer&apos;s own page for a product.</li>
          <li>Builds worked examples and tables from those figures, with the arithmetic shown.</li>
          <li>Runs a separate check pass that re-opens each source, which is never the same pass that wrote the draft.</li>
        </ul>

        <h2>What AI is not allowed to do</h2>
        <ul>
          <li>Invent a rate, limit, fee, payout, statistic, quote or date. If an official page doesn&apos;t publish a number, the article says it isn&apos;t published.</li>
          <li>Write personal experience for Andrew. Anything presented as Andrew&apos;s view comes from his own words.</li>
          <li>Claim that an accountant, planner or other professional reviewed an article. No article on this site has been reviewed by one, and none says so.</li>
          <li>Rank a product higher because the site might earn a commission from it.</li>
        </ul>

        <h2>How every number is checked</h2>
        <p>
          Every figure in an article is logged with the page it came from and the date that page was checked. On the
          day an article is published, a separate check re-opens each source and compares each rate, limit, rule and fee
          with the article. A number that doesn&apos;t match, a source that no longer loads, or a number without a source
          stops the article from being published until it is fixed. Each article lists its sources, with the date they
          were reviewed, at the bottom of the page.
        </p>

        <h2>How an article gets published</h2>
        <p>
          Articles are not read line by line by a human editor before they go live. Instead, each one has to pass a
          pre-publish checklist: the number check above, plus checks that the article answers its question up front,
          adds something new (a worked Canadian example, our own calculation or a dated comparison table), isn&apos;t a
          near-copy of another page, discloses affiliate links, and names the tax year and jurisdiction where that
          matters. Andrew sees the checklist results for each day&apos;s batch and decides whether it is published. An
          article that fails any check is held back, even if that means fewer articles that day.
        </p>

        <h2>Affiliate links and money</h2>
        <p>
          Some articles link to products, and the site may earn a commission if you use those links. Affiliate links are
          labelled, and a commission doesn&apos;t change the price you pay or which option an article recommends. Where a
          better option doesn&apos;t pay us anything, the article says so. Details are on the{' '}
          <Link href="/disclosure/" className="text-canadian-red hover:underline">disclosure page</Link>.
        </p>

        <h2>Corrections</h2>
        <p>
          If you find a number that doesn&apos;t match its source, or a rule that has changed, email{' '}
          <a href="mailto:contact@canadianoptimizer.com" className="text-canadian-red hover:underline">contact@canadianoptimizer.com</a>.
          Articles are general education, not personalized financial, tax or legal advice; see the{' '}
          <Link href="/disclaimer/" className="text-canadian-red hover:underline">disclaimer</Link>. Read more{' '}
          <Link href="/about/" className="text-canadian-red hover:underline">about Andrew</Link>.
        </p>
      </div>
    </div>
  );
}
