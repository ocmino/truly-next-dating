import { firestore } from "../../utils/firebase"

export default function User({ user }) {
    return (
        <div>
            <h1>{user.email}</h1>
            <p>{user.password}</p>
        </div>
    )
}

export async function getServerSideProps(context) {
    const {id} = context.params

    const doc = await firestore.collection('users').doc(id).get()

    const user = {
        id: doc.id,
        ...doc.data()
    }

    return {
        props: {
            user: user
        }
    }
}