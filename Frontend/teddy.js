export class TeddyInfo {
    constructor(id, name, price, description, imageUrl, colors) {
      this.name = name;
      this.price = price / 100;
      this.description = description;
        this.colors = colors;
        this.imageUrl = imageUrl;
        this.id = id;
    }
  }