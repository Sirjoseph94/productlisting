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
const authMiddleware_1 = require("../helpers/authMiddleware");
const productsController_1 = require("../Controller/productsController");
const router = (0, express_1.Router)();
router.get("/all", (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, productsController_1.readProducts)();
        res.status(200).json({ response });
    }
    catch (error) {
        res.status(404).json(error);
    }
}));
router.post("/new", authMiddleware_1.auth, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user_id = req.user.user_id;
        yield (0, productsController_1.createProduct)(req.body, user_id);
        res.status(201).json({ success: "New product added successfully" });
    }
    catch (error) {
        res.status(400).json({ error });
    }
}));
router
    .route("/:id")
    .get(authMiddleware_1.auth, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, productsController_1.readOneProduct)(req.params.id);
        res.status(200).json({ response });
    }
    catch (error) {
        res.status(404).json({ error });
    }
}))
    .put(authMiddleware_1.auth, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const response = yield (0, productsController_1.updateProduct)(req.body, id);
        res.status(200).json({ success: response });
    }
    catch (error) {
        res.status(404).json({ error });
    }
}))
    .delete(authMiddleware_1.auth, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, productsController_1.deleteProduct)(req.params.id);
        res.status(200).json({ success: response });
    }
    catch (error) {
        res.status(404).json({ error });
    }
}));
exports.default = router;
