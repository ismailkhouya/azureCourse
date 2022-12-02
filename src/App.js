import './App.css';
import Containers from './Components/Containers';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ContainerDetail from './Components/ContainerDetail';
import Layout from './Components/Layout';

function App() {
  return (

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Containers />}/>    
      <Route path='/Details/:containerName' element={<ContainerDetail/>} />
    </Routes>
  </BrowserRouter>

  );
}

export default App;
