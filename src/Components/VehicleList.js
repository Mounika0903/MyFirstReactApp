// import { useEffect , useState } from "react";
// import axios from 'axios';


// function VehicleList(){
//     const [vehicles , setVehicles] = useState([]);


//     useEffect(()=>{
//         axios.get('http://localhost:5000/vehicles')
//             .then(response=>{
//                 setVehicles(response.data);
//             })
//             .catch(error=>{
//                 console.log('There was an error fetching the vehicles data!',error);
//             })
//     },[])


//     return (
//         <div className="container mt-4">
//             <h2>Vehicle List</h2>
//             <div className="row">
//                 {vehicles.map(vehicle => (
//                     <div className="col-md-4" key={vehicle.id}>
//                         <div>
//                             <img src={vehicle.image} className="card-img-top" height={250} alt={vehicle.name}/>
//                             <div className="card-body">
//                                 <h5 className="card-title">{vehicle.name}</h5>
//                                 <p className="car-text">Price : {vehicle.price}</p>
//                                 <p className="car-text">Mileage : {vehicle.mileage} </p>
//                                 <p className="car-text">Seats : {vehicle.seats} </p>
//                                 <p className="car-text">Color:  { vehicle.color} </p>
//                                 <p className="car-text">Fuel :  {vehicle.fuel } </p>
//                                 <p className="car-text">Gear :  { vehicle.gear} </p>
//                                 <p className="car-text">Description : {vehicle.description } </p>
//                             </div>
//                         </div>


//                     </div>


//                 ))}
//             </div>
//         </div>
//     )
// }


// export default VehicleList;

// import { useEffect, useState } from "react";
// import axios from 'axios';

// function VehicleList() {
//     const [vehicles, setVehicles] = useState([]);

//     useEffect(() => {
//         axios.get('http://localhost:5000/vehicles')
//             .then(response => {
//                 setVehicles(response.data);
//             })
//             .catch(error => {
//                 console.log('There was an error fetching the vehicles data!', error);
//             });
//     }, []);

//     return (
//         <div className="container mt-4">
//             <h2 className="text-center mb-4 text-primary">Vehicle List</h2>
//             <div className="row">
//                 {vehicles.map(vehicle => (
//                     <div className="col-md-4 mb-4" key={vehicle.id}>
//                         <div className="card border-primary shadow-sm">
//                             <img 
//                                 src={vehicle.image} 
//                                 className="card-img-top" 
//                                 height={250} 
//                                 alt={vehicle.name} 
//                                 style={{ objectFit: 'cover' }} 
//                             />
//                             <div className="card-body text-dark">
//                                 <h5 className="card-title text-primary">{vehicle.name}</h5>
//                                 <p className="card-text"><strong>Price:</strong> {vehicle.price}</p>
//                                 <p className="card-text"><strong>Mileage:</strong> {vehicle.mileage}</p>
//                                 <p className="card-text"><strong>Seats:</strong> {vehicle.seats}</p>
//                                 <p className="card-text"><strong>Color:</strong> {vehicle.color}</p>
//                                 <p className="card-text"><strong>Fuel:</strong> {vehicle.fuel}</p>
//                                 <p className="card-text"><strong>Gear:</strong> {vehicle.gear}</p>
//                                 <p className="card-text"><strong>Description:</strong> {vehicle.description}</p>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default VehicleList;


import { useEffect, useState } from "react";
import axios from 'axios';

function VehicleList() {
    const [vehicles, setVehicles] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/vehicles')
            .then(response => {
                setVehicles(response.data);
            })
            .catch(error => {
                console.log('There was an error fetching the vehicles data!', error);
            });
    }, []);

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-5 text-primary font-weight-bold">Explore Our Vehicles</h2>
            <div className="row">
                {vehicles.map(vehicle => (
                    <div className="col-md-4 mb-4" key={vehicle.id}>
                        <div className="card border-light shadow-lg rounded-lg overflow-hidden">
                            <img 
                                src={vehicle.image} 
                                className="card-img-top" 
                                height={250} 
                                alt={vehicle.name} 
                                style={{ objectFit: 'cover', borderBottom: '5px solid #007bff' }} 
                            />
                            <div className="card-body bg-light text-dark">
                                <h5 className="card-title text-success">{vehicle.name}</h5>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><strong>Price:</strong> {vehicle.price}</li>
                                    <li className="list-group-item"><strong>Mileage:</strong> {vehicle.mileage}</li>
                                    <li className="list-group-item"><strong>Seats:</strong> {vehicle.seats}</li>
                                    <li className="list-group-item"><strong>Color:</strong> {vehicle.color}</li>
                                    <li className="list-group-item"><strong>Fuel:</strong> {vehicle.fuel}</li>
                                    <li className="list-group-item"><strong>Gear:</strong> {vehicle.gear}</li>
                                    <li className="list-group-item"><strong>Description:</strong> {vehicle.description}</li>
                                </ul>
                                <div className="d-flex justify-content-between mt-3">
                                    <a href="#" className="btn btn-primary">View Details</a>
                                    <a href="#" className="btn btn-outline-success">Contact Us</a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default VehicleList;
