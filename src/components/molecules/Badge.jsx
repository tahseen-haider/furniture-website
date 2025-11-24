import PropTypes from 'prop-types';
import { Icon, Heading, Paragraph } from '@/components';

function Badge({ icon, title, description }) {
  return (
    <div className="flex gap-2 items-center">
      <Icon src={icon} alt={title} className="h-[50px]" />
      <div>
        <Heading level={4} variant="tertiary" className="text-(--text-secondary)">
          {title}
        </Heading>
        <Paragraph variant="F" className="text-(--text-secondary)">
          {description}
        </Paragraph>
      </div>
    </div>
  );
}

Badge.propTypes = {
  icon: PropTypes.string.isRequired, // URL or path for the icon
  title: PropTypes.string.isRequired, // title text for the badge
  description: PropTypes.string.isRequired, // description text
};

export default Badge;
