
import HeaderAbout from "../components/headerAboutPage/HeaderAbout";
import BlogSection from "../components/SecBlog/SecBlog";

function Blog() {
  return (
    <div>
      <HeaderAbout title="Blog" linkPage="/blog" />
      <BlogSection />
    </div>
  );
}

export default Blog;
