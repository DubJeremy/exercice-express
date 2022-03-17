import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {wildersRequest} from "../requests/wilders";
import { ImPlus, ImCross } from "react-icons/im";
import BackButton from "../components/BackButton";

export default function FormAddWilder() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const navigate = useNavigate();

  const onSubmit = ({ name, city, title, votes }) => {
          try {
              wildersRequest.create({ name, city, skills: { title, votes } });
              navigate('/');
          } catch (err) {
              console.log(err);
          }
      };

  const [formSkills, setFormSkills] = useState([{ skills: { title: "", votes:"" }}])

  let handleChange = (i, e) => {
    let newFormValues = [...formSkills];
    newFormValues[i][e.target.skills.title] = e.target.skills.value;
    setFormSkills(newFormValues);
 }
    
let addFormFields = () => {
    setFormSkills([...formSkills,{ skills: { title: "", votes: "" }}])
 }

let removeFormFields = (i) => {
    let newFormValues = [...formSkills];
    newFormValues.splice(i, 1);
    setFormSkills(newFormValues)
}


  return (
    <div>
      <BackButton />
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register("name", {required: true} )} placeholder="Nom"/>
        {errors.name && "Il manque le nom le sang"}
        <input {...register("city", {required: true})} placeholder="Ville"/>
        {errors.city && "Et la ville? Non?"}
        {formSkills.map((skill, index) => (
          <div key={index}>
            <input type="text"  {...register("title")} onChange={e => handleChange(index, e)} placeholder="Compétence"/>
            <input type="text" {...register("votes")} onChange={e => handleChange(index, e)} placeholder="Note"/>
            {
                index ? 
                  <button type="button" onClick={() => removeFormFields(index)}><ImCross /></button> 
                : null
            }
          </div>
        ))}
        <button type="button" onClick={() => addFormFields()}>
          <ImPlus /> Ajouter une Compétence
        </button>
        <input type="submit" />
      </form>
    </div>
  );
}