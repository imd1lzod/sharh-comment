import { BaseException } from "../exception/base-exception.js";

export const checkRoles = (...roles) => {
  return (req, res, next) => {
    const role = req.user.role;
    console.log(role);
    

    if (!roles.includes(role)) {
      return next(
        new BaseException("Sizda bu amalni bajarishga ruxsat yoq!", 403)
      );
    }
  };
};


