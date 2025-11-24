import { Heading, Paragraph } from '@/components';

export default function CentralHeading({ title, description }) {
  return (
    <>
      <Heading level={2} variant="secondary" className="text-(--text-secondary)">
        {title}
      </Heading>
      <Paragraph variant="B" className="text-(--text-tertiary)">
        {description}
      </Paragraph>
    </>
  );
}
