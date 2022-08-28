const ChatContainer = () => {
  return (
    <div className="chat-container">
      <ChatHeader />

      <div>
        <button className="option">Links</button>
        <button className="option">Chat</button>
      </div>

      <LinksDisplay />

      <ChatDisplay />
    </div>
  );
};

export default ChatContainer;
