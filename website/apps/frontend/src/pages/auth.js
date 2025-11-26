import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { SignIn, SignUp } from '@clerk/clerk-react';
export function AuthPage() {
    return (_jsxs("div", { style: { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 32 }, children: [_jsx("h1", { children: "Sign In" }), _jsx(SignIn, { path: "/sign-in", routing: "path", signUpUrl: "/sign-up" }), _jsx("h1", { children: "Sign Up" }), _jsx(SignUp, { path: "/sign-up", routing: "path", signInUrl: "/sign-in" })] }));
}
