import React from 'react'
import { useDispatch } from 'react-redux'
import { filterPost } from '../redux/actions/post/post'
import { Input } from 'reactstrap'
import { RiSearchLine } from 'react-icons/ri'

const SearchInput = () => {
    const dispatch = useDispatch()

    const filter = (data) => {
        dispatch(filterPost(data))
    }

    return (
        <div className="search-input-container" >
            <RiSearchLine className="search-icon" />
            <Input
                onChange={(e) => filter(e.target.value)}
                type="search"
                placeholder="search..."
                className="search-input"
            />
        </div>

    )
}

export default SearchInput
