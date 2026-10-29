/* Site search: a search button in the header opens an overlay that searches
   search-index.json in the browser. No server or outside service. */
(function () {
  var INDEX_URL = 'search-index.json';
  var data = null, loading = null, overlay, input, list, status, active = -1, results = [];

  var css = '' +
    '.cms-btn{display:inline-flex;align-items:center;justify-content:center;gap:10px;height:44px;min-width:44px;padding:0 14px;background:#fff;border:1px solid var(--border-strong,#C9CED4);border-radius:var(--r-md,10px);color:#000;font:600 19px "Public Sans",system-ui,sans-serif;cursor:pointer;transition:background .15s ease-out,border-color .15s ease-out}' +
    '.cms-btn:hover{background:var(--brand-tint,#E6F3F4);border-color:var(--teal-300,#7CC3CA);color:var(--teal-700,#00616B)}' +
    '.cms-btn:focus-visible{outline:3px solid var(--teal-300,#7CC3CA);outline-offset:2px}' +
    '.cms-btn i{font-size:16px}' +
    '.cms-btn-m{display:none}' +
    '.cms-veil{position:fixed;inset:0;z-index:10000;background:rgba(28,33,40,.45);backdrop-filter:blur(4px);-webkit-backdrop-filter:blur(4px);display:none;align-items:flex-start;justify-content:center;padding:9vh 20px 20px;box-sizing:border-box}' +
    '.cms-veil.cms-open{display:flex}' +
    '.cms-panel{width:100%;max-width:780px;max-height:82vh;display:flex;flex-direction:column;background:#fff;border-radius:var(--r-lg,14px);box-shadow:0 24px 60px rgba(28,33,40,.28);overflow:hidden;font-family:"Public Sans",system-ui,sans-serif;animation:cmsIn .18s ease-out}' +
    '@keyframes cmsIn{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}' +
    '.cms-bar{display:flex;align-items:center;gap:14px;padding:18px 22px;border-bottom:1px solid var(--border,#DEE1E5)}' +
    '.cms-bar i{color:var(--teal-600,#008895);font-size:19px}' +
    '.cms-input{flex:1 1 auto;min-width:0;border:0;outline:0;font:500 21px "Public Sans",system-ui,sans-serif;color:#000;background:transparent;padding:6px 0}' +
    '.cms-input::placeholder{color:#5C6470}' +
    '.cms-close{flex:0 0 auto;height:40px;padding:0 12px;border:1px solid var(--border,#DEE1E5);border-radius:8px;background:#fff;color:#000;font:600 19px "Public Sans",system-ui,sans-serif;cursor:pointer}' +
    '.cms-close:hover{background:var(--ink-50,#F4F6F8)}' +
    '.cms-body{overflow-y:auto;padding:8px 10px 14px}' +
    '.cms-status{font-size:19px;color:#000;padding:14px 14px 8px}' +
    '.cms-chips{display:flex;flex-wrap:wrap;gap:10px;padding:4px 14px 10px}' +
    '.cms-chip{height:44px;padding:0 16px;border:1px solid var(--border-strong,#C9CED4);border-radius:999px;background:#fff;color:#000;font:600 19px "Public Sans",system-ui,sans-serif;cursor:pointer}' +
    '.cms-chip:hover{background:var(--brand-tint,#E6F3F4);border-color:var(--teal-300,#7CC3CA);color:var(--teal-700,#00616B)}' +
    '.cms-list{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:4px}' +
    '.cms-item a{display:block;padding:14px 16px;border-radius:10px;text-decoration:none;color:#000}' +
    '.cms-item a:hover,.cms-item.cms-active a{background:var(--brand-tint,#E6F3F4)}' +
    '.cms-sec{font-size:19px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:var(--teal-700,#00616B)}' +
    '.cms-name{font-family:Poppins,"Public Sans",sans-serif;font-weight:600;font-size:21px;line-height:1.3;color:var(--fg-1,#1C2128);margin-top:2px}' +
    '.cms-snip{font-size:19px;line-height:1.5;color:#000;margin-top:4px}' +
    '.cms-snip mark{background:#D6EEF0;color:#000;padding:0 2px;border-radius:3px}' +
    '.cms-foot{display:flex;flex-wrap:wrap;gap:8px 20px;padding:12px 22px;border-top:1px solid var(--border,#DEE1E5);font-size:19px;color:#000;background:var(--ink-50,#F4F6F8)}' +
    '.cms-foot kbd{font:600 16px "IBM Plex Mono",ui-monospace,monospace;border:1px solid #C9CED4;border-bottom-width:2px;border-radius:5px;padding:1px 7px;background:#fff}' +
    '@media (max-width:899px){.cms-btn-d{display:none}.cms-btn-m{display:inline-flex;margin-left:auto;padding:0}.cms-btn-m+.cm-burger{margin-left:10px !important}.cms-veil{padding:12px}.cms-panel{max-height:92vh}.cms-foot{display:none}}';

  var SUGGEST = ['Ambient AI', 'Epic integration', 'Operating room', 'Telehealth', 'HIPAA', 'Veterans Affairs', 'Patient safety', 'Scheduling'];

  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function norm(s) { return String(s || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[’‘]/g, "'"); }
  function reEsc(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }

  function load() {
    if (data) return Promise.resolve(data);
    if (loading) return loading;
    loading = fetch(INDEX_URL).then(function (r) { return r.json(); }).then(function (d) {
      d.forEach(function (p) { p._n = norm(p.n); p._h = norm(p.h); p._c = norm(p.c); p._k = norm(p.k); p._b = norm(p.b); });
      data = d; return d;
    });
    return loading;
  }

  function search(q) {
    var nq = norm(q).trim();
    var toks = nq.split(/[^a-z0-9™&']+/).filter(function (t) { return t.length >= 2 || /\d/.test(t); });
    if (!toks.length) return [];
    var res = [];
    data.forEach(function (p) {
      var score = 0, ok = true;
      for (var i = 0; i < toks.length; i++) {
        var re = new RegExp('(^|[^a-z0-9])' + reEsc(toks[i]));
        var s = 0;
        if (re.test(p._n)) s += 30;
        if (re.test(p._h)) s += 12;
        if (re.test(p._c)) s += 4;
        if (re.test(p._k)) s += 6;
        var m = p._b.match(new RegExp('(^|[^a-z0-9])' + reEsc(toks[i]), 'g'));
        if (m) s += Math.min(m.length, 10);
        if (!s) { ok = false; break; }
        score += s;
      }
      if (!ok) return;
      if (toks.length > 1) {
        if (p._n.indexOf(nq) >= 0) score += 25;
        if (p._h.indexOf(nq) >= 0) score += 12;
        if (p._b.indexOf(nq) >= 0) score += 8;
      }
      res.push({ p: p, s: score, toks: toks, q: nq });
    });
    res.sort(function (a, b) { return b.s - a.s; });
    return res.slice(0, 12);
  }

  function snippet(p, toks, q) {
    var src = p.b, low = p._b, at = -1;
    if (toks.length > 1) at = low.indexOf(q);
    if (at < 0) for (var i = 0; i < toks.length && at < 0; i++) {
      var m = new RegExp('(^|[^a-z0-9])' + reEsc(toks[i])).exec(low);
      if (m) at = m.index + m[1].length;
    }
    var text;
    if (at < 0) text = p.h || src.slice(0, 180);
    else {
      var a = Math.max(0, at - 70), b = Math.min(src.length, at + 170);
      while (a > 0 && src[a] !== ' ') a--;
      while (b < src.length && src[b] !== ' ') b++;
      text = (a > 0 ? '… ' : '') + src.slice(a, b).trim() + (b < src.length ? ' …' : '');
    }
    var html = esc(text);
    var parts = toks.slice().sort(function (x, y) { return y.length - x.length; }).map(reEsc);
    return html.replace(new RegExp('(^|[^a-z0-9])(' + parts.join('|') + ')', 'gi'), '$1<mark>$2</mark>');
  }

  function render() {
    var q = input.value;
    if (!q.trim()) {
      results = []; active = -1;
      status.textContent = 'Search pages, products and success stories. Try:';
      list.innerHTML = '';
      chips.style.display = 'flex';
      return;
    }
    chips.style.display = 'none';
    load().then(function () {
      if (input.value !== q) return;
      results = search(q); active = results.length ? 0 : -1;
      status.textContent = results.length ? results.length + (results.length === 1 ? ' result' : ' results') : 'No pages match “' + q.trim() + '”. Try a shorter or different word.';
      list.innerHTML = results.map(function (r, i) {
        var sec = r.p.c && r.p.c !== r.p.n ? '<div class="cms-sec">' + esc(r.p.c) + '</div>' : '';
        return '<li class="cms-item' + (i === active ? ' cms-active' : '') + '" data-i="' + i + '"><a href="' + esc(r.p.u) + '">' + sec + '<div class="cms-name">' + esc(r.p.n) + '</div><div class="cms-snip">' + snippet(r.p, r.toks, r.q) + '</div></a></li>';
      }).join('');
    }).catch(function () { status.textContent = 'Search is unavailable right now.'; });
  }

  function setActive(i) {
    var items = list.querySelectorAll('.cms-item');
    if (!items.length) return;
    active = (i + items.length) % items.length;
    for (var k = 0; k < items.length; k++) items[k].classList.toggle('cms-active', k === active);
    var el = items[active], body = el.closest('.cms-body');
    var top = el.offsetTop, bottom = top + el.offsetHeight;
    if (top < body.scrollTop) body.scrollTop = top - 8;
    else if (bottom > body.scrollTop + body.clientHeight) body.scrollTop = bottom - body.clientHeight + 8;
  }

  var chips, lastFocus;
  function build() {
    if (overlay) return;
    var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);
    overlay = document.createElement('div');
    overlay.className = 'cms-veil';
    overlay.setAttribute('role', 'dialog'); overlay.setAttribute('aria-modal', 'true'); overlay.setAttribute('aria-label', 'Search the site');
    overlay.innerHTML = '<div class="cms-panel"><div class="cms-bar"><i class="fa-solid fa-magnifying-glass" aria-hidden="true"></i><input class="cms-input" type="search" placeholder="Search coremobile.ai" aria-label="Search" autocomplete="off" spellcheck="false"><button type="button" class="cms-close" aria-label="Close search">Esc</button></div><div class="cms-body"><div class="cms-status" aria-live="polite"></div><div class="cms-chips"></div><ul class="cms-list"></ul></div><div class="cms-foot"><span><kbd>↑</kbd> <kbd>↓</kbd> to move</span><span><kbd>Enter</kbd> to open</span><span><kbd>Esc</kbd> to close</span></div></div>';
    document.body.appendChild(overlay);
    input = overlay.querySelector('.cms-input'); list = overlay.querySelector('.cms-list'); status = overlay.querySelector('.cms-status'); chips = overlay.querySelector('.cms-chips');
    chips.innerHTML = SUGGEST.map(function (s) { return '<button type="button" class="cms-chip">' + esc(s) + '</button>'; }).join('');
    chips.addEventListener('click', function (e) { var b = e.target.closest('.cms-chip'); if (b) { input.value = b.textContent; render(); input.focus(); } });
    var t; input.addEventListener('input', function () { clearTimeout(t); t = setTimeout(render, 80); });
    input.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowDown') { e.preventDefault(); setActive(active + 1); }
      else if (e.key === 'ArrowUp') { e.preventDefault(); setActive(active - 1); }
      else if (e.key === 'Enter' && results[active]) { e.preventDefault(); window.location.href = results[active].p.u; }
    });
    overlay.querySelector('.cms-close').addEventListener('click', close);
    overlay.addEventListener('mousedown', function (e) { if (e.target === overlay) close(); });
  }

  function open() {
    build();
    lastFocus = document.activeElement;
    overlay.classList.add('cms-open');
    document.documentElement.style.overflow = 'hidden';
    render(); load();
    setTimeout(function () { input.focus(); input.select(); }, 30);
  }
  function close() {
    if (!overlay) return;
    overlay.classList.remove('cms-open');
    document.documentElement.style.overflow = '';
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  function makeBtn(cls, label) {
    var b = document.createElement('button');
    b.type = 'button'; b.className = 'cms-btn ' + cls; b.setAttribute('aria-label', 'Search the site');
    b.innerHTML = '<i class="fa-solid fa-magnifying-glass" aria-hidden="true"></i>' + (label ? '<span>' + label + '</span>' : '');
    b.addEventListener('click', open);
    return b;
  }

  function mount() {
    build();
    var bar = document.querySelector('[style*="height: 76px"]');
    if (!bar) return;
    var navList = bar.querySelector('div[style*="gap: 36px"]');
    if (navList && !navList.querySelector('.cms-btn-d')) navList.appendChild(makeBtn('cms-btn-d', 'Search'));
    if (!bar.querySelector('.cms-btn-m')) {
      var mb = makeBtn('cms-btn-m', '');
      var burger = bar.querySelector('.cm-burger');
      bar.insertBefore(mb, burger || navList || null);
    } else {
      var m = bar.querySelector('.cms-btn-m'), bg = bar.querySelector('.cm-burger');
      if (bg && m.nextElementSibling !== bg) bar.insertBefore(m, bg);
    }
  }

  document.addEventListener('keydown', function (e) {
    var tag = (e.target && e.target.tagName) || '';
    var typing = /INPUT|TEXTAREA|SELECT/.test(tag) || (e.target && e.target.isContentEditable);
    if ((e.key === 'k' || e.key === 'K') && (e.metaKey || e.ctrlKey)) { e.preventDefault(); open(); }
    else if (e.key === '/' && !typing) { e.preventDefault(); open(); }
    else if (e.key === 'Escape' && overlay && overlay.classList.contains('cms-open')) { e.preventDefault(); close(); }
  });

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mount); else mount();
  // the page paints from a streaming runtime and responsive.js adds the burger later
  setTimeout(mount, 300); setTimeout(mount, 1200); setTimeout(mount, 2500);
})();
