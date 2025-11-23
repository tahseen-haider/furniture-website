import Heading from '../atoms/Heading';
import Paragraph from '../atoms/Paragraph';

export default function FooterInfoBlock() {
  return (
    <div className="flex flex-col w-1/3">
      <Heading level={4} variant="tertiary">
        Beauty Care
      </Heading>

      <Paragraph variant="F" className="text-(--text-light) mt-8 mb-4">
        Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
        nostrud exercitation ullamco laboris.
      </Paragraph>

      <Heading level={4} variant="tertiary">
        Follow Us
      </Heading>
    </div>
  );
}
