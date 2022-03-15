const Card = ({ id, name, city, skills }) => {
    return (
        <div className="card">
            <img src="./assets/images/imgfdp.png" alt="fdp" />
            <ul>
                <li>
                    <span className="desc">Nom :</span> {name}
                </li>
                <li>
                    <span className="desc">Ville :</span> {city}
                </li>
            </ul>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore doloremque a, excepturi quis consectetur cupiditate quas? Ea vitae amet sit optio labore esse nostrum praesentium recusandae in, vel corrupti quo!
            </p>
            <ul>
                {skills.map((skill) => {
                    return (
                        <div className="skills" key={skill._id}>
                            <p className="desc">{skill.title} :</p>
                            <p className="note">{skill.votes}<span className="desc">/10</span></p>
                        </div>
                    )
                })}
            </ul>
            <img src="./assets/images/WCS.png" alt="WCS logo" />
            <button className="trash">
                <i className="fas fa-trash-alt"></i>  
            </button>
        </div>
    )
};

export default Card;