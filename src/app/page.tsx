import { Header } from "@/components/header";
import { Home } from "./home";
import { FeaturedArticles } from "@/app/featuredArticles";
import { RecentArticles } from "./recentArticles";
import { Newsletter } from "./newsletter";
import { ShareKnowledge } from "./shareKnowledge";
import { Footer } from "./footer";

export default function App() {
  return (
    <div>
      <Header />
      <Home />
      <FeaturedArticles />
      <RecentArticles />
      <Newsletter />
      <ShareKnowledge />
      <Footer />
    </div>
  );
}
