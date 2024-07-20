// function Footer(){
//     return (
//       <>
//       <div className="container">
//   <footer className="py-3 my-4">
//     <ul className="nav justify-content-center border-bottom pb-3 mb-3">
//       <li className="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Home</a></li>
//       <li className="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">About Us</a></li>
//       <li className="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Vehicles</a></li>
//       <li className="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Servcies</a></li>
//       <li className="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Contact US</a></li>
//     </ul>
//     <div data-testid="footer-content">
//     <p className="text-center text-body-secondary">© 2024 ABC Automobiles</p>
//     </div>
//   </footer>
// </div>
//       </>
 
//     )
//   }


// export default Footer;


function Footer() {
  return (
      <footer className="py-4 mt-5 bg-dark text-white">
          <div className="container">
              <ul className="nav justify-content-center border-bottom border-secondary pb-3 mb-4">
                  <li className="nav-item">
                      <a href="#" className="nav-link px-3 text-light">Home</a>
                  </li>
                  <li className="nav-item">
                      <a href="#" className="nav-link px-3 text-light">About Us</a>
                  </li>
                  <li className="nav-item">
                      <a href="#" className="nav-link px-3 text-light">Vehicles</a>
                  </li>
                  <li className="nav-item">
                      <a href="#" className="nav-link px-3 text-light">Services</a>
                  </li>
                  <li className="nav-item">
                      <a href="#" className="nav-link px-3 text-light">Contact Us</a>
                  </li>
              </ul>
              <div className="text-center mt-3">
                  <p className="mb-0">© 2024 ABC Automobiles. All rights reserved.</p>
              </div>
          </div>
      </footer>
  );
}

export default Footer;
