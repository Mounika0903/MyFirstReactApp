

// // // import { useState } from "react";


// // // function Home(){
// // //     const [count,setCount] = useState(0);




// // //     return (
// // //         <>
// // //         <h1>Home Component</h1>
// // //         <div className="counter">
// // //             <h6>Counter : {count}</h6>
// // //             <button type="button" class="btn btn-primary" onClick={()=>setCount(count+1)}>Increase</button>
// // //             <button type="button" class="btn btn-secondary" onClick={()=>setCount(count-1)}>Decrease</button>
// // //         </div>
// // //         </>
// // //     )
// // // }


// // // export default Home;


// // import { useState } from "react";

// // function Home() {
// //     const [count, setCount] = useState(0);

// //     return (
// //         <div className="container d-flex flex-column align-items-center justify-content-center vh-100" style={{ backgroundImage: 'url(https://example.com/path/to/your/background.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
// //             <div className="card shadow-lg p-3 mb-5 bg-white rounded" style={{ maxWidth: '400px', width: '100%', opacity: 0.9 }}>
// //                 <img src="https://images.pexels.com/photos/9702349/pexels-photo-9702349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top" alt="Card Image" style={{ height: '200px', objectFit: 'cover' }}/>
// //                 <div className="card-body text-center">
// //                     <h1 className="card-title mb-4">Home Component</h1>
// //                     <h6 className="card-subtitle mb-3 text-muted">Counter: {count}</h6>
// //                     <div className="d-flex justify-content-around">
// //                         <button
// //                             type="button"
// //                             className="btn btn-primary"
// //                             onClick={() => setCount(count + 1)}
// //                         >
// //                             Increase
// //                         </button>
// //                         <button
// //                             type="button"
// //                             className="btn btn-secondary"
// //                             onClick={() => setCount(count - 1)}
// //                         >
// //                             Decrease
// //                         </button>
// //                     </div>
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // }

// // export default Home;


// import { useState } from "react";
// // import './index.css';

// function Home() {
//     const [count, setCount] = useState(0);

//     return (
//         <div className="container-background">
//             <div className="card card-custom shadow-lg p-3 mb-5 bg-white rounded">
//                 <img 
//                     src="https://images.pexels.com/photos/9702349/pexels-photo-9702349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
//                     className="card-img-top card-img-top-custom" 
//                     alt="Card Image"
//                 />
//                 <div className="card-body text-center">
//                     <h1 className="card-title mb-4">Home Component</h1>
//                     <h6 className="card-subtitle mb-3 text-muted">Counter: {count}</h6>
//                     <div className="d-flex justify-content-around">
//                         <button
//                             type="button"
//                             className="btn btn-primary"
//                             onClick={() => setCount(count + 1)}
//                         >
//                             Increase
//                         </button>
//                         <button
//                             type="button"
//                             className="btn btn-secondary"
//                             onClick={() => setCount(count - 1)}
//                         >
//                             Decrease
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Home;

import { useState } from "react";

function Home() {
    const [count, setCount] = useState(0);

    return (
        <div className="container d-flex flex-column align-items-center justify-content-center vh-100" style={{ backgroundImage: 'url(https://example.com/path/to/your/background.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          
            <div className="card shadow-lg p-3 mb-5 bg-white rounded" style={{ maxWidth: '400px', width: '100%', opacity: 0.9 }}>
                <img 
                    src="https://images.pexels.com/photos/9702349/pexels-photo-9702349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    className="card-img-top" 
                    alt="Card Image" 
                    style={{ width: '100%', height: '200px', objectFit: 'cover' }} 
                />
                <div className="card-body text-center">
                    <h1 className="card-title mb-4">Home Component</h1>
                    <h6 className="card-subtitle mb-3 text-muted">Counter: {count}</h6>
                    <div className="d-flex justify-content-around">
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={() => setCount(count + 1)}
                        >
                            Increase
                        </button>
                        <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={() => setCount(count - 1)}
                        >
                            Decrease
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
