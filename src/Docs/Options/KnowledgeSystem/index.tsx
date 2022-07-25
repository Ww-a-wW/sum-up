import React from 'react';
import { Image, Space } from 'antd';
import styles from './index.less';

const KnowledgeSystem: React.FC = (props) => {
  const defaultPath = '/sum-up';
  const baseUrl = process.env.NODE_ENV === 'production' ? defaultPath : '';
  const img1 = `${baseUrl}/imgs/img01.jpg`;
  const img2 = `${baseUrl}/imgs/img02.jpg`;
  const img3 = `${baseUrl}/imgs/img03.jpg`;
  const img4 = `${baseUrl}/imgs/img04.jpg`;
  const img5 = `${baseUrl}/imgs/img05.jpg`;
  const img6 = `${baseUrl}/imgs/img06.jpg`;
  const img7 = `${baseUrl}/imgs/img07.jpg`;
  const img8 = `${baseUrl}/imgs/img08.jpg`;
  const img9 = `${baseUrl}/imgs/img09.jpg`;
  return (
    <Space className={styles.content}>
      <Image src={img1} width={300} height={300} />
      <Image src={img2} width={300} height={300} />
      <Image src={img3} width={300} height={300} />
      <Image src={img4} width={300} height={300} />
      <Image src={img5} width={300} height={300} />
      <Image src={img6} width={300} height={300} />
      <Image src={img7} width={300} height={300} />
      <Image src={img8} width={300} height={300} />
      <Image src={img9} width={300} height={300} />
    </Space>
  );
};
export default KnowledgeSystem;
