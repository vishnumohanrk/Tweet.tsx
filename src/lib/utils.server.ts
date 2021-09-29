import axios from 'axios';
import TwitterText from 'twitter-text';

import { TTweet } from './types';

export const getTweet = async (id: string): Promise<TTweet> => {
  const { data: resp } = await axios.get(
    `https://api.twitter.com/2/tweets/${id}`,
    {
      headers: { Authorization: `Bearer ${process.env.TWITTER_KEY}` },
      params: {
        'media.fields': 'media_key,preview_image_url,type,url,alt_text',
        expansions: 'author_id,attachments.media_keys,referenced_tweets.id',
        'user.fields': 'name,profile_image_url,username,verified',
        'tweet.fields':
          'author_id,created_at,id,public_metrics,text,source,attachments,referenced_tweets,entities',
      },
    },
  );

  const respAuthor = resp.includes.users[0];
  const respTweet = resp.data;
  const respDate = new Date(respTweet.created_at);

  return {
    id: respTweet.id,
    info: {
      source: respTweet.source,
      time: respDate.toLocaleTimeString(),
      date: respDate.toDateString().slice(4),
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
  };
};
