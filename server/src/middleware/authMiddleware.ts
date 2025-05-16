import { NextFunction, Request, Response } from 'express';
import jwt, { JwtPayload } from "jsonwebtoken";

interface DecodedToken extends JwtPayload {
    sub: string;
    "custom:role"?: string;
    "custom:tenantId"?: string;
}

declare global {
    namespace Express {
        interface Request {
            user?: {
                id: string;
                role: string;
            }
        }
    }
}

export const authMiddleware = (allowedRules: string[]) => {
    return (req: Request, res: Response, next: NextFunction): void => {
        const token = req.headers.authorization?.split(" ")[1];

        if (!token) {
            res.status(401).json({ message: "Unauthorized" });
            return
        }

        try {
            const decoded = jwt.decode(token) as DecodedToken
            const userId = decoded.sub;
            const userRole = decoded["custom:role"] || "user";

            req.user = { id: userId, role: userRole };

            if (!allowedRules.includes(userRole.toLocaleLowerCase())) {
                res.status(403).json({ message: "Acess Denied" });
                return;
            }

        } catch (error) {
            console.error("Failed to decode token:", error);
            res.status(401).json({ message: "Unauthorized" });
            return;
        }
        next();

    };
}