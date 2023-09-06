"use client"

// components imports
import {
    useEditor,
    EditorContent,
} from "@tiptap/react"
import { MantineExtension } from "@/components/MantineTable"
import BubbleMenu from "@/components/BubbleMenu"

// tiptap extensions
import Table from '@tiptap/extension-table'
import TableCell from '@tiptap/extension-table-cell'
import TableHeader from '@tiptap/extension-table-header'
import TableRow from '@tiptap/extension-table-row'
import StarterKit from "@tiptap/starter-kit"
import FloatingMenu from "@/components/FloatingMenu"
import Placeholder from "@tiptap/extension-placeholder"

export default function Home() {
    const editor = useEditor({
        extensions: [
            StarterKit,
            Table.configure({
                HTMLAttributes: {
                    class: 'table-fixed',
                },
            }),
            TableCell,
            TableHeader,
            TableRow,
            MantineExtension,
            Placeholder.configure({
                includeChildren: true,
                showOnlyCurrent: false,

            })
        ],
        editorProps: {
            attributes: {
                class: 'outline-none'
            }
        }
    })

    return (
        <>
            <EditorContent
                className=" p-4 m-2 rounded text-zinc-100 bg-zinc-900 prose prose-invert max-w-full min-h-screen"
                editor={editor}
            />
            <FloatingMenu editor={editor} />
            <BubbleMenu editor={editor} />
        </>
    )
}
