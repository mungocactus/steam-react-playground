import React from 'react';

class Button extends React.Component {

}

export default ({ className, onClick, title }) => (
  <Button className={className} onClick={onClick}>{title}</Button>
)
