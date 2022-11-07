import { cva, cx, VariantProps } from "class-variance-authority";
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
        sm: "text-sm px-4 py-1.5 rounded-sm",
        md: "text-base px-6 py-2.5 rounded-md",
        lg: "text-lg px-8 py-3.5 rounded-lg",
      },
      fullWidth: {
        true: "w-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "sm",
    },
  }
);

export const ICON_SIZE_CLASSES = {
  sm: "h-4 w-4",
  md: "h-5 w-5",
  lg: "h-5 w-5",
};

export const ICON_START_CLASSES = {
  sm: "-ml-1 mr-1",
  md: "-ml-2 mr-2",
  lg: "-ml-3 mr-3",
};

export const ICON_END_CLASSES = {
  sm: "-mr-1 ml-1",
  md: "-mr-2 ml-2",
  lg: "-mr-3 ml-3",
};

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof main_styles> & {
    order?: "start" | "end";
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
  size,
  order = "start",
  icon = null,
  loading = false,
  children,
}) => {
  const icon_size = size ?? "sm";

  return (
    <Fragment>
      {loading && (
        <span
          className={cx(
            ICON_SIZE_CLASSES[icon_size],
            ICON_START_CLASSES[icon_size]
          )}
        >
          <Loader size={size} variant={variant} />
        </span>
      )}
      {icon && !loading && order === "start" && (
        <span
          className={cx(
            ICON_SIZE_CLASSES[icon_size],
            ICON_START_CLASSES[icon_size]
          )}
        >
          {icon}
        </span>
      )}
      <span>{children}</span>
      {icon && !loading && order === "end" && (
        <span
          className={cx(
            ICON_SIZE_CLASSES[icon_size],
            ICON_END_CLASSES[icon_size]
          )}
        >
          {icon}
        </span>
      )}
    </Fragment>
  );
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      variant,
      size,
      children,
      className,
      icon,
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
    size,
    children,
    className,
    icon,
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
