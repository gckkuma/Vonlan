'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { RotateCw, ArrowLeft } from 'lucide-react';

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="bg-brand-forest text-white">
      <div className="container-x flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
        <span className="text-sm font-semibold uppercase tracking-widest text-brand-green">Something went wrong</span>
        <h1 className="mt-4 text-3xl font-bold sm:text-4xl">We hit an unexpected error</h1>
        <p className="mt-4 max-w-md text-white/70">
          Please try again. If the problem persists, our team is one click away.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <button type="button" onClick={reset} className="btn-green">
            <RotateCw className="h-4 w-4" aria-hidden /> Try again
          </button>
          <Link href="/" className="btn-outline-dark">
            <ArrowLeft className="h-4 w-4" aria-hidden /> Back to home
          </Link>
        </div>
      </div>
    </section>
  );
}
