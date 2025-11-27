"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { User, Bot, Mic } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useInterviewStore } from '@/store/useInterview';
export default function VideoCall() {
    const [isAISpeaking, setIsAISpeaking] = useState(false);
    const videoRef = useRef(null);
    const [videosuccess, setvideosuccess] = useState(true);
    const isVideoOff = useInterviewStore((state) => state.isVideoOff);
    // useEffect(() => {
    //   // Simulate AI speaking intervals
    //   const interval = setInterval(() => {
    //     setIsAISpeaking((prev) => !prev)
    //   }, 3000)
    //   return () => clearInterval(interval)
    // }, [])
    useEffect(() => {
        // Get user media for video
        async function getMedia() {
            try {
                const localStream = await navigator.mediaDevices.getUserMedia({
                    video: true,
                    audio: true,
                });
                if (videoRef.current) {
                    videoRef.current.srcObject = localStream;
                }
                setvideosuccess(true);
            }
            catch (error) {
                setvideosuccess(false);
                console.error("Error accessing media devices.", error);
            }
        }
        if (!isVideoOff) {
            getMedia();
        }
    }, [isVideoOff]);
    return (_jsxs("div", { className: "flex-1 p-4 space-y-4", children: [_jsxs(motion.div, { className: "relative bg-accent rounded-lg overflow-hidden aspect-video", animate: {
                    boxShadow: isAISpeaking ? "0 0 20px rgba(59, 130, 246, 0.5)" : "none",
                }, children: [_jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center", children: _jsx(motion.div, { animate: {
                                scale: isAISpeaking ? 1.1 : 1,
                                rotate: isAISpeaking ? [0, 1, -1, 0] : 0,
                            }, transition: { duration: 0.5 }, children: _jsx(Avatar, { className: "w-20 h-20 border-4 border-blue-400", children: _jsx(AvatarFallback, { className: "bg-blue-500 text-white text-2xl", children: _jsx(Bot, { className: "w-10 h-10" }) }) }) }) }), _jsxs("div", { className: "absolute bottom-3 left-3 bg-black/50 backdrop-blur-sm rounded-lg px-3 py-1 flex items-center gap-2", children: [_jsx("div", { className: `w-2 h-2 rounded-full ${isAISpeaking ? "bg-green-400 animate-pulse" : "bg-muted-foreground"}` }), _jsx("span", { className: "text-white text-sm font-medium", children: "AI Interviewer" }), isAISpeaking && _jsx(Mic, { className: "w-3 h-3 text-green-400" })] })] }), _jsxs("div", { className: "relative bg-accent rounded-lg overflow-hidden aspect-video", children: [!isVideoOff && videosuccess ? (_jsx("video", { ref: videoRef, autoPlay: true, muted: true, playsInline: true, className: "w-full h-full object-cover" })) : (_jsx("div", { className: 'w-full h-full object-cover', children: _jsx("div", { className: "absolute inset-0 bg-accent flex items-center justify-center", children: _jsx(Avatar, { className: "w-16 h-16", children: _jsx(AvatarFallback, { className: "bg-muted text-foreground", children: _jsx(User, { className: "w-8 h-8" }) }) }) }) })), _jsxs("div", { className: "absolute bottom-3 left-3 bg-black/50 backdrop-blur-sm rounded-lg px-3 py-1 flex items-center gap-2", children: [_jsx("div", { className: "w-2 h-2 bg-green-400 rounded-full" }), _jsx("span", { className: "text-white text-sm font-medium", children: "You" })] })] }), _jsxs("div", { className: "bg-accent/50 rounded-lg p-3", children: [_jsxs("div", { className: "flex items-center justify-between text-sm", children: [_jsx("span", { className: "text-muted-foreground", children: "Question 1 of 3" }), _jsx("span", { className: "text-primary", children: "Technical Round" })] }), _jsx("div", { className: "w-full bg-muted rounded-full h-2 mt-2", children: _jsx("div", { className: "bg-primary h-2 rounded-full w-1/3 transition-all duration-500" }) })] })] }));
}
