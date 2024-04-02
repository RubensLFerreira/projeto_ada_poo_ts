export default class Generator {
  static generateId(): number {
    return Number(Date.now() + String(Math.floor(Math.random() * 99)));
  }

  static generatorRegistration(): number {
    return Number(Date.now() + String(Math.floor(Math.random() * 9999)));
  }
}