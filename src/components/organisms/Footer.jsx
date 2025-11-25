import { FooterSubscribeSection, FooterInfoBlock, InstagramGallery } from '@components';

const Footer = () => {
  return (
    <footer className="w-full min-h-[749px] flex flex-col items-center bg-(--color-bg-secondary)">
      <FooterSubscribeSection />

      <div className="w-full h-[386px] bg-(--color-bg-primary-dark) text-(--text-light) p-16">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between gap-4">
          <FooterInfoBlock />
          <InstagramGallery />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
