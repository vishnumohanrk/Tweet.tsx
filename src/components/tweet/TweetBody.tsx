export const TweetBody = ({ text }: { text: string }) => (
  <p
    // eslint-disable-next-line react/no-danger
    dangerouslySetInnerHTML={{ __html: text }}
    className="text-xl whitespace-pre-wrap break-words mt-3 tweet-body--d"
  />
);
