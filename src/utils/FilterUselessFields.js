export function FilterUselessFields(targetObject, defaultObject) {
  const newObject = {}
  const specialKeys = [
    'marginTop',
    'marginRight',
    'marginBottom',
    'marginLeft',
    'paddingTop',
    'paddingRight',
    'paddingBottom',
    'paddingLeft',
    'borderTopLeftRadius',
    'borderTopRightRadius',
    'borderBottomRightRadius',
    'borderBottomLeftRadius',
    'width',
    'height',
    'borderWidth',
    'maxWidth',
    'columnGap',
    'rowGap',
    'fontSize',
  ]
  Object.keys(targetObject).forEach((key) => {
    if (targetObject[key] !== defaultObject[key]) {
      newObject[key] = targetObject[key]
      if (specialKeys.includes(key)) {
        newObject[key] = +targetObject[key] ? targetObject[key] + 'px' : targetObject[key]
      }
    }
  })
  return newObject
}
