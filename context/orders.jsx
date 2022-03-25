import { createContext } from "react";
import { useState } from "react";
import produce from "immer";

const initialValue = {
  orders: [],
  canceled: [],
  submitOrder: (user, ticket) => {},
  cancelOrder: (id) => {},
};

export const OrdersContext = createContext(initialValue);

export default function OrdersProvider({ children }) {
  const [orders, setOrders] = useState([
    {
      id: 1,
      ticket: {
        id: 1,
        source: "Bakauheni",
        destination: "Merak",
        service: "ekonomi",
        date: "2020",
        time: "10",
        passengers: 1,
        price: 65000,
        status: "COMPLETED",
      },
    },
  ]);

  const [canceled, setCanceled] = useState([]);

  const submitOrder = (user, ticket) => {
    const nextState = produce(orders, (d) => {
      d.push({
        id: d.length + 1,
        user,
        ticket: { ...ticket, status: "COMPLETED" },
      });
    });

    setOrders(nextState);
  };

  const cancelOrder = (id) => {
    const found = orders.find((o) => o.id === id);
    if (!found) {
      return;
    }

    setCanceled(
      produce(canceled, (d) => {
        d.push({ ...found });
      })
    );

    setOrders(
      produce(orders, (d) => {
        const idx = d.findIndex((o) => o.id === id);
        if (idx !== -1) {
          d.splice(idx, 1);
        }
      })
    );
  };

  const value = {
    submitOrder: submitOrder,
    orders: orders,
    cancelOrder,
    canceled,
  };

  return (
    <OrdersContext.Provider value={value}>{children}</OrdersContext.Provider>
  );
}
