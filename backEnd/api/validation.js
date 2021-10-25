module.exports = app => {
  function existirValor(value, msg){
    if(!value) throw msg
    if(Array.isArray(value) && value.length === 0) throw msg
    if(typeof value === 'string' && !value.trim()) throw msg
  }

  function naoExistiValor(value, msg){
    try {
      existsOrError(value, msg)
    } catch(msg) {
        return
    }
    throw msg
  }
  function existeDoisValores(valueA, valueB, msg){
    if(valueA !== valueB) throw msg
  }
  return {existeDoisValores, naoExistiValor, existirValor}
}