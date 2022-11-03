import { cva, VariantProps } from "class-variance-authority";

const styles = cva("border rounded", {
  variants: {
    variant: {
      primary: "bg-indigo-600 hover:bg-indigo-700 text-white",
      secondary: "bg-transparent border-black",
    },
    size: {
      sm: "text-sm px-2 py-1",
      md: "text-base px-4 py-2",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof styles>;

export const Button: React.FC<ButtonProps> = ({ variant, size, ...props }) => {
  return <button className={styles({ variant, size })} {...props} />;
};
