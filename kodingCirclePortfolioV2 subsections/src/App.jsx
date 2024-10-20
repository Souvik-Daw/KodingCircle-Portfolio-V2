import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { Footer, NavbarSection } from "./components";
import { About, Contact, Portfolio, Review} from "./pages";

const App = () => {
  return (
    <main className='bg-slate-300/20'>
      <Router>
        <NavbarSection />
        <Routes>
          <Route
            path='/*'
            element={
              <>
                <Routes>
                  <Route path='/about' element={<About />} />
                  <Route path='/contact' element={<Contact />} />
                  <Route path='/portfolio' element={<Portfolio />} />
                  <Route path='/review' element={<Review />} />
                </Routes>
                <Footer />
              </>
            }
          />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
