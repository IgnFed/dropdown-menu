import Dropdown from "../components/dropdown";

const DROPDOWN_CONTENT = [
  {
    profileName :  "Sandra Cassa",
  }
]

export default function  Home(){
  return(
    <div className="container-dropdown">
      <Dropdown content={DROPDOWN_CONTENT} />
    </div>
  )
}