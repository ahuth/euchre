import React from "react"

export function Invert({children, position}) {
  const styles = {
    ...position,
    position: position && "absolute",
    transform: "rotate(180deg)",
  }

  return (
    <div style={styles}>{children}</div>
  )
}
