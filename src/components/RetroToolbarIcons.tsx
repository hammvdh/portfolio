/** 16×16 toolbar glyphs (classic app style). */

const s = { width: 16, height: 16, viewBox: '0 0 16 16', 'aria-hidden': true as const };

export function IconBack() {
  return (
    <svg {...s}>
      <polygon fill="#1a8c1a" points="10,3 3,8 10,13 10,10 14,10 14,6 10,6" />
      <polygon fill="#0d5010" points="10,4 5,8 10,12 10,9 13,9 13,7 10,7" />
    </svg>
  );
}

export function IconForward() {
  return (
    <svg {...s}>
      <polygon fill="#707070" points="6,3 13,8 6,13 6,10 2,10 2,6 6,6" />
      <polygon fill="#404040" points="6,4 11,8 6,12 6,9 3,9 3,7 6,7" />
    </svg>
  );
}

export function IconRefresh() {
  return (
    <svg {...s}>
      <path
        fill="none"
        stroke="#1a8c1a"
        strokeWidth="2"
        strokeLinecap="square"
        d="M12 3a6 6 0 1 0 1 7"
      />
      <polygon fill="#1a8c1a" points="14,1 14,5 10,4" />
    </svg>
  );
}

export function IconHome() {
  return (
    <svg {...s}>
      <polygon fill="#c06000" points="8,2 1,9 4,9 4,14 12,14 12,9 15,9" />
      <polygon fill="#804010" points="8,3 3,8 5,8 5,13 11,13 11,8 13,8" />
      <rect fill="#4a2808" x="7" y="10" width="2" height="3" />
    </svg>
  );
}

export function IconHelp() {
  return (
    <svg {...s}>
      <circle cx="8" cy="8" r="7" fill="#000080" stroke="#fff" strokeWidth="1" />
      <text x="8" y="12" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="bold" fontFamily="Tahoma, sans-serif">
        ?
      </text>
    </svg>
  );
}
