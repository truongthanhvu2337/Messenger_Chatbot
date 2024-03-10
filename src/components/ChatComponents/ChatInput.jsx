import { Button, Input } from "antd";
import React, { useState } from "react";

function ChatInput({ darkMode }) {
  const [focus, setFocus] = useState(false);

  function handleFocus() {
    setFocus(true);
  }

  function handleBlur() {
    setFocus(false);
  }

  return (
    <div
      className={`h-[50px] absolute inset-x-0 bottom-0 
    flex justify-center items-center ${
      darkMode ? "border-t-gray-800 " : "border-t-gray-300 border-t"
    }`}
    >
      <Input
        className={`w-[700px] rounded-3xl ${focus ? 'bg-gray-200/70' : 'bg-gray-200/70'}`}
        size="medium"
        onFocus={handleFocus}
        onBlur={handleBlur}
      ></Input>
    </div>
  );
}

export default ChatInput;
