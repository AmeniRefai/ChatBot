import React, { useRef } from "react";
const ChatForm = () => {
  const inputRef = useRef(null);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const userMessage = inputRef.current.value.trim();
    if (!userMessage) return;
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
