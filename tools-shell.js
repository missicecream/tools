(function () {
  const page = location.pathname.split('/').pop() || 'index.html';
  const guides = {
    'ClassTimer.html': 'ClassTimer-guide.html',
    'PST-Selector.html': 'PST-Selector-guide.html',
    'Process-Selector.html': 'Process-Selector-guide.html',
    'Heat-Log.html': 'Heat-Log-guide.html',
    'PST-PSS-Log.html': 'PST-PSS-Log-guide.html',
    'Churning.html': 'Churning-guide.html',
    'Meltdown-Test.html': 'Meltdown-Test-guide.html'
  };

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

    const topbar = document.querySelector('.topbar');
    const existingGuide = document.querySelector('a[href$="-guide.html"]');
    if (guides[page] && !existingGuide && !document.querySelector('.tool-guide-link')) {
      const link = document.createElement('a');
      link.className = 'tool-guide-link';
      link.href = guides[page];
      link.innerHTML = '<span aria-hidden="true">?</span> คู่มือ';
      if (topbar) {
        topbar.appendChild(link);
      } else {
        const container = document.querySelector('.container, .wrap, .sheet');
        const header = container && container.querySelector('header');
        if (container && header) {
          const row = document.createElement('div');
          row.className = 'topbar tools-added-topbar';
          const back = container.querySelector('.back-link');
          if (back) row.appendChild(back);
          row.appendChild(link);
          container.insertBefore(row, header);
        }
      }
    }

    const batchbar = document.querySelector('.batchbar');
    if (batchbar) {
      batchbar.setAttribute('aria-label', 'จัดการข้อมูลหลาย Batch');
    }

    document.querySelectorAll('.site-footer').forEach(function (footer) {
      if (footer.querySelector('.tools-audience') || footer.textContent.indexOf('สำหรับผู้เรียนในคลาสของอาจารย์พรหล้า ขาวเธียร') !== -1) return;
      const audience = document.createElement('div');
      audience.className = 'tools-audience';
      audience.textContent = 'สำหรับผู้เรียนในคลาสของอาจารย์พรหล้า ขาวเธียร';
      footer.appendChild(audience);
    });
  });
})();
