// Cria TrustedUsers component para exibir usuários confiáveis
interface TrustedUsersProps {
  userCount?: number;
  userImages?: string[];
  className?: string;
}

export default function TrustedUsers({
  userCount = 1250,
  userImages = [
    "https://api.dicebear.com/7.x/avataaars/svg?seed=Maria",
    "https://api.dicebear.com/7.x/avataaars/svg?seed=João",
    "https://api.dicebear.com/7.x/avataaars/svg?seed=Ana",
  ],
  className = "",
}: TrustedUsersProps) {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      {/* Container dos avatares COM ESPAÇO */}
      <div className="flex items-center mb-3 space-x-2">
        {" "}
        {/* Alterado: space-x-2 */}
        {/* Avatar 1 */}
        <div className="w-12 h-12 rounded-full border-2 border-white overflow-hidden bg-gray-200">
          <img
            src={userImages[0]}
            alt="Usuário 1"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Avatar 2 (REMOVIDO -ml-3) */}
        <div className="w-12 h-12 rounded-full border-2 border-white overflow-hidden bg-gray-300">
          {" "}
          {/* Alterado: removido -ml-3 */}
          <img
            src={userImages[1]}
            alt="Usuário 2"
            className="w-full h-full object-cover"
          />
        </div>
        <div className=" w-12 h-12 rounded-full border-2 border-white overflow-hidden bg-gray-400">
          {" "}
          <img
            src={userImages[2]}
            alt="Usuário 3"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className=" text-center text-white">
        {" "}
        <span>+{userCount.toLocaleString()} usuários já confiam!</span>
      </div>
    </div>
  );
}
