import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchPost, deletePost} from '../actions';

class PostsShow extends Component{
  componentDidMount(){
    if (!this.props.post){
            //waht is this.props.match.params
      const { id } = this.props.match.params;
      this.props.fetchPost(id);
    }
  }

  onDeleteClick = () => {
		const { id } = this.props.match.params;
		
    this.props.deletePost(id, () => {
        this.props.history.push('/');
    });
  }

  render(){
    const {post} = this.props;
    if(!post){
      return <div>Loading ...</div>
    }
    return(
      <div className='text-center'>
        
        <div className='card py-4'>
        	<h3>Title: {post.title}</h3>
          <h4 className='py-3'>Categories: {post.categories}</h4>
          <h5>Content: {post.content}</h5>
        </div>
          <Link className='btn btn-primary' to='/'> Back to index </Link>
          <button 
          className='btn btn-danger '
          onClick={this.onDeleteClick}>
            Delete Post
          </button>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps){
  return{
    post: state.posts[ownProps.match.params.id]
  }
}

export default connect(mapStateToProps, {fetchPost, deletePost})(PostsShow);