import SettingsHeader from "../components/settings/SettingsHeader";
import SettingsSidebar from "../components/settings/SettingsSidebar";
import CompanyProfile from "../components/settings/CompanyProfile";
import PreferencesCard from "../components/settings/PreferencesCard";
import SecurityCard from "../components/settings/SecurityCard";
import SystemInformation from "../components/settings/SystemInformation";
import QuickActions from "../components/settings/QuickActions";
import BottomActions from "../components/settings/BottomActions";

const SettingsPage = () => {
  return (
    <div className="min-h-screen px-8 bg-slate-100">

      <SettingsHeader />

      <div className=" py-2">

        <div className="flex gap-6 items-start">

          {/* Sidebar */}

          <div className="w-72  flex-shrink-0">
            <SettingsSidebar />
          </div>

          {/* Main */}

          <div className="flex-1 space-y-3">

            {/* Row 1 */}

            <div className="grid grid-cols-12 gap-6">

              <div className="col-span-8">
                <CompanyProfile />
              </div>

              <div className="col-span-4">
                <PreferencesCard />
              </div>

            </div>

            {/* Row 2 */}

            <div className="grid grid-cols-3 gap-6">

              <SecurityCard />

              <SystemInformation />

              <QuickActions />

            </div>

            {/* Bottom */}

            <BottomActions />

          </div>

        </div>

      </div>

    </div>
  );
};

export default SettingsPage;