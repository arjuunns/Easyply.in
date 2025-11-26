import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Plus, Trash2, ChevronDown, Download, Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, } from "@/components/ui/dropdown-menu";
import { useTheme } from "@/components/theme-provider";
import { useResumeStore } from "@/store/useResumeStore";
import { FONT_OPTIONS, TEMPLATES, } from "./templates";
const API_URL = "https://corsproxy.io/?https://jobs.workable.com/api/v1/jobs?query=react";
export function ResumeBuilder() {
    var _a, _b;
    const { data: resumeData, updateField, updatePersonalInfo, fontFamily, selectedTemplate, setFontFamily, setSelectedTemplate, } = useResumeStore();
    const [newSkill, setNewSkill] = useState("");
    const { theme, setTheme } = useTheme();
    const themeOptions = [
        { label: "Dark", value: "dark" },
        { label: "Red", value: "red" },
        { label: "Green", value: "green" },
        { label: "Blue", value: "blue" },
        { label: "Lemon", value: "lemon" },
        { label: "Magenta", value: "magenta" },
    ];
    const previewRef = useRef(null);
    const navigate = useNavigate();
    const addExperience = () => {
        const newExp = {
            id: Date.now().toString(),
            company: "",
            position: "",
            duration: "",
            description: "",
        };
        updateField("experience", [...resumeData.experience, newExp]);
    };
    const updateExperience = (id, field, value) => {
        updateField("experience", resumeData.experience.map((exp) => exp.id === id ? Object.assign(Object.assign({}, exp), { [field]: value }) : exp));
    };
    const removeExperience = (id) => {
        updateField("experience", resumeData.experience.filter((exp) => exp.id !== id));
    };
    const addEducation = () => {
        const newEdu = {
            id: Date.now().toString(),
            institution: "",
            degree: "",
            year: "",
            gpa: "",
        };
        updateField("education", [...resumeData.education, newEdu]);
    };
    const updateEducation = (id, field, value) => {
        updateField("education", resumeData.education.map((edu) => edu.id === id ? Object.assign(Object.assign({}, edu), { [field]: value }) : edu));
    };
    const removeEducation = (id) => {
        updateField("education", resumeData.education.filter((edu) => edu.id !== id));
    };
    const addSkill = () => {
        if (newSkill.trim() && !resumeData.skills.includes(newSkill.trim())) {
            updateField("skills", [...resumeData.skills, newSkill.trim()]);
            setNewSkill("");
        }
    };
    const removeSkill = (skill) => {
        updateField("skills", resumeData.skills.filter((s) => s !== skill));
    };
    const handlePrint = () => {
        const printWindow = window.open("/resume/print", "_blank", "width=900,height=1200");
        if (printWindow)
            printWindow.focus();
    };
    const templateObj = TEMPLATES.find((t) => t.label === selectedTemplate) || TEMPLATES[0];
    return (_jsxs("div", { className: "min-h-screen bg-background p-4 overflow-x-hidden", children: [_jsx("div", { className: "mx-auto max-w-7xl" }), _jsxs("div", { className: "mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-8", children: [_jsxs("div", { children: [_jsx("h1", { className: "text-3xl font-bold", children: "Build Resume" }), _jsx("p", { className: "text-muted-foreground", children: "Create your professional resume with real-time preview" })] }), _jsxs("div", { className: "flex items-center gap-4", children: [_jsxs(Button, { variant: "default", shine: true, onClick: handlePrint, className: "flex items-center gap-2", children: [_jsx(Download, { className: "w-5 h-5" }), "Print Resume"] }), _jsxs(DropdownMenu, { children: [_jsx(DropdownMenuTrigger, { asChild: true, children: _jsxs(Button, { variant: "outline", className: "flex items-center gap-2 w-44 h-10 justify-between pr-6", children: [_jsxs("span", { className: "truncate", children: ["Font:", " ", ((_a = FONT_OPTIONS.find((f) => f.value === fontFamily)) === null || _a === void 0 ? void 0 : _a.label) ||
                                                            "Font"] }), _jsx(ChevronDown, { className: "w-4 h-4 flex-shrink-0" })] }) }), _jsx(DropdownMenuContent, { children: FONT_OPTIONS.map((font) => (_jsx(DropdownMenuItem, { onClick: () => setFontFamily(font.value), className: fontFamily === font.value ? "font-bold" : "", children: font.label }, font.value))) })] }), _jsxs(DropdownMenu, { children: [_jsx(DropdownMenuTrigger, { asChild: true, children: _jsxs(Button, { variant: "default", className: "w-32 h-10 flex items-center justify-between theme-btn", children: ["Theme:", " ", ((_b = themeOptions.find((t) => t.value === theme)) === null || _b === void 0 ? void 0 : _b.label) || "Theme", _jsx(ChevronDown, { className: "w-4 h-4 flex-shrink-0" })] }) }), _jsx(DropdownMenuContent, { children: themeOptions.map((t) => (_jsx(DropdownMenuItem, { onClick: () => setTheme(t.value), className: theme === t.value ? "font-bold" : "", children: t.label }, t.value))) })] }), _jsxs(DropdownMenu, { children: [_jsx(DropdownMenuTrigger, { asChild: true, children: _jsxs(Button, { variant: "outline", className: "w-44 h-10 flex items-center justify-between", children: ["Template: ", selectedTemplate, _jsx(ChevronDown, { className: "w-4 h-4 flex-shrink-0" })] }) }), _jsx(DropdownMenuContent, { children: TEMPLATES.map((tpl) => (_jsx(DropdownMenuItem, { onClick: () => setSelectedTemplate(tpl.label), className: selectedTemplate === tpl.label ? "font-bold" : "", children: tpl.label }, tpl.label))) })] })] })] }), _jsxs("div", { className: "flex flex-col-reverse lg:flex-row gap-6 overflow-x-hidden", children: [_jsx("div", { className: "w-full lg:w-1/2 min-h-[500px] flex flex-col items-center min-w-0", children: _jsxs(Tabs, { defaultValue: "personal", className: "w-full max-w-[650px]", children: [_jsxs(TabsList, { children: [_jsx(TabsTrigger, { value: "personal", children: "Personal Info" }), _jsx(TabsTrigger, { value: "work", children: "Work Experience" }), _jsx(TabsTrigger, { value: "education", children: "Education" }), _jsx(TabsTrigger, { value: "skills", children: "Skills" })] }), _jsx(TabsContent, { value: "personal", children: _jsxs(Card, { className: "mt-4", children: [_jsx(CardHeader, { children: _jsx(CardTitle, { children: "Personal Information" }) }), _jsxs(CardContent, { className: "space-y-4", children: [_jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [_jsxs("div", { children: [_jsx(Label, { htmlFor: "fullName", children: "Full Name" }), _jsx(Input, { id: "fullName", value: resumeData.personalInfo.fullName, onChange: (e) => updatePersonalInfo("fullName", e.target.value) })] }), _jsxs("div", { children: [_jsx(Label, { htmlFor: "email", children: "Email" }), _jsx(Input, { id: "email", type: "email", value: resumeData.personalInfo.email, onChange: (e) => updatePersonalInfo("email", e.target.value) })] }), _jsxs("div", { children: [_jsx(Label, { htmlFor: "phone", children: "Phone" }), _jsx(Input, { id: "phone", value: resumeData.personalInfo.phone, onChange: (e) => updatePersonalInfo("phone", e.target.value) })] }), _jsxs("div", { children: [_jsx(Label, { htmlFor: "location", children: "Location" }), _jsx(Input, { id: "location", value: resumeData.personalInfo.location, onChange: (e) => updatePersonalInfo("location", e.target.value) })] }), _jsxs("div", { className: "md:col-span-2", children: [_jsx(Label, { htmlFor: "website", children: "Website" }), _jsx(Input, { id: "website", value: resumeData.personalInfo.website, onChange: (e) => updatePersonalInfo("website", e.target.value) })] })] }), _jsxs("div", { children: [_jsx(Label, { htmlFor: "summary", children: "Professional Summary" }), _jsx(Textarea, { id: "summary", rows: 3, value: resumeData.personalInfo.summary, onChange: (e) => updatePersonalInfo("summary", e.target.value) })] })] })] }) }), _jsx(TabsContent, { value: "work", children: _jsxs(Card, { className: "mt-4", children: [_jsxs(CardHeader, { className: "flex flex-row items-center justify-between", children: [_jsx(CardTitle, { children: "Work Experience" }), _jsxs(Button, { onClick: addExperience, size: "sm", children: [_jsx(Plus, { className: "w-4 h-4 mr-2" }), "Add Experience"] })] }), _jsx(CardContent, { className: "space-y-4", children: resumeData.experience.map((exp) => (_jsxs("div", { className: "border rounded-lg p-4 space-y-3", children: [_jsxs("div", { className: "flex justify-between items-start", children: [_jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-3 flex-1", children: [_jsxs("div", { children: [_jsx(Label, { children: "Company" }), _jsx(Input, { value: exp.company, onChange: (e) => updateExperience(exp.id, "company", e.target.value) })] }), _jsxs("div", { children: [_jsx(Label, { children: "Position" }), _jsx(Input, { value: exp.position, onChange: (e) => updateExperience(exp.id, "position", e.target.value) })] })] }), _jsx(Button, { variant: "ghost", size: "sm", onClick: () => removeExperience(exp.id), className: "ml-2", children: _jsx(Trash2, { className: "w-4 h-4" }) })] }), _jsxs("div", { children: [_jsx(Label, { children: "Duration" }), _jsx(Input, { value: exp.duration, onChange: (e) => updateExperience(exp.id, "duration", e.target.value), placeholder: "e.g., 2022 - Present" })] }), _jsxs("div", { children: [_jsx(Label, { children: "Description" }), _jsx(Textarea, { rows: 2, value: exp.description, onChange: (e) => updateExperience(exp.id, "description", e.target.value) })] })] }, exp.id))) })] }) }), _jsx(TabsContent, { value: "education", children: _jsxs(Card, { className: "mt-4", children: [_jsxs(CardHeader, { className: "flex flex-row items-center justify-between", children: [_jsx(CardTitle, { children: "Education" }), _jsxs(Button, { onClick: addEducation, size: "sm", children: [_jsx(Plus, { className: "w-4 h-4 mr-2" }), "Add Education"] })] }), _jsx(CardContent, { className: "space-y-4", children: resumeData.education.map((edu) => (_jsx("div", { className: "border rounded-lg p-4 space-y-3", children: _jsxs("div", { className: "flex justify-between items-start", children: [_jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-3 flex-1", children: [_jsxs("div", { children: [_jsx(Label, { children: "Institution" }), _jsx(Input, { value: edu.institution, onChange: (e) => updateEducation(edu.id, "institution", e.target.value) })] }), _jsxs("div", { children: [_jsx(Label, { children: "Degree" }), _jsx(Input, { value: edu.degree, onChange: (e) => updateEducation(edu.id, "degree", e.target.value) })] }), _jsxs("div", { children: [_jsx(Label, { children: "Year" }), _jsx(Input, { value: edu.year, onChange: (e) => updateEducation(edu.id, "year", e.target.value) })] }), _jsxs("div", { children: [_jsx(Label, { children: "GPA (Optional)" }), _jsx(Input, { value: edu.gpa, onChange: (e) => updateEducation(edu.id, "gpa", e.target.value) })] })] }), _jsx(Button, { variant: "ghost", size: "sm", onClick: () => removeEducation(edu.id), className: "ml-2", children: _jsx(Trash2, { className: "w-4 h-4" }) })] }) }, edu.id))) })] }) }), _jsx(TabsContent, { value: "skills", children: _jsxs(Card, { className: "mt-4", children: [_jsx(CardHeader, { children: _jsx(CardTitle, { children: "Skills" }) }), _jsxs(CardContent, { className: "space-y-4", children: [_jsxs("div", { className: "flex gap-2", children: [_jsx(Input, { value: newSkill, onChange: (e) => setNewSkill(e.target.value), placeholder: "Add a skill", onKeyPress: (e) => e.key === "Enter" && addSkill() }), _jsx(Button, { onClick: addSkill, children: "Add" })] }), _jsx("div", { className: "flex flex-wrap gap-2", children: resumeData.skills.map((skill, idx) => (_jsxs(Badge, { variant: "secondary", className: "cursor-pointer", children: [skill, _jsx("button", { onClick: () => removeSkill(skill), className: "ml-2 hover:text-destructive", children: "\u00D7" })] }, idx))) })] })] }) })] }) }), _jsxs("div", { className: "w-full lg:w-1/2 lg:sticky lg:top-4 flex justify-center items-center relative min-h-[297mm] min-w-0", children: [_jsx("button", { onClick: () => navigate("/preview"), className: "absolute top-2 right-2 z-10 bg-white rounded-full p-2 shadow hover:bg-gray-100 transition", title: "Preview Resume", type: "button", children: _jsx(Eye, { className: "w-6 h-6 text-gray-700" }) }), _jsx("div", { ref: previewRef, className: "bg-card text-card-foreground rounded-xl shadow-sm pdf-friendly w-full max-w-full box-border overflow-x-auto p-2 lg:max-w-[210mm] lg:p-[32px_40px] lg:h-[297mm]", style: {
                                    fontFamily: fontFamily,
                                    background: "#fff",
                                    color: "#111",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "flex-start",
                                    alignItems: "stretch",
                                }, children: templateObj && templateObj.component({ resumeData, fontFamily }) })] })] })] }));
}
