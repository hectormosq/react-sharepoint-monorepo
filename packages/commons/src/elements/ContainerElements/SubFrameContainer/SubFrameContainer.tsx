import React from 'react';
import { ISubFrameContainerProps } from './ISubFrameContainerProps';
import styles from './SubFrameContainer.module.scss';

function SubFrameContainer({ subtitle, children }: ISubFrameContainerProps) {
  const renderSubtitle = subtitle ? (
    <div className={`${styles['ms-Grid-col']} ${styles.noPadding} ${styles['ms-sm12']}`}>
      <h4 className={styles.subFrameContainer__subtitle}>{subtitle}</h4>
    </div>
  ) : '';

  return (
    <div className={`${styles.subFrameContainer} ${styles['ms-Grid']}`}>
      {renderSubtitle}
      <div className={`${styles['ms-Grid-col']} ${styles['ms-sm12']} ${styles.noPadding}`}>
        {children}
      </div>
    </div>
  );
}

export default SubFrameContainer;
