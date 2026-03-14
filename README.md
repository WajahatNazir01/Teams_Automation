<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Teams Auto-Joiner — README</title>
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600&family=Sora:wght@300;400;600;700&display=swap" rel="stylesheet">
<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --bg:       #0e1117;
    --surface:  #161b27;
    --card:     #1c2333;
    --border:   #2a3347;
    --teal:     #00d4aa;
    --teal-dim: #00d4aa22;
    --blue:     #4d9fff;
    --text:     #dce3f0;
    --muted:    #7a88a8;
    --mono:     'JetBrains Mono', monospace;
    --sans:     'Sora', sans-serif;
  }

  body {
    background: var(--bg);
    color: var(--text);
    font-family: var(--sans);
    font-size: 13.5px;
    line-height: 1.65;
    padding: 44px 52px;
    max-width: 860px;
    margin: 0 auto;
  }

  /* ── HEADER ── */
  header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 24px;
    padding-bottom: 20px;
    border-bottom: 1px solid var(--border);
    margin-bottom: 26px;
  }
  .title-block h1 {
    font-size: 22px;
    font-weight: 700;
    letter-spacing: -0.5px;
    color: #fff;
    line-height: 1.2;
  }
  .title-block h1 span { color: var(--teal); }
  .title-block p {
    color: var(--muted);
    font-size: 12.5px;
    margin-top: 5px;
    font-weight: 300;
  }
  .badges { display: flex; gap: 6px; flex-wrap: wrap; padding-top: 3px; }
  .badge {
    font-family: var(--mono);
    font-size: 10px;
    padding: 3px 8px;
    border-radius: 4px;
    border: 1px solid var(--border);
    color: var(--muted);
    white-space: nowrap;
  }
  .badge.green { border-color: #2a4a3a; color: #4ade80; background: #0d2318; }
  .badge.blue  { border-color: #1e3555; color: var(--blue);  background: #0d1e33; }

  /* ── SECTIONS ── */
  section { margin-bottom: 22px; }

  h2 {
    font-size: 11px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    color: var(--teal);
    margin-bottom: 10px;
  }

  p { color: var(--text); font-size: 13px; font-weight: 300; }

  /* ── TWO-COL GRID ── */
  .grid2 { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }

  .card {
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 12px 14px;
  }
  .card-title {
    font-size: 11.5px;
    font-weight: 600;
    color: #fff;
    margin-bottom: 4px;
  }
  .card p { font-size: 12px; color: var(--muted); font-weight: 300; }

  /* ── FLOW ── */
  .flow {
    display: flex;
    align-items: center;
    gap: 0;
    flex-wrap: wrap;
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 14px 16px;
    row-gap: 6px;
  }
  .step {
    font-family: var(--mono);
    font-size: 11px;
    color: var(--text);
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 5px;
    padding: 4px 9px;
    white-space: nowrap;
  }
  .arrow {
    color: var(--teal);
    font-size: 12px;
    padding: 0 5px;
    opacity: 0.6;
  }

  /* ── CODE ── */
  .code-block {
    background: var(--surface);
    border: 1px solid var(--border);
    border-left: 3px solid var(--teal);
    border-radius: 6px;
    padding: 12px 16px;
    font-family: var(--mono);
    font-size: 11.5px;
    color: #a8d8c8;
    line-height: 1.8;
    overflow-x: auto;
  }
  .code-block .c { color: var(--muted); }
  .code-block .k { color: var(--blue); }
  .code-block .s { color: #f9c74f; }

  /* ── TABLE ── */
  table { width: 100%; border-collapse: collapse; font-size: 12px; }
  th {
    text-align: left;
    font-family: var(--mono);
    font-size: 10.5px;
    font-weight: 600;
    color: var(--muted);
    padding: 6px 10px;
    border-bottom: 1px solid var(--border);
    text-transform: uppercase;
    letter-spacing: 0.8px;
  }
  td {
    padding: 7px 10px;
    border-bottom: 1px solid #1e2739;
    color: var(--text);
    font-weight: 300;
  }
  td:first-child { font-family: var(--mono); font-size: 11px; color: var(--teal); }
  tr:last-child td { border-bottom: none; }

  /* ── ALERT ── */
  .alert {
    background: #1a1f0e;
    border: 1px solid #3a4a1a;
    border-left: 3px solid #8bc34a;
    border-radius: 6px;
    padding: 10px 14px;
    font-size: 12px;
    color: #b8d98a;
    font-weight: 300;
  }

  /* ── DIVIDER ── */
  hr { border: none; border-top: 1px solid var(--border); margin: 4px 0 22px; }

  /* ── FOOTER ── */
  footer {
    margin-top: 28px;
    padding-top: 14px;
    border-top: 1px solid var(--border);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  footer span { font-size: 11px; color: var(--muted); font-family: var(--mono); }
  .dot { color: var(--teal); margin: 0 6px; }
</style>
</head>
<body>

<!-- HEADER -->
<header>
  <div class="title-block">
    <h1>🤖 Teams <span>Auto-Joiner</span></h1>
    <p>Joins your MS Teams class, stays present, and auto-rejoins if kicked out.</p>
  </div>
  <div>
    <div class="badges">
      <span class="badge green">Node 18+</span>
      <span class="badge green">Playwright</span>
      <span class="badge blue">Windows</span>
      <span class="badge">MIT License</span>
    </div>
  </div>
</header>

<!-- ABOUT -->
<section>
  <h2>About</h2>
  <p>A Playwright-based bot that solves a real student problem — Teams meetings where misconfigured settings let participants remove each other. This bot joins your class silently, with camera and mic off, stays for the full duration, and automatically rejoins within 30 seconds if removed. Runs on a schedule via Windows Task Scheduler with zero manual interaction.</p>
</section>

<!-- HOW IT WORKS -->
<section>
  <h2>How It Works</h2>
  <div class="flow">
    <span class="step">Load session</span><span class="arrow">→</span>
    <span class="step">teams.microsoft.com</span><span class="arrow">→</span>
    <span class="step">Redirect to channel</span><span class="arrow">→</span>
    <span class="step">Dismiss popups</span><span class="arrow">→</span>
    <span class="step">Click Join</span><span class="arrow">→</span>
    <span class="step">Mute cam/mic</span><span class="arrow">→</span>
    <span class="step">Join now</span><span class="arrow">→</span>
    <span class="step">✓ In meeting</span>
  </div>
  <p style="margin-top:8px; font-size:12px; color:#7a88a8;">A watchdog loop runs every 30s and clicks Rejoin automatically if the button appears.</p>
</section>

<!-- SETUP -->
<section>
  <h2>Quick Setup</h2>
  <div class="code-block">
    <span class="c"># 1. Install</span><br>
    npm install &amp;&amp; npx playwright install chromium<br><br>
    <span class="c"># 2. Save your Teams login (one-time)</span><br>
    node saveSession.js<br><br>
    <span class="c"># 3. Run</span><br>
    node index.js
  </div>
</section>

<!-- FEATURES + POPUPS -->
<section>
  <h2>Features &amp; Popup Handling</h2>
  <div class="grid2">
    <div class="card">
      <div class="card-title">✅ What it does</div>
      <p>Joins automatically · Stays full session · Auto-rejoins if kicked · Camera &amp; mic off · Schedulable · Debug screenshot on error</p>
    </div>
    <div class="card">
      <div class="card-title">🛡️ Dialogs handled</div>
      <p>"Open Microsoft Teams?" blocked · "Continue on browser" clicked · "No audio/video" clicked · Rejoin detected every 30s</p>
    </div>
  </div>
</section>

<!-- CONFIG TABLE -->
<section>
  <h2>Configuration</h2>
  <div class="card" style="padding:0; overflow:hidden;">
    <table>
      <tr><th>Option</th><th>Default</th><th>Description</th></tr>
      <tr><td>CHANNEL_URL</td><td>—</td><td>Your Teams channel deep link (right-click channel → Get link)</td></tr>
      <tr><td>headless</td><td>false</td><td>Set true to run invisibly in the background</td></tr>
      <tr><td>slowMo</td><td>100ms</td><td>Delay between actions — increase on slow machines</td></tr>
      <tr><td>Duration</td><td>80 min</td><td>How long the bot stays in the meeting</td></tr>
      <tr><td>Rejoin interval</td><td>30s</td><td>Watchdog check frequency</td></tr>
    </table>
  </div>
</section>

<!-- TASK SCHEDULER -->
<section>
  <h2>Schedule with Windows Task Scheduler</h2>
  <p style="margin-bottom:10px;">Task Scheduler → Create Basic Task → Weekly trigger (your class time) → Action: <code style="font-family:var(--mono);font-size:11px;color:var(--teal);">node.exe</code> · Arguments: <code style="font-family:var(--mono);font-size:11px;color:var(--teal);">index.js</code> · Start in: your project folder. The bot joins class with zero clicks from that point on.</p>
  <div class="alert">
    ⚠️ &nbsp;Never commit <code style="font-family:var(--mono);">teamsSession.json</code> to GitHub — it contains your login cookies. It is already in <code style="font-family:var(--mono)">.gitignore</code>.
  </div>
</section>

<!-- FOOTER -->
<footer>
  <span>Built with Playwright + Node.js</span>
  <span>MIT License<span class="dot">·</span>teams-auto-joiner</span>
</footer>

</body>
</html>
