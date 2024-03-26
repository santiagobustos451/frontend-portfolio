import { useState } from 'react';
import profilePic from './assets/profile.png';
import dashboard from './assets/dashboard.png';
import library from './assets/library.png';
import tictactoe from './assets/tictactoe.png';
import intranet from './assets/intranet.png';
import landing from './assets/landing.png';
import './App.css';

interface Button {
  image: string;
  key: string;
  label: string;
  url: string;
}

function App() {
  const [selectedButton, setSelectedButton] = useState<Button | null>(null);
  const [listShown, setListShown] = useState<boolean>(false);

  const buttons = [
    {
      image: intranet,
      key: 'intranet',
      label: 'University Admin Portal',
      url: 'https://santiagobustos451.github.io/intranet_front/',
    },
    {
      image: landing,
      key: 'landing',
      label: 'Landing Page',
      url: 'https://santiagobustos451.github.io/odin-landingPage/',
    },
    {
      image: tictactoe,
      key: 'tictactoe',
      label: 'Tic Tac Toe',
      url: 'https://santiagobustos451.github.io/odin-tictactoe/',
    },
    {
      image: library,
      key: 'library',
      label: 'Library',
      url: 'https://santiagobustos451.github.io/odin-library/',
    },
    {
      image: dashboard,
      key: 'dashboard',
      label: 'Admin Dashboard',
      url: 'https://santiagobustos451.github.io/odin-adminDashboard/',
    },
  ];
  const changeThumb = (imageName: any) => {
    setSelectedButton(imageName);
  };

  return (
    <>
      <div className="background"></div>
      <div className="presentation">
        <div className="text">
          <div className="title">Hi! I'm Santiago Bustos</div>
          <div className="job">Web Designer</div>
          <button
            className={listShown ? 'hidden' : ''}
            onClick={() => setListShown(true)}
          >
            See my work
          </button>
        </div>
        <img
          className={listShown ? 'hidden' : 'profile-pic'}
          src={profilePic}
          alt=""
        />
      </div>

      <div className={!listShown ? 'hidden' : 'showcase'}>
        <ul>
          {buttons.map((button) => (
            <a
              target="_blank"
              href={button.url}
              className={button.key === selectedButton?.key ? 'selected' : ''}
              onMouseEnter={() => changeThumb(button)}
              key={button.key}
            >
              {button.label}
            </a>
          ))}
        </ul>
        <div className="thumbnail">
          <img src={selectedButton?.image} alt="" />
        </div>
      </div>
    </>
  );
}

export default App;
