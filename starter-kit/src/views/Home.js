import React, { useState, useEffect } from 'react'
import { Card, Input } from 'reactstrap'
import { useDispatch } from 'react-redux'
import { fetchPosts } from '../redux/actions/post/post'
import PostList from '../components/PostList'
import AddNewPostModal from '../components/AddNewPostModal'
import SearchInput from '../components/SearchInput'

const Home = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch])

  return (
    <div>
      <Card className="search-input-card">
        <SearchInput />
        <AddNewPostModal />
      </Card>
      <PostList />
    </div>
  )
}

export default Home
