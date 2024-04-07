import { Outlet } from 'react-router-dom'
import Header from '../Header'
import Footer from '../Footer'
import SortProducts from '../SortProducts'

const Layout = () => {
    return (
        <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            <Header />
            <SortProducts/>
            <div style={{ flex: 1 }}>
                <Outlet />
            </div>
            <Footer style={{ flexShrink: 0 }} />
        </div>
    )
}

export default Layout