// Product update log. RULE: every new feature, improvement or bug fix shipped
// to users must be added here as a new entry (newest first) — see AGENTS.md.

export type UpdateKind = "feature" | "improvement" | "fix";

export interface UpdateEntry {
  version: string;
  date: string; // e.g. "October 22, 2026"
  title: string;
  kind: UpdateKind;
  items: { kind: UpdateKind; text: string }[];
}

export const updates: UpdateEntry[] = [
  {
    version: "v1.6.3",
    date: "October 25, 2026",
    title: "Case credits explained, now ₦1,000 per case",
    kind: "improvement",
    items: [
      { kind: "improvement", text: "Case price is now ₦1,000 per case." },
      { kind: "feature", text: "A 'How credits work' guide with examples opens from the wallet button." },
      { kind: "feature", text: "New article explaining pay-per-case billing." },
    ],
  },
  {
    version: "v1.6.2",
    date: "October 25, 2026",
    title: "All case billing loopholes closed",
    kind: "fix",
    items: [
      { kind: "fix", text: "A patient's name and date of birth are locked after their first case." },
      { kind: "fix", text: "One case covers up to 3 visits in 30 days; the 4th visit uses a new credit." },
      { kind: "fix", text: "Moving or reopening an old appointment outside its case window uses a credit." },
      { kind: "fix", text: "Invoices, prescriptions, lab orders, documents and images now need an active case." },
      { kind: "fix", text: "Adding items to old treatment plans or prescriptions needs an active case." },
      { kind: "fix", text: "Only platform admins can change a clinic's type." },
      { kind: "fix", text: "Finished waiting-room check-ins can't be reset to waiting." },
    ],
  },
  {
    version: "v1.6.1",
    date: "October 24, 2026",
    title: "Case billing can't be bypassed",
    kind: "fix",
    items: [
      { kind: "fix", text: "Adding notes, treatment plans or chart entries for a patient without an active case now uses a case credit." },
      { kind: "fix", text: "The patient on a note, treatment plan or chart entry can no longer be changed." },
    ],
  },
  {
    version: "v1.6.0",
    date: "October 24, 2026",
    title: "Pay-per-case billing for dental clinics",
    kind: "feature",
    items: [
      { kind: "feature", text: "Dental clinics now use prepaid case credits at ₦1,000 per case; a case covers a patient for 30 days." },
      { kind: "feature", text: "Credit balance shows in the dashboard header; at zero, new visits and walk-ins are blocked while existing records stay open." },
      { kind: "improvement", text: "The patient on a visit can no longer be swapped, and deleted visits don't refund credits." },
    ],
  },
  {
    version: "v1.5.0",
    date: "October 23, 2026",
    title: "AI pre-chair patient briefing",
    kind: "feature",
    items: [
      { kind: "feature", text: "Dentists get an AI snapshot of allergies, conditions, last visit, today's plan and patient notes — in the waiting-room queue (sparkle button) and at the top of the dental chart." },
    ],
  },
  {
    version: "v1.4.4",
    date: "October 23, 2026",
    title: "Free AI models",
    kind: "improvement",
    items: [
      { kind: "improvement", text: "AI assistant now uses only free models, automatically falling back through 16 options." },
    ],
  },
  {
    version: "v1.4.3",
    date: "October 23, 2026",
    title: "AI automatic fallback",
    kind: "improvement",
    items: [
      { kind: "improvement", text: "AI assistant now switches to a backup model automatically if the main one is unavailable." },
    ],
  },
  {
    version: "v1.4.2",
    date: "October 23, 2026",
    title: "New AI provider",
    kind: "improvement",
    items: [
      { kind: "improvement", text: "ClineXus AI assistant now runs on OpenRouter." },
    ],
  },
  {
    version: "v1.4.1",
    date: "October 22, 2026",
    title: "Always-fresh app & notification check",
    kind: "improvement",
    items: [
      {
        kind: "improvement",
        text: "Installed apps now check for updates in the background every hour, so everyone is on the latest version without reinstalling or tapping anything.",
      },
      {
        kind: "feature",
        text: "The installed app now asks to turn on notifications before it opens, so no one misses clinic alerts. If notifications were blocked, the app shows how to re-enable them.",
      },
    ],
  },
  {
    version: "v1.4.0",
    date: "October 22, 2026",
    title: "Register new patients on the spot",
    kind: "feature",
    items: [
      {
        kind: "feature",
        text: "Front desk can now register a brand-new patient directly inside the Walk-In and Book Appointment forms — no more detour to the Patients page. Tap + New patient, save, and the patient is selected automatically so you can pick a dentist right away.",
      },
      {
        kind: "improvement",
        text: "Dentist assignment is now part of the same flow for receptionists and admins: register, assign a dentist, and the patient is on their schedule or in the waiting queue in one pass.",
      },
    ],
  },
];

export const kindLabel: Record<UpdateKind, string> = {
  feature: "New feature",
  improvement: "Improvement",
  fix: "Bug fix",
};
