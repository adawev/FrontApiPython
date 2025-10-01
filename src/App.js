import { useForm } from "react-hook-form"
function App() {
    const {handleSubmit, register} = useForm()

    const onSubmitForm = async (data) => {
        console.log(data)

        try {
            const response = await fetch("http://127.0.0.1:4200/api/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });

            const result = await response.json();
            console.log("Server response:", result);
            alert(result.message);
        } catch (error) {
            console.error("Error:", error);
        }
    }

    return (
        <div className="App">
            <div className="container">
                <form id={"formUserSubmit"} onSubmit={handleSubmit(onSubmitForm)} className={'form-control'} style={{width:'40%', margin: '30px auto'}}>
                    <label htmlFor="firstNameUser">First Name</label>
                    <input type="text" placeholder={'Enter first name...'} className={'form-control'}
                           id={'firstNameUser'} {...register("firstName")}/>
                    <label htmlFor="lastNameUser">Last Name</label>
                    <input type="text" placeholder={'Enter last name...'} className={'form-control'}
                           id={'lastNameUser'} {...register("lastName")}/>
                    <label htmlFor="phoneUser">Phone</label>
                    <input type="text" placeholder={'Enter phone...'} className={'form-control'} id={'phoneUser'} {...register("phone")}/>
                    <br/>
                    <button type={"submit"} form={'formUserSubmit'} className={'btn btn-success'} style={{width: '100%'}}>Save</button>
                </form>
            </div>
        </div>
    );
}

export default App;
