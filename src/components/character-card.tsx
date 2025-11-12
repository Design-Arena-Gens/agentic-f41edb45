import type { CharacterProfile } from "@/data/video";
import { UserRound } from "lucide-react";

type CharacterCardProps = {
  character: CharacterProfile;
};

export function CharacterCard({ character }: CharacterCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 via-white/5 to-transparent p-6 backdrop-blur transition hover:border-emerald-400/60">
      <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-emerald-400/20 blur-3xl transition group-hover:bg-emerald-400/40" />
      <UserRound className="h-10 w-10 text-emerald-300" />
      <h3 className="mt-4 text-2xl font-semibold text-white">{character.name}</h3>
      <p className="text-sm font-medium uppercase tracking-widest text-emerald-200/90">
        {character.role}
      </p>
      <p className="mt-4 text-sm text-zinc-200">{character.description}</p>
      <p className="mt-4 text-xs text-zinc-400">
        Portrayed by {character.portrayedBy}
      </p>
    </article>
  );
}
