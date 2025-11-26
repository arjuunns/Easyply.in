import { create } from 'zustand';
import { io } from "socket.io-client";
const BASE_URL = import.meta.env.MODE === "development" ? "http://localhost:3000/" : "/";
export const useInterviewStore = create((set, get) => ({
    isMuted: false,
    isVideoOff: false,
    showChat: false,
    isInterviewActive: true,
    setIsMuted: (isMuted) => set({ isMuted }),
    setIsVideoOff: (isVideoOff) => set({ isVideoOff }),
    setShowChat: (showChat) => set({ showChat }),
    setIsInterviewActive: (isInterviewActive) => set({ isInterviewActive }),
    socket: null,
    audio: null,
    currentQuestion: "",
    answer: "",
    isAiSpeaking: false,
    // --- Code Execution State ---
    code: "",
    language: "javascript",
    stdin: "",
    output: "",
    loading: false,
    setCode: (code) => set({ code }),
    setLanguage: (language) => set({ language }),
    setStdin: (stdin) => set({ stdin }),
    setOutput: (output) => set({ output }),
    setLoading: (loading) => set({ loading }),
    connectSocket: () => {
        const state = get();
        console.log(BASE_URL);
        const newSocket = io(BASE_URL);
        newSocket.connect();
        // Listen for introduction audio after connecting
        newSocket.on("introduction", async (data) => {
            console.log(data);
            set({ isAiSpeaking: true });
            try {
                if (data && data.audio) {
                    const audioElement = new Audio(`data:audio/mpeg;base64,${data.audio}`);
                    await audioElement.play();
                    set({ audio: data.audio });
                }
            }
            catch (error) {
                console.error(error);
            }
            finally {
                set({ isAiSpeaking: false });
                console.log('you can speak now!!!');
            }
        });
        newSocket.on("evaluate", async (data) => {
            console.log(data);
            try {
                if (data && data.audio) {
                    console.log('we are setting the audio');
                    console.log(typeof data.audio);
                    const audioElement = new Audio(`data:audio/mpeg;base64,${data.audio}`);
                    audioElement.play();
                    set({ audio: data.audio });
                }
            }
            catch (error) {
                console.error(error);
            }
            finally {
                set({ isAiSpeaking: false });
                console.log('you can speak now!!!');
            }
        });
        set({ socket: newSocket });
    },
    disconnectSocket: () => {
        const state = get();
        const socket = state.socket;
        if (socket === null || socket === void 0 ? void 0 : socket.connected)
            socket.disconnect();
    },
    introduction: (question) => {
        set({ isAiSpeaking: true });
        const state = get();
        const socket = state.socket;
        if (socket) {
            socket.emit("introduction", {
                phase: "phase_1",
                question: question,
            });
        }
    },
    evaluateAnswer: (currentQuestion, answer, followupQuestion) => {
        set({ isAiSpeaking: true });
        const state = get();
        const socket = state.socket;
        if (socket) {
            socket.emit("evaluate", {
                currentQuestion,
                answer,
                followupQuestion,
            });
        }
    }
}));
