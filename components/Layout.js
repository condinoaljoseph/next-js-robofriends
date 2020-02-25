import Nav from '../components/Nav'

const Layout = props => {
    return (
        <div>
            <Nav />
            {props.children}
        </div>
    )
}

export default Layout
