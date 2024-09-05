import conf from "../conf/conf.js"
import {Client, Account, ID} from "appwrite"

// export class AuthService{}
// Agar es class tarah class ko direct export karenge to jo bhi use karega to usko hmesa object banakr karna padega
//  to kyu na hm yehi pe direct object banake export kar de ki koi bhi user karega to direct "dot(.)" oprator ko use a=karke use kar lega
// export default AuthService;


// yehi resion hai ki object banakr or object ko export kiya gaya hai na ki Class ko

export class AuthService{
    client = new Client();
    account;
    // yeha hm appwrite ke auth doc ka same kam kar sakte hai 
    // but hm ye chah rhe hai ki jab koi new object bane tab sare value call ho to uske liye to usko ik constructor ke andar dal denge
    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)
        this.account = new Account(this.client);
    };

    // here we can use promises like documents 
    // but we use async await kyuki hm chahte hai pahla kam khata ho to aage bade
    // async creatAccount({email,password,name}) {
    //     try {
    //         const userAccount = await this.account.create(ID.unique(), email, password, name); //yeha agar hme or field chaiye to hm add akr sakte hai
    //         if (userAccount) {
    //             // user go for the login before show success Message
    //             return this.login({email, password});
    //         }else{
    //             return userAccount;
    //         }
    //     } catch (error) {
    //         throw error;
    //     }
    // }

    async createAccount({email, password, name}) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name)
            if (userAccount) {
                // call another function for login
                return this.login({email, password});
            }else{
                return userAccount;
            }
        } catch (error) {
            throw error;
            
        }
    }

    async login({email, password}){
        try {
           return await this.account.createEmailPasswordSession(email, password)
        } catch (error) {
            throw error;
        }
    }

    // if we on home page the how can find user login hai ya nhi----
    async getCurrentUser(){
        try {
            return await this.account.get()
        } catch (error) {
            throw error
            // hm console bhi kar sakre hai
            // console.log("Appwrite Server :: getCurrentUser :: error", error)
        }
        // agar kisi problem se ye services nhi pahucha to null return kar denge ya fir hm try ke ander "if-else" bhi use kar sakte hai
        return null;
    }
    async logout(){
        try {
            await this.account.deleteSessions(); // agar hme ik hi jagah se logout karna hota to seif "deleteSession" method use karte
        } catch (error) {
            console.log("Appwrite Server :: logout :: error", error);
        }
    }
}
    

// create a object for export
const authService = new AuthService();

export default authService;



