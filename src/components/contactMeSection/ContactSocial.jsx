import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="https://www.linkedin.com/in/asavela-mbambani-7413a71b3/" Icon={FaLinkedinIn} />
      <SingleContactSocial link="https://github.com/A-CTRLL" Icon={FiGithub} />
      <SingleContactSocial link="" Icon={FaInstagram} />
    </div>
  );
};

export default ContactSocial;
