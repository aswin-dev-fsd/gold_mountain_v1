'use client';

import React from 'react';

export interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
  type?: 'button' | 'submit' | 'reset';
  target?: string;
  rel?: string;
}

export const PrimaryButton: React.FC<ButtonProps> = ({
  children,
  href,
  onClick,
  className = '',
  style,
  type = 'button',
  target,
  rel,
}) => {
  const combinedClasses = `btn btn-primary ${className}`.trim();

  if (href) {
    return (
      <a href={href} className={combinedClasses} style={style} target={target} rel={rel}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClasses} style={style}>
      {children}
    </button>
  );
};

export const SecondaryButton: React.FC<ButtonProps> = ({
  children,
  href,
  onClick,
  className = '',
  style,
  type = 'button',
  target,
  rel,
}) => {
  const combinedClasses = `btn btn-secondary ${className}`.trim();

  if (href) {
    return (
      <a href={href} className={combinedClasses} style={style} target={target} rel={rel}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClasses} style={style}>
      {children}
    </button>
  );
};

export const WhatsAppCTA: React.FC<ButtonProps & { phone?: string; message?: string }> = ({
  children = 'Enquire on WhatsApp',
  phone = '919876543210',
  message = 'Hello, I would like to enquire about Gold Mountain Wellness Resort.',
  className = '',
  style,
}) => {
  const encodedMsg = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phone}?text=${encodedMsg}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn btn-whatsapp ${className}`.trim()}
      style={style}
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984 0 1.764.459 3.487 1.332 5.003l-1.416 5.17 5.295-1.387a9.96 9.96 0 004.779 1.216h.004c5.506 0 9.99-4.478 9.99-9.985 0-2.667-1.039-5.176-2.927-7.062a9.914 9.914 0 00-7.067-2.939zm0 1.664c4.588 0 8.324 3.731 8.325 8.32 0 2.224-.867 4.316-2.443 5.892-1.576 1.576-3.668 2.444-5.893 2.444h-.003a8.28 8.28 0 01-4.225-1.157l-.303-.18-3.14.821.838-3.058-.198-.314a8.277 8.277 0 01-1.282-4.448c0-4.589 3.737-8.32 8.324-8.32zm-3.6 4.382c-.207 0-.54.077-.822.385-.282.308-1.077 1.052-1.077 2.566 0 1.514 1.103 2.977 1.257 3.182.154.205 2.17 3.313 5.257 4.646.734.317 1.307.507 1.754.649.737.234 1.408.201 1.938.122.592-.089 1.821-.744 2.077-1.462.257-.718.257-1.334.18-1.463-.077-.128-.282-.205-.59-.359-.308-.154-1.821-.898-2.103-1.001-.282-.102-.487-.154-.693.154-.205.308-.795 1.001-.975 1.206-.18.205-.359.231-.667.077-.308-.154-1.301-.48-2.478-1.53-.916-.817-1.535-1.826-1.714-2.134-.18-.308-.019-.475.135-.628.138-.138.308-.359.462-.539.154-.18.205-.308.308-.513.103-.205.051-.385-.026-.539-.077-.154-.693-1.668-.949-2.284-.25-.6-.503-.518-.692-.527l-.59-.01z" />
      </svg>
      {children}
    </a>
  );
};

export const EnquiryCTA: React.FC<ButtonProps> = ({
  children = 'Send an Enquiry',
  href = '#enquire',
  onClick,
  className = '',
  style,
}) => {
  return (
    <PrimaryButton href={href} onClick={onClick} className={className} style={style}>
      {children}
    </PrimaryButton>
  );
};
