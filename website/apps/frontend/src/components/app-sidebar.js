import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BriefcaseBusiness, Calendar, CheckCheck, LayoutDashboard, Newspaper, Settings, } from "lucide-react";
import { Link } from "react-router-dom";
import { UserButton } from '@clerk/clerk-react';
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar, } from "@/components/ui/sidebar";
// Menu items.
const items = [
    {
        title: "Resume",
        url: "/resume",
        icon: Newspaper,
    },
    {
        title: "Job and Internship",
        url: "/job-and-internship",
        icon: BriefcaseBusiness,
    },
    {
        title: "Interview",
        url: "/interview",
        icon: Calendar,
    },
    {
        title: "Dashboard",
        url: "/dashboard",
        icon: LayoutDashboard,
    },
    {
        title: "Settings",
        url: "/settings",
        icon: Settings,
    },
];
export function AppSidebar() {
    const { state } = useSidebar();
    const isCollapsed = state === "collapsed";
    return (_jsxs(Sidebar, { collapsible: "icon", children: [_jsx(SidebarContent, { children: _jsxs(SidebarGroup, { children: [!isCollapsed && (_jsx("span", { children: _jsxs(SidebarGroupLabel, { children: [_jsx(CheckCheck, { className: "mr-2 animated-gradient-text", style: { fontSize: "1.6rem", fontWeight: 700 } }), _jsx("span", { className: "animated-gradient-text", style: { fontSize: "1.35rem", fontWeight: 700 }, children: "Easyply" })] }) })), _jsx(SidebarGroupContent, { children: _jsx(SidebarMenu, { children: items.map((item) => (_jsx(SidebarMenuItem, { children: _jsx(SidebarMenuButton, { asChild: true, size: "lg", children: _jsxs(Link, { to: item.url, children: [_jsx(item.icon, {}), !isCollapsed && _jsx("span", { children: item.title })] }) }) }, item.title))) }) })] }) }), _jsx(SidebarFooter, { children: _jsx(UserButton, {}) })] }));
}
