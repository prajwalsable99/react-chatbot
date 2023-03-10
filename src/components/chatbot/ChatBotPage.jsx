/* eslint-disable no-unused-vars */
import React from 'react'
import config from './chatbotconfig';
import  MessageParser from "./Messageparser";
import ActionProvider from './ActionProvider'
import Chatbot from 'react-chatbot-kit';
// import 'react-chatbot-kit/build/main.css';
import chatbotcss from './ChatBotstyle.css'
const ChatBotPage = () => {
  return (
 
         <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
      
  
  )
}

export default ChatBotPage
