var Login = /** @class */ (function () {
    function Login(rightmail, rightpass) {
        this.Rightmail = rightmail;
        this.Rightpass = rightpass;
    }
    Login.prototype.admin = function (email, password) {
        if (email == this.Rightmail && password == this.Rightpass) {
            return true;
        }
        else {
            return false;
        }
    };
    Login.prototype.user = function (email, password) {
        if (email == this.Rightmail && password == this.Rightpass) {
            return true;
        }
        else {
            return false;
        }
    };
    return Login;
}());
var login = new Login('gstvoaugusto@gmail.com', '123'); //Email e senha corretos
var admlogin = login.admin('gstvoaugusto@gmail.com', '123'); //Tentativa de Login
var userlogin = login.user('gstvoaugusto@gmail.com', '123'); //Tentativa de Login
console.log(userlogin);
