/**
 * ============================================================
 * DEVRESOURCE HUB — MAIN SCRIPT
 * ============================================================
 * Handles:
 *  - Rendering categories & resource cards
 *  - Search filtering (debounced)
 *  - Level filters
 *  - Smooth scrolling & active nav
 *  - Counter animations
 *  - Back-to-top button
 *  - Mobile nav toggle
 * ============================================================
 */

(function () {
  'use strict';

  // ============ STATE ============
  let searchQuery = '';
  let activeLevelFilter = 'all';

  // ============ DOM REFS ============
  const categoryChips = document.getElementById('categoryChips');
  const resourcesMain = document.getElementById('resourcesMain');
  const searchInput = document.getElementById('searchInput');
  const searchClear = document.getElementById('searchClear');
  const searchFilters = document.getElementById('searchFilters');
  const searchResultsInfo = document.getElementById('searchResultsInfo');
  const backToTop = document.getElementById('backToTop');
  const navbar = document.getElementById('navbar');
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  // ============ HELPERS ============
  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function getTotalResources() {
    return RESOURCE_DATA.reduce((sum, cat) => sum + cat.resources.length, 0);
  }

  function normalize(str) {
    return (str || '').toLowerCase().trim();
  }

  function matchesSearch(resource, category) {
    if (!searchQuery) return true;
    const q = normalize(searchQuery);
    const haystack = [
      resource.title,
      resource.desc,
      category.title,
      category.desc,
      ...(resource.tags || [])
    ].map(normalize).join(' ');
    return haystack.includes(q);
  }

  function matchesLevel(resource) {
    if (activeLevelFilter === 'all') return true;
    if (activeLevelFilter === 'free') return resource.level === 'free';
    if (activeLevelFilter === 'paid') return resource.level === 'paid';
    if (activeLevelFilter === 'beginner') return resource.level === 'free' || resource.level === 'beginner';
    if (activeLevelFilter === 'intermediate') return resource.level === 'intermediate' || resource.level === 'free';
    if (activeLevelFilter === 'advanced') return resource.level === 'advanced' || resource.level === 'paid';
    return true;
  }

  // ============ RENDER: CATEGORY CHIPS ============
  function renderCategoryChips() {
    if (!categoryChips) return;
    categoryChips.innerHTML = RESOURCE_DATA.map(cat => `
      <a href="#cat-${cat.id}" class="category-chip" data-cat="${cat.id}">
        <span class="chip-emoji">${cat.emoji}</span>
        <span>${escapeHtml(cat.title)}</span>
        <span class="chip-count">${cat.resources.length}</span>
      </a>
    `).join('');
  }

  // ============ RENDER: RESOURCE SECTIONS ============
  function renderResources(filteredData) {
    if (!resourcesMain) return;

    if (!filteredData.length) {
      resourcesMain.innerHTML = `
        <div class="container">
          <div class="empty-state">
            <div class="empty-icon">🔍</div>
            <div class="empty-title">No resources found</div>
            <div class="empty-desc">Try a different search term or filter.</div>
          </div>
        </div>
      `;
      return;
    }

    resourcesMain.innerHTML = filteredData.map(cat => `
      <section class="resource-section" id="cat-${cat.id}">
        <div class="container">
          <div class="resource-section-header">
            <div class="section-icon">${cat.emoji}</div>
            <div class="section-title-group">
              <h2 class="resource-section-title">${escapeHtml(cat.title)}</h2>
              <p class="resource-section-desc">${escapeHtml(cat.desc)}</p>
            </div>
            <span class="resource-count-badge">${cat.resources.length} resources</span>
          </div>
          <div class="resource-grid">
            ${cat.resources.map((r, i) => renderCard(r, i)).join('')}
          </div>
        </div>
      </section>
    `).join('');
  }

  function renderCard(r, index) {
    const levelClass = r.level === 'paid' ? 'paid' : 'free';
    const levelLabel = r.level === 'paid' ? 'Paid' : 'Free';
    const codeHtml = r.code ? `<span class="card-code">Code: ${escapeHtml(r.code)}</span>` : '';
    const tagsHtml = (r.tags || []).slice(0, 3).map(t => `<span class="card-tag">${escapeHtml(t)}</span>`).join('');

    return `
      <article class="resource-card" style="animation-delay: ${Math.min(index * 0.03, 0.3)}s">
        <div class="card-top">
          <h3 class="card-title">${escapeHtml(r.title)}</h3>
          <span class="card-badge badge-${levelClass}">${levelLabel}</span>
        </div>
        <p class="card-desc">${escapeHtml(r.desc)}</p>
        <div class="card-footer">
          <a href="${escapeHtml(r.link)}" target="_blank" rel="noopener noreferrer" class="card-link">
            Visit <span class="link-arrow">→</span>
          </a>
          <div class="card-tags">
            ${codeHtml}
            ${tagsHtml}
          </div>
        </div>
      </article>
    `;
  }

  // ============ FILTERING LOGIC ============
  function applyFilters() {
    const filtered = RESOURCE_DATA
      .map(cat => ({
        ...cat,
        resources: cat.resources.filter(r => matchesSearch(r, cat) && matchesLevel(r))
      }))
      .filter(cat => cat.resources.length > 0);

    renderResources(filtered);
    updateResultsInfo(filtered);
  }

  function updateResultsInfo(filtered) {
    if (!searchResultsInfo) return;
    const total = filtered.reduce((sum, c) => sum + c.resources.length, 0);
    if (searchQuery || activeLevelFilter !== 'all') {
      searchResultsInfo.textContent = `Showing ${total} resource${total !== 1 ? 's' : ''}${searchQuery ? ` for "${searchQuery}"` : ''}${activeLevelFilter !== 'all' ? ` · ${activeLevelFilter}` : ''}`;
    } else {
      searchResultsInfo.textContent = '';
    }
  }

  // ============ SEARCH (DEBOUNCED) ============
  let searchTimeout;
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      searchClear.classList.toggle('visible', searchQuery.length > 0);
      clearTimeout(searchTimeout);
      searchTimeout = setTimeout(applyFilters, 150);
    });
  }

  if (searchClear) {
    searchClear.addEventListener('click', () => {
      searchInput.value = '';
      searchQuery = '';
      searchClear.classList.remove('visible');
      applyFilters();
      searchInput.focus();
    });
  }

  // ============ LEVEL FILTERS ============
  if (searchFilters) {
    searchFilters.addEventListener('click', (e) => {
      const btn = e.target.closest('.filter-chip');
      if (!btn) return;
      searchFilters.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
      btn.classList.add('active');
      activeLevelFilter = btn.dataset.filter;
      applyFilters();
    });
  }

  // ============ SMOOTH SCROLL & ACTIVE NAV ============
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href^="#"]');
    if (!link) return;
    const targetId = link.getAttribute('href');
    if (targetId === '#' || targetId === '#home') return;
    const target = document.querySelector(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Close mobile nav
      if (navLinks) navLinks.classList.remove('open');
      if (navToggle) navToggle.classList.remove('active');
    }
  });

  // ============ MOBILE NAV TOGGLE ============
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      navToggle.classList.toggle('active');
    });
  }

  // ============ NAVBAR SCROLL EFFECT ============
  let lastScrollY = 0;
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (navbar) navbar.classList.toggle('scrolled', y > 50);
    if (backToTop) backToTop.classList.toggle('visible', y > 600);
    lastScrollY = y;
  }, { passive: true });

  // ============ BACK TO TOP ============
  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ============ COUNTER ANIMATION ============
  function animateCounters() {
    document.querySelectorAll('.stat-number').forEach(el => {
      const target = parseInt(el.dataset.count, 10);
      if (isNaN(target)) return;
      let current = 0;
      const step = Math.max(1, Math.ceil(target / 60));
      const timer = setInterval(() => {
        current += step;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        el.textContent = current;
      }, 20);
    });
  }

  // ============ INIT ============
  function init() {
    renderCategoryChips();
    renderResources(RESOURCE_DATA);
    updateResultsInfo(RESOURCE_DATA);

    // Animate counters when hero is visible
    const heroStats = document.querySelector('.hero-stats');
    if (heroStats && 'IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animateCounters();
            observer.disconnect();
          }
        });
      }, { threshold: 0.3 });
      observer.observe(heroStats);
    } else {
      animateCounters();
    }

    // Update total count in hero badge (if 340+)
    const total = getTotalResources();
    const badge = document.querySelector('.hero-badge');
    if (badge && total > 0) {
      badge.textContent = `✦ ${total}+ Curated Resources`;
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();