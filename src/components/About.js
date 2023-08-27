import background from "./img/bacground.jpg";

const AboutUs = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-semibold mb-4">About Us</h1>
        <p className="text-gray-600 mb-8">
          Welcome to FoodDeliver! We are passionate about delivering delicious
          and fresh meals right to your doorstep.
        </p>
        <div className="flex items-center mb-4">
          <img
            src={background} // Replace with your image path
            alt="About Us"
            className="w-24 h-24 rounded-full mr-4"
          />
          <div>
            <h2 className="text-xl font-semibold">Our Team</h2>
            <p className="text-gray-600">
              We're a team of food enthusiasts dedicated to bringing you the
              best culinary experiences.
            </p>
          </div>
        </div>
        <p className="text-gray-600 mb-8">
          Our mission is to provide you with a seamless food delivery
          experience. From selecting the finest ingredients to delivering
          mouthwatering dishes, we strive to exceed your expectations.
        </p>
        <p className="text-gray-600">
          Join us in our culinary journey and discover the joy of exceptional
          food delivered right to your doorstep.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
