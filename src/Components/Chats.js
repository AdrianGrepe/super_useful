import React from "react";
import messengerImg from "../Images/messenger.png"

export default function Chats() {
    return(
        <>
         <div class="chat-icons">
            <a href="https://wa.me/525540028424" target="_blank" className="whatsapp"><img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" alt="WhatsApp"/></a>
            <a href="https://t.me/Super_Util_Bot" target="_blank" className="telegram"><img src="https://cdn-icons-png.flaticon.com/512/2111/2111646.png" alt="Telegram"/></a>
            <a href="https://m.me/ProductosSuperUtil" target="_blank" className="messenger"><img src={messengerImg} alt="Messenger"/></a>
        </div>
        </>
    )
}