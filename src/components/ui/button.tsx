import * as React from "react"

import {
  Button as ButtonPrimitive,
  type ButtonProps as ButtonPrimitiveProps
} from "react-aria-components"

import { tv } from "tailwind-variants"
import { cr, focusButtonStyles } from "../../utils/classes.tsx"

const styles = tv(
  {
    extend: focusButtonStyles,
    base: ["font-medium text-white"],
    variants: {
      intent: {
        primary: [
          "bg-primary-500 pressed:bg-primary-900 hover:drop-shadow-button hover:bg-primary-700"
        ],
        secondary: ["bg-blue-300"],
        warning: ["text-yellow-500"],
        danger: ["text-red-500"]
      },
      size: {
        xs: "px-2.5 py-2 text-xs",
        sm: "px-3 py-2.5 text-sm",
        md: "text-md px-4 py-3",
        lg: "px-6 py-4 text-lg"
      },
      shape: {
        square: "rounded-md",
        circle: "rounded-full"
      },
      isDisabled: {
        false: "",
        true: ""
      },
      isPending: {
        true: "cursor-default"
      }
    },
    defaultVariants: {
      intent: "primary",
      size: "md",
      shape: "square"
    }
  },
  {
    responsiveVariants: ["sm", "lg"]
  }
)

interface ButtonProps extends ButtonPrimitiveProps {
  intent?: "primary" | "secondary" | "danger" | "warning"
  size?: "xs" | "sm" | "md" | "lg"
  shape?: "square" | "circle"
  appearance?: "solid" | "outline"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, intent, size, shape, ...props }, ref) => {
    return (
      <ButtonPrimitive
        {...props}
        ref={ref}
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
          <>{typeof props.children === "function" ? props.children(values) : props.children}</>
        )}
      </ButtonPrimitive>
    )
  }
)

export type { ButtonProps }
export { Button }
