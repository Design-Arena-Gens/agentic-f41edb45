import { CalendarDays, Clock, MapPin, Play, Share2 } from "lucide-react";
import { videoData } from "@/data/video";
import { Section } from "@/components/section";
import { VideoEmbed } from "@/components/video-embed";
import { StatCard } from "@/components/stat-card";
import { StoryBeatCard } from "@/components/story-beat-card";
import { CharacterCard } from "@/components/character-card";
import { ProductionNoteCard } from "@/components/production-note-card";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-zinc-950 via-zinc-900 to-black text-white">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/3 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="absolute right-0 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.15),_transparent_55%)]" />
      </div>

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-20 px-6 py-16 sm:px-10 lg:px-16">
        <section className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6 lg:space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium text-emerald-200 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Viral YouTube Short · NUR
            </div>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              {videoData.englishTitle}
            </h1>
            <p className="text-sm font-medium text-emerald-200/80">
              Original title: {videoData.title}
            </p>
            <p className="text-lg text-zinc-200 lg:text-xl">{videoData.tagline}</p>
            <div className="space-y-3 text-base text-zinc-300">
              {videoData.description.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-3 text-sm text-emerald-200/90">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-1">
                <Clock className="h-4 w-4" />
                {videoData.runtime}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-1">
                <CalendarDays className="h-4 w-4" />
                {videoData.releaseDate}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-1">
                <MapPin className="h-4 w-4" />
                {videoData.primaryLocation}
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={videoData.shareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-6 py-3 text-base font-semibold text-emerald-950 transition hover:bg-emerald-300"
              >
                <Play className="h-5 w-5" />
                Watch the Short
              </a>
              <a
                href="https://www.youtube.com/@NUR-w6v6q"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-transparent px-6 py-3 text-base font-semibold text-emerald-200 transition hover:border-emerald-400/80 hover:text-white"
              >
                <Share2 className="h-5 w-5" />
                Creator Channel
              </a>
            </div>
            <div className="flex flex-wrap gap-2 pt-4">
              {videoData.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-medium uppercase tracking-widest text-zinc-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <VideoEmbed videoId={videoData.id} title={videoData.title} />
        </section>

        <Section
          id="stats"
          kicker="Impact Pulse"
          title="Streaming momentum in the first 48 hours"
        >
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {videoData.streamingStats.map((stat) => (
              <StatCard key={stat.label} label={stat.label} value={stat.value} />
            ))}
          </div>
        </Section>

        <Section
          id="story"
          kicker="Story Rhythm"
          title="Three beats to the mission’s heartbeat"
          description="Follow Nusrat and the Bangladesh Army through the critical checkpoints that turn a looming crisis into a victory."
        >
          <div className="grid gap-8 lg:grid-cols-3">
            {videoData.storyBeats.map((beat, index) => (
              <StoryBeatCard key={beat.title} index={index} beat={beat} />
            ))}
          </div>
        </Section>

        <Section
          id="characters"
          kicker="Character Roster"
          title="The voices that carry the story"
          description="Each performance blends AI-driven visuals with human nuance to capture the urgency of the mission."
        >
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {videoData.characters.map((character) => (
              <CharacterCard key={character.name} character={character} />
            ))}
          </div>
        </Section>

        <Section
          id="production"
          kicker="Behind the Frame"
          title="Production insights"
          description="The short fuses emergent AI pipelines with grounded research to deliver an authentic, emotionally-charged minute."
        >
          <div className="grid gap-6 lg:grid-cols-3">
            {videoData.productionNotes.map((note) => (
              <ProductionNoteCard key={note.headline} note={note} />
            ))}
          </div>
        </Section>

        <Section
          id="cta"
          kicker="Join the Mission"
          title={videoData.callToAction.heading}
          description={videoData.callToAction.message}
        >
          <div className="flex flex-wrap gap-4">
            {videoData.callToAction.actions.map((action) => (
              <a
                key={action.href}
                href={action.href}
                target="_blank"
                rel="noopener noreferrer"
                className={
                  action.style === "primary"
                    ? "inline-flex items-center gap-2 rounded-full bg-emerald-400 px-6 py-3 text-base font-semibold text-emerald-950 transition hover:bg-emerald-300"
                    : "inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-transparent px-6 py-3 text-base font-semibold text-emerald-200 transition hover:border-emerald-400/80 hover:text-white"
                }
              >
                {action.label}
              </a>
            ))}
          </div>
        </Section>
      </main>
    </div>
  );
}
