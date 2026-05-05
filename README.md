# Wombo of the Day

## What is a Wombo?

A **wombo** is a made-up word created by combining two or more real words into a single, hilarious portmanteau. The term comes from a content creator on TikTok and Instagram who coined the format — blending words that, when fused together, produce something that is both immediately understandable and deeply funny.

### Examples

| Wombo | Components | Meaning |
|---|---|---|
| **Quiche** | Quirky + Niche | Something obscure, oddball, and proudly specific |
| **Peanemis** | Peak + Cinema + Analysis | An over-the-top, obsessive breakdown of a film |
| **Loreain** | Lore + Explain | To over-explain the backstory or mythology of something |

Wombos function as regular parts of speech — they can be adjectives, nouns, or verbs — and are designed to slot naturally into everyday sentences. For example:

> *"That was a very quiche peanemis of a very mid movie."*

---

## What This Project Does

**Wombo of the Day** is a personal API and dictionary project with two goals:

### 1. Build a Wombo Dictionary
A curated, structured dictionary of wombos sourced from the creator's content. Each entry captures:
- The wombo word itself
- The real words it combines
- A definition
- Its part of speech
- An example sentence

Words are stored at the **individual word level**, not as fixed phrases. This means `Quiche` and `Peanemis` are stored separately, allowing them to be recombined freely — just like real words in a real dictionary.

### 2. Generate a New Sentence Every Day
Using the dictionary as a source of truth, an AI model pulls a selection of wombos and generates a novel, funny sentence each day. The sentence is designed to use the words naturally and in context — not just randomly inserted.

---

## Project Structure

```
wombo-of-the-day/
├── wombos.json        # The wombo dictionary
├── add_wombo.py       # CLI tool for adding new entries
├── README.md          # This file
└── api/               # Go API (coming soon)
    └── main.go
```

---

## Guiding Principles

- **Word-level storage** — wombos are individual words, phrases are the AI's job
- **Human-curated** — entries are added manually to ensure quality and accuracy
- **Generative by design** — a small dictionary produces an effectively infinite number of sentences