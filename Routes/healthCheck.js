"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const healthCheckController_1 = require("../Controllers/healthCheckController");
const router = express_1.default.Router();
router.get('/', healthCheckController_1.healthCheck);
router.get('/emojis', healthCheckController_1.emojiMe);
exports.default = router;
//# sourceMappingURL=healthCheck.js.map