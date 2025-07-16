import jwt from "jsonwebtoken";
const JWT_SECRET = process.env.JWT_SECRET;

export function authenticateToken(req, res, next) {
  if (!JWT_SECRET) {
    return res.status(500).json({ message: "JWT secret not configured" });
  }
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Token required" });

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch {
    res.status(403).json({ message: "Invalid token" });
  }
}
