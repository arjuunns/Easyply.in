import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { ThemeProvider } from "@/components/theme-provider";
export default function Layout({ children }) {
    return (_jsx(SidebarProvider, { children: _jsx(ThemeProvider, { defaultTheme: "dark", storageKey: "vite-ui-theme", children: _jsxs("div", { className: "relative min-h-svh flex w-screen", children: [_jsx(AppSidebar, {}), _jsx(SidebarTrigger, { className: "pl-2 print:hidden" }), _jsxs("main", { className: "flex-1 relative min-h-svh flex flex-col items-center justify-center", children: [_jsx("div", { className: "flex gap-4 absolute top-4 right-4 z-10" }), children] })] }) }) }));
}
