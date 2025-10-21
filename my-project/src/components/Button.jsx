const Button = ({ label, iconURL }) => {
  return (
           <button classname="flex items-center justify-center 
                              gap-2 px-8 py-5 rounded-full 
                              bg-coral-red text-white 
                              font-montserrat text-lg leading-none">
                    

                    {label}
                    {iconURL && (
                         <img
                              src={iconURL}
                              alt="arrow right icon"
                              className="ml-2 rounded-full w-10 h-10"
                         />
                    )}


       </button>
  );
}

export default Button