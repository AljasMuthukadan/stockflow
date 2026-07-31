import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
} from "lucide-react";

import AuthLayout from "../../layouts/AuthLayout";

export default  function LoginPage() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  return (
    <AuthLayout
      title="Welcome Back"
      subtitle="Sign in to access your StockFlow dashboard."
    >
      <form className="space-y-6">

        {/* Email */}

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Email Address
          </label>

          <div className="relative">

            <Mail
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="email"
              placeholder="Enter your email"
              className="
                h-12
                w-full
                rounded-xl
                border
                border-slate-300
                bg-white
                pl-11
                pr-4
                text-sm
                outline-none
                transition
                focus:border-emerald-500
                focus:ring-4
                focus:ring-emerald-100
              "
            />

          </div>
        </div>

        {/* Password */}

        <div>

          <label className="mb-2 block text-sm font-medium text-slate-700">
            Password
          </label>

          <div className="relative">

            <Lock
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="
                h-12
                w-full
                rounded-xl
                border
                border-slate-300
                bg-white
                pl-11
                pr-12
                text-sm
                outline-none
                transition
                focus:border-emerald-500
                focus:ring-4
                focus:ring-emerald-100
              "
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-slate-700"
            >
              {showPassword ? (
                <EyeOff size={18} />
              ) : (
                <Eye size={18} />
              )}
            </button>

          </div>

        </div>

        {/* Options */}

        <div className="flex items-center justify-between">

          <label className="flex items-center gap-2 text-sm text-slate-600">

            <input
              type="checkbox"
              className="h-4 w-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
            />

            Remember me

          </label>

          <button
            type="button"
            className="text-sm font-medium text-emerald-600 transition hover:text-emerald-700"
          >
            Forgot Password?
          </button>

        </div>

        {/* Button */}

        <button
          type="submit"
          className="
            flex
            h-12
            w-full
            items-center
            justify-center
            gap-2
            rounded-xl
            bg-emerald-600
            font-semibold
            text-white
            transition
            hover:bg-emerald-700
          "
        >
          Sign In

          <ArrowRight size={18} />
        </button>

      </form>

      {/* Divider */}

      <div className="my-8 flex items-center gap-4">

        <div className="h-px flex-1 bg-slate-200" />

        <span className="text-sm text-slate-400">
          OR
        </span>

        <div className="h-px flex-1 bg-slate-200" />

      </div>

      {/* Google */}

      <button
        className="
          flex
          h-12
          w-full
          items-center
          justify-center
          gap-3
          rounded-xl
          border
          border-slate-300
          bg-white
          font-medium
          transition
          hover:bg-slate-50
        "
      >
        <img
          src="https://www.svgrepo.com/show/475656/google-color.svg"
          alt="Google"
          className="h-5 w-5"
        />

        Continue with Google
      </button>

      {/* Register */}

      <p className="mt-8 text-center text-sm text-slate-500">
        Don't have an account?{" "}

        <button
          onClick={() => navigate("/register")}
          className="font-semibold text-emerald-600 hover:text-emerald-700"
        >
          Create Account
        </button>

      </p>
    </AuthLayout>
  );
}