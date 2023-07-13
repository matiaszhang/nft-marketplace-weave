import { dummyTestimonial } from "../../../constant/dummyData";
import Testimonial from "../../Testimonial";

const Testimonials = () => {
  return (
    <div className="flex flex-row gap-5">
      {dummyTestimonial.map((testimonial, index) => (
        <Testimonial
          key={index}
          avatar={testimonial.avatar}
          name={testimonial.name}
          time={testimonial.time}
          rate={testimonial.rate}
          content={testimonial.content}
        />
      ))}
    </div>
  );
};

export default Testimonials;
