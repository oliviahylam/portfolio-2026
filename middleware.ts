// Password protection for selected pages (runs on Vercel before anything is served).
// The password lives in a Vercel environment variable, never in this repo:
//   Vercel → Project → Settings → Environment Variables → PROTECTED_PASSWORD
// Until it's set, protected pages stay locked.
// To protect another page: add its page path and its media folder to `matcher`,
// and set `locked: true` in its frontmatter (shows the lock badge on the card).
import { next } from '@vercel/functions';

export const config = {
  matcher: ['/work/silverside-amazon', '/work/silverside-amazon/:path*', '/media/amazon/:path*'],
};

const COOKIE = 'pf_unlock';

async function token(password: string) {
  const data = new TextEncoder().encode(`portfolio-unlock:${password}`);
  const hash = await crypto.subtle.digest('SHA-256', data);
  return [...new Uint8Array(hash)].map((b) => b.toString(16).padStart(2, '0')).join('');
}

const esc = (s: string) => s.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);

function page(path: string, error = false) {
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="noindex"><title>Password protected</title>
<style>
  *{box-sizing:border-box} body{margin:0;min-height:100vh;display:grid;place-items:center;background:#0f0f10;color:#f2f2f2;font:16px/1.5 system-ui,-apple-system,sans-serif;padding:24px}
  form{width:min(380px,100%);display:grid;gap:14px}
  .eyebrow{font:12px ui-monospace,monospace;letter-spacing:.08em;text-transform:uppercase;color:#8a8a8f}
  h1{margin:0;font-size:28px;font-weight:500;letter-spacing:-.02em} p{margin:0;color:#a0a0a6;font-size:15px}
  input{width:100%;padding:12px 14px;border-radius:10px;border:1px solid #2a2a2e;background:#18181b;color:inherit;font:inherit}
  input:focus{outline:2px solid #8b8bff;outline-offset:1px}
  button{padding:12px 14px;border:0;border-radius:10px;background:#f2f2f2;color:#0f0f10;font:inherit;font-weight:500;cursor:pointer}
  .err{color:#ff8a7a;font-size:14px} a{color:#a0a0a6;font-size:14px}
</style></head><body>
<form method="POST" action="${esc(path)}">
  <span class="eyebrow">🔒 Client work</span>
  <h1>This project is password protected</h1>
  <p>It contains client work I can only share privately. Enter the password to view it, or <a href="mailto:oliviahylam@gmail.com?subject=Portfolio%20access" style="color:#f2f2f2">email me</a> for access.</p>
  <input type="password" name="password" placeholder="Password" autocomplete="current-password" autofocus required aria-label="Password">
  ${error ? '<span class="err">That password isn’t right. Try again.</span>' : ''}
  <button type="submit">View project</button>
  <a href="/">← Back to all work</a>
</form></body></html>`;
}

export default async function middleware(request: Request) {
  const url = new URL(request.url);
  const password = process.env.PROTECTED_PASSWORD;
  const expected = password ? await token(password) : null;
  const cookie = request.headers.get('cookie') ?? '';
  const has = cookie.split(/;\s*/).find((c) => c.startsWith(`${COOKIE}=`))?.slice(COOKIE.length + 1);

  if (expected && has === expected) return next();

  const isMedia = url.pathname.startsWith('/media/');
  if (isMedia) return new Response('Password required', { status: 401 });

  if (request.method === 'POST') {
    const form = await request.formData().catch(() => null);
    const tried = String(form?.get('password') ?? '');
    if (expected && tried && (await token(tried)) === expected) {
      return new Response(null, {
        status: 303,
        headers: {
          location: url.pathname,
          'set-cookie': `${COOKIE}=${expected}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=${60 * 60 * 24 * 30}`,
        },
      });
    }
    return new Response(page(url.pathname, true), { status: 401, headers: { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'no-store' } });
  }
  return new Response(page(url.pathname), { status: 401, headers: { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'no-store' } });
}
