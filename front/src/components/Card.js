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
        </div>
    )
};

export default Card;