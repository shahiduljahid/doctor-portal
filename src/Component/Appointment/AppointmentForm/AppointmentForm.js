import React from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { useForm } from "react-hook-form";
import "./AppointmentForm.css";

const AppointmentForm = ({ modalIsOpen,visit, closeModal, name, date }) => {
  const closeIcon = (
    <svg fill="currentColor" viewBox="0 0 20 20" width={28} height={28}>
      <path
        fillRule="evenodd"
        d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data.service = name;
    data.date =`${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`
    data.schedule = visit;
    data.action ='Not visited';
    data.createdDate = new Date();
    fetch("https://doc-server-delta.vercel.app/addappointment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then((res) =>res.json)
    .then(result =>{
      if(result){
        closeModal();
        alert('Successfull')
      }
    })
  };
  return (
    <Modal
      closeIcon={closeIcon}
      open={modalIsOpen}
      onClose={closeModal}
      center
      classNames={{
        modal: "customModal",
      }}
    >
      <div className="shadow p-3">
        <h4 className="text-color text-center">{name}</h4>
        <p className="text-secondary text-center">{date.toDateString()}</p>
        <form
          className=" mt-5 border-0 form-control"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div class="form-group">
            <select
              {...register("doctor")}
              className="form-control  mb-3"
              id="doctor"
            >
              <option style={{ color: "dimgray" }}>Select Doctor</option>
              <option>Dr.caudi</option>
              <option>Dr.alexa</option>
              <option>Dr.sitaram</option>
              <option>Dr.sumon</option>
            </select>
          </div>
          <input
            className="form-control mb-3 form-group"
            
            placeholder="your name"
            required
            {...register("name")}
          />

          <input
            className="form-control  mb-3 form-group"
            placeholder="phone number"
            {...register("phoneNumber", { required: true })}
          />

          {errors.exampleRequired && <span>This field is required</span>}
          <input
            type="email"
            className="form-control  mb-3 form-group"
            name="email"
            {...register("email")}
            placeholder="email"
            id=""
          />
          <input
            type="text"
            placeholder="your age"
            {...register("age")}
            className="form-control  mb-3 form-group"
            name="age"
            id=""
          />
          <input type="text"
          placeholder="weight"
          {...register("weight")}
          className="form-control  mb-3 form-group"
          name="weight"
          id=""/>

          <input
            className="d-flex justify-content-center ms-auto mb-3 btn  book-btn font-weight-bold btn-color form-group"
            //   onClick={closeModal}
            type="submit"
          />
        </form>
      </div>
    </Modal>
  );
};

export default AppointmentForm;

///form
