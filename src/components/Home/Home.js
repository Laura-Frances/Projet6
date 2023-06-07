import React from 'react';
import '../Home/Home.scss'
import Header from '../Header/Header'
import Banner from '../Banner/Banner'
import Gallery from '../Gallery/gallery'
import Footer from '../Footer/Footer'

function Home() {
  return (
    <div className="home">
      <Header />
      <Banner />
      <Gallery />
      <Footer />
    </div>
  );
}f

export default Home; 