// Componente principal (importa os demais)

import { FormCadastroCompleto } from "./components/Formularios/FormCadastroCompleto";
import Header from "./components/Header/Header";

export default function App() {
  return (
    <>
      <Header />
      <FormCadastroCompleto />
    </>
  );
}
