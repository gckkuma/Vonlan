'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState } from 'react';
import { Send, CheckCircle2, Loader2, Upload } from 'lucide-react';
import { Field, inputClass } from './FormBits';
import { ROLE_OPTIONS } from '@/lib/data/careers';

const MAX_CV_BYTES = 5 * 1024 * 1024; // 5MB
const ACCEPTED = ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];

const wordCount = (s: string) => s.trim().split(/\s+/).filter(Boolean).length;

const schema = z.object({
  name: z.string().min(2, 'Please enter your full name'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  position: z.string().min(1, 'Please select a position'),
  experience: z.coerce
    .number({ invalid_type_error: 'Enter your years of experience' })
    .int('Use a whole number')
    .min(0, 'Cannot be negative')
    .max(60, 'Please check this value'),
  employer: z.string().optional(),
  message: z
    .string()
    .optional()
    .refine((v) => !v || wordCount(v) <= 300, 'Message must be 300 words or fewer'),
  cv: z
    .any()
    .refine((files: FileList) => files?.length === 1, 'Please attach your CV')
    .refine((files: FileList) => !files?.[0] || files[0].size <= MAX_CV_BYTES, 'File must be 5MB or smaller')
    .refine((files: FileList) => !files?.[0] || ACCEPTED.includes(files[0].type), 'CV must be a PDF or DOCX'),
});

type FormValues = z.infer<typeof schema>;

export default function CareersForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const message = watch('message') ?? '';
  const cvFiles = watch('cv') as FileList | undefined;
  const cvName = cvFiles?.[0]?.name;

  const onSubmit = async (_data: FormValues) => {
    await new Promise((r) => setTimeout(r, 700));
    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-brand-stone bg-white p-10 text-center">
        <CheckCircle2 className="h-12 w-12 text-brand-green" aria-hidden />
        <h3 className="mt-4 text-xl font-bold">Application received</h3>
        <p className="mt-2 max-w-sm text-sm text-brand-muted">
          Thank you for your interest in joining Vonlan. Our HR team reviews every application and will
          be in touch if your profile matches a current opening.
        </p>
        <button type="button" onClick={() => setSubmitted(false)} className="btn-outline mt-6">
          Submit another application
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="rounded-2xl border border-brand-stone bg-white p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" htmlFor="j-name" required error={errors.name?.message}>
          <input id="j-name" className={inputClass} placeholder="Your name" {...register('name')} />
        </Field>
        <Field label="Email address" htmlFor="j-email" required error={errors.email?.message}>
          <input id="j-email" type="email" className={inputClass} placeholder="you@email.com" {...register('email')} />
        </Field>
        <Field label="Phone number" htmlFor="j-phone" error={errors.phone?.message}>
          <input id="j-phone" className={inputClass} placeholder="+94 ..." {...register('phone')} />
        </Field>
        <Field label="Position applied for" htmlFor="j-position" required error={errors.position?.message}>
          <select id="j-position" className={inputClass} defaultValue="" {...register('position')}>
            <option value="" disabled>
              Select a role
            </option>
            {ROLE_OPTIONS.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
            <option value="Other / Speculative">Other / Speculative</option>
          </select>
        </Field>
        <Field label="Years of experience" htmlFor="j-exp" required error={errors.experience?.message}>
          <input id="j-exp" type="number" min={0} className={inputClass} placeholder="e.g. 5" {...register('experience')} />
        </Field>
        <Field label="Current employer" htmlFor="j-employer" error={errors.employer?.message}>
          <input id="j-employer" className={inputClass} placeholder="Company name" {...register('employer')} />
        </Field>
      </div>

      <div className="mt-5">
        <Field
          label="Brief message"
          htmlFor="j-message"
          error={errors.message?.message}
          hint={`${wordCount(message)}/300 words`}
        >
          <textarea
            id="j-message"
            rows={4}
            className={inputClass}
            placeholder="Tell us why you'd like to join Vonlan…"
            {...register('message')}
          />
        </Field>
      </div>

      <div className="mt-5">
        <Field
          label="CV upload"
          htmlFor="j-cv"
          required
          error={errors.cv?.message as string | undefined}
          hint="PDF or DOCX, max 5MB"
        >
          <label
            htmlFor="j-cv"
            className="flex cursor-pointer items-center gap-3 rounded-lg border border-dashed border-brand-stone bg-brand-offwhite px-4 py-3 text-sm text-brand-muted transition-colors hover:border-brand-green"
          >
            <Upload className="h-4 w-4 text-brand-green" aria-hidden />
            <span className="truncate">{cvName ?? 'Choose a file…'}</span>
          </label>
          <input
            id="j-cv"
            type="file"
            accept=".pdf,.docx"
            className="sr-only"
            {...register('cv')}
          />
        </Field>
      </div>

      <button type="submit" disabled={isSubmitting} className="btn-green mt-6 w-full sm:w-auto">
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden /> Submitting…
          </>
        ) : (
          <>
            Submit application <Send className="h-4 w-4" aria-hidden />
          </>
        )}
      </button>
    </form>
  );
}
