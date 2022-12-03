import jwt from "jsonwebtoken";

function userMiddle(req, res, next) {
  const { token } = req.cookies;
  if (token) {
    const { role } = jwt.verify(token, "1Q2W3E4R5T");
    if (role == "admin") {
      next();
    } else {
      res.send("you are not admin");
    }
  } else {
    res.status(404).json({
      status: 404,
      message: 'Token is not defined'
    })
  }
}

export default userMiddle;
