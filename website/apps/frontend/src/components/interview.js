import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { RotateCcw, Play } from "lucide-react";
import { useInterviewStore } from "@/store/useInterview";
import { motion } from "framer-motion";
import { Mic, MicOff, Video, VideoOff, Phone } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MessageSquare, Settings, Clock } from "lucide-react";
import { formatTime } from "../lib/utils";
import VideoCall from "@/components/video-call";
import CodeEditor from "@/components/code-editor";
import Output from "@/components/Output"; //!TODO
import { runCode } from "../apis/apis";
export function TopPanel(props) {
    // Import needed components and utils inside the function
    // (for demonstration, but in practice, imports are at the top of the file)
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const { timeElapsed, setShowChat, showChat } = props;
    return (_jsx(_Fragment, { children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { className: "flex items-center gap-4", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx("div", { className: "w-3 h-3 bg-red-500 rounded-full animate-pulse" }), _jsx("span", { className: "text-foreground font-medium", children: "Technical Interview" })] }), _jsxs(Badge, { variant: "secondary", children: [_jsx(Clock, { className: "w-3 h-3 mr-1" }), formatTime(timeElapsed)] })] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Button, { variant: "ghost", size: "sm", onClick: () => setShowChat(!showChat), className: "text-muted-foreground hover:text-foreground hover:bg-accent", children: _jsx(MessageSquare, { className: "w-4 h-4" }) }), _jsx(Button, { variant: "ghost", size: "sm", className: "text-muted-foreground hover:text-foreground hover:bg-accent", children: _jsx(Settings, { className: "w-4 h-4" }) })] })] }) }));
}
export function LeftPanel() {
    // Import all needed state and props from the store
    const { isMuted = false, isVideoOff = false, setIsMuted = () => { }, setIsVideoOff = () => { }, setIsInterviewActive = () => { }, listening = false,
    // text, // Uncomment if you want to show recognized text
     } = useInterviewStore();
    return (_jsxs("div", { className: "w-1/3 bg-card flex flex-col", children: [_jsx(VideoCall, {}), _jsxs("div", { className: "p-4 bg-background border-t border-border", children: [_jsxs("div", { className: "flex items-center justify-center gap-4", children: [_jsx(motion.div, { whileTap: { scale: 0.95 }, children: _jsx(Button, { variant: isMuted ? "destructive" : "secondary", size: "lg", className: "rounded-full w-12 h-12 p-0", onClick: () => setIsMuted && setIsMuted(!isMuted), children: isMuted ? (_jsx(MicOff, { className: "w-5 h-5" })) : (_jsx(Mic, { className: "w-5 h-5" })) }) }), _jsx(motion.div, { whileTap: { scale: 0.95 }, children: _jsx(Button, { variant: isVideoOff ? "destructive" : "secondary", size: "lg", className: "rounded-full w-12 h-12 p-0", onClick: () => setIsVideoOff && setIsVideoOff(!isVideoOff), children: isVideoOff ? (_jsx(VideoOff, { className: "w-5 h-5" })) : (_jsx(Video, { className: "w-5 h-5" })) }) }), _jsx(motion.div, { whileTap: { scale: 0.95 }, children: _jsx(Button, { variant: "destructive", size: "lg", className: "rounded-full w-12 h-12 p-0", onClick: () => setIsInterviewActive && setIsInterviewActive(false), children: _jsx(Phone, { className: "w-5 h-5 rotate-[135deg]" }) }) })] }), _jsx("div", { className: "mt-4 text-center", children: _jsxs("div", { className: "text-xs text-muted-foreground", children: ["Mic: ", isMuted ? "Off" : "On", " | Listening:", " ", listening ? "Yes" : "No"] }) })] })] }));
}
export function RightPanel({ currentQ }) {
    var _a;
    const { code, setCode, language, setLanguage, stdin, setStdin, output, setOutput, loading, setLoading, } = useInterviewStore();
    const handleRunCode = async () => {
        var _a, _b;
        setLoading(true);
        try {
            const result = await runCode(code, language, stdin);
            const outputText = ((_a = result.run) === null || _a === void 0 ? void 0 : _a.output) || result.output || ((_b = result.run) === null || _b === void 0 ? void 0 : _b.stderr) || result.stderr || "No output";
            setOutput(outputText);
        }
        catch (e) {
            if (typeof e === "object" && e && "message" in e && typeof e.message === "string") {
                setOutput(e.message || "Error running code");
            }
            else {
                setOutput("Error running code");
            }
        }
        finally {
            setLoading(false);
        }
    };
    return (_jsx(_Fragment, { children: _jsxs("div", { className: "flex-1 flex flex-col bg-background", children: [_jsxs("div", { className: "bg-card border-b border-border p-4", children: [_jsxs("div", { className: "flex items-center justify-between mb-3", children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx("h2", { className: "text-xl font-semibold text-foreground", children: currentQ === null || currentQ === void 0 ? void 0 : currentQ.title }), _jsx(Badge, { variant: "secondary", className: `${(currentQ === null || currentQ === void 0 ? void 0 : currentQ.difficulty) === "Easy"
                                                ? "bg-green-500/20 text-green-400"
                                                : (currentQ === null || currentQ === void 0 ? void 0 : currentQ.difficulty) === "Medium"
                                                    ? "bg-yellow-500/20 text-yellow-400"
                                                    : "bg-red-500/20 text-red-400"}`, children: currentQ === null || currentQ === void 0 ? void 0 : currentQ.difficulty })] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsxs(Button, { variant: "outline", size: "sm", onClick: () => {
                                                var _a, _b;
                                                setCode((currentQ === null || currentQ === void 0 ? void 0 : currentQ.initialCode) || "");
                                                setLanguage("javascript");
                                                setStdin(((_b = (_a = currentQ === null || currentQ === void 0 ? void 0 : currentQ.testCases) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.input) || "");
                                                setOutput("");
                                            }, children: [_jsx(RotateCcw, { className: "w-4 h-4 mr-2" }), "Reset"] }), _jsxs(Button, { size: "sm", className: "bg-green-600 hover:bg-green-700", onClick: handleRunCode, disabled: loading, children: [_jsx(Play, { className: "w-4 h-4 mr-2" }), loading ? "Running..." : "Run Code"] })] })] }), _jsx("p", { className: "text-foreground text-sm leading-relaxed", children: currentQ === null || currentQ === void 0 ? void 0 : currentQ.description })] }), _jsxs("div", { className: "flex-1 flex", children: [_jsx("div", { className: "flex-1", children: _jsx(CodeEditor, { value: code, language: language, onChange: setCode, onLanguageChange: setLanguage }) }), _jsxs("div", { className: "w-80 bg-card border-l border-border flex flex-col", children: [_jsxs("div", { className: "p-4 border-b border-border", children: [_jsx("h3", { className: "font-medium text-foreground mb-3", children: "Test Cases" }), _jsx("div", { className: "space-y-3", children: (_a = currentQ === null || currentQ === void 0 ? void 0 : currentQ.testCases) === null || _a === void 0 ? void 0 : _a.map((testCase, index) => (_jsxs("div", { className: "bg-accent/50 rounded-lg p-3", children: [_jsxs("div", { className: "text-sm", children: [_jsx("div", { className: "text-foreground mb-1", children: "Input:" }), _jsx("code", { className: "text-blue-400 text-xs", children: testCase === null || testCase === void 0 ? void 0 : testCase.input })] }), _jsxs("div", { className: "text-sm mt-2", children: [_jsx("div", { className: "text-foreground mb-1", children: "Expected Output:" }), _jsx("code", { className: "text-green-400 text-xs", children: testCase === null || testCase === void 0 ? void 0 : testCase.output })] }), _jsx(Button, { size: "sm", className: "mt-2", onClick: () => setStdin(testCase.input), children: "Use as Input" })] }, index))) })] }), _jsx("div", { children: _jsx(Output, { output: output }) })] })] })] }) }));
}
