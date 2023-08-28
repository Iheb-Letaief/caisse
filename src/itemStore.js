import { observable, action } from 'mobx';

class ItemStore {
  @observable quantities = {}; 

  @action setQuantity(label, quantity) {
    this.quantities[label] = quantity;
  }
}

const itemStore = new ItemStore();
export default itemStore;
export {ItemStore}
