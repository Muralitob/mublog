import React, { useEffect } from 'react'
import { useHistory } from "react-router-dom";
import './postBox.scss';
function PostBox(props, { match }) {
  let history = useHistory();
  return (
    <div className="post cursor" onClick={() => { history.push(`/note/${props.data._id}`) }}>
      <div className="img post-module-thumb">
        <div className="thumb-link">
          <img src={props.data.cover} alt="封面" className="post-thumb" />
        </div>
      </div>
      <section className="desc">
        <p>{props.data.created_at}</p>
        <h3>{props.data.title}</h3>
        <summary>{props.data.summary}</summary>
      </section>
    </div>
  )
}

export default PostBox