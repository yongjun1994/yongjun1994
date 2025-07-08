// App.tsx 또는 App.ts 파일

import React from 'react';
import './App.css';
import * as D from './data';
import ArrowComponent from './ArrowComponent'; // 실제 이름에 맞게 수정
import ClassComponent from './ClassComponent';

const App = () => {
  return (
    <ul>
      <ClassComponent href="https://www.google.com" text="go to Google" />
      <ClassComponent href="https://www.twitter.com" text="go to Twitter" />
    </ul>
  );
};

export default App;
