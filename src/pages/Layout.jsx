import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
function Layout({ isDark, toggleTheme, children }) {
  return (
    <>
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      <div className="mt-16">{children}</div>
      <Footer isDark={isDark} />
    </>
  );
}

export default Layout;
