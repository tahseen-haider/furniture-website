import { InfoContentBlock, InfoImageBlock } from '@components';

const InfoSection = () => {
  return (
    <section className="min-h-[874px] mx-auto p-4 sm:p-14 flex flex-col md:flex-row justify-between items-center gap-4 max-w-[1920px]">
      <InfoContentBlock />
      <InfoImageBlock />
    </section>
  );
};

export default InfoSection;
