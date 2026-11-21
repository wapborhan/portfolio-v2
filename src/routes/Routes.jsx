import { createHashRouter } from "react-router-dom";
// Layout
import RootLayout from "../layout/RootLayout";
import DashLayout from "../layout/DashLayout";
// pages
import HomePage from "../pages/home/HomePage";
import ProjectsPage from "../pages/home/ProjectsPage";
import BlogPage from "../pages/home/BlogPage";
import AboutPage from "../pages/home/AboutPage";
import ContactPage from "../pages/home/ContactPage";
import NotFound from "../pages/home/NotFound";
import WhyMe from "../components/why/WhyMe";

const router = createHashRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "projects",
        element: <ProjectsPage />,
      },
      {
        path: "why",
        element: <WhyMe column={3} length={12} />,
      },
      {
        path: "blog",
        element: <BlogPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashLayout />,
    children: [
      {
        path: "",
        element: "Hello",
      },
      {
        path: "sidebar/profile",
        element: "sidebar/profile",
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;

// export default function App(props) {
//   return (
//     <Routes>
//       <Route
//         exact
//         path="/projects"
//         element={<ProjectsPage data={props.data.projects} />}
//       />
//       <Route
//         exact
//         path="/projects-2-col"
//         element={<ProjectsPage data={props.data.projects} column={2} />}
//       />
//       <Route
//         exact
//         path="/projects-3-col"
//         element={<ProjectsPage data={props.data.projects} column={3} />}
//       />
//       <Route
//         exact
//         path="/history"
//         element={<HistoryPage data={props.data.history} />}
//       />
//       <Route
//         exact
//         path="/courses"
//         element={<CoursePage data={props.data.courses} />}
//       />
//       <Route exact path="/blog" element={<BlogPage data={props.data.blog} />} />
//       <Route
//         exact
//         path="/blog-2-col"
//         element={<BlogPage data={props.data.blog} column={2} />}
//       />
//       <Route
//         exact
//         path="/blog-3-col"
//         element={<BlogPage data={props.data.blog} column={3} />}
//       />
//       <Route
//         exact
//         path="/about"
//         element={
//           <AboutPage
//             data={props.data.hobbies}
//             background={props.background}
//             setBackground={props.setBackground}
//           />
//         }
//       />{" "}
//       <Route
//         exact
//         path="/why"
//         element={
//           <WhyMe
//             data={props.data.why}
//             length={props.data.why.posts.length}
//             column={3}
//             background={props.background}
//             setBackground={props.setBackground}
//           />
//         }
//       />
//       <Route
//         exact
//         path="/contact"
//         element={<ContactPage data={props.data.contact} />}
//       />
//       <Route
//         exact
//         path="/"
//         element={
//           <HomePage
//             data={props.data}
//             background={props.background}
//             setBackground={props.setBackground}
//           />
//         }
//       />
//       <Route exact path="/dashboard" element={<NotFound />} />
//       <Route path="*" element={<NotFound />} />
//     </Routes>
//   );
// }
