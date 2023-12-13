// authenticateUser.js
const authenticateUser = (req, res, next) => {
    // Simulated authentication logic (replace this with actual authentication logic)
    const isLoggedIn = true; // Assume the user is authenticated
  
    if (isLoggedIn) {
      next(); // Continue to the next middleware or route handler
    } else {
      res.status(401).send('Unauthorized. Please log in.');
    }
  };
  
  module.exports = authenticateUser;
  