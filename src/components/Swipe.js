import React, { Component } from "react";

class Swipe extends Component {
  addColor=(index,nodes)=>{
    nodes[index].style.background='red'
    for(let i=0;i<nodes.length;i++){
      if(i!==index){
        nodes[i].style.background='none'
      }
    }
  }
  componentDidMount () {
    let slides=document.querySelector('.slides')
    let count=0
    let timer=setInterval(()=>{
      slides.style.left=-200*count+'px'
      count++
      this.addColor(count,slides.children)
      if(count==slides.children.length-2){
        count=0
      }
    },2000)
  }
  
  
  render() {
    let styles = {
      /*轮播图整体容器*/
      slider: {
        width: '600px',
        height: '200px',
        overflow: 'hidden',
        position: 'relative',
        border: '5px solid #2196F3',
        margin: '0 auto'
      },
      /*轮播图内容容器*/
      slides: {
        display: 'block',
        position: 'relative',
        width: '1400px',
        height: '200px',
        margin: 0,
        padding: 0,
      },
      /*轮播图具体内容容器*/
      slide: {
        float: 'left',
        listStyleType: 'none',
        width: '200px',
        height: '200px',
        /*以下样式可选，主要为了测试代码看的方便*/
        boxSizing: 'border-box',
        border: '1px solid darkgreen',
        textAlign: 'center',
        lineHeight: '200px',
      }
    }
    return (
      <section>
        <h3>distance</h3>
        <div id="slider" style={styles.slider}>
          <div>
            <ul className="slides" style={styles.slides}>
              <li className="slide" style={styles.slide}>a</li>
              <li className="slide" style={styles.slide}>b</li>
              <li className="slide" style={styles.slide}>c</li>
              <li className="slide" style={styles.slide}>d</li>
              <li className="slide" style={styles.slide}>e</li>
              <li className="slide" style={styles.slide}>a</li>
              <li className="slide" style={styles.slide}>b</li>
            </ul>
          </div>
        </div>
      </section >
    );
  }
}

export default Swipe;


