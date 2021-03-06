import useSWR from 'swr';

import { TTweet } from '../../lib/types';
import { fetcher } from '../../lib/utils.client';
import { Spinner } from '../Spinner';
import { TweetBody } from './TweetBody';
import { TweetHeader } from './TweetHeader';
import { TweetInfo } from './TweetInfo';
import { TweetIntent } from './TweetIntent';
import { TweetMedia } from './TweetMedia';
import { TweetPoll } from './TweetPoll';
import { TweetStats } from './TweetStats';

type TweetCompProps = {
  id: string;
  // eslint-disable-next-line react/require-default-props
  isQuoted?: boolean;
};

export const Tweet = ({ id, isQuoted }: TweetCompProps) => {
  const { data, error } = useSWR<TTweet>(`/api/core/${id}`, fetcher);

  if (error) return <p>Error</p>;

  if (!data) return <Spinner />;

  const {
    author,
    info,
    stats,
    text,
    id: respID,
    media,
    quoteTweetID,
    polls,
  } = data;

  return (
    <article
      className={`border-t border-b sm:border-r sm:border-l sm:rounded md:text-sm w-full sm:max-w-[598px] ${
        isQuoted ? 'mt-2 border rounded' : ''
      }`}
    >
      <div className="px-4 pt-4">
        <TweetHeader {...author} />
        <TweetBody text={text} />
        <TweetMedia id={respID} data={media} />
        {quoteTweetID && !isQuoted ? (
          <Tweet id={quoteTweetID} isQuoted />
        ) : null}
        <TweetPoll pollObject={polls} id={respID} />
        <TweetInfo id={respID} {...info} />
        <TweetStats id={respID} stats={stats} />
      </div>
      <TweetIntent id={respID} />
    </article>
  );
};
