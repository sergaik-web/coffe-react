export default class Services {
  STATIC_URL = "http://localhost:3001";

  async getDataDb(url) {
    const res = await fetch(`${this.STATIC_URL}${url}`);
    if (!res.ok) {
      throw new Error((err) => `Произошла ошибка ${err}`);
    }
    return await res.json();
  }

  async getBestsellers() {
    return await this.getDataDb("/bestsellers");
  }
}
