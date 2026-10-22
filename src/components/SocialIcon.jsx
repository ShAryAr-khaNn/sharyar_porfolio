import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';

const icons = {
  GitHub: FaGithub,
  LinkedIn: FaLinkedin,
  Instagram: FaInstagram,
  Facebook: FaFacebook,
};

function SocialIcon({ name, className = 'h-5 w-5' }) {
  const Icon = icons[name];
  return Icon ? <Icon className={className} aria-hidden="true" /> : null;
}

export default SocialIcon;
