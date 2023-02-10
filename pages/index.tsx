import About from "../components/About";
import Contact from "../components/Contact";
import Developer from "../components/Developer";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import Programming from "../components/Programming";
import Questions from "../components/Questions";
import Review from "../components/Review";
import Steps from "../components/Steps";
import MainLayout from "../layouts/MainLayout";
import Gallery from "../components/Gallery";
import { NextPage, GetServerSideProps } from "next";
import axios from "axios";
import { FeedbackState } from "../interfaces/FeedbackContact";
import { getInitialFeedback } from "../redux/Slices/FeedbackSlice";
import { NextThunkDispatch, RootState, wrapper } from "../redux/store";
import { useTypedSelector } from "../redux/hooks/useTypedSelector";

const Home: NextPage = () => {
  const data = useTypedSelector((state) => state.feedback);
  console.log("data ", data);

  return (
    <div>
      <MainLayout
        title={"Webtronics React Developer"}
        keywords={
          "react typescript next.js @redux-toolkit react-hook-form yup scss"
        }
      >
        <Navigation />
        <Developer />
        <About />
        <Programming />
        <Steps />
        <Questions />
        <Review />
        <Gallery />
        <Contact />
      </MainLayout>
      <Footer />
    </div>
  );
};

export default Home;
export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async () => {
    const dispatch = store.dispatch as NextThunkDispatch;
    const response = await axios.get<FeedbackState>(
      `${process.env.NEXTAUTH_URL_FEEDBACK}`
    );
    const data = response.data;
    await dispatch(getInitialFeedback(data));

    return {
      props: {},
    };
  });
