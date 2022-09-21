import React from 'react'
import Bodypart from './Bodypart'
import Inputfiels from './Inputfiels'
import UploadImage from './UploadImage'
import Ckedit from './Ckedit'

const Post = () => {
  return (
    <>
    <div className='mt-3 mx-2' >
        <h5>Add Post</h5>
        <p>Create A Post Here</p>
        <div className="row mt-3 ">
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-6 mb-3 bg-light">
                        <Bodypart/>
                      <Ckedit/>
                    </div>
                    <div className="col-md-3">
                      <Inputfiels/>
                    </div>
                    <div className="col-md-3">
                      <UploadImage/>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </>
  )
}

export default Post