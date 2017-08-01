import React from "react"

export function Invert({children}) {
  const styles = {
    transform: "rotate(180deg)",
  }

  return (
    <div style={styles}>{children}</div>
  )
}
