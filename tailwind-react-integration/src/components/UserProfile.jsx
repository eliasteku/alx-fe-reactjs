// src/components/UserProfile.jsx

function UserProfile() {
  return (
    // Corrected container with responsive padding and max-width
    <div className="bg-gray-100 p-8 max-w-xs mx-auto my-20 rounded-lg shadow-lg transition-shadow duration-300 ease-in-out hover:shadow-xl sm:p-4 md:p-8 md:max-w-sm">
      
      <img
        src="https://via.placeholder.com/150"
        alt="User"
        className="rounded-full w-24 h-24 sm:w-36 sm:h-36 mx-auto transition-transform duration-300 ease-in-out hover:scale-110"
      />
      
      {/* Corrected heading with responsive font size */}
      <h1 className="text-lg text-blue-800 my-4 text-center transition-colors duration-300 ease-in-out hover:text-blue-500 sm:text-xl md:text-xl">
        John Doe
      </h1>
      
      <p className="text-gray-600 text-sm sm:text-base text-center">
        Developer at Example Co. Loves to write code and explore new technologies.
      </p>
    </div>
  );
}

export default UserProfile;