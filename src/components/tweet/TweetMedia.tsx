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
      aria-label="View Tweet on Twitter"
      style={{
        aspectRatio: data.length !== 1 ? '16/9' : undefined,
      }}
      className={`w-full grid gap-0.5 mt-4 rounded-2xl overflow-hidden border ${
        data.length === 1 ? 'grid-cols-1' : 'grid-cols-2'
      }`}
    >
      {data.map((i, j) => (
        <img
          key={i.media_key}
          alt={i.alt_text || 'Image'}
          style={{
            aspectRatio: data.length !== 1 ? '16/9' : `${i.width / i.height}`,
          }}
          className={`w-full h-full object-cover ${
            data.length === 3 && j === 0 ? 'row-span-2' : ''
          }`}
          src={i.type === 'photo' ? i.url : i.preview_image_url}
        />
      ))}
    </TwitterLink>
  );
};
