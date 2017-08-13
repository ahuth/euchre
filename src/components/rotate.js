import React from "react"

export default function Rotate({by, children}) {
  const styles = {
    transform: `rotate(${by}deg)`,
  }

  return (
    <div style={styles}>{children}</div>
  )
}
