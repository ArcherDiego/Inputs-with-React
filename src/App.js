import React from "react";
import Button from "./components/Button/Button"
import Checkbox from "./components/Form/Checkbox/Checkbox";
import Input from "./components/Form/Input/Input";
import Radio from "./components/Form/Radio/Radio";
import Select from "./components/Form/Select/Select";

const App = () => {

  const [ name, setName ] = React.useState('')
  const [ email, setEmail ] = React.useState('')
  const [ phone, setPhone ] = React.useState('')
  const [ select, setSelect ] = React.useState('')
  const [ terms, setTerms ] = React.useState('')

  return (
    <>
      <form>
        <h2>Questionário</h2>
        <Input
          id="Nome" 
          name="Nome: " 
          value={ name } 
          setValue={ setName }
          type={ 'text' } 
          required
        />
        <Input
          id="Email" 
          name="E-mail: " 
          value={ email } 
          setValue={ setEmail } 
          type={ 'email' }
          required 
        />
        <Input 
          id="Telefone" 
          name="Telefone: " 
          value={ phone } 
          setValue={ setPhone } 
          type={ 'number' }
          placeholder="(Opcional)" 
        />
        <br />
        <Select
          template={ 'Sexo' }
          option={ ['Masculino', 'Feminino', 'Outro'] }
          value={ select }
          setValue={ setSelect }
          required
        />
        <br />
        <Button name={ 'Iniciar' } />
        <Radio 
          question={ "Você aceita os termos de serviço?" } 
          option={ ['Sim, aceito', 'Não'] }
          value={ terms }
          setValue={ setTerms }
          required
        />
        <Checkbox />
      </form>
    </>
  );
}

export default App;
