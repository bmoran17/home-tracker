import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { NotesPage } from './pages/NotesPage';
import { HomeTrackerPage } from './pages/HomeTrackerPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { Header } from './pages/components/Header';

export const App = () => {
  return (
    <>
    <Header />

    <Router basename='/projects/home_tracker'>
      <Routes>
        <Route path="/" element={<HomeTrackerPage />} />
        <Route path="/notes" element={<NotesPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
    </>
  );
};
