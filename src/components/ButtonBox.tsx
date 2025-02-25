import React from 'react'

const ButtonBox: React.FC = () => {
  return (
    <div className="fixed bottom-5 right-5 p-4 bg-gray-800 text-white rounded-lg shadow-lg z-50">
      <button
        className="m-1 px-4 py-2 bg-blue-500 rounded hover:bg-blue-600"
        onClick={() => alert('Button 1 clicked!')}
      >
        Button 1
      </button>
      <button
        className="m-1 px-4 py-2 bg-green-500 rounded hover:bg-green-600"
        onClick={() => alert('Button 2 clicked!')}
      >
        Button 2
      </button>
      <button
        className="m-1 px-4 py-2 bg-red-500 rounded hover:bg-red-600"
        onClick={() => alert('Button 3 clicked!')}
      >
        Button 3
      </button>
    </div>
  )
}

export default ButtonBox
