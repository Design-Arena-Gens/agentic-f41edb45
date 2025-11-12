import type { StoryBeat } from "@/data/video";
import { Film } from "lucide-react";

type StoryBeatCardProps = {
  index: number;
  beat: StoryBeat;
};

export function StoryBeatCard({ index, beat }: StoryBeatCardProps) {
  const stepNumber = String(index + 1).padStart(2, "0");

  return (
    <article className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-emerald-500/10 backdrop-blur transition hover:border-emerald-400/60">
      <div className="absolute -left-10 top-10 h-24 w-24 rounded-full bg-emerald-400/20 blur-3xl" />
      <div className="flex items-center gap-4">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-300/40 bg-emerald-400/10 text-lg font-semibold text-emerald-200">
          {stepNumber}
        </span>
        <Film className="h-6 w-6 text-emerald-200" />
      </div>
      <h3 className="mt-5 text-2xl font-semibold text-white">{beat.title}</h3>
      <p className="mt-3 text-sm text-zinc-200">{beat.summary}</p>
      <ul className="mt-4 space-y-2 text-sm text-zinc-300">
        {beat.keyMoments.map((moment) => (
          <li key={moment} className="flex items-start gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-300" />
            <span>{moment}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
