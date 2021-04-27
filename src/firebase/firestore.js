import { db } from './';
import firebase from "firebase/app"
export const FIRESTORE = {
    addIdea: async (idea) => {
        let {id} = await db.collection('ideas').add(idea);
        await db.collection('ideas').doc(id).update({id})
    },
    getIdeas: async () => {
        try{
            return (await db.collection('ideas').orderBy('voteCount', 'desc').get()).docs.map(doc=>doc.data());
        }
        catch(err){
            console.log(err);
            return []
        }
    },
    vote: async (uid, id) => {
        let data = (await db.collection('ideas').doc(id).get()).data()
        let value = data?.votes?.[uid]
        await db.collection('ideas').doc(id).update({
            [`votes.${uid}`]:value?false:true,
            voteCount:value? firebase.firestore.FieldValue.increment(-1): firebase.firestore.FieldValue.increment(1)
        });
        return value?  data.voteCount-1: data.voteCount+1;
    }
}