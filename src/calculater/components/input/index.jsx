import './style.css'
function Input ({placeholder='',onInput=()=>{},value=''}={}){

  function handleInput(e){
    onInput(e.target.value)
  }

  return <input value={value} onInput={handleInput} placeholder={placeholder} type="text" />
}
export default Input