import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HomePage from './screens/HomePage';
import CVPage from './screens/CVPage';
import AchievementsPage from './screens/AchievementsPage';
import JournalPage from './screens/JournalPage';
import ContactPage from './screens/ContactPage';
function App() {
  return (
    <>
    <Router>
    <Switch>
    <Route path="/" exact component={() => <HomePage/>} />
    <Route path="/cv" exact component={() => <CVPage/>} />
    <Route path="/achievements" exact component={() => <AchievementsPage/>} />
    <Route path="/journal" exact component={() => <JournalPage/>} />
    <Route path="/contact" exact component={() => <ContactPage/>} />
    </Switch>
    </Router>
      
    </>
  );
}

export default App;
