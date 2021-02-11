import Label from "./Label"
import Button from "./Button"

export default function TodoBlock(props) {
    const {text, click}= props
  return (
    <div className="todoBlock">
    <Label text={text} />
    <Button className= "deleteButton"  text="X"  onClick={click} />
  </div>
  )
}