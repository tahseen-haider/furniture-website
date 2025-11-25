import { Heading, Paragraph, Button } from '@/components';

const HeroContentBlock = () => {
  return (
    <div className="w-1/2 max-w-[643px] h-[443px] bg-(--color-bg-tertiary) rounded-xl absolute top-1/2 -translate-y-1/2 left-1/2 flex justify-center items-center px-8">
      <div className="flex flex-col gap-4">
        <Paragraph variant="A" className="text-(--text-secondary)">
          New Arrival
        </Paragraph>
        <Heading variant="primary" className="text-(--text-primary)">
          Discover Our New Collection
        </Heading>
        <Paragraph variant="F" maxChars={140}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
          ullamcorper mattis.
        </Paragraph>
        <Button className="text-white" rounded>
          BUY NOW
        </Button>
      </div>
    </div>
  );
};

export default HeroContentBlock;
