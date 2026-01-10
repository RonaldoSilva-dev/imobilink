// import React from "react";

// // Componente para o rodapé da tela
// const Footer: React.FC = () => {
//   return (
//     // Container do rodapé posicionado na parte inferior
//     // 'absolute' posiciona o elemento absolutamente em relação ao container pai
//     // 'bottom-0' alinha na parte inferior
//     // 'w-full' ocupa 100% da largura
//     // 'px-[34px]' padding horizontal de 34px
//     // 'pb-8' padding inferior de 2rem (32px)
//     <div className="absolute bottom-0 w-full px-[34px] pb-8">
//       {/* Botão "Ver Demonstração" */}
//       {/* 'w-full' ocupa 100% da largura */}
//       {/* 'border-2' borda de 2px */}
//       {/* 'border-[#4F46E5]' cor da borda roxa */}
//       {/* 'text-[#4F46E5]' cor do texto roxa */}
//       {/* 'py-3' padding vertical de 0.75rem (12px) */}
//       {/* 'rounded-lg' bordas arredondadas */}
//       {/* 'font-medium' peso da fonte médio */}
//       {/* 'hover:bg-[#4F46E5] hover:text-white' efeito hover */}
//       {/* 'transition-colors' transição suave de cores */}
//       {/* 'mb-6' margem inferior de 1.5rem (24px) */}
//       <button className="w-full border-2 border-[#4F46E5] text-[#4F46E5] py-3 rounded-lg font-medium hover:bg-[#4F46E5] hover:text-white transition-colors mb-6">
//         Ver Demonstração
//       </button>

//       {/* Seletor de idioma */}
//       {/* 'flex justify-center items-center' centraliza horizontal e verticalmente */}
//       {/* 'space-x-2' espaçamento horizontal entre elementos filhos */}
//       {/* 'mb-8' margem inferior de 2rem (32px) */}
//       <div className="flex justify-center items-center space-x-2 mb-8">
//         {/* Ícone de bandeira ou globo */}
//         {/* 'w-5 h-5' dimensões 20x20px */}
//         {/* 'text-[#E6F2F1]' cor do ícone */}
//         <svg
//           className="w-5 h-5 text-[#E6F2F1]"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
//           />
//         </svg>

//         {/* Texto do idioma */}
//         {/* 'font-poppins' aplica a fonte Poppins */}
//         {/* 'text-[#E6F2F1]' cor do texto */}
//         <span className="font-poppins text-[#E6F2F1]">Português BR</span>
//       </div>

//       {/* Contador de usuários */}
//       {/* 'text-center' alinha o texto ao centro */}
//       <div className="text-center">
//         {/* Texto com número de usuários */}
//         {/* 'font-poppins' aplica a fonte Poppins */}
//         {/* 'font-bold' peso da fonte 700 (bold) */}
//         {/* 'text-[#4F46E5]' cor roxa para destacar o número */}
//         {/* 'text-[20px]' tamanho da fonte 20px */}
//         <span className="font-poppins font-bold text-[#4F46E5] text-[20px]">
//           +2.000
//         </span>

//         {/* Texto complementar */}
//         {/* 'font-poppins' aplica a fonte Poppins */}
//         {/* 'text-[#E6F2F1]' cor do texto */}
//         {/* 'ml-2' margem esquerda de 0.5rem (8px) */}
//         <span className="font-poppins text-[#E6F2F1] ml-2">
//           usuários já confiam!
//         </span>
//       </div>
//     </div>
//   );
// };

// export default Footer;
