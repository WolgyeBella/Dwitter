let users = [
  {
    id: "1",
    name: "Bob",
    username: "bob",
    password: "$2b$10$89T6lqDw5QekFVZGVeIse.AR6cbHfEZ4E1PRKPTMPHNk5vDDCmsQy",
    email: "bob@gmail.com",
    url: "https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-1.png",
  },
  {
    id: "2",
    name: "Ellie",
    username: "ellie",
    password: "$2b$10$89T6lqDw5QekFVZGVeIse.AR6cbHfEZ4E1PRKPTMPHNk5vDDCmsQy",
    email: "ellie@gmail.com",
  },
];

export async function findByUsername(username) {
  return users.find((user) => user.username === username);
}

export async function findById(id) {
  return users.find((user) => user.id === id);
}

export async function createUser(user) {
  const created = { ...user, id: Date.now().toString() };
  users.push(created);
  return created.id;
}
