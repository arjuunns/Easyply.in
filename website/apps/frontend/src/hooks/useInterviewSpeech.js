import { useEffect, useRef, useState } from "react";
export function useInterviewSpeech({ isMuted, isAiSpeaking, questionsArray, phase, currentQuestion, phaseKeys, ll, setCurrentQuestion, setPhase, evaluateAnswer, getQuestionText, setText }) {
    const recognitionRef = useRef(null);
    const [listening, setListening] = useState(false);
    // Init SpeechRecognition
    useEffect(() => {
        if (typeof window === "undefined")
            return;
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (SpeechRecognition && !isAiSpeaking) {
            const recognition = new SpeechRecognition();
            recognition.continuous = true;
            recognition.lang = "en-IN";
            recognition.interimResults = true;
            recognition.onresult = (event) => {
                let finalTranscript = "";
                for (let i = event.resultIndex; i < event.results.length; i++) {
                    const transcript = event.results[i][0].transcript;
                    if (event.results[i].isFinal)
                        finalTranscript += transcript + " ";
                }
                if (finalTranscript) {
                    setText((prev) => prev + finalTranscript);
                    console.log("Final Transcript:", finalTranscript);
                    const nextQuestionIndex = currentQuestion + 1;
                    const isLastQuestionInPhase = nextQuestionIndex >= questionsArray.length;
                    let nextPhase = phase;
                    let nextQuestion = currentQuestion;
                    if (!isLastQuestionInPhase) {
                        nextQuestion = nextQuestionIndex;
                    }
                    else if (phase < phaseKeys.length - 1) {
                        nextPhase = phase + 1;
                        nextQuestion = 0;
                    }
                    const currentQ = questionsArray[currentQuestion];
                    let nextQ = null;
                    if (!isLastQuestionInPhase) {
                        nextQ = questionsArray[nextQuestionIndex];
                    }
                    else if (nextPhase < phaseKeys.length) {
                        const nextPhaseKey = phaseKeys[nextPhase];
                        const nextPhaseQuestions = ll[nextPhaseKey].questions;
                        nextQ = nextPhaseQuestions[0];
                    }
                    console.log('sending ans for evaluation....');
                    evaluateAnswer(getQuestionText(currentQ), finalTranscript, nextQ ? getQuestionText(nextQ) : null);
                    setCurrentQuestion(nextQuestion);
                    setPhase(nextPhase);
                }
            };
            recognition.onerror = (event) => {
                console.error("Speech recognition error:", event.error);
            };
            recognitionRef.current = recognition;
        }
        return () => {
            if (recognitionRef.current) {
                recognitionRef.current.onresult = null;
                recognitionRef.current.onerror = null;
                recognitionRef.current.stop();
            }
        };
    }, [isAiSpeaking]);
    // Control start/stop based on mute state
    useEffect(() => {
        if (!recognitionRef.current)
            return;
        if (!isMuted) {
            try {
                recognitionRef.current.start();
                setListening(true);
            }
            catch (e) {
                console.warn("Speech recognition already started");
            }
        }
        else {
            recognitionRef.current.stop();
            setListening(false);
        }
    }, [isMuted]);
    return { listening };
}
