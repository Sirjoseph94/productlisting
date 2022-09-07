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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userProducts = exports.registerUser = exports.loginUser = void 0;
const validationSchema_1 = require("../helpers/validationSchema");
const prismaClient_1 = __importDefault(require("../helpers/prismaClient"));
const authMiddleware_1 = require("../helpers/authMiddleware");
const hashPassword_1 = require("../helpers/hashPassword");
function loginUser(data) {
    return __awaiter(this, void 0, void 0, function* () {
        const isValid = validationSchema_1.loginUserSchema.safeParse(data);
        if (!isValid.success)
            throw isValid.error;
        const record = isValid.data;
        const user = yield prismaClient_1.default.user.findUnique({
            where: {
                email: record.email,
            },
        });
        if (!user)
            throw `No user with ${record.email}. Please signup`;
        const match = yield (0, hashPassword_1.decryptPassword)(record.password, user.password);
        if (!match)
            throw "incorrect password";
        return (0, authMiddleware_1.generateAccessToken)(user.id);
    });
}
exports.loginUser = loginUser;
function registerUser(data) {
    return __awaiter(this, void 0, void 0, function* () {
        const isValid = validationSchema_1.registerUSerSchema.safeParse(data);
        if (!isValid.success)
            throw isValid.error;
        const record = isValid.data;
        return prismaClient_1.default.user.create({
            data: {
                fullname: record.fullname,
                gender: record.gender,
                email: record.email,
                phone: record.phone,
                address: record.address,
                password: yield (0, hashPassword_1.encryptPassword)(record.password),
            },
            select: {
                fullname: true,
                email: true,
                gender: true,
                phone: true,
                address: true
            },
        });
    });
}
exports.registerUser = registerUser;
function userProducts(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield prismaClient_1.default.user.findUnique({
            where: {
                id: id
            },
            include: {
                products: true
            }
        });
        if (!response)
            throw 'User not found';
        return response;
    });
}
exports.userProducts = userProducts;
