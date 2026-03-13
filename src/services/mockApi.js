const users = [
  { id: 1, name: 'Lionel Messi', status: 'online' },
  { id: 2, name: 'Lautaro Martinez', status: 'online' },
  { id: 3, name: 'Julian Alvarez', status: 'online' },
  { id: 4, name: 'Federico Fattori', status: 'offline' },
  { id: 5, name: 'Lisandro Martinez', status: 'online' },
];

const messages = [
  {id: 1, author: "Lionel Messi", text: 'Hola, ¿cómo estás?', time: '10:00 AM' },
  {id: 2, author: "me", text: 'Bien, gracias. ¿Y tú?', time: '10:05 AM' },
  {id: 3, author: "Lionel Messi", text: 'Hoy sale fulbito?', time: '10:10 AM' },
  {id: 4, author: "me", text: 'Mas vale leo', time: '10:15 AM' },
  {id: 5, author: "Lionel Messi", text: 'Dale, a qué hora?', time: '10:20 AM' },
  {id: 6, author: "me", text: 'A las 8pm', time: '10:25 AM' }
];

export { users , messages};
