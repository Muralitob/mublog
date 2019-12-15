import React from 'react'
import Head from './Head'
import './About.scss';
function About(props) {

  return (
    <div className="about">
      {/* <Head history={props.history}></Head> */}
      <section className="container">
        <article>
          <p>HHHHH,JOJO看太多了,做了这么一个网站。如果你不知道JOJO,请务必观赏一下</p>
          <p>如果你也是JOJO粉,希望能为你带来一份快乐。</p>
          <div className="mt-2 page">
            <p>
              <span>
                <i className="fa fa-github-alt"></i>
                <a className="ml-1" target="_blank" href="https://github.com/Muralitob">https://github.com/Muralitob</a>
              </span>
            </p>
          </div>
        </article>
      </section>
    </div>
  )
}

export default About