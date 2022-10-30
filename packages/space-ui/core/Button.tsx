type Props = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export const Button: React.FC<Props> = ({ children, ...props }) => {
  return <button {...props}>{children}</button>;
};
