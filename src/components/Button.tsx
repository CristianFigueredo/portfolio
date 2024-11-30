import clsx from 'clsx'

type ButtonProps = {
  label: string
  className?: string
  icon?: React.ReactNode
} & React.ButtonHTMLAttributes<HTMLButtonElement>
export function Button({ label, className, icon, ...props }: ButtonProps) {
  return (
    <button
      className={clsx(
        'relative inline-flex overflow-hidden rounded-full p-[1px] focus:outline-none  focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 max-h-fit',
        className
      )}
      {...props}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black px-5 py-2 text-sm font-light text-white backdrop-blur-3xl gap-2">
        {icon && icon}
        {label}
      </span>
    </button>
  )
}
