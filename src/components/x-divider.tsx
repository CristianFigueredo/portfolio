import type { CSSProperties } from 'preact/compat'

type TProps = {
  size: CSSProperties['marginBottom']
}
export const XDivider = ({ size }: TProps) => {
  const style: CSSProperties = {
    marginBottom: size,
  }
  return <div style={style}></div>
}
