import React from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import Typography from '../typography';
import Button from '../button';

const classesSchema = {
  base: 'absolute flex flex-col left-[50%] -translate-x-1/2 bottom-0 w-full sm:max-w-[448px] xl:max-w-[656px] bg-black bg-opacity-[0.5] py-[40px] px-[16px] sm:px-[40px] md:px-[56px] lg:px-[32px] xl:py-[80px] xl:px-[48px]',
};

export interface BannerContentBoxProps {
  title: string;
  content: string;
  buttonName: string;
  additionalButtonName: string;
  link?: string;
  secondLink?: string;
  className?: string;
}

const BannerContentBox = ({
  title,
  content,
  buttonName,
  additionalButtonName,
  link,
  className,
}: BannerContentBoxProps) => {
  const BannerContentBoxClasses = clsx([classesSchema.base, className]);

  return (
    <div className={BannerContentBoxClasses}>
      <Typography variant="h4" className="text-white mb-[16px]">
        {title}
      </Typography>
      <Typography
        variant="md"
        className={`text-white ${
          buttonName || additionalButtonName ? ' pb-[32px]' : ''
        }`}
      >
        {content}
      </Typography>
      <div className="flex gap-x-[25px]">
        {buttonName ? (
          <Link href={link!}>
            <Button
              variant="outline"
              className="flex justify-center w-full text-white background-none font-thin border-white"
            >
              {buttonName}
            </Button>
          </Link>
        ) : null}
      </div>
    </div>
  );
};

export default BannerContentBox;
