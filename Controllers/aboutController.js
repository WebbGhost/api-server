"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEmails = exports.getWorks = exports.getBrands = exports.getTestimonials = exports.getExperience = exports.getSkills = exports.getAbouts = void 0;
const about_1 = require("../json/about");
const getAbouts = async (req, res) => {
    res.status(200).json({
        about: about_1.about,
    });
};
exports.getAbouts = getAbouts;
const getSkills = async (req, res) => {
    res.status(200).json({
        skills: about_1.skills,
    });
};
exports.getSkills = getSkills;
const getExperience = async (req, res) => {
    res.status(200).json({
        experiences: about_1.experiences,
    });
};
exports.getExperience = getExperience;
const getTestimonials = async (req, res) => {
    res.status(200).json({
        Testimonials: about_1.Testimonials,
    });
};
exports.getTestimonials = getTestimonials;
const getBrands = async (req, res) => {
    res.status(200).json({
        Brands: about_1.Brands,
    });
};
exports.getBrands = getBrands;
const getWorks = async (req, res) => {
    res.status(200).json({
        works: about_1.works,
    });
};
exports.getWorks = getWorks;
const getEmails = async (req, res) => {
    const data = req.body;
    console.log(data);
    res.status(200).json({
        message: 'success',
    });
};
exports.getEmails = getEmails;
//# sourceMappingURL=aboutController.js.map