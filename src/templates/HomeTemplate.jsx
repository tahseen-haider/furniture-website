import InspirationCard from '../components/molecules/InspirationCard';
import BadgesSection from '../components/organisms/BadgesSection';
import BrowseSection from '../components/organisms/BrowseSection';
import HeroSection from '../components/organisms/HeroSection';
import InfoSection from '../components/organisms/InfoSection';
import InstructionSection from '../components/organisms/InstructionSection';

export default function HomeTemplate() {
  return (
    <>
      <HeroSection />
      <section className="w-full bg-(--color-bg-secondary)">
        <BadgesSection />
      </section>
      <InspirationCard
        title="Inspiration Collection"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        imgSrc="/images/Insp.png"
        imgAlt="Inspiration Collection"
      />
      <section className="w-full bg-(--color-bg-secondary)">
        <InfoSection />
      </section>
      <BrowseSection
        title="Browse The Range"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
      <InstructionSection
        title="How It Works"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
    </>
  );
}
