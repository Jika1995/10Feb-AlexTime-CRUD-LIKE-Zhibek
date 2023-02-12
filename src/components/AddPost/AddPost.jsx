import {React, useState} from "react";
import {Form, Button} from 'react-bootstrap';

const AddPost = ({addPost}) => {

    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState('')

    function createPost() {
        if(!author || !content || !image) {
            alert('Some inputs are empty!');
            return
        }

        let newPost = {
            id: Date.now(),
            author,
            content,
            image, 
            isLike: false
        };

        addPost(newPost);

        setAuthor('');
        setContent('');
        setImage('');
        console.log(newPost);
    }

    return (
        <Form className="w-50 m-auto my-5">
            <Form.Group className="mb-3">
                <Form.Label>Author</Form.Label>
                <Form.Control type="text" placeholder="Author" value={author} onChange={e => setAuthor(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Content</Form.Label>
                <Form.Control type="text" placeholder="Content" value={content} onChange={e => setContent(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Image</Form.Label>
                <Form.Control type="text" placeholder="Image URL" value={image} onChange={e => setImage(e.target.value)} />
            </Form.Group>
            <Button variant="primary" onClick={createPost}>
                Add Post
            </Button>
        </Form>
    )
};

export default AddPost