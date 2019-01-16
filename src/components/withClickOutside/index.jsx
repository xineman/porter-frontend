import React, { useEffect, useRef } from 'react';


const withClickOutside = WrappedComponent => (props) => {
  const ref = useRef(null);

  const handleClickOutside = ({ target }) => {
    if (ref.current && ref.current.root.current
      && !ref.current.root.current.contains(target)
      && ref.current.handleClickOutside) {
      ref.current.handleClickOutside();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return <WrappedComponent ref={ref} {...props} />;
};

export default withClickOutside;
