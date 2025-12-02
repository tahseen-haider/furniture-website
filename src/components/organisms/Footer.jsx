import { FooterSubscribeSection, FooterInfoBlock, InstagramGallery } from '@components';

const Footer = () => {
  return (
    <footer className="w-full min-h-[749px] flex flex-col items-center bg-(--color-surface-100)">
      <FooterSubscribeSection />

      <div className="w-full min-h-[386px] bg-(--color-brand-primary-dark) text-(--color-text-inverse) p-4 sm:p-16">
        <div className="max-w-[1920px] mx-auto flex flex-col lg:flex-row  justify-between gap-12 sm:gap-4">
          <FooterInfoBlock />
          <InstagramGallery />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
