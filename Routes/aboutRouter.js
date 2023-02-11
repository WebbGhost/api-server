"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const aboutController_1 = require("../Controllers/aboutController");
const router = express_1.default.Router();
router.get('/abouts', aboutController_1.getAbouts);
router.get('/skills', aboutController_1.getSkills);
router.get('/experiences', aboutController_1.getExperience);
router.get('/testimonials', aboutController_1.getTestimonials);
router.get('/brands', aboutController_1.getBrands);
router.get('/works', aboutController_1.getWorks);
router.post('/emails', aboutController_1.getEmails);
exports.default = router;
//# sourceMappingURL=aboutRouter.js.map