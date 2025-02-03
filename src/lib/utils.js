import axios from "axios";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}



// image upload to img_bb

const image_upload_api = `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMG_CLIENT_API_KEY}`;

export async function imageUpload(image) {

  const formData = new FormData();
  formData.append('image', image);

  const {data} = await axios.post(image_upload_api, formData);

  return data.data.display_url;
}
