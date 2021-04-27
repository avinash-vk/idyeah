import { db } from './';

export const FIRESTORE = {
    addIdea: async (idea) => {
        let {id} = await db.collection('ideas').add(idea);
        await db.collection('ideas').doc(id).update({id})
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