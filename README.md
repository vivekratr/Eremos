# Eremos

**Autonomous swarm agents for early on-chain signal detection**  
Eremos is a lightweight framework for deploying modular agents that monitor blockchain activity - tracking wallet clusters, mint patterns, and contract anomalies.  
Designed for devs who want low-noise, early signals embedded into their workflows.

---

## Features

- **Modular Agents** - Scoped logic for detecting wallet activity, contract spawns, and anomalies  
- **Signal Emission** - Structured signals for logging, alerting, or downstream use  
- **Swarm Design** - Each agent operates independently with shared utilities  
- **Extensible Core** - Plug in watchers, inference layers, or custom triggers  
- **Minimal Output** - Log only what matters

---

## Tech Stack

- **Frontend:** Next.js, Tailwind CSS  
- **Backend:** Node.js (agent runner)  
- **Chain Layer:** RPC watchers, mempool filters, native triggers  
- **Optional:**  
  - Token metadata APIs  
  - Contract scanners  
  - Risk flags

---

## Getting Started

```bash
git clone https://github.com/EremosCore/Eremos.git
cd Eremos
npm install
```

Set up your environment:

```bash
cp .env.example .env.local
npm run dev
```

---

## Key Folders

- `/agents` - Agent templates + logic  
- `/utils` - Shared signal/logging utilities  
- `/types` - TypeScript interfaces + definitions  
- `/scripts` - Bootstrap and dev scripts  
- `/docs` - Swarm structure, architecture, signal taxonomy

---

## Contributing

We’re open to contributors.  
If you know TypeScript and like agent-based systems, check `example.ts` and build your own observer.

---

## License

MIT © Eremos

---

## Links

- **Twitter:** [@EremosCore](https://x.com/EremosCore)  
- **Website:** Coming soon

_Maintained by the Eremos Core team._
