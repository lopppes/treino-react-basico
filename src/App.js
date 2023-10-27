import './App.css';

import './components/button.css';

import ColorTextFunction from './components/colorText';

import Button from './components/button';


function App() {

  return (
    
    <div>

       <ColorTextFunction text='(treino react) parágrafo colorido
e com todas as letras maiúsculas' textColor='red'></ColorTextFunction>

     <div className='center-button'>
       
     <Button label='Baixar CV'></Button>

     </div>

   </div>
  )
};

export default App;