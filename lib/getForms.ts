"use server"

export async function sendFormData(formData:FormData, form_id:string, form_post_id:string){
  
    formData.append("_wpcf7_unit_tag",form_id);
    try {
        const response = await fetch(
          `https://admin.ecopetkit.com/wp-json/contact-form-7/v1/contact-forms/${form_post_id}/feedback`,
          {
            method: "POST",
            body: formData,
          }
        );
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("The error happend while submitting the form", error);
        return{
            message:"An unexpected error has occurred. Please try again!!"
        }
    }
}