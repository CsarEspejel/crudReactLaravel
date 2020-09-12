import React from 'react';
import {Link} from 'react-router-dom';
import api from '../api';

const Item = (props) => {
   return <tr>    
        <td>{props.post.id}</td>
        <td>{props.post.title}</td>
        <td>{props.post.description}</td>
        <td>
            <Link 
            to={'/edit/'+props.post.id} 
            className="btn btn-warning">
                Edit
            </Link>
            <button
            type="button" 
            className="btn btn-danger"
            onClick={() => {
                api.deletePost(props.post.id).then(
                    props.fetchPosts()
                ).catch(err => {
                    alert('failed to delete post with id : ' + post.id);
                });
            }}>
                Delete
            </button>
        </td>
    </tr>
}

export default Item;