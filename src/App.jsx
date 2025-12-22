import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import GuestLayout from "./layouts/GuestLayout";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Tools from "./pages/Tools";
import Ressources from "./pages/Ressources";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Toaster position="bottom-right" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<GuestLayout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="projects" element={<Projects />} />
          <Route path="tools" element={<Tools />} />
          <Route path="ressources" element={<Ressources />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}
