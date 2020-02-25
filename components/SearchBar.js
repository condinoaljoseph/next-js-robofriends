import React, {useState, Fragment} from 'react'

const SearchBar = () => {
    const [text, setText] = useState('')

    const onChangeHandler = e => {
        setText(e.target.value);
    }

    return (
        <Fragment>
            <input type="text" value={text} onChange={onChangeHandler} />
        </Fragment>
    )
}

export default SearchBar
