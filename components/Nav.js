import Link from 'next/link'

const Nav = () => {
    return (
        <nav>
            <ul>
                <li><Link href="/"><a>Home</a></Link></li>
                <li><Link href="/about"><a>About</a></Link></li>
            </ul>
            <style jsx>{`
                nav {
                    background: #3495eb;
                }
                nav ul {
                    display: flex;
                    flex-flow: row wrap;
                }
                nav ul li {
                    list-style-type: none;
                }
                nav ul li a {
                    color: #fff;
                    display: block;
                    padding: 16px;
                }
            `}</style>
        </nav>
    )
}

export default Nav
