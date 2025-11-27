import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, } from "recharts";
import { TrendingUp, TrendingDown, Users, FileText, Briefcase, CheckCircle, Clock, Target, } from "lucide-react";
// Mock data for charts
const applicationTrendData = [
    { month: "Jan", applications: 12, interviews: 5, offers: 1 },
    { month: "Feb", applications: 19, interviews: 8, offers: 2 },
    { month: "Mar", applications: 15, interviews: 6, offers: 1 },
    { month: "Apr", applications: 25, interviews: 11, offers: 3 },
    { month: "May", applications: 22, interviews: 9, offers: 2 },
    { month: "Jun", applications: 30, interviews: 14, offers: 4 },
];
const interviewPerformanceData = [
    { week: "Week 1", score: 72 },
    { week: "Week 2", score: 78 },
    { week: "Week 3", score: 85 },
    { week: "Week 4", score: 82 },
    { week: "Week 5", score: 88 },
    { week: "Week 6", score: 91 },
];
const applicationStatusData = [
    { name: "Applied", value: 45, color: "#60a5fa" },
    { name: "In Review", value: 18, color: "#38bdf8" },
    { name: "Interview", value: 12, color: "#818cf8" },
    { name: "Offer", value: 8, color: "#a5b4fc" },
    { name: "Rejected", value: 17, color: "#f87171" },
];
const skillsData = [
    { skill: "React", proficiency: 90 },
    { skill: "TypeScript", proficiency: 85 },
    { skill: "Node.js", proficiency: 80 },
    { skill: "Python", proficiency: 75 },
    { skill: "SQL", proficiency: 70 },
    { skill: "Docker", proficiency: 65 },
];
const recentActivities = [
    {
        id: 1,
        type: "interview",
        company: "TechCorp Inc.",
        position: "Senior Frontend Developer",
        date: "2 hours ago",
        status: "completed",
    },
    {
        id: 2,
        type: "application",
        company: "StartupXYZ",
        position: "Full Stack Engineer",
        date: "5 hours ago",
        status: "submitted",
    },
    {
        id: 3,
        type: "offer",
        company: "MegaTech Solutions",
        position: "React Developer",
        date: "1 day ago",
        status: "received",
    },
    {
        id: 4,
        type: "interview",
        company: "InnovateLabs",
        position: "Software Engineer",
        date: "2 days ago",
        status: "scheduled",
    },
    {
        id: 5,
        type: "application",
        company: "CloudFirst",
        position: "DevOps Engineer",
        date: "3 days ago",
        status: "submitted",
    },
];
export default function Dashboard() {
    const stats = [
        {
            title: "Total Applications",
            value: "123",
            change: "+12%",
            trend: "up",
            icon: FileText,
            color: "text-blue-500",
        },
        {
            title: "Interviews Scheduled",
            value: "18",
            change: "+23%",
            trend: "up",
            icon: Users,
            color: "text-purple-500",
        },
        {
            title: "Active Opportunities",
            value: "45",
            change: "-5%",
            trend: "down",
            icon: Briefcase,
            color: "text-cyan-500",
        },
        {
            title: "Success Rate",
            value: "68%",
            change: "+8%",
            trend: "up",
            icon: Target,
            color: "text-green-500",
        },
    ];
    return (_jsxs("div", { className: "p-6 space-y-6 bg-background min-h-screen", children: [_jsxs("div", { className: "space-y-2", children: [_jsx("h1", { className: "text-3xl font-bold text-foreground", children: "Dashboard" }), _jsx("p", { className: "text-muted-foreground", children: "Track your job search progress and interview performance" })] }), _jsx("div", { className: "grid gap-4 md:grid-cols-2 lg:grid-cols-4", children: stats.map((stat, index) => {
                    const Icon = stat.icon;
                    const TrendIcon = stat.trend === "up" ? TrendingUp : TrendingDown;
                    return (_jsx(Card, { children: _jsx(CardContent, { className: "pt-6", children: _jsxs("div", { className: "flex items-center justify-between space-x-2", children: [_jsxs("div", { className: "space-y-2 flex-1", children: [_jsx("p", { className: "text-sm text-muted-foreground", children: stat.title }), _jsx("p", { className: "text-3xl font-bold", children: stat.value }), _jsxs("div", { className: "flex items-center space-x-1", children: [_jsx(TrendIcon, { className: `h-4 w-4 ${stat.trend === "up" ? "text-green-500" : "text-red-500"}` }), _jsx("span", { className: `text-sm font-medium ${stat.trend === "up" ? "text-green-500" : "text-red-500"}`, children: stat.change }), _jsx("span", { className: "text-xs text-muted-foreground", children: "vs last month" })] })] }), _jsx("div", { className: `p-3 rounded-full bg-primary/10 ${stat.color}`, children: _jsx(Icon, { className: "h-6 w-6" }) })] }) }) }, index));
                }) }), _jsxs("div", { className: "grid gap-4 md:grid-cols-2", children: [_jsxs(Card, { children: [_jsxs(CardHeader, { children: [_jsx(CardTitle, { children: "Application Trends" }), _jsx(CardDescription, { children: "Applications, interviews, and offers over the last 6 months" })] }), _jsx(CardContent, { children: _jsx(ResponsiveContainer, { width: "100%", height: 300, children: _jsxs(AreaChart, { data: applicationTrendData, children: [_jsxs("defs", { children: [_jsxs("linearGradient", { id: "colorApplications", x1: "0", y1: "0", x2: "0", y2: "1", children: [_jsx("stop", { offset: "5%", stopColor: "#60a5fa", stopOpacity: 0.8 }), _jsx("stop", { offset: "95%", stopColor: "#60a5fa", stopOpacity: 0.1 })] }), _jsxs("linearGradient", { id: "colorInterviews", x1: "0", y1: "0", x2: "0", y2: "1", children: [_jsx("stop", { offset: "5%", stopColor: "#818cf8", stopOpacity: 0.8 }), _jsx("stop", { offset: "95%", stopColor: "#818cf8", stopOpacity: 0.1 })] }), _jsxs("linearGradient", { id: "colorOffers", x1: "0", y1: "0", x2: "0", y2: "1", children: [_jsx("stop", { offset: "5%", stopColor: "#34d399", stopOpacity: 0.8 }), _jsx("stop", { offset: "95%", stopColor: "#34d399", stopOpacity: 0.1 })] })] }), _jsx(CartesianGrid, { strokeDasharray: "3 3", opacity: 0.3 }), _jsx(XAxis, { dataKey: "month" }), _jsx(YAxis, {}), _jsx(Tooltip, {}), _jsx(Legend, {}), _jsx(Area, { type: "monotone", dataKey: "applications", stroke: "#60a5fa", fillOpacity: 1, fill: "url(#colorApplications)" }), _jsx(Area, { type: "monotone", dataKey: "interviews", stroke: "#818cf8", fillOpacity: 1, fill: "url(#colorInterviews)" }), _jsx(Area, { type: "monotone", dataKey: "offers", stroke: "#34d399", fillOpacity: 1, fill: "url(#colorOffers)" })] }) }) })] }), _jsxs(Card, { children: [_jsxs(CardHeader, { children: [_jsx(CardTitle, { children: "Interview Performance Score" }), _jsx(CardDescription, { children: "Your average interview performance over the last 6 weeks" })] }), _jsx(CardContent, { children: _jsx(ResponsiveContainer, { width: "100%", height: 300, children: _jsxs(LineChart, { data: interviewPerformanceData, children: [_jsx(CartesianGrid, { strokeDasharray: "3 3", opacity: 0.3 }), _jsx(XAxis, { dataKey: "week" }), _jsx(YAxis, { domain: [0, 100] }), _jsx(Tooltip, {}), _jsx(Legend, {}), _jsx(Line, { type: "monotone", dataKey: "score", stroke: "#818cf8", strokeWidth: 3, dot: { fill: "#818cf8", r: 6 }, activeDot: { r: 8 } })] }) }) })] })] }), _jsxs("div", { className: "grid gap-4 md:grid-cols-2", children: [_jsxs(Card, { children: [_jsxs(CardHeader, { children: [_jsx(CardTitle, { children: "Application Status" }), _jsx(CardDescription, { children: "Current distribution of your job applications" })] }), _jsx(CardContent, { children: _jsx(ResponsiveContainer, { width: "100%", height: 300, children: _jsxs(PieChart, { children: [_jsx(Pie, { data: applicationStatusData, cx: "50%", cy: "50%", labelLine: false, label: ({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`, outerRadius: 100, fill: "#8884d8", dataKey: "value", children: applicationStatusData.map((entry, index) => (_jsx(Cell, { fill: entry.color }, `cell-${index}`))) }), _jsx(Tooltip, {})] }) }) })] }), _jsxs(Card, { children: [_jsxs(CardHeader, { children: [_jsx(CardTitle, { children: "Skills Proficiency" }), _jsx(CardDescription, { children: "Your technical skill levels based on interview assessments" })] }), _jsx(CardContent, { children: _jsx(ResponsiveContainer, { width: "100%", height: 300, children: _jsxs(BarChart, { data: skillsData, layout: "horizontal", children: [_jsx(CartesianGrid, { strokeDasharray: "3 3", opacity: 0.3 }), _jsx(XAxis, { type: "number", domain: [0, 100] }), _jsx(YAxis, { dataKey: "skill", type: "category", width: 80 }), _jsx(Tooltip, {}), _jsx(Bar, { dataKey: "proficiency", fill: "#60a5fa", radius: [0, 8, 8, 0] })] }) }) })] })] }), _jsxs(Card, { children: [_jsxs(CardHeader, { children: [_jsx(CardTitle, { children: "Recent Activity" }), _jsx(CardDescription, { children: "Your latest job search activities and updates" })] }), _jsx(CardContent, { children: _jsx("div", { className: "space-y-4", children: recentActivities.map((activity) => (_jsxs("div", { className: "flex items-center justify-between p-4 rounded-lg border border-border hover:bg-accent/50 transition-colors", children: [_jsxs("div", { className: "flex items-center space-x-4", children: [_jsx("div", { className: `p-2 rounded-full ${activity.type === "interview"
                                                    ? "bg-purple-500/10 text-purple-500"
                                                    : activity.type === "offer"
                                                        ? "bg-green-500/10 text-green-500"
                                                        : "bg-blue-500/10 text-blue-500"}`, children: activity.type === "interview" ? (_jsx(Users, { className: "h-5 w-5" })) : activity.type === "offer" ? (_jsx(CheckCircle, { className: "h-5 w-5" })) : (_jsx(FileText, { className: "h-5 w-5" })) }), _jsxs("div", { children: [_jsx("p", { className: "font-medium text-foreground", children: activity.company }), _jsx("p", { className: "text-sm text-muted-foreground", children: activity.position })] })] }), _jsxs("div", { className: "flex items-center space-x-3", children: [_jsx(Badge, { variant: activity.status === "completed" || activity.status === "received"
                                                    ? "default"
                                                    : "secondary", children: activity.status }), _jsxs("div", { className: "flex items-center text-sm text-muted-foreground", children: [_jsx(Clock, { className: "h-4 w-4 mr-1" }), activity.date] })] })] }, activity.id))) }) })] })] }));
}
