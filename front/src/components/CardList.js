import React, { useState, useEffect } from 'react';
import Card from './Card';
import { wildersRequest } from "../requests/wilders.js";
// import FormAddWilder from '../pages/FormAddWilder';

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
              setWilders(<div>Aucun résultats</div>);
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
        }, 500);
      }, []);

    return (
      <>
        <div className="cardList">
          {loading ? <div className="loading">Chargement en cours</div> : wilders}
        </div>
      </>
    )
};

export default CardList;