import ChatbotIcon from "./components/ChatbotIcon";
import ChatForm from "./components/ChatForm";
import { useState } from "react";
import ChatMeassage from "./components/ChatMessage";
const App = () => {
  //hiyya une state li t7at fiha les messages mta3 l'utilisateur, useState([]) ykhalih fargh f l'awel (une liste vide).
  //➡️ Na3mlou state chatHistory bech nkhaznou fiha les messages mta3 l'utilisateur w bech najmou nbadlouha b setChatHistory.
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
              Hey there! 👋 <br />
              I'm a Chatbot. How can I help you today?
            </p>
          </div>
          {/* chatHistory.map() ta3mel boucle 3al messages li mawjoudin f chatHistory.
           chat : hiyya l'élément wa7ed wa7ed men chatHistory.
           index : houwa numéro mta3 l'élément fel liste.
           <ChatMeassage />:  hiyya un composant li y'affichi chaque message.
           key={index} : bech React y9der y3rf chaque élément b index w yoptimize l'affichage. */}

          {chatHistory.map((chat, index) => (
            <ChatMeassage key={index} chat={chat} />
          ))}
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
