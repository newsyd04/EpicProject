import React from 'react';
import Nav from './Nav';

interface FormElements extends HTMLFormControlsCollection {
  english: HTMLInputElement;
  irish: HTMLInputElement;
  spanish: HTMLInputElement;
}

interface FormElement extends HTMLFormElement {
  readonly elements: FormElements
}

function Documentation() {
    const handleSubmit = (e: React.FormEvent<FormElement>) => {
        e.preventDefault(); // Prevent default form submission behavior

        const target = e.currentTarget; // More specific target typing
        const formData = new FormData(target);
        const formProps: { [key: string]: FormDataEntryValue | boolean } = Object.fromEntries(formData);

        // Explicitly check checkbox values
        formProps.english = target.elements.english.checked;
        formProps.irish = target.elements.irish.checked;
        formProps.spanish = target.elements.spanish.checked;

        // Convert form data to a string for the text file
        const fileContent = Object.keys(formProps).map(key => `${key}: ${formProps[key]}`).join("\n");

        // Create a blob with the form data
        const blob = new Blob([fileContent], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);

        // Create a link and trigger the download
        const link = document.createElement('a');
        link.href = url;
        link.download = 'FormData.txt';
        document.body.appendChild(link); // Required for Firefox
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url); // Clean up
    };

    return (
        <>
            <div className="container">
            <Nav />
                <div className="container Doc-Styling">
                    <article>
                        <h2>Profile Information Form</h2>  
                        <form onSubmit={handleSubmit}>
                            <fieldset>
                                <legend>Language preferences:</legend>
                                <input type="checkbox" id="english" name="english"/>
                                <label htmlFor="english">English</label>
                                <input type="checkbox" id="irish" name="irish" />
                                <label htmlFor="irish">Irish</label>
                                <input type="checkbox" id="spanish" name="spanish" />
                                <label htmlFor="spanish">Spanish</label>
                            </fieldset>
                            <div className='grid'>
                                <input type="text" name="FirstName" placeholder="First Name" aria-label="Text" />
                                <input type="text" name="LastName" placeholder="Last Name" aria-label="Text" />
                            </div>
                            <div className="grid">
                                <input type="email" name="email" placeholder="Email" aria-label="Email" autoComplete="email" />
                                <input type="number" name="PhoneNumber" placeholder="Phone Number" aria-label="Number" />
                            </div>
                            <input type="password" name="password" placeholder="Password" aria-label="Password" />

                            <input type="file" />
                            <input
                                type="submit"
                                value="Upload/Download Copy of Form Data"
                            />
                        </form>
                    </article>
                </div>
            </div>
        </>
    );
}

export default Documentation;
