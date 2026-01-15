// COMPONENTE: FormCadastroCompleto
// FINALIDADE: Formulário completo de cadastro com duas colunas
// ============================================

import { useState } from "react";

// Importa todos os componentes que vamos usar
import { CampoDocumento } from "./CampoDocumento";
import { CampoInput } from "./CampoInput";
import { CampoInputMascara } from "./CampoInputMascara";
import { CampoSelect } from "./CampoSelect";
import { BotaoCriarConta } from "../Botoes/BotaoCriarConta";
import { PossuiConta } from "./PossuiConta";
import { CheckboxDuplo } from "./CheckBoxDuplo";
import { BotaoSocial } from "../Botoes/BotaoSocial";
import logo_mulher_anylai_sm from "../../assets/logo_mulher_anylai_sm.png";

// Componente principal
export function FormCadastroCompleto() {
  // ===== ESTADOS DO FORMULÁRIO =====
  const [tipoPessoa, setTipoPessoa] = useState<"pf" | "pj">("pf");
  const [documento, setDocumento] = useState("");
  const [nomeCompleto, setNomeCompleto] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [senha, setSenha] = useState("");
  const [perfil, setPerfil] = useState("");
  const [carregando, setCarregando] = useState(false);

  // ===== FUNÇÕES PARA OS BOTÕES SOCIAIS =====
  const handleGoogleLogin = () => {
    console.log("Login com Google clicado");
    alert("Login com Google (simulação)");
  };

  const handleMicrosoftLogin = () => {
    console.log("Login com Microsoft clicado");
    alert("Login com Microsoft (simulação)");
  };

  // ===== OPÇÕES PARA O SELECT DE PERFIL =====
  const opcoesPerfil = [
    { valor: "corretor", texto: "Corretor" },
    { valor: "imobiliaria", texto: "Imobiliária" },
    { valor: "incorporadora", texto: "Incorporadora" },
    { valor: "cliente", texto: "Cliente" },
    { valor: "proprietario", texto: "Proprietário" },
    { valor: "administrador", texto: "Administrador" },
  ];

  // ===== FUNÇÃO PARA ENVIAR O FORMULÁRIO =====
  const handleSubmit = async () => {
    setCarregando(true);

    console.log("Dados do formulário:", {
      tipoPessoa,
      documento,
      nomeCompleto,
      email,
      telefone,
      senha,
      perfil,
    });

    await new Promise((resolve) => setTimeout(resolve, 1500));
    setCarregando(false);
    alert("Cadastro realizado com sucesso! (simulação)");
  };

  // ===== RENDERIZAÇÃO =====
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 h-full">
          {/* ===== COLUNA ESQUERDA ===== */}
          <div>
            {/* Botão Social Google - CENTRALIZADO em todas as telas */}

            <div className="mb-4 flex justify-center">
              <BotaoSocial
                provedor="google"
                aoClicar={handleGoogleLogin}
                texto="Criar conta com Google"
              />
            </div>

            {/* Formulário de cadastro */}
            <div className="h-full bg-white rounded-l-3xl shadow-xl p-8 lg:p-10">
              {/* Título do formulário */}
              <div className="mb-8">
                <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">
                  Crie sua conta
                </h1>
                <p className="text-gray-600 mt-2">
                  Preencha os dados abaixo para começar
                </p>
              </div>

              {/* ===== SEÇÃO: TIPO DE PESSOA ===== */}
              <div className="mb-8">
                <CheckboxDuplo valor={tipoPessoa} aoMudar={setTipoPessoa} />
              </div>

              {/* ===== SEÇÃO: DOCUMENTO ===== */}
              <div className="mb-8">
                <CampoDocumento
                  tipoPessoa={tipoPessoa}
                  valor={documento}
                  aoMudar={setDocumento}
                  placeholder="Digite seu documento"
                  obrigatorio={true}
                />
              </div>

              {/* ===== SEÇÃO: DADOS PESSOAIS ===== */}
              <div className="space-y-6 mb-8">
                <CampoInput
                  rotulo="Nome completo"
                  tipo="text"
                  valor={nomeCompleto}
                  aoMudar={setNomeCompleto}
                  placeholder="Digite seu nome completo"
                  obrigatorio={true}
                />

                <CampoInput
                  rotulo="E-mail"
                  tipo="email"
                  valor={email}
                  aoMudar={setEmail}
                  placeholder="seu@email.com"
                  obrigatorio={true}
                />

                <CampoInputMascara
                  rotulo="Telefone"
                  valor={telefone}
                  aoMudar={setTelefone}
                  tipoMascara="telefone"
                  placeholder="(11) 99999-9999"
                  obrigatorio={false}
                />

                <CampoInputMascara
                  rotulo="Senha"
                  valor={senha}
                  aoMudar={setSenha}
                  tipoMascara="senha"
                  placeholder="Mínimo 8 caracteres"
                  obrigatorio={true}
                />
              </div>

              {/* ===== SEÇÃO: PERFIL ===== */}
              <div className="mb-10">
                <CampoSelect
                  rotulo="Perfil"
                  valor={perfil}
                  aoMudar={setPerfil}
                  opcoes={opcoesPerfil}
                  placeholder="Selecione seu perfil..."
                  obrigatorio={true}
                />
              </div>

              {/* ===== BOTÃO CRIAR CONTA ===== */}
              <div className="mb-6">
                <BotaoCriarConta
                  aoClicar={handleSubmit}
                  carregando={carregando}
                  desabilitado={carregando}
                />
              </div>

              {/* ===== LINK "JÁ POSSUI CONTA?" ===== */}
              <div className="text-center">
                <PossuiConta />
              </div>
            </div>
          </div>

          {/* ===== COLUNA DIREITA ===== */}
          <div className="h-full ">
            {/* Botão Social Microsoft - CENTRALIZADO em todas as telas */}

            <div className="mb-4 flex justify-center">
              <BotaoSocial
                provedor="microsoft"
                aoClicar={handleMicrosoftLogin}
                texto="Criar conta com Microsoft"
              />
            </div>

            {/* Conteúdo de marketing */}
            <div className="h-full bg-[#090e0f] rounded-r-3xl shadow-xl p-8 lg:p-10 flex flex-col items-center justify-center text-center">
              {/* Logo Anylai */}
              <div>
                <img src={logo_mulher_anylai_sm} alt="logo da empresa" />
              </div>

              {/* Texto descritivo */}
              <div className="max-w-md">
                <h2 className=" font-poppins font-normal text-lg lg:text-xl text-white mb-4">
                  Automatize tarefas, gere leads e otimize seus resultados no
                  setor imobiliário e marketing.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
