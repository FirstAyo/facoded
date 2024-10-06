
function SkillsProficiency() {

    const aquiredSkills = ['React JS', 'Javascript', 'HTML & CSS', 'Tailwind CSS', 'Next JS', 'Cyber Security']
    return (

        <>

            {/* <!-- skills proficiency section --> */}
            <div className="w-[95%] mx-auto pb-14">
                <h1 className="text-center font-mono text-2xl pb-10">Skills Proficiency</h1>

                {/* <!-- skills proficiency percentage section --> */}
                <div className="flex flex-col gap-7">

                    {aquiredSkills.map((aquiredSkill, index) => (
                        <div key={index} className="">
                            <p className="text-md font-semibold text-gray-700">{ aquiredSkill }</p>
                            <div className="w-[100%] bg-gray-300 h-2 rounded-full">
                            </div>
                            <div className="w-[82%] h-2 bg-red-900 rounded-full -mt-2"></div>
                        </div>
                    ))}

                </div>

            </div>

        </>
    )
}

export default SkillsProficiency
