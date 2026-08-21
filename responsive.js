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

  var t;
  function onResize() { clearTimeout(t); t = setTimeout(fit, 60); }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', fit);
  } else {
    fit();
  }
  // the page paints from a streaming runtime, so re-fit once it settles
  setTimeout(fit, 300);
  setTimeout(fit, 1200);
  window.addEventListener('resize', onResize);
  window.addEventListener('orientationchange', onResize);
})();
