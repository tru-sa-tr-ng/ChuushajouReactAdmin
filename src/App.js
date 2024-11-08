
import {Admin, Resource} from 'react-admin'
import './App.css';
import CustomerList from './pages/CustomerList';
import vehicleList from './pages/VehicleList';


function App() {
  return (
    <Admin >
        <Resource name="customers" list={CustomerList}/>
        <Resource name="vehicles" list={vehicleList}/>
        

    </Admin>
  );
}

export default App;
