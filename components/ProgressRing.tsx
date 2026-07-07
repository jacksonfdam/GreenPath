interface ProgressRingProps {
  /** Completion from 0 to 1. */
  ratio: number;
  size?: number;
  label?: string;
}

export default function ProgressRing({ ratio, size = 120, label }: ProgressRingProps) {
  const clamped = Math.min(1, Math.max(0, ratio));
  const stroke = 10;
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - clamped);
  const percent = Math.round(clamped * 100);

  return (
    <div
      className="inline-flex flex-col items-center"
      role="img"
      aria-label={`${label ? `${label}: ` : ""}${percent} percent complete`}
    >
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth={stroke}
          className="text-slate-200 dark:text-slate-800"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
          className="text-pass transition-[stroke-dashoffset] duration-500"
        />
        <text
          x="50%"
          y="50%"
          dominantBaseline="central"
          textAnchor="middle"
          className="fill-current font-bold"
          style={{ fontSize: size * 0.22 }}
        >
          {percent}%
        </text>
      </svg>
      {label ? <span className="mt-2 text-sm text-slate-500 dark:text-slate-400">{label}</span> : null}
    </div>
  );
}
