const optionsBox = () => {
  // Create the button box div
  const rootElement = document.createElement('div')
  rootElement.id = 'button-box'
  rootElement.style.position = 'fixed'
  rootElement.style.bottom = '20px'
  rootElement.style.right = '20px'
  rootElement.style.zIndex = '9999'
  rootElement.style.padding = '10px'
  rootElement.style.backgroundColor = 'rgba(0, 0, 0, 0.7)'
  rootElement.style.color = 'white'
  rootElement.style.borderRadius = '8px'

  // Button box content (three buttons)
  const buttonBox = `
     <button class="p-2 m-2 bg-amber-600 rounded">Button 1</button>
     <button class="p-2 m-2 bg-amber-600 rounded">Button x</button>
     <button class="p-2 m-2 bg-amber-600 rounded">Button 3</button>
   `

  // Inject the button box content into the div
  rootElement.innerHTML = buttonBox

  // Append the button box to the body of the webpage
  document.body.appendChild(rootElement)
}

optionsBox()

/** @dev To get below working we need to add `format: 'iife'` in vite.config.ts */
// import React from 'react'
// import ReactDOM from 'react-dom/client' // Import from 'react-dom/client' for React 18

// const OptionsBox: React.FC = () => {
//   return (
//     <div
//       id="button-box"
//       style={{
//         position: 'fixed',
//         bottom: '20px',
//         right: '20px',
//         zIndex: 9999,
//         padding: '10px',
//         backgroundColor: 'rgba(0, 0, 0, 0.7)',
//         color: 'white',
//         borderRadius: '8px',
//       }}
//     >
//       <button className="p-2 m-2 bg-amber-600 rounded">Button 1</button>
//       <button className="p-2 m-2 bg-amber-600 rounded">Button x</button>
//       <button className="p-2 m-2 bg-amber-600 rounded">Button 3</button>
//     </div>
//   )
// }

// // This function runs when the content script is called
// const renderOptionsBox = () => {
//   const rootElement = document.createElement('div')
//   document.body.appendChild(rootElement)

//   // Use createRoot instead of render
//   const root = ReactDOM.createRoot(rootElement)
//   root.render(<OptionsBox />)
// }

// // Call the function to render the component
// renderOptionsBox()
