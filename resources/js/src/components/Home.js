import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import AppContainer from './AppContainer';
import api from '../api';
import List from './List';

const Home = () => {

    const [posts, setPosts] = useState(null);

    const fetchPosts = () => {
        api.getAllPosts().then(res => {
            const result = res.data;
            setPosts(result.data)
            // console.log(result.data)
        })
    }

    useEffect(() => {
        fetchPosts();
    }, []);

    const renderPosts = () => {
        if(!posts){
            return (<tr>
                <td colSpan="4">
                    Loading posts...
                </td>
            </tr>
            )
        }
    
        if(posts.length === 0){
            return (<tr>
                <td colSpan="4">
                    There are no posts yet
                </td>
            </tr>
            )
        }

        return <List posts={posts} fetchPosts={fetchPosts} />
    }

    return (
        <AppContainer title="Home">
            <Link to="/add" className="btn btn-primary">Add</Link>
            <div className="table-responsive">
                <table className="table table-stripped mt-4">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderPosts()}
                    </tbody>
                </table>
            </div>
        </AppContainer>
    );
}

export default Home;