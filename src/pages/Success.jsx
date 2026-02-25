function Success() {
  return (
    <div className="h-screen flex items-center justify-center bg-green-100">
      <div className="bg-white p-10 rounded-2xl shadow-lg text-center">
        <h1 className="text-3xl font-bold text-green-600 mb-4">
          Login Successful 🎉
        </h1>
        <p className="text-gray-600 mb-6">
          Welcome back! You have logged in successfully.
        </p>

        <a
          href="/login"
          className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
        >
          Go Back
        </a>
      </div>
    </div>
  );
}

export default Success;