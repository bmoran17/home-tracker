import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { NotesPage } from './pages/NotesPage';
import { HomeTracker } from './pages/components/HomeTracker';
import { NotFoundPage } from './pages/NotFoundPage';
import { CategoryPage } from './pages/components/CategoryPage';
import { Header } from './pages/components/Header';
import { Home } from './pages/components/Home';
import { SubCategory } from './pages/components/SubCategory';

export const App = () => {
  return (
    <>

    <Router basename='/projects/home_tracker'>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/" element={<HomeTrackerPage />} /> */}
        <Route path="/notes" element={<NotesPage />} />
        <Route path="/:categoryname" element={<SubCategory/>} />
        {/* <Route path="*" element={<NotFoundPage />} /> */}
        <Route path="/:categoryname/:subcategoryname" element={<HomeTracker />} />
      </Routes>
    </Router>
    </>
  );
};
