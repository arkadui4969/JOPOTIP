import React, { useState } from 'react';
import Content0 from './content/content0';
import Content1 from './content/content1';
import Content2 from './content/content2';
import Content3 from './content/content3';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('item-1');

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <header>
      <div id="tabs">
        <div className='tabs_nav'></div>
        <div className="tab-buttons">
          <div className='tabs'>
            <div className="logo">JOPOTIP</div>
            <div
              className={`item ${activeTab === 'item-1' ? 'active' : ''}`}
              onClick={() => handleTabClick('item-1')}
            >
              Главная
            </div>
            <div
              className={`item ${activeTab === 'item-2' ? 'active' : ''}`}
              onClick={() => handleTabClick('item-2')}
            >
              Работы
            </div>
            <div
              className={`item ${activeTab === 'item-3' ? 'active' : ''}`}
              onClick={() => handleTabClick('item-3')}
            >
              Информация
            </div>
            <div
              className={`item ${activeTab === 'item-4' ? 'active' : ''}`}
              onClick={() => handleTabClick('item-4')}
            >
              Регистрация
            </div>
          </div>
        </div>
      </div>

      <div className="tabs-content">
        {activeTab === 'item-1' && (
          <div className="item-content glavForm" id="item-1-content">
            <Content0 />
          </div>
        )}
        {activeTab === 'item-2' && (
          <div className="item-content" id="item-2-content">
            <Content1 />
          </div>
        )}
        {activeTab === 'item-3' && (
          <div className="item-content" id="item-3-content">
            <Content2 />
          </div>
        )}
        {activeTab === 'item-4' && (
          <div className="item-content" id="item-4-content">
            <Content3 />
          </div>
        )}
      </div>
    </header>
  );
};

export default Tabs;