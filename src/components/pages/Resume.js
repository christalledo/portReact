import React from 'react';
import MyResume from '../../assets/Resume.pdf'

export default function Resume() {
  return (
    <div>
      <h1>Resume Page</h1>
      <iframe src={MyResume} width="100%" height="500px">
      </iframe>


    </div>
  );
}
