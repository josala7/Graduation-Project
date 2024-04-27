import Cookies from "js-cookie";
import jwt from "jsonwebtoken";

export const useCurrentUser = () => {
  const token = localStorage.getItem("token");

  if (!token) {
    return false;
  }

  try {
    const decoded = jwt.decode(token);

    if (!decoded) {
      throw new Error("Invalid token");
    }

    const user: UserCurrentUser = {
      userEmail: decoded.userEmail,
      userGroup: decoded.userGroup,
      imageProfile: decoded.imageProfile,
      phoneNumber: decoded.phoneNumber,
      businessOwner: decoded.businessOwner,
      driver: decoded.driver,
      roles: decoded.roles,
    };

    return user;
  } catch (error) {
    return false;
  }
};
