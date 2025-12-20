"use client"
import CategoriesWidget from "@/components/blog/blogPage/sidebar-col/categoriesWidget/CategoriesWidget";
import NewsletterWidget from "@/components/blog/blogPage/sidebar-col/newsletterWidget/NewsletterWidget";
import RecentPostWidget from "@/components/blog/blogPage/sidebar-col/recentPostWidget/RecentPostWidget";
import SearchWidget from "@/components/blog/blogPage/sidebar-col/searchWidget/SearchWidget";
import TagsCloudWidget from "@/components/blog/blogPage/sidebar-col/tagsCloudWidget/TagsCloudWidget";
import { BlogPost } from "@/types/blogType";
import { useLanguage } from "@/app/providers/LanguageProvider";
import { BLOG_PAGE_CONTENT } from "@/constants/blogpage";

type CategoryOption = { slug: string; name: string };

type Props = {
  searchQuery: string;
  setSearchQuery: (v: string) => void;
  categories: CategoryOption[];
  activeCategory: string;
  setActiveCategory: (v: string) => void;
  recentPosts: BlogPost[];
  tags: string[];
};
const SidebarCol: React.FC<Props> = ({
  searchQuery,
  setSearchQuery,
  categories,
  activeCategory,
  setActiveCategory,
  recentPosts,
  tags,
}) => {
     const { language } = useLanguage();
     const pageContent = BLOG_PAGE_CONTENT[language];
  return (
    <div className="space-y-8">
      <SearchWidget
        value={searchQuery}
        onChange={setSearchQuery}
        searchTitle ={pageContent.sidebar.searchTitle}
        searchPlaceholder={pageContent.sidebar.searchPlaceholder}
        
      />

      <CategoriesWidget
        categories={categories}
        active={activeCategory}
        onChange={setActiveCategory}
        categoryTitle={pageContent.sidebar.categoriesTitle}
      />

      <RecentPostWidget posts={recentPosts} recentPostTitle={pageContent.sidebar.recentPostsTitle} />

      <TagsCloudWidget tags={tags} popular={pageContent.sidebar.tagsTitle} />

      <NewsletterWidget newsletterObj={pageContent.sidebar.newsletter} />
    </div>
  );
};

export default SidebarCol;