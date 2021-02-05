import bcrypt from "bcryptjs";

const users = [
  {
    name: "tejas",
    email: "test@test.com",
    password: bcrypt.hashSync("12", 10),
    isAdmin: true,
  },
  {
    name: "tejas2",
    email: "test2@test.com",
    password: bcrypt.hashSync("12", 10),
    isAdmin: false,
  },
  {
    name: "kunal",
    email: "test3@test.com",
    password: bcrypt.hashSync("12", 10),
    isAdmin: false,
  },
];

export default users;
