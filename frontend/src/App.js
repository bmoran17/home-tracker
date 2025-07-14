import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { NotesPage } from './pages/NotesPage';
import { HomeTrackerPage } from './pages/HomeTrackerPage';
import { NotFoundPage } from './pages/NotFoundPage';

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeTrackerPage />} />
        <Route path="/notes" element={<NotesPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};
