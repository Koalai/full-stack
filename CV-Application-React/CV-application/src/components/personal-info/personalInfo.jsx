import FormTemplate from "../FormTemplate/FormTemplate";

const fields= [
    {name: 'fullName', type:'text', label: 'Full Name', placeholder: 'Enter your full name', required: true},
    {name: 'email', type:'email', label: 'Email', placeholder: 'Enter your email address', required: true},
    {name: 'phone', type:'tel', label: 'Phone Number', placeholder: 'Enter your phone number', required: true},
    {name: 'address', type:'text', label: 'Address', placeholder: 'Enter your Address', required: true},
    {name: 'birthDate', type:'date', label: 'Date of Birth', placeholder: 'Select your date of birth', required: true},
    {name: 'linkedIn', type:'url', label: 'LinkedIn Profile', placeholder: 'Enter your LinkedIn profile URL'}
];


function PersonalInfo({ personalInfo, setPersonalInfo }) {
   
    const handleSubmit = (data) => {
        setPersonalInfo(data);
    };
    
    return (
        <div className="personal-info">
            <FormTemplate
                fields={fields}
                data={personalInfo}
                setData={setPersonalInfo}
                onSubmit={handleSubmit}
            />
        </div>
    );
}

export default PersonalInfo;