

const InstaMart = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-purple-600 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="md:order-2">
            <img
              src="/path-to-your-image.png"
              alt="InstaMart App"
              className="w-full h-auto"
            />
          </div>
          <div className="md:order-1">
            <h2 className="text-4xl font-semibold text-white mb-4">
              Discover InstaMart
            </h2>
            <p className="text-lg text-white mb-6">
              Shop effortlessly with InstaMart - your one-stop solution for all your shopping needs. Browse thousands of products and have them delivered to your doorstep.
            </p>
            <a
              href="link-to-your-playstore-page"
              className="inline-block bg-white text-purple-600 hover:bg-purple-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition duration-300"
            >
              Download Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstaMart;
