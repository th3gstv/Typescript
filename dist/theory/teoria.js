/*
  Boolean
  True or false
__________________
  String (Texto)
  'Gustavo'
___________________
  Number (Número)
  1, 2, 3, 4, 10.99
___________________
  Array (Number, String) [Number, String]
  let pessoas: string[];
  let idade: number[];
___________________
  Object (Qualquer coisa menos boolean, string, number, array)
  cliente = {
    id = 10;
    name = 'Juca';
  }
___________________
  TUPLE
  let pessoas: [number, string, boolean];
  pessoas = [1000, 'Gustavo', true];
___________________
  ANY
  let nome: any;
  nome = [10, 'Gustavo'];
  nome = true;
___________________
  VOID
  function sendemail(email:string): void{

  }
  sendemail('gstvoaugusto@gmail.com');
___________________
  NULL E UNDEFINED
  let teste: null;
  console.log(name) >> undefined; */
/*
type Permission = 'Admin' | 'Mod';
type NoPermission = 'User' | 'Guest';

let Login: Permission;
Login = 'Admin';

Login = 'User';
*/
//Interface serve para documentar ou validar o código, facilitando o desenvolvimento 
/*interface User{
  id: number,
  name: string,
  email: string,
  age: number,
  password: string
}

let Client:User = {
  id: 10,
  name: 'Gustavo',
  email: 'gstvoaugusto@gmail.com',
  age: 19,
  password: '1345'
}*/ 
