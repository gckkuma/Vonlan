import type { ReactNode } from 'react';

/** Shared field shell: label, required marker, error text. */
export function Field({
  label,
  htmlFor,
  required,
  error,
  hint,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  error?: string;
  hint?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-medium text-brand-dark">
        {label}
        {required && <span className="text-brand-green"> *</span>}
        {!required && <span className="ml-1 text-xs font-normal text-brand-muted">(optional)</span>}
      </label>
      {children}
      {hint && !error && <p className="mt-1 text-xs text-brand-muted">{hint}</p>}
      {error && <p className="mt-1 text-xs font-medium text-red-600">{error}</p>}
    </div>
  );
}

export const inputClass =
  'w-full rounded-lg border border-brand-stone bg-white px-3.5 py-2.5 text-sm text-brand-dark placeholder:text-brand-muted/60 transition-colors focus:border-brand-green focus:outline-none focus:ring-2 focus:ring-brand-green/20';
