import Link from "next/link";
import { Google, Facebook } from "react-bootstrap-icons";
import Loader from "../utils/Loader";
import { UseLoaderContext } from "@/context/LoaderContext";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQuery } from "react-query";
import { getCountries } from "@/feature/countries/getCountries";

const schema = z
.object({
  lastName: z.string().min(3, "Entrez votre nom !"),
  firstName: z.string().min(3, "Entrez votre prenom !"),
  username: z.string().min(3, "Entrez votre nom d'utilisateur !"),
  country: z.string().min(1, "Renseignez votre pays !"),
  email: z.string().email("Email invalide !"),
  password: z.string().min(8, "Le mot de passe doit contenir au minimum 8 caractères !").max(20, "Le mot de passe doit contenir au maximum 20 caractères"),
  cPassword: z.string(),
  accept: z.literal(true, {
    errorMap: () => ({ message: "Vous devez accepter les termes et conditions" }),
  }),
})
.required()
.refine((data) => data.password === data.cPassword, {
  message: "Les mots de passe ne sont pas identiques !",
  path: ["cPassword"],
});

function Register() {
  const { loader, setLoader } = UseLoaderContext();
  const {status, data} = useQuery("countries", getCountries)
  console.log(useQuery("countries", getCountries))
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: any) => {
    setLoader(true);
    console.log(data);
    setTimeout(() => {
      setLoader(false);
    }, 3000);
  };

  return (
    <>
      <div className="md:mt-2 flex min-h-full flex-col justify-center py-5 px-2 sm:px-6 lg:px-9">
        <h2 className="text-center text-2xl font-medium tracking-tight text-gray-700">
        Créez votre compte
        </h2>

        <div className="mt-1 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="py-5 px-4 sm:rounded-lg sm:px-10">
            <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>

            {/* Lastname input */}
            <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                  Votre nom
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    className="form-input"
                    {...register("lastName")}
                  />
                </div>
                {errors.lastName && <small className="errors">{`${errors.lastName?.message}`}</small>}
              </div>

              {/* Firstname input */}
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                  Votre prénom
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    className="form-input"
                    {...register("firstName")}
                  />
                </div>
                {errors.firstName && <small className="errors">{`${errors.firstName?.message}`}</small>}
              </div>

              {/* Username input */}
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Votre nom d&apos;utilisateur
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    className="form-input"
                    {...register("username")}
                  />
                </div>
                {errors.username && <small className="errors">{`${errors.username?.message}`}</small>}
              </div>

              {/* Country input */}
              <div>
                <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                Votre pays
                </label>
                <div className="mt-1">
                <select
        className="form-input cursor-pointer"
        {...register("country")}
      >
        {(status == "success") ? data.map((country: any)=>(<option key={country.name} >{country.name} </option>)) : null}
      </select>
                </div>
                {errors.country ? (
          <small className="errors block pt-3">{`${errors.country?.message}`}</small>
        ) : null}
              </div>

              {/* Mail input */}
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
                {errors.email && <small className="errors">{`${errors.email?.message}`}</small>}
              </div>

              {/* Password input */}
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
                {errors.password && (
                  <small className="errors">{`${errors.password?.message}`}</small>
                )}
              </div>

              {/* Password-confirm input */}
              <div>
                <label htmlFor="cPassword" className="block text-sm font-medium text-gray-700">
                Répéter mot de passe
                </label>
                <div className="mt-1">
                  <input
                    type="password"
                    autoComplete="current-password"
                    className="form-input"
                    {...register("cPassword")}
                  />
                </div>
                {errors.cPassword && (
                  <small className="errors">{`${errors.cPassword?.message}`}</small>
                )}
              </div>

              <div className="text-[13px] md:text-sm">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-blue-color focus:blue-color"
                    {...register("accept")}
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-gray-900 font-medium">
                    J&apos;accepte les <Link href="/" className="text-blue-color hover:underline">
            termes et conditions
          </Link>
                  </label>
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
                  <span className="bg-white px-2 text-gray-500">Ou se connecter avec</span>
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
            Vous avez déjà un compte ?
        <Link href="/login" className="pl-1 text-blue-color">
          Se connecter
        </Link>
      </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
