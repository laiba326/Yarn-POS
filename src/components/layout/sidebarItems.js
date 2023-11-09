import {
  HomeOutlined,
  DashboardOutlined,
  FileDoneOutlined,
} from "@ant-design/icons";

export const sidebarItems = [
  { label: "Dashboard", key: "/", icon: <HomeOutlined /> },
  { label: "Forms", key: "/forms", icon: <DashboardOutlined /> },
  { label: "Reports", key: "/reports", icon: <FileDoneOutlined /> },
];
