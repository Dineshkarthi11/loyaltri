
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SubscriptionOverview from './components/SubscriptionOverview/SubscriptionOverview';
import RequestAdditionalUserMore from './RequestAdditionalUserMore/RequestAdditionalUserMore';
import RequestAdditionalUser from './RequestAdditionalUser/RequestAdditionalUser';
import UserLimitExceeded from './UserLimitExceeded/UserLimitExceeded';
import ActiveInactiveUsers from './ActiveInactiveUsers/ActiveInactiveUsers';

function App() {
  return (
    <div className="App"> 
    <Router>
      <Routes>
        <Route path='/' element={<SubscriptionOverview />} />
        <Route path='/request-additional-user' element={<RequestAdditionalUser />} />
        <Route path='/request-additional-user-more' element={<RequestAdditionalUserMore/>} />
        <Route path='/making-payments-request' element={<UserLimitExceeded/>} />
        <Route path='/active-inactive-users' element={<ActiveInactiveUsers/>} />
      </Routes>
    </Router>
      {/*  <SubscriptionOverview /> */}
      {/* <RequestAdditionalUser /> */}
      {/* <RequestAdditionalUserMore /> */} 
      {/*  <ActiveInactiveUsers /> */} 
       {/* <UserLimitExceeded /> */}
     
    </div>
  );
}

export default App;
