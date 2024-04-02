"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Generator {
    static generateId() {
        return Number(Date.now() + String(Math.floor(Math.random() * 99)));
    }
    static generatorRegistration() {
        return Number(Date.now() + String(Math.floor(Math.random() * 9999)));
    }
}
exports.default = Generator;
//# sourceMappingURL=Generator.js.map