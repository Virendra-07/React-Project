import conf from '../conf/conf.js';
import {Client, Databases, ID, Storage, Query} from "appwrite";
// import id

export class Service{
    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({title, slug, content, featuredImage, status, userId}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug, //we assume this is the document Id
                {
                    title,
                    content,
                    status,
                    featuredImage,
                    userId,
                }
            )
        } catch (error) {
            console.log("Appwrite service :: createPost :: error", error);
        }
    }

    async updatePost(slug, {title, content, featuredImage, status}){
        try {
            await this.databases.updatePost(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content, 
                    featuredImage,
                    status
                }
            )
            
        } catch (error) {
            console.log("Apprite Srvice :: updatePost :: error", error);
        }
    }

    async deletePost(slug){
        try {
            await this.updatePost.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteProjectId,
                slug,
            )
            return true; // ye hme batata ha ki delete ho gya hai esko frontEnd me handle karenge
        } catch (error) {
            console.log("Appwrite Server :: deletePost :: error", error);
            // if any situation we have an error then the return false
            return false;
        }
    }
    
    async getPost(slug){
        try {
            await this.databases.getDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
                
            )
        } catch (error) {
            console.log("Appwrite Server :: getPost :: error", error);
            return false
        }
    }

    // if we want all post which us active then use query method

    // async getPosts(queries = [Query.equal("status","active")]){
    //     try {
    //         await  this.databases.listDocuments(
    //             conf.appwriteDatabaseId,
    //             conf.appwriteCollectionId,
    //             queries,
    //         )
    //     } catch (error) {
    //         console.log("Appwrite Server :: getPosts :: error", error);
    //         // if any situation we have an error then the return false
    //         return false;
    //     }
    // }

    // ---->
    async getPosts(queries = [Query.equal("status", "active")]){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries,
                

            )
        } catch (error) {
            console.log("Appwrite serive :: getPosts :: error", error);
            return false
        }
    }
    // <-------

    // file upload service
    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBuketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite Service :: uploadFile :: error", error);
            return false;
            
        }
    }

    // delete file
    async deleteFile(fileId){
        try {
            await this.deleteFile.deleteFile(
                conf.appwriteBuketId,
                fileId,
            )
            return true;
        } catch (error) {
            console.log("appwrite Service :: deleteFile :: error", error);
            return false;
        }
    }

    // here is the getFilePriew ---> esko bhi async await me rakh sakte hai but uska jarurat nhi hai kyuki ye kuch bhi return mnhi karta hai
    getFilePriview(fileId){
        return this.bucket.getFilePriview(
            conf.appwriteBuketId,
            fileId
        )
        
    }
}
// create object for exporting all functionalities

const service = new Service();
export default service;