"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authMiddleware = (allowedRules) => {
    return (req, res, next) => {
        var _a;
        const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(" ")[1];
        if (!token) {
            res.status(401).json({ message: "Unauthorized" });
            return;
        }
        try {
            const decoded = jsonwebtoken_1.default.decode(token);
            const userId = decoded.sub;
            const userRole = decoded["custom:role"] || "user";
            req.user = { id: userId, role: userRole };
            if (!allowedRules.includes(userRole.toLocaleLowerCase())) {
                res.status(403).json({ message: "Acess Denied" });
                return;
            }
        }
        catch (error) {
            console.error("Failed to decode token:", error);
            res.status(401).json({ message: "Unauthorized" });
            return;
        }
        next();
    };
};
exports.authMiddleware = authMiddleware;
