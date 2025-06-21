import {Car} from '../types'
 
type Props={
    cars:Car[];
    onDelete:(id:number)=>void;
};
const CarList=({cars,onDelete}:Props)=>{
    return(
        <div>
        <h2>🚗 Car List</h2>
        {cars.length===0 && <p>No cars yet</p>}
        <ul>
            {cars.map((car)=>(
                <li key={car.id}>
                    {car.model}-{car.color}
                <button onClick={() => onDelete(car.id)}>❌</button>

                </li>
            ))}
        </ul>
        </div>
    );
};
export default CarList;