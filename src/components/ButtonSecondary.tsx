import { IconHandLoveYou } from '@tabler/icons-react'

// TODO: decuple logic from UI component

function sendEmail() {
  const emailID = 'cristian25figueredo'

  document.location = 'mailto:' + emailID + '@gmail.com'
}

export const ButtonSecondary = () => {
  return (
    <button
      onClick={sendEmail}
      className="px-4 py-2 rounded-md bg-white text-neutral-700 text-sm font-light hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200 flex items-center"
    >
      <IconHandLoveYou size={16} className="mr-2" />
      Let’s Do This
    </button>
  )
}
