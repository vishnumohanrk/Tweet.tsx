import { TTweetAuthor } from '../../lib/types';
import { TwitterLink } from '../TwitterLink';

export const TweetHeader = (props: TTweetAuthor) => {
  const { avatar, isVerified, name, userName } = props;

  return (
    <div className="flex w-full">
      <TwitterLink path={userName} className="flex">
        <img
          width={48}
          height={48}
          src={avatar}
          alt={userName}
          className="object-cover rounded-full w-12 h-12"
        />
      </TwitterLink>
      <TwitterLink
        path={userName}
        className="flex flex-col ml-2 self-center group"
      >
        <p
          title={name}
          className="flex items-center truncate font-bold group-hover:underline"
        >
          {name}
          {isVerified ? (
            // https://icones.js.org/
            <svg className="ml-0.5" width="17" height="17" viewBox="0 0 24 24">
              <path
                d="M23 12l-2.44-2.79l.34-3.69l-3.61-.82l-1.89-3.2L12 2.96L8.6 1.5L6.71 4.69L3.1 5.5l.34 3.7L1 12l2.44 2.79l-.34 3.7l3.61.82L8.6 22.5l3.4-1.47l3.4 1.46l1.89-3.19l3.61-.82l-.34-3.69L23 12zm-12.91 4.72l-3.8-3.81l1.48-1.48l2.32 2.33l5.85-5.87l1.48 1.48l-7.33 7.35z"
                fill="currentColor"
              />
            </svg>
          ) : null}
        </p>
        <p className="text-secondaryText">@{userName}</p>
      </TwitterLink>
    </div>
  );
};
