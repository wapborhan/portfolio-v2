import Skills from "../../components/skils/Skills";
import Banner from "../../components/Banner/Banner";
import Counters from "../../components/Counter/Counters";
import Contact from "../../components/Contact/Contact";
import WhyMe from "../../components/why/WhyMe";
import ProjectsSwiper from "../../components/Projects/ProjectsSwiper";

export default function HomePage() {
  return (
    <>
      <Banner />
      <Counters />
      <Skills />
      <ProjectsSwiper />
      {/* <History data={props.data.history} /> */}
      {/* <BlogSwiper data={props.data.blog} /> */}
      <WhyMe
        // data={data?.main?.why}
        column={3}
        length={3}
      />
      <Contact />
    </>
  );
}
