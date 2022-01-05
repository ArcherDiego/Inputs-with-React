import React from "react";
import Button from "./components/Button/Button"
import Input from "./components/Form/Input/Input";
import Radio from "./components/Form/Radio/Radio";

const App = () => {

  const [ name, setName ] = React.useState('')
  const [ email, setEmail ] = React.useState('')
  const [ phone, setPhone ] = React.useState('')

  return (
    <>
      <form>
        <h2>Preencha os campos abaixo para seguir com o Questionário.</h2>
        <Input
          id="Nome" 
          name="Nome: " 
          value={ name } 
          setValue={ setName } 
          required
        />
        <Input
          id="Email" 
          name="E-mail: " 
          value={ email } 
          setValue={ setEmail } 
          required 
        />
        <Input 
          id="Telefone" 
          name="Telefone: " 
          value={ phone } 
          setValue={ setPhone } 
          placeholder="(Opcional)" 
        />
        <Button name={ 'Iniciar' } />
        <Radio />
      </form>
    </>
  );
}

export default App;
