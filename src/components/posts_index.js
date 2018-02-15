import _ from 'lodash';
import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions/index';

class PostsIndex extends Component{

componentDidMount(){
  this.props.fetchPosts();
}

renderPosts(){
  return _.map(this.props.posts, post =>{
    return (
      <li>
         TITLE:{post.title}
         CONTENT: {post.content}
      </li>
    );
  });
}

  render(){
    return(
      <div>
        <h3>Posts</h3>
        <ul>
          {this.renderPosts()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state){
  return{posts: state.posts}
}


export default connect(mapStateToProps, {fetchPosts: fetchPosts})(PostsIndex);