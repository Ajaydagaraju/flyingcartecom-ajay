import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import './ck.css'

const Ckedit = () => {
    
        return (
            <div className='mb-3'>
                <h6>Description</h6>
            <div >
                <CKEditor
                    editor={ ClassicEditor }
                    data="<p></p>"
                    onReady={ editor => {
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        console.log( { event, editor, data } );
                    } }
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    } }
                    
                />
            </div>
            </div>
        );
    }


export default Ckedit;