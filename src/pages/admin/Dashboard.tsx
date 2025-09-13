import ReusableTabs from "../../components/pages/admin/layout/Tabs";

export default function AdminDashboard() {
  const items = [
    {
      key: "1",
      label: "Home",
      children: <div>Welcome to Home</div>,
    },
    {
      key: "2",
      label: "Profile",
      children: <div>This is your Profile</div>,
    },
    {
      key: "3",
      label: "Settings",
      children: <div>Adjust your Settings here</div>,
    },
  ];

  return (
    <div className="p-4">
      <ReusableTabs
        items={items}
        defaultActiveKey="1"
        onChange={(key) => console.log("Switched to tab:", key)}
        type="card"
        centered
      />
    </div>
  );
}
