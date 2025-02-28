import { ColorChanger } from '~features/color-changer'
import { CountButton } from '~features/count-button'

import '~style.css'

function IndexPopup() {
  return (
    <div className="plasmo-flex plasmo-flex-col plasmo-items-center plasmo-justify-center plasmo-h-16 plasmo-w-40">
      <CountButton />
      <ColorChanger />
    </div>
  )
}

export default IndexPopup
