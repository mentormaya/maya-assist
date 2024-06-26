import _Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

interface Props {
  content: string
}

const test = `
# Techstack used to build:

---

1. Electron.js to create a cross-platform App.
2. Next.js To Create front-end UI.
3. Prisma as ORM to transact with DB.
4. SQlite for Database(can be used with others.)
5. Various APIs to show or process the data.

`

const Markdown = ({ content }: Props) => {
  return (
    <_Markdown remarkPlugins={[remarkGfm]} className="p-4 text-justify">{content}</_Markdown>
  )
}

export default Markdown