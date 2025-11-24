import { Heading, Paragraph, FooterForm } from '@/components';

export default function FooterSubscribeSection() {
  return (
    <div className="w-full max-w-[1440px] h-[363px] flex flex-col justify-center items-center text-center">
      <Heading level={4} variant="secondary">
        Join Our Mailing List
      </Heading>

      <Paragraph variant="C" className="text-(--text-tertiary) mt-4 mb-10">
        Sign up to receive inspiration, product updates, <br />
        and special offers from our team.
      </Paragraph>

      <FooterForm />
    </div>
  );
}
