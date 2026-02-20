# Copilot Instructions — Design Philosophy

> Reference this document when improving or extending the instruction files.

---

## 🎯 CORE GOAL

Instructions exist to **maximize accuracy and depth** while **minimizing token cost**.

The AI is trained on general knowledge, common patterns, and standard conventions. Instructions should NOT reteach what AI model training typically already covers. They should ONLY specify:

1. **What's different** about this project from standard patterns
2. **What causes errors** that training-based assumptions would create
3. **How to behave** when the AI's optimization for speed conflicts with user's need for correctness

---

## 📐 ARCHITECTURE

```
copilot-instructions.md     # ALWAYS LOADED - Behavioral protocol only
base-theme-instructions.md  # Theme structure, component catalog
markup-instructions.md      # States, modifiers, non-obvious patterns
bs5-theming-instructions.md # Theme-specific gotchas that break BS5 defaults
theme-override-instructions.md # Legitimate vs garbage class evaluation
script-instructions.md      # Interactive component JS requirements
```

### Main File (copilot-instructions.md)
- Behavioral enforcement (verification workflow, psychology)
- Quality rules that counter the AI's speed-optimization tendencies
- Session calibration to detect low-quality pattern-matching mode
- Does NOT contain technical component details

### Task-Specific Files
- Loaded based on request type
- Contain only theme-specific, non-obvious information
- Assume BS5 knowledge exists from training

---

## 🚫 WHAT TO EXCLUDE

### Don't Document Obvious Conventions
- BS5 spacing scale (p-1 through p-5)
- BS5 breakpoints (sm, md, lg, xl)
- Standard CSS cascade behavior
- Common state pseudo-classes (:hover, :focus)
- Standard DOM API methods

### Don't Add Verbose Examples
If a pattern is clear from one line, don't add 10 lines of HTML.
Token cost of holding context > value of redundant examples.

### Don't Duplicate Between Files
Each piece of information lives in ONE place.

---

## ✅ WHAT TO INCLUDE

### Theme-Specific Deviations
Where StoneWick behaves differently than BS5 defaults:
- Gutter system overridden
- Heading colors don't inherit
- Component backgrounds override section text color

### Non-Obvious Requirements
- `card-benefit` requires utility classes
- `card-feature` uses h5 not h4
- `metric-item` always has white bg regardless of section

### State Classes Unique to Theme
- `.is-active`, `.featured`, `.has-image`, `.playing`, `.completed`
- These aren't BS5 standard and need documentation

### Garbage Class Replacement Table
Mapping of common garbage → theme equivalent (compact table format)

### Behavioral Enforcement
- Verification workflow (search → read → plan → execute → verify)
- Psychology notes about AI failure modes
- Session quality detection

---

## 💡 PHILOSOPHY: AI OPTIMIZATION vs USER NEEDS

AI systems are optimized for throughput/speed. This creates:
- Pattern-completion instead of verification
- Fast responses that skip reading actual files
- Confident statements before confirming completeness

Instructions counter this by:
- Framing tasks as complex (triggers deeper reasoning)
- Requiring explicit verification steps
- Calling out the psychology of why errors happen
- Providing detection signals for low-quality sessions

---

## 📝 WHEN UPDATING INSTRUCTIONS

1. **Is this obvious from BS5 training?** → Don't add it
2. **Does this cause errors unique to this project?** → Add it
3. **Is this behavioral (how to work) or technical (what exists)?** → Put in correct file
4. **Can this be a table instead of prose?** → Use table
5. **Is this already documented elsewhere?** → Don't duplicate
6. **Does the example add clarity or just tokens?** → Only keep if clarifying

---

## 🔑 THE CRITICAL RULES (Always Prominent)

These cause the most errors and must stay front-and-center:

1. **Component bg > Section bg** — Card's own background determines text color, not the section it's in

2. **Verify Before Action** — Search for ALL instances with line numbers before fixing anything

3. **Verify After Action** — Confirm old pattern returns 0, new pattern returns expected count

4. **Custom Classes Are Garbage** — Unless defined in theme or brand CSS

---

## 📊 METRICS

Good instructions:
- **Lean**: ~400 total lines across all files (not 1400)
- **Focused**: Only theme-specific content
- **Behavioral**: Main file enforces correct working patterns
- **Partitioned**: Technical details isolated by concern

Signs instructions need trimming:
- Explaining BS5 basics
- Multiple full HTML examples for obvious patterns
- Same information in multiple files
- Prose where a table would suffice
