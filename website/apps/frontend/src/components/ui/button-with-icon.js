import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from "@/components/ui/button";
import { Download, Share2 } from "lucide-react";
export function ButtonWithPlusIcon() {
    return (_jsxs(Button, { variant: "default", size: "sm", children: [_jsx(Download, {}), " Download Resume"] }));
}
export function ButtonWithShareIcon() {
    return (_jsxs(Button, { variant: "outline", size: "sm", children: [_jsx(Share2, {}), " Share Resume"] }));
}
