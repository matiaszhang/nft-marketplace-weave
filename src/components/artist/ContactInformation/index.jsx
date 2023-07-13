import { Contact, Input, Textarea, Typography, Button } from "components/elements";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin, faTelegram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";

const ContactInformation = () => {
  return (
    <div className="flex flex-row justify-between gap-[100px]">
      <div className="flex flex-col grow gap-5">
        <Typography className="mb-4" type="h5">
          Contact McCoy
        </Typography>
        <Input label="Email Address" placeholder="Enter your email address" />
        <Input label="Name" placeholder="Enter your full name" />
        <Textarea label="Message" placeholder="Enter the details of your information here" rows={4} />
      </div>
      <div className="flex flex-col gap-2 grow max-w-[550px]">
        <div className="flex flex-col gap-2">
          <Typography type="h4">Contact Information</Typography>
          <p className="text-2xl text-white/[0.7]">
            Fill up this form to reach out to McCoy and you will be contacted within 24 hours.
          </p>
        </div>
        <div className="flex flex-col gap-5 mt-6">
          <Contact icon={faPhone} contact="(480) 555-0103" />
          <Contact icon={faEnvelope} contact="hornShield@gmail.com" />
          <Contact icon={faLocationDot} contact="3517 W. Gray St. Utica, Pennsylvania 57867" />
        </div>
        <div className="flex flex-row gap-5 text-white mt-9 items-center">
          <FontAwesomeIcon icon={faFacebook} size="xl" className="cursor-pointer" />
          <FontAwesomeIcon icon={faInstagram} size="xl" className="cursor-pointer" />
          <FontAwesomeIcon icon={faLinkedin} size="xl" className="cursor-pointer" />
          <FontAwesomeIcon icon={faTelegram} size="xl" className="cursor-pointer" />
          <FontAwesomeIcon icon={faTwitter} size="xl" className="cursor-pointer" />
        </div>
        <Button className="mt-14" variant="primary">
          Edit Information
        </Button>
      </div>
    </div>
  );
};

export default ContactInformation;
