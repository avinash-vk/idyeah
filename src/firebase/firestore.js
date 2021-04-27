import { db } from './';

export const FIRESTORE = {
    addIdea: async (idea) => {
        return await db.collection('ideas').add(idea);
    },
    getIdeas: async () => {
        try{
            return (await db.collection('ideas').get()).docs.map(doc=>doc.data());
        }
        catch(err){
            console.log(err);
            return []
        }
    },
    vote: async (uid, id) => {
        let value = (await db.collection('ideas').doc(id).get()).data()[`likes.${uid}`]
        return await db.collection('ideas').doc(id).update({
            [`likes.${uid}`]:value?false:true,
        });
    }
}