import React from 'react'
import avatar from "../../assets/images/download.jpg";


function ChatHeader({darkMode}) {
  return (
    <div>
        <div className={`h-[56px] border-b ${darkMode ? "text-white border-b-gray-800" : ""}
         sticky top-0 px-3 py-2 flex items-center font-semibold`}>
          <div className="w-10 h-10 rounded-full overflow-hidden mr-4">
          <img src={avatar} alt="Avatar" />
        </div>
          
          ChatHeader
        </div>
        
    </div>
  )
}

export default ChatHeader