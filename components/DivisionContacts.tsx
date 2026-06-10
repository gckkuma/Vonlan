'use client';

import { useState } from 'react';
import { Mail } from 'lucide-react';
import { DIVISIONS } from '@/lib/data/site';

/**
 * Division contact table. Email addresses are NOT rendered as plain text —
 * the user/domain parts live in component state and are only assembled into a
 * mailto link on click, deterring spam harvesters (per the content pack).
 */
export default function DivisionContacts() {
  const [revealed, setRevealed] = useState<Record<number, string>>({});

  const reveal = (i: number, user: string, domain: string) => {
    // Assemble client-side, only on user intent.
    setRevealed((prev) => ({ ...prev, [i]: `${user}@${domain}` }));
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-brand-stone">
      <table className="w-full border-collapse text-left">
        <thead className="bg-brand-offwhite">
          <tr>
            <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-brand-muted">Division</th>
            <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-brand-muted">Email</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-brand-stone">
          {DIVISIONS.map((d, i) => {
            const email = revealed[i];
            return (
              <tr key={d.division} className="bg-white">
                <td className="px-5 py-4 align-middle">
                  <span className="font-medium text-brand-dark">{d.division}</span>
                </td>
                <td className="px-5 py-4 align-middle">
                  {email ? (
                    <a
                      href={`mailto:${email}`}
                      className="text-sm font-medium text-brand-greenDark underline underline-offset-2"
                    >
                      {email}
                    </a>
                  ) : (
                    <button
                      type="button"
                      onClick={() => reveal(i, d.emailUser, d.emailDomain)}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-green hover:text-brand-greenDark"
                    >
                      <Mail className="h-4 w-4" aria-hidden />
                      Reveal email
                    </button>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
