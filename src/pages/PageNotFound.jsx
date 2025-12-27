import { Heading, Paragraph, Button, Divider, Icon } from '@components';
import { useNavigate } from 'react-router-dom';

const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <section className="min-h-screen flex items-center justify-center p-4 bg-(--color-surface-300)">
      <div className="max-w-3xl w-full text-center flex flex-col items-center gap-6">
        <Heading level={1} variant="primary" className="text-red-500">
          404 — Page Not Found
        </Heading>

        <Divider className="max-w-xs" />

        <Paragraph variant="C" className="text-(--color-text-secondary)">
          The page you're looking for doesn't exist or may have been moved. <br />
          Don't worry - let's get you back on track.
        </Paragraph>

        <div className="flex flex-col items-center justify-center sm:flex-row gap-4 mt-4">
          <Button onClick={() => navigate('/')} variant="primary">
            Go to Home
          </Button>

          <Button onClick={() => navigate('/collections')} variant="secondary">
            Browse Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PageNotFound;
