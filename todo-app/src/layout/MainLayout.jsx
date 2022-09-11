import Footer from '../components/Footer'
import Header from '../components/Header'
import MainContent from '../components/MainContent'
import SideBar from '../components/SideBar'
import './MainLayout.scss'

function MainLayout() {
  return (
    <div className="main-layout">
      <Header />
      <div className="content-layout">
        <SideBar />
        <MainContent />
      </div>
      <Footer />
    </div>
  )
}

export default MainLayout
