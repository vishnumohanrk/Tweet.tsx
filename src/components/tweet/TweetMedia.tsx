import { TMedia } from '../../lib/types';
import { TwitterLink } from '../TwitterLink';

type TweetMediaProps = {
  id: string;
  data: TMedia[];
};

export const TweetMedia = ({ data, id }: TweetMediaProps) => {
  if (!data?.length) return null;

  return (
    <TwitterLink
      path={`i/status/${id}`}
      style={{ aspectRatio: '16/9' }}
      className={`w-full grid gap-0.5 mt-4 rounded-2xl overflow-hidden ${
        data.length === 1 ? 'grid-cols-1' : 'grid-cols-2'
      }`}
    >
      {data.map((i, j) => (
        <img
          alt="img"
          key={i.media_key}
          style={{ aspectRatio: '16/9' }}
          className={`w-full h-full object-cover ${
            data.length === 3 && j === 0 ? 'row-span-2' : ''
          }`}
          src={i.type === 'photo' ? i.url : i.preview_image_url}
        />
      ))}
    </TwitterLink>
  );
};
