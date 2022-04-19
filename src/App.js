import logo from './logo.svg';
import './Appp.css';
import Header from './Components/Layout/Header';
import Meals from './Components/Meals/Meals';
function App() {
  return (
   <>
    <Header/>
    <main className='main'>
      <Meals/>
    </main>
   </>
  );
}

export default App;
