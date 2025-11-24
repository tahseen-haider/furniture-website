import PropTypes from 'prop-types';
import { Heading, Paragraph } from '@/components';

function CentralHeading({ title, description }) {
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

CentralHeading.propTypes = {
  title: PropTypes.string.isRequired, // heading text
  description: PropTypes.string.isRequired, // paragraph text
};

export default CentralHeading;
