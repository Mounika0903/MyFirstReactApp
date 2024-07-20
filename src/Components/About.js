// import {Component} from 'react';


// class About extends Component{
//     render(){
//         return (
//             <div data-testid="about-content">
//                 <div className="container col-xxl-8 px-4 py-5">
//     <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
//       <div className="col-10 col-sm-8 col-lg-6">
//         <img src="https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg?auto=compress&cs=tinysrgb&w=600" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
//       </div>
//       <div className="col-lg-6">
//         <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">ABC Automobiles</h1>
//         <p className="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
//         <div className="d-grid gap-2 d-md-flex justify-content-md-start">
//           <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Vehicles</button>
//           <button type="button" className="btn btn-outline-secondary btn-lg px-4">Contact US</button>
//         </div>
//       </div>
//     </div>
//   </div>


//   <div className="row row-cols-1 row-cols-md-3 g-4">
//   <div className="col">
//     <div className="card h-100">
//       <img src="https://images.pexels.com/photos/6462662/pexels-photo-6462662.png?auto=compress&cs=tinysrgb&w=600" className="card-img-top" height={300} alt="..."/>
//       <div className="card-body">
//         <h5 className="card-title">Lamborghini</h5>
//         <p className="card-text">They pay attention to even the finest of details to streamline each model and make them incredibly aerodynamic. One of the best and fastest Lamborghinis ever produced is the Veneno, which can accelerate from 0-60 mph in just 2.8 seconds.</p>
//       </div>
//       <div className="card-footer">
//         <small className="text-body-secondary">Last updated 3 mins ago</small>
//       </div>
//     </div>
//   </div>
//   <div className="col">
//     <div className="card h-100">
//       <img src="https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top" height={300} alt="..."/>
//       <div className="card-body">
//         <h5 className="card-title">Mercedes-Benz</h5>
//         <p className="card-text">Performance. In addition to luxury, it's well known that Mercedes-Benz perform. That means more horsepower, torque, and speed. You'll enjoy easy handling, responsive and smooth steering, and clear views.</p>
//       </div>
//       <div className="card-footer">
//         <small className="text-body-secondary">Last updated 3 mins ago</small>
//       </div>
//     </div>
//   </div>
//   <div className="col">
//     <div className="card h-100">
//       <img src="https://images.pexels.com/photos/1035108/pexels-photo-1035108.jpeg?auto=compress&cs=tinysrgb&w=600" className="card-img-top" height={300} alt="..."/>
//       <div className="card-body">
//         <h5 className="card-title">Audi</h5>
//         <p className="card-text">Cutting-Edge Technology and Innovation: Audi is at the forefront of automotive innovation, consistently pushing the boundaries of technology to enhance the driving experience. From a customizable digital display to advanced driver assistance systems, it delivers on all fronts.</p>
//       </div>
//       <div className="card-footer">
//         <small className="text-body-secondary">Last updated 3 mins ago</small>
//       </div>
//     </div>
//   </div>
// </div>
//             </div>
//         )
//     }
// }
// export default About;

import { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div data-testid="about-content" className="bg-light text-dark">
                {/* Header Section */}
                <div className="container col-xxl-8 px-4 py-5">
                    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                        <div className="col-10 col-sm-8 col-lg-6">
                            <img
                                src="https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg?auto=compress&cs=tinysrgb&w=600"
                                className="d-block mx-lg-auto img-fluid rounded-circle shadow-lg"
                                alt="Bootstrap Themes"
                                width="700"
                                height="500"
                                loading="lazy"
                                style={{ border: '5px solid #f8f9fa' }} // Light border
                            />
                        </div>
                        <div className="col-lg-6">
                            <h1 className="display-5 fw-bold text-primary lh-1 mb-3">ABC Automobiles</h1>
                            <p className="lead text-secondary">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                                <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Vehicles</button>
                                <button type="button" className="btn btn-outline-primary btn-lg px-4">Contact Us</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Card Section */}
                <div className="container my-5">
                    <h2 className="text-center mb-4 text-primary">Our Top Vehicles</h2>
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        <div className="col">
                            <div className="card h-100 shadow-sm border-light">
                                <img
                                    src="https://images.pexels.com/photos/6462662/pexels-photo-6462662.png?auto=compress&cs=tinysrgb&w=600"
                                    className="card-img-top"
                                    height={300}
                                    alt="Lamborghini"
                                />
                                <div className="card-body">
                                    <h5 className="card-title text-primary">Lamborghini</h5>
                                    <p className="card-text">They pay attention to even the finest of details to streamline each model and make them incredibly aerodynamic. One of the best and fastest Lamborghinis ever produced is the Veneno, which can accelerate from 0-60 mph in just 2.8 seconds.</p>
                                </div>
                                <div className="card-footer">
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100 shadow-sm border-light">
                                <img
                                    src="https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                    className="card-img-top"
                                    height={300}
                                    alt="Mercedes-Benz"
                                />
                                <div className="card-body">
                                    <h5 className="card-title text-primary">Mercedes-Benz</h5>
                                    <p className="card-text">Performance. In addition to luxury, it's well known that Mercedes-Benz perform. That means more horsepower, torque, and speed. You'll enjoy easy handling, responsive and smooth steering, and clear views.</p>
                                </div>
                                <div className="card-footer">
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100 shadow-sm border-light">
                                <img
                                    src="https://images.pexels.com/photos/1035108/pexels-photo-1035108.jpeg?auto=compress&cs=tinysrgb&w=600"
                                    className="card-img-top"
                                    height={300}
                                    alt="Audi"
                                />
                                <div className="card-body">
                                    <h5 className="card-title text-primary">Audi</h5>
                                    <p className="card-text">Cutting-Edge Technology and Innovation: Audi is at the forefront of automotive innovation, consistently pushing the boundaries of technology to enhance the driving experience. From a customizable digital display to advanced driver assistance systems, it delivers on all fronts.</p>
                                </div>
                                <div className="card-footer">
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;
