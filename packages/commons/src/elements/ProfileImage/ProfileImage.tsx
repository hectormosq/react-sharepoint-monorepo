import React from 'react';
import { IProfileImageProps } from './IProfileImageProps';
import styles from './ProfileImage.module.scss';

function ProfileImage({ imageUrl, size }: IProfileImageProps) {
  const defaultImage = imageUrl ||  'https://www.w3schools.com/howto/img_avatar.png';
  const defaultSize = size || '150';

  return (
    <div className={styles.profileImage}>
      <img className={styles.profileImage__border} src={defaultImage} alt='' width={defaultSize}/>
    </div>
  );
}

export default ProfileImage;
