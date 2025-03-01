import ListItem from "../models/list-item.ts";
import FullList from "../models/full-list.ts";

interface DOMList {
  ul: HTMLUListElement;

  clear(): void;

  render(fullList: FullList): void;
}

export default class ListTemplate implements DOMList {
  ul: HTMLUListElement;
  clearButton: HTMLButtonElement;
  noItemsMessage: HTMLParagraphElement;

  static instance: ListTemplate = new ListTemplate();

  private constructor() {
    this.ul = document.getElementById("listItems") as HTMLUListElement;
    this.clearButton = document.getElementById(
      "clearItemsButton",
    ) as HTMLButtonElement;
    this.noItemsMessage = document.getElementById(
      "noItemsMessage",
    ) as HTMLParagraphElement;
  }

  private createCheckbox(item: ListItem, fullList: FullList): HTMLInputElement {
    const check = document.createElement("input") as HTMLInputElement;
    check.type = "checkbox";
    check.id = item.id;
    check.tabIndex = 0;
    check.checked = item.checked;

    check.addEventListener("change", () => {
      fullList.toggleChecked(item.id);
      this.render(fullList);
    });

    return check;
  }

  private createLabel(item: ListItem): HTMLLabelElement {
    const label = document.createElement("label") as HTMLLabelElement;
    label.htmlFor = item.id;
    label.textContent = item.item;

    return label;
  }

  private createButton(item: ListItem, fullList: FullList): HTMLButtonElement {
    const button = document.createElement("button") as HTMLButtonElement;
    button.className = "button";
    button.textContent = "x";

    button.addEventListener("click", () => {
      fullList.removeItem(item.id);
      this.render(fullList);
    });

    return button;
  }

  private updateClearButton(): void {
    this.clearButton.style.display =
      this.ul.children.length > 0 ? "block" : "none";
  }

  private updateNoItemsMessage(): void {
    this.noItemsMessage.style.display =
      this.ul.children.length > 0 ? "none" : "block";
  }

  clear(): void {
    this.ul.innerHTML = "";
    this.updateClearButton();
    this.updateNoItemsMessage();
  }

  render(fullList: FullList): void {
    this.clear();

    fullList.list.forEach((item) => {
      const li = document.createElement("li") as HTMLLIElement;
      li.className = "item";

      li.append(this.createCheckbox(item, fullList));
      li.append(this.createLabel(item));
      li.append(this.createButton(item, fullList));

      this.ul.append(li);
    });

    this.updateClearButton();
    this.updateNoItemsMessage();
  }
}
