import Layout from '../../components/Layout'

const profile = ({userProfile}) => {
    return (
        <Layout>
            <div>
                <img src={`https://robohash.org/${userProfile.id}`} />
                <h1>{userProfile.name}</h1>
                <p>Username: {userProfile.username}</p>
                <p>Email: {userProfile.email}</p>
            </div>
            <style jsx>{`
                div {
                    text-align: center;
                }
            `}</style>
        </Layout>
    )
}

profile.getInitialProps = async function (context) {
    const { id } = context.query;
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await res.json();

    return {
        userProfile: data
    }
}

export default profile
