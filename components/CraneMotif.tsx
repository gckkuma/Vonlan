/**
 * Decorative animated tower-crane line-art used as a faint backdrop on the
 * project "By the numbers" section. The trolley tracks along the jib and the
 * hook bobs; the whole crane sways gently. Disabled under reduced-motion.
 */
export default function CraneMotif({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 440 400" fill="none" aria-hidden className={className}>
      <g stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
        {/* mast */}
        <line x1="205" y1="396" x2="205" y2="112" />
        <line x1="227" y1="396" x2="227" y2="112" />
        {[360, 320, 280, 240, 200, 160, 130].map((y, i) => (
          <line key={y} x1={i % 2 ? 205 : 227} y1={y} x2={i % 2 ? 227 : 205} y2={y - 30} />
        ))}
        <g className="crane-sway">
          {/* apex */}
          <line x1="205" y1="112" x2="216" y2="64" />
          <line x1="227" y1="112" x2="216" y2="64" />
          {/* jib (top + bottom chord) */}
          <line x1="227" y1="110" x2="424" y2="110" />
          <line x1="227" y1="128" x2="416" y2="128" />
          <line x1="424" y1="110" x2="416" y2="128" />
          {[260, 300, 340, 380].map((x) => (
            <line key={x} x1={x} y1="110" x2={x - 18} y2="128" />
          ))}
          {/* counter-jib + counterweight */}
          <line x1="205" y1="110" x2="78" y2="110" />
          <line x1="205" y1="128" x2="96" y2="128" />
          <rect x="64" y="110" width="34" height="34" />
          {/* tie bars */}
          <line x1="216" y1="64" x2="350" y2="110" />
          <line x1="216" y1="64" x2="100" y2="110" />
          {/* trolley + hook */}
          <g className="crane-trolley">
            <rect x="316" y="118" width="22" height="9" />
            <g className="crane-hook">
              <line x1="327" y1="127" x2="327" y2="206" />
              <path d="M327 206 q0 12 10 12 q10 0 10 -10" />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}
