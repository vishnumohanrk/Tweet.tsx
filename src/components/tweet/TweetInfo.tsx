import { TTweetInfo } from '../../lib/types';
import { TwitterLink } from '../TwitterLink';

type TweetInfoProps = TTweetInfo & {
  id: string;
};

export const TweetInfo = ({ source, created_at, id }: TweetInfoProps) => {
  const date = new Date(created_at);

  return (
    <div className="flex py-3.5 text-secondaryText border-b">
      <TwitterLink path={`i/status/${id}`} className="flex hover:underline">
        <span>
          {date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </span>
        &nbsp;·&nbsp;
        <span>
          {date.toLocaleDateString([], {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
          })}
        </span>
      </TwitterLink>
      &nbsp;·&nbsp;
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="flex hover:underline"
        href="https://help.twitter.com/using-twitter/how-to-tweet#source-labels"
      >
        {source}
      </a>
    </div>
  );
};
