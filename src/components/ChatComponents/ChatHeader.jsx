import React from 'react'

function ChatHeader({darkMode}) {
  return (
    <div>
        <div className={`h-[56px] border-b ${darkMode ? "text-white border-b-gray-800" : ""}
         sticky top-0 px-3 py-2 flex items-center font-semibold`}>
            ChatHeader
        </div>
        
    </div>
  )
}

export default ChatHeader