import { StatusBar } from 'expo-status-bar';
import { Container } from './styles/appStyles';
import Home from './components/Home';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppLoading from 'expo-app-loading';
import React, {useState} from 'react';

export default function App() {

  const initialTodos = []

  const [ready, setReady] = useState(false);
  const [todos, setTodos] = useState(initialTodos);

  const LoadTodos = () => {
    AsyncStorage.getItem("storedTodos").then(data => {
      if(data !== null){
        setTodos(JSON.parse(data))
      }
    }).catch((error) => console.log(error));
  }

  if(!ready){
    return(
      <AppLoading
        startAsync={LoadTodos}
        onFinish={() => setReady(true)}
        onError={console.warn}
      />
    )
  }

  return (
    <Container>
      <Home todos={todos} setTodos={setTodos}/>
      <StatusBar style="light" />
    </Container>
  );
}


