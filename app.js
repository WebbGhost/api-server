"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const dotenv_1 = __importDefault(require("dotenv"));
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
const express_mongo_sanitize_1 = __importDefault(require("express-mongo-sanitize"));
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const middlewares = __importStar(require("./helpers/middlewares"));
const healthCheck_1 = __importDefault(require("./Routes/healthCheck"));
const aboutRouter_1 = __importDefault(require("./Routes/aboutRouter"));
const app = (0, express_1.default)();
// Middlewares
app.use(express_1.default.json({ limit: '10kb' }));
app.use(express_1.default.urlencoded({ extended: true, limit: '10kb' }));
app.use((0, cookie_parser_1.default)());
app.use((0, express_mongo_sanitize_1.default)());
app.use((0, morgan_1.default)('common'));
app.use((0, helmet_1.default)());
app.use((0, express_mongo_sanitize_1.default)());
app.use((0, cors_1.default)({
    origin: '*',
}));
dotenv_1.default.config();
app.disable('x-powered-by');
const limiter = (0, express_rate_limit_1.default)({
    max: 100,
    windowMs: 60 * 60 * 1000,
    message: 'Too many requests from this IP, please try again in an hour!',
});
app.use('/api', limiter);
// Routes
app.get('/', (req, res) => {
    res.status(200).json({
        status: 'success',
        data: {
            message: 'success',
        },
    });
});
// Error Handling Middlewares
app.use('/api/v1/', healthCheck_1.default);
app.use('/api/v1/', aboutRouter_1.default);
app.use(middlewares.errorHandler);
app.use(middlewares.notFound);
exports.default = app;
//# sourceMappingURL=app.js.map