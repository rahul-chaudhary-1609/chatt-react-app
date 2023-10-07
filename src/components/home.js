import React, { useEffect, useState } from "react";
import { getChatData } from "../data/api";
import ChatList from "./chatList";
import ChatWindow from "./chatWindow";
import Search from "./search";
import "./styles.css";


function Home(){

    const [chatList, setChatList]= useState([]);
    const [selectedChatCard, setSelectedChatCard]= useState({});

    useEffect(()=>{
        getChatData().then((data)=>{
            console.log(data);
            setChatList(data)
        }).catch(error=>console.log(error));
    },[])

    return (
        <div className="main">
            <div className="chat-list-main">
                <div className="search-div">
                    <h3>Filter by Title/Order ID</h3>
                    <Search/>
                </div>
                <ChatList chatList={chatList} setSelectedChatCard={setSelectedChatCard}/>
            </div>
            <ChatWindow selectedChatCard={selectedChatCard}/>
        </div>
    )
}

export default Home;