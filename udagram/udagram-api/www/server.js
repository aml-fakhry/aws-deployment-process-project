"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = __importStar(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const sequelize_1 = require("./sequelize");
const index_router_1 = require("./controllers/v0/index.router");
const body_parser_1 = __importDefault(require("body-parser"));
const model_index_1 = require("./controllers/v0/model.index");
(() => __awaiter(this, void 0, void 0, function* () {
    dotenv.config();
    yield sequelize_1.sequelize.addModels(model_index_1.V0_FEED_MODELS);
    yield sequelize_1.sequelize.addModels(model_index_1.V0_USER_MODELS);
    yield sequelize_1.sequelize.sync();
    console.log('Database Connected');
    const app = express_1.default();
    const port = process.env.PORT || 8080;
    app.use(body_parser_1.default.json());
    app.use(cors_1.default());
    app.use('/api/v0/', index_router_1.IndexRouter);
    // Root URI call
    app.get('/', (req, res) => __awaiter(this, void 0, void 0, function* () {
        res.send('/api/v0/');
    }));
    // Start the Server
    app.listen(port, () => {
        console.log(`server running ${process.env.URL}`);
        console.log(`press CTRL+C to stop server`);
    });
}))();
//# sourceMappingURL=server.js.map