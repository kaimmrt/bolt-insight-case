import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, Spinner } from 'reactstrap'
import { useDispatch } from 'react-redux'
import { createPost } from '../redux/actions/post/post'
import { supabase } from '../networking/supabase'
import { Form, Input, Select } from 'antd'
import { MdEditNote } from 'react-icons/md'

const AddNewPostModal = () => {
    const dispatch = useDispatch()

    const [basicModal, setBasicModal] = useState(false)
    const [image, setImage] = useState(null)
    const [loading, setLoading] = useState(false)

    const onFinish = async (values) => {
        setLoading(true)
        if (image) {
            const { data, error } = await supabase.storage.from("avatars").upload(`${Date.now()}_${image.name}`, image)

            if (error) {
                setLoading(false)
                console.log(error)
            }

            if (data) {
                setLoading(false)
                dispatch(createPost({ ...values, image: data.Key }))
                setBasicModal(!basicModal)
            }
        }
    }

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo)
    }

    if (loading) return <Spinner color="primary" size="" >  Loading...</Spinner>
    return (
        <div className='basic-modal'>
            <Button.Ripple className="button-ripple" color='primary' outline onClick={() => setBasicModal(!basicModal)}>
                <MdEditNote className="add-button" /> Add New Post
            </Button.Ripple>
            <Modal isOpen={basicModal} toggle={() => setBasicModal(!basicModal)}>
                <ModalHeader toggle={() => setBasicModal(!basicModal)}><MdEditNote className="add-button" /> Add New Post</ModalHeader>
                <ModalBody>
                    <Form
                        name="basic"
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            name="title"
                            rules={[
                                {
                                    required: true,
                                    message: 'please enter a title!'
                                }
                            ]}
                        >
                            <Input placeholder="Title..." />
                        </Form.Item>

                        <Form.Item
                            name="content"
                            rules={[
                                {
                                    required: true,
                                    message: 'please enter a content!'
                                }
                            ]}
                        >
                            <Input.TextArea placeholder="Content..." />
                        </Form.Item>

                        <Form.Item
                            name="tags"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please add at least one category!'
                                }
                            ]}
                        >
                            <Select mode="tags" placeholder="Tags Mode" />
                        </Form.Item>

                        <input type="file" accept={"image/jpeg image/png image/jpg"} onChange={e => setImage(e.target.files[0])} />
                        <br />
                        <Form.Item
                        >
                            <Button color="primary">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </ModalBody>
            </Modal>
        </div>
    )
}

export default AddNewPostModal
