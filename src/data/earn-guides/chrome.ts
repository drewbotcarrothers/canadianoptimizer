export const checked = 'Checked October 2026.';

export function directAnswer(text: string): string {
  return `<div class="direct-answer"><strong>Direct answer</strong><p>${text}</p></div>`;
}

export function takeaways(items: string[]): string {
  return `<div class="callout"><strong>Key takeaways</strong><ul>${items.map((item) => `<li>${item}</li>`).join('')}</ul></div>`;
}

export function toc(items: { id: string; label: string }[]): string {
  return `<nav class="toc" aria-label="On this page"><strong>On this page</strong><ol>${items
    .map((item) => `<li><a href="#${item.id}">${item.label}</a></li>`)
    .join('')}</ol></nav>`;
}

export function sources(items: string[]): string {
  return `<h2 id="sources">Sources</h2>
    <p>${checked} Statutory figures are from the government page linked beside them. Survey figures are from the publisher named. Dollar stories marked as examples are a method, not a quote of your pay.</p>
    <ul>${items.map((item) => `<li>${item}</li>`).join('')}</ul>`;
}

export function readNext(items: string[]): string {
  return `<h2 id="read-next">Read next</h2><ul>${items.map((item) => `<li>${item}</li>`).join('')}</ul>`;
}

export function cta(text: string): string {
  return `<div class="cta-section"><p>${text}</p><p><a class="cta-button" href="/blog/canada-income-tax-calculator/">Open the income tax calculator</a></p><p><a href="/ebooks/tax-guide/">2026 tax guide</a></p></div>`;
}

export function howto(name: string, steps: { name: string; text: string }[]): string {
  const lis = steps
    .map((step) => `<li><strong>${step.name}.</strong> ${step.text}</li>`)
    .join('\n');
  return `<div class="howto" data-howto-name="${name}"><ol class="howto-steps">${lis}</ol></div>`;
}
