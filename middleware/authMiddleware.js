import { UnauthenticatedError, UnauthorizrdError, BadRequestError } from '../errors/customErrors.js';
import { verifyJWT } from '../utils/tokenUtils.js';

export const authenticateUser =  (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    throw new UnauthenticatedError('authentication invalid');
  }

  try {
    const { userId, role } = verifyJWT(token);
    const testUser= userId === '651d764a7d11d999a7bfc120';
    req.user = { userId, role, testUser};
    next();
  } catch (error) {
    throw new UnauthenticatedError('authentication invalid');
  }
};

export const autherizePermissions =(...roles)=>{
  return (req, res, next)=>{
   if(!roles.includes(req.user.role)){
    throw new UnauthorizrdError('Unauthorized to access this route')
   }
  next();
  };
};

export const checkForTestUser = (req, res, next) => {
  if (req.user.testUser) throw new BadRequestError('Demo User. Read Only!');
  next();
};