import Button from '../atoms/Button';
import Heading from '../atoms/Heading';
import Paragraph from '../atoms/Paragraph';
export default function InfoContentBlock() {
  return (
    <div className="flex flex-col gap-10 w-1/2">
      <Heading variant="secondary" className="text-(--text-secondary)">
        Beautify Your Space
      </Heading>
      <Paragraph variant="C" className="text-(--text-tertiary)">
        Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
        nostrud exercitation ullamco laboris.
      </Paragraph>
      <Button rounded className="text-white">
        LEARN MORE
      </Button>
    </div>
  );
}
