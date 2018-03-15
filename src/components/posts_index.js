import _ from 'lodash';
import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link } from 'react-router-dom';
import {fetchPosts} from '../actions/index';


class PostsIndex extends Component{

componentDidMount(){
  this.props.fetchPosts();
}

renderPosts(){
  return _.map(this.props.posts, post =>{
    console.log('post',post)
    return (
      
      <div style={{width: '400px'}} className='card d-inline-block m-3 text-center list-unstyled'>
        <div className='card-header'>
          {post.title}
        </div>
        <div className='card-text'>
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>
              {post.content}
            </Link>
          </li>
        </div>
      </div>
    );
  });
}
 
  render(){
    return(
      <div>
        <h3 className='text-center my-3'> My Posts</h3>
        <div>
          <ul>
            {this.renderPosts()}
          </ul>
        </div>
          <div>
            <Link className='fixed-bottom text-center btn btn-outline-primary' to='/posts/new'>
              Add a Post
            </Link>
          </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return{posts: state.posts}
}

export default connect(mapStateToProps, {fetchPosts})(PostsIndex);