import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = ({ icon, contact }) => {
  return (
    <div className="flex flex-row gap-3 text-white items-center">
      <FontAwesomeIcon icon={icon} size="lg" color="#B694EC" />
      <p className="text-lg sm:text-xl lg:text-2xl">{contact}</p>
    </div>
  );
};

export default Contact;
