import { 
  IFrameX, 
  IFrameXDefinition, 
  Image, 
  Video, 
  Map,
  Link,
  Text
} from './blocks'

const Plugin = (editor) => {
  editor.BlockManager.add('text', Text)
  editor.BlockManager.add('link', Link)
  editor.BlockManager.add('image', Image)
  editor.BlockManager.add('video', Video)
  editor.BlockManager.add('map', Map)
  editor.DomComponents.addType('iframex', IFrameXDefinition)
  editor.BlockManager.add('iframex', IFrameX)
}

export default Plugin
