import React from "react";
import SectionTitle from "./../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_token = import.meta.env.VITE_Image_upload_token;

const AddItem = () => {
  const [axiosSecure] = useAxiosSecure()
  const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`;
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);
    fetch(image_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageResponse) => {
        if (imageResponse.success) {
          const imageUrl = imageResponse.data.display_url;
          const { category, recipe, name, price } = data;
          const newItem = {
            category,
            recipe,
            name,
            price: parseFloat(price),
            image: imageUrl,
          };
          axiosSecure.post('/menu', newItem)
          .then(data => {
            if(data.data.insertedId){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Add successfully',
                    showConfirmButton: false,
                    timer: 1500
                  })
                  reset()
            }
          })
        }
      });
  };

  return (
    <div className="w-full px-10">
      <SectionTitle
        heading={"ADD AN ITEM"}
        subHeading={"whats new"}
      ></SectionTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <span className="label-text">Recipe Name</span>
        <input
          className="w-full  p-4 border-4"
          type="text"
          placeholder="Recipe Name"
          {...register("name", { required: true, maxLength: 80 })}
        />
        <div className=" flex gap-10 py-8 ">
          <div className="w-full  ">
            <span className="label-text">Category</span>
            <select
              className="w-full p-4 border-4"
              defaultValue={"Pick On"}
              {...register("category", { required: true })}
            >
              <option disabled>Pick On</option>
              <option value="Salad">Salad</option>
              <option value="Pizza">Pizza</option>
              <option value="Soup">Soup</option>
              <option value="Desert">Desert</option>
              <option value="Drinks">Drinks</option>
            </select>
          </div>
          <div className="w-full">
            <span className="label-text">What is your name?</span>
            <input
              className="w-full p-4 border-4"
              type="tel"
              placeholder="Price"
              {...register("price", { required: true })}
            />
          </div>
        </div>
        <span className="label-text">Recipe Details </span>
        <textarea
          className="w-full h-28 p-4 border-4 mb-5"
          type="text"
          placeholder="Recipe Details"
          {...register("recipe ", {
            required: true,
          })}
        />
        <div className="form-control w-full max-w-xs mb-5">
          <label className="label">
            <span className="label-text">Item Image</span>
          </label>
          <input
            type="file"
            {...register("image", {
              required: true,
            })}
            className="file-input file-input-bordered w-full max-w-xs"
          />
        </div>

        <input className="btn btn-accent" type="submit" />
      </form>
    </div>
  );
};

export default AddItem;
