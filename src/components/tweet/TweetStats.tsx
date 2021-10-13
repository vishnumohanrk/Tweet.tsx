import { TTweetStats } from '../../lib/types';
import { TwitterLink } from '../TwitterLink';

type TweetStatsProps = {
  id: string;
  stats: TTweetStats;
};

export const TweetStats = ({ stats, id }: TweetStatsProps) =>
  Object.values(stats).some(Boolean) ? (
    <div className="flex space-x-4 py-3.5 border-b">
      {Object.entries(stats).map(([label, value]) =>
        value ? (
          <TwitterLink
            key={label}
            className="hover:underline truncate"
            path={`i/status/${id}/${
              label === 'quote tweets' ? 'retweets/with_comments' : label
            }`}
          >
            <span className="font-bold">{value.toLocaleString('en-US')}</span>
            <span className="text-secondaryText capitalize">
              {' '}
              {value === 1 ? label.replace('s', '') : label}
            </span>
          </TwitterLink>
        ) : null,
      )}
    </div>
  ) : null;
