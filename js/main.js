/* ============================================================
   XPLORE KAPIL — Main Logic (Homepage)
   ============================================================ */

(function() {
  'use strict';

  // ===== UTILITY =====
  function fmtPrice(n) {
    return '₹' + n.toLocaleString('en-IN');
  }

  function rating(item) {
    return item.rating ? '★ ' + item.rating.toFixed(1) : '';
  }

  // ===== RENDER FUNCTIONS =====

  // Feature Split (stays / food)
  function renderFeatureSplit(containerId, items, type) {
    const el = document.getElementById(containerId);
    if (!el || !items || !items.length) return;

    const first = items[0];
    const rest = items.slice(1, 4);

    const hero = `
      <a class="feature-hero" href="#">
        <img src="${first.image}" alt="${first.name}">
        <div class="feature-copy">
          <span class="eyebrow on-dark">${first.category}</span>
          <h3>${first.name}</h3>
          <div class="meta-row">
            <span>${rating(first)}</span>
            <span>${first.location}</span>
            <span>${type === 'stays' ? fmtPrice(first.price) + ' / night' : first.price}</span>
          </div>
        </div>
      </a>`;

    const list = rest.map(function(item) {
      return `
        <a class="feature-row" href="#">
          <img src="${item.image}" alt="${item.name}">
          <div class="feature-row-copy">
            <h3>${item.name}</h3>
            <p class="meta">${item.category} · ${item.location}</p>
            <p class="price">${type === 'stays' ? fmtPrice(item.price) + ' / night' : item.price}</p>
          </div>
        </a>`;
    }).join('');

    el.innerHTML = hero + '<div class="feature-list">' + list + '</div>';
  }

  // Activities
  function renderActivities() {
    const el = document.getElementById('activitiesScroll');
    if (!el) return;

    el.innerHTML = DATA.activities.map(function(item) {
      return `
        <a class="activity-item" href="#">
          <div class="media"><img src="${item.image}" alt="${item.name}"></div>
          <h3>${item.name}</h3>
          <p class="meta">${item.category} · ${item.duration} · ${fmtPrice(item.price)}</p>
          <div style="margin-top:6px;"><span class="badge-verified" style="font-size:9px; background:var(--terracotta);">
            <svg viewBox="0 0 20 20" width="10" height="10"><path fill="white" d="M10 0C4.5 0 0 4.5 0 10s4.5 10 10 10 10-4.5 10-10S15.5 0 10 0zm-1 15l-4-4 1.4-1.4L9 12.2l5.6-5.6L16 8l-7 7z"/></svg>
            Local verified
          </span></div>
        </a>`;
    }).join('');
  }

  // Local Insider
  function renderInsider() {
    const featureEl = document.getElementById('insiderFeature');
    const rowEl = document.getElementById('insiderRow');
    if (!featureEl || !rowEl) return;

    const first = DATA.localGuide[0];
    const rest = DATA.localGuide.slice(1, 5);

    featureEl.innerHTML = `
      <div class="insider-feature">
        <img src="${first.image}" alt="${first.title}">
        <div class="insider-feature-copy">
          <span class="eyebrow on-dark">${first.tag}</span>
          <h3>${first.title}</h3>
          <p>${first.blurb}</p>
          <div style="margin-top:16px;"><span class="badge-verified" style="font-size:10px;">
            <svg viewBox="0 0 20 20" width="12" height="12"><path fill="white" d="M10 0C4.5 0 0 4.5 0 10s4.5 10 10 10 10-4.5 10-10S15.5 0 10 0zm-1 15l-4-4 1.4-1.4L9 12.2l5.6-5.6L16 8l-7 7z"/></svg>
            Verified by local coordinators
          </span></div>
        </div>
      </div>`;

    rowEl.innerHTML = rest.map(function(g) {
      return `
        <div class="insider-tile">
          <div class="media"><img src="${g.image}" alt="${g.title}"></div>
          <span class="eyebrow on-dark">${g.tag}</span>
          <h3>${g.title}</h3>
        </div>`;
    }).join('');
  }

  // Events
  function renderEvents() {
    const el = document.getElementById('eventsScroll');
    if (!el) return;

    const dateLabels = {
      ev1: { day: 'SAT', month: 'WEEKLY' },
      ev2: { day: '12–14', month: 'DEC' },
      ev3: { day: '24', month: 'AUG' }
    };

    el.innerHTML = DATA.events.map(function(ev) {
      const dl = dateLabels[ev.id] || { day: '—', month: '' };
      return `
        <div class="event-item">
          <div class="event-date"><div class="day">${dl.day}</div><div class="month">${dl.month}</div></div>
          <img src="${ev.image}" alt="${ev.name}">
          <div class="event-copy"><h3>${ev.name}</h3><p>${ev.location}</p></div>
        </div>`;
    }).join('');
  }

  // // Nearby
  // function renderNearby(cat) {
  //   const mapEl = document.getElementById('nearbyMap');
  //   const listEl = document.getElementById('nearbyList');
  //   if (!mapEl || !listEl) return;

  //   let items = [];
  //   if (cat === 'essentials') {
  //     items = DATA.essentials.map(function(x) {
  //       return { name: x.name, meta: x.category, loc: x.location };
  //     });
  //   } else if (cat === 'stays') {
  //     items = DATA.stays.slice(0, 4).map(function(x) {
  //       return { name: x.name, meta: x.category, loc: x.location };
  //     });
  //   } else if (cat === 'food') {
  //     items = DATA.food.slice(0, 4).map(function(x) {
  //       return { name: x.name, meta: x.category, loc: x.location };
  //     });
  //   } else if (cat === 'activities') {
  //     items = DATA.activities.slice(0, 4).map(function(x) {
  //       return { name: x.name, meta: x.category, loc: x.duration };
  //     });
  //   }

  //   const dists = ['180 m', '350 m', '420 m', '600 m'];
  //   const pins = [[28, 22], [52, 58], [70, 34], [38, 74]];

  //   listEl.innerHTML = items.map(function(it, i) {
  //     return `
  //       <div class="nearby-row">
  //         <div><b>${it.name}</b><div class="muted">${it.meta}${it.loc ? ' · ' + it.loc : ''}</div></div>
  //         <span class="dist">${dists[i] || '—'}</span>
  //       </div>`;
  //   }).join('');

  //   mapEl.innerHTML = items.map(function(it, i) {
  //     const [t, l] = pins[i % pins.length];
  //     return `<span class="nearby-pin" style="top:${t}%; left:${l}%;" title="${it.name}"></span>`;
  //   }).join('');
  // }

  // ===== HERO SEARCH =====
  function initHeroSearch() {
    const form = document.getElementById('heroSearch');
    const input = document.getElementById('heroSearchInput');

    if (form) {
      form.addEventListener('submit', function(e) {
        e.preventDefault();
        const q = input.value.trim();
        if (q) {
          const section = document.getElementById('explore-section');
          if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
          } else {
            window.location.href = '#explore-section';
          }
        }
      });
    }
  }

  // // ===== NEARBY TABS =====
  // function initNearbyTabs() {
  //   document.querySelectorAll('.nearby-tab').forEach(function(tab) {
  //     tab.addEventListener('click', function() {
  //       document.querySelectorAll('.nearby-tab').forEach(function(t) {
  //         t.classList.remove('active');
  //       });
  //       tab.classList.add('active');
  //       renderNearby(tab.dataset.cat);
  //     });
  //   });
  // }

  // ===== INIT =====
  document.addEventListener('DOMContentLoaded', function() {
    // Check if DATA is available
    if (typeof DATA === 'undefined') {
      console.warn('DATA not loaded. Check data.js path.');
      return;
    }

    // Render sections
    renderFeatureSplit('staysFeature', DATA.stays, 'stays');
    renderFeatureSplit('foodFeature', DATA.food, 'food');
    renderActivities();
    renderInsider();
    renderEvents();
    // renderNearby('essentials');

    // Initialize interactions
    initHeroSearch();
    // initNearbyTabs();

    // Handle explore section anchor
    if (window.location.hash.includes('explore-section')) {
      setTimeout(function() {
        const section = document.getElementById('explore-section');
        if (section) section.scrollIntoView({ behavior: 'smooth' });
      }, 400);
    }
  });

})();