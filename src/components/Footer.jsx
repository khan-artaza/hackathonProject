const Footer = () => {
  return (
    <footer className="bg-[#ED4C22] w-full h-[60vh] mt-12 relative md:h-[70vh]">
      
      <div className="flex font-semibold gap-4 text-sm text-white justify-center h-1/2 items-center text-center">
        <div className="flex flex-col gap-8 md:text-xl md:font-thin ">
          <p>Customer Help Centre</p>
          <p>Privacy Policy</p>
          <p>FAQs for Anarc</p>
          <p>Contact us</p>
        </div>

        <div className="flex flex-col gap-8 md:text-xl md:font-thin">
          <p>Terms of use</p>
          <p>Anarc User Manual</p>
          <p>Return/Cancellation Policy</p>
          <p>Improvements in Anarc</p>
        </div>
      </div>

      <div className="socials w-fit mx-auto" >
      <h2 className="text-white text-3xl tracking-tighter font-[roman] text-center md:text-5xl md:mt-8">Socials</h2>
      <i className="ri-instagram-line text-white text-2xl md:text-3xl ml-2"></i>
      <i className="ri-linkedin-fill text-white text-2xl md:text-3xl ml-2"></i>
      <i className="ri-youtube-fill text-white text-2xl md:text-3xl ml-2"></i>
      </div>
      <img className="w-40 absolute bottom-20 left-1/2 transform -translate-x-1/2 md:bottom-10" src="/images/logo.png" alt="" />
    </footer>
  );
};

export default Footer;
