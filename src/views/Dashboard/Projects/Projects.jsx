import React from 'react'
import Cards from './Cards'

function Projects() {
  return (
    <div className='Projects gen'>
      <div className='header'>
        <div className='title'>
            <h2>My Projects</h2>
        <div className='search'>
          <input type="text" placeholder='Find a project...'/>
          <button><i class='bx bx-search'></i></button>
        </div>
        </div>
        <div className='buttons'>
            <div className='buttonsum'>
            <button>HTML</button>
            <button>CSS</button>
            <button>Javascript</button>
            <button>React</button>
            <button>jQuery</button>
            </div>
            <div className='buttonsum'>
            <button>Laravel</button>
            <button>PHP</button>
            <button>Nodejs</button>
            <button>Ajax</button>
            <button>Python</button>
            <button>MYSQL</button>
            <button>Mongodb</button>
            </div>
            {/* <div className='intro'>
            In my portfolio, you'll find an array of web development projects that represent my journey as a Full Stack Developer. These projects are more than just lines of code; they are a testament to my dedication to crafting exceptional digital experiences.
            </div> */}
        </div>
      </div>
      <div className='cardsP'>
        <Cards/>
      </div>
    </div>
  )
}

export default Projects
