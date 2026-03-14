# 🤖 Teams Auto-Joiner

Joins your MS Teams class, stays present, and auto-rejoins if kicked out.

---

### Badges

<span style="background:#0d2318; color:#4ade80; font-family:monospace; padding:2px 6px; border-radius:4px;">Node 18+</span>
<span style="background:#0d1e33; color:#4d9fff; font-family:monospace; padding:2px 6px; border-radius:4px;">Playwright</span>
<span style="background:#161b27; color:#dce3f0; font-family:monospace; padding:2px 6px; border-radius:4px;">Windows</span>
<span style="background:#161b27; color:#dce3f0; font-family:monospace; padding:2px 6px; border-radius:4px;">MIT License</span>

---

## About

A Playwright-based bot that solves a real student problem — Teams meetings where misconfigured settings let participants remove each other.  
This bot joins your class silently, with camera and mic off, stays for the full duration, and automatically rejoins within 30 seconds if removed.  
Runs on a schedule via Windows Task Scheduler with zero manual interaction.

---

## How It Works

**Flow:**

`Load session` → `teams.microsoft.com` → `Redirect to channel` → `Dismiss popups` → `Click Join` → `Mute cam/mic` → `Join now` → `✓ In meeting`

> A watchdog loop runs every 30s and clicks Rejoin automatically if the button appears.

---

## Quick Setup

```bash
# 1. Install
npm install && npx playwright install chromium

# 2. Save your Teams login (one-time)
node saveSession.js

# 3. Run
node joinTeams.js
