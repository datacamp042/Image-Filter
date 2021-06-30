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
const image_processing_router_1 = require("./image_processing/routes/image_processing.router");
//import { UserRouter } from './users/routes/user.router';
const router = express_1.Router();
router.use('/image_processing', image_processing_router_1.ImageProcessingRouter);
//router.use('/users', UserRouter);
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send(`V0`);
}));
exports.IndexRouter = router;
//# sourceMappingURL=index.router.js.map