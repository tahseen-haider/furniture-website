import { Heading, Image } from '@/components';

const InstagramGallery = () => {
  return (
    <div className="flex flex-col gap-6">
      <Heading level={4} variant="tertiary">
        Instagram Shop
      </Heading>

      <div className="flex gap-4">
        {[1, 2, 3, 4].map((num) => (
          <Image
            key={num}
            src={`/images/IG-${num}.jpg`}
            alt={`instagram-${num}`}
            className="w-[150px] xl:w-[175px]"
          />
        ))}
      </div>
    </div>
  );
};

export default InstagramGallery;
