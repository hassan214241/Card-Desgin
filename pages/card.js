import Image from 'next/image';
import card1 from "../asats/card2.jpg";

function card() {
    return (
        <div className=" flex items-center justify-center py-24   mt-20 px-20  bg-blue-500 w-full h-full ">
            <figure className="md:flex bg-gray-100 rounded-xl p-8 md:p-0 " >
                <Image src={card1} alt="" width="384" height="512" className="w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto lg:rounded-xl" />
                <div className="pt-6 md:p-8 text-center md:text-left space-y-4">

                    <blockquote>

                        <p class=" font-semibold justify-center items-center">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit expedita alias, quasi unde, dolor a voluptates autem eveniet voluptatem natus magnam mollitia nemo ducimus ratione quod illo excepturi? Nihil, nobis!
                            <br />
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum maxime est officia et voluptatem. Quis exercitationem cum culpa quia quod odio possimus ut fugiat perspiciatis assumenda! Ut, provident enim. Tempora!
                        </p>


                    </blockquote>
                    <figcaption className="font-medium">
                        <div class="text-cyan-600">
                            Hassan Farooq
                        </div>
                        <div className="text-gray-500">
                            Software Engineer
                        </div>
                        <p class="text-sm text-gray-500">
                            Free shipping on all continental US orders.
                        </p>
                    </figcaption>

                </div>
            </figure>
        </div>

    )
}

export default card;