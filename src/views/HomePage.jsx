import React from "react";
import Skills from "../components/skils/Skills";
import Banner from "../components/Banner/Banner";
import Counters from "../components/Counter/Counters";
import History from "../components/History/History";
import ProjectsSwiper from "../components/Projects/ProjectsSwiper";
import BlogSwiper from "../components/Blog/BlogSwiper";
import Contact from "../components/Contact/Contact";
import WhyMe from "../components/why/WhyMe";

export default function HomePage(props) {
  return (
    <>
      {/* heading for banner */}
      <Banner
        background={props.background}
        setBackground={props.setBackground}
        data={props.data.banner}
      />

      {/* counters */}
      <Counters data={props.data.counters} />
      {/* Skils */}
      <Skills data={props.data.skills} />
      {/* projects */}
      {/* <ProjectsSwiper data={props.data.projects} /> */}

      {/* education history */}
      {/* <History data={props.data.history} /> */}

      {/* newsletter / posts */}
      {/* <BlogSwiper data={props.data.blog} /> */}
      {/* why me / posts */}
      <WhyMe data={props.data.why} column={3} />

      {/* contact info */}
      <Contact data={props.data.contact} />
    </>
  );
}
