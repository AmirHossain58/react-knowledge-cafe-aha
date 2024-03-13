import React from 'react';
import Bookmar from '../bookmar/Bookmar';

const Bookmark = ({bookmarks,readingTime}) => {
    return (
            <div>
                <div>
                    <h3 className="text-3xl">Reading Time :{readingTime}</h3>
                </div>
            <h2 className="text-3xl">Bookmarks: {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark => <Bookmar 
                    key={bookmark.id} 
                    bookmark={bookmark}
                    ></Bookmar>)
            }
        </div>
    );
};

export default Bookmark;