
import Header from "./Header.js";

function Layout({children}) {
    return (
        <>
        <Header/>
        <div className="content">
        {children}
        </div>
        
        </>
    )
}

export default Layout
