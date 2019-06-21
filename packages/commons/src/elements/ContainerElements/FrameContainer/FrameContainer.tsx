import React from 'react';
import { MessagePanel } from '../MessagePanel';
import styles from './FrameContainer.module.scss';
import { IFrameContainerProps } from './IFrameContainerProps';

const { Fabric, Spinner, SpinnerSize } = require('office-ui-fabric-react');

const { mergeStyles } = require('@uifabric/merge-styles');

const wrapperClass = mergeStyles({
  padding: 1,
  selectors: {
    '& > *': {
      margin: '10px 0',
    },
  },
});

const loaderClass = mergeStyles({
  left: '50%',
  position: 'fixed',
  top: '50%',
  transform: 'translate(-50%, -50%)',
});

function FrameContainer(props: IFrameContainerProps) {
  return (
    <div className={`${styles.frameContainer} ${styles['ms-Grid']}`}>
      <div className={`${styles['ms-Grid-col']} ${styles['ms-sm12']}`}>
        <h3 className={styles.frameContainer__title}>{props.title}</h3>
      </div>
      {props.message && props.message.length ? <MessagePanel message={props.message} /> : null}
      <div className={`${styles['ms-Grid-col']} ${styles['ms-sm12']}`}>
        <div className={styles.frameContainer__children}>
          <Fabric className={wrapperClass}>
            {props.isLoading !== undefined && props.isLoading ? (
              <>
                <Spinner
                  className={loaderClass}
                  size={SpinnerSize.large}
                  label={props.loadingLabel ? props.loadingLabel : 'Loading, please wait...'}
                  labelPosition='right'
                  ariaLive={props.loadingLabel ? props.loadingLabel : 'Loading, please wait...'}
                />
              </>
            ) : (
              props.children
            )}
          </Fabric>
        </div>
      </div>
    </div>
  );
}

export default FrameContainer;
