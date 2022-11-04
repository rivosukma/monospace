import { cva, cx, VariantProps } from "class-variance-authority";
import { Fragment } from "react";
import { Loader } from "../loader/Loader";

const main_styles = cva(
  "flex justify-center items-center font-medium disabled:bg-opacity-75 disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        primary: "bg-blue-600 text-white hover:bg-blue-700",
        secondary: cx(
          "bg-transparent border hover:bg-white hover:bg-opacity-10 hover:border-black",
          "dark:border-gray-700 dark:text-gray-400  dark:hover:border-white dark:hover:text-white"
        ),
        danger: "bg-red-500 hover:bg-red-600 text-white",
      },
      size: {
        sm: "text-sm px-4 py-1.5 rounded-md",
        md: "text-base px-6 py-2.5 rounded-lg",
        lg: "text-lg px-8 py-3.5 rounded-xl",
      },
      order: {
        start: "flex-row",
        end: "flex-row-reverse",
      },
      fullWidth: {
        true: "w-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "sm",
      order: "start",
    },
  }
);

const icon_styles = cva("flex items-center", {
  variants: {
    order: {
      start: "-ml-1",
      end: "-mr-1",
    },
    size: {
      sm: "px-1",
      md: "px-2",
      lg: "px-3",
    },
  },
  defaultVariants: { order: "start", size: "sm" },
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
  className,
  fullWidth = false,
  disabled = false,
  loading = false,
  ...props
}) => {
  return (
    <button
      className={main_styles({
        variant,
        size,
        order,
        fullWidth,
        class: className,
      })}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <div className={icon_styles({ order, size })}>
          <Loader
            size={size}
            variant={variant === "secondary" ? "secondary" : "primary"}
          />
        </div>
      )}
      {children}
    </button>
  );
};
