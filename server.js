"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const connectDB_1 = __importDefault(require("./helpers/connectDB"));
const PORT = process.env.PORT || 5000;
const startServer = async () => {
    await (0, connectDB_1.default)();
    app_1.default.listen(PORT, () => {
        console.log(`Server listening on http://localhost:${PORT}`);
    });
};
startServer()
    .then(() => {
    console.log('Served');
})
    .catch((err) => {
    console.error(err);
});
//# sourceMappingURL=server.js.map