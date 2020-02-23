import jwt from "jsonwebtoken";

export default async (request, response, next) => {
    const authHeader = request.headers.auth;

    if (!authHeader) {
        return res.status(401).json({ error: 'Token not provided' });
    }

    const [, token] = authHeader.split(' ');

    try {
      const decoded = await promisify(jwt.verify)(token, authConfig.secret);

      req.userId = decoded.id;
      
      return next();
    } catch (err) {
      return res.status(401).json({ error: 'Token invalid' });
    }
}; 