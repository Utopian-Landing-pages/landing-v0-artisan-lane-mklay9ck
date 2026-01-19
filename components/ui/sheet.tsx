// Placeholder component for sheet
// TODO: Implement this component or remove the import
import * as React from "react"

export function Sheet({ children, ...props }: React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>) {
  return <div {...props}>{children}</div>
}
