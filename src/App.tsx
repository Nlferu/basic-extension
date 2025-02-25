import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
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
        },
      })
    } else {
      console.error('No active tab found')
    }
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <input
          type="color"
          onChange={(e) => setColor(e.currentTarget.value)}
          value={color}
        />

        <button
          className="p-2 border-2 border-blue-600 rounded-xl bg-purple-900 hover:cursor-pointer font-bold"
          onClick={onUse}
        >
          Button
        </button>

        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
