const fakeTickets = [
  {
    id: 1,
    source: "Bakauheni",
    destination: "Merak",
  },
  {
    id: 2,
    source: "Bakauheni",
    destination: "Merak",
  },
];

export function getTicketsFakeAPI() {
  return new Promise((resolve, _) => {
    resolve(fakeTickets);
  });
}
