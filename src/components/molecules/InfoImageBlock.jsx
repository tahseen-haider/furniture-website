import { Image } from '@components';

const InfoImageBlock = () => {
  return (
    <div className="w-full sm:w-1/2 h-full max-w-140 max-h-140">
      <div className="relative h-full flex justify-center lg:justify-end">
        <div className="relative -right-10 lg:right-0">
          <Image
            src="/images/Girl.png"
            alt="About store"
            className="relative z-10 h-full right-14"
          />
          <Image
            src="/images/Ellipse.png"
            alt="Ellipse"
            className="h-1/2 absolute top-1/2 -translate-y-1/2 right-0 z-0"
          />
        </div>
      </div>
    </div>
  );
};

export default InfoImageBlock;
