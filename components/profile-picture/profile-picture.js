import Image from 'next/Image';

import styles from './profile-picture.module.css'

const ProfilePicture = () => (
    <Image
        src="/images/profile.jpg"
        height={280}
        width={280}
        alt="Janis Krasemann"
        className={styles.profile}
    />
);

export default ProfilePicture;
