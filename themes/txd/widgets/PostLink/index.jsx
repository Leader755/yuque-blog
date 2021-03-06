import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

import { formatDate } from '../../utils/format';

import './index.scss';

export default function PostLink(props) {
  const { post, index } = props;
  const publishDate = formatDate(post.published_at);
  const viewUrl = `/${post.slug}`;
  const overlayClassName = classNames('post-link__overlay', `bg-c-${index % 10 + 1}`);
  return (
    <Link key={index} className="post-link" to={viewUrl}>
      <div className={overlayClassName} />
      <p className="post-link__date">{publishDate}</p>
      <div className="post-link__title-bar">
        <h1 className="post-link__title">{post.title}</h1>
        <h2 className="post-link__subtitle">{post.meta_description}</h2>
      </div>
    </Link>
  );
}
