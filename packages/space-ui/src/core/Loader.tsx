import { cva, VariantProps } from "class-variance-authority";

const main_styles = cva(" border-2 rounded-full animate-spin", {
  variants: {
    variant: {
      primary: "border-white",
      secondary: "border-black dark:border-white",
    },
    size: {
      sm: "w-4 h-4",
      md: "w-8 h-8",
      lg: "w-16 h-16",
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
