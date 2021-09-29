type TwitterLinkProps = Omit<
  React.ComponentPropsWithoutRef<'a'>,
  'href' | 'rel' | 'target'
> & {
  path: string;
};

export const TwitterLink = (props: TwitterLinkProps) => {
  const { path, children, className = '', ...rest } = props;

  return (
    <a
      target="_blank"
      className={className}
      rel="noopener noreferrer"
      href={`https://twitter.com/${path}`}
      {...rest}
    >
      {children}
    </a>
  );
};
