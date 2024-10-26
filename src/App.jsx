import Add_address from "./AddAddress/Add_address";
import Address_lits from "./AddressList/Address_lits";
// import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Address_lits />} />
          <Route path="add" element={<Add_address />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
