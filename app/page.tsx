import { Hero } from '@/components/Hero';
import { PainStats } from '@/components/PainStats';
import { PainNarrative } from '@/components/PainNarrative';
import { MeetJobberCTA } from '@/components/MeetJobberCTA';
import { Footer } from '@/components/Footer';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <PainStats />
      <PainNarrative />
      <MeetJobberCTA />
      <Footer />
    </main>
  );
}
