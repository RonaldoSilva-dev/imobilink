// cria um botão genérico reutilizável

import type { ReactNode } from "react";

// ============================================ //
interface PropsDoBotaoGen {
  texto: string;
  aoClicar?: () => void;
  cor?: "primaria" | "secundaria" | "sucesso" | "perigo" | "neutro";
  tamanho?: "pequeno" | "medio" | "grande";
  tipo?: "button" | "submit" | "reset";
  desabilitado?: boolean;
  className?: string; // Para customizações extras
  icone?: ReactNode;
  posicaoIcone?: "esquerda" | "direita";
}
// ============================================ //
export function BotaoGen({
  texto,
  aoClicar,
  cor = "primaria",
  tamanho = "medio",
  tipo = "button",
  desabilitado = false,
  className = "",
  icone,
  posicaoIcone = "esquerda",
}: PropsDoBotaoGen) {
  // Mapeamento de cores
  const cores = {
    primaria: "bg-[#3abd7b] hover:bg-[#2da566] text-white",
    secundaria: "bg-blue-500 hover:bg-blue-600 text-white",
    sucesso: "bg-green-500 hover:bg-green-600 text-white",
    perigo: "bg-red-500 hover:bg-red-600 text-white",
    neutro: "bg-gray-500 hover:bg-gray-600 text-white",
  };

  // Mapeamento de tamanhos
  const tamanhos = {
    pequeno: "px-3 py-1.5 text-sm",
    medio: "px-4 py-2 text-base",
    grande: "px-6 py-3 text-lg",
  };

  // Classes base
  const classesBase =
    "rounded-lg font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 flex items-center justify-center gap-2";

  return (
    <button
      type={tipo}
      className={`
        ${cores[cor]}
        ${tamanhos[tamanho]}
        ${classesBase}
        ${desabilitado ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
        ${className}
      `}
      onClick={aoClicar}
      disabled={desabilitado}
    >
      {posicaoIcone === "esquerda" && icone}
      {texto}
      {posicaoIcone === "direita" && icone}
    </button>
  );
}
// ============================================ //
