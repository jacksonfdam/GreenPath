/** Two deliberately plain wireframe screens for the practice exercise: a table
 *  booking form and its confirmation. Greyscale on purpose, because a wireframe
 *  is about behaviour and layout, not colour. */

function BookingForm() {
  return (
    <svg
      viewBox="0 0 300 440"
      className="h-auto w-full max-w-[280px]"
      role="img"
      aria-label="Wireframe of a Book a Table form with fields for date, time, party size, name and email, and a Book button."
    >
      <rect
        x="6"
        y="6"
        width="288"
        height="428"
        rx="16"
        className="fill-none stroke-slate-300 dark:stroke-slate-700"
        strokeWidth="1.5"
      />
      <text x="24" y="46" className="fill-slate-900 dark:fill-slate-100" fontSize="18" fontWeight="700">
        Book a Table
      </text>

      {/* Date */}
      <text x="24" y="80" className="fill-slate-500 dark:fill-slate-400" fontSize="11">Date</text>
      <rect x="24" y="88" width="252" height="30" rx="6" className="fill-slate-100 stroke-slate-300 dark:fill-slate-800 dark:stroke-slate-700" strokeWidth="1" />
      <text x="34" y="108" className="fill-slate-400" fontSize="12">dd / mm / yyyy</text>

      {/* Time */}
      <text x="24" y="140" className="fill-slate-500 dark:fill-slate-400" fontSize="11">Time</text>
      <rect x="24" y="148" width="252" height="30" rx="6" className="fill-slate-100 stroke-slate-300 dark:fill-slate-800 dark:stroke-slate-700" strokeWidth="1" />
      <text x="34" y="168" className="fill-slate-400" fontSize="12">Select a time</text>
      <path d="M262 160 l8 0 l-4 5 z" className="fill-slate-400" />

      {/* Party size */}
      <text x="24" y="200" className="fill-slate-500 dark:fill-slate-400" fontSize="11">Party size</text>
      <rect x="24" y="208" width="252" height="30" rx="6" className="fill-slate-100 stroke-slate-300 dark:fill-slate-800 dark:stroke-slate-700" strokeWidth="1" />
      <text x="34" y="228" className="fill-slate-400" fontSize="12">2</text>

      {/* Name */}
      <text x="24" y="260" className="fill-slate-500 dark:fill-slate-400" fontSize="11">Name</text>
      <rect x="24" y="268" width="252" height="30" rx="6" className="fill-slate-100 stroke-slate-300 dark:fill-slate-800 dark:stroke-slate-700" strokeWidth="1" />

      {/* Email */}
      <text x="24" y="320" className="fill-slate-500 dark:fill-slate-400" fontSize="11">Email</text>
      <rect x="24" y="328" width="252" height="30" rx="6" className="fill-slate-100 stroke-slate-300 dark:fill-slate-800 dark:stroke-slate-700" strokeWidth="1" />

      {/* Button */}
      <rect x="24" y="380" width="252" height="38" rx="8" className="fill-pass" />
      <text x="150" y="404" textAnchor="middle" className="fill-white" fontSize="14" fontWeight="600">
        Book
      </text>
    </svg>
  );
}

function BookingConfirmation() {
  return (
    <svg
      viewBox="0 0 300 440"
      className="h-auto w-full max-w-[280px]"
      role="img"
      aria-label="Wireframe of a Booking confirmed screen showing the date, time, party size and a reference number, with a Cancel booking button."
    >
      <rect
        x="6"
        y="6"
        width="288"
        height="428"
        rx="16"
        className="fill-none stroke-slate-300 dark:stroke-slate-700"
        strokeWidth="1.5"
      />

      {/* Check */}
      <circle cx="150" cy="70" r="26" className="fill-pass" />
      <path d="M138 70 l8 8 l16 -17" className="stroke-white" fill="none" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />

      <text x="150" y="122" textAnchor="middle" className="fill-slate-900 dark:fill-slate-100" fontSize="17" fontWeight="700">
        Booking confirmed
      </text>

      {/* Summary card */}
      <rect x="24" y="150" width="252" height="150" rx="10" className="fill-slate-50 stroke-slate-200 dark:fill-slate-900 dark:stroke-slate-700" strokeWidth="1" />

      <text x="40" y="182" className="fill-slate-500 dark:fill-slate-400" fontSize="11">Date</text>
      <text x="256" y="182" textAnchor="end" className="fill-slate-800 dark:fill-slate-200" fontSize="12">Today</text>

      <text x="40" y="214" className="fill-slate-500 dark:fill-slate-400" fontSize="11">Time</text>
      <text x="256" y="214" textAnchor="end" className="fill-slate-800 dark:fill-slate-200" fontSize="12">7:00 PM</text>

      <text x="40" y="246" className="fill-slate-500 dark:fill-slate-400" fontSize="11">Party size</text>
      <text x="256" y="246" textAnchor="end" className="fill-slate-800 dark:fill-slate-200" fontSize="12">2 people</text>

      <text x="40" y="278" className="fill-slate-500 dark:fill-slate-400" fontSize="11">Reference</text>
      <text x="256" y="278" textAnchor="end" className="fill-slate-800 dark:fill-slate-200" fontSize="12">BK-4821</text>

      {/* Cancel button (outline) */}
      <rect x="24" y="340" width="252" height="38" rx="8" className="fill-none stroke-slate-400 dark:stroke-slate-500" strokeWidth="1.5" />
      <text x="150" y="364" textAnchor="middle" className="fill-slate-700 dark:fill-slate-200" fontSize="14" fontWeight="600">
        Cancel booking
      </text>
    </svg>
  );
}

export default function Wireframes() {
  return (
    <div className="my-6 flex flex-wrap justify-center gap-6 rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-950">
      <figure className="flex flex-col items-center">
        <BookingForm />
        <figcaption className="mt-2 text-xs text-slate-500 dark:text-slate-400">
          Screen 1. The booking form
        </figcaption>
      </figure>
      <figure className="flex flex-col items-center">
        <BookingConfirmation />
        <figcaption className="mt-2 text-xs text-slate-500 dark:text-slate-400">
          Screen 2. The confirmation
        </figcaption>
      </figure>
    </div>
  );
}
