# PADRÕES ADOTADOS - PROJETO IMOBILINK

## 1. NOSSA NOMENCLATURA

### COMPONENTES (PascalCase):

- BotaoPrimario, FormularioLogin, PerfilCorretor
- ListaEmpreendimentos, SistemaMatches, CardCorretor

### ARQUIVOS (camelCase):

- apiCorretores.ts, servicoIA.ts, formatarData.ts
- validarEmail.ts, useAuth.ts, cores.ts

### CONSTANTES (SNAKE_CASE_MAIÚSCULO):

- URL_API, COR_PRINCIPAL, LIMITE_TENTATIVAS_LOGIN

## 2. NOSSA ESTRUTURA

```
src/
├── components/           # 👥 Componentes Reutilizáveis
│   ├── Botoes/          ← Componentes de botão (BotaoPrimario, etc.)
│   ├── Formularios/     ← Formulários (FormularioLogin, etc.)
│   ├── Tabelas/         ← Componentes de tabela
│   ├── Corretores/      ← Componentes específicos de corretores
│   └── Empreendimentos/ ← Componentes específicos de empreendimentos
├── pages/               # 🖥️ Telas da Aplicação
│   ├── Login/           ← Tela de login de corretores/gestores
│   ├── Dashboard/       ← Tela principal após login
│   ├── PerfilCorretor/  ← Tela de perfil e currículo do corretor
│   ├── ListaEmpreendimentos/ ← Tela de vagas em empreendimentos
│   └── SistemaMatches/  ← Tela de matches entre corretores e empreendimentos
├── services/            # 🔌 Conexões Externas
│   ├── api/             ← Serviços de API (apiCorretores, etc.)
│   └── ia/              ← Serviços de IA (sistema de matches)
├── utils/               # 🛠️ Ferramentas Úteis
│   ├── formatadores/    ← Funções de formatação (formatarData, etc.)
│   └── validadores/     ← Funções de validação (validarEmail, etc.)
├── types/               # 📝 Tipos TypeScript (Corretor, Empreendimento)
├── styles/              # 🎨 Estilos Globais (cores, fontes)
└── hooks/               # ⚓ Hooks Customizados (useAuth, useMatches)
```

## 3. NOSSOS COMMITS

### PADRÃO: `[tipo]: [descrição]`

### EXEMPLOS:

- feat: adiciona tela de login
- feat: implementa sistema de matches com IA
- fix: corrige validação do formulário de cadastro
- docs: atualiza documentação de uso
- style: ajusta responsividade do dashboard
- build: configura Tailwind CSS no projeto
