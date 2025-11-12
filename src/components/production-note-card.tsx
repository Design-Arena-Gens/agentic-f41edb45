import type { ProductionNote } from "@/data/video";
import { Sparkles } from "lucide-react";

type ProductionNoteCardProps = {
  note: ProductionNote;
};

export function ProductionNoteCard({ note }: ProductionNoteCardProps) {
  return (
    <article className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-emerald-500/10 backdrop-blur transition hover:border-emerald-400/60">
      <div className="flex items-center gap-3 text-emerald-200">
        <Sparkles className="h-5 w-5" />
        <h3 className="text-lg font-semibold text-white">{note.headline}</h3>
      </div>
      <p className="mt-3 text-sm text-zinc-300">{note.details}</p>
    </article>
  );
}
