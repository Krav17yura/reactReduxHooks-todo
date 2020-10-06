import React from 'react';
import './App.css'
import './normalize.css'
import AppHeader from './components/app-header'
import AppFooter from "./components/app-footer";
import AppSearchPanel from "./components/app-search-panel";
import AppSortStatus from "./components/app-sort-status/app-sort-status";
import AppSortPriority from "./components/app-sort-priority";
import AppAddItemButton from "./components/app-addItem-button";
import AppItemList from "./components/app-item-list";
import AppPopupAddItemPanel from "./components/app-popup-addItem-panel";
import AppPopupEditItemPanel from "./components/app-popup-editItem-panel";

function App() {
  return (
      <div className="main">
        <div className='wrapper'>
          <header className='app__header'>
            <AppHeader />
          </header>
            <section className="container  ">
                <div className="app__row">
                    <div className="first__column">
                        <AppSearchPanel/>
                        <AppSortStatus/>
                    </div>
                    <div className="second__column">
                        <AppSortPriority/>
                        <AppAddItemButton/>
                    </div>
                </div>
               <AppItemList/>
                <AppPopupAddItemPanel/>
                <AppPopupEditItemPanel/>
            </section>
        </div>
        <AppFooter/>
      </div>
  );
}

export default App;
