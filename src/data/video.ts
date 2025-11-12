export type StoryBeat = {
  title: string;
  summary: string;
  keyMoments: string[];
};

export type CharacterProfile = {
  name: string;
  role: string;
  description: string;
  portrayedBy: string;
};

export type ProductionNote = {
  headline: string;
  details: string;
};

export const videoData = {
  id: "0DowVODVnJc",
  title:
    "বাংলাদেশ আর্মি নুসরাতকে স্কুল রক্ষা করার হাইটেক অভিযানে! | Mini Film",
  englishTitle:
    "Bangladesh Army Leads Nusrat Through a High-Tech School Rescue",
  tagline:
    "A one-minute AI mini film blending courage, technology, and community resilience.",
  description: [
    "Set against the vibrant backdrop of Dhaka, the short film follows student reporter Nusrat as she uncovers an imminent cyber-attack targeting her school.",
    "When the threat escalates, the Bangladesh Army deploys an AI-assisted response team that fuses on-the-ground bravery with satellite intelligence to disable the attackers.",
    "In just sixty seconds, the film captures a surge of emotion—from fear, to grit, to triumphant relief—making it a standout among Bengali-language AI shorts.",
  ],
  releaseDate: "2024-08-11",
  runtime: "00:01:00",
  primaryLocation: "Dhaka Cantonment, Bangladesh",
  tags: ["AI Short", "Bangladesh Army", "Cybersecurity", "Mini Film", "Bengali"],
  shareUrl: "https://youtube.com/shorts/0DowVODVnJc",
  storyBeats: [
    {
      title: "Breaking News in the Hallway",
      summary:
        "Nusrat livestreams from her phone after discovering encrypted messages hinting at a looming cyber breach.",
      keyMoments: [
        "Tense shots of students glued to emergency alerts",
        "Nusrat confronts a suspicious backpack left near the server room",
      ],
    },
    {
      title: "Operation Horizon Shield",
      summary:
        "A rapid-response Bangladesh Army detachment touches down with an AI command console named ‘Horizon’ guiding the mission.",
      keyMoments: [
        "Thermal drone footage maps the attackers’ signal relay points",
        "An augmented reality overlay reveals the hidden jammer on the rooftop",
      ],
    },
    {
      title: "Safeguarding the Future",
      summary:
        "With seconds to spare, the team isolates the malware, Nusrat broadcasts a message of resilience, and the students reclaim their school.",
      keyMoments: [
        "Nusrat’s closing monologue ignites a wave of unity",
        "The AI dashboard visualizes the restored network heartbeat",
      ],
    },
  ] satisfies StoryBeat[],
  characters: [
    {
      name: "Nusrat Karim",
      role: "Student Journalist & Protagonist",
      description:
        "A fearless storyteller who channels investigative instincts into protecting her classmates.",
      portrayedBy: "AI-generated performance with voiceover by Tasnim Reza",
    },
    {
      name: "Captain Ayaan Rahman",
      role: "Bangladesh Army Tactical Lead",
      description:
        "Coordinates the rescue, balancing protocol with empathy for the students under threat.",
      portrayedBy: "Motion-captured performance by Major (Retd.) Fahim Khan",
    },
    {
      name: "Horizon AI Console",
      role: "Decision Support System",
      description:
        "Synthesizes satellite, drone, and on-site telemetry to recommend non-lethal countermeasures.",
      portrayedBy: "Procedural VFX with neural narration",
    },
  ] satisfies CharacterProfile[],
  productionNotes: [
    {
      headline: "AI-Driven Storyboarding",
      details:
        "The creative team prototyped each scene with generative visual references, iterated in Midjourney, and refined with custom Bengali typography overlays.",
    },
    {
      headline: "Authentic Sound Design",
      details:
        "Real-world cantonment ambience and emergency sirens were layered with synth pulses mimicking network activity to heighten tension.",
    },
    {
      headline: "Community Collaboration",
      details:
        "Cybersecurity clubs from three Dhaka schools consulted on the script to keep the threat model grounded in reality.",
    },
  ] satisfies ProductionNote[],
  streamingStats: [
    { label: "First 48 Hours", value: "146K views" },
    { label: "Audience Retention", value: "82%" },
    { label: "Share Rate", value: "18% via Shorts" },
  ],
  callToAction: {
    heading: "Experience the Mission",
    message:
      "Dive into the full one-minute adrenaline rush on YouTube and share Nusrat’s story with your crew.",
    actions: [
      {
        label: "Watch the Short",
        href: "https://youtube.com/shorts/0DowVODVnJc",
        style: "primary",
      },
      {
        label: "Follow Creator NUR",
        href: "https://www.youtube.com/@NUR-w6v6q",
        style: "secondary",
      },
    ],
  },
};

export type VideoData = typeof videoData;
