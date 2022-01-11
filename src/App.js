import React from "react";
import Button from "./components/Button/Button"
import Checkbox from "./components/Form/Checkbox/Checkbox";
import Input from "./components/Form/Input/Input";
import Radio from "./components/Form/Radio/Radio";
import Select from "./components/Form/Select/Select";
import styled from "styled-components";

const App = () => {

  const Titulo = styled.h2`
    text-align: center;
    font-size: 2em;
  `;

  const [ name, setName ] = React.useState('')
  const [ email, setEmail ] = React.useState('')
  const [ phone, setPhone ] = React.useState('')
  const [ select, setSelect ] = React.useState('')
  const [ terms, setTerms ] = React.useState('')
  const [ position, setPosition ] = React.useState([])

  return (
    <>
      <form>
        <Titulo>Questionário</Titulo>
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
        <Select
          template={ 'Sexo' }
          option={ ['Masculino', 'Feminino', 'Outro'] }
          value={ select }
          setValue={ setSelect }
          required
        />
        <Checkbox 
          value={ position }
          setValue={ setPosition }
        />
        <Radio 
          question={ "Você aceita os termos de serviço?" } 
          option={ ['Sim, aceito', 'Não, não aceito'] }
          value={ terms }
          setValue={ setTerms }
          required
        />
        <Button name={ 'Pronto' } />
      </form>
      <div>{ name }{ email }{ phone }{ select }{ terms }{ position }</div>
    </>
  );
}

export default App;
