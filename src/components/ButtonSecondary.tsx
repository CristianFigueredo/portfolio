import { IconHandLoveYou } from '@tabler/icons-react';
export const ButtonSecondary = () => {
return (
<button className="px-4 py-2 rounded-md bg-white text-neutral-700 text-sm font-light hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200 flex items-center">
  <IconHandLoveYou  size={16} className='mr-2'/>
  Let’s Do This
</button>
)
}