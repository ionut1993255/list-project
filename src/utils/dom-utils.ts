export const getInputValue = (id: string): string => {
  const inputElement = document.getElementById(id) as HTMLInputElement;

  return inputElement?.value.trim() || "";
};

export const clearInputValue = (id: string): void => {
  const inputElement = document.getElementById(id) as HTMLInputElement;

  if (inputElement) {
    inputElement.value = "";
  }
};

export const getNextItemId = (list: { id: string }[]): string => {
  return list.length
    ? (parseInt(list[list.length - 1].id) + 1).toString()
    : "1";
};
