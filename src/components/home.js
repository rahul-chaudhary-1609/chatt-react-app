import React, { useEffect, useState } from "react";
import { getChatData } from "../data/api";
import ChatList from "./chatList";
import ChatWindow from "./chatWindow";
import Search from "./search";
import "./styles.css";


function Home(){

    const [chatList, setChatList]= useState([]);
    const [selectedChatCard, setSelectedChatCard]= useState({});
    const [searchText, setSearchText]= useState("");

    const fetchData = ()=>{
        getChatData().then((data)=>{
            setChatList(data)
        }).catch(error=>console.log(error));
    }

    useEffect(()=>{
       fetchData();
    },[])

    useEffect(()=>{
        if(searchText){
            getChatData().then((data)=>{
                let filterChatList = data.filter(chat => (chat.title.includes(searchText) || chat.orderId.includes(searchText)));
                setChatList(filterChatList);
            }).catch(error=>console.log(error));
        }else{
            fetchData();
        }
    },[searchText])

    return (
        <div className="main">
            <div className="chat-list-main">
                <div className="search-div">
                    <h3>Filter by Title/Order ID</h3>
                    <Search searchText={searchText} setSearchText={setSearchText}/>
                </div>
                <ChatList chatList={chatList} setSelectedChatCard={setSelectedChatCard}/>
            </div>
            <ChatWindow selectedChatCard={selectedChatCard}/>
        </div>
    )
}

export default Home;