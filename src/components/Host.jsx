import Rating from "./Rating.jsx";

function Host({host}) {
    return (
        <div className="host-container">
            <div className="host-name">
                <p>{host.name.split(' ')[0]}</p>
                <p>{host.name.split(' ')[1]}</p>
            </div>
            <img src={host.picture} alt={host.name}/>
        </div>

    )
}

export default Host;
