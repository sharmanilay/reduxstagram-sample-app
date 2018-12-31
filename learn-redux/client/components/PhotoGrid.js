import React, {Component} from 'react'
import Photo from './Photo'
import { throws } from 'assert';
 class PhotoGrid extends Component{
     constructor(props){
         super(props)
         this.returnPosts = this.returnPosts.bind(this)
     }
     returnPosts(){
         let images = this.props.posts.map((post,i) => <Photo {...this.props} key={i} post={post} id={i} />)
        return (
            <div className="photo-grid">{images}</div>
        )
     }
     render(){
         return (
            <div>
                <p>I'm the photo grid</p>
                {this.returnPosts()}
            </div>
        )
     }
 }
 export default PhotoGrid