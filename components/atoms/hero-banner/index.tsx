import React from 'react';
import clsx from 'clsx';
import Wrapper from '../wrapper';
import Typography, { TypographyVariant } from '../typography';

const classesSchema = {
  base: '',
  content: 'max-w-[800px]',
  title: 'font-light mb-[16px]',
};

export interface HeroBannerProps {
  title: string;
  content?: string;
  descirption?: string;
  className?: string;
  titleVariant?: string;
}

const HeroBanner = ({
  title,
  content,
  descirption,
  className,
  titleVariant,
}: HeroBannerProps) => {
  const heroBannerClasses = clsx([classesSchema.base]);
  const heroTitleClasses = clsx([classesSchema.title]);

  const typographyVariant = titleVariant
    ? (titleVariant as TypographyVariant)
    : 'h5';

  return (
    <Wrapper className={className}>
      <div className={heroBannerClasses}>
        <div className={classesSchema.content}>
          <Typography
            variant={typographyVariant}
            weight="normal"
            className={heroTitleClasses}
          >
            {title}
          </Typography>
          {descirption ? (
            <Typography variant="lg">{descirption}</Typography>
          ) : null}
          {content ? (
            <Typography variant="lg" dangerouslySetInnerHTML={content} />
          ) : null}
        </div>
      </div>
    </Wrapper>
  );
};

export default HeroBanner;
