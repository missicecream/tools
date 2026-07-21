(function () {
  const page = location.pathname.split('/').pop() || 'index.html';
  const guides = {
    'ClassTimer.html': 'ClassTimer-guide.html',
    'PST-Selector.html': 'PST-Selector-guide.html',
    'Process-Selector.html': 'Process-Selector-guide.html?v=072126I',
    'Heat-Log.html': 'Heat-Log-guide.html?v=072126F',
    'Churning.html': 'Churning-guide.html?v=072126H',
    'Overrun-Test.html': 'Overrun-Test-guide.html?v=072126H',
    'Meltdown-Test.html': 'Meltdown-Test-guide.html?v=072126F'
  };

  function makeHomeLink() {
    const link = document.createElement('a');
    link.className = 'back-link tools-home-link';
    link.href = 'index.html';
    link.setAttribute('aria-label', 'กลับหน้าหลัก');
    link.innerHTML = '<span class="tools-nav-icon" aria-hidden="true">⌂</span><span>หน้าหลัก</span>';
    return link;
  }

  function makeGuideLink(href) {
    const link = document.createElement('a');
    link.className = 'tool-guide-link';
    link.href = href;
    link.innerHTML = '<span class="tools-nav-icon tools-guide-icon" aria-hidden="true">?</span><span>คู่มือ</span>';
    return link;
  }

  function setCompactTopNavigation() {
    if (page === 'index.html') return;

    const container = document.querySelector('.container, .wrap, .sheet, main');
    const header = container && container.querySelector('header');
    if (!container || !header) return;

    let topbar = container.querySelector('.topbar');
    if (!topbar) {
      topbar = document.createElement('div');
      topbar.className = 'topbar tools-added-topbar';
      container.insertBefore(topbar, header);
    }

    let home = container.querySelector('a.back-link[href="index.html"], a.back-link[href="/class/index.html"]');
    if (!home) home = makeHomeLink();
    home.classList.add('tools-home-link');
    home.href = 'index.html';
    home.setAttribute('aria-label', 'กลับหน้าหลัก');
    home.innerHTML = '<span class="tools-nav-icon" aria-hidden="true">⌂</span><span>หน้าหลัก</span>';

    let guide = null;
    if (guides[page]) {
      guide = container.querySelector('.topbar a[href$="-guide.html"], header a[href$="-guide.html"]');
      if (!guide) guide = makeGuideLink(guides[page]);

      const oldWrapper = guide.parentElement;
      guide.classList.add('tool-guide-link');
      guide.href = guides[page];
      guide.innerHTML = '<span class="tools-nav-icon tools-guide-icon" aria-hidden="true">?</span><span>คู่มือ</span>';
      if (oldWrapper && oldWrapper !== topbar && oldWrapper !== container) {
        guide.remove();
        if (!oldWrapper.textContent.trim()) oldWrapper.remove();
      }
    }

    const returnLink = Array.from(container.querySelectorAll('a.back-link')).find(function (link) {
      return link !== home && !/index\.html(?:$|[?#])/.test(link.getAttribute('href') || '');
    });
    if (returnLink) {
      returnLink.classList.add('tools-return-link');
      returnLink.innerHTML = '<span class="tools-nav-icon" aria-hidden="true">←</span><span>เครื่องมือ</span>';
    }

    let group = topbar.querySelector('.tools-nav-group');
    if (!group) {
      group = document.createElement('nav');
      group.className = 'tools-nav-group';
      group.setAttribute('aria-label', 'ทางลัดของหน้า');
      topbar.appendChild(group);
    }
    if (returnLink) group.appendChild(returnLink);
    group.appendChild(home);
    if (guide) group.appendChild(guide);
  }

  function addBottomHomeButton() {
    if (page === 'index.html' || document.querySelector('.tools-bottom-nav')) return;

    const container = document.querySelector('.container, .wrap, .sheet, main');
    if (!container) return;

    const nav = document.createElement('nav');
    nav.className = 'tools-bottom-nav';
    nav.setAttribute('aria-label', 'กลับหน้าหลัก');
    nav.innerHTML = '<a class="tools-bottom-home" href="index.html">'
      + '<span class="tools-bottom-icon" aria-hidden="true">⌂</span>'
      + '<span class="tools-bottom-copy"><strong>กลับหน้าหลัก</strong><small>ดูเครื่องมือออนไลน์ทั้งหมด</small></span>'
      + '<span class="tools-bottom-arrow" aria-hidden="true">→</span>'
      + '</a>';

    const footer = document.querySelector('.site-footer');
    if (footer && footer.parentNode) {
      footer.parentNode.insertBefore(nav, footer);
    } else {
      container.appendChild(nav);
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.eyebrow').forEach(function (node) {
      node.textContent = 'Miss Icecream · Online Tools';
    });

    document.querySelectorAll('a[href="/class/index.html"]').forEach(function (link) {
      link.setAttribute('href', 'index.html');
    });
    document.querySelectorAll('a[href="/class/license.html"]').forEach(function (link) {
      link.setAttribute('href', 'license.html');
    });

    document.querySelectorAll('input[type="number"]').forEach(function (input) {
      input.setAttribute('inputmode', 'decimal');
    });

    document.querySelectorAll('.batchbar > label').forEach(function (label) {
      if (label.textContent.trim().toLowerCase().indexOf('batch') === 0) {
        label.textContent = 'Batch ที่กำลังใช้งาน';
      }
    });

    setCompactTopNavigation();
    addBottomHomeButton();

    const batchbar = document.querySelector('.batchbar');
    if (batchbar) {
      batchbar.setAttribute('aria-label', 'จัดการข้อมูลหลาย Batch');
    }

    document.querySelectorAll('.site-footer').forEach(function (footer) {
      if (footer.querySelector('.tools-audience') || footer.textContent.indexOf('Version 072026B by Paula Kaothien') !== -1) return;
      const audience = document.createElement('div');
      audience.className = 'tools-audience';
      audience.textContent = 'Version 072026B by Paula Kaothien';
      footer.appendChild(audience);
    });
  });
})();
