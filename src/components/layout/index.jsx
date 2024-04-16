import EditorContainer from './editor'
import SelectorContainer from './selector'
import SettingContainer from './setting'

export default function Layout() {
  return (
    <div className='h-screen flex justify-stretch m-w-1208'>
      <SelectorContainer />
      <EditorContainer />
      <SettingContainer />
    </div>
  )
}
