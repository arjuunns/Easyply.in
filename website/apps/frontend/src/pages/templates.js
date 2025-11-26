import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const FONT_OPTIONS = [
    {
        label: "Garamond",
        value: "'Garamond', serif",
    },
    {
        label: "Calibri",
        value: "'Calibri', sans-serif",
    },
    {
        label: "Cambria",
        value: "'Cambria', serif",
    },
    {
        label: "Times New Roman",
        value: "'Times New Roman', Times, serif",
    },
    {
        label: "Georgia",
        value: "'Georgia', serif",
    },
    {
        label: "Arial",
        value: "'Arial', sans-serif",
    },
    {
        label: "Helvetica Neue",
        value: "'Helvetica Neue', Helvetica, Arial, sans-serif",
    },
    {
        label: "Liberation Serif",
        value: "'Liberation Serif', serif",
    },
    {
        label: "Liberation Sans",
        value: "'Liberation Sans', sans-serif",
    },
    {
        label: "Segoe UI",
        value: "'Segoe UI', sans-serif",
    },
    {
        label: "Verdana",
        value: "'Verdana', sans-serif",
    },
    {
        label: "Tahoma",
        value: "'Tahoma', sans-serif",
    },
    {
        label: "Monospace",
        value: "'monospace'",
    },
];
export function ModernTemplate({ resumeData, fontFamily }) {
    return (_jsxs("div", { style: {
            fontFamily,
            background: "#fff",
            color: "#222",
            padding: 0,
        }, className: "bg-white text-gray-900 font-serif px-10 py-12 max-w-4xl mx-auto", children: [_jsx("h1", { className: "text-3xl font-bold text-center mb-1", children: resumeData.personalInfo.fullName }), _jsxs("div", { className: "flex flex-wrap justify-center text-sm text-gray-700 gap-4 mb-6", children: [resumeData.personalInfo.location && (_jsxs("div", { children: ["\uD83D\uDCCD ", resumeData.personalInfo.location] })), resumeData.personalInfo.email && (_jsxs("div", { children: ["\u2709\uFE0F", " ", _jsx("a", { href: `mailto:${resumeData.personalInfo.email}`, className: "text-blue-700 underline", children: resumeData.personalInfo.email })] })), resumeData.personalInfo.phone && (_jsxs("div", { children: ["\uD83D\uDCDE ", resumeData.personalInfo.phone] })), resumeData.personalInfo.website && (_jsxs("div", { children: ["\uD83D\uDD17", " ", _jsx("a", { href: resumeData.personalInfo.website.startsWith("http")
                                    ? resumeData.personalInfo.website
                                    : `https://${resumeData.personalInfo.website}`, className: "text-blue-700 underline", children: resumeData.personalInfo.website.replace(/^https?:\/\//, "") })] }))] }), resumeData.personalInfo.summary && (_jsxs("section", { className: "mb-6", children: [_jsx("h2", { className: "text-lg font-semibold border-b border-gray-400 pb-1 mb-2", children: "About Me" }), _jsx("p", { className: "text-sm mb-2", children: resumeData.personalInfo.summary })] })), resumeData.experience && resumeData.experience.length > 0 && (_jsxs("section", { className: "mb-6", children: [_jsx("h2", { className: "text-lg font-semibold border-b border-gray-400 pb-1 mb-2", children: "Experience" }), resumeData.experience.map((exp) => (_jsxs("div", { className: "mb-4", children: [_jsxs("div", { className: "flex justify-between font-semibold text-sm", children: [_jsx("div", { children: exp.position }), _jsx("div", { className: "italic", children: exp.duration })] }), _jsx("div", { className: "text-sm", children: exp.company }), exp.description && (_jsx("ul", { className: "list-disc list-inside text-sm pl-2 mt-1 space-y-1", children: exp.description
                                    .split("\n")
                                    .map((desc, idx) => (_jsx("li", { children: desc }, idx))) }))] }, exp.id)))] })), resumeData.education && resumeData.education.length > 0 && (_jsxs("section", { className: "mb-6", children: [_jsx("h2", { className: "text-lg font-semibold border-b border-gray-400 pb-1 mb-2", children: "Education" }), resumeData.education.map((edu) => (_jsxs("div", { children: [_jsxs("div", { className: "flex justify-between text-sm font-semibold", children: [_jsx("div", { children: edu.institution }), _jsx("div", { className: "italic", children: edu.year })] }), _jsx("div", { className: "italic text-sm", children: edu.degree }), _jsx("ul", { className: "list-disc list-inside text-sm pl-2 mt-1 space-y-1", children: edu.gpa && _jsxs("li", { children: ["GPA: ", edu.gpa] }) })] }, edu.id)))] })), resumeData.skills && resumeData.skills.length > 0 && (_jsxs("section", { className: "mb-6", children: [_jsx("h2", { className: "text-lg font-semibold border-b border-gray-400 pb-1 mb-2", children: "Skills" }), _jsx("div", { className: "flex flex-wrap gap-2", children: resumeData.skills.map((skill, idx) => (_jsx("span", { className: "px-2 py-1 border rounded text-xs bg-blue-100 text-blue-900 border-blue-300 font-semibold", children: skill }, idx))) })] }))] }));
}
export function MinimalistTemplate({ resumeData }) {
    return (_jsxs("div", { style: { background: "#fff", color: "#222", padding: 0 }, children: [_jsxs("div", { className: "mb-6 pt-8 pb-2 px-8", children: [_jsx("h1", { className: "text-3xl font-bold mb-1 text-gray-800 text-left tracking-tight", children: resumeData.personalInfo.fullName }), _jsxs("div", { className: "flex flex-wrap gap-4 text-sm text-gray-600 mb-2", children: [resumeData.personalInfo.email && (_jsx("span", { children: resumeData.personalInfo.email })), resumeData.personalInfo.phone && (_jsx("span", { children: resumeData.personalInfo.phone })), resumeData.personalInfo.location && (_jsx("span", { children: resumeData.personalInfo.location })), resumeData.personalInfo.website && (_jsx("span", { children: resumeData.personalInfo.website }))] })] }), _jsxs("div", { className: "px-8 pb-8", children: [resumeData.personalInfo.summary && (_jsxs("div", { className: "mb-6 border-l-4 border-gray-200 pl-4", children: [_jsx("h2", { className: "text-base font-semibold mb-2 text-gray-700 uppercase tracking-wider", children: "Professional Summary" }), _jsx("p", { className: "text-sm leading-relaxed", children: resumeData.personalInfo.summary })] })), resumeData.experience.length > 0 && (_jsxs("div", { className: "mb-6 border-t border-gray-200 pt-4", children: [_jsx("h2", { className: "text-base font-semibold mb-3 text-gray-700 uppercase tracking-wider", children: "Work Experience" }), _jsx("div", { className: "space-y-4", children: resumeData.experience.map((exp) => (_jsxs("div", { children: [_jsxs("div", { className: "flex justify-between items-start mb-1", children: [_jsxs("div", { children: [_jsx("h3", { className: "font-medium text-gray-800", children: exp.position }), _jsx("p", { className: "text-sm text-gray-600", children: exp.company })] }), _jsx("span", { className: "text-sm text-gray-400 font-bold", children: exp.duration })] }), exp.description && (_jsx("p", { className: "text-sm leading-relaxed mt-2", children: exp.description }))] }, exp.id))) })] })), resumeData.education.length > 0 && (_jsxs("div", { className: "mb-6 border-t border-gray-200 pt-4", children: [_jsx("h2", { className: "text-base font-semibold mb-3 text-gray-700 uppercase tracking-wider", children: "Education" }), _jsx("div", { className: "space-y-3", children: resumeData.education.map((edu) => (_jsx("div", { children: _jsxs("div", { className: "flex justify-between items-start", children: [_jsxs("div", { children: [_jsx("h3", { className: "font-medium text-gray-800", children: edu.degree }), _jsx("p", { className: "text-sm text-gray-600", children: edu.institution })] }), _jsxs("div", { className: "text-right text-sm text-gray-400 font-bold", children: [_jsx("div", { children: edu.year }), edu.gpa && _jsxs("div", { children: ["GPA: ", edu.gpa] })] })] }) }, edu.id))) })] })), resumeData.skills.length > 0 && (_jsxs("div", { children: [_jsx("h2", { className: "text-base font-semibold mb-3 text-gray-700 uppercase tracking-wider", children: "Skills" }), _jsx("div", { className: "flex flex-wrap gap-2", children: resumeData.skills.map((skill) => (_jsx("span", { className: "px-2 py-1 border rounded text-xs bg-gray-100 text-gray-800 border-gray-300 font-normal", children: skill }, skill))) })] }))] })] }));
}
export function ElegantTemplate({ resumeData }) {
    return (_jsxs("div", { style: {
            fontFamily: `'Playfair Display', serif`,
            background: "#fffbe6",
            color: "#7c5e10",
            padding: 0,
        }, children: [_jsxs("div", { className: "mb-6 pt-8 pb-2 px-8", children: [_jsx("h1", { className: "text-4xl font-extrabold mb-1 text-yellow-800 text-center tracking-tight font-serif italic", children: resumeData.personalInfo.fullName }), _jsxs("div", { className: "flex flex-wrap justify-center gap-4 text-base text-yellow-900 font-serif italic mb-2", children: [resumeData.personalInfo.email && (_jsx("span", { children: resumeData.personalInfo.email })), resumeData.personalInfo.phone && (_jsx("span", { children: resumeData.personalInfo.phone })), resumeData.personalInfo.location && (_jsx("span", { children: resumeData.personalInfo.location })), resumeData.personalInfo.website && (_jsx("span", { children: resumeData.personalInfo.website }))] })] }), _jsxs("div", { className: "px-8 pb-8", children: [resumeData.personalInfo.summary && (_jsxs("div", { className: "mb-6 border-l-4 border-yellow-300 pl-4", children: [_jsx("h2", { className: "text-lg font-semibold mb-2 text-yellow-700 uppercase tracking-wider font-serif italic", children: "Professional Summary" }), _jsx("p", { className: "text-base leading-relaxed font-serif italic", children: resumeData.personalInfo.summary })] })), resumeData.experience.length > 0 && (_jsxs("div", { className: "mb-6 border-t border-yellow-200 pt-4", children: [_jsx("h2", { className: "text-lg font-semibold mb-3 text-yellow-700 uppercase tracking-wider font-serif italic", children: "Work Experience" }), _jsx("div", { className: "space-y-4", children: resumeData.experience.map((exp) => (_jsxs("div", { children: [_jsxs("div", { className: "flex justify-between items-start mb-1", children: [_jsxs("div", { children: [_jsx("h3", { className: "font-semibold text-yellow-800 font-serif italic", children: exp.position }), _jsx("p", { className: "text-sm text-yellow-900 font-serif italic", children: exp.company })] }), _jsx("span", { className: "text-sm text-yellow-700 font-serif italic font-bold", children: exp.duration })] }), exp.description && (_jsx("p", { className: "text-sm leading-relaxed mt-2 font-serif italic", children: exp.description }))] }, exp.id))) })] })), resumeData.education.length > 0 && (_jsxs("div", { className: "mb-6 border-t border-yellow-200 pt-4", children: [_jsx("h2", { className: "text-lg font-semibold mb-3 text-yellow-700 uppercase tracking-wider font-serif italic", children: "Education" }), _jsx("div", { className: "space-y-3", children: resumeData.education.map((edu) => (_jsx("div", { children: _jsxs("div", { className: "flex justify-between items-start", children: [_jsxs("div", { children: [_jsx("h3", { className: "font-semibold text-yellow-800 font-serif italic", children: edu.degree }), _jsx("p", { className: "text-sm text-yellow-900 font-serif italic", children: edu.institution })] }), _jsxs("div", { className: "text-right text-sm text-yellow-700 font-serif italic font-bold", children: [_jsx("div", { children: edu.year }), edu.gpa && _jsxs("div", { children: ["GPA: ", edu.gpa] })] })] }) }, edu.id))) })] })), resumeData.skills.length > 0 && (_jsxs("div", { children: [_jsx("h2", { className: "text-lg font-semibold mb-3 text-yellow-700 uppercase tracking-wider font-serif italic", children: "Skills" }), _jsx("div", { className: "flex flex-wrap gap-2", children: resumeData.skills.map((skill) => (_jsx("span", { className: "px-2 py-1 border rounded text-xs bg-yellow-100 text-yellow-900 border-yellow-300 font-serif italic", children: skill }, skill))) })] }))] })] }));
}
export function CreativeTemplate({ resumeData }) {
    return (_jsxs("div", { style: {
            background: "#fdf2f8",
            color: "#a21caf",
            padding: 0,
        }, children: [_jsxs("div", { className: "mb-6 pt-8 pb-2 px-8 bg-gradient-to-r from-pink-200 via-purple-200 to-pink-100 rounded-t-xl shadow-xl", children: [_jsx("h1", { className: "text-4xl font-extrabold mb-1 text-pink-600 text-left tracking-tight", children: resumeData.personalInfo.fullName }), _jsxs("div", { className: "flex flex-wrap gap-4 text-base text-purple-700 font-bold mb-2", children: [resumeData.personalInfo.email && (_jsx("span", { children: resumeData.personalInfo.email })), resumeData.personalInfo.phone && (_jsx("span", { children: resumeData.personalInfo.phone })), resumeData.personalInfo.location && (_jsx("span", { children: resumeData.personalInfo.location })), resumeData.personalInfo.website && (_jsx("span", { children: resumeData.personalInfo.website }))] })] }), _jsxs("div", { className: "px-8 pb-8", children: [resumeData.personalInfo.summary && (_jsxs("div", { className: "mb-6 border-l-4 border-pink-400 pl-4 bg-pink-50 rounded", children: [_jsx("h2", { className: "text-lg font-extrabold mb-2 text-pink-600 uppercase tracking-wider", children: "Professional Summary" }), _jsx("p", { className: "text-base leading-relaxed", children: resumeData.personalInfo.summary })] })), resumeData.experience.length > 0 && (_jsxs("div", { className: "mb-6 border-t-4 border-purple-200 pt-4", children: [_jsx("h2", { className: "text-lg font-extrabold mb-3 text-purple-700 uppercase tracking-wider", children: "Work Experience" }), _jsx("div", { className: "space-y-4", children: resumeData.experience.map((exp) => (_jsxs("div", { children: [_jsxs("div", { className: "flex justify-between items-start mb-1", children: [_jsxs("div", { children: [_jsx("h3", { className: "font-bold text-pink-700", children: exp.position }), _jsx("p", { className: "text-sm text-purple-700", children: exp.company })] }), _jsx("span", { className: "text-sm text-purple-700 font-bold", children: exp.duration })] }), exp.description && (_jsx("p", { className: "text-sm leading-relaxed mt-2 text-purple-900", children: exp.description }))] }, exp.id))) })] })), resumeData.education.length > 0 && (_jsxs("div", { className: "mb-6 border-t-4 border-pink-200 pt-4", children: [_jsx("h2", { className: "text-lg font-extrabold mb-3 text-pink-600 uppercase tracking-wider", children: "Education" }), _jsx("div", { className: "space-y-3", children: resumeData.education.map((edu) => (_jsx("div", { children: _jsxs("div", { className: "flex justify-between items-start", children: [_jsxs("div", { children: [_jsx("h3", { className: "font-bold text-pink-700", children: edu.degree }), _jsx("p", { className: "text-sm text-purple-700", children: edu.institution })] }), _jsxs("div", { className: "text-right text-sm text-purple-700 font-bold", children: [_jsx("div", { children: edu.year }), edu.gpa && _jsxs("div", { children: ["GPA: ", edu.gpa] })] })] }) }, edu.id))) })] })), resumeData.skills.length > 0 && (_jsxs("div", { children: [_jsx("h2", { className: "text-lg font-extrabold mb-3 text-pink-600 uppercase tracking-wider", children: "Skills" }), _jsx("div", { className: "flex flex-wrap gap-2", children: resumeData.skills.map((skill) => (_jsx("span", { className: "px-2 py-1 border rounded text-xs bg-purple-100 text-pink-700 border-pink-300 font-bold", children: skill }, skill))) })] }))] })] }));
}
export const TEMPLATES = [
    { label: "Modern", component: ModernTemplate },
    { label: "Minimalist", component: MinimalistTemplate },
    { label: "Elegant", component: ElegantTemplate },
    { label: "Creative", component: CreativeTemplate },
];
