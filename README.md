# Womberb of the Day

A daily proverb generator built from a curated dictionary of portmanteau words coined by [@professorsendy](https://www.instagram.com/professorsendy).

Each day, an AI model selects a handful of words from the dictionary and generates a new saying — delivered with complete deadpan sincerity, like a fortune cookie written by someone with a very specific vocabulary.

Live at **[womberb.com](https://womberb.com)**.

---

## How it works

This repository contains only the static site (`index.html` and `daily.json`). A separate private repository handles generation — it runs a GitHub Actions workflow each night that picks words, calls the Claude API, and pushes the resulting saying back here.
