'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState } from 'react';
import { Send, CheckCircle2, ShieldCheck, Loader2 } from 'lucide-react';
import { Field, inputClass } from './FormBits';
import { useRecaptcha } from '@/lib/useRecaptcha';

const PROJECT_TYPES = [
  'Water Supply',
  'Highways',
  'Power',
  'Buildings',
  'Irrigation',
  'Sea & Airport',
  'General',
] as const;

const wordCount = (s: string) => s.trim().split(/\s+/).filter(Boolean).length;

const schema = z.object({
  name: z.string().min(2, 'Please enter your full name'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  projectType: z.enum(PROJECT_TYPES, { errorMap: () => ({ message: 'Please select a project type' }) }),
  message: z
    .string()
    .min(10, 'Please tell us a little about your project')
    .refine((v) => wordCount(v) <= 500, 'Message must be 500 words or fewer'),
});

type FormValues = z.infer<typeof schema>;

/** Variant controls the styling for light (contact page) vs dark (homepage) surfaces. */
export default function ContactForm({ variant = 'light' }: { variant?: 'light' | 'dark' }) {
  const [submitted, setSubmitted] = useState(false);
  const recaptcha = useRecaptcha();

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const message = watch('message') ?? '';
  const dark = variant === 'dark';

  const onSubmit = async (_data: FormValues) => {
    // Obtain a reCAPTCHA v3 token where configured (placeholder-safe).
    await recaptcha.execute('contact_form');
    // No backend in this build — simulate a network round-trip.
    await new Promise((r) => setTimeout(r, 700));
    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <div
        className={`flex flex-col items-center justify-center rounded-2xl p-10 text-center ${
          variant === 'dark' ? 'bg-brand-darkElevated text-white' : 'border border-brand-stone bg-white'
        }`}
      >
        <CheckCircle2 className="h-12 w-12 text-brand-green" aria-hidden />
        <h3 className="mt-4 text-xl font-bold">Thank you — message received</h3>
        <p className={`mt-2 max-w-sm text-sm ${variant === 'dark' ? 'text-white/70' : 'text-brand-muted'}`}>
          Our team will be in touch shortly to discuss your project requirements.
        </p>
        <button type="button" onClick={() => setSubmitted(false)} className="btn-outline mt-6">
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className={`rounded-2xl p-6 sm:p-8 ${
        variant === 'dark' ? 'bg-brand-darkElevated' : 'border border-brand-stone bg-white'
      }`}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" htmlFor="c-name" required error={errors.name?.message} dark={dark}>
          <input id="c-name" className={inputClass} placeholder="Your name" {...register('name')} />
        </Field>
        <Field label="Email address" htmlFor="c-email" required error={errors.email?.message} dark={dark}>
          <input id="c-email" type="email" className={inputClass} placeholder="you@company.com" {...register('email')} />
        </Field>
        <Field label="Phone number" htmlFor="c-phone" error={errors.phone?.message} dark={dark}>
          <input id="c-phone" className={inputClass} placeholder="+94 ..." {...register('phone')} />
        </Field>
        <Field label="Project type" htmlFor="c-type" required error={errors.projectType?.message} dark={dark}>
          <select id="c-type" className={inputClass} defaultValue="" {...register('projectType')}>
            <option value="" disabled>
              Select a project type
            </option>
            {PROJECT_TYPES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <div className="mt-5">
        <Field
          label="Message"
          htmlFor="c-message"
          required
          error={errors.message?.message}
          hint={`${wordCount(message)}/500 words`}
          dark={dark}
        >
          <textarea
            id="c-message"
            rows={5}
            className={inputClass}
            placeholder="Tell us about your infrastructure project..."
            {...register('message')}
          />
        </Field>
      </div>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p
          className={`flex items-center gap-1.5 text-xs ${
            variant === 'dark' ? 'text-white/50' : 'text-brand-muted'
          }`}
        >
          <ShieldCheck className="h-3.5 w-3.5" aria-hidden />
          Protected by reCAPTCHA v3
        </p>
        <button type="submit" disabled={isSubmitting} className="btn-green w-full sm:w-auto">
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden /> Sending…
            </>
          ) : (
            <>
              Send message <Send className="h-4 w-4" aria-hidden />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
