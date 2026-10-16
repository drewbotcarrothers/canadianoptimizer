/** Build-time HTML/SVG visuals for earning guides. No client JavaScript. */

function esc(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export function barChart(opts: {
  title: string;
  caption: string;
  aria: string;
  rows: { label: string; pct: number; text: string }[];
}): string {
  const bars = opts.rows
    .map((row) => {
      const width = Math.max(8, Math.min(100, row.pct));
      return `<div class="bar-item">
        <div class="bar-label wide">${esc(row.label)}</div>
        <div class="bar-wrapper"><div class="bar" style="width:${width}%"><span>${esc(row.text)}</span></div></div>
      </div>`;
    })
    .join('\n');
  return `<figure class="earn-figure">
    <div class="chart-container">
      <h3>${esc(opts.title)}</h3>
      <div class="bar-chart" role="img" aria-label="${esc(opts.aria)}">
        ${bars}
      </div>
    </div>
    <figcaption>${esc(opts.caption)}</figcaption>
  </figure>`;
}

export function lineChart(opts: {
  title: string;
  caption: string;
  aria: string;
  yMax: number;
  yTicks: { value: number; label: string }[];
  xLabels: string[];
  series: { name: string; color: string; values: number[] }[];
}): string {
  const left = 64;
  const right = 610;
  const top = 56;
  const bottom = 250;
  const width = right - left;
  const height = bottom - top;
  const n = opts.xLabels.length;
  const xAt = (index: number) => left + (n <= 1 ? width / 2 : (index / (n - 1)) * width);
  const yAt = (value: number) => bottom - (value / opts.yMax) * height;
  const grids = opts.yTicks
    .map(
      (tick) =>
        `<line x1="${left}" y1="${yAt(tick.value).toFixed(1)}" x2="${right}" y2="${yAt(tick.value).toFixed(1)}" stroke="#e5e7eb" stroke-width="1"></line>
        <text x="${left - 8}" y="${(yAt(tick.value) + 4).toFixed(1)}" text-anchor="end" fill="#4b5563" font-size="12">${esc(tick.label)}</text>`
    )
    .join('\n');
  const xlabels = opts.xLabels
    .map(
      (label, index) =>
        `<text x="${xAt(index).toFixed(1)}" y="${bottom + 22}" text-anchor="middle" fill="#333" font-size="12">${esc(label)}</text>`
    )
    .join('\n');
  const lines = opts.series
    .map((series) => {
      const points = series.values
        .map((value, index) => `${xAt(index).toFixed(1)},${yAt(value).toFixed(1)}`)
        .join(' ');
      const dots = series.values
        .map(
          (value, index) =>
            `<circle cx="${xAt(index).toFixed(1)}" cy="${yAt(value).toFixed(1)}" r="4" fill="${series.color}"></circle>`
        )
        .join('');
      return `<polyline fill="none" stroke="${series.color}" stroke-width="3" points="${points}"></polyline>${dots}`;
    })
    .join('\n');
  const legend = opts.series
    .map(
      (series, index) =>
        `<rect x="${left + index * 220}" y="16" width="14" height="14" fill="${series.color}"></rect>
        <text x="${left + 20 + index * 220}" y="28" fill="#333" font-size="13">${esc(series.name)}</text>`
    )
    .join('\n');
  return `<figure class="earn-figure">
    <div class="chart-container">
      <h3>${esc(opts.title)}</h3>
      <svg class="earn-svg" viewBox="0 0 640 290" role="img" aria-label="${esc(opts.aria)}" xmlns="http://www.w3.org/2000/svg">
        ${legend}
        ${grids}
        <line x1="${left}" y1="${top}" x2="${left}" y2="${bottom}" stroke="#333" stroke-width="1.5"></line>
        <line x1="${left}" y1="${bottom}" x2="${right}" y2="${bottom}" stroke="#333" stroke-width="1.5"></line>
        ${lines}
        ${xlabels}
      </svg>
    </div>
    <figcaption>${esc(opts.caption)}</figcaption>
  </figure>`;
}

export type FlowNode = { title: string; text?: string; kind?: 'decision' | 'result' | 'option' };

export function flowChart(opts: { aria: string; caption: string; nodes: FlowNode[] }): string {
  const body = opts.nodes
    .map((node, index) => {
      const kind = node.kind ? ` ${node.kind}` : '';
      const arrow = index === opts.nodes.length - 1 ? '' : '<div class="flow-arrow" aria-hidden="true"></div>';
      return `<div class="flow-node${kind}"><strong>${esc(node.title)}</strong>${node.text ? `<div>${esc(node.text)}</div>` : ''}</div>${arrow}`;
    })
    .join('\n');
  return `<figure class="earn-figure">
    <div class="flowchart" role="img" aria-label="${esc(opts.aria)}">
      ${body}
    </div>
    <figcaption>${esc(opts.caption)}</figcaption>
  </figure>`;
}
