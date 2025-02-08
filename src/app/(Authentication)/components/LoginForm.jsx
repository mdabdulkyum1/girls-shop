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
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useSession } from "next-auth/react";

// Validation Schema
const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address." }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters." }),
});

export function LoginForm() {
  const { data: session, status} = useSession();
  console.log(session, status);
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => setShowPassword((prev) => !prev);

  const onSubmit = async (data) => {
    const email = data.email;
    const password = data.password;
    toast("Submitting....");
    try {
      const response = await signIn("credentials", {
        email,
        password,
        callbackUrl: "/",
        redirect: false,
      });
      console.log(response);
      if (response.ok) {
        toast.success("Login successfully!");
        router.push("/");
        form.reset();
      } else {
        toast.error("Authentications Failed!");
      }
    } catch (error) {
      console.error(error);
      toast.error("Authentications Failed!");
    }
  };

  if(status === "authenticated" && session){
        router.push("/");
  }else{
    return (
      <div className="flex justify-center items-center min-h-[70vh]">
        <div className="p-8 shadow-lg rounded-lg max-w-md w-full">
          <h2 className="text-2xl font-bold text-center mb-6">
            Login to Your Account
          </h2>
  
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Email Field */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700">Email</FormLabel>
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
  
              {/* Password Field with Toggle */}
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700">Password</FormLabel>
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
  
              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-pink-500 hover:bg-pink-400 transition duration-300"
              >
                Login
              </Button>
            </form>
          </Form>
  
          {/* Additional Links */}
          <div className="text-center mt-4">
            <p className="text-sm text-gray-600">
              Don't have an account?{" "}
              <Link
                href="/register"
                className="text-primary font-medium hover:underline"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
