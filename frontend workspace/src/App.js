import EmployeeListComponent from "./component/EmployeeListComponent"
import FooterComponent from "./component/FooterComponent"
import HeaderComponent from "./component/HeaderComponet"
import "./App.css";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import CreateEmployeeComponent from "./component/CreateEmployeeComponent";

import UpdateEmployeeComponent from "./component/UpdateEmployeeComponent.";

// import EmployeeModal from "./component/EmployeeModal/EmployeeModal";


function App() {
  return (

    <div>

      <HeaderComponent />
      <BrowserRouter>
            <div  className="Container" >

              <Routes>
                  <Route exact path="/" element={<EmployeeListComponent/>}></Route>
                  <Route path="/employees" element={<EmployeeListComponent/>}></Route>
                  <Route path="/add-emp" element={<CreateEmployeeComponent/>}></Route>
                  <Route path="/update-emp/:id" element={<UpdateEmployeeComponent/>}></Route>
              </Routes>
            </div>
          </BrowserRouter>
      <FooterComponent />
    </div>
  )

}
export default App