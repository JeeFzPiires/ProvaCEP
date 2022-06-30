import { ButtonBuscar, ButtonPeso, Container, InputCep, InputPeso, Title, Text, TextButton, TextResultado, TextFrete, ButtonNewFrete } from './styles';
import api from '../../services/api';
import { useState } from 'react';

export default function Home() {

  const [cep, setCep] = useState('')
  const [peso, setPeso] = useState("")
  const [userUF, setUserUF] = useState([])
  const [visible, setVisible] = useState(false)
  const [visibleFrete, setVisibleFrete] = useState(false)
  const [valorFrete, setValorFrete] = useState(0)

  async function handleBuscarCep() {
    const userCep = cep
    
    try {
      const { data } = await api.get(`${userCep}/json`)
      setUserUF(data)
      if( data.cep != undefined ) {
        console.log("cep válido")
        return setVisible(true)
      } else {
        return console.error("erro");
      }

    } catch (error) {
      console.log(error.name);
      console.log(error.message)
    }
  }

  function handleCalcularFrete() {
    const estado = userUF.uf

        const estados5 = ['MG', 'SP', 'RJ', 'ES']
        const estados15 = ['PR', 'SC', 'RS']
        const estados50 = ['AC', 'AM', 'RO', 'RR', 'AP', 'PA', 'TO']

        const valor5 = estados5.some(element => element === estado)
        const valor15 = estados15.some(element => element === estado)
        const valor50 = estados50.some(element => element === estado)

        if (valor5) {
            if (peso >= 0 && peso <= 10) {
                const taxaPeso = peso * 0.80
                const taxaEstado = taxaPeso * 5
                const resultadoFrete = taxaPeso + taxaEstado
                setValorFrete(resultadoFrete)
                return setVisibleFrete(true)
            }
            else if (peso > 10.1 && peso <= 20) {
                const taxaPeso = peso * 0.96
                const taxaEstado = taxaPeso * 5
                const resultadoFrete = taxaPeso + taxaEstado
                setValorFrete(resultadoFrete)
            }
            else if (peso > 20) {
                const taxaPeso = peso * 2.10
                const taxaEstado = taxaPeso * 5
                const resultadoFrete = taxaPeso + taxaEstado
                setValorFrete(resultadoFrete)
            }
        }
        if (valor15) {
            if (peso >= 0 && peso <= 10) {
                const taxaPeso = peso * 0.80
                const taxaEstado = taxaPeso * 15
                const resultadoFrete = taxaPeso + taxaEstado
                setValorFrete(resultadoFrete)
            }
            else if (peso > 10.1 && peso <= 20) {
                const taxaPeso = peso * 0.96
                const taxaEstado = taxaPeso * 15
                const resultadoFrete = taxaPeso + taxaEstado
                setValorFrete(resultadoFrete)
            }
            else if (peso > 20) {
                const taxaPeso = peso * 2.10
                const taxaEstado = taxaPeso * 15
                const resultadoFrete = taxaPeso + taxaEstado
                setValorFrete(resultadoFrete)
            }
        }
        if (valor50) {
            if (peso >= 0 && peso <= 10) {
                const taxaPeso = peso * 0.80
                const taxaEstado = taxaPeso * 50
                const resultadoFrete = taxaPeso + taxaEstado
                setValorFrete(resultadoFrete)
            }
            else if (peso > 10.1 && peso <= 20) {
                const taxaPeso = peso * 0.96
                const taxaEstado = taxaPeso * 50
                const resultadoFrete = taxaPeso + taxaEstado
                setValorFrete(resultadoFrete)
            }
            else if (peso > 20) {
                const taxaPeso = peso * 2.10
                const taxaEstado = taxaPeso * 50
                const resultadoFrete = taxaPeso + taxaEstado
                setValorFrete(resultadoFrete)
            }
        }
  }

  return (
    <>
      <Container>
        <Title>CORREIU🐌</Title>
        <InputCep 
          placeholder='Informe o seu CEP'
          placeholderTextColor="black"
          onChangeText={setCep}
        />
        <ButtonBuscar onPress={handleBuscarCep}>
          <TextButton>Buscar</TextButton>
        </ButtonBuscar>

        {visible ? <InputPeso 
                      placeholder='Informe o peso do produto'
                      placeholderTextColor="black"
                      onChangeText={setPeso}
                    />: null}

        {visible ?  <ButtonPeso onPress={handleCalcularFrete}>
                      <TextButton>Frete</TextButton>
                    </ButtonPeso>: null}


        {visibleFrete ? <TextResultado>Valor do Frete é R$ {valorFrete}</TextResultado>: null}
        {visibleFrete ? <ButtonNewFrete id="refresh">
                          <TextButton>Novo Frete</TextButton>
                        </ButtonNewFrete>: null}
      </Container>
    </>
  );
}