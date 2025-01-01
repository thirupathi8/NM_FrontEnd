import React from 'react'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Placeholder from '@tiptap/extension-placeholder'
import Extensions from './Extensions'
import Highlight from '@tiptap/extension-highlight'
import Underline from '@tiptap/extension-underline'
import Subscript from '@tiptap/extension-subscript'
import Superscript from '@tiptap/extension-superscript'
import Bold from '@tiptap/extension-bold'
import Italic from '@tiptap/extension-italic'
import Strike from '@tiptap/extension-strike'
import Code from '@tiptap/extension-code'
import BulletList from '@tiptap/extension-bullet-list'
import Heading from '@tiptap/extension-heading'
import TextAlign from '@tiptap/extension-text-align'

const TextEditor = ({ pdfId }) => {
    const extensions = [StarterKit, Placeholder.configure({placeholder: 'Write something …',}), Highlight, Underline, Subscript, Superscript, Bold, Italic, Strike, Code, BulletList, Heading.configure({levels: [1, 2, 3],}), TextAlign.configure({types: ['heading', 'paragraph'],})]
    const content = ''
    const editor = useEditor({
        extensions,
        content,
        editorProps: {
            attributes: {
                class: 'focus: outline-none h-screen p-5'
            }
        }
    })
    return (
        <>
            <Extensions editor={editor} pdfId={pdfId}/>
            <EditorContent editor={editor} />
        </>
    )
}

export default TextEditor
