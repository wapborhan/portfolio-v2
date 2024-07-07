import React from "react";
import BlogGrid from "../components/Blog/BlogGrid";
import { useTranslation } from "react-i18next";

export default function BlogPage() {
  const { t } = useTranslation();
  return <BlogGrid data={t("main.blog")} column={3} />;
}
