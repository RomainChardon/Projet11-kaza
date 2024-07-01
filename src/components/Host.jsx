function Host({host}) {
    console.log(host)

    return (
        <div className="host-container">
            <p>{host.name}</p>
            <img src={host.picture} alt={host.name}/>
        </div>

    )
}

export default Host;
