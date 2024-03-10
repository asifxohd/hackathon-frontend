import Footer from "../../components/Footer/footer";
import AbuseBanner from "../../components/abuse/abuseBanner";

import Navbar from "../../components/navbar/navbar";

const Abuse = () => {

    return (
        <>
            <AbuseBanner />
            <div>
                <div className="max-sm:flex-col-reverse flex mb-32 mt-24 md:mx-20 mx-3" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
                    <div className="max-sm:p-5 max-sm:mt-2 rounded-2xl md:w-2/3 w-full me-2 flex flex-col justify-center items-center">
                        <h1 className="text-center text-4xl font-serif">Future Faking</h1>
                        <p className="font-serif text-lg text-center  pt-4 px-8">Future faking is a manipulative tactic where the abuser deceives the victim by making promises or plans for the future that they have no intention of keeping. This creates a false sense of hope and commitment, keeping the victim emotionally invested in the relationship. For women, this can lead to feelings of betrayal, disappointment, and loss of trust. It perpetuates a cycle of dependency and manipulation, making it difficult for women to break free from abusive relationships and pursue a fulfilling future.</p>
                    </div>

                    <div className="rounded-lg md:w-1/3 w-full" data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine">
                        <img className="rounded-2xl w-full" src="https://mindfuldrawing.files.wordpress.com/2022/10/future-faked.jpg" alt="" />

                    </div>
                </div>
            </div>

            <div>

                <div className="max-sm:flex-col-reverse flex mb-32 mt-24 md:mx-20 mx-3" data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-out">
                    <div className="rounded-lg md:w-1/3 w-full">
                        <img className="rounded-2xl w-full bg-cover" src="/couple.jpeg" alt="" />

                    </div>

                    <div className="max-sm:p-5 max-sm:mt-2 rounded-2xl md:w-2/3 w-full me-2 flex flex-col justify-center items-center" data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1500">
                        <h1 className="text-center text-4xl font-serif">Love Bombing</h1>
                        <p className="font-serif text-lg text-center pt-4 px-8">In movies, we often see a romanticized version of a persistent man pursuing a woman who initially shows no interest. He goes to great lengths, often ignoring her boundaries, until she eventually falls for him. This unrealistic portrayal mirrors a phenomenon known as love bombing. Love bombing involves showering someone with excessive attention and affection to manipulate them. It's like smothering someone with love to control them emotionally. While it's commonly seen at the start of a relationship, it can happen at any stage, leaving the victim feeling overwhelmed and unsure.</p>
                    </div>
                </div>
            </div>

            <div>

                <div className="max-sm:flex-col-reverse flex mb-32 mt-24 md:mx-20 mx-3" data-aos="fade-left" data-aos-offset="300"
                    data-aos-easing="ease-in-sine">

                    <div className="max-sm:p-5 max-sm:mt-2 rounded-2xl md:w-2/3 w-full me-2 flex flex-col justify-center items-center" >
                        <h1 className="text-center text-4xl font-serif">Silence</h1>
                        <p className="font-serif text-lg text-center pt-4 px-8">Silence can be deafening, especially in intimate relationships where the silent treatment becomes a weapon of emotional manipulation. Often used as a form of control or punishment, prolonged periods of silence from a partner can inflict deep psychological wounds on women. This passive-aggressive tactic undermines their sense of worth, triggers anxiety, and fosters feelings of isolation. Recognizing and addressing this toxic behavior is essential for women to reclaim their emotional well-being and assert boundaries in their relationships.</p>
                    </div>

                    <div className="rounded-lg md:w-1/3 w-full" data-aos="fade-right" data-aos-offset="300"
                        data-aos-easing="ease-in-sine">

                        <img className="rounded-2xl w-full" src="https://images.theconversation.com/files/245311/original/file-20181113-194485-mahhiw.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip" alt="" />

                    </div>
                </div>
            </div>



            <div>
                <div className="abuse-header bg-orange-100 text-gray-800 py-10 px-6 rounded-lg shadow-transparent">

                    <h1 className="sm:text-3xl text-xl font-serif text-center font-semibold">How to Identify Psychological Abuse</h1>

                </div>

                <div className="py-5" >
                    <p className="md:px-32 text-center text-gray-600 font-serif font-bold py-5">
                        Outlined below are several typical indicators of psychological abuse. Should you recognize any of these signs in your own experiences, we encourage you to seek support from a trusted friend, family member, or professional. Remember, you are not facing this alone
                    </p>
                </div>
            </div>



            <div className="md:mx-20 mx-auto mb-12 shadow-sm bg-orange-100 rounded-3xl">

                <ul className="px-24 py-10 list-disc">
                    <li className="mb-4"><b>Manipulative Behavior:</b> Your partner constantly manipulates situations or emotions to control you.</li>
                    <li className="mb-4"><b>Gaslighting:</b> They deny your reality, making you doubt your perceptions and sanity.</li>
                    <li className="mb-4"><b>Isolation Tactics:</b> They isolate you from friends, family, or support networks, making you reliant solely on them.</li>
                    <li className="mb-4"><b>Constant Criticism:</b> They belittle you, criticize your actions, and undermine your self-esteem.</li>
                    <li className="mb-4"><b>Threats and Intimidation:</b> They use threats or intimidation to instill fear and maintain control.</li>
                    <li className="mb-4"><b>Blaming and Shifting Responsibility:</b> They blame you for their actions and shift responsibility for their behavior onto you.</li>
                    <li className="mb-4"><b>Withholding Affection or Support:</b> They withhold affection, emotional support, or financial resources as a means of control.</li>
                    <li className="mb-4"><b>Humiliation and Degradation:</b> They humiliate or degrade you in private or public settings to assert dominance.</li>
                    <li className="mb-4"><b>Monitoring and Surveillance:</b> They excessively monitor your activities, invade your privacy, or track your movements without consent.</li>
                    <li><b>Financial Control:</b> They control your finances, limiting your access to money or resources to maintain power over you.</li>
                </ul>
            </div>



            <Footer />

        </>


    );
}
export default Abuse