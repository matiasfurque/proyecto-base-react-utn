const users = [
  {
    id: 1,
    firstName: "Lionel ",
    lastName: "Messi",
    email: "lionel.messi@gmail.com",
    password: "pepe123",
    address: { country: "Argentina" },
    image: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQOsdbCH2-v4N2LrHIP9CMgDS-GysecMBSsvOX_KkjLCwjbkL0Hgnuou6RC1uXDtxYJujgJna162FkPS3lygZBsI-zDGji3rIIJqc8nTyIqn5rrqNNism3fioo6X5TjjXsEUPMFVU1MoSs&s=19",
    messages: [
      { author: "lionel", text: "Hola amigo", time: "09:12" , isMine: false },
      { author: "me", text: "Hola lio", time: "09:13" , isMine: true }
    ]
  },
  {
    id: 2,
    firstName: "Lautaro ",
    lastName: " Martinez",
    email: "lautaro.martinez@gmail.com",
    password: "pepe123",
    address: { country: "Argentina" },
    image: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTJbnEvXy5kVQwftpns2g49YwcB1AJW2mn8Z02UCVCn4JODoRQ-ho4AiNxUB6iHjYDFvSnfL54D6K7G6LJGRutIRetSUwDYFx_Ccph5rXZ7HDlI1eRx97sZgSOgAhkx9I88DN63iWsYttza&s=19",
    messages: [
      { author: "Lautaro", text: "Sale fulbo?", time: "10:01", isMine: false },
      { author: "me", text: "Obvio amigo", time: "10:05", isMine: true }
    ]
  },
  {
    id: 3,
    firstName: "Rodrigo",
    lastName: " De Paul",
    email: "rodrigo.dePaul@gmail.com",
    password: "pepe123",
    address: { country: "Argentina" },
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-Pe2-BvRLTdmCcP-VRDiV_HA3mcpiAu_hB0vo6kTAmnVPOEJ7YPMrvrCRqWrErYS1SXiRGdv1sHjHL8bVYpAh0M4ha_xyf5wPvlOu2qbhPA&s=10",
    messages: [
      { author: "Rodrigo", text: "Que haces el finde??💣💣", time: "11:22", isMine: false },
      { author: "me", text: "No jodas rodri", time: "11:30", isMine: true }
    ]
  },
  {
    id: 4,
    firstName: "Neymar",
    lastName: "da Silva Santos Júnior",
    email: "neymar.daSilva@gmail.com",
    password: "pepe123",
    address: { country: "Brasil" },
    image: "https://images.ctfassets.net/3mv54pzvptwz/7Jj4ryLGJazS8pDUlCK2Vg/10b71577e0270c8158d669b5fca17aa9/54331642772_05fa9ffe6b_o_dentro.jpg",
    messages: [
      { author: "Neymar", text: "E aí, amigo, tudo bem? Faz tempo que não nos falamos!", time: "12:10", isMine: false },
      { author: "me", text: "Está tudo calmo por aqui, Ney, você está bem?", time: "12:11", isMine: true }
    ]
  },
  {
    id: 5,
    firstName: "Federico ",
    lastName: " Fattori",
    email: "federico.fattori@gmail.com",
    password: "pepe123",
    address: { country: "Argentina" },
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq817DvaYm9FgFtDFgycT3m6efKMmruJT96g&s",
    messages: [
      { author: "Federico", text: "Amigo me falta uno para el domingo estas?", time: "13:45", isMine: false },
      { author: "me", text: "Yyyy dejame que lo chequeo", time: "13:50",isMine: true }
    ]
  },
  {
    id: 6,
    firstName: "Cristian",
    lastName: " Gomez",
    email: "cristian.gomez@gmail.com",
    password: "pepe123",
    address: { country: "Argentina" },
    image: "https://tn.com.ar/resizer/v2/christian-gomito-gomez-leyenda-del-futbol-argentino-telam-TQL3J3W4VBG4JNOJ3FIT4JC4QM.jpg?auth=663bea068bab769cf5be95f7d0257eeb49ec98b1f334250a214f5059456c066c&width=767",
    messages: [
      { author: "Cristian", text: "Vas a la cancha el viernes?", time: "14:03", isMine: false },
      { author: "me", text: "obvio", time: "14:04", isMine: true }
    ]
  },
  {
    id: 7,
    firstName: "Alejandro",
    lastName: " Garnacho",
    email: "alejandro.garnacho@gmail.com",
    password: "pepe123",
    address: { country: "Argentina" },
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjmJhFKZfB6JzHDp97yQfZ1r2Ra8nU1OzL_axdLkeJRqexEcFEHRbQeS1y4A_79QK7UvtIPrjGffF3wfjOT2UcQGv4xXISSNyqJeSPVp8&s=10",
    messages: [
      { author: "Alejandro", text: "Ostia", time: "15:20", isMine: false },
      { author: "me", text: "Eh?", time: "15:22", isMine: true }
    ]
  },
  {
    id: 8,
    firstName: "Javier",
    lastName: " Zanetti",
    email: "javier.zanetti@gmail.com",
    password: "pepe123",
    address: { country: "Argentina" },
    image: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRQ7twKa0IIYc6FlkIYKJkzwjvovEdrHLH8kTntnTRmgaM-6isorqQ47HHNoGITwKhv284e5qdZT-J1AbWZ8O4S5klGoNov8H52pUcZo1Ds_pbedvF6R5DWMo5nOCIBSSqNYxBCfiTXTpBO&s=19",
    messages: [
      { author: "Javier", text: "Client contacted", time: "16:18", isMine: false },
      { author: "me", text: "Waiting response", time: "16:25", isMine: true }
    ]
  },
  {
    id: 9,
    firstName: "Osvaldo",
    lastName: "Garcia",
    email: "osvaldo.garcia@gmail.com",
    password: "pepe123",
    address: { country: "Argentina" },
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNwjMZcI4RMS-HQIP-b8_vFuG-nud6hY4CUQ&s",
    messages: [
      { author: "Osvaldo Garcia", text: "Que equipo paro?", time: "17:02", isMine: false },
      { author: "me", text: "Que se yo? vos sos el DT", time: "17:05", isMine: true }
    ]
  },
  {
    id: 10,
    firstName: "Reece",
    lastName: "James",
    email: "reece.james@gmail.com",
    password: "pepe123",
    address: { country: "Inglaterra" },
    image: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSow_sZyLo0_wuNZv4R9HftjHrMZuv550XkdYLSbsH9d8smVCojl0Mhm_Np5WfkVoDcV0FGCv6sOwDreRO99O306ogSMkcoodQ6fsUzYxcAc1uPzFI6-skfdEQCIjq89okJkNeBa4mte-s&s=19",
    messages: [
      { author: "Reece James", text: "Meeting confirmed", time: "18:40", isMine: false },
      { author: "me", text: "See you then", time: "18:41", isMine: true }
    ]
  }
];

export { users }