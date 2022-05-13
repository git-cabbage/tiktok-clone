import Header from './Header'
import Sidebar from './Sidebar'

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <Sidebar />
            <div className="content">{children}</div>
        </div>
    )
}

export default DefaultLayout
