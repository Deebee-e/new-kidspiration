import { Hero } from '@/features/landing/hero';
import { About } from '@/features/landing/about';
import { OurImpactAtGlance } from '@/features/landing/our-impact';



export default function Home() {
  return (
    <>
      <main>
        <Hero/>
        <About />
        <OurImpactAtGlance />
      </main>
    </>
  );
}
