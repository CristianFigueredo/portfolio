// TODO: decuple logic from UI component

type ButtonSecondaryProps = {
  text: string
  onClick?: () => void
  icon?: React.ReactNode
}

export const ButtonSecondary = ({
  text,
  onClick,
  icon,
}: ButtonSecondaryProps) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 rounded-md bg-white text-neutral-700 text-sm font-light hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200 flex items-center"
    >
      {icon}
      {text}
    </button>
  )
}
