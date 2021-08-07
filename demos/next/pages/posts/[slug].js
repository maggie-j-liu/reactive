import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "../../components/container";
import PostBody from "../../components/post-body";
import Header from "../../components/header";
import PostHeader from "../../components/post-header";
import Layout from "../../components/layout";
import { getPostBySlug, getAllPosts } from "../../lib/api";
import PostTitle from "../../components/post-title";
import Head from "next/head";
import { CMS_NAME } from "../../lib/constants";
import markdownToHtml from "../../lib/markdownToHtml";
import { useEffect } from "react";
import Script from "next/script";

export default function Post({ post, morePosts, preview }) {
  const config = {
    apiKey: "AIzaSyAux7Beoq9hQiT4TgQGnyNWR3_BwTukmaU",
    authDomain: "reactive-db9e1.firebaseapp.com",
    databaseURL: "https://reactive-db9e1-default-rtdb.firebaseio.com",
    projectId: "reactive-db9e1",
    storageBucket: "reactive-db9e1.appspot.com",
    messagingSenderId: "248078740379",
    appId: "1:248078740379:web:bebe06abacef70e4b50f3e",
  };

  useEffect(() => {
    // install on the client
    if (typeof reactive !== "undefined") {
      reactive.install({
        firebaseConfig: config,
      });
    }
  }, []);

  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout preview={preview}>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="mb-32">
              <Head>
                <title>
                  {post.title} | Next.js Blog Example with {CMS_NAME}
                </title>
                <meta property="og:image" content={post.ogImage.url} />
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
              />
              <PostBody content={post.content} />
              <div id="reactive_widget" />

              <Script
                src="https://reactive-kappa.vercel.app/dist/bundle.js"
                onLoad={() => {
                  // load for the first render (from server)
                  reactive.install({
                    firebaseConfig: config,
                  });
                }}
              />
            </article>
          </>
        )}
      </Container>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
  ]);
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
