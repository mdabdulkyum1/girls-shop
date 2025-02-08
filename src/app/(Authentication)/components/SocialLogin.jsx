import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { signIn } from "next-auth/react";

const SocialLogin = () => {

    const handelSocialLogin = async(providerName)=> {
        const result = await signIn(providerName, {redirect: false});
    }

  return (
    <div className="flex items-center justify-center gap-4 my-6">
      <div className="">
        <button onClick={()=> handelSocialLogin("google")} className="bg-transparent">
             <FcGoogle className="text-4xl"/>
        </button>
      </div>
      <div className="">
        <button onClick={()=> handelSocialLogin("github")} className="bg-transparent">
             <FaGithub className="text-4xl" />
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
