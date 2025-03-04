import React from 'react'
import './home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

function home() {
  return (
    <div className='home'>
        <nav>
            <div>Banquet Hall</div>
            <div className='buttons'>
            <button>Login</button>
            <button>Signup</button>
            </div>
        </nav>
        <section className='search'>
        <span><FontAwesomeIcon icon={faLocationDot} className="location-icon" /></span>
            <input type='text' placeholder='Enter location'></input>
        </section>
        <main className='container'>
            {/* <h1>halls</h1> */}
            <div><img src="../assets/img1.jpeg" alt="Banquet Hall 1" /><div>HELLO</div></div>
            <div><img src="../assets/img2.jpeg" alt="Banquet Hall 1" /><div>hello</div></div>
            <div><img src="../assets/img3.jpeg" alt="Banquet Hall 1" /><div>hello</div></div>
            <div><img src="../assets/img4.jpeg" alt="Banquet Hall 1" /><div>hello</div></div>
            <div><img src="../assets/img5.jpeg" alt="Banquet Hall 1" /><div>hello</div></div>
            <div><img src="../assets/img6.jpeg" alt="Banquet Hall 1" /><div>hello</div></div>
            <div><img src="../assets/img7.jpeg" alt="Banquet Hall 1" /><div>hello</div></div>
            <div><img src="../assets/img8.jpeg" alt="Banquet Hall 1" /><div>hello</div></div>
            <div><img src="../assets/img9.jpeg" alt="Banquet Hall 1" /><div>hello</div></div>

        </main>
        <footer></footer>
    </div>
  )
}

export default home