import { FC } from "react";

import styles from "./not-found.module.scss";

const { notFound, notFound__title, notFound__description } = styles;

const NotFoundPage: FC = () => {
  return (
    <div className={notFound}>
      <h1 className={notFound__title}>404</h1>
      <p className={notFound__description}>Sorry, Page Not Found</p>
    </div>
  );
};

export default NotFoundPage;
