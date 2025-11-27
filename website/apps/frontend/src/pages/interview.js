"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { motion } from "framer-motion";
import { Clock, Code, Users, Brain, TrendingUp, Calendar, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from 'react-router-dom';
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};
const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
        },
    },
};
const cardHoverVariants = {
    hover: {
        scale: 1.02,
        transition: {
            duration: 0.2,
        },
    },
};
export default function InterviewPracticePage() {
    const [selectedTopic, setSelectedTopic] = useState("");
    const [selectedDifficulty, setSelectedDifficulty] = useState("");
    const [selectedType, setSelectedType] = useState("");
    const interviewFormats = [
        {
            title: "Technical Interview",
            description: "Coding challenges and technical problem solving",
            duration: "45-60 minutes",
            icon: Code,
            color: "from-blue-500 to-cyan-500",
            includes: ["Algorithm problems", "Code review", "System design basics"],
        },
        {
            title: "Behavioral Interview",
            description: "Soft skills and experience-based questions",
            duration: "30-45 minutes",
            icon: Users,
            color: "from-purple-500 to-pink-500",
            includes: ["STAR method questions", "Leadership scenarios", "Conflict resolution"],
        },
        {
            title: "Mixed Interview",
            description: "Combination of technical and behavioral questions",
            duration: "60-90 minutes",
            icon: Brain,
            color: "from-emerald-500 to-teal-500",
            includes: ["Technical challenges", "Behavioral assessment", "Culture fit"],
        },
        {
            title: "System Design Interview",
            description: "Test your ability to design scalable systems",
            duration: "45-60 minutes",
            icon: TrendingUp,
            color: "from-yellow-500 to-orange-500",
            includes: ["Design REST APIs", "Database modeling", "Scaling strategies"],
        },
        {
            title: "AI/ML Interview",
            description: "Questions focused on machine learning and data science",
            duration: "45-60 minutes",
            icon: Brain,
            color: "from-indigo-500 to-fuchsia-500",
            includes: ["ML algorithms", "Model evaluation", "Data pipelines"],
        },
        {
            title: "Frontend Development Interview",
            description: "For roles focused on UI/UX and frontend tech",
            duration: "40-60 minutes",
            icon: Code,
            color: "from-pink-500 to-red-500",
            includes: ["React/JS questions", "UI scenarios", "Accessibility"],
        },
        {
            title: "Backend Development Interview",
            description: "Server-side logic, DBs, and API design",
            duration: "45-60 minutes",
            icon: Code,
            color: "from-gray-700 to-gray-400",
            includes: ["Databases", "Authentication", "API structures"],
        },
        {
            title: "Product Management Interview",
            description: "Case studies and product thinking",
            duration: "45-60 minutes",
            icon: Calendar,
            color: "from-green-500 to-lime-500",
            includes: ["Prioritization", "Roadmapping", "User stories"],
        },
        {
            title: "UI/UX Design Interview",
            description: "For design-oriented roles",
            duration: "30-45 minutes",
            icon: Award,
            color: "from-rose-500 to-piñk-600",
            includes: ["Design systems", "Figma walkthrough", "User flows"],
        },
        {
            title: "HR/Non-Technical Interview",
            description: "Suited for business, law, medical, and HR domains",
            duration: "30-40 minutes",
            icon: Users,
            color: "from-orange-400 to-yellow-400",
            includes: ["Situational questions", "Communication skills", "Domain ethics"],
        }
    ];
    const performanceData = [
        {
            topic: "Web Development",
            difficulty: "Medium",
            timeAgo: "2 days ago",
            score: "8.5/10",
            scoreColor: "text-emerald-400",
        },
        {
            topic: "DSA Algorithms",
            difficulty: "Hard",
            timeAgo: "1 week ago",
            score: "7.2/10",
            scoreColor: "text-blue-400",
        },
    ];
    const navigate = useNavigate();
    return (_jsx("div", { className: "min-h-screen w-full bg-background", children: _jsx("div", { className: "relative z-10 container mx-auto px-4 py-12", children: _jsxs(motion.div, { variants: containerVariants, initial: "hidden", animate: "visible", className: "space-y-12", children: [_jsxs(motion.div, { variants: itemVariants, className: "text-center space-y-4", children: [_jsxs("div", { className: "inline-flex items-centser gap-2 px-4 py-2 bg-primary/20 rounded-full border border-primary/30 mb-6", children: [_jsx(Award, { className: "w-4 h-4 text-primary" }), _jsx("span", { className: "text-sm text-primary font-medium", children: "AI-Powered Practice" })] }), _jsx("h1", { className: "text-5xl md:text-6xl font-bold text-foreground", children: "Master Your Interview Skills" }), _jsx("p", { className: "text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed", children: "Practice with our advanced AI interviewer across multiple domains. Get detailed feedback and improve your interview performance with personalized insights." })] }), _jsxs("div", { className: "grid lg:grid-cols-2 gap-8", children: [_jsx(motion.div, { variants: itemVariants, children: _jsxs(Card, { className: "bg-card border-border backdrop-blur-sm", children: [_jsxs(CardHeader, { className: "space-y-4", children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx("div", { className: "p-2 bg-primary rounded-lg", children: _jsx(Brain, { className: "w-5 h-5 text-primary-foreground" }) }), _jsx(CardTitle, { className: "text-2xl text-foreground", children: "Setup Your Interview" })] }), _jsx(CardDescription, { className: "text-muted-foreground", children: "Customize your practice session based on your target role" })] }), _jsxs(CardContent, { className: "space-y-6", children: [_jsxs("div", { className: "space-y-2", children: [_jsx("label", { className: "text-sm font-medium text-foreground", children: "Interview Topic" }), _jsxs(Select, { value: selectedTopic, onValueChange: setSelectedTopic, children: [_jsx(SelectTrigger, { className: "bg-input border-border text-foreground", children: _jsx(SelectValue, { placeholder: "Select a topic" }) }), _jsxs(SelectContent, { className: "bg-card border-border", children: [_jsx(SelectItem, { value: "web-dev", children: "Web Development" }), _jsx(SelectItem, { value: "data-science", children: "Data Science" }), _jsx(SelectItem, { value: "mobile-dev", children: "Mobile Development" }), _jsx(SelectItem, { value: "devops", children: "DevOps" })] })] })] }), _jsxs("div", { className: "space-y-2", children: [_jsx("label", { className: "text-sm font-medium text-foreground", children: "Difficulty Level" }), _jsxs(Select, { value: selectedDifficulty, onValueChange: setSelectedDifficulty, children: [_jsx(SelectTrigger, { className: "bg-input border-border text-foreground", children: _jsx(SelectValue, { placeholder: "Select difficulty" }) }), _jsxs(SelectContent, { className: "bg-card border-border", children: [_jsx(SelectItem, { value: "beginner", children: "Beginner" }), _jsx(SelectItem, { value: "intermediate", children: "Intermediate" }), _jsx(SelectItem, { value: "advanced", children: "Advanced" }), _jsx(SelectItem, { value: "expert", children: "Expert" })] })] })] }), _jsxs("div", { className: "space-y-2", children: [_jsx("label", { className: "text-sm font-medium text-foreground", children: "Interview Type" }), _jsxs(Select, { value: selectedType, onValueChange: setSelectedType, children: [_jsx(SelectTrigger, { className: "bg-input border-border text-foreground", children: _jsx(SelectValue, { placeholder: "Select interview type" }) }), _jsxs(SelectContent, { className: "bg-card border-border", children: [_jsx(SelectItem, { value: "technical", children: "Technical" }), _jsx(SelectItem, { value: "behavioral", children: "Behavioral" }), _jsx(SelectItem, { value: "mixed", children: "Mixed" })] })] })] }), _jsx(motion.div, { whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 }, children: _jsx(Button, { className: "w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 text-lg", size: "lg", onClick: () => navigate('/startinterview'), children: "Start Free Interview" }) }), _jsx("p", { className: "text-xs text-muted-foreground text-center", children: "First interview is free. Additional interviews require premium." })] })] }) }), _jsxs(motion.div, { variants: itemVariants, className: "space-y-6", children: [_jsx("h2", { className: "text-2xl font-bold text-foreground mb-6", children: "Interview Formats" }), _jsx("div", { className: "space-y-4", children: interviewFormats.map((format, index) => (_jsx(motion.div, { variants: cardHoverVariants, whileHover: "hover", initial: { opacity: 0, x: 20 }, animate: { opacity: 1, x: 0 }, transition: { delay: index * 0.1 }, children: _jsx(Card, { className: "bg-card border-border backdrop-blur-sm hover:border-primary/50 transition-all duration-300", children: _jsx(CardContent, { className: "p-6", children: _jsxs("div", { className: "flex items-start gap-4", children: [_jsx("div", { className: `p-3 bg-gradient-to-r ${format.color} rounded-xl`, children: _jsx(format.icon, { className: "w-6 h-6 text-white" }) }), _jsxs("div", { className: "flex-1 space-y-3", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsx("h3", { className: "text-xl font-semibold text-foreground", children: format.title }), _jsxs("div", { className: "flex items-center gap-1 text-muted-foreground", children: [_jsx(Clock, { className: "w-4 h-4" }), _jsx("span", { className: "text-sm", children: format.duration })] })] }), _jsx("p", { className: "text-muted-foreground", children: format.description }), _jsxs("div", { className: "space-y-2", children: [_jsx("p", { className: "text-sm font-medium text-foreground", children: "What's included:" }), _jsx("div", { className: "flex flex-wrap gap-2", children: format.includes.map((item) => (_jsx(Badge, { variant: "secondary", children: item }, item))) })] }), _jsx("div", { className: "pt-2", children: _jsx(Button, { className: "w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-2 text-md mt-2", size: "lg", onClick: () => navigate('/startinterview'), children: "Start Interview" }) })] })] }) }) }) }, format.title))) })] })] }), _jsx(motion.div, { variants: itemVariants, children: _jsxs(Card, { className: "bg-card border-border backdrop-blur-sm", children: [_jsx(CardHeader, { children: _jsxs("div", { className: "flex items-center gap-3", children: [_jsx("div", { className: "p-2 bg-primary rounded-lg", children: _jsx(TrendingUp, { className: "w-5 h-5 text-primary-foreground" }) }), _jsx(CardTitle, { className: "text-2xl text-foreground", children: "Your Performance" })] }) }), _jsx(CardContent, { className: "space-y-4", children: performanceData.map((item, index) => (_jsxs(motion.div, { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, transition: { delay: index * 0.1 }, className: "flex items-center justify-between p-4 bg-accent/30 rounded-lg border border-border", children: [_jsxs("div", { className: "flex items-center gap-4", children: [_jsx("div", { className: "p-2 bg-muted rounded-lg", children: _jsx(Code, { className: "w-5 h-5 text-foreground" }) }), _jsxs("div", { children: [_jsx("h4", { className: "font-semibold text-foreground", children: item.topic }), _jsxs("div", { className: "flex items-center gap-2 text-sm text-muted-foreground", children: [_jsx("span", { children: item.difficulty }), _jsx("span", { children: "\u2022" }), _jsxs("div", { className: "flex items-center gap-1", children: [_jsx(Calendar, { className: "w-3 h-3" }), _jsx("span", { children: item.timeAgo })] })] })] })] }), _jsx(Badge, { className: `${item.scoreColor} bg-transparent border-current`, children: item.score })] }, index))) })] }) })] }) }) }));
}
