import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from '../../pages/accountinfo/Login/Login'

import Modals from '../../component/Modal/Modals';
import Support from '../../pages/helpInfo/Support';
import Serve from '../../pages/hizmetVeren/Serve';
import ServePeople from '../../pages/ServePeople/ServePeople';
import ServePeoplePage from '../../pages/ServePeople/ServePeoplePage';
import Pictures from '../../pages/pictures/Pictures';

import LoginComponent from '../../pages/accountinfo/Login/LoginComponent';
import InfoHow from '../../pages/infoElma/InfoHow';
import InfoKariyer from '../../pages/infoElma/InfoKariyer';
import ServePersonalInfo from '../../pages/hizmetVeren/ServePersonalInfo';
import Servepayment from '../../pages/hizmetVeren/Servepayment';
import Servepayment1 from '../../pages/hizmetVeren/Servepayment1';
import Servepayment2 from '../../pages/hizmetVeren/Servepayment2';
import Servepayment3 from '../../pages/hizmetVeren/Servepayment3';
import Servepayment4 from '../../pages/hizmetVeren/Servepayment4';
import ServeSetting from '../../pages/hizmetVeren/ServeSetting';
import ServeEdit from '../../pages/hizmetVeren/ServeEdit';
import ServeMyAccount from '../../pages/hizmetVeren/ServeMyAccount';
import MyAccount from '../../pages/accountinfo/accountpage/MyAccount';
import MyChangePassword from '../../pages/accountinfo/accountpage/MyChangePassword'
import MyCartInfo from '../../pages/accountinfo/accountpage/MyCartInfo'
import Render from './Render';
import MyWorks from '../../pages/accountinfo/myWorks/MyWorks';
import MyOldWorks from '../../pages/accountinfo/myWorks/MyOldWorks';
import SupportDetailpage from '../../pages/helpInfo/SupportDetailpage';
import ServePeoplePrice from '../../pages/ServePeople/ServePeoplePrice';
import Cancel from '../../component/Modal/Cancel';
import ServePeopleBeforeLogin from '../../pages/serveMainPage/ServePeopleBeforeLogin';



function App() {
  

  return (


    <Router>

      <Switch>

        <Route path='/customer/accountDetail/mypayment-details' ><MyCartInfo /></Route>
        <Route path='/customer/accountDetail/mypassword-change' ><MyChangePassword /></Route>
        <Route path='/customer/accountDetail/my-details' ><MyAccount /></Route>
        <Route path='/fiyatları'> <ServePeoplePrice/> </Route>
        <Route path="/hizmet">
          <ServePeople />
        </Route>
        <Route path='/fotoğraflar/34382743984729' >
          <Pictures />
        </Route>
        <Route path='/kariyer' >
          <InfoKariyer />
        </Route>
        <Route path='/profesyonel-uyeol' >
          <ServePeopleBeforeLogin />
        </Route>
        <Route path='/profesyonelüye/kişiadı' >
          <ServePeoplePage />
        </Route>
        <Route path='/forgotpassword'>
          <LoginComponent />
        </Route>
        <Route path="/nasil-calisir">
          <InfoHow />
        </Route>

        <Route path="/pro-armut">
          <ServeMyAccount />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
       
        <Route path='/support/detail' > <SupportDetailpage /> </Route>
       
       
        <Route path="/support">
          <Support
          />
        </Route>
        <Route path="/setting/services/edit-detail">
          <ServeEdit />
        </Route>
        <Route path="/setting/services">
          <ServeSetting />
        </Route>
        <Route path="/setting/personal-info">
          <ServePersonalInfo />
        </Route>
        <Route path="/settings/balance/auto-reload">
          <Servepayment4 />

        </Route>
        <Route path="/settings/balance/transactions/invoices">
          <Servepayment3 />
        </Route>

        <Route path="/settings/balance/transactions">
          <Servepayment2 />
        </Route>
        <Route path="/settings/balance/payment">
          <Servepayment1 />
        </Route>
        <Route path="/setting/balance">
          <Servepayment />
        </Route>
        <Route path="/setting">
          <Serve />
        </Route>

        <Route path="/modal/carts">
          <Modals />
        </Route>
        <Route path="/customer/oldjob">
          <MyOldWorks />
        </Route>

        <Route path="/customer">
          <MyWorks />
        </Route>

        <Route path="/">

          <Render />
        </Route>

      </Switch>
    </Router>

  );
}

export default App;
