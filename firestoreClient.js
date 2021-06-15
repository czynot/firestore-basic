const Firestore = require('@google-cloud/firestore');
const path = require('path');

class FirestoreClient {
    constructor() {
        this.firestore = new Firestore({
            projectID: 'toktown-lobby',
            keyFilename: ('service-account.json')
        })
    }

    async push(path, data) {
        const docRef = this.firestore.doc(path);
        await docRef.set(data);
    }

    async pull(path) {
        const docRef = this.firestore.doc(path);
        const response = await docRef.get();
        return response.data();
    }
}

module.exports = new FirestoreClient();