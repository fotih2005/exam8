import sign from "../../utils/jwt.js";
import { costumErrorHandeler } from "../../errors/errorHandler.js";
import { foundUser } from "./model.js";

export default {
  LOGIN: async (req, res, next) => {
    const { name, password } = req.query;
    const getuser = await foundUser(name, password).catch((err) => {
      next(new costumErrorHandeler(err.message, 404));
    });
    if (getuser.length > 0) {
      res.cookie("token", sign({ id: getuser[0].user_id, role: getuser[0].user_role }));
      res.redirect('/admin')
    } else {
      res.status(404).json({
        status: 404,
        message: "User not found",
      });
    }
  },
};
