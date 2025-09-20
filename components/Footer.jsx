const Footer = () => {
  return (
    <footer className="text-center px-4 py-8 mt-8">
      <p className="text-gray-600">
        &copy; {new Date().getFullYear()} Unilag Aggregate Calculator. Not
        affiliated with the University of Lagos.
      </p>
      <p className="text-gray-600 mt-2">Made with ❤️ by Pelumi</p>
    </footer>
  );
};

export default Footer;
