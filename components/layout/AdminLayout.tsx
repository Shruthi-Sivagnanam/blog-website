import { FC, ReactNode } from "react";
import {
  AiOutlineContainer,
  AiOutlineFile,
  AiOutlineMail,
  AiOutlineTeam,
} from "react-icons/ai";
import { MdDashboardCustomize } from "react-icons/md";
import AdminNav from "../common/AdminNav";
import Link from "next/link";

interface Props {
  children: ReactNode;
}
const navItems = [
  { href: "/admin", icon: MdDashboardCustomize, label: "Dashboard" },
  { href: "/admin/posts", icon: AiOutlineContainer, label: "Posts" },
  { href: "/admin/users", icon: AiOutlineTeam, label: "Users" },
  { href: "/admin/comments", icon: AiOutlineMail, label: "Comments" },
];

const AdminLayout: FC<Props> = ({ children }): JSX.Element => {
  return (
    <div className="flex">
      <AdminNav navitems={navItems} />
      <div className="flex-1 p-4">{children}</div>
      <Link href="/admin/posts/create" legacyBehavior>
        <a className="bg-secondary-dark dark:bg-secondary-light text-primary dark:text-primary-dark fixed z-10 right-10 bottom-10 p-3 rounded-full hover:scale-90 shadow-sm transition">
          <AiOutlineFile size={24} />
        </a>
      </Link>
    </div>
  );
};

export default AdminLayout;
