import React from "react";
import doctor1 from "@images/doctor-with-his-arms-crossed-white-background.jpg";
import doctor2 from "@images/doctor-with-his-arms-crossed-white-background.jpg";
import doctor3 from "@images/doctor-with-his-arms-crossed-white-background.jpg";

const Doctors = () => {
  const doctors = [
    {
      name: "Dr. John Doe",
      specialization: "Cardiologist",
      image: doctor1,
    },
    {
      name: "Dr. Jane Smith",
      specialization: "Pediatrician",
      image: doctor2,
    },
    {
      name: "Dr. Alice Johnson",
      specialization: "Dermatologist",
      image: doctor3,
    },
    {
      name: "Dr. Bob Williams",
      specialization: "Orthopedic",
      image: doctor1,
    },
  ];

  return (
    <section className="py-20 text-center bg-doctor bg-cover">
      <h2 className=" text-base lg:text-4xl font-semibold mb-6">
        Meet Our Dedicated Team
      </h2>
      <p className="mb-12 text-xs px-2">
        It is a long established fact that a reader will be distracted...
      </p>
      <div className="flex flex-wrap justify-center gap-8 px-2 ">
        {doctors.map((doctor, index) => (
          <div
            key={index}
            className="relative w-1/4 sm:w-1/2 md:w-1/3 lg:w-1/4 max-w-[200px] flex-grow-0 flex-shrink-0"
          >
            <img
              src={doctor.image}
              alt={`Doctor ${index + 1}`}
              className="w-full h-auto rounded-full shadow-lg transition-opacity duration-300 max-h-[200px] object-cover"
            />
            {/* Doctor Details - Shown on hover */}
            <div className="absolute inset-0  bg-black bg-opacity-70 rounded-full flex flex-col items-center justify-center text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
              <h3 className=" text-[8px] xssm:text-[9px] ssm:text-[11px] sm:text-base font-semibold">
                {doctor.name}
              </h3>
              <p className="text-[8px] xssm:text-[9px]  ssm:text-[11px] sm:text-base">
                {doctor.specialization}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Doctors;
