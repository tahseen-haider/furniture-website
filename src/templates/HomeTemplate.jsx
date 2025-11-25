import {
  InspirationCard,
  BadgesSection,
  BrowseSection,
  HeroSection,
  InfoSection,
  InstructionSection,
} from '@components';

const HomeTemplate = () => {
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
};

export default HomeTemplate;
