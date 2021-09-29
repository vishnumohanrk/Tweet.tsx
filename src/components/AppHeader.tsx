import Link from 'next/link';

export const AppHeader = () => (
  <header className="fixed top-0 z-50 bg-primaryBg w-full h-16 border-b">
    <div className="max-w-screen-xl h-full mx-auto flex justify-between items-center">
      <Link href="/" passHref>
        <a href="dummy" className="text-2xl font-bold px-4 py-3">
          <span aria-hidden>{'<'}</span>
          Tweet
          <span aria-hidden>{' />'}</span>
        </a>
      </Link>
    </div>
  </header>
);
