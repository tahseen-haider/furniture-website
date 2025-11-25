import { Image } from '@/components';

const InfoImageBlock = () => {
  return (
    <div className="w-1/2">
      <div className="relative">
        <Image src="/images/Girl.png" alt="About store" className="relative z-10" />
        <div className="bg-[#09513B] rounded-full w-[372px] h-[372px] absolute z-0 top-1/2 -translate-y-1/2 right-8" />
      </div>
    </div>
  );
};

export default InfoImageBlock;
