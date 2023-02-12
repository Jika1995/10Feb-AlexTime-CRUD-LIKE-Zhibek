import {React, useState} from "react";
import {Modal, Button, FormControl} from 'react-bootstrap';

const EditPost = ({show, handleClose, editedPost, saveChanges}) => {

    const [post, setPost] = useState(editedPost);
    console.log(post);

    const handleInput = e => {
        let newPost = {
            ...post,
            [e.target.name]: e.target.value
        }
        setPost(newPost)
    };

    function saveEditedPost() {
        for(let key in post) {
            if(post[key] === '') {
                alert('Some inputs are empty!')
                return
            }
        }
        saveChanges(post);
    }

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Post</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="form">
                        <FormControl size="lg" className="my-3" placeholder="Author" value={post.author} name="author" onChange={handleInput} />

                        <FormControl size="lg" className="my-3" placeholder="Content" value={post.content}  name="content" onChange={handleInput} />

                        <FormControl size="lg" className="my-3" placeholder="Image" value={post.image} name="image" onChange={handleInput} />
                    </div>
                </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={saveEditedPost}>
                            Save Changes
                        </Button>
                     </Modal.Footer>
            </Modal>
        </>
    )
};

export default EditPost

