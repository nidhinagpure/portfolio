import '../../component/project/Project.css';

import Projectimg from '../../assets/Project.png';
import Hoverline from '../../assets/under-line.svg';

const Project = () => {
  return (
    <div>
      <div id="project" className='work-conatiner'>
        <p>My latest Work</p>
        <img src={Hoverline} alt=""/>
      </div>
    <div className='project'>
      <div className='project-container'>
        <div className='project-img'>
             <a href=''><img src={Projectimg} alt="project-img" /></a>
          <div className='project-info'>
            <h3>Project Info 👍</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel,
              tenetur iure ab incidunt nam tempore voluptates molestiae nulla
              ea minima quo. Ex, neque doloremque. Officia quibusdam
              voluptatem aliquam expedita quas. </p>
          </div>
          <div className='project-link'>
            <a href='https://github.com/nidhinagpure/portfolio'target='_blank'rel='noopener noreferrer'>😊: Live Demo</a>
            <a href='https://github.com/nidhinagpure/portfolio'target='_blank'rel='noopener noreferrer'>😀: Repository</a>
          </div>
        </div>
        </div>

      <div className='project-img'>

        <a href='https://github.com/nidhinagpure/portfolio'><img src={Projectimg} alt="project-img" /></a>
        <div className='project-info'>
          <h3>Project Info 👍</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel,
            tenetur iure ab incidunt nam tempore voluptates molestiae nulla
            ea minima quo. Ex, neque doloremque. Officia quibusdam
            voluptatem aliquam expedita quas. </p>

        </div>
        <div className='project-link'>
          <a href='https://github.com/nidhinagpure/portfolio'target='_blank'rel='noopener noreferrer'>😊: Live Demo</a>
          <a href='https://github.com/nidhinagpure/portfolio'target='_blank'rel='noopener noreferrer'>😀: Repository</a>
        </div>
      </div>


      <div className='project-img'>

        <a href='https://github.com/nidhinagpure/portfolio'><img src={Projectimg} alt="project-img" /></a>
        <div className='project-info'>
          <h3>Project Info 👍</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel,
            tenetur iure ab incidunt nam tempore voluptates molestiae nulla
            ea minima quo. Ex, neque doloremque. Officia quibusdam
            voluptatem aliquam expedita quas. </p>

        </div>
        <div className='project-link'>
          <a href='https://github.com/nidhinagpure/portfolio'target='_blank'rel='noopener noreferrer'>😊: Live Demo</a>
          <a href='https://github.com/nidhinagpure/portfolio' target='_blank'rel='noopener noreferrer'>😀: Repository</a>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Project
