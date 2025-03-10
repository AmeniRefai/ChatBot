import ChatbotIcon from "./components/ChatbotIcon";
import ChatForm from "./components/ChatForm";
import { useState } from "react";

const App = () => {
  const [chatHistory, setChatHistory] = useState([]);
  return (
    <div className="container">
      <div className="chatbot-popup">
        {/* Chatbot Header  */}
        <div className="chat-header">
          <div className="header-info">
            <ChatbotIcon />
            <h2 className="logo-text">Chatbot</h2>
          </div>
          <button class="material-symbols-outlined">keyboard_arrow_down</button>
        </div>
        {/* Chatbot Body */}
        <div className="chat-body">
          <div className="message bot-message">
            <ChatbotIcon />
            <p className="message-text">
              hey there! 👋 <br />
              I'm a Chatbot. How can I help you today?
            </p>
          </div>
          <div className="message user-message">
            <p className="message-text">
              lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
        {/* chat-footer */}
        <div className="chat-footer">
          <ChatForm setChatHistory={setChatHistory} />
        </div>
      </div>
    </div>
  );
};

export default App;
