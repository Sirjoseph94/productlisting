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
exports.deleteProduct = exports.updateProduct = exports.readOneProduct = exports.readProducts = exports.createProduct = void 0;
const validationSchema_1 = require("../helpers/validationSchema");
const prismaClient_1 = __importDefault(require("../helpers/prismaClient"));
function createProduct(data, userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const isValid = validationSchema_1.productSchema.safeParse(data);
        if (!isValid.success)
            throw isValid.error;
        const record = isValid.data;
        yield prismaClient_1.default.product.create({
            data: {
                name: record.name,
                image: record.image,
                brand: record.brand,
                category: record.category,
                description: record.description,
                price: record.price,
                countInStock: record.countInStock,
                rating: record.rating,
                numReviews: record.numReviews,
                userId: userId
            }
        });
    });
}
exports.createProduct = createProduct;
function readProducts() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield prismaClient_1.default.product.findMany();
        if (!response)
            throw "No product";
        return response;
    });
}
exports.readProducts = readProducts;
function readOneProduct(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield prismaClient_1.default.product.findUnique({
            where: {
                id
            }
        });
        if (!response)
            throw "Product not found";
        return response;
    });
}
exports.readOneProduct = readOneProduct;
function updateProduct(data, id) {
    return __awaiter(this, void 0, void 0, function* () {
        const isValid = validationSchema_1.updateProductSchema.safeParse(data);
        if (!isValid.success)
            throw isValid.error;
        const record = isValid.data;
        const response = yield prismaClient_1.default.product.update({
            where: {
                id: id,
            },
            data: {
                name: record.name,
                image: record.image,
                brand: record.brand,
                category: record.category,
                description: record.description,
                price: record.price,
                countInStock: record.countInStock,
                rating: record.rating,
                numReviews: record.numReviews,
            }
        });
        if (!response)
            throw "Product not found";
        return ('Product details updated successfully');
    });
}
exports.updateProduct = updateProduct;
function deleteProduct(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield prismaClient_1.default.product.delete({
            where: {
                id
            }
        });
        if (!response)
            throw "Product not found";
        return ("Product deleted successfully");
    });
}
exports.deleteProduct = deleteProduct;
