import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';

const List = (props) => {

    return props.posts.map(post => {
        return <Item key={post.id} post={post} fetchPosts={props.fetchPosts} />
    // console.log('title: '+post.title + ' description: '+post.description);
    
    })
}

List.propTypes = {
    posts: PropTypes.array.isRequired,
}

export default List;