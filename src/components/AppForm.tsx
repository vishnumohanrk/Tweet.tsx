import type { Router } from 'next/router';
import { useRef } from 'react';

type AppFormProps = {
  push: Router['push'];
};

export const AppForm = ({ push }: AppFormProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const inp = inputRef.current?.value;

    if (inp) {
      let id: string;

      try {
        const tweetURL = new URL(inp);
        id = tweetURL.pathname.split('/').at(-1)!;
      } catch (error) {
        id = inp;
      }

      push({
        pathname: '/',
        query: { id },
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full md:w-3/5 relative mb-6">
      <input
        required
        type="text"
        ref={inputRef}
        id="formInput"
        placeholder="Enter Tweet ID/URL"
        className="w-full pl-14 p-3 rounded-full bg-tertiaryBg focus:bg-primaryBg focus-visible:outline-none focus:ring-2 focus:ring-accent peer"
      />
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label htmlFor="formInput" className="sr-only">
        Enter Tweet ID/URL
      </label>
      <button
        type="submit"
        aria-label="Search"
        className="absolute inset-0 px-4 py-3 text-secondaryText focus-visible:text-primaryText peer-focus:text-accent w-max"
      >
        <svg className="w-6 h-6" viewBox="0 0 16 16">
          <path
            fillRule="evenodd"
            d="M11.5 7a4.499 4.499 0 1 1-8.998 0A4.499 4.499 0 0 1 11.5 7zm-.82 4.74a6 6 0 1 1 1.06-1.06l3.04 3.04a.75.75 0 1 1-1.06 1.06l-3.04-3.04z"
            fill="currentColor"
          />
        </svg>
      </button>
    </form>
  );
};
