import Header from '~/components/Layouts/components/Header'

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="content">{children}</div>
        </div>
    )
}

export default DefaultLayout
