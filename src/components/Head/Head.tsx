import { default as NextHead } from 'next/head';

type HeadProps = {
  title?: string;
  description?: string;
};

export const Head = ({ title = '', description = '' }: HeadProps = {}) => {
  console.log(title);
  return (
    <NextHead>
      <title>{title ? `${title} | Next Leap` : undefined}</title>
      <meta name="description" content={description} />
    </NextHead>
  );
};
