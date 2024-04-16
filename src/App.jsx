import SelectorsComponents from './components/selectors'
import { RenderNode } from './components/editor/RenderNode'
import { Editor } from '@craftjs/core'
import Layout from './components/layout'

function App() {
  return (
    <Editor
      resolver={{
        ...SelectorsComponents,
      }}
      onRender={RenderNode}
    >
      <Layout></Layout>
    </Editor>
  )
}

export default App
