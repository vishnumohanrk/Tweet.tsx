import { TPoll } from '../../lib/types';
import { TwitterLink } from '../TwitterLink';

type TweetPollProps = {
  id: string;
  pollObject: TPoll | undefined;
};

export const TweetPoll = ({ pollObject, id }: TweetPollProps) => {
  if (!pollObject) return null;

  const { options, status, totalVotes } = pollObject;

  const isOver = status === 'Final results';
  const max = isOver && Math.max(...options.map(i => i.votes));

  return (
    <TwitterLink path={`i/status/${id}`} aria-label="View Poll on Twitter">
      <div className="py-3 space-y-1">
        {options.map(({ label, position, votesPercent, votes }) => (
          <div
            key={position}
            className={`w-full rounded overflow-hidden relative flex justify-between py-2 ${
              votes === max ? 'font-bold' : ''
            }`}
          >
            <p className="pl-3">{label}</p>
            <p>{votesPercent}</p>
            <div
              style={{ width: votesPercent !== '0%' ? votesPercent : 7 }}
              className={`absolute inset-0 rounded-l z-[-9] ${
                votes === max ? 'bg-[#7856ff94]' : 'bg-border'
              } ${isOver ? 'rounded-r' : ''}`}
            />
          </div>
        ))}
      </div>
      <div className="text-secondaryText flex">
        <p>
          {totalVotes.toLocaleString('en-US')} vote{totalVotes === 1 ? '' : 's'}
        </p>
        &nbsp;·&nbsp;
        <p>{status}</p>
      </div>
    </TwitterLink>
  );
};
