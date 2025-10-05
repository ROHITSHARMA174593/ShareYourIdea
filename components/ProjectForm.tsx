"use client"

import React, { useState } from 'react'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import MDEditor from '@uiw/react-md-editor'

const ProjectForm = () => {
    const [detailsEditor, setDetailsEditor] = useState("")
  return (
    <form action="/" className='project-form'>
        <div>
            <label htmlFor="title" className='project-form_label'>Title</label>
            <Input 
                id='title'
                name='title'
                className='project-form_input'
                required
                placeholder='Project Title'
            />
        </div>
        <div>
            <label htmlFor="description" className='project-form_label'>Description</label>
            <Textarea 
                id='description'
                name='description'
                className='project-form_textarea'
                required
                placeholder='Project Description'
            />
        </div>
        <div>
            <label htmlFor="category" className='project-table_label'>Category</label>
            <Input 
                id='category'
                name='category'
                className='project-form_input'
                required
                placeholder='Project Category (Electronics, Next JS, JAVA, C++ ....'
            /> 
        </div>
        <div>
            <label htmlFor="imageURL" className='project-table_label'>Category</label>
            <Input 
                id='link'
                name='link'
                className='project-form_input'
                required
                placeholder='Project Thumbnail URL ....'
            /> 
        </div>
        {/* Search "MD Editor NPM" on Google and install this package (npm i @uiw/react-md-editor) */}
        <div>
            <div data-color-mode="light">
                <label htmlFor="details" className='project-form_label'>Details</label>
                <MDEditor
                    value={detailsEditor}
                    onChange={(val) => setDetailsEditor(val || "")} 
                    id='details'
                    preview='edit'
                    height={300}
                    style={{borderRadius:20, overflow:'hidden'}}
                    textareaProps={{
                        placeholder:"Describe Your Project in Detail"
                    }}
                    previewOptions={{
                        disallowedElements : ["style"]
                    }}
                />
            </div>
        </div>
    </form>
  )
}

export default ProjectForm