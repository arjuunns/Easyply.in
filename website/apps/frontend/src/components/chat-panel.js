"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Bot, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
export default function ChatPanel() {
    const [messages, setMessages] = useState([
        {
            id: 1,
            sender: "ai",
            content: "Hello! I'm your AI interviewer. Feel free to ask questions about the problem or clarify any doubts during the interview.",
            timestamp: "10:30",
        },
    ]);
    const [newMessage, setNewMessage] = useState("");
    const sendMessage = () => {
        if (newMessage.trim()) {
            const message = {
                id: messages.length + 1,
                sender: "user",
                content: newMessage,
                timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
            };
            setMessages([...messages, message]);
            setNewMessage("");
            // Simulate AI response
            setTimeout(() => {
                const aiResponse = {
                    id: messages.length + 2,
                    sender: "ai",
                    content: "I understand your question. Let me help you with that...",
                    timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
                };
                setMessages((prev) => [...prev, aiResponse]);
            }, 1000);
        }
    };
    return (_jsxs("div", { className: "h-full flex flex-col", children: [_jsxs("div", { className: "p-4 border-b border-gray-700", children: [_jsx("h3", { className: "font-medium text-white", children: "Interview Chat" }), _jsx("p", { className: "text-xs text-gray-400 mt-1", children: "Ask questions anytime" })] }), _jsx("div", { className: "flex-1 overflow-y-auto p-4 space-y-4", children: messages.map((message) => (_jsxs(motion.div, { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, className: `flex gap-3 ${message.sender === "user" ? "flex-row-reverse" : ""}`, children: [_jsx(Avatar, { className: "w-8 h-8 flex-shrink-0", children: _jsx(AvatarFallback, { className: message.sender === "ai" ? "bg-blue-500" : "bg-gray-600", children: message.sender === "ai" ? _jsx(Bot, { className: "w-4 h-4" }) : _jsx(User, { className: "w-4 h-4" }) }) }), _jsxs("div", { className: `flex-1 ${message.sender === "user" ? "text-right" : ""}`, children: [_jsx("div", { className: `inline-block p-3 rounded-lg max-w-[80%] ${message.sender === "user" ? "bg-blue-600 text-white" : "bg-gray-700 text-gray-100"}`, children: _jsx("p", { className: "text-sm", children: message.content }) }), _jsx("p", { className: "text-xs text-gray-500 mt-1", children: message.timestamp })] })] }, message.id))) }), _jsx("div", { className: "p-4 border-t border-gray-700", children: _jsxs("div", { className: "flex gap-2", children: [_jsx(Textarea, { value: newMessage, onChange: (e) => setNewMessage(e.target.value), placeholder: "Ask a question...", className: "flex-1 bg-gray-700 border-gray-600 text-white resize-none", rows: 2, onKeyDown: (e) => {
                                if (e.key === "Enter" && !e.shiftKey) {
                                    e.preventDefault();
                                    sendMessage();
                                }
                            } }), _jsx(Button, { onClick: sendMessage, size: "sm", className: "self-end bg-blue-600 hover:bg-blue-700", children: _jsx(Send, { className: "w-4 h-4" }) })] }) })] }));
}
