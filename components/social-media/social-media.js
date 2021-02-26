import { SocialIcon } from 'react-social-icons';

import styles from './social-media.module.css';

const SocialMedia = ({ twitter, instagram, github }) => (
  <div className={styles.social}>
    {twitter && <SocialIcon url="http://twitter.com/JanisKra" target="_blank" />}
    {instagram && <SocialIcon url="http://instagram.com/janis_kra" target="_blank" />}
    {github && <SocialIcon url="http://github.com/janis-kra" target="_blank" />}
  </div>
);

export default SocialMedia;
