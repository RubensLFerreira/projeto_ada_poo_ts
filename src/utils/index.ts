export default class Util {
  static id(): number {
    const gerarId = Number(Date.now() + String(Math.floor(Math.random() * 999)));
    return gerarId;
  }
}