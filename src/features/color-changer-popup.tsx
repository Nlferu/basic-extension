import { useState } from 'react'

export const ColorChangerPopup = () => {
  const [color, setColor] = useState<string>('')

  const onUse = async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true })

    if (tab?.id) {
      chrome.scripting.executeScript<string[], void>({
        target: { tabId: tab.id },
        args: [color],
        func: (color) => {
          // Change text color for within body only
          // document.body.style.color = color

          // Change text color on whole website
          document.querySelectorAll('*').forEach((el) => {
            ;(el as HTMLElement).style.color = color
          })

          // Set the background color for body
          // document.body.style.backgroundColor = 'black'

          // Set the background color for all elements
          document.querySelectorAll('*').forEach((el) => {
            ;(el as HTMLElement).style.backgroundColor = 'black'
          })

          // alert('Hello from app!')
        }
      })
    } else {
      console.error('No active tab found')
    }
  }

  return (
    <div>
      <input
        type="color"
        onChange={(e) => setColor(e.currentTarget.value)}
        value={color}
      />
      <button
        className="plasmo-p-2 plasmo-border-2 plasmo-border-blue-600 plasmo-rounded-xl plasmo-bg-purple-900 hover:plasmo-cursor-pointer plasmo-font-bold"
        onClick={onUse}>
        Color Changer
      </button>
    </div>
  )
}
