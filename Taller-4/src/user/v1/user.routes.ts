import { Router, Request, Response } from "express";
import { readUsers, readUsersByHobby, userExists, totalExperiencefromTeam, usersByFaction, createUser } from "./user.controller";

// INIT ROUTES
const userRoutes = Router();

// DECLARE ENDPOINT FUNCTIONS
async function GetUsers(request: Request, response: Response) {
  const users = await readUsers();

  response.status(200).json({
    message: "Success.",
    users: users,
  });
}

// DECLARE ENDPOINTS
userRoutes.get("/", GetUsers);

userRoutes.get("/hobby", async (req: Request, res: Response) => {
  const { hobbies } = req.query; // Get the hobby from the query parameters

  if (typeof hobbies !== "string") {
    return res.status(400).json({ message: "Hobby must be a string." });
  }

  try {
    const filteredUsers = await readUsersByHobby(hobbies); // Call the controller function
    res.status(200).json(filteredUsers); // Return filtered users
  } catch (error) {
    console.error("Error retrieving users by hobby:", error);
    res.status(500).json({ message: "Error retrieving users." });
  }
});

userRoutes.get("/exists", async (req: Request, res: Response) => {
  const { id } = req.query; // Obtén el id de los parámetros de la query

  // Convertir id a número
  const numericId = Number(id);

  // Verificar si el id es un número válido
  if (isNaN(numericId)) {
    return res.status(400).json({ message: "Id must be a valid number." });
  }

  try {
    const user = await userExists(numericId); // Llama a la función del controlador con id numérico
    res.status(200).json({
      exists: !!user, // Devuelve true si el usuario existe, false si no
      user: user, // Devuelve el usuario si existe
    }); // Retorna el usuario filtrado
  } catch (error) {
    console.error("Error retrieving users by id:", error);
    res.status(500).json({ message: "Error retrieving users." });
  }
});


userRoutes.get("/team-experience", async (req: Request, res: Response) => {
  const { team } = req.query; // Get the team from the query parameters

  if (typeof team !== "string") {
    return res.status(400).json({ message: "Team must be a string." });
  }

  try {
    const totalExperience = await totalExperiencefromTeam(team); // Call the controller function
    res.status(200).json({ totalExperience }); // Return total experience
  } catch (error) {
    console.error("Error retrieving total experience by team:", error);
    res.status(500).json({ message: "Error retrieving total experience." });
  }
});

userRoutes.get("/by-faction", async (req: Request, res: Response) => {
  const { faction } = req.query; // Get the faction from the query parameters

  if (typeof faction !== "string") {
    return res.status(400).json({ message: "Faction must be a string." });
  }

  try {
    const users = await usersByFaction(faction); // Call the controller function
    res.status(200).json({
      faction: faction,
      users: users,
    }); // Return filtered users
  } catch (error) {
    console.error("Error retrieving users by faction:", error);
    res.status(500).json({ message: "Error retrieving users." });
  }
});

userRoutes.post("/", async (req: Request, res: Response) => {
  const user = req.body; // Get the user from the request body

  try {
    const result = await createUser(user); // Call the controller function
    res.status(200).json({ message: result }); // Return the result
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Error creating user." });
  }
});

// EXPORT ROUTES
export default userRoutes;
