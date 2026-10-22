# wizeyes.com

Marketing and policy site for the iPhone and iPad apps by WizEyes Tech Inc.
Each app gets its own page, built from a typed content file, plus a privacy
policy page and a Markdown version for AI assistants.

- Savings Room: [`/savings-room`](https://wizeyes.com/savings-room) ·
  [privacy](https://wizeyes.com/savings-room/privacy) ·
  [Markdown](https://wizeyes.com/savings-room.md)
- Spendwise: [`/spendwise`](https://wizeyes.com/spendwise) ·
  [privacy](https://wizeyes.com/spendwise/privacy) ·
  [Markdown](https://wizeyes.com/spendwise.md)
- Site index for AI assistants: [`/llms.txt`](https://wizeyes.com/llms.txt)

## Develop

```bash
npm install
npm run dev
```

Open http://localhost:3000/savings-room.

Copy lives in `content/`, page sections in `components/app-page/`, and each
app's routes in `app/<slug>/`. [AGENTS.md](AGENTS.md) explains the structure,
the rules for writing copy, and how to add the next app.

## Hosting and DNS

| What                            | Where                                                        |
| ------------------------------- | ------------------------------------------------------------ |
| Domain registration and renewal | Bravenet (registrant: WizEyes Tech Inc.)                     |
| DNS records                     | Vercel: team **Domains** → wizeyes.com                       |
| Website                         | Vercel project **wizeyes**                                   |
| Email (support@wizeyes.com)     | Google Workspace (MX, SPF, DKIM and DMARC records in Vercel) |

`wizeyes.com` serves the site; `www.wizeyes.com` redirects to it (308). The
canonical origin in `content/site.ts` must match. Add any new DNS record, such
as a verification TXT, in Vercel; the domain's nameservers at Bravenet are
`ns1.vercel-dns.com` and `ns2.vercel-dns.com`.
