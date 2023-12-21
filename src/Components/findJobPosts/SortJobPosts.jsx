import {useEffect, useState} from "react";

export const SortJobPosts = ({getData}) => {
    const [filledData, setFilledData] = useState(
        () => {
            const data = new FormData();

            data.append('REMOTE', 'REMOTE')
            data.append('HYBRID', 'HYBRID')
            data.append('ON_SITE', 'ON_SITE')
            data.append('FULL_TIME', 'FULL_TIME')
            data.append('PART_TIME', 'PART_TIME')
            data.append('CONTRACT', 'CONTRACT')
            data.append('TEMPORARY', 'TEMPORARY')
            data.append('ENTRY_LEVEL', 'ENTRY_LEVEL')
            data.append('JUNIOR_LEVEL', 'JUNIOR_LEVEL')
            data.append('MID_LEVEL', 'MID_LEVEL')
            data.append('SENIOR_LEVEL', 'SENIOR_LEVEL')
            data.append('EXPERT_LEVEL', 'EXPERT_LEVEL')

            return data;
        }
    )


    const [formData, setFormData] = useState({
        REMOTE: "",
        HYBRID: "",
        ON_SITE: "",
        FULL_TIME: "",
        PART_TIME: "",
        CONTRACT: "",
        TEMPORARY: "",
        ENTRY_LEVEL: "",
        JUNIOR_LEVEL: "",
        MID_LEVEL: "",
        SENIOR_LEVEL: "",
        EXPERT_LEVEL: ""
    })

    const data = new FormData()

    const handleChange = (e) => {
        if (e.target.checked === true) {
            setFormData({...formData, [e.target.name]: e.target.name})
        } else {
            setFormData({...formData, [e.target.name]: ""})
        }
    }

    useEffect(() => {
        const handleSubmit = () => {

            data.append('REMOTE', `${formData.REMOTE}`)
            data.append('HYBRID', `${formData.HYBRID}`)
            data.append('ON_SITE', `${formData.ON_SITE}`)
            data.append('FULL_TIME', `${formData.FULL_TIME}`)
            data.append('PART_TIME', `${formData.PART_TIME}`)
            data.append('CONTRACT', `${formData.CONTRACT}`)
            data.append('TEMPORARY', `${formData.TEMPORARY}`)
            data.append('ENTRY_LEVEL', `${formData.ENTRY_LEVEL}`)
            data.append('JUNIOR_LEVEL', `${formData.JUNIOR_LEVEL}`)
            data.append('MID_LEVEL', `${formData.MID_LEVEL}`)
            data.append('SENIOR_LEVEL', `${formData.SENIOR_LEVEL}`)
            data.append('EXPERT_LEVEL', `${formData.EXPERT_LEVEL}`)

            if (
                data.get('REMOTE').length === 0 &&
                data.get('HYBRID').length === 0 &&
                data.get('ON_SITE').length === 0 &&
                data.get('FULL_TIME').length === 0 &&
                data.get('PART_TIME').length === 0 &&
                data.get('CONTRACT').length === 0 &&
                data.get('TEMPORARY').length === 0 &&
                data.get('ENTRY_LEVEL').length === 0 &&
                data.get('JUNIOR_LEVEL').length === 0 &&
                data.get('MID_LEVEL').length === 0 &&
                data.get('SENIOR_LEVEL').length === 0 &&
                data.get('EXPERT_LEVEL').length === 0
            ) {
                getData(filledData)
            } else {
                getData(data);
            }
        }

        handleSubmit();
    }, [formData]);

    return (
        <form className="items-stretch h-fit flex flex-col sticky top-[6rem] pb-5">
            <div className="text-zinc-500 text-base ml-5 leading-6 tracking-normal w-full">
                Job Type
            </div>

            {renderCheckbox("REMOTE","Remote",formData.REMOTE, handleChange)}
            {renderCheckbox("HYBRID","Hybrid",formData.HYBRID, handleChange)}
            {renderCheckbox("ON_SITE","On Site",formData.ON_SITE, handleChange)}

            <div className="border-b mt-8 ml-5 w-40 my-4"></div>

            <div className="text-zinc-500 text-base ml-5 leading-6 tracking-normal w-full mt-6 max-md:mt-10">
                Employment type
            </div>

            {renderCheckbox("FULL_TIME","Full Time",formData.FULL_TIME, handleChange)}
            {renderCheckbox("PART_TIME","Part Time",formData.PART_TIME, handleChange)}
            {renderCheckbox("CONTRACT","Contract",formData.CONTRACT, handleChange)}
            {renderCheckbox("TEMPORARY","Temporary",formData.TEMPORARY, handleChange)}


            <div className="border-b mt-8 ml-5 w-40 my-4"></div>

            <div className="text-zinc-500 text-base ml-5 leading-6 tracking-normal w-full mt-6 max-md:mt-10">
                Experience level
            </div>

            {renderCheckbox("ENTRY_LEVEL","Entry Level", formData.ENTRY_LEVEL, handleChange)}
            {renderCheckbox("JUNIOR_LEVEL","Junior Level", formData.JUNIOR_LEVEL, handleChange)}
            {renderCheckbox("MID_LEVEL","Mid Level", formData.MID_LEVEL, handleChange)}
            {renderCheckbox("SENIOR_LEVEL","Senior Level", formData.SENIOR_LEVEL, handleChange)}
            {renderCheckbox("EXPERT_LEVEL","Expert Level", formData.EXPERT_LEVEL, handleChange)}
        </form>
    );
};

const renderCheckbox = (inputName, label, value, sortJobs) => (
    <div className="items-stretch flex w-full justify-between gap-2 mt-2 px-5">
        <input
            type="checkbox"
            name={inputName}
            value={value}
            onChange={sortJobs}
            className="aspect-[0.75] object-contain object-center w-[18px] overflow-hidden shrink-0 max-w-full bg-blue-500"
        />
        <div className="text-neutral-800 text-base font-medium leading-6 tracking-normal grow whitespace-nowrap self-start">
            {label}
        </div>
    </div>
);
