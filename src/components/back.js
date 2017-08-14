import React from "react"

export default function Back() {
  return <div style={styles}></div>
}

const styles = {
  backgroundImage: "repeating-linear-gradient(135deg, red, red 5px, white 5px, white 10px)",
  border: "4px solid white",
  boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
  height: 100,
  width: 75,
}
