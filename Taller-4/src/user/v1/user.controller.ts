import readUserAction from "./read.user.action";
import { UserType } from "./user.model";

// DECLARE CONTROLLER FUNCTIONS
async function readUsers(): Promise<UserType[]> {
  const users = await readUserAction();  
  return users;
}

async function readUsersByHobby(hobbies: string): Promise<UserType[]> {
  const allUsers = await readUsers(); // Get all users
  return allUsers.filter(user => user.hobbies.includes(hobbies)); // Filter by hobby
}

async function userExists(id:number) {
  const allUsers = await readUsers(); // Get all users
  return allUsers.find(user => user.id === id); // Filter by hobby
}

async function totalExperiencefromTeam(team:string) {
  const allUsers = await readUsers(); // Get all users
  return allUsers.filter(user => user.team === team).reduce((acc, user) => acc + user.years, 0); // Filter by team
}

async function usersByFaction(faction:string) {
  const allUsers = await readUsers(); // Get all users
  return allUsers.filter(user => user.faction === faction); // Filter by faction
}

async function createUser(user: UserType) {
  const allUsers = await readUsers();
  const { id, name, hobbies, years, team, faction } = user;
  if (!id || !name || !hobbies || !years || !team || !faction) {
    return "Missing required fields";
  }

  const existingUser = allUsers.find(user => user.id === id);
  if (existingUser) {
    return "User with this ID already exists";
  }

  const newUser = { ...user };
  allUsers.push(newUser);
  return "User created successfully";
}

// EXPORT CONTROLLER FUNCTIONS
export { readUsers, readUsersByHobby, userExists, totalExperiencefromTeam, usersByFaction, createUser };
