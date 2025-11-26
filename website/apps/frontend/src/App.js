import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Layout from "./layout/layout";
import { ResumeBuilder } from "./pages/resume-builder";
import JobAndInternshipPage from "./pages/job-and-internship";
import Interview from "./pages/interview";
import Dashboard from "./pages/dashboard";
import Settings from "./pages/settings";
import PrintResumePage from "./pages/print-resume";
import ResumePreviewPage from "./pages/preview-resume";
import Landing from './pages/Landing';
import { BrowserRouter, Routes, Route, Navigate, Outlet, } from "react-router-dom";
import StartInterview from "./pages/startInterview";
import { AuthPage } from "./pages/auth";
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";
function ProtectedRoutes() {
    return (_jsxs(_Fragment, { children: [_jsx(SignedIn, { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/resume", element: _jsx(ResumeBuilder, {}) }), _jsx(Route, { path: "/resume/print", element: _jsx(PrintResumePage, {}) }), _jsx(Route, { path: "/job-and-internship", element: _jsx(JobAndInternshipPage, {}) }), _jsx(Route, { path: "/dashboard", element: _jsx(Dashboard, {}) }), _jsx(Route, { path: "/settings", element: _jsx(Settings, {}) }), _jsx(Route, { path: "/preview", element: _jsx(ResumePreviewPage, {}) }), _jsx(Route, { path: "/", element: _jsx(Navigate, { to: "/resume", replace: true }) })] }) }), _jsx(SignedOut, { children: _jsx(RedirectToSignIn, {}) })] }));
}
function App() {
    return (_jsx(BrowserRouter, { children: _jsxs(Routes, { children: [_jsxs(Route, { element: _jsx(Layout, { children: _jsx(Outlet, {}) }), children: [_jsx(Route, { path: "/sign-in", element: _jsx(AuthPage, {}) }), _jsx(Route, { path: "/sign-up", element: _jsx(AuthPage, {}) }), _jsx(Route, { path: "*", element: _jsx(ProtectedRoutes, {}) })] }), _jsx(Route, { path: "/interview", element: _jsx(Interview, {}) }), _jsx(Route, { path: "/landing", element: _jsx(Landing, {}) }), _jsx(Route, { path: "/startInterview", element: _jsx(StartInterview, {}) })] }) }));
}
export default App;
