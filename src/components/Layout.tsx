import Footer from "./global/Footer"
import Navbar from "./global/Navbar"
import PreviewBanner from "./global/PreviewBanner"

const Layout = ({ children, global, preview, pageContext }) => {
  const { navbar, footer, contactInfo } = global
  return (
    <div className="flex flex-col justify-between min-h-screen">
      {/* Aligned to the top */}
      <div className="flex-1">
        {preview && <PreviewBanner />}
        <Navbar navbar={navbar} pageContext={pageContext} />
        {children}
      </div>
      {/* Aligned to the bottom */}
      <Footer contactInfo={contactInfo} {...footer} />
    </div>
  )
}

export default Layout
