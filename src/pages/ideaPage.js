import React from 'react'
import { useParams } from 'react-router-dom';
import { FIRESTORE } from '../firebase/firestore';
import Idea from '../components/Idea';
import { Skeleton } from '@material-ui/lab';
const IdeaPage = () => {
    const { id } = useParams();
    const [loading, setLoading] = React.useState(true);
    const [idea, setIdea] = React.useState();
    React.useEffect(()=>{
        FIRESTORE.getIdea(id).then(idea=>{
            setIdea(idea);
            setLoading(false);
        });
    },[id])
    return (
        <div style={{padding:'4%'}}>
            {
                loading?<Skeleton><Idea/></Skeleton>:<Idea idea={idea} /> 
            }
        </div>
    )
}

export default IdeaPage