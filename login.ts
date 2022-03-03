class Login{

  Rightmail: string;
  Rightpass: string;

  constructor(rightmail: string, rightpass: string){
    this.Rightmail = rightmail;
    this.Rightpass = rightpass;
  }
  
  admin(email: string, password: string): boolean{
    if(email == this.Rightmail && password == this.Rightpass){
      return true;
    }else{
      return false;
    }
  }

  user(email: string, password: string): boolean{
    if(email == this.Rightmail && password == this.Rightpass){
      return true;
    }else{
      return false;
    }
  }

}
const login = new Login('gstvoaugusto@gmail.com', '123'); //Email e senha corretos
const admlogin = login.admin('gstvoaugusto@gmail.com', '123') //Tentativa de Login
const userlogin = login.user('gstvoaugusto@gmail.com', '123') //Tentativa de Login
console.log(userlogin);