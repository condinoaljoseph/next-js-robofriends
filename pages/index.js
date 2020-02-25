import Layout from "../components/Layout";
import Link from "next/link";
import fetch from 'isomorphic-unfetch';
import SearchBar from '../components/SearchBar';

const index = ({users}) => {
    return (
        <Layout>
            <div className="top">
                <h1>Robot Friends</h1>
                <SearchBar />
                <style jsx>{`
                div.top {
                    text-align: center
                }
                `}</style>
            </div>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        <Link href="/robots/[id]" as={`/robots/${user.id}`}>
                            <a>
                                <img src={`https://robohash.org/${user.id}`} />
                                <h2>{user.name}</h2>
                                <p>{user.username}</p>
                                <p>{user.email}</p>
                            </a>
                        </Link>
                    </li>
                ))}

                <style jsx>{`
                    ul {
                        list-style: none;
                        display: flex;
                        flex-flow: row wrap;
                        justify-content: space-evenly;
                    }

                    ul li {
                        flex-basis: 200px;
                    }

                    ul li a {
                        text-align: center;
                        text-decoration: none;
                        color: #000;
                        display: block;
                        padding: 0.5rem;
                    }

                    ul li a:hover {
                        background: #f2f2f2
                    }
                `}</style>
            </ul>
        </Layout>
    )
}

index.getInitialProps = async function() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    console.log(`Data count: ${data.length}`)

    return {
        users: data
    }
}

export default index
