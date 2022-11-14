import './App.css';
import { Provider } from 'react-redux';
import Regions from './components/Regions';
import Store from './Store/Store';


function App() {
  return (

    <Provider store={Store}>
   
    <div class="App">
    
  <Regions />
    
    </div>
   
    </Provider>
  );
}

export default App;