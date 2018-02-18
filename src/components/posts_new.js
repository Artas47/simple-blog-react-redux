import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {createPost} from '../actions';

class PostsNew extends Component{

    renderField(field){
        const { meta: {touched, error} } = field;

        const className = `form-control ${touched && error ? 'is-invalid' : ''}`;

        return (
            <div>
            <label>{field.label}</label>
                <input
                    className={className}
                    type='text' 
                    {...field.input}
                />
                <div className='text-help'>
                {touched ? error : ''}
                </div>
            </div>
        )
    }

    onSubmit = (values) => {
        this.props.createPost(values);
    }

    render(){
        const { handleSubmit } = this.props;

       return(
        <form  onSubmit={handleSubmit(this.onSubmit)}>
                <Field 
                    label='Title'
                    name='title'
                    component={this.renderField}
                />
                <Field 
                    label='Categories'
                    name='categories'
                    component={this.renderField}
                />
                <Field 
                    label='Post Content'
                    name='content'
                    component={this.renderField}
                />

                <button type='submit' className ='btn btn-primary'>
                    Submit
                </button>

                <Link className='btn btn-danger' to='/'>
            Cancel
          </Link>
        </form>
        )
    }
}

function validate(values){
    const errors = {};

    //validate the inputs from 'values'
    if(!values.title) {
        errors.title = 'Enter a title!';
    }
    if(!values.categories) {
        errors.categories = 'Enter a categories!';
    }
    if(!values.content) {
        errors.content = 'Enter a content!';
    }
    
    //if errors is empty, the form is fine to submit
    //if errors has any proporities, redux form assumes form is invalid
    return errors;
}

export default reduxForm({
    validate: validate,
    form: 'PostsNewForm'
})(
    
    connect(null, {createPost})(PostsNew)
);

