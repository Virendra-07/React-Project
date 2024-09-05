// RTE --->>> Real Time Editor

import React from 'react';
import {Editor } from '@tinymce/tinymce-react';
import {Controller } from 'react-hook-form';

export default function RTE({name, control, label, defaultValue=""}) {
  return (
    <div className='w-full'>
        { label && <label className=' inline-block mb-1 pl-1'>{label}</label>}
        <Controller
            name = {name || "content"}
            control={control}
            // ab render me jisko bhi track karna hai usko likh do 
            render={ ({field: {onChange} }) => (
                <Editor 
                    initialValue={defaultValue}
                    init={ {
                        initialValue: defaultValue,
                        height: 500,
                        menubar: false,
                        plugins: [
                            'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                            'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                            'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
                        ],
                        toolbar: 'undo redo | blocks | ' +
                        'bold italic forecolor | alignleft aligncenter ' +
                        'alignright alignjustify | bullist numlist outdent indent | ' +
                        'removeformat | help',
                        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                    } }
                    // yeha jo method use kar whi upper field me same de kyuki ye whi se lega 
                    onEditorChange = {onChange}
                />
            )}
        />
    </div>
  )
}


