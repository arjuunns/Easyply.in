"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, Bot, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

interface Message {
  id: number
  sender: "ai" | "user"
  content: string
  timestamp: string
}

export default function ChatPanel() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: "ai",
      content:
        "Hello! I'm your AI interviewer. Feel free to ask questions about the problem or clarify any doubts during the interview.",
      timestamp: "10:30",
    },
  ])
  const [newMessage, setNewMessage] = useState("")

  const sendMessage = () => {
    if (newMessage.trim()) {
      const message: Message = {
        id: messages.length + 1,
        sender: "user",
        content: newMessage,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      }
      setMessages([...messages, message])
      setNewMessage("")

      // Simulate AI response
      setTimeout(() => {
        const aiResponse: Message = {
          id: messages.length + 2,
          sender: "ai",
          content: "I understand your question. Let me help you with that...",
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        }
        setMessages((prev) => [...prev, aiResponse])
      }, 1000)
    }
  }

  return (
    <div className="h-full flex flex-col">
      {/* Chat Header */}
      <div className="p-4 border-b border-border">
        <h3 className="font-medium text-foreground">Interview Chat</h3>
        <p className="text-xs text-muted-foreground mt-1">Ask questions anytime</p>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <motion.div
            key={message.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex gap-3 ${message.sender === "user" ? "flex-row-reverse" : ""}`}
          >
            <Avatar className="w-8 h-8 flex-shrink-0">
              <AvatarFallback className={message.sender === "ai" ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"}>
                {message.sender === "ai" ? <Bot className="w-4 h-4" /> : <User className="w-4 h-4" />}
              </AvatarFallback>
            </Avatar>
            <div className={`flex-1 ${message.sender === "user" ? "text-right" : ""}`}>
              <div
                className={`inline-block p-3 rounded-lg max-w-[80%] ${
                  message.sender === "user" ? "bg-primary text-primary-foreground" : "bg-accent text-accent-foreground"
                }`}
              >
                <p className="text-sm">{message.content}</p>
              </div>
              <p className="text-xs text-muted-foreground mt-1">{message.timestamp}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Message Input */}
      <div className="p-4 border-t border-border">
        <div className="flex gap-2">
          <Textarea
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Ask a question..."
            className="flex-1 bg-input border-border text-foreground resize-none"
            rows={2}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault()
                sendMessage()
              }
            }}
          />
          <Button onClick={sendMessage} size="sm" className="self-end">
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
