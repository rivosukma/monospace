import { cva, VariantProps } from "class-variance-authority";

const main_styles = cva("rounded-full animate-spin", {
  variants: {
    variant: {
      primary: "border-white",
      secondary: "border-black dark:border-white",
      danger: "border-white",
      ghost: "border-black dark:border-white",
      text: "border-black dark:border-white",
    },
    size: {
      sm: "w-4 h-4 border-2",
      md: "w-5 h-5 border-2",
      lg: "w-6 h-6 border-4",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "sm",
  },
});

export type LoaderProps = {
  className?: string;
} & VariantProps<typeof main_styles>;

export const Loader: React.FC<LoaderProps> = ({
  variant,
  size,
  className,
  ...props
}) => {
  return (
    <div
      style={{ borderTopColor: "transparent" }}
      className={main_styles({ variant, size, class: className })}
      {...props}
    ></div>
  );
};
