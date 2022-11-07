import { Button, ButtonLink } from "space-ui";
import "./header.css";

type User = {
  name: string;
};

interface HeaderProps {
  user?: User;
  onLogin: () => void;
  onLogout: () => void;
  onCreateAccount: () => void;
}

export const Header = ({
  user,
  onLogin,
  onLogout,
  onCreateAccount,
}: HeaderProps) => (
  <header className="sticky top-0 z-50">
    <div className="wrapper border-[rgba(0, 0, 0, 0.1)] dark:border-zinc-700 dark:bg-zinc-900 dark:bg-opacity-70 bg-white bg-opacity-70 backdrop-blur">
      <div className="flex items-center">
        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fillRule="evenodd">
            <path
              d="M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z"
              fill="#FFF"
            />
            <path
              d="M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z"
              fill="#555AB9"
            />
            <path
              d="M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z"
              fill="#91BAF8"
            />
          </g>
        </svg>
        <span className="mr-5"></span>
        <ButtonLink variant="ghost">Features</ButtonLink>
        <ButtonLink variant="ghost">About</ButtonLink>
        <ButtonLink variant="ghost">Ask Me</ButtonLink>
      </div>
      <div className="flex">
        {user ? (
          <>
            <span className="welcome">
              Welcome, <b>{user.name}</b>!
            </span>
            <Button onClick={onLogout}>Log Out</Button>
          </>
        ) : (
          <>
            <ButtonLink
              className="mr-2"
              variant="ghost"
              onClick={onCreateAccount}
            >
              Sign Up
            </ButtonLink>
            <ButtonLink onClick={onLogin}>Log In</ButtonLink>
          </>
        )}
      </div>
    </div>
  </header>
);
