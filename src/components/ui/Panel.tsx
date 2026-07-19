import { cn } from "@/lib/cn";

export function Panel({
  children,
  className,
  title,
  eyebrow,
  action,
}: {
  children: React.ReactNode;
  className?: string;
  title?: string;
  eyebrow?: string;
  action?: React.ReactNode;
}) {
  return (
    <section className={cn("card overflow-hidden", className)}>
      {(title || eyebrow || action) && (
        <header className="flex items-start justify-between gap-3 border-b border-[var(--line)] px-4 py-3.5 md:px-5">
          <div>
            {eyebrow ? (
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
                {eyebrow}
              </p>
            ) : null}
            {title ? (
              <h2 className="mt-0.5 font-[family-name:var(--font-display)] text-lg tracking-tight text-[var(--ink)] md:text-xl">
                {title}
              </h2>
            ) : null}
          </div>
          {action}
        </header>
      )}
      <div className="px-4 py-4 md:px-5 md:py-5">{children}</div>
    </section>
  );
}

export function Button({
  children,
  className,
  variant = "primary",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
}) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-xl px-3.5 py-2 text-sm font-medium transition disabled:opacity-50",
        variant === "primary" &&
          "bg-[var(--accent)] text-[#062016] shadow-[0_8px_24px_rgba(45,212,160,0.25)] hover:bg-[var(--accent-strong)]",
        variant === "secondary" &&
          "border border-[var(--line-strong)] bg-[var(--bg-soft)] text-[var(--ink)] hover:border-[var(--accent)]/40",
        variant === "ghost" && "text-[var(--muted)] hover:bg-[var(--bg-soft)] hover:text-[var(--ink)]",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
