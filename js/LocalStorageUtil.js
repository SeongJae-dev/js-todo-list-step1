export class LocalStorageUtil {
  constructor() {
    this.localStorage = localStorage;
    this.localStorageArray = [];
  }

  setLocalStorage = (todoItem) => {
    this.localStorage.setItem(todoItem.id, JSON.stringify(todoItem));
  };

  stringToJson() {
    let localStorageArray = [];
    Object.values(this.localStorage).forEach((item) => {
      localStorageArray.push(JSON.parse(item));
    });
    this.localStorageArray = [...localStorageArray];
    return this.localStorageArray;
  }

  getLocalStorage = (todoItem) => {
    return JSON.parse(this.localStorage.getItem(todoItem.id));
  };

  getItem = (id) => {
    return this.localStorage.getItem(id);
  };

  getLocalStorageArray() {
    return this.localStorageArray;
  }

  removeLocalStarageData(id) {
    this.localStorage.removeItem(id);
    return this;
  }
}
