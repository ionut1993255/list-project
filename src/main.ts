import "./css/style.css";
import ListItem from "./models/list-item.ts";
import FullList from "./models/full-list.ts";
import ListTemplate from "./templates/list-template.ts";
import {
  getInputValue,
  clearInputValue,
  getNextItemId,
} from "./utils/dom-utils.ts";

const fullList = FullList.instance;
const template = ListTemplate.instance;

const handleFormSubmit = (event: SubmitEvent): void => {
  event.preventDefault();

  const newEntryText = getInputValue("newItem");
  if (!newEntryText) return;

  const itemId = getNextItemId(fullList.list);
  fullList.addItem(new ListItem(itemId, newEntryText));
  template.render(fullList);

  clearInputValue("newItem");
};

const handleClearItems = (): void => {
  fullList.clear();
  template.clear();
};

const initApp = (): void => {
  const itemEntryForm = document.getElementById(
    "itemEntryForm",
  ) as HTMLFormElement;
  const clearItemsButton = document.getElementById(
    "clearItemsButton",
  ) as HTMLButtonElement;

  itemEntryForm?.addEventListener("submit", handleFormSubmit);
  clearItemsButton?.addEventListener("click", handleClearItems);

  fullList.load();
  template.render(fullList);
};

document.addEventListener("DOMContentLoaded", initApp);
