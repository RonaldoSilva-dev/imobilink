// ============================================
// COMPONENTE: LinkEntrar
// FINALIDADE: Link verde "Entrar" para quem já tem conta
// POSIÇÃO: Abaixo do botão "Criar conta" no formulário
// ============================================

// 1. DEFINIÇÃO DAS PROPRIEDADES (Props)
interface PropsLinkEntrar {
  /**
   * Texto do link
   * Valor padrão: "Entrar" (como na imagem)
   */
  texto?: string;

  /**
   * Função executada quando o link é clicado
   * Usada para navegar para página de login
   */
  aoClicar?: () => void;

  /**
   * URL para navegação tradicional (opcional)
   * Se fornecido, o componente vira um link <a> normal
   */
  href?: string;

  /**
   * Se o link está desabilitado
   * Quando true: link fica cinza e não é clicável
   */
  desabilitado?: boolean;
}

// 2. COMPONENTE PRINCIPAL
export function LinkEntrar({
  // Valores padrão caso não sejam fornecidos
  texto = "Entrar",
  aoClicar,
  href,
  desabilitado = false,
}: PropsLinkEntrar) {
  // 3. DETERMINAR SE É UM LINK OU BOTÃO
  // Se tem href E não está desabilitado = link tradicional <a>
  // Caso contrário, renderiza como botão estilizado
  const eLink = href && !desabilitado;

  // 5. CLASSES CSS BASE (compartilhadas entre link e botão)
  const classesBase = `
    font-medium
    text-sm
    transition-colors
    duration-200
    ${
      desabilitado
        ? "text-gray-400 cursor-not-allowed"
        : "text-green-600 hover:text-green-700 cursor-pointer"
    }
  `;

  // 6. RENDERIZAÇÃO CONDICIONAL
  // Se for um link tradicional (<a>)
  if (eLink) {
    return (
      <a
        href={desabilitado ? undefined : href} // Se desabilitado, href fica undefined
        className={classesBase}
        onClick={(evento) => {
          // Se estiver desabilitado, previne qualquer ação
          if (desabilitado) {
            evento.preventDefault();
            return;
          }

          // Se tiver função aoClicar, previne comportamento padrão e executa
          if (aoClicar) {
            evento.preventDefault();
            aoClicar();
          }
        }}
        // Atributos de segurança para links externos (apenas se não estiver desabilitado)
        target={desabilitado ? undefined : "_blank"}
        rel={desabilitado ? undefined : "noopener noreferrer"}
        // CORREÇÃO: aria-disabled deve ser string "true" ou "false"
        aria-disabled={desabilitado ? "true" : "false"}
        // Adiciona role="link" para clareza semântica
        role="link"
        // Adiciona tabIndex apropriado
        tabIndex={desabilitado ? -1 : 0}
      >
        {texto}
      </a>
    );
  }

  // 7. SE NÃO FOR LINK TRADICIONAL, RENDERIZA COMO BOTÃO ESTILIZADO
  return (
    <button
      type="button"
      onClick={desabilitado ? undefined : aoClicar}
      disabled={desabilitado}
      className={`
        ${classesBase}
        bg-transparent
        border-none
        p-0
        focus:outline-none
        focus:ring-2
        focus:ring-green-500
        focus:ring-offset-1
        ${desabilitado ? "pointer-events-none" : ""}
      `}
      // Para botão, usamos apenas o atributo nativo 'disabled'
    >
      {texto}
    </button>
  );
}
