
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmark from './components/Bookmark/Bookmark'
import Header from './components/Header/Header'

function App() {
  const [bookmarks,setBookmarks]=useState([])
  const [readingTime ,setReadingTime]=useState(0)

  const handleAddRToBookmark= blog=>{
const newBm=[...bookmarks,blog]
setBookmarks(newBm)
  }
  const handleMarkAsRead=(time)=>{
setReadingTime(readingTime+time)
  }

  return (
    <div className='container mx-auto'>
      <Header></Header>
      <div className='md:flex'>
        <Blogs handleAddRToBookmark={handleAddRToBookmark}
        handleMarkAsRead={handleMarkAsRead}
        ></Blogs>
        <Bookmark bookmarks={bookmarks}
        readingTime={readingTime}></Bookmark>
      </div>
    </div>
  )
}

export default App
