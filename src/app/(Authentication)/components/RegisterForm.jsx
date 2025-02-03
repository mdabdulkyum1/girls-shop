
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { imageUpload } from "@/lib/utils";
import toast from "react-hot-toast";

// Validation Schema
const formSchema = z
  .object({
    email: z.string().email({ message: "Invalid email address." }),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters." }),
    confirmPassword: z
      .string()
      .min(6, { message: "Confirm Password is required." }),
      profileImage: z
      .custom((file) => file instanceof File, {
        message: "Profile image is required.",
      })
      .refine((file) => file && file.size > 0, {
        message: "Invalid file. Please upload an image.",
      }),    
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match.",
    path: ["confirmPassword"],
  });

export function RegisterForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      profileImage: null,
    },
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [preview, setPreview] = useState(null);

  const togglePassword = () => setShowPassword((prev) => !prev);
  const toggleConfirmPassword = () => setShowConfirmPassword((prev) => !prev);

  const onSubmit = async (data) => {
    const toastId = toast.loading('Waiting...');
    const {email, password, profileImage} = data;
    const imageUrl = await imageUpload(profileImage);

    if(!imageUrl){
        toast.dismiss(toastId)
        return toast.error("Image upload failed!");
    }

    const payload = {
      email,
      password,
      image: imageUrl,
      role: "user"
    }
    console.log("Registration Data:", payload);

    toast.success('Successfully created!');
    toast.dismiss(toastId)
    form.reset();
    setPreview(null);

    
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      form.setValue("profileImage", file);
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[80vh] my-6">
      <div className="p-8 shadow-lg rounded-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-center mb-6">
          Create Your Account
        </h2>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Email Field */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      {...field}
                      className="focus:ring-primary"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Password Field */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <div className="relative">
                    <FormControl>
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        {...field}
                        className="pr-10 focus:ring-primary"
                      />
                    </FormControl>
                    <button
                      type="button"
                      className="absolute inset-y-0 right-3 flex items-center hover:text-gray-700"
                      onClick={togglePassword}
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Confirm Password Field */}
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <div className="relative">
                    <FormControl>
                      <Input
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Confirm your password"
                        {...field}
                        className="pr-10 focus:ring-primary"
                      />
                    </FormControl>
                    <button
                      type="button"
                      className="absolute inset-y-0 right-3 flex items-center hover:text-gray-700"
                      onClick={toggleConfirmPassword}
                    >
                      {showConfirmPassword ? (
                        <EyeOff size={20} />
                      ) : (
                        <Eye size={20} />
                      )}
                    </button>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Profile Image Upload */}
            <FormField
              control={form.control}
              name="profileImage"
              render={() => (
                <FormItem>
                  <FormLabel>Profile Image</FormLabel>
                  <FormControl>
                    <Input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="focus:ring-primary"
                    />
                  </FormControl>
                  {preview && (
                    <div className="mt-2">
                      <Image
                        src={preview}
                        alt="Profile Preview"
                        width={100}
                        height={100}
                        className="rounded-full w-auto h-auto max-w-[100px] max-h-[100px] object-cover"
                      />
                    </div>
                  )}
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-pink-500 hover:bg-pink-400 transition duration-300"
            >
              Register
            </Button>
          </form>
        </Form>

        {/* Login Link */}
        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-primary font-medium hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
