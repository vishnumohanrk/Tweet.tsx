import { useRouter } from 'next/router';

import { AppForm } from '../components/AppForm';
import { Tweet } from '../components/tweet/Tweet';

const AppHome = () => {
  const router = useRouter();

  const tweetID = router.query.id;

  return (
    <main className="py-20 px-4 w-full max-w-screen-xl mx-auto flex flex-col items-center justify-center">
      <AppForm push={router.push} />
      {tweetID && typeof tweetID === 'string' ? <Tweet id={tweetID} /> : null}
    </main>
  );
};

export default AppHome;
