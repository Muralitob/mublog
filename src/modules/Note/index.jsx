import React from 'react'
import api from '../../services/note'
import MusicBar from '../../components/MusicBar/MusicBar'
import Tablet from '../../components/Tablet/Tablet'
import './note.scss';

export default class Note extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {},
      tables: [],
      content: ''
    }
  }

  fetchNoteData = async () => {
    const { id } = this.props.match.params
    let result = await api.getNote(id)
    this.setState({
      data: result.articleInfo
    })
  }

  createMarkup(content) {
    return { __html: content };
  }

  componentDidMount() {
    this.fetchNoteData()
  }

  render() {
    let { data, tables, content } = this.state
    return (
      <div className="note">
        111
        <MusicBar title={data.title}></MusicBar>
        <button  onClick={() => {this.props.history.push('/')}}>Go to HomePage</button>
        <main className="container">
          <article className="mt-5">
            <div className="title"><h1>{data.title}</h1></div>
            <div className="stuff mt-2"><span>{data.created_at}</span> 阅读 {data.views}
              {/* 字数 2941 评论 129 喜欢 545 */}
            </div>
            {/* <ReactMarkdown className="content" source={data.source}></ReactMarkdown> */}
            <div className="content" dangerouslySetInnerHTML={this.createMarkup(data.contentToMark)}>
            </div>
          </article>
          <aside className="ml-1">
            {/* <nav className="post-about">相关</nav> */}
            {/* <nav className="post-nav" dangerouslySetInnerHTML={createMarkup(data.tabledom)}></nav> */}
            <nav className="post-nav">
              <Tablet source={data.contentToMark}></Tablet>
            </nav>
          </aside>
        </main>
      </div>
    )

  }
}

