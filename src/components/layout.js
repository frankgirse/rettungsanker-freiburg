import PropTypes from "prop-types";
import React from "react";
import Infobox from '../components/infobox'
import Header from "./header";
import Footer from '../components/footer'
import "../components/layout.css"
import "../styles/global.css"
function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen font-sans text-yellow-100">
      <Infobox/>
      <Header />

      <main className="bg-gray-900 flex-1 w-full max-w-14xl h-5/6 px py-4 mx-auto md:px-0 md:py-">
        {children}
      </main>

      <Footer/>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
