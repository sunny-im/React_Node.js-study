import React, {useState} from 'react';
import '../App.css'

function Tab() {
  const [tabMenu, setTabMenu] = useState(1);
  const clickTab = (index) => {
    console.log(index);
    setTabMenu(index);
  }

  return (
    <div className="container">
      <div className="tabs">
        <button className={tabMenu === 1 ? "tab active-tab" : "tab"} onClick={() => clickTab(1)}>Tab 1</button>
        <button className={tabMenu === 2 ? "tab active-tab" : "tab"} onClick={() => clickTab(2)}>Tab 2</button>
        <button className={tabMenu === 3 ? "tab active-tab" : "tab"} onClick={() => clickTab(3)}>Tab 3</button>
      </div>

      <div className="contents">
          <div className={tabMenu === 1 ? "content active-content" : "content"}>
            <h2>Tab1 입니다</h2>
          </div>
          <div className={tabMenu === 2 ? "content active-content" : "content"}>
            <h2>Tab2 입니다</h2>
          </div>
          <div className={tabMenu === 3 ? "content active-content" : "content"}>
            <h2>Tab3 입니다</h2>
          </div>
      </div>
    </div>
  );
}

export default Tab;