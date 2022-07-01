export default function SvgComponent(props) {
  return (
    <svg
      width={11}
      height={22}
      viewBox="0 0 11 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9.5 5v11.5c0 2.21-1.79 4-4 4s-4-1.79-4-4V4a2.5 2.5 0 015 0v10.5c0 .55-.45 1-1 1s-1-.45-1-1V5H3v9.5a2.5 2.5 0 005 0V4c0-2.21-1.79-4-4-4S0 1.79 0 4v12.5C0 19.54 2.46 22 5.5 22s5.5-2.46 5.5-5.5V5H9.5z"
        fill="#211B12"
      />
    </svg>
  )
}
