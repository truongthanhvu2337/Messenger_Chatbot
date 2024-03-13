import React, { useState } from "react";
import ChatHeader from "./ChatComponents/ChatHeader";
import { Button, Form, Input } from "antd";
import axios from "axios";
import { GrFormSearch } from "react-icons/gr";

const API_KEY = "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";

const systemMessage = {
  //  Explain things like you're talking to a software professional with 5 years of experience.
  role: "system",
  content:
    "Explain things like you're talking to a software professional with 2 years of experience.",
};

function Chat({ darkMode }) {
  const [messages, setMessages] = useState([
    {
      message: "Hello, I'm ChatGPT! Ask me anything!",
      type: "ChatGPT",
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = () => {
    setMessages((prevChatLog) => [
      ...prevChatLog,
      { type: "user", message: inputValue },
    ]);

    sendMessage(inputValue);

    setInputValue("");
  };

  const sendMessage = (message) => {
    const url = "https://api.openai.com/v1/chat/completions";
    const headers = {
      "Content-type": "application/json",
      Authorization: "Bearer " + API_KEY,
    };

    const data = {
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: message }],
    };

    setIsLoading(true);

    axios
      .post(url, data, { headers: headers })
      .then((response) => {
        console.log(response);
        setMessages((prevChatLog) => [
          ...prevChatLog,
          { type: "bot", message: response.data.choices[0].message.content },
        ]);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
      });
  };

  return (
    <div
      className={`w-[78%] relative ${
        darkMode ? "bg-black" : ""
      } content-center overflow-hidden`}
    >
      <ChatHeader darkMode={darkMode} />

      <div 
        className="flex flex-col overflow-y-auto max-h-[80vh]"
      >
        {messages.map((input, index) => (
          <div
            key={index}
            className={
              input.type === "user"
                ? `bg-purple-500 text-white max-w-[50%] self-end m-2 py-[9px] px-[10px] rounded-3xl`
                : `${darkMode ? "bg-teal-950 text-white":"bg-gray-100"} text-black max-w-[50%] self-start m-2 p-3 rounded-3xl `
            }
          >
            {input.message}
          </div>
        ))}
      </div>

      <Form action="" onFinish={handleSubmit}>
        <div
          className={`h-[50px] absolute inset-x-0 bottom-0 
                      flex justify-center items-center ${
                        darkMode
                          ? "border-t-gray-800 "
                          : "border-t-gray-300 border-t"
                      }`}
        >
          <Form.Item>
            <Input
              type="text"
              className={`w-[700px] rounded-3xl mt-5 ${darkMode ? "bg-teal-950" : "bg-gray-200/70"} border-none`}
              size="medium"
              placeholder="Type your message here"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            ></Input>
          </Form.Item>

          <Form.Item>
            <Button
              htmlType="submit"
              className="bg-purple-500 ml-3 mt-5 text-xl"
              type="primary"
              shape="circle"
              icon={<GrFormSearch />}
            />
          </Form.Item>
        </div>
      </Form>
    </div>
  );
}

export default Chat;
