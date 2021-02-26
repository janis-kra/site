import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';

import utilStyles from '../styles/utils.module.css';
import SocialMedia from '../components/social-media/social-media';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          JavaScript enthusiast (mainly React, but also Angular of late).
          Developing software for <a href="https://www.enpit.de" target="_blank">@enpit</a>.
        </p>
        <SocialMedia twitter github instagram/>
      </section>
    </Layout>
  );
}
