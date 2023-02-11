"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default.set('strictQuery', true);
const url = process.env.MONGO_DB_URL;
const connectDB = async () => {
    try {
        await mongoose_1.default.connect(url);
        console.log("Connected to mongo DB: ");
    }
    catch (error) {
        console.log("Could not connect to MongoDB", error);
    }
};
exports.default = connectDB;
//# sourceMappingURL=connectDB.js.map