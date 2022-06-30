import styled from "styled-components/native";

export const Container = styled.View`
        flex: 1;
        background-color: #fcf985;
`;

export const Title = styled.Text`
        text-align: center;
        margin-top: 60px ;
        color: #0069c9;
        font-size:40px;
        font-weight: bold;
`;

export const InputCep = styled.TextInput`
  text-align: center;
  margin-top: 5rem;
  width: 17rem;
  height: 2.5rem;
  background-color: white;
  border: 2px solid blue;
  border-radius: 25px;
  font-size: 18px;

  margin-left: auto;
  margin-right: auto;
`
export const InputPeso = styled.TextInput`
  text-align: center;
  margin-top: 3rem;
  width: 17rem;
  height: 2.5rem;
  background-color: white;
  border: 2px solid blue;
  border-radius: 25px;

  margin-left: auto;
  margin-right: auto;
`

export const ButtonBuscar = styled.TouchableOpacity`
  background-color: #0069c9;
  width: 150px;
  height: 50px;
  border: 2px solid #FFFFFF;
  border-radius: 25px;

  margin-top: 2rem;
  margin-left: auto;
  margin-right: auto;
`

export const ButtonPeso = styled.TouchableOpacity`
  background-color: #0069c9;
  color: black;
  width: 150px;
  height: 50px;
  border: 2px solid #FFFFFF;
  border-radius: 25px;

  margin-top: 2rem;
  margin-left: auto;
  margin-right: auto;
`

export const ButtonNewFrete = styled.TouchableOpacity`
  background-color: red;
  color: black;
  width: 150px;
  height: 50px;
  border: 2px solid #FFFFFF;
  border-radius: 25px;

  margin-top: 2rem;
  margin-left: auto;
  margin-right: auto;
`


export const TextButton = styled.Text`
  text-align: center;
  margin-top: auto;
  margin-bottom: auto;
  color: #FFFFFF;
  font-size: 18px;
`

export const TextResultado = styled.Text`
  color: black;

  margin-top: 5rem;
  margin-left: auto;
  margin-right: auto;
  font-size: 24px;
`

export const TextFrete = styled.Text`
  color: red;

  margin-top: 2rem;
  text-align: center;

  border: 2px solid red;
  border-radius: 25px;
  width: 200px;
  height: 50px;

  margin-left: auto;
  margin-right: auto;
`

