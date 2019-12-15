import React, { useEffect, useState } from 'react'
import  './Tablet.scss';
import $ from 'jquery'

export default class Tablet extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tables: [],
      content: ''
    }
  }
  componentDidUpdate(nextProps) {
    if (nextProps.content !== this.props.content) {
      this.handleParse()
    }
  }
  componentWillReceiveProps() {
    let self = this
    // console.log(this.props)
    setTimeout(function() {
      self.handleParse()
    },0)
  }
  handleScroll(hash) {
    var mao = $("#" + hash); //获得锚点   
     if (mao.length > 0) {//判断对象是否存在   
         var pos = mao.offset().top;  
         var poshigh = mao.height();  
         $("html,body").animate({ scrollTop: pos-poshigh-30 }, 300);  
     }  
    // setTimeout(() => window.scrollTo(0, window.scrollY - 10),100)
  }

  handleParse() {
    const source = this.props.source
    let result = source
    const tables = []
    if(source) {
      result = source.replace(/<(h\d).*?>.*?<\/h\d>/g, (match, tag) => {
        const hash0 = match.replace(/<.*?>/g, '')
        const txt = hash0.replace(/ /g,'').replace(/\#/g, '')
        let hash = txt.toLowerCase().replace(/<>/g, '').replace(/\？/g, '')
        .replace(/\:/g, '').replace(/\./g, '').replace(/\?/g, '')
        tables.push({ hash, tag, txt })
      })
    }
    this.setState({ tables, content: result })
  }

  render() {
    const { tables, content } = this.state
    return (
      <div className="tablet">
        {
          tables.length>0 &&(
            <div className="blog-table" ref={this.table}>
              <h4>目录</h4>
              {tables.map(({ hash, tag, txt }, index) => (
                <div key={index} className="blog-table-item">
                  <a onClick={()=>{this.handleScroll(hash)}} className={'blog-table-item-' + tag} href={'#' + hash}>
                    {txt}
                  </a>
                </div>
              ))}
            </div>
          )
        }
      </div>
    )
  }
}