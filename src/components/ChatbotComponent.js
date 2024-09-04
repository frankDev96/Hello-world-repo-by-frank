import React from 'react';
import { Chatbot } from 'react-chatbot-kit';
import config from '../config/ChatbotConfig';
import MessageParser from "../config/MessageParser"
import ActionProvider from "../config/ActionProvider"

const ChatbotComponent = () => {
  return (
    <div className={'header'}>
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}

      />
    </div>
  );
};

export default ChatbotComponent;
