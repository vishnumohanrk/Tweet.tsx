import { useRouter } from 'next/router';

import { AppForm } from '../components/AppForm';
import { Tweet } from '../components/tweet/Tweet';

const AppHome = () => {
  const router = useRouter();

  const tweetID = router.query.id;

  return (
    <main className="py-20 w-full max-w-screen-xl mx-auto flex flex-col items-center justify-center">
      <div className="px-0.5 lg:px-0 w-full flex justify-center">
        <AppForm push={router.push} asPath={router.asPath} />
      </div>
      {tweetID && typeof tweetID === 'string' ? <Tweet id={tweetID} /> : null}
    </main>
  );
};

export default AppHome;
