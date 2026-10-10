import { spawn } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

const chromePath = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const port = 9225;

const chromeProc = spawn(chromePath, [
  '--headless=new',
  `--remote-debugging-port=${port}`,
  '--disable-gpu',
  '--no-first-run',
  '--no-default-browser-check',
  'about:blank',
]);

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function main() {
  await wait(1200);

  // Create target
  const newRes = await fetch(`http://127.0.0.1:${port}/json/new?http://localhost:5174`, {
    method: 'PUT',
  });
  const page = await newRes.json();
  const ws = new WebSocket(page.webSocketDebuggerUrl);

  let id = 1;
  const callbacks = new Map();

  function send(method, params = {}) {
    return new Promise((resolve, reject) => {
      const msgId = id++;
      callbacks.set(msgId, { resolve, reject });
      ws.send(JSON.stringify({ id: msgId, method, params }));
    });
  }

  ws.onmessage = (event) => {
    const data = JSON.parse(event.data);
    if (data.id && callbacks.has(data.id)) {
      const cb = callbacks.get(data.id);
      callbacks.delete(data.id);
      if (data.error) cb.reject(new Error(JSON.stringify(data.error)));
      else cb.resolve(data.result);
    }
  };

  await new Promise((resolve) => (ws.onopen = resolve));

  await send('Page.enable');
  await send('DOM.enable');
  await wait(1000);

  const outDir = '/Users/ho/.gemini/antigravity/brain/aaf12f62-a304-4e23-a375-dee3ab806e3e/screenshots';
  const localDir = '/Users/ho/Documents/Codex/2026-09-23/qu/work/miller-greiseland-apertura/screenshots';
  fs.mkdirSync(outDir, { recursive: true });
  fs.mkdirSync(localDir, { recursive: true });

  // 1. Desktop Viewport (1280x900)
  console.log('Capturing Desktop...');
  await send('Emulation.setDeviceMetricsOverride', {
    width: 1280,
    height: 900,
    deviceScaleFactor: 1,
    mobile: false,
  });
  await wait(500);

  const desktopShot = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync(path.join(outDir, 'desktop.png'), Buffer.from(desktopShot.data, 'base64'));
  fs.writeFileSync(path.join(localDir, 'desktop.png'), Buffer.from(desktopShot.data, 'base64'));

  const desktopFullShot = await send('Page.captureScreenshot', {
    format: 'png',
    captureBeyondViewport: true,
  });
  fs.writeFileSync(path.join(outDir, 'desktop_full.png'), Buffer.from(desktopFullShot.data, 'base64'));
  fs.writeFileSync(path.join(localDir, 'desktop_full.png'), Buffer.from(desktopFullShot.data, 'base64'));

  // 2. Mobile Viewport (390x844 - iPhone standard)
  console.log('Capturing Mobile 390px...');
  await send('Emulation.setDeviceMetricsOverride', {
    width: 390,
    height: 844,
    deviceScaleFactor: 2,
    mobile: true,
  });
  await wait(500);

  const mobileShot = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync(path.join(outDir, 'mobile.png'), Buffer.from(mobileShot.data, 'base64'));
  fs.writeFileSync(path.join(localDir, 'mobile.png'), Buffer.from(mobileShot.data, 'base64'));

  const mobileFullShot = await send('Page.captureScreenshot', {
    format: 'png',
    captureBeyondViewport: true,
  });
  fs.writeFileSync(path.join(outDir, 'mobile_full.png'), Buffer.from(mobileFullShot.data, 'base64'));
  fs.writeFileSync(path.join(localDir, 'mobile_full.png'), Buffer.from(mobileFullShot.data, 'base64'));

  console.log('Screenshots captured successfully!');
  ws.close();
  chromeProc.kill();
  process.exit(0);
}

main().catch((err) => {
  console.error(err);
  chromeProc.kill();
  process.exit(1);
});
