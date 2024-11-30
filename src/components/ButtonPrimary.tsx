type ButtonPrimaryProps = {
  label: string
  icon?: React.ReactNode
  onClick?: () => void
}

export const ButtonPrimary = ({ label, icon, onClick }: ButtonPrimaryProps) => {
  return (
    <button
      onClick={onClick}
      className="inline-flex h-10 animate-shimmer items-center justify-center rounded-full border border-slate-900 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none"
    >
      {icon}
      <span className="text-sm ml-2 text-white">{label}</span>
    </button>
  )
}
