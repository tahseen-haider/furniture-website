import { Heading } from '@components';
import PropTypes from 'prop-types';

const ListingPageTemplate = ({ children, title }) => {
  return (
    <div className="mx-auto flex flex-col items-center bg-(--color-surface-400)">
      <Heading level={2} variant="secondary" className="my-4">
        {title}
      </Heading>
      <div className="w-full bg-(--color-surface-300) border-b border-gray-300 shadow">
        <div className="max-w-390 mx-auto px-8 py-12 flex flex-col gap-8">{children}</div>
      </div>
    </div>
  );
};

ListingPageTemplate.PropTypes = {
  title: PropTypes.string.isRequired,
};

export default ListingPageTemplate;
