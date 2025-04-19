import jwtConfig from "../config/jwt.config.js";
import { BaseException } from "../exception/base-exception.js";
import jwt from "jsonwebtoken";

export const checkToken = (must) => {
  return (req, rs, next) => {

    if (!must) {
        req.role = "user"
        return next()
    }

    const accessToken = req.cookies.accessToken;
    const refreshToken = req.cookies.refreshToken;

    if (!accessToken && refreshToken) {
      return new BaseException("Token mavjud emas", 400);
    }

    if (!accessToken) {
      try {
        const data = jwt.verify(refreshToken, jwtConfig.REFRESH_TOKEN_SECRET);

        const newAccessToken = jwt.sign(data, jwtConfig.ACCESS_TOKEN_SECRET, {
          expiresIn: jwtConfig.ACCESS_TOKEN_EXPIRE,
          algorithm: "HS256",
        });

        const newRefreshToken = jwt.sign(data, jwtConfig.REFRESH_TOKEN_SECRET, {
          expiresIn: jwtConfig.REFRESH_TOKEN_EXPIRE,
          algorithm: "HS256",
        });

        res.cookies("accessToken", newAccessToken);
        res.cookies("refreshToken", newRefreshToken);
      } catch (error) {
        return next(new BaseException("Refresh token xato", 403));
      }
    }

    try {
      const decodedData = jwt.verify(
        accessToken,
        jwtConfig.ACCESS_TOKEN_SECRET
      );

      req.role = decodedData.role;
      req.user = decodedData.user;

      next();
    } catch (err) {
      if (err instanceof jwt.TokenExpiredError) {
        return next(new BaseException("Token muddati eskirgan", 406));
      } else if (err instanceof jwt.JsonWebTokenError) {
        return next(
          new BaseException("JWT token xato formatda yuborildi", 400)
        );
      } else if (err instanceof jwt.NotBeforeError) {
        return next(new BaseException("Not Before Error", 409));
      } else {
        next(err);
      }
    }
  };
};
