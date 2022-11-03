import { cva, VariantProps } from "class-variance-authority";
import { Fragment } from "react";
import { Loader } from "../loader/Loader";

const main_styles = cva(
  "flex justify-center items-center disabled:bg-opacity-75 font-bold",
  {
    variants: {
      variant: {
        primary: "bg-blue-600 text-white hover:bg-blue-700",
        secondary:
          "bg-transparent border border-black dark:border-white hover:bg-white hover:bg-opacity-10",
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
      size: "md",
      order: "start",
    },
  }
);

const icon_styles = cva("", {
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
  defaultVariants: { order: "start" },
});

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof main_styles> & {
    icon?: React.ReactNode;
    loading?: boolean;
  };

export const Button: React.FC<ButtonProps> = ({
  variant,
  order,
  size,
  children,
  className,
  icon,
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
      {(loading || icon) && (
        <div className={icon_styles({ order, size })}>
          {loading ? (
            <Loader
              size={size}
              variant={variant === "secondary" ? "secondary" : "primary"}
            />
          ) : (
            <Fragment>{icon}</Fragment>
          )}
        </div>
      )}
      {children}
    </button>
  );
};
