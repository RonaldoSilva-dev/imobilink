// components/LanguageSelector.tsx
import { useState } from "react";
import { ChevronDown, Globe } from "lucide-react";

interface Language {
  code: string;
  name: string;
  flag: string;
}

const languages: Language[] = [
  { code: "pt", name: "Português", flag: "🇧🇷" },
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
];

interface LanguageSelectorProps {
  onLanguageChange?: (language: Language) => void;
  className?: string;
}

export default function LanguageSelector({
  onLanguageChange,
  className = "",
}: LanguageSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<Language>(
    languages[0]
  );

  const handleSelect = (language: Language) => {
    setSelectedLanguage(language);
    setIsOpen(false);
    onLanguageChange?.(language);
  };

  return (
    <div className={`relative ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 
         text-gray-600 bg-white 
         hover:bg-[#2f2f2f] hover:text-white hover:shadow-lg
         rounded-lg transition-all duration-300"
      >
        <Globe size={18} />
        <span className="font-medium">
          {selectedLanguage.flag} {selectedLanguage.name}
        </span>
        <ChevronDown
          size={18}
          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="absolute top-full mt-2 w-full bg-gray-800 rounded-lg shadow-xl z-50">
          <div className="py-2">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => handleSelect(language)}
                className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-700 
                         transition-colors ${
                           selectedLanguage.code === language.code
                             ? "bg-gray-700"
                             : ""
                         }`}
              >
                <span className="text-xl">{language.flag}</span>
                <span className="text-white">{language.name}</span>
                {selectedLanguage.code === language.code && (
                  <div className="ml-auto w-2 h-2 bg-green-500 rounded-full"></div>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
