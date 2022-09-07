"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProductSchema = exports.productSchema = exports.registerUSerSchema = exports.loginUserSchema = void 0;
const zod_1 = __importDefault(require("zod"));
exports.loginUserSchema = zod_1.default.object({
    email: zod_1.default.string().email(),
    password: zod_1.default.string()
});
exports.registerUSerSchema = zod_1.default.object({
    fullname: zod_1.default.string().min(6),
    gender: zod_1.default.string().max(1),
    email: zod_1.default.string().email(),
    phone: zod_1.default.string().transform(data => Number(data)),
    address: zod_1.default.string(),
    password: zod_1.default.string()
});
exports.productSchema = zod_1.default.object({
    name: zod_1.default.string(),
    image: zod_1.default.string(),
    brand: zod_1.default.string(),
    category: zod_1.default.string(),
    description: zod_1.default.string(),
    price: zod_1.default.string().transform(data => Number(data)),
    countInStock: zod_1.default.string().transform(data => Number(data)),
    rating: zod_1.default.string().transform(data => Number(data)),
    numReviews: zod_1.default.string().transform(data => Number(data)),
});
exports.updateProductSchema = zod_1.default.object({
    name: zod_1.default.string().optional(),
    image: zod_1.default.string().optional(),
    brand: zod_1.default.string().optional(),
    category: zod_1.default.string().optional(),
    description: zod_1.default.string().optional(),
    price: zod_1.default.string().transform(data => Number(data)).optional(),
    countInStock: zod_1.default.string().transform(data => Number(data)).optional(),
    rating: zod_1.default.string().transform(data => Number(data)).optional(),
    numReviews: zod_1.default.string().transform(data => Number(data)).optional()
});
