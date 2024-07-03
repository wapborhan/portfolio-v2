import Skills from "../components/skils/Skills";
import Banner from "../components/Banner/Banner";
import Counters from "../components/Counter/Counters";
import Contact from "../components/Contact/Contact";
import WhyMe from "../components/why/WhyMe";
import ProjectsSwiper from "../components/Projects/ProjectsSwiper";
import data from "../data/data.json";

export default function HomePage(props) {
  console.log(data);
  return (
    <>
      {/* heading for banner */}
      <Banner
      // background={props.background}
      // setBackground={props.setBackground}
      // data={data?.main?.banner}
      />

      {/* counters */}
      <Counters
      //  data={data?.main?.counters}
      />
      {/* Skils */}
      <Skills
      // data={data?.main?.skills}
      />
      {/* projects */}
      <ProjectsSwiper data={data?.main?.projects} />

      {/* education history */}
      {/* <History data={props.data.history} /> */}

      {/* newsletter / posts */}
      {/* <BlogSwiper data={props.data.blog} /> */}
      {/* why me / posts */}
      <WhyMe data={data?.main?.why} column={3} length={3} />

      {/* contact info */}
      <Contact data={data?.main?.contact} />
    </>
  );
}
