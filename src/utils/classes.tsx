import * as React from "react"

import clsx from "clsx"
import { ClassValue } from "clsx"
import { composeRenderProps } from "react-aria-components"
import { twMerge } from "tailwind-merge"
import { tv } from "tailwind-variants"

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs))

function composeTailwindRenderProps<T>(
  className: string | ((v: T) => string) | undefined,
  tw: string | Array<string | undefined>
): string | ((v: T) => string) {
  return composeRenderProps(className, (v) => twMerge(tw, v))
}

const focusRing = tv({
  base: "outline-none focus:outline-none",
  variants: {
    isFocused: { true: "ring-ring/20 ring-4" },
    isInvalid: { true: "ring-danger/20 ring-4" }
  }
})

const focusStyles = tv({
  extend: focusRing,
  variants: {
    isFocused: { true: "border-ring/85" },
    isInvalid: { true: "border-danger" }
  }
})

const focusButtonStyles = tv({
  base: "outline-ring outline outline-offset-0",
  variants: {
    isFocusVisible: {
      false: "outline-0",
      true: "outline-button bg-primary-700 outline-3"
    }
  }
})

const useMediaQuery = (query: string) => {
  const [value, setValue] = React.useState(false)

  React.useEffect(() => {
    const onChange = (event: MediaQueryListEvent) => {
      setValue(event.matches)
    }

    const result = matchMedia(query)
    result.addEventListener("change", onChange)
    setValue(result.matches)

    return () => result.removeEventListener("change", onChange)
  }, [query])

  return value
}

export {
  useMediaQuery,
  cn,
  composeTailwindRenderProps as ctr,
  composeRenderProps as cr,
  focusRing,
  focusStyles,
  focusButtonStyles
}
