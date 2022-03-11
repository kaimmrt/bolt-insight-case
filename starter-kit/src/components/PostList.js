import React from 'react'
import { Card, Button, Badge } from 'reactstrap'
import { useSelector, useDispatch } from 'react-redux'
import moment from 'moment'
import { HiOutlineClock } from 'react-icons/hi'
import { IoTrashBin } from 'react-icons/io5'
import { deletePost } from '../redux/actions/post/post'

const PostList = () => {
    const dispatch = useDispatch()
    const posts = useSelector(state => state.post.filteredPost)

    const Remove = (id) => {
        dispatch(deletePost(id))
    }

    return (
        <div className="post-list-container">
            {posts.map((value, index) => (
                <Card key={index} className="post-container">
                    <img
                        alt="Card image cap"
                        src={`https://quhfqvtatxobdjkrsolt.supabase.in/storage/v1/object/public/${value.image}`}
                        className="post-image"
                    />
                    <div className="post-body">
                        <h2>{value.title}</h2>
                        <div className="tag-container">
                            {value.tags.map((tag, indexTax) => (
                                <Badge className="tag-badge" key={indexTax} color="primary">
                                    # {tag}
                                </Badge>
                            ))}
                        </div>
                        <div className="post-date-container">
                            <HiOutlineClock className="post-date-icon" />
                            <p className="post-date-text">{moment(value.createdAt).format('YYYY-MM-DD')}</p>
                        </div>
                        <p className="post-content">{value.content}</p>
                        <div className="post-footer-container">
                            <Button color="primary">
                                Detail
                            </Button>
                            <IoTrashBin onClick={() => Remove(value._id)} className="post-delete-icon" />
                        </div>
                    </div>
                </Card>

            ))
            }
        </div >
    )
}

export default PostList
