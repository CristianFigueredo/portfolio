import type { CSSProperties } from 'react'

type TProps = {
  size: CSSProperties['marginBottom']
}
export const XDivider = ({ size }: TProps) => {
  const style: CSSProperties = {
    marginBottom: size,
  }
  return <div style={style}></div>
}
