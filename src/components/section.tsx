import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  kicker?: string;
  title: string;
  description?: string;
  children: ReactNode;
};

export function Section({
  id,
  kicker,
  title,
  description,
  children,
}: SectionProps) {
  return (
    <section id={id} className="space-y-8">
      <header className="space-y-3">
        {kicker ? (
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
            {kicker}
          </p>
        ) : null}
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          {title}
        </h2>
        {description ? (
          <p className="max-w-3xl text-base text-zinc-300">{description}</p>
        ) : null}
      </header>
      {children}
    </section>
  );
}
