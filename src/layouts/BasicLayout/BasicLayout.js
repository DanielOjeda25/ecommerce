import React from 'react';
import { Container } from 'react-bootstrap';
import classNames from 'classnames';
import { styles } from './BasicLayout.styles';
import Topbar from '@/components/Auth/Layout/Topbar';
export default function BasicLayout({
  children,
  isOpenSearch = false,
  isContainer = false,
  relative = false,
}) {
  return (
    <div className="bg-stone-900">
      <Topbar isOpenSearch={isOpenSearch} />
      <Container fluid>
        <div
          className={classNames({
            [styles.relative]: relative,
          })}
        >
          {isContainer ? <Container>{children}</Container> : children}
        </div>
      </Container>
    </div>
  );
}
