## Bangladesh Army x Nusrat — AI Mini Film Companion

Production companion site for the YouTube Short ["বাংলাদেশ আর্মি নুসরাতকে স্কুল রক্ষা করার হাইটেক অভিযানে!"](https://youtube.com/shorts/0DowVODVnJc) by **NUR**. The experience repackages the short film’s story world with immersive hero content, story beat breakdowns, character dossiers, production notes, and viewing metrics.

### Tech Stack
- [Next.js 16 (App Router)](https://nextjs.org/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)
- TypeScript

### Local Development
```bash
npm install
npm run dev
```

### Quality Gates
```bash
npm run lint
npm run build
```

### Deployment
Production is hosted on Vercel at https://agentic-f41edb45.vercel.app  
Redeploy with:
```bash
vercel deploy --prod --yes --token $VERCEL_TOKEN --name agentic-f41edb45
```
