import { Content } from "./content-interface";

export class ContentList {
  private _list: Content[];

  constructor() {
    this._list = [];
  }

  get list(): Content[] {
    return this._list;
  }

  add(content: Content): void {
    this._list.push(content);
  }

  get length(): number {
    return this._list.length;
  }

  getHtmlAtIndex(index: number): string {
    const content = this._list[index];
    const imgHtml = `<img src="${content.imgURL}" alt="${content.title}">`;

    return `
      <h2>${content.title}</h2>
      <p>${content.description}</p>
      <p>Created by ${content.creator}</p>
      ${imgHtml}
      <p>Type: ${content.type}</p>
    `;
  }
}

    