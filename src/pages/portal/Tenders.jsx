import Navbar from "../../components/common/navigation/Navbar";
import Footer from "../../components/common/Footer";
import TendersPage from "../../components/portal/TendersPage";
import "../../css/tenders.css";

const Tenders = () => {
  return (
    <>
      <Navbar />
      <TendersPage />
      <Footer />
    </>
  );
};

export default Tenders;
