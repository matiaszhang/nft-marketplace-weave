import { dummyTestimonial } from "../../../constant/dummyData";
import Testimonial from "../../Testimonial";

const Testimonials = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
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
