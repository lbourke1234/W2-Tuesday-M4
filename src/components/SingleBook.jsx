import React from 'react'
import { Card } from 'react-bootstrap'
// import CommentArea from './CommentArea'

class SingleBook extends React.Component {

    state = {
        selected: false
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (prevProps !== this.state.props) {
            console.log('hello')
        }
    }

    render() {
        return (
            <>
                <Card
                // () => this.setState({ selected: !this.state.selected })
                    onClick={() => this.props.getAndSetAsin(this.props.book.asin)}
                    style={{ border: this.state.selected ? '3px solid red' : 'none' }}
                >
                    <Card.Img variant="top" src={this.props.book.img} />
                    <Card.Body>
                        <Card.Title style={{ color: 'black' }}>{this.props.book.title}</Card.Title>
                    </Card.Body>
                </Card>
                {
                    // this.state.selected && <CommentArea asin={this.props.book.asin} />
                }
            </>
        )
    }

}

export default SingleBook