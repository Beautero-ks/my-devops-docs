---
sidebar_position: 1
title: "CI/CD Architecture Overview"
description: "Complete architecture of our multi-platform deployment pipeline"
---

# CI/CD Pipeline Architecture

## Overview

This documentation site is itself deployed using the pipeline it describes. This **dogfooding** approach ensures the documentation stays accurate.

## Architecture Diagram

![Pipeline Architecture](/img/architecture/pipeline-flow.png)

*Figure 1: High-level architecture of the CI/CD pipeline*

## Core Components

| Component | Technology | Purpose |
|-----------|------------|---------|
| **Version Control** | GitHub | Source code & triggers |
| **CI/CD Engine** | GitHub Actions | Build & orchestration |
| **Build System** | Docusaurus | Static site generation |
| **Primary CDN** | Vercel | Production deployment |
| **Fallback CDN** | GitHub Pages | Backup deployment |

## Flow Description

1. **Developer pushes code** → `git push origin main`
2. **GitHub Actions trigger** → Webhook activates workflow
3. **Parallel execution** → Build + Test + Deploy jobs
4. **Vercel deployment** → CDN distribution (primary)
5. **GitHub Pages deployment** → Static hosting (fallback)

## Key Metrics

```yaml
Build Time: 45 seconds
Vercel Deploy: 30 seconds  
GH Pages Deploy: 20 seconds
Total Pipeline: ~95 seconds