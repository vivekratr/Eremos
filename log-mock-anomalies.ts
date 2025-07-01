import { logSignal } from "../utils/logger";
import { generateSignalHash } from "../utils/signal";

const mockLogs = [
  {
    agent: "Theron",
    type: "Anomaly_trace",
    confidence: 0.82,
    glyph: "θ",
  },
  {
    agent: "Skieró",
    type: "Dormant_wallet_ping",
    confidence: 0.76,
    glyph: "ψ",
  },
  {
    agent: "Observer",
    type: "Bundle_detected",
    confidence: 0.88,
    glyph: "σ",
  },
];

mockLogs.forEach((log) => {
  logSignal({
    ...log,
    hash: generateSignalHash(log),
    timestamp: new Date().toISOString(),
  });
});
