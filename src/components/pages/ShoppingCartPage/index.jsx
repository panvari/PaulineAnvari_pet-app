import "./styles.css";
import { useContext, useState, useEffect } from "react";
import PetsOrderContext from "../../../context/petsOrderContext";
import { OrderItem } from "../../order-item";
import { Button } from "../../button";

import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useHistory } from "react-router-dom";

export const ShoppingCartPage = () => {

  const [order, setOrder] = useState([]);

  const globalState = useContext(PetsOrderContext);

  const history = useHistory();

    //check if user is logged in
    useEffect(
      () => {
        
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
          if (!user) {
            history.push('/login');
          }
        })
      }, []
    );

  useEffect (
    () => {
      setOrder(globalState.order);
    }, [globalState]
  )

  return (
    <div className="pets-page">
      <h1 className="pets-title">My Shopping Cart</h1>
      <div className="order">
        {
          order.map((item) => <OrderItem image={item.image} 
          id={item.id} name={item.name} age={item.age}/>)
        }
        {
          order.length === 0 && <p>Your cart is empty.</p>
        }
      </div>
      <Button text="Checkout" type="primary"/>
    </div>
  );
};
