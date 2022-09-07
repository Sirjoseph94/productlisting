"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usersController_1 = require("../Controller/usersController");
const authMiddleware_1 = require("../helpers/authMiddleware");
const router = (0, express_1.Router)();
router.post("/login", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const response = yield (0, usersController_1.loginUser)(data);
        res.status(200).json({ token: response });
    }
    catch (error) {
        console.log(error);
        res.status(400).json({ error });
    }
}));
router.post("/register", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const response = yield (0, usersController_1.registerUser)(data);
        res.status(201).json({ response });
    }
    catch (error) {
        res.status(400).json({ error });
    }
}));
router.get("/", authMiddleware_1.auth, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.user.user_id;
        const response = yield (0, usersController_1.userProducts)(userId);
        res.status(200).json({ response });
    }
    catch (error) {
        res.status(400).json({ error });
    }
}));
exports.default = router;
