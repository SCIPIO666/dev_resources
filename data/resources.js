/**
 * ============================================================
 * DEVRESOURCE HUB — MASTER RESOURCE DATA
 * ============================================================
 * Every resource from the master list, categorized and tagged.
 * 
 * Card schema:
 * {
 *   title:    string  — resource name
 *   desc:     string  — short description
 *   link:     string  — URL
 *   level:    'free' | 'paid' | 'beginner' | 'intermediate' | 'advanced'
 *   code:     string  — optional discount code
 *   tags:     string[] — optional tags
 * }
 * ============================================================
 */

const RESOURCE_DATA = [

  // ============================================================
  // 1. HOSTING & DEPLOYMENT
  // ============================================================
  {
    id: 'hosting',
    title: 'Hosting & Deployment',
    emoji: '🚀',
    desc: 'Platforms to deploy and host your projects for free or cheap.',
    resources: [
      { title: 'GitHub Pages', desc: 'Best for simple static websites & portfolios.', link: 'https://pages.github.com', level: 'free', tags: ['static', 'portfolio'] },
      { title: 'Heroku', desc: 'Easy backend + app deployment.', link: 'https://heroku.com', level: 'free',