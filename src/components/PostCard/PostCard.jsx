import React from "react";
import {Card, Button} from 'react-bootstrap';
import Like from "../Like/Like";

const PostCard = ({item, deletePost, getOnePost}) => {

    return (
        <Card style={{ width: '18rem'}}>
            <Card.Img variant="top" src={item.image} />
            <Card.Body>
                <Card.Title>{item.author}</Card.Title>
                <Card.Text>
                    {item.content}
                </Card.Text>
                <Button variant="danger" onClick={() => deletePost(item.id)} className="mx-2">Delete</Button>
                <Button variant="primary" onClick={() => getOnePost(item.id)}>Edit</Button>
                <Like item={item}/>
            </Card.Body>
        </Card>
    )
};

export default PostCard