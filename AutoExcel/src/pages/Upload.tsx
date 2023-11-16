import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import logo from './assets/logo.svg';
//import '../styles/Upload.css';
import { useTypewriter } from 'react-simple-typewriter';

interface UploadProps {}

const Upload: React.FC<UploadProps> = () => {
  const navigate = useNavigate(); // Use useNavigate to get the navigate function

  const [text] = useTypewriter({
    words: ['Auto', 'Simple', 'Easy', 'Anytime', 'Generate...'],
    loop: true,
    delaySpeed: 2500,
  });

  return (
    <>
      <div>
        <div>
          <span>
            Excel {text}
          </span>
        </div>
        <div>
          {/* Add any other elements or content as needed */}
        </div>
        <input
          type='text'
          placeholder='Enter your excel sheet link here...'
          className='upload-input'
          id='link'
          name='link'
        />
        <button onClick={() => navigate('/chat')}>confirm</button>
      </div>
    </>
  );
};

export default Upload;
