const FirestoreClient = require('./firestoreClient');
const { v4 : uuidv4 } = require('uuid');

const user1 = {
    uuid : uuidv4(),
    status : 'Pending',
    meta : '{sample chime metadata}'
}

const push = async() => {
    await FirestoreClient.push('users/user1', user1);
}

const pull = async() => {
    const result = await FirestoreClient.pull('users/user2');
    console.log(result);
}

pull();