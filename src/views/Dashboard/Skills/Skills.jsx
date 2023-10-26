import React from 'react'

function Skills() {
  return (
    <div className='Skills gen'>
     <div className='competence'>
      <h2>My skills</h2>
      <p>
      As a Full Stack Developer, I've honed a versatile skill set that empowers me to bring digital concepts to life. My proficiency spans both front-end and back-end technologies, allowing me to create cohesive, user-centric web solutions. Here's a snapshot of my skill set:
      </p>
      <h3>Front-End</h3>
      <div className='btns'>
        <button><div id="icons"><img src={`${import.meta.env.VITE_API_BASE_URL}/images/html-5.png`} alt="" /></div>HTML</button>
        <button><div id="icons"><img src={`${import.meta.env.VITE_API_BASE_URL}/images/js.png`} alt="" /></div>CSS</button>
        <button><div id="icons"><img src={`${import.meta.env.VITE_API_BASE_URL}/images/css.png`} alt="" /></div>JavaScript</button>
        <button><div id="icons"><img src={`${import.meta.env.VITE_API_BASE_URL}/images/Reactsvg.png`} alt="" /></div>React</button>
        <button><div id="icons"><img src={`${import.meta.env.VITE_API_BASE_URL}/images/jQuery.png`} alt="" /></div>jQuery</button>
        <button><div id="icons"><img src={`${import.meta.env.VITE_API_BASE_URL}/images/ajax.png`} alt="" /></div>AJAX</button>

      </div>
      <h3>Back-End</h3>
      <div className='btns'>
        <button><div id="icons"><img src={`${import.meta.env.VITE_API_BASE_URL}/images/new-php-logo.svg`} alt="" /></div>PHP</button>
        <button><div id="icons"><img src={`${import.meta.env.VITE_API_BASE_URL}/images/laravel-icon-1990x2048-xawylrh0.png`} alt="" /></div>Laravel</button>
        <button><div id="icons"><img src={`${import.meta.env.VITE_API_BASE_URL}/images/2560px-Node.js_logo.svg.png`} alt="" /></div>Node.js</button>
        <button><div id="icons"><img src={`${import.meta.env.VITE_API_BASE_URL}/images/express.png`} alt="" /></div>Express.js</button>
        
      </div>
      <h3>Databases</h3>
      <div className='btns'>
      <button id="white"><div id="icons"><img src={`${import.meta.env.VITE_API_BASE_URL}/images/database-mysql-icon-462x512-6itsq0zm.png`} alt="" /></div>MySQL</button>
      <button id="white"><div id="icons"><img src={`${import.meta.env.VITE_API_BASE_URL}/images/free-mongodb-3629020-3030245.webp`} alt="" /></div>MongoDB</button>
      </div>
      <h3>Methodologies:</h3>
      <div className='btns'>
        <button><div id="icons"><img src={`${import.meta.env.VITE_API_BASE_URL}/images/5396942.png`} alt="" /></div>UML</button>
        <button><div id="icons"><img src={`${import.meta.env.VITE_API_BASE_URL}/images/figma.png`} alt="" /></div>Figma</button>
      </div>
      <h3>Tools:</h3>
      <div className='btns'>
        <button><div id="icons"><img src={`${import.meta.env.VITE_API_BASE_URL}/images/apps-xampp-icon-256x256-h4mje2zt.png`} alt="" /></div>Xampp</button>
        <button><div id="icons"><img src={`${import.meta.env.VITE_API_BASE_URL}/images/Visual_Studio_Code_1.35_icon.svg.png`} alt="" /></div>Visual studio</button>
        <button><div id="icons"><img src={`${import.meta.env.VITE_API_BASE_URL}/images/cropped-favicon-512x512-1.png`} alt="" /></div>Studio 3T</button>
      </div>
      <h3>Language programming</h3>
      <div className='btns'>
        <button><div id="icons"><img src={`${import.meta.env.VITE_API_BASE_URL}/images/4990671.png`} alt="" /></div>Python</button>
        

      </div>
     </div>
    </div>
  )
}

export default Skills
