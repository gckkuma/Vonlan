import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <section className="bg-brand-dark text-white">
      <div className="container-x flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
        <span className="text-sm font-semibold uppercase tracking-widest text-brand-green">404</span>
        <h1 className="mt-4 text-3xl font-bold sm:text-5xl">Page not found</h1>
        <p className="mt-4 max-w-md text-white/70">
          The page you’re looking for doesn’t exist or may have moved. Let’s get you back on solid ground.
        </p>
        <Link href="/" className="btn-green mt-8">
          <ArrowLeft className="h-4 w-4" aria-hidden />
          Back to home
        </Link>
      </div>
    </section>
  );
}
