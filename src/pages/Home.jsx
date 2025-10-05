import Layout from "./Layout";
import Header from "../components/Header";
import Skills from "../components/Skills";
function Home({ isDark, toggleTheme }) {
  return (
    <>
      <Layout isDark={isDark} toggleTheme={toggleTheme}>
        <Header message="Welcome to my Personal Website!" />
        <Skills />
      </Layout>
    </>
  );
}

export default Home;
