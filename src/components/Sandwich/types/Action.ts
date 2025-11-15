export type Action =
  | { type: 'addBread', payload: string }
  | { type: 'addCheese', payload: string }
  | { type: 'addBacon', payload: string }
  | { type: 'addSalad', payload: string }
  | { type: 'EatAll' };




// Действие Action - это объект в котором два поля: type и payload
// type - тип действия (имя нашего типа действия)
// payload - данные действия(информация необходимая для выполнения  операции)
