"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.emojiMe = exports.healthCheck = void 0;
const healthCheck = async (req, res) => {
    res.status(200).json({
        status: 'success',
        data: {
            message: 'Hello from server',
        },
    });
};
exports.healthCheck = healthCheck;
const emojiMe = (req, res) => {
    res.status(200).json({
        status: 'success',
        data: {
            hello: '😁',
        },
    });
};
exports.emojiMe = emojiMe;
//# sourceMappingURL=healthCheckController.js.map