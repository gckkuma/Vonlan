'use client';

import { useEffect, useState } from 'react';

const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
const IS_CONFIGURED = Boolean(SITE_KEY && SITE_KEY !== 'your-recaptcha-v3-site-key');

declare global {
  interface Window {
    grecaptcha?: {
      ready: (cb: () => void) => void;
      execute: (siteKey: string, opts: { action: string }) => Promise<string>;
    };
  }
}

/**
 * Loads Google reCAPTCHA v3 (invisible) when a real site key is present in
 * NEXT_PUBLIC_RECAPTCHA_SITE_KEY. Until then it is a no-op placeholder so the
 * forms work in development without friction.
 */
export function useRecaptcha() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!IS_CONFIGURED) return;
    if (document.getElementById('recaptcha-v3')) {
      setReady(true);
      return;
    }
    const script = document.createElement('script');
    script.id = 'recaptcha-v3';
    script.src = `https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`;
    script.async = true;
    script.onload = () => setReady(true);
    document.body.appendChild(script);
  }, []);

  /** Returns a token for the given action, or null when not configured. */
  const execute = async (action: string): Promise<string | null> => {
    if (!IS_CONFIGURED || !ready || !window.grecaptcha) return null;
    return new Promise((resolve) => {
      window.grecaptcha!.ready(() => {
        window.grecaptcha!.execute(SITE_KEY as string, { action }).then(resolve).catch(() => resolve(null));
      });
    });
  };

  return { configured: IS_CONFIGURED, ready, execute };
}
