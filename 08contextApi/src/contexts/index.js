//  es file banane ka main purose hai ki hm jo bhi import karna chate hai o yehi le le 
// fir agar kisi ko kuch bhi chahiye to yeha se le le
 
export {TodoContext, TodoProvider, useTodo} from "./TodoContext"
//  yeha useTodo function export karne se ye fayda hai ki jo hm methode banaye hai Todo context me usko import nhi karna padega
//  ye direct access le lega kyuki use todo ke ander sab access pas kiya gya hai
