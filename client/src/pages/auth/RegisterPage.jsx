import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
} from "lucide-react";

import AuthLayout from "../../layouts/AuthLayout";

export default function RegisterPage() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <AuthLayout
      title="Create Account"
      subtitle="Create your StockFlow account to start managing your business."
    >
      <form className="space-y-5">

        {/* Full Name */}

        <div >
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Full Name
          </label>

          <div className="relative">
            <User
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              placeholder="Enter your full name"
              className="h-12 w-full rounded-xl border border-slate-300 pl-11 pr-4 text-sm outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
            />
          </div>
        </div>

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
              className="h-12 w-full rounded-xl border border-slate-300 pl-11 pr-4 text-sm outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
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
              placeholder="Create a password"
              className="h-12 w-full rounded-xl border border-slate-300 pl-11 pr-12 text-sm outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
            >
              {showPassword ? (
                <EyeOff size={18} />
              ) : (
                <Eye size={18} />
              )}
            </button>
          </div>
        </div>

        {/* Confirm Password */}

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Confirm Password
          </label>

          <div className="relative">
            <Lock
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm password"
              className="h-12 w-full rounded-xl border border-slate-300 pl-11 pr-12 text-sm outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
            />

            <button
              type="button"
              onClick={() =>
                setShowConfirmPassword(!showConfirmPassword)
              }
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
            >
              {showConfirmPassword ? (
                <EyeOff size={18} />
              ) : (
                <Eye size={18} />
              )}
            </button>
          </div>
        </div>

        {/* Terms */}

        <label className="flex items-start gap-3 text-sm text-slate-600">
          <input
            type="checkbox"
            className="mt-1 h-4 w-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
          />

          <span>
            I agree to the{" "}
            <button
              type="button"
              className="font-medium text-emerald-600 hover:text-emerald-700"
            >
              Terms & Conditions
            </button>{" "}
            and{" "}
            <button
              type="button"
              className="font-medium text-emerald-600 hover:text-emerald-700"
            >
              Privacy Policy
            </button>
          </span>
        </label>

        {/* Register Button */}

        <button
          type="submit"
          className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 font-semibold text-white transition hover:bg-emerald-700"
        >
          Create Account

          <ArrowRight size={18} />
        </button>
      </form>

      {/* Divider */}

      <div className="my-8 flex items-center gap-4">
        <div className="h-px flex-1 bg-slate-200" />
        <span className="text-sm text-slate-400">OR</span>
        <div className="h-px flex-1 bg-slate-200" />
      </div>

      {/* Google */}

      <button
        className="flex h-12 w-full items-center justify-center gap-3 rounded-xl border border-slate-300 bg-white font-medium transition hover:bg-slate-50"
      >
        <img
          src="https://www.svgrepo.com/show/475656/google-color.svg"
          alt="Google"
          className="h-5 w-5"
        />

        Continue with Google
      </button>

      {/* Login */}

      <p className="mt-8 text-center text-sm text-slate-500">
        Already have an account?{" "}

        <button
          onClick={() => navigate("/login")}
          className="font-semibold text-emerald-600 hover:text-emerald-700"
        >
          Sign In
        </button>
      </p>
    </AuthLayout>
  );
}