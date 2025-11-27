import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ChatPanel from "@/components/chat-panel";
import { useInterviewStore } from "@/store/useInterview";
import { ll, getQuestionText } from '../lib/utils';
import { useInterviewSpeech } from '@/hooks/useInterviewSpeech';
import { TopPanel, LeftPanel, RightPanel } from '@/components/interview';
const phaseKeys = ["phase_1", "phase_2", "phase_3", "phase_4"];
export default function InterviewPage() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [phase, setPhase] = useState(0);
    const [timeElapsed, setTimeElapsed] = useState(0);
    const localVideoRef = useRef(null);
    const audioRef = useRef(null);
    const currentPhaseKey = phaseKeys[phase];
    const currentPhase = ll[currentPhaseKey];
    const questionsArray = currentPhase.questions;
    const firstQuestion = getQuestionText(questionsArray[0]);
    const [text, setText] = useState("");
    const recognitionRef = useRef(null);
    // Add a type for the store to avoid lint errors
    const { isMuted = false, isVideoOff = false, showChat = false, isInterviewActive = true, setIsMuted = () => { }, setIsVideoOff = () => { }, setShowChat = () => { }, setIsInterviewActive = () => { }, connectSocket = () => { }, disconnectSocket = () => { }, introduction = (question) => { }, audio, evaluateAnswer, isAiSpeaking } = useInterviewStore();
    const { listening } = useInterviewSpeech({
        isMuted,
        isAiSpeaking,
        questionsArray,
        phase,
        currentQuestion,
        phaseKeys,
        ll,
        setCurrentQuestion,
        setPhase,
        evaluateAnswer,
        getQuestionText,
        setText
    });
    useEffect(() => {
        connectSocket();
        setTimeout(() => {
            // 1 second has passed
        }, 1000);
        console.log("sending introduction");
        introduction(firstQuestion);
        return disconnectSocket();
    }, []);
    // // Play audio when received from backend
    // useEffect(() => {
    //   const playAudio = async () => {
    //     if (!audio) return;
    //     try {
    //       console.log("audio will play now");
    //
    //     } catch (err) {
    //       console.error("Error playing audio:", err);
    //     }
    //   };
    //   playAudio();
    // }, [audio]);
    // ! Setup recognition instance only on client
    // Timer effect (uncomment if needed)
    // useEffect(() => {
    //   if (isInterviewActive) {
    //     const timer = setInterval(() => {
    //       setTimeElapsed((prev) => prev + 1)
    //     }, 1000)
    //     return () => clearInterval(timer)
    //   }
    // }, [isInterviewActive])
    const questions = [
        {
            id: 1,
            title: "Two Sum Problem",
            difficulty: "Easy",
            description: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
            initialCode: `function twoSum(nums, target) {
    // Your solution here

}`,
            testCases: [
                { input: "[2,7,11,15], target = 9", output: "[0,1]" },
                { input: "[3,2,4], target = 6", output: "[1,2]" },
            ],
        },
    ];
    const currentQ = questions[currentQuestion];
    return (_jsxs("div", { className: "h-screen bg-background flex flex-col overflow-hidden", children: [_jsx("div", { className: "bg-card border-b border-border px-6 py-3", children: _jsx(TopPanel, { timeElapsed: timeElapsed, setShowChat: setShowChat, showChat: showChat }) }), _jsxs("div", { className: "flex-1 flex overflow-hidden", children: [_jsx(LeftPanel, {}), _jsx(RightPanel, { currentQ: currentQ }), _jsx(AnimatePresence, { children: showChat && (_jsx(motion.div, { initial: { width: 0, opacity: 0 }, animate: { width: 320, opacity: 1 }, exit: { width: 0, opacity: 0 }, transition: { duration: 0.3 }, className: "bg-card border-l border-border overflow-hidden", children: _jsx(ChatPanel, {}) })) })] })] }));
}
