const modules = import.meta.glob('./*/**.jsx', { eager: true })
const result = {}
Object.keys(modules).forEach((path) => {
  Object.keys(modules[path]).forEach((name) => {
    result[name] = modules[path][name]
  })
})
export default result
