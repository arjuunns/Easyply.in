import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const Output = ({ output }) => {
    return (_jsxs("div", { className: 'pt-2', children: [_jsx("h2", { className: 'text-lg font-semibold text-gray-200', children: "Output" }), _jsx("div", { className: 'bg-gray-900 text-green-400 p-4 rounded-lg font-mono whitespace-pre-wrap', children: _jsx("pre", { children: output }) })] }));
};
export default Output;
