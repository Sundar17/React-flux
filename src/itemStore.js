import EventEmitter from 'events';
import uniqueId from 'lodash/uniqueId';

import AppDispatcher from './AppDispatcher'


let items=[
    { value: 'Pants', id: uniqueId(), packed: false },
    { value: 'Jacket', id: uniqueId(), packed: false },
    { value: 'iPhone Charger', id: uniqueId(), packed: false },
    { value: 'MacBook', id: uniqueId(), packed: false },
    { value: 'Sleeping Pills', id: uniqueId(), packed: true },
    { value: 'Underwear', id: uniqueId(), packed: false },
    { value: 'Hat', id: uniqueId(), packed: false },
    { value: 'T-Shirts', id: uniqueId(), packed: false },
    { value: 'Belt', id: uniqueId(), packed: false },
    { value: 'Passport', id: uniqueId(), packed: true },
    { value: 'Sandwich', id: uniqueId(), packed: true },
  ];

  class ItemStore extends EventEmitter{
      constructor(){
          super()
          console.log("Hello Store");
          AppDispatcher.register(action=>{
              if(action.type === 'ADD_NEW_ITEM'){
                   return this.addItem(action.item)
              }
              if(action.type === 'TOGGLE_ITEM'){
                return this.updateItem(action.item) 
              }
              if(action.type === 'REMOVE_ITEM'){
                return this.removeItem(action.item)
              }
          })
      }

      getItems(){
          return items;
      }

      addItem(item){
          items=[...items,item]
          this.emit('change')
      }

      updateItem(ItemtoUpdate){
         items= items.map(item=>{
              if(item.id===ItemtoUpdate.id){
                  return ItemtoUpdate
              }
              return item
          })
          this.emit('change')
      }

      removeItem(itemToRemove){
        items=items.filter(item=>item.id!==itemToRemove.id)
        this.emit('change')
      }
  }

 export default new ItemStore() 