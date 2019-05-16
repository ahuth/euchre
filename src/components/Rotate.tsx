import React, { useMemo } from 'react'

type Props = {
  by: number,
  children: React.ReactNode,
}

export default function Rotate({ by, children }: Props) {
  const styles = useMemo(() => {
    return {
      transform: `rotate(${by}deg)`,
    };
  }, [by]);

  return (
    <div style={styles}>{children}</div>
  );
}
