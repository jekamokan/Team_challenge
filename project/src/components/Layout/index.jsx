import { Outlet } from 'react-router-dom'
import Header from '../Header'
import Footer from '../Footer'

const Layout = () => {
    return (
        <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            <Header />
            <div style={{ flex: 1 }}>
                <Outlet />
            </div>
            <Footer style={{ flexShrink: 0 }} />
        </div>
    )
}

export default Layout