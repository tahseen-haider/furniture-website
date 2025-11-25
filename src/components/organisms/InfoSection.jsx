import { InfoContentBlock, InfoImageBlock } from '@/components';

const InfoSection = () => {
  return (
    <section className="h-[874px] mx-auto p-14 flex items-center gap-4 max-w-[1440px]">
      <InfoContentBlock />
      <InfoImageBlock />
    </section>
  );
};

export default InfoSection;
