import { InfoContentBlock, InfoImageBlock } from '@/components';

export default function InfoSection() {
  return (
    <section className="h-[874px] mx-auto p-14 flex items-center gap-4 max-w-[1440px]">
      <InfoContentBlock />
      <InfoImageBlock />
    </section>
  );
}
