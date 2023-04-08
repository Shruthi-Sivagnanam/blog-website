import AdminNav from "@/components/common/AdminNav";
import AdminLayout from "@/components/layout/AdminLayout";
import { NextPage } from "next";

interface Props {}

const Posts: NextPage<Props> = () => {
  return <AdminLayout>This is admin - posts</AdminLayout>;
};

export default Posts;
