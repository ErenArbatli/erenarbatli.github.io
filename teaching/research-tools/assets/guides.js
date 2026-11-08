(() => {
  'use strict';
  document.documentElement.classList.add('js-ready');

  const guide = document.body.dataset.guide;
  const checks = [...document.querySelectorAll('[data-step-check]')];
  const key = `literature-guides:v1:${guide}`;
  const progress = document.querySelector('progress');
  const progressLabel = document.querySelector('[data-progress-label]');
  const updateProgress = () => {
    const completed = checks.filter(check => check.checked).length;
    if (progress) progress.value = completed;
    if (progressLabel) progressLabel.textContent = `${completed} of ${checks.length} steps complete`;
  };
  if (guide && checks.length) {
    try {
      const saved = JSON.parse(localStorage.getItem(key) || '[]');
      if (Array.isArray(saved)) checks.forEach(check => { check.checked = saved.includes(check.id); });
    } catch { /* Checklists also work when browser storage is unavailable. */ }
    checks.forEach(check => check.addEventListener('change', () => {
      updateProgress();
      try { localStorage.setItem(key, JSON.stringify(checks.filter(item => item.checked).map(item => item.id))); } catch { /* No remote fallback. */ }
    }));
    document.querySelector('[data-reset-progress]')?.addEventListener('click', () => {
      checks.forEach(check => { check.checked = false; });
      try { localStorage.removeItem(key); } catch { /* Nothing else needs resetting. */ }
      updateProgress();
    });
    updateProgress();
  }

  document.querySelectorAll('[data-copy]').forEach(button => {
    button.addEventListener('click', async () => {
      const target = document.getElementById(button.dataset.copy);
      const feedback = button.closest('.copy-block').querySelector('.copy-feedback');
      if (!target || !feedback) return;
      try {
        await navigator.clipboard.writeText(target.textContent.trim());
        feedback.textContent = 'Copied.';
      } catch {
        const range = document.createRange();
        range.selectNodeContents(target);
        const selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
        target.focus();
        feedback.textContent = 'Text selected. Copy it with your usual copy command.';
      }
    });
  });

  document.querySelectorAll('[data-tabs]').forEach(group => {
    const list = group.querySelector('.tab-list');
    const tabs = [...list.querySelectorAll('a')];
    const panels = tabs.map(tab => group.querySelector(tab.getAttribute('href')));
    list.setAttribute('role', 'tablist');
    list.setAttribute('aria-label', 'Search service');
    const activate = (index, focus = false) => {
      tabs.forEach((tab, position) => {
        tab.setAttribute('aria-selected', String(position === index));
        tab.tabIndex = position === index ? 0 : -1;
        panels[position].hidden = position !== index;
      });
      if (focus) tabs[index].focus();
    };
    tabs.forEach((tab, index) => {
      tab.setAttribute('role', 'tab');
      tab.id = `tab-${panels[index].id}`;
      tab.setAttribute('aria-controls', panels[index].id);
      panels[index].setAttribute('role', 'tabpanel');
      panels[index].setAttribute('aria-labelledby', tab.id);
      tab.addEventListener('click', event => { event.preventDefault(); activate(index); });
      tab.addEventListener('keydown', event => {
        let next;
        if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
        if (event.key === 'ArrowLeft') next = (index + tabs.length - 1) % tabs.length;
        if (event.key === 'Home') next = 0;
        if (event.key === 'End') next = tabs.length - 1;
        if (next !== undefined) { event.preventDefault(); activate(next, true); }
      });
    });
    const initial = panels.findIndex(panel => `#${panel.id}` === location.hash);
    activate(initial < 0 ? 0 : initial);
  });

  document.querySelectorAll('[data-prompt-builder]').forEach(builder => {
    const input = builder.querySelector('textarea');
    const output = builder.querySelector('[data-prompt-output]');
    const update = () => {
      const question = input.value.trim() || input.dataset.example;
      output.textContent = `My research question is: ${question}\n\nFind five candidate economics papers connected by question, mechanism or method. Include working papers where relevant and a potentially conflicting result. For each, give a source link, the connection, and whether you used an abstract or full text. Do not claim the list is exhaustive or that my question is novel.`;
    };
    input.addEventListener('input', update);
    update();
  });

  document.querySelectorAll('[data-evidence-check]').forEach(exercise => {
    const feedback = exercise.querySelector('[data-answer-message]');
    exercise.querySelectorAll('input[type="radio"]').forEach(input => {
      input.addEventListener('change', () => {
        feedback.hidden = false;
        feedback.textContent = input.value === 'scoped'
          ? 'Yes. This reports a scoped finding, not a universal zero effect.'
          : 'This goes beyond the source. Retain the study population, comparison and statistical uncertainty.';
      });
    });
  });

  const printDetails = [];
  window.addEventListener('beforeprint', () => {
    document.querySelectorAll('details').forEach(detail => {
      if (!detail.open) { detail.open = true; printDetails.push(detail); }
    });
  });
  window.addEventListener('afterprint', () => {
    printDetails.splice(0).forEach(detail => { detail.open = false; });
  });
})();
