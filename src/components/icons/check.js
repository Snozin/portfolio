export default function SvgComponent(props) {
  return (
    <svg
      width={24}
      height={20}
      viewBox="0 0 24 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M19.77 3.03l1.4 1.4L8.43 17.17l-5.6-5.6 1.4-1.4 4.2 4.2L19.77 
          3.03zm0-2.83L8.43 11.54l-4.2-4.2L0 11.57 8.43 20 24 4.43 19.77.2z"
        fill="#211B12"
      />
    </svg>
  )
}
