import { Divider, Paragraph, Heading } from '@components';

const AuthLayout = ({ title, subtitle, children, footer }) => {
  return (
    <main className="flex flex-col items-center">
      <section className="px-2 sm:px-6 py-4 flex flex-col gap-8 max-w-[500px] w-full">
        <div className="w-full rounded-xl border border-gray-200 bg-white shadow-sm">
          <div className="p-2 sm:px-6 sm:pt-6 space-y-1 text-center">
            <Heading variant="tertiary" className="">
              {title}
            </Heading>
            {subtitle && (
              <Paragraph variant="H" className="text-gray-500">
                {subtitle}
              </Paragraph>
            )}
          </div>

          <div className="p-2 sm:p-6 space-y-6 text-gray-700">
            <button className="flex items-center justify-center gap-2 rounded-md border border-gray-500 px-4 py-2 hover:bg-gray-100 disabled:opacity-50 w-full h-11 cursor-pointer">
              <img src="/icons/google.svg" alt="Google" className="w-5 h-5" />
              Google
            </button>

            <div className="relative">
              <Divider />
              <div className="absolute inset-0 -top-1.5 flex justify-center uppercase">
                <Paragraph variant="H" className="bg-white px-2 text-xs! text-gray-500">
                  Or continue with
                </Paragraph>
              </div>
            </div>

            {children}
          </div>
          {footer && <div className="px-0 pb-6 text-center">{footer}</div>}
        </div>
      </section>
    </main>
  );
};

export default AuthLayout;
