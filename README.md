# DarcOS - Web-Based OS for Exploring DARCY128 ISA

A web-based operating system designed for exploring the novel DARCY128 ISA (Instruction Set Architecture) and HIPS128 processor architecture. Inspired by 32-bit MIPS instructions but evolving into a 128-bit processor, DarcOS serves as an educational platform for understanding theoretical 128-bit processor concepts.

## 📊 Processor Evolution Analysis

For a comprehensive analysis of the theoretical benefits of 128-bit processor architecture, see our detailed analysis:

- **[Processor Evolution Analysis](docs/processor-evolution-analysis.md)** - Complete technical analysis
- **[Web Analysis Page](https://uw-rizzlers.netlify.app/#/analysis)** - Interactive web version

This analysis covers:
- Historical context of 32-bit to 64-bit transition
- Theoretical benefits of 128-bit architecture
- Specific domain applications (AI/ML, Cryptography, Scientific Computing)
- Performance projections and quantitative analysis
- When 128-bit architecture would actually matter

## 🚀 DARCY128 Complete Toolchain

The complete implementation ecosystem for the DARCY128 processor:

- **[DARCY128-Emulator](https://github.com/codejedi-ai/DARCY128-Emulator)** - Core processor emulator with register state viewer
- **[CS241-wlp4-compile-pipeline](https://github.com/codejedi-ai/CS241-wlp4-compile-pipeline)** - WLP4 → Assembly compiler

### Complete Development Pipeline:
```
WLP4 Source Code → WLP4 Compiler → Assembly → Machine Code → DARCY128 Emulator (with Register State UI)
```

These repositories contain the complete toolchain that brings the theoretical DARCY128 architecture to life, with live register state inspection for learning and debugging.

## Usage

```bash
$ npm install

$ npm start
```

## Directories

```md
.
├── README.md
├── ice.config.mts                  # The project config.
├── package.json
├── .browserslistrc                 # Browsers that support.
├── public                          # Static files.
├── src                             # Application source code.
│   ├── app.ts                      # The app entry.
│   ├── assets                      # Assets directory.
│   ├── document.tsx                # The document entry.
│   ├── components                  # Components directory.
│   ├── pages                       # Pages directory.
│   │   ├── index.module.css        # Index page style.
│   │   └── index.tsx               # Index page component.
│   └── typings.d.ts                # The type definition.
└── tsconfig.json
```

> Note: The resources in `public` directory will be completely copied to the `output` directory during the build phase, and the filename will not be changed.

For more detail, please visit [docs](https://v3.ice.work/).
