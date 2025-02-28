import { ColorChangerPopup } from '~features/color-changer-popup'
import { CountButton } from '~features/count-button'

import '~style.css'

function IndexPopup() {
  return (
    <div className="plasmo-flex plasmo-flex-col plasmo-items-center plasmo-justify-center plasmo-h-16 plasmo-w-40">
      <CountButton />
      <ColorChangerPopup />
    </div>
  )
}

export default IndexPopup
