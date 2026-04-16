
---

## 4. `docs/02-vercel-deployment/configuration.md`

```markdown
---
sidebar_position: 2
title: "Vercel Configuration Guide"
---

# Vercel Deployment Configuration

## Prerequisites

- Vercel account (free tier)
- GitHub repository connected
- `vercel` CLI installed locally

## Step 1: Initialize Vercel Project

```bash
# Install Vercel CLI
npm i -g vercel

# Link local project
vercel link

# You'll be prompted for:
# ? Set up “~/my-devops-docs”? [Y/n] y
# ? Which scope? Select your account
# ? Link to existing project? [Y/n] n
# ? What's your project's name? my-devops-docs
# ? In which directory is your code? ./