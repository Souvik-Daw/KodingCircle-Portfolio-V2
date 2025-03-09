import { useRef } from "react";
const ChatForm = ({ chatHistory, setChatHistory, generateBotResponse }) => {
  const inputRef = useRef();

  const WebApp = (e) => {
    if (inputRef.current) {
      inputRef.current.value = "Web/App";
    }
    handleFormSubmit(e);
  }

  const Automation = (e) => {
    if (inputRef.current) {
      inputRef.current.value = "Automation";
    }
    handleFormSubmit(e);
  }

  const SEOSMO = (e) => {
    if (inputRef.current) {
      inputRef.current.value = "SEO/SMO";
    }
    handleFormSubmit(e);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const userMessage = inputRef.current.value.trim();
    if (!userMessage) return;
    inputRef.current.value = "";
    // Update chat history with the user's message
    setChatHistory((history) => [...history, { role: "user", text: userMessage }]);
    // Delay 600 ms before showing "Thinking..." and generating response
    setTimeout(() => {
      // Add a "Thinking..." placeholder for the bot's response
      setChatHistory((history) => [...history, { role: "model", text: "Thinking..." }]);
      // Call the function to generate the bot's response
      generateBotResponse([...chatHistory, { role: "user", text: `Using the details provided above, please address this query: ${userMessage}` }]);
    }, 600);
  };
  return (
    <>
      <div className="suggestion">
        <button onClick={WebApp} className="suggestion-items">Web/App</button>

        <button onClick={Automation} className="suggestion-items">Automation</button>

        <button onClick={SEOSMO} className="suggestion-items">SEO/SMO</button>

      </div>
      <form onSubmit={handleFormSubmit} className="chat-form">
        <input ref={inputRef} placeholder="your message here..." className="message-input" required />
        <button type="submit" id="send-message" className="material-symbols-rounded">
          ➤
        </button>
      </form>
    </>
  );
};
export default ChatForm;