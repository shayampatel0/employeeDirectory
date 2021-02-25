/* eslint-disable import/no-anonymous-default-export */
import faker from "faker";

export default {
    getUsers: function(){

    let randomUsers = [];
    for(let i =0; i < 10; i++){
        const user = faker.helpers.contextualCard()
        // console.log('user:', user);
        randomUsers.push(user);
        
    }
        // console.log('randomUsers:', randomUsers)
    return randomUsers;
    },



}