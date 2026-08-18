/* @ds-bundle: {"format":3,"namespace":"CoreMobileDesignSystem_6fe574","components":[],"sourceHashes":{"ui_kits/clinical-console/app.jsx":"2e890f042977","ui_kits/clinical-console/chrome.jsx":"9e6bc1f187bd","ui_kits/clinical-console/components.jsx":"d25d6c28541d","ui_kits/clinical-console/screens.jsx":"b3d70dfe9022","ui_kits/coreypatient-app/ios-frame.jsx":"be3343be4b51","ui_kits/coreypatient-app/patient-app.jsx":"f38b554039d5","ui_kits/coreypatient-app/patient-ui.jsx":"839b669a244f"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.CoreMobileDesignSystem_6fe574 = window.CoreMobileDesignSystem_6fe574 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ui_kits/clinical-console/app.jsx
try { (() => {
/* global React, ReactDOM, Sidebar, TopBar, OverviewScreen, MonitorScreen, Placeholder */
const {
  useState
} = React;
const TITLES = {
  overview: ["Perioperative Overview", "Mass Ave Surgery Center · Today, Jun 5"],
  orboard: ["OR Board", "Live room status across 14 ORs"],
  monitor: ["Live Monitoring", "Ambient AI · computer-vision"],
  tracking: ["Patient Tracking", "Real-time location services"],
  analytics: ["Analytics", "Operational performance"],
  schedule: ["Scheduling", "Case scheduling & optimization"]
};
function App() {
  const [active, setActive] = useState("overview");
  const [title, sub] = TITLES[active];
  const Screen = () => {
    switch (active) {
      case "overview":
        return /*#__PURE__*/React.createElement(OverviewScreen, null);
      case "monitor":
        return /*#__PURE__*/React.createElement(MonitorScreen, null);
      case "orboard":
        return /*#__PURE__*/React.createElement(OverviewScreen, null);
      case "tracking":
        return /*#__PURE__*/React.createElement(Placeholder, {
          icon: "location-dot",
          title: "Patient & Asset Tracking"
        });
      case "analytics":
        return /*#__PURE__*/React.createElement(Placeholder, {
          icon: "chart-line",
          title: "Operational Analytics"
        });
      case "schedule":
        return /*#__PURE__*/React.createElement(Placeholder, {
          icon: "calendar-check",
          title: "Smart Scheduling"
        });
      default:
        return /*#__PURE__*/React.createElement(OverviewScreen, null);
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      height: "100vh",
      width: "100vw",
      overflow: "hidden",
      background: "var(--bg-canvas)"
    }
  }, /*#__PURE__*/React.createElement(Sidebar, {
    active: active,
    onNav: setActive
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(TopBar, {
    title: title,
    sub: sub,
    alerts: 3
  }), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      overflow: "auto",
      padding: 24
    }
  }, /*#__PURE__*/React.createElement(Screen, null))));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/clinical-console/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/clinical-console/chrome.jsx
try { (() => {
/* global React, Logo, Icon, Avatar, Button */
// Core Mobile — Clinical Console UI Kit · app chrome (sidebar + topbar)

const NAV = [{
  id: "overview",
  label: "Overview",
  icon: "gauge-high"
}, {
  id: "orboard",
  label: "OR Board",
  icon: "bed-pulse"
}, {
  id: "monitor",
  label: "Live Monitoring",
  icon: "video"
}, {
  id: "tracking",
  label: "Patient Tracking",
  icon: "location-dot"
}, {
  id: "analytics",
  label: "Analytics",
  icon: "chart-line"
}, {
  id: "schedule",
  label: "Scheduling",
  icon: "calendar-check"
}];
const NavItem = ({
  item,
  active,
  onClick
}) => {
  const [h, setH] = React.useState(false);
  const on = active;
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      width: "100%",
      textAlign: "left",
      padding: "10px 14px",
      border: "none",
      cursor: "pointer",
      borderRadius: "var(--r-md)",
      fontFamily: "var(--font-sans)",
      fontSize: 14,
      fontWeight: on ? 700 : 500,
      color: on ? "var(--brand-hover)" : "var(--fg-2)",
      background: on ? "var(--brand-tint)" : h ? "var(--ink-100)" : "transparent",
      position: "relative",
      transition: ".12s"
    }
  }, on && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: -10,
      top: 9,
      bottom: 9,
      width: 4,
      borderRadius: 4,
      background: "var(--brand)"
    }
  }), /*#__PURE__*/React.createElement(Icon, {
    name: item.icon,
    style: {
      width: 18,
      fontSize: 15,
      textAlign: "center",
      color: on ? "var(--brand)" : "var(--ink-400)"
    }
  }), item.label);
};
const Sidebar = ({
  active,
  onNav
}) => /*#__PURE__*/React.createElement("aside", {
  style: {
    width: 248,
    flex: "0 0 248px",
    background: "var(--bg-surface)",
    borderRight: "1px solid var(--border)",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    boxSizing: "border-box"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    padding: "20px 22px 16px"
  }
}, /*#__PURE__*/React.createElement(Logo, {
  height: 24
})), /*#__PURE__*/React.createElement("div", {
  style: {
    padding: "4px 14px",
    display: "flex",
    flexDirection: "column",
    gap: 3
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: ".06em",
    textTransform: "uppercase",
    color: "var(--fg-3)",
    padding: "10px 14px 4px"
  }
}, "Clinical Ops"), NAV.map(n => /*#__PURE__*/React.createElement(NavItem, {
  key: n.id,
  item: n,
  active: active === n.id,
  onClick: () => onNav(n.id)
}))), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: "auto",
    padding: 16
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    background: "var(--teal-900)",
    borderRadius: "var(--r-lg)",
    padding: 16,
    color: "#fff",
    position: "relative",
    overflow: "hidden"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    position: "absolute",
    right: -30,
    top: -30,
    width: 110,
    height: 110,
    borderRadius: "50%",
    border: "14px solid rgba(255,255,255,.06)"
  }
}), /*#__PURE__*/React.createElement("div", {
  style: {
    position: "absolute",
    right: -10,
    top: -10,
    width: 60,
    height: 60,
    borderRadius: "50%",
    border: "10px solid rgba(255,255,255,.06)"
  }
}), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    fontSize: 12,
    fontWeight: 700
  }
}, /*#__PURE__*/React.createElement(Icon, {
  name: "microchip",
  style: {
    color: "var(--puerto-rico)"
  }
}), " Ambient AI"), /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 12,
    lineHeight: 1.5,
    color: "rgba(255,255,255,.72)",
    marginTop: 8
  }
}, "Sentinel-event detection is monitoring 14 rooms."), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    alignItems: "center",
    gap: 7,
    marginTop: 12,
    fontSize: 11.5,
    fontFamily: "var(--font-mono)",
    color: "var(--puerto-rico)"
  }
}, /*#__PURE__*/React.createElement("span", {
  className: "cm-pulse",
  style: {
    width: 7,
    height: 7,
    borderRadius: "50%",
    background: "var(--puerto-rico)"
  }
}), " Live \xB7 all clear"))));
const TopBar = ({
  title,
  sub,
  onAlert,
  alerts = 0
}) => /*#__PURE__*/React.createElement("header", {
  style: {
    height: 64,
    flex: "0 0 64px",
    background: "var(--bg-surface)",
    borderBottom: "1px solid var(--border)",
    display: "flex",
    alignItems: "center",
    gap: 16,
    padding: "0 24px",
    boxSizing: "border-box"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    flex: "0 0 auto"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: 19,
    color: "var(--fg-1)",
    lineHeight: 1.1
  }
}, title), sub && /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 12,
    color: "var(--fg-3)"
  }
}, sub)), /*#__PURE__*/React.createElement("div", {
  style: {
    marginLeft: 24,
    flex: 1,
    maxWidth: 360,
    display: "flex",
    alignItems: "center",
    gap: 9,
    background: "var(--ink-100)",
    borderRadius: "var(--r-pill)",
    padding: "9px 14px"
  }
}, /*#__PURE__*/React.createElement(Icon, {
  name: "magnifying-glass",
  style: {
    color: "var(--ink-400)",
    fontSize: 13
  }
}), /*#__PURE__*/React.createElement("input", {
  placeholder: "Search patients, rooms, MRN\u2026",
  style: {
    border: "none",
    background: "transparent",
    outline: "none",
    fontFamily: "var(--font-sans)",
    fontSize: 13.5,
    color: "var(--fg-1)",
    width: "100%"
  }
})), /*#__PURE__*/React.createElement("div", {
  style: {
    marginLeft: "auto",
    display: "flex",
    alignItems: "center",
    gap: 16
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    alignItems: "center",
    gap: 7,
    fontSize: 11.5,
    fontWeight: 700,
    color: "#1C6B53",
    background: "#E4F4EE",
    padding: "6px 11px",
    borderRadius: "var(--r-pill)"
  }
}, /*#__PURE__*/React.createElement(Icon, {
  name: "shield-halved",
  style: {
    fontSize: 11
  }
}), " HIPAA \xB7 FISMA \xB7 ATO"), /*#__PURE__*/React.createElement("button", {
  onClick: onAlert,
  style: {
    position: "relative",
    border: "none",
    background: "transparent",
    cursor: "pointer",
    color: "var(--ink-600)",
    fontSize: 17
  }
}, /*#__PURE__*/React.createElement(Icon, {
  name: "bell"
}), alerts > 0 && /*#__PURE__*/React.createElement("span", {
  style: {
    position: "absolute",
    top: -4,
    right: -6,
    background: "var(--blush)",
    color: "#fff",
    fontSize: 9.5,
    fontWeight: 700,
    borderRadius: 9,
    minWidth: 16,
    height: 16,
    display: "grid",
    placeItems: "center",
    padding: "0 3px",
    fontFamily: "var(--font-mono)"
  }
}, alerts)), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    alignItems: "center",
    gap: 10
  }
}, /*#__PURE__*/React.createElement(Avatar, {
  initials: "NK",
  size: 36
}), /*#__PURE__*/React.createElement("div", {
  style: {
    lineHeight: 1.2
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 13,
    fontWeight: 700,
    color: "var(--fg-1)"
  }
}, "Dr. N. Kaushal"), /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 11,
    color: "var(--fg-3)"
  }
}, "Perioperative Lead")))));
Object.assign(window, {
  Sidebar,
  TopBar,
  NAV
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/clinical-console/chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/clinical-console/components.jsx
try { (() => {
/* global React */
// Core Mobile — Clinical Console UI Kit · shared components
const {
  useState
} = React;
const Icon = ({
  name,
  solid = true,
  style,
  className = ""
}) => /*#__PURE__*/React.createElement("i", {
  className: `fa-${solid ? "solid" : "regular"} fa-${name} ${className}`,
  style: style
});

// ---------- Logo ----------
const Logo = ({
  height = 26
}) => /*#__PURE__*/React.createElement("img", {
  src: "../../assets/logo-long-teal.png",
  alt: "Core Mobile",
  style: {
    height,
    width: "auto",
    display: "block"
  }
});

// ---------- Avatar ----------
const Avatar = ({
  initials,
  size = 38,
  tone = "teal"
}) => {
  const tones = {
    teal: {
      bg: "var(--brand-tint)",
      fg: "var(--brand-hover)"
    },
    slate: {
      bg: "var(--ink-100)",
      fg: "var(--ink-600)"
    }
  };
  const t = tones[tone] || tones.teal;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: size,
      height: size,
      borderRadius: "50%",
      background: t.bg,
      color: t.fg,
      display: "grid",
      placeItems: "center",
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: size * 0.36,
      flex: "0 0 auto"
    }
  }, initials);
};

// ---------- Badge ----------
const TONES = {
  stable: {
    bg: "#E4F4EE",
    fg: "#1C6B53",
    dot: "#2E9E7B"
  },
  info: {
    bg: "#E8EDF6",
    fg: "#2A4470",
    dot: "#3A5B92"
  },
  delayed: {
    bg: "#FCF0DF",
    fg: "#8A5113",
    dot: "#E08A3C"
  },
  critical: {
    bg: "#F7E6E8",
    fg: "#8A2F3B",
    dot: "#B74B59"
  },
  live: {
    bg: "var(--brand-tint)",
    fg: "var(--brand-hover)",
    dot: "var(--brand)"
  }
};
const Badge = ({
  tone = "stable",
  children,
  pulse = false,
  icon
}) => {
  const t = TONES[tone] || TONES.stable;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      fontSize: 12,
      fontWeight: 700,
      padding: "5px 11px",
      borderRadius: "var(--r-pill)",
      background: t.bg,
      color: t.fg,
      fontFamily: "var(--font-sans)",
      whiteSpace: "nowrap"
    }
  }, icon ? /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    style: {
      fontSize: 11
    }
  }) : /*#__PURE__*/React.createElement("span", {
    className: pulse ? "cm-pulse" : "",
    style: {
      width: 7,
      height: 7,
      borderRadius: "50%",
      background: t.dot
    }
  }), children);
};

// ---------- Button ----------
const Button = ({
  children,
  variant = "primary",
  icon,
  onClick,
  size = "md"
}) => {
  const [h, setH] = useState(false);
  const pad = size === "sm" ? "7px 13px" : size === "lg" ? "13px 24px" : "10px 18px";
  const fs = size === "sm" ? 13 : size === "lg" ? 15 : 14;
  const variants = {
    primary: {
      background: h ? "var(--brand-hover)" : "var(--brand)",
      color: "#fff",
      border: "1.5px solid transparent"
    },
    secondary: {
      background: "var(--brand-tint)",
      color: "var(--brand-hover)",
      border: "1.5px solid transparent"
    },
    ghost: {
      background: h ? "var(--ink-100)" : "transparent",
      color: "var(--fg-1)",
      border: "1.5px solid var(--border-strong)"
    }
  };
  return /*#__PURE__*/React.createElement("button", {
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    onClick: onClick,
    style: {
      ...variants[variant],
      padding: pad,
      fontSize: fs,
      fontWeight: 600,
      borderRadius: "var(--r-md)",
      fontFamily: "var(--font-sans)",
      cursor: "pointer",
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      transition: ".15s",
      boxShadow: variant === "primary" ? "var(--shadow-xs)" : "none"
    }
  }, icon && /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    style: {
      fontSize: fs
    }
  }), children);
};

// ---------- Card ----------
const Card = ({
  children,
  title,
  action,
  pad = 18,
  style
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    background: "var(--bg-surface)",
    border: "1px solid var(--border)",
    borderRadius: "var(--r-lg)",
    boxShadow: "var(--shadow-sm)",
    display: "flex",
    flexDirection: "column",
    ...style
  }
}, title && /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: `${pad}px ${pad}px 0`
  }
}, /*#__PURE__*/React.createElement("h3", {
  style: {
    margin: 0,
    fontFamily: "var(--font-display)",
    fontWeight: 600,
    fontSize: 15,
    color: "var(--fg-1)"
  }
}, title), action), /*#__PURE__*/React.createElement("div", {
  style: {
    padding: pad
  }
}, children));

// ---------- KPI ----------
const KpiCard = ({
  icon,
  label,
  value,
  unit,
  delta,
  deltaDir = "up"
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    background: "var(--bg-surface)",
    border: "1px solid var(--border)",
    borderRadius: "var(--r-lg)",
    boxShadow: "var(--shadow-sm)",
    padding: "16px 18px",
    flex: 1
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    fontSize: 12.5,
    color: "var(--fg-2)",
    fontWeight: 600
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    width: 28,
    height: 28,
    borderRadius: 8,
    background: "var(--brand-tint)",
    color: "var(--brand-hover)",
    display: "grid",
    placeItems: "center",
    fontSize: 12
  }
}, /*#__PURE__*/React.createElement(Icon, {
  name: icon
})), label), /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: 30,
    color: "var(--fg-1)",
    marginTop: 12,
    lineHeight: 1
  }
}, value, unit && /*#__PURE__*/React.createElement("span", {
  style: {
    fontSize: 15,
    color: "var(--fg-3)",
    fontWeight: 600,
    marginLeft: 2
  }
}, unit)), delta && /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 11.5,
    marginTop: 7,
    color: deltaDir === "up" ? "#1C6B53" : "#8A2F3B"
  }
}, deltaDir === "up" ? "▲" : "▼", " ", delta));

// ---------- Mini bar chart ----------
const Bars = ({
  data,
  height = 88,
  color = "var(--brand)"
}) => {
  const max = Math.max(...data.map(d => d.v));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      gap: 8,
      height
    }
  }, data.map((d, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 7,
      height: "100%",
      justifyContent: "flex-end"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      maxWidth: 26,
      borderRadius: "5px 5px 2px 2px",
      height: `${d.v / max * 100}%`,
      background: d.hi ? "var(--grad-brand)" : "var(--teal-100)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      color: "var(--fg-3)",
      fontFamily: "var(--font-mono)"
    }
  }, d.l))));
};
Object.assign(window, {
  Icon,
  Logo,
  Avatar,
  Badge,
  Button,
  Card,
  KpiCard,
  Bars,
  TONES
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/clinical-console/components.jsx", error: String((e && e.message) || e) }); }

// ui_kits/clinical-console/screens.jsx
try { (() => {
/* global React, Icon, Avatar, Badge, Button, Card, KpiCard, Bars */
// Core Mobile — Clinical Console UI Kit · screens

const THROUGHPUT = [{
  l: "Mon",
  v: 62
}, {
  l: "Tue",
  v: 71
}, {
  l: "Wed",
  v: 68
}, {
  l: "Thu",
  v: 84,
  hi: true
}, {
  l: "Fri",
  v: 79
}, {
  l: "Sat",
  v: 48
}, {
  l: "Sun",
  v: 41
}];
const ROOMS = [{
  room: "OR-01",
  pt: "M. Juarez",
  mrn: "0093412",
  proc: "Lap Chole",
  tone: "stable",
  st: "In progress",
  t: "0:42"
}, {
  room: "OR-04",
  pt: "D. Kim",
  mrn: "0093588",
  proc: "Total Knee",
  tone: "delayed",
  st: "Turnover",
  t: "0:18"
}, {
  room: "OR-07",
  pt: "S. Patel",
  mrn: "0093601",
  proc: "Cataract",
  tone: "stable",
  st: "In progress",
  t: "0:27"
}, {
  room: "PACU-2",
  pt: "R. Osei",
  mrn: "0093644",
  proc: "Recovery",
  tone: "info",
  st: "Monitoring",
  t: "1:05"
}, {
  room: "OR-09",
  pt: "L. Tran",
  mrn: "0093702",
  proc: "Appendectomy",
  tone: "critical",
  st: "Sentinel alert",
  t: "0:03"
}];
const ALERTS = [{
  icon: "triangle-exclamation",
  tone: "critical",
  txt: "Sentinel event flagged in OR-09",
  time: "now"
}, {
  icon: "clock",
  tone: "delayed",
  txt: "OR-04 turnover exceeding target (18m)",
  time: "4m"
}, {
  icon: "user-doctor",
  tone: "info",
  txt: "Dr. Adkins assigned to OR-12",
  time: "12m"
}, {
  icon: "calendar-check",
  tone: "stable",
  txt: "3 add-on cases scheduled for 2:00 PM",
  time: "26m"
}];
const Row = ({
  children,
  style
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    gap: 16,
    ...style
  }
}, children);
const OverviewScreen = () => /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    flexDirection: "column",
    gap: 16
  }
}, /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(KpiCard, {
  icon: "bed-pulse",
  label: "OR utilization",
  value: "94",
  unit: "%",
  delta: "6.2% vs last wk",
  deltaDir: "up"
}), /*#__PURE__*/React.createElement(KpiCard, {
  icon: "arrow-right-arrow-left",
  label: "Throughput",
  value: "+18",
  unit: "%",
  delta: "3.1% vs last wk",
  deltaDir: "up"
}), /*#__PURE__*/React.createElement(KpiCard, {
  icon: "clock",
  label: "Avg turnover",
  value: "21",
  unit: "min",
  delta: "4 min faster",
  deltaDir: "down"
}), /*#__PURE__*/React.createElement(KpiCard, {
  icon: "ban",
  label: "Cancellations",
  value: "2.4",
  unit: "%",
  delta: "1.2% vs last wk",
  deltaDir: "down"
})), /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Card, {
  title: "Weekly throughput",
  pad: 18,
  style: {
    flex: 2
  },
  action: /*#__PURE__*/React.createElement(Badge, {
    tone: "live",
    icon: "microchip"
  }, "AI forecast")
}, /*#__PURE__*/React.createElement(Bars, {
  data: THROUGHPUT
}), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 14,
    fontSize: 12.5,
    color: "var(--fg-2)",
    lineHeight: 1.55,
    display: "flex",
    gap: 8,
    alignItems: "flex-start"
  }
}, /*#__PURE__*/React.createElement(Icon, {
  name: "wand-magic-sparkles",
  style: {
    color: "var(--brand)",
    marginTop: 2
  }
}), /*#__PURE__*/React.createElement("span", null, "Predicted peak ", /*#__PURE__*/React.createElement("strong", {
  style: {
    color: "var(--fg-1)"
  }
}, "Thursday"), " \u2014 staffing model recommends +1 PACU nurse from 11:00\u201315:00 to hold turnover under 20 min."))), /*#__PURE__*/React.createElement(Card, {
  title: "Live alerts",
  pad: 18,
  style: {
    flex: 1
  },
  action: /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: "var(--fg-link)",
      fontWeight: 600,
      cursor: "pointer"
    }
  }, "View all")
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    flexDirection: "column",
    gap: 14
  }
}, ALERTS.map((a, i) => /*#__PURE__*/React.createElement("div", {
  key: i,
  style: {
    display: "flex",
    gap: 11,
    alignItems: "flex-start"
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    width: 30,
    height: 30,
    borderRadius: 9,
    flex: "0 0 auto",
    display: "grid",
    placeItems: "center",
    fontSize: 12,
    background: TONES[a.tone].bg,
    color: TONES[a.tone].fg
  }
}, /*#__PURE__*/React.createElement(Icon, {
  name: a.icon
})), /*#__PURE__*/React.createElement("div", {
  style: {
    flex: 1
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 13,
    color: "var(--fg-1)",
    lineHeight: 1.4
  }
}, a.txt), /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 11,
    color: "var(--fg-3)",
    fontFamily: "var(--font-mono)",
    marginTop: 2
  }
}, a.time))))))), /*#__PURE__*/React.createElement(Card, {
  title: "OR & PACU board",
  pad: 18,
  action: /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    icon: "arrow-up-right-from-square"
  }, "Open board")
}, /*#__PURE__*/React.createElement(RoomTable, null)));
const RoomTable = () => /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    flexDirection: "column"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "grid",
    gridTemplateColumns: "90px 1.4fr 1.4fr 1fr 110px",
    gap: 12,
    padding: "0 4px 10px",
    fontSize: 11,
    textTransform: "uppercase",
    letterSpacing: ".05em",
    color: "var(--fg-3)",
    fontWeight: 700,
    borderBottom: "1px solid var(--border)"
  }
}, /*#__PURE__*/React.createElement("span", null, "Room"), /*#__PURE__*/React.createElement("span", null, "Patient"), /*#__PURE__*/React.createElement("span", null, "Procedure"), /*#__PURE__*/React.createElement("span", null, "Status"), /*#__PURE__*/React.createElement("span", {
  style: {
    textAlign: "right"
  }
}, "Elapsed")), ROOMS.map((r, i) => /*#__PURE__*/React.createElement("div", {
  key: i,
  style: {
    display: "grid",
    gridTemplateColumns: "90px 1.4fr 1.4fr 1fr 110px",
    gap: 12,
    alignItems: "center",
    padding: "12px 4px",
    borderBottom: i < ROOMS.length - 1 ? "1px solid var(--ink-100)" : "none"
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: "var(--font-mono)",
    fontWeight: 600,
    fontSize: 13,
    color: "var(--fg-1)"
  }
}, r.room), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    alignItems: "center",
    gap: 10
  }
}, /*#__PURE__*/React.createElement(Avatar, {
  initials: r.pt.split(" ")[1][0] + r.pt[0],
  size: 30
}), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 13,
    fontWeight: 600,
    color: "var(--fg-1)"
  }
}, r.pt), /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 10.5,
    color: "var(--fg-3)",
    fontFamily: "var(--font-mono)"
  }
}, "MRN-", r.mrn))), /*#__PURE__*/React.createElement("span", {
  style: {
    fontSize: 13,
    color: "var(--fg-2)"
  }
}, r.proc), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Badge, {
  tone: r.tone,
  pulse: r.tone === "critical"
}, r.st)), /*#__PURE__*/React.createElement("span", {
  style: {
    textAlign: "right",
    fontFamily: "var(--font-mono)",
    fontSize: 13,
    color: "var(--fg-1)"
  }
}, r.t))));

// ---------- Live Monitoring ----------
const MON = [{
  room: "OR-01",
  pt: "M. Juarez",
  hr: 72,
  spo2: 98,
  tone: "stable"
}, {
  room: "OR-04",
  pt: "D. Kim",
  hr: 88,
  spo2: 95,
  tone: "delayed"
}, {
  room: "OR-07",
  pt: "S. Patel",
  hr: 67,
  spo2: 99,
  tone: "stable"
}, {
  room: "OR-09",
  pt: "L. Tran",
  hr: 121,
  spo2: 89,
  tone: "critical"
}, {
  room: "PACU-2",
  pt: "R. Osei",
  hr: 76,
  spo2: 97,
  tone: "info"
}, {
  room: "OR-12",
  pt: "A. Silva",
  hr: 70,
  spo2: 98,
  tone: "stable"
}];
const MonitorScreen = () => /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    marginBottom: 16
  }
}, /*#__PURE__*/React.createElement(Badge, {
  tone: "live",
  pulse: true
}, "Ambient AI \xB7 14 rooms live"), /*#__PURE__*/React.createElement("span", {
  style: {
    fontSize: 13,
    color: "var(--fg-2)"
  }
}, "Computer-vision monitoring with automated sentinel-event detection.")), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "grid",
    gridTemplateColumns: "repeat(3,1fr)",
    gap: 16
  }
}, MON.map((m, i) => /*#__PURE__*/React.createElement("div", {
  key: i,
  style: {
    background: "var(--bg-surface)",
    border: "1px solid var(--border)",
    borderRadius: "var(--r-lg)",
    overflow: "hidden",
    boxShadow: "var(--shadow-sm)"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    height: 132,
    background: m.tone === "critical" ? "linear-gradient(135deg,#2a2228,#1c2128)" : "linear-gradient(135deg,#0A3A41,#1c2128)",
    position: "relative",
    display: "grid",
    placeItems: "center"
  }
}, /*#__PURE__*/React.createElement(Icon, {
  name: "video",
  style: {
    color: "rgba(255,255,255,.22)",
    fontSize: 34
  }
}), /*#__PURE__*/React.createElement("div", {
  style: {
    position: "absolute",
    top: 10,
    left: 12,
    display: "flex",
    alignItems: "center",
    gap: 6,
    fontSize: 11,
    fontFamily: "var(--font-mono)",
    color: "#fff"
  }
}, /*#__PURE__*/React.createElement("span", {
  className: "cm-pulse",
  style: {
    width: 7,
    height: 7,
    borderRadius: "50%",
    background: m.tone === "critical" ? "var(--blush)" : "var(--puerto-rico)"
  }
}), m.room), m.tone === "critical" && /*#__PURE__*/React.createElement("div", {
  style: {
    position: "absolute",
    bottom: 10,
    left: 12,
    right: 12
  }
}, /*#__PURE__*/React.createElement(Badge, {
  tone: "critical",
  pulse: true,
  icon: "triangle-exclamation"
}, "SpO\u2082 desaturation"))), /*#__PURE__*/React.createElement("div", {
  style: {
    padding: "12px 14px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  }
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 13,
    fontWeight: 600,
    color: "var(--fg-1)"
  }
}, m.pt), /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 11,
    color: "var(--fg-3)"
  }
}, "Anesthesia \xB7 Gen")), /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 13,
    textAlign: "right",
    color: "var(--fg-1)"
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    color: m.hr > 100 ? "#8A2F3B" : "var(--brand-hover)"
  }
}, "\u2665 ", m.hr), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
  style: {
    color: m.spo2 < 92 ? "#8A2F3B" : "var(--fg-2)",
    fontSize: 12
  }
}, "SpO\u2082 ", m.spo2, "%")))))));

// ---------- Generic placeholder for unbuilt sections ----------
const Placeholder = ({
  icon,
  title
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    display: "grid",
    placeItems: "center",
    padding: "80px 0",
    color: "var(--fg-3)"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    width: 64,
    height: 64,
    borderRadius: 18,
    background: "var(--brand-tint)",
    color: "var(--brand)",
    display: "grid",
    placeItems: "center",
    fontSize: 26,
    marginBottom: 16
  }
}, /*#__PURE__*/React.createElement(Icon, {
  name: icon
})), /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 600,
    fontSize: 18,
    color: "var(--fg-1)"
  }
}, title), /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 13,
    marginTop: 6,
    maxWidth: 380,
    textAlign: "center",
    lineHeight: 1.55
  }
}, "This module is part of the Core Mobile platform. Provide product designs to recreate it pixel-exact."));
Object.assign(window, {
  OverviewScreen,
  MonitorScreen,
  Placeholder
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/clinical-console/screens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/coreypatient-app/ios-frame.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)

/* BEGIN USAGE */
// iOS.jsx — Simplified iOS 26 (Liquid Glass) device frame
// Based on the iOS 26 UI Kit + Figma status bar spec. No assets, no deps.
// Exports (to window): IOSDevice, IOSStatusBar, IOSNavBar, IOSGlassPill, IOSList, IOSListRow, IOSKeyboard
//
// Usage — wrap your screen content in <IOSDevice> to get the bezel, status bar
// and home indicator (props: title, dark, keyboard):
//
//   <IOSDevice title="Settings">
//     ...your screen content...
//   </IOSDevice>
//   <IOSDevice dark title="Search" keyboard>…</IOSDevice>
/* END USAGE */

// ─────────────────────────────────────────────────────────────
// Status bar
// ─────────────────────────────────────────────────────────────
function IOSStatusBar({
  dark = false,
  time = '9:41'
}) {
  const c = dark ? '#fff' : '#000';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 154,
      alignItems: 'center',
      justifyContent: 'center',
      padding: '21px 24px 19px',
      boxSizing: 'border-box',
      position: 'relative',
      zIndex: 20,
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 1.5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: '-apple-system, "SF Pro", system-ui',
      fontWeight: 590,
      fontSize: 17,
      lineHeight: '22px',
      color: c
    }
  }, time)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 7,
      paddingTop: 1,
      paddingRight: 1
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "19",
    height: "12",
    viewBox: "0 0 19 12"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: "7.5",
    width: "3.2",
    height: "4.5",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "4.8",
    y: "5",
    width: "3.2",
    height: "7",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "9.6",
    y: "2.5",
    width: "3.2",
    height: "9.5",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14.4",
    y: "0",
    width: "3.2",
    height: "12",
    rx: "0.7",
    fill: c
  })), /*#__PURE__*/React.createElement("svg", {
    width: "17",
    height: "12",
    viewBox: "0 0 17 12"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8.5 3.2C10.8 3.2 12.9 4.1 14.4 5.6L15.5 4.5C13.7 2.7 11.2 1.5 8.5 1.5C5.8 1.5 3.3 2.7 1.5 4.5L2.6 5.6C4.1 4.1 6.2 3.2 8.5 3.2Z",
    fill: c
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.5 6.8C9.9 6.8 11.1 7.3 12 8.2L13.1 7.1C11.8 5.9 10.2 5.1 8.5 5.1C6.8 5.1 5.2 5.9 3.9 7.1L5 8.2C5.9 7.3 7.1 6.8 8.5 6.8Z",
    fill: c
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "8.5",
    cy: "10.5",
    r: "1.5",
    fill: c
  })), /*#__PURE__*/React.createElement("svg", {
    width: "27",
    height: "13",
    viewBox: "0 0 27 13"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0.5",
    y: "0.5",
    width: "23",
    height: "12",
    rx: "3.5",
    stroke: c,
    strokeOpacity: "0.35",
    fill: "none"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "2",
    width: "20",
    height: "9",
    rx: "2",
    fill: c
  }), /*#__PURE__*/React.createElement("path", {
    d: "M25 4.5V8.5C25.8 8.2 26.5 7.2 26.5 6.5C26.5 5.8 25.8 4.8 25 4.5Z",
    fill: c,
    fillOpacity: "0.4"
  }))));
}

// ─────────────────────────────────────────────────────────────
// Liquid glass pill — blur + tint + shine
// ─────────────────────────────────────────────────────────────
function IOSGlassPill({
  children,
  dark = false,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 44,
      minWidth: 44,
      borderRadius: 9999,
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: dark ? '0 2px 6px rgba(0,0,0,0.35), 0 6px 16px rgba(0,0,0,0.2)' : '0 1px 3px rgba(0,0,0,0.07), 0 3px 10px rgba(0,0,0,0.06)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 9999,
      backdropFilter: 'blur(12px) saturate(180%)',
      WebkitBackdropFilter: 'blur(12px) saturate(180%)',
      background: dark ? 'rgba(120,120,128,0.28)' : 'rgba(255,255,255,0.5)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 9999,
      boxShadow: dark ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15), inset -1px -1px 1px rgba(255,255,255,0.08)' : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)',
      border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      display: 'flex',
      alignItems: 'center',
      padding: '0 4px'
    }
  }, children));
}

// ─────────────────────────────────────────────────────────────
// Navigation bar — glass pills + large title
// ─────────────────────────────────────────────────────────────
function IOSNavBar({
  title = 'Title',
  dark = false,
  trailingIcon = true
}) {
  const muted = dark ? 'rgba(255,255,255,0.6)' : '#404040';
  const text = dark ? '#fff' : '#000';
  const pillIcon = content => /*#__PURE__*/React.createElement(IOSGlassPill, {
    dark: dark
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, content));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      paddingTop: 62,
      paddingBottom: 10,
      position: 'relative',
      zIndex: 5
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 16px'
    }
  }, pillIcon(/*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "20",
    viewBox: "0 0 12 20",
    fill: "none",
    style: {
      marginLeft: -1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M10 2L2 10l8 8",
    stroke: muted,
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), trailingIcon && pillIcon(/*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "6",
    viewBox: "0 0 22 6"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "3",
    cy: "3",
    r: "2.5",
    fill: muted
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "3",
    r: "2.5",
    fill: muted
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "19",
    cy: "3",
    r: "2.5",
    fill: muted
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 16px',
      fontFamily: '-apple-system, system-ui',
      fontSize: 34,
      fontWeight: 700,
      lineHeight: '41px',
      color: text,
      letterSpacing: 0.4
    }
  }, title));
}

// ─────────────────────────────────────────────────────────────
// Grouped list (inset card, r:26) + row (52px)
// ─────────────────────────────────────────────────────────────
function IOSListRow({
  title,
  detail,
  icon,
  chevron = true,
  isLast = false,
  dark = false
}) {
  const text = dark ? '#fff' : '#000';
  const sec = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const ter = dark ? 'rgba(235,235,245,0.3)' : 'rgba(60,60,67,0.3)';
  const sep = dark ? 'rgba(84,84,88,0.65)' : 'rgba(60,60,67,0.12)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      minHeight: 52,
      padding: '0 16px',
      position: 'relative',
      fontFamily: '-apple-system, system-ui',
      fontSize: 17,
      letterSpacing: -0.43
    }
  }, icon && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 30,
      height: 30,
      borderRadius: 7,
      background: icon,
      marginRight: 12,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      color: text
    }
  }, title), detail && /*#__PURE__*/React.createElement("span", {
    style: {
      color: sec,
      marginRight: 6
    }
  }, detail), chevron && /*#__PURE__*/React.createElement("svg", {
    width: "8",
    height: "14",
    viewBox: "0 0 8 14",
    style: {
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 1l6 6-6 6",
    stroke: ter,
    strokeWidth: "2",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), !isLast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      left: icon ? 58 : 16,
      height: 0.5,
      background: sep
    }
  }));
}
function IOSList({
  header,
  children,
  dark = false
}) {
  const hc = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const bg = dark ? '#1C1C1E' : '#fff';
  return /*#__PURE__*/React.createElement("div", null, header && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '-apple-system, system-ui',
      fontSize: 13,
      color: hc,
      textTransform: 'uppercase',
      padding: '8px 36px 6px',
      letterSpacing: -0.08
    }
  }, header), /*#__PURE__*/React.createElement("div", {
    style: {
      background: bg,
      borderRadius: 26,
      margin: '0 16px',
      overflow: 'hidden'
    }
  }, children));
}

// ─────────────────────────────────────────────────────────────
// Device frame
// ─────────────────────────────────────────────────────────────
function IOSDevice({
  children,
  width = 402,
  height = 874,
  dark = false,
  title,
  keyboard = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      height,
      borderRadius: 48,
      overflow: 'hidden',
      position: 'relative',
      background: dark ? '#000' : '#F2F2F7',
      boxShadow: '0 40px 80px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.12)',
      fontFamily: '-apple-system, system-ui, sans-serif',
      WebkitFontSmoothing: 'antialiased'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 11,
      left: '50%',
      transform: 'translateX(-50%)',
      width: 126,
      height: 37,
      borderRadius: 24,
      background: '#000',
      zIndex: 50
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 10
    }
  }, /*#__PURE__*/React.createElement(IOSStatusBar, {
    dark: dark
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    }
  }, title !== undefined && /*#__PURE__*/React.createElement(IOSNavBar, {
    title: title,
    dark: dark
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto'
    }
  }, children), keyboard && /*#__PURE__*/React.createElement(IOSKeyboard, {
    dark: dark
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 60,
      height: 34,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-end',
      paddingBottom: 8,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 139,
      height: 5,
      borderRadius: 100,
      background: dark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.25)'
    }
  })));
}

// ─────────────────────────────────────────────────────────────
// Keyboard — iOS 26 liquid glass
// ─────────────────────────────────────────────────────────────
function IOSKeyboard({
  dark = false
}) {
  const glyph = dark ? 'rgba(255,255,255,0.7)' : '#595959';
  const sugg = dark ? 'rgba(255,255,255,0.6)' : '#333';
  const keyBg = dark ? 'rgba(255,255,255,0.22)' : 'rgba(255,255,255,0.85)';

  // special-key icons
  const icons = {
    shift: /*#__PURE__*/React.createElement("svg", {
      width: "19",
      height: "17",
      viewBox: "0 0 19 17"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M9.5 1L1 9.5h4.5V16h8V9.5H18L9.5 1z",
      fill: glyph
    })),
    del: /*#__PURE__*/React.createElement("svg", {
      width: "23",
      height: "17",
      viewBox: "0 0 23 17"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M7 1h13a2 2 0 012 2v11a2 2 0 01-2 2H7l-6-7.5L7 1z",
      fill: "none",
      stroke: glyph,
      strokeWidth: "1.6",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M10 5l7 7M17 5l-7 7",
      stroke: glyph,
      strokeWidth: "1.6",
      strokeLinecap: "round"
    })),
    ret: /*#__PURE__*/React.createElement("svg", {
      width: "20",
      height: "14",
      viewBox: "0 0 20 14"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M18 1v6H4m0 0l4-4M4 7l4 4",
      fill: "none",
      stroke: "#fff",
      strokeWidth: "1.8",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }))
  };
  const key = (content, {
    w,
    flex,
    ret,
    fs = 25,
    k
  } = {}) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      height: 42,
      borderRadius: 8.5,
      flex: flex ? 1 : undefined,
      width: w,
      minWidth: 0,
      background: ret ? '#08f' : keyBg,
      boxShadow: '0 1px 0 rgba(0,0,0,0.075)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: '-apple-system, "SF Compact", system-ui',
      fontSize: fs,
      fontWeight: 458,
      color: ret ? '#fff' : glyph
    }
  }, content);
  const row = (keys, pad = 0) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6.5,
      justifyContent: 'center',
      padding: `0 ${pad}px`
    }
  }, keys.map(l => key(l, {
    flex: true,
    k: l
  })));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 15,
      borderRadius: 27,
      overflow: 'hidden',
      padding: '11px 0 2px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      boxShadow: dark ? '0 -2px 20px rgba(0,0,0,0.09)' : '0 -1px 6px rgba(0,0,0,0.018), 0 -3px 20px rgba(0,0,0,0.012)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 27,
      backdropFilter: 'blur(12px) saturate(180%)',
      WebkitBackdropFilter: 'blur(12px) saturate(180%)',
      background: dark ? 'rgba(120,120,128,0.14)' : 'rgba(255,255,255,0.25)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 27,
      boxShadow: dark ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15)' : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)',
      border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      alignItems: 'center',
      padding: '8px 22px 13px',
      width: '100%',
      boxSizing: 'border-box',
      position: 'relative'
    }
  }, ['"The"', 'the', 'to'].map((w, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 25,
      background: '#ccc',
      opacity: 0.3
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      textAlign: 'center',
      fontFamily: '-apple-system, system-ui',
      fontSize: 17,
      color: sugg,
      letterSpacing: -0.43,
      lineHeight: '22px'
    }
  }, w)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 13,
      padding: '0 6.5px',
      width: '100%',
      boxSizing: 'border-box',
      position: 'relative'
    }
  }, row(['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']), row(['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'], 20), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14.25,
      alignItems: 'center'
    }
  }, key(icons.shift, {
    w: 45,
    k: 'shift'
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6.5,
      flex: 1
    }
  }, ['z', 'x', 'c', 'v', 'b', 'n', 'm'].map(l => key(l, {
    flex: true,
    k: l
  }))), key(icons.del, {
    w: 45,
    k: 'del'
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'center'
    }
  }, key('ABC', {
    w: 92.25,
    fs: 18,
    k: 'abc'
  }), key('', {
    flex: true,
    k: 'space'
  }), key(icons.ret, {
    w: 92.25,
    ret: true,
    k: 'ret'
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 56,
      width: '100%',
      position: 'relative'
    }
  }));
}
Object.assign(window, {
  IOSDevice,
  IOSStatusBar,
  IOSNavBar,
  IOSGlassPill,
  IOSList,
  IOSListRow,
  IOSKeyboard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/coreypatient-app/ios-frame.jsx", error: String((e && e.message) || e) }); }

// ui_kits/coreypatient-app/patient-app.jsx
try { (() => {
/* global React, PIcon, PScreen, PHeader, PCard, PButton, TabBar, IOSDevice */
const {
  useState
} = React;
const JOURNEY = ["Scheduled", "Pre-op prep", "Checked in", "Surgery", "Recovery", "Discharge"];

// ---------------- Home ----------------
function HomeScreen({
  step,
  onCheckIn
}) {
  return /*#__PURE__*/React.createElement(PScreen, {
    bg: "var(--bg-canvas)"
  }, /*#__PURE__*/React.createElement(PHeader, {
    eyebrow: "Tue \xB7 Jun 10",
    title: "Hi, Maria",
    right: /*#__PURE__*/React.createElement("div", {
      style: {
        width: 42,
        height: 42,
        borderRadius: "50%",
        background: "var(--brand-tint)",
        color: "var(--brand-hover)",
        display: "grid",
        placeItems: "center",
        fontFamily: "var(--font-display)",
        fontWeight: 700
      }
    }, "MJ")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 18px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: "var(--r-xl)",
      background: "var(--grad-brand)",
      boxShadow: "var(--shadow-brand)",
      padding: 20,
      color: "#fff",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      right: -34,
      top: -34,
      width: 130,
      height: 130,
      borderRadius: "50%",
      border: "16px solid rgba(255,255,255,.10)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      right: -8,
      top: -8,
      width: 72,
      height: 72,
      borderRadius: "50%",
      border: "11px solid rgba(255,255,255,.10)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: ".05em",
      textTransform: "uppercase",
      opacity: .85
    }
  }, "Your procedure"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 22,
      marginTop: 6
    }
  }, "Laparoscopic Cholecystectomy"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 18,
      marginTop: 16,
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      opacity: .8,
      fontSize: 11
    }
  }, "Date"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      marginTop: 2
    }
  }, "Thu, Jun 12 \xB7 7:30 AM")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      opacity: .8,
      fontSize: 11
    }
  }, "Surgeon"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      marginTop: 2
    }
  }, "Dr. M. Adkins"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 7,
      marginTop: 14,
      fontSize: 12.5,
      opacity: .9
    }
  }, /*#__PURE__*/React.createElement(PIcon, {
    name: "location-dot"
  }), " Mass Ave Surgery Center \xB7 Bethesda, MD"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px 18px 0"
    }
  }, step < 2 ? /*#__PURE__*/React.createElement(PCard, {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 12,
      background: "#E4F4EE",
      color: "#1C6B53",
      display: "grid",
      placeItems: "center",
      fontSize: 18,
      flex: "0 0 auto"
    }
  }, /*#__PURE__*/React.createElement(PIcon, {
    name: "mobile-screen-button"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 14,
      color: "var(--fg-1)"
    }
  }, "Mobile check-in is open"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: "var(--fg-2)",
      marginTop: 2
    }
  }, "Save time \u2014 check in before you arrive.")), /*#__PURE__*/React.createElement(PButton, {
    variant: "primary",
    onClick: onCheckIn
  }, "Check in")) : /*#__PURE__*/React.createElement(PCard, {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      background: "#E4F4EE",
      borderColor: "#BfE6D6"
    }
  }, /*#__PURE__*/React.createElement(PIcon, {
    name: "circle-check",
    style: {
      color: "#1C6B53",
      fontSize: 22
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 14,
      color: "#1C6B53"
    }
  }, "You're checked in"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: "#2E7A60",
      marginTop: 2
    }
  }, "Your care team has been notified.")))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "20px 18px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: "var(--fg-2)",
      marginBottom: 14,
      paddingLeft: 4
    }
  }, "Your care journey"), /*#__PURE__*/React.createElement(PCard, null, JOURNEY.map((s, i) => {
    const done = i < step,
      cur = i === step;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: "flex",
        gap: 13,
        alignItems: "flex-start"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        alignSelf: "stretch"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 24,
        height: 24,
        borderRadius: "50%",
        flex: "0 0 auto",
        display: "grid",
        placeItems: "center",
        fontSize: 11,
        color: "#fff",
        background: done ? "var(--brand)" : cur ? "var(--puerto-rico)" : "var(--ink-200)"
      }
    }, done ? /*#__PURE__*/React.createElement(PIcon, {
      name: "check"
    }) : cur ? /*#__PURE__*/React.createElement("span", {
      className: "cm-pulse",
      style: {
        width: 8,
        height: 8,
        borderRadius: "50%",
        background: "#fff"
      }
    }) : /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--ink-400)"
      }
    }, i + 1)), i < JOURNEY.length - 1 && /*#__PURE__*/React.createElement("div", {
      style: {
        width: 2,
        flex: 1,
        minHeight: 22,
        background: done ? "var(--brand)" : "var(--ink-200)"
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        paddingBottom: i < JOURNEY.length - 1 ? 14 : 0,
        paddingTop: 2
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        fontWeight: cur ? 700 : 600,
        color: done || cur ? "var(--fg-1)" : "var(--fg-3)"
      }
    }, s), cur && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: "var(--brand-hover)",
        marginTop: 2
      }
    }, "In progress")));
  }))));
}

// ---------------- Care Plan ----------------
const CHECKLIST = [{
  t: "Stop eating after midnight",
  d: "No food or drink 8 hrs before surgery",
  done: true
}, {
  t: "Shower with antiseptic soap",
  d: "The evening before and morning of",
  done: true
}, {
  t: "Arrange a ride home",
  d: "You can't drive for 24 hrs after anesthesia",
  done: false
}, {
  t: "Remove jewelry & nail polish",
  d: "Before arriving at the center",
  done: false
}, {
  t: "Bring your insurance card & ID",
  d: "And a list of current medications",
  done: false
}];
function CareScreen() {
  const [items, setItems] = useState(CHECKLIST);
  const toggle = i => setItems(items.map((x, j) => j === i ? {
    ...x,
    done: !x.done
  } : x));
  const done = items.filter(x => x.done).length;
  return /*#__PURE__*/React.createElement(PScreen, {
    bg: "var(--bg-canvas)"
  }, /*#__PURE__*/React.createElement(PHeader, {
    eyebrow: "Pre-op preparation",
    title: "Care Plan"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 18px"
    }
  }, /*#__PURE__*/React.createElement(PCard, {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 46,
      height: 46,
      flex: "0 0 auto"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "46",
    height: "46",
    viewBox: "0 0 46 46",
    style: {
      transform: "rotate(-90deg)"
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "23",
    cy: "23",
    r: "19",
    fill: "none",
    stroke: "var(--ink-150)",
    strokeWidth: "6"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "23",
    cy: "23",
    r: "19",
    fill: "none",
    stroke: "var(--brand)",
    strokeWidth: "6",
    strokeLinecap: "round",
    strokeDasharray: `${done / items.length * 119} 119`
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "grid",
      placeItems: "center",
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      fontWeight: 600,
      color: "var(--fg-1)"
    }
  }, done, "/", items.length)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 14,
      color: "var(--fg-1)"
    }
  }, "You're almost ready"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: "var(--fg-2)",
      marginTop: 2
    }
  }, "Complete every step before Jun 12."))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, items.map((x, i) => /*#__PURE__*/React.createElement(PCard, {
    key: i,
    onClick: () => toggle(i),
    style: {
      display: "flex",
      gap: 13,
      alignItems: "flex-start",
      padding: 15,
      cursor: "pointer",
      opacity: x.done ? .7 : 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 24,
      height: 24,
      borderRadius: 7,
      flex: "0 0 auto",
      display: "grid",
      placeItems: "center",
      fontSize: 12,
      marginTop: 1,
      background: x.done ? "var(--brand)" : "#fff",
      border: x.done ? "none" : "1.5px solid var(--border-strong)",
      color: "#fff"
    }
  }, x.done && /*#__PURE__*/React.createElement(PIcon, {
    name: "check"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: "var(--fg-1)",
      textDecoration: x.done ? "line-through" : "none"
    }
  }, x.t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: "var(--fg-3)",
      marginTop: 2
    }
  }, x.d)))))));
}

// ---------------- Messages ----------------
const THREAD = [{
  me: false,
  t: "Hi Maria! I'm Angelique, your PACU nurse. Ready to answer any questions before Thursday. 💬",
  time: "9:02 AM"
}, {
  me: true,
  t: "Thank you! Can I take my usual blood-pressure medication that morning?",
  time: "9:04 AM"
}, {
  me: false,
  t: "Yes — take it with a small sip of water. Skip everything else after midnight.",
  time: "9:06 AM"
}];
function MessagesScreen() {
  return /*#__PURE__*/React.createElement(PScreen, null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "6px 18px 16px",
      display: "flex",
      alignItems: "center",
      gap: 12,
      borderBottom: "1px solid var(--border)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 42,
      height: 42,
      borderRadius: "50%",
      background: "var(--brand-tint)",
      color: "var(--brand-hover)",
      display: "grid",
      placeItems: "center",
      fontFamily: "var(--font-display)",
      fontWeight: 700
    }
  }, "AC"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 15,
      color: "var(--fg-1)"
    }
  }, "Care Team \xB7 Mass Ave"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "#1C6B53",
      display: "flex",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: "50%",
      background: "#2E9E7B"
    }
  }), "Angelique is online")), /*#__PURE__*/React.createElement(PIcon, {
    name: "phone",
    style: {
      color: "var(--brand)",
      fontSize: 17
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 18,
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, THREAD.map((m, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      alignSelf: m.me ? "flex-end" : "flex-start",
      maxWidth: "78%"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "11px 14px",
      borderRadius: m.me ? "16px 16px 4px 16px" : "16px 16px 16px 4px",
      background: m.me ? "var(--brand)" : "var(--ink-100)",
      color: m.me ? "#fff" : "var(--fg-1)",
      fontSize: 14,
      lineHeight: 1.45
    }
  }, m.t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10.5,
      color: "var(--fg-3)",
      marginTop: 4,
      textAlign: m.me ? "right" : "left",
      fontFamily: "var(--font-mono)"
    }
  }, m.time)))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 84,
      padding: "10px 16px",
      background: "#fff",
      borderTop: "1px solid var(--border)",
      display: "flex",
      gap: 10,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      background: "var(--ink-100)",
      borderRadius: "var(--r-pill)",
      padding: "11px 16px",
      color: "var(--ink-400)",
      fontSize: 14
    }
  }, "Message your care team\u2026"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: "50%",
      background: "var(--brand)",
      color: "#fff",
      display: "grid",
      placeItems: "center",
      flex: "0 0 auto"
    }
  }, /*#__PURE__*/React.createElement(PIcon, {
    name: "arrow-up"
  }))));
}

// ---------------- Profile ----------------
function ProfileScreen() {
  const rows = [{
    i: "id-card",
    l: "MRN",
    v: "MRN-0093412"
  }, {
    i: "cake-candles",
    l: "Date of birth",
    v: "Mar 14, 1981"
  }, {
    i: "shield-heart",
    l: "Insurance",
    v: "BlueCross · PPO"
  }, {
    i: "hospital",
    l: "Facility",
    v: "Mass Ave Surgery Center"
  }, {
    i: "user-doctor",
    l: "Primary surgeon",
    v: "Dr. M. Adkins"
  }];
  return /*#__PURE__*/React.createElement(PScreen, {
    bg: "var(--bg-canvas)"
  }, /*#__PURE__*/React.createElement(PHeader, {
    title: "Profile"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 18px"
    }
  }, /*#__PURE__*/React.createElement(PCard, {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 56,
      borderRadius: "50%",
      background: "var(--grad-brand)",
      color: "#fff",
      display: "grid",
      placeItems: "center",
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 20
    }
  }, "MJ"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 18,
      color: "var(--fg-1)"
    }
  }, "Maria Juarez"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--fg-2)"
    }
  }, "Patient \xB7 Active care plan"))), /*#__PURE__*/React.createElement(PCard, {
    style: {
      padding: 0
    }
  }, rows.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 13,
      padding: "14px 16px",
      borderBottom: i < rows.length - 1 ? "1px solid var(--ink-100)" : "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 32,
      height: 32,
      borderRadius: 9,
      background: "var(--brand-tint)",
      color: "var(--brand-hover)",
      display: "grid",
      placeItems: "center",
      fontSize: 13,
      flex: "0 0 auto"
    }
  }, /*#__PURE__*/React.createElement(PIcon, {
    name: r.i
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: "var(--fg-3)",
      flex: 1
    }
  }, r.l), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      fontWeight: 600,
      color: "var(--fg-1)",
      fontFamily: r.l === "MRN" ? "var(--font-mono)" : "inherit"
    }
  }, r.v)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 8,
      marginTop: 18,
      fontSize: 11.5,
      color: "var(--fg-3)"
    }
  }, /*#__PURE__*/React.createElement(PIcon, {
    name: "lock"
  }), " Protected by HIPAA \xB7 FISMA \xB7 National ATO")));
}

// ---------------- App shell ----------------
function PatientApp() {
  const [tab, setTab] = useState("home");
  const [step, setStep] = useState(1); // 1 = Pre-op prep
  const checkIn = () => {
    setStep(2);
  };
  return /*#__PURE__*/React.createElement(IOSDevice, null, /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      position: "relative",
      overflow: "hidden",
      background: "var(--bg-canvas)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      overflowY: "auto"
    }
  }, tab === "home" && /*#__PURE__*/React.createElement(HomeScreen, {
    step: step,
    onCheckIn: checkIn
  }), tab === "care" && /*#__PURE__*/React.createElement(CareScreen, null), tab === "messages" && /*#__PURE__*/React.createElement(MessagesScreen, null), tab === "profile" && /*#__PURE__*/React.createElement(ProfileScreen, null)), /*#__PURE__*/React.createElement(TabBar, {
    active: tab,
    onNav: setTab,
    badge: 1
  })));
}
Object.assign(window, {
  PatientApp
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/coreypatient-app/patient-app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/coreypatient-app/patient-ui.jsx
try { (() => {
/* global React */
// CoreyPatient — mobile app UI atoms
const {
  useState: usePState
} = React;
const PIcon = ({
  name,
  solid = true,
  style
}) => /*#__PURE__*/React.createElement("i", {
  className: `fa-${solid ? "solid" : "regular"} fa-${name}`,
  style: style
});

// Screen scaffold — top padding clears the status bar / island
const PScreen = ({
  children,
  bg = "var(--bg-surface)"
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    minHeight: "100%",
    background: bg,
    paddingTop: 58,
    paddingBottom: 96,
    fontFamily: "var(--font-sans)"
  }
}, children);
const PHeader = ({
  eyebrow,
  title,
  right
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    padding: "6px 22px 14px",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "space-between"
  }
}, /*#__PURE__*/React.createElement("div", null, eyebrow && /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 12,
    fontWeight: 700,
    letterSpacing: ".05em",
    textTransform: "uppercase",
    color: "var(--brand)"
  }
}, eyebrow), /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: 26,
    color: "var(--fg-1)",
    lineHeight: 1.1,
    marginTop: 3
  }
}, title)), right);
const PCard = ({
  children,
  style,
  onClick
}) => /*#__PURE__*/React.createElement("div", {
  onClick: onClick,
  style: {
    background: "var(--bg-surface)",
    border: "1px solid var(--border)",
    borderRadius: "var(--r-lg)",
    boxShadow: "var(--shadow-sm)",
    padding: 18,
    ...style
  }
}, children);
const PButton = ({
  children,
  icon,
  variant = "primary",
  onClick,
  full
}) => {
  const v = {
    primary: {
      background: "var(--brand)",
      color: "#fff",
      border: "none",
      boxShadow: "var(--shadow-brand)"
    },
    soft: {
      background: "var(--brand-tint)",
      color: "var(--brand-hover)",
      border: "none"
    },
    ghost: {
      background: "#fff",
      color: "var(--fg-1)",
      border: "1.5px solid var(--border-strong)"
    }
  }[variant];
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      ...v,
      width: full ? "100%" : "auto",
      padding: "14px 20px",
      borderRadius: "var(--r-md)",
      fontFamily: "var(--font-sans)",
      fontSize: 15,
      fontWeight: 700,
      cursor: "pointer",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 9
    }
  }, icon && /*#__PURE__*/React.createElement(PIcon, {
    name: icon
  }), children);
};

// Bottom tab bar
const TABS = [{
  id: "home",
  label: "Home",
  icon: "house"
}, {
  id: "care",
  label: "Care Plan",
  icon: "list-check"
}, {
  id: "messages",
  label: "Messages",
  icon: "comment-medical"
}, {
  id: "profile",
  label: "Profile",
  icon: "user"
}];
const TabBar = ({
  active,
  onNav,
  badge
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 84,
    zIndex: 40,
    background: "rgba(255,255,255,0.86)",
    backdropFilter: "blur(18px)",
    WebkitBackdropFilter: "blur(18px)",
    borderTop: "1px solid var(--border)",
    display: "flex",
    paddingBottom: 18
  }
}, TABS.map(t => {
  const on = active === t.id;
  return /*#__PURE__*/React.createElement("button", {
    key: t.id,
    onClick: () => onNav(t.id),
    style: {
      flex: 1,
      border: "none",
      background: "transparent",
      cursor: "pointer",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 4,
      paddingTop: 10,
      color: on ? "var(--brand)" : "var(--ink-400)",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement(PIcon, {
    name: t.icon,
    style: {
      fontSize: 19
    }
  }), t.id === "messages" && badge > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: -5,
      right: -9,
      background: "var(--blush)",
      color: "#fff",
      fontSize: 9,
      fontWeight: 700,
      borderRadius: 8,
      minWidth: 15,
      height: 15,
      display: "grid",
      placeItems: "center",
      fontFamily: "var(--font-mono)"
    }
  }, badge)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10.5,
      fontWeight: on ? 700 : 500
    }
  }, t.label));
}));
Object.assign(window, {
  PIcon,
  PScreen,
  PHeader,
  PCard,
  PButton,
  TabBar
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/coreypatient-app/patient-ui.jsx", error: String((e && e.message) || e) }); }

})();
