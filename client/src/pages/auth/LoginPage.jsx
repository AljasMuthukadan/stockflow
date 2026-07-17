import {useNavigate} from "react-router-dom"
export const LoginPage = () => {
  const navigate = useNavigate();
  return (
    <main className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
      <div className="w-full max-w-7xl bg-white rounded-3xl shadow-2xl overflow-hidden grid lg:grid-cols-2">

        {/* Left Side */}
        <section className="bg-slate-900 text-white p-10 lg:p-12 flex flex-col justify-between">

          <div>
            <h1 className="text-3xl font-bold text-emerald-400">
              StockFlow
            </h1>
          </div>

          <div className="space-y-6">

            <div>
              <h2 className="text-5xl font-bold leading-tight">
                Smart Inventory
                <br />
                Management
              </h2>

              <p className="mt-5 text-slate-300 text-lg leading-8">
                Manage inventory, production, suppliers, warehouses and reports
                from one modern platform.
              </p>
            </div>

            <img
              src="/warehouse.png"
              alt="Warehouse"
              className="w-full max-w-md mx-auto rounded-xl"
            />

            <div className="space-y-5">

              <div className="flex gap-4">

                <div className="w-12 h-12 rounded-xl bg-emerald-500 flex items-center justify-center flex-shrink-0">
                  📦
                </div>

                <div>
                  <h3 className="font-semibold text-lg">
                    Real-time Inventory
                  </h3>

                  <p className="text-slate-400">
                    Monitor stock levels across multiple warehouses.
                  </p>
                </div>

              </div>

              <div className="flex gap-4">

                <div className="w-12 h-12 rounded-xl bg-emerald-500 flex items-center justify-center flex-shrink-0">
                  🏭
                </div>

                <div>
                  <h3 className="font-semibold text-lg">
                    Production Tracking
                  </h3>

                  <p className="text-slate-400">
                    Track manufacturing using BOM and inventory automation.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </section>

        {/* Right Side */}

        <section className="flex items-center justify-center p-8 lg:p-12">

          <div className="w-full max-w-md">

            <h2 className="text-3xl font-bold text-slate-900">
              Welcome Back
            </h2>

            <p className="mt-2 text-gray-500">
              Sign in to access your dashboard.
            </p>

            <form className="mt-8 space-y-5">

              <div>
                <label className="text-sm font-medium text-slate-700">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-slate-700">
                  Password
                </label>

                <input
                  type="password"
                  placeholder="Enter your password"
                  className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div className="flex items-center justify-between text-sm">

                <label className="flex items-center gap-2 text-gray-600">
                  <input type="checkbox" />
                  Remember me
                </label>

                <button
                  type="button"
                  className="text-emerald-600 hover:text-emerald-700"
                >
                  Forgot Password?
                </button>

              </div>

              <button
                className="w-full rounded-xl bg-emerald-600 py-3 text-white font-semibold transition hover:bg-emerald-700"
              >
                Sign In
              </button>

            </form>

            <p className="mt-6 text-center text-gray-500">
              Don't have an account?{" "}
              <span 
                className="cursor-pointer font-semibold text-emerald-600 hover:text-emerald-700"
                onClick={() => navigate("/register")}
              >
                Create Account
              </span>
            </p>

          </div>

        </section>

      </div>
    </main>
  );
};