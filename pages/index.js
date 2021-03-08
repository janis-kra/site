import React from 'react';
import Head from 'next/head';
import TextTransition, { presets } from "react-text-transition";

import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import SocialMedia from '../components/social-media/social-media';

const SKILLS = [
  'Typescript',
  'HTML',
  'CSS',
  'Java',
  'React',
  'JavaScript',
  'Angular',
  'Spring',
  'Scrum',
  'AWS'
];

function getRandomSkill(skill) {
  const randomSkill = Math.floor(Math.random() * SKILLS.length)
  return randomSkill !== skill ? randomSkill : getRandomSkill(skill);
}

export default function Home() {
  const [skill, setSkill] = React.useState(0);
  React.useEffect(() => {
    const interval = setInterval(() => {
      setSkill(getRandomSkill(skill));
    }, 3000);
    return () => clearTimeout(interval);
  });

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          I develop software for <a href="https://www.enpit.de" target="_blank">@enpit</a>
          <br />
          using
          {" "}
          <TextTransition
            text={ SKILLS[skill] }
            springConfig={presets.stiff}
            inline={true}
          />
          {" "}
          and a lot of passion.
        </p>
      </section>
      <SocialMedia twitter github instagram/>
    </Layout>
  );
}
