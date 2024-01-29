interface Props {
  fill?: string
  filled?: boolean
  size?: number
  height?: number
  width?: number
  label?: string
}

export const RandomIcon = ({
  fill = 'currentColor',
  filled,
  size,
  height,
  width,
  label,
  ...props
}: Props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg"
      width={size ?? width ?? 24}
      height={size ?? height ?? 24}
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      fill={filled ? fill : 'none'}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-label={label}
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4" />
      <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4" />
    </svg>
  )
}
