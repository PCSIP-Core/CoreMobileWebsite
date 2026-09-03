/* Scale the fixed 1440px page container to fit desktop/tablet windows.
   Below 900px, responsive.css takes over with a real reflow. */
(function () {
  var DESIGN = 1440, MIN_REFLOW = 900;

  function container() {
    return document.querySelector('[style*="min-width: 1440px"]') ||
           document.querySelector('[style*="width: 1440px"]');
  }

  function fit() {
    var el = container();
    if (!el) return;
    var w = document.documentElement.clientWidth;
    if (w >= MIN_REFLOW && w < DESIGN) {
      var z = w / DESIGN;
      if ('zoom' in el.style) {
        el.style.zoom = z;
        el.style.transform = '';
      } else {
        el.style.transformOrigin = 'top left';
        el.style.transform = 'scale(' + z + ')';
        el.style.marginBottom = -(el.offsetHeight * (1 - z)) + 'px';
      }
    } else {
      el.style.zoom = '';
      el.style.transform = '';
      el.style.marginBottom = '';
    }
  }

  function header() {
    return document.querySelector('[style*="height: 76px"]');
  }

  /* Under MIN_REFLOW the nav list collapses behind a hamburger; the CSS turns
     each hover menu into an accordion once the list is open. */
  function addBurger() {
    var bar = header();
    if (!bar || bar.querySelector('.cm-burger')) return;
    var list = bar.querySelector('div[style*="gap: 36px"]');
    if (!list) return;
    var b = document.createElement('button');
    b.type = 'button';
    b.className = 'cm-burger';
    b.setAttribute('aria-label', 'Menu');
    b.setAttribute('aria-expanded', 'false');
    b.innerHTML = '<i class="fa-solid fa-bars"></i>';
    b.addEventListener('click', function () {
      var open = bar.classList.toggle('cm-menu-open');
      b.setAttribute('aria-expanded', open ? 'true' : 'false');
      b.innerHTML = '<i class="fa-solid fa-' + (open ? 'xmark' : 'bars') + '"></i>';
      if (!open) {
        var all = bar.querySelectorAll('.cm-nav-item.cm-open');
        for (var i = 0; i < all.length; i++) all[i].classList.remove('cm-open');
      }
    });
    list.parentNode.insertBefore(b, list);
  }

  document.addEventListener('click', function (e) {
    if (document.documentElement.clientWidth >= MIN_REFLOW) return;
    var link = e.target.closest && e.target.closest('.cm-nav-item > a');
    if (!link) return;
    var item = link.parentNode;
    if (!item.querySelector('.cm-dropdown')) return;
    e.preventDefault();
    var open = item.classList.contains('cm-open');
    var all = document.querySelectorAll('.cm-nav-item.cm-open');
    for (var i = 0; i < all.length; i++) all[i].classList.remove('cm-open');
    if (!open) item.classList.add('cm-open');
  }, true);

  var t;
  function onResize() { clearTimeout(t); t = setTimeout(fit, 60); }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { fit(); addBurger(); });
  } else {
    fit();
    addBurger();
  }
  // the page paints from a streaming runtime, so re-fit once it settles
  setTimeout(function () { fit(); addBurger(); }, 300);
  setTimeout(function () { fit(); addBurger(); }, 1200);
  window.addEventListener('resize', onResize);
  window.addEventListener('orientationchange', onResize);
})();
