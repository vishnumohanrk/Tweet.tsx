export type TTweetAuthor = {
  name: string;
  avatar: string;
  userName: string;
  isVerified: boolean;
};

export type TTweetStats = {
  likes: number;
  retweets: number;
  'quote tweets': number;
};

export type TTweetInfo = {
  source: string;
  created_at: string;
};

export type TMedia = {
  width: number;
  height: number;
  media_key: string;
  alt_text?: string;
} & (
  | {
      type: 'photo';
      url: string;
    }
  | {
      preview_image_url: string;
      type: 'animated_gif' | 'video';
    }
);

export type TTweet = {
  id: string;
  text: string;
  info: TTweetInfo;
  stats: TTweetStats;
  author: TTweetAuthor;
  media: TMedia[];
  quoteTweetID: string | undefined;
};
