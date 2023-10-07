function ChatWindow({selectedChatCard}){
    return (
        <div className="chat-window-main">
            <div className="chat-window-header">
                <img src={selectedChatCard.imageURL} alt=""/>
                <label>{selectedChatCard.title}</label>
            </div>
            <div className="chat-window-area">
                {
                    selectedChatCard.messageList.map((msg,index)=>{
                        return (
                            <div key={index} className={msg.sender=="BOT" ? "chat-window-area-msg-bot" : "chat-window-area-msg-user"}>
                                {msg.message}
                            </div>
                        )
                    })
                }
            </div>
            <div className="chat-window-type-msg">
                <input type="text" placeholder="Type a message"/>
            </div>

        </div>
    )
}


export default ChatWindow;