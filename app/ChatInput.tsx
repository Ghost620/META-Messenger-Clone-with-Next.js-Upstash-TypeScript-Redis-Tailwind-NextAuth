import React from 'react'

const ChatInput = () => {
  return (
    <form>
        <input type="text" />
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50 disabled:cursor-not-allowed'> Send </button>
    </form>
  )
}

export default ChatInput
