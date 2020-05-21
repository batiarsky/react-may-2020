import React from 'react';

import { Header } from '../header/HeaderFromLecture';
import { Footer } from '../footer/Footer';
import {postsList, usersList} from '../../constants'; // todo помимо константы postsList достать еще usersList
// todo: тут сделать импорт  UserCard из components/user-card/UserCard
import {UserCard} from "../user-card/UserCard";

import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div>content will appear here soon</div>
      <div className="d-flex posts-container">
      {/*  todo: срендерить тут список пользователей, используя компонент UserCard */}
          {
              usersList.map((item)=>{
                  return(
                      <UserCard user={item} key={item.id} />
                  )
              })
          }
      </div>

      <Footer />
    </div>
  );
}

export default App;
