import "./styles.css";
import dateformat from "dateformat";

function ChatList(props){

    return(
        <div className="chat-list">
        {
            props.chatList.map((chat,index)=>{
                return <ChatCard key={index} chat={chat} setSelectedChatCard = {props.setSelectedChatCard}/>;
            })
        }
        </div>
    )
}

function ChatCard({chat,setSelectedChatCard}){
    let lastchatData = new Date(chat.latestMessageTimestamp);

    const handleChatCardSelect = (chat)=>{
        console.log("clicked")
        setSelectedChatCard(chat);
    }

    return(
        <div className="chat-card" onClick={()=>handleChatCardSelect(chat)}>
            <img src={chat.imageURL} alt="logo"/>
            <div className="chat-card-info">
                <label id="title">{chat.title}</label>
                <label id="orderid">{chat.orderId}</label>
            </div>
            <label>{dateformat(lastchatData,"dd/mm/yyyy")}</label>
        </div>
    )
}

export default ChatList;