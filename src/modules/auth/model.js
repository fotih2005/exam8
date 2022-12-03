import { fetchData } from "../../utils/postgres.js";

const found_user = `
    select 
        * 
    from 
        users 
    where 
        user_name = $1
    and 
        user_password = crypt($2, user_password);
`;

export const foundUser = (name, password) =>
  fetchData(found_user, name, password);
