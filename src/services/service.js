import db from "./db.json";

export default class Services {
  async getDataDb(url) {
    return await db[url];
  }

  async getBestsellers() {
    return await this.getDataDb("bestsellers");
  }

  async getCoffee() {
    return await this.getDataDb("coffee");
  }

  async getGoods() {
    return await this.getDataDb("goods");
  }
}
