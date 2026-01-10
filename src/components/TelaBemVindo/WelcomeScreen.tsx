// Cria telas de boas-vindas para novos usuários
import { LogIn, UserPlus } from "lucide-react";
import img_div1 from "../../assets/img_div1.png";
import { BotaoGen } from "../Botoes/BotaoGen";
import FeatureHighlights from "./FeatureHighlights";
import LanguageSelector from "./LanguageSelector";
import TrustedUsers from "./TrustedUsers";

export default function WelcomeScreen() {
  return (
    <div className=" container flex items-center justify-center min-w-full min-h-screen bg-[#363636]">
      <div className="  overflow-hidden min-w-80 max-w-md h-max my-20">
        <div className="max-w-md h-auto mb-1 ">
          <img src={img_div1} alt="" />
        </div>

        <div className=" max-w-md max-h-[509px] text-white text-center bg-[#404040] border-none box-border shadow-[0px 25px 50px rgba(0,0,0,0.25)] rounded-xl ">
          <div className=" p-5 rounded-lg ">
            <h1 className=" text-center font-bold">Bem-vindo(a)!</h1>
            <p>
              Transforme seu negócio imobiliário com inteligência artificial.
              Automatize atendimento, gere leads e otimize suas vendas.
            </p>
          </div>
          <div className="flex flex-col p-5 gap-2">
            <BotaoGen
              texto="Criar conta"
              className="w-full text-lg "
              icone={<UserPlus size={20} />}
            />

            <BotaoGen
              className=" w-full text-lg bg-[#3f3f3f] hover:bg-[#2f2f2f] border border-white"
              texto="Já tenho uma conta"
              icone={<LogIn size={20} />}
            />
          </div>
          <div>
            <FeatureHighlights />
          </div>
        </div>
        <div className="flex items-center justify-center mt-5">
          <BotaoGen
            texto="Ver demonstração"
            className="  pequeno underline text-lg text-green-400 bg-[#3f3f3f] hover:bg-[#2f2f2f]"
          />
        </div>
        <div className="flex items-center justify-center my-5">
          <LanguageSelector />
        </div>
        <div>
          <TrustedUsers />
        </div>
      </div>
    </div>
  );
}
