import React, { useRef } from "react";

const ChatForm = ({ setChatHistory }) => {
  // Ce code yakhou l'input de l'utilisateur,
  //  ychouf kenou fargh wala lé, ba3d yvidih w y3ml console.log().
  //useRef yest7a9ha khater ma na3mlouch state w n7ebou direct njibou l'input value.
  const inputRef = useRef(null); //inputRef hiyya une référence bach n7otouha f input w na9drou njibou menha l'input value (bila ma na3mlou state).
  const handleFormSubmit = (e) => {
    e.preventDefault(); //ma ya3mlch refresh
    const userMessage = inputRef.current.value.trim(); //Njibou value mta3 l'input, nfarskhou l'espaces f l9bal w lakhir (trim()), w ken fargha ma na3mlou chay.
    if (!userMessage) return;

    inputRef.current.value = ""; //Ba3d ma l'utilisateur yeb3eth message, nkhali l'input fargh.

    setChatHistory((history) => [
      ...history,
      { role: "user", text: userMessage },
    ]); //Najoutiw message mta3 l'utilisateur f l'array chatHistory.
    console.log(userMessage);
  };
  return (
    <form action="#" className="chat-form" onSubmit={handleFormSubmit}>
      <input
        ref={inputRef}
        type="text"
        placeholder="message..."
        className="message-input"
        required
      />
      <button class="material-symbols-outlined">send</button>
    </form>
  );
};

export default ChatForm;
