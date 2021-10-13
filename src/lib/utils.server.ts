import axios from 'axios';
import { formatDistanceToNowStrict } from 'date-fns';
import TwitterText from 'twitter-text';

import { TPollOption, TTweet } from './types';

const getPercent = (val: number, total: number) =>
  `${total === 0 ? 0 : ((val / total) * 100).toFixed(1).replace('.0', '')}%`;

export const getTweet = async (id: string): Promise<TTweet> => {
  const { data: resp } = await axios.get(
    `https://api.twitter.com/2/tweets/${id}`,
    {
      headers: { Authorization: `Bearer ${process.env.TWITTER_KEY}` },
      params: {
        'media.fields':
          'media_key,preview_image_url,type,url,alt_text,height,width',
        expansions:
          'author_id,attachments.media_keys,attachments.poll_ids,referenced_tweets.id',
        'poll.fields': 'end_datetime,voting_status,options,id',
        'user.fields': 'name,profile_image_url,username,verified',
        'tweet.fields':
          'author_id,created_at,id,public_metrics,text,source,attachments,referenced_tweets,entities',
      },
    },
  );

  const pollObject = resp.includes?.polls?.[0];
  const totalVotes = (pollObject?.options as TPollOption[])?.reduce(
    (i, j) => i + j.votes,
    0,
  );

  const respAuthor = resp.includes.users[0];
  const respTweet = resp.data;

  return {
    id: respTweet.id,
    info: {
      source: respTweet.source,
      created_at: respTweet.created_at,
    },
    text: TwitterText.autoLink(respTweet.text, {
      usernameIncludeSymbol: true,
      urlEntities: respTweet.entities?.urls,
    }),
    stats: {
      retweets: respTweet.public_metrics.retweet_count,
      'quote tweets': respTweet.public_metrics.quote_count,
      likes: respTweet.public_metrics.like_count,
    },
    author: {
      name: respAuthor.name,
      userName: respAuthor.username,
      isVerified: respAuthor.verified,
      avatar: respAuthor.profile_image_url,
    },
    media: resp.includes.media,
    quoteTweetID: respTweet?.referenced_tweets?.find(
      (i: any) => i.type === 'quoted',
    )?.id,
    polls: pollObject && {
      totalVotes,
      options: (pollObject.options as TPollOption[]).map(i => ({
        ...i,
        votesPercent: getPercent(i.votes, totalVotes),
      })),
      status:
        pollObject.voting_status === 'closed'
          ? 'Final results'
          : `${formatDistanceToNowStrict(new Date(pollObject?.end_datetime), {
              roundingMethod: 'floor',
            })} left`,
    },
  };
};
