// components/Button.js
import PropTypes from 'prop-types';
import Link from 'next/link';

const Button = ({ href, onClick, children, className, variant = 'solid', ...props }) => {
  const baseStyle = 'mt-14 px-16 py-6 font-semibold rounded-lg shadow-md transition-transform duration-300';

  const variantStyles = {
    solid: 'bg-button-blue text-white hover:bg-button-hover-blue',
    transparent: 'bg-transparent text-black border border-black hover:bg-transparent hover:text-black hover:border-black',
  };

  const combinedClassName = `${baseStyle} ${variantStyles[variant]} ${className} transform hover:translate-y-[-4px]`;

  if (href) {
    return (
      <Link href={href} className={combinedClassName} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedClassName} {...props}>
      {children}
    </button>
  );
};

Button.propTypes = {
  href: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['solid', 'transparent']),
};

export default Button;
