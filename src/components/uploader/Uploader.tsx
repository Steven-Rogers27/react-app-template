import React, { useRef, } from 'react';
import { useTranslation, } from 'react-i18next';
import clipIcon from '../../assets/images/clip.svg';
import styles from './Uploader.module.css';

function Uploader() {
  const { t, } = useTranslation();
  const fileInputRef = useRef(null); 

  const fileInputTrigger = () => {

  };

  const onUploaderClick = () => {
    // this.fileInputTrigger();
  };

  return (
    <div>
      <div className={styles.uploaderBox}
        onClick={onUploaderClick}
      >
        <img
          src={clipIcon}
          className={styles.clipIcon}
        />
        <span
          className={styles.fileUploaderText}
        >上传附件</span>
      </div>
      <input
        ref={fileInputRef}
        type="file"
        id="fileUploader"
        className={styles.fileInput}
      />
    </div>
  );
}

export default Uploader;