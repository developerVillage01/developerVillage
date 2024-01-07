// Data structure to be used as DB for now
let users = [
  { id: 1, firstName: "Steve", lastName: "Mbock", email: "steve_mbock@gmail.com" },
  { id: 2, firstName: "Caleb", lastName: "Ojong", email: "kk@gmail.com" },
  { id: 3, firstName: "Fritz", lastName: "Mokom", email: "fm2022@gmail.com" },
  { id: 4, firstName: "Okoye", lastName: "Bilikha", email: "ob@gmail.com" },
];

function getUsers() {
  return users;
}

function saveUser(user) {
  const numberOfUsers = users.length;
  const id = numberOfUsers + 1;
  users.push({id, ...user});
}

function deleteUser(id) {
  const numberOfUsers = users.length;
  users = users.filter((user) => user.id != id);
  return users.length !== numberOfUsers;
}

function replaceUser(id, user) {
  const foundUser = users.filter((usr) => usr.id == id);
  if (foundUser.length === 0) return false;
  users = users.map((usr) => {
    if (id == usr.id) {
      usr = { id: usr.id, ...user };
    }
    return usr;
  });
  return true;
}

const Users = function () {};

Users.prototype.getUsers = getUsers;
Users.prototype.saveUser = saveUser;
Users.prototype.deleteUser = deleteUser;
Users.prototype.replaceUser = replaceUser;

module.exports = new Users();
