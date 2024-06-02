import React from "react";

const Team = () => {
  return (
    <section id="our-team" classname="bg-gray-100 py-32 mt-10 mb-10">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-8 text-primary">
          Meet Our  Legal Team
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/*Team meamber 1 */}
          <div>
            <a href="#" className="group relative block bg-black">
              <img
                alt=""
                //src="https://images.pexels.com/photos/12991914/pexels-photo-12991914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                src="https://images.pexels.com/photos/4183516/pexels-photo-4183516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
              />

              <div className="relative p-4 sm:p-6 lg:p-8">
                <p className="text-sm font-medium uppercase tracking-widest text-green-300">
                  Partner
                </p>

                <p className="text-xl font-bold text-white sm:text-2xl">
                Miglena Paul
                </p>

                <div className="mt-32 sm:mt-48 lg:mt-64">
                  <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-sm text-white">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Omnis perferendis hic asperiores quibusdam quidem
                      voluptates doloremque reiciendis nostrum harum.
                      Repudiandae?
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>
          {/*Team meamber 2 */}
          <div>
            <a href="#" className="group relative block bg-black">
              <img
                alt=""
                src="https://images.pexels.com/photos/18809829/pexels-photo-18809829/free-photo-of-portrait-of-a-woman-smiling.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
              />

              <div className="relative p-4 sm:p-6 lg:p-8">
                <p className="text-sm font-medium uppercase tracking-widest text-green-300">
                Associate
                </p>

                <p className="text-xl font-bold text-white sm:text-2xl">
                Eileen Nama
                </p>

                <div className="mt-32 sm:mt-48 lg:mt-64">
                  <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-sm text-white">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Omnis perferendis hic asperiores quibusdam quidem
                      voluptates doloremque reiciendis nostrum harum.
                      Repudiandae?
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>
          {/*Team meamber 3 */}
          <div>
            <a href="#" className="group relative block bg-black">
              <img
                alt=""
                src="https://images.pexels.com/photos/8276703/pexels-photo-8276703.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
              />

              <div className="relative p-4 sm:p-6 lg:p-8">
                <p className="text-sm font-medium uppercase tracking-widest text-green-300">
                  Partner
                </p>

                <p className="text-xl font-bold text-white sm:text-2xl">
                Michaelson Rees
                </p>

                <div className="mt-32 sm:mt-48 lg:mt-64">
                  <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-sm text-white">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Omnis perferendis hic asperiores quibusdam quidem
                      voluptates doloremque reiciendis nostrum harum.
                      Repudiandae?
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>
          {/*Team meamber 4 */}
          <div>
            <a href="#" className="group relative block bg-black">
              <img
                alt=""
                //src="https://images.pexels.com/photos/16306778/pexels-photo-16306778/free-photo-of-portrait-of-a-smiling-woman-in-a-shirt.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                src="https://images.pexels.com/photos/14840190/pexels-photo-14840190.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
              />

              <div className="relative p-4 sm:p-6 lg:p-8">
                <p className="text-sm font-medium uppercase tracking-widest text-green-300">
                Deputy Manager
                </p>

                <p className="text-xl font-bold text-white sm:text-2xl">
                  Olivia Pope
                </p>

                <div className="mt-32 sm:mt-48 lg:mt-64">
                  <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-sm text-white">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Omnis perferendis hic asperiores quibusdam quidem
                      voluptates doloremque reiciendis nostrum harum.
                      Repudiandae?
                    </p>
                  </div>
                </div>
              </div>
            </a>
            </div>

        </div>
      </div>
    </section>
  );
};

export default Team;
