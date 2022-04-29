import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class FriendsServices{

    constructor( private http:HttpClient){}

    // READ
    getFriends(){
       return this.http.get("http://localhost:5050/data");
    }
    // CREATE
    createFriend(nfriend:any){
        return this.http.post("http://localhost:5050/data",nfriend);
    }
    // READ BEFORE UPDATE
    editSelectedFriend(efriendid:any){
        return this.http.get("http://localhost:5050/edit/"+efriendid);
    }
    // UPDATE
    updateFriend(updatedFriendInfo:any){
        return this.http.post("http://localhost:5050/edit/"+updatedFriendInfo._id, updatedFriendInfo);
    }
    // DELETE
    deleteFriend(friendid:any){
        return this.http.delete("http://localhost:5050/delete/"+friendid);
    }

}