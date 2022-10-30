type Props = {
  children: React.ReactNode;
  onClick?: () => void;
};

export const Button: React.FC<Props> = ({ children, ...props }) => {
  return (
    <button className="px-3 py-1 hover:bg-gray-800 my-2" {...props}>
      {children}
    </button>
  );
};
