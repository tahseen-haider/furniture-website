import Icon from '../atoms/Icon';
import Heading from '../atoms/Heading';
import Paragraph from '../atoms/Paragraph';

export default function Badge({ icon, title, description }) {
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
