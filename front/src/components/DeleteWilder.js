import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {wildersRequest} from "../requests/wilders";
import BackButton from "../components/BackButton";

const DeleteWilder = () => {
    const {wilderId} = useParams();
    const navigate = useNavigate();
    const [state, setState] = useState({});

    const deleteWilder = async () => {
        const deleteWilder = await wildersRequest.delete(wilderId);
        if(deleteWilder.data.success) {
            navigate('/');
            console.log(deleteWilder.data.success);
        } else {
            console.log(deleteWilder.data.result);
        }
    };

    useEffect(() => {
        const findWilder = async () => {
          const wilder = await wildersRequest.find(wilderId);
          !wilder.data.success && navigate("/");
          setState(wilder.data.result);
        };
        findWilder();
      }, [navigate, wilderId]);

    return (
        <div>
            <BackButton />
            <p>Êtes vous sûrs de vouloir supprimer {state.name}?</p>
            <p>Le fameux wilder de {state.city}?</p>
            <button onClick={deleteWilder}  className="trash">
                OUI je le veux  
            </button>
        </div>
    );
};

export default DeleteWilder;