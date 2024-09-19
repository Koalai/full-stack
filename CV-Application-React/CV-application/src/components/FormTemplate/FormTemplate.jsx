import "./FormTemplate.css"

function FormTemplate({ fields, data, setData, onSubmit }) {
    
    const handleSubmit = (e) => {
        e.preventDefault(); //prevents the default form submission behavior (which would reload the page).
         // Perform required field validation manually
        const missingFields = fields.filter(field => field.required && !data[field.name]);
        if (missingFields.length > 0) {
            alert(`Please fill out the required fields: ${missingFields.map(field => field.label).join(", ")}`);
            return; // Prevent form submission
        }
        onSubmit(data);
    };

    const handleChange = (e) => {
        const {name, value} = e.target;

        // Phone number validation to allow only numbers
        if (name === 'phone' && !/^\d*$/.test(value)) {
            return; 
        }
        setData(prevData => ({
            ...prevData, [name]: value
        }));
    };
    
    return (
        <div className="form-container">
            <form onSubmit={handleSubmit} autoComplete="off" noValidate>
                {fields.map((field) => (
                    <div key={field.name} className="form-field">
                        <label htmlFor={field.name}>{field.label}</label>
                        {field.type === 'textarea' ? (
                            <textarea
                            //passing hardcoded data from common parent
                                id={field.name}
                                name={field.name}
                                value={data[field.name] || ''}
                                onChange={handleChange}
                                placeholder={field.placeholder}
                                required={field.required}
                                autoComplete="off"
                            />
                        ): field.type === 'date-month'? (
                            <input
                                type="month"
                                id={field.name}
                                name={field.name}
                                value={data[field.name] || ''}
                                onChange={handleChange}
                                required={field.required}
                                autoComplete="off"
                            />

                        ) : (
                            <input
                                type={field.type}
                                id={field.name}
                                name={field.name}
                                value={data[field.name] || ''}
                                onChange={handleChange}
                                placeholder={field.placeholder}
                                required={field.required}
                                autoComplete="new-password"
                            />
                        )}
                    
                    </div>
                ))}
                <button type="submit">Save</button>
            </form>
        </div>
    );
}


export default FormTemplate