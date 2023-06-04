import './CategoryDropdown.css';
import Dropdown from './Dropdown';

export default function CategoryDropdown(){
    const job_name_list = ['기획', '디자인','개발','마케팅', '예비창업가'];
    const information_name_list = ['컨퍼런스','멘토링','스터디','공모전'];
    return (
        <div className='category_dropdown'>
            <Dropdown class_name={"job_dropdown"} names={job_name_list}></Dropdown>
            <Dropdown class_name={"information_dropdown"} names={information_name_list}></Dropdown>
        </div>
    );
}