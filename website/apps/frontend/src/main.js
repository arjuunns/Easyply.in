import { jsx as _jsx } from "react/jsx-runtime";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { ClerkProvider } from "@clerk/clerk-react";
const clerkPubKey = "pk_test_ZGVjZW50LXBpZ2xldC03Ni5jbGVyay5hY2NvdW50cy5kZXYk";
createRoot(document.getElementById("root")).render(_jsx(ClerkProvider, { publishableKey: clerkPubKey, children: _jsx(App, {}) }));
