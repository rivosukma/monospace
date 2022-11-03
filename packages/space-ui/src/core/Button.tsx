import { cva, VariantProps } from "class-variance-authority";

const styles = cva("border rounded", {
  variants: {
    variant: {
      primary: "bg-indigo-600 hover:bg-indigo-700 text-white",
      secondary: "bg-transparent border-black",
    },
    size: {
      md: "text-base px-4 py-2",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof styles>;

export const Button: React.FC<Props> = ({ variant, size, ...props }) => {
  return <button className={styles({ variant, size })} {...props} />;
};
