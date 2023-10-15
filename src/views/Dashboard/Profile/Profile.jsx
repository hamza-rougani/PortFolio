import React from 'react'

function Profile() {
  return (
    <div className='Profile'>
      <div className='background'>
        <div className='info'>
        <div className='image'><img src="images/profile.png" alt="" /></div>
        <div className='text'>
            <span className='gene name'><div id="icons"><img src="images/agitant-la-main.png" alt="" /></div>Hi, I am HAMZA ROUGANI</span>
            <span className='gene desc'><div id="icons"><img src="images/programmation.png" alt="" /></div>Developer Full Stack</span>
        </div>
        
        </div>
      </div>
      <div className='introduct'>
        <div className='start'>
        <h2>Introduction</h2>
        <div>
        Hello, I'm Hamza Rougani, a passionate and aspiring Full Stack Developer from Morocco. I'm 23 years old and have recently graduated from OFPPT (Office de la Formation Professionnelle et de la Promotion du Travail) as a Full Stack Developer in 2023. I'm excited to embark on a journey that combines my technical skills, creativity, and determination to create innovative solutions.
        </div>
        <h3 className='gene'>Education</h3>
        <div>Full Stack Developer Graduate from OFPPT (2023)</div>
        <h3 className='gene'>Location</h3>
        <div>agadir,tikiouine, assaka, Based in Morocco</div>
        <h3 className='gene'>About Me</h3>
        <div>I have always been fascinated by the dynamic world of web development and the endless possibilities it offers. As a Full Stack Developer, I enjoy the challenge of working with both the front-end and back-end technologies, bringing ideas to life and ensuring seamless user experiences.</div>
        <div>With a strong foundation in web development, I'm constantly seeking opportunities to expand my knowledge, refine my skills, and take on new projects that allow me to grow as a develop</div>
        <div>I am driven by a passion for problem-solving, continuous learning, and a commitment to delivering high-quality solutions to the ever-evolving digital landscape. I look forward to collaborating with others, exploring new technologies, and contributing to exciting projects in the world of web development.</div>
        <div>Thank you for visiting my portfolio, and feel free to explore my work and projects. If you have any questions or opportunities for collaboration, don't hesitate to get in touch.</div>
      </div>

      </div>
    </div>
  )
}

export default Profile
