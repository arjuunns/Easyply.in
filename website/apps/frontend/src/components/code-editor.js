import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef } from "react";
import { Editor } from "@monaco-editor/react";
import LanguageSelector from "./LanguageSelector";
import { BOILERPLATES } from "../constants/languages";
const CodeEditor = ({ value, language, onChange, onLanguageChange, }) => {
    const editorRef = useRef(null);
    const onMount = (editor) => {
        editorRef.current = editor;
        editor.focus();
    };
    // Set boilerplate code when language changes
    const handleLanguageChange = (lang) => {
        onLanguageChange(lang);
        if (BOILERPLATES[lang]) {
            onChange(BOILERPLATES[lang]);
        }
    };
    return (_jsxs("div", { className: "bg-[#181f2a] rounded-xl shadow-lg p-0 max-w-3xl mx-auto border border-[#232c3b]", children: [_jsx("div", { className: "flex items-center justify-between px-6 py-4 border-b border-[#232c3b]", children: _jsx(LanguageSelector, { language: language, onSelect: handleLanguageChange }) }), _jsx("div", { className: "rounded-b-xl overflow-hidden p-4", children: _jsx(Editor, { className: "rounded-lg", options: {
                        minimap: { enabled: false },
                        fontSize: 16,
                        fontFamily: 'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
                        scrollBeyondLastLine: false,
                        wordWrap: "on",
                        lineNumbers: "on",
                        automaticLayout: true,
                        theme: "vs-dark",
                    }, height: "350px", theme: "vs-dark", language: language, value: value, 
                    //code editor andhar hai , run function bahar hai , layout all fucked up
                    onMount: onMount, onChange: (val) => onChange(val || "") }) })] }));
};
export default CodeEditor;
