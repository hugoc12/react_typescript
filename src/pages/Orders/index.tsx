import './style.css';
import { useContext } from "react";
import { Context } from "../../contexts/ContextOrders";
import Button from "../../components/Button";
function Orders() {
    const context = useContext(Context);
    return (
        <>
            <h1>{context.name}</h1>
            <input id="inputName" placeholder="Digite seu nome..." className="inputName"/>
            <Button/>
        </>
    );
}

export default Orders;