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
                        <div className="skills">
                            <p key={skill._id} className="desc">{skill.title} :</p>
                            <p key={skill._id} className="note">{skill.votes}<span className="desc">/10</span></p>
                        </div>
                    )
                })}
            </ul>
        </div>
    )
};

export default Card;