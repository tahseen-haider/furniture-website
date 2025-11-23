import Heading from '../atoms/Heading';
import Paragraph from '../atoms/Paragraph';
import Button from '../atoms/Button';

export default function HeroContentBlock() {
  return (
    <div className="w-1/2 max-w-[643px] h-[443px] bg-(--color-bg-tertiary) rounded-xl absolute top-1/2 -translate-y-1/2 left-1/2 flex justify-center items-center px-8">
      <div className="flex flex-col gap-4">
        <Paragraph variant="F">New Arrival</Paragraph>
        <Heading variant="primary" className="text-(--text-primary)">
          Discover Our New Collection
        </Heading>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
          ullamcorper mattis.
        </Paragraph>
        <Button className="text-white" rounded>
          BUY NOW
        </Button>
      </div>
    </div>
  );
}
