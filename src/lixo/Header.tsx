// import React from "react";
// import img_logo_mulher from "../assets/img_logo_mulher.png";

// // Componente para o cabeçalho da tela (logo, título e subtítulo)
// const Header: React.FC = () => {
//   return (
//     // Container do cabeçalho com posicionamento relativo para os elementos absolutos dentro
//     <div className="relative w-full">
//       {/* Container para a imagem da mulher */}
//       {/* 'absolute' posiciona o elemento em relação ao container pai (relativo) */}
//       {/* 'left-[184px]' posiciona 184px da esquerda */}
//       {/* '-top-[0.25px]' posiciona -0.25px do topo (levemente para cima) */}
//       {/* 'z-10' define a camada de empilhamento (z-index) */}
//       <div className="">
//         {/* Imagem da mulher com dimensões fixas */}
//         {/* 'w-[82px] h-[82px]' define largura e altura de 82px */}
//         {/* 'rounded-full' deixa a imagem circular */}
//         {/* 'object-cover' garante que a imagem cubra o espaço sem distorcer */}
//         <img
//           src={img_logo_mulher}
//           alt="Mulher sorrindo"
//           className="w-[82px] h-[82px] rounded-full object-cover border-2 border-white"
//         />
//       </div>

//       {/* Container para o logo AnyLAI[SM] */}
//       {/* 'absolute' para posicionamento absoluto */}
//       {/* 'left-[60.05px]' e 'top-[84.74px]' posicionam o texto nas coordenadas especificadas */}
//       <div className="absolute left-[60.05px] top-[84.74px]">
//         {/* Texto do logo */}
//         {/* 'font-poppins' aplica a fonte Poppins (precisa ser configurada no Tailwind) */}
//         {/* 'font-bold' define peso da fonte como 700 (bold) */}
//         {/* 'text-[36px]' tamanho da fonte 36px */}
//         {/* 'leading-[40px]' altura da linha 40px (111% de 36px) */}
//         {/* 'text-white' cor do texto branca */}
//         <h1 className="font-poppins font-bold text-[36px] leading-[40px] text-white">
//           AnyLAI<sup className="text-sm align-super">[SM]</sup>
//         </h1>
//       </div>

//       {/* Container para o subtítulo */}
//       {/* 'absolute' para posicionamento absoluto */}
//       {/* 'left-[34px]' e 'top-[143.75px]' posicionam nas coordenadas especificadas */}
//       {/* 'w-[380px]' largura de 380px */}
//       <div className="absolute left-[34px] top-[143.75px] w-[380px]">
//         {/* Texto do subtítulo */}
//         {/* 'font-poppins' aplica a fonte Poppins */}
//         {/* 'font-normal' peso da fonte 400 (normal) */}
//         {/* 'text-[18px]' tamanho da fonte 18px */}
//         {/* 'leading-[30px]' altura da linha 30px (167% de 18px) */}
//         {/* 'text-center' alinha o texto ao centro */}
//         {/* 'text-[#E6F2F1]' cor do texto específica do design (um branco azulado) */}
//         <p className="font-poppins font-normal text-[18px] leading-[30px] text-center text-[#E6F2F1]">
//           Sua nova Assistente de IA para o Mercado Imobiliário
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Header;
