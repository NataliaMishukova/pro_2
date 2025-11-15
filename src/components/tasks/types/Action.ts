import type TaskCredentials from "./TaskCredentials";
export type Action=
|{type: 'tasks/add', payload:TaskCredentials}
|{type: 'tasks/changeStatus', payload:string}
|{
    payload: string;type: 'tasks/remove',playload:string
}//id -это стринг в данном случае

// Подключение общей библиотеки библиотеки npm install @mui/icons-material @mui/material @emotion/styled @emotion/react
//Подключение иконок npm install @mui/icons-material
//генерирует уникальные значения npm install --save uid