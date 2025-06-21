import { useState } from 'react'
import {Car,CarColor} from './types'
import CarList from './components/CarList'


function App() {
  const [cars, setCars] = useState<Car[]>([
{ id: 1, model: 'Toyota', color: 'red' },
{ id: 2, model: 'Mazda', color: 'black' },
  ]);
const deleteCar=(id:number)=>{
    setCars(cars.filter((car)=>car.id!==id));
   }
  return (
   <div>
     <h1>🚘 Car Inventory</h1>
      <CarList cars={cars} onDelete={deleteCar} />
   </div>
  );
}

export default App;

