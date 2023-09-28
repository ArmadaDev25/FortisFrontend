import energies from "../../assets/energy_symbols/Energies";


const ShowTypes = (props) => {
  // const types = props.types;
  props.types.map((type, index) => {
    <p>{type}</p>
  })
}

export default ShowTypes