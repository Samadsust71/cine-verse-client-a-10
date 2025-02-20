import { FaStar, FaHandshake, FaHeart, FaTv } from "react-icons/fa";

const ReasonsToJoin = () => {
  return (
    <section className="my-12">
      <h2 className="text-2xl lg:text-4xl font-bold dark:text-white mb-8 text-start border-l-4 border-[#FFB347] pl-2">More Reasons to Join</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Card 1 */}
        <div className="bg-base-200 dark:bg-[#1B262C] dark:text-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
          <h3 className="text-lg font-semibold mb-2 text-center">Stories tailored to your taste</h3>
          <FaStar className="text-red-500 text-3xl mx-auto" />
        </div>
        {/* Card 2 */}
        <div className="bg-base-200 dark:bg-[#1B262C] dark:text-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
          <h3 className="text-lg font-semibold mb-2 text-center">Cancel or switch plans anytime</h3>
          <FaHandshake className="text-pink-500 text-3xl mx-auto" />
        </div>
        {/* Card 3 */}
        <div className="bg-base-200 dark:bg-[#1B262C] dark:text-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
          <h3 className="text-lg font-semibold mb-2 text-center">A place just for kids</h3>
          <FaHeart className="text-red-600 text-3xl mx-auto" />
        </div>
        {/* Card 4 */}
        <div className="bg-base-200 dark:bg-[#1B262C] dark:text-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
          <h3 className="text-lg font-semibold mb-2 text-center">
            For your phone, tablet, laptop, and TV
          </h3>
          <FaTv className="text-purple-500 text-3xl mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default ReasonsToJoin;
