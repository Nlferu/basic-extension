import { useState } from 'react'

export const ColorChanger = () => {
  const [color, setColor] = useState<string>('')

  const onUse = async () => {
    try {
      chrome.runtime.sendMessage({
        type: 'CHANGE_COLOR',
        color
      })
    } catch (error) {
      console.error('Failed to send message to the background script', error)
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
