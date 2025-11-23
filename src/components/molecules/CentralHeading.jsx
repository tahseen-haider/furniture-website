import React from 'react';
import Heading from '../atoms/Heading';
import Paragraph from '../atoms/Paragraph';

export default function CentralHeading({ title, description }) {
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
