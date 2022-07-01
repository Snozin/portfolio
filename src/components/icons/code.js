export default function SvgComponent(props) {
  return (
    <svg
      width={10}
      height={10}
      viewBox="0 0 20 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7.4 10.6L2.8 6l4.6-4.6L6 0 0 6l6 6 1.4-1.4zm5.2 0L17.2 6l-4.6-4.6L14 
          0l6 6-6 6-1.4-1.4z"
        fill="#211B12"
      />
    </svg>
  )
}