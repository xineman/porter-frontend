import jwt from 'jsonwebtoken';


export const getUserFromToken = (token) => { // eslint-disable-line
  let decoded;
  if (token) {
    decoded = jwt.decode(token);
  }
  if (!token || !decoded) {
    return {
      isLoggedIn: false,
      name: null,
    };
  }
  return {
    isLoggedIn: true,
    name: decoded.name,
  };
};
