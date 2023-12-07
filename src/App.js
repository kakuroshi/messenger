import FunctionalPart from "../src/Components/FunctionalPart/Js/FunctionalPart"

const App = (props) => {

    return (
        <div className="allEl">
            <FunctionalPart state={props.state}/>
        </div>
    )
}

export default App