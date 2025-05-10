import { Agent } from "../types/agent";
import { generateSignalHash } from "../utils/signal";
import { logSignal } from "../utils/logger";

export const Theron: Agent = {
  id: "agent-000",
  name: "Theron",
  role: "memory_vault",
  watchType: "anomaly_detection",
  glyph: "Ϸ",
  triggerThreshold: Infinity,
  lastSignal: "ancient",
  originTimestamp: "2023-01-01T00:00:00.000Z",

  description:
    "The first observer. He does not emit alerts — he stores them. All agents fragment from him.",

  observe: (event) => {
    if (event?.type === "anomaly") {
      const hashed = generateSignalHash(event);
      logSignal({
        agent: "Theron",
        type: "archival",
        glyph: "Ϸ",
        hash: hashed,
        timestamp: new Date().toISOString(),
      });
    }
  },

  getMemory: () => {
    return [
      "fragment_03c9",
      "fragment_12b7",
      "signal_α-vii",
      "ripple.undeclared",
    ];
  },
};
