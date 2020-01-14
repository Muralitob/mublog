import React, { useState, useEffect } from 'react'
import Header from '../../components/Header/Header'
import PostBox from '../../components/postBox/postBox'
import api  from '../../services'
import './Home.scss'

function Home(props) {
  const [posts, setPosts] = useState({})
  // const [classifyList, setClassifyList] = useState([])
  useEffect(() => {
    async function fetchNotes(classify) {
      console.log(classify)
      let res = await api.note.getNoteListByClassify(classify, 8)
      setPosts({
        [classify]: { 
          lists: res.articleLists,
          total: res.total
        },
        
      })
    }
    async function fetchClassify() {
      let { lists } = await api.note.getClassify()
      let t = lists.map(e => {
        return fetchNotes(e.classify)
      })
      Promise.all(t)
    }
    fetchClassify()
  }, [])
  function goToPage(pathname) {
    props.history.push({pathname});
  }

  function goToAboutPage() {
    goToPage('/about');
  }
 
  function goToListPage() {
    goToPage('/detail');
  }
  return (
    <div id="home">
      <Header></Header>
      <section className="main mt-3">
        {
          Object.keys(posts).map((e, index) => {
            return (
              <div className="block-area" key={index}>
              <div className="classify mb-1 ml-1"><span>{e} × {posts[e].total}</span></div>
                <ul className="post-list">
                  {
                    posts[e].lists.length>0 && posts[e].lists.map((item, index)=> {
                      return (
                        <li className="post-module-item" key={index}>
                          <PostBox data={item}  />
                        </li>
                      )
                    })
                  }
                </ul>
              </div>
            )
          })
        }
      </section>
    </div>
  )
}

export default Home
