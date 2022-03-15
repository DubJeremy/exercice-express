import { useForm, useFieldArray } from "react-hook-form";
import { useParams, useNavigate } from "react-router-dom";
import { wildersRequest } from "../requests/wilders";
import { useEffect, useState } from "react";
import { ImCheckmark2, ImCross, ImPlus } from "react-icons/im";
// import BackButton from "./BackButton";
// import PopInfo from "./PopInfo";
// import ModalAddSkill from "./ModalAddSkill";
// import { notify } from "react-notify-toast";

const AddWilder = () => {
  const { wilderId, editing } = useParams();
  const navigate = useNavigate();
  const [wilderData, setWilderData] = useState({});
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };
  const {
    control,
    register,
    handleSubmit,
    setValue,

    formState: { errors },
  } = useForm();

  const { fields, append, update } = useFieldArray({
    control,
    name: "skills",
  });

  useEffect(() => {
    const findWilder = async () => {
      const wilder = await wildersRequest.find(wilderId);
      !wilder.data.success && navigate("/404");

      setLoading(false);
      setWilderData(wilder.data.result);
    };

    if (editing !== '0') {
      findWilder();
    } else {
      setLoading(false);
    }
  }, [navigate, wilderId, editing]);

  useEffect(() => {
    const { name, city } = wilderData;
    setValue("name", name);
    setValue("city", city);
    wilderData.skills?.map((skill) => {
      return !fields.find((e) => e._id === skill._id) && append(skill);
    });
  }, [wilderData, append, fields, setValue]);

  const onSubmit = async (data) => {
    let updateWilder;
    if (editing !== '0') {
      updateWilder = await wildersRequest.update({ _id: wilderId, ...data });
    } else {
      updateWilder = await wildersRequest.create(data);
    }
    if (updateWilder.data.success) {
      if (editing !== '0') {
        console.log("Wilder édité avec succès!");
      } else {
        console.log("Le wilder a été créé avec succès!");
        navigate(`/wilder/instance/1/${updateWilder.data.result._id}`);
      }
    } else {
      console.log(`Une erreur s'est produite : ${updateWilder.data.result}`);
    }
    // if (updateWilder.data.success) {
    //   if (editing !== '0') {
    //     notify.show("Wilder édité avec succès!");
    //   } else {
    //     notify.show("Le wilder a été créé avec succès!");
    //     navigate(`/wilder/instance/1/${updateWilder.data.result._id}`);
    //   }
    // } else {
    //   notify.show(`Une erreur s'est produite : ${updateWilder.data.result}`);
    // }
  };
  const removeSkill = (skillId) => {
    setWilderData((wilderData) => {
      let newSkillsList = wilderData.skills.filter((e) => e._id !== skillId);
      setValue("skills", newSkillsList);
      return { ...wilderData, skills: newSkillsList };
    });
  };
  const addSkill = (skill) => {
    delete skill["_id"];
    let index = fields.findIndex((e) => e.title === skill.title);
    index !== -1 ? update(index, skill) : append(skill);
    toggleModal();
  };
  // loading && <PopInfo message="Récupération des données en cours" />;

  return (
    <div>
      {/* <BackButton /> */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>
            Nom du wilder
          </label>
          <input
            type="text"
            aria-invalid={errors.name ? "true" : "false"}
            {...register("name", { required: true })}/>
          {errors.name && (
            <span>
              Ce champs est obligatoire!
            </span>
          )}
        </div>
        <div>
          <label
            htmlFor="base-input"
          >
            Ville du Wilder
          </label>
          <input
            type="text"
            {...register("city")}
          />
        </div>
        <div>
          <label
            htmlFor="skills-list"
          >
            Skills du Wilder
            <button
              onClick={toggleModal}
              type="button"
            >
              <ImPlus />
            </button>
          </label>
          <div
            name="skills-list"
          >
            {fields.length ? (
              fields.map((field, index) => (
                <div
                  key={index}
                  onClick={() => removeSkill(field._id)}
                >
                  <span>
                    {field.title}
                    <button
                      type="button"
                      {...register(`skills.${index}.title`)}
                    >
                      <ImCross />
                    </button>
                  </span>
                </div>
              ))
            ) : (
              <div>
                <p>Aucun skills pour ce wilder...</p>
              </div>
              // <PopInfo
              //   className="mx-auto"
              //   message="Aucun skills pour ce wilder"
              // />
            )}
          </div>
        </div>

        <button
          type="submit"
        >
          <ImCheckmark2 /> Valider
        </button>
      </form>
      {/* {modal && <ModalAddSkill addSkill={addSkill} toggleModal={toggleModal} />} */}
    </div>
  );
};

export default AddWilder;
