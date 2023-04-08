import AdminLayout from "@/components/layout/AdminLayout";
import { NextPage } from "next";

interface Props {}

const Admin: NextPage<Props> = () => {
  return (
    <AdminLayout>
      <div>Admin</div>
    </AdminLayout>
  );
};

export default Admin;
