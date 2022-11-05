import { cva, VariantProps } from "class-variance-authority";
import { forwardRef, Fragment } from "react";
import { Loader } from "../loader/Loader";

const main_styles = cva(
  [
    "inline-flex justify-center items-center font-medium border cursor-pointer",
    "disabled:bg-opacity-75 disabled:cursor-not-allowed focus:ring-2 focus:ring-blue-600",
    "dark:focus:ring-white",
  ],
  {
    variants: {
      variant: {
        primary: "bg-blue-600 border-blue-700 text-white hover:bg-blue-700",
        secondary: [
          "bg-transparent hover:bg-white hover:bg-opacity-10 hover:border-black",
          "dark:border-zinc-700 dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-700",
        ],
        danger:
          "text-white border-red-700 bg-red-600 hover:bg-red-700 hover:border-red-800",
        ghost: [
          "border-transparent text-gray-700 hover:bg-gray-100",
          "dark:text-white dark:hover:bg-zinc-800 dark:hover:text-zinc-100",
        ],
        text: [
          "border-transparent hover:text-zinc-500",
          "dark:text-white dark:hover:text-zinc-300",
        ],
      },
      size: {
        sm: "text-sm px-4 py-1.5 rounded-md",
        md: "text-base px-6 py-2.5 rounded-md",
        lg: "text-lg px-8 py-3.5 rounded-lg",
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
    icon?: React.ReactElement;
    loading?: boolean;
  };

export type AnchorProps = React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
> &
  VariantProps<typeof main_styles>;

const ButtonContent: React.FC<ButtonProps> = ({
  variant,
  order,
  size,
  children,
  loading = false,
}) => {
  return (
    <Fragment>
      {loading && (
        <span className={icon_styles({ order, size })}>
          <Loader
            size={size}
            variant={variant === "secondary" ? "secondary" : "primary"}
          />
        </span>
      )}
      <span>{children}</span>
    </Fragment>
  );
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      variant,
      order,
      size,
      children,
      className,
      fullWidth = false,
      disabled = false,
      loading = false,
      ...others
    } = props;

    return (
      <button
        ref={ref}
        className={main_styles({
          variant,
          size,
          order,
          fullWidth,
          class: className,
        })}
        disabled={disabled || loading}
        aria-disabled={disabled || loading}
        {...others}
      >
        <ButtonContent {...props} />
      </button>
    );
  }
);

Button.displayName = "Button";

export const ButtonLink = forwardRef<
  HTMLAnchorElement,
  AnchorProps & ButtonProps
>((props, ref) => {
  const {
    variant,
    order,
    size,
    children,
    className,
    fullWidth = false,
    disabled = false,
    loading = false,
    ...others
  } = props;

  return (
    <a
      ref={ref}
      className={main_styles({
        variant,
        size,
        order,
        fullWidth,
        class: className,
      })}
      aria-disabled={disabled}
      {...others}
    >
      <ButtonContent {...props} />
    </a>
  );
});

ButtonLink.displayName = "ButtonLink";
