import React from "react";
import { LogIn, Menu, X } from "lucide-react";
import img_logo_mulher_anylai from "../../assets/img_logo_mulher_anylai.png";
import { BotaoGen } from "../Botoes/BotaoGen";

interface HeaderProps {
  onLoginClick?: () => void;
  onNavItemClick?: (item: string) => void;
}

const Header: React.FC<HeaderProps> = ({
  onLoginClick = () => console.log("Login clicked"),
  onNavItemClick = (item) => console.log(`Navigating to: ${item}`),
}) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { id: "inicio", label: "Inicio" },
    { id: "funcionalidades", label: "Funcionalidades" },
    { id: "contato", label: "Contato" },
  ];

  return (
    <header className=" overflow-hidden sticky top-0 z-50 w-full bg-black shadow-md border-b border-gray-100">
      <div className="container px-2 sm:px-6 ">
        <div className=" grid grid-cols-3 items-center h-16">
          {/* Logo à esquerda - com margin esquerda */}
          <div className="flex-shrink-0 sm:ml-0">
            <img
              src={img_logo_mulher_anylai}
              alt="AnyLAI Logo"
              className="h-12 w-auto sm:h-12 md:h-16 object-contain"
            />
          </div>

          {/* Container que empurra conteúdo para a direita */}
          <div className="flex-1"></div>

          {/* Grupo: Menu de navegação + Botão Entrar */}
          <div className="flex items-center space-x-6 lg:space-x-8">
            {/* Menu de navegação - Desktop */}
            <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 mr-2 sm:mr-4">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onNavItemClick(item.id)}
                  className="text-white hover:text-green-400 font-medium text-sm lg:text-base transition-colors duration-200 relative group px-2"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </nav>

            {/* Botão Entrar + Menu Mobile - com margin direita */}
            <div className="flex items-center space-x-4 mr-2 sm:mr-0">
              {/* Botão Entrar - Visível em todas as telas */}
              <div className="hidden sm:flex items-center">
                <BotaoGen
                  texto="Entrar"
                  icone={<LogIn className="w-4 h-4" />}
                  aoClicar={onLoginClick}
                />
              </div>

              {/* Botão Entrar Mobile - apenas ícone */}
              <div className="sm:hidden">
                <BotaoGen
                  texto=""
                  icone={<LogIn className="w-5 h-5" />}
                  aoClicar={onLoginClick}
                  className="px-3"
                />
              </div>

              {/* Botão Menu Hamburguer - apenas mobile */}
              <button
                className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Abrir menu"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6 text-white" />
                ) : (
                  <Menu className="w-6 h-6 text-white" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Menu Mobile Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900 border-t border-gray-800 py-4 animate-slideDown">
            <div className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavItemClick(item.id);
                    setIsMenuOpen(false);
                  }}
                  className="text-white hover:text-green-400 hover:bg-gray-800 font-medium py-3 px-4 rounded-lg transition-all duration-200 text-left"
                >
                  {item.label}
                </button>
              ))}

              {/* Botão Entrar no menu mobile */}
              <div className="pt-2 border-t border-gray-800">
                <BotaoGen
                  texto="Entrar"
                  icone={<LogIn className="w-4 h-4" />}
                  aoClicar={() => {
                    onLoginClick();
                    setIsMenuOpen(false);
                  }}
                  className="w-full justify-center"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
