import {User} from "./models/user";
import {UserView} from "./views/userView";
import {UserController} from "./controllers/userController";

const nik=new User('Nikolay','Boldar',40);
const nikView=new UserView(nik,'app');
const nikController=new UserController(nik, nikView);
nikView.render();
nikController.getUserName();
nikController.getTime();

// nik.displayDeveloper();
//
// console.log("hello world!");