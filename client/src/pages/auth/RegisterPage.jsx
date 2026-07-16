const RegisterPage = () => {
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
                Start Managing
                <br />
                Your Inventory
              </h2>

              <p className="mt-5 text-slate-300 text-lg leading-8">
                Create your company account and manage inventory,
                production, warehouses, suppliers and reports from
                one modern platform.
              </p>
            </div>

            <img
              src="/warehouse.png"
              alt="Warehouse"
              className="w-full max-w-md mx-auto rounded-xl"
            />

            <div className="space-y-5">

              <div className="flex gap-4">

                <div className="w-12 h-12 rounded-xl bg-emerald-500 flex-shrink-0"></div>

                <div>
                  <h3 className="font-semibold text-lg">
                    Multi Warehouse
                  </h3>

                  <p className="text-slate-400">
                    Manage stock across multiple warehouse locations.
                  </p>
                </div>

              </div>

              <div className="flex gap-4">

                <div className="w-12 h-12 rounded-xl bg-emerald-500 flex-shrink-0"></div>

                <div>
                  <h3 className="font-semibold text-lg">
                    Production Management
                  </h3>

                  <p className="text-slate-400">
                    Track production using BOM and inventory automation.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </section>

        {/* Right Side */}

        <section className="flex justify-center items-center p-8 lg:p-12">

          <div className="w-full max-w-md">

            <h2 className="text-3xl font-bold text-slate-900">
              Create Account
            </h2>

            <p className="mt-2 text-gray-500">
              Fill in the details below to create your company account.
            </p>

            <form className="mt-6 space-y-4">

              <div>
                <label className="text-sm font-medium text-slate-700">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="John Doe"
                  className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-slate-700">
                  Company Name
                </label>

                <input
                  type="text"
                  placeholder="ABC Industries"
                  className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-slate-700">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="company@example.com"
                  className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-slate-700">
                  Password
                </label>

                <input
                  type="password"
                  placeholder="Enter password"
                  className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-slate-700">
                  Confirm Password
                </label>

                <input
                  type="password"
                  placeholder="Confirm password"
                  className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div className="flex items-start gap-3 text-sm">

                <input
                  type="checkbox"
                  className="mt-1"
                />

                <p className="text-gray-600 leading-6">
                  I agree to the{" "}
                  <span className="text-emerald-600 cursor-pointer font-medium">
                    Terms of Service
                  </span>{" "}
                  and{" "}
                  <span className="text-emerald-600 cursor-pointer font-medium">
                    Privacy Policy
                  </span>
                </p>

              </div>

              <button
                className="w-full bg-emerald-600 hover:bg-emerald-700 transition py-3 rounded-xl text-white font-semibold"
              >
                Create Account
              </button>

            </form>

            <p className="mt-6 text-center text-gray-500">
              Already have an account?{" "}
              <span className="text-emerald-600 font-semibold cursor-pointer">
                Sign In
              </span>
            </p>

          </div>

        </section>

      </div>
    </main>
  );
};

export default RegisterPage;