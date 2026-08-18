import { Link } from "react-router-dom";

const base =
  "inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3 text-base font-medium tracking-wide transition-all duration-300 focus-visible:outline-none";

const variants = {
  primary: "bg-white text-black hover:bg-white/85",
  outline: "border border-white/50 text-white hover:border-white hover:bg-white/5",
  ghost: "text-white/80 hover:text-white",
};

export default function Button({
  children,
  to,
  href,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
  ...rest
}) {
  const classes = `${base} ${variants[variant] || variants.primary} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <button type={type} onClick={onClick} className={classes} {...rest}>
      {children}
    </button>
  );
}
