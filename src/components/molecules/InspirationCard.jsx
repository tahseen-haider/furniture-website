import { Image, CentralHeading } from '@/components';

export default function InspirationCard({ title, description, imgSrc, imgAlt }) {
  return (
    <div className="flex flex-col items-center text-center gap-4 my-14 px-14">
      <CentralHeading title={title} description={description} />
      <Image src={imgSrc} alt={imgAlt} className="w-full h-auto rounded-lg mt-10 max-w-[1440px]" />
    </div>
  );
}
