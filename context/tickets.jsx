import { createContext } from "react";
import { useEffect, useState } from "react";
import { getTicketsFakeAPI } from "../api/tickets";

const initialValue = {
  tickets: [],
  createdTicket: null,
  buyer: null,
  createTicket: (src, dst, service, date, time, passengers, price) => {},
  createBuyer: (ticketId, name, sex, age) => {},
};

export const TicketsContext = createContext(initialValue);

export default function TicketsProvider({ children }) {
  const [tickets, setTickets] = useState([]);
  const [createdTicket, setCreatedTicket] = useState(null);
  const [buyer, setBuyer] = useState(null);

  useEffect(() => {
    getTicketsFakeAPI().then(setTickets);
  }, []);

  const createTicket = (src, dst, service, date, time, passengers, price) => {
    setCreatedTicket({
      id: tickets.length + 1,
      source: src,
      destination: dst,
      service: service,
      date: date,
      time: time,
      passengers: passengers,
      price: price,
      status: "PENDING",
    });
  };

  const createBuyer = (ticketId, name, sex, age) => {
    setBuyer({
      ticketId: ticketId,
      name: name,
      sex: sex,
      age: age,
      timestamp: Date.now(),
    });
  };

  const value = {
    tickets,
    createTicket,
    createBuyer,
    createdTicket,
    buyer,
  };

  return (
    <TicketsContext.Provider value={value}>{children}</TicketsContext.Provider>
  );
}
