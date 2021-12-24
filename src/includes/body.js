import Dashboard from "../pages/dashboard";
import ProfileDetails from "../pages/profile/profile_details";
import { BrowserRouter as Router, Route } from 'react-router-dom';

const Body = () => {
    return ( 
        <Router>
            <Route path="/" exact component={Dashboard} />
            <Route path="/profile" component={ProfileDetails} />
        </Router>
     );
}
 
export default Body;