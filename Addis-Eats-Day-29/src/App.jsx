import React, { useState } from "react";

//mport Header from "./components/Header";
import "./App.css";
import Cards from "./components/Cards";
import DeliveryForm from "./order/DeliveryForm";
import Mainheader from "./header/Mainheader";

function App() {

/*
 * The total belongs to App because
 * both Cards and Mainheader need it.
 */
const [total, setTotal] = useState(0);

return (
    <>

        {/* Website header */}

    


        {/* Displays the current order total */}

        <Mainheader
            total={total}
        />


        {/* Menu, categories, search and Add buttons */}

        <Cards
            onTotalChange={setTotal}
        />


        {/* TeleBirr delivery form */}

        <DeliveryForm />

    </>
);


}

export default App;
