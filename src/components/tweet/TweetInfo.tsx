import { TTweetInfo } from '../../lib/types';
import { TwitterLink } from '../TwitterLink';

type TweetInfoProps = TTweetInfo & {
  id: string;
};

export const TweetInfo = (props: TweetInfoProps) => {
  const { date, source, time, id } = props;

  return (
    <div className="flex py-3.5 text-secondaryText border-b">
      <TwitterLink path={`i/status/${id}`} className="flex hover:underline">
        <span>{time}</span>
        &nbsp;·&nbsp;
        <span>{date}</span>
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
