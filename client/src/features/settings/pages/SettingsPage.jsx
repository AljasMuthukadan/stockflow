import SettingsHeader from "../components/SettingsHeader";
import SettingsSidebar from "../components/SettingsSidebar";
import CompanyProfile from "../components/CompanyProfile";
import PreferencesCard from "../components/PreferencesCard";
import SecurityCard from "../components/SecurityCard";
import SystemInformation from "../components/SystemInformation";
import QuickActions from "../components/QuickActions";
import BottomActions from "../components/BottomActions";

const SettingsPage = () => {
  return (
    <div className="min-h-full bg-slate-100 px-4 py-4 sm:px-6 lg:px-8">

      {/* Header */}
      <SettingsHeader />

      {/* Settings Content */}
      <div className="mt-4">

        <div className="grid items-start gap-4 lg:grid-cols-[260px_minmax(0,1fr)]">

          {/* Sidebar */}
          <SettingsSidebar />

          {/* Main Content */}
          <main className="min-w-0">

            {/* Top Section */}
            <div className="grid grid-cols-1 gap-4 xl:grid-cols-12">

              <section className="min-w-0 xl:col-span-8">
                <CompanyProfile />
              </section>

              <section className="min-w-0 xl:col-span-4">
                <PreferencesCard />
              </section>

            </div>

            {/* Bottom Cards */}
            <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-3">

              <SecurityCard />

              <SystemInformation />

              <QuickActions />

            </div>

            {/* Actions */}
            <BottomActions />

          </main>

        </div>

      </div>

    </div>
  );
};

export default SettingsPage;