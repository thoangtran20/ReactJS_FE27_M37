import { useState } from 'react'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
// import MainContent from '../components/main-content/MainContent'
import SideBar from '../components/side-bar/SideBar'
import { FORM_PAGE, LIST_PAGE } from '../const'
import './MainLayout.scss'


function MainLayout(props) {
  const { content } = props;
  const [currentPage, setCurrentPage] = useState(LIST_PAGE)

  return (
    <div className="main-layout">
      {/* Callback */}
      <Header onOpenFormPage={setCurrentPage} page={currentPage}/>
      <div className="content-layout">
        <SideBar />
        {content}
        {/* <MainContent page={currentPage} /> */}
      </div>
      <Footer />
    </div>
  )
}

export default MainLayout
