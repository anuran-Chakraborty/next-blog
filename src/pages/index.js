import Head from "next/head";
import { Inter } from "@next/font/google";
import { readPostsByCategories } from "@/api";
import PostCard from "@/components/PostCard";
import Navbar from "@/components/Navbar";
import WrapperComponent from "@/components/WrapperComponent";

const inter = Inter({ subsets: ["latin"] });

export const getStaticProps = async () => {
  return { props: { postsForAllCategories: readPostsByCategories() } };
};

const Home = ({ postsForAllCategories }) => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <WrapperComponent >
        <main>
          <div className="container mx-auto grid grid-cols-3 gap-8">
            {postsForAllCategories.map((post) => <PostCard key={post.slug} post={post} />)}
          </div>
        </main>
      </WrapperComponent>
    </>
  );
};

export default Home;
