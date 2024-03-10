import React from "react";
import ChatHeader from "./ChatComponents/ChatHeader";
import ChatInput from "./ChatComponents/ChatInput";

function Chat({darkMode}) {
  return (
    <div className={`w-[78%] relative ${darkMode ? "bg-black" : ""} content-center`}>
      <ChatHeader darkMode={darkMode}/>
      <ChatInput darkMode={darkMode}/>
    </div>
  );
}

export default Chat;
