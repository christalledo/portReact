import React from 'react';
import video1 from '../../images/The Catered Gamer - Google Chrome 2022-11-02 13-47-51.mp4';
import video2 from '../../images/FullChat - Google Chrome 2022-11-05 07-48-39.mp4';
import video3 from '../../images/To Do List App - Google Chrome 2022-11-05 07-56-32.mp4';
import image1 from '../../images/Note-Manager.png'
import image2 from '../../images/Team-Profile.jpg'
import image3 from '../../images/Tech-Blog.png'

export default function Portfolio() {
  function play(e) {
    if (e.target.paused)
      e.target.play();
    else
      e.target.pause();
  }
  return (
    <div className='changingColor'>
      <h1>Portfolio Page</h1>
      <div className='portContainer'>
        <video class='video1' src={video1} alt="Project 1" onClick={play} />
        <video class='video2' src={video2} alt="Project 2" onClick={play} />
        <video class='video3' src={video3} alt="Project 3" onClick={play} />
        <img class='image1' src={image1} alt="Note Manager" />
        <img class='image2' src={image2} alt="Team Profile" />
        <img class='image3' src={image3} alt="Freedom Tech" />  </div>
    </div>
  );
}

