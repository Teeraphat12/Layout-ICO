import { GetStaticPropsContext } from "next";
import { Layout } from "../components/common";

export async function getStaticProps({}: GetStaticPropsContext) {
  return { props: {} };
}

export default function Home() {
  return (
    <div className="">Nextjs</div>
  );
}

Home.Layout = Layout;
