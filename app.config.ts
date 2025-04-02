export default defineAppConfig({
  title: 'RunarAI Link',
  email: 'contact@runarai.com',
  github: 'https://github.com/runarai/link-shortener',
  twitter: 'https://twitter.com/runarai',
  telegram: 'https://t.me/runarai',
  mastodon: 'https://mastodon.social/@runarai',
  blog: 'https://runarai.com/blog',
  description: 'A Simple / Speedy / Secure Link Shortener with Analytics for RunarAI',
  image: 'https://framerusercontent.com/images/ZhKBdpcQy0RqTHUnBRPF9Orv0.png',
  previewTTL: 300, // 5 minutes
  slugRegex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/i,
  reserveSlug: [
    'dashboard',
  ],
})