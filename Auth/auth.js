import jwt from "jsonwebtoken";
function isAthenticated(req, res, next) {
  const token =req.headers['authorization']?.split(' ')[1];
  // console.log(token)
  // Check for token in headers or cookies
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  // Verify the token
  jwt.verify(token,'RANDOM_TOKEN_SECRET', (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Token is invalid' });
    }
    req.user = decoded; // Attach user data to the request object
    next();
  });
}


export default isAthenticated