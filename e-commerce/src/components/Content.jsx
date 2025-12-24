export default function Content(){
    return (<div className="flex flex-col h-screen w-full">
      <header className="h-10 flex items-center px-4">
  {/* Left side */}
  <div className="text-xl text-gray-200  flex items-center ">
    <h3>ChatGPT 5.3 ∨</h3>
  </div>

  {/* Right side */}
  <div className="flex items-center gap-4 ml-auto">
    <h3 className="text-base">Share</h3>
    <h3 className="text-base">Add people</h3>
    <h3 className="text-base">Personalize</h3>
  </div>
</header>

<div className="flex-1 mx-20 flex flex-col bg-[#0f0f0f] ">
        <div className="flex-1 mx-w-3xl overflow-y-auto  text-base"><p className="mt-6 text-gray-400">Where should we begin?Artificial intelligence has emerged as a transformative force in contemporary education, reshaping how knowledge is delivered, assessed, and internalized. The integration of AI-driven tools into educational systems has enabled personalized learning experiences that adapt to individual student needs, abilities, and learning paces. Through data analytics and machine learning algorithms, educators can identify learning gaps more efficiently and design targeted interventions to improve academic outcomes. Moreover, AI-powered tutoring systems provide continuous academic support beyond traditional classroom hours, thereby enhancing learner autonomy and engagement. The automation of administrative tasks such as grading and attendance tracking has also allowed educators to focus more on pedagogy and student mentorship. However, the increasing reliance on artificial intelligence raises critical ethical concerns related to data privacy, algorithmic bias, and equity in access to technology. Students from under-resourced institutions may face disadvantages if AI tools are unevenly distributed, potentially widening existing educational inequalities. Additionally, the opacity of certain AI algorithms challenges transparency and accountability in educational decision-making. From a pedagogical perspective, there is concern that excessive automation may undermine critical thinking, creativity, and human interaction, which are central to holistic education. Consequently, the role of educators is evolving from primary knowledge transmitters to facilitators of higher-order learning skills. Policymakers and academic institutions must therefore establish robust regulatory frameworks to govern the ethical use of AI in education. Interdisciplinary collaboration among technologists, educators, and social scientists is essential to ensure responsible implementation. Furthermore, ongoing professional development is required to equip teachers with the competencies needed to effectively integrate AI into curricula. Empirical research remains crucial to evaluate the long-term impact of artificial intelligence on learning outcomes and cognitive development. In this context, artificial intelligence should be viewed not as a replacement for educators, but as a complementary tool that enhances instructional quality. When applied thoughtfully and inclusively, AI has the potential to foster more adaptive, efficient, and equitable educational environments.
</p></div>

        <div className="w-full  flex shadow-md rounded-full items-center gap-3 px-4 py-3 mb-2   ">
        <button className="text-3xl">+</button>
        <input className="flex-1  h-10 outline-none  focus:outline-none focus:ring-0 text-base leading-relaxed font-normal
 px-3  " placeholder="Ask anything"/>
        </div>
        <div className="text-sm text-gray-400 flex justify-center">ChatGPT can make mistakes. Check important info. See Cookie Preferences.</div>
    </div></div>)
}