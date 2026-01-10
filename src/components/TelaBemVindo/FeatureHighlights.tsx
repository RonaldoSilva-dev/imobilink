// FeatureHighlights.tsx
import { MessageSquare, BarChart3, FileText, CheckCircle2 } from "lucide-react";

export default function FeatureHighlights() {
  const features = [
    {
      icon: <MessageSquare className="w-5 h-5 " />,
      title: "Chatbot IA",
      description: "Atendimento automatizado 24/7",
    },
    {
      icon: <BarChart3 className="w-5 h-5" />,
      title: "Análise de Dados",
      description: "Insights em tempo real",
    },
    {
      icon: <FileText className="w-5 h-5" />,
      title: "Textos IA",
      description: "Conteúdo otimizado",
    },
  ];

  return (
    <div className="mt-4  text-white font-poppins border-gray-500 border-t">
      <div className="text-center my-4">
        <h2 className="flex items-center justify-center gap-2 text-lg  mb-2">
          <CheckCircle2
            className="text-gray-600 fill-green-500 stroke-2"
            size={20}
          />
          Seguro, prático e rápido de Implementar
        </h2>
      </div>

      {/* Grid de features */}
      <div className="grid grid-cols-3 gap-3">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-3 rounded-lg 
                     hover:bg-gray-600/50 transition-colors duration-200"
          >
            <div className="mb-3 p-2 bg-[#404040] rounded-lg">
              <div className="text-green-500">{feature.icon}</div>
            </div>

            <span className="text-sm mb-1">{feature.title}</span>

            <span className="text-xs text-gray-400">{feature.description}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
