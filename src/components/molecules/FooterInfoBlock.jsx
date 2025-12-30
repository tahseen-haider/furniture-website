import { Heading, Paragraph } from '@components';

const FooterInfoBlock = () => {
  return (
    <div className="flex flex-col w-full lg:w-1/3">
      <Heading level={4} variant="tertiary">
        Beauty Care
      </Heading>

      <Paragraph variant="F" className="text-(--color-text-inverse) mt-8 mb-4">
        We create furniture that combines quality craftsmanship, modern design, and everyday comfort
        for your home.
      </Paragraph>

      <Heading level={4} variant="tertiary">
        Follow Us
      </Heading>
      <Paragraph variant="F" className="text-(--color-text-inverse) mt-2 mb-4">
        Get inspired daily by our latest designs and real customer homes.
      </Paragraph>
    </div>
  );
};

export default FooterInfoBlock;
