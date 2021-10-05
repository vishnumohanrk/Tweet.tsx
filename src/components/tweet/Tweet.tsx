import useSWR from 'swr';

import { TTweet } from '../../lib/types';
import { fetcher } from '../../lib/utils.client';
import { Spinner } from '../Spinner';
import { TwitterLink } from '../TwitterLink';
import { TweetBody } from './TweetBody';
import { TweetHeader } from './TweetHeader';
import { TweetInfo } from './TweetInfo';
import { TweetIntent } from './TweetIntent';
import { TweetMedia } from './TweetMedia';
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

  const { author, info, stats, text, id: respID, media, quoteTweetID } = data;

  return (
    <article
      className={`border rounded text-sm w-full max-w-[568px] p-4 pb-0 ${
        isQuoted ? 'mt-2' : ''
      }`}
    >
      <TweetHeader {...author} />
      <TweetBody text={text} />
      <TweetMedia id={respID} data={media} />
      {quoteTweetID && !isQuoted ? <Tweet id={quoteTweetID} isQuoted /> : null}
      <TweetInfo id={respID} {...info} />
      <TweetStats id={respID} stats={stats} />
      <TweetIntent id={respID} />
      <TwitterLink
        path={`i/status/${respID}`}
        className="flex justify-center hover:text-accent hover:underline py-4 font-semibold text-base"
      >
        View on Twitter
      </TwitterLink>
    </article>
  );
};
