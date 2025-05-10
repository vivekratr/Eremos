export function logSignal(signal: {
  agent: string;
  type: string;
  glyph: string;
  hash: string;
  timestamp: string;
}) {
  console.log(`[${signal.agent}] stored signal ${signal.hash} at ${signal.timestamp}`);
}
