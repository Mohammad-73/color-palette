import Head from "next/head";
import Image from "next/image";
import contentful from "../service/contentful";
import styles from "../styles/Home.module.css";

export default function Home({ palettes }) {
  console.log(palettes);
  return palettes.map((palette) => (
    <div key={palette.sys.id}>
      <h3>{palette.fields.paletteName}</h3>
      {palette.fields.colors.map((item) => (
        <h5 key={palette.sys.id}>{item.hexCode}</h5>
      ))}
    </div>
  ));
}

export async function getServerSideProps() {
  const { items } = await contentful.getEntries({
    content_type: "palette",
  });

  return { props: { palettes: items } };
}
