import { useState } from "react";
import { Button } from "space-ui";

import { Header } from "./Header";
import "./page.css";

type User = {
  name: string;
};

export const Page: React.FC = () => {
  const [user, setUser] = useState<User>();

  return (
    <article>
      <Header
        user={user}
        onLogin={() => setUser({ name: "Jane Doe" })}
        onLogout={() => setUser(undefined)}
        onCreateAccount={() => setUser({ name: "Jane Doe" })}
      />

      <section className="max-w-[50%] tracking-wider mx-[80px] my-[32px] dark:!text-white dark:bg-zinc-900 p-8 border border-[rgba(0, 0, 0, 0.1)] dark:border-zinc-700 rounded-xl dark:bg-opacity-70 dark:backdrop-blur">
        <div>
          <h2 className="mb-5">Pages in Storybook</h2>
          <p>
            We recommend building UIs with a{" "}
            <a
              href="https://componentdriven.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>component-driven</strong>
            </a>{" "}
            process starting with atomic components and ending with pages.
          </p>
          <p>
            Get a guided tutorial on component-driven development at{" "}
            <a
              href="https://storybook.js.org/tutorials/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Storybook tutorials
            </a>
            . Read more in the{" "}
            <a
              href="https://storybook.js.org/docs"
              target="_blank"
              rel="noopener noreferrer"
            >
              docs
            </a>
            .
          </p>
          <div className="tip-wrapper">
            <span className="tip">Tip</span> Adjust the width of the canvas with
            the{" "}
            <svg
              width="10"
              height="10"
              viewBox="0 0 12 12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="none" fillRule="evenodd">
                <path
                  d="M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0 01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0 010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z"
                  id="a"
                  fill="#999"
                />
              </g>
            </svg>
            Viewports addon in the toolbar
          </div>
        </div>
        <div className="w-full flex">
          <Button size="md" fullWidth className="mr-2">
            Enroll
          </Button>
          <Button
            variant="secondary"
            order="end"
            size="md"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-arrow-narrow-right"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <line x1="15" y1="16" x2="19" y2="12"></line>
                <line x1="15" y1="8" x2="19" y2="12"></line>
              </svg>
            }
            fullWidth
          >
            View Detail
          </Button>
        </div>
      </section>
    </article>
  );
};
