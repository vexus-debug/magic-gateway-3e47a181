/** Shared decorative background used by every site hero (glows + grid). */
const HeroBackdrop = () => (
  <>
    <div aria-hidden className="pointer-events-none absolute -top-32 right-[-10%] h-[28rem] w-[28rem] rounded-full bg-primary/15 blur-3xl" />
    <div aria-hidden className="pointer-events-none absolute top-1/3 left-[-8%] h-72 w-72 rounded-full bg-[hsl(var(--medical-teal))]/10 blur-3xl" />
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 opacity-[0.06]"
      style={{
        backgroundImage:
          "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
        backgroundSize: "72px 72px",
      }}
    />
  </>
);

export default HeroBackdrop;
