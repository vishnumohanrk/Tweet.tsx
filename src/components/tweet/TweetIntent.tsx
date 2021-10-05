import { TwitterLink } from '../TwitterLink';

export const TweetIntent = ({ id }: { id: string }) => {
  const intentArr = [
    {
      link: `intent/tweet?in_reply_to=${id}`,
      name: 'reply',
      svgD: 'M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.045.286.12.403.143.225.385.347.633.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.368-3.43-7.788-7.8-7.79zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.334-.75-.75-.75h-.395c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z',
      color:
        'hover:bg-blue/10 focus-visible:bg-blue/10 hover:text-blue focus-visible:text-blue active:bg-blue/20',
    },
    {
      link: `intent/retweet?tweet_id=${id}`,
      name: 'retweet',
      svgD: 'M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z',
      color:
        'hover:bg-green/10 focus-visible:bg-green/10 hover:text-green focus-visible:text-green active:bg-green/20',
    },
    {
      link: `intent/like?tweet_id=${id}`,
      name: 'like',
      svgD: 'M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.813-1.148 2.353-2.73 4.644-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.375-7.454 13.11-10.037 13.156H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.035 11.596 8.55 11.658 1.52-.062 8.55-5.917 8.55-11.658 0-2.267-1.822-4.255-3.902-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.015-.03-1.426-2.965-3.955-2.965z',
      color:
        'hover:bg-pink/10 focus-visible:bg-pink/10 hover:text-pink focus-visible:text-pink active:bg-pink/20',
    },
  ] as const;

  return (
    <div className="flex py-1 justify-around text-secondaryText border-b">
      {intentArr.map(i => (
        <TwitterLink
          key={i.name}
          path={i.link}
          aria-label={i.name}
          className={`p-2.5 rounded-full transition-colors ${i.color}`}
        >
          <svg width="21" height="21" viewBox="0 0 24 24">
            <path className="fill-current" d={i.svgD} />
          </svg>
        </TwitterLink>
      ))}
    </div>
  );
};
