import { LANGUAGE_VERSIONS } from "../constants/languages";

const languages = Object.entries(LANGUAGE_VERSIONS);

const LanguageSelector = ({ language, onSelect }) => {
  return (
    <div className="mb-4 flex items-center gap-2">
      <label htmlFor="language-select" className="font-medium text-foreground">
        Language:
      </label>
      <select
        id="language-select"
        value={language}
        onChange={e => onSelect(e.target.value)}
        className="px-3 py-2 rounded-md border border-border bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition shadow-sm"
      >
        {languages.map(([lang, version]) => (
          <option key={lang} value={lang} className="bg-input text-foreground">
            {lang.charAt(0).toUpperCase() + lang.slice(1)}
         
          </option>
        ))}
      </select>
      <span className="ml-2 text-xs text-muted-foreground bg-accent px-2 py-1 rounded">
        {LANGUAGE_VERSIONS[language]}
      </span>
    </div>
  );
};

export default LanguageSelector;
