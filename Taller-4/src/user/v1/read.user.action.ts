import { UserModel, UserType } from "./user.model";
import users from "../../../data/data";


// DECLARE ACTION FUNCTION
async function readUserAction(): Promise<UserType[]> {
  // const results = await UserModel.find(users);
  return users;
}

// EXPORT ACTION FUNCTION
export default readUserAction;
