import * as React from "react"

import {
  Button as ButtonPrimitive,
  type ButtonProps as ButtonPrimitiveProps
} from "react-aria-components"

import { tv } from "tailwind-variants"
import { cr, focusButtonStyles } from "../../utils/classes.tsx"
import { LoaderCircle } from "lucide-react"

const styles = tv(
  {
    extend: focusButtonStyles,
    base: ["font-medium text-white"],
    variants: {
      intent: {
        primary: ["bg-primary-500 hover:bg-primary-700 pressed:bg-primary-900"],
        warning: ["bg-yellow-500 hover:bg-yellow-700 pressed:bg-yellow-900"],
        danger: ["bg-red-500 hover:bg-red-700 pressed:bg-red-900"]
      },
      size: {
        xs: "px-2.5 py-2 text-xs",
        sm: "px-3 py-2.5 text-sm",
        md: "text-md px-4 py-3",
        lg: "px-6 py-4 text-lg"
      },
      shape: {
        square: "rounded-xl",
        circle: "rounded-full"
      },
      isDisabled: {
        false: "",
        true: "cursor-not-allowed bg-[#F1F5F9] text-[#94A3B8] focus:bg-[#E2E8F0]"
      },
      isPending: {
        true: "cursor-default"
      }
    },
    defaultVariants: {
      intent: "primary",
      size: "sm",
      shape: "square"
    }
  },
  {
    responsiveVariants: ["sm", "lg"]
  }
)

interface ButtonProps extends ButtonPrimitiveProps {
  intent?: "primary" | "danger" | "warning"
  size?: "xs" | "sm" | "md" | "lg"
  shape?: "square" | "circle"
  appearance?: "solid" | "outline"
  prefix?: React.ReactNode
  suffix?: React.ReactNode
  loading?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, intent, size, shape, prefix, suffix, loading, ...props }, ref) => {
    return (
      <ButtonPrimitive
        {...props}
        ref={ref}
        isDisabled={loading || props.isDisabled}
        className={cr(className, (className, renderProps) =>
          styles({
            ...renderProps,
            intent,
            size,
            shape,
            className
          })
        )}
      >
        {(values) => (
          <>
            <span className="flex items-center">
              {loading ? (
                <LoaderCircle className="mr-1 animate-spin" />
              ) : (
                prefix && <span className="mr-1">{prefix}</span>
              )}
              {loading
                ? "Loading"
                : typeof props.children === "function"
                  ? props.children(values)
                  : props.children}
              {suffix && <span className="ml-1">{suffix}</span>}
            </span>
          </>
        )}
      </ButtonPrimitive>
    )
  }
)

export type { ButtonProps }
export { Button }
