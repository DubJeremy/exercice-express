import React, { useState, useEffect } from 'react';
import Card from './Card';
import { wildersRequest } from "../requests/wilders";

const CardList = () => {
  const [loading, setLoading] = useState(true);
  const [wilders, setWilders] = useState([]);

    useEffect(() => {
        // wildersRequest
        //   .getAll()
        //   .then((wildersData) => {
        //     setData(wildersData.data.result);
        //   })
        //   .catch((err) => {
        //     console.log(err);
        //   });
        const recupData = async () => {
          try {
            const wildersData = await wildersRequest.getAll();
            // setWilders(wildersData.data.result);
            if (wildersData.data.result.length) 
            {
              setWilders(
                wildersData.data.result.map(({_id, name, city, skills}) => {
                  return (
                      <Card key={_id} id={_id} name={name} city={city} skills={skills} />
                  )
                })
              )
            } else
            {
              setWilders(<div className="noResult">Aucun résultats</div>);
            }
          } catch (err) 
          {
            console.log(err);
          } finally
          {
            setLoading(false);

          }
        };
        setTimeout(() => {
            recupData();
        }, 2000);
      }, []);

    return <div className="cardList">{loading ? <div className="loading">Chargement en cours</div> : wilders}</div>;
    // (
      //   <div>
      //       {wilders.map(({ _id, name , city, skills}) => {
      //           return <Card key={_id} id={_id} name={name} city={city}/>; // équivalent à Card({id: _id, name: name})
      // })}
      //   </div>
    // );
};

export default CardList;