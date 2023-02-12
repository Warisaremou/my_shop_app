import { useState } from "react";
import Link from "next/link";
import { Google, Facebook } from "react-bootstrap-icons";
import Loader from "../utils/Loader";
import { UseLoaderContext } from "@/context/LoaderContext";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z
  .object({
    email: z.string().email("Email invalide "),
    password: z.string().min(8, "Mot de passe invalide "),
    accept: z.literal(true, {
      errorMap: () => ({ message: "Vous devez accepter les termes et conditions" }),
    }),
  })
  .required();

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const { loader, setLoader } = UseLoaderContext();
  const [isError, setIsError] = useState({ email: "", password: "" });

  const onSubmit = (data: any) => {
    setLoader(true);
    console.log(data);
    setTimeout(() => {
      setLoader(false);
    }, 3000);
  };

  return (
    <>
      <div className="md:mt-5 flex min-h-full flex-col justify-center py-12 px-2 sm:px-6 lg:px-9">
        <h2 className="text-center text-2xl font-medium tracking-tight text-gray-700">
          Connectez-vous à votre compte
        </h2>

        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="py-8 px-4 sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Votre email
                </label>
                <div className="mt-1">
                  <input
                    type="email"
                    autoComplete="email"
                    placeholder="utilisateur@gmail.com"
                    className="form-input"
                    {...register("email")}
                  />
                </div>
                <p
                  className={`${errors.email && isError.email ? "flex justify-between pt-5" : ""}`}
                >
                  {errors.email && <small className="errors">{`${errors.email?.message}`}</small>}
                  {isError.email && <small className="errors">{isError.email}</small>}
                </p>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Votre mot de passe
                </label>
                <div className="mt-1">
                  <input
                    type="password"
                    autoComplete="current-password"
                    className="form-input"
                    {...register("password")}
                  />
                </div>
                <p
                  className={`${
                    errors.password && isError.password ? "flex justify-between pt-5" : ""
                  }`}
                >
                  {errors.password && (
                    <small className="errors">{`${errors.password?.message}`}</small>
                  )}
                  {isError.password && <small className="errors">{isError.password}</small>}
                </p>
              </div>

              <div className="flex items-center justify-between text-[13px] md:text-sm">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-blue-color focus:blue-color"
                    {...register("accept")}
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-gray-900 font-medium">
                    Se souvenir de moi
                  </label>
                </div>
                <div>
                  <Link href="#" className="font-medium text-blue-color hover:text-blue-color">
                    Mot de passe oublié ?
                  </Link>
                </div>
              </div>
              {errors.accept && <small className="errors">{`${errors.accept?.message}`}</small>}

              <div>
                <button type="submit" className="valide-form-btn">
                  {loader ? <Loader /> : "Se connecter"}
                </button>
              </div>
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="bg-white px-2 text-gray-500">Ou continuer avec</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <div>
                  <Link href="#" className="link-form-auth">
                    <span className="sr-only">Sign in with Facebook</span>
                    <Facebook className="w-5 h-5" />
                  </Link>
                </div>

                <div>
                  <Link href="#" className="link-form-auth">
                    <span className="sr-only">Sign in with Google</span>
                    <Google className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
            <p className="text-sm text-center pt-5">
        Vous n&apos;avez pas de compte ?
        <Link href="/register" className="pl-1 text-blue-color">
          S&apos;inscrire
        </Link>
      </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
