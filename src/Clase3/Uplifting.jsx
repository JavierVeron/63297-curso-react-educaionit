import { useState } from "react";
import CurrencyField from "./CurrencyField";

const Uplifting = () => {
    const [value, setValue] = useState(0);
    const [divisa, setDivisa] = useState("");
    const cambio = 500;

    const modificarValorDolar = (valor) => {
        setDivisa("USD");
        setValue(valor);
    }

    const modificarValorPeso = (valor) => {
        setDivisa("ARS");
        setValue(valor);
    }

    const usdValue = divisa === "ARS" ? value / cambio : value;
    const arsValue = divisa === "USD" ? value * cambio : value;

    return (
        <div>
            <h1>Uplifting</h1>
            <CurrencyField divisa={"USD"} value={usdValue} onChange={modificarValorDolar} />
            <CurrencyField divisa={"ARS"} value={arsValue} onChange={modificarValorPeso} />
        </div>
    )
}

export default Uplifting;