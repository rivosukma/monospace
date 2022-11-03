import { cva, VariantProps } from "class-variance-authority";
import { Loader } from "./Loader";

const main_styles = cva(
  "flex justify-center items-center rounded disabled:bg-opacity-75 focus:outline",
  {
    variants: {
      variant: {
        primary: "bg-indigo-600 text-white hover:bg-indigo-700",
        secondary:
          "bg-transparent border border-black dark:border-white hover:bg-white hover:bg-opacity-10",
        danger: "bg-red-500 hover:bg-red-600 text-white",
      },
      size: {
        sm: "text-sm px-2 py-1",
        md: "text-base px-4 py-2",
        lg: "text-lg px-6 py-3",
      },
      order: {
        start: "flex-row",
        end: "flex-row-reverse",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      order: "start",
    },
  }
);

const is_loader_styles = cva("mx-0", {
  variants: {
    order: {
      start: "ml-1",
      end: "mr-1",
    },
  },
  defaultVariants: { order: "start" },
});

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof main_styles> & {
    loading?: boolean;
  };

export const Button: React.FC<ButtonProps> = ({
  variant,
  order,
  size,
  children,
  disabled = false,
  loading = false,
  ...props
}) => {
  return (
    <button
      className={main_styles({ variant, size, order })}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <Loader variant={variant === "secondary" ? "secondary" : "primary"} />
      )}
      <span className={`${loading ? is_loader_styles({ order }) : ""}`}>
        {children}
      </span>
    </button>
  );
};
