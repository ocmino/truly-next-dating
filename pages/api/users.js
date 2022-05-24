import { firestore } from "../../utils/firebase"

export default async function handler(req, res) {
    switch(req.method) {
        case 'POST':
            const body = req.body

            console.log(body)



            const  ref = await firestore.collection('users').add(body)
            const doc = await ref.get()

            const post = {id: doc.id, ...doc.data()}

            res.status(201).json(post)

            break;


   
        default:
            res.status(405).send('Method not allowed')
            break;
    }

}