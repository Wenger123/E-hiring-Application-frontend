import React from "react";
import {PrettyChatWindow} from "react-chat-engine-pretty";
import {useEffect, useState} from "react";
import axios from "../../api/axios.jsx";

export const ChatPage = () => {
    const [user, setUser] = useState();

    const [formData, setFormData] = useState({
        email: `${localStorage.getItem("email")}`
    });

    const secret = formData.email;

    useEffect(() => {
        const chatLogin = async () => {
            const result = await axios.post("/chat/login", formData);
            setUser({ ...result.data, secret });
        };

        chatLogin();

    }, []);

    return(
        <div style={{height: "100vh", width: "100vw"}}>
            <PrettyChatWindow
                projectId="c412161a-cac6-4c07-8c07-72e63019ead5"
                username={formData.email}
                secret={secret}
                style={{height: "100%", width: "100vw"}}
            />
        </div>
    )
}